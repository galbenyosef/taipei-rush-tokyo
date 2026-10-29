// tokyo/assets/actors-qKVitB-C 79 — math
// Lines 37085-37192 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Fb(e) {
  let t = [0, 1.5, -0.1],
    n = (e, n, r) => [t[0] + e, t[1] + n, t[2] + r],
    r = { part: 17, shade: 0 };
  {
    let i = 0.075,
      a = 0.071,
      o = 0.112,
      s = 2.4,
      c = new w(i, i * 0.93, o, 12, 3, !0, Math.PI - s / 2, s),
      l = c.attributes.position;
    for (let e = 0; e < l.count; e++) {
      let t = l.getY(e),
        n = 1 + 0.035 * Math.cos((t / o) * Math.PI * 6);
      (l.setX(e, l.getX(e) * n), l.setZ(e, l.getZ(e) * n));
    }
    (c.deleteAttribute(`normal`),
      c.computeVertexNormals(),
      Sb.makeTranslation(t[0], t[1] - 0.03, t[2] + a),
      e.add(c, { ...r, slot: 6, acc: 6, shade: 0.12 }, Sb));
    for (let t of [-1, 1]) {
      let o = t * i * Math.sin(s / 2),
        c = a - i * Math.cos(s / 2);
      (Mb(e, n(o, 0, c), n(t * 0.074, 0.012, 0.092), 0.0025, 0.0025, 3, {
        ...r,
        slot: 6,
        acc: 6,
      }),
        Mb(e, n(o, -0.06, c), n(t * 0.072, -0.02, 0.094), 0.0025, 0.0025, 3, {
          ...r,
          slot: 6,
          acc: 6,
        }));
    }
  }
  {
    let t = { ...r, slot: 7, color: 1710620, acc: 7 },
      i = 0.036,
      a = 0.004,
      o = 0.047,
      s = 0.032,
      c = 0.0035;
    for (let r of [-1, 1]) {
      let l = r * 0.033;
      (X(e, n(l, 0.052, a), [o, c, c], t),
        X(e, n(l, i - s / 2, a), [o, c, c], t),
        X(e, n(l - o / 2, i, a), [c, s, c], t),
        X(e, n(l + o / 2, i, a), [c, s, c], t),
        Mb(
          e,
          n(r * 0.058, 0.052 - 0.003, 0.008),
          n(r * 0.071, 0.039999999999999994, 0.098),
          0.002,
          0.002,
          3,
          t,
        ));
    }
    X(e, n(0, 0.041999999999999996, 0.002), [0.02, c, c], t);
  }
  {
    let i = (n, i, a, o, s) => {
        let c = new Ne(i, a, 14, 1, Math.PI / 2 - o / 2, o);
        (c.rotateX(-Math.PI / 2 + 0.16),
          c.translate(t[0], t[1] + n, t[2] + 0.093));
        let l = c.clone();
        (e.add(c, { ...r, slot: 5, acc: s, shade: 0.1 }),
          e.add(l, { ...r, slot: 5, acc: s, shade: 0.1, flip: !0 }));
      },
      a = new w(0.085, 0.087, 0.03, 18, 1, !0);
    (a.translate(t[0], t[1] + 0.09, t[2] + 0.093),
      e.add(a, { ...r, slot: 5, acc: 4, shade: 0.05 }),
      i(0.078, 0.085, 0.2, 2.6, 4),
      jb(
        e,
        n(0, 0.075, 0.093),
        [0.098, 0.085, 0.104],
        14,
        6,
        { ...r, slot: 5, acc: 3, shade: 0.12 },
        0,
        Math.PI * 2,
        0,
        Math.PI * 0.46,
      ),
      i(0.08, 0.092, 0.19, 1.9, 3));
  }
}
var Ib = Fy;
function Lb() {
  let e = new Ab();
  Vb(e);
  let t = 1.08,
    n = 1.6;
  for (let r = 0; r < e.part.length; r++)
    e.part[r] !== 2 ||
      e.pos[r * 3 + 1] < 1.53 ||
      ((e.pos[r * 3] *= t),
      (e.pos[r * 3 + 1] = n + (e.pos[r * 3 + 1] - n) * t),
      (e.pos[r * 3 + 2] *= t));
  return e.build();
}
function Rb(e = `hand`, t) {
  let n = new Ab();
  e === `placard` ? Bb(n) : (zb(n, t), e === `avatar` && Fb(n));
  let r = n.build();
  return ((r.boundingSphere.radius = 2.2), r);
}
