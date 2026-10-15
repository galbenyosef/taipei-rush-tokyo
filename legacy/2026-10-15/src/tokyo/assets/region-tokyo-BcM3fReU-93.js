// tokyo/assets/region-tokyo-BcM3fReU 93 — math
// Lines 45298-45634 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function tS(e, t) {
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
function nS(e, t) {
  let n = tS(e, t);
  return {
    door: [0, 0.6, 0, Math.PI],
    "corridor-1": [0, n.landing + 1.3, Jx, Math.PI],
    "corridor-2": [0, n.roomZ - 1.2, Jx, Math.PI],
    room: [0, n.roomZ + 0.8, Jx, Math.PI],
    "desk-1": [n.deskX[0] - 0.36, n.rows[0] - 0.62, Jx, Math.PI],
    "desk-2": [n.deskX[1] - 0.36, n.rows[0] - 0.62, Jx, Math.PI],
    "desk-3": [n.deskX[0] - 0.36, n.rows[1] - 0.62, Jx, Math.PI],
    "desk-4": [n.deskX[1] - 0.36, n.rows[1] - 0.62, Jx, Math.PI],
    server: [n.rack.x0 - 0.6, (n.rack.z0 + n.rack.z1) / 2, Jx, Math.PI / 2],
    "back-stairs": [
      -e / 2 + 0.6,
      (n.back.z0 + n.back.z1) / 2,
      Jx,
      -Math.PI / 2,
    ],
  };
}
var rte = {
  konbini: Ay,
  ramen: Py,
  izakaya: Uy,
  karaoke: Yy,
  pachinko: $y,
  akiba: rb,
  capsule: sb,
  maid: Gee,
  kissa: qee,
  sento: Wx,
  callcentre: tte,
};
function ite(e, t) {
  rte[e](t);
}
var rS = [
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
  ate = () => ({ x: 0, z: 0, far: 0, idle: 0, want: !1 }),
  iS = null,
  aS = null;
function oS(e) {
  if (iS && aS) return { pages: iS, mats: aS };
  let t = 4;
  try {
    t = Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy());
  } catch {}
  let n = Number(e.params.get(`intatlas`)),
    r = n > 0 ? Math.min(1, n) : Math.min(1, Te(2048, e.quality) / 2048),
    i = {},
    a = {},
    o = {};
  for (let e of rS) {
    let n = new see(`tokyo-${e}`, r, t);
    (ite(e, n), (i[e] = n));
    let s = Gn(n.placeholder, 1);
    s.name = `interior-room`;
    let c = _r();
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
    (iS = i),
    (aS = { room: a, glass: o, portal: An() }),
    { pages: i, mats: aS }
  );
}
var sS = null;
function cS(e) {
  if (sS) return sS;
  let { mats: t } = oS(e),
    n = () => {
      let e = new b();
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
    (sS = [t.room.konbini, t.glass.konbini, t.portal].map((e) => {
      let t = new p(n(), e);
      return ((t.name = `tokyo-interiors-proto`), (t.frustumCulled = !1), t);
    })),
    sS
  );
}
var lS = null;
function uS() {
  let e = lS;
  return e
    ? {
        ctx: e.ctx,
        room: (t) => e.rooms.find((e) => e.id === t) ?? null,
        ensure: (t, n) => bS(e, t, n),
        ensurePage: (t) => _S(e.pages[t.page], e.ctx),
        scan: () => {
          let t = e.ctx.player.position;
          (e.streamer.scan(t.x, t.y, t.z), e.streamer.flush());
        },
      }
    : null;
}
function dS(e) {
  if (lS) {
    aee(e);
    return;
  }
  let t = performance.now();
  Mn(e);
  let { pages: n, mats: i } = oS(e),
    a = new lee();
  a.cap(`store`, 2);
  let o = new zn(),
    s = new Ln(e, !1),
    c = new Rn(
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
      order: new oee(e),
      menu: new ar(e),
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
      use: Object.fromEntries(rS.map((e) => [e, ate()])),
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
  lS = u;
  let d = 0;
  for (let t of e.plan.pois)
    t.kind === `convenience` && (fS(u, new My(l, t)), d++);
  for (let e of yh) {
    let t = wh(e),
      n = Math.sin(t.facing),
      r = -Math.cos(t.facing),
      i = {
        x: t.x + n * 0.6,
        z: t.z + r * 0.6,
        facing: t.facing,
        width: t.width,
      };
    fS(
      u,
      e.kind === `maid`
        ? new Kee(l, e, i)
        : e.kind === `kissa`
          ? new Jee(l, e, i)
          : e.kind === `ramen`
            ? new Fy(l, e, i)
            : e.kind === `karaoke`
              ? new Xy(l, e, i)
              : e.kind === `pachinko`
                ? new eb(l, e, i)
                : e.kind === `electronics`
                  ? new ib(l, e, i)
                  : new cb(l, e, i),
    );
  }
  {
    let e = bh.door,
      t = Math.sin(e.facing),
      n = -Math.cos(e.facing);
    fS(
      u,
      new Kx(l, {
        x: e.x + t * 0.6,
        z: e.z + n * 0.6,
        facing: e.facing,
        width: 3.2,
      }),
    );
  }
  {
    let e = xh.door,
      t = xh.mouthX - xh.doorX,
      n = Math.sin(e.facing),
      r = -Math.cos(e.facing);
    fS(
      u,
      new nte(l, {
        x: e.x + Math.cos(e.facing) * t + n * 0.2,
        z: e.z + Math.sin(e.facing) * t + r * 0.2,
        facing: e.facing,
        width: 5,
      }),
    );
  }
  try {
    let e = Wy.create(l, Sh);
    e && fS(u, e);
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
  ((u.api = vS(u)),
    (e.interiors = u.api),
    e.events.on(`crime`, (t) => {
      if (lS && !t.witnessed) {
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
    DS(u),
    OS(u),
    console.log(
      `[interiors:tokyo] ${d} konbini + ${yh.length} fronts + ガード下 — anchors in ${(performance.now() - t).toFixed(1)} ms (nothing built)`,
    ));
}
function fS(e, t) {
  (e.rooms.push(t), e.streamer.add(t));
}
