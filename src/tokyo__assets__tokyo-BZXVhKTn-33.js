// tokyo__assets__tokyo-BZXVhKTn 33 — attributes
// Lines 13070-13407 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
var oo = !1;
function so() {
  return oo;
}
var co = new p();
function lo(e, t, n, r, i, a) {
  let o = (2 * Math.PI * i) / 4,
    s = Math.max(a - 2 * i, 0),
    c = Math.PI / 4;
  (co.copy(t), (co[r] = 0), co.normalize());
  let l = (0.5 * o) / (o + s),
    u = 1 - co.angleTo(e) / c;
  return Math.sign(co[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var uo = class e extends d {
  constructor(e = 1, t = 1, n = 1, r = 2, i = 0.1) {
    let a = r * 2 + 1;
    if (
      ((i = Math.min(e / 2, t / 2, n / 2, i)),
      super(1, 1, 1, a, a, a),
      (this.type = `RoundedBoxGeometry`),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        segments: r,
        radius: i,
      }),
      a === 1)
    )
      return;
    let o = this.toNonIndexed();
    ((this.index = null),
      (this.attributes.position = o.attributes.position),
      (this.attributes.normal = o.attributes.normal),
      (this.attributes.uv = o.attributes.uv));
    let s = new p(),
      c = new p(),
      l = new p(e, t, n).divideScalar(2).subScalar(i),
      u = this.attributes.position.array,
      d = this.attributes.normal.array,
      f = this.attributes.uv.array,
      m = u.length / 6,
      h = new p(),
      g = 0.5 / a;
    for (let r = 0, a = 0; r < u.length; r += 3, a += 2)
      switch (
        (s.fromArray(u, r),
        c.copy(s),
        (c.x -= Math.sign(c.x) * g),
        (c.y -= Math.sign(c.y) * g),
        (c.z -= Math.sign(c.z) * g),
        c.normalize(),
        (u[r + 0] = l.x * Math.sign(s.x) + c.x * i),
        (u[r + 1] = l.y * Math.sign(s.y) + c.y * i),
        (u[r + 2] = l.z * Math.sign(s.z) + c.z * i),
        (d[r + 0] = c.x),
        (d[r + 1] = c.y),
        (d[r + 2] = c.z),
        Math.floor(r / m))
      ) {
        case 0:
          (h.set(1, 0, 0),
            (f[a + 0] = lo(h, c, `z`, `y`, i, n)),
            (f[a + 1] = 1 - lo(h, c, `y`, `z`, i, t)));
          break;
        case 1:
          (h.set(-1, 0, 0),
            (f[a + 0] = 1 - lo(h, c, `z`, `y`, i, n)),
            (f[a + 1] = 1 - lo(h, c, `y`, `z`, i, t)));
          break;
        case 2:
          (h.set(0, 1, 0),
            (f[a + 0] = 1 - lo(h, c, `x`, `z`, i, e)),
            (f[a + 1] = lo(h, c, `z`, `x`, i, n)));
          break;
        case 3:
          (h.set(0, -1, 0),
            (f[a + 0] = 1 - lo(h, c, `x`, `z`, i, e)),
            (f[a + 1] = 1 - lo(h, c, `z`, `x`, i, n)));
          break;
        case 4:
          (h.set(0, 0, 1),
            (f[a + 0] = 1 - lo(h, c, `x`, `y`, i, e)),
            (f[a + 1] = 1 - lo(h, c, `y`, `x`, i, t)));
          break;
        case 5:
          (h.set(0, 0, -1),
            (f[a + 0] = lo(h, c, `x`, `y`, i, e)),
            (f[a + 1] = 1 - lo(h, c, `y`, `x`, i, t)));
      }
  }
  static fromJSON(t) {
    return new e(t.width, t.height, t.depth, t.segments, t.radius);
  }
};
function fo(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    l = new c(),
    u = 0;
  for (let c = 0; c < e.length; ++c) {
    let d = e[c],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            c +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              c +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            c +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (s !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            c +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              c +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      (o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0)
        e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              c +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (l.addGroup(u, e, c), (u += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    l.setIndex(n);
  }
  for (let e in a) {
    let t = po(a[e]);
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`,
        ),
        null
      );
    l.setAttribute(e, t);
  }
  for (let e in o) {
    let t = o[e][0].length;
    if (t !== 0) {
      ((l.morphAttributes = l.morphAttributes || {}),
        (l.morphAttributes[e] = []));
      for (let n = 0; n < t; ++n) {
        let t = [];
        for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
        let r = po(t);
        if (!r)
          return (
            console.error(
              `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
                e +
                ` morphAttribute.`,
            ),
            null
          );
        l.morphAttributes[e].push(r);
      }
    }
  }
  return l;
}
function po(e) {
  let t,
    n,
    r,
    i = -1,
    a = 0;
  for (let o = 0; o < e.length; ++o) {
    let s = e[o];
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
        ),
        null
      );
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
        ),
        null
      );
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
        ),
        null
      );
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
        ),
        null
      );
    a += s.count * n;
  }
  let o = new t(a),
    s = new l(o, n, r),
    c = 0;
  for (let t = 0; t < e.length; ++t) {
    let r = e[t];
    if (r.isInterleavedBufferAttribute) {
      let e = c / n;
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i);
          s.setComponent(t + e, i, n);
        }
    } else o.set(r.array, c);
    c += r.count * n;
  }
  return (i !== void 0 && (s.gpuType = i), s);
}
function mo(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    ho(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function ho(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    ho(e.children[r], t.children[r], n);
}
var go = {
    zh: `任務進行中，無法辦理登機。`,
    en: `You're on a mission — finish it before you fly.`,
  },
  _o = {
    zh: `任務進行中，無法購買高鐵車票。`,
    en: `You're on a mission — finish it before you take the train.`,
  },
  vo = (e) => (e && de(e.to) ? e.to : pe(R));
function yo(e, t) {
  let n = I();
  return n === null ? null : F(Math.max(0, n - e * xe[R]), t);
}
var bo = [
  `spawn`,
  `cam`,
  `r`,
  `autoplay`,
  `menu`,
  `hour`,
  `region`,
  `shot`,
  `onboard`,
];
function xo(e, t) {
  let n = new URL(e);
  for (let e of bo) n.searchParams.delete(e);
  let r = n.searchParams.toString();
  return j[t].page + (r ? `?${r}` : ``);
}
