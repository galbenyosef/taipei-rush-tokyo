// tokyo/assets/fullmap-Dd3RmRQQ 03 — icon
// Lines 1301-1307 of readable/tokyo/assets/fullmap-Dd3RmRQQ.pretty.js (statement-aligned).
function j(e) {
  return (
    !!e.label &&
    (e.icon === `temple` || e.icon === `market` || e.icon === `landmark`) &&
    !e.id.startsWith(`ui-lm-`)
  );
}
