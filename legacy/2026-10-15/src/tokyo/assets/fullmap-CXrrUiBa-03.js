// tokyo/assets/fullmap-CXrrUiBa 03 — icon
// Lines 1301-1307 of readable/tokyo/assets/fullmap-CXrrUiBa.pretty.js (statement-aligned).
function A(e) {
  return (
    !!e.label &&
    (e.icon === `temple` || e.icon === `market` || e.icon === `landmark`) &&
    !e.id.startsWith(`ui-lm-`)
  );
}
