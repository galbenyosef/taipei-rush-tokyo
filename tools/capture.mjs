// capture.mjs — byte-exact capture + runtime-closure fetch for TAIpei RUSH / 東京狂飆.
//
// TAIpei RUSH (https://www.taipei-rush.app/tokyo/) is a Vite/rolldown production
// build of a Tokyo street-racing game ("東京狂飆 · 去東京狂飆"), served under the
// /tokyo/ sub-path by Vercel. The entry document boots one module graph (the
// entry chunk + 15 modulepreloaded chunks), a loader overlay carrying title art
// (title/loader-*.webp), the PWA manifest/icons, and — statically referenced —
// the runtime closure below. The build is a rolldown bundle: chunk tables and
// dynamic imports are the closure surface, so this tool iterates the runtime
// closure to a fixpoint over every captured HTML/JS/CSS/JSON text file:
//
//   - HTML: src/href/poster/srcset attributes, inline <script>/<style> bodies,
//     comments (the entry carries `<!-- … -->` hints), data-src/data-srcset
//   - JS:   dynamic import("…"), bare import "…", static from "…",
//           new URL("…", import.meta.url), rolldown/__vite__mapDeps chunk
//           tables, and asset-path string literals (.js/.css/.png/.jpg/… )
//   - CSS:  url(…) and @import "…"
//   - JSON: asset-path string literals
//
// Relative paths in JS are ambiguous at capture time (fetch()/img.src resolve
// against the document at /tokyo/, new URL(…, import.meta.url) against the
// module), so each relative candidate is probed at three bases — module dir
// first, then the entry document dir (/tokyo/), then the origin root — and the
// first HTTP 200 wins. Only if every base 404s is the reference recorded as an
// unresolved gap. Runtime-instantiated template literals the static scanner
// cannot resolve are enumerated explicitly (KNOWN below).
//
// URL structure is preserved: files are written at the served path (the entry
// at tokyo/index.html, chunks at tokyo/assets/…), so a plain static server
// rooted at the repo root reproduces the exact requests (/tokyo/...).
//
// Every referenced-but-missing same-origin file is fetched until a scan round
// finds none; 404s are recorded as unresolved gaps in _mirror-report.json (and
// the README) — never fabricated. External (off-origin) references are recorded
// as `external` and left on the CDN.
//
// Output (all byte-exact, nothing edited):
//   tokyo/…                    captured files as served (URL structure preserved)
//   _mirror-report.json        crawl record (dead-world shape)
//   .upstream/manifest.json    Gen-A { generated, origin, files: { rel: {bytes, sha256} } }
//
// usage: node tools/capture.mjs [--check] [--report-only]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://www.taipei-rush.app";
const ENTRY = "tokyo/index.html"; // served at /tokyo/ ; disk mirrors the URL structure
const DOC_BASE = "tokyo"; // entry document dir — document-relative refs resolve here
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };

// runtime-instantiated template targets (the scanner cannot see an interpolated
// base):
//   - the loader key-art family the entry's data-src/data-srcset attributes name
//     (title/loader-1600.webp, title/loader-2560.webp, title/loader-portrait.webp)
//     is already literal; seeds keep the family closed if a future build
//     switches to interpolation.
//   - the pedestrian/hero avatar family: `tr = "/avatars/"` then
//     fetch(`${tr}manifest.json`) in avatar-*.js — the avatars manifest (and the
//     basis KTX2 transcoder its `transcoder: "basis/"` field names) is invisible
//     to the static scanner; the manifest then enumerates its 42 .glb/.webp.glb
//     model files, which expandProgrammaticFamilies() probes below.
const KNOWN = [
  "tokyo/title/loader-1600.webp",
  "tokyo/title/loader-2560.webp",
  "tokyo/title/loader-portrait.webp",
  "avatars/manifest.json",
  "avatars/basis/basis_transcoder.js",
  "avatars/basis/basis_transcoder.wasm",
];

// same-origin live-backend endpoints the client talks to (Vercel functions /
// hosted auth). They are not static files and cannot be mirrored — recorded in
// _mirror-report.json as documented gaps, never fabricated.
const LIVE_BACKEND = [
  "https://auth.taipei-rush.app/auth/v1/*, /rest/v1/rpc/* (Supabase-style account backend)",
  "/api/support/config, /api/support/checkout (same-origin Vercel functions)",
  "/_vercel/insights/view (Vercel Web Analytics beacon, POST)",
];

// strings that look like asset paths but are not fetched refs (refresh-time
// exclusions, verified by scan over the whole capture):
//   - i18n translation KEYS whose ids end in an asset-ish extension but are
//     looked up in the message table, never fetched: akiba.junk.bin /
//     culture.park.map / ueno.park.map (region-tokyo i18n + sign-painting code)
//   - source paths written in comments (dev-only provenance, not requests):
//     src/ui/tools/splash.mjs (entry comment), tokyo/scripts/keyart.mjs,
//     test/reversedZ.test.mjs (unit-test path string)
//   - the Vercel Web Analytics client composes `${base}/insights/script.js`
//     with base="/_vercel" — the bare "insights/script.js" token is not a
//     fetchable path (the real file _vercel/insights/script.js is captured)
const EXCLUDE = new Set([
  "akiba.junk.bin",
  "tokyo/akiba.junk.bin",
  "tokyo/assets/akiba.junk.bin",
  "culture.park.map",
  "tokyo/culture.park.map",
  "tokyo/assets/culture.park.map",
  "ueno.park.map",
  "tokyo/ueno.park.map",
  "tokyo/assets/ueno.park.map",
  "src/ui/tools/splash.mjs",
  "tokyo/src/ui/tools/splash.mjs",
  "tokyo/scripts/keyart.mjs",
  "tokyo/tokyo/scripts/keyart.mjs",
  "test/reversedZ.test.mjs",
  "tokyo/test/reversedZ.test.mjs",
  "tokyo/assets/test/reversedZ.test.mjs",
  "insights/script.js",
  "tokyo/insights/script.js",
  "tokyo/assets/insights/script.js",
]);

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const EXT =
  "js|mjs|css|png|jpe?g|webp|gif|svg|avif|ico|ktx2|basis|mp3|ogg|wav|m4a|mp4|webm|json|wasm|data|bin|glb|gltf|woff2?|ttf|otf|hdr|exr|txt|csv|glsl|vert|frag|map|xml|webmanifest";

// quoted-string scanner used for both HTML attributes/URLs and JS literals
const RE_QUOTED = new RegExp(`["'\`]([^"'\`\\n\\r]{1,300}?\\.(?:${EXT}))(?:\\?[^"'\`\\n\\r]*)?["'\`]`, "gi");
const RE_SPECIFIER = /\b(?:import|from)\s*\(?\s*["'`]([^"'`\n\r]+)["'`]/g;
const RE_NEW_URL = /\bnew\s+URL\s*\(\s*["'`]([^"'`\n\r]+)["'`]/g;
const RE_CSS_URL = /url\(\s*["']?([^"')]+)["']?\s*\)/g;
const RE_CSS_IMPORT = /@import\s+(?:url\(\s*)?["']([^"']+)["']/g;
const RE_SRC_HREF = /\b(?:src|href|poster|data-src)\s*=\s*["']([^"']+)["']/gi;
const RE_SRCSET = /\b(?:srcset|data-srcset)\s*=\s*["']([^"']+)["']/gi;
// a captured URL must look like a sane relative path: no spaces, quotes,
// interpolation, operators or query syntax (kills minifier-expression artifacts)
const SANE = (s) => s.length > 0 && s.length <= 250 && !/[\s"'`&?!=<>|;(){}$,:\\]/.test(s);

const normalize = (p) => {
  const out = [];
  for (const part of p.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") out.pop();
    else out.push(part);
  }
  return out.join("/");
};

// three bases for a relative reference: module dir, entry document dir, origin
// root (deduped, ordered); absolute paths resolve once
function classifyUrl(raw, baseDir) {
  let s = raw.trim();
  if (!s || s.includes("${")) return null;
  if (/^(data:|blob:|javascript:|mailto:|tel:|#)/i.test(s)) return null;
  if (s.startsWith("http://") || s.startsWith("https://")) {
    if (s.startsWith(ORIGIN + "/")) s = s.slice(ORIGIN.length);
    else if (s === ORIGIN) return null;
    else return { external: s };
  }
  if (s.startsWith("//")) return { external: s };
  if (!SANE(s)) return null;
  if (s.startsWith("/")) return { path: normalize(s.replace(/^\//, "")) };
  const bases = [baseDir && baseDir !== "." ? baseDir : null, DOC_BASE, null];
  const paths = [];
  for (const b of bases) {
    const p = b ? normalize(path.posix.join(b, s)) : normalize(s);
    if (p && !paths.includes(p)) paths.push(p);
  }
  return { paths };
}

// extract candidate references from a captured text file; each entry is a
// candidate-base GROUP for one reference (probe() closes it if any base works)
function refsOf(relPath, text, external) {
  const groups = [];
  const add = (r) => {
    if (!r) return;
    if (r.external) {
      external.add(r.external);
      return;
    }
    const paths = (r.paths ?? [r.path]).filter((p) => p && !EXCLUDE.has(p));
    if (paths.length) groups.push(paths);
  };
  const baseDir = path.posix.dirname(relPath);
  const isHtml = /\.html?$/i.test(relPath);
  const isCss = /\.css$/i.test(relPath);
  const isJs = /\.(js|mjs)$/i.test(relPath);
  const isJson = /\.(json|webmanifest)$/i.test(relPath);

  if (isHtml) {
    for (const m of text.matchAll(RE_SRC_HREF)) add(classifyUrl(m[1], ""));
    for (const m of text.matchAll(RE_SRCSET))
      for (const part of m[1].split(",")) add(classifyUrl(part.trim().split(/\s+/)[0], ""));
    for (const m of text.matchAll(RE_QUOTED)) {
      const v = m[1];
      if (/\.(js|css|png|jpg|jpeg|mp4|webp|woff2?|json|wasm)$/i.test(v) || v.startsWith("/"))
        add(classifyUrl(v, ""));
    }
    // HTML comments can carry loader hints
    for (const m of text.matchAll(/<!--([\s\S]*?)-->/g))
      for (const t of m[1].matchAll(new RegExp(`([A-Za-z0-9_./-]{1,200}\\.(?:${EXT}))`, "gi")))
        add(classifyUrl(t[1], ""));
  }
  if (isJson) {
    for (const m of text.matchAll(RE_QUOTED)) add(classifyUrl(m[1], baseDir));
  }
  if (isCss) {
    for (const m of text.matchAll(RE_CSS_URL)) add(classifyUrl(m[1], baseDir));
    for (const m of text.matchAll(RE_CSS_IMPORT)) add(classifyUrl(m[1], baseDir));
  }
  if (isJs) {
    for (const m of text.matchAll(RE_QUOTED)) add(classifyUrl(m[1], baseDir));
    // srcset-style lists ("/x/a.webp 1600w, /x/b.webp 2560w") and other
    // multi-token path strings are invisible to the whole-quoted-string scan.
    // A direct token scan over the text catches every slash-containing
    // path-with-extension (minified quotes/escapes cannot desync it); tokens
    // are sanity-filtered (no interpolation, sane chars, not host-like URLs).
    for (const m of text.matchAll(
      new RegExp(`[A-Za-z0-9_@%+~.\\-/]{2,300}\\.(?:${EXT})(?=\\?|["'\`\\s,;)\\]}]|$)`, "gi"),
    )) {
      const tok = m[0];
      if (!tok.includes("/") || tok.includes("${")) continue;
      if (/(?:[a-z0-9-]+\.)+(?:com|org|net|io|dev|app|gg|fyi|tw|jp)\//i.test(tok)) continue;
      add(classifyUrl(tok, baseDir));
    }
    for (const m of text.matchAll(RE_SPECIFIER)) {
      const v = m[1];
      if (/^(\.{0,2}\/)/.test(v) || /\.(js|mjs|css|json|wasm)(\?|$)/i.test(v)) add(classifyUrl(v, baseDir));
    }
    for (const m of text.matchAll(RE_NEW_URL)) {
      const v = m[1];
      if (!v.includes("${")) add(classifyUrl(v, baseDir));
    }
  }
  const seen = new Set();
  return groups.filter((g) => {
    const k = g.join("|");
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const external = new Set();
const state = {
  start: ORIGIN + "/tokyo/",
  origin: ORIGIN,
  gated: false,
  sessionRenewal: "none",
  requests: 0,
  fetched: new Map(), // rel -> { bytes, sha256, buf }
  unresolved: [],
  unreachable: [],
};

const unresolvedSeen = new Set();
const unreachableSeen = new Set();
const probedFailed = new Map(); // candidate rel -> last non-200 status this run
const badStatus = (status, rel) => {
  // presence in the report is idempotent across rounds
  if (status === 404 && !unresolvedSeen.has(rel)) {
    unresolvedSeen.add(rel);
    state.unresolved.push({ status, path: rel, probes: 1 });
  } else if (status !== 404 && !unreachableSeen.has(rel)) {
    unreachableSeen.add(rel);
    state.unreachable.push({ status, path: rel, probes: 1 });
  }
};

// one raw fetch; never records — probe() decides what a failure means.
// The entry is served both at /tokyo/ and /tokyo/index.html (verified 200 both),
// so the disk rel maps to the URL path directly.
async function tryFetch(rel) {
  const url = ORIGIN + "/" + rel.split("/").map(encodeURIComponent).join("/");
  state.requests++;
  let r;
  try {
    r = await fetch(url, { headers: UA });
  } catch (e) {
    return { status: `net:${e.message}`, buf: null };
  }
  if (r.status !== 200) return { status: r.status, buf: null };
  const buf = Buffer.from(await r.arrayBuffer());
  return { status: 200, buf };
}

// probe one reference: try EVERY candidate base path (a sub-path deploy makes
// the same literal resolvable at /tokyo/… and at the origin root — the browser
// picks one per base, and this bundle carries both root-absolute Taipei-rooted
// and /tokyo/-prefixed literals), capturing every form that 200s so a static
// server reproduces whichever request the runtime makes. A reference is a gap
// only when EVERY base 404s (then each probed form is recorded, dead-world
// style); once any form is captured the reference is closed.
async function probe(paths) {
  let any = paths.some((p) => state.fetched.has(p));
  const fresh = paths.filter((p) => !state.fetched.has(p) && !probedFailed.has(p));
  const failed = [];
  for (const rel of fresh) {
    const res = await tryFetch(rel);
    if (res.buf) {
      state.fetched.set(rel, { bytes: res.buf.length, sha256: sha256(res.buf), buf: res.buf });
      any = true;
    } else {
      probedFailed.set(rel, res.status);
      failed.push({ status: res.status, rel });
    }
  }
  if (!any) for (const f of failed) badStatus(f.status, f.rel);
  return any;
}

async function fetchEntry(rel) {
  const res = await tryFetch(rel);
  if (!res.buf) throw new Error(`entry ${rel} not fetchable (HTTP ${res.status})`);
  state.fetched.set(rel, { bytes: res.buf.length, sha256: sha256(res.buf), buf: res.buf });
  return res.buf;
}

// --check: residual closure audit. Every reference scanned out of the captured
// text files must resolve to a captured file (any candidate base) or be a gap
// already recorded in _mirror-report.json — run after a capture to prove the
// runtime graph is closed.
function checkClosure() {
  const manifestPath = path.join(proj, ".upstream", "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const have = new Set(Object.keys(manifest.files));
  const recorded = new Set();
  try {
    const rep = JSON.parse(fs.readFileSync(path.join(proj, "_mirror-report.json"), "utf8"));
    for (const u of rep.unresolved ?? []) recorded.add(u.path);
  } catch {
    /* no report yet: every unresolved reference counts as new */
  }
  const ext = new Set();
  let groups = 0;
  const missing = [];
  const scanExternal = new Set();
  for (const rel of Object.keys(manifest.files).filter((r) => /\.(html?|js|mjs|css|json|webmanifest)$/i.test(r))) {
    const text = fs.readFileSync(path.join(proj, rel), "utf8");
    for (const g of refsOf(rel, text, scanExternal)) {
      groups++;
      const k = g.join("|");
      if (ext.has(k)) continue;
      ext.add(k);
      if (!g.some((p) => have.has(p))) missing.push({ from: rel, candidates: g });
    }
  }
  const novel = missing.filter((m) => !m.candidates.some((c) => recorded.has(c)));
  for (const m of missing)
    console.log(
      `UNRESOLVED ${m.from} -> ${m.candidates.join(" | ")}` +
        (m.candidates.some((c) => recorded.has(c)) ? "  (recorded gap)" : "  (NEW)"),
    );
  console.log(
    `closure check: ${groups} reference group(s), ${missing.length} unresolved (${novel.length} new vs _mirror-report.json), ` +
      `${scanExternal.size} external off-origin reference(s) (left on CDN)`,
  );
  for (const e of [...scanExternal].sort()) console.log(`  external: ${e}`);
  process.exit(novel.length ? 1 : 0);
}

// expand the programmatic avatar family: avatars/manifest.json (fetched through
// `${tr}manifest.json` with tr=/avatars/, invisible to the static scanner)
// enumerates its model files; the transcoder field names the basis decoder dir.
async function expandProgrammaticFamilies() {
  const rec = state.fetched.get("avatars/manifest.json");
  if (!rec) throw new Error("avatars/manifest.json was not captured — cannot expand the avatar family");
  const j = JSON.parse(rec.buf.toString("utf8"));
  const fam = [];
  for (const a of j.avatars ?? [])
    for (const f of [a.file, a.fallback]) if (f && !fam.includes("avatars/" + f)) fam.push("avatars/" + f);
  if (j.transcoder) {
    const dir = j.transcoder.replace(/\/?$/, "/");
    for (const f of ["basis_transcoder.js", "basis_transcoder.wasm"]) fam.push("avatars/" + dir + f);
  }
  let added = 0;
  for (const rel of fam)
    if (!state.fetched.has(rel) && !probedFailed.has(rel)) {
      const ok = await probe([rel]);
      if (ok) added++;
    }
  console.log(`programmatic family: ${fam.length} avatar file(s) enumerated from avatars/manifest.json (${added} newly fetched)`);
}

async function main() {
  if (process.argv.includes("--check")) return checkClosure();
  if (process.argv.includes("--report-only")) {
    console.log("report-only: no fetch performed");
    return;
  }

  // round 0: entry + runtime-instantiated template targets
  if (!state.fetched.has(ENTRY)) await fetchEntry(ENTRY);
  for (const rel of KNOWN) if (!state.fetched.has(rel)) await probe([rel]);
  await expandProgrammaticFamilies();

  // iterate closure to fixpoint
  let round = 0;
  let newRefs = 0;
  do {
    newRefs = 0;
    round++;
    for (const [rel, rec] of [...state.fetched.entries()].sort()) {
      if (!/\.(html?|js|mjs|css|json|webmanifest)$/i.test(rel)) continue;
      const text = rec.buf.toString("utf8");
      if (!Buffer.from(text, "utf8").equals(rec.buf)) continue; // non-utf8, not scannable
      for (const group of refsOf(rel, text, external)) {
        // a group is closed only when every candidate is fetched or has failed —
        // a sub-path reference may have one base fetched and another fresh
        const fresh = group.filter((p) => !state.fetched.has(p) && !probedFailed.has(p));
        if (!fresh.length) continue;
        newRefs++;
        await probe(group);
      }
    }
    console.log(`round ${round}: ${newRefs} new reference(s) probed, ${state.fetched.size} file(s) in closure`);
  } while (newRefs > 0);

  // write every captured file byte-exact at the capture root
  let bytes = 0;
  for (const [rel, rec] of [...state.fetched.entries()].sort()) {
    const abs = path.join(proj, rel);
    if (!path.resolve(abs).startsWith(path.resolve(proj) + path.sep) && path.resolve(abs) !== path.resolve(proj))
      throw new Error(`path escapes capture root: ${rel}`);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, rec.buf);
    bytes += rec.bytes;
  }
  state.bytes = bytes;

  // crawl record (dead-world shape + the additive liveBackend gap list)
  const report = {
    start: state.start,
    origin: state.origin,
    gated: state.gated,
    sessionRenewal: state.sessionRenewal,
    requests: state.requests,
    fetched: state.fetched.size,
    bytes: state.bytes,
    paths: [...state.fetched.keys()].sort(),
    unresolved: state.unresolved.sort((a, b) => a.path.localeCompare(b.path)),
    unreachable: state.unreachable.sort((a, b) => a.path.localeCompare(b.path)),
    external: [...external].sort(),
    liveBackend: LIVE_BACKEND,
  };
  fs.writeFileSync(path.join(proj, "_mirror-report.json"), JSON.stringify(report, null, 2) + "\n");

  // Gen-A manifest over EVERY captured file
  const files = {};
  for (const [rel, rec] of [...state.fetched.entries()].sort()) files[rel] = { bytes: rec.bytes, sha256: rec.sha256 };
  fs.mkdirSync(path.join(proj, ".upstream"), { recursive: true });
  fs.writeFileSync(
    path.join(proj, ".upstream", "manifest.json"),
    JSON.stringify({ generated: new Date().toISOString(), origin: ORIGIN, files }, null, 2) + "\n",
  );

  console.log(
    `capture: ${state.fetched.size} file(s), ${bytes} bytes, ${state.requests} request(s), ` +
      `${state.unresolved.length} unresolved 404, ${state.unreachable.length} unreachable, ${external.size} external`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
