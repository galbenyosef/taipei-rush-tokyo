// tokyo/assets/region-tokyo-55J_WESF 334 — push
// Lines 120207-120296 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function bY(e) {
  let t = [];
  for (let e of cY) t.push(sY(e.name, (t) => vke(t, e)));
  for (let e = 0; e < 3; e++) t.push(sY(`st-closed-${e}`, (t) => yke(t, e)));
  t.push(
    sY(`foam-stack`, bke),
    sY(`cardboard`, xke),
    sY(`gate-ameyoko`, (t) => Ske(t, e)),
  );
  for (let e = 0; e < 6; e++) t.push(sY(`torii-${e}`, (t) => wke(t, e)));
  t.push(sY(`inari`, (e) => Cke(e, 0)));
  for (let e = 0; e < 3; e++) t.push(sY(`jizo-${e}`, (t) => Tke(t, e)));
  t.push(
    sY(`gomi-sign`, Eke),
    sY(`gomi-pile`, Dke),
    sY(`gomi-box`, (e) => mY(e, !1)),
    sY(`gomi-box-full`, (e) => mY(e, !0)),
    sY(`gomi-net`, Oke),
  );
  for (let e = 0; e < yJ.length; e++)
    t.push(sY(`lantern-${e}`, (t) => hY(t, 0, 0, 0, 0.17, 0.48, e)));
  (kke().forEach((e, n) =>
    t.push(sY(`festoon-red-${n}`, (t) => gY(t, e, 7, 0.115))),
  ),
    t.push(sY(`festoon-matsuri`, (e) => gY(e, 4, 9, 0.11))),
    t.push(
      sY(`festoon-red-far`, (e) => gY(e, [oY(`festPlain`)], 7, 0.115, !0)),
      sY(`festoon-matsuri-far`, (e) => gY(e, 4, 9, 0.11, !0)),
    ),
    t.push(
      sY(`park-bench`, Lke),
      sY(`park-lamp`, Rke),
      sY(`park-bins`, zke),
      sY(`park-drink`, Bke),
      sY(`park-map`, Vke),
      sY(`park-fence`, Hke),
      sY(`park-shrub`, Uke),
      sY(`park-bed-sign`, Wke),
      sY(`park-fountain`, Gke, 4096),
    ));
  for (let e of [3, 4, 5, 6, 7]) t.push(sY(`nobori-${e}`, (t) => Ake(t, e)));
  (t.push(
    sY(`crate-table`, jke),
    sY(`crate-stool-1`, (e) => _Y(e, 1)),
    sY(`crate-stool-2`, (e) => _Y(e, 2)),
    sY(`menu-board`, Mke),
  ),
    t.push(sY(`yatai-oden`, Nke)));
  for (let e = 0; e < bJ.length; e++)
    t.push(sY(`yatai-${e}`, (t) => Pke(t, e)));
  (t.push(sY(`hokoten-barrier`, Fke), sY(`matsuri-banner`, Ike)),
    t.push(
      sY(`smoking-area`, Kke),
      sY(`kyakuhiki-sign`, qke),
      sY(`crow-0`, (e) => yY(e, 0)),
      sY(`crow-1`, (e) => yY(e, 1)),
    ),
    t.push(
      sY(`kasa-stand`, Jke),
      sY(`hanami-tarp`, Yke),
      sY(`leaf-litter`, Xke),
      sY(`shutter-down`, eAe),
    ));
  for (let e of [`plateOpen`, `plateJunbi`, `plateTeikyu`, `plateKyugyo`])
    t.push(sY(`plate-${e.slice(5).toLowerCase()}`, (t) => Zke(t, e)));
  for (let e of [0, 1, 2, 3])
    t.push(
      sY(`aboard-${e}`, (t) => Qke(t, `board${e}`)),
      sY(`noren-${e}`, (t) => $ke(t, `noren${e}`)),
    );
  return t;
}
var xY = 3,
  SY = {
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
  CY = new Float32Array(16);
