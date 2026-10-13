// tokyo__assets__region-tokyo-BcM3fReU 263 — lane
// Lines 103232-103669 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function a4(e, t = {}) {
  let n = e.ctx,
    r = Ie(n),
    i = (e) => n.t(Ae(r, e)),
    a = n.params.has(`autosolve`),
    o = t.breakS ?? 9,
    s = new ne(P(`tokyo:karaoke:decoys`)),
    c = [],
    l = [],
    u = [],
    d = 2.4;
  for (let e of $2)
    if (e.kind === `verse`) {
      let t = 60 / e.bpm;
      for (let e = 4; e >= 1; e--) u.push(d - e * t);
      for (let n of e.lines) {
        let r = Q2[n],
          i = d,
          a = 0,
          o = -9,
          s = null;
        r.chart.split(` `).forEach((n, l) => {
          let [u, d, f] = n.split(`:`).map(Number);
          if (s && u - o < 0.5) {
            ((s.k += r.kana[l] ?? ``),
              f && (s.hold = Math.max(s.hold, (u - o + f) * t)),
              (a = Math.max(a, u + (f || 0))));
            return;
          }
          let p = s && u - o < 1 ? s.lane : d;
          ((s = {
            t: i + u * t,
            lane: p,
            k: r.kana[l] ?? ``,
            hold: (f || 0) * t,
            travel: e.travel,
            decoy: !1,
            el: null,
            tail: null,
            st: 0,
          }),
            c.push(s),
            (o = u),
            (a = Math.max(a, u + (f || 0))));
        });
        let f = Math.ceil(a) + 2;
        for (let e = 0; e < f; e++) u.push(i + e * t);
        ((d = i + f * t), l.push({ t0: i, t1: d, kind: `line`, i: n }));
      }
    } else {
      let t = d;
      for (let e = t + 1.2; e < t + o - 1.6; e += s.range(0.8, 1.4))
        c.push({
          t: e,
          lane: s.int(0, 2),
          k: `✕`,
          hold: 0,
          travel: 1.3,
          decoy: !0,
          el: null,
          tail: null,
          st: 0,
        });
      ((d = t + o), l.push({ t0: t, t1: d, kind: `break`, i: e.i }));
    }
  let f = d + 0.6,
    p = c.filter((e) => !e.decoy).reduce((e, t) => e + 2 + +(t.hold > 0), 0),
    m = null,
    h = null,
    g = null,
    _ = null,
    v = null,
    y = null,
    b = null,
    x = null,
    S = null,
    C = null,
    w = [],
    T = [],
    E = 136,
    D = [],
    O = [],
    k = !!n.input.isTouch;
  if (typeof document < `u`) {
    if (!document.getElementById(`tk-kara-css`)) {
      let e = document.createElement(`style`);
      ((e.id = `tk-kara-css`),
        (e.textContent = Z2),
        document.head.appendChild(e));
    }
    ((m = document.createElement(`div`)),
      (m.id = `tk-kara`),
      (m.innerHTML = `<div class="tk-head"><span class="tk-title">♪ 終電ララバイ</span><span class="tk-combo"></span><span class="tk-hint"></span></div><div class="tk-lanes"></div><div class="tk-lyric"></div><div class="tk-sub"></div><div class="tk-meters"><div class="tk-c"><span></span><div class="tk-bar"><i></i></div></div><div class="tk-r"><span></span><div class="tk-bar"><i></i></div></div></div><div class="tk-grade"></div>`));
    let e = m.querySelector(`.tk-lanes`);
    k && m.classList.add(`touch`);
    let t = i4(`點這裡`, `TAP`, `タップ`),
      n = k ? [i(t), i(t), i(t)] : [`F ←`, `␣ ↓`, `J →`],
      r = [
        i4(`高`, `high`, `高`),
        i4(`中`, `mid`, `中`),
        i4(`低`, `low`, `低`),
      ];
    for (let t = 0; t < 3; t++) {
      let a = document.createElement(`div`);
      ((a.className = `tk-lane tk-l${t}`),
        (a.innerHTML = `<div class="tk-tag"></div><div class="tk-hit"></div><div class="tk-key"></div><div class="tk-judge"></div>`),
        (a.querySelector(`.tk-tag`).textContent = i(r[t])),
        (a.querySelector(`.tk-key`).textContent = n[t]));
      let o = (e) => {
          (e.preventDefault(),
            D.push({ lane: t, down: !0, at: performance.now() }));
        },
        s = () => D.push({ lane: t, down: !1, at: performance.now() });
      (a.addEventListener(`pointerdown`, o),
        a.addEventListener(`pointerup`, s),
        a.addEventListener(`pointercancel`, s),
        a.addEventListener(`pointerleave`, s),
        e.appendChild(a),
        w.push(a),
        T.push(a.querySelector(`.tk-judge`)));
    }
    ((h = m.querySelector(`.tk-lyric`)),
      (g = m.querySelector(`.tk-sub`)),
      (_ = m.querySelector(`.tk-hint`)),
      (v = m.querySelector(`.tk-combo`)),
      (y = m.querySelector(`.tk-c`)),
      (b = m.querySelector(`.tk-r`)),
      (x = m.querySelector(`.tk-c i`)),
      (S = m.querySelector(`.tk-r i`)),
      (C = m.querySelector(`.tk-grade`)),
      (m.querySelector(`.tk-c span`).textContent = i(
        i4(`像在唱歌`, `Cover`, `ごまかし`),
      )),
      (m.querySelector(`.tk-r span`).textContent = i(
        i4(`竊聽錄音`, `Recording`, `盗聴の録音`),
      )),
      document.body.appendChild(m),
      (E = w[0].clientHeight || E));
    let a = {
        KeyF: 0,
        KeyD: 0,
        ArrowLeft: 0,
        Space: 1,
        ArrowDown: 1,
        KeyE: 1,
        KeyJ: 2,
        KeyK: 2,
        ArrowRight: 2,
      },
      o = (e) => {
        let t = a[e.code];
        t !== void 0 &&
          (e.preventDefault(),
          e.repeat || D.push({ lane: t, down: !0, at: performance.now() }));
      },
      s = (e) => {
        let t = a[e.code];
        t !== void 0 && D.push({ lane: t, down: !1, at: performance.now() });
      };
    (window.addEventListener(`keydown`, o, !0),
      window.addEventListener(`keyup`, s, !0),
      O.push(
        () => window.removeEventListener(`keydown`, o, !0),
        () => window.removeEventListener(`keyup`, s, !0),
      ));
  }
  let A = () => {
    for (let e of O.splice(0)) e();
    (m?.remove(), (m = null));
  };
  (e.onCleanup(A), e.lockPlayer(!0), e.onCleanup(() => e.lockPlayer(!1)));
  let j = k
      ? i4(
          `音符落到黃線時，點下面的按鈕`,
          `Tap the button below as a note reaches the yellow line`,
          `音符が黄色い線に来たら下のボタンをタップ`,
        )
      : i4(
          `F・空白・J（或 ← ↓ →）`,
          `F · Space · J (or ← ↓ →)`,
          `F・スペース・J（← ↓ →）`,
        ),
    M = { kind: `karaoke`, x: e.px, z: e.pz },
    ee = 0,
    te = -1,
    N = 0,
    re = 0,
    ie = 0,
    ae = 0,
    oe = 0.65,
    se = 1,
    ce = 0,
    le = 0,
    ue = 0,
    de = null,
    fe = [null, null, null],
    pe = [!1, !1, !1],
    me = [0, 0, 0],
    he = [!1, !1, !1],
    ge = (e, t, n) => {
      let r = T[e];
      r &&
        ((r.className = `tk-judge show ${t}`),
        (r.textContent = n),
        (me[e] = 0.35));
    },
    _e = (e, t) => {
      let n = Math.abs(t) <= e4;
      (n ? (ce++, (ae += 2), (oe += 0.04)) : (le++, (ae += 1), (oe += 0.03)),
        re++,
        (ie = Math.max(ie, re)),
        ge(e.lane, n ? `p` : `g`, n ? `PERFECT` : `GOOD`),
        e.el?.classList.add(`ok`),
        e.hold > 0
          ? ((e.st = 2), (fe[e.lane] = e), e.tail?.classList.add(`on`))
          : (e.st = 1));
    },
    ve = (e) => {
      ((e.st = -1),
        ue++,
        (re = 0),
        (oe -= 0.055),
        ge(e.lane, `m`, `MISS`),
        e.el?.classList.add(`miss`));
    },
    ye = (e, t, n) => {
      let r = null,
        a = 1 / 0;
      for (let n of c) {
        if (n.decoy || n.st !== 0 || n.lane !== e) continue;
        let i = t - n.t;
        if (i < -0.22) break;
        Math.abs(i) < Math.abs(a) && ((a = i), (r = n));
      }
      if (r && Math.abs(a) <= t4) return _e(r, a);
      if (n) {
        let n = c.some(
          (n) => n.decoy && n.lane === e && Math.abs(n.t - t) < 0.15,
        );
        ((se -= n ? 0.12 : 0.08),
          ge(e, `m`, i(i4(`雜音！`, `NOISE!`, `ノイズ！`))));
        return;
      }
      !r || Math.abs(a) > n4
        ? ((oe -= 0.015), (re = 0), ge(e, `m`, i(i4(`走音`, `OFF`, `ハズレ`))))
        : ve(r);
    },
    be = (e, t) => {
      let n = fe[e];
      if (n) {
        if (((fe[e] = null), t >= n.t + n.hold - r4)) return xe(n);
        ((n.st = -2),
          (re = 0),
          (oe -= 0.03),
          n.tail?.classList.replace(`on`, `broken`),
          ge(e, `m`, i(i4(`斷了`, `DROP`, `途切れ`))));
      }
    },
    xe = (e) => {
      ((e.st = 3),
        (fe[e.lane] = null),
        (ae += 1),
        (oe += 0.03),
        e.tail?.remove(),
        (e.tail = null));
    };
  (await e.until((n) => {
    if (de) return !0;
    ((ee += n), (e.waitFor = M));
    let o = performance.now(),
      s = l.findIndex((e) => ee >= e.t0 && ee < e.t1);
    if (s !== te) {
      te = s;
      let e = l[s];
      if (e) {
        let n = e.kind === `break`;
        (m?.classList.toggle(`break`, n),
          n
            ? (h &&
                (h.textContent = i(
                  i4(`♪（間奏）`, `♪ (instrumental)`, `♪（間奏）`),
                )),
              g &&
                (g.textContent = i(
                  i4(
                    `別出聲——紅色 ✕ 不是你的拍子，竊聽器在聽隔壁`,
                    `Stay quiet — the red ✕ aren't yours; the bug is listening next door`,
                    `静かに——赤い✕は押さない。盗聴器が隣を聞いてる`,
                  ),
                )),
              _ && (_.textContent = i(i4(`別按鍵`, `Don't press`, `押さない`))),
              t.onBreak?.(e.i, oe))
            : (h && (h.textContent = Q2[e.i].line.ja ?? ``),
              g && (g.textContent = r === `ja` ? `` : i(Q2[e.i].line)),
              _ && (_.textContent = i(j)),
              t.onLine?.(e.i)));
      } else ee < 2.4 && _ && (_.textContent = i(j));
    }
    let d = l[te]?.kind === `break`;
    for (; N < u.length && u[N] <= ee;)
      (ee - u[N] < 0.1 && e.sfx(`crosswalk_tick`, { ui: !0 }), N++);
    if (a) {
      for (let e of c)
        if (!(e.decoy || e.st !== 0)) {
          if (e.t > ee) break;
          _e(e, 0);
        }
      for (let e = 0; e < 3; e++) {
        let t = fe[e];
        t && ee >= t.t + t.hold && xe(t);
      }
    } else {
      let e =
          typeof navigator < `u` && navigator.getGamepads
            ? navigator.getGamepads()
            : null,
        t = [!1, !1, !1];
      if (e)
        for (let n of e) {
          if (!n) continue;
          let e = (e) => !!n.buttons[e]?.pressed;
          ((t[0] ||= e(14) || e(2)),
            (t[1] ||= e(0) || e(13)),
            (t[2] ||= e(15) || e(1)));
        }
      for (let e = 0; e < 3; e++)
        t[e] !== he[e] &&
          (D.push({ lane: e, down: t[e], at: o }), (he[e] = t[e]));
    }
    for (let e of D.splice(0)) {
      let t = Math.max(ee - n - 0.05, ee - (o - e.at) / 1e3);
      ((pe[e.lane] = e.down), e.down ? ye(e.lane, t, d) : be(e.lane, t));
    }
    for (let e = 0; e < 3; e++) {
      let t = fe[e];
      t && ee >= t.t + t.hold && xe(t);
    }
    for (let e of c) {
      if (e.t - ee > 3) break;
      !e.decoy && e.st === 0 && ee - e.t > t4 && ve(e);
    }
    if (
      ((oe = Math.min(1, oe)),
      oe <= 0
        ? (de = i4(
            `隔壁起疑了：「這間根本沒在唱歌吧？」`,
            `Next door got suspicious: "Is anyone in there even singing?"`,
            `隣に怪しまれた：「あの部屋、ほんとに歌ってるか？」`,
          ))
        : se < 0.3 &&
          (de = i4(
            `雜音太多，竊聽器什麼都沒錄到`,
            `Too much noise — the bug recorded nothing usable`,
            `ノイズだらけで、盗聴器に何も録れなかった`,
          )),
      m)
    ) {
      let e = E - (k ? 58 : 22);
      for (let t of c) {
        let n = t.t - ee;
        if (n > t.travel) break;
        let r =
          n < -0.35 && t.st !== 2 && !(t.tail && t.t + t.hold - ee > -0.2);
        if (!r && !t.el && t.st >= 0 && n > -0.3) {
          let n = w[t.lane];
          (t.hold > 0 &&
            ((t.tail = document.createElement(`div`)),
            (t.tail.className = `tk-tail`),
            (t.tail.style.height = `${(t.hold / t.travel) * e}px`),
            n.appendChild(t.tail)),
            (t.el = document.createElement(`div`)),
            (t.el.className = t.decoy ? `tk-note decoy` : `tk-note`),
            (t.el.textContent = t.k.length > 2 ? t.k.slice(0, 2) : t.k),
            n.appendChild(t.el));
        }
        if (r || (t.decoy && n < -0.3)) {
          (t.el?.remove(), (t.el = null), t.tail?.remove(), (t.tail = null));
          continue;
        }
        let i = (1 - n / t.travel) * e;
        if (
          (t.el &&
            (t.el.style.transform = `translateY(${Math.min(i, e + 30)}px)`),
          t.tail)
        ) {
          let n = (1 - (t.t + t.hold - ee) / t.travel) * e,
            r = t.st === 2 ? e : i;
          ((t.tail.style.height = `${Math.max(0, r - n)}px`),
            (t.tail.style.transform = `translateY(${n}px)`));
        }
      }
      for (let e = 0; e < 3; e++)
        (w[e].classList.toggle(`down`, pe[e] || !!fe[e]),
          me[e] > 0 && (me[e] -= n) <= 0 && T[e].classList.remove(`show`));
      (v && (v.textContent = re >= 5 ? `${re} COMBO` : ``),
        x && (x.style.width = `${Math.max(0, oe) * 100}%`),
        S && (S.style.width = `${Math.max(0, se) * 100}%`),
        y?.classList.toggle(`low`, oe < 0.3),
        b?.classList.toggle(`low`, se < 0.7));
    }
    return ee >= f;
  }),
    (e.waitFor = null));
  let Se = ae / Math.max(1, p),
    Ce =
      Se >= 0.95
        ? `S`
        : Se >= 0.85
          ? `A`
          : Se >= 0.7
            ? `B`
            : Se >= 0.5
              ? `C`
              : `D`;
  if (m && C) {
    (m.classList.add(`done`), C.classList.toggle(`fail`, !!de));
    let t = document.createElement(`b`);
    t.textContent = de ? i(i4(`失敗`, `FAILED`, `失敗`)) : Ce;
    let n = document.createElement(`span`);
    n.textContent = de
      ? i(de)
      : `${i(i4(`最大連擊`, `Max combo`, `最大コンボ`))} ${ie} · PERFECT ${ce} · GOOD ${le} · MISS ${ue}`;
    let r = document.createElement(`div`);
    (r.append(t, n), C.appendChild(r), await e.wait(2.6));
  }
  return (
    A(),
    e.lockPlayer(!1),
    {
      cover: Math.max(0, oe),
      recording: Math.max(0, se),
      accuracy: Se,
      grade: Ce,
      maxCombo: ie,
      failed: de,
    }
  );
}
