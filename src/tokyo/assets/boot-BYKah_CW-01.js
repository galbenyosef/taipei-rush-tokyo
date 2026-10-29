// tokyo/assets/boot-BYKah_CW 01 — settleidentity
// Lines 1-40 of readable/tokyo/assets/boot-BYKah_CW.pretty.js (statement-aligned).
import { $n as e, Un as t, Wn as n, Yn as r } from "./engine-14d5lda2.js";
import { t as i } from "./notice-DnIsya3-.js";
import { i as a, l as o, o as s } from "./session-DVEw0yxj.js";
import { a as c, c as l, i as u, t as d } from "./controllers-DHBZ_k07.js";
function settleIdentity() {
  r();
  let e = a(),
    i = e && !o() && e.anonymous === !1 ? e.user_id : `guest`,
    s = n();
  return (s !== i && t(i, s === `guest`), u(n()), n());
}
async function hydrateBeforeTravel() {
  if ((settleIdentity(), !a() || o())) return;
  let t = d(),
    n = !1,
    r = async () => {
      let r = await s(!1);
      if (!r) {
        (!a() && e().expired && i(`expired`), settleIdentity());
        return;
      }
      n ||
        (settleIdentity() === (r.anonymous === !1 ? r.user_id : `guest`) &&
          (await c(r), !n && (await t.connect(r))));
    },
    u;
  try {
    await Promise.race([
      r(),
      new Promise((e) => {
        u = setTimeout(() => {
          ((n = !0), t.disconnect(), l().disconnect(), e());
        }, 3e3);
      }),
    ]);
  } catch {
  } finally {
    clearTimeout(u);
  }
}
