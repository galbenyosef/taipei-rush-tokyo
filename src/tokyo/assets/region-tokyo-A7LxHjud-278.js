// tokyo/assets/region-tokyo-A7LxHjud 278 — coarse
// Lines 102975-103190 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Kwe = {
    ever: { green: 3429165, bloom: 3824689, autumn: 3362860, bare: 3164458 },
    keyaki: { green: 5208634, bloom: 7117382, autumn: 11890734, bare: 0 },
    ginkgo: { green: 7117380, bloom: 9420374, autumn: 15252770, bare: 0 },
    sakura: { green: 6062144, bloom: 15910098, autumn: 11819308, bare: 0 },
    plane: { green: 6589506, bloom: 8366160, autumn: 11700540, bare: 0 },
    cedar: { green: 3824190, bloom: 4153666, autumn: 3692347, bare: 3494713 },
    pine: { green: 2704685, bloom: 2968112, autumn: 2704685, bare: 2572841 },
    maple: { green: 6262334, bloom: 8827984, autumn: 12728870, bare: 0 },
  },
  WV = {
    ever: 5326396,
    keyaki: 7036754,
    ginkgo: 6181962,
    sakura: 4208186,
    plane: 10129532,
    cedar: 5128246,
    pine: 5062192,
    maple: 4865075,
  };
function GV(e, t, n, r, i, a, o = `green`, s = 0, c = !0) {
  let l = HV(a),
    u = e.coarse ? 4 : 5,
    d = l.next() * 3,
    f = Kwe[t][o],
    p = l.range(0.86, 1.1),
    m = l.range(-0.4, 0.4),
    h = l.range(-0.4, 0.4);
  e.push().mat(0.95, 0, 0, 0);
  let g = t === `cedar` || t === `pine` ? 0.85 : t === `ginkgo` ? 0.7 : 0.5;
  ((!e.coarse || !f) &&
    e
      .col(WV[t])
      .rod(
        n,
        s,
        r,
        n + m,
        s + i * g,
        r + h,
        Math.max(0.12, i * 0.028),
        e.coarse ? 3 : 4,
        Math.max(0.06, i * 0.014),
      ),
    c && e.pole(n, r, Math.max(0.2, i * 0.025), s, s + 3));
  let _ = n + m,
    v = r + h;
  if (!f) {
    if (!e.coarse)
      for (let n = 0; n < 4; n++) {
        let r = d + n * 1.57,
          a = i * 0.3;
        e.col(WV[t]).rod(
          _,
          s + i * 0.45,
          v,
          _ + Math.cos(r) * a,
          s + i * 0.85,
          v + Math.sin(r) * a,
          i * 0.012,
          3,
          i * 0.004,
        );
      }
    e.col(9076080, p).mat(1, 0, 0, 0);
    let n = i * (t === `ginkgo` ? 0.2 : 0.3);
    (UV(
      e,
      _,
      v,
      [
        [0, s + i * 0.5],
        [n * 0.8, s + i * 0.62],
        [n * 0.6, s + i * 0.88],
        [0, s + i * 0.98],
      ],
      4,
      8747113,
      p,
      d,
    ),
      e.pop());
    return;
  }
  let y = (t, n, r) =>
    e.coarse
      ? [
          [0, r - n * 0.6],
          [t, r],
          [0, r + n],
        ]
      : [
          [0, r - n * 0.62],
          [t, r - n * 0.12],
          [t * 0.66, r + n * 0.55],
          [0, r + n],
        ];
  switch (t) {
    case `cedar`: {
      let t = i * 0.26;
      UV(
        e,
        _,
        v,
        e.coarse
          ? [
              [0, s + i * 0.12],
              [t, s + i * 0.16],
              [t * 0.45, s + i * 0.6],
              [0, s + i],
            ]
          : [
              [0, s + i * 0.1],
              [t, s + i * 0.14],
              [t * 0.82, s + i * 0.3],
              [t * 0.62, s + i * 0.33],
              [t * 0.55, s + i * 0.55],
              [t * 0.32, s + i * 0.58],
              [t * 0.2, s + i * 0.8],
              [0, s + i],
            ],
        e.coarse ? 4 : 6,
        f,
        p,
        d,
      );
      break;
    }
    case `pine`: {
      let t = i * 0.3;
      if (
        (UV(
          e,
          _,
          v,
          [
            [0, s + i * 0.72],
            [t, s + i * 0.8],
            [t * 0.6, s + i * 0.92],
            [0, s + i * 0.96],
          ],
          u,
          f,
          p,
          d,
        ),
        !e.coarse)
      ) {
        let n = d * 2,
          r = i * 0.25;
        UV(
          e,
          _ + Math.cos(n) * r,
          v + Math.sin(n) * r,
          [
            [0, s + i * 0.52],
            [t * 0.75, s + i * 0.58],
            [t * 0.45, s + i * 0.66],
            [0, s + i * 0.69],
          ],
          5,
          f,
          p * 0.95,
          d,
        );
      }
      break;
    }
    case `ginkgo`:
      UV(e, _, v, y(i * 0.21, i * 0.4, s + i * 0.58), u, f, p, d);
      break;
    case `sakura`:
      UV(
        e,
        _,
        v,
        y(i * 0.5, i * 0.24, s + i * 0.62),
        e.coarse ? 4 : 6,
        f,
        p,
        d,
      );
      break;
    case `keyaki`:
      UV(e, _, v, y(i * 0.4, i * 0.3, s + i * 0.66), e.coarse ? 4 : 6, f, p, d);
      break;
    case `plane`:
      UV(e, _, v, y(i * 0.34, i * 0.32, s + i * 0.64), u, f, p, d);
      break;
    case `maple`:
      UV(e, _, v, y(i * 0.42, i * 0.3, s + i * 0.62), u, f, p, d);
      break;
    default:
      if (
        (UV(e, _, v, y(i * 0.36, i * 0.33, s + i * 0.63), u, f, p, d),
        !e.coarse)
      ) {
        let t = d * 2.3,
          n = i * 0.24;
        UV(
          e,
          _ + Math.cos(t) * n,
          v + Math.sin(t) * n,
          y(i * 0.24, i * 0.22, s + i * 0.55),
          4,
          f,
          p * 0.92,
          d + 1,
        );
      }
  }
  e.pop();
}
function KV(e, t) {
  for (let n of qV(e, t));
}
