// tokyo__assets__world-Bo9wkXrT 48 — freeze
// Lines 15961-16301 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function $d(e, t) {
  return (e + 2048) * 4096 + (t + 2048);
}
function ef(e) {
  let t = 0,
    n = e.children;
  for (let e = 0; e < n.length; e++) {
    let r = n[e].geometry;
    if (r) {
      for (let e in r.attributes) t += r.attributes[e].array?.byteLength ?? 0;
      r.index && (t += r.index.array.byteLength);
    }
  }
  return t;
}
var tf = null,
  nf = null,
  rf = [null];
function af(e, t) {
  if (e.uploadDraw && t) {
    (nf ||
      ((tf = new V()),
      (tf.boundingSphere = new T(new U(), 1)),
      (tf.boundingBox = new be(new U(-1, -1, -1), new U(1, 1, 1))),
      (nf = new P(tf)),
      (nf.name = `sites-upload-carrier`),
      (nf.frustumCulled = !1)),
      tf.setAttribute(`position`, t),
      (rf[0] = nf));
    try {
      e.uploadDraw(rf);
    } finally {
      (tf.deleteAttribute(`position`), (rf[0] = null));
    }
  }
}
var of = Object.freeze([]),
  sf = of,
  cf = null,
  lf = new Set();
function uf() {
  for (let e of [...lf])
    try {
      e(sf);
    } catch (e) {
      console.warn(`[test] sites public listener failed`, e);
    }
}
function df(e, t, n) {
  let r = new Map();
  for (let e of n) r.set(e.id, e);
  let i = [];
  for (let e of t) {
    if (!e.ok) continue;
    let t = r.get(e.id);
    t &&
      i.push(
        Object.freeze({
          id: e.id,
          name: Object.freeze({ zh: t.name.zh, en: t.name.en }),
          category: t.category,
          district: t.district,
          cluster: t.cluster ?? null,
          icon: t.map.icon,
          minimap: !!t.map.minimap,
          hero: !!t.hero,
          interior: t.interior,
          x: e.x,
          z: e.z,
          y: e.y,
          w: e.w,
          d: e.d,
          facing: e.facing,
          rect: Object.freeze({
            minX: e.rect.minX,
            minZ: e.rect.minZ,
            maxX: e.rect.maxX,
            maxZ: e.rect.maxZ,
          }),
          address: Object.freeze({ zh: e.address.zh, en: e.address.en }),
          blurb: Object.freeze({ zh: t.blurb.zh, en: t.blurb.en }),
        }),
      );
  }
  ((cf = e), (sf = Object.freeze(i)));
  let a = new Map();
  for (let e of i) a.set(e.id, e);
  uf();
}
function ff(e) {
  cf === e && ((cf = null), (sf = of), uf());
}
var pf = 3,
  mf = 15,
  hf = 40,
  gf = 40 / 3.6,
  _f = 70,
  vf = 3,
  yf = 12,
  bf = 30,
  xf = 25,
  Sf = 18,
  Cf = 96;
function wf(e) {
  switch (e) {
    case `shop`:
    case `temple`:
    case `market`:
    case `landmark`:
      return e;
    default:
      return `landmark`;
  }
}
function Tf(e, t, n) {
  let r = {},
    i = new Map();
  for (let e of n) i.set(e.id, e);
  let a = [],
    o = [];
  for (let e of t) e.ok && i.has(e.id) && a.push(e.id);
  let s = a.length,
    c = new Float64Array(s),
    l = new Float64Array(s),
    u = new Float64Array(s),
    d = new Float64Array(s),
    f = new Uint8Array(s);
  {
    let e = 0;
    for (let n of t) {
      if (!n.ok) continue;
      let t = i.get(n.id);
      if (!t) continue;
      let r = Math.hypot(n.w, n.d) / 2;
      ((c[e] = n.x),
        (l[e] = n.z),
        (u[e] = (r + mf) * (r + mf)),
        (d[e] = (r + hf) * (r + hf)));
      let a = n.address?.zh ?? ``,
        s = n.address?.en ?? ``,
        f = t.name.ja,
        p = n.address?.ja;
      (o.push({
        zh: a ? `${t.name.zh}・${a}` : t.name.zh,
        en: s ? `${t.name.en} · ${s}` : t.name.en,
        ...(f && (p || !a) ? { ja: p ? `${f}・${p}` : f } : {}),
      }),
        e++);
    }
  }
  let p = [],
    m = e.ui,
    h = 0,
    g = 0,
    _ = 0,
    v = 0;
  if (m && typeof m.addBlip == `function`) {
    let t = (() => {
        try {
          return e.plan?.landmarks ?? [];
        } catch {
          return [];
        }
      })(),
      n = [],
      r = Array.from({ length: s }, (e, t) => t).sort((e, t) => {
        let n = i.get(a[e]),
          r = i.get(a[t]);
        return (
          Number(!!r.hero) - Number(!!n.hero) ||
          (r.priority ?? 0) - (n.priority ?? 0) ||
          e - t
        );
      });
    for (let e of r) {
      let r = i.get(a[e]),
        o = `sites-${a[e]}`,
        s = r.map.minimap;
      if (s) {
        for (let n of t)
          if (Math.hypot(n.x - c[e], n.z - l[e]) <= bf) {
            ((s = !1), h++);
            break;
          }
      }
      if (s) {
        for (let t of n)
          if (Math.hypot(t.x - c[e], t.z - l[e]) <= xf) {
            ((s = !1), h++);
            break;
          }
      }
      if (
        (s && g >= Sf && ((s = !1), _++),
        s && (n.push({ x: c[e], z: l[e] }), g++),
        p.length >= Cf)
      ) {
        v++;
        continue;
      }
      try {
        (m.addBlip(o, {
          x: c[e],
          z: l[e],
          icon: wf(r.map.icon),
          label: { zh: r.name.zh, en: r.name.en },
          mapOnly: !s,
        }),
          p.push(o));
      } catch (e) {
        console.warn(`[init] sites blip ${o} failed`, e);
      }
    }
  }
  df(r, t, n);
  let y = 0,
    b = !1,
    x = 0,
    S = 0,
    C = 0,
    w = !1,
    T = { duration: vf, kind: `info` },
    E = NaN,
    D = NaN,
    O = 0;
  function k() {
    let t = e.vehicles?.playerVehicle;
    return Math.max(t ? Math.abs(t.speed || 0) : 0, O);
  }
  function A(e, t, n) {
    let r = -1,
      i = 1 / 0,
      a = n || C > 0,
      p = !a && k() > gf;
    for (let o = 0; o < s; o++) {
      let s = e - c[o],
        m = t - l[o],
        h = s * s + m * m;
      if (f[o]) {
        h > d[o] && (f[o] = 0);
        continue;
      }
      if (!(h > u[o])) {
        if (a) {
          ((f[o] = 1), n || S++);
          continue;
        }
        p || (h < i && ((i = h), (r = o)));
      }
    }
    if (r >= 0) {
      ((f[r] = 1), x++, (C = yf));
      try {
        m?.notify(o[r], T);
      } catch {}
    }
  }
  return {
    get blips() {
      return p.length;
    },
    get toasts() {
      return x;
    },
    get minimapBlips() {
      return g;
    },
    get dedupedBlips() {
      return h;
    },
    get cappedBlips() {
      return _;
    },
    get skippedBlips() {
      return v;
    },
    get suppressedToasts() {
      return S;
    },
    resetArrivals() {
      ((E = D = NaN), (O = 0), f.fill(0), (b = !1), (y = 0), (C = 0));
    },
    update(t, n, r) {
      if (w || s === 0 || (C > 0 && (C -= t), (y += t), y < 1 / pf)) return;
      let i = y;
      if (((y = 0), !Number.isFinite(n) || !Number.isFinite(r))) return;
      if (E === E) {
        let e = n - E,
          t = r - D,
          a = Math.sqrt(e * e + t * t);
        O = a < _f ? a / i : 0;
      }
      ((E = n), (D = r));
      let a = e.player?.mode;
      a !== `cutscene` &&
        a !== `dead` &&
        a !== `busted` &&
        (A(n, r, !b), (b = !0));
    },
    dispose() {
      if (!w) {
        if (((w = !0), m && typeof m.removeBlip == `function`))
          for (let e of p)
            try {
              m.removeBlip(e);
            } catch {}
        ((p.length = 0), ff(r));
      }
    },
  };
}
var Ef = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  Df = 1e4,
  Of = 30,
  kf = 3e3,
  Af = Object.assign({});
function jf(e) {
  for (let t of Object.values(Af)) {
    let n = t?.createSiteInteractions;
    if (typeof n == `function`)
      try {
        let t = n(e);
        if (t && typeof t.add == `function` && typeof t.update == `function`)
          return t;
      } catch (e) {
        console.warn(
          `[sites] createSiteInteractions failed, using the interiors kit fallback`,
          e,
        );
      }
  }
  let t = new Dn();
  return {
    add: (e) => t.add(e),
    update: (e, n) => t.update(e, n),
    dispose: () => t.clear(),
  };
}
function Mf(e) {
  return !!e.quality?.mobile || e.quality?.level === `low`;
}
