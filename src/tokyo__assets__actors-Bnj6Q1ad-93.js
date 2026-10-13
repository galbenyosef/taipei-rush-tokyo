// tokyo__assets__actors-Bnj6Q1ad 93 — attributes
// Lines 44228-44487 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var US = 1.72,
  WS = {
    hips: 0,
    chest: 1,
    head: 2,
    foreL: 4,
    foreR: 6,
    thighR: 9,
    shinL: 8,
    shinR: 10,
    pistol: 6,
    rifle: 6,
    holster: 0,
    sling: 1,
    armL: 3,
    armR: 5,
    cuffs: 4,
  },
  GS = {
    hips: 0,
    chest: 0,
    head: 0,
    foreL: 0,
    foreR: 0,
    thighR: 0,
    shinL: 0,
    shinR: 0,
    pistol: 1,
    rifle: 2,
    holster: 5,
    sling: 6,
    armL: 0,
    armR: 0,
    cuffs: 7,
  },
  KS = class {
    nv = 0;
    ni = 0;
    variant = 0;
    jobs = [];
    add(e, t, n) {
      e.attributes.normal || e.computeVertexNormals();
      let r = e.attributes.position,
        i = e.attributes.normal,
        a = this.nv,
        o = this.ni,
        s = r.count,
        c = e.index ? e.index.count : s;
      ((this.nv += s), (this.ni += c));
      let l = this.variant,
        u = WS[t],
        d = GS[t],
        f = n.glow ?? 0,
        p = n.color;
      this.jobs.push((t, n) => {
        n.setHex(p);
        for (let e = 0; e < s; e++) {
          let o = (a + e) * 3;
          ((t.pos[o] = r.getX(e)),
            (t.pos[o + 1] = r.getY(e)),
            (t.pos[o + 2] = r.getZ(e)));
          let s = i.getY(e);
          ((t.nor[o] = i.getX(e)),
            (t.nor[o + 1] = s),
            (t.nor[o + 2] = i.getZ(e)));
          let c = 0.86 + 0.14 * Math.max(0, s * 0.5 + 0.5);
          ((t.col[o] = n.r * c),
            (t.col[o + 1] = n.g * c),
            (t.col[o + 2] = n.b * c),
            (t.bone[a + e] = u));
          let p = (a + e) * 4;
          ((t.flags[p] = l),
            (t.flags[p + 1] = d),
            (t.flags[p + 2] = f),
            (t.flags[p + 3] = 0));
        }
        if (e.index)
          for (let n = 0; n < c; n++) t.idx[o + n] = a + e.index.getX(n);
        else for (let e = 0; e < c; e++) t.idx[o + e] = a + e;
        e.dispose();
      });
    }
    body(e, t, n, r = !1) {
      let i = e.attributes.position,
        a = e.attributes.normal,
        o = e.attributes.color,
        s = e.attributes.part,
        c = e.attributes.aInfo,
        l = e.index,
        u = this.nv,
        d = this.ni,
        f = i.count,
        p = l.count;
      ((this.nv += f), (this.ni += p));
      let m = this.variant;
      this.jobs.push((e) => {
        let h = new Ae().setHex(t),
          g = h.r + h.g + h.b,
          _ = h.r / g,
          v = h.g / g,
          y = new Ae().setHex(Z.swatMolle),
          b = new Ae().setHex(Z.glove),
          x = new Ae().setHex(n ? Z.swatSleeve : Z.sleeve),
          S = new Ae().setHex(n ? Z.swatTrouser : Z.trouser);
        for (let t = 0; t < f; t++) {
          let l = i.getX(t),
            d = i.getY(t),
            f = i.getZ(t),
            p = o.getX(t),
            h = o.getY(t),
            g = o.getZ(t),
            C = s.getX(t),
            w = c ? c.getW(t) : 0,
            T = 0,
            E = p + h + g,
            D = Math.max(p, h, g) - Math.min(p, h, g) < 0.12,
            O =
              E > 0.05 &&
              Math.abs(p / E - _) < 0.035 &&
              Math.abs(h / E - v) < 0.03;
          (O && (C === 2 || C === 4 || C === 6) && (T = 1),
            C === 1 && D && Math.min(p, h, g) > 0.42
              ? n
                ? ((p = y.r), (h = y.g), (g = y.b))
                : (w = 1)
              : !n && C === 1 && h > 0.45 && g < 0.12 && (w = 0.12),
            r && O && C >= 3 && C <= 6 && d > 0.83
              ? ((p = x.r), (h = x.g), (g = x.b), (T = 0))
              : r &&
                O &&
                C >= 7 &&
                C <= 10 &&
                ((p = S.r), (h = S.g), (g = S.b)),
            n &&
              (C === 4 || C === 6) &&
              d < 0.872 &&
              ((p = b.r), (h = b.g), (g = b.b), (T = 0)));
          let k = (u + t) * 3;
          ((e.pos[k] = l),
            (e.pos[k + 1] = d),
            (e.pos[k + 2] = f),
            (e.nor[k] = a.getX(t)),
            (e.nor[k + 1] = a.getY(t)),
            (e.nor[k + 2] = a.getZ(t)),
            (e.col[k] = p),
            (e.col[k + 1] = h),
            (e.col[k + 2] = g),
            (e.bone[u + t] = C > 10 ? 1 : C));
          let A = (u + t) * 4;
          ((e.flags[A] = m),
            (e.flags[A + 1] = 0),
            (e.flags[A + 2] = w),
            (e.flags[A + 3] = T));
        }
        for (let t = 0; t < p; t++) e.idx[d + t] = u + l.getX(t);
      });
    }
    build() {
      let e = this.nv,
        t = {
          pos: new Float32Array(e * 3),
          nor: new Float32Array(e * 3),
          col: new Float32Array(e * 3),
          bone: new Float32Array(e),
          flags: new Float32Array(e * 4),
          idx: e > 65535 ? new Uint32Array(this.ni) : new Uint16Array(this.ni),
        },
        n = new Ae();
      for (let e of this.jobs) e(t, n);
      this.jobs.length = 0;
      let r = new fe();
      return (
        r.setAttribute(`position`, new I(t.pos, 3)),
        r.setAttribute(`normal`, new I(t.nor, 3)),
        r.setAttribute(`color`, new I(t.col, 3)),
        r.setAttribute(`aBone`, new I(t.bone, 1)),
        r.setAttribute(`aFlags`, new I(t.flags, 4)),
        r.setIndex(new I(t.idx, 1)),
        r.computeBoundingSphere(),
        r
      );
    }
  };
function qS(e, t, n, r) {
  let i = US,
    a = new gS(e, t, (e) => n[e] === 0 || n[e] === 1, 0.45 * i, 0.86 * i, 22),
    o = new R(0.222, 0.865, -0.01),
    s = o.clone().add(new R(0.004, -0.098, -0.004)),
    c = new R(0.215, 1.115, 0.012),
    l = new R(-0.222, 0.865, -0.01),
    u = l.clone().add(new R(-0.004, -0.098, -0.004)),
    d = new R(-0.215, 1.115, 0.012),
    f = (t, r) => {
      let i = -1 / 0,
        a = 0,
        o = 0;
      for (let a = 0; a < n.length; a++) {
        let o = e[a * 3 + 1];
        n[a] === t && o >= 1.2 && o <= 1.36 && (i = Math.max(i, r * e[a * 3]));
      }
      if (!Number.isFinite(i)) return new R(r * 0.262, 1.295, 0);
      for (let s = 0; s < n.length; s++) {
        let c = e[s * 3 + 1];
        n[s] === t &&
          c >= 1.2 &&
          c <= 1.36 &&
          r * e[s * 3] > i - 0.012 &&
          ((a += e[s * 3 + 2]), o++);
      }
      return new R(r * i, 1.295, o ? a / o : 0);
    },
    p = -1 / 0;
  for (let t = 0; t < n.length; t++)
    n[t] === 2 && e[t * 3 + 1] > p && (p = e[t * 3 + 1]);
  let m = new Ce(),
    h = new R();
  for (let t = 0; t < n.length; t++)
    n[t] === 2 &&
      e[t * 3 + 1] > p - 0.12 &&
      m.expandByPoint(h.set(e[t * 3], e[t * 3 + 1], e[t * 3 + 2]));
  return {
    H: i,
    prof: a,
    palmR: o.clone().lerp(s, 0.6),
    foreDirR: o.clone().sub(c).normalize(),
    palmL: l.clone().lerp(u, 0.6),
    foreDirL: l.clone().sub(d).normalize(),
    sleeve: r ? null : [f(3, -1), f(5, 1)],
    hipR: new R(0.095, 0.92, 0),
    kneeL: new R(-0.095, 0.5, -0.006),
    kneeR: new R(0.095, 0.5, -0.006),
    skull: m,
    lod: 1,
  };
}
function JS(e = 1) {
  let t = new KS(),
    n = [];
  for (let r = 0; r < 4; r++) {
    let i = dS[fS[r]],
      a = t.ni;
    t.variant = r;
    let o = Wt(i.desc, { lod: e });
    t.body(o, i.desc.skin, r === 3, e === 2);
    let s = qS(
      o.attributes.position.array,
      o.index?.array ?? null,
      o.attributes.part.array,
      r === 3,
    );
    ((s.lod = e),
      e === 2 && (s.sleeve = null),
      o.dispose(),
      r === 3
        ? HS(s, t, null)
        : FS(s, t, null, r === 2 ? { decal: null } : null),
      n.push((t.ni - a) / 3));
  }
  return { geo: t.build(), tris: n };
}
