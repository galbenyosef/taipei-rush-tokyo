// tokyo/assets/client-BwrkpB9y 01 — ports
// Lines 1-221 of readable/tokyo/assets/client-BwrkpB9y.pretty.js (statement-aligned).
import {
  Wn as e,
  Xn as t,
  kr as n,
  sr as r,
  yr as i,
} from "./engine-14d5lda2.js";
import { C as a, S as o, f as s, n as c } from "./shared-BaQwRjes.js";
import { f as l, i as u, o as d } from "./session-DVEw0yxj.js";
import {
  c as f,
  o as p,
  r as m,
  t as h,
  u as g,
} from "./controllers-DHBZ_k07.js";
import { notifyMarketTicketChange as notifyMarketTicketChange } from "./recovery-DKVj2RZ5.js";
var v = class extends Error {
    code;
    constructor(e) {
      (super(e), (this.code = e));
    }
  },
  y = `taipei-rush-market-ticket-v3:`,
  b = [`requestId`, `snapshotId`, `symbol`, `side`, `quantity`];
function x(e) {
  return (
    !!e &&
    typeof e.requestId == `string` &&
    !!e.requestId &&
    e.requestId.length <= 100 &&
    typeof e.snapshotId == `string` &&
    !!e.snapshotId &&
    e.snapshotId.length <= 100 &&
    typeof e.symbol == `string` &&
    /^\d{4}$/.test(e.symbol) &&
    [`buy`, `sell`].includes(e.side) &&
    Number.isSafeInteger(e.quantity) &&
    e.quantity >= 1 &&
    e.quantity <= 1e6
  );
}
var S = new Set([
    `invalid_order`,
    `insufficient_cash`,
    `insufficient_shares`,
    `sell_below_fees`,
    `unknown_symbol`,
    `sell_only_symbol`,
    `market_outdated`,
    `stale_snapshot`,
    `market_unavailable`,
    `position_limit`,
    `account_limit`,
    `wallet_unavailable`,
    `wallet_upgrade_required`,
    `wallet_conflict`,
    `wallet_rate_limited`,
    `market_paused`,
    `corporate_action_required`,
    `invalid_wallet`,
    `cloud_not_ready`,
    `market_closed`,
    `symbol_suspended`,
    `trade_rate_limited`,
    `idempotency_conflict`,
  ]),
  C = class {
    owner;
    rpc;
    ports;
    constructor(e, t, n) {
      ((this.owner = e), (this.rpc = t), (this.ports = n));
    }
    pending() {
      this.ports.assertIdentity();
      let e;
      try {
        e = r(y + this.owner);
      } catch {
        throw new v(`storage_unavailable`);
      }
      if (e === null) return null;
      if (e.v !== 3 || e.owner !== this.owner)
        throw new v(`wallet_recovery_required`);
      if (e.ticket === null) return null;
      let t = e.ticket;
      if (!x(t)) throw new v(`wallet_recovery_required`);
      return {
        requestId: t.requestId,
        snapshotId: t.snapshotId,
        symbol: t.symbol,
        side: t.side,
        quantity: t.quantity,
      };
    }
    remember(e) {
      if (
        (this.ports.assertIdentity(),
        !i(`taipei-rush-market-ticket-v3:` + this.owner, {
          v: 3,
          owner: this.owner,
          ticket: e,
        }))
      )
        throw new v(`storage_unavailable`);
      notifyMarketTicketChange();
    }
    async trade(e) {
      if (!x(e)) throw new v(`invalid_order`);
      let t = this.pending();
      if (t) {
        if (b.some((n) => t[n] !== e[n])) throw new v(`order_pending`);
        return this.recover();
      }
      return (
        await this.ports.flush(),
        this.ports.assertIdentity(),
        this.remember({ ...e }),
        this.recover()
      );
    }
    async collect() {
      if (this.pending()) return 0;
      (await this.ports.flush(), this.ports.assertIdentity());
      let e = await this.rpc(`market_collect`, {
        p_request_id: crypto.randomUUID(),
      });
      return (
        this.ports.assertIdentity(),
        await this.ports.accept(e.travel),
        e.receipt ? e.receipt.amount_cents / 100 : 0
      );
    }
    async recover() {
      let e = this.pending();
      if (!e) return null;
      let t;
      try {
        t = await this.rpc(`market_trade`, {
          p_request_id: e.requestId,
          p_snapshot_id: e.snapshotId,
          p_symbol: e.symbol,
          p_side: e.side,
          p_quantity: e.quantity,
        });
      } catch (e) {
        throw (e instanceof v && S.has(e.code) && this.remember(null), e);
      }
      return (
        this.ports.assertIdentity(),
        await this.ports.accept(t.travel),
        this.ports.assertIdentity(),
        this.remember(null),
        t.receipt
      );
    }
  };
function w(e) {
  if (!e) throw new v(`invalid_response`);
}
function T(e) {
  w(e && typeof e == `object` && !Array.isArray(e));
}
function E(e, t = 0) {
  w(Number.isSafeInteger(e) && e >= t);
}
function D(e) {
  w(typeof e == `string` && e.length > 0 && e.length <= 1e3);
}
function O(e) {
  w(
    typeof e == `string` &&
      /^\d{4}-\d{2}-\d{2}$/.test(e) &&
      Number.isFinite(Date.parse(e)),
  );
}
function k(e) {
  w(typeof e == `string` && Number.isFinite(Date.parse(e)));
}
function A(e) {
  (T(e),
    w(/^\d{4}$/.test(e.symbol)),
    D(e.name_zh),
    D(e.name_en),
    E(e.price_cents, 1),
    E(e.volume),
    e.tradable !== void 0 && w(typeof e.tradable == `boolean`),
    e.halt_reason != null && D(e.halt_reason),
    e.previous_close_cents === null || e.change_cents === null
      ? w(e.previous_close_cents === null && e.change_cents === null)
      : (E(e.previous_close_cents, 1),
        E(e.change_cents, -(2 ** 53 - 1)),
        w(e.price_cents - e.previous_close_cents === e.change_cents)));
  for (let t of [`open_cents`, `high_cents`, `low_cents`])
    e[t] !== null && E(e[t], 1);
}
function j(e) {
  (T(e),
    D(e.request_id),
    D(e.snapshot_id),
    w(/^\d{4}$/.test(e.symbol)),
    w([`buy`, `sell`].includes(e.side)),
    E(e.quantity, 1),
    E(e.price_cents, 1),
    E(e.gross_cents, 1),
    E(e.fee_cents),
    E(e.tax_cents),
    E(e.cash_delta_cents, -(2 ** 53 - 1)),
    E(e.cash_after_cents),
    E(e.realized_pnl_cents, -(2 ** 53 - 1)),
    w(e.gross_cents === e.quantity * e.price_cents),
    w(
      e.cash_delta_cents ===
        (e.side === `buy`
          ? -e.gross_cents - e.fee_cents
          : e.gross_cents - e.fee_cents - e.tax_cents),
    ),
    w(e.status === `filled`),
    k(e.created_at));
}
