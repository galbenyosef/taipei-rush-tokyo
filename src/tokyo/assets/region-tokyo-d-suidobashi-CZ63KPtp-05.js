// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 05 — next
// Lines 1256-1352 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function Te(e = `#a8acb0`) {
  return (t, n, r, i, a) => {
    z(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 16)
      z(t, n, e, i, a * 0.02, `rgba(0,0,0,0.25)`);
    z(t, n, r + a * 0.94, i, a * 0.06, `#606468`);
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    let o = ue(`wagon`, e);
    z(t, n, r, i, a, `#5a3a1a`);
    for (let e = 0; e < 3; e++) {
      let s = n + 2;
      for (; s < n + i - 2;) {
        let n = 2 + o.next() * 4;
        (z(
          t,
          s,
          r + 3 + (a / 3) * e,
          n - 0.6,
          a / 3 - 5,
          [
            `#d8c8a0`,
            `#a06030`,
            `#304060`,
            `#e8e0d0`,
            `#6a2a1a`,
            `#c09050`,
            `#f0f0f0`,
          ][o.int(0, 6)],
        ),
          (s += n));
      }
    }
  };
}
function De(e) {
  return (t, n, r, i, a) => {
    (z(t, n, r, i, a, `#fffef6`),
      (t.strokeStyle = `#c01818`),
      (t.lineWidth = 2),
      t.strokeRect(n + 2, r + 2, i - 4, a - 4),
      V(t, R(e), n + i / 2, r + a / 2, i * 0.88, a * 0.6, `#c01818`, `900`));
  };
}
function Oe(e, t = `#3e6a34`) {
  return (n, r, i, a, o) => {
    let s = ue(`leaves`, e);
    z(n, r, i, a, o, t);
    for (let e = 0; e < 260; e++)
      ((n.fillStyle = [`#2a4a24`, `#4e7e3e`, `#5e8e48`, `#345a2c`, `#6a9a50`][
        s.int(0, 4)
      ]),
        n.beginPath(),
        n.arc(
          r + s.next() * a,
          i + s.next() * o,
          2 + s.next() * 5,
          0,
          Math.PI * 2,
        ),
        n.fill());
  };
}
function ke(e, t, n, r, i = !1) {
  return (a, o, s, c, l) => {
    (z(a, o, s, c, l, t),
      (a.strokeStyle = n),
      (a.lineWidth = Math.max(1.5, l * 0.05)),
      a.strokeRect(o + l * 0.08, s + l * 0.08, c - l * 0.16, l - l * 0.16),
      r
        ? (V(
            a,
            R(e),
            o + c / 2,
            s + l * 0.4,
            c * 0.84,
            l * 0.42,
            n,
            `900`,
            i ? x() : v(),
          ),
          V(a, R(r), o + c / 2, s + l * 0.74, c * 0.8, l * 0.2, n, `700`))
        : V(
            a,
            R(e),
            o + c / 2,
            s + l * 0.5,
            c * 0.84,
            l * 0.56,
            n,
            `900`,
            i ? x() : v(),
          ));
  };
}
