// tokyo/assets/region-tokyo-A7LxHjud 322 — player
// Lines 116244-116584 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
r.add({
  "按 {interact} 搭電梯上 SHIBUYA SKYE 展望台（¥2,000）": `{interact} 展望台 SHIBUYA SKYE へ（¥2,000）`,
  "按 {interact} 搭電梯回1樓": `{interact} エレベーターで1階へ`,
  "通緝中 · 無法搭電梯": `手配中 · エレベーターに乗れません`,
  "門票 ¥2,000 不夠錢": `チケット代 ¥2,000 が足りません`,
  "46F SKY GALLERY · 頂樓 SKY STAGE 229 m": `46F SKY GALLERY · 屋上 SKY STAGE 229m`,
  "澀谷十字塔 1樓": `渋谷スクランブルタワー 1F`,
});
var Rq = 2.6,
  kOe = {
    ja: `{interact} 展望台 SHIBUYA SKYE へ（¥2,000）`,
    zh: `按 {interact} 搭電梯上 SHIBUYA SKYE 展望台（¥2,000）`,
    en: `Press {interact} to ride up to the SHIBUYA SKYE deck (¥2,000)`,
  },
  AOe = {
    ja: `{interact} エレベーターで1階へ`,
    zh: `按 {interact} 搭電梯回1樓`,
    en: `Press {interact} to take the lift down to the street`,
  },
  jOe = {
    ja: `手配中 · エレベーターに乗れません`,
    zh: `通緝中 · 無法搭電梯`,
    en: `Wanted — can't take the lift`,
  },
  MOe = {
    ja: `チケット代 ¥2,000 が足りません`,
    zh: `門票 ¥2,000 不夠錢`,
    en: `Not enough for the ¥2,000 ticket`,
  },
  zq = (e) => new Promise((t) => setTimeout(t, e * 1e3));
function NOe(e) {
  let t = !1,
    n = null,
    r = () => (n ??= XSe(e.plan.groundHeight(rR.x, rR.z))),
    i = null,
    a = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    o = (t) => {
      try {
        e.player.setControlEnabled(t);
      } catch {}
    };
  async function s(n) {
    if (t) return;
    let i = n.key === `street`,
      a = i ? r().galleryArrive : r().streetArrive;
    ((t = !0), o(!1));
    try {
      if (i && !e.money.spend(2e3, `JPY`, `ticket`)) {
        e.ui.notify(MOe, { kind: `bad`, duration: 3 });
        return;
      }
      try {
        e.audio.play(`mrt_door_chime`, { ui: !0, volume: 0.6 });
      } catch {}
      let t = Promise.resolve(e.districts?.ensureResident?.(a.x, a.z)).catch(
        () => {},
      );
      await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {});
      let [n, r] = i ? [1, 45] : [46, 1],
        o = performance.now();
      for (;;) {
        let t = Math.min(1, (performance.now() - o) / 1e3 / 2.4),
          a = t * t * (3 - 2 * t),
          s = Math.round(n + (r - n) * a),
          c = i
            ? {
                ja: `SKY GATE ▲ ${s}F`,
                zh: `SKY GATE ▲ ${s}F`,
                en: `SKY GATE ▲ ${s}F`,
              }
            : {
                ja: `エレベーター ▼ ${s}F`,
                zh: `電梯 ▼ ${s}F`,
                en: `Lift ▼ ${s}F`,
              };
        try {
          e.ui.setProgress(c, i ? a : 1 - a);
        } catch {}
        if (t >= 1) break;
        await zq(0.1);
      }
      (await Promise.race([t, zq(8)]),
        e.player.teleport(a.x, a.z, a.heading, a.y));
      try {
        e.cameraRig.snapBehind?.(a.heading);
      } catch {}
      try {
        e.ui.setProgress(null);
      } catch {}
      (await zq(0.2), Promise.resolve(e.ui.fade(0, 0.7)).catch(() => {}));
      try {
        i
          ? e.ui.bigMessage(
              { ja: `SHIBUYA SKYE`, zh: `SHIBUYA SKYE`, en: `SHIBUYA SKYE` },
              {
                ja: `46F SKY GALLERY · 屋上 SKY STAGE 229m`,
                zh: `46F SKY GALLERY · 頂樓 SKY STAGE 229 m`,
                en: `46F SKY GALLERY · rooftop SKY STAGE, 229 m`,
              },
              { duration: 3 },
            )
          : e.ui.notify(
              {
                ja: `渋谷スクランブルタワー 1F`,
                zh: `澀谷十字塔 1樓`,
                en: `Shibuya Scramble Tower, street level`,
              },
              { kind: `info`, duration: 2.5 },
            );
      } catch {}
    } catch (t) {
      console.error(`[shibuya-sky] lift failed`, t);
      try {
        (e.ui.setProgress(null), e.ui.fade(0, 0.3));
      } catch {}
    } finally {
      (o(!0), (t = !1));
    }
  }
  return {
    name: `shibuya-sky-lift`,
    update() {
      if (((i = null), t)) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n !== `foot` || e.player.controlEnabled === !1) return;
      let o = e.player.position;
      for (let e of r().doors)
        Math.abs(o.y - e.y) > 2.5 ||
          ((o.x - e.x) ** 2 + (o.z - e.z) ** 2 < Rq * Rq && (i = e));
      if (!i) return;
      let c = a() > 0;
      try {
        e.ui.prompt(c ? jOe : i.key === `street` ? kOe : AOe);
      } catch {}
      !c && e.input.pressed(`interact`) && s(i);
    },
  };
}
r.add({
  "按 {interact} 搭電梯上主展望台（¥1,200）": `{interact} エレベーターでメインデッキへ（¥1,200）`,
  "按 {interact} 搭電梯回1樓": `{interact} エレベーターで1階へ`,
  "按 {interact} 搭電梯上頂層展望台（+¥1,300）": `{interact} トップデッキツアーへ（+¥1,300）`,
  "按 {interact} 搭電梯回主展望台": `{interact} エレベーターでメインデッキへ`,
  "通緝中 · 無法搭電梯": `手配中 · エレベーターに乗れません`,
  "主展望台 150 m": `メインデッキ 150m`,
  頂層展望台: `トップデッキ`,
  "東京鐵塔 250 m": `東京タワー 250m`,
  "東京鐵塔 FootTown 1樓": `東京タワー フットタウン 1階`,
});
var Bq = 2.6,
  POe = 1200,
  FOe = 1300,
  IOe = {
    street: {
      ja: `{interact} エレベーターでメインデッキへ（¥1,200）`,
      zh: `按 {interact} 搭電梯上主展望台（¥1,200）`,
      en: `Press {interact} to ride up to the Main Deck (¥1,200)`,
    },
    "main-down": {
      ja: `{interact} エレベーターで1階へ`,
      zh: `按 {interact} 搭電梯回1樓`,
      en: `Press {interact} to take the lift down to the street`,
    },
    "main-up": {
      ja: `{interact} トップデッキツアーへ（+¥1,300）`,
      zh: `按 {interact} 搭電梯上頂層展望台（+¥1,300）`,
      en: `Press {interact} to ride up to the Top Deck (+¥1,300)`,
    },
    top: {
      ja: `{interact} エレベーターでメインデッキへ`,
      zh: `按 {interact} 搭電梯回主展望台`,
      en: `Press {interact} to take the lift down to the Main Deck`,
    },
  },
  LOe = {
    ja: `手配中 · エレベーターに乗れません`,
    zh: `通緝中 · 無法搭電梯`,
    en: `Wanted — can't take the lift`,
  },
  ROe = (e) => ({
    ja: `チケット代 ¥${e.toLocaleString(`en`)} が足りません`,
    zh: `門票 ¥${e.toLocaleString(`en`)} 不夠錢`,
    en: `Not enough for the ¥${e.toLocaleString(`en`)} ticket`,
  }),
  Vq = (e) => new Promise((t) => setTimeout(t, e * 1e3));
function zOe(e) {
  let t = !1,
    n = null,
    r = () =>
      (n ??= fbe(
        e.plan.groundHeight((ry.x0 + ry.x1) / 2, (ry.z0 + ry.z1) / 2),
      )),
    i = null,
    a = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    o = (t) => {
      try {
        e.player.setControlEnabled(t);
      } catch {}
    };
  async function s(n) {
    if (t) return;
    let i = r(),
      a = {
        street: { to: i.mainFromStreet, price: POe, h: [0, 150], up: !0 },
        "main-down": { to: i.streetArrive, price: 0, h: [150, 0], up: !1 },
        "main-up": { to: i.topArrive, price: FOe, h: [150, 250], up: !0 },
        top: { to: i.mainFromTop, price: 0, h: [250, 150], up: !1 },
      }[n.key];
    ((t = !0), o(!1));
    try {
      if (a.price > 0 && !e.money.spend(a.price, `JPY`, `ticket`)) {
        e.ui.notify(ROe(a.price), { kind: `bad`, duration: 3 });
        return;
      }
      try {
        e.audio.play(`mrt_door_chime`, { ui: !0, volume: 0.6 });
      } catch {}
      let t = Promise.resolve(
        e.districts?.ensureResident?.(a.to.x, a.to.z),
      ).catch(() => {});
      await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {});
      let r = performance.now();
      for (;;) {
        let t = Math.min(1, (performance.now() - r) / 1e3 / 2.6),
          n = t * t * (3 - 2 * t),
          i = Math.round(a.h[0] + (a.h[1] - a.h[0]) * n),
          o = a.up ? `▲` : `▼`;
        try {
          e.ui.setProgress(
            {
              ja: `東京タワー ${o} ${i}m`,
              zh: `東京鐵塔 ${o} ${i} m`,
              en: `Tokyo Tower ${o} ${i} m`,
            },
            a.up ? n : 1 - n,
          );
        } catch {}
        if (t >= 1) break;
        await Vq(0.1);
      }
      (await Promise.race([t, Vq(8)]),
        e.player.teleport(a.to.x, a.to.z, a.to.heading, a.to.y));
      try {
        e.cameraRig.snapBehind?.(a.to.heading);
      } catch {}
      try {
        e.ui.setProgress(null);
      } catch {}
      (await Vq(0.2), Promise.resolve(e.ui.fade(0, 0.7)).catch(() => {}));
      try {
        n.key === `street`
          ? e.ui.bigMessage(
              { ja: `東京タワー`, zh: `東京鐵塔`, en: `Tokyo Tower` },
              {
                ja: `メインデッキ 150m`,
                zh: `主展望台 150 m`,
                en: `Main Deck, 150 m`,
              },
              { duration: 3 },
            )
          : n.key === `main-up`
            ? e.ui.bigMessage(
                { ja: `トップデッキ`, zh: `頂層展望台`, en: `Top Deck` },
                {
                  ja: `東京タワー 250m`,
                  zh: `東京鐵塔 250 m`,
                  en: `Tokyo Tower, 250 m`,
                },
                { duration: 3 },
              )
            : n.key === `top`
              ? e.ui.notify(
                  {
                    ja: `メインデッキ 150m`,
                    zh: `主展望台 150 m`,
                    en: `Main Deck, 150 m`,
                  },
                  { kind: `info`, duration: 2.5 },
                )
              : e.ui.notify(
                  {
                    ja: `東京タワー フットタウン 1階`,
                    zh: `東京鐵塔 FootTown 1樓`,
                    en: `Tokyo Tower, FootTown 1F`,
                  },
                  { kind: `info`, duration: 2.5 },
                );
      } catch {}
    } catch (t) {
      console.error(`[tokyo-tower] lift failed`, t);
      try {
        (e.ui.setProgress(null), e.ui.fade(0, 0.3));
      } catch {}
    } finally {
      (o(!0), (t = !1));
    }
  }
  return {
    name: `tokyo-tower-lift`,
    update() {
      if (((i = null), t)) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n !== `foot` || e.player.controlEnabled === !1) return;
      let o = e.player.position;
      if (
        o.x < ry.x0 - 10 ||
        o.x > ry.x1 + 10 ||
        o.z < ry.z0 - 10 ||
        o.z > ry.z1 + 10
      )
        return;
      for (let e of r().doors)
        Math.abs(o.y - e.y) > 2.5 ||
          ((o.x - e.x) ** 2 + (o.z - e.z) ** 2 < Bq * Bq && (i = e));
      if (!i) return;
      let c = a() > 0;
      try {
        e.ui.prompt(c ? LOe : IOe[i.key]);
      } catch {}
      !c && e.input.pressed(`interact`) && s(i);
    },
  };
}
