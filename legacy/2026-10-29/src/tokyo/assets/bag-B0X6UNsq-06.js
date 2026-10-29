// tokyo/assets/bag-B0X6UNsq 06 — setattribute
// Lines 3158-3544 of readable/tokyo/assets/bag-B0X6UNsq.pretty.js (statement-aligned).
function mountBag(f, p) {
  let m = p.ctx,
    h = (e, t) => p.t({ zh: e, en: t }),
    g = (e) => p.t(e),
    se = new Set(re());
  (ee(), f.replaceChildren());
  let _ = () => ae(m),
    ce = () => n.filter((e) => e.shelf === `use` && (_()[e.id] ?? 0) > 0),
    v = () => ne(m),
    y = ce().length || !se.size ? `use` : `book`,
    b = i(c),
    x = b,
    S = (e) => n.filter((t) => a(t, e)),
    C = null,
    w = null,
    le,
    T = d(`div`, `bg`, f),
    E = !0;
  Ta().then(() => {
    E && O();
  });
  let ue = c === `kaohsiung` || c === `tokyo`,
    D = null;
  e(
    () =>
      import(`./garage-BvwUBeJB.js`).then((e) => {
        ((D = e), E && y === `garage` && O());
      }),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25,
    ]),
  );
  let de = (e, t, n, r = ``) => {
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
    fe = (e, t, n = !1) => {
      let r = d(`span`, `bg-art${n ? ` locked` : ``}`, e);
      return ((r.innerHTML = t), r.setAttribute(`aria-hidden`, `true`), r);
    },
    pe = (e, t) => {
      ((w = { text: e, kind: t }),
        clearTimeout(le),
        (le = setTimeout(() => {
          ((w = null), O());
        }, 3600)));
    };
  function me() {
    let e = d(`nav`, `bg-tabs`, T);
    e.setAttribute(`aria-label`, h(`背包`, `Bag`));
    let r = v(),
      i = S(b),
      a = i.filter((e) => r.has(e.id)).length,
      o = ce().reduce((e, t) => e + (_()[t.id] ?? 0), 0),
      s = ve();
    for (let [r, c] of [
      [
        `use`,
        o
          ? h(
              t.on ? t.t(`道具 ${o}`, `アイテム ${o}`) : `道具 ${o}`,
              `Items ${o}`,
            )
          : h(`道具`, `Items`),
      ],
      [
        `book`,
        h(
          t.on
            ? t.t(`圖鑑 ${a}/${i.length}`, `図鑑 ${a}/${i.length}`)
            : `圖鑑 ${a}/${i.length}`,
          `Book ${a}/${i.length}`,
        ),
      ],
      [
        `cats`,
        h(
          t.on
            ? t.t(
                `招財貓 ${s.size}/${u.length}`,
                `招き猫 ${s.size}/${u.length}`,
              )
            : `招財貓 ${s.size}/${u.length}`,
          `Cats ${s.size}/${u.length}`,
        ),
      ],
      [`garage`, h(`車庫`, `Garage`)],
    ]) {
      let t = de(
        e,
        y === r ? `on` : ``,
        () => {
          ((y = r),
            (C = null),
            r === `book` && (x = b),
            O(),
            (f.scrollTop = 0));
        },
        c,
      );
      (t.setAttribute(`aria-current`, y === r ? `page` : `false`),
        (t.dataset.page = r),
        (r === `use`
          ? n.some((e) => e.shelf === `use` && se.has(e.id))
          : r === `book`
            ? n.some((e) => se.has(e.id))
            : r === `garage` && D?.tempting(m)) &&
          d(`i`, `bg-dot`, t).setAttribute(`aria-hidden`, `true`));
    }
    ue
      ? (e.children[2]?.remove(),
        (e.style.gridTemplateColumns = `repeat(3, 1fr)`))
      : (e.style.gridTemplateColumns = `repeat(4, 1fr)`);
  }
  function he(e, n) {
    let r = _()[n.id] ?? 0,
      i = r > 0 || v().has(n.id),
      a = de(e, `bg-card${i ? `` : ` locked`}${i && !r ? ` gone` : ``}`, () => {
        ((C = n.id), O());
      });
    ((a.dataset.item = n.id),
      fe(a, Ea(n.id), !i),
      d(`span`, `bg-name`, a, i ? g(n.name) : `？？？`),
      (r > 1 || (r === 1 && y === `book`)) && d(`b`, `bg-count`, a, `×${r}`),
      se.has(n.id) && d(`i`, `bg-dot`, a).setAttribute(`aria-hidden`, `true`),
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
  function ge() {
    let e = ce();
    if (!e.length) {
      let e = d(`div`, `bg-empty`, T);
      (fe(e, Ea(`red-white-bag`)),
        d(`strong`, ``, e, h(`背包空空的`, `Your bag is empty`)),
        b === `tokyo`
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
    let t = d(`div`, `bg-grid`, T);
    for (let n of e) he(t, n);
  }
  function _e() {
    let e = v(),
      t = d(`div`, `bg-books`, T);
    (t.setAttribute(`role`, `tablist`),
      (t.style.gridTemplateColumns = `repeat(${l.length}, 1fr)`));
    for (let n of l) {
      let r = S(n.id),
        i = de(
          t,
          x === n.id ? `on` : ``,
          () => {
            ((x = n.id), (C = null), O(), (f.scrollTop = 0));
          },
          `${g(n.name)} ${r.filter((t) => e.has(t.id)).length}/${r.length}`,
        );
      (i.setAttribute(`role`, `tab`),
        i.setAttribute(`aria-selected`, String(x === n.id)),
        r.some((e) => se.has(e.id)) &&
          d(`i`, `bg-dot`, i).setAttribute(`aria-hidden`, `true`));
    }
    for (let t of o) {
      let n = S(x).filter((e) => e.cat === t.id);
      if (!n.length) continue;
      let i = d(`div`, `bg-head`, T);
      (d(
        `strong`,
        ``,
        i,
        g(x === `hong-kong` ? t.hk : x === `tokyo` && r ? r[t.id] : t.name),
      ),
        d(`span`, ``, i, `${n.filter((t) => e.has(t.id)).length}/${n.length}`));
      let a = d(`div`, `bg-grid`, T);
      for (let e of n) he(a, e);
    }
  }
  function ve() {
    let e = new Set();
    for (let t of m.state.data.collectibles)
      t.startsWith(`cat-`) && e.add(t.slice(4));
    return e;
  }
  function ye() {
    let e = ve(),
      n = d(`div`, `bg-head`, T);
    (d(
      `strong`,
      ``,
      n,
      c === `kaohsiung`
        ? h(`高雄的招財貓`, `Kaohsiung's lucky cats`)
        : c === `hong-kong`
          ? h(`香港的招財貓`, `Hong Kong's lucky cats`)
          : h(`臺北的招財貓`, `Taipei's lucky cats`),
    ),
      d(`span`, ``, n, `${e.size}/${u.length}`));
    let r = d(`div`, `bg-grid cats`, T);
    (u.forEach((n, i) => {
      let a = e.has(n.id),
        o = d(`div`, `bg-card cat${a ? `` : ` locked`}`, r);
      (fe(o, Sa(i), !a),
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
        T,
        h(
          c === `hong-kong`
            ? `走近招財貓就會聽到鈴鐺聲。每找到一隻 +HK$100，找到一定數量有額外獎金。`
            : `走近招財貓就會聽到鈴鐺聲。每找到一隻 +NT$200，10、20、30 隻有額外獎金。`,
          `Get close and you hear a bell. Each cat pays a reward, with bonuses at milestones.`,
        ),
      ));
  }
  function be(e) {
    let n = _()[e.id] ?? 0,
      r = n > 0 || v().has(e.id),
      i = d(`div`, `bg-sheet`, T);
    (i.setAttribute(`role`, `dialog`),
      i.setAttribute(`aria-label`, r ? g(e.name) : `？？？`));
    let a = d(`div`, `bg-sheet-top`, i);
    fe(a, Ea(e.id), !r);
    let o = d(`div`, `bg-sheet-words`, a);
    (d(`strong`, ``, o, r ? g(e.name) : `？？？`),
      r &&
        d(
          `small`,
          ``,
          o,
          n
            ? h(
                t.on ? t.t(`持有 ${n}`, `所持 ${n}`) : `持有 ${n}`,
                `You have ${n}`,
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
      let n = te(m, e),
        r = de(
          s,
          `bg-use`,
          () => {
            let t = ie(m, e.id);
            (pe(g(t.text), t.ok ? (t.luck === !1 ? `info` : `good`) : `bad`),
              (_()[e.id] ?? 0) || (C = null),
              O());
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
    de(
      s,
      `bg-close`,
      () => {
        ((C = null), O());
      },
      h(`關閉`, `Close`),
    );
  }
  function O() {
    let e = f.scrollTop;
    (T.replaceChildren(),
      me(),
      w &&
        d(`div`, `bg-notice ${w.kind}`, T, w.text).setAttribute(
          `role`,
          `status`,
        ),
      y === `use`
        ? ge()
        : y === `book`
          ? _e()
          : y === `garage`
            ? D
              ? D.mountGarage(T, p, O)
              : d(`p`, `bg-foot`, T, h(`車庫打開中…`, `Opening the garage…`))
            : ye(),
      C && s[C] && be(s[C]),
      (f.scrollTop = e));
  }
  let xe = oe(() => O());
  return (
    O(),
    () => {
      ((E = !1), D?.resetGarage(), xe(), clearTimeout(le), T.remove());
    }
  );
}
