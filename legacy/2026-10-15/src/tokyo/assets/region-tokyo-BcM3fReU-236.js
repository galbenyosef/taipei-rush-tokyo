// tokyo/assets/region-tokyo-BcM3fReU 236 — assign
// Lines 95366-95388 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function i$(e) {
  (Object.assign(en, pQ()),
    Object.assign(Kt, hQ()),
    Object.assign(Wt, mQ()),
    yn.splice(0, yn.length, ...SQ),
    (Ye.car = CQ.car),
    (Ye.scooter = CQ.scooter),
    nQ());
  let t = r$(e);
  return (
    Object.assign(bt, {
      paint: cQ(e.region.signage.fonts.sans),
      voiceLang: `ja`,
      ...xQ,
      gunDelay: 1,
      heliGun: 99,
      heliStripe: wQ,
      sees: t.sees,
      ambient: t.ambient,
    }),
    t.system
  );
}
