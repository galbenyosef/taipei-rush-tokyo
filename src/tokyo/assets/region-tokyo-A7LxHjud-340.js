// tokyo/assets/region-tokyo-A7LxHjud 340 — math
// Lines 122861-123164 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function OAe(e, t) {
  let n = e.plan,
    r = e.peds,
    i = { hokoten: [], park: [], perf: [], station: [], kids: [], ameyoko: [] },
    a = (e, t, n, i, a) => (o) => r.crowd(e, t, n, o, i, a);
  for (let [e, t] of (n.dataset.closures ?? []).entries()) {
    if (!/hokoten/.test(t.id)) continue;
    let r = n.roads.find((e) => e.id === t.road) ?? null,
      o = r ? nf(n, t) : null;
    if (!r || !o) continue;
    let s = t.road === `chuo-akihabara`,
      c = s
        ? [`tourist`, `tourist`, `student`, `office`, `tourist`]
        : [`tourist`, `office`, `student`, `auntie`, `tourist`],
      l = {
        mode: `mill`,
        poses: s
          ? [`idle`, `phone`, `film`, `film`, `look_up`]
          : [`idle`, `phone`, `chat`, `film`],
      },
      u = [];
    for (let e of n.nodes) {
      let t = r.axis === `z` ? e.z : e.x,
        n = r.axis === `z` ? e.x : e.z;
      Math.abs(n - r.at) < 1 && u.push([t, r.axis === `z` ? e.halfZ : e.halfX]);
    }
    let d = (e, t) => u.some(([n, r]) => Math.abs(n - e) < r + t + 2),
      f = (t, n) => {
        let o = r.axis === `z` ? r.at : t,
          s = r.axis === `z` ? t : r.at;
        i.hokoten.push({
          x: o,
          z: s,
          r: n,
          want: 0,
          n: 0,
          release: null,
          closure: e,
          make: a(o, s, n, c, l),
        });
      };
    if (!s) {
      let e = Math.min(8, r.halfWidth * 0.8);
      for (let t = o[0] + 4 + e + 2; t < o[1] - 4 - e - 2; t += 30)
        d(t, e) || f(t, e);
      continue;
    }
    let p = o[0] + 4 + 6 + 2,
      m = o[1] - 4 - 6 - 2,
      h = u
        .map(([e, t]) => [e - t - 6 - 2, e + t + 6 + 2])
        .sort((e, t) => e[0] - t[0]),
      g = p;
    for (let [e, t] of [...h, [1 / 0, 1 / 0]]) {
      let n = Math.min(m, e);
      if (n >= g) {
        let e = Math.max(1, Math.ceil((n - g) / 16) + 1);
        for (let t = 0; t < e; t++)
          f(e === 1 ? (g + n) / 2 : g + ((n - g) * t) / (e - 1), 6);
      }
      if (((g = Math.max(g, t)), g > m)) break;
    }
  }
  let o = n.roads.find((e) => e.id === `ameyoko`) ?? null;
  if (o && t.market) {
    let e = t.market,
      n = Math.max(1.4, Math.min(2.6, o.halfWidth * 0.55)),
      r = [
        `auntie`,
        `tourist`,
        `office`,
        `uncle`,
        `tourist`,
        `student`,
        `elder`,
      ];
    for (let t = e.z - e.hz + 10; t <= e.z + e.hz - 10; t += 20) {
      let e = o.axis === `z` ? o.at : t,
        s = o.axis === `z` ? t : o.at;
      i.ameyoko.push({
        x: e,
        z: s,
        r: n,
        want: 0,
        n: 0,
        release: null,
        make: a(e, s, n, r, {
          mode: `mill`,
          poses: [`idle`, `chat`, `idle`, `look_up`],
        }),
      });
    }
  }
  let c = jx(n);
  for (let e of c.mills)
    i.park.push({
      x: e.x,
      z: e.z,
      r: e.r,
      want: 0,
      n: 0,
      release: null,
      make: a(
        e.x,
        e.z,
        e.r,
        [`tourist`, `elder`, `auntie`, `student`, `office`, `uncle`],
        { mode: `mill`, sheltered: !1 },
      ),
    });
  let l = Dx.x + Dx.fx * 3.2,
    u = Dx.z + Dx.fz * 3.2;
  if (
    (c.lanes.length &&
      i.perf.push({
        x: l,
        z: u,
        r: 2.2,
        want: 0,
        n: 0,
        release: null,
        make: a(l, u, 2.2, [`tourist`, `student`, `elder`, `auntie`], {
          mode: `watch`,
          lookX: Dx.x,
          lookZ: Dx.z,
          poses: [`idle`, `film`, `idle`, `chat`],
          sheltered: !1,
        }),
      }),
    c.lanes.length)
  ) {
    let e = Ex.x + 10,
      t = Ex.z + 9;
    i.kids.push({
      x: e,
      z: t,
      r: 4,
      want: 0,
      n: 0,
      release: null,
      make: a(e, t, 4, [`student`], {
        mode: `mill`,
        dress: `child`,
        poses: [`idle`, `chat`, `wave`],
        sheltered: !1,
      }),
    });
  }
  for (let e of t.stationFronts) {
    let t = e.wait;
    if (!t) continue;
    let r = (t.ax + t.bx) / 2,
      o = (t.az + t.bz) / 2,
      s = e.walk ? e.walk.ax : r,
      c = e.walk ? e.walk.az : o;
    i.station.push({
      x: r,
      z: o,
      r: Math.max(1.5, Math.hypot(t.bx - t.ax, t.bz - t.az) / 2),
      want: 0,
      n: 0,
      release: null,
      district: n.districtAt(r, o).id,
      make: a(
        r,
        o,
        Math.max(1.5, Math.hypot(t.bx - t.ax, t.bz - t.az) / 2),
        [`office`, `office`, `student`, `tourist`, `auntie`],
        {
          mode: `watch`,
          lookX: s,
          lookZ: c,
          poses: [`idle`, `phone`, `phone`, `chat`],
        },
      ),
    });
  }
  let d = (e) => {
      e.want !== e.n &&
        (e.release && e.release(),
        (e.release = e.want > 0 ? e.make(e.want) : null),
        (e.n = e.want));
    },
    f = null,
    m = [],
    h = c.items.filter((e) => e.kind === `bench`),
    g = new k(),
    _ = new p(),
    v = new s(),
    y = (t, n, r) => (
      _.multiplyMatrices(
        e.camera.projectionMatrix,
        e.camera.matrixWorldInverse,
      ),
      g.setFromProjectionMatrix(
        _,
        e.camera.coordinateSystem,
        e.camera.reversedDepth,
      ),
      v.center.set(t, n + 1, r),
      (v.radius = 1.2),
      g.intersectsSphere(v)
    ),
    b = (e) => {
      try {
        e?.release();
      } catch {}
    },
    x = (t) => {
      let n = e.player?.position;
      if (!n || !r?.spawnScripted) return;
      let a = (e, t, r) => (e - n.x) ** 2 + (t - n.z) ** 2 < r * r,
        o = (i.perf[0]?.want ?? 0) > 0 && a(Dx.x, Dx.z, 90);
      f && (!o || !f.alive)
        ? (b(f), (f = null))
        : !f &&
          o &&
          !y(Dx.x, c.top, Dx.z) &&
          (f = r.spawnScripted(Dx.x, Dx.z, {
            heading: Math.atan2(Dx.fx, -Dx.fz),
            kind: `student`,
            pose: `wave`,
            y: c.top,
          }));
      let s = t.rain > 0.2 ? 0 : Math.round(4 * Math.min(1, t.park * 1.3));
      for (let e = m.length - 1; e >= 0; e--) {
        let t = m[e],
          n = h[t.bench];
        (!t.h.alive || e >= s || !a(n.x, n.z, 45)) && (b(t.h), m.splice(e, 1));
      }
      for (let e = 0; e < h.length && m.length < s; e++) {
        let t = h[e];
        if (!a(t.x, t.z, 35) || m.some((t) => t.bench === e)) continue;
        let n = (e * 7919) % 2 ? 0.45 : -0.45,
          i = t.x + t.fz * n + t.fx * 0.12,
          o = t.z - t.fx * n + t.fz * 0.12;
        if (y(i, t.y, o)) continue;
        let s = [`elder`, `auntie`, `office`, `uncle`, `student`, `tourist`],
          c = r.spawnScripted(i, o, {
            heading: Math.atan2(t.fx, -t.fz),
            kind: s[(e * 31) % s.length],
            pose: `sit`,
            seat: 0.45,
            y: t.y,
          });
        if (!c) break;
        (c.stop((e & 3) == 1 ? `phone` : `sit`, Math.atan2(t.fx, -t.fz), 0.45),
          m.push({ bench: e, h: c }));
      }
    },
    S = 0;
  return {
    update(e, t) {
      if (!r?.crowd || ((S -= e), S > 0)) return;
      S = 1;
      let n = Math.max(0, 1 - 1.2 * t.rain);
      for (let e of i.hokoten)
        e.want = (t.hokotenK[e.closure ?? 0] ?? 0) >= 0.5 ? 6 : 0;
      let a = t.park * n;
      for (let e of i.park)
        e.want = a < 0.12 ? 0 : 2 * Math.max(1, Math.round((a * 6) / 2));
      for (let e of i.perf)
        e.want =
          t.rain < 0.15 && t.hour >= 11 && t.hour < 17 && t.park > 0.5 ? 7 : 0;
      for (let e of i.station) {
        let n = t.commuteOf(e.district ?? ``);
        e.want = n < 0.2 || t.rain > 0.3 ? 0 : n < 0.55 ? 1 : n < 0.8 ? 2 : 3;
      }
      for (let e of i.kids)
        e.want =
          (t.children ?? 0) > 0.5 &&
          !(t.chime ?? 0) &&
          t.rain < 0.2 &&
          t.hour < 17
            ? 6
            : 0;
      let o = t.market ?? 0;
      for (let e of i.ameyoko) e.want = o < 0.15 ? 0 : o < 0.5 ? 2 : 3;
      for (let e of [i.hokoten, i.park, i.perf, i.station, i.kids, i.ameyoko])
        for (let t of e) d(t);
      x(t);
    },
    stats() {
      let e = (e) => e.reduce((e, t) => e + t.n, 0);
      return {
        hokoten: e(i.hokoten),
        park: e(i.park),
        performer: !!f,
        audience: e(i.perf),
        sitters: m.length,
        station: e(i.station),
        kids: e(i.kids),
        ameyoko: e(i.ameyoko),
        slots:
          i.hokoten.length +
          i.park.length +
          i.perf.length +
          i.station.length +
          i.kids.length +
          i.ameyoko.length,
      };
    },
  };
}
