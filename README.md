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
- `readable/` — prettified derived layer (pinned prettier 3.9.6): 104 JS + 11
  CSS pretties plus 11 inline-block twins and `index-inline-map.json`
- `src/` + `split-spec.json` — 1,187 statement-aligned slices across 92 app
  chunks, with the recorded derivation spec
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
- `tools/audit.js` — integrity gate for the derived layers (`AUDIT PASS`)
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
node tools/verify.mjs     # re-hash the capture against the manifest
node tools/audit.js       # derived-layer integrity gate (AUDIT PASS)
```

## Updating from upstream

```
node tools/update.mjs     # read-only drift probe: what changed upstream
```

The probe never rewrites the capture — a mirror is a point-in-time snapshot.
Refreshing means re-running `node tools/capture.mjs` (byte-exact fetch +
closure to fixpoint), re-cutting `readable/` + `src/` with `node tools/derive.mjs`,
and re-passing `node tools/audit.js`; files being replaced go to `legacy/<date>/`.

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
- **Open task** — the identifier rename campaign (PLAN §5) is not done:
  `src/` keeps the bundle's own minified names.

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

## Fleet status

<!-- mirror-status:start — feeds _standard/REPO-INDEX.md. Update ONLY your own mirror's block; never edit the shared index (PLAN §8). Rebuild: node _standard/build-index.mjs -->
<!-- cols: cls=classification · ver=verify 0 problems · upd=drift probe · man=manifest · rdbl=readable re-derived · src=reversed src · boot=boot test · top=offline-mirror topic · tag=backup tag · staged=staged not committed -->
| # | repo | cls | ver | upd | man | rdbl | src | boot | top | tag | staged |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 308 | taipei-rush-tokyo | mirror | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
<!-- mirror-status:end -->
