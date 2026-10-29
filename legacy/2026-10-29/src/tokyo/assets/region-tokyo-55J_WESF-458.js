// tokyo/assets/region-tokyo-55J_WESF 458 — scores
// Lines 165553-165681 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function y5(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function Qze(e, t) {
  let n = D8(t, e.rounds ?? 1, s8),
    r = !1;
  for (;;) {
    let t = n.round;
    for (; t.phase !== `over`;) {
      let i = t.turn,
        a = i === 1 ? e.opponent.style : `expert`;
      if (t.phase === `play`) {
        let e = L8(t, i, a);
        b8(t, e.card, e.target);
      } else if (t.phase === `flip`) x8(t);
      else if (t.phase === `drawn`) S8(t, R8(t, i, a));
      else {
        let e = B8(t, i, a, n.scores[i] - n.scores[+!i]);
        (i === 0 && !e && (r = !0), C8(t, e));
      }
    }
    if (!O8(n)) break;
  }
  return {
    playerPoints: n.scores[0],
    aiPoints: n.scores[1],
    won: n.scores[0] > n.scores[1],
    stoppedWell: r,
    rounds: n.history.length,
  };
}
async function $ze(e, t) {
  let n = e.ctx,
    r = (t.seed ?? 1802463536) >>> 0;
  if (typeof document > `u`) return Qze(t, r);
  let i = Ge(n),
    a = new Zze({
      lang: i,
      t: (e) => n.t(ze(i, e)),
      opponent: {
        name: {
          zh: t.opponent.name.zh,
          en: t.opponent.name.en,
          ...(t.opponent.name.ja ? { ja: t.opponent.name.ja } : {}),
        },
        style: t.opponent.style,
      },
      rounds: t.rounds ?? 1,
      seed: r,
      tutorial: !!t.tutorial,
      auto: n.params.has(`autosolve`),
      onEvent: t.onEvent,
      sfx: (e, t) =>
        n.audio.play(e, { volume: 0.7, ...(t ? { rate: t } : {}) }),
    }),
    o = !1;
  try {
    (n.ui.setExternalMenu?.(!0),
      (o = !0),
      document.pointerLockElement && document.exitPointerLock());
  } catch {}
  let s = n.ui.hudVisible ?? !0;
  try {
    n.ui.setHudVisible(!1);
  } catch {}
  let c = { kind: `koikoi`, x: e.px, z: e.pz },
    l = e.waitFor;
  ((e.waitFor = c), e.lockPlayer(!0));
  let u = window,
    d = {
      state: () => a.snapshot(),
      rects: () => a.rects(),
      play: (e, t) =>
        a.playCard(e)
          ? t !== void 0 && a.mode === `target`
            ? a.pickField(t)
            : !0
          : !1,
      pick: (e) => a.pickField(e),
      decide: (e) => a.choose(e),
      next: () => a.proceed(),
      auto: (e) => {
        a.auto = e;
      },
      seed: r,
    };
  u.__koikoi = d;
  let f = !1,
    p = () => {
      if (!f) {
        if (((f = !0), a.destroy(), u.__koikoi === d && delete u.__koikoi, o)) {
          o = !1;
          try {
            n.ui.setExternalMenu?.(!1);
          } catch {}
        }
        try {
          n.ui.setHudVisible(s);
        } catch {}
        (e.waitFor === c && (e.waitFor = l), e.lockPlayer(!1));
      }
    };
  e.onCleanup(p);
  let m = performance.now();
  await e.until(() => {
    let t = performance.now();
    return (a.update((t - m) / 1e3), (m = t), (e.waitFor = c), a.done);
  });
  let h = a.mt,
    g = {
      playerPoints: h.scores[0],
      aiPoints: h.scores[1],
      won: h.scores[0] > h.scores[1],
      stoppedWell: a.stoppedWell,
      rounds: h.history.length,
    },
    _ = a.lastMouse;
  if ((p(), _))
    try {
      n.input.lockPointer();
    } catch {}
  return g;
}
