// tokyo/assets/actors-qKVitB-C 12 — math
// Lines 3662-4067 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function _o(e, t, n, r) {
  let i = so(t);
  switch (n) {
    case `catears`:
    case `bearears`:
    case `horns`: {
      let i = lo(e, t, n === `horns` ? oo : r);
      for (let t of [-1, 1]) {
        let { p: a, n: o, rz: s } = i(t * 0.62);
        if (n === `catears`) {
          e.add(
            new d(0.036, 0.066, 3, 1),
            G(a.x + o.x * 0.025, a.y + o.y * 0.025, a.z, 0, 0, s, 1, 1, 0.42),
            r,
            za,
            Fa,
            0.95,
          );
          let t = r === fa.pink.hex ? 16773363 : 15901622;
          e.add(
            new d(0.022, 0.042, 3, 1),
            G(
              a.x + o.x * 0.019,
              a.y + o.y * 0.019,
              a.z - 0.0075,
              0,
              0,
              s,
              1,
              1,
              0.42,
            ),
            t,
            za,
            Fa,
            0.95,
          );
        } else if (n === `bearears`)
          (e.add(
            new _(0.03, 14, 10),
            G(a.x + o.x * 0.02, a.y + o.y * 0.02, a.z, 0, 0, s, 1, 1, 0.5),
            r,
            za,
            Fa,
            1,
          ),
            e.add(
              new _(0.017, 12, 8),
              G(
                a.x + o.x * 0.02,
                a.y + o.y * 0.02,
                a.z - 0.013,
                0,
                0,
                s,
                1,
                1,
                0.4,
              ),
              Ja(r, 15980228, 0.55),
              za,
              Fa,
              1,
            ));
        else {
          let n = new d(0.012, 0.05, 10, 5),
            i = n.attributes.position;
          for (let e = 0; e < i.count; e++) {
            let n = i.getY(e) / 0.05 + 0.5;
            i.setX(e, i.getX(e) + t * 0.014 * n * n);
          }
          (n.computeVertexNormals(),
            e.add(
              n,
              G(a.x + o.x * 0.02, a.y + o.y * 0.02, a.z, 0, 0, s),
              r,
              za,
              Ia,
              0.35,
            ));
        }
      }
      return !0;
    }
    case `halo`:
      return (
        e.add(
          new M(i.rx * 0.75, 0.008, 6, 36),
          G(i.cx, i.top + 0.05, i.cz + 0.02, Math.PI / 2 + 0.38),
          ao,
          za,
          La,
          0.22,
        ),
        !0
      );
    case `dino`: {
      let n = io(i.cx, t.eyeY - 0.005, i.cz + 0.006),
        a = io(i.rx + 0.028, i.top + 0.028 - n.y, i.rz + 0.03),
        o = Math.acos(Math.min(0.95, 0.05 / a.y)),
        s = Math.PI * 0.8,
        c = 0.78,
        l = [
          new _(1, 28, 8, 0, Math.PI * 2, 0, o),
          new _(1, 24, 6, 1.5 * Math.PI + c, 2 * Math.PI - 2 * c, o, s - o),
        ];
      for (let t of l)
        (e.add(
          t.clone(),
          G(n.x, n.y, n.z, 0, 0, 0, a.x, a.y, a.z),
          r,
          za,
          Fa,
          0.95,
        ),
          e.add(
            Ya(t),
            G(n.x, n.y, n.z, 0, 0, 0, a.x - 0.004, a.y - 0.004, a.z - 0.004),
            qa(r, 0.62),
            za,
            Fa,
            0.95,
          ));
      let u = r === fa.yellow.hex ? 15234094 : Ja(r, 16765773, 0.65);
      for (let t = 0; t < 6; t++) {
        let { p: r, n: i } = uo(n, a, Math.PI * (0.1 + t * 0.11), Math.PI / 2),
          o = 0.036 - t * 0.0035;
        e.add(
          new d(o * 0.55, o * 1.3, 4, 1),
          Za(r.addScaledVector(i, -0.006), i, o * 1.3, 0.45, 1, 1),
          u,
          za,
          Fa,
          0.9,
        );
      }
      for (let t of [-1, 1]) {
        let { p: r, n: i } = uo(n, a, Math.PI * 0.27, 1.5 * Math.PI + t * 0.33);
        (e.add(
          new _(0.017, 12, 8),
          G(r.x + i.x * 0.006, r.y + i.y * 0.006, r.z + i.z * 0.006),
          16514040,
          za,
          Ia,
          0.3,
        ),
          e.add(
            new _(0.0085, 10, 6),
            G(r.x + i.x * 0.019, r.y + i.y * 0.019, r.z + i.z * 0.019),
            1118481,
            za,
            Ia,
            0.1,
          ));
      }
      for (let t = 0; t < 7; t++) {
        let { p: r, n: i } = uo(n, a, o, 1.5 * Math.PI + (t - 3) * 0.24);
        e.add(
          new d(0.0075, 0.017, 4, 1),
          G(r.x + i.x * 0.002, r.y - 0.007, r.z + i.z * 0.002, Math.PI, 0, 0),
          16316144,
          za,
          Ia,
          0.4,
        );
      }
      return !0;
    }
    case `boba`: {
      let t = io(i.cx, i.top - 0.04, i.cz);
      return (
        (e.post = Xa(t.x, t.y, t.z, 0.06, 0, 0.12)),
        fo(e, t, 0.066, 0.084, 0.16, r, za),
        (e.post = null),
        !0
      );
    }
    case `xlb`: {
      let t = i.rx * 0.92 + 0.012,
        n = i.top - 0.03,
        a = 13214310;
      (e.add(
        new w(t, t, 0.045, 30, 1, !0),
        G(i.cx, n + 0.0225, i.cz),
        a,
        za,
        Fa,
        0.85,
      ),
        e.add(
          Ya(new w(t - 0.004, t - 0.004, 0.045, 30, 1, !0)),
          G(i.cx, n + 0.0225, i.cz),
          qa(a, 0.7),
          za,
          Fa,
          0.9,
        ));
      for (let r of [0.003, 0.042])
        e.add(
          new M(t + 0.001, 0.0045, 4, 30),
          G(i.cx, n + r, i.cz, Math.PI / 2),
          qa(a, 0.82),
          za,
          Fa,
          0.85,
        );
      let o = Ka(1, 1, 1, 0, Math.PI * 0.5, 40, 10),
        s = o.attributes.position;
      for (let e = 0; e < s.count; e++) {
        let t = s.getX(e),
          n = s.getY(e),
          r = s.getZ(e),
          i = Math.atan2(r, t) + 0.6 * n,
          a =
            Math.hypot(t, r) *
            (1 + 0.07 * n * Math.cos(18 * (i - 0.6 * n))) *
            (1 - 0.3 * n * n);
        s.setXYZ(e, a * Math.cos(i), n, a * Math.sin(i));
      }
      o.computeVertexNormals();
      let c = Ja(r, 16777215, 0.45);
      return (
        e.add(
          o,
          G(i.cx, n + 0.03, i.cz, 0, 0, 0, t * 0.92, 0.09, t * 0.92),
          c,
          za,
          Fa,
          0.7,
        ),
        e.add(
          new _(0.012, 10, 6),
          G(i.cx, n + 0.12, i.cz, 0, 0, 0, 1, 1.4, 1),
          qa(c, 0.95),
          za,
          Fa,
          0.7,
        ),
        !0
      );
    }
    case `cutlet`: {
      let t = new F(0.3, 0.016, 0.25, 16, 1, 14),
        n = t.attributes.position;
      for (let e = 0; e < n.count; e++) {
        let t = n.getX(e),
          r = n.getY(e),
          i = n.getZ(e),
          a = Math.atan2(i, t),
          o = 1 + 0.08 * Math.sin(3 * a + 0.5) + 0.05 * Math.sin(7 * a + 1.3);
        ((t *= o),
          (i *= o),
          r > 0 &&
            (r +=
              0.003 * (Math.sin(t * 90) + Math.cos(i * 80)) +
              0.002 * Math.sin((t + i) * 160)),
          (r -= (t * t + i * i) / 0.4),
          n.setXYZ(e, t, r, i));
      }
      return (
        t.computeVertexNormals(),
        e.add(
          t,
          G(i.cx, i.top + 0.006, i.cz, 0.05, 0.5, 0.12),
          r,
          za,
          Fa,
          0.75,
        ),
        !0
      );
    }
    case `crown`: {
      let t = Math.min(i.rx, i.rz) * 0.62,
        n = i.top - 0.018,
        a = 0.034;
      ((e.post = Xa(i.cx, n, i.cz, 0, 0, 0.16)),
        e.add(
          new w(t, t * 0.94, a, 24, 1, !0),
          G(i.cx, n + a / 2, i.cz),
          r,
          za,
          La,
          0.28,
        ),
        e.add(
          Ya(new w(t - 0.003, t * 0.94 - 0.003, a, 24, 1, !0)),
          G(i.cx, n + a / 2, i.cz),
          qa(r, 0.7),
          za,
          La,
          0.35,
        ));
      for (let o = 0; o < 5; o++) {
        let s = (o / 5) * Math.PI * 2,
          c = Math.sin(s),
          l = -Math.cos(s);
        (e.add(
          new d(0.013, 0.03, 8, 1),
          G(i.cx + t * c, n + a + 0.013, i.cz + t * l),
          r,
          za,
          La,
          0.28,
        ),
          e.add(
            new _(0.0055, 8, 5),
            G(i.cx + t * c, n + a + 0.03, i.cz + t * l),
            r,
            za,
            La,
            0.2,
          ));
        let u = s + Math.PI / 5;
        e.add(
          new _(0.0065, 8, 5),
          G(
            i.cx + (t * 0.97 + 0.002) * Math.sin(u),
            n + a * 0.45,
            i.cz - (t * 0.97 + 0.002) * Math.cos(u),
          ),
          o % 2 ? 2052031 : 13111342,
          za,
          Ia,
          0.08,
        );
      }
      return ((e.post = null), !0);
    }
    case `wizard`: {
      let n = i.rx + 0.014,
        a = (i.rz + 0.014) / n,
        o = t.eyeY + 0.055,
        s = 0.3;
      e.add(
        new w(0.2, 0.2, 0.006, 36),
        G(i.cx, o, i.cz, 0, 0, 0, 1, 1, Math.max(0.85, a)),
        r,
        za,
        Fa,
        0.9,
      );
      let c = new d(1, 1, 24, 10, !0),
        l = c.attributes.position;
      for (let e = 0; e < l.count; e++) {
        let t = l.getY(e) + 0.5;
        l.setXYZ(
          e,
          l.getX(e) * n + 0.015 * t * t * t,
          t * s,
          l.getZ(e) * n * a + 0.11 * t ** 2.5,
        );
      }
      (c.computeVertexNormals(), e.add(c, G(i.cx, o, i.cz), r, za, Fa, 0.9));
      let u = (e) => n * (1 - e / s) + 0.002;
      return (
        e.add(
          new w(u(0.034), u(0.004), 0.03, 24, 1, !0),
          G(i.cx, o + 0.019, i.cz, 0, 0, 0, 1, 1, a),
          ao,
          za,
          La,
          0.3,
        ),
        !0
      );
    }
    case `douli`: {
      let t = 0.27,
        n = 0.13,
        a = i.rx + 0.012,
        o = i.top + 0.012 - n * (1 - a / t),
        s = Ja(r, 14073218, 0.5);
      (e.add(new d(t, n, 32, 3, !0), G(i.cx, o + n / 2, i.cz), s, za, Fa, 0.9),
        e.add(
          Ya(new d(0.266, 0.127, 32, 3, !0)),
          G(i.cx, o + n / 2 - 0.004, i.cz),
          qa(s, 0.72),
          za,
          Fa,
          0.95,
        ));
      for (let r of [0.35, 0.62, 0.88])
        e.add(
          new M(t * r + 0.0016, 0.0018, 3, 40),
          G(i.cx, o + n * (1 - r), i.cz, Math.PI / 2),
          qa(s, 0.75),
          za,
          Fa,
          0.9,
        );
      return (
        e.add(
          new _(0.012, 8, 6),
          G(i.cx, o + n, i.cz),
          qa(s, 0.8),
          za,
          Fa,
          0.9,
        ),
        !0
      );
    }
  }
  return !1;
}
