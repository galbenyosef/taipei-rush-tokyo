// tokyo/assets/tokyo-BZXVhKTn 35 — missions
// Lines 13861-14015 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
var Co = null,
  wo = (e, t) => !!e && e.state.data.completedMissions.includes(t),
  To = (e) => {
    let t = He.indexOf(e);
    if (t <= 0) return [];
    let n = He[t - 1].missions;
    return [n[n.length - 1].id];
  };
function Eo() {
  let e = Co;
  return He.map((t) => {
    let r = t.missions.map((t) => ({
        id: t.id,
        title: t.built
          ? { zh: t.title.zh, en: t.title.en }
          : {
              zh: n.on
                ? n.t(
                    `${t.title.zh}（準備中）`,
                    `${n.jz(t.title.zh)}（準備中）`,
                  )
                : `${t.title.zh}（準備中）`,
              en: `${t.title.en} (coming soon)`,
            },
        completed: wo(e, t.id),
      })),
      i = [],
      a = [];
    for (let n of t.missions)
      wo(e, n.id) && (i.push(n.recap.zh), a.push(n.recap.en));
    return {
      chapterNo: t.no,
      chapter: { zh: t.title.zh, en: t.title.en },
      unlocked: !!e && To(t).every((t) => wo(e, t)),
      done: r.every((e) => e.completed),
      text: i.length
        ? { zh: i.join(``), en: a.join(` `) }
        : { zh: t.teaser.zh, en: t.teaser.en },
      missions: r,
    };
  });
}
function Do() {
  return null;
}
function Oo(e) {}
qn({ storyLog: Eo, storyDate: Do, setMarkersVisible: Oo });
var ko = { "tokyo:s5_cab": `tokyo:s5_shinobazu` };
function Ao(e) {
  Co = e;
  let t = null;
  try {
    e.events.on(`mission:completed`, (n) => {
      let r = ko[n.id];
      r && !wo(e, r) && (t = { id: r, at: e.time.real + 4 });
    });
  } catch {}
  let r = (t) => To(t).every((t) => wo(e, t)),
    i = He.filter((e) => e.call).map((e) => ({
      ch: e,
      wasLocked: !r(e),
      at: -1,
    })),
    a = 0,
    o = (t) => {
      let r = t.call,
        i = t.missions[0],
        a =
          /^（訊息）|^\(text\)/.test(r.line.zh) || /^\(text\)/.test(r.line.en);
      try {
        e.audio.play(a ? `phone_notify` : `phone_ring`, { ui: !0 });
        let t = Ue(e);
        (e.ui.subtitle(
          Ae(t, r.line),
          Math.min(9, Math.max(5.5, r.line.zh.length * 0.2 + 1.2)),
          Ae(t, r.who),
        ),
          r.line.ja &&
            !a &&
            e.audio.say?.(r.line, { lang: `ja`, priority: 5 }));
      } catch {}
      setTimeout(() => {
        try {
          (e.missions.active || e.missions.startMission(i.id),
            e.events.emit(`notify`, {
              text: {
                zh: n.on
                  ? n.t(
                      `新章節：${t.title.zh}（${r.where.zh}）`,
                      `新章：${n.jz(t.title.zh)}（${n.jz(r.where.zh)}）`,
                    )
                  : `新章節：${t.title.zh}（${r.where.zh}）`,
                en: `New chapter: ${t.title.en} (${r.where.en})`,
              },
              kind: `mission`,
              duration: 6,
            }));
        } catch {}
      }, 4500);
    };
  return (
    (e.params.has(`mdebug`) || e.params.has(`debug`)) &&
      (window.__tokyoStory = {
        log: Eo,
        chapters: () =>
          i.map((e) => ({ no: e.ch.no, open: r(e.ch), at: e.at })),
        ring: (e) => {
          let t = i.find((t) => t.ch.no === e);
          t && o(t.ch);
        },
      }),
    {
      name: `story`,
      update(n) {
        if (((a += n), a < 0.25)) return;
        a = 0;
        let s = e.missions;
        if (s) {
          for (let t of i) {
            let n = !r(t.ch),
              i = t.ch.missions[0];
            if (
              (t.wasLocked &&
                !n &&
                i.built &&
                !wo(e, i.id) &&
                (t.at = e.time.real + t.ch.call.delay),
              (t.wasLocked = n),
              t.at < 0 || e.time.real < t.at)
            )
              continue;
            let a = s.active;
            if (a && a.status === `running`) {
              t.at = e.time.real + 6;
              continue;
            }
            ((t.at = -1), o(t.ch));
          }
          if (t && e.time.real >= t.at) {
            let n = s.active;
            if (n && n.status === `running`)
              n.id === t.id ? (t = null) : (t.at = e.time.real + 4);
            else {
              let e = t.id;
              t = null;
              try {
                s.startMission(e);
              } catch {}
            }
          }
        }
      },
    }
  );
}
