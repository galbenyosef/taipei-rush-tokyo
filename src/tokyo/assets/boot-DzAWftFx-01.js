// tokyo/assets/boot-DzAWftFx 01 — settleidentity
// Lines 1-55 of readable/tokyo/assets/boot-DzAWftFx.pretty.js (statement-aligned).
import { Hn as e, In as t, Kn as n, Ln as r } from "./engine-wUBYs8Z3.js";
import { f as i } from "./shared-DC9fKqx_.js";
import "./game-CPWU_QWx.js";
import { t as a } from "./notice-DnIsya3-.js";
import { i as o, l as s, o as c } from "./session-B5ukzynC.js";
import {
  a as l,
  i as u,
  l as d,
  o as f,
  t as p,
} from "./controllers-DIi301oL.js";
function settleIdentity() {
  e();
  let n = o(),
    i = n && !s() && n.anonymous === !1 ? n.user_id : `guest`,
    a = r();
  return (a !== i && t(i, a === `guest`), u(r()), r());
}
async function hydrateBeforeTravel() {
  if ((settleIdentity(), !o() || s())) return;
  let e = p(),
    t = !1,
    r = async () => {
      let r = await c(!1);
      if (!r) {
        (!o() && n().expired && a(`expired`), settleIdentity());
        return;
      }
      t ||
        settleIdentity() !== (r.anonymous === !1 ? r.user_id : `guest`) ||
        (await f(r), t) ||
        (await e.connect(r),
        i(),
        [`region`, `spawn`, `cam`, `menu`, `autoplay`, `auth`].some((e) =>
          new URLSearchParams(location.search).has(e),
        ),
        l().includes(`kaohsiung`),
        l().includes(`tokyo`));
    },
    u;
  try {
    await Promise.race([
      r(),
      new Promise((n) => {
        u = setTimeout(() => {
          ((t = !0), e.disconnect(), d().disconnect(), n());
        }, 3e3);
      }),
    ]);
  } catch {
  } finally {
    clearTimeout(u);
  }
}
