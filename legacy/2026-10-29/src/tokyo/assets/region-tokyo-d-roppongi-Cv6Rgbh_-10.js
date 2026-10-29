// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 10 — setmaterial
// Lines 2771-3014 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function mt(e) {
  let t = [],
    n = new l(1024, 1536),
    r = e.white(),
    i = (e, r) => {
      (n.reset(), r(n), t.push({ name: `kit:${e}`, geo: f(n, `rop-${e}`) }));
    };
  i(`plate`, (t) => {
    (t.setMaterial(0.6, 0.4, 0, 0),
      A(t, 9080982),
      N(t, 0, 0.13, 2.05, 2.6, 0.03, 0.02, 0, 1, r),
      t.setMaterial(0.7, 0, 0.05, 1),
      A(t, 16777215),
      N(
        t,
        0,
        0.17,
        1.98,
        2.62,
        0.25,
        0.012,
        0,
        1,
        r,
        e.uv(`plate`),
        e.uv(`wall:concrete`),
      ));
  });
  for (let t of [0, 1, 2, 3])
    i(`aboard:${t}`, (n) => {
      let r = e.uv(`aboard:${t}`);
      (n.setMaterial(0.7, 0, 0.14, 1), A(n, 16777215));
      let i = 0.2;
      (n.quad(
        -0.32,
        0,
        i,
        0.32,
        0,
        i,
        0.32,
        1.05,
        0.02,
        -0.32,
        1.05,
        0.02,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
        n.quad(
          0.32,
          0,
          -0.2,
          -0.32,
          0,
          -0.2,
          -0.32,
          1.05,
          -0.02,
          0.32,
          1.05,
          -0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ));
    });
  for (let t of [0, 1, 2])
    i(`lane-lamp:${t}`, (n) => {
      (n.setMaterial(0.6, 0.5, 0, 0),
        A(n, 2763824),
        ie(n, 0, 0, 0, 4.4, 0.06, r, 6),
        N(n, 0, 0.35, 4.3, 4.38, 0.03, 0.38, 0, 1, r),
        n.setMaterial(0.3, 0, 0.6, 1),
        A(n, 16773328),
        N(n, 0, 0.7, 4, 4.32, 0.16, 0.16, 0, 1, r),
        n.setMaterial(0.7, 0, 0.16, 3),
        A(n, 16777215));
      let i = e.uv(`laneflag:${t}`);
      N(n, 0, 0.3, 2.3, 3.7, 0.22, 0.012, 1, 0, i, i, i);
    });
  (i(`saka`, (t) => {
    (t.setMaterial(0.85, 0, 0, 0),
      A(t, 16777215),
      N(
        t,
        0,
        0,
        0,
        1.5,
        0.12,
        0.12,
        0,
        1,
        e.uv(`saka:1`),
        e.uv(`saka:0`),
        e.uv(`saka:1`),
        !1,
      ),
      A(t, 10130568));
    let n = 1.5,
      i = 0.13;
    (t.quad(
      -0.13,
      n,
      i,
      i,
      n,
      i,
      0,
      1.66,
      0,
      0,
      1.66,
      0,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
      t.quad(
        i,
        n,
        -0.13,
        -0.13,
        n,
        -0.13,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
      t.quad(
        i,
        n,
        i,
        i,
        n,
        -0.13,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
      t.quad(
        -0.13,
        n,
        -0.13,
        -0.13,
        n,
        i,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ));
  }),
    i(`taxi`, (t) => {
      (t.setMaterial(0.6, 0.4, 0, 0),
        A(t, 10133668),
        ie(t, 0, 0, 0, 2.9, 0.045, r, 6),
        t.setMaterial(0.6, 0, 0.18, 3),
        A(t, 16777215),
        N(
          t,
          0,
          0.05,
          2.15,
          2.85,
          0.35,
          0.02,
          0,
          1,
          r,
          e.uv(`taxi`),
          e.uv(`taxi`),
        ));
    }));
  for (let e of [0, 1])
    i(`tree:${e}`, (t) => {
      (t.setMaterial(0.9, 0, 0, 0),
        A(t, 5916214),
        ie(t, 0, 0, 0, 3.4, 0.18, r, 5));
      let n = e ? 4090420 : 3103280;
      for (let [e, i, a, o] of [
        [0, 4.4, 0, 2.6],
        [0.9, 5.6, 0.5, 2],
        [-0.7, 6.2, -0.4, 1.7],
      ])
        (A(t, n, 0.9 + (e + a) * 0.08),
          N(
            t,
            e,
            a,
            i - o * 0.75,
            i + o * 0.75,
            o,
            o * 0.92,
            0.7071,
            0.7071,
            r,
          ),
          A(t, n, 1.08),
          N(t, e, a, i - o * 0.55, i + o * 0.9, o * 0.8, o * 0.8, 0, 1, r));
    });
  return (
    i(`toro`, (e) => {
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, 11052186),
        N(e, 0, 0, 0, 0.3, 0.38, 0.38, 0, 1, r),
        N(e, 0, 0, 0.3, 1.2, 0.13, 0.13, 0, 1, r),
        N(e, 0, 0, 1.2, 1.32, 0.3, 0.3, 0, 1, r),
        e.setMaterial(0.6, 0, 0.55, 1),
        A(e, 16769184),
        N(e, 0, 0, 1.32, 1.7, 0.2, 0.2, 0, 1, r),
        e.setMaterial(0.9, 0, 0, 0),
        A(e, 10131084),
        N(e, 0, 0, 1.7, 1.86, 0.42, 0.42, 0, 1, r),
        N(e, 0, 0, 1.86, 2.02, 0.12, 0.12, 0, 1, r));
    }),
    t
  );
}
