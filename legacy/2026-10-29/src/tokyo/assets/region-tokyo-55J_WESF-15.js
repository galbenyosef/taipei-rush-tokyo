// tokyo/assets/region-tokyo-55J_WESF 15 — key
// Lines 7997-8023 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Ci(e, t) {
  return (xi[e] ?? xi[`tokyo-east-generic`])
    .map(([e, t]) => [Si[e], t])
    .filter(([e]) => e && (!t || e.floor === `any` || e.floor === t));
}
var Dne = (e, t, n) => t.weighted(Ci(e, n)),
  One = (e) => bi[e].map((t, n) => `trade.stem.${e}.${n + 1}`);
function kne(e, t) {
  let n = Si[e],
    r = (e) => e[Math.min(e.length - 1, Math.floor(t.next() * e.length))],
    i = n && n.names.length ? r(n.names) : null,
    a = pi[i?.key ?? n?.name ?? ``] ?? { ja: e, zh: e, en: e };
  if (!i?.stem)
    return {
      ja: a.ja,
      zh: a.zh ?? a.ja,
      en: a.en ?? a.ja,
      key: i?.key ?? n?.name ?? ``,
    };
  let [o, s, c] = r(bi[i.stem]);
  return {
    ja: jr(a.ja, { name: o }),
    zh: jr(a.zh ?? a.ja, { name: s }),
    en: jr(a.en ?? a.ja, { name: c }),
    key: i.key,
  };
}
