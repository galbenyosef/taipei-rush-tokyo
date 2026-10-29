// tokyo/assets/region-tokyo-55J_WESF 448 — bag
// Lines 158899-158919 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function JRe(e) {
  let t = [
      e.black ? `黑外套` : `深藍外套`,
      e.brown ? `咖啡色頭髮` : `黑頭髮`,
      e.light ? `淺色牛仔褲` : `黑長褲`,
      e.bag ? `提著粉紅紙袋` : `兩手空空`,
    ],
    n = [
      e.black ? `black jacket` : `navy jacket`,
      e.brown ? `brown hair` : `black hair`,
      e.light ? `light jeans` : `black trousers`,
      e.bag ? `pink paper bag` : `empty-handed`,
    ],
    r = [
      e.black ? `黒ジャケット` : `紺ジャケット`,
      e.brown ? `茶髪` : `黒髪`,
      e.light ? `薄いジーンズ` : `黒パンツ`,
      e.bag ? `ピンクの紙袋` : `手ぶら`,
    ];
  return { zh: t.join(`・`), en: n.join(` · `), ja: r.join(`・`) };
}
