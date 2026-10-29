// tokyo/assets/actors-bknSEpf2 151 — giver
// Lines 68707-68936 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function tL(e, t, n) {
  if (t.along !== void 0) {
    let r = nL(e, n.x, n.z, t.along);
    return { x: r.x, z: r.z };
  }
  return { x: n.x + (t.dx ?? 1.2), z: n.z + (t.dz ?? 0.5) };
}
function nL(e, t, n, r) {
  let i = vu(e.plan, t, n);
  if (!i.road) return i;
  let a = i.road,
    o = a.axis === `x` ? i.x + r : i.x,
    s = a.axis === `x` ? i.z : i.z + r;
  return vu(e.plan, o, s);
}
var rL = new Set([
    `goto`,
    `enterVehicle`,
    `drive`,
    `exitVehicle`,
    `interact`,
    `wait`,
    `custom`,
  ]),
  iL = new Set([`story`, `job`, `race`, `side`, `culture`]),
  aL = {
    story: { color: 16762941, blip: `mission`, icon: `story` },
    job: { color: 5100287, blip: `delivery`, icon: `dash` },
    race: { color: 16731486, blip: `race`, icon: `race` },
    side: { color: 12160255, blip: `mission`, icon: `chase` },
    culture: { color: 16747069, blip: `temple`, icon: `temple` },
  },
  oL = { zh: `任務發生錯誤`, en: `Mission error` },
  sL = { zh: `任務失敗`, en: `Mission failed` },
  cL = { zh: `時間到了`, en: `Time's up` },
  lL = (e) =>
    !!e &&
    typeof e == `object` &&
    typeof e.zh == `string` &&
    typeof e.en == `string`,
  uL = (e) => typeof e == `number` && Number.isFinite(e);
function dL(e) {
  if (!e || typeof e != `object`) return `definition is not an object`;
  if (typeof e.id != `string` || !/^[\w:.-]{1,64}$/.test(e.id))
    return `bad id ${JSON.stringify(e.id)} (use letters, digits, - _ : .)`;
  if (!lL(e.title)) return `title must be {zh, en}`;
  if (!lL(e.description)) return `description must be {zh, en}`;
  if (!uL(e.reward) || e.reward < 0) return `reward must be a number ≥ 0`;
  if (!e.start || !uL(e.start.x) || !uL(e.start.z))
    return `start must be {x, z}`;
  if (
    e.hours &&
    (!Array.isArray(e.hours) || e.hours.length !== 2 || !e.hours.every(uL))
  )
    return `hours must be [from, to]`;
  if (
    e.requires &&
    (!Array.isArray(e.requires) || e.requires.some((e) => typeof e != `string`))
  )
    return `requires must be string[]`;
  if (typeof e.script == `function`) return null;
  if (!Array.isArray(e.steps) || !e.steps.length)
    return `steps must be a non-empty array (or give script())`;
  for (let t = 0; t < e.steps.length; t++) {
    let n = e.steps[t];
    if (!n || !rL.has(n.kind))
      return `step ${t}: unknown kind ${JSON.stringify(n?.kind)}`;
    if (!lL(n.objective)) return `step ${t}: objective must be {zh, en}`;
    if (n.target && (!uL(n.target.x) || !uL(n.target.z)))
      return `step ${t}: target must be {x, z}`;
    if ((n.kind === `drive` || n.kind === `interact`) && !n.target && !n.update)
      return `step ${t}: '${n.kind}' needs a target (or an update())`;
    if (n.kind === `custom` && typeof n.update != `function`)
      return `step ${t}: 'custom' needs update()`;
    if (n.timeLimit !== void 0 && (!uL(n.timeLimit) || n.timeLimit <= 0))
      return `step ${t}: timeLimit must be > 0`;
  }
  return null;
}
function fL(e, t) {
  let n = !1;
  try {
    n =
      e.statics.overlapsRect(t.x - 0.4, t.z - 0.4, t.x + 0.4, t.z + 0.4, 0.6) ||
      e.plan.surfaceAt(t.x, t.z) === `road` ||
      e.plan.surfaceAt(t.x, t.z) === `water`;
  } catch {}
  if (!n) return { x: t.x, z: t.z, heading: 0 };
  let r = vu(e.plan, t.x, t.z);
  return { x: r.x, z: r.z, heading: r.facing };
}
function pL(e, t = `external`) {
  let n = iL.has(e.category) ? e.category : `side`,
    r = aL[n],
    i = uL(e.color) ? e.color : r.color,
    a =
      (typeof e.glyph == `string` && e.glyph
        ? [...e.glyph][0]
        : [...e.title.zh][0]) ?? `任`,
    o;
  return {
    id: e.id,
    get title() {
      return e.title;
    },
    get description() {
      return e.description;
    },
    category: n,
    reward: e.reward,
    repeatable: !!e.repeatable,
    icon: r.icon,
    get iconCell() {
      return (o ??= vM(a, i, Rj[r.icon]));
    },
    glyph: a,
    blip: e.blip ?? r.blip,
    color: i,
    start: (t) => fL(t, e.start),
    hours: e.hours,
    skipTo: e.hours ? (uL(e.skipTo) ? e.skipTo : e.hours[0] + 0.02) : void 0,
    skipCaption: e.skipCaption,
    giver: e.noGiver
      ? void 0
      : e.giverOutfit || e.giverPreset
        ? {
            outfit:
              (iI(e.giverOutfit) ? e.giverOutfit : e.giverPreset) ?? `uncle`,
            dx: 1.3,
            dz: 0.4,
            anim: `idle`,
          }
        : {
            outfit: cI(e.giver, n, e.id),
            dx: 1.3,
            dz: 0.4,
            anim: `wave`,
            standIn: !0,
            leaveAtStart: n === `story` || typeof e.onStart == `function`,
          },
    requires: e.requires,
    chapter: e.chapter,
    giverName: e.giver,
    order: uL(e.order) ? e.order : n === `story` ? 1 : 500,
    source: e.source ?? t,
    noPolice: !!e.noPolice,
    async run(t) {
      let n = t.ctx,
        r = {},
        i = gL(t);
      r.kit = i;
      let a = !!(e.giverOutfit || e.giverPreset) && !e.noGiver;
      if (t.giver || a) {
        let i = t.origin.x + 1.3,
          a = t.origin.z + 0.4;
        if (t.giver) ((i = t.giver.x), (a = t.giver.z));
        else {
          let e = vu(n.plan, i, a);
          Math.hypot(e.x - i, e.z - a) < 4 && ((i = e.x), (a = e.z));
        }
        let o = t.host(
          iI(e.giverOutfit) ?? iI(e.giverPreset) ?? nI.uncle,
          i,
          a,
          t.giver ? t.giver.heading : 0,
        );
        (o.faceTo(t.px, t.pz), (o.look = n.player.position), (r.giver = o));
      }
      t.onCleanup(() => {
        let i = t.result;
        try {
          i === `passed`
            ? e.onComplete?.(n, r)
            : i === `failed` && e.onFail?.(n, r);
        } catch (t) {
          console.error(
            `[missions] ${e.id} ${i === `passed` ? `onComplete` : `onFail`} threw`,
            t,
          );
        }
        try {
          e.cleanup?.(n, r);
        } catch (t) {
          console.error(`[missions] ${e.id} cleanup threw`, t);
        }
      });
      let o = (n, r) => {
        try {
          return r();
        } catch (r) {
          (console.error(`[missions] ${e.id} ${n} threw`, r), t.fail(oL));
          return;
        }
      };
      if ((o(`onStart`, () => e.onStart?.(n, r)), !t.alive)) return;
      if (typeof e.script == `function`) {
        await e.script(i);
        return;
      }
      let s = 0;
      if (
        t.resumeStep > 0 &&
        t.resumeStep < e.steps.length &&
        e.steps[t.resumeStep].checkpoint
      ) {
        s = t.resumeStep;
        let i = e.steps[s].checkpoint;
        if (
          (typeof i == `object` &&
            typeof i.restore == `function` &&
            o(`step ${s} checkpoint restore`, () => i.restore(n, r)),
          !t.alive)
        )
          return;
        t.notify(
          { zh: `從檢查點繼續`, en: `Resuming from the checkpoint` },
          `info`,
          2.5,
        );
      }
      for (let n = s; n < e.steps.length && t.alive; n++)
        await mL(t, e, e.steps[n], n, r, o);
      t.alive &&
        t.pass({
          bonus: uL(r.bonus) ? r.bonus : 0,
          note: lL(r.passNote) ? r.passNote : void 0,
        });
    },
  };
}
