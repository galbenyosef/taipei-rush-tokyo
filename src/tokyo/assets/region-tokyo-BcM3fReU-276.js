// tokyo/assets/region-tokyo-BcM3fReU 276 — color
// Lines 107818-108105 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function U3(e, t) {
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
        (e.textContent = V3),
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
      H3.set(h.x, h.y, h.z);
      let g = l.position.distanceTo(H3);
      H3.project(l);
      let _ =
        g < r &&
        (l.reversedDepth ? H3.z >= 0 : H3.z < 1) &&
        Math.abs(H3.x) < 0.34 &&
        Math.abs(H3.y + 0.08) < 0.4;
      if ((a?.classList.toggle(`on`, _), c && u > 1 && !p)) {
        p = !0;
        try {
          let t = new k(e.px, n.player.position.y + 1.6, e.pz);
          n.cameraRig.override(t, new k(h.x, h.y, h.z));
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
var W3 = { x: 89, z: 330 },
  G3 = [
    { x: 88.1, z: 328.6 },
    { x: 87.9, z: 330.4 },
    { x: 87.4, z: 332.1 },
    { x: 86.8, z: 327.4 },
  ],
  K3 = { x: 99, z: 345 },
  q3 = 440,
  J3 = 60 / q3,
  Y3 = 17.5,
  X3 = 3.2,
  Z3 = 16762941,
  Q3 = F(`講電話的人`, `On the phone`, `電話中の人`),
  $3 = {
    daichi: () =>
      Ht(`thief`, `t3-hk-daichi`, {
        height: 1.74,
        hair: { style: `sidepart`, color: 1972758 },
        top: { style: `tee`, color: 1315862 },
        outer: { style: `windbreaker`, color: 1052690, color2: 1710622 },
        bottom: { style: `slacks`, color: 1315862 },
        shoes: { style: `sneaker`, color: 1710618, color2: 2763306 },
        acc: zt(
          `glasses`,
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    sho: () =>
      Ht(`thief`, `t3-hk-sho`, {
        height: 1.64,
        face: { smile: -0.4, brow: 0.2 },
        hair: { style: `bowl`, color: 2367516 },
        top: { style: `hoodie`, color: 1447450, color2: 921104 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: zt(
          { kind: `mask`, color: 1315860 },
          { kind: `schoolbag`, color: 1118481 },
        ),
      }),
    ren: () =>
      Ht(`thief`, `t3-hk-ren`, {
        height: 1.78,
        hair: { style: `fade`, color: 14205066 },
        top: { style: `hoodie`, color: 1118484, color2: 1842208 },
        bottom: { style: `track`, color: 1118484 },
        shoes: { style: `sneaker`, color: 14170666, color2: 15921906 },
        acc: zt(
          { kind: `cap`, color: 13115436 },
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    yuki: () =>
      Ht(`thief`, `t3-hk-yuki`, {
        height: 1.71,
        face: { smile: -0.3, brow: 0.35 },
        hair: { style: `bowl`, color: 2761244 },
        top: { style: `hoodie`, color: 5924464, color2: 4739674 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: zt(
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    lookout: () =>
      Ht(`hipster`, `t3-hk-lookout`, {
        hair: { style: `twoblock`, color: 2760214 },
        top: { style: `tee`, color: 1710622 },
        outer: { style: `cardigan`, color: 6974576, color2: 5921888 },
        bottom: { style: `slacks`, color: 2763826 },
        acc: zt({ kind: `cap`, color: 1976900 }, `phone`, {
          kind: `earbuds`,
          color: 1118481,
        }),
      }),
    mori: () =>
      Ht(`detective`, `t3-hk-mori`, {
        face: { facial: `stubble`, wrinkles: 0.25 },
        hair: { style: `buzz`, color: 1709586 },
        top: { style: `shirt`, color: 15262940, tucked: !0 },
        outer: { style: `windbreaker`, color: 13153418, color2: 12100730 },
        bottom: { style: `slacks`, color: 3815998 },
        acc: zt({ kind: `tote`, color: 14207144 }, `watch`),
      }),
    date: () =>
      Ht(`officeLady`, `t3-hk-date`, {
        hair: { style: `wavy`, color: 4861984 },
        top: { style: `blouse`, color: 15918816 },
        outer: { style: `cardigan`, color: 14198968, color2: 13146280 },
        bottom: { style: `longskirt`, color: 9075306 },
        acc: zt({ kind: `shoulderBag`, color: 13150338 }, `phone`),
      }),
    tourist: () =>
      Ht(`tourist`, `t3-hk-tourist`, {
        top: { style: `tee`, color: 4885208 },
        bottom: { style: `shorts`, color: 13154448 },
        acc: zt(
          { kind: `bucket`, color: 15261896 },
          { kind: `backpack`, color: 3828282 },
          `phone`,
        ),
      }),
    boss: () =>
      Ht(`salaryman`, `t3-hk-boss`, {
        acc: zt({ kind: `shoulderBag`, color: 1710618 }, `phone`, `glasses`),
      }),
    snapper: () =>
      Ht(`photographer`, `t3-hk-snapper`, {
        top: { style: `tee`, color: 1052690 },
        bottom: { style: `slacks`, color: 12101768 },
        acc: zt(
          { kind: `shoulderBag`, color: 1710618 },
          { kind: `cap`, color: 1118481 },
        ),
      }),
    hayfever: () =>
      Ht(`ximenGirl`, `t3-hk-hayfever`, {
        hair: { style: `long`, color: 1709074 },
        top: { style: `sweater`, color: 1184276 },
        bottom: { style: `jeans`, color: 3821170 },
        shoes: { style: `boot`, color: 1118481 },
        acc: zt(
          { kind: `mask`, color: 1315860 },
          { kind: `tote`, color: 1710618 },
        ),
      }),
  },
  e6 = (e, t, n, r = 1) => ({ name: F(e, t, n), voice: `ja`, pitch: r }),
  t6 = {
    daichi: e6(`大地`, `Daichi`, `大地`, 0.95),
    sho: e6(`翔`, `Sho`, `翔`, 1.12),
    ren: e6(`蓮`, `Ren`, `蓮`, 0.9),
    mori: e6(`森刑事`, `Detective Mori`, `森刑事`, 0.86),
    lookout: e6(`拿手機的男人`, `Man on the phone`, `電話の男`, 0.92),
    date: e6(`等人的女生`, `Woman waiting`, `待ち合わせの女性`, 1.22),
    tourist: e6(`觀光客`, `Tourist`, `観光客`, 1.1),
    boss: e6(`上班族`, `Office worker`, `会社員`, 0.98),
    snapper: e6(`攝影師`, `Photographer`, `カメラマン`, 0.95),
    hayfever: e6(
      `穿黑毛衣的女生`,
      `Woman in a black sweater`,
      `黒いセーターの女性`,
      1.18,
    ),
    rider: e6(`騎機車的人`, `The rider`, `バイクの男`, 0.85),
  };
async function n6(e, t, n) {
  let r = G0(e.ctx);
  await $(e, t, n.them);
  let i = await y2(e, {
      prompt: n.them,
      options: n.options,
      secs: 12,
      timeoutScore: -3,
    }),
    a = n.options.find((e) => e.score === i.score) ?? null;
  return (
    await $(e, r, a ? a.text : F(`……`, `…`, `……`), a ? void 0 : 1.2),
    i.score >= 2 ||
      (await $(
        e,
        t,
        a
          ? a.reply
          : F(
              `……你連要說什麼都不知道。`,
              `…You don't even know what to say.`,
              `……何も言えないんですか。`,
            ),
      ),
      !1)
  );
}
function r6(e, t, n, r, i = 1.4, a) {
  t.moveTo(n, r, i);
  let o = P0(t, 3),
    s = !1,
    c = e.every((e) => {
      if (s) return;
      let i = t.distTo(n, r) < 0.6;
      (i || o(e) || !t.moving) &&
        (i || t.place(n, r), t.stop(), (s = !0), c(), a?.());
    });
}
function i6(e, t, n, r, i) {
  let a = t - e.x,
    o = n - e.z,
    s = Math.hypot(a, o);
  return s > r
    ? !1
    : s < 1.2 ||
        (a * Math.sin(e.heading) - o * Math.cos(e.heading)) / s > Math.cos(i);
}
