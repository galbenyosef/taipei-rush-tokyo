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
  Google Basis KTX2 transcoder and a 42-model Rocketbox avatar set (`.glb`,
  MIT-licensed, listed in `avatars/manifest.json`)
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

The capture is the full runtime closure of 179 files (~22.9 MB): entry document,
95 JS chunks, 9 stylesheets, 14 key-art webp, 12 icons, the avatars family, the
KTX2 transcoder (js + wasm), the Japanese font and the animation bank.

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
  the served paths**: 104 JS + 11 CSS pretties under `readable/tokyo/assets/…`,
  `readable/assets/…`, `readable/avatars/basis/…`, `readable/_vercel/…`, plus 11
  inline-block twins (`readable/tokyo/index-inline-*.pretty.*`) and
  `readable/index-inline-map.json`
- `src/` + `split-spec.json` — 1,187 statement-aligned slices across 92 app
  chunks in the same served-path structure (`src/tokyo/assets/<chunk>-NN.js`),
  re-cut through the recorded rename map, with the derivation spec
- `rename-map.json` + `tools/names.json` — the identifier rename campaign: the
  recovered per-slice map (`files` word-boundary + `scoped` token-index records)
  and the reviewed worklist with per-name evidence
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
- `tools/audit.js` — integrity gate for the derived layers and the rename map
  (`AUDIT PASS`)
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

- **models** — 42 file(s): `avatars/` (e.g. jie.glb, casual-m.glb,
  jp-salaryman2.glb and their `.webp.glb` fallbacks; Microsoft Rocketbox
  Avatar Library, MIT — see `avatars/manifest.json`)
- **images** — 26 file(s): `title/` and `tokyo/title/` (loader/menu key art
  webp, 1600/2560/portrait/phone crops), `icons/` and `tokyo/icons/` (PWA
  icons png/svg)
- **fonts** — 1 file(s): `tokyo/assets/region-tokyo-sans-jp-*.woff2`
- **data** — 3 file(s): `avatars/manifest.json` (avatar index),
  `avatars/basis/basis_transcoder.wasm` (KTX2 decoder),
  `tokyo/assets/anim-CQkLTvTS.bin` (animation bank)
- **audio** — none — radio/engine audio is synthesized at runtime; no audio
  payload file is referenced by the Tokyo closure
- **code** — 95 `.js` + 9 `.css` captured chunks; derived `readable/` +
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
- **Upstream drift observed 2026-10-14 — the next refresh trigger**: the
  read-only probe reports `DRIFT: 2 changed, 64 live-missing (of 179 captured)`
  — `tokyo/index.html` and `avatars/manifest.json` changed and 64 hashed chunks
  are no longer served (the live deploy was replaced, so the old chunk names
  rotated away). The mirror is the **2026-10-13 point-in-time snapshot** and
  stays as captured. A refresh is the PLAN §3 flow: capture → copy every file
  being replaced into `legacy/2026-10-14/` → re-cut `readable/` + `src/` →
  re-author the rename batch for the new hashes (`tools/propose-names.mjs`
  regenerates the evidence rules; `terms/names.json` keys are capture paths) →
  re-pass the four gates → boot test + cover re-shoot.

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
