// tokyo/assets/tokyo-CqLdAwml 20 — touch
// Lines 8443-8585 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Ia(e) {
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
      (r += `<text class="cp-l" x="${a - 4}" y="${o + 4}" text-anchor="end"><tspan class="cp-key">${Ra(c)}</tspan>  ${Ra(e(s))}</text>`));
  for (let [t, i, a, o, s, c] of n)
    ((r += `<path class="cp-lead" d="M${t} ${i}L${a - 12} ${o}H${a - 2}"/><circle class="cp-dot" cx="${t}" cy="${i}" r="3"/>`),
      (r += `<text class="cp-l" x="${a + 4}" y="${o + 4}"><tspan class="cp-key">${Ra(c)}</tspan>  ${Ra(e(s))}</text>`));
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
function La(e) {
  let t = (t, n, r, i = `middle`, a = ``) =>
      `<text class="ct-l ${a}" x="${t}" y="${n}" text-anchor="${i}">${Ra(e(r))}</text>`,
    n = (t, n, r, i, a = !1) =>
      `<circle class="ct-btn${a ? ` hot` : ``}" cx="${t}" cy="${n}" r="${r}"/><text class="ct-b" x="${t}" y="${n + 4}" text-anchor="middle">${Ra(e(i))}</text>`;
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
    ${n(690, 292, 30, Rr.attack, !0)}
    ${n(626, 306, 22, Rr.jump)}
    ${n(646, 244, 22, Rr.aim)}
    ${n(700, 222, 22, Rr.sprint)}
    ${n(566, 300, 22, Rr.enter, !0)}
    ${n(588, 236, 22, Rr.interact)}
    ${n(650, 196, 19, Rr.weaponNext)}
    ${t(565, 160, Q(`上車後換成 油門 / 煞車 踏板`, `In a vehicle: gas / brake pedals`), `middle`, `note`)}
  </svg>`;
}
function Ra(e) {
  return e.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
}
function za(e, t) {
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
  (c(`kbm`, G.kbm), c(`gamepad`, G.gamepad), c(`touch`, G.touch));
  let l = () => {
    for (let [e, t] of Object.entries(s)) t.classList.toggle(`on`, e === o);
    let t = (t) => e.t(t);
    ((i.innerHTML = o === `kbm` ? Fa(t) : o === `gamepad` ? Ia(t) : La(t)),
      (i.dataset.device = o),
      (a.textContent = ``));
    for (let [t, n] of Pa) {
      let r = B(`div`, `cg-sec`, a);
      e.renderDual(B(`div`, `cg-sec-title`, r), t);
      let i = B(`div`, `cg-grid`, r);
      for (let t of n) {
        let n = B(`div`, `cg-row`, i);
        ((n.dataset.nav = `1`), B(`span`, `cg-name`, n, e.t(t.msg)));
        let r = B(`span`, `cg-keys`, n);
        if (t.actions && !(o === `touch` && t.touch))
          for (let n of t.actions) Br(r, n, o, e.lang);
        else if (o === `kbm` && t.kbm)
          for (let n of t.kbm)
            n === `🖱`
              ? B(`span`, `kc kc-wide`, r, e.t(G.mouseMove))
              : B(`span`, `kc${n.length > 1 ? ` kc-wide` : ``}`, r, n);
        else if (o === `gamepad` && t.pad)
          for (let n of t.pad)
            n === `L` || n === `R`
              ? B(
                  `span`,
                  `kc kc-pad kc-wide`,
                  r,
                  e.t(n === `L` ? G.leftStick : G.rightStick),
                )
              : Lr(r, n);
        else if (o === `touch`) {
          if (t.touch) B(`span`, `kc kc-touch`, r, e.t(t.touch));
          else if (t.actions)
            for (let n of t.actions) Br(r, n, `touch`, e.lang);
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
