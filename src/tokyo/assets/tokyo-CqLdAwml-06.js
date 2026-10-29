// tokyo/assets/tokyo-CqLdAwml 06 — maxx
// Lines 1547-1674 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var Jn = null,
  Yn = {
    id: `_animlab`,
    name: { zh: `動作實驗室`, en: `Animation Lab` },
    async init(t) {
      if (!t.params.get(`animlab`)) return;
      let { createAnimLab: n } = await e(
        async () => {
          let { createAnimLab: e } = await import(`./lab-Q58d0-gH.js`);
          return { createAnimLab: e };
        },
        __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 11, 0, 12, 13, 14, 15]),
      );
      Jn = await n(t);
    },
    update(e) {
      Jn?.update(e);
    },
  },
  Xn = null,
  Zn = {
    id: `_avatarlab`,
    name: { zh: `寫實角色實驗室`, en: `Avatar Lab` },
    async init(t) {
      if (
        ((zt.renderer = t.renderer.gl),
        (zt.mobile = !!t.quality.mobile),
        (zt.halveHeroMaps = !!t.quality.mobile && te() >= 1),
        t.params.get(`avatarlab`))
      )
        try {
          let { createAvatarLab: n } = await e(
            async () => {
              let { createAvatarLab: e } = await import(`./lab-DxV2kalD.js`);
              return { createAvatarLab: e };
            },
            __vite__mapDeps([16, 7, 6, 3, 4, 5, 8, 9, 12, 13, 14, 15, 17]),
          );
          Xn = await n(t);
        } catch (e) {
          console.error(`[avatars] lab failed`, e);
        }
    },
    update(e) {
      Xn?.update(e);
    },
  },
  Qn = 2e4,
  $n = 6e4,
  er = 9,
  tr = 20,
  nr = 3e4,
  rr = 15e3,
  ir = [rt, Yn, Zn],
  X = [...ir];
function ar(e) {
  X.includes(e) || X.push(e);
}
function or(e) {
  let t = e.filter((e) => !X.includes(e)),
    n = X.findIndex((e) => ir.includes(e));
  X.splice(n < 0 ? X.length : n, 0, ...t);
}
var sr = [],
  cr = new Map();
function lr(e) {
  let t = cr.get(e);
  if (t === void 0) {
    let n = e.bounds ? null : sr.find((t) => t.id === e.id);
    ((t =
      e.bounds ??
      (n ? { minX: n.minX, minZ: n.minZ, maxX: n.maxX, maxZ: n.maxZ } : null)),
      cr.set(e, t));
  }
  return t;
}
function ur(
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
function dr(e) {
  let t = e.residencyBounds;
  if (t) {
    let e = (Array.isArray(t) ? t : [t]).filter(
      (e) => e && e.maxX > e.minX && e.maxZ > e.minZ,
    );
    if (e.length) return e;
  }
  let n = lr(e);
  return n ? [n] : [];
}
function fr(e, t, n) {
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
