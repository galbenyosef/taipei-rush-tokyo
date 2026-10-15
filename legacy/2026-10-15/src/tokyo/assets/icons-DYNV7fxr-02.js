// tokyo/assets/icons-DYNV7fxr 02 — shadowcolor
// Lines 339-406 of readable/tokyo/assets/icons-DYNV7fxr.pretty.js (statement-aligned).
function f(e) {
  let t = `arrow|${e}`,
    n = c.get(t);
  if (n) return n;
  ((n = document.createElement(`canvas`)), (n.width = n.height = e));
  let r = n.getContext(`2d`);
  r.translate(e / 2, e / 2);
  let i = e * 0.42;
  return (
    (r.shadowColor = `rgba(0,0,0,.6)`),
    (r.shadowBlur = e * 0.1),
    r.beginPath(),
    r.moveTo(0, -i),
    r.lineTo(i * 0.72, i * 0.78),
    r.lineTo(0, i * 0.38),
    r.lineTo(-i * 0.72, i * 0.78),
    r.closePath(),
    (r.fillStyle = `#ffffff`),
    r.fill(),
    (r.shadowColor = `transparent`),
    (r.lineWidth = e * 0.05),
    (r.strokeStyle = `#141824`),
    r.stroke(),
    c.set(t, n),
    n
  );
}
var p = {
    "7-TWELVE": [`#f47b20`, `#00924a`, `#e4002b`],
    FamilyMark: [`#1a6fc9`, `#ffffff`, `#1fa64a`],
    "Hi-Lite": [`#e60012`, `#ffffff`, `#f7a600`],
  },
  m = (e, t) => (p[e] = t);
function h(e, t) {
  let n = `shop:${e}|${t}`,
    r = c.get(n);
  if (r) return r;
  let i = p[e] ?? p[`7-TWELVE`];
  ((r = document.createElement(`canvas`)), (r.width = r.height = t));
  let a = r.getContext(`2d`);
  a.translate(t / 2, t / 2);
  let o = t * 0.37;
  ((a.shadowColor = `rgba(0,0,0,.55)`),
    (a.shadowBlur = t * 0.08),
    (a.fillStyle = `#ffffff`),
    a.beginPath(),
    d(a, -o, -o, o * 2, o * 2, o * 0.35),
    a.fill(),
    (a.shadowColor = `transparent`),
    (a.lineWidth = Math.max(1, t * 0.045)),
    (a.strokeStyle = `rgba(8,10,16,.85)`),
    a.stroke());
  let s = o * 1.35,
    l = o * 0.34;
  return (
    i.forEach((e, t) => {
      ((a.fillStyle = e === `#ffffff` ? `#d9dde4` : e),
        a.fillRect(
          -s / 2,
          -l * 1.5 + t * l,
          s,
          l * (e === `#ffffff` ? 0.4 : 1),
        ));
    }),
    c.set(n, r),
    r
  );
}
