// tokyo/assets/region-tokyo-A7LxHjud 459 — scores
// Lines 166348-166481 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function T5(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function SBe(e, t) {
  let n = N8(t, e.rounds ?? 1, p8),
    r = !1;
  for (;;) {
    let t = n.round;
    for (; t.phase !== `over`;) {
      let i = t.turn,
        a = i === 1 ? e.opponent.style : `expert`;
      if (t.phase === `play`) {
        let e = U8(t, i, a);
        E8(t, e.card, e.target);
      } else if (t.phase === `flip`) D8(t);
      else if (t.phase === `drawn`) O8(t, W8(t, i, a));
      else {
        let e = K8(t, i, a, n.scores[i] - n.scores[+!i]);
        (i === 0 && !e && (r = !0), k8(t, e));
      }
    }
    if (!P8(n)) break;
  }
  return {
    playerPoints: n.scores[0],
    aiPoints: n.scores[1],
    won: n.scores[0] > n.scores[1],
    stoppedWell: r,
    rounds: n.history.length,
  };
}
async function CBe(e, t) {
  let n = e.ctx,
    r = (t.seed ?? 1802463536) >>> 0;
  if (typeof document > `u`) return SBe(t, r);
  let i = Ge(n),
    a = new xBe({
      lang: i,
      t: (e) => n.t(Ye(i, e)),
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
r.add({
  拿回被沒收的手機: `没収された携帯を取り返す`,
  拔下伺服器的硬碟: `サーバーのドライブを抜く`,
  伺服器: `サーバー`,
});
