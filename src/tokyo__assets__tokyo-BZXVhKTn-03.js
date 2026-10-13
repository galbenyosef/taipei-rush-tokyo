// tokyo__assets__tokyo-BZXVhKTn 03 — maxx
// Lines 629-756 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
var It = null,
  Lt = {
    id: `_animlab`,
    name: { zh: `動作實驗室`, en: `Animation Lab` },
    async init(t) {
      if (!t.params.get(`animlab`)) return;
      let { createAnimLab: n } = await e(
        async () => {
          let { createAnimLab: e } = await import(`./lab-CQYp1Cs9.js`);
          return { createAnimLab: e };
        },
        __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 0, 11, 12, 13]),
      );
      It = await n(t);
    },
    update(e) {
      It?.update(e);
    },
  },
  Rt = null,
  zt = {
    id: `_avatarlab`,
    name: { zh: `寫實角色實驗室`, en: `Avatar Lab` },
    async init(t) {
      if (
        ((ut.renderer = t.renderer.gl),
        (ut.mobile = !!t.quality.mobile),
        (ut.halveHeroMaps = !!t.quality.mobile || t.quality.level === `low`),
        t.params.get(`avatarlab`))
      )
        try {
          let { createAvatarLab: n } = await e(
            async () => {
              let { createAvatarLab: e } = await import(`./lab-X7McqYcL.js`);
              return { createAvatarLab: e };
            },
            __vite__mapDeps([14, 6, 3, 4, 5, 7, 8, 11, 12, 13, 15]),
          );
          Rt = await n(t);
        } catch (e) {
          console.error(`[avatars] lab failed`, e);
        }
    },
    update(e) {
      Rt?.update(e);
    },
  },
  Bt = 2e4,
  Vt = 6e4,
  Ht = 9,
  Ut = 20,
  Wt = 3e4,
  Gt = 15e3,
  Kt = [We, Lt, zt],
  K = [...Kt];
function qt(e) {
  K.includes(e) || K.push(e);
}
function Jt(e) {
  let t = e.filter((e) => !K.includes(e)),
    n = K.findIndex((e) => Kt.includes(e));
  K.splice(n < 0 ? K.length : n, 0, ...t);
}
var Yt = [],
  Xt = new Map();
function Zt(e) {
  let t = Xt.get(e);
  if (t === void 0) {
    let n = e.bounds ? null : Yt.find((t) => t.id === e.id);
    ((t =
      e.bounds ??
      (n ? { minX: n.minX, minZ: n.minZ, maxX: n.maxX, maxZ: n.maxZ } : null)),
      Xt.set(e, t));
  }
  return t;
}
function Qt(
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
function $t(e) {
  let t = e.residencyBounds;
  if (t) {
    let e = (Array.isArray(t) ? t : [t]).filter(
      (e) => e && e.maxX > e.minX && e.maxZ > e.minZ,
    );
    if (e.length) return e;
  }
  let n = Zt(e);
  return n ? [n] : [];
}
function en(e, t, n) {
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
