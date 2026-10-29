// tokyo/assets/region-tokyo-A7LxHjud 334 — push
// Lines 120298-120387 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function xY(e) {
  let t = [];
  for (let e of lY) t.push(cY(e.name, (t) => Mke(t, e)));
  for (let e = 0; e < 3; e++) t.push(cY(`st-closed-${e}`, (t) => Nke(t, e)));
  t.push(
    cY(`foam-stack`, Pke),
    cY(`cardboard`, Fke),
    cY(`gate-ameyoko`, (t) => Ike(t, e)),
  );
  for (let e = 0; e < 6; e++) t.push(cY(`torii-${e}`, (t) => Rke(t, e)));
  t.push(cY(`inari`, (e) => Lke(e, 0)));
  for (let e = 0; e < 3; e++) t.push(cY(`jizo-${e}`, (t) => zke(t, e)));
  t.push(
    cY(`gomi-sign`, Bke),
    cY(`gomi-pile`, Vke),
    cY(`gomi-box`, (e) => hY(e, !1)),
    cY(`gomi-box-full`, (e) => hY(e, !0)),
    cY(`gomi-net`, Hke),
  );
  for (let e = 0; e < bJ.length; e++)
    t.push(cY(`lantern-${e}`, (t) => gY(t, 0, 0, 0, 0.17, 0.48, e)));
  (Uke().forEach((e, n) =>
    t.push(cY(`festoon-red-${n}`, (t) => _Y(t, e, 7, 0.115))),
  ),
    t.push(cY(`festoon-matsuri`, (e) => _Y(e, 4, 9, 0.11))),
    t.push(
      cY(`festoon-red-far`, (e) => _Y(e, [sY(`festPlain`)], 7, 0.115, !0)),
      cY(`festoon-matsuri-far`, (e) => _Y(e, 4, 9, 0.11, !0)),
    ),
    t.push(
      cY(`park-bench`, Zke),
      cY(`park-lamp`, Qke),
      cY(`park-bins`, $ke),
      cY(`park-drink`, eAe),
      cY(`park-map`, tAe),
      cY(`park-fence`, nAe),
      cY(`park-shrub`, rAe),
      cY(`park-bed-sign`, iAe),
      cY(`park-fountain`, aAe, 4096),
    ));
  for (let e of [3, 4, 5, 6, 7]) t.push(cY(`nobori-${e}`, (t) => Wke(t, e)));
  (t.push(
    cY(`crate-table`, Gke),
    cY(`crate-stool-1`, (e) => vY(e, 1)),
    cY(`crate-stool-2`, (e) => vY(e, 2)),
    cY(`menu-board`, Kke),
  ),
    t.push(cY(`yatai-oden`, qke)));
  for (let e = 0; e < xJ.length; e++)
    t.push(cY(`yatai-${e}`, (t) => Jke(t, e)));
  (t.push(cY(`hokoten-barrier`, Yke), cY(`matsuri-banner`, Xke)),
    t.push(
      cY(`smoking-area`, oAe),
      cY(`kyakuhiki-sign`, sAe),
      cY(`crow-0`, (e) => bY(e, 0)),
      cY(`crow-1`, (e) => bY(e, 1)),
    ),
    t.push(
      cY(`kasa-stand`, cAe),
      cY(`hanami-tarp`, lAe),
      cY(`leaf-litter`, uAe),
      cY(`shutter-down`, mAe),
    ));
  for (let e of [`plateOpen`, `plateJunbi`, `plateTeikyu`, `plateKyugyo`])
    t.push(cY(`plate-${e.slice(5).toLowerCase()}`, (t) => dAe(t, e)));
  for (let e of [0, 1, 2, 3])
    t.push(
      cY(`aboard-${e}`, (t) => fAe(t, `board${e}`)),
      cY(`noren-${e}`, (t) => pAe(t, `noren${e}`)),
    );
  return t;
}
var SY = 3,
  CY = {
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
  wY = new Float32Array(16);
