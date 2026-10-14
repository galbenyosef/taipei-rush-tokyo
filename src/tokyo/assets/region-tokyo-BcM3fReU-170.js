// tokyo/assets/region-tokyo-BcM3fReU 170 — setmaterial
// Lines 71245-71592 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function rV(e) {
  (X(e, 3824174),
    e.setMaterial(0.95, 0, 0, 0),
    hB(
      e,
      0,
      0,
      [
        [0.3, 0],
        [0.48, 0.18],
        [0.44, 0.42],
        [0.25, 0.58],
        [0.02, 0.63],
      ],
      7,
    ),
    X(e, 13130346),
    e.setMaterial(0.9, 0, 0, 0));
  for (let [t, n] of [
    [0.2, 0.25],
    [-0.25, 0.15],
    [0.05, -0.3],
  ])
    fB(e, t, 0.5, n, 0.05, 0.04, 0.05);
}
function iV(e) {
  (X(e, 6974052),
    e.setMaterial(0.6, 0.3, 0, 0),
    Z(e, -0.015, 0, -0.015, 0.015, 0.42, 0.015),
    X(e, 16777215),
    e.setMaterial(0.6, 0, 0, 0),
    gB(e, 0, 0.44, 0.02, 0.4, 0.15, yB(`bedSign`), 0, 0.3));
}
function aV(e) {
  (X(e, 11578528),
    e.setMaterial(0.85, 0, 0, 0),
    hB(
      e,
      0,
      0,
      [
        [6.25, 0],
        [6.25, 0.42],
        [6.15, 0.47],
        [5.8, 0.47],
        [5.75, 0.3],
      ],
      24,
      yB(`stone`),
    ),
    X(e, 4086372),
    e.setMaterial(0.08, 0.2, 0, 0),
    hB(
      e,
      0,
      0,
      [
        [5.75, 0.3],
        [0.001, 0.3],
      ],
      24,
    ),
    X(e, 15266034),
    e.setMaterial(0.3, 0, 0.08, 16),
    mB(e, 0, 0, 0.1, 0.5, 0.55, 10, 0.5),
    hB(
      e,
      0,
      0,
      [
        [0.28, 0.5],
        [0.16, 2],
        [0.07, 3.6],
        [0.001, 3.9],
      ],
      8,
    ),
    hB(
      e,
      0,
      0,
      [
        [0.9, 0.5],
        [0.55, 0.9],
        [0.3, 1.2],
        [0.001, 1.25],
      ],
      10,
    ));
  for (let t = 0; t < 10; t++) {
    let n = (t / 10) * Math.PI * 2;
    hB(
      e,
      Math.cos(n) * 3.2,
      Math.sin(n) * 3.2,
      [
        [0.07, 0.3],
        [0.04, 1],
        [0.001, 1.25],
      ],
      5,
    );
  }
}
function oV(e) {
  (e.setMaterial(0.7, 0.2, 0, 16), X(e, 8160394));
  let t = 1.8,
    n = 1.55;
  Z(e, -1.6, 0.05, -1.59, 1.6, t, -1.51);
  for (let r of [-1.55, n]) Z(e, r - 0.04, 0.05, -1.55, r + 0.04, t, 1);
  X(e, 4870230);
  for (let [t, n] of [
    [-1.55, -1.55],
    [1.55, -1.55],
    [-1.55, 1],
    [1.55, 1],
  ])
    Z(e, t - 0.08, 0, n - 0.08, t + 0.08, 0.06, n + 0.08);
  (Z(e, -1.62, t, -1.61, 1.62, 1.85, -1.49),
    X(e, 16777215),
    e.setMaterial(0.6, 0, 0.03, 17));
  let r = yB(`smokeSign`);
  (gB(e, 0, 1.45, -1.5, 1.1, 0.42, r),
    gB(e, 0, 1.45, -1.6, 1.1, 0.42, r, Math.PI),
    gB(e, 1.6, 1.45, -0.3, 1.1, 0.42, r, Math.PI / 2),
    gB(e, -1.6, 1.45, -0.3, 1.1, 0.42, r, -Math.PI / 2),
    X(e, 2779706),
    e.setMaterial(0.6, 0, 0, 16),
    Z(e, -1.62, 1.6400000000000001, -1.61, 1.62, 1.78, -1.49));
  for (let t of [-1.55, n])
    Z(e, t - 0.06, 1.6400000000000001, -1.55, t + 0.06, 1.78, 1);
  (X(e, 12106942),
    e.setMaterial(0.3, 0.8, 0, 16),
    mB(e, 0, -0.2, 0, 0.05, 0.22, 8),
    mB(e, 0, -0.2, 0.05, 0.7, 0.06, 6),
    mB(e, 0, -0.2, 0.7, 0.95, 0.2, 10),
    X(e, 2763306),
    mB(e, 0, -0.2, 0.95, 0.96, 0.17, 10));
}
function sV(e) {
  (X(e, 2763306),
    e.setMaterial(0.7, 0.2, 0, 16),
    Z(e, -0.22, 0, -0.18, 0.22, 0.07, 0.18),
    mB(e, 0, 0, 0.07, 1.6, 0.025, 5),
    X(e, 16777215),
    e.setMaterial(0.6, 0, 0, 16));
  let t = yB(`kyaku`);
  (gB(e, 0, 1.22, 0.035, 0.42, 0.68, t),
    gB(e, 0, 1.22, -0.035, 0.42, 0.68, t, Math.PI),
    X(e, 13684940),
    Z(e, -0.22, 0.86, -0.03, 0.22, 1.58, 0.03));
}
function cV(e, t) {
  (X(e, 1052692), e.setMaterial(0.35, 0.1, 0, 0));
  let n = t ? 0.07 : 0;
  (pB(e, 0, 0.17, -0.12, 0, 0.19 - n * 0.5, 0.1, 0.075, 6, 0.06, !0, !0),
    pB(e, 0, 0.21 - n, 0.13, 0, 0.22 - n, 0.2, 0.05, 5, 0.045, !0, !0),
    X(e, 1710622),
    pB(e, 0, 0.21 - n, 0.2, 0, 0.2 - n * 1.4, 0.27, 0.022, 4, 0.004, !0, !1),
    X(e, 789520),
    Z(e, -0.05, 0.14, -0.26, 0.05, 0.17, -0.1));
  for (let t of [-0.035, 0.035]) pB(e, t, 0, 0, t, 0.13, -0.01, 0.008, 3);
}
function lV(e) {
  (X(e, 12896460),
    e.setMaterial(0.35, 0.7, 0, 16),
    Z(e, -0.18, 0, -0.12, 0.18, 0.04, 0.12));
  for (let t of [-0.15, 0.15])
    Z(e, t - 0.015, 0.04, -0.015, t + 0.015, 0.95, 0.015);
  (Z(e, -0.18, 0.95, -0.06, 0.18, 1.05, 0.06),
    X(e, 15265522),
    e.setMaterial(0.15, 0, 0, 16),
    Z(e, -0.12, 0.25, -0.03, 0.12, 0.95, 0.03),
    X(e, 16777215),
    e.setMaterial(0.6, 0, 0, 16),
    gB(e, 0, 1, 0.065, 0.34, 0.09, yB(`kasa`)));
}
function uV(e) {
  (X(e, 16777215),
    e.setMaterial(0.5, 0, 0, 0),
    dB(
      e,
      -1.35,
      0.02,
      1.8,
      1.35,
      0.02,
      1.8,
      1.35,
      0.02,
      -1.8,
      -1.35,
      0.02,
      -1.8,
      yB(`tarpBlue`),
    ),
    X(e, 2777776),
    e.setMaterial(0.5, 0.1, 0, 0),
    Z(e, 0.8, 0.02, -1.5, 1.2, 0.32, -1.2),
    X(e, 16053488),
    Z(e, 0.8, 0.32, -1.5, 1.2, 0.36, -1.2),
    X(e, 9067066),
    Z(e, -1.1, 0.02, -1.55, -0.75, 0.25, -1.3),
    X(e, 1710622));
  for (let t = 0; t < 4; t++)
    Z(e, -1 + t * 0.32, 0, 1.9, -0.9 + t * 0.32, 0.06, 2.15);
}
function dV(e) {
  (X(e, 16777215),
    e.setMaterial(0.95, 0, 0, 0),
    dB(
      e,
      -1,
      0.015,
      1,
      1,
      0.015,
      1,
      1,
      0.015,
      -1,
      -1,
      0.015,
      -1,
      yB(`leaves`),
    ));
}
function fV(e, t) {
  (X(e, 16777215),
    e.setMaterial(0.7, 0, 0, 16),
    gB(e, 0, 1.45, 0.02, 0.36, 0.135, yB(t)),
    X(e, 3811866),
    pB(e, -0.12, 1.52, 0.015, 0, 1.62, 0.01, 0.004, 3),
    pB(e, 0.12, 1.52, 0.015, 0, 1.62, 0.01, 0.004, 3));
}
function pV(e, t) {
  (X(e, 16777215), e.setMaterial(0.75, 0, 0, 16));
  let n = yB(t);
  (gB(e, 0, 0.45, 0.13, 0.5, 0.86, n, 0, 0.16),
    gB(e, 0, 0.45, -0.13, 0.5, 0.86, n, Math.PI, 0.16),
    X(e, 5913116),
    Z(e, -0.27, 0.84, -0.03, 0.27, 0.9, 0.03));
}
function mV(e, t) {
  (X(e, 16777215),
    e.setMaterial(0.9, 0, 0, 16),
    gB(e, 0, -0.42, 0.01, 1.6, 0.82, yB(t)),
    gB(e, 0, -0.42, -0.01, 1.6, 0.82, yB(t), Math.PI),
    X(e, 4864554),
    e.setMaterial(0.6, 0, 0, 16),
    pB(e, -0.85, 0, 0, 0.85, 0, 0, 0.018, 5));
}
function hV(e) {
  (X(e, 16777215),
    e.setMaterial(0.55, 0.35, 0, 16),
    dB(e, -0.5, 0, 0, 0.5, 0, 0, 0.5, 1, 0, -0.5, 1, 0, yB(`shutter`)),
    X(e, 9079948),
    Z(e, -0.5, 0.94, -0.02, 0.5, 1, 0.06));
}
function gV(e) {
  let t = [];
  for (let e of xB) t.push(bB(e.name, (t) => wB(t, e)));
  for (let e = 0; e < 3; e++) t.push(bB(`st-closed-${e}`, (t) => TB(t, e)));
  t.push(
    bB(`foam-stack`, EB),
    bB(`cardboard`, DB),
    bB(`gate-ameyoko`, (t) => OB(t, e)),
  );
  for (let e = 0; e < 6; e++) t.push(bB(`torii-${e}`, (t) => MB(t, e)));
  t.push(bB(`inari`, (e) => jB(e, 0)));
  for (let e = 0; e < 3; e++) t.push(bB(`jizo-${e}`, (t) => PB(t, e)));
  t.push(
    bB(`gomi-sign`, FB),
    bB(`gomi-pile`, IB),
    bB(`gomi-box`, (e) => LB(e, !1)),
    bB(`gomi-box-full`, (e) => LB(e, !0)),
    bB(`gomi-net`, RB),
  );
  for (let e = 0; e < cz.length; e++)
    t.push(bB(`lantern-${e}`, (t) => zB(t, 0, 0, 0, 0.17, 0.48, e)));
  (VB().forEach((e, n) =>
    t.push(bB(`festoon-red-${n}`, (t) => BB(t, e, 7, 0.115))),
  ),
    t.push(bB(`festoon-matsuri`, (e) => BB(e, 4, 9, 0.11))),
    t.push(
      bB(`festoon-red-far`, (e) => BB(e, [yB(`festPlain`)], 7, 0.115, !0)),
      bB(`festoon-matsuri-far`, (e) => BB(e, 4, 9, 0.11, !0)),
    ),
    t.push(
      bB(`park-bench`, ZB),
      bB(`park-lamp`, QB),
      bB(`park-bins`, $B),
      bB(`park-drink`, eV),
      bB(`park-map`, tV),
      bB(`park-fence`, nV),
      bB(`park-shrub`, rV),
      bB(`park-bed-sign`, iV),
      bB(`park-fountain`, aV, 4096),
    ));
  for (let e of [3, 4, 5, 6, 7]) t.push(bB(`nobori-${e}`, (t) => HB(t, e)));
  (t.push(
    bB(`crate-table`, UB),
    bB(`crate-stool-1`, (e) => WB(e, 1)),
    bB(`crate-stool-2`, (e) => WB(e, 2)),
    bB(`menu-board`, GB),
  ),
    t.push(bB(`yatai-oden`, KB)));
  for (let e = 0; e < lz.length; e++) t.push(bB(`yatai-${e}`, (t) => qB(t, e)));
  (t.push(bB(`hokoten-barrier`, JB), bB(`matsuri-banner`, YB)),
    t.push(
      bB(`smoking-area`, oV),
      bB(`kyakuhiki-sign`, sV),
      bB(`crow-0`, (e) => cV(e, 0)),
      bB(`crow-1`, (e) => cV(e, 1)),
    ),
    t.push(
      bB(`kasa-stand`, lV),
      bB(`hanami-tarp`, uV),
      bB(`leaf-litter`, dV),
      bB(`shutter-down`, hV),
    ));
  for (let e of [`plateOpen`, `plateJunbi`, `plateTeikyu`, `plateKyugyo`])
    t.push(bB(`plate-${e.slice(5).toLowerCase()}`, (t) => fV(t, e)));
  for (let e of [0, 1, 2, 3])
    t.push(
      bB(`aboard-${e}`, (t) => pV(t, `board${e}`)),
      bB(`noren-${e}`, (t) => mV(t, `noren${e}`)),
    );
  return t;
}
var _V = 3,
  vV = {
    ALWAYS: 0,
    GOMI_OUT: 1,
    GOMI_IN: 2,
    HOKOTEN: 3,
    MATSURI: 4,
    SAKURA: 5,
    NIGHT_YATAI: 6,
    FESTIVAL_STALLS: 7,
    MARKET_OPEN: 8,
    MARKET_CLOSED: 9,
    RAIN: 10,
    LEAVES: 11,
    SUMMER: 12,
    HANAMI: 13,
  },
  yV = new Float32Array(16);
