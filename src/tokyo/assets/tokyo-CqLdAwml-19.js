// tokyo/assets/tokyo-CqLdAwml 19 — msg
// Lines 8095-8442 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Aa(e, t, r = !1) {
  if (xa() !== `ios-guide` || (!r && K().iosGuideSeen)) return !1;
  let i = (t, n) => e.t({ zh: t, en: n }),
    a = oa(),
    o =
      a === `line` || a === `facebook` || a === `instagram` || a === `webview`,
    s = a === `chrome` || a === `edge` || a === `firefox`,
    c = a === `safari` && sa() >= 26,
    l = ka[a],
    u = B(`div`, `ig-wrap`, e.menuLayer);
  u.dataset.browser = a;
  let d = B(`div`, `ig-card`, u),
    f = B(`div`, `ig-head`, d);
  B(`div`, `ig-kicker`, f, i(`全螢幕遊玩`, `Play fullscreen`));
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
    B(`div`, `ig-title`, f, p),
    B(`div`, `ig-sub`, f, m));
  let h = B(`div`, `ig-steps`, d),
    g = (e, t, n, r) => {
      let i = B(`div`, `ig-step`, h),
        a = B(`div`, `ig-art`, i);
      ((a.innerHTML = t), B(`span`, `ig-n`, a, String(e)));
      let o = B(`div`, `ig-tx`, i);
      return (B(`b`, ``, o, n), B(`small`, ``, o, r), i);
    },
    _ = `<div class="ig-sheet"><div class="ig-row ig-dim"><i></i><span></span></div><div class="ig-row ig-hot">${wa}<span>${i(`加入主畫面`, `Add to Home Screen`)}</span></div><div class="ig-row ig-tgl"><span>${i(`以網頁App開啟`, `Open as Web App`)}</span><b></b></div></div>`;
  (a === `line`
    ? g(
        1,
        `<div class="ig-open">${Da}<span>${i(`用 Safari 開啟`, `Open in Safari`)}</span></div>`,
        i(`點下方「用 Safari 開啟」`, `Tap “Open in Safari” below`),
        i(`《臺北狂飆》會在 Safari 打開`, `Taipei Rush opens in Safari`),
      )
    : o
      ? g(
          1,
          `<div class="ig-bar"><span class="ig-btn ig-dim">${Ea}</span><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Ta}</span></div>`,
          i(`點右上角「⋯」`, `Tap ⋯ at the top right`),
          i(`選「在外部瀏覽器開啟」`, `Choose “Open in external browser”`),
        )
      : s
        ? g(
            1,
            `<div class="ig-bar ig-bar-top"><span class="ig-url">${location.hostname}</span><span class="ig-btn ig-in ig-pulse">${Ca}</span></div>`,
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
              ? `<div class="ig-bar"><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Ta}</span></div>`
              : `<div class="ig-bar"><span class="ig-url">臺北狂飆</span><span class="ig-btn ig-pulse">${Ca}</span><span class="ig-btn ig-dim">${Ta}</span></div>`,
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
    h.insertAdjacentHTML(`beforeend`, Oa),
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
    h.insertAdjacentHTML(`beforeend`, Oa),
    g(
      3,
      `<div class="ig-home"><img src="/icons/apple-touch-icon.png" alt="" width="54" height="54"><span>臺北狂飆</span></div>`,
      i(`從主畫面開啟`, `Open from the Home Screen`),
      i(
        `橫放手機，全螢幕去臺北狂飆！`,
        `Turn your phone sideways — fullscreen!`,
      ),
    ));
  let v = B(`div`, `ig-btns`, d),
    y,
    b = () => {
      (q({ iosGuideSeen: !0 }),
        t.pop(y),
        u.classList.remove(`show`),
        setTimeout(() => u.remove(), 300));
    },
    x;
  if (a === `line`)
    (J(e, v, { zh: `先在這裡玩`, en: `Play here` }, b, {
      cls: `ig-b`,
      dual: !1,
    }),
      (x = J(
        e,
        v,
        { zh: `用 Safari 開啟`, en: `Open in Safari` },
        () => {
          (q({ iosGuideSeen: !0 }), (location.href = ca()));
        },
        { cls: `ig-b primary`, dual: !1 },
      )));
  else {
    if (o) {
      let t = J(
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
      J(e, v, { zh: `先在瀏覽器玩`, en: `Play in the browser` }, b, {
        cls: `ig-b`,
        dual: !1,
      });
    x = J(e, v, { zh: `知道了`, en: `Got it` }, b, {
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
  ja = [
    {
      msg: G.ctrlMove,
      kbm: [`W`, `A`, `S`, `D`],
      pad: [`L`],
      touch: Q(`左側搖桿`, `Left joystick`),
    },
    {
      msg: G.ctrlLook,
      kbm: [`🖱`],
      pad: [`R`],
      touch: Q(`右側滑動`, `Drag the right side`),
    },
    {
      msg: G.ctrlSprint,
      actions: [`sprint`],
      touch: Q(`搖桿推到底 / 衝刺鍵`, `Push the stick fully / Run`),
    },
    { msg: Q(`跳躍`, `Jump`), actions: [`jump`] },
    { msg: G.ctrlAttack, actions: [`attack`] },
    { msg: G.ctrlAim, actions: [`aim`] },
    {
      msg: G.ctrlWeapon,
      actions: [`weaponNext`],
      touch: Q(
        `換武器鍵 / 點右上角武器圖示`,
        `Swap button / tap the weapon icon`,
      ),
    },
    { msg: G.ctrlReload, actions: [`reload`] },
    { msg: G.ctrlInteract, actions: [`interact`] },
  ],
  Ma = [
    { msg: G.ctrlEnter, actions: [`enter`] },
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
    { msg: G.ctrlHorn, actions: [`horn`] },
    { msg: G.ctrlRadio, actions: [`radio`] },
    { msg: G.ctrlCamera, actions: [`camera`] },
    { msg: G.ctrlLookBack, actions: [`lookBehind`], touch: Q(`—`, `—`) },
  ],
  Na = [
    { msg: G.ctrlPhone, actions: [`phone`] },
    { msg: G.ctrlMap, actions: [`map`] },
    { msg: G.ctrlPause, actions: [`pause`] },
  ],
  Pa = [
    [Q(`步行`, `On foot`), ja],
    [Q(`駕駛 · 機車與汽車`, `Driving · scooters, motorcycles & cars`), Ma],
    [Q(`介面`, `Menus`), Na],
  ];
function Fa(e) {
  let t = [],
    n = (e, n, r, i) => t.push({ k: e, x: n, y: r, w: i });
  (n(`Esc`, 0, 0),
    n(`Tab`, 0, 70, 98),
    `QWERT`.split(``).forEach((e, t) => n(e, 104 + t * 70, 70)),
    `ASDFGH`.split(``).forEach((e, t) => n(e, 124 + t * 70, 140)),
    n(`Shift`, 0, 210, 154),
    `ZXCVBNM`.split(``).forEach((e, t) => n(e, 160 + t * 70, 210)),
    n(`Space`, 230, 280, 300));
  let r = {
      Esc: [Q(`暫停`, `Pause`), null, `ui`],
      Tab: [Q(`換武器`, `Weapon`), null, `act`],
      Q: [Q(`電台`, `Radio`), null, `drive`],
      W: [Q(`前進`, `Forward`), Q(`油門`, `Gas`), `move`],
      E: [Q(`互動`, `Use`), null, `act`],
      R: [Q(`裝填`, `Reload`), null, `act`],
      T: [Q(`手機`, `Phone`), null, `ui`],
      A: [Q(`左`, `Left`), Q(`轉向`, `Steer`), `move`],
      S: [Q(`後退`, `Back`), Q(`煞車`, `Brake`), `move`],
      D: [Q(`右`, `Right`), Q(`轉向`, `Steer`), `move`],
      F: [Q(`上下車`, `Get in`), null, `act`],
      H: [Q(`喇叭`, `Horn`), null, `drive`],
      Shift: [Q(`衝刺`, `Sprint`), null, `act`],
      C: [Q(`回頭看`, `Look back`), null, `drive`],
      V: [Q(`鏡頭`, `Camera`), null, `drive`],
      M: [Q(`地圖`, `Map`), null, `ui`],
      Space: [Q(`跳躍`, `Jump`), Q(`手煞車甩尾`, `Handbrake`), `act`],
    },
    i = ``;
  for (let n of t) {
    let t = n.w ?? 64,
      a = r[n.k];
    if (
      ((i += `<g class="ck${a ? ` on c-${a[2]}` : ``}" transform="translate(${n.x} ${n.y})"><rect width="${t}" height="64" rx="8"/>`),
      !a)
    ) {
      i += `<text class="ck-k" x="${t / 2}" y="38" text-anchor="middle">${n.k}</text></g>`;
      continue;
    }
    ((i += `<text class="ck-k" x="9" y="21">${n.k}</text>`),
      (i += `<text class="ck-a" x="${t / 2}" y="${a[1] ? 42 : 48}" text-anchor="middle">${Ra(e(a[0]))}</text>`),
      a[1] &&
        (i += `<text class="ck-a2" x="${t / 2}" y="57" text-anchor="middle">${Ra(e(a[1]))}</text>`),
      (i += `</g>`));
  }
  return (
    (i += `<g class="cmouse" transform="translate(690 38)">
    <path class="cm-body" d="M60 0C94 0 120 28 120 68V176C120 216 94 246 60 246S0 216 0 176V68C0 28 26 0 60 0Z"/>
    <path class="cm-l" d="M57 3C28 6 3 30 3 68V108H57Z"/><path class="cm-r" d="M63 3C92 6 117 30 117 68V108H63Z"/>
    <rect class="cm-w" x="52" y="30" width="16" height="40" rx="8"/>
    <text class="ck-a" x="29" y="92" text-anchor="middle">${Ra(e(Q(`攻擊`, `Attack`)))}</text>
    <text class="ck-a" x="91" y="92" text-anchor="middle">${Ra(e(Q(`瞄準`, `Aim`)))}</text>
    <text class="ck-a dim" x="60" y="152" text-anchor="middle">${Ra(e(Q(`移動滑鼠`, `Move`)))}</text>
    <text class="ck-a dim" x="60" y="172" text-anchor="middle">${Ra(e(Q(`＝視角`, `= Look`)))}</text>
    <text class="ck-a dim" x="60" y="-12" text-anchor="middle">${Ra(e(Q(`滾輪：換武器`, `Wheel: weapon`)))}</text>
  </g>`),
    [
      [`move`, Q(`移動 / 駕駛`, `Move / drive`)],
      [`act`, Q(`動作`, `Actions`)],
      [`drive`, Q(`車上`, `In vehicles`)],
      [`ui`, Q(`介面`, `Menus`)],
    ].forEach(([t, n], r) => {
      let a = 560 + (r % 2) * 150,
        o = 296 + Math.floor(r / 2) * 26;
      i += `<g class="ck on c-${t} ck-leg" transform="translate(${a} ${o})"><rect width="16" height="16" rx="4"/><text class="ck-l" x="24" y="13">${Ra(e(n))}</text></g>`;
    }),
    `<svg class="cart cart-kbm" viewBox="-4 -34 850 384" aria-hidden="true">${i}</svg>`
  );
}
