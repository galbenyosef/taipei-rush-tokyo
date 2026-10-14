// tokyo/assets/region-tokyo-BcM3fReU 33 — next
// Lines 19042-19060 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Gd(e, t, n, r, i, a = 2) {
  for (let o = 0; o < a; o++) {
    let a = Pd(i + o * 0.45);
    I(e, n, a, r, 2, `#6a4a2a`);
    for (let i = n + 2; i < n + r - 4; i += 5) {
      let n = 14 + t.next() * 8;
      I(
        e,
        i,
        a - n,
        3.4,
        n,
        [`#2a5a2a`, `#6a3a1a`, `#e8e0c8`, `#3a2a1a`, `#a0a8b0`][
          Math.floor(t.next() * 5)
        ],
      );
    }
  }
}
