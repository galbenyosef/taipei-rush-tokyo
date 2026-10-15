// tokyo/assets/tokyo-_rNKO_Y7 33 — math
// Lines 13385-13538 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var _o = !1;
function vo() {
  return _o;
}
var yo = new p();
function bo(e, t, n, r, i, a) {
  let o = (2 * Math.PI * i) / 4,
    s = Math.max(a - 2 * i, 0),
    c = Math.PI / 4;
  (yo.copy(t), (yo[r] = 0), yo.normalize());
  let l = (0.5 * o) / (o + s),
    u = 1 - yo.angleTo(e) / c;
  return Math.sign(yo[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var xo = class e extends l {
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
            (f[a + 0] = bo(h, c, `z`, `y`, i, n)),
            (f[a + 1] = 1 - bo(h, c, `y`, `z`, i, t)));
          break;
        case 1:
          (h.set(-1, 0, 0),
            (f[a + 0] = 1 - bo(h, c, `z`, `y`, i, n)),
            (f[a + 1] = 1 - bo(h, c, `y`, `z`, i, t)));
          break;
        case 2:
          (h.set(0, 1, 0),
            (f[a + 0] = 1 - bo(h, c, `x`, `z`, i, e)),
            (f[a + 1] = bo(h, c, `z`, `x`, i, n)));
          break;
        case 3:
          (h.set(0, -1, 0),
            (f[a + 0] = 1 - bo(h, c, `x`, `z`, i, e)),
            (f[a + 1] = 1 - bo(h, c, `z`, `x`, i, n)));
          break;
        case 4:
          (h.set(0, 0, 1),
            (f[a + 0] = 1 - bo(h, c, `x`, `y`, i, e)),
            (f[a + 1] = 1 - bo(h, c, `y`, `x`, i, t)));
          break;
        case 5:
          (h.set(0, 0, -1),
            (f[a + 0] = bo(h, c, `x`, `y`, i, e)),
            (f[a + 1] = 1 - bo(h, c, `y`, `x`, i, t)));
      }
  }
  static fromJSON(t) {
    return new e(t.width, t.height, t.depth, t.segments, t.radius);
  }
};
function So(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    Co(e, r, function (e, r) {
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
function Co(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    Co(e.children[r], t.children[r], n);
}
var wo = {
    zh: `任務進行中，無法辦理登機。`,
    en: `You're on a mission — finish it before you fly.`,
  },
  To = {
    zh: `任務進行中，無法購買高鐵車票。`,
    en: `You're on a mission — finish it before you take the train.`,
  },
  Eo = (e) => (e && he(e.to) ? e.to : _e(z));
function Do(e, t) {
  let n = we();
  return n === null ? null : Ce(Math.max(0, n - e * Oe[z]), t);
}
var Oo = [
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
function ko(e, t) {
  let n = new URL(e);
  for (let e of Oo) n.searchParams.delete(e);
  let r = n.searchParams.toString();
  return N[t].page + (r ? `?${r}` : ``);
}
