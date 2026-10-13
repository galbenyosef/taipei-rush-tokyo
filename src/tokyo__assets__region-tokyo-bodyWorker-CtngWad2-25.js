// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 25 — math
// Lines 9483-9795 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function ti(e) {
  let t = e >>> 0 || 1;
  return () => {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function ni(e, t, n) {
  for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) n(i * e, r * t);
}
const ri = (e, t, n, r, i) => {
    let a = ti(77);
    ((e.fillStyle = `rgb(236,236,236)`), e.fillRect(t, n, r, i));
    for (let o = 0; o < r; o += 2)
      ((e.fillStyle = `rgba(255,255,255,${(0.1 + a() * 0.16).toFixed(3)})`),
        e.fillRect(t + o, n, 1, i));
    for (let o = 0; o < i; o += 2)
      ((e.fillStyle = `rgba(0,0,0,${(0.02 + a() * 0.05).toFixed(3)})`),
        e.fillRect(t, n + o, r, 1));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle =
        a() < 0.5 ? `rgba(255,255,255,0.18)` : `rgba(0,0,0,0.06)`),
        e.fillRect(t + a() * r, n + a() * i, 2 + a() * 5, 1));
  },
  ii = (e, t, n, r, i) => {
    let a = ti(4242),
      o = new Float32Array(r * i).fill(0.34),
      s = new Float32Array(r * i),
      c = (e, t, n, i, a, c) => {
        let l = Math.floor(e - n - 1),
          u = Math.ceil(e + n + 1);
        for (let d = l; d <= u; d++) {
          let l = Math.max(0, 1 - Math.abs(d + 0.5 - e) / n);
          if (l <= 0) continue;
          let u = t * r + (((d % r) + r) % r);
          ((s[u] = Math.max(s[u], l * a)), (o[u] += (i - o[u]) * l * c));
        }
      };
    for (let e = 0; e < 8; e++) {
      let t = ((e + 0.2 + a() * 0.6) / 8) * r,
        n = (r / 8) * (0.75 + 0.5 * a()),
        o = 1 + Math.floor(a() * 2),
        s = a() * Math.PI * 2,
        l = (0.6 + a() * 1.6) * (r / 128);
      for (let e = 0; e < 22; e++) {
        let e = (a() - 0.5) * n * (0.35 + 0.65 * a()),
          r = 1 - 0.75 * (Math.abs(e) / (n * 0.5)) ** 1.6,
          u =
            a() < 0.2 ? 0.95 : a() < 0.5 ? 0.25 + 0.2 * a() : 0.55 + 0.3 * a(),
          d = 1 + Math.floor(a() * 3),
          f = a() * Math.PI * 2,
          p = a() * 0.8,
          m = 0.7 + a() * 0.9;
        for (let n = 0; n < i; n++) {
          let h = (n / i) * Math.PI * 2;
          c(
            t + e + l * Math.sin(h * o + s) + p * Math.sin(h * d + f),
            n,
            m,
            u,
            Math.max(0.15, r) * (0.8 + 0.2 * a()),
            0.55,
          );
        }
      }
    }
    for (let e = 0; e < 26; e++) {
      let e = a() * r,
        t = 1 + Math.floor(a() * 2),
        n = a() * Math.PI * 2,
        o = (1 + a() * 4) * (r / 128),
        s = 0.4 + 0.5 * a();
      for (let r = 0; r < i; r++)
        c(
          e + o * Math.sin((r / i) * Math.PI * 2 * t + n),
          r,
          0.6,
          s,
          0.3 + 0.25 * a(),
          0.5,
        );
    }
    let l = e.createImageData(r, i);
    for (let e = 0; e < r * i; e++) {
      let t = Math.min(1, Math.max(0, o[e]));
      ((l.data[e * 4] = Math.round(t * 255)),
        (l.data[e * 4 + 1] = Math.round(Math.min(1, s[e]) ** (1 / 2.2) * 255)),
        (l.data[e * 4 + 2] = Math.round(t * 230)),
        (l.data[e * 4 + 3] = 255));
    }
    e.putImageData(l, t, n);
  };
function ai(e, t, n, r) {
  return (i, a, o, s, c) => {
    let l = ti(r);
    switch (((i.fillStyle = Y(t)), i.fillRect(a, o, s, c), e)) {
      case `stripes`:
        i.fillStyle = Y(n);
        for (let e = 0; e < 4; e++)
          i.fillRect(a, o + (e * c) / 4, s, c / 4 / 2.6);
        break;
      case `plaid`: {
        let e = $r(n, 16777215, 0.55);
        ((i.globalAlpha = 0.55),
          (i.fillStyle = Y(n)),
          i.fillRect(a, o + c * 0.1, s, c * 0.34),
          i.fillRect(a + s * 0.1, o, s * 0.34, c),
          (i.globalAlpha = 0.35),
          i.fillRect(a, o + c * 0.62, s, c * 0.12),
          i.fillRect(a + s * 0.62, o, s * 0.12, c),
          (i.globalAlpha = 0.9),
          (i.fillStyle = Y(e)),
          i.fillRect(a, o + c * 0.54, s, c * 0.025),
          i.fillRect(a + s * 0.54, o, s * 0.025, c),
          (i.fillStyle = Y($r(t, 0, 0.5))),
          i.fillRect(a, o + c * 0.26, s, c * 0.02),
          i.fillRect(a + s * 0.26, o, s * 0.02, c),
          (i.globalAlpha = 1),
          oi(i, a, o, s, c, 0.07));
        break;
      }
      case `check`: {
        let e = s / 4;
        ((i.globalAlpha = 0.5), (i.fillStyle = Y(n)));
        for (let t = 0; t < 4; t++)
          (i.fillRect(a + t * e, o, e / 2, c),
            i.fillRect(a, o + t * e, s, e / 2));
        i.globalAlpha = 1;
        break;
      }
      case `dots`: {
        i.fillStyle = Y(n);
        let e = s / 3;
        for (let t = 0; t < 3; t++)
          for (let n = 0; n < 3; n++) {
            let r = a + (n + 0.5 + (t % 2) * 0.5) * e,
              l = o + (t + 0.5) * e;
            ni(s, c, (t, n) => {
              (i.beginPath(),
                i.arc(r + t, l + n, e * 0.16, 0, Math.PI * 2),
                i.fill());
            });
          }
        break;
      }
      case `floral`: {
        let e = [n, $r(n, 16777215, 0.45), $r(n, 16724821, 0.4), 16773832],
          r = $r(3111482, t, 0.25);
        for (let e = 0; e < 16; e++) {
          let e = a + l() * s,
            t = o + l() * c,
            n = l() * Math.PI,
            u = s * (0.05 + l() * 0.05);
          ((i.fillStyle = Y(r)),
            ni(s, c, (r, a) => {
              (i.beginPath(),
                i.ellipse(e + r, t + a, u, u * 0.38, n, 0, Math.PI * 2),
                i.fill());
            }));
        }
        for (let t = 0; t < 9; t++) {
          let t = a + l() * s,
            n = o + l() * c,
            r = s * (0.06 + l() * 0.06),
            u = l() * 6,
            d = e[Math.floor(l() * e.length)];
          ni(s, c, (e, a) => {
            i.fillStyle = Y(d);
            for (let o = 0; o < 5; o++) {
              let s = u + (o * Math.PI * 2) / 5;
              (i.beginPath(),
                i.ellipse(
                  t + e + Math.cos(s) * r * 0.55,
                  n + a + Math.sin(s) * r * 0.55,
                  r * 0.52,
                  r * 0.36,
                  s,
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            }
            ((i.fillStyle = Y($r(d, 0, 0.35), 0.8)),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.22, 0, Math.PI * 2),
              i.fill(),
              (i.fillStyle = `rgba(255,236,150,0.95)`),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.11, 0, Math.PI * 2),
              i.fill());
          });
        }
        for (let t = 0; t < 22; t++) {
          let n = a + l() * s,
            r = o + l() * c;
          ((i.fillStyle = Y(e[t % 3], 0.9)),
            ni(s, c, (e, t) => {
              (i.beginPath(),
                i.arc(n + e, r + t, s * 0.012 + l() * s * 0.01, 0, Math.PI * 2),
                i.fill());
            }));
        }
        break;
      }
      case `camo`: {
        let e = [n, $r(t, 0, 0.35), $r(n, 14207136, 0.5)];
        for (let t = 0; t < 26; t++) {
          let n = a + l() * s,
            r = o + l() * c,
            u = s * (0.06 + l() * 0.08);
          ((i.fillStyle = Y(e[t % 3])),
            ni(s, c, (e, t) => {
              i.beginPath();
              for (let a = 0; a < 7; a++) {
                let o = (a / 7) * Math.PI * 2,
                  s = u * (0.6 + l() * 0.6),
                  c = n + e + Math.cos(o) * s * 1.4,
                  d = r + t + Math.sin(o) * s;
                a === 0 ? i.moveTo(c, d) : i.lineTo(c, d);
              }
              (i.closePath(), i.fill());
            }));
        }
        break;
      }
      case `denim`:
        oi(i, a, o, s, c, 0.22);
        for (let e = 0; e < 70; e++)
          ((i.fillStyle = `rgba(255,255,255,${(0.05 + l() * 0.1).toFixed(3)})`),
            i.fillRect(a + l() * s, o + l() * c, 1, 4 + l() * 12));
        break;
      case `knit`: {
        let e = s / 8;
        for (let t = 0; t < 8; t++) {
          ((i.fillStyle = `rgba(0,0,0,0.16)`),
            i.fillRect(a + t * e, o, 1.5, c));
          for (let n = 0; n < 8; n++) {
            let r = o + (n * c) / 8;
            ((i.strokeStyle = `rgba(255,255,255,0.18)`),
              (i.lineWidth = 1.4),
              i.beginPath(),
              i.moveTo(a + t * e + 2, r + 1),
              i.lineTo(a + t * e + e / 2, r + c / 8 - 2),
              i.lineTo(a + t * e + e - 2, r + 1),
              i.stroke());
          }
        }
        break;
      }
      default:
        oi(i, a, o, s, c, 0.05);
    }
  };
}
function oi(e, t, n, r, i, a) {
  (e.save(), (e.strokeStyle = `rgba(0,0,0,${a})`), (e.lineWidth = 1));
  for (let a = -i; a < r + i; a += 3)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.strokeStyle = `rgba(255,255,255,${a * 0.6})`;
  for (let a = -i + 1; a < r + i; a += 6)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.restore();
}
function si(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      (r.fillStyle = Y(e)),
      r.fillRect(i + o * 0.3, a, o * 0.4, s),
      (r.fillStyle = Y(ei(e, 0.78))),
      r.fillRect(i + o * 0.3, a, 1.5, s),
      r.fillRect(i + o * 0.7 - 1.5, a, 1.5, s));
    for (let e = 0; e < n; e++) {
      let c = a + ((e + 0.5) / n) * s;
      ((r.fillStyle = Y(ei(t, 0.7))),
        r.beginPath(),
        r.arc(i + o / 2, c + 0.8, o * 0.17, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = Y(t)),
        r.beginPath(),
        r.arc(i + o / 2, c, o * 0.16, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = `rgba(0,0,0,0.35)`));
      for (let [e, t] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        r.fillRect(
          i + o / 2 + e * o * 0.05 - 0.6,
          c + t * o * 0.05 - 0.6,
          1.3,
          1.3,
        );
    }
  };
}
function ci(e, t) {
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      (n.fillStyle = Y(e)),
      n.fillRect(r + a * 0.25, i, a * 0.5, o),
      (n.fillStyle = Y(t)));
    for (let e = 0; e < o; e += 3)
      n.fillRect(r + a * 0.4 + ((e / 3) % 2) * a * 0.08, i + e, a * 0.14, 2);
    ((n.fillStyle = Y(ei(t, 0.85))),
      n.fillRect(r + a * 0.38, i + o * 0.04, a * 0.24, o * 0.05));
  };
}
