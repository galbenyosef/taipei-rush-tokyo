// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the taipei-rush-tokyo capture (PLAN §3/§5). TAIpei RUSH (東京狂飆,
// https://www.taipei-rush.app/tokyo/) is capture-class: a Vite/rolldown
// production build of an open-world Tokyo driving/racing game, served under the
// /tokyo/ sub-path by Vercel. §0.4 fork-over-mirror was checked on 2026-10-13 —
// the page and its JS reference no public source repo (see README), so the
// mirror stands. The capture is untouched; every source file is re-hashed
// against .upstream/manifest.json before it is rendered, so a drifted capture
// fails loudly instead of being silently re-derived.
//
// Layout: the capture preserves the served URL structure, so both derived
// layers MIRROR it — no __-flattening. A captured file at
// tokyo/assets/actors-Bnj6Q1ad.js becomes
//   readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js   (prettified twin)
//   src/tokyo/assets/actors-Bnj6Q1ad-NN.js            (statement-aligned slice)
// The inline twins of the entry document live at readable/tokyo/index-inline-N.*.
//
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input), formatted
//                        to a layout fixed point (1-2 passes, see formatFix) ->
//                        readable/<served path>.pretty.js
//   the capture *.css -> readable/<served path>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor bundles     -> readable/ + wholeFile section (vendor rule): the
//                        bundled three.js r186 chunk (assets/three-CC5Mkdpe.js),
//                        the Google Basis KTX2 transcoder (avatars/basis/…) and
//                        the Vercel Web Analytics platform script
//                        (_vercel/insights/script.js) are indexed whole.
//   app chunks         -> statement-aligned slices src/<served path>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module
//                        --check -` and round-trips byte-exact to its readable
//                        line range — through the recorded semantic rename map
//                        when the chunk has one (tools/engine/rename-layer.mjs
//                        applyRecordedMap; index-validated, no parser needed).
//   entry document     -> inline <script>/<style> scan (byte ranges + sha256):
//                        tokyo/index.html carries 9 inline <script> blocks and
//                        2 inline <style> blocks (the region-redirect shims,
//                        language gate, loader overlay + driver), each gets a
//                        wholeFile twin and an entry in readable/
//                        index-inline-map.json (exact range + sha256).
//   binary payloads    -> hashed notRendered records (bytes + sha256, no
//                        pretty pass) for every captured image/model/audio/
//                        font/data file (webp key art, glb avatars, woff2,
//                        .bin animation bank).
//   rename map         -> rename-map.json (recovered from the committed slices
//                        by tools/recover-scoped-map.mjs, curated by
//                        tools/apply-names.mjs + tools/names.json). The map is
//                        the input to this script: re-cut slices are the
//                        readable ranges with the recorded identifier spans
//                        substituted, so a re-derive is reproducible and the
//                        run fails loudly if the map addresses a token the
//                        readable no longer has.
//
// Non-standalone parts are indexed but never sliced (skipped sections): every
// app chunk's final `export {…}` table (the bindings live in the earlier
// slices; the table also carries the public names the campaign must NOT
// rename).
//
// usage: node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { applyRecordedMap, markerText, markerWords, sliceHeader } from "./engine/rename-layer.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-13";

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> derived twin name (served path kept, extension swapped)
const tagOf = (capRel) => capRel.replace(/\.(js|css)$/i, "");
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// write a derived file, creating its (served-path) directory chain
function writeDerived(rel, text) {
  const abs = path.join(proj, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, text);
}

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    "D:/repos/mirrors/metropolygonia/node_modules/prettier/index.mjs",
  ].filter(Boolean);
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  throw new Error(`pinned prettier ${PINNED} not found (set PRETTIER_MJS to its index.mjs)`);
}

// layout fixed point: prettier 3.9.6's member-chain layout is not idempotent on
// some optional-chain argument patterns (pass 1 breaks `t.modules\n  .get(...)`,
// pass 2 keeps it joined and splits the arguments), so the recorded method is
// "format to a fixed point (1 or 2 passes)" — the returned text is always a
// layout fixed point of the pinned version, and audit re-renders with the same
// method and requires byte-equality.
async function formatFix(prettier, text, parser) {
  const p1 = await prettier.format(text, { parser });
  const p2 = await prettier.format(p1, { parser });
  if (p2 === p1) return { text: p1, passes: 1 };
  const p3 = await prettier.format(p2, { parser });
  if (p3 !== p2) throw new Error(`prettier ${parser} has no layout fixed point in 3 passes`);
  return { text: p2, passes: 2 };
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── curated content-anchored classification (guards fail loudly) ────────
const WHOLE_FILE = {
  "tokyo/assets/three-CC5Mkdpe": {
    title:
      "tokyo/assets/three-CC5Mkdpe.js — bundled three.js r186 engine (vendor, whole-file, never sliced)",
    desc:
      "the bundled three.js r186 engine chunk — the vendored `__THREE__` revision registration (r186), WebGLRenderer, the math/geometry/material/texture/renderer machinery — third-party engine code, not app logic. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => t.includes("WebGLRenderer") && t.includes("__THREE__") && /REVISION\s*:\s*\(\)\s*=>\s*[`"']186[`"']/.test(t),
    what: "bundled three.js r186 engine",
  },
  "avatars/basis/basis_transcoder": {
    title:
      "avatars/basis/basis_transcoder.js — Google Basis KTX2 transcoder wrapper (vendor, whole-file, never sliced)",
    desc:
      "the Google Basis Universal KTX2 transcoder JS wrapper the avatars manifest names (`transcoder: \"basis/\"`) — Emscripten-style vendor glue for the WASM decoder, not app code. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => /var BASIS/.test(t) && /basis_transcoder|wasmBinary|\.wasm/.test(t),
    what: "Google Basis KTX2 transcoder wrapper",
  },
  "_vercel/insights/script": {
    title:
      "_vercel/insights/script.js — Vercel Web Analytics platform script (vendor, whole-file, never sliced)",
    desc:
      "the Vercel Web Analytics beacon script served by the platform at /_vercel/insights/script.js (it posts to the live-backend /_vercel/insights/view endpoint) — platform vendor code, not app logic. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => t.includes("/_vercel/insights") && /\(function|void 0|use strict/.test(t),
    what: "Vercel Web Analytics platform script",
  },
};

// ── recorded semantic rename map (optional input; see engine header) ────
function loadRenameMap() {
  const p = path.join(proj, "rename-map.json");
  if (!fs.existsSync(p)) return { files: {}, scoped: {}, present: false };
  const rm = JSON.parse(fs.readFileSync(p, "utf8"));
  return { files: rm.files || {}, scoped: rm.scoped || {}, present: true };
}
const recordsFor = (rm, srcRel) => {
  const files = rm.files[srcRel];
  const scoped = rm.scoped[srcRel];
  if (!files && !scoped) return null;
  return { files, scoped };
};
// The authored binding map (tools/names.json): chunk capture rel -> {old: new}
// for the chunk's top-level bindings. It is recorded into split-spec per source
// as `renameBindings` (only the rules that actually fired) so the reconstruction
// gates can rename the index-only export tables too — their local-side names
// reference the renamed bindings and are not part of any src slice.
function loadNames() {
  const p = path.join(here, "names.json");
  if (!fs.existsSync(p)) return {};
  const all = JSON.parse(fs.readFileSync(p, "utf8"));
  const out = {};
  for (const [k, v] of Object.entries(all)) if (!k.startsWith("__")) out[k] = v.renames || v;
  return out;
}

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  fs.mkdirSync(readableDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  const written = { readable: new Set(), src: new Set() };
  const renameMap = loadRenameMap();
  const names = { byCapture: loadNames() };
  let renamedFiles = 0;
  let renamedNames = 0;
  let renamedOccurrences = 0;

  const sources = [];
  const sections = [];
  const notRendered = [];
  let inlineFiles = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (the module graph's entry point), then the app chunks,
  // then the vendored engines — a reading order, not a build order
  const rank = (rel) => {
    if (/\/game-y-/.test(rel)) return 0;
    if (rel.includes("/three-CC5Mkdpe") || rel.includes("basis_transcoder") || rel.includes("insights/script")) return 2;
    return 1;
  };
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

  // ── 1) JS: vendor -> wholeFile; app -> statement-aligned slices ─────────
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "babel");
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    writeDerived(sourceFile, pretty);
    written.readable.add(sourceFile);
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    const cls = WHOLE_FILE[tag];

    if (cls) {
      const region = pretty;
      if (cls.guard && !cls.guard(region))
        throw new Error(`${rel}: whole-file guard failed — readable changed shape`);
      sections.push({
        file: `${tag}-vendor.js`,
        wholeFile: true,
        title: cls.title,
        desc: `Lines 1-${lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced",
        startLine: 1,
        endLine: lines.length,
        sourceFile,
      });
      sources.push({
        sourceFile,
        capture: rel,
        captureKind: "file",
        captureSha256: manifest.files[rel].sha256,
        captureBytes: buf.length,
        prettyLines: lines.length,
        prettyBytes: Buffer.byteLength(pretty, "utf8"),
        tag,
        slices: 0,
        derived: "readable only (vendor bundle, wholeFile)",
        what: cls.what,
      });
      console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile vendor)`);
      continue;
    }

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only. Public (exported) names in this table are the capture's own public API names and are never renamed by the campaign.`,
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [...specials, ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count }))];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileVendor = 0;
    let perFileRenamed = 0;
    const chunkSliceFiles = [];
    const targetsByOld = new Map(); // rename map: old name -> Set(targets) seen in this chunk's slices
    const noteTarget = (old, target) => {
      if (!targetsByOld.has(old)) targetsByOld.set(old, new Set());
      targetsByOld.get(old).add(target);
    };
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const file = `${tag}-${num}.js`;
        const rawBody = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const record = recordsFor(renameMap, file);
        const body = record ? applyRecordedMap(rawBody, record) : rawBody;
        if (record) {
          perFileRenamed++;
          for (const [old, target] of Object.entries(record.files || {})) noteTarget(old, target);
          for (const [old, hits] of Object.entries(record.scoped || {}))
            for (const [, target] of hits) noteTarget(old, target);
        }
        chunkSliceFiles.push(file);
        const ms = markerWords(body);
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const sliceText =
          sliceHeader({ tag, num, body, sourceFile, startLine: b.A, endLine: b.B }) + body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        writeDerived(path.posix.join("src", file), sliceText);
        written.src.add(path.posix.join("src", file));
        sections.push({
          file,
          title: `${tag} ${num} — ${markerWords(body)[0]?.[0] ?? "imports"}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.${record ? " Range re-cut through the recorded semantic rename map." : ""}`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.body}`,
          note: "whole-file region (build machinery/vendor rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
        });
      }
    }
    if (perFileRenamed) renamedFiles++;
    // the authored rules that actually fired (evidence: their targets appear in
    // this chunk's recorded map) — the chunk-level binding map recorded in the spec
    const authored = names.byCapture?.[rel] || {};
    const renameBindings = {};
    for (const [old, target] of Object.entries(authored)) {
      if (targetsByOld.get(old)?.has(target)) {
        renameBindings[old] = target;
        renamedNames++;
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: nn,
      renameBindings,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileRenamed ? ` (${perFileRenamed} through the recorded rename map)` : "") +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices${perFileRenamed ? `, ${perFileRenamed} renamed` : ""}, ${perFileVendor} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    writeDerived(sourceFile, pretty);
    written.readable.add(sourceFile);
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry document: inline <script>/<style> scan + twins ───────
  const inlineMapBlocks = [];
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : "babel";
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (parser === "script" && DATA_TYPES.has(type)) {
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        });
        continue;
      }
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const pretty = (await formatFix(prettier, b.text, parser)).text;
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      writeDerived(path.posix.join("readable", prettyFile), pretty);
      written.readable.add(path.posix.join("readable", prettyFile));
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      inlineMapBlocks.push({
        file: `readable/${prettyFile}`,
        source: rel,
        kind: b.kind,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        prettyFile: `readable/${prettyFile}`,
        prettyBytes: prettyBuf.length,
      });
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (entry inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
    }
  }
  if (inlineMapBlocks.length) {
    writeDerived(
      "readable/index-inline-map.json",
      JSON.stringify(
        {
          note:
            "byte ranges (into the captured entry document) + sha256 for every inline <script>/<style> content block, " +
            "with its readable twin; generated by tools/derive.mjs",
          blocks: inlineMapBlocks,
        },
        null,
        2,
      ) + "\n",
    );
    written.readable.add("readable/index-inline-map.json");
    console.log(`derive: wrote readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s))`);
  }

  // ── 3.5) non-code payloads: hashed notRendered records (no pretty pass) ─
  const KIND_OF = [
    [/\.(png|jpe?g|webp|gif|svg|avif|ico)$/i, "image"],
    [/\.(mp4|webm)$/i, "video"],
    [/\.(mp3|ogg|wav|m4a)$/i, "audio"],
    [/\.(woff2?|ttf|otf)$/i, "font"],
    [/\.(glb|gltf)$/i, "model"],
    [/\.(bin|data)$/i, "data"],
  ];
  for (const rel of captured) {
    const kind = KIND_OF.find(([re]) => re.test(rel))?.[1];
    if (!kind) continue;
    const buf = captureBytes(rel);
    notRendered.push({
      capture: rel,
      kind,
      bytes: buf.length,
      sha256: manifest.files[rel].sha256,
      rendered: false,
      reason: `${kind} payload — binary capture stays byte-exact under .upstream/manifest.json; recorded here hashed, no pretty pass`,
    });
  }

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  const walkFiles = (dir, base = dir, out = []) => {
    if (!fs.existsSync(dir)) return out;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walkFiles(p, base, out);
      else out.push(path.relative(base, p).split(path.sep).join("/"));
    }
    return out;
  };
  const removeEmptyDirs = (dir) => {
    if (!fs.existsSync(dir)) return;
    let empty = true;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        removeEmptyDirs(p);
        if (fs.existsSync(p) && fs.readdirSync(p).length === 0) fs.rmdirSync(p);
        else empty = false;
      } else empty = false;
    }
    return empty;
  };
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of walkFiles(dir)) {
      const relFull = path.posix.join(path.basename(dir), f);
      if (exts.test(f) && !keep.has(relFull)) {
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${relFull}`);
      }
    }
    removeEmptyDirs(dir);
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const recordedIndexedOccurrences = Object.values(renameMap.scoped).reduce(
    (n, m) => n + Object.values(m).reduce((k, hits) => k + hits.length, 0),
    0,
  );
  renamedOccurrences = recordedIndexedOccurrences;
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile\)$/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "taipei-rush-tokyo",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "TAIpei RUSH (東京狂飆, https://www.taipei-rush.app/tokyo/) is capture-class: a Vite/rolldown " +
      "production build of an open-world Tokyo driving/racing game (kart races, story missions, live " +
      "transit/stock feeds), served under the /tokyo/ sub-path by Vercel; the same origin also serves the " +
      "Taipei-rooted deploy at \"/\" whose shared files (avatars, root icons/title art, base-stripped " +
      "assets/… forms) are part of this capture because the Tokyo bundle carries matching literals. §0.4 " +
      "fork-over-mirror was checked on 2026-10-13 — the page and its JS reference no public source repo " +
      "(see README), so the mirror stands. Derived pipeline: capture → pinned prettier 3.9.6 (module API, " +
      "default options, formatted to a layout fixed point, 1-2 passes — never the CLI: it respects " +
      ".gitignore and can silently echo its input) → readable/<served path>.pretty.js|css per captured " +
      "JS/CSS file (the capture preserves the served URL structure, so the derived layers MIRROR it — " +
      "nested directories, no __-flattening; every pretty provably NOT byte-identical to its capture " +
      "source) → statement-aligned slices src/<served path>-NN.js of every APP chunk (top-level " +
      "declaration boundaries only, ~250-350 line windows; oversized single declarations stay whole) with " +
      "an exact 2-line provenance header. The identifier rename campaign (PLAN §5) is applied to the app " +
      "slices: top-level bindings and import aliases of a chunk get semantic names (tools/names.json), " +
      "written by tools/apply-names.mjs with a scope-aware token pass, recovered mechanically into " +
      "rename-map.json (tools/recover-scoped-map.mjs: token alignment, non-identifier positions identical) " +
      "and re-applied by tools/derive.mjs through that recorded map — `files` word-boundary records plus " +
      "`scoped` token-index records. Public API names (the export tables) and vendor identifiers keep " +
      "their served names; names that appear as object-literal/destructuring shorthands or as unaliased " +
      "exports are excluded (documented in README). Every slice parses standalone under `node " +
      "--input-type=module --check -` and round-trips byte-exact to its recorded readable line range " +
      "(through the recorded rename map where the chunk is renamed). Vendor rule — wholeFile sections, " +
      "never sliced: tokyo/assets/three-CC5Mkdpe.js (bundled three.js r186 engine: WebGLRenderer + " +
      "__THREE__ r186 revision registration), avatars/basis/basis_transcoder.js (Google Basis KTX2 " +
      "transcoder wrapper) and _vercel/insights/script.js (Vercel Web Analytics platform script) — all " +
      "content-anchored and guarded. Stylesheet rule — every captured .css is wholeFile. Non-standalone " +
      "parts are skipped sections, indexed but never sliced: every app chunk's final export {…} table " +
      "(the bindings live in the earlier slices; its public names are the capture's public API and are " +
      "never renamed). Inline <script>/<style> scan: tokyo/index.html carries 9 inline <script> blocks " +
      "(the cross-deploy region-redirect shims, the ?region= alias, the language gate, the loader " +
      "overlay + boot watchdog + key-art driver, and the error/save shims) and 2 inline <style> blocks " +
      "(the loader CSS and the loader-overlay CSS) — each gets a wholeFile twin plus a readable/" +
      "index-inline-map.json entry with its exact byte range and sha256. Binary payloads (webp key art, " +
      "glb avatars, woff2 font, .bin animation bank, png/svg icons) are hashed notRendered records (bytes " +
      "+ sha256), never prettified. The bundle also carries its own QA race harness " +
      "(?kart=<circuit>&kartmode=race, tokyo/assets/region-tokyo-*.js) — used only for the boot " +
      "evidence, never modifying the capture. Capture bytes are untouched by everything above; re-cut " +
      "with `node tools/derive.mjs` after any capture refresh. `node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, formatted to a layout fixed point (1 or 2 passes; prettier 3.9.6 member-chain layout is not idempotent on some optional-chain argument patterns — the recorded method is format-to-fixed-point, and audit re-renders with it) — never the CLI: it respects .gitignore and can silently echo its input",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} app chunk(s) sliced, ${vendorJsS.length} vendor wholeFile) + ` +
      `${cssSources.length} CSS pretties ` +
      `(incl. ${inlineMapBlocks.length} inline twin(s)); ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} app chunk(s) ` +
      `(served-path layout, <chunk>-NN.js); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `rename campaign: ${renamedFiles} app chunk(s) with recorded renames ` +
      `(${renamedNames} name record(s), ${renamedOccurrences} indexed occurrence(s)) through rename-map.json; ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMapBlocks.length} inline content block(s)).`,
    rename: {
      map: "rename-map.json",
      chunks: renamedFiles,
      names: renamedNames,
      indexedOccurrences: renamedOccurrences,
      note:
        "Semantic renames are recorded per slice in rename-map.json and re-applied on every re-cut. " +
        "Vendor identifiers and public export names keep their served names (vendor/non-standalone rule).",
    },
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      notRendered: notRendered.length,
      note:
        inlineMapBlocks.length
          ? `${inlineMapBlocks.length} inline content block(s) in the captured entry document — readable twins + ` +
            `readable/index-inline-map.json with exact byte ranges and sha256; the rest of the entry references ` +
            `external chunks`
          : "no inline <script>/<style> content blocks in the captured entry document — external chunk references " +
            "only, so there are no *-inline-N twins and no readable/index-inline-map.json",
    },
    sources,
    sections,
    notRendered,
  };
  writeDerived("split-spec.json", JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(proj, "src", s.file);
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const raw = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    const record = recordsFor(renameMap, s.file);
    const expected = record ? applyRecordedMap(raw, record) : raw;
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact through the recorded map), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
