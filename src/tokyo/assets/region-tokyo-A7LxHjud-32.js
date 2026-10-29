// tokyo/assets/region-tokyo-A7LxHjud 32 — math
// Lines 17755-18094 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Sre = [
    [299, -180, 11, 28],
    [299, -122, 9.5, 0],
    [299, -94, 8.8, 0],
    [299, -62, 8.2, 40],
    [290, -30, 7.6, 40],
    [290, -18, 7.4, 0],
    [290, 69, 6.4, 0],
    [290, 138, 5.6, 0],
    [290, 228, -4.45, 0],
    [290, 250, -4.75, 0],
    [290, 494, -4.8, 0],
    [290, 612, 6.6, 0],
    [290, 700, 9.5, 40],
    [-30, 700, 14.5, 45],
    [-150, 800, 17, 45],
    [-150, 1e3, 12.5, 0],
    [-150, 1128, 12, 40],
    [-790, 1128, 12, 40],
    [-790, 1030, 12, 40],
    [-748, 988, 11, 40],
    [-748, 950, 8, 0],
    [-748, 826, 5.6, 0],
    [-748, 733, -4.45, 0],
    [-748, 632, -6, 0, !0],
    [-748, 470, -7.5, 60, !0],
    [-925, 300, -9.5, 60, !0],
    [-925, -222, -10.2, 30, !0],
    [-862, -222, -6, 0],
    [-800, -222, 0, 0],
    [-680, -222, 6.9, 50],
    [-628, -182.5, 9.5, 50],
    [-480, -182.5, 10.02, 0],
    [-330, -180, 10.54, 0],
    [-200, -180, 11, 0],
    [-110, -180, 15.5, 0],
    [-50, -180, 16.6, 0],
    [0, -180, 16.6, 0],
    [80, -180, 13.5, 0],
    [180, -180, 11, 0],
  ],
  Cre = [
    {
      id: `edobashi`,
      at: [299, -180],
      ja: `江戸橋JCT`,
      zh: `江戶橋JCT`,
      en: `Edobashi JCT`,
      kind: `jct`,
    },
    {
      id: `takaracho`,
      at: [292, -40],
      ja: `宝町`,
      zh: `寶町`,
      en: `Takaracho`,
      kind: `exit`,
    },
    {
      id: `kyobashi`,
      at: [290, 180],
      ja: `京橋JCT`,
      zh: `京橋JCT`,
      en: `Kyobashi JCT`,
      kind: `jct`,
    },
    {
      id: `ginza`,
      at: [290, 355],
      ja: `銀座`,
      zh: `銀座`,
      en: `Ginza`,
      kind: `exit`,
    },
    {
      id: `shiodome`,
      at: [100, 700],
      ja: `汐留JCT`,
      zh: `汐留JCT`,
      en: `Shiodome JCT`,
      kind: `jct`,
    },
    {
      id: `shibakoen`,
      at: [-150, 1e3],
      ja: `芝公園`,
      zh: `芝公園`,
      en: `Shibakoen`,
      kind: `exit`,
    },
    {
      id: `ichinohashi`,
      at: [-600, 1128],
      ja: `一ノ橋JCT`,
      zh: `一之橋JCT`,
      en: `Ichinohashi JCT`,
      kind: `jct`,
    },
    {
      id: `iikura`,
      at: [-790, 1090],
      ja: `飯倉`,
      zh: `飯倉`,
      en: `Iikura`,
      kind: `exit`,
    },
    {
      id: `tanimachi`,
      at: [-748, 945],
      ja: `谷町JCT`,
      zh: `谷町JCT`,
      en: `Tanimachi JCT`,
      kind: `jct`,
    },
    {
      id: `kasumigaseki`,
      at: [-748, 690],
      ja: `霞が関`,
      zh: `霞關`,
      en: `Kasumigaseki`,
      kind: `exit`,
    },
    {
      id: `miyakezaka`,
      at: [-925, 260],
      ja: `三宅坂JCT`,
      zh: `三宅坂JCT`,
      en: `Miyakezaka JCT`,
      kind: `jct`,
    },
    {
      id: `chidorigafuchi`,
      at: [-925, 0],
      ja: `千鳥ヶ淵`,
      zh: `千鳥之淵`,
      en: `Chidorigafuchi`,
      kind: `place`,
    },
    {
      id: `daikancho`,
      at: [-850, -222],
      ja: `代官町`,
      zh: `代官町`,
      en: `Daikancho`,
      kind: `exit`,
    },
    {
      id: `takebashi`,
      at: [-600, -182.5],
      ja: `竹橋JCT`,
      zh: `竹橋JCT`,
      en: `Takebashi JCT`,
      kind: `jct`,
    },
    {
      id: `kandabashi`,
      at: [-300, -180],
      ja: `神田橋`,
      zh: `神田橋`,
      en: `Kandabashi`,
      kind: `exit`,
    },
    {
      id: `gofukubashi`,
      at: [-20, -180],
      ja: `呉服橋`,
      zh: `吳服橋`,
      en: `Gofukubashi`,
      kind: `place`,
    },
  ],
  Bo = 2,
  wre = null;
function Tre(e, t) {
  let n = e.length,
    r = [],
    i = [],
    a = [];
  for (let o = 0; o < n; o++) {
    let [s, c, , l] = e[o];
    if (!t && (o === 0 || o === n - 1)) {
      (r.push([s, c]), i.push([s, c]), a.push(null));
      continue;
    }
    let [u, d] = e[(o - 1 + n) % n],
      [f, p] = e[(o + 1) % n],
      m = Math.hypot(s - u, c - d),
      h = Math.hypot(f - s, p - c),
      g = (s - u) / m,
      _ = (c - d) / m,
      v = (f - s) / h,
      y = (p - c) / h,
      b = g * y - _ * v,
      x = g * v + _ * y,
      S = Math.atan2(b, x);
    if (!(l > 0) || Math.abs(S) < 0.001) {
      (r.push([s, c]), i.push([s, c]), a.push(null));
      continue;
    }
    let C = l * Math.tan(Math.abs(S) / 2),
      w = !t && o === 1,
      T = !t && o === n - 2;
    if (C > (w ? m : m / 2) + 0.01 || C > (T ? h : h / 2) + 0.01)
      throw Error(
        `c1Route: fillet ${o} too big (${C.toFixed(1)} m on ${m.toFixed(0)} / ${h.toFixed(0)})`,
      );
    let E = s - g * C,
      D = c - _ * C,
      O = s + v * C,
      k = c + y * C,
      A = Math.sign(b),
      j = -_ * A,
      M = g * A,
      ee = E + j * l,
      te = D + M * l,
      ne = Math.atan2(D - te, E - ee);
    (r.push([E, D]),
      i.push([O, k]),
      a.push({
        line: !1,
        ax: E,
        az: D,
        bx: O,
        bz: k,
        cx: ee,
        cz: te,
        r: l,
        a0: ne,
        da: S,
        len: l * Math.abs(S),
        s0: 0,
      }));
  }
  let o = [],
    s = [];
  for (let c = 0; c < n; c++) {
    let l = a[c];
    if (
      (s.push(o.length),
      l
        ? o.push(l)
        : o.push({
            line: !0,
            ax: e[c][0],
            az: e[c][1],
            bx: e[c][0],
            bz: e[c][1],
            cx: 0,
            cz: 0,
            r: 0,
            a0: 0,
            da: 0,
            len: 0,
            s0: 0,
          }),
      !t && c === n - 1)
    )
      break;
    let [u, d] = i[c],
      [f, p] = r[(c + 1) % n];
    o.push({
      line: !0,
      ax: u,
      az: d,
      bx: f,
      bz: p,
      cx: 0,
      cz: 0,
      r: 0,
      a0: 0,
      da: 0,
      len: Math.hypot(f - u, p - d),
      s0: 0,
    });
  }
  let c = 0;
  for (let e of o) ((e.s0 = c), (c += e.len));
  let l = c,
    u = s.map((e) => o[e].s0 + o[e].len / 2),
    d = e.map((e) => !!e[4]),
    f = [],
    p = [],
    m = [],
    h = [],
    g = [],
    _ = Math.ceil(l / Bo),
    v = 0,
    y = [1, 0];
  for (let e = 0; e <= _; e++) {
    let t = (l * e) / _;
    for (
      ;
      v < o.length - 1 &&
      (t > o[v].s0 + o[v].len ||
        (o[v].len === 0 && o[v + 1].len > 0 && t >= o[v + 1].s0));
    )
      v++;
    let n = o[v],
      r = n.len > 0 ? Math.min(1, Math.max(0, (t - n.s0) / n.len)) : 0,
      i,
      a,
      s,
      c;
    if (n.line) {
      ((i = n.ax + (n.bx - n.ax) * r), (a = n.az + (n.bz - n.az) * r));
      let e = n.len || 1;
      [s, c] = n.len === 0 ? y : [(n.bx - n.ax) / e, (n.bz - n.az) / e];
    } else {
      let e = n.a0 + n.da * r;
      ((i = n.cx + Math.cos(e) * n.r), (a = n.cz + Math.sin(e) * n.r));
      let t = Math.sign(n.da);
      ((s = -Math.sin(e) * t), (c = Math.cos(e) * t));
    }
    ((y = [s, c]), f.push(i), p.push(a), m.push(t), h.push(s), g.push(c));
  }
  if (!t) {
    for (let e = 0; e < Math.min(3, f.length - 1); e++)
      if (Math.hypot(f[e + 1] - f[e], p[e + 1] - p[e]) > 0.01) {
        let t = Math.hypot(f[e + 1] - f[e], p[e + 1] - p[e]);
        ((h[e] = (f[e + 1] - f[e]) / t), (g[e] = (p[e + 1] - p[e]) / t));
      }
  }
  return {
    x: f,
    z: p,
    s: m,
    dx: h,
    dz: g,
    covered: m.map((e) => {
      for (let r = 0; r < n; r++) {
        if (!d[r]) continue;
        let i = u[r],
          a = r + 1 < n ? u[r + 1] : u[0] + l;
        if ((e >= i && e < a) || (t && e + l >= i && e + l < a)) return !0;
      }
      return !1;
    }),
    cpS: u,
  };
}
