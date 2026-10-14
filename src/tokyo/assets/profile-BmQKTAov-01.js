// tokyo/assets/profile-BmQKTAov 01 — status
// Lines 1-305 of readable/tokyo/assets/profile-BmQKTAov.pretty.js (statement-aligned).
import { $n as e } from "./engine-BuS5QxN0.js";
import { i as t, o as n, t as r } from "./session-CLv8PYlR.js";
import { i, n as a, o, r as s, t as c } from "./dom-BIQnAwky.js";
import { t as l } from "./icons-DYNV7fxr.js";
async function u(i, a = {}) {
  let o = r();
  try {
    let s = t(),
      c = s && s.expires_at > Date.now() / 1e3 + 60 ? s : await n(!1);
    if (!c || c.anonymous !== !1) return { status: `account_required` };
    let l = await fetch(`${e.url}/rest/v1/rpc/${i}`, {
      method: `POST`,
      headers: {
        apikey: e.publishableKey,
        Authorization: `Bearer ${c.access_token}`,
        "Content-Type": `application/json`,
        "Content-Profile": `api`,
      },
      body: JSON.stringify(a),
      signal: AbortSignal.timeout(8e3),
    });
    if (o !== r()) return { status: `account_required` };
    if (l.status === 404) return { status: `not_deployed` };
    if (!l.ok) return { status: `unavailable` };
    let u = await l.json();
    return o === r()
      ? !u || typeof u != `object` || typeof u.status != `string`
        ? { status: `unavailable` }
        : u
      : { status: `account_required` };
  } catch {
    return { status: `unavailable` };
  }
}
var d = {
  profile: { zh: `玩家名稱`, en: `Player name` },
  name: { zh: `名稱（2–16 字）`, en: `Name (2–16 characters)` },
  handleHint: {
    zh: `中英文、數字或底線；系統會分配六位數標籤。`,
    en: `Chinese or English letters, digits or underscores; a six-digit tag is assigned.`,
  },
  claimIntro: {
    zh: `好友用「名稱#標籤」找到你，六位數標籤由系統分配。`,
    en: `Friends find you by Name#tag; the six-digit tag is assigned for you.`,
  },
  renameRule: {
    zh: `改名後，好友名單和收件匣會顯示新名字。設定後可以馬上改一次，之後每 7 天可以改一次。`,
    en: `Friends and the inbox show your new name. You can change it once right after setting it, then once every 7 days.`,
  },
  renameWait: {
    zh: `{date} 之後才能再改名。`,
    en: `You can change your name again after {date}.`,
  },
  confirmName: { zh: `確定使用「{name}」嗎？`, en: `Use “{name}”?` },
  confirmRename: {
    zh: `確定改名為「{name}」嗎？改名後 7 天內不能再改。`,
    en: `Change your name to “{name}”? The next change waits 7 days.`,
  },
  notSet: { zh: `尚未設定`, en: `Not set` },
  rename: { zh: `改名`, en: `Change name` },
  renamed: { zh: `名稱已更新`, en: `Name updated` },
  confirm: { zh: `確認`, en: `Confirm` },
  editName: { zh: `返回修改`, en: `Edit name` },
  save: { zh: `儲存名稱`, en: `Save name` },
  loading: { zh: `連線中…`, en: `Connecting…` },
  saved: { zh: `名稱已儲存`, en: `Name saved` },
  account_required: {
    zh: `請先建立帳號或登入，再使用玩家名稱與社交功能。`,
    en: `Create an account or sign in to use player names and social features.`,
  },
  unavailable: {
    zh: `連不上伺服器，所以這次沒有存到。請確認網路後再按一次。`,
    en: `Couldn't reach the server, so nothing was saved. Check your connection and try again.`,
  },
  not_deployed: {
    zh: `伺服器還沒開放這個功能，所以這次沒有改到。`,
    en: `The server doesn't offer this yet, so nothing was changed.`,
  },
  invalid_name: {
    zh: `名稱須為 2–16 字，只能使用文字、數字與底線。`,
    en: `Names must be 2–16 characters using letters, digits and underscores.`,
  },
  name_reserved: {
    zh: `此名稱為官方保留，請選擇其他名稱。`,
    en: `This name is reserved. Choose another name.`,
  },
  name_blocked: {
    zh: `此名稱含有不允許的詞語，請選擇其他名稱。`,
    en: `This name contains blocked words. Choose another name.`,
  },
  name_unavailable: {
    zh: `此名稱的標籤已用完，請選擇其他名稱。`,
    en: `All tags for this name are taken. Choose another name.`,
  },
  name_already_set: {
    zh: `名稱已經設定好了。`,
    en: `Your name is already set.`,
  },
  rename_cooldown: {
    zh: `改名後 7 天內不能再改，請稍後再試。`,
    en: `A name change waits 7 days after the last one. Try later.`,
  },
  friends: { zh: `好友`, en: `Friends` },
  inbox: { zh: `收件匣`, en: `Inbox` },
  incoming: { zh: `收到的邀請`, en: `Incoming requests` },
  outgoing: { zh: `送出的邀請`, en: `Outgoing requests` },
  empty: { zh: `目前沒有項目`, en: `Nothing here yet` },
  playerHandle: {
    zh: `玩家代號（名稱#000000）`,
    en: `Player handle (Name#000000)`,
  },
  myId: { zh: `我的 ID`, en: `My ID` },
  myIdHint: {
    zh: `朋友輸入這個 ID 就能加你好友。`,
    en: `Share this ID; a friend enters it to add you.`,
  },
  copyId: { zh: `複製`, en: `Copy` },
  copied: { zh: `已複製 ID`, en: `ID copied` },
  copyFailed: {
    zh: `沒辦法自動複製，請長按或選取 ID 手動複製。`,
    en: `Couldn't copy automatically. Select the ID and copy it.`,
  },
  search: { zh: `尋找玩家`, en: `Find player` },
  send: { zh: `送出好友邀請`, en: `Send friend request` },
  accept: { zh: `接受`, en: `Accept` },
  decline: { zh: `婉拒`, en: `Decline` },
  cancel: { zh: `取消邀請`, en: `Cancel request` },
  remove: { zh: `移除好友`, en: `Remove friend` },
  block: { zh: `封鎖玩家`, en: `Block player` },
  blockConfirm: {
    zh: `封鎖會移除好友與邀請，且此版本無法解除。再次按下確認。`,
    en: `Blocking removes friendships and requests and cannot be undone in this version. Press again to confirm.`,
  },
  refresh: { zh: `重新整理`, en: `Refresh` },
  read: { zh: `標為已讀`, en: `Mark read` },
  readAll: { zh: `將本頁標為已讀`, en: `Mark this page read` },
  more: { zh: `載入較早通知`, en: `Load older notifications` },
  noChat: {
    zh: `僅顯示系統通知，不提供聊天。`,
    en: `System notifications only. No chat.`,
  },
  done: { zh: `已完成`, en: `Done` },
  requestSent: { zh: `邀請已送出`, en: `Request sent` },
  name_required: {
    zh: `先設定玩家名稱，再加入好友。`,
    en: `Choose your player name before adding friends.`,
  },
  invalid_handle: {
    zh: `請輸入完整名稱與六位數標籤。`,
    en: `Enter the exact name and six-digit tag.`,
  },
  not_found: { zh: `找不到玩家或邀請。`, en: `Player or request not found.` },
  self_target: {
    zh: `無法對自己執行此操作。`,
    en: `You cannot do this to yourself.`,
  },
  already_friends: { zh: `你們已經是好友。`, en: `You are already friends.` },
  request_pending: {
    zh: `你們之間已有待處理邀請。`,
    en: `A request between you is already pending.`,
  },
  not_pending: {
    zh: `邀請已處理，請重新整理。`,
    en: `This request is already handled. Refresh the list.`,
  },
  friend_limit: {
    zh: `其中一方已達 200 位好友上限。`,
    en: `One player has reached the 200-friend limit.`,
  },
  pending_limit: {
    zh: `待處理邀請已達上限，請稍後再試。`,
    en: `Pending request limit reached. Try later.`,
  },
  daily_limit: {
    zh: `今天已送出 20 次邀請，請於 {h} 小時 {m} 分鐘後再試。`,
    en: `You've sent 20 requests today. Try again in {h} h {m} min.`,
  },
  daily_limit_minutes: {
    zh: `今天已送出 20 次邀請，請於 {m} 分鐘後再試。`,
    en: `You've sent 20 requests today. Try again in {m} min.`,
  },
  invalid_response: {
    zh: `請選擇接受或婉拒。`,
    en: `Choose accept or decline.`,
  },
  invalid_cursor: {
    zh: `通知頁面已失效，請重新整理。`,
    en: `Invalid inbox page. Refresh the list.`,
  },
  invalid_ids: {
    zh: `請選擇本頁通知。`,
    en: `Select notifications on this page.`,
  },
  friend_request: {
    zh: `{name} 送出好友邀請`,
    en: `{name} sent a friend request`,
  },
  friend_accepted: {
    zh: `{name} 接受了好友邀請`,
    en: `{name} accepted your friend request`,
  },
  unread: { zh: `未讀`, en: `Unread` },
};
function f(e, t = 0) {
  if (e !== `daily_limit`) return d[e] ?? d.unavailable;
  let n = Math.max(0, Number.isFinite(t) ? t : 0),
    r = Math.max(1, Math.ceil(n / 60)),
    i = Math.floor(r / 60),
    a = n >= 3600,
    o = a ? d.daily_limit : d.daily_limit_minutes,
    s = a ? r % 60 : r;
  return {
    zh: o.zh.replace(`{h}`, String(i)).replace(`{m}`, String(s)),
    en: o.en.replace(`{h}`, String(i)).replace(`{m}`, String(s)),
  };
}
var p = new WeakMap(),
  m = new WeakMap();
function h(e, t, n) {
  let r = p.get(n);
  if (!r) {
    ((r = { messages: new Map(), pending: !1 }), p.set(n, r));
    let e = r.messages;
    n.events.on(`settings:changed`, () => {
      for (let [t, r] of e)
        t.isConnected ? (t.textContent = n.t(r)) : e.delete(t);
    });
  }
  let i = m.get(e);
  if (
    ((!i || i.parentElement !== e) &&
      ((i = document.createElement(`span`)), e.replaceChildren(i), m.set(e, i)),
    (i.textContent = n.t(t)),
    r.messages.set(i, t),
    !r.pending)
  ) {
    r.pending = !0;
    let e = r;
    queueMicrotask(() => {
      e.pending = !1;
      for (let t of e.messages.keys()) t.isConnected || e.messages.delete(t);
    });
  }
}
var g,
  _ = (e) => (e.status === `ok` && (g = e.profile ?? null), e),
  v = () => u(`get_my_profile`).then(_),
  myProfile = () =>
    g === void 0
      ? v().then((e) => (e.status === `ok` ? (e.profile ?? null) : null))
      : Promise.resolve(g);
function b(e, t) {
  let n = document.createElement(`span`);
  n.className = t;
  let r = document.createElement(`strong`);
  r.textContent = e.name;
  let i = document.createElement(`span`);
  return (
    (i.className = `social-tag`),
    (i.textContent = `#${e.tag}`),
    n.append(r, i),
    n
  );
}
function x(e) {
  let t = e?.next_rename_at ? Date.parse(e.next_rename_at) : NaN;
  if (!Number.isFinite(t) || t <= Date.now()) return null;
  let n = new Date(t),
    r = { month: `long`, day: `numeric`, hour: `2-digit`, minute: `2-digit` };
  return {
    zh: d.renameWait.zh.replace(`{date}`, n.toLocaleString(`zh-TW`, r)),
    en: d.renameWait.en.replace(`{date}`, n.toLocaleString(`en-US`, r)),
  };
}
function mountNameRow(e, t) {
  let n = document.createElement(`button`);
  ((n.type = `button`),
    (n.className = `cloud-row social-name-row`),
    (n.dataset.key = `player-name`));
  let r = document.createElement(`span`);
  ((r.className = `cloud-row-label`), a(r, d.profile), n.append(r));
  let i = document.createElement(`span`);
  ((i.className = `cloud-row-detail`),
    n.append(i),
    n.insertAdjacentHTML(`beforeend`, l.chevronR),
    (n.onclick = t),
    e.prepend(n));
  let o = (e) => {
    e
      ? i.replaceChildren(b(e, `social-row-handle`))
      : e === null
        ? ((i.textContent = ``),
          i.append(
            Object.assign(document.createElement(`span`), {
              className: `social-row-unset`,
            }),
          ),
          a(i.lastElementChild, d.notSet))
        : (i.textContent = `…`);
  };
  (o(g),
    v().then((e) => {
      n.isConnected && e.status === `ok` && o(e.profile ?? null);
    }));
}
