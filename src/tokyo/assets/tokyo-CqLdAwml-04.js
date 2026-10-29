// tokyo/assets/tokyo-CqLdAwml 04 — itemsize
// Lines 932-1223 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function gn(e) {
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
function _n(e, t = 1e-4) {
  t = Math.max(t, 2 ** -52);
  let n = {},
    r = e.getIndex(),
    i = e.getAttribute(`position`),
    a = r ? r.count : i.count,
    o = 0,
    s = Object.keys(e.attributes),
    c = {},
    l = {},
    u = [],
    d = [`getX`, `getY`, `getZ`, `getW`],
    f = [`setX`, `setY`, `setZ`, `setW`];
  for (let t = 0, n = s.length; t < n; t++) {
    let n = s[t],
      r = e.attributes[n];
    c[n] = new r.constructor(
      new r.array.constructor(r.count * r.itemSize),
      r.itemSize,
      r.normalized,
    );
    let i = e.morphAttributes[n];
    i &&
      (l[n] || (l[n] = []),
      i.forEach((e, t) => {
        let r = new e.array.constructor(e.count * e.itemSize);
        l[n][t] = new e.constructor(r, e.itemSize, e.normalized);
      }));
  }
  let p = t * 0.5,
    m = 10 ** Math.log10(1 / t),
    h = p * m;
  for (let t = 0; t < a; t++) {
    let i = r ? r.getX(t) : t,
      a = ``;
    for (let t = 0, n = s.length; t < n; t++) {
      let n = s[t],
        r = e.getAttribute(n),
        o = r.itemSize;
      for (let e = 0; e < o; e++) a += `${Math.trunc(r[d[e]](i) * m + h)},`;
    }
    if (a in n) u.push(n[a]);
    else {
      for (let t = 0, n = s.length; t < n; t++) {
        let n = s[t],
          r = e.getAttribute(n),
          a = e.morphAttributes[n],
          u = r.itemSize,
          p = c[n],
          m = l[n];
        for (let e = 0; e < u; e++) {
          let t = d[e],
            n = f[e];
          if ((p[n](o, r[t](i)), a))
            for (let e = 0, r = a.length; e < r; e++) m[e][n](o, a[e][t](i));
        }
      }
      ((n[a] = o), u.push(o), o++);
    }
  }
  let g = e.clone();
  for (let t in e.attributes) {
    let e = c[t];
    if (
      (g.setAttribute(
        t,
        new e.constructor(
          e.array.slice(0, o * e.itemSize),
          e.itemSize,
          e.normalized,
        ),
      ),
      t in l)
    )
      for (let e = 0; e < l[t].length; e++) {
        let n = l[t][e];
        g.morphAttributes[t][e] = new n.constructor(
          n.array.slice(0, o * n.itemSize),
          n.itemSize,
          n.normalized,
        );
      }
  }
  return (g.setIndex(u), g);
}
var vn = Re === `tokyo`,
  yn = new Set(),
  bn = (e) => e.state.data;
function xn(e) {
  let t = bn(e),
    n = He(t.bag) ?? {};
  return ((t.bag = n), n);
}
var Sn = (e, t) => xn(e)[t] ?? 0;
function Cn(e) {
  let t = bn(e),
    n = Ve(
      je(t.bagBook),
      Object.keys(xn(e)).filter((e) => L[e]),
    );
  return ((t.bagBook = n), new Set(n));
}
function wn(e) {
  return (yn.add(e), () => yn.delete(e));
}
function Tn(e, t) {
  e.state.scheduleSave(0.5);
  for (let e of yn)
    try {
      e(t);
    } catch (e) {
      console.error(`[bag] listener`, e);
    }
}
var En = (e, t) => {
    try {
      e.audio.play(t, { ui: !0, volume: 0.8 });
    } catch {}
  },
  Dn = (e, t, n = `good`, r = 3) =>
    e.events.emit(`notify`, { text: t, kind: n, duration: r }),
  On = (e) => {
    if (vn) {
      let t = ke(e, Re);
      return { v: t, label: `¥ ${t.toLocaleString()}` };
    }
    if (Re === `seoul`) {
      let t = ke(e, Re);
      return { v: t, label: `₩${t.toLocaleString()}` };
    }
    let t = Math.floor(e / Pe[Re]);
    return {
      v: t,
      label:
        Re === `hong-kong`
          ? `HK$ ${t.toLocaleString()}`
          : `NT$ ${t.toLocaleString()}`,
    };
  };
function kn() {
  return K().bagNew ?? [];
}
function An() {
  kn().length && q({ bagNew: [] });
}
function jn(e, t) {
  let n = L[t];
  return n ? Math.max(0, n.max - Sn(e, t)) : 0;
}
var Mn = (e) => ({
  zh: `${e.name.zh}已經帶滿了（${e.max}/${e.max}）`,
  en: `Your bag is full of ${e.name.en} (${e.max}/${e.max})`,
});
function Nn(e, t) {
  let n = t ? L[t] : void 0;
  return n && jn(e, n.id) <= 0 ? Mn(n) : null;
}
function Pn(e, t, r = 1, i = {}) {
  let a = L[t];
  if (!a || !(r > 0)) return 0;
  let o = xn(e),
    s = o[t] ?? 0,
    c = Math.max(0, Math.min(Math.floor(r), a.max - s));
  if (!c) return (i.quiet || Dn(e, Mn(a), `info`, 2.5), 0);
  o[t] = s + c;
  let l = bn(e),
    u = !Cn(e).has(t);
  u && (l.bagBook = Ve(je(l.bagBook), [t]));
  let d = kn();
  return (
    d.includes(t) || q({ bagNew: [...d, t].slice(-32) }),
    Tn(e, o),
    i.quiet ||
      (En(e, `pickup`),
      Dn(e, {
        zh: n.on
          ? n.t(
              `🎒 ${a.name.zh}${c > 1 ? ` ×${c}` : ``} 放進背包${u ? `（圖鑑新收錄）` : ``}`,
              `🎒 ${n.jz(a.name.zh)}${c > 1 ? ` ×${c}` : ``} をバッグに入れた${u ? `（図鑑に新登録）` : ``}`,
            )
          : `🎒 ${a.name.zh}${c > 1 ? ` ×${c}` : ``} 放進背包${u ? `（圖鑑新收錄）` : ``}`,
        en: `🎒 ${a.name.en}${c > 1 ? ` ×${c}` : ``} — in your bag${u ? ` (new in your book)` : ``}`,
      })),
    c
  );
}
function Fn(e, t) {
  let n = xn(e);
  return n[t]
    ? !0
    : ((n[t] = 1), He(n)?.[t] === 1 ? (Tn(e, n), !0) : (delete n[t], !1));
}
function In(e, t, n = 1) {
  let r = xn(e),
    i = r[t] ?? 0;
  return !(n > 0) || i < n
    ? !1
    : (i === n ? delete r[t] : (r[t] = i - n), Tn(e, r), !0);
}
function Ln(e) {
  let t = e.reduce((e, [, t]) => e + t, 0),
    n = Math.random() * t;
  for (let [t, r] of e) if ((n -= r) < 0) return t;
  return e[e.length - 1][0];
}
function Rn(e) {
  for (let [t, n] of vn ? Ee : Oe)
    if (Math.random() < n && Pn(e, t, 1, { quiet: !0 })) return L[t];
  return null;
}
var zn = !1;
function Bn(e) {
  zn ||
    ((zn = !0),
    e.events.on(`mission:completed`, (t) => {
      if ((t?.id && S(e.state.data, t.id) > 1) || Math.random() >= 0.35) return;
      let r = Ln(vn ? Te : De);
      Pn(e, r, 1, { quiet: !0 }) &&
        setTimeout(() => {
          (En(e, `pickup`),
            Dn(
              e,
              {
                zh: n.on
                  ? n.t(
                      `任務獎勵：「${L[r].name.zh}」放進背包`,
                      `ミッション報酬：「${n.jz(L[r].name.zh)}」をバッグに入れた`,
                    )
                  : `任務獎勵：「${L[r].name.zh}」放進背包`,
                en: `Mission bonus: ${L[r].name.en} — in your bag`,
              },
              `good`,
              4,
            ));
        }, 3500);
    }));
}
