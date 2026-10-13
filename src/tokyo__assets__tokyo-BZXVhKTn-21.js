// tokyo__assets__tokyo-BZXVhKTn 21 — touch
// Lines 8312-8524 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function Zi(e) {
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
      (i += `<text class="ck-a" x="${t / 2}" y="${a[1] ? 42 : 48}" text-anchor="middle">${ea(e(a[0]))}</text>`),
      a[1] &&
        (i += `<text class="ck-a2" x="${t / 2}" y="57" text-anchor="middle">${ea(e(a[1]))}</text>`),
      (i += `</g>`));
  }
  return (
    (i += `<g class="cmouse" transform="translate(690 38)">
    <path class="cm-body" d="M60 0C94 0 120 28 120 68V176C120 216 94 246 60 246S0 216 0 176V68C0 28 26 0 60 0Z"/>
    <path class="cm-l" d="M57 3C28 6 3 30 3 68V108H57Z"/><path class="cm-r" d="M63 3C92 6 117 30 117 68V108H63Z"/>
    <rect class="cm-w" x="52" y="30" width="16" height="40" rx="8"/>
    <text class="ck-a" x="29" y="92" text-anchor="middle">${ea(e(Q(`攻擊`, `Attack`)))}</text>
    <text class="ck-a" x="91" y="92" text-anchor="middle">${ea(e(Q(`瞄準`, `Aim`)))}</text>
    <text class="ck-a dim" x="60" y="152" text-anchor="middle">${ea(e(Q(`移動滑鼠`, `Move`)))}</text>
    <text class="ck-a dim" x="60" y="172" text-anchor="middle">${ea(e(Q(`＝視角`, `= Look`)))}</text>
    <text class="ck-a dim" x="60" y="-12" text-anchor="middle">${ea(e(Q(`滾輪：換武器`, `Wheel: weapon`)))}</text>
  </g>`),
    [
      [`move`, Q(`移動 / 駕駛`, `Move / drive`)],
      [`act`, Q(`動作`, `Actions`)],
      [`drive`, Q(`車上`, `In vehicles`)],
      [`ui`, Q(`介面`, `Menus`)],
    ].forEach(([t, n], r) => {
      let a = 560 + (r % 2) * 150,
        o = 296 + Math.floor(r / 2) * 26;
      i += `<g class="ck on c-${t} ck-leg" transform="translate(${a} ${o})"><rect width="16" height="16" rx="4"/><text class="ck-l" x="24" y="13">${ea(e(n))}</text></g>`;
    }),
    `<svg class="cart cart-kbm" viewBox="-4 -34 850 384" aria-hidden="true">${i}</svg>`
  );
}
function Qi(e) {
  let t = [
      [262, 70, 150, 44, Q(`瞄準 · 煞車`, `Aim · Brake`), `LT`],
      [240, 99, 150, 84, Q(`電台 · 上一把武器`, `Radio · Prev wpn`), `LB`],
      [
        256,
        162,
        150,
        142,
        Q(`移動 · 轉向（按下：喇叭）`, `Move · Steer · L3 horn`),
        `L`,
      ],
      [332, 204, 150, 202, Q(`▲ 手機　▼ 回頭看`, `▲ Phone  ▼ Look back`), `✚`],
      [312, 238, 150, 238, Q(`◀ 上一把　▶ 裝填`, `◀ Prev wpn  ▶ Reload`), `✚`],
      [350, 156, 150, 280, Q(`地圖`, `Map`), `⧉`],
    ],
    n = [
      [500, 70, 612, 44, Q(`攻擊 · 油門`, `Attack · Gas`), `RT`],
      [520, 99, 612, 84, Q(`下一把武器`, `Next weapon`), `RB`],
      [494, 128, 612, 124, Q(`上車 / 下車`, `Get in / out`), `Y`],
      [522, 164, 612, 160, Q(`衝刺`, `Sprint`), `B`],
      [498, 196, 612, 196, Q(`跳 · 手煞車`, `Jump · Handbrake`), `A`],
      [442, 172, 612, 232, Q(`互動`, `Interact`), `X`],
      [446, 236, 612, 268, Q(`視角（按下：鏡頭）`, `Look · R3 camera`), `R`],
      [410, 156, 612, 304, Q(`暫停`, `Pause`), `☰`],
    ],
    r = ``;
  for (let [n, i, a, o, s, c] of t)
    ((r += `<path class="cp-lead" d="M${n} ${i}L${a + 12} ${o}H${a + 2}"/><circle class="cp-dot" cx="${n}" cy="${i}" r="3"/>`),
      (r += `<text class="cp-l" x="${a - 4}" y="${o + 4}" text-anchor="end"><tspan class="cp-key">${ea(c)}</tspan>  ${ea(e(s))}</text>`));
  for (let [t, i, a, o, s, c] of n)
    ((r += `<path class="cp-lead" d="M${t} ${i}L${a - 12} ${o}H${a - 2}"/><circle class="cp-dot" cx="${t}" cy="${i}" r="3"/>`),
      (r += `<text class="cp-l" x="${a + 4}" y="${o + 4}"><tspan class="cp-key">${ea(c)}</tspan>  ${ea(e(s))}</text>`));
  return `<svg class="cart cart-pad" viewBox="-80 22 920 306" aria-hidden="true"><path class="cp-body" d="M262 96C236 96 214 110 204 138L168 250C156 290 182 318 212 318C236 318 250 304 262 286L292 244H468L498 286C510 304 524 318 548 318C578 318 604 290 592 250L556 138C546 110 524 96 498 96Z"/>
    <rect class="cp-trig" x="236" y="62" width="62" height="30" rx="10"/><text class="cp-t" x="267" y="82" text-anchor="middle">LT</text>
    <rect class="cp-trig" x="462" y="62" width="62" height="30" rx="10"/><text class="cp-t" x="493" y="82" text-anchor="middle">RT</text>
    <rect class="cp-bump" x="232" y="92" width="72" height="14" rx="7"/><rect class="cp-bump" x="456" y="92" width="72" height="14" rx="7"/>
    <circle class="cp-stick" cx="276" cy="162" r="27"/><circle class="cp-stick-in" cx="276" cy="162" r="17"/><text class="cp-t" x="276" y="167" text-anchor="middle">L</text>
    <circle class="cp-stick" cx="428" cy="226" r="27"/><circle class="cp-stick-in" cx="428" cy="226" r="17"/><text class="cp-t" x="428" y="231" text-anchor="middle">R</text>
    <g class="cp-dpad" transform="translate(332 226)"><path d="M-9 -27H9V-9H27V9H9V27H-9V9H-27V-9H-9Z"/></g>
    <circle class="cp-face y" cx="484" cy="136" r="15"/><text class="cp-t dark" x="484" y="141" text-anchor="middle">Y</text>
    <circle class="cp-face x" cx="456" cy="164" r="15"/><text class="cp-t" x="456" y="169" text-anchor="middle">X</text>
    <circle class="cp-face b" cx="512" cy="164" r="15"/><text class="cp-t" x="512" y="169" text-anchor="middle">B</text>
    <circle class="cp-face a" cx="484" cy="192" r="15"/><text class="cp-t" x="484" y="197" text-anchor="middle">A</text>
    <rect class="cp-small" x="346" y="150" width="20" height="13" rx="6"/><rect class="cp-small" x="394" y="150" width="20" height="13" rx="6"/>${r}</svg>`;
}
function $i(e) {
  let t = (t, n, r, i = `middle`, a = ``) =>
      `<text class="ct-l ${a}" x="${t}" y="${n}" text-anchor="${i}">${ea(e(r))}</text>`,
    n = (t, n, r, i, a = !1) =>
      `<circle class="ct-btn${a ? ` hot` : ``}" cx="${t}" cy="${n}" r="${r}"/><text class="ct-b" x="${t}" y="${n + 4}" text-anchor="middle">${ea(e(i))}</text>`;
  return `<svg class="cart cart-touch" viewBox="0 0 800 380" aria-hidden="true">
    <rect class="ct-phone" x="20" y="16" width="760" height="348" rx="44"/>
    <rect class="ct-screen" x="46" y="34" width="708" height="312" rx="26"/>
    <rect class="ct-look" x="400" y="60" width="330" height="150" rx="16"/>
    ${t(565, 118, Q(`右側滑動：轉視角`, `Drag right side: look`), `middle`, `soft`)}
    <circle class="ct-mm" cx="104" cy="92" r="36"/>${t(104, 150, Q(`小地圖`, `Minimap`), `middle`, `soft`)}
    <rect class="ct-top" x="154" y="62" width="28" height="28" rx="7"/><rect class="ct-top" x="188" y="62" width="28" height="28" rx="7"/><rect class="ct-top" x="222" y="62" width="28" height="28" rx="7"/>
    ${t(260, 82, Q(`暫停 · 地圖 · 手機`, `Pause · Map · Phone`), `start`, `soft`)}
    <circle class="ct-stick" cx="150" cy="266" r="52"/><circle class="ct-knob" cx="170" cy="252" r="22"/>
    ${t(150, 336, Q(`移動（推到底＝衝刺）`, `Move (push fully = run)`))}
    ${n(690, 292, 30, wn.attack, !0)}
    ${n(626, 306, 22, wn.jump)}
    ${n(646, 244, 22, wn.aim)}
    ${n(700, 222, 22, wn.sprint)}
    ${n(566, 300, 22, wn.enter, !0)}
    ${n(588, 236, 22, wn.interact)}
    ${n(650, 196, 19, wn.weaponNext)}
    ${t(565, 160, Q(`上車後換成 油門 / 煞車 踏板`, `In a vehicle: gas / brake pedals`), `middle`, `note`)}
  </svg>`;
}
function ea(e) {
  return e.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
}
function ta(e, t) {
  let n = B(`div`, `panel controls cg`, t),
    r = B(`div`, `cg-tabs`, n),
    i = B(`div`, `cg-art`, n),
    a = B(`div`, `cg-list`, n),
    o = e.touch ? `touch` : e.ctx.input.device,
    s = {},
    c = (t, n) => {
      let i = B(`button`, `cg-tab`, r);
      ((i.type = `button`),
        (i.dataset.nav = `1`),
        e.bind(i, n),
        i.addEventListener(`click`, (n) => {
          (n.stopPropagation(), o !== t && e.sfx(`ui_click`), (o = t), l());
        }),
        (s[t] = i));
    };
  (c(`kbm`, J.kbm), c(`gamepad`, J.gamepad), c(`touch`, J.touch));
  let l = () => {
    for (let [e, t] of Object.entries(s)) t.classList.toggle(`on`, e === o);
    let t = (t) => e.t(t);
    ((i.innerHTML = o === `kbm` ? Zi(t) : o === `gamepad` ? Qi(t) : $i(t)),
      (i.dataset.device = o),
      (a.textContent = ``));
    for (let [t, n] of Xi) {
      let r = B(`div`, `cg-sec`, a);
      e.renderDual(B(`div`, `cg-sec-title`, r), t);
      let i = B(`div`, `cg-grid`, r);
      for (let t of n) {
        let n = B(`div`, `cg-row`, i);
        ((n.dataset.nav = `1`), B(`span`, `cg-name`, n, e.t(t.msg)));
        let r = B(`span`, `cg-keys`, n);
        if (t.actions && !(o === `touch` && t.touch))
          for (let n of t.actions) En(r, n, o, e.lang);
        else if (o === `kbm` && t.kbm)
          for (let n of t.kbm)
            n === `🖱`
              ? B(`span`, `kc kc-wide`, r, e.t(J.mouseMove))
              : B(`span`, `kc${n.length > 1 ? ` kc-wide` : ``}`, r, n);
        else if (o === `gamepad` && t.pad)
          for (let n of t.pad)
            n === `L` || n === `R`
              ? B(
                  `span`,
                  `kc kc-pad kc-wide`,
                  r,
                  e.t(n === `L` ? J.leftStick : J.rightStick),
                )
              : Cn(r, n);
        else if (o === `touch`) {
          if (t.touch) B(`span`, `kc kc-touch`, r, e.t(t.touch));
          else if (t.actions)
            for (let n of t.actions) En(r, n, `touch`, e.lang);
        }
      }
    }
  };
  return (
    l(),
    e.onLang(l),
    {
      el: n,
      sync() {
        let t = e.touch ? `touch` : e.ctx.input.device;
        t !== o && ((o = t), l());
      },
    }
  );
}
