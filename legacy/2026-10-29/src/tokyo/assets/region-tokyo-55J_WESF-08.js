// tokyo/assets/region-tokyo-55J_WESF 08 — rotate
// Lines 2590-2637 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Yr(e, t, n, r, i, a, o, s = Mr(), c = `bold`) {
  (Jr(e, t, i, a, s, c),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
function Xr(e, t, n, r, i, a, o, s = Mr(), c = `bold`) {
  let l = Ar(t.trim());
  if (!l.length) return;
  let u = i - r,
    d = l.reduce(
      (e, t) =>
        e +
        (t.text
          ? t.rotate && t.text.length > 1
            ? t.text.length * 0.55
            : 1
          : 0.5),
      0,
    ),
    f = Math.min(a * 1.05, u / d),
    p = Math.max(5, f * 0.92);
  ((e.fillStyle = o), (e.textAlign = `center`), (e.textBaseline = `middle`));
  let m = r + (u - f * d) / 2;
  for (let t of l) {
    let r = t.text
        ? t.rotate && t.text.length > 1
          ? t.text.length * 0.55
          : 1
        : 0.5,
      i = m + (f * r) / 2;
    ((m += f * r),
      t.text &&
        ((e.font = `${c} ${t.tcy ? p * 0.62 : p}px ${s}`),
        t.rotate
          ? (e.save(),
            e.translate(n, i),
            e.rotate(Math.PI / 2),
            e.fillText(t.text, 0, 0),
            e.restore())
          : e.fillText(
              t.text,
              n + (t.shift ? p * 0.12 : 0),
              i - (t.shift ? p * 0.12 : 0),
            )));
  }
}
