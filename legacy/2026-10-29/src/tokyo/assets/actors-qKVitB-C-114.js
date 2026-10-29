// tokyo/assets/actors-qKVitB-C 114 — push
// Lines 53293-53389 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function VD(e, t) {
  let n = e.attributes.position.count,
    r = new Me(t),
    i = new Float32Array(n * 3);
  for (let e = 0; e < n; e++) i.set([r.r, r.g, r.b], e * 3);
  e.setAttribute(`color`, new P(i, 3));
  let a = e.index ? e.toNonIndexed() : e;
  if (!a.attributes.uv)
    a.setAttribute(
      `uv`,
      new P(new Float32Array(a.attributes.position.count * 2).fill(-1), 2),
    );
  else {
    let e = a.attributes.uv;
    for (let t = 0; t < e.count; t++) e.setXY(t, -1, -1);
  }
  return a;
}
function HD() {
  let e = [];
  for (let t of [-1, 1]) {
    for (let n of [-0.5, 0.5]) {
      let r = new F(0.06, 1.25, 0.06);
      (r.rotateX(n), r.translate(t * 1.12, 0.55, 0), e.push(VD(r, 2763824)));
    }
    let n = new F(0.08, 0.05, 1.1);
    (n.translate(t * 1.12, 0.03, 0), e.push(VD(n, 2763824)));
  }
  for (let t of [0.62, 0.95])
    for (let n = 0; n < 8; n++) {
      let r = new F(0.3, 0.16, 0.05);
      (r.translate(-1.05 + n * 0.3, t, 0),
        e.push(VD(r, n % 2 == 0 ? 14165546 : 16053488)));
    }
  return An(e);
}
function UD() {
  let e = [],
    t = new F(0.42, 0.05, 0.42);
  (t.translate(0, 0.025, 0), e.push(VD(t, 1579291)));
  let n = new w(0.035, 0.17, 0.66, 10, 1, !0);
  (n.translate(0, 0.38, 0), e.push(VD(n, 16734738)));
  for (let [t, n, r] of [
    [0.5, 0.098, 0.112],
    [0.32, 0.128, 0.142],
  ]) {
    let i = new w(n, r, 0.08, 10, 1, !0);
    (i.translate(0, t, 0), e.push(VD(i, 16185078)));
  }
  return An(e);
}
function WD() {
  let e = [],
    t = new g(1.75, 1.08);
  (t.rotateY(Math.PI), t.translate(0, 1.2, -0.035), t.rotateX(0.16));
  let n = new Float32Array(t.attributes.position.count * 3).fill(1);
  (t.setAttribute(`color`, new P(n, 3)), e.push(t.toNonIndexed()));
  let r = new F(1.82, 1.14, 0.05);
  (r.translate(0, 1.2, 0), r.rotateX(0.16), e.push(VD(r, 1908775)));
  for (let t of [-1, 1]) {
    let n = new F(0.05, 1.4, 0.05);
    (n.rotateX(-0.42),
      n.translate(t * 0.75, 0.64, 0.42),
      e.push(VD(n, 2763824)));
    let r = new F(0.05, 1.3, 0.05);
    (r.rotateX(0.12),
      r.translate(t * 0.75, 0.62, 0.05),
      e.push(VD(r, 2763824)));
  }
  let i = new w(0.07, 0.07, 0.1, 8);
  return (i.translate(0, 1.84, 0.03), e.push(VD(i, 13836320)), An(e));
}
function GD() {
  let [e, t] = ut(256, 160);
  ((t.fillStyle = `#0c0d10`),
    t.fillRect(0, 0, 256, 160),
    (t.fillStyle = `#12151c`),
    t.fillRect(6, 6, 244, 148),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    JC.paint?.(`roadblock`, t) ||
      ((t.shadowColor = `#ff2a1a`),
      (t.shadowBlur = 10),
      (t.fillStyle = `#ff3b24`),
      (t.font = `900 52px ${st}`),
      t.fillText(`警察臨檢`, 128, 48),
      (t.shadowBlur = 6),
      (t.fillStyle = `#ffd23a`),
      (t.font = `800 30px ${st}`),
      t.fillText(`停車受檢`, 128, 100),
      (t.shadowBlur = 0),
      (t.fillStyle = `#e8e8e8`),
      (t.font = `700 17px ${st}`),
      t.fillText(`POLICE CHECKPOINT`, 128, 136)));
  let n = yt(e);
  return ((n.name = `police-roadblock-sign`), Ct(n), n);
}
