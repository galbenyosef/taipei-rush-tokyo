// tokyo__assets__peopleWorker-Cn7UVw8F 57 — bones
// Lines 23214-23556 of readable/tokyo__assets__peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
[...ll, ...ul];
const dl = {
    [R.armL]: [0.04, 0, -0.07],
    [R.armR]: [0.02, 0, 0.07],
    [R.foreL]: [0.22, 0, 0],
    [R.foreR]: [0.26, 0, 0],
    [R.fingersL]: [0, 0, 0.3],
    [R.fingersR]: [0, 0, -0.3],
  },
  fl = (e) => (t) => Math.max(e + 0.1, 0.3),
  pl = {
    [R.thighL]: [1.5, 0, -0.06],
    [R.thighR]: [1.5, 0, 0.06],
    [R.shinL]: [-1.45, 0, 0],
    [R.shinR]: [-1.45, 0, 0],
    [R.footL]: [-0.05, 0, 0],
    [R.footR]: [-0.05, 0, 0],
  },
  ml = {
    [R.thighL]: [0.12, 0, -0.03],
    [R.thighR]: [0.12, 0, 0.03],
    [R.shinL]: [-1.62, 0, 0],
    [R.shinR]: [-1.62, 0, 0],
    [R.footL]: [0.55, 0, 0],
    [R.footR]: [0.55, 0, 0],
  },
  hl = {
    [R.armL]: [0.55, 0, 0.32],
    [R.armR]: [0.55, 0, -0.32],
    [R.foreL]: [1.75, 0, 0],
    [R.foreR]: [1.75, 0, 0],
    [R.handL]: [0, 0.6, 0],
    [R.handR]: [0, -0.6, 0],
    [R.fingersL]: [0, 0, 0.05],
    [R.fingersR]: [0, 0, -0.05],
  },
  gl = {
    stand: { bones: { ...dl } },
    attention: {
      bones: {
        [R.armL]: [0, 0, -0.03],
        [R.armR]: [0, 0, 0.03],
        [R.foreL]: [0.05, 0, 0],
        [R.foreR]: [0.05, 0, 0],
        [R.fingersL]: [0, 0, 0.9],
        [R.fingersR]: [0, 0, -0.9],
        [R.chest]: [0.03, 0, 0],
      },
    },
    browse: {
      bones: {
        ...dl,
        [R.armR]: [1.05, 0, 0.12],
        [R.foreR]: [0.55, 0, 0],
        [R.head]: [-0.12, 0.1, 0],
        [R.neck]: [-0.05, 0.05, 0],
      },
    },
    look: {
      bones: {
        ...dl,
        [R.head]: [0.18, 0.35, 0],
        [R.neck]: [0.1, 0.2, 0],
        [R.spine]: [0.03, 0.1, 0],
      },
    },
    phone: {
      bones: {
        ...dl,
        [R.armL]: [0.3, 0, -0.3],
        [R.foreL]: [1.5, 0, 0],
        [R.handL]: [-0.2, 0.9, 0],
        [R.head]: [-0.3, 0, 0],
        [R.neck]: [-0.2, 0, 0],
      },
    },
    hold: {
      bones: {
        ...dl,
        [R.armR]: [0.15, 0, -0.05],
        [R.foreR]: [1.35, 0, 0],
        [R.fingersR]: [0, 0, -0.9],
      },
    },
    point: {
      bones: {
        ...dl,
        [R.armR]: [1.35, 0, 0.35],
        [R.foreR]: [0.1, 0, 0],
        [R.head]: [0, -0.2, 0],
      },
    },
    counter: {
      bones: {
        [R.armL]: [0.5, 0, 0.12],
        [R.armR]: [0.5, 0, -0.12],
        [R.foreL]: [0.95, 0, 0],
        [R.foreR]: [0.95, 0, 0],
        [R.chest]: [-0.08, 0, 0],
        [R.fingersL]: [0, 0, 0.2],
        [R.fingersR]: [0, 0, -0.2],
      },
    },
    cook: {
      bones: {
        [R.armL]: [0.45, 0, 0.2],
        [R.armR]: [0.7, 0, -0.1],
        [R.foreL]: [1.1, 0, 0],
        [R.foreR]: [1.2, 0, 0],
        [R.chest]: [-0.14, 0, 0],
        [R.head]: [-0.3, 0, 0],
        [R.fingersR]: [0, 0, -0.9],
      },
    },
    handsup: {
      bones: {
        [R.armL]: [2.55, 0, -0.45],
        [R.armR]: [2.55, 0, 0.45],
        [R.foreL]: [0.55, 0, 0],
        [R.foreR]: [0.55, 0, 0],
        [R.handL]: [0.3, 0, 0],
        [R.handR]: [0.3, 0, 0],
        [R.fingersL]: [0, 0, -0.1],
        [R.fingersR]: [0, 0, 0.1],
        [R.chest]: [0.08, 0, 0],
        [R.head]: [0.05, 0, 0],
      },
    },
    cower: {
      bones: {
        [R.thighL]: [1.95, 0, -0.18],
        [R.thighR]: [1.95, 0, 0.18],
        [R.shinL]: [-2.35, 0, 0],
        [R.shinR]: [-2.35, 0, 0],
        [R.footL]: [0.35, 0, 0],
        [R.footR]: [0.35, 0, 0],
        [R.spine]: [-0.35, 0, 0],
        [R.chest]: [-0.3, 0, 0],
        [R.head]: [-0.4, 0, 0],
        [R.armL]: [2.3, 0, 0.2],
        [R.armR]: [2.3, 0, -0.2],
        [R.foreL]: [2.1, 0, 0],
        [R.foreR]: [2.1, 0, 0],
      },
      hipsY: (e) => e.shinLen * 0.62 + 0.12,
    },
    sit: {
      bones: {
        ...pl,
        [R.armL]: [0.55, 0, -0.05],
        [R.armR]: [0.55, 0, 0.05],
        [R.foreL]: [0.75, 0, 0],
        [R.foreR]: [0.75, 0, 0],
        [R.spine]: [0.04, 0, 0],
      },
      hipsY: fl(0.43),
    },
    stool: {
      bones: {
        ...pl,
        [R.shinL]: [-1.8, 0, 0],
        [R.shinR]: [-1.8, 0, 0],
        [R.armL]: [0.6, 0, -0.05],
        [R.armR]: [0.6, 0, 0.05],
        [R.foreL]: [0.9, 0, 0],
        [R.foreR]: [0.9, 0, 0],
      },
      hipsY: fl(0.7),
    },
    eat: {
      bones: {
        ...pl,
        [R.armL]: [0.6, 0, -0.05],
        [R.foreL]: [0.85, 0, 0],
        [R.armR]: [0.75, 0, -0.2],
        [R.foreR]: [2.05, 0, 0],
        [R.head]: [-0.12, 0, 0],
        [R.chest]: [-0.12, 0, 0],
      },
      hipsY: fl(0.43),
    },
    kneel: { bones: { ...ml, ...dl }, hipsY: (e) => e.thighLen + 0.09 },
    pray: {
      bones: {
        ...ml,
        ...hl,
        [R.head]: [-0.25, 0, 0],
        [R.chest]: [-0.12, 0, 0],
      },
      hipsY: (e) => e.thighLen + 0.09,
    },
    incense: {
      bones: {
        ...hl,
        [R.armL]: [0.85, 0, 0.3],
        [R.armR]: [0.85, 0, -0.3],
        [R.foreL]: [1.45, 0, 0],
        [R.foreR]: [1.45, 0, 0],
        [R.head]: [-0.1, 0, 0],
      },
    },
  };
function _l(e, t) {
  let n = e.bones;
  for (let t = 0; t < 25 && t < n.length; t++)
    (n[t].rotation.set(0, 0, 0), n[t].position.copy(e.rest[t]));
  (n[R.lidL].scale.set(1, 0.001, 1), n[R.lidR].scale.set(1, 0.001, 1));
  let r = gl[t];
  for (let e in r.bones) {
    let t = r.bones[e];
    n[+e].rotation.set(t[0], t[1], t[2]);
  }
  (r.hipsY && (n[R.hips].position.y = r.hipsY(e)),
    r.hipsZ && (n[R.hips].position.z = e.rest[R.hips].z - r.hipsZ));
}
const vl = /* @__PURE__ */ new Map(),
  yl = new N(),
  bl = new Se();
(new F(), new F());
function xl(e) {
  let t = vl.get(e.id);
  if (t) return (vl.delete(e.id), vl.set(e.id, t), t);
  for (t = tl(e, { lod: 1, atlas: null }), vl.set(e.id, t); vl.size > 28;) {
    let e = vl.keys().next().value;
    (vl.get(e)?.dispose(), vl.delete(e));
  }
  return t;
}
function Sl(e, t) {
  let n = xl(e);
  (_l(n, t), n.root.updateMatrixWorld(!0));
  let r = n.mesh,
    i = r.geometry,
    a = i.attributes.position,
    o = i.attributes.normal,
    s = i.attributes.color,
    c = a.count,
    l = new Float32Array(c * 3),
    u = new Float32Array(c * 3);
  for (let e = 0; e < c; e++)
    (r.getVertexPosition(e, yl),
      bl.set(o.getX(e), o.getY(e), o.getZ(e), 0),
      r.applyBoneTransform(e, bl),
      (l[e * 3] = yl.x),
      (l[e * 3 + 1] = yl.y),
      (l[e * 3 + 2] = yl.z),
      (u[e * 3] = bl.x),
      (u[e * 3 + 1] = bl.y),
      (u[e * 3 + 2] = bl.z));
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
  return (_l(n, `stand`), { pos: l, nor: u, col: d, idx: p });
}
const Cl = self,
  wl = typeof OffscreenCanvas < `u`;
!Cl.document &&
  wl &&
  (Cl.document = { createElement: () => new OffscreenCanvas(1, 1) });
const Tl = (e, t = []) => self.postMessage(e, t);
let El = null;
const Dl = /* @__PURE__ */ new Map();
async function Ol(e) {
  if (!wl) throw Error(`no OffscreenCanvas`);
  let t = (El ??= new Ma(e.atlasSize)),
    n = performance.now(),
    r = tl(e.desc, { atlas: t, faceRes: e.faceRes }),
    i = t.pages[t.pages.length - 1],
    a = r.mesh.geometry,
    o = [],
    s = /* @__PURE__ */ new Set(),
    c = (e) => {
      let t = e;
      return (
        s.has(e.buffer) && (t = e.slice()),
        s.add(t.buffer),
        o.push(t.buffer),
        t
      );
    },
    l = [];
  for (let e in a.attributes) {
    let t = a.attributes[e];
    l.push({
      name: e,
      array: c(t.array),
      itemSize: t.itemSize,
      normalized: t.normalized,
    });
  }
  let u = a.index ? c(a.index.array) : null,
    d = a.groups.map((e) => [e.start, e.count, e.materialIndex ?? 0]),
    f = r.mesh.boundingSphere ?? a.boundingSphere,
    p = new Float32Array(r.joints.length * 3);
  (r.joints.forEach((e, t) => p.set([e.x, e.y, e.z], t * 3)), o.push(p.buffer));
  let m = null;
  if (Dl.get(i.id) !== i.used) {
    ((m = await createImageBitmap(i.canvas, {
      imageOrientation: `flipY`,
      premultiplyAlpha: `premultiply`,
      colorSpaceConversion: `none`,
    })),
      Dl.set(i.id, i.used),
      o.push(m));
    for (let e of t.pages)
      e !== i && e.canvas.width > 1 && (e.canvas.width = e.canvas.height = 1);
  }
  (r.dispose(),
    Tl(
      {
        id: e.id,
        hero: {
          attrs: l,
          index: u,
          groups: d,
          bs: [f.center.x, f.center.y, f.center.z, f.radius],
          joints: p,
          triangles: r.triangles,
          trim: r.trim,
          breakdown: r.breakdown,
          height: r.height,
          thighLen: r.thighLen,
          shinLen: r.shinLen,
          page: i.id,
          pageSize: i.size,
          bitmap: m,
        },
        ms: performance.now() - n,
      },
      o,
    ));
}
