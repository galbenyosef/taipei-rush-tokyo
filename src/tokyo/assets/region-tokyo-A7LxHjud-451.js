// tokyo/assets/region-tokyo-A7LxHjud 451 — color
// Lines 160973-161291 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function J6(e, t) {
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
        (e.textContent = Sze),
        document.head.appendChild(e));
    }
    ((i = document.createElement(`div`)),
      (i.id = `tk-photo`),
      (i.innerHTML = `<div class="tp-frame"></div><div class="tp-hint"></div><div class="tp-flash"></div>`),
      (a = i.querySelector(`.tp-frame`)),
      (o = i.querySelector(`.tp-flash`)),
      (i.querySelector(`.tp-hint`).textContent = n.t(t.hint)),
      document.body.appendChild(i));
  }
  let c = new Map(),
    l = (e) => {
      if (e.pointerType === `mouse` || e.button !== 0) return;
      let t = e.target instanceof Element ? e.target : null;
      t &&
        (t.closest(`.tc-look`) || t.tagName === `CANVAS`) &&
        c.set(e.pointerId, {
          x: e.clientX,
          y: e.clientY,
          t: performance.now(),
        });
    },
    u = (e) => {
      let t = c.get(e.pointerId);
      t &&
        (c.delete(e.pointerId),
        performance.now() - t.t < 400 &&
          Math.hypot(e.clientX - t.x, e.clientY - t.y) < 14 &&
          (s = !0));
    },
    d = (e) => c.delete(e.pointerId);
  typeof window < `u` &&
    (window.addEventListener(`pointerdown`, l, !0),
    window.addEventListener(`pointerup`, u, !0),
    window.addEventListener(`pointercancel`, d, !0));
  let f = () => {
    typeof window < `u` &&
      (window.removeEventListener(`pointerdown`, l, !0),
      window.removeEventListener(`pointerup`, u, !0),
      window.removeEventListener(`pointercancel`, d, !0));
  };
  e.onCleanup(() => (i?.remove(), f()));
  let p = n.params.has(`autosolve`),
    m = p && !n.params.has(`phototap`),
    h = n.camera,
    g = 0,
    _ = null,
    v = !0,
    y = !1,
    b = { kind: `photo`, x: e.px, z: e.pz };
  if (
    (await e.until((i) => {
      ((g += i), (e.waitFor = b));
      let c = t.target();
      q6.set(c.x, c.y, c.z);
      let l = h.position.distanceTo(q6);
      q6.project(h);
      let u =
        l < r &&
        (h.reversedDepth ? q6.z >= 0 : q6.z < 1) &&
        Math.abs(q6.x) < 0.34 &&
        Math.abs(q6.y + 0.08) < 0.4;
      if ((a?.classList.toggle(`on`, u), p && g > 1 && !y)) {
        y = !0;
        try {
          let t = new E(e.px, n.player.position.y + 1.6, e.pz);
          n.cameraRig.override(t, new E(c.x, c.y, c.z));
        } catch {}
      }
      let d = !1,
        f = !1;
      try {
        f = n.input.pressed(`interact`) || n.input.pressed(`jump`);
      } catch {}
      return (
        v ? (v = f) : (d = f),
        (s &&= ((d = !0), !1)),
        m && y && g > 1.5 && (d = !0),
        d &&
          (e.sfx(`phone_notify`, { ui: !0 }),
          o &&
            ((o.style.opacity = `0.9`),
            setTimeout(() => o && (o.style.opacity = `0`), 120)),
          u || (m && y)
            ? (_ = `shot`)
            : e.notify(
                {
                  zh: `沒拍到——讓他們進到框裡`,
                  en: `Missed — get them in the frame`,
                },
                `info`,
                1.6,
              )),
        g >= t.secs && (_ ??= `timeout`),
        _ !== null
      );
    }),
    (e.waitFor = null),
    y)
  )
    try {
      n.cameraRig.override(null);
    } catch {}
  return (i?.remove(), f(), _ ?? `timeout`);
}
r.add({
  講電話的人: `電話中の人`,
  "按 {interact} 搭話（見張的人還在看）": `{interact} で話しかける（見張りがまだ見ている）`,
  "（先找出見張的人——講電話的那幾個，靠近聽他們在說什麼。）": `（まず見張りだ——電話中の連中に近づいて、話を聞け）`,
});
var Y6 = { x: 89, z: 330 },
  X6 = [
    { x: 88.1, z: 328.6 },
    { x: 87.9, z: 330.4 },
    { x: 87.4, z: 332.1 },
    { x: 86.8, z: 327.4 },
  ],
  Z6 = { x: 99, z: 345 },
  Q6 = 440,
  $6 = 60 / Q6,
  Cze = 17.5,
  wze = 3.2,
  Tze = 16762941,
  Eze = N(`講電話的人`, `On the phone`, `電話中の人`),
  e8 = {
    daichi: () =>
      Nt(`thief`, `t3-hk-daichi`, {
        height: 1.74,
        hair: { style: `sidepart`, color: 1972758 },
        top: { style: `tee`, color: 1315862 },
        outer: { style: `windbreaker`, color: 1052690, color2: 1710622 },
        bottom: { style: `slacks`, color: 1315862 },
        shoes: { style: `sneaker`, color: 1710618, color2: 2763306 },
        acc: kt(
          `glasses`,
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    sho: () =>
      Nt(`thief`, `t3-hk-sho`, {
        height: 1.64,
        face: { smile: -0.4, brow: 0.2 },
        hair: { style: `bowl`, color: 2367516 },
        top: { style: `hoodie`, color: 1447450, color2: 921104 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: kt(
          { kind: `mask`, color: 1315860 },
          { kind: `schoolbag`, color: 1118481 },
        ),
      }),
    ren: () =>
      Nt(`thief`, `t3-hk-ren`, {
        height: 1.78,
        hair: { style: `fade`, color: 14205066 },
        top: { style: `hoodie`, color: 1118484, color2: 1842208 },
        bottom: { style: `track`, color: 1118484 },
        shoes: { style: `sneaker`, color: 14170666, color2: 15921906 },
        acc: kt(
          { kind: `cap`, color: 13115436 },
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    yuki: () =>
      Nt(`thief`, `t3-hk-yuki`, {
        height: 1.71,
        face: { smile: -0.3, brow: 0.35 },
        hair: { style: `bowl`, color: 2761244 },
        top: { style: `hoodie`, color: 5924464, color2: 4739674 },
        bottom: { style: `jeans`, color: 1711138 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: kt(
          { kind: `mask`, color: 1315860 },
          { kind: `backpack`, color: 1118481 },
        ),
      }),
    lookout: () =>
      Nt(`hipster`, `t3-hk-lookout`, {
        hair: { style: `twoblock`, color: 2760214 },
        top: { style: `tee`, color: 1710622 },
        outer: { style: `cardigan`, color: 6974576, color2: 5921888 },
        bottom: { style: `slacks`, color: 2763826 },
        acc: kt({ kind: `cap`, color: 1976900 }, `phone`, {
          kind: `earbuds`,
          color: 1118481,
        }),
      }),
    mori: () =>
      Nt(`detective`, `t3-hk-mori`, {
        face: { facial: `stubble`, wrinkles: 0.25 },
        hair: { style: `buzz`, color: 1709586 },
        top: { style: `shirt`, color: 15262940, tucked: !0 },
        outer: { style: `windbreaker`, color: 13153418, color2: 12100730 },
        bottom: { style: `slacks`, color: 3815998 },
        acc: kt({ kind: `tote`, color: 14207144 }, `watch`),
      }),
    date: () =>
      Nt(`officeLady`, `t3-hk-date`, {
        hair: { style: `wavy`, color: 4861984 },
        top: { style: `blouse`, color: 15918816 },
        outer: { style: `cardigan`, color: 14198968, color2: 13146280 },
        bottom: { style: `longskirt`, color: 9075306 },
        acc: kt({ kind: `shoulderBag`, color: 13150338 }, `phone`),
      }),
    tourist: () =>
      Nt(`tourist`, `t3-hk-tourist`, {
        top: { style: `tee`, color: 4885208 },
        bottom: { style: `shorts`, color: 13154448 },
        acc: kt(
          { kind: `bucket`, color: 15261896 },
          { kind: `backpack`, color: 3828282 },
          `phone`,
        ),
      }),
    boss: () =>
      Nt(`salaryman`, `t3-hk-boss`, {
        acc: kt({ kind: `shoulderBag`, color: 1710618 }, `phone`, `glasses`),
      }),
    snapper: () =>
      Nt(`photographer`, `t3-hk-snapper`, {
        top: { style: `tee`, color: 1052690 },
        bottom: { style: `slacks`, color: 12101768 },
        acc: kt(
          { kind: `shoulderBag`, color: 1710618 },
          { kind: `cap`, color: 1118481 },
        ),
      }),
    hayfever: () =>
      Nt(`ximenGirl`, `t3-hk-hayfever`, {
        hair: { style: `long`, color: 1709074 },
        top: { style: `sweater`, color: 1184276 },
        bottom: { style: `jeans`, color: 3821170 },
        shoes: { style: `boot`, color: 1118481 },
        acc: kt(
          { kind: `mask`, color: 1315860 },
          { kind: `tote`, color: 1710618 },
        ),
      }),
  },
  t8 = (e, t, n, r = 1) => ({ name: N(e, t, n), voice: `ja`, pitch: r }),
  n8 = {
    daichi: t8(`大地`, `Daichi`, `大地`, 0.95),
    sho: t8(`翔`, `Sho`, `翔`, 1.12),
    ren: t8(`蓮`, `Ren`, `蓮`, 0.9),
    mori: t8(`森刑事`, `Detective Mori`, `森刑事`, 0.86),
    lookout: t8(`拿手機的男人`, `Man on the phone`, `電話の男`, 0.92),
    date: t8(`等人的女生`, `Woman waiting`, `待ち合わせの女性`, 1.22),
    tourist: t8(`觀光客`, `Tourist`, `観光客`, 1.1),
    boss: t8(`上班族`, `Office worker`, `会社員`, 0.98),
    snapper: t8(`攝影師`, `Photographer`, `カメラマン`, 0.95),
    hayfever: t8(
      `穿黑毛衣的女生`,
      `Woman in a black sweater`,
      `黒いセーターの女性`,
      1.18,
    ),
    rider: t8(`騎機車的人`, `The rider`, `バイクの男`, 0.85),
  };
async function r8(e, t, n) {
  let r = Q4(e.ctx);
  await $(e, t, n.them);
  let i = await h3(e, {
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
function i8(e, t, n, r, i = 1.4, a) {
  t.moveTo(n, r, i);
  let o = G4(t, 3),
    s = !1,
    c = e.every((e) => {
      if (s) return;
      let i = t.distTo(n, r) < 0.6;
      (i || o(e) || !t.moving) &&
        (i || t.place(n, r), t.stop(), (s = !0), c(), a?.());
    });
}
function a8(e, t, n, r, i) {
  let a = t - e.x,
    o = n - e.z,
    s = Math.hypot(a, o);
  return s > r
    ? !1
    : s < 1.2 ||
        (a * Math.sin(e.heading) - o * Math.cos(e.heading)) / s > Math.cos(i);
}
