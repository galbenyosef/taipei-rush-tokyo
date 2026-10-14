// tokyo/assets/bag-LX8mo88s 06 — setattribute
// Lines 2994-3356 of readable/tokyo/assets/bag-LX8mo88s.pretty.js (statement-aligned).
function ma(e, f) {
  let p = f.ctx,
    m = (e, t) => f.t({ zh: e, en: t }),
    h = (e) => f.t(e),
    g = new Set(re());
  (ee(), e.replaceChildren());
  let _ = () => ae(p),
    v = () => n.filter((e) => e.shelf === `use` && (_()[e.id] ?? 0) > 0),
    y = () => ne(p),
    b = v().length || !g.size ? `use` : `book`,
    x = i(c),
    S = x,
    se = (e) => n.filter((t) => a(t, e)),
    C = null,
    w = null,
    ce,
    T = d(`div`, `bg`, e),
    le = !0;
  fa().then(() => {
    le && D();
  });
  let ue = c === `kaohsiung` || c === `tokyo`,
    de = (e, t, n, r = ``) => {
      let i = d(`button`, `bg-btn ${t}`, e, r);
      return (
        (i.type = `button`),
        (i.dataset.nav = `1`),
        i.addEventListener(`click`, (e) => {
          (e.stopPropagation(), f.sfx(`ui_click`, 0.6), n());
        }),
        i
      );
    },
    E = (e, t, n = !1) => {
      let r = d(`span`, `bg-art${n ? ` locked` : ``}`, e);
      return ((r.innerHTML = t), r.setAttribute(`aria-hidden`, `true`), r);
    },
    fe = (e, t) => {
      ((w = { text: e, kind: t }),
        clearTimeout(ce),
        (ce = setTimeout(() => {
          ((w = null), D());
        }, 3600)));
    };
  function pe() {
    let r = d(`nav`, `bg-tabs`, T);
    r.setAttribute(`aria-label`, m(`背包`, `Bag`));
    let i = y(),
      a = se(x),
      o = a.filter((e) => i.has(e.id)).length,
      s = v().reduce((e, t) => e + (_()[t.id] ?? 0), 0),
      c = _e();
    for (let [i, l] of [
      [
        `use`,
        s
          ? m(
              t.on ? t.t(`道具 ${s}`, `アイテム ${s}`) : `道具 ${s}`,
              `Items ${s}`,
            )
          : m(`道具`, `Items`),
      ],
      [
        `book`,
        m(
          t.on
            ? t.t(`圖鑑 ${o}/${a.length}`, `図鑑 ${o}/${a.length}`)
            : `圖鑑 ${o}/${a.length}`,
          `Book ${o}/${a.length}`,
        ),
      ],
      [
        `cats`,
        m(
          t.on
            ? t.t(
                `招財貓 ${c.size}/${u.length}`,
                `招き猫 ${c.size}/${u.length}`,
              )
            : `招財貓 ${c.size}/${u.length}`,
          `Cats ${c.size}/${u.length}`,
        ),
      ],
    ]) {
      let t = de(
        r,
        b === i ? `on` : ``,
        () => {
          ((b = i),
            (C = null),
            i === `book` && (S = x),
            D(),
            (e.scrollTop = 0));
        },
        l,
      );
      (t.setAttribute(`aria-current`, b === i ? `page` : `false`),
        (i === `use`
          ? n.some((e) => e.shelf === `use` && g.has(e.id))
          : i === `book` && n.some((e) => g.has(e.id))) &&
          d(`i`, `bg-dot`, t).setAttribute(`aria-hidden`, `true`));
    }
    ue &&
      (r.lastElementChild?.remove(),
      (r.style.gridTemplateColumns = `repeat(2, 1fr)`));
  }
  function me(e, n) {
    let r = _()[n.id] ?? 0,
      i = r > 0 || y().has(n.id),
      a = de(e, `bg-card${i ? `` : ` locked`}${i && !r ? ` gone` : ``}`, () => {
        ((C = n.id), D());
      });
    ((a.dataset.item = n.id),
      E(a, pa(n.id), !i),
      d(`span`, `bg-name`, a, i ? h(n.name) : `？？？`),
      (r > 1 || (r === 1 && b === `book`)) && d(`b`, `bg-count`, a, `×${r}`),
      g.has(n.id) && d(`i`, `bg-dot`, a).setAttribute(`aria-hidden`, `true`),
      a.setAttribute(
        `aria-label`,
        i
          ? `${h(n.name)}${r ? ` ×${r}` : ``}`
          : m(
              t.on
                ? t.t(`未收集：${n.hint.zh}`, `未収集：${t.jz(n.hint.zh)}`)
                : `未收集：${n.hint.zh}`,
              `Not found yet: ${n.hint.en}`,
            ),
      ));
  }
  function he() {
    let e = v();
    if (!e.length) {
      let e = d(`div`, `bg-empty`, T);
      (E(e, pa(`red-white-bag`)),
        d(`strong`, ``, e, m(`背包空空的`, `Your bag is empty`)),
        x === `tokyo`
          ? d(
              `p`,
              ``,
              e,
              m(
                `體力滿的時候在便利商店買的飯糰、咖啡會放進背包；藥妝店、珍奶店、遊樂場的景品、神社的御守和街上找到的東西也會放進來。`,
                `Konbini food you buy at full health goes in the bag; the drugstore, the tea stand, game-centre prizes, shrine charms and things you find on the street too.`,
              ),
            )
          : x === `hong-kong`
            ? d(
                `p`,
                ``,
                e,
                m(
                  `體力滿的時候買的蛋撻、奶茶、雲吞麵會外賣放進背包；夾公仔、手信和街上找到的東西也會放進來。`,
                  `Food you buy at full health goes in the bag to go; claw prizes, souvenirs and things you find on the street too.`,
                ),
              )
            : d(
                `p`,
                ``,
                e,
                m(
                  `超商買東西會拿到發票；茶葉蛋、珍奶吃不下可以外帶；夾娃娃機夾到的娃娃也會放進來。`,
                  `Shops hand you receipts; snacks you buy at full health go in the bag; claw-machine prizes too.`,
                ),
              ));
      return;
    }
    let t = d(`div`, `bg-grid`, T);
    for (let n of e) me(t, n);
  }
  function ge() {
    let t = y(),
      n = d(`div`, `bg-books`, T);
    (n.setAttribute(`role`, `tablist`),
      (n.style.gridTemplateColumns = `repeat(${l.length}, 1fr)`));
    for (let r of l) {
      let i = se(r.id),
        a = de(
          n,
          S === r.id ? `on` : ``,
          () => {
            ((S = r.id), (C = null), D(), (e.scrollTop = 0));
          },
          `${h(r.name)} ${i.filter((e) => t.has(e.id)).length}/${i.length}`,
        );
      (a.setAttribute(`role`, `tab`),
        a.setAttribute(`aria-selected`, String(S === r.id)),
        i.some((e) => g.has(e.id)) &&
          d(`i`, `bg-dot`, a).setAttribute(`aria-hidden`, `true`));
    }
    for (let e of o) {
      let n = se(S).filter((t) => t.cat === e.id);
      if (!n.length) continue;
      let i = d(`div`, `bg-head`, T);
      (d(
        `strong`,
        ``,
        i,
        h(S === `hong-kong` ? e.hk : S === `tokyo` && r ? r[e.id] : e.name),
      ),
        d(`span`, ``, i, `${n.filter((e) => t.has(e.id)).length}/${n.length}`));
      let a = d(`div`, `bg-grid`, T);
      for (let e of n) me(a, e);
    }
  }
  function _e() {
    let e = new Set();
    for (let t of p.state.data.collectibles)
      t.startsWith(`cat-`) && e.add(t.slice(4));
    return e;
  }
  function ve() {
    let e = _e(),
      n = d(`div`, `bg-head`, T);
    (d(
      `strong`,
      ``,
      n,
      c === `kaohsiung`
        ? m(`高雄的招財貓`, `Kaohsiung's lucky cats`)
        : c === `hong-kong`
          ? m(`香港的招財貓`, `Hong Kong's lucky cats`)
          : m(`臺北的招財貓`, `Taipei's lucky cats`),
    ),
      d(`span`, ``, n, `${e.size}/${u.length}`));
    let r = d(`div`, `bg-grid cats`, T);
    (u.forEach((n, i) => {
      let a = e.has(n.id),
        o = d(`div`, `bg-card cat${a ? `` : ` locked`}`, r);
      (E(o, la(i), !a),
        d(
          `span`,
          `bg-name`,
          o,
          a
            ? f.t(n)
            : m(
                t.on ? t.t(`？ ${n.zh}`, `？ ${t.jz(n.zh)}`) : `？ ${n.zh}`,
                `? ${n.en}`,
              ),
        ),
        o.setAttribute(
          `aria-label`,
          a
            ? f.t(n)
            : m(
                t.on
                  ? t.t(
                      `還沒找到：${n.zh}`,
                      `まだ見つけていない：${t.jz(n.zh)}`,
                    )
                  : `還沒找到：${n.zh}`,
                `Not found yet: ${n.en}`,
              ),
        ));
    }),
      d(
        `p`,
        `bg-foot`,
        T,
        m(
          c === `hong-kong`
            ? `走近招財貓就會聽到鈴鐺聲。每找到一隻 +HK$100，找到一定數量有額外獎金。`
            : `走近招財貓就會聽到鈴鐺聲。每找到一隻 +NT$200，10、20、30 隻有額外獎金。`,
          `Get close and you hear a bell. Each cat pays a reward, with bonuses at milestones.`,
        ),
      ));
  }
  function ye(e) {
    let n = _()[e.id] ?? 0,
      r = n > 0 || y().has(e.id),
      i = d(`div`, `bg-sheet`, T);
    (i.setAttribute(`role`, `dialog`),
      i.setAttribute(`aria-label`, r ? h(e.name) : `？？？`));
    let a = d(`div`, `bg-sheet-top`, i);
    E(a, pa(e.id), !r);
    let o = d(`div`, `bg-sheet-words`, a);
    (d(`strong`, ``, o, r ? h(e.name) : `？？？`),
      r &&
        d(
          `small`,
          ``,
          o,
          n
            ? m(
                t.on ? t.t(`持有 ${n}`, `所持 ${n}`) : `持有 ${n}`,
                `You have ${n}`,
              )
            : m(
                t.on
                  ? t.t(
                      `用完了 · 去${e.hint.zh}再拿`,
                      `使い切った · ${t.jz(e.hint.zh)}でまた手に入る`,
                    )
                  : `用完了 · 去${e.hint.zh}再拿`,
                `None left · more at ${e.hint.en}`,
              ),
        ),
      d(
        `p`,
        `bg-blurb`,
        i,
        r
          ? h(e.blurb)
          : m(
              t.on
                ? t.t(`線索：${e.hint.zh}`, `手がかり：${t.jz(e.hint.zh)}`)
                : `線索：${e.hint.zh}`,
              `Clue: ${e.hint.en}`,
            ),
      ));
    let s = d(`div`, `bg-sheet-row`, i);
    if (n && e.effect) {
      let n = te(p, e),
        r = de(
          s,
          `bg-use`,
          () => {
            let t = ie(p, e.id);
            (fe(h(t.text), t.ok ? (t.luck === !1 ? `info` : `good`) : `bad`),
              (_()[e.id] ?? 0) || (C = null),
              D());
          },
          n.ok
            ? m(
                t.on
                  ? t.t(`使用 · ${n.text.zh}`, `使う · ${t.jz(n.text.zh)}`)
                  : `使用 · ${n.text.zh}`,
                `Use · ${n.text.en}`,
              )
            : h(n.text),
        );
      r.disabled = !n.ok;
    } else n && d(`span`, `bg-keepsake`, s, m(`收藏品`, `Keepsake`));
    de(
      s,
      `bg-close`,
      () => {
        ((C = null), D());
      },
      m(`關閉`, `Close`),
    );
  }
  function D() {
    let t = e.scrollTop;
    (T.replaceChildren(),
      pe(),
      w &&
        d(`div`, `bg-notice ${w.kind}`, T, w.text).setAttribute(
          `role`,
          `status`,
        ),
      b === `use` ? he() : b === `book` ? ge() : ve(),
      C && s[C] && ye(s[C]),
      (e.scrollTop = t));
  }
  let be = oe(() => D());
  return (
    D(),
    () => {
      ((le = !1), be(), clearTimeout(ce), T.remove());
    }
  );
}
