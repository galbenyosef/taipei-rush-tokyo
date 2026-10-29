// tokyo/assets/region-tokyo-55J_WESF 316 — col
// Lines 114176-114338 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* QDe(e, t) {
  let n = t.plan;
  {
    let { x0: r, z0: i, x1: a, z1: o, h: s } = _q,
      c = aq(n, r, i, a, o),
      l = (i + o) / 2;
    (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
      Ej(e, r, i, a, o, c, 5.5, t.c(`wakoShow`), 3.2 * oq(e), 5.5 * oq(e)),
      e.col(6185574).mat(0.45, 0.3, 0.08, G | 32),
      e.wall(r, i, r, l, 5.5, s, t.c(`office`), 6.4 * oq(e), 3 * oq(e)),
      e.wall(a, i, r, i, 5.5, s, t.c(`office`), 6.4 * oq(e), 3 * oq(e)),
      e.col(15263456).mat(0.7, 0, 0.06, G | 32),
      e.wall(r, l, r, o, 5.5, s, t.c(`plaster`), 4 * oq(e), 4 * oq(e)),
      e.wall(a, o, a, i, 5.5, s, t.c(`plaster`), 4 * oq(e), 4 * oq(e)),
      e.wall(r, o, a, o, 5.5, s, t.c(`plaster`), 4 * oq(e), 4 * oq(e)),
      e.col(10263188).mat(0.85, 0, 0, 0),
      e.flat(r, i, a, o, s),
      e.col(14276560).mat(0.8, 0, 0.04, 1),
      e.box(r + 5, s, i + 6, a - 4, s + 6, o - 10),
      e.col(2051996).mat(0.6, 0, 0, 0),
      e.box(r - 1.6, 3.6, i + 2, r, 4, o - 2),
      e.pop(),
      e.solid(r, i, a, o, c, s),
      e.coarse ||
        (WB(
          e,
          r + 2,
          s + 6,
          i + 9,
          BB,
          12,
          3.2,
          0.3,
          16119282,
          `京王 新宿駅`,
          2051996,
          { px: 26, lit: 0.5 },
        ),
        e.push().col(2051996).mat(0.4, 0.2, 0.3, 1),
        e.cylY(r + 2.4, i + 16.5, s + 6.5, s + 9.5, 1.5, 8),
        e.pop()));
  }
  yield;
  {
    let { x0: r, z0: i, x1: a, z1: o, h: s } = vq,
      c = aq(n, r, i, a, o);
    (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
      Ej(e, r, i, a, o, c, 5, t.c(`wakoShow`), 3.2 * oq(e), 5 * oq(e)),
      e.col(14208439).mat(0.7, 0, 0.06, G | 32),
      Ej(
        e,
        r,
        i,
        a,
        o,
        5,
        s,
        t.c(`office`),
        3.2 * oq(e),
        3.6 * oq(e),
        10263188,
      ),
      e.pop(),
      e.solid(r, i, a, o, c, s),
      e.coarse ||
        WB(e, r, s - 6, o - 4, BB, 8, 2.6, 0.3, 16184300, `LUMINE 1`, 2783850, {
          px: 22,
          lit: 0.45,
        }));
  }
  yield;
  {
    let { x0: t, z0: n, x1: r, z1: i, h: a } = yq;
    if (
      (e.push().col(13817044).mat(0.7, 0.1, 0.05, 1),
      e.wall(r, n, t, n, 0, a, e.white, 8 * oq(e), 4 * oq(e)),
      e.wall(r, i, r, n, 3.6, a, e.white, 8 * oq(e), 4 * oq(e)),
      e.col(1974822).mat(0.9, 0, 0, 0),
      e.wall(r, i, r, n, 0, 3.6, e.white, 8 * oq(e), 4 * oq(e)),
      e.col(1925044).mat(0.5, 0, 0.12, 1),
      e.box(t, a - 1.4, n - 0.2, r, a - 0.6, n + 0.2),
      e.col(9343380).mat(0.85, 0, 0, 0),
      e.flat(t, n, r, i, a),
      e.pop(),
      e.solid(t, n, r, i, 0, a),
      !e.coarse)
    ) {
      (WB(
        e,
        (t + r) / 2,
        a - 4.2,
        n,
        LB,
        10,
        2.2,
        0.25,
        1925044,
        `小田急線 新宿駅`,
        16777215,
        { px: 22, lit: 0.5 },
      ),
        e.push().col(8290949).mat(0.5, 0.6, 0, 0));
      for (let o = t + 3; o < r - 1; o += 8)
        for (let t = n + 6; t < i - 3; t += 10)
          e.box(o - 0.3, a, t - 0.3, o + 0.3, a + 14, t + 0.3);
      for (let o of [a + 4.5, a + 9])
        (e.box(t + 2.7, o, n + 5.7, r - 1, o + 0.5, n + 6.3),
          e.box(t + 2.7, o, i - 7.3, r - 1, o + 0.5, i - 6.7));
      (e.pop(), Kk(e, t + 11, a, n + 30, 34, 1.2, 28, 0.55));
    }
  }
}
var $De = {
    id: `shinjuku-west-exit`,
    site: HK,
    name: {
      ja: `新宿駅西口`,
      zh: `新宿站西口`,
      en: `Shinjuku Station West Exit`,
    },
    near: 230,
    build: QDe,
    far: (e, t) => {
      (e.col(9343638).mat(0.5, 0.3, 0.06, G | 32),
        Ej(
          e,
          _q.x0,
          _q.z0,
          _q.x1,
          _q.z1,
          0,
          _q.h,
          t.c(`office`),
          8 * oq(e),
          8 * oq(e),
          10263188,
        ),
        e.col(14208439).mat(0.7, 0, 0.06, G | 32),
        Ej(
          e,
          vq.x0,
          vq.z0,
          vq.x1,
          vq.z1,
          0,
          vq.h,
          t.c(`office`),
          8 * oq(e),
          8 * oq(e),
          10263188,
        ),
        e.col(13817044).mat(0.7, 0, 0, 0),
        e.box(yq.x0, 0, yq.z0, yq.x1, yq.h, yq.z1));
    },
    bounds: () => [_q.x0, _q.z0, yq.x1, yq.z1],
    farBoxes: () => [
      sq(_q.x0, _q.z0, _q.x1, _q.z1, 0, _q.h, [0.6, 0.62, 0.64]),
      sq(vq.x0, vq.z0, vq.x1, vq.z1, 0, vq.h, [0.82, 0.78, 0.7]),
    ],
    blip: !0,
  },
  bq = Vs,
  xq = Hs;
