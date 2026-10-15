// tokyo/assets/region-tokyo-BcM3fReU 106 — math
// Lines 49661-49996 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function rE(e) {
  let t = [],
    n = [],
    { plan: r } = e,
    i = (e, t) => {
      let n = r.surfaceAt(e, t);
      return n === `sidewalk` || n === `plaza` || n === `lot`;
    },
    a = new Set();
  for (let r of e.entrances) {
    if (r.kind !== `elevated`) continue;
    let [e, o] = tE(r.heading),
      [s, c] = nE(r.heading),
      l = (r.exit.charCodeAt(0) + r.stationId.length) % 2 ? 1 : -1,
      u = r.x - e * 4 + s * 2.2 * l,
      d = r.z - o * 4 + c * 2.2 * l;
    if (
      (i(u, d) &&
        t.push({
          id: `tissue-${r.stationId}-${r.exit}`,
          x: u,
          z: d,
          slots: [{ x: u, z: d, h: r.heading, pose: `wave` }],
          from: 10,
          to: 19,
          kinds: [`office`],
          stay: [90, 240],
          fill: 0.5,
          poses: [`wave`, `idle`],
          lines: [`jp-tissue`],
          days: (e) => !e.off,
        }),
      !a.has(r.stationId))
    ) {
      let u = r.x - e * 8 - s * 6.5 * l,
        d = r.z - o * 8 - c * 6.5 * l;
      if (
        !ul(
          Math.min(u, u - e * 1.5) - 1.7,
          Math.min(d, d - o * 1.5) - 1.7,
          Math.max(u, u - e * 1.5) + 1.7,
          Math.max(d, d - o * 1.5) + 1.7,
        ) &&
        i(u, d) &&
        i(u - e * 1.5, d - o * 1.5) &&
        i(u + s * 1.6, d + c * 1.6) &&
        i(u - s * 1.6, d - c * 1.6)
      ) {
        (a.add(r.stationId),
          n.push({ model: `smoking-area`, x: u, z: d, fx: -e, fz: -o }));
        let i = [];
        for (let e = 0; e < 5; e++) {
          let t = (e / 5) * Math.PI * 2 + 0.4,
            n = u + Math.cos(t) * 1.05,
            r = d + Math.sin(t) * 1.05;
          i.push({
            x: n,
            z: r,
            h: Math.atan2(u - n, -(d - r)),
            pose: e % 2 ? `phone` : `idle`,
          });
        }
        t.push({
          id: `smoke-${r.stationId}`,
          x: u,
          z: d,
          slots: i,
          from: 7,
          to: 23.5,
          kinds: [`office`, `office`, `uncle`, `student`],
          stay: [60, 200],
          fill: 0.45,
          poses: [`idle`, `phone`, `chat`],
          lines: [],
        });
      }
    }
  }
  let o = r.landmark(`shimbashi-sl`);
  if (o) {
    let e = o.x + o.w / 2 - 3.5,
      r = o.z - o.d / 2 + 3.5;
    if (i(e, r)) {
      n.push({ model: `smoking-area`, x: e, z: r, fx: -1, fz: 0 });
      let i = [];
      for (let t = 0; t < 6; t++) {
        let n = (t / 6) * Math.PI * 2,
          a = e + Math.cos(n) * 1.1,
          o = r + Math.sin(n) * 1.1;
        i.push({
          x: a,
          z: o,
          h: Math.atan2(e - a, -(r - o)),
          pose: t % 3 == 1 ? `phone` : `idle`,
        });
      }
      t.push({
        id: `smoke-sl`,
        x: e,
        z: r,
        slots: i,
        from: 7,
        to: 24,
        kinds: [`office`, `office`, `uncle`],
        stay: [60, 200],
        fill: 0.6,
        poses: [`idle`, `phone`, `chat`],
        lines: [],
      });
    }
  }
  let s = r.roads.find((e) => e.id === `chuo-akihabara`),
    c = (r.dataset.namedPlaces ?? []).find(
      (e) => e.id === `akihabara-denkigai`,
    );
  if (s && c) {
    let e = s.halfTotal - s.halfWidth,
      i = 0;
    for (let a = c.minZ + 12; a < c.maxZ - 6; a += 22, i++) {
      let o = i % 2 ? 1 : -1,
        c = s.halfWidth + Math.min(1.1, e * 0.25),
        l = s.axis === `z` ? s.at + o * c : a,
        u = s.axis === `z` ? a : s.at + o * c;
      if (r.nodeAt(l, u) || r.surfaceAt(l, u) !== `sidewalk`) continue;
      let d = s.axis === `z` ? o : 0,
        f = s.axis === `z` ? 0 : o,
        p = Math.atan2(d, -f);
      if (
        (t.push({
          id: `maid-${i}`,
          x: l,
          z: u,
          slots: [{ x: l, z: u, h: p, pose: `wave` }],
          from: 11,
          to: 21,
          kinds: [`vendor`],
          stay: [120, 300],
          fill: 0.55,
          poses: [`wave`, `idle`],
          lines: [`jp-okaerinasai`],
        }),
        i % 2 == 0)
      ) {
        let e = s.axis === `z` ? s.at + o * (s.halfTotal - 0.35) : a + 4,
          t = s.axis === `z` ? a + 4 : s.at + o * (s.halfTotal - 0.35);
        r.surfaceAt(e, t) === `sidewalk` &&
          !r.nodeAt(e, t) &&
          n.push({ model: `kyakuhiki-sign`, x: e, z: t, fx: -d, fz: -f });
      }
    }
  }
  for (let [n, r] of e.tables.entries()) {
    let [e, i] = [r.fz, -r.fx],
      a = [];
    for (let [t, n] of [
      [-0.75, 0.15],
      [0.75, 0.15],
      [0, 0.85],
    ]) {
      let o = r.x + e * t + r.fx * n,
        s = r.z + i * t + r.fz * n;
      a.push({
        x: o,
        z: s,
        h: Math.atan2(r.x - o, -(r.z - s)),
        pose: t === 0 ? `chat` : `idle`,
      });
    }
    t.push({
      id: `gado-${n}`,
      x: r.x,
      z: r.z,
      slots: a,
      from: 17,
      to: 23.5,
      kinds: [`office`, `office`, `uncle`],
      stay: [120, 400],
      fill: 0.5,
      poses: [`chat`, `idle`, `chat`],
      lines: [`jp-nomi`, `jp-otsukare`],
      days: (e) => !e.newYear,
    });
  }
  let l = $T(r);
  if (l.lanes.length) {
    let e = (e, t) =>
        !l.trees.some(
          (n) => Math.abs(n.x - e) < 1.9 && Math.abs(n.z - t) < 2.3,
        ) &&
        !l.items.some((n) => Math.abs(n.x - e) < 2 && Math.abs(n.z - t) < 2.4),
      r = 0;
    for (let i of [-197.2, -174.2])
      for (let a = -1342; a < -1222; a += 6.2, r++) {
        if ((r * 7) % 5 == 0 || !e(i, a)) continue;
        n.push({
          model: `hanami-tarp`,
          x: i,
          z: a,
          fx: i < -185 ? 1 : -1,
          fz: 0,
        });
        let o = [];
        for (let [e, t] of [
          [-0.6, -0.9],
          [0.6, -0.7],
          [-0.55, 0.6],
          [0.55, 0.9],
          [0, 0],
        ])
          o.push({
            x: i + e,
            z: a + t,
            h: Math.atan2(-e, t),
            pose: `sitFloor`,
          });
        t.push({
          id: `hanami-${r}`,
          x: i,
          z: a,
          slots: o,
          from: 10,
          to: 20.5,
          kinds: [`office`, `student`, `tourist`, `office`, `auntie`],
          stay: [300, 900],
          fill: 0.7,
          poses: [`chat`, `idle`],
          lines: [`jp-kampai`, `cute`],
          days: (e) => (e.m === 3 && e.d >= 26) || (e.m === 4 && e.d <= 7),
        });
      }
  }
  return { spots: t, props: n };
}
var iE = (e) => (e.m === 11 && e.d >= 20) || (e.m === 12 && e.d <= 22);
function aE(e, t, n) {
  return (e, r) => {
    for (let t of e)
      switch (t.type) {
        case `shrine`:
          ((t.extraAcc = 0),
            (t.kinds = [`elder`, `auntie`, `office`, `elder`]),
            (t.stayMin = 8),
            (t.stayMax = 20),
            (t.fill = 0.3));
          break;
        case `lottery`:
          t.poses = [0, 5];
          for (let e of t.slots) e.pose === 15 && (e.pose = 0);
          t.kinds = [`elder`, `uncle`, `auntie`, `office`];
          break;
        case `convenience`:
        case `loiter`:
          t.poses = [5, 0, 7, 5];
          break;
        case `bubbletea`:
        case `queue`:
          t.giveCup = !1;
      }
    let i = [];
    for (let t of [...e]) {
      if (t.type !== `lottery` || !t.slots.length) continue;
      let n = t.slots[0].h,
        [a, o] = tE(n + Math.PI),
        [s, c] = nE(n),
        l = [];
      for (let e = 0; e < 10; e++)
        l.push({
          x: t.x + a * (1.2 + e * 0.75) + s * 0.9,
          z: t.z + o * (1.2 + e * 0.75) + c * 0.9,
          h: n,
          pose: e % 3 == 2 ? 5 : 0,
          occ: -1,
        });
      (r({
        type: `jumbo`,
        x: t.x,
        z: t.z,
        slots: l,
        from: 0,
        to: 0,
        kinds: [`elder`, `uncle`, `auntie`, `office`],
        stayMin: 120,
        stayMax: 300,
        fill: 0.7,
        lines: [],
        extraAcc: 0,
        poses: [0, 5],
        giveCup: !1,
      }),
        i.push(e[e.length - 1]));
    }
    let a = [...n.spots, ...t.spots],
      o = [];
    for (let t of a)
      (r({
        type: `tk-${t.id}`,
        x: t.x,
        z: t.z,
        from: t.from,
        to: t.to,
        kinds: t.kinds ? t.kinds : null,
        stayMin: t.stay[0],
        stayMax: t.stay[1],
        fill: t.fill,
        slots: t.slots.map((e) => ({
          x: e.x,
          z: e.z,
          h: e.h,
          pose: e.pose ? (eE[e.pose] ?? 0) : 0,
          occ: -1,
          ...(e.seat === void 0 ? {} : { seat: e.seat }),
        })),
        lines: t.lines ?? [],
        extraAcc: 0,
        poses: (t.poses ?? [`idle`, `phone`]).map((e) => eE[e] ?? 0),
        giveCup: !1,
      }),
        t.days &&
          o.push({
            sp: e[e.length - 1],
            from: t.from,
            to: t.to,
            days: t.days,
          }));
    let s = () => {
      let e = t.state.day;
      for (let t of o) {
        let n = t.days(e);
        ((t.sp.from = n ? t.from : 0), (t.sp.to = n ? t.to : 0));
      }
      let n = iE(e);
      for (let e of i) ((e.from = n ? 9 : 0), (e.to = n ? 19 : 0));
    };
    (s(), t.on(`day`, s));
  };
}
