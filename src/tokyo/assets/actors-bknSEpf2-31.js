// tokyo/assets/actors-bknSEpf2 31 — acc
// Lines 9905-10067 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function eu(e, t, n) {
  Jc.attach(e);
  let r = null,
    i = null,
    a = t.meshes.find((e) => /-body$/.test(e.name)) ?? null,
    o = a ? a.material : null;
  if (a && t.kind === `rocketbox`)
    try {
      $c(a);
      let e = rl(a.material);
      ((i = e.mat), (r = e.u));
    } catch (e) {
      console.warn(`[wardrobe] garment recolour unavailable`, e);
    }
  let s = t.rig,
    c = [s.bones[4], s.bones[25], s.bones[2]],
    l = c[1].scale.x;
  (c[1].scale.setScalar(1), t.root.updateMatrixWorld(!0));
  let u = c.map((e) => e.matrixWorld.clone().invert()),
    d = t.root.matrixWorld.clone();
  c[1].scale.setScalar(l);
  let f = {
    model: t,
    ctx: e,
    fit: n,
    u: r,
    body: r ? a : null,
    baseMat: o,
    outfitMat: i,
    kitMat: null,
    rig: s,
    bones: c,
    inverses: u,
    bindMatrix: d,
    acc: [],
    accKey: ``,
    helmet: !1,
    outfit: {},
  };
  Kl.add(f);
  let p = a && t.kind === `rocketbox` ? Ac(t.id) : null;
  p &&
    a &&
    o &&
    Mc(p, !!e.quality.mobile)
      .then((e) => {
        Kl.has(f) && ((f.body = a), (f.kitMat = il(o, e)), Yl(f));
      })
      .catch((e) => console.warn(`[wardrobe] team kit unavailable`, e));
  let m = t.setProps;
  t.setProps = (e, t, n, r, i, a, o) => {
    (m(e, t, n, r, i, a, o), f.helmet !== o && ((f.helmet = o), Xl(f)));
  };
  let h = t.setVisible;
  t.setVisible = (e) => {
    h(e);
    for (let t of f.acc) t.visible = e;
  };
  let g = t.dispose;
  ((t.dispose = () => {
    Kl.delete(f);
    for (let e of f.acc) e.geometry.dispose();
    (a && o && (a.material = o), i?.dispose(), f.kitMat?.dispose(), g());
  }),
    Yl(f),
    nu());
}
var tu = !1;
function nu() {
  tu ||
    typeof window > `u` ||
    ((tu = !0),
    (window.__wardrobe = {
      catalog: Vc,
      state: () => Jc.snapshot(),
      wear: (e, t, n) => Jc.wear(e, t, n),
      give: (e) => Jc.give(e),
      preview: $l,
      shop: () =>
        t(
          () =>
            Promise.resolve()
              .then(() => ru)
              .then((e) =>
                e.openWardrobeShop(window.__game, {
                  title: { zh: `UNIGLOW 試衣間`, en: `UNIGLOW Fitting Room` },
                }),
              ),
          void 0,
        ),
      dressed: () =>
        [...Kl].map((e) => ({
          id: e.model.id,
          outfit: e.outfit,
          acc: e.acc.length,
          recolour: !!e.u,
          kit: !!e.kitMat,
        })),
    }));
}
var ru = e({ openWardrobeShop: () => su, wardrobeShopOpen: () => cu }),
  iu = `wardrobe-shop-style`,
  au = `
.wshop-bd{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;
  padding:max(12px,env(safe-area-inset-top)) max(16px,calc(env(safe-area-inset-right) + 10px)) max(12px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));
  touch-action:none;-webkit-tap-highlight-color:transparent;font-family:${Mt}}
.wshop{display:flex;flex-direction:column;box-sizing:border-box;width:min(420px,100%);max-height:100%;background:rgba(250,250,248,0.96);color:#1b1b1b;
  border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,0.35);overflow:hidden;user-select:none;-webkit-user-select:none;touch-action:pan-y}
.wshop-hd{flex:none;display:flex;align-items:center;gap:10px;padding:12px 12px 8px 14px;background:var(--acc);color:#fff}
.wshop-logo{font-weight:900;font-size:13px;letter-spacing:1px;line-height:1.05;padding:5px 6px;border:2px solid #fff;border-radius:3px;text-transform:uppercase}
.wshop-title{flex:1;min-width:0;font-size:18px;font-weight:800;line-height:1.2}
.wshop-sub{font-size:12px;opacity:.85;font-weight:500}
.wshop-x{flex:none;width:44px;height:44px;border:0;border-radius:12px;background:rgba(255,255,255,0.18);color:#fff;font:700 22px/44px ${Mt};cursor:pointer;padding:0}
.wshop-say{flex:none;padding:8px 14px 0;font-size:13.5px;line-height:1.35;color:#444}
.wshop-say b{color:#111}
.wshop-tabs{flex:none;display:flex;gap:4px;padding:10px 10px 6px;overflow-x:auto;scrollbar-width:none}
.wshop-tabs::-webkit-scrollbar{display:none}
.wshop-tab{flex:none;min-height:36px;padding:0 12px;border-radius:18px;border:0;background:#ecebe7;color:#333;font:700 14px ${Mt};cursor:pointer}
.wshop-tab.shelf{background:#fbe3e6;color:var(--acc)}
.wshop-tab.on{background:#1b1b1b;color:#fff}
.wshop-rows{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:2px 10px 6px}
.wshop-row{display:flex;align-items:center;gap:10px;min-height:48px;padding:5px 8px;border-radius:10px;margin:3px 0;cursor:pointer;border:2px solid transparent;background:#fff}
.wshop-row.sel{border-color:var(--acc)}
.wshop-sw{flex:none;width:30px;height:30px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.18)}
.wshop-txt{flex:1;min-width:0}
.wshop-name{font-size:15px;font-weight:700;line-height:1.25}
.wshop-desc{font-size:12px;color:#666;line-height:1.25}
.wshop-tag{flex:none;font-size:12px;font-weight:800;padding:3px 7px;border-radius:6px;background:#ecebe7;color:#333}
.wshop-tag.wear{background:#1b1b1b;color:#fff}
.wshop-price{flex:none;font-size:15px;font-weight:800;color:var(--acc)}
.wshop-ft{display:flex;align-items:center;gap:10px;padding:10px 12px 12px;border-top:1px solid #e4e3df;background:#fff}
.wshop-cash{flex:1;font-size:13px;color:#555}
.wshop-cash b{color:#111;font-size:15px}
.wshop-act{flex:none;min-width:150px;min-height:46px;border:0;border-radius:10px;background:var(--acc);color:#fff;font:800 15px ${Mt};cursor:pointer;padding:0 14px}
.wshop-act.alt{background:#1b1b1b}
.wshop-act:disabled{background:#bbb;cursor:default}
.wshop-hint{padding:0 14px 8px;font-size:11.5px;color:#777;background:#fff}
.wshop-bd.touch .wshop-hint{display:none}
@media (max-height:520px){.wshop-say{display:none}.wshop-hd{padding:8px 10px 6px 12px}.wshop-title{font-size:16px}.wshop-row{min-height:42px}}
@media (orientation:portrait) and (max-width:600px){
  .wshop-bd{align-items:flex-end;justify-content:center;padding:0}
  .wshop{width:100%;max-height:52%;border-radius:16px 16px 0 0;padding-bottom:env(safe-area-inset-bottom)}
}
`,
  ou = null;
function su(e, t) {
  typeof document < `u` && (ou?.close(!0), (ou = new fu(e, t)));
}
function cu() {
  return !!ou;
}
var lu = [
  ...[`top`, `bottom`, `shoes`, `hat`, `glasses`, `bag`].map((e) => ({
    name: Fc[e],
    slot: e,
  })),
  ...[`trend`, `food`, `cosplay`].map((e) => ({ name: Ic[e], shelf: e })),
];
function uu(e) {
  return Vc.filter((t) =>
    e.slot ? t.slot === e.slot && !t.shelf : t.shelf === e.shelf,
  );
}
