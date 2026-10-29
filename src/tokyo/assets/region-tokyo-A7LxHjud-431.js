// tokyo/assets/region-tokyo-A7LxHjud 431 — math
// Lines 154116-154250 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function wRe(e, t) {
  let n = e.ctx,
    r = Ge(n),
    i = (e) => n.t(Ye(r, e)),
    a = null,
    o = null,
    s = null,
    c = null,
    l = null,
    u = !1;
  if (typeof document < `u`) {
    if (!document.getElementById(`tk-auc-css`)) {
      let e = document.createElement(`style`);
      ((e.id = `tk-auc-css`),
        (e.textContent = CRe),
        document.head.appendChild(e));
    }
    ((a = document.createElement(`div`)),
      (a.id = `tk-auc`),
      (a.innerHTML = `<div class="ta-row"><span class="ta-title"></span><span class="ta-n"></span></div><div class="ta-meter"><div class="ta-heat"></div><div class="ta-band"></div></div><div class="ta-key"></div><div class="ta-flash"></div>`),
      (a.querySelector(`.ta-title`).textContent = i(
        N(
          `叫賣：再來一包！`,
          `The auction: one more!`,
          `叩き売り：もういっちょ！`,
        ),
      )));
    let e = n.input.device;
    (Kn(
      a.querySelector(`.ta-key`),
      n.t(
        N(
          `熱氣到金色區間時按 {interact}（或點這裡）喊「もういっちょ！」`,
          `When the heat hits the gold band, press {interact} (or tap here): 「もういっちょ！」`,
        ),
      ),
      e === `gamepad` || e === `touch` ? e : `kbm`,
      n.state.lang,
    ),
      (o = a.querySelector(`.ta-heat`)),
      (s = a.querySelector(`.ta-band`)),
      (c = a.querySelector(`.ta-n`)),
      (l = a.querySelector(`.ta-flash`)),
      a.addEventListener(`pointerdown`, (e) => {
        (e.preventDefault(), (u = !0));
      }),
      document.body.appendChild(a));
  }
  let d = () => a?.remove();
  (e.onCleanup(d), e.lockPlayer(!0), e.onCleanup(() => e.lockPlayer(!1)));
  let f = n.params.has(`autosolve`),
    p = 0,
    m = 0,
    h = 0.15,
    g = 0.15,
    _ = [0.7, 0.88],
    v = 0,
    y = 0,
    b = 1.2,
    x = (e) => {
      (l && (l.textContent = i(e)), (v = 1.6));
    },
    S = { kind: `auction`, x: e.px, z: e.pz },
    C = () => {
      s &&
        ((s.style.left = `${_[0] * 100}%`),
        (s.style.width = `${(_[1] - _[0]) * 100}%`));
    };
  C();
  let w = !0;
  return (
    await e.until((r) => {
      ((e.waitFor = S),
        (h += r * g * (0.85 + 0.3 * Math.sin(n.time.real * 3.1))),
        (b -= r),
        b <= 0 && ((b = 2.4 + Math.random() * 1.2), t.onCall?.(y++)));
      let i = !1,
        a = !1;
      try {
        a = n.input.pressed(`interact`) || n.input.pressed(`jump`);
      } catch {}
      if (
        (w ? (w = a) : (i = a),
        (u &&= ((i = !0), !1)),
        f && h >= (_[0] + _[1]) / 2 && (i = !0),
        i)
      ) {
        if (h >= _[0] && h <= _[1]) {
          (p++, (h = 0.1), (g = Math.min(0.42, g + 0.05)));
          let e = Math.max(0.1, 0.18 - p * 0.015),
            n = 0.62 + Math.random() * (0.88 - e - 0.62);
          ((_ = [n, n + e]),
            C(),
            x(N(`賣出！`, `Sold!`, `売れた！`)),
            t.onSale?.(p));
        } else
          h < _[0] &&
            ((h = Math.max(0, h - 0.15)),
            m++,
            x(
              N(
                `太早了……群眾還沒熱起來`,
                `Too early… the crowd isn’t warm yet`,
                `早すぎ……まだ温まってない`,
              ),
            ),
            t.onMiss?.(`early`));
      }
      return (
        h > 1 &&
          (m++,
          (h = 0.3),
          x(
            N(
              `太晚了！前排的人散了`,
              `Too late! The front row wandered off`,
              `遅い！前の客が離れた`,
            ),
          ),
          t.onMiss?.(`late`)),
        o && (o.style.width = `${Math.min(1, h) * 100}%`),
        c && (c.textContent = `${p} / ${t.bags}`),
        v > 0 && (v -= r) <= 0 && l && (l.textContent = ``),
        p >= t.bags
      );
    }),
    (e.waitFor = null),
    d(),
    e.lockPlayer(!1),
    { sold: p, misses: m }
  );
}
r.add({
  "打倒 ネオンリンク 的人（只用拳頭）": `ネオンリンクの連中を倒せ（素手のみ）`,
});
