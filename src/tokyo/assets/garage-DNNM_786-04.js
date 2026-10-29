// tokyo/assets/garage-DNNM_786 04 — notice
// Lines 951-1209 of readable/tokyo/assets/garage-DNNM_786.pretty.js (statement-aligned).
function mountGarage(e, t, n) {
  let r = t.ctx,
    i = (e, n) => t.t({ zh: e, en: n }),
    a = (e) => t.t(e),
    o = $,
    s = v(`div`, `bg-head`, e);
  (v(`strong`, ``, s, i(`我的車庫`, `My Garage`)),
    v(
      `span`,
      ``,
      s,
      i(
        `擁有 ${w.filter((e) => I(r, e.id)).length}/${w.length}`,
        `Owned ${w.filter((e) => I(r, e.id)).length}/${w.length}`,
      ),
    ));
  let c = `${F(0).label.replace(/[\d,]+$/, ``)}${Math.floor(r.state.money).toLocaleString()}`;
  v(
    `p`,
    `bg-foot`,
    e,
    i(
      `到長安東路汽車街的狂飆改裝車行看車、買車。買下的車放在背包裡，下了車隨時叫出來。錢包：${c}`,
      `See and buy the cars at Rush Custom Garage on Chang'an E. Rd's car street. A car you buy lives in your bag: summon it any time you're on foot. Wallet: ${c}`,
    ),
  );
  let l = y(Fe);
  (l &&
    m(
      v(`div`, `bg-sheet-row`, e),
      `bg-use gr-home-go`,
      () => {
        (Z(r, { x: l.x, z: l.z }, { zh: `我的家`, en: `My Home` }),
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
      v(`div`, `bg-notice ${o.notice.kind}`, e, o.notice.text).setAttribute(
        `role`,
        `status`,
      ));
  let u = v(`div`, `gr-list`, e);
  for (let e of w) {
    let t = I(r, e.id),
      s = v(`div`, `gr-card${t ? ` owned` : ``}`, u);
    ((s.dataset.car = e.id),
      s.style.setProperty(
        `--gr-glow`,
        `#${(e.glow || e.trim).toString(16).padStart(6, `0`)}`,
      ));
    let c = v(`div`, `gr-art`, s);
    ((c.innerHTML = Ne(e)), c.setAttribute(`aria-hidden`, `true`));
    let d = t && P(r, e.id);
    d
      ? v(`span`, `gr-badge`, s, i(`💥 爆掉了`, `💥 Wrecked`))
      : e.badge
        ? v(`span`, `gr-badge`, s, t ? i(`✓ 已擁有`, `✓ Owned`) : a(e.badge))
        : t && v(`span`, `gr-badge`, s, i(`✓ 已擁有`, `✓ Owned`));
    let f = v(`div`, `gr-words`, s);
    (v(`strong`, ``, f, a(e.name)), v(`p`, `gr-tag`, f, a(e.tagline)));
    let p = v(`div`, `gr-stats`, s);
    for (let [t, n, r] of [
      [
        i(`極速`, `Top speed`),
        Q(e.tune.maxKmh, 120, 340),
        `${e.tune.maxKmh} km/h`,
      ],
      [i(`加速`, `Accel`), Q(e.tune.accel, 4, 14.5), `0–100 ${oe(e)} s`],
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
      let e = v(`div`, `gr-stat`, p);
      v(`span`, ``, e, t);
      let i = v(`i`, ``, e);
      ((v(`b`, ``, i).style.width = `${Math.round(n * 100)}%`),
        v(`em`, ``, e, r));
    }
    o.open === e.id && v(`p`, `bg-blurb`, s, a(e.blurb));
    let g = v(`div`, `bg-sheet-row`, s);
    if (d) {
      let e = m(
        g,
        `bg-use gr-home`,
        () => {
          l &&
            (Z(r, { x: l.x, z: l.z }, { zh: `我的家`, en: `My Home` }),
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
      let t = z(r),
        o = m(
          g,
          `bg-use gr-go`,
          () => {
            let t = xe(r, e.id);
            if (t.ok) {
              let e = document.querySelector(`.ph-close`);
              e ? e.click() : h(a(t.text), `good`);
            } else h(a(t.text), `bad`);
            n();
          },
          t.ok ? i(`🚗 叫車`, `🚗 Summon`) : a(t.text),
        );
      o.disabled = !t.ok;
    } else {
      let t = F(e.price),
        n = y(Pe),
        a = v(`div`, `gr-price`, s);
      (v(`span`, ``, a, i(`售價`, `Price`)),
        v(`strong`, ``, a, t.label),
        s.insertBefore(a, g));
      let o = m(
        g,
        `bg-use gr-buy`,
        () => {
          n &&
            (Z(
              r,
              { x: n.x, z: n.z },
              { zh: `狂飆改裝車行`, en: `Rush Custom Garage` },
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
    m(
      g,
      `bg-close`,
      () => {
        ((o.open = o.open === e.id ? null : e.id), n());
      },
      o.open === e.id ? i(`收起`, `Less`) : i(`介紹`, `More`),
    );
  }
  let d = q(r);
  d.length && queueMicrotask(() => ke(r));
  let f = x.filter((e) => Oe(r).includes(e) || d.includes(e)),
    p = v(`div`, `bg-head`, e);
  if (
    (v(`strong`, ``, p, i(`我的機車`, `My Bikes`)),
    v(
      `span`,
      ``,
      p,
      i(`擁有 ${f.length}/${x.length}`, `Owned ${f.length}/${x.length}`),
    ),
    !f.length)
  )
    v(
      `p`,
      `bg-foot`,
      e,
      i(
        `在機車行買下的速克達、檔車和重機也會停在這裡，下了車隨時牽出來。`,
        `A scooter, motorcycle or superbike you buy at a motorbike shop waits here too: bring it out any time you are on foot.`,
      ),
    );
  else {
    let t = v(`div`, `gr-list`, e),
      o = z(r);
    for (let e of f) {
      let s = v(`div`, `gr-card owned bike`, t);
      ((s.dataset.bike = e.id),
        s.style.setProperty(
          `--gr-glow`,
          `#${e.paint.toString(16).padStart(6, `0`)}`,
        ),
        v(`div`, `gr-bike-art`, s, e.glyph).setAttribute(
          `aria-hidden`,
          `true`,
        ));
      let c = v(`div`, `gr-words`, s);
      (v(`strong`, ``, c, a(e.name)),
        v(
          `p`,
          `gr-tag`,
          c,
          i(`機車行買的，隨時牽出來`, `Bought at the bike shop: yours to ride`),
        ));
      let l = m(
        v(`div`, `bg-sheet-row`, s),
        `bg-use gr-go`,
        () => {
          let t = Ae(r, e.id);
          if (t.ok) {
            let e = document.querySelector(`.ph-close`);
            e ? e.click() : h(a(t.text), `good`);
          } else h(a(t.text), `bad`);
          n();
        },
        o.ok ? i(`${e.glyph} 牽車`, `${e.glyph} Ride it`) : a(o.text),
      );
      l.disabled = !o.ok;
    }
  }
  function m(e, n, r, i) {
    let a = v(`button`, `bg-btn ${n}`, e, i);
    return (
      (a.type = `button`),
      (a.dataset.nav = `1`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t.sfx(`ui_click`, 0.6), r());
      }),
      a
    );
  }
  function h(e, t) {
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
