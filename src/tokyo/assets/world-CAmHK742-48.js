// tokyo/assets/world-CAmHK742 48 — math
// Lines 16021-16330 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function lf(e, t) {
  return (e + 2048) * 4096 + (t + 2048);
}
function uf(e) {
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
var df = null,
  ff = null,
  pf = [null];
function mf(e, t) {
  if (e.uploadDraw && t) {
    (ff ||
      ((df = new V()),
      (df.boundingSphere = new d(new U(), 1)),
      (df.boundingBox = new xe(new U(-1, -1, -1), new U(1, 1, 1))),
      (ff = new M(df)),
      (ff.name = `sites-upload-carrier`),
      (ff.frustumCulled = !1)),
      df.setAttribute(`position`, t),
      (pf[0] = ff));
    try {
      e.uploadDraw(pf);
    } finally {
      (df.deleteAttribute(`position`), (pf[0] = null));
    }
  }
}
var hf = 3,
  gf = 15,
  _f = 40,
  vf = 40 / 3.6,
  yf = 70,
  bf = 3,
  xf = 12,
  Sf = 30,
  Cf = 25,
  wf = 18,
  Tf = 96;
function Ef(e) {
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
function Df(e, t, n) {
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
        (u[e] = (r + gf) * (r + gf)),
        (d[e] = (r + _f) * (r + _f)));
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
          if (Math.hypot(n.x - c[e], n.z - l[e]) <= Sf) {
            ((s = !1), h++);
            break;
          }
      }
      if (s) {
        for (let t of n)
          if (Math.hypot(t.x - c[e], t.z - l[e]) <= Cf) {
            ((s = !1), h++);
            break;
          }
      }
      if (
        (s && g >= wf && ((s = !1), _++),
        s && (n.push({ x: c[e], z: l[e] }), g++),
        p.length >= Tf)
      ) {
        v++;
        continue;
      }
      try {
        (m.addBlip(o, {
          x: c[e],
          z: l[e],
          icon: Ef(r.map.icon),
          label: { zh: r.name.zh, en: r.name.en },
          mapOnly: !s,
        }),
          p.push(o));
      } catch (e) {
        console.warn(`[init] sites blip ${o} failed`, e);
      }
    }
  }
  Et(r, t, n);
  let y = 0,
    b = !1,
    x = 0,
    S = 0,
    C = 0,
    w = !1,
    T = { duration: bf, kind: `info` },
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
      p = !a && k() > vf;
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
      ((f[r] = 1), x++, (C = xf));
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
      if (w || s === 0 || (C > 0 && (C -= t), (y += t), y < 1 / hf)) return;
      let i = y;
      if (((y = 0), !Number.isFinite(n) || !Number.isFinite(r))) return;
      if (E === E) {
        let e = n - E,
          t = r - D,
          a = Math.sqrt(e * e + t * t);
        O = a < yf ? a / i : 0;
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
        ((p.length = 0), Dt(r));
      }
    },
  };
}
var Of = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  kf = 1e4,
  Af = 30,
  jf = 3e3,
  Mf = Object.assign({});
function Nf(e) {
  for (let t of Object.values(Mf)) {
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
  let t = new Gn();
  return {
    add: (e) => t.add(e),
    update: (e, n) => t.update(e, n),
    dispose: () => t.clear(),
  };
}
function Pf(e) {
  return !!e.quality?.mobile || e.quality?.level === `low`;
}
function Ff(e, t, n, r, i, a, o) {
  let s = {},
    c = {},
    l = [],
    u = 0;
  for (let e of t) {
    e.ok ? u++ : (s[e.id] = e.errors[0] ?? `no placement found`);
    let t = e.rejections?.by;
    if (t) for (let e in t) c[e] = (c[e] ?? 0) + (t[e] ?? 0);
    for (let t of e.replaces ?? []) l.push({ site: e.id, ...t });
  }
  return {
    metas: e.length,
    ok: u,
    failed: e.length - u,
    claims: i,
    claimsRaw: a,
    ms: Math.round(r * 100) / 100,
    failures: s,
    rejects: c,
    errors: n,
    landmarkRequests: l,
    claimedPois: o,
  };
}
