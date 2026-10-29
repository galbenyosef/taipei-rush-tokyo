// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 06 — push
// Lines 1390-1617 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
function be(e, i, a) {
  let o = e.plan;
  (a.uniques.push({
    name: `ameyoko-sign`,
    write: (e) => _e(e, i),
    cx: k.x,
    cz: A,
    range: 420,
  }),
    a.circles.push({ x: k.west - 0.3, z: A, r: 0.14, y0: 0, y1: 7 }),
    a.uniques.push({
      name: `panda-hiroba`,
      write: (e) => ve(e, i),
      cx: (j.x0 + j.x1) / 2,
      cz: (j.z0 + j.z1) / 2,
      range: 300,
    }));
  let s = j.x0 + 2.4,
    c = (j.z0 + j.z1) / 2 + 2.6;
  (a.instances.push({
    model: `teppanda`,
    x: s,
    y: 0.17,
    z: c,
    fx: -1,
    fz: 0,
    range: 150,
  }),
    a.circles.push({ x: s, z: c, r: 0.6, y0: 0, y1: 2 }),
    a.boxes.push({
      minX: j.x0 + 0.4,
      minZ: j.z0 + 0.3,
      maxX: j.x1 - 0.4,
      maxZ: j.z0 + 1.1,
      y0: 0,
      y1: 1,
      tag: `prop`,
    }),
    a.boxes.push({
      minX: j.x1 - 1.1,
      minZ: j.z0 + 1.4,
      maxX: j.x1 - 0.3,
      maxZ: j.z1 - 0.6,
      y0: 0,
      y1: 1,
      tag: `prop`,
    }));
  let l = o.roads.find((e) => e.id === `kasuga`),
    u = o.dataset.sidewalkHeight ?? 0.15;
  if (l) {
    let e = r(o),
      i = e.nodesOf(l),
      s = new t(n(`ame-jewel`, 1));
    for (let t = 0; t + 1 < i.length; t++)
      for (let n of [-1, 1]) {
        let r = e.primaryLights(l, i[t], i[t + 1], n);
        if (r && r.kind === `tall`)
          for (let e of r.ts) {
            if (e < N.x0 || e > N.x1) continue;
            let t = l.at + n * (l.halfWidth + 0.55);
            (a.instances.push({
              model: `jewel-flag-${Math.floor(s.next() * 2)}`,
              x: e,
              y: u,
              z: t,
              fx: 0,
              fz: -n,
              range: 240,
            }),
              a.circles.push({ x: e, z: t, r: 0.12, y0: 0, y1: 6.6 }));
          }
      }
    for (let e of [-96, -58, -22, 12]) {
      let t = l.at + l.halfTotal - 0.9;
      a.instances.push({
        model: `kaitori`,
        x: e,
        y: u,
        z: t,
        fx: 0,
        fz: -1,
        range: 110,
        when: (e) => e.wd !== 0 && e.h >= 10 && e.h < 18,
      });
    }
  }
}
var G = 3,
  K = 4.1;
function xe(e) {
  (e.need(`dp-glass`, 96, 160, Se),
    e.need(`dp-crown`, 256, 96, Ce),
    e.need(`dp-show`, 256, 128, we),
    e.need(`dp-door`, 192, 128, Te),
    e.need(`dp-stone`, 128, 128, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#d8ccb0`);
      for (let a = 1; a < 4; a++) y(e, t, n + (i * a) / 4, r, 1, `#c4b89c`);
      g(e, 52, t, n, r, i, 300, 1.6, [`#bcae90`, `#e8dcc2`, `#a89a7e`], 0.3);
    }),
    e.need(`dp-vsign`, 96, 384, Ee),
    e.need(`dp-roof`, 512, 96, De));
}
function Se(e, t, n, r, i) {
  y(e, t, n, r, i, `#2e3a44`);
  for (let a = 0; a < 3; a++)
    y(
      e,
      t + r * (0.03 + a * 0.33),
      n + i * 0.03,
      r * 0.3,
      i * 0.94,
      [`#3a4a56`, `#34424c`, `#40505c`][a],
    );
  (y(e, t, n + i * 0.46, r, i * 0.03, `#1e262c`),
    (e.globalAlpha = 0.14),
    (e.fillStyle = `#ffffff`),
    e.fillRect(t + r * 0.1, n, r * 0.08, i),
    (e.globalAlpha = 1));
}
function Ce(e, t, n, r, i) {
  y(e, t, n, r, i, `#d2c4a4`);
  for (let a = 0; a < 8; a++) {
    let o = t + (r * (a + 0.5)) / 8;
    ((e.fillStyle = `#b8a888`),
      e.beginPath(),
      e.moveTo(o - r * 0.05, n + i * 0.75),
      e.lineTo(o, n + i * 0.2),
      e.lineTo(o + r * 0.05, n + i * 0.75),
      e.fill(),
      y(e, o - r * 0.008, n + i * 0.1, r * 0.016, i * 0.8, `#a8987a`));
  }
  (y(e, t, n + i * 0.85, r, i * 0.15, `#b0a080`),
    y(e, t, n, r, i * 0.06, `#b0a080`));
}
function we(e, t, n, r, i) {
  b(e, t, n, r, i, `#f4ece0`, 0.6);
  for (let a = 0; a < 3; a++) {
    let o = t + r * (0.2 + a * 0.3);
    (y(
      e,
      o - r * 0.04,
      n + i * 0.3,
      r * 0.08,
      i * 0.45,
      [`#8a3a2a`, `#3a4a6a`, `#c8a060`][a],
    ),
      (e.fillStyle = `#e8d8c8`),
      e.beginPath(),
      e.arc(o, n + i * 0.24, r * 0.03, 0, Math.PI * 2),
      e.fill(),
      y(e, o - r * 0.012, n + i * 0.75, r * 0.024, i * 0.12, `#c8c0b0`));
  }
  (y(e, t, n + i * 0.88, r, i * 0.12, `#c8b88a`),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#b08a3a`),
    (e.lineWidth = 4),
    e.strokeRect(t + 2, n + 2, r - 4, i - 4));
}
function Te(e, t, n, r, i) {
  b(e, t, n, r, i, `#f0e4cc`, 0.62);
  for (let a = 0; a < 4; a++) {
    let o = t + r * (0.06 + a * 0.235);
    ((e.globalAlpha = 1),
      (e.strokeStyle = `#b08a3a`),
      (e.lineWidth = 5),
      e.strokeRect(o, n + i * 0.18, r * 0.2, i * 0.8),
      y(e, o + r * 0.09, n + i * 0.5, r * 0.02, i * 0.14, `#b08a3a`));
  }
  (y(e, t, n, r, i * 0.14, `#8a1a1a`),
    h(
      e,
      v(`ameyoko.depato.name`),
      t + r / 2,
      n + i * 0.07,
      r * 0.5,
      i * 0.11,
      `#f4e8c8`,
      `900`,
    ));
}
function Ee(e, t, n, r, i) {
  (b(e, t, n, r, i, `#b81c1c`, 0.62),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#f4e8c8`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(t + r / 2, n + i * 0.08, r * 0.3, 0, Math.PI * 2),
    e.stroke(),
    (e.fillStyle = `#f4e8c8`),
    e.beginPath(),
    e.ellipse(t + r / 2, n + i * 0.08, r * 0.08, r * 0.22, 0.5, 0, Math.PI * 2),
    e.fill(),
    a(
      e,
      v(`ameyoko.depato.short`),
      t + r / 2,
      n + i * 0.17,
      n + i * 0.96,
      r * 0.66,
      `#ffffff`,
      void 0,
      `900`,
    ));
}
function De(e, t, n, r, i) {
  (b(e, t, n, r, i, `#ffffff`, 0.6),
    y(e, t, n + i * 0.86, r, i * 0.14, `#b81c1c`),
    h(
      e,
      v(`ameyoko.depato.short`),
      t + r * 0.42,
      n + i * 0.45,
      r * 0.5,
      i * 0.68,
      `#b81c1c`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.depato.latin`),
      t + r * 0.82,
      n + i * 0.48,
      r * 0.28,
      i * 0.3,
      `#b81c1c`,
      `800`,
    ));
}
