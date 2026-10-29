// tokyo/assets/net-PtwKfaxg 16 — textcontent
// Lines 8459-8701 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function Pr(e, t = `full`) {
  let n = t === `face`;
  return `<img src="/net/portraits/${m(e)}${n ? `-face` : ``}.webp" width="${n ? 320 : 600}" height="${n ? 320 : 800}" alt="" aria-hidden="true" draggable="false" decoding="async">`;
}
var Fr = `
/* 測試版: beside the mode's name on the title button and in the lobby header */
.nl-beta { flex:none; display:inline-block; padding:3px 7px; border-radius:3px; background:var(--gold,#ffcf4d); color:var(--ink,#0b0b10);
  font:800 11px/1.2 var(--tr-font,system-ui); letter-spacing:.08em; white-space:nowrap; vertical-align:middle; }
.ti-net .nl-beta { margin-left:.8em; align-self:center; }
/* Match the pause menu / phone: ink panels, paper text, restrained gold actions and pink keyboard focus. */
#net-lobby { --nl-ink:var(--text,#f6f3ec); --nl-muted:var(--muted,rgba(246,243,236,.6));
  --nl-line:rgba(255,255,255,.12); --nl-accent:var(--gold,#ffcf4d); --nl-focus:var(--pink,#ff3d9a);
  width:min(1120px,calc(100vw - 40px)); height:min(760px,calc(100dvh - 40px)); max-width:none; max-height:none; padding:0;
  box-sizing:border-box; border:1px solid var(--nl-line); border-radius:6px; overflow:hidden; color:var(--nl-ink); background:var(--ink,#0b0b10);
  box-shadow:0 24px 80px #000b; font:500 14px/1.45 var(--tr-font,system-ui); }
#net-lobby::backdrop { background:rgba(5,5,9,.78); backdrop-filter:blur(8px) saturate(.9); }
#net-lobby *,#net-lobby *::before,#net-lobby *::after { box-sizing:border-box; }
#net-lobby [hidden] { display:none !important; }
#net-lobby button,#net-lobby input { font:inherit; }
#net-lobby button { cursor:pointer; -webkit-tap-highlight-color:transparent; touch-action:manipulation; }
#net-lobby button:disabled { cursor:default; opacity:.48; }
#net-lobby button:focus-visible,#net-lobby input:focus-visible { outline:2px solid var(--nl-focus); outline-offset:3px; }
#net-lobby .nl-shell { position:relative; isolation:isolate; height:100%; display:flex; flex-direction:column;
  background:linear-gradient(90deg,rgba(10,12,18,.98),rgba(10,12,18,.94)); }
#net-lobby .nl-header { display:flex; align-items:center; gap:16px; padding:20px 26px 16px; border-bottom:1px solid var(--nl-line); flex:none; }
#net-lobby .nl-brand { flex:none; width:124px; padding-right:18px; border-right:1px solid var(--nl-line); line-height:0; }
#net-lobby .nl-brand svg { width:100%; height:auto; }
#net-lobby .nl-title-wrap { flex:1; min-width:0; }
#net-lobby .nl-title-row { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
#net-lobby .nl-eyebrow { margin:0 0 3px; color:var(--nl-accent); font:700 10px/1.3 var(--tr-display,system-ui); letter-spacing:.22em; }
#net-lobby h1 { margin:0; font-size:28px; font-weight:900; line-height:1.1; letter-spacing:.04em; }
#net-lobby .nl-close { width:44px; height:44px; flex:none; border-radius:3px; border:1px solid var(--nl-line); background:rgba(255,255,255,.04); color:var(--nl-ink); font-size:26px; line-height:1; }
#net-lobby .nl-body { display:grid; grid-template-columns:290px minmax(0,1fr); gap:24px; min-height:0; overflow:auto; overscroll-behavior:contain; padding:22px 26px; scrollbar-width:thin; scrollbar-color:#55545a transparent; }
#net-lobby .nl-stage { display:flex; flex-direction:column; align-self:stretch; min-height:420px; position:relative; overflow:hidden; border:1px solid var(--nl-line); border-radius:3px;
  background:radial-gradient(ellipse at 50% 25%,rgba(255,255,255,.07),transparent 70%),rgba(255,255,255,.025); }
#net-lobby .nl-stage-kicker { position:absolute; left:17px; top:15px; z-index:1; color:var(--nl-accent); font-size:10px; font-weight:800; letter-spacing:.15em; }
#net-lobby .nl-hero-art { flex:1; min-height:0; width:100%; display:flex; justify-content:center; align-items:flex-end; padding:20px 4px 0; position:relative; }
#net-lobby .nl-hero-art img { width:100%; height:100%; max-height:310px; object-fit:contain; filter:drop-shadow(0 10px 12px #0005); }
#net-lobby .nl-profile { position:relative; padding:0 17px 16px; text-align:center; }
#net-lobby .nl-hero-name { font-size:23px; line-height:1.2; margin:1px 0 4px; font-weight:900; }
#net-lobby .nl-hero-note { color:var(--nl-muted); margin:0 0 12px; font-size:11px; }
#net-lobby .nl-characters { display:flex; justify-content:center; gap:7px; margin-bottom:12px; }
#net-lobby .nl-character { width:44px; height:48px; position:relative; overflow:hidden; padding:0; border:1px solid var(--nl-line); border-radius:3px; background:var(--ink,#0b0b10); }
#net-lobby .nl-character img { width:100%; height:100%; object-fit:cover; object-position:50% 0; }
#net-lobby .nl-character[aria-pressed=true] { border:2px solid var(--nl-accent); background:rgba(255,207,77,.12); box-shadow:none; }
#net-lobby .nl-name-label { display:block; text-align:left; color:var(--nl-muted); font-size:10px; font-weight:700; margin:0 0 4px; }
#net-lobby input { min-width:0; color:var(--nl-ink); background:rgba(0,0,0,.28); border:1px solid rgba(255,255,255,.22); border-radius:3px; padding:10px 12px; }
#net-lobby #nl-self-name { width:100%; height:39px; font-size:13px; }
#net-lobby .nl-team { min-width:0; display:flex; flex-direction:column; gap:14px; }
#net-lobby .nl-team[data-state=choose] { justify-content:center; gap:16px; }
#net-lobby .nl-roster { display:flex; flex-direction:column; gap:14px; }
#net-lobby .nl-team-head { display:flex; gap:10px; align-items:center; justify-content:space-between; min-height:30px; }
#net-lobby .nl-team-head h2 { margin:0; font-size:19px; font-weight:850; }
#net-lobby .nl-count { color:var(--nl-accent); font:800 13px/1 var(--tr-num,monospace); white-space:nowrap; }
#net-lobby .nl-slots { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; }
#net-lobby .nl-slot { min-width:0; position:relative; height:146px; padding:0; overflow:hidden; border:1px solid var(--nl-line); border-radius:3px;
  background:rgba(255,255,255,.035); color:var(--nl-ink); text-align:center; }
#net-lobby .nl-slot[data-self=true] { border-color:rgba(255,207,77,.55); box-shadow:inset 0 0 0 1px rgba(255,207,77,.08); }
#net-lobby .nl-slot[data-empty] { border-style:dashed; border-color:rgba(255,255,255,.15); background:rgba(255,255,255,.015); color:var(--nl-muted); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; }
#net-lobby .nl-slot[data-empty]:hover { background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.3); color:var(--nl-ink); }
#net-lobby .nl-plus { font:300 36px/1 system-ui; color:var(--nl-muted); }
#net-lobby .nl-empty-label { font-size:11px; font-weight:650; }
#net-lobby .nl-empty-action { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; width:100%; height:100%; border:0; padding:0; background:transparent; color:inherit; }
#net-lobby .nl-slot-portrait { position:absolute; left:50%; top:6px; transform:translateX(-50%); width:102px; height:103px; overflow:hidden; }
#net-lobby .nl-slot-portrait img { width:100%; height:100%; object-fit:contain; object-position:50% 0; }
#net-lobby .nl-slot-foot { position:absolute; bottom:0; left:0; right:0; padding:8px 5px 9px; background:linear-gradient(transparent,#0e1016 20%); }
#net-lobby .nl-player-name { display:block; font-weight:800; font-size:12px; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; }
#net-lobby .nl-player-status { display:block; margin-top:3px; color:var(--green,#3ddc84); font-size:10px; white-space:nowrap; }
#net-lobby .nl-player-status::before { content:''; display:inline-block; width:5px; height:5px; border-radius:50%; background:currentColor; margin-right:4px; vertical-align:middle; }
#net-lobby .nl-slot[data-connecting=true] .nl-player-status { color:var(--amber,#ffb13d); }
#net-lobby .nl-player-badge { position:absolute; top:7px; left:7px; z-index:1; border-radius:4px; padding:2px 5px; background:rgba(10,12,18,.9); color:var(--nl-accent); font-size:9px; font-weight:800; }
#net-lobby .nl-invitation { display:flex; align-items:center; justify-content:space-between; gap:10px; border:1px solid rgba(255,207,77,.3); border-left:3px solid var(--nl-accent); border-radius:3px; padding:10px 12px; background:rgba(255,207,77,.06); }
#net-lobby .nl-invitation strong { display:block; font-size:13px; }
#net-lobby .nl-invitation span { display:block; color:var(--nl-muted); font-size:11px; }
#net-lobby .nl-invitation button { flex:none; border:0; border-radius:3px; padding:10px 13px; background:var(--nl-accent); color:var(--ink,#0b0b10); font-weight:850; }
#net-lobby .nl-offline { display:grid; gap:16px; }
#net-lobby .nl-create-actions { display:grid; grid-auto-flow:column; grid-auto-columns:minmax(0,1fr); gap:12px; }
#net-lobby .nl-choice { display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-end; gap:14px; min-height:188px; padding:20px;
  border:1px solid rgba(255,255,255,.2); border-radius:3px; background:rgba(255,255,255,.04); color:var(--nl-ink); text-align:left; }
#net-lobby .nl-choice.primary { background:var(--nl-accent); border-color:var(--nl-accent); color:var(--ink,#0b0b10); }
@media(hover:hover) { #net-lobby button.nl-choice:hover:not(:disabled) { background:var(--paper,#f4f1ea); border-color:var(--paper,#f4f1ea); color:var(--ink,#0b0b10); } }
#net-lobby .nl-choice-icon { display:block; width:34px; height:34px; margin-bottom:auto; }
#net-lobby .nl-choice-icon svg { width:100%; height:100%; }
#net-lobby .nl-choice-copy { display:flex; flex-direction:column; gap:5px; min-width:0; }
#net-lobby .nl-choice-copy > :first-child { font-size:22px; font-weight:900; line-height:1.2; }
#net-lobby .nl-code-card { cursor:text; } #net-lobby .nl-code-card .nl-join { width:100%; }
#net-lobby .nl-choice-note { font-size:12px; font-weight:600; line-height:1.45; opacity:.72; }
#net-lobby .nl-action { display:flex; align-items:center; justify-content:center; gap:9px; min-height:51px; border:1px solid rgba(255,255,255,.2); border-radius:3px; padding:10px 12px; background:rgba(255,255,255,.05); color:var(--nl-ink); font-weight:850; }
#net-lobby .nl-action.primary { background:var(--nl-accent); border-color:var(--nl-accent); color:var(--ink,#0b0b10); box-shadow:none; }
#net-lobby .nl-action:hover:not(:disabled) { background:var(--paper,#f4f1ea); border-color:var(--paper,#f4f1ea); color:var(--ink,#0b0b10); }
#net-lobby .nl-action-symbol { font-size:21px; line-height:1; }
#net-lobby .nl-join { display:flex; align-items:center; gap:8px; }
#net-lobby #nl-code { flex:1; width:100%; font:800 17px/1.2 var(--tr-num,monospace); letter-spacing:.13em; text-transform:uppercase; height:42px; }
#net-lobby .nl-small-button { flex:none; border:1px solid rgba(255,255,255,.2); border-radius:3px; padding:9px 13px; background:#ffffff0d; color:var(--nl-ink); font-weight:750; min-height:40px; }
#net-lobby .nl-room { display:flex; align-items:center; justify-content:space-between; gap:12px; border:1px solid var(--nl-line); border-radius:3px; padding:11px 13px; background:rgba(0,0,0,.2); }
#net-lobby .nl-room-label { display:block; color:var(--nl-muted); font-size:10px; }
#net-lobby #nl-room-code { display:block; font:850 23px/1.2 var(--tr-num,monospace); letter-spacing:.17em; color:var(--nl-accent); user-select:text; }
#net-lobby #nl-share { background:rgba(255,207,77,.1); color:var(--nl-accent); border-color:rgba(255,207,77,.4); }
#net-lobby .nl-settings { display:flex; flex-wrap:wrap; gap:10px 20px; color:var(--nl-ink); font-size:12px; }
#net-lobby .nl-setting { display:flex; align-items:center; gap:8px; min-height:36px; cursor:pointer; }
#net-lobby .nl-setting input { appearance:none; width:28px; height:17px; padding:0; margin:0; border:1px solid rgba(255,255,255,.3); background:rgba(0,0,0,.25); border-radius:20px; position:relative; cursor:pointer; }
#net-lobby .nl-setting input::after { content:''; position:absolute; width:11px; height:11px; border-radius:50%; background:#929297; top:2px; left:2px; transition:transform .15s; }
#net-lobby .nl-setting input:checked { background:var(--nl-accent); border-color:var(--nl-accent); }
#net-lobby .nl-setting input:checked::after { background:var(--ink,#0b0b10); transform:translateX(11px); }
#net-lobby .nl-setting input:disabled { cursor:default; }
#net-lobby .nl-status { margin:0; color:var(--nl-muted); font-size:12px; min-height:18px; overflow-wrap:anywhere; user-select:text; }
#net-lobby .nl-status[data-busy=true] { color:var(--nl-accent); }
#net-lobby .nl-status[data-busy=true]::before { content:''; display:inline-block; width:11px; height:11px; margin-right:8px; border:2px solid rgba(255,207,77,.2); border-top-color:var(--nl-accent); border-radius:50%; vertical-align:-1px; animation:nlSpin .9s linear infinite; }
@keyframes nlSpin { to { transform:rotate(360deg); } }
#net-lobby .nl-error-wrap { padding:10px 12px; background:rgba(255,59,74,.07); border:1px solid rgba(255,59,74,.4); border-left:3px solid var(--red,#ff3b4a); border-radius:3px; display:flex; align-items:center; gap:10px; }
#net-lobby #nl-error { margin:0; flex:1; font-size:12px; color:#ff9da5; overflow-wrap:anywhere; }
#net-lobby .nl-footer { display:flex; align-items:center; gap:18px; margin-top:auto; padding:17px 26px 20px; background:rgba(0,0,0,.22); border-top:1px solid var(--nl-line); flex:none; }
#net-lobby .nl-footer-copy { flex:1; min-width:0; }
#net-lobby #nl-enter { width:245px; min-height:55px; font-size:19px; letter-spacing:.03em; }
#net-lobby #nl-leave { min-height:44px; border:0; background:transparent; padding:8px 0; color:var(--nl-muted); font-size:11px; }
@media(max-width:760px) { #net-lobby { width:calc(100vw - 16px); height:calc(100dvh - 16px); border-radius:6px; }
  #net-lobby .nl-header { padding:14px 16px 12px; gap:9px; } #net-lobby h1 { font-size:24px; } #net-lobby .nl-eyebrow { font-size:9px; }
  #net-lobby .nl-close { width:44px; height:44px; } #net-lobby .nl-brand { display:none; }
  #net-lobby .nl-body { grid-template-columns:1fr; gap:16px; padding:14px 14px 18px; }
  #net-lobby .nl-stage { min-height:0; height:177px; display:grid; grid-template-columns:104px minmax(0,1fr); }
  #net-lobby .nl-stage-kicker { display:none; }
  #net-lobby .nl-hero-art { height:177px; padding:12px 0 0; align-self:end; overflow:hidden; }
  #net-lobby .nl-hero-art img { height:190px; width:143px; max-width:none; flex:none; transform:translateY(16px); }
  #net-lobby .nl-profile { text-align:left; padding:14px 12px 12px 0; } #net-lobby .nl-hero-name { font-size:20px; }
  #net-lobby .nl-hero-note { font-size:10px; margin-bottom:6px; } #net-lobby .nl-characters { justify-content:flex-start; gap:5px; margin-bottom:7px; }
  #net-lobby .nl-character { width:44px; height:44px; border-radius:3px; } #net-lobby .nl-character img { width:100%; height:100%; }
  #net-lobby .nl-name-label { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); } #net-lobby #nl-self-name { height:40px; padding:7px 8px; font-size:12px; }
  #net-lobby .nl-team { gap:11px; } #net-lobby .nl-team-head h2 { font-size:17px; } #net-lobby .nl-slots { gap:6px; }
  #net-lobby .nl-slot { height:110px; border-radius:3px; } #net-lobby .nl-slot-portrait { width:80px; height:76px; top:3px; }
  #net-lobby .nl-slot-portrait img { width:100%; height:100%; } #net-lobby .nl-slot-foot { padding:5px 3px 6px; }
  #net-lobby .nl-player-name { font-size:10px; } #net-lobby .nl-player-status { font-size:8px; margin-top:2px; }
  #net-lobby .nl-player-badge { top:4px; left:4px; font-size:8px; padding:1px 3px; } #net-lobby .nl-plus { font-size:29px; } #net-lobby .nl-empty-label { font-size:9px; }
  #net-lobby .nl-action { min-height:47px; padding:9px; font-size:13px; } #net-lobby .nl-join { flex-wrap:wrap; gap:7px; }
  #net-lobby .nl-team[data-state=choose] { justify-content:flex-start; gap:14px; }
  #net-lobby .nl-create-actions { grid-auto-flow:row; grid-template-columns:1fr; gap:10px; }
  #net-lobby .nl-choice { flex-direction:row; align-items:center; justify-content:flex-start; gap:14px; min-height:84px; padding:14px 16px; }
  #net-lobby .nl-choice-icon { width:28px; height:28px; margin:0; flex:none; } #net-lobby .nl-choice-copy > :first-child { font-size:18px; }
  #net-lobby .nl-code-card { flex-wrap:wrap; } #net-lobby .nl-code-card .nl-join { flex-basis:100%; flex-wrap:nowrap; }
  #net-lobby .nl-choice-note { font-size:11px; }
  #net-lobby #nl-code { height:38px; } #net-lobby .nl-small-button { min-height:38px; padding:8px 11px; }
  #net-lobby .nl-footer { padding:12px 16px 14px; gap:10px; }
  #net-lobby #nl-enter { width:165px; min-height:48px; font-size:16px; } #net-lobby .nl-invitation { padding:9px; } #net-lobby .nl-invitation strong { font-size:12px; }
}
@media(max-height:540px) and (min-width:600px) { #net-lobby { width:calc(100vw - 20px); height:calc(100dvh - 16px); border-radius:6px; }
  #net-lobby .nl-header { padding:6px 18px; } #net-lobby h1 { font-size:21px; } #net-lobby .nl-eyebrow { font-size:8px; }
  #net-lobby .nl-body { grid-template-columns:224px minmax(0,1fr); padding:12px 18px; gap:16px; }
  #net-lobby .nl-stage { min-height:290px; height:auto; display:flex; align-self:start; } #net-lobby .nl-hero-art { flex:none; height:150px; padding-top:15px; }
  #net-lobby .nl-hero-art img { height:135px; max-height:135px; transform:none; } #net-lobby .nl-profile { text-align:center; padding:0 8px 10px; }
  #net-lobby .nl-hero-name { font-size:18px; } #net-lobby .nl-hero-note { margin-bottom:5px; } #net-lobby .nl-characters { justify-content:center; margin-bottom:6px; }
  #net-lobby .nl-character { width:44px; height:44px; } #net-lobby .nl-name-label { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); } #net-lobby #nl-self-name { height:40px; padding:7px 8px; }
  #net-lobby .nl-team { gap:9px; } #net-lobby .nl-slot { height:90px; } #net-lobby .nl-slot-portrait { height:62px; top:0; width:78px; } #net-lobby .nl-slot-portrait img { width:100%; height:100%; }
  #net-lobby .nl-player-name { font-size:10px; } #net-lobby .nl-player-status { font-size:8px; } #net-lobby .nl-slot-foot { padding:4px; }
  #net-lobby .nl-footer { padding:8px 18px; } #net-lobby #nl-leave { padding:4px 0; }
  #net-lobby .nl-choice { min-height:132px; padding:14px 16px; gap:10px; } #net-lobby .nl-choice-icon { width:28px; height:28px; }
  #net-lobby .nl-choice-copy > :first-child { font-size:19px; }
  #net-lobby .nl-room { padding:5px 10px; } #net-lobby .nl-room > div { display:flex; align-items:baseline; gap:10px; }
  #net-lobby #nl-room-code { font-size:18px; } #net-lobby #nl-share { min-height:34px; padding:5px 11px; }
  #net-lobby .nl-roster .nl-team-head { display:none; } #net-lobby .nl-slots { gap:6px; } #net-lobby .nl-team { gap:7px; }
  #net-lobby #nl-enter { min-height:43px; font-size:16px; } #net-lobby .nl-action { min-height:40px; }
}
#net-lobby input::placeholder { color:var(--nl-muted); opacity:1; }
#net-lobby input[aria-invalid=true] { border-color:var(--red,#ff3b4a); }
#net-lobby .nl-settings-note { flex-basis:100%; margin:0; color:var(--nl-muted); font-size:11px; }
#net-lobby .nl-setting:has(input:disabled) { color:var(--nl-muted); cursor:default; }
#net-lobby .nl-empty-action:focus-visible { outline-offset:-4px; }
#net-lobby .nl-small-button:hover:not(:disabled),#net-lobby .nl-close:hover { background:var(--paper,#f4f1ea); color:var(--ink,#0b0b10); }
#net-lobby #nl-leave:hover { color:var(--red,#ff3b4a); }
body[data-quality="low"] #net-lobby::backdrop { backdrop-filter:none; }
@media(prefers-reduced-motion:reduce) { #net-lobby * { animation:none !important; transition:none !important; } }
`,
  X = {
    title: { zh: `多人連線`, en: `Play together` },
    close: { zh: `關閉大廳`, en: `Close lobby` },
    team: { zh: `房間玩家`, en: `Players` },
    self: { zh: `你`, en: `YOU` },
    host: { zh: `房主`, en: `HOST` },
    selfHost: { zh: `你・房主`, en: `YOU · HOST` },
    stage: { zh: `你的角色`, en: `YOUR CHARACTER` },
    choose: { zh: `選擇角色與暱稱`, en: `Choose a character and nickname` },
    nickname: { zh: `你的暱稱`, en: `Your nickname` },
    invite: { zh: `邀請朋友`, en: `Invite friend` },
    makeRoom: { zh: `建立好友房`, en: `Create a room` },
    find: { zh: `尋找房間`, en: `Find a room` },
    makeRoomNote: {
      zh: `拿到房號，傳連結給朋友・最多 8 人`,
      en: `Get a code and send friends the link · up to 8`,
    },
    findNote: {
      zh: `加入公開房間，沒有空位就幫你開一間`,
      en: `Join a public room, or open one if none has space`,
    },
    joinTitle: { zh: `加入朋友的房間`, en: `Join a friend's room` },
    joinNote: {
      zh: `輸入朋友傳給你的 6 碼房號`,
      en: `Enter the 6-character code they sent you`,
    },
    room: { zh: `房號`, en: `ROOM CODE` },
    codeHint: { zh: `6 碼房號`, en: `6-CHARACTER CODE` },
    join: { zh: `加入`, en: `Join` },
    share: { zh: `邀請朋友`, en: `Invite friends` },
    leave: { zh: `離開房間`, en: `Leave room` },
    enter: { zh: `開始探索`, en: `Enter the city` },
    retry: { zh: `再試一次`, en: `Try again` },
    cancel: { zh: `取消連線`, en: `Cancel connection` },
    hostSettings: {
      zh: `房間設定由房主調整。`,
      en: `Only the host can change room settings.`,
    },
    public: { zh: `公開房間`, en: `Public room` },
    playerDamage: { zh: `玩家互相攻擊`, en: `Player damage` },
    connected: { zh: `已連線`, en: `Connected` },
    connecting: { zh: `連線中`, en: `Connecting` },
    local: { zh: `你的角色`, en: `Your character` },
    relayed: { zh: `經房主連線`, en: `Via host` },
    searching: { zh: `正在尋找玩家…`, en: `Finding players…` },
    hosting: { zh: `正在建立房間…`, en: `Creating your room…` },
    joining: { zh: `正在加入房間…`, en: `Joining the room…` },
    migrating: { zh: `正在交接房主…`, en: `Handing over the host…` },
    inviteTitle: { zh: `朋友正在等你`, en: `Your friends are waiting` },
    recentTitle: { zh: `回到剛才的隊伍`, en: `Back to your crew` },
    rejoin: { zh: `重新加入`, en: `Rejoin` },
    invalid: {
      zh: `請輸入有效的 6 碼房號。`,
      en: `Enter a valid 6-character room code.`,
    },
  },
  Ir = [
    `#ffcf4d`,
    `#35e0ff`,
    `#ff3d9a`,
    `#3ddc84`,
    `#ffb13d`,
    `#b48cff`,
    `#ff7a45`,
    `#9fe870`,
  ],
  Z = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  };
function Q(e, t, n) {
  let r = document.createElement(e);
  return ((r.className = t), n.append(r), r);
}
