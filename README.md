# TAIpei RUSH (東京狂飆) — offline mirror

Full mirror of the **TOKYO RUSH / 東京狂飆** deploy at
https://www.taipei-rush.app/tokyo/ (Vercel).

Source: https://www.taipei-rush.app/tokyo/

![TOKYO RUSH](docs/cover.png)

## Stack

- **Vite/rolldown production build** — sub-path base `/tokyo/`, hashed chunks
  (`assets/*.js`, `assets/*.css`) plus the rolldown runtime module and a
  `__vite__mapDeps` chunk-table loader
- **three.js r186 in the chunk graph** — its own `assets/three-*.js` chunk plus
  eight worker chunks (world/actors/char/people/interiors/audio/body), the
  Google Basis KTX2 transcoder and a 23-model (46-file) Rocketbox avatar set
  (`.glb` + `.webp.glb`, MIT-licensed, listed in `avatars/manifest.json`)
- **PWA shell** — `manifest.webmanifest` + icons, installable; separate Tokyo
  and origin-root manifests/icons
- **i18n** — zh-Hant / ja / en with a large generated Japanese dictionary chunk
  and a Japanese font (`region-tokyo-sans-jp-*.woff2`)
- **account/session layer** — Supabase-style REST against
  `https://auth.taipei-rush.app` (guest play needs none of it)
- **live data** — the in-game stock ticker pulls TWSE endpoints
  (`openapi.twse.com.tw`, `www.twse.com.tw`); radio is runtime-synthesized
  (no audio payload files exist in the closure)

## What this is

TOKYO RUSH (東京狂飆, "Tokyo Rush") — a browser open-world Tokyo driving/racing
game: you arrive at Tokyo Station, walk/ride/drive through recreated districts
(Akihabara, Ueno, Kanda, Ginza, Nihonbashi, Marunouchi, Shimbashi…), run story
missions, kart races and side jobs, with a phone UI (missions, map, trains,
weather, radio, camera, stock ticker, bag, records) and a pedestrian/traffic
simulation. Served under the **`/tokyo/` sub-path**; the origin root `/` serves
the Taipei edition of the same platform (its shared files — avatars, root
icons/key art, base-stripped `assets/` forms — are part of this capture because
the Tokyo bundle carries literals that resolve to them).

The capture is the full runtime closure of 190 files (~28.1 MB): entry document,
100 JS chunks, 11 stylesheets, 14 key-art webp, 12 icons, the 23-model avatar
family, the KTX2 transcoder (js + wasm), the Japanese font and the animation bank.
The 2026-10-15 build added a **car garage** (a new `garage-*` chunk + stylesheet
and root-form twin), four new districts (**Asakusa, Hongō, Roppongi, Suidobashi**)
and two new hero avatars (**Kai**, **Mei**).

External at runtime (never backfilled — left on their hosts): the account
backend `auth.taipei-rush.app`, Cloudflare Turnstile
(`challenges.cloudflare.com`, the login captcha), the Vercel analytics loader
`va.vercel-scripts.com`, and the TWSE live-data endpoints. Same-origin but
backend-served (documented gaps, not static files): `/api/support/config`,
`/api/support/checkout` (Vercel functions) and `/_vercel/insights/view` (the
analytics beacon POST; its script `_vercel/insights/script.js` is captured).
One genuine upstream 404 is recorded: `sf-keyart-phone.webp` — the
San-Francisco-only phone key art this Tokyo deploy never serves.

## Layout

- `tokyo/` — the served sub-path, byte-exact as served (entry `tokyo/index.html`,
  chunks under `tokyo/assets/`, key art under `tokyo/title/`, icons/manifest)
- `avatars/`, `title/`, `icons/`, `assets/`, `manifest.webmanifest` — the
  origin-root forms the Tokyo bundle also references (byte-identical to their
  `/tokyo/` twins where both exist)
- `_vercel/insights/script.js` — the captured analytics platform script
- `.upstream/manifest.json` — sha256 for every captured file (Gen-A)
- `_mirror-report.json` — crawl record (fetched paths, 404 gaps, external and
  live-backend lists)
- `readable/` — prettified derived layer (pinned prettier 3.9.6) that **mirrors
  the served paths**: 122 pretties (100 capture-JS + 11 capture-CSS twins + 11
  inline-block twins) under `readable/tokyo/assets/…`, `readable/assets/…`,
  `readable/avatars/basis/…`, `readable/_vercel/…`, plus
  `readable/index-inline-map.json`
- `src/` + `split-spec.json` — 1,433 statement-aligned slices across 97 app
  chunks in the same served-path structure (`src/tokyo/assets/<chunk>-NN.js`),
  re-cut through the recorded rename map, with the derivation spec
- `rename-map.json` + `tools/names.json` — the identifier rename campaign: the
  recovered per-slice map (`files` word-boundary + `scoped` token-index records)
  and the reviewed worklist with per-name evidence
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
  (`--check` recomputes and compares, writes nothing)
- `tools/record-manifest.mjs` — re-cut `.upstream/manifest.json` from the tree
  (canonical SKIP/NOT_CAPTURED set; `--check` compares, writes nothing)
- `tools/audit.js` — integrity gate for the derived layers and the rename map
  (`AUDIT PASS`)
- `tools/vendor/prettier/` — the pinned renderer (prettier **3.9.6**, module API)
  vendored into this mirror, byte-identical to the published npm tarball except
  for a minimal `package.json` stub (see its `VENDOR-README.md`). `derive.mjs`
  and `audit.js` resolve it **first** (after `$PRETTIER_MJS`), so a fresh clone
  derives with no network and no sibling mirror's `node_modules/`
- `tools/apply-names.mjs`, `tools/propose-names.mjs`,
  `tools/recover-scoped-map.mjs` — write / propose / record rename batches
- `tools/verify-rename.mjs`, `tools/check-chunk.mjs`, `tools/refcheck.mjs`,
  `tools/engine/rename-layer.mjs`, `tools/lib-acorn.mjs` (+ gitignored
  `tools/.deps`, acorn 8.14.1, authoring-time only) — the rename gates and the
  shared tokenizer layer
- `tools/verify.mjs` — re-hash the capture against the manifest
- `tools/update.mjs` — read-only drift probe against the live site
- `tools/capture.mjs` — the byte-exact capture + runtime-closure fetcher
- `tools/serve.mjs` — dependency-free static server for a boot test
- `docs/` — cover + boot/gameplay evidence + the network log

## Assets

- **models** — 46 file(s): `avatars/` (23 Rocketbox models, each as `.glb` plus
  a `.webp.glb` fallback — e.g. jie, kai, mei, casual-m, jp-salaryman2; Microsoft
  Rocketbox Avatar Library, MIT — see `avatars/manifest.json`)
- **images** — 26 file(s): `title/` and `tokyo/title/` (loader/menu key art
  webp, 1600/2560/portrait/phone crops), `icons/` and `tokyo/icons/` (PWA
  icons png/svg)
- **fonts** — 1 file(s): `tokyo/assets/region-tokyo-sans-jp-*.woff2`
- **data** — 3 file(s): `avatars/manifest.json` (avatar index),
  `avatars/basis/basis_transcoder.wasm` (KTX2 decoder),
  `tokyo/assets/anim-D2jNF5Wn.bin` (animation bank)
- **audio** — none — radio/engine audio is synthesized at runtime; no audio
  payload file is referenced by the Tokyo closure
- **code** — 100 `.js` + 11 `.css` captured chunks; derived `readable/` +
  `src/` (see Layout)

## Run

The capture preserves the served URL structure, so serve the **repo root** with
any static file server that does directory indexing and open `/tokyo/`:

```
node tools/serve.mjs            # http://127.0.0.1:8791/tokyo/
# or: npx serve .
```

The game plays as a guest without login; the account/turnstile layer is only
needed for cloud saves.

## Verify

```
node tools/verify.mjs                # re-hash the capture against the manifest
node tools/audit.js                  # derived-layer + rename-map gate (AUDIT PASS)
node tools/verify-rename.mjs --all   # per-slice reproduction + references/bindings
node tools/check-chunk.mjs --all     # cross-slice calls resolve after renames
node tools/check-exports.mjs         # the derived layer still exports every public name
```

The rename gates need acorn (authoring-time only): it installs into the
gitignored `tools/.deps/` on first use (`npm install --prefix tools/.deps acorn@8.14.1`)
and is never needed by `derive.mjs`, the capture or the served app.

## Updating from upstream

```
node tools/update.mjs     # read-only drift probe: what changed upstream
```

The probe never rewrites the capture — a mirror is a point-in-time snapshot.
Refreshing means re-running `node tools/capture.mjs` (byte-exact fetch +
closure to fixpoint), re-cutting `readable/` + `src/` with `node tools/derive.mjs`,
and re-passing `node tools/audit.js`; files being replaced go to `legacy/<date>/`.

After a capture refresh the chunk hashes in the filenames change, so the rename
campaign is re-derived too: `tools/names.json` keys are the old capture paths,
`tools/propose-names.mjs` re-proposes the evidence-driven rules for the new
hashes, `tools/apply-names.mjs --all` rewrites the slices,
`tools/recover-scoped-map.mjs` re-records `rename-map.json`, and the four gates
above must pass again. `tools/derive.mjs` then re-cuts byte-identically from the
recorded map (its self-check fails loudly if the map addresses a token the
readable no longer has).

### 2026-10-13 capture, derivation + boot note

- **Capture** — `tools/capture.mjs` fetched the entry at `tokyo/index.html`,
  then iterated the runtime closure to a fixpoint (5 rounds, 576 requests):
  HTML attrs + comments, JS `import`/`import()`/`new URL`/`__vite__mapDeps`
  tables and asset-path literals (including srcset-with-descriptors lists),
  CSS `url()`, JSON literals. The entry's 16 module references, the loader key
  art (data-src/data-srcset), the workers and the animation bank were all
  closed statically; 179 files, 23,901,495 bytes.
  - **Network-log cross-check** (browser resource-timing while the game ran,
    `docs/network-2026-10-13.json`) found two real gaps the static scan missed:
    the **programmatic avatar family** — `fetch(\`${tr}manifest.json\`)` with a
    variable base `tr="/avatars/"` — which expanded to 44 files (the manifest,
    the Basis transcoder js+wasm, 42 `.glb` models), and
    **`/tokyo/title/menu-2560.webp`**, referenced only inside a srcset string
    with width descriptors (the token scan now catches those); both are in the
    final capture.
  - Genuine gaps recorded in `_mirror-report.json`: one 404 group
    (`sf-keyart-phone.webp`, the SF-only variant) plus the external/live-backend
    lists above. Template-composed bare names (`basis_transcoder.js`,
    `menu-phone.webp`, `insights/script.js`) are excluded with comments — their
    concrete served URLs are captured.
- **Derived layers** — `readable/`: 115 pretties (104 JS + 11 CSS) + 11 inline
  twins, every pretty provably not a byte copy of its capture source and
  re-rendering byte-exact under pinned prettier 3.9.6 (module API,
  format-to-fixed-point, 1–2 passes; never the CLI). `src/`: 1,187
  statement-aligned slices across 92 app chunks (1,294 split-spec sections:
  1,187 ranged + 84 skipped final `export {…}` tables + 23 wholeFile), each
  parse-checked with `node --input-type=module --check -` and round-tripping
  byte-exact; largest single chunk `region-tokyo` (124,050 readable lines,
  314 slices). Vendor rule — wholeFile, never sliced:
  `tokyo/assets/three-CC5Mkdpe.js` (bundled three.js r186),
  `avatars/basis/basis_transcoder.js` (Google Basis), `_vercel/insights/script.js`
  (Vercel), all content-anchored and guarded. Stylesheet rule — all 9 captured
  CSS files wholeFile. `tokyo/index.html` carries **11 inline blocks** (9
  scripts — the cross-deploy region redirect shims, `?region=` alias, language
  gate, loader overlay + boot watchdog + key-art driver, error/save shims — and
  2 loader stylesheets): each got a wholeFile twin and a
  `readable/index-inline-map.json` entry with its exact byte range + sha256.
  70 binary payloads are hashed `notRendered` records (42 models, 26 images,
  1 data bank, 1 font).
- **Gates** — `node tools/verify.mjs` → `179 files checked, 0 problems`;
  `node tools/audit.js` → `AUDIT PASS — 1294 spec sections (1187/1187
  src↔pretty round-trips byte-exact, 115/115 pretty sources tiled
  contiguously, 84/84 skipped export-table sections re-verified textually,
  1187/1187 src slices + 104/104 readable/*.pretty.js parse standalone,
  115/115 pretties provably distinct from their capture source, 107 index-only
  wholeFile/skipped sections carry no src file, 11 inline content block(s) with
  twins + index-inline-map.json, 358/367 imports resolve inside the capture
  (9 whitelisted machinery, 0 accepted as recorded 404 gaps), 115/115 pretties
  re-render byte-exact under pinned prettier 3.9.6, capture manifest free of
  derived layers)`; serve probe — mirror root served on loopback,
  `/tokyo/`, chunks, key art, avatars and the transcoder over HTTP 200, the
  listener (PID 24840) killed and the port verified closed (`netstat`).
- **Boot test** (`docs/boot-2026-10-13.png`) — the served mirror boots to the
  Tokyo title screen, enters the world as a guest (no login) and plays: street
  exploration with the phone HUD, NPCs and traffic. The cover and
  `docs/gameplay-2026-10-13.png` show the **kart race** reached through the
  bundle's own QA harness (`?kart=<circuit>&kartmode=race` — the game ships a
  race-test harness in `region-tokyo`), racing the Akihabara Electric Town
  circuit at 69 km/h and a wet-weather Ginza–Nihonbashi lap; both are the game
  running from the mirror's files only.
- **§0.4 fork-over-mirror checked 2026-10-13** — no public source repo exists
  for the game: the capture contains zero `github.com` links, its comments
  reference internal source paths (`src/main.ts`, `src/ui/tools/splash.mjs`,
  `tokyo/scripts/keyart.mjs`, `CREDITS.md` / `LICENSE-ROCKETBOX.txt`), and
  GitHub searches (`taipei rush`, `tokyo-rush`, `taipei-rush`, `taipei-gta`)
  surface only third-party iframe-embed/clone sites and unrelated projects —
  e.g. `xpfasd2/taipei-gta`, self-described "taipei-rush-clone", embeds the
  real game in an iframe and is not its source. The library credits (three.js,
  Rocketbox) are not the project's source. The mirror stands.
- **Open task (2026-10-13)** — the identifier rename campaign (PLAN §5) was open
  as of this note (`src/` kept the bundle's own minified names). **Started and
  partially applied 2026-10-14** — see the section below: the tooling exists, 244
  rules are reviewed and 243 are applied over 37 of 92 chunks, and the exact
  remaining scope is listed there.

### 2026-10-14 structure + rename campaign (reversal pass)

Mission of this pass: converge the derived layers on the real project shape and
run the PLAN §5 identifier rename campaign. The capture was **not** touched —
`verify.mjs` still re-hashes all 179 files (0 problems) — so this section is
entirely about `readable/`, `src/`, `split-spec.json`, `rename-map.json` and
`tools/`.

- **Inventory (source maps + module boundaries) — both negative, recorded**:
  - *Source maps*: zero `sourceMappingURL` occurrences across the capture
    (html/js/css) and no `.map` file in it, so no original tree can be
    reconstructed from maps; the derivation stays a prettier/slice pass.
  - *Module boundaries*: the 92 app chunks are **flat rolldown ES modules**
    (single top-level statement lists, no Turbopack/module-factory wrappers,
    no `__esm`/`__commonJS`/`require_` machinery; each chunk opens with its own
    `import` clauses and ends with a plain `export {…}` table). There is no
    factory family to split on, so the factory-family split of the
    spawn-dust-2-dm / mindfall precedents is **not applicable here** — the
    statement-aligned slice remains the true boundary this bundle exposes.
- **Structure — `readable/` and `src/` now mirror the served paths** (PLAN §2
  "capture path is the real path"): a captured file at
  `tokyo/assets/actors-Bnj6Q1ad.js` derives to
  `readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js` and
  `src/tokyo/assets/actors-Bnj6Q1ad-NN.js`; `__`-flattening is gone. Before/after
  counts: `readable/` 115 files flat → 115 files under `readable/tokyo/assets/`,
  `readable/assets/`, `readable/avatars/basis/`, `readable/_vercel/insights/`
  (+ `readable/index-inline-map.json` at the root); `src/` 1,187 slices flat →
  1,187 slices under `src/tokyo/assets/` (1,181), `src/assets/` (6 root-form
  twins), plus the 107 index-only section names (3 vendor wholeFile, 84 skipped
  export tables, 11 inline twins, 9 CSS wholeFile) whose `file` paths now also
  read as served paths (`tokyo/assets/three-CC5Mkdpe-vendor.js`,
  `tokyo/assets/actors-Bnj6Q1ad-tail-export.js`, `tokyo/index-inline-1.js`, …).
  Slice headers carry the served tag (e.g. `// tokyo/assets/actors-Bnj6Q1ad 03 —
  …`); `split-spec.json`'s `file`/`sourceFile`/`defaultFile` all use the new
  paths.
- **The 84 skipped export-table sections keep their semantics** and are now
  *documented in the spec*: each is the chunk's final `export {…}` table — its
  bindings live in the earlier slices, so a standalone tail carries no new
  statements and is indexed (firstLine/lastLine re-verified textually) but never
  sliced. New in this pass: the campaign renames the *local* side of those
  tables too, so `split-spec.sources[].renameBindings` records the chunk's fired
  binding map and the reconstruction gates (`verify-rename`, `check-chunk`) apply
  it to the table when they rebuild a chunk — the public side is foreign and
  stays.
- **Rename campaign (PLAN §5) — batches 1+2, tooling + 244 reviewed rules over
  37 chunks**: `tools/names.json` is the reviewed worklist (every entry carries
  its evidence: own export table, semantic import, or a curated `curated:`
  reason); `tools/apply-names.mjs` is the scope-aware writer (renames only
  identifiers resolving to a chunk's top-level bindings and import aliases);
  `tools/recover-scoped-map.mjs` records what actually fired into
  `rename-map.json` by mechanical token alignment (both sides must agree in
  every non-identifier position); `tools/derive.mjs` re-applies that map on
  every re-cut, so the layer is reproducible. Renames applied: **243 (of 244
  rules; 1 skipped — shorthand import) across 37 of 92 app chunks, 769
  identifier occurrences**; the recovered map holds 136 word-boundary records
  plus 139 indexed names over 325 occurrences (461 records, all index-validated
  by the audit). Highlights: `session` (auth/turnstile/listener layer, 41 names:
  `installStorageSync`, `ensureSession`, `runTurnstile`, `scheduleRefresh`, …),
  `cities` (travel data, 18), `dom`/`tabs` (+ their root twins; helpers,
  cross-tab play lock), `ui` (cloud panel entry points), `coordinator`
  (`installCloud`/`deleteFlow`/`syncNow`/…), `airliner`, `clips`, `animator`,
  `batch`, `board`, `fullmap`, `lab`, `market`, `panel`, `recovery`, `signs`,
  `prefs`, `notice`, `boot`, `scene`.
- **What the campaign deliberately does not rename** (honest scope):
  - **public API names** — the aliased side of every `export { local as Public }`
    (importers in other chunks use them) and, for chunks whose tables are
    unaliased (`export { n, t }`), the exported locals themselves: a token
    substitution there would change the served public name, so they are refused;
  - names in shorthand positions (`{x}`, `const {x} = …`, `import {x}`) — the
    key shares the token text, so splicing would rewrite a property name;
  - **locals inside function bodies** — the campaign renames top-level bindings
    and import aliases only (≈14k top-level names exist; 244 are named so far);
  - **vendor identifiers** — the three.js r186 chunk, the Basis transcoder and
    the Vercel insights script are wholeFile and never renamed, and the
    three.js/Basis public names (`Kt`, `Wt`, …) are not derivable from this
    capture, so importers keep them;
  - the **55 chunks with no recorded renames** (the giant `region-tokyo`,
    `actors`, `world`, worker/engine/asset chunks) keep the bundle's own
    minified top-level names — the tooling is in place for further batches;
    `split-spec.sources[].renameBindings` and `rename-map.json` are the record
    of exactly what is applied.
- **Gates (verbatim tails, 2026-10-14)**:
  - `node tools/verify.mjs` → `179 files checked, 0 problems`
  - `node tools/audit.js` → `AUDIT PASS — 1294 spec sections (1187/1187
    src↔pretty round-trips byte-exact through the recorded rename map, 45
    renamed slice(s), 115/115 pretty sources tiled contiguously, 84/84 skipped
    export-table sections re-verified textually, 1187/1187 src slices + 104/104
    readable/*.pretty.js parse standalone (node --input-type=module --check -),
    115/115 pretties provably distinct from their capture source, 107 index-only
    wholeFile/skipped sections carry no src file, 11 inline content block(s)
    with twins + index-inline-map.json, 358/367 imports resolve inside the
    capture (9 whitelisted machinery, 0 accepted as recorded 404 gaps), rename
    map: 461 record(s) over 45 slice(s), all indices address the recorded
    identifiers and no foreign position, 115/115 pretties re-render byte-exact
    under pinned prettier 3.9.6 (format-to-fixed-point), capture manifest free
    of derived layers)`
  - `node tools/verify-rename.mjs --all` → `verify-rename: 1187/1187 slice(s)
    reproduce byte-exact, 45 renamed slice(s) (325 indexed occurrence(s)),
    92/92 chunk(s) references+bindings YES`
  - `node tools/check-chunk.mjs --all` → `check-chunk: 92 chunk(s), 1187 slice
    body(ies) substituted — all cross-slice calls resolve`
  - `node tools/derive.mjs` → re-run byte-identical (readable/ + src/ +
    split-spec.json hash-for-hash; proof run twice) and the self-check tail:
    `derive: 116 readable file(s), 1187 src slices (1187/1187 parse standalone,
    1187/1187 round-trip byte-exact through the recorded map), 84 skipped, 23
    wholeFile, 104 pretty js parse clean, 70 notRendered, 0 orphan(s) pruned —
    self-check clean`
  - serve probe — mirror root served on loopback; `/tokyo/` (53,065 B),
    `tokyo/assets/game-y-FF2uWA.js` (69,567 B), `/avatars/manifest.json`
    (18,452 B), `/tokyo/title/menu-2560.webp` (234,300 B) and
    `/avatars/basis/basis_transcoder.wasm` (527,333 B) all HTTP 200; the
    listener (PID 7308) killed and the port verified closed (`netstat`, no
    LISTENING on 8791).
- **Upstream drift observed 2026-10-14 — ACTIONED by the 2026-10-15 refresh
  (below)**: the read-only probe reported `DRIFT: 2 changed, 64 live-missing (of
  179 captured)`
  — `tokyo/index.html` and `avatars/manifest.json` changed and 64 hashed chunks
  are no longer served (the live deploy was replaced, so the old chunk names
  rotated away). The mirror stayed the **2026-10-13 point-in-time snapshot** until
  this refresh; the PLAN §3 flow was then run exactly as sketched (capture → copy
  every replaced file into `legacy/2026-10-15/` → re-cut `readable/` + `src/` →
  re-author the rename batch for the new hashes → re-pass the gates → boot test).

### 2026-10-15 refresh (PLAN §3 — the post-campaign refresh)

Mission: the origin had shipped a new Tokyo build since the 2026-10-13 snapshot (the whole
hashed chunk set rotated). Re-capture what is served today, preserve the old bytes first, re-run
the §4 runtime closure, re-cut the derived layers and re-anchor the identifier campaign onto the
new build. The capture layer was refreshed (179 → 190 files); `readable/`, `src/`,
`split-spec.json`, `rename-map.json` and `tools/names.json` were re-cut.

- **Drift (what moved)** — `node tools/update.mjs` triage: **2 changed, 68 live-missing (of 179
  captured)**. `avatars/manifest.json` (18,452 → 20,886 B) and `tokyo/index.html` (53,065 → 53,044 B)
  changed; the 68 `live-missing` rows are the **old hashed chunks** (`tokyo/assets/*.js`, `*.css`,
  `anim-*.bin`) the redeploy removed — probed directly they return **HTTP 404**, i.e. genuinely gone
  (hashes rotated), **not** SPA-fallback artifacts (a fallback would return `index.html` with 200 and
  read as `changed`, not `live-missing`). The recorded 2026-10-14 list (64) grew to 68 by refresh
  time as the deploy kept rotating.
- **Runtime closure (§4) — fixpoint in 5 rounds (616 requests)** — the entry document's module
  references, `__vite__mapDeps`/`import()`/`new URL` surfaces, CSS `url()`, and the **programmatic
  avatar family** (`expandProgrammaticFamilies`: 48 avatar files enumerated from
  `avatars/manifest.json`, 46 newly fetched) closed at **190 files, 29,474,212 bytes (28.1 MiB)**.
  Diff vs the old capture: **+81 added, −70 removed, 9 changed, 100 byte-identical**. The 81 added =
  the 70 rotated chunks (new hashes) **plus 11 genuinely new files**: a **car garage** feature
  (`tokyo/assets/garage-BvwUBeJB.js` + `garage-DGUjwj6r.css` and its root-form twin
  `assets/garage-DGUjwj6r.css`), **four new districts** (`region-tokyo-d-asakusa`, `-hongo`,
  `-roppongi`, `-suidobashi`), and **two new hero avatars** (`kai`, `mei` — `.glb` + `.webp.glb`).
  The 9 changed = the entry, the avatars manifest and **7 re-rendered key-art webp** (`tokyo/title/*`,
  e.g. menu-2560 234,300 → 452,370 B). A re-scan of the new bundles' string literals found **no other
  referenced-but-missing file**. The 70 upstream-gone rotated chunks were pruned from disk (their
  bytes live in `legacy/2026-10-15/capture/`). Recorded gaps: **3 unresolved 404** (the SF-only phone
  key art `sf-keyart-phone.webp`, probed at three bases), 0 unreachable, 2 external (Turnstile +
  Vercel analytics).
- **Legacy first** — before anything was fetched, every captured file (179) plus the whole
  pre-refresh derived layer (`readable/`, `src/`, `split-spec.json`, `rename-map.json`,
  `tools/names.json`) was copied into `legacy/2026-10-15/`, committed and pushed **alone** (commit
  `f6907ff`). The old snapshot therefore stays reachable three ways: git history,
  `legacy/2026-10-15/`. (No `legacy/2026-10-14/` exists — the 2026-10-14 pass was derived-only and
  never touched the capture.)
- **Manifest re-cut** — `tools/record-manifest.mjs` (added this pass, adapted from
  `templates/record-manifest.mjs`, canonical SKIP/NOT_CAPTURED set so no
  `readable/`/`src/`/`legacy/`/`split-spec.json`/`rename-map.json` leak) re-cut `.upstream/manifest.json`
  from the tree: **190 files, 28.1 MB**. The served bytes carry **0 nonce / CSP-token / UUID
  occurrences**, so every entry is hash-checkable and **no `dynamic: true` flag is needed**.
- **Re-derivation** — the prettier fixed-point method was re-proven on the **old** bundle first: 5
  archived `legacy/2026-10-15/` capture↔pretty pairs re-render byte-exact under pinned prettier 3.9.6
  (module API, parser babel/css, format-to-fixed-point). `tools/derive.mjs` then re-cut the new build:
  **123 readable files** (122 pretties — 100 capture-JS + 11 capture-CSS twins + 11 inline twins —
  plus `index-inline-map.json`), **1,433 statement-aligned slices across 97 app chunks** (was 1,187
  across 92), **89 skipped** export-table sections, **25 wholeFile** sections, **74 notRendered**
  binary records. The vendor table and reading order were made **hash-stable**: the entry chunk is now
  found from the entry document's module `<script src>` and the vendored engines from the `WHOLE_FILE`
  table, so no per-build hash is hardcoded for classification (the three.js r186 chunk rotated to
  `tokyo/assets/three-x0mFGRTI.js`, the `VENDOR_GUARDS` updated).
- **Rename campaign re-anchored** — `tools/names.json` is keyed by capture path, so the rotated
  hashes invalidated every key. It was rebuilt by **token-shape alignment**: each old chunk was matched
  to its new twin by a hash-insensitive normalized-content signature (and, where ambiguous, by the
  chunk's own export-table public names) — **37 old entries → 37 new keys** (7 hash-insensitively
  identical, 20 basename-unique, 10 same-dir twins). Rules for the **34 chunks whose locals the
  minifier preserved** transferred verbatim (every evidence-driven rule re-confirmed against the new
  build's own export tables/imports: **94 confirmed, 0 conflicts**). For the **5 chunks whose
  minifier reassigned locals** (`animator`, `bag`, `fullmap`, `tokyo`, `ui`) the stale rules were
  dropped and **re-derived from the new build's fresh evidence** (`tools/propose-names.mjs`, +20
  proposals — e.g. `Da`→`mountBag` was `ma`, `A`→`FullMap` was `k`, `gt`→`TOKYO` was `lt`,
  `R`→`mountCloudSettings` was `F`). Curated rules were spot-verified against the new source
  (`h`→`REFRESH_MARGIN_S` = 120, `c`→`CELL_PX` = 128, `l`→`ATLAS_COLS` = 4, `f`→`MISSING_RECT` — all
  unchanged). Result: **247 rules across 38 chunks** (was 244/37), **777 identifier splices**,
  recovered into `rename-map.json` (**466 records — 140 word-boundary + 139 indexed names over 326
  occurrences — across 47 renamed slices**; was 461/45). `apply-names -> recover-scoped-map ->
  derive` is the whole regeneration path; the engine still carries the (s) outside-ranged refusal +
  per-source line cache and the (p) shorthand refusal (1 rule skipped — a shorthand import).
- **Gates (verbatim tails, 2026-10-15)**:

```
node tools/verify.mjs
  190 files checked, 0 problems

node tools/record-manifest.mjs --check
  record-manifest --check: 190 files match the committed record

node tools/derive.mjs
  derive: 123 readable file(s), 1433 src slices (1433/1433 parse standalone, 1433/1433 round-trip
  byte-exact through the recorded map), 89 skipped, 25 wholeFile, 109 pretty js parse clean, 74
  notRendered, 0 orphan(s) pruned — self-check clean

node tools/derive.mjs --check
  DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier 3.9.6 (nothing written)

node tools/audit.js
  AUDIT PASS — 1547 spec sections (1433/1433 src↔pretty round-trips byte-exact through the recorded
  rename map, 47 renamed slice(s), 122/122 pretty sources tiled contiguously, 89/89 skipped
  export-table sections re-verified textually, 1433/1433 src slices + 109/109 readable/*.pretty.js
  parse standalone (node --input-type=module --check -), 122/122 pretties provably distinct from their
  capture source, 114 index-only wholeFile/skipped sections carry no src file, 11 inline content
  block(s) with twins + index-inline-map.json, 397/406 imports resolve inside the capture (9
  whitelisted machinery, 0 accepted as recorded 404 gaps), rename map: 466 record(s) over 47 slice(s),
  all indices address the recorded identifiers and no foreign position, 122/122 pretties re-render
  byte-exact under pinned prettier 3.9.6 (format-to-fixed-point), capture manifest free of derived layers)

node tools/verify-rename.mjs --all
  verify-rename: 1433/1433 slice(s) reproduce byte-exact, 47 renamed slice(s) (326 indexed
  occurrence(s)), 97/97 chunk(s) references+bindings YES

node tools/check-chunk.mjs --all
  check-chunk: 97 chunk(s), 1433 slice body(ies) substituted — all cross-slice calls resolve

node tools/update.mjs
  up to date: 190 captured files identical upstream

serve probe (loopback 8791): /tokyo/ -> 200 (53,044 B); tokyo/assets/game-CPWU_QWx.js -> 200
  (69,824 B); tokyo/assets/garage-BvwUBeJB.js -> 200 (21,043 B);
  tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.js -> 200 (60,019 B); /avatars/manifest.json -> 200
  (20,886 B); /avatars/kai.glb -> 200 (979,920 B); /tokyo/title/menu-2560.webp -> 200 (452,370 B);
  /avatars/basis/basis_transcoder.wasm -> 200 (527,333 B); tokyo/assets/tokyo-CsxGFiHR.css -> 200
  (114,157 B); listener killed (PID 12,196), port 8791 verified closed (netstat: no LISTENING,
  connection refused)
```

### 2026-10-27 vendor + export-coverage pass

The 2026-10-15 tails above predate the 2026-10-21 export-tail re-keying (commit
`618f672`): the spec now carries **1637** sections (was 1547) because every app
chunk's final export table also has a **capture-keyed tail** (89 extra skipped
sections), and the reading copy's own copy of that table is an index-only
**wholeFile** tile (**115** wholeFile sections, was 25; 204 index-only
wholeFile/skipped sections carry no src file). Re-measured verbatim:

```
node tools/verify.mjs
  190 files checked, 0 problems

node tools/record-manifest.mjs --check
  record-manifest --check: 190 files match the committed record

node tools/derive.mjs --check
  DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier 3.9.6 (nothing written)

node tools/audit.js
  AUDIT PASS — 1637 spec sections (1433/1433 src↔pretty round-trips byte-exact through the recorded
  rename map, 47 renamed slice(s), 122/122 pretty sources tiled contiguously, 89/89 skipped
  export-table sections re-verified textually, 1433/1433 src slices + 109/109 readable/*.pretty.js
  parse standalone (node --input-type=module --check -), 122/122 pretties provably distinct from their
  capture source, 204 index-only wholeFile/skipped sections carry no src file, 11 inline content
  block(s) with twins + index-inline-map.json, 397/406 imports resolve inside the capture (9
  whitelisted machinery, 0 accepted as recorded 404 gaps), rename map: 466 record(s) over 47 slice(s),
  all indices address the recorded identifiers and no foreign position, 122/122 pretties re-render
  byte-exact under pinned prettier 3.9.6 (format-to-fixed-point), capture manifest free of derived layers)

node tools/verify-rename.mjs --all
  verify-rename: 1433/1433 slice(s) reproduce byte-exact, 47 renamed slice(s) (326 indexed
  occurrence(s)), 97/97 chunk(s) references+bindings YES

node tools/check-chunk.mjs --all
  check-chunk: 97 chunk(s), 1433 slice body(ies) substituted — all cross-slice calls resolve

node tools/check-exports.mjs
  check-exports: 91 export table(s) checked
  check-exports: 89 export table(s) NOT covered (no derived text) — these are unchecked, not proven intact
  check-exports: no public export name lost
```

**What the export numbers mean here (measured, not assumed).** The capture has
**90 JS files with an export table**: 89 app chunks (one final `export {…}` table
each) plus the three.js vendor bundle. All **90 are checked**: the 89 app tables
through their **capture-keyed tail** (pristine = the live served chunk, derived =
the recorded reading-copy table — two different files), the three.js table through
its whole-file vendor section. Every one of the 89 chunks has an importer in the
capture (e.g. `dom` ← `game`/`actors`/`garage`/`fullmap`/`bag`/`market`/`region-*`,
`airliner` ← `game`, `analytics` ← `engine`), so all are load-bearing.

The **89 NOT covered** rows are the *reading copy's own copies* of those same 89
tables. Their public names are byte-for-byte the same set as the capture-side table
in **89/89** cases, so comparing the reading copy with a recorded copy of itself
would be a self-compare — a comparison that can never fail. The spec deliberately
compares each table **once**, live, through its capture key and reports the
reading-copy twin honestly as NOT covered. `checked` is therefore the full capture
surface, not a fraction of it; raising `checked` by re-keying the twin would only
add a tautology.

- **Origin redeploys with rotated chunk hashes — an external, non-content condition.** The
  `update.mjs` tail above was green at capture time (2026-10-15 ~09:37 UTC). The origin then
  **re-deployed the identical app with a fresh set of chunk hashes within minutes**, and does so
  repeatedly: by ~13:00, ~13:10 and ~13:25 the live entry referenced three different `game-*.js`
  names. The content is **provably unchanged** — the live entry (53,044 B) and the live entry chunk
  are byte-identical to the capture **after collapsing hashed filenames** (normalized sha256 match),
  and the avatars manifest/key art are unchanged. So the raw probe's `live-missing`/`changed` rows
  are **hash churn, not content drift**: a strict byte probe against a per-deploy rehashing origin
  cannot stay green, and the mirror records the captured deploy as its point-in-time snapshot. The
  probe is deliberately **not weakened** (PLAN §2); this is recorded as the refresh's known
  external condition. Re-verify content equivalence any time with the normalized compare in this
  note (collapse `-<hash>` before `.js`/`.css`/… on both sides).
- **Boot test** (`docs/boot-2026-10-15.png`, gameplay `docs/gameplay-2026-10-15.png`) — the served
  mirror boots to the TOKYO RUSH title screen (3D Tokyo night cityscape with Tokyo Tower/Shibuya
  Skye), enters the world as a guest (no login) and plays: the character 阿傑 on a Tokyo street with
  traffic, pedestrians and station buildings — both shots are the game running from the mirror's
  files only (opencli browser against the loopback server). `docs/cover.png` is the earlier
  2026-10-13 gameplay shot and stays.
- **Honest gaps** — (1) the **55 → 59 chunks with no recorded renames** (the giant `region-tokyo`,
  `actors`, `world`, the workers/engine/asset chunks, and the newly-added `garage`) still keep the
  bundle's own minified top-level names; the tooling is in place for further batches and
  `split-spec.sources[].renameBindings` / `rename-map.json` are the record of exactly what is applied.
  (2) `locals inside function bodies` are still out of scope (the campaign renames top-level bindings
  and import aliases only). (3) Vendor identifiers (three.js r186, Basis, Vercel insights) stay
  wholeFile and unrenamed. (4) Public API names (the aliased side of every `export { local as Public }`)
  and shorthand positions are refused by design. (5) `docs/cover.png` was not re-shot this pass (it is
  already a gameplay shot); the new gameplay screenshot is the refresh evidence.

## Mirror conventions

- **Capture layer** — byte-exact copies of what the origin served; nothing in
  them is edited; vendor files keep their original bytes.
- **Readable layer** — `readable/` is derived (prettified) and never shipped
  to a browser; it exists so the bundle can actually be read.
- **Provenance** — `.upstream/manifest.json` records sha256 for each captured
  artifact, and `tools/verify.mjs` re-checks it.
- **Drift** — `tools/update.mjs` is read-only: it reports what changed upstream
  and never rewrites the capture. (Local-only records like `_mirror-report.json`
  and the root-form duplicates always probe fine; the entry and all HTML are
  compared normalized.)
- **Rename layer** — semantic identifiers in `src/` are a *recorded* layer, not
  hand edits: `tools/names.json` (reviewed, evidence-annotated) → applied by
  `tools/apply-names.mjs` → recovered into `rename-map.json` → re-applied by
  `tools/derive.mjs` on every re-cut, and re-proved by `tools/audit.js`,
  `tools/verify-rename.mjs` and `tools/check-chunk.mjs`. Public/vendor names and
  shorthand positions are never renamed (see the 2026-10-14 note).

## Fleet status

<!-- mirror-status:start — feeds _standard/REPO-INDEX.md. Update ONLY your own mirror's block; never edit the shared index (PLAN §8). Rebuild: node _standard/build-index.mjs -->
<!-- cols: cls=classification · ver=verify 0 problems · upd=drift probe · man=manifest · rdbl=readable re-derived · src=reversed src · boot=boot test · top=offline-mirror topic · tag=backup tag · staged=staged not committed -->
| # | repo | cls | ver | upd | man | rdbl | src | boot | top | tag | staged |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 308 | taipei-rush-tokyo | mirror | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
<!-- mirror-status:end -->
