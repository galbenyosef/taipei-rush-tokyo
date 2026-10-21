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
// tokyo/assets/actors-qKVitB-C.js becomes
//   readable/tokyo/assets/actors-qKVitB-C.pretty.js   (prettified twin)
//   src/tokyo/assets/actors-qKVitB-C-NN.js            (statement-aligned slice)
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
//                        bundled three.js r186 chunk (assets/three-x0mFGRTI.js),
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
// --check: recompute the whole derivation and compare against the committed
// derived layer, writing nothing (exits 1 on any drift). The derivation is
// deterministic (pinned prettier to a layout fixed point + recorded rename map),
// so a clean --check proves readable/ + src/ + split-spec.json are current.
const CHECK = process.argv.includes("--check");
const pending = new Map(); // CHECK mode: rel -> intended bytes (nothing written)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;
// the intended derived bytes (CHECK) or the committed file (normal run)
const readOut = (rel) => (pending.has(rel) ? pending.get(rel) : fs.readFileSync(path.join(proj, rel), "utf8"));

// ── the SERVED chunk's own export statement (the export gate's tail) ────
/**
 * The public names of an `export { … }` list: the ALIAS, not the local — the
 * alias is the name the chunk exports.
 */
function exportListNames(text) {
  const out = new Set();
  for (const m of text.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(",")) {
      const seg = part.trim();
      if (!seg) continue;
      const as = seg.split(/\s+as\s+/);
      out.add((as.length === 2 ? as[1] : seg).trim());
    }
  }
  return out;
}

/**
 * The SERVED chunk's OWN export statement — the capture-side text the reading
 * copy's rendered table must still match.
 *
 * A skipped tail carries no file: the export list at the end of a chunk
 * references bindings declared in the earlier slices, so it does not parse
 * alone and the layer never fabricates it. The public-export-name gate
 * therefore has no derived text for that table and reports it UNCHECKED —
 * unless the tail records one. `text` is that text: the capture's own export
 * statement, so the two sides of the gate's comparison are two DIFFERENT
 * files (the served chunk's raw statement and the reading copy's rendering of
 * it) instead of the pristine compared with itself.
 *
 * The statement is matched by its PUBLIC NAMES, so a fragment of a string that
 * happens to contain `export {` is never mistaken for it, and nothing is
 * invented: when the capture carries no statement with the tail's names, the
 * tail stays a plain skipped record and the gate keeps reporting it unchecked.
 */
function captureExportStatement(captureText, tailText) {
  const want = exportListNames(tailText);
  if (!want.size) return null;
  let found = null;
  for (const m of captureText.matchAll(/export\s*\{[^}]*\}\s*;?/g)) {
    const names = exportListNames(m[0]);
    if (names.size !== want.size) continue;
    if (![...want].every((n) => names.has(n))) continue;
    found = { text: m[0], start: m.index, end: m.index + m[0].length };
  }
  return found;
}

// recursive file walk (posix rels against base)
function walkFiles(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(p, base, out);
    else out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out;
}

// capture-relative name -> derived twin name (served path kept, extension swapped)
const tagOf = (capRel) => capRel.replace(/\.(js|css)$/i, "");
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// write a derived file, creating its (served-path) directory chain; in --check
// mode the intended bytes are staged in memory instead (nothing is written)
function writeDerived(rel, text) {
  if (CHECK) {
    pending.set(rel, text);
    return;
  }
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
  "tokyo/assets/three-x0mFGRTI": {
    title:
      "tokyo/assets/three-x0mFGRTI.js — bundled three.js r186 engine (vendor, whole-file, never sliced)",
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
  // then the vendored engines — a reading order, not a build order. The entry
  // chunk is found from the entry document's module <script src> (hash-stable
  // across refreshes), and the vendored engines from the WHOLE_FILE table — no
  // per-build hash is hardcoded here.
  const entryChunkRel = (() => {
    const html = captured.find((r) => /(^|\/)index\.html$/.test(r));
    if (!html) return null;
    const t = fs.readFileSync(path.join(proj, html), "utf8");
    const m = /<script[^>]*type="module"[^>]*\bsrc="\/?([^"]+\.js)"/.exec(t);
    return m ? m[1] : null;
  })();
  const rank = (rel) => {
    if (rel === entryChunkRel) return 0;
    if (WHOLE_FILE[tagOf(rel)]) return 2;
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
      // The bundle's final `export { … }` table is not vendor code — it is the
      // bundle's own public API. It is indexed as its own whole-file section
      // whose DERIVED text is the reading copy and whose PRISTINE is the
      // served bundle (`source`), so the export gate compares the served
      // bundle's export table with the reading copy's — two different files.
      // It comes FIRST so the gate binds the served bundle to the section
      // whose file resolves; the vendor region keeps its own section (and its
      // own name, which the mirror's audit pins).
      const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
      const top = (dbg.ast.program || dbg.ast).body;
      const last = top[top.length - 1];
      const tail =
        last && last.type === "ExportNamedDeclaration" && /^export\s*\{[\s\S]*\}\s*;?$/.test(pretty.slice(last.start, last.end).trim())
          ? { A: lineOf(pretty, last.start), B: lineOf(pretty, last.end) }
          : null;
      if (tail) {
        sections.push({
          file: sourceFile,
          wholeFile: true,
          source: rel,
          title: `${tag} — final export table (whole-file, never sliced)`,
          desc: `Lines ${tail.A}-${tail.B} of ${sourceFile}: the bundle's final export {…} table — its derived text is the reading copy and its pristine is the served bundle (${rel}), so the export gate compares the served bundle's own export table with the reading copy's.`,
          note: "whole-file (vendor rule): indexed in readable/, never sliced",
          startLine: tail.A,
          endLine: tail.B,
          sourceFile,
        });
      }
      sections.push({
        file: `${tag}-vendor.js`,
        wholeFile: true,
        title: cls.title,
        desc: `Lines 1-${tail ? tail.A - 1 : lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced",
        startLine: 1,
        endLine: tail ? tail.A - 1 : lines.length,
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
        // the reading copy's own export table belongs to no src slice either
        // (the whole bundle is indexed whole), so it is compared with the
        // served bundle's whole-file rendering
        wholeFileSection: { file: rel },
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
      // the served chunk's OWN export statement — the text the export gate
      // compares the reading copy's rendered table against. Without it the
      // gate has no derived text for this table and reports it unchecked.
      const capExport = captureExportStatement(text, lastStmt.text);
      // The tail is keyed under the SERVED CAPTURE (see the capture-keyed
      // section emitted below): the frozen export gate then reads the served
      // FILE as the pristine and compares its public export table with the
      // LAYER's rendering. Keyed under the reading copy, the gate compared
      // the reading copy with a RECORDING of the capture's statement, so a
      // served capture that changed left the gate green.
      const capA = capExport ? lineOf(text, capExport.start) : null;
      const capB = capExport ? lineOf(text, capExport.end - 1) : null;
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        captureTail: `${tag}-capture-export.js`,
        ...(capExport ? { capA, capB } : {}),
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only. Public (exported) names in this table are the capture's own public API names and are never renamed by the campaign.${capExport ? ` The table is compared with the served chunk's own export table by the capture-keyed tail ${tag}-capture-export.js.` : ""}`,
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
        // The reading copy's index-only tile: the table's bindings live in the
        // EARLIER slices, so no slice can carry the table (it would not parse
        // standalone) and the region is indexed whole, never sliced. The TABLE
        // itself is compared with the served chunk by the capture-keyed tail
        // below, so one table is compared once.
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: b.desc,
          note: "index-only region (export table rule): indexed whole in readable/, never sliced",
          // The tile is still APP code: its local-side names reference the
          // renamed top-level bindings, so the recorded rename map applies to
          // it exactly as it applies to the slices around it. The two
          // reconstruction gates (tools/verify-rename.mjs, tools/check-chunk.mjs)
          // read this flag and apply the map to this region too. Without it
          // the chunk reconstruction keeps the table's capture-side locals and
          // stops parsing ("Export 'o' is not defined in module").
          renameMapped: true,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
        if (b.capA) {
          // The tail, keyed under the SERVED CAPTURE: the frozen export gate
          // reads the served file as the pristine, so the comparison is
          // against the LIVE capture. The derived text is the LAYER's
          // rendering of the table (the reading copy's own table) — a
          // different file from the capture, so the gate never compares a
          // file with itself.
          const capLines = linesOf(text);
          sections.push({
            file: b.captureTail,
            skipped: true,
            title: `${tag} — the served chunk's final export table (not sliced)`,
            desc: `Lines ${b.capA}-${b.capB} of ${rel}: the served chunk's own export {…} table — the tail is keyed under the capture, so the frozen export gate reads the SERVED FILE as the pristine and compares its public export table with the layer's rendering (the reading copy's own table, recorded below).`,
            startLine: b.capA,
            endLine: b.capB,
            sourceFile: rel,
            capture: rel,
            firstLine: capLines[b.capA - 1],
            lastLine: capLines[b.capB - 1],
            layerFile: sourceFile,
            layerStartLine: b.A,
            layerEndLine: b.B,
            text: lines.slice(b.A - 1, b.B).join("\n"),
          });
        }
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
        if (CHECK) continue; // --check reports orphans below, never deletes
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${relFull}`);
      }
    }
    if (!CHECK) removeEmptyDirs(dir);
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
      "never sliced: tokyo/assets/three-x0mFGRTI.js (bundled three.js r186 engine: WebGLRenderer + " +
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
    // a section keyed under the SERVED CAPTURE (its sourceFile IS its
    // capture) points INTO the served file: it is not a layer slice and does
    // not tile the capture the way a slice tiles its reading copy
    if (list.every((s) => s.capture && s.capture === s.sourceFile)) continue;
    const lines = linesOf(readOut(sourceFile));
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
    const text = readOut(path.posix.join("src", s.file));
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const raw = linesOf(readOut(s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
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
    if (!parses(readOut(s.sourceFile)).ok) {
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

  // ── 7) --check: compare the intended layer against the committed one ────
  if (CHECK) {
    const problems = [];
    for (const [rel, text] of pending) {
      const abs = path.join(proj, rel);
      if (!fs.existsSync(abs)) problems.push(`missing derived file: ${rel}`);
      else if (fs.readFileSync(abs, "utf8") !== text) problems.push(`stale derived file: ${rel}`);
    }
    for (const dir of ["readable", "src"]) {
      for (const f of walkFiles(path.join(proj, dir))) {
        const rel = path.posix.join(dir, f);
        if (!pending.has(rel)) problems.push(`orphan derived file: ${rel}`);
      }
    }
    if (bad || problems.length) {
      console.error(`DERIVE CHECK FAIL — ${bad + problems.length} problem(s) (nothing written)`);
      for (const p of problems.slice(0, 30)) console.error("  " + p);
      process.exit(1);
    }
    console.log(
      `DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier ${PINNED} (nothing written)`,
    );
    process.exit(0);
  }
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
