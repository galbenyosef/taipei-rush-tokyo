// tokyo/assets/lab-DxV2kalD 03 — height
// Lines 380-450 of readable/tokyo/assets/lab-DxV2kalD.pretty.js (statement-aligned).
function P(e, s, p, m) {
  if (!p.length) return;
  let h = new l(0.36, 0.38, 0.03, 24),
    g = new r({ color: 2763824, roughness: 0.4, metalness: 0.1 }),
    _ = new u(h, g, p.length),
    v = new a();
  if (
    (p.forEach((e, t) =>
      _.setMatrixAt(t, v.makeTranslation(e.x, e.y - 0.005, e.z)),
    ),
    (_.receiveShadow = !0),
    s.add(_),
    !m)
  )
    return;
  let y = Math.ceil(p.length / 4),
    b = document.createElement(`canvas`);
  ((b.width = 1024), (b.height = 64 * y));
  let x = b.getContext(`2d`);
  ((x.textAlign = `center`), (x.textBaseline = `middle`));
  let S = [],
    C = [],
    w = [];
  p.forEach((e, t) => {
    let n = (t % 4) * 256,
      r = Math.floor(t / 4) * 64;
    ((x.fillStyle =
      e.kind === `rbx` ? `rgba(10,30,24,0.8)` : `rgba(12,14,18,0.78)`),
      x.beginPath(),
      x.roundRect(n + 6, r + 6, 244, 52, 14),
      x.fill(),
      (x.fillStyle = e.kind === `rbx` ? `#8dffc8` : `#ffd98a`),
      (x.font = `800 24px ${f}`),
      x.fillText(e.label.zh, n + 128, r + 25.6),
      (x.fillStyle = `#d8dde6`),
      (x.font = `600 13px ${f}`),
      x.fillText(e.label.en, n + 128, r + 47.36));
    let i = 0.78,
      a = (64 / 256) * i,
      o = e.y + e.height + 0.24,
      s = S.length / 3,
      c = e.x + (i / 2) * 1,
      l = e.x - (i / 2) * 1;
    S.push(
      c,
      o - a / 2,
      e.z,
      l,
      o - a / 2,
      e.z,
      l,
      o + a / 2,
      e.z,
      c,
      o + a / 2,
      e.z,
    );
    let u = n / b.width,
      d = (n + 256) / b.width,
      p = 1 - (r + 64) / b.height,
      m = 1 - r / b.height;
    (C.push(u, p, d, p, d, m, u, m), w.push(s, s + 1, s + 2, s, s + 2, s + 3));
  });
  let T = new c();
  (T.setAttribute(`position`, new o(S, 3)),
    T.setAttribute(`uv`, new o(C, 2)),
    T.setIndex(w));
  let E = new d(b);
  ((E.colorSpace = i),
    s.add(new n(T, new t({ map: E, transparent: !0, depthWrite: !1 }))));
}
