// tokyo/assets/region-tokyo-BcM3fReU 255 — createelement
// Lines 100995-101296 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function y2(e, t) {
  let n = e.ctx;
  if (typeof document > `u`) return { index: -1, score: t.timeoutScore ?? 0 };
  if (!g2) {
    g2 = !0;
    let e = document.createElement(`style`);
    ((e.id = `tk-choice-css`),
      (e.textContent = h2),
      document.head.appendChild(e),
      (window.__tokyoChoice = (e) => _2?.(e)));
  }
  let r = Ie(n),
    i = t.secs ?? 9,
    a = document.createElement(`div`);
  if (((a.id = `tk-choice`), t.prompt)) {
    let e = document.createElement(`div`);
    ((e.className = `tc-q`),
      (e.textContent = n.t(Ae(r, t.prompt))),
      a.appendChild(e));
  }
  let o = document.createElement(`div`);
  o.className = `tc-bar`;
  let s = document.createElement(`i`);
  (o.appendChild(s), a.appendChild(o));
  let c = t.options.map((e, t) => t);
  if (t.shuffle !== !1) {
    let e = new ne(
      P(`tk-choice`, t.prompt?.zh ?? ``, ...t.options.map((e) => e.text.zh)),
    );
    for (let t = c.length - 1; t > 0; t--) {
      let n = Math.floor(e.next() * (t + 1));
      [c[t], c[n]] = [c[n], c[t]];
    }
  }
  let l = null,
    u = 0,
    d = c.map((e, i) => {
      let o = t.options[e],
        s = document.createElement(`button`);
      s.type = `button`;
      let c = document.createElement(`kbd`);
      c.textContent = String(i + 1);
      let d = document.createElement(`span`);
      return (
        (d.textContent = n.t(Ae(r, o.text))),
        s.append(c, d),
        s.addEventListener(`pointerdown`, (e) => {
          (e.preventDefault(), e.stopPropagation(), l === null && (l = i));
          try {
            e.pointerType === `mouse` && n.input.lockPointer();
          } catch {}
        }),
        s.addEventListener(`pointerenter`, () => {
          ((u = i), f());
        }),
        a.appendChild(s),
        s
      );
    }),
    f = () => d.forEach((e, t) => e.classList.toggle(`sel`, t === u));
  (f(), document.body.appendChild(a));
  let p = !!t.prompt;
  p && document.body.classList.add(`tk-choosing`);
  let m = !1;
  try {
    (n.ui.setExternalMenu?.(!0),
      (m = !0),
      document.pointerLockElement && document.exitPointerLock());
  } catch {}
  _2 = (e) => {
    l === null && e >= 0 && e < t.options.length && (l = c.indexOf(e));
  };
  let h = t.options.reduce(
      (e, t, n, r) => ((t.score ?? 0) > (r[e].score ?? 0) ? n : e),
      0,
    ),
    g = { kind: `choice`, x: e.px, z: e.pz, best: h },
    _ = e.waitFor;
  ((e.waitFor = g), e.lockPlayer(!0));
  let v = !1,
    y = () => {
      if (!v) {
        if (
          ((v = !0),
          a.remove(),
          p && document.body.classList.remove(`tk-choosing`),
          (_2 = null),
          m)
        ) {
          m = !1;
          try {
            n.ui.setExternalMenu?.(!1);
          } catch {}
        }
        (e.waitFor === g && (e.waitFor = _), e.lockPlayer(!1));
      }
    };
  e.onCleanup(y);
  let b = n.input.keys,
    x = new Set(),
    S = !1,
    C = (e, t) => {
      let n = x.has(e);
      return (t ? x.add(e) : x.delete(e), S && t && !n);
    },
    w = n.params.has(`autosolve`),
    T = 0;
  (await e.until((e) => {
    ((T += e),
      (s.style.transform = `scaleX(${Math.max(0, 1 - T / i)})`),
      w && T > 1 && (l ??= c.indexOf(h)));
    let n = v2();
    for (let e = 0; e < t.options.length; e++)
      C(`d${e}`, !!b?.has(`Digit${e + 1}`) || !!b?.has(`Numpad${e + 1}`)) &&
        (l ??= e);
    return (
      C(`up`, !!b?.has(`ArrowUp`) || n.up) &&
        ((u = (u + t.options.length - 1) % t.options.length), f()),
      C(`down`, !!b?.has(`ArrowDown`) || n.down) &&
        ((u = (u + 1) % t.options.length), f()),
      C(`ok`, !!b?.has(`Enter`) || !!b?.has(`KeyE`) || n.a) && (l ??= u),
      (S = !0),
      l !== null || T >= i
    );
  }),
    y());
  let E = l === null ? -1 : c[l];
  return {
    index: E,
    score: E >= 0 ? (t.options[E].score ?? 0) : (t.timeoutScore ?? 0),
  };
}
var b2 = `
#tk-addr { position: fixed; right: max(14px, env(safe-area-inset-right)); top: calc(96px + env(safe-area-inset-top)); z-index: 18; min-width: 210px;
  padding: 10px 14px 11px; border-radius: 8px; background: #1d3f8f; color: #fff; border: 2px solid #f4f4f4; box-shadow: 0 2px 10px rgba(0,0,0,.35);
  font: 700 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; pointer-events: none; }
#tk-addr .ta-k { font-size: 11px; font-weight: 600; opacity: .8; letter-spacing: .08em; }
#tk-addr .ta-t { font-size: 18px; margin: 2px 0 8px; letter-spacing: .04em; }
#tk-addr .ta-h { font-size: 13px; font-weight: 600; opacity: .92; }
#tk-addr .ta-h.near { color: #ffd24d; opacity: 1; }
`;
function x2(e, t, n) {
  try {
    return e.plan.dataset.labels.areaAt?.(t, n) ?? null;
  } catch {
    return null;
  }
}
async function S2(e, t) {
  let n = e.ctx,
    r = x2(n, t.x, t.z),
    i = n.state.lang !== `en`,
    a = n.state.lang === `ja`,
    o = t.radius ?? 4,
    s = null,
    c = null;
  if (typeof document < `u`) {
    if (!document.getElementById(`tk-addr-css`)) {
      let e = document.createElement(`style`);
      ((e.id = `tk-addr-css`),
        (e.textContent = b2),
        document.head.appendChild(e));
    }
    ((s = document.createElement(`div`)), (s.id = `tk-addr`));
    let e = document.createElement(`div`);
    ((e.className = `ta-k`),
      (e.textContent = a
        ? `探している住所`
        : i
          ? `要找的地址`
          : `LOOKING FOR`));
    let t = document.createElement(`div`);
    ((t.className = `ta-t`),
      (t.textContent = r
        ? i
          ? (r.plate.ja ?? r.plate.zh)
          : `${r.plate.ja ?? ``}  ${r.plate.en}`
        : ``),
      (c = document.createElement(`div`)),
      (c.className = `ta-h`),
      s.append(e, t, c),
      document.body.appendChild(s));
  }
  (e.onCleanup(() => s?.remove()),
    e.objective(
      F(
        `照著街角的藍色門牌找到地址（沒有導航）`,
        `Find the address by the blue plates on the corners (no GPS)`,
      ),
    ));
  let l = { kind: `goto`, x: t.x, z: t.z, onFoot: !0 };
  e.waitFor = l;
  let u = 0,
    d = ``,
    f = n.time.real + (t.helpAfter ?? 120),
    p = !1,
    m = !1;
  return (
    await e.until((s) => {
      if (e.dist(t.x, t.z) <= o && e.onFoot) return !0;
      if (((u += s), u >= 0.4 && c && r)) {
        u = 0;
        let t = x2(n, e.px, e.pz),
          o = t ? `${t.town.zh}|${t.chome}|${t.ban}` : ``;
        if (o !== d) {
          d = o;
          let e = !!t && t.town.zh === r.town.zh && t.chome === r.chome;
          c.classList.toggle(`near`, e);
          let n = t ? (i ? (t.plate.ja ?? t.plate.zh) : t.plate.en) : `—`;
          c.textContent = (a ? `現在地：` : i ? `這裡：` : `Here: `) + n;
        }
      }
      return (
        !p &&
          !m &&
          n.time.real > f &&
          ((m = !0),
          y2(e, {
            prompt: F(`找不到嗎？`, `Can't find it?`, `見つからない？`),
            options: [
              {
                text: F(`打開導航`, `Turn the GPS on`, `ナビをつける`),
                score: 1,
              },
              { text: F(`再找找看`, `Keep looking`, `もう少し探す`), score: 0 },
            ],
            secs: 12,
          }).then((r) => {
            ((m = !1),
              r.index === 0
                ? ((p = !0),
                  e.waypoint(
                    { x: t.x, z: t.z },
                    t.label ?? F(`燕來湯`, `Enrai-yu`, `燕来湯`),
                  ),
                  e.marker({
                    x: t.x,
                    z: t.z,
                    color: 16762941,
                    style: `goto`,
                    radius: o * 0.6,
                  }))
                : (f = n.time.real + 120));
          })),
        (e.waitFor = l),
        !1
      );
    }),
    (e.waitFor = null),
    e.waypoint(null),
    s?.remove(),
    r
  );
}
function C2(e, t) {
  let n = Me.get(e);
  if (!n) throw Error(`[story] ${e} is not in story/chapters.ts`);
  let { mission: r, chapter: i, index: a } = n,
    o = Le(e);
  return {
    id: e,
    title: { zh: r.title.zh, en: r.title.en },
    description: { zh: t.description.zh, en: t.description.en },
    category: `story`,
    reward: r.reward,
    icon: `story`,
    blip: `mission`,
    color: b0,
    glyph: t.glyph,
    order: 200 + a,
    chapter: { zh: i.title.zh, en: i.title.en },
    requires: o ? [o] : void 0,
    giver: t.giver,
    giverName: t.giverName ? K0(t.giverName)[0] : void 0,
    noPolice: t.noPolice,
    autoStart: t.autoStart,
    start: t.start,
    run: t.run,
  };
}
var w2 = { x: 66, z: 43, heading: -Math.PI / 2 },
  T2 = { x: w2.x, z: 52.5, heading: w2.heading },
  E2 = [
    `jy-ueno`,
    `jy-okachimachi`,
    `g-ueno-hirokoji`,
    `g-ueno`,
    `h-naka-okachimachi`,
    `h-ueno`,
    `g-suehirocho`,
  ],
  D2 = () => T0(`tokyo:site:enrai-yu:noren`, -151.4, -876.5, 0);
function O2(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a of e.transit.entrances ?? []) {
    if (a.stationId !== `jy-tokyo`) continue;
    let e = Math.hypot(a.x - t, a.z - n);
    e < i && ((i = e), (r = a));
  }
  return r;
}
