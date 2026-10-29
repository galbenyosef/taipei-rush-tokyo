// tokyo/assets/bag-C4RJ7iUM 06 — setattribute
// Lines 3318-3715 of readable/tokyo/assets/bag-C4RJ7iUM.pretty.js (statement-aligned).
function mountBag(f, p) {
  let m = p.ctx,
    h = (e, t) => p.t({ zh: e, en: t }),
    g = (e) => p.t(e),
    ce = new Set(ne());
  (re(), f.replaceChildren());
  let _ = () => te(m),
    le = () => c.filter((e) => e.shelf === `use` && (_()[e.id] ?? 0) > 0),
    v = () => ae(m),
    y = le().length || !ce.size ? `use` : `book`,
    b = o(l),
    ue = b,
    x = (e) => c.filter((t) => u(t, e)),
    S = null,
    C = null,
    de,
    w = d(`div`, `bg`, f),
    T = !0;
  eo().then(() => {
    T && E();
  });
  let fe = l === `london` || l === `kaohsiung` || l === `tokyo` || n(l),
    pe = null;
  $ &&
    e(
      () =>
        import(`./garage-DNNM_786.js`).then((e) => {
          ((pe = e), T && y === `garage` && E());
        }),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27,
      ]),
    );
  let me = (e, t, n, r = ``) => {
      let i = d(`button`, `bg-btn ${t}`, e, r);
      return (
        (i.type = `button`),
        (i.dataset.nav = `1`),
        i.addEventListener(`click`, (e) => {
          (e.stopPropagation(), p.sfx(`ui_click`, 0.6), n());
        }),
        i
      );
    },
    he = (e, t, n = !1) => {
      let r = d(`span`, `bg-art${n ? ` locked` : ``}`, e);
      return ((r.innerHTML = t), r.setAttribute(`aria-hidden`, `true`), r);
    },
    ge = (e, t) => {
      ((C = { text: e, kind: t }),
        clearTimeout(de),
        (de = setTimeout(() => {
          ((C = null), E());
        }, 3600)));
    };
  function _e() {
    let e = d(`nav`, `bg-tabs`, w);
    e.setAttribute(`aria-label`, h(`背包`, `Bag`));
    let n = v(),
      r = x(b),
      i = r.filter((e) => n.has(e.id)).length,
      a = le().reduce((e, t) => e + (_()[t.id] ?? 0), 0),
      o = xe();
    for (let [n, s] of [
      [
        `use`,
        a
          ? h(
              t.on ? t.t(`道具 ${a}`, `アイテム ${a}`) : `道具 ${a}`,
              `Items ${a}`,
            )
          : h(`道具`, `Items`),
      ],
      [
        `book`,
        h(
          t.on
            ? t.t(`圖鑑 ${i}/${r.length}`, `図鑑 ${i}/${r.length}`)
            : `圖鑑 ${i}/${r.length}`,
          `Book ${i}/${r.length}`,
        ),
      ],
      [
        `cats`,
        h(
          t.on
            ? t.t(
                `招財貓 ${o.size}/${ee.length}`,
                `招き猫 ${o.size}/${ee.length}`,
              )
            : `招財貓 ${o.size}/${ee.length}`,
          `Cats ${o.size}/${ee.length}`,
        ),
      ],
      ...($ ? [[`garage`, h(`車庫`, `Garage`)]] : []),
    ]) {
      let t = me(
        e,
        y === n ? `on` : ``,
        () => {
          ((y = n),
            (S = null),
            n === `book` && (ue = b),
            E(),
            (f.scrollTop = 0));
        },
        s,
      );
      (t.setAttribute(`aria-current`, y === n ? `page` : `false`),
        $ && (t.dataset.page = n),
        (n === `use`
          ? c.some((e) => e.shelf === `use` && ce.has(e.id))
          : n === `book`
            ? c.some((e) => ce.has(e.id))
            : $ && n === `garage` && pe?.tempting(m)) &&
          d(`i`, `bg-dot`, t).setAttribute(`aria-hidden`, `true`));
    }
    fe
      ? (($ ? e.children[2] : e.lastElementChild)?.remove(),
        (e.style.gridTemplateColumns = $ ? `repeat(3, 1fr)` : `repeat(2, 1fr)`))
      : $ && (e.style.gridTemplateColumns = `repeat(4, 1fr)`);
  }
  function ve(e, n) {
    let r = _()[n.id] ?? 0,
      i = r > 0 || v().has(n.id),
      a = me(e, `bg-card${i ? `` : ` locked`}${i && !r ? ` gone` : ``}`, () => {
        ((S = n.id), E());
      });
    ((a.dataset.item = n.id),
      he(a, to(n.id), !i),
      d(`span`, `bg-name`, a, i ? g(n.name) : `？？？`),
      (r > 1 || (r === 1 && y === `book`)) && d(`b`, `bg-count`, a, `×${r}`),
      ce.has(n.id) && d(`i`, `bg-dot`, a).setAttribute(`aria-hidden`, `true`),
      a.setAttribute(
        `aria-label`,
        i
          ? `${g(n.name)}${r ? ` ×${r}` : ``}`
          : h(
              t.on
                ? t.t(`未收集：${n.hint.zh}`, `未収集：${t.jz(n.hint.zh)}`)
                : `未收集：${n.hint.zh}`,
              `Not found yet: ${n.hint.en}`,
            ),
      ));
  }
  function ye() {
    let e = le();
    if (!e.length) {
      let e = d(`div`, `bg-empty`, w);
      (he(e, to(`red-white-bag`)),
        d(`strong`, ``, e, h(`背包空空的`, `Your bag is empty`)),
        l === `london`
          ? d(
              `p`,
              ``,
              e,
              h(
                `體力滿的時候買的外帶、商店買的東西和街上找到的東西都會放進背包；在其他城市收進來的也會跟著你一起旅行。`,
                `Takeaway you buy at full health, shop buys and things you find on the street go in the bag; what you picked up in other cities travels with you too.`,
              ),
            )
          : b === `tokyo`
            ? d(
                `p`,
                ``,
                e,
                h(
                  `體力滿的時候在便利商店買的飯糰、咖啡會放進背包；藥妝店、珍奶店、遊樂場的景品、神社的御守和街上找到的東西也會放進來。`,
                  `Konbini food you buy at full health goes in the bag; the drugstore, the tea stand, game-centre prizes, shrine charms and things you find on the street too.`,
                ),
              )
            : b === `hong-kong`
              ? d(
                  `p`,
                  ``,
                  e,
                  h(
                    `體力滿的時候買的蛋撻、奶茶、雲吞麵會外賣放進背包；夾公仔、手信和街上找到的東西也會放進來。`,
                    `Food you buy at full health goes in the bag to go; claw prizes, souvenirs and things you find on the street too.`,
                  ),
                )
              : d(
                  `p`,
                  ``,
                  e,
                  h(
                    `超商買東西會拿到發票；茶葉蛋、珍奶吃不下可以外帶；夾娃娃機夾到的娃娃也會放進來。`,
                    `Shops hand you receipts; snacks you buy at full health go in the bag; claw-machine prizes too.`,
                  ),
                ));
      return;
    }
    let t = d(`div`, `bg-grid`, w);
    for (let n of e) ve(t, n);
  }
  function be() {
    let e = v(),
      t = d(`div`, `bg-books`, w);
    (t.setAttribute(`role`, `tablist`),
      (t.style.gridTemplateColumns = `repeat(${s.length}, 1fr)`));
    for (let n of s) {
      let r = x(n.id),
        i = me(
          t,
          ue === n.id ? `on` : ``,
          () => {
            ((ue = n.id), (S = null), E(), (f.scrollTop = 0));
          },
          `${g(n.name)} ${r.filter((t) => e.has(t.id)).length}/${r.length}`,
        );
      (i.setAttribute(`role`, `tab`),
        i.setAttribute(`aria-selected`, String(ue === n.id)),
        r.some((e) => ce.has(e.id)) &&
          d(`i`, `bg-dot`, i).setAttribute(`aria-hidden`, `true`));
    }
    for (let t of a) {
      let n = x(ue).filter((e) => e.cat === t.id);
      if (!n.length) continue;
      let r = d(`div`, `bg-head`, w);
      (d(
        `strong`,
        ``,
        r,
        g(ue === `hong-kong` ? t.hk : ue === `tokyo` && i ? i[t.id] : t.name),
      ),
        d(`span`, ``, r, `${n.filter((t) => e.has(t.id)).length}/${n.length}`));
      let a = d(`div`, `bg-grid`, w);
      for (let e of n) ve(a, e);
    }
  }
  function xe() {
    let e = new Set();
    for (let t of m.state.data.collectibles)
      t.startsWith(`cat-`) && e.add(t.slice(4));
    return e;
  }
  function Se() {
    let e = xe(),
      n = d(`div`, `bg-head`, w);
    (d(
      `strong`,
      ``,
      n,
      l === `kaohsiung`
        ? h(`高雄的招財貓`, `Kaohsiung's lucky cats`)
        : l === `hong-kong`
          ? h(`香港的招財貓`, `Hong Kong's lucky cats`)
          : h(`臺北的招財貓`, `Taipei's lucky cats`),
    ),
      d(`span`, ``, n, `${e.size}/${ee.length}`));
    let r = d(`div`, `bg-grid cats`, w);
    (ee.forEach((n, i) => {
      let a = e.has(n.id),
        o = d(`div`, `bg-card cat${a ? `` : ` locked`}`, r);
      (he(o, Za(i), !a),
        d(
          `span`,
          `bg-name`,
          o,
          a
            ? p.t(n)
            : h(
                t.on ? t.t(`？ ${n.zh}`, `？ ${t.jz(n.zh)}`) : `？ ${n.zh}`,
                `? ${n.en}`,
              ),
        ),
        o.setAttribute(
          `aria-label`,
          a
            ? p.t(n)
            : h(
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
        w,
        h(
          l === `hong-kong`
            ? `走近招財貓就會聽到鈴鐺聲。每找到一隻 +HK$100，找到一定數量有額外獎金。`
            : `走近招財貓就會聽到鈴鐺聲。每找到一隻 +NT$200，10、20、30 隻有額外獎金。`,
          `Get close and you hear a bell. Each cat pays a reward, with bonuses at milestones.`,
        ),
      ));
  }
  function Ce(e) {
    let n = _()[e.id] ?? 0,
      r = n > 0 || v().has(e.id),
      i = d(`div`, `bg-sheet`, w);
    (i.setAttribute(`role`, `dialog`),
      i.setAttribute(`aria-label`, r ? g(e.name) : `？？？`));
    let a = d(`div`, `bg-sheet-top`, i);
    he(a, to(e.id), !r);
    let o = d(`div`, `bg-sheet-words`, a);
    (d(`strong`, ``, o, r ? g(e.name) : `？？？`),
      r &&
        d(
          `small`,
          ``,
          o,
          n
            ? h(
                `持有 ${n}/${e.max}${n >= e.max ? ` · 帶滿了` : ``}`,
                `You have ${n}/${e.max}${n >= e.max ? ` · full` : ``}`,
              )
            : h(
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
          ? g(e.blurb)
          : h(
              t.on
                ? t.t(`線索：${e.hint.zh}`, `手がかり：${t.jz(e.hint.zh)}`)
                : `線索：${e.hint.zh}`,
              `Clue: ${e.hint.en}`,
            ),
      ));
    let s = d(`div`, `bg-sheet-row`, i);
    if (n && e.effect) {
      let n = se(m, e),
        r = me(
          s,
          `bg-use`,
          () => {
            let t = oe(m, e.id);
            (ge(g(t.text), t.ok ? (t.luck === !1 ? `info` : `good`) : `bad`),
              (_()[e.id] ?? 0) || (S = null),
              E());
          },
          n.ok
            ? h(
                t.on
                  ? t.t(`使用 · ${n.text.zh}`, `使う · ${t.jz(n.text.zh)}`)
                  : `使用 · ${n.text.zh}`,
                `Use · ${n.text.en}`,
              )
            : g(n.text),
        );
      r.disabled = !n.ok;
    } else n && d(`span`, `bg-keepsake`, s, h(`收藏品`, `Keepsake`));
    me(
      s,
      `bg-close`,
      () => {
        ((S = null), E());
      },
      h(`關閉`, `Close`),
    );
  }
  function E() {
    let e = f.scrollTop;
    (w.replaceChildren(),
      _e(),
      C &&
        d(`div`, `bg-notice ${C.kind}`, w, C.text).setAttribute(
          `role`,
          `status`,
        ),
      y === `use`
        ? ye()
        : y === `book`
          ? be()
          : $ && y === `garage`
            ? pe
              ? pe.mountGarage(w, p, E)
              : d(`p`, `bg-foot`, w, h(`車庫打開中…`, `Opening the garage…`))
            : Se(),
      S && r[S] && Ce(r[S]),
      (f.scrollTop = e));
  }
  let we = ie(() => E());
  return (
    E(),
    () => {
      ((T = !1), $ && pe?.resetGarage(), we(), clearTimeout(de), w.remove());
    }
  );
}
