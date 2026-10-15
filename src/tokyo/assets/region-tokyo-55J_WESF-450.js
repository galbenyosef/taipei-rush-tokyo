// tokyo/assets/region-tokyo-55J_WESF 450 — color
// Lines 160214-160501 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function H6(e, t) {
  let n = e.ctx,
    r = t.range ?? 45,
    i = null,
    a = null,
    o = null,
    s = !1;
  if (typeof document < `u`) {
    if (!document.getElementById(`tk-photo-css`)) {
      let e = document.createElement(`style`);
      ((e.id = `tk-photo-css`),
        (e.textContent = QRe),
        document.head.appendChild(e));
    }
    ((i = document.createElement(`div`)),
      (i.id = `tk-photo`),
      (i.innerHTML = `<div class="tp-frame"></div><div class="tp-hint"></div><div class="tp-flash"></div>`),
      (a = i.querySelector(`.tp-frame`)),
      (o = i.querySelector(`.tp-flash`)),
      (i.querySelector(`.tp-hint`).textContent = n.t(t.hint)),
      i.addEventListener(`pointerdown`, () => (s = !0)),
      document.body.appendChild(i));
  }
  e.onCleanup(() => i?.remove());
  let c = n.params.has(`autosolve`),
    l = n.camera,
    u = 0,
    d = null,
    f = !0,
    p = !1,
    m = { kind: `photo`, x: e.px, z: e.pz };
  if (
    (await e.until((i) => {
      ((u += i), (e.waitFor = m));
      let h = t.target();
      V6.set(h.x, h.y, h.z);
      let g = l.position.distanceTo(V6);
      V6.project(l);
      let _ =
        g < r &&
        (l.reversedDepth ? V6.z >= 0 : V6.z < 1) &&
        Math.abs(V6.x) < 0.34 &&
        Math.abs(V6.y + 0.08) < 0.4;
      if ((a?.classList.toggle(`on`, _), c && u > 1 && !p)) {
        p = !0;
        try {
          let t = new j(e.px, n.player.position.y + 1.6, e.pz);
          n.cameraRig.override(t, new j(h.x, h.y, h.z));
        } catch {}
      }
      let v = !1,
        y = !1;
      try {
        y = n.input.pressed(`interact`) || n.input.pressed(`jump`);
      } catch {}
      return (
        f ? (f = y) : (v = y),
        (s &&= ((v = !0), !1)),
        c && p && u > 1.5 && (v = !0),
        v &&
          (e.sfx(`phone_notify`, { ui: !0 }),
          o &&
            ((o.style.opacity = `0.9`),
            setTimeout(() => o && (o.style.opacity = `0`), 120)),
          _ || (c && p)
            ? (d = `shot`)
            : e.notify(
                {
                  zh: `沒拍到——讓他們進到框裡`,
                  en: `Missed — get them in the frame`,
                },
                `info`,
                1.6,
              )),
        u >= t.secs && (d ??= `timeout`),
        d !== null
      );
    }),
    (e.waitFor = null),
    p)
  )
    try {
      n.cameraRig.override(null);
    } catch {}
  return (i?.remove(), d ?? `timeout`);
}
r.add({
  講電話的人: `電話中の人`,
  "按 {interact} 搭話（見張的人還在看）": `{interact} で話しかける（見張りがまだ見ている）`,
  "（先找出見張的人——講電話的那幾個，靠近聽他們在說什麼。）": `（まず見張りだ——電話中の連中に近づいて、話を聞け）`,
});
var U6 = { x: 89, z: 330 },
  W6 = [
    { x: 88.1, z: 328.6 },
    { x: 87.9, z: 330.4 },
    { x: 87.4, z: 332.1 },
    { x: 86.8, z: 327.4 },
  ],
  G6 = { x: 99, z: 345 },
  K6 = 440,
  q6 = 60 / K6,
  $Re = 17.5,
  eze = 3.2,
  tze = 16762941,
  nze = N(`講電話的人`, `On the phone`, `電話中の人`),
  J6 = {
    daichi: () =>
      jt(`thief`, `t3-hk-daichi`, {
        height: 1.74,
        hair: { style: `sidepart`, color: 1972758 },
        top: { style: `tee`, color: 1315862 },
        outer: { style: `windbreaker`, color: 1052690, color2: 1710622 },
        bottom: { style: `slacks`, color: 1315862 },
        shoes: { style: `sneaker`, color: 1710618, color2: 2763306 },
        acc: Ot(
          `glasses`,
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    sho: () =>
      jt(`thief`, `t3-hk-sho`, {
        height: 1.64,
        face: { smile: -0.4, brow: 0.2 },
        hair: { style: `bowl`, color: 2367516 },
        top: { style: `hoodie`, color: 1447450, color2: 921104 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: Ot(
          { kind: `mask`, color: 1315860 },
          { kind: `schoolbag`, color: 1118481 },
        ),
      }),
    ren: () =>
      jt(`thief`, `t3-hk-ren`, {
        height: 1.78,
        hair: { style: `fade`, color: 14205066 },
        top: { style: `hoodie`, color: 1118484, color2: 1842208 },
        bottom: { style: `track`, color: 1118484 },
        shoes: { style: `sneaker`, color: 14170666, color2: 15921906 },
        acc: Ot(
          { kind: `cap`, color: 13115436 },
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    yuki: () =>
      jt(`thief`, `t3-hk-yuki`, {
        height: 1.71,
        face: { smile: -0.3, brow: 0.35 },
        hair: { style: `bowl`, color: 2761244 },
        top: { style: `hoodie`, color: 5924464, color2: 4739674 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: Ot(
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    lookout: () =>
      jt(`hipster`, `t3-hk-lookout`, {
        hair: { style: `twoblock`, color: 2760214 },
        top: { style: `tee`, color: 1710622 },
        outer: { style: `cardigan`, color: 6974576, color2: 5921888 },
        bottom: { style: `slacks`, color: 2763826 },
        acc: Ot({ kind: `cap`, color: 1976900 }, `phone`, {
          kind: `earbuds`,
          color: 1118481,
        }),
      }),
    mori: () =>
      jt(`detective`, `t3-hk-mori`, {
        face: { facial: `stubble`, wrinkles: 0.25 },
        hair: { style: `buzz`, color: 1709586 },
        top: { style: `shirt`, color: 15262940, tucked: !0 },
        outer: { style: `windbreaker`, color: 13153418, color2: 12100730 },
        bottom: { style: `slacks`, color: 3815998 },
        acc: Ot({ kind: `tote`, color: 14207144 }, `watch`),
      }),
    date: () =>
      jt(`officeLady`, `t3-hk-date`, {
        hair: { style: `wavy`, color: 4861984 },
        top: { style: `blouse`, color: 15918816 },
        outer: { style: `cardigan`, color: 14198968, color2: 13146280 },
        bottom: { style: `longskirt`, color: 9075306 },
        acc: Ot({ kind: `shoulderBag`, color: 13150338 }, `phone`),
      }),
    tourist: () =>
      jt(`tourist`, `t3-hk-tourist`, {
        top: { style: `tee`, color: 4885208 },
        bottom: { style: `shorts`, color: 13154448 },
        acc: Ot(
          { kind: `bucket`, color: 15261896 },
          { kind: `backpack`, color: 3828282 },
          `phone`,
        ),
      }),
    boss: () =>
      jt(`salaryman`, `t3-hk-boss`, {
        acc: Ot({ kind: `shoulderBag`, color: 1710618 }, `phone`, `glasses`),
      }),
    snapper: () =>
      jt(`photographer`, `t3-hk-snapper`, {
        top: { style: `tee`, color: 1052690 },
        bottom: { style: `slacks`, color: 12101768 },
        acc: Ot(
          { kind: `shoulderBag`, color: 1710618 },
          { kind: `cap`, color: 1118481 },
        ),
      }),
    hayfever: () =>
      jt(`ximenGirl`, `t3-hk-hayfever`, {
        hair: { style: `long`, color: 1709074 },
        top: { style: `sweater`, color: 1184276 },
        bottom: { style: `jeans`, color: 3821170 },
        shoes: { style: `boot`, color: 1118481 },
        acc: Ot(
          { kind: `mask`, color: 1315860 },
          { kind: `tote`, color: 1710618 },
        ),
      }),
  },
  Y6 = (e, t, n, r = 1) => ({ name: N(e, t, n), voice: `ja`, pitch: r }),
  X6 = {
    daichi: Y6(`大地`, `Daichi`, `大地`, 0.95),
    sho: Y6(`翔`, `Sho`, `翔`, 1.12),
    ren: Y6(`蓮`, `Ren`, `蓮`, 0.9),
    mori: Y6(`森刑事`, `Detective Mori`, `森刑事`, 0.86),
    lookout: Y6(`拿手機的男人`, `Man on the phone`, `電話の男`, 0.92),
    date: Y6(`等人的女生`, `Woman waiting`, `待ち合わせの女性`, 1.22),
    tourist: Y6(`觀光客`, `Tourist`, `観光客`, 1.1),
    boss: Y6(`上班族`, `Office worker`, `会社員`, 0.98),
    snapper: Y6(`攝影師`, `Photographer`, `カメラマン`, 0.95),
    hayfever: Y6(
      `穿黑毛衣的女生`,
      `Woman in a black sweater`,
      `黒いセーターの女性`,
      1.18,
    ),
    rider: Y6(`騎機車的人`, `The rider`, `バイクの男`, 0.85),
  };
async function Z6(e, t, n) {
  let r = Z4(e.ctx);
  await $(e, t, n.them);
  let i = await m3(e, {
      prompt: n.them,
      options: n.options,
      secs: 12,
      timeoutScore: -3,
    }),
    a = n.options.find((e) => e.score === i.score) ?? null;
  return (
    await $(e, r, a ? a.text : N(`……`, `…`, `……`), a ? void 0 : 1.2),
    i.score >= 2 ||
      (await $(
        e,
        t,
        a
          ? a.reply
          : N(
              `……你連要說什麼都不知道。`,
              `…You don't even know what to say.`,
              `……何も言えないんですか。`,
            ),
      ),
      !1)
  );
}
function Q6(e, t, n, r, i = 1.4, a) {
  t.moveTo(n, r, i);
  let o = W4(t, 3),
    s = !1,
    c = e.every((e) => {
      if (s) return;
      let i = t.distTo(n, r) < 0.6;
      (i || o(e) || !t.moving) &&
        (i || t.place(n, r), t.stop(), (s = !0), c(), a?.());
    });
}
function $6(e, t, n, r, i) {
  let a = t - e.x,
    o = n - e.z,
    s = Math.hypot(a, o);
  return s > r
    ? !1
    : s < 1.2 ||
        (a * Math.sin(e.heading) - o * Math.cos(e.heading)) / s > Math.cos(i);
}
