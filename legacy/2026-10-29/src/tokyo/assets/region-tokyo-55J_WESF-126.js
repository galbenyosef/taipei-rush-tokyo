// tokyo/assets/region-tokyo-55J_WESF 126 — math
// Lines 55183-55519 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function R_(e, t) {
  return {
    mouth: 2.5,
    landing: 2.72,
    cw: 1,
    roomZ: 8.5,
    rows: [10.6, 12.8],
    deskX: [-3, -1, 1],
    rack: { x0: e / 2 - 0.8, x1: e / 2 - 0.05, z0: t - 1, z1: t - 0.05 },
    back: { z0: t - 1.5, z1: t - 0.6 },
  };
}
function z_(e, t) {
  let n = R_(e, t);
  return {
    door: [0, 0.6, 0, Math.PI],
    "corridor-1": [0, n.landing + 1.3, M_, Math.PI],
    "corridor-2": [0, n.roomZ - 1.2, M_, Math.PI],
    room: [0, n.roomZ + 0.8, M_, Math.PI],
    "desk-1": [n.deskX[0] - 0.36, n.rows[0] - 0.62, M_, Math.PI],
    "desk-2": [n.deskX[1] - 0.36, n.rows[0] - 0.62, M_, Math.PI],
    "desk-3": [n.deskX[0] - 0.36, n.rows[1] - 0.62, M_, Math.PI],
    "desk-4": [n.deskX[1] - 0.36, n.rows[1] - 0.62, M_, Math.PI],
    server: [n.rack.x0 - 0.6, (n.rack.z0 + n.rack.z1) / 2, M_, Math.PI / 2],
    "back-stairs": [
      -e / 2 + 0.6,
      (n.back.z0 + n.back.z1) / 2,
      M_,
      -Math.PI / 2,
    ],
  };
}
var Wue = {
  konbini: qle,
  ramen: Yle,
  izakaya: $le,
  karaoke: tue,
  pachinko: rue,
  akiba: aue,
  capsule: sue,
  maid: fue,
  kissa: mue,
  sento: zue,
  callcentre: Hue,
};
function Gue(e, t) {
  Wue[e](t);
}
var B_ = [
    `konbini`,
    `ramen`,
    `izakaya`,
    `karaoke`,
    `pachinko`,
    `akiba`,
    `capsule`,
    `maid`,
    `kissa`,
    `sento`,
    `callcentre`,
  ],
  Kue = () => ({ x: 0, z: 0, far: 0, idle: 0, want: !1 }),
  V_ = null,
  H_ = null;
function U_(e) {
  if (V_ && H_) return { pages: V_, mats: H_ };
  let t = 4;
  try {
    t = Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy());
  } catch {}
  let n = Number(e.params.get(`intatlas`)),
    r = n > 0 ? Math.min(1, n) : Math.min(1, Ie(2048, e.quality) / 2048),
    i = {},
    a = {},
    o = {};
  for (let e of B_) {
    let n = new nte(`tokyo-${e}`, r, t);
    (Gue(e, n), (i[e] = n));
    let s = ete(n.placeholder, 1);
    s.name = `interior-room`;
    let c = tte();
    ((c.map = n.placeholder),
      (a[e] = s),
      (o[e] = c),
      n.onReady((e) => {
        ((s.map = e), (c.map = e));
      }),
      n.onRelease((e) => {
        ((s.map = e), (c.map = e));
      }));
  }
  return (
    (a.izakaya.userData.uFlicker.value = 0.5),
    (a.pachinko.userData.uFlicker.value = 0.9),
    (V_ = i),
    (H_ = { room: a, glass: o, portal: qee() }),
    { pages: i, mats: H_ }
  );
}
var W_ = null;
function que(e) {
  if (W_) return W_;
  let { mats: t } = U_(e),
    n = () => {
      let e = new y();
      return (
        e.setAttribute(
          `position`,
          new m([0, -500, 0, 0.001, -500, 0, 0, -499.999, 0], 3),
        ),
        e.setAttribute(`normal`, new m([0, 0, 1, 0, 0, 1, 0, 0, 1], 3)),
        e.setAttribute(`uv`, new m([0, 0, 1, 0, 0, 1], 2)),
        e.setAttribute(`color`, new m([1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0], 4)),
        e
      );
    };
  return (
    (W_ = [t.room.konbini, t.glass.konbini, t.portal].map((e) => {
      let t = new p(n(), e);
      return ((t.name = `tokyo-interiors-proto`), (t.frustumCulled = !1), t);
    })),
    W_
  );
}
var G_ = null;
function K_() {
  let e = G_;
  return e
    ? {
        ctx: e.ctx,
        room: (t) => e.rooms.find((e) => e.id === t) ?? null,
        ensure: (t, n) => Z_(e, t, n),
        ensurePage: (t) => Y_(e.pages[t.page], e.ctx),
        scan: () => {
          let t = e.ctx.player.position;
          (e.streamer.scan(t.x, t.y, t.z), e.streamer.flush());
        },
      }
    : null;
}
function Jue(e) {
  if (G_) {
    Qee(e);
    return;
  }
  let t = performance.now();
  gn(e);
  let { pages: n, mats: i } = U_(e),
    a = new pte();
  a.cap(`store`, 2);
  let o = new Jee(),
    s = new Kee(e, !1),
    c = new Hee(
      e.params.get(`intworker`) !== `0`,
      () =>
        new Worker(
          new URL(
            `/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.js`,
            `` + import.meta.url,
          ),
          { type: `module`, name: `tokyo-interiors-people` },
        ),
    ),
    l = {
      ctx: e,
      pages: n,
      roomMat: i.room,
      glassMat: i.glass,
      portalMat: i.portal,
      interact: o,
      fill: s,
      order: new Yee(e),
      menu: new Zee(e),
      jobs: c,
      lru: [],
      rooms: [],
      purchases: [],
      buyListeners: [],
      stay: { day: -1, capsule: null },
    },
    u = {
      ctx: e,
      pages: n,
      mats: i,
      streamer: a,
      rooms: [],
      sh: l,
      api: null,
      use: Object.fromEntries(B_.map((e) => [e, Kue()])),
      pendingUpload: [],
      resScan: 0.25,
      geoIdle: 0,
      closeT: 0,
      adapt: 0,
      audio: { cur: null, loop: null },
      cull: { site: null, active: !1, frames: 0, roots: 0 },
      perf: { avg: 0, max: 0 },
      waits: [],
      rainMesh: void 0,
      pageReleases: 0,
    };
  G_ = u;
  let d = 0;
  for (let t of e.plan.pois)
    t.kind === `convenience` && (q_(u, new Jle(l, t)), d++);
  for (let e of Zf) {
    let t = tp(e),
      n = Math.sin(t.facing),
      r = -Math.cos(t.facing),
      i = {
        x: t.x + n * 0.6,
        z: t.z + r * 0.6,
        facing: t.facing,
        width: t.width,
      };
    q_(
      u,
      e.kind === `maid`
        ? new pue(l, e, i)
        : e.kind === `kissa`
          ? new hue(l, e, i)
          : e.kind === `ramen`
            ? new Xle(l, e, i)
            : e.kind === `karaoke`
              ? new nue(l, e, i)
              : e.kind === `pachinko`
                ? new iue(l, e, i)
                : e.kind === `electronics`
                  ? new oue(l, e, i)
                  : new cue(l, e, i),
    );
  }
  {
    let e = Qf.door,
      t = Math.sin(e.facing),
      n = -Math.cos(e.facing);
    q_(
      u,
      new Bue(l, {
        x: e.x + t * 0.6,
        z: e.z + n * 0.6,
        facing: e.facing,
        width: 3.2,
      }),
    );
  }
  {
    let e = $f.door,
      t = $f.mouthX - $f.doorX,
      n = Math.sin(e.facing),
      r = -Math.cos(e.facing);
    q_(
      u,
      new Uue(l, {
        x: e.x + Math.cos(e.facing) * t + n * 0.2,
        z: e.z + Math.sin(e.facing) * t + r * 0.2,
        facing: e.facing,
        width: 5,
      }),
    );
  }
  try {
    let e = eue.create(l, ep);
    e && q_(u, e);
  } catch (e) {
    console.warn(`[interiors:tokyo] ガード下 izakaya unavailable`, e);
  }
  let f = {
    ramen: [`麵`, `#c8281c`, { zh: `拉麵`, en: `Ramen` }],
    izakaya: [
      `酒`,
      `#a8401a`,
      { zh: `居酒屋（高架橋下）`, en: `Izakaya under the tracks` },
    ],
    karaoke: [`歌`, `#c8288a`, { zh: `卡拉OK`, en: `Karaoke` }],
    pachinko: [`P`, `#d8a010`, { zh: `柏青哥`, en: `Pachinko` }],
    electronics: [
      `電`,
      `#1a5ad0`,
      { zh: `電器・動漫`, en: `Electronics & anime` },
    ],
    capsule: [
      `宿`,
      `#2a4a9a`,
      { zh: `藏身處：膠囊旅館`, en: `Safehouse: capsule hotel` },
    ],
    maid: [`僕`, `#e8588a`, { zh: `女僕咖啡`, en: `Maid café` }],
    kissa: [`珈`, `#7a3a1a`, { zh: `純喫茶`, en: `Kissa (coffee house)` }],
    sento: [`湯`, `#2a6ab0`, { zh: `錢湯`, en: `Sento (bathhouse)` }],
  };
  for (let t of u.rooms) {
    let n = f[t.kind];
    if (n)
      try {
        e.ui.addBlip(`interiors:${t.id}`, {
          x: t.x,
          z: t.z,
          icon: `shop`,
          glyph: n[0],
          color: n[1],
          label: {
            zh: r.on
              ? r.t(
                  `${n[2].zh}・${t.name.zh}`,
                  `${r.jz(n[2].zh)}・${r.jz(t.name.zh)}`,
                )
              : `${n[2].zh}・${t.name.zh}`,
            en: `${n[2].en} · ${t.name.en}`,
          },
        });
      } catch {}
  }
  ((u.api = Que(u)),
    (e.interiors = u.api),
    e.events.on(`crime`, (t) => {
      if (G_ && !t.witnessed) {
        for (let n of u.streamer.activeSites)
          if (n.onCrime(t.pos.x, t.pos.z, !1)) {
            e.events.emit(`crime`, {
              type: t.type,
              pos: t.pos.clone(),
              severity: t.severity,
              witnessed: !0,
            });
            break;
          }
      }
    }),
    nde(u),
    rde(u),
    console.log(
      `[interiors:tokyo] ${d} konbini + ${Zf.length} fronts + ガード下 — anchors in ${(performance.now() - t).toFixed(1)} ms (nothing built)`,
    ));
}
function q_(e, t) {
  (e.rooms.push(t), e.streamer.add(t));
}
