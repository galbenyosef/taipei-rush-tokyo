// tokyo/assets/tokyo-_rNKO_Y7 20 — msg
// Lines 8220-8551 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function qi() {
  return Bi()
    ? Hi() || !Vi()
      ? `none`
      : `api`
    : Vi()
      ? `api`
      : ji()
        ? `ios-guide`
        : `none`;
}
function Ji() {
  let e = (e) => e.preventDefault();
  (document.addEventListener(`gesturestart`, e, { passive: !1 }),
    document.addEventListener(`gesturechange`, e, { passive: !1 }),
    document.addEventListener(`dblclick`, e, { passive: !1 }));
  let t = 0;
  (document.addEventListener(
    `touchend`,
    (e) => {
      let n = e.timeStamp;
      (n - t < 300 &&
        !e.target?.closest?.(
          `button, input, [data-nav], .tc-btn, .tc-topbtn`,
        ) &&
        e.preventDefault(),
        (t = n));
    },
    { passive: !1 },
  ),
    document.addEventListener(
      `touchmove`,
      (e) => {
        e.touches.length > 1 && e.preventDefault();
      },
      { passive: !1 },
    ));
}
var Yi = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6.5A1.5 1.5 0 0 0 5 12.5v7A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H16"/></svg>`,
  Xi = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>`,
  Zi = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/></svg>`,
  Qi = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>`,
  $i = `<svg viewBox="0 0 48 48"><defs><linearGradient id="igc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ac8fa"/><stop offset="1" stop-color="#1a73e8"/></linearGradient></defs><rect x="2" y="2" width="44" height="44" rx="11" fill="#fff"/><circle cx="24" cy="24" r="17" fill="url(#igc)"/><g stroke="#fff" stroke-width="1" opacity=".7"><path d="M24 8.5v3M24 36.5v3M8.5 24h3M36.5 24h3"/></g><path d="M31.5 16.5 26 26l-9.5 5.5L22 22z" fill="#fff"/><path d="M31.5 16.5 26 26 22 22z" fill="#ff3b30"/></svg>`,
  ea = `<svg class="ig-arrow" viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h34M29 2l7 6-7 6"/></svg>`,
  ta = {
    safari: `Safari`,
    chrome: `Chrome`,
    edge: `Edge`,
    firefox: `Firefox`,
    line: `LINE`,
    facebook: `Facebook`,
    instagram: `Instagram`,
    webview: ``,
  };
function na(e, t, r = !1) {
  if (qi() !== `ios-guide` || (!r && W().iosGuideSeen)) return !1;
  let i = (t, n) => e.t({ zh: t, en: n }),
    a = Mi(),
    o =
      a === `line` || a === `facebook` || a === `instagram` || a === `webview`,
    s = a === `chrome` || a === `edge` || a === `firefox`,
    c = a === `safari` && Ni() >= 26,
    l = ta[a],
    u = V(`div`, `ig-wrap`, e.menuLayer);
  u.dataset.browser = a;
  let d = V(`div`, `ig-card`, u),
    f = V(`div`, `ig-head`, d);
  V(`div`, `ig-kicker`, f, i(`全螢幕遊玩`, `Play fullscreen`));
  let p, m;
  (a === `line`
    ? ((p = i(
        `用 Safari 開啟，才能全螢幕玩`,
        `Open in Safari to play fullscreen`,
      )),
      (m = i(
        `LINE 的內建瀏覽器不能「加入主畫面」，可用的記憶體也比較少，遊戲容易重新載入。先用 Safari 開啟《臺北狂飆》。`,
        `LINE's built-in browser can't add to the Home Screen and has less memory, so the game may reload. Open Taipei Rush in Safari first.`,
      )))
    : o
      ? ((p = i(
          `在瀏覽器開啟，才能全螢幕玩`,
          `Open in your browser to play fullscreen`,
        )),
        (m = i(
          n.on
            ? n.t(
                `${l ? l + ` 的` : `App `}內建瀏覽器不能「加入主畫面」，可用的記憶體也比較少。先在 Safari 開啟《臺北狂飆》。`,
                `${l ? l + ` の` : `アプリの`}内蔵ブラウザは「ホーム画面に追加」ができず、使えるメモリも少なめです。まずSafariで《臺北狂飆》を開いてください。`,
              )
            : `${l ? l + ` 的` : `App `}內建瀏覽器不能「加入主畫面」，可用的記憶體也比較少。先在 Safari 開啟《臺北狂飆》。`,
          `${l ? l + `'s` : `This app's`} built-in browser can't add to the Home Screen and has less memory. Open Taipei Rush in Safari first.`,
        )))
      : s
        ? ((p = i(
            `點網址列的分享 → 加入主畫面，就能全螢幕玩`,
            `Tap Share in the address bar → Add to Home Screen to play fullscreen`,
          )),
          (m = i(
            n.on
              ? n.t(
                  `iPhone 上的 ${l} 不支援網頁全螢幕。把《臺北狂飆》加到主畫面，從圖示開啟，就沒有網址列和工具列了。`,
                  `iPhoneの${l}はWebページの全画面表示に対応していません。《臺北狂飆》をホーム画面に追加してアイコンから開けば、アドレスバーもツールバーも消えます。`,
                )
              : `iPhone 上的 ${l} 不支援網頁全螢幕。把《臺北狂飆》加到主畫面，從圖示開啟，就沒有網址列和工具列了。`,
            `${l} on iPhone can't make web pages fullscreen. Add Taipei Rush to your Home Screen and launch it from the icon — no address bar, no toolbars.`,
          )))
        : ((p = c
            ? i(
                `點「⋯」→ 分享 → 加入主畫面，就能全螢幕玩`,
                `Tap ⋯ → Share → Add to Home Screen to play fullscreen`,
              )
            : i(
                `點分享 → 加入主畫面，就能全螢幕玩`,
                `Tap Share → Add to Home Screen to play fullscreen`,
              )),
          (m = i(
            `iPhone 的 Safari 不支援網頁全螢幕。把《臺北狂飆》加到主畫面，從圖示開啟，就沒有網址列和工具列了。`,
            `Safari on iPhone can't make web pages fullscreen. Add Taipei Rush to your Home Screen and launch it from the icon — no address bar, no toolbars.`,
          ))),
    V(`div`, `ig-title`, f, p),
    V(`div`, `ig-sub`, f, m));
  let h = V(`div`, `ig-steps`, d),
    g = (e, t, n, r) => {
      let i = V(`div`, `ig-step`, h),
        a = V(`div`, `ig-art`, i);
      ((a.innerHTML = t), V(`span`, `ig-n`, a, String(e)));
      let o = V(`div`, `ig-tx`, i);
      return (V(`b`, ``, o, n), V(`small`, ``, o, r), i);
    },
    _ = `<div class="ig-sheet"><div class="ig-row ig-dim"><i></i><span></span></div><div class="ig-row ig-hot">${Xi}<span>${i(`加入主畫面`, `Add to Home Screen`)}</span></div><div class="ig-row ig-tgl"><span>${i(`以網頁App開啟`, `Open as Web App`)}</span><b></b></div></div>`;
  (a === `line`
    ? g(
        1,
        `<div class="ig-open">${$i}<span>${i(`用 Safari 開啟`, `Open in Safari`)}</span></div>`,
        i(`點下方「用 Safari 開啟」`, `Tap “Open in Safari” below`),
        i(`《臺北狂飆》會在 Safari 打開`, `Taipei Rush opens in Safari`),
      )
    : o
      ? g(
          1,
          `<div class="ig-bar"><span class="ig-btn ig-dim">${Qi}</span><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Zi}</span></div>`,
          i(`點右上角「⋯」`, `Tap ⋯ at the top right`),
          i(`選「在外部瀏覽器開啟」`, `Choose “Open in external browser”`),
        )
      : s
        ? g(
            1,
            `<div class="ig-bar ig-bar-top"><span class="ig-url">${location.hostname}</span><span class="ig-btn ig-in ig-pulse">${Yi}</span></div>`,
            i(`點網址列上的「分享」`, `Tap Share in the address bar`),
            i(
              n.on
                ? n.t(
                    `${l} 網址列右側的方框箭頭`,
                    `${l}のアドレスバー右側にある四角と矢印のアイコン`,
                  )
                : `${l} 網址列右側的方框箭頭`,
              `The box-with-arrow at the right of ${l}’s address bar`,
            ),
          )
        : g(
            1,
            c
              ? `<div class="ig-bar"><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Zi}</span></div>`
              : `<div class="ig-bar"><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Yi}</span><span class="ig-btn ig-dim">${Zi}</span></div>`,
            c
              ? i(`點「⋯」→「分享」`, `Tap ⋯ → Share`)
              : i(`點「分享」`, `Tap Share`),
            c
              ? i(
                  `網址列旁的「⋯」選單裡有「分享」`,
                  `Share is inside the ⋯ menu next to the address bar`,
                )
              : i(
                  `Safari 工具列上的方框箭頭`,
                  `The box-with-arrow in Safari’s toolbar`,
                ),
          ),
    h.insertAdjacentHTML(`beforeend`, ea),
    o
      ? g(
          2,
          _,
          i(`在 Safari 加入主畫面`, `Add it to the Home Screen in Safari`),
          i(`「⋯」→「分享」→「加入主畫面」`, `⋯ → Share → Add to Home Screen`),
        )
      : g(
          2,
          _,
          i(`選「加入主畫面」`, `Choose “Add to Home Screen”`),
          i(`保持「以網頁App開啟」開啟`, `Keep “Open as Web App” switched on`),
        ),
    h.insertAdjacentHTML(`beforeend`, ea),
    g(
      3,
      `<div class="ig-home"><img src="/icons/apple-touch-icon.png" alt="" width="54" height="54"><span>臺北狂飆</span></div>`,
      i(`從主畫面開啟`, `Open from the Home Screen`),
      i(
        `橫放手機，全螢幕去臺北狂飆！`,
        `Turn your phone sideways — fullscreen!`,
      ),
    ));
  let v = V(`div`, `ig-btns`, d),
    y,
    b = () => {
      (G({ iosGuideSeen: !0 }),
        t.pop(y),
        u.classList.remove(`show`),
        setTimeout(() => u.remove(), 300));
    },
    x;
  if (a === `line`)
    (Z(e, v, { zh: `先在這裡玩`, en: `Play here` }, b, {
      cls: `ig-b`,
      dual: !1,
    }),
      (x = Z(
        e,
        v,
        { zh: `用 Safari 開啟`, en: `Open in Safari` },
        () => {
          (G({ iosGuideSeen: !0 }), (location.href = Pi()));
        },
        { cls: `ig-b primary`, dual: !1 },
      )));
  else {
    if (o) {
      let t = Z(
        e,
        v,
        { zh: `複製網址`, en: `Copy link` },
        () => {
          let e = () => {
            let e = t.querySelector(`.mbtn-label`);
            e && (e.textContent = i(`已複製 ✓`, `Copied ✓`));
          };
          try {
            navigator.clipboard
              ?.writeText(location.origin + location.pathname)
              .then(e, () => {});
          } catch {}
        },
        { cls: `ig-b`, dual: !1 },
      );
    } else
      Z(e, v, { zh: `先在瀏覽器玩`, en: `Play in the browser` }, b, {
        cls: `ig-b`,
        dual: !1,
      });
    x = Z(e, v, { zh: `知道了`, en: `Got it` }, b, {
      cls: `ig-b primary`,
      dual: !1,
    });
  }
  return (
    u.addEventListener(`click`, (e) => {
      e.target === u && b();
    }),
    (y = { root: d, onBack: b, initial: () => x }),
    t.push(y),
    requestAnimationFrame(() => u.classList.add(`show`)),
    !0
  );
}
var Q = (e, t) => ({ zh: e, en: t }),
  ra = [
    {
      msg: J.ctrlMove,
      kbm: [`W`, `A`, `S`, `D`],
      pad: [`L`],
      touch: Q(`左側搖桿`, `Left joystick`),
    },
    {
      msg: J.ctrlLook,
      kbm: [`🖱`],
      pad: [`R`],
      touch: Q(`右側滑動`, `Drag the right side`),
    },
    {
      msg: J.ctrlSprint,
      actions: [`sprint`],
      touch: Q(`搖桿推到底 / 衝刺鍵`, `Push the stick fully / Run`),
    },
    { msg: Q(`跳躍`, `Jump`), actions: [`jump`] },
    { msg: J.ctrlAttack, actions: [`attack`] },
    { msg: J.ctrlAim, actions: [`aim`] },
    {
      msg: J.ctrlWeapon,
      actions: [`weaponNext`],
      touch: Q(
        `換武器鍵 / 點右上角武器圖示`,
        `Swap button / tap the weapon icon`,
      ),
    },
    { msg: J.ctrlReload, actions: [`reload`] },
    { msg: J.ctrlInteract, actions: [`interact`] },
  ],
  ia = [
    { msg: J.ctrlEnter, actions: [`enter`] },
    {
      msg: Q(`油門`, `Throttle`),
      kbm: [`W`],
      pad: [`RT`],
      touch: Q(`油門踏板`, `Gas pedal`),
    },
    {
      msg: Q(`煞車 / 倒車`, `Brake / Reverse`),
      kbm: [`S`],
      pad: [`LT`],
      touch: Q(`煞車踏板`, `Brake pedal`),
    },
    {
      msg: Q(`轉向`, `Steer`),
      kbm: [`A`, `D`],
      pad: [`L`],
      touch: Q(`左側搖桿`, `Left joystick`),
    },
    { msg: Q(`手煞車（甩尾）`, `Handbrake (drift)`), actions: [`handbrake`] },
    { msg: J.ctrlHorn, actions: [`horn`] },
    { msg: J.ctrlRadio, actions: [`radio`] },
    { msg: J.ctrlCamera, actions: [`camera`] },
    { msg: J.ctrlLookBack, actions: [`lookBehind`], touch: Q(`—`, `—`) },
  ],
  aa = [
    { msg: J.ctrlPhone, actions: [`phone`] },
    { msg: J.ctrlMap, actions: [`map`] },
    { msg: J.ctrlPause, actions: [`pause`] },
  ],
  oa = [
    [Q(`步行`, `On foot`), ra],
    [Q(`駕駛 · 機車與汽車`, `Driving · scooters, motorcycles & cars`), ia],
    [Q(`介面`, `Menus`), aa],
  ];
