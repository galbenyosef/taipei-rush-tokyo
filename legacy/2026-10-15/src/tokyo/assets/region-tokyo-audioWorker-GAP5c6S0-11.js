// tokyo/assets/region-tokyo-audioWorker-GAP5c6S0 11 — inst
// Lines 3159-3253 of readable/tokyo/assets/region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function _t(t, n, r) {
  let i = new e(gt(t) ^ 334462),
    [a, o, s] = t.split(`/`),
    c;
  if (a === `inst`) {
    let e = ue[o],
      t = Ue[o];
    if (!e || !t) throw Error(`no tokyo inst ` + o);
    c = t(i, Number(s), e.sr, e.dur);
  } else c = Ke(t, i);
  return n || r ? re(c, 22050, !1) : c;
}
let vt = null;
const yt = () => ({ ja: ``, zh: ``, en: `` });
function bt(e) {
  if (e.inst.startsWith(`drum:`)) return `drum/` + e.inst.slice(5);
  if (e.inst.startsWith(`sfx:`)) return ``;
  let t = ht[e.inst];
  if (!t) return ``;
  let n = t.roots[0];
  for (let r of t.roots) Math.abs(r - e.m) < Math.abs(n - e.m) && (n = r);
  return `inst/${e.inst}/${n}`;
}
function xt(e, t) {
  vt ??= mt(yt);
  let n = vt[e];
  if (!n) return [];
  let r = /* @__PURE__ */ new Set(),
    i = [],
    a = [],
    o = (e) => {
      let t = bt(e);
      t && !r.has(t) && (r.add(t), (t.startsWith(`drum/`) ? i : a).push(t));
    };
  for (let e of n.ident ?? []) o(e);
  for (let e of t) {
    let t = n.item(e);
    for (let e = 0; e < t.bars; e++) for (let n of t.bar(e)) o(n);
  }
  return [...i, ...a];
}
const St = [];
let Ct = !1;
function wt() {
  if (Ct) return;
  Ct = !0;
  let e = () => {
    let t = St.shift();
    if (!t) {
      Ct = !1;
      return;
    }
    if (t.type === `needs`)
      $({
        type: `needs`,
        station: t.station,
        ks: t.ks,
        ids: xt(t.station, t.ks),
      });
    else
      for (let e of t.ids) {
        let n = e.endsWith(`/*`),
          r = n
            ? Array.from(
                {
                  length: t.low
                    ? Math.min(2, le[e.slice(4, -2)] ?? 0)
                    : (le[e.slice(4, -2)] ?? 0),
                },
                (t, n) => `${e.slice(0, -1)}${n}`,
              )
            : [e];
        for (let e of r)
          try {
            let n = _t(e, !!t.mobile, !!t.low);
            $(
              { type: `buf`, id: e, sr: n.sr, ch: n.ch },
              n.ch.map((e) => e.buffer),
            );
          } catch (t) {
            ($({ type: `err`, id: e, msg: String(t?.message ?? t) }),
              n || $({ type: `done`, id: e }));
          }
        n && $({ type: `done`, id: e });
      }
    setTimeout(e, 0);
  };
  e();
}
self.onmessage = (e) => {
  let t = e.data;
  !t ||
    (t.type !== `render` && t.type !== `needs`) ||
    (t.type === `needs` ? St.unshift(t) : St.push(t), wt());
};
