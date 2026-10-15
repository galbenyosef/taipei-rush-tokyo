// tokyo/assets/world-CAmHK742 17 — bones
// Lines 4828-5133 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var tr = {
    [J.armL]: [0.04, 0, -0.07],
    [J.armR]: [0.02, 0, 0.07],
    [J.foreL]: [0.22, 0, 0],
    [J.foreR]: [0.26, 0, 0],
    [J.fingersL]: [0, 0, 0.3],
    [J.fingersR]: [0, 0, -0.3],
  },
  nr = (e) => (t) => Math.max(e + 0.1, 0.3),
  rr = {
    [J.thighL]: [1.5, 0, -0.06],
    [J.thighR]: [1.5, 0, 0.06],
    [J.shinL]: [-1.45, 0, 0],
    [J.shinR]: [-1.45, 0, 0],
    [J.footL]: [-0.05, 0, 0],
    [J.footR]: [-0.05, 0, 0],
  },
  ir = {
    [J.thighL]: [0.12, 0, -0.03],
    [J.thighR]: [0.12, 0, 0.03],
    [J.shinL]: [-1.62, 0, 0],
    [J.shinR]: [-1.62, 0, 0],
    [J.footL]: [0.55, 0, 0],
    [J.footR]: [0.55, 0, 0],
  },
  ar = {
    [J.armL]: [0.55, 0, 0.32],
    [J.armR]: [0.55, 0, -0.32],
    [J.foreL]: [1.75, 0, 0],
    [J.foreR]: [1.75, 0, 0],
    [J.handL]: [0, 0.6, 0],
    [J.handR]: [0, -0.6, 0],
    [J.fingersL]: [0, 0, 0.05],
    [J.fingersR]: [0, 0, -0.05],
  },
  or = {
    stand: { bones: { ...tr } },
    attention: {
      bones: {
        [J.armL]: [0, 0, -0.03],
        [J.armR]: [0, 0, 0.03],
        [J.foreL]: [0.05, 0, 0],
        [J.foreR]: [0.05, 0, 0],
        [J.fingersL]: [0, 0, 0.9],
        [J.fingersR]: [0, 0, -0.9],
        [J.chest]: [0.03, 0, 0],
      },
    },
    browse: {
      bones: {
        ...tr,
        [J.armR]: [1.05, 0, 0.12],
        [J.foreR]: [0.55, 0, 0],
        [J.head]: [-0.12, 0.1, 0],
        [J.neck]: [-0.05, 0.05, 0],
      },
    },
    look: {
      bones: {
        ...tr,
        [J.head]: [0.18, 0.35, 0],
        [J.neck]: [0.1, 0.2, 0],
        [J.spine]: [0.03, 0.1, 0],
      },
    },
    phone: {
      bones: {
        ...tr,
        [J.armL]: [0.3, 0, -0.3],
        [J.foreL]: [1.5, 0, 0],
        [J.handL]: [-0.2, 0.9, 0],
        [J.head]: [-0.3, 0, 0],
        [J.neck]: [-0.2, 0, 0],
      },
    },
    hold: {
      bones: {
        ...tr,
        [J.armR]: [0.15, 0, -0.05],
        [J.foreR]: [1.35, 0, 0],
        [J.fingersR]: [0, 0, -0.9],
      },
    },
    point: {
      bones: {
        ...tr,
        [J.armR]: [1.35, 0, 0.35],
        [J.foreR]: [0.1, 0, 0],
        [J.head]: [0, -0.2, 0],
      },
    },
    counter: {
      bones: {
        [J.armL]: [0.5, 0, 0.12],
        [J.armR]: [0.5, 0, -0.12],
        [J.foreL]: [0.95, 0, 0],
        [J.foreR]: [0.95, 0, 0],
        [J.chest]: [-0.08, 0, 0],
        [J.fingersL]: [0, 0, 0.2],
        [J.fingersR]: [0, 0, -0.2],
      },
    },
    cook: {
      bones: {
        [J.armL]: [0.45, 0, 0.2],
        [J.armR]: [0.7, 0, -0.1],
        [J.foreL]: [1.1, 0, 0],
        [J.foreR]: [1.2, 0, 0],
        [J.chest]: [-0.14, 0, 0],
        [J.head]: [-0.3, 0, 0],
        [J.fingersR]: [0, 0, -0.9],
      },
    },
    handsup: {
      bones: {
        [J.armL]: [2.55, 0, -0.45],
        [J.armR]: [2.55, 0, 0.45],
        [J.foreL]: [0.55, 0, 0],
        [J.foreR]: [0.55, 0, 0],
        [J.handL]: [0.3, 0, 0],
        [J.handR]: [0.3, 0, 0],
        [J.fingersL]: [0, 0, -0.1],
        [J.fingersR]: [0, 0, 0.1],
        [J.chest]: [0.08, 0, 0],
        [J.head]: [0.05, 0, 0],
      },
    },
    cower: {
      bones: {
        [J.thighL]: [1.95, 0, -0.18],
        [J.thighR]: [1.95, 0, 0.18],
        [J.shinL]: [-2.35, 0, 0],
        [J.shinR]: [-2.35, 0, 0],
        [J.footL]: [0.35, 0, 0],
        [J.footR]: [0.35, 0, 0],
        [J.spine]: [-0.35, 0, 0],
        [J.chest]: [-0.3, 0, 0],
        [J.head]: [-0.4, 0, 0],
        [J.armL]: [2.3, 0, 0.2],
        [J.armR]: [2.3, 0, -0.2],
        [J.foreL]: [2.1, 0, 0],
        [J.foreR]: [2.1, 0, 0],
      },
      hipsY: (e) => e.shinLen * 0.62 + 0.12,
    },
    sit: {
      bones: {
        ...rr,
        [J.armL]: [0.55, 0, -0.05],
        [J.armR]: [0.55, 0, 0.05],
        [J.foreL]: [0.75, 0, 0],
        [J.foreR]: [0.75, 0, 0],
        [J.spine]: [0.04, 0, 0],
      },
      hipsY: nr(0.43),
    },
    stool: {
      bones: {
        ...rr,
        [J.shinL]: [-1.8, 0, 0],
        [J.shinR]: [-1.8, 0, 0],
        [J.armL]: [0.6, 0, -0.05],
        [J.armR]: [0.6, 0, 0.05],
        [J.foreL]: [0.9, 0, 0],
        [J.foreR]: [0.9, 0, 0],
      },
      hipsY: nr(0.7),
    },
    eat: {
      bones: {
        ...rr,
        [J.armL]: [0.6, 0, -0.05],
        [J.foreL]: [0.85, 0, 0],
        [J.armR]: [0.75, 0, -0.2],
        [J.foreR]: [2.05, 0, 0],
        [J.head]: [-0.12, 0, 0],
        [J.chest]: [-0.12, 0, 0],
      },
      hipsY: nr(0.43),
    },
    kneel: { bones: { ...ir, ...tr }, hipsY: (e) => e.thighLen + 0.09 },
    pray: {
      bones: {
        ...ir,
        ...ar,
        [J.head]: [-0.25, 0, 0],
        [J.chest]: [-0.12, 0, 0],
      },
      hipsY: (e) => e.thighLen + 0.09,
    },
    incense: {
      bones: {
        ...ar,
        [J.armL]: [0.85, 0, 0.3],
        [J.armR]: [0.85, 0, -0.3],
        [J.foreL]: [1.45, 0, 0],
        [J.foreR]: [1.45, 0, 0],
        [J.head]: [-0.1, 0, 0],
      },
    },
  },
  sr = 25;
function cr(e, t) {
  let n = e.bones;
  for (let t = 0; t < sr && t < n.length; t++)
    (n[t].rotation.set(0, 0, 0), n[t].position.copy(e.rest[t]));
  (n[J.lidL].scale.set(1, 0.001, 1), n[J.lidR].scale.set(1, 0.001, 1));
  let r = or[t];
  for (let e in r.bones) {
    let t = r.bones[e];
    n[+e].rotation.set(t[0], t[1], t[2]);
  }
  (r.hipsY && (n[J.hips].position.y = r.hipsY(e)),
    r.hipsZ && (n[J.hips].position.z = e.rest[J.hips].z - r.hipsZ));
}
var lr = new Set([`umbrella`, `helmet`, `deliveryBox`]),
  ur = new Map(),
  dr = 28,
  fr = new U(),
  pr = new de(),
  mr = new W(),
  hr = new W();
function gr(e) {
  let t = ur.get(e.id);
  if (t) return (ur.delete(e.id), ur.set(e.id, t), t);
  for (t = Xe(e, { lod: 1, atlas: null }), ur.set(e.id, t); ur.size > dr;) {
    let e = ur.keys().next().value;
    (ur.get(e)?.dispose(), ur.delete(e));
  }
  return t;
}
function _r(e, t = !1) {
  return t || !e.acc?.some((e) => lr.has(e.kind))
    ? e
    : { ...e, id: `${e.id}~in`, acc: e.acc.filter((e) => !lr.has(e.kind)) };
}
function vr(e, t) {
  let n = gr(e);
  (cr(n, t), n.root.updateMatrixWorld(!0));
  let r = n.mesh,
    i = r.geometry,
    a = i.attributes.position,
    o = i.attributes.normal,
    s = i.attributes.color,
    c = a.count,
    l = new Float32Array(c * 3),
    u = new Float32Array(c * 3);
  for (let e = 0; e < c; e++)
    (r.getVertexPosition(e, fr),
      pr.set(o.getX(e), o.getY(e), o.getZ(e), 0),
      r.applyBoneTransform(e, pr),
      (l[e * 3] = fr.x),
      (l[e * 3 + 1] = fr.y),
      (l[e * 3 + 2] = fr.z),
      (u[e * 3] = pr.x),
      (u[e * 3 + 1] = pr.y),
      (u[e * 3 + 2] = pr.z));
  let d = null;
  if (s) {
    d = new Float32Array(c * 3);
    for (let e = 0; e < c; e++)
      ((d[e * 3] = s.getX(e)),
        (d[e * 3 + 1] = s.getY(e)),
        (d[e * 3 + 2] = s.getZ(e)));
  }
  let f = i.index,
    p = null;
  if (f) {
    p = c > 65535 ? new Uint32Array(f.count) : new Uint16Array(f.count);
    for (let e = 0; e < f.count; e++) p[e] = f.getX(e);
  }
  return (cr(n, `stand`), { pos: l, nor: u, col: d, idx: p });
}
function yr(e, t, n = {}) {
  let r = t.pos.length / 3,
    i = e.vcount,
    a = n.scale ?? 1,
    o = n.tint === void 0 ? null : mr.setHex(n.tint),
    s = n.mono === void 0 ? null : hr.setHex(n.mono),
    c = n.emit ?? 0,
    l = t.pos,
    u = t.nor,
    d = t.col,
    f = t.idx;
  (e.reserve(r, f ? f.length : r), (e.reg = e.white), e.push().scale(a));
  for (let t = 0; t < r; t++) {
    let n = t * 3;
    (s
      ? ((e.r = s.r), (e.g = s.g), (e.b = s.b))
      : d
        ? ((e.r = d[n]), (e.g = d[n + 1]), (e.b = d[n + 2]))
        : (e.r = e.g = e.b = 0.7),
      o && ((e.r *= o.r), (e.g *= o.g), (e.b *= o.b)),
      (e.a = c),
      e.v(l[n], l[n + 1], l[n + 2], u[n], u[n + 1], u[n + 2], 0.5, 0.5));
  }
  e.pop();
  let p = 0;
  if (f)
    for (let t = 0; t + 2 < f.length; t += 3)
      (e.tri(i + f[t], i + f[t + 1], i + f[t + 2]), p++);
  else
    for (let t = 0; t + 2 < r; t += 3)
      (e.tri(i + t, i + t + 1, i + t + 2), p++);
  return p;
}
