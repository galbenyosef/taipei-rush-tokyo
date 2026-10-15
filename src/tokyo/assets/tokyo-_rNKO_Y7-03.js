// tokyo/assets/tokyo-_rNKO_Y7 03 — console
// Lines 635-956 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function Ut(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    c = e[0].morphTargetsRelative,
    l = new s(),
    u = 0;
  for (let s = 0; s < e.length; ++s) {
    let d = e[s],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            s +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              s +
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
            s +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (c !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            s +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              s +
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
              s +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (l.addGroup(u, e, s), (u += e));
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
    let t = Wt(a[e]);
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
        let r = Wt(t);
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
function Wt(e) {
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
    s = new c(o, n, r),
    l = 0;
  for (let t = 0; t < e.length; ++t) {
    let r = e[t];
    if (r.isInterleavedBufferAttribute) {
      let e = l / n;
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i);
          s.setComponent(t + e, i, n);
        }
    } else o.set(r.array, l);
    l += r.count * n;
  }
  return (i !== void 0 && (s.gpuType = i), s);
}
async function Gt(t) {
  let { loadAnimLibrary: n } = await e(
    async () => {
      let { loadAnimLibrary: e } = await import(`./clips-GNiXKOuW.js`);
      return { loadAnimLibrary: e };
    },
    __vite__mapDeps([0, 1]),
  );
  return n(t);
}
var Kt = null,
  qt = {
    id: `_animlab`,
    name: { zh: `動作實驗室`, en: `Animation Lab` },
    async init(t) {
      if (!t.params.get(`animlab`)) return;
      let { createAnimLab: n } = await e(
        async () => {
          let { createAnimLab: e } = await import(`./lab-DzZxQgDp.js`);
          return { createAnimLab: e };
        },
        __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 0, 11, 12, 13]),
      );
      Kt = await n(t);
    },
    update(e) {
      Kt?.update(e);
    },
  },
  Jt = null,
  Yt = {
    id: `_avatarlab`,
    name: { zh: `寫實角色實驗室`, en: `Avatar Lab` },
    async init(t) {
      if (
        ((_t.renderer = t.renderer.gl),
        (_t.mobile = !!t.quality.mobile),
        (_t.halveHeroMaps = !!t.quality.mobile && C() >= 1),
        t.params.get(`avatarlab`))
      )
        try {
          let { createAvatarLab: n } = await e(
            async () => {
              let { createAvatarLab: e } = await import(`./lab-AJ7ypZPa.js`);
              return { createAvatarLab: e };
            },
            __vite__mapDeps([14, 6, 3, 4, 5, 7, 8, 11, 12, 13, 15]),
          );
          Jt = await n(t);
        } catch (e) {
          console.error(`[avatars] lab failed`, e);
        }
    },
    update(e) {
      Jt?.update(e);
    },
  },
  Xt = 2e4,
  Zt = 6e4,
  Qt = 9,
  $t = 20,
  en = 3e4,
  tn = 15e3,
  nn = [Xe, qt, Yt],
  K = [...nn];
function rn(e) {
  K.includes(e) || K.push(e);
}
function an(e) {
  let t = e.filter((e) => !K.includes(e)),
    n = K.findIndex((e) => nn.includes(e));
  K.splice(n < 0 ? K.length : n, 0, ...t);
}
var on = [],
  sn = new Map();
function cn(e) {
  let t = sn.get(e);
  if (t === void 0) {
    let n = e.bounds ? null : on.find((t) => t.id === e.id);
    ((t =
      e.bounds ??
      (n ? { minX: n.minX, minZ: n.minZ, maxX: n.maxX, maxZ: n.maxZ } : null)),
      sn.set(e, t));
  }
  return t;
}
function ln(
  e,
  t,
  n,
  r,
  i = (e) => e.bounds ?? t.districts.find((t) => t.id === e.id) ?? null,
) {
  let a = null,
    o = 1 / 0,
    s = null;
  for (let c = 0; c < e.length; c++) {
    let l = e[c],
      u = i(l);
    if (!u) continue;
    let d = !1;
    for (let e = 0; e < t.districts.length; e++)
      t.districts[e].id === l.id && (d = !0);
    if (d) {
      if (
        (s === null && (s = t.districtAt(n, r).id),
        s !== l.id ||
          (l.bounds && (n < u.minX || n > u.maxX || r < u.minZ || r > u.maxZ)))
      )
        continue;
    } else if (n < u.minX || n > u.maxX || r < u.minZ || r > u.maxZ) continue;
    let f = (u.maxX - u.minX) * (u.maxZ - u.minZ);
    f < o && ((o = f), (a = l));
  }
  return a;
}
function un(e) {
  let t = e.residencyBounds;
  if (t) {
    let e = (Array.isArray(t) ? t : [t]).filter(
      (e) => e && e.maxX > e.minX && e.maxZ > e.minZ,
    );
    if (e.length) return e;
  }
  let n = cn(e);
  return n ? [n] : [];
}
function dn(e, t, n) {
  let r = 1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i],
      o = Math.max(a.minX - t, 0, t - a.maxX),
      s = Math.max(a.minZ - n, 0, n - a.maxZ),
      c = o * o + s * s;
    c < r && (r = c);
  }
  return Math.sqrt(r);
}
