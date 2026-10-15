// tokyo/assets/garage-BvwUBeJB 04 — notice
// Lines 798-1003 of readable/tokyo/assets/garage-BvwUBeJB.pretty.js (statement-aligned).
function mountGarage(e, t, n) {
  let r = t.ctx,
    i = (e, n) => t.t({ zh: e, en: n }),
    a = (e) => t.t(e),
    o = $,
    s = b(`div`, `bg-head`, e);
  (b(`strong`, ``, s, i(`我的車庫`, `My Garage`)),
    b(
      `span`,
      ``,
      s,
      i(
        `擁有 ${C.filter((e) => B(r, e.id)).length}/${C.length}`,
        `Owned ${C.filter((e) => B(r, e.id)).length}/${C.length}`,
      ),
    ));
  let c = `${z(0).label.replace(/[\d,]+$/, ``)}${Math.floor(r.state.money).toLocaleString()}`;
  b(
    `p`,
    `bg-foot`,
    e,
    i(
      `到長安東路汽車街的狂飆改裝車行看車、買車。買下的車放在背包裡，下了車隨時叫出來。錢包：${c}`,
      `See and buy the cars at Rush Custom Garage on Chang'an E. Rd's car street. A car you buy lives in your bag: summon it any time you're on foot. Wallet: ${c}`,
    ),
  );
  let l = y(ye);
  (l &&
    d(
      b(`div`, `bg-sheet-row`, e),
      `bg-use gr-home-go`,
      () => {
        (r.ui.setWaypoint(
          { x: l.x, z: l.z },
          { zh: `我的家`, en: `My Home` },
          !0,
        ),
          r.events.emit(`notify`, {
            text: {
              zh: `📍 已導航回家（康定路）`,
              en: `📍 GPS set: home (Kangding Rd)`,
            },
            kind: `info`,
            duration: 3.5,
          }),
          document.querySelector(`.ph-close`)?.click());
      },
      i(`🏠 回家（車庫在家裡）`, `🏠 Go home (your garage)`),
    ),
    o.notice &&
      b(`div`, `bg-notice ${o.notice.kind}`, e, o.notice.text).setAttribute(
        `role`,
        `status`,
      ));
  let u = b(`div`, `gr-list`, e);
  for (let e of C) {
    let t = B(r, e.id),
      s = b(`div`, `gr-card${t ? ` owned` : ``}`, u);
    ((s.dataset.car = e.id),
      s.style.setProperty(
        `--gr-glow`,
        `#${(e.glow || e.trim).toString(16).padStart(6, `0`)}`,
      ));
    let c = b(`div`, `gr-art`, s);
    ((c.innerHTML = ve(e)), c.setAttribute(`aria-hidden`, `true`));
    let p = t && L(r, e.id);
    p
      ? b(`span`, `gr-badge`, s, i(`💥 爆掉了`, `💥 Wrecked`))
      : e.badge
        ? b(`span`, `gr-badge`, s, t ? i(`✓ 已擁有`, `✓ Owned`) : a(e.badge))
        : t && b(`span`, `gr-badge`, s, i(`✓ 已擁有`, `✓ Owned`));
    let m = b(`div`, `gr-words`, s);
    (b(`strong`, ``, m, a(e.name)), b(`p`, `gr-tag`, m, a(e.tagline)));
    let h = b(`div`, `gr-stats`, s);
    for (let [t, n, r] of [
      [
        i(`極速`, `Top speed`),
        Q(e.tune.maxKmh, 120, 340),
        `${e.tune.maxKmh} km/h`,
      ],
      [i(`加速`, `Accel`), Q(e.tune.accel, 4, 14.5), `0–100 ${ae(e)} s`],
      [
        i(`操控`, `Handling`),
        Q(e.tune.grip * 10 + e.tune.drifty * 2, 11, 15),
        e.tune.drifty >= 1.5
          ? i(`甩尾`, `Drift`)
          : e.tune.grip >= 1.15
            ? i(`抓地`, `Grip`)
            : i(`平衡`, `Balanced`),
      ],
    ]) {
      let e = b(`div`, `gr-stat`, h);
      b(`span`, ``, e, t);
      let i = b(`i`, ``, e);
      ((b(`b`, ``, i).style.width = `${Math.round(n * 100)}%`),
        b(`em`, ``, e, r));
    }
    o.open === e.id && b(`p`, `bg-blurb`, s, a(e.blurb));
    let g = b(`div`, `bg-sheet-row`, s);
    if (p) {
      let e = d(
        g,
        `bg-use gr-home`,
        () => {
          l &&
            (r.ui.setWaypoint(
              { x: l.x, z: l.z },
              { zh: `我的家`, en: `My Home` },
              !0,
            ),
            r.events.emit(`notify`, {
              text: {
                zh: `📍 已導航回家（康定路），去車庫把車牽出來`,
                en: `📍 GPS set: home (Kangding Rd). Pick the car up in the garage.`,
              },
              kind: `info`,
              duration: 3.5,
            }),
            document.querySelector(`.ph-close`)?.click());
        },
        l
          ? i(`🏠 回家牽車`, `🏠 Pick it up at home`)
          : i(`家在臺北`, `Home is in Taipei`),
      );
      e.disabled = !l;
    } else if (t) {
      let t = U(r),
        o = d(
          g,
          `bg-use gr-go`,
          () => {
            let t = fe(r, e.id);
            if (t.ok) {
              let e = document.querySelector(`.ph-close`);
              e ? e.click() : f(a(t.text), `good`);
            } else f(a(t.text), `bad`);
            n();
          },
          t.ok ? i(`🚗 叫車`, `🚗 Summon`) : a(t.text),
        );
      o.disabled = !t.ok;
    } else {
      let t = z(e.price),
        n = y(Z),
        a = b(`div`, `gr-price`, s);
      (b(`span`, ``, a, i(`售價`, `Price`)),
        b(`strong`, ``, a, t.label),
        s.insertBefore(a, g));
      let o = d(
        g,
        `bg-use gr-buy`,
        () => {
          n &&
            (r.ui.setWaypoint(
              { x: n.x, z: n.z },
              { zh: `狂飆改裝車行`, en: `Rush Custom Garage` },
              !0,
            ),
            r.events.emit(`notify`, {
              text: {
                zh: `📍 已導航到長安東路的狂飆改裝車行`,
                en: `📍 GPS set: Rush Custom Garage, Chang'an E. Rd`,
              },
              kind: `info`,
              duration: 3.5,
            }),
            document.querySelector(`.ph-close`)?.click());
        },
        n
          ? i(`📍 去車行看車`, `📍 Visit the showroom`)
          : i(`車行在臺北`, `Showroom in Taipei`),
      );
      o.disabled = !n;
    }
    d(
      g,
      `bg-close`,
      () => {
        ((o.open = o.open === e.id ? null : e.id), n());
      },
      o.open === e.id ? i(`收起`, `Less`) : i(`介紹`, `More`),
    );
  }
  function d(e, n, r, i) {
    let a = b(`button`, `bg-btn ${n}`, e, i);
    return (
      (a.type = `button`),
      (a.dataset.nav = `1`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t.sfx(`ui_click`, 0.6), r());
      }),
      a
    );
  }
  function f(e, t) {
    ((o.notice = { text: e, kind: t }),
      clearTimeout(o.noticeT),
      (o.noticeT = setTimeout(() => {
        ((o.notice = null), n());
      }, 4200)));
  }
}
var $ = { open: null, notice: null };
function resetGarage() {
  (clearTimeout($.noticeT), ($.open = null), ($.notice = null));
}
