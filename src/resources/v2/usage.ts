// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Operations related to usage & metering
 */
export class Usage extends APIResource {
  /**
   * Reports usage measurements for metered features. The reported usage is used to
   * track, limit, and bill customer consumption. Credit balances are returned once
   * per wallet in `credits`, not on each measurement.
   */
  report(params: UsageReportParams, options?: RequestOptions): APIPromise<UsageReportResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v2/usage', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * Response containing reported usage measurements with current usage values,
 * period information and reset dates, plus the balance of each credit wallet they
 * drew from.
 */
export interface UsageReportResponse {
  /**
   * Reported usage measurements and the credit balances they drew from
   */
  data: UsageReportResponse.Data;
}

export namespace UsageReportResponse {
  /**
   * Reported usage measurements and the credit balances they drew from
   */
  export interface Data {
    /**
     * Usage measurements, in request order, with current values and period info
     */
    usages: Array<Data.Usage>;

    /**
     * The balance of each credit wallet the request drew from. Omitted when no
     * reported feature consumes credits, or when credit balances aren't computed
     * synchronously for the environment; each usage's `credit` is then `null`.
     */
    credits?: Array<Data.Credit>;

    /**
     * The current usage of each governance entitlement this request counted towards.
     * Absent when governance is not enabled or the usage is unknown. Entitlements
     * whose usage could not be read, and those of repeated idempotent requests, are
     * left out
     */
    entities?: Array<Data.Entity>;
  }

  export namespace Data {
    /**
     * Recorded usage with period info and the credits it deducted
     */
    export interface Usage {
      /**
       * Unique identifier for the entity
       */
      id: string;

      /**
       * Timestamp of when the record was created
       */
      createdAt: string;

      /**
       * Customer id
       */
      customerId: string;

      /**
       * Feature id
       */
      featureId: string;

      /**
       * Timestamp
       */
      timestamp: string;

      /**
       * The usage measurement record
       */
      value: number;

      /**
       * The credits this measurement deducted. `null` when the measurement drew from no
       * wallet listed in `credits`. The balance of the wallet it drew from is in the
       * response `credits` list, matched by customer, resource and currency.
       */
      credit?: Usage.Credit | null;

      /**
       * The current measured usage value
       */
      currentUsage?: number | null;

      /**
       * The date when the next usage reset will occur
       */
      nextResetDate?: string | null;

      /**
       * The customer resource this usage applies to. Optional — only required if the
       * customer has multiple resources (for example, one subscription per workspace or
       * site) and usage needs to be tracked separately per resource; omit it to report
       * usage at the customer level.
       */
      resourceId?: string | null;

      /**
       * The end date of the usage period in which this measurement resides (for
       * entitlements with a reset period)
       */
      usagePeriodEnd?: string | null;

      /**
       * The start date of the usage period in which this measurement resides (for
       * entitlements with a reset period)
       */
      usagePeriodStart?: string | null;
    }

    export namespace Usage {
      /**
       * The credits this measurement deducted. `null` when the measurement drew from no
       * wallet listed in `credits`. The balance of the wallet it drew from is in the
       * response `credits` list, matched by customer, resource and currency.
       */
      export interface Credit {
        /**
         * The credits this single reportUsage call deducted, in credit units — scoped to
         * this one measurement (0 for idempotency duplicates). Contrast `currentUsage`,
         * which is the wallet-wide running total shared across all features on this
         * currency. Use it to reconcile expected per-call deductions.
         */
        consumed: number;

        /**
         * The credit currency identifier
         */
        currencyId: string;
      }
    }

    /**
     * Optimistic credit balance of one wallet (customer, resource and currency) after
     * the request, listed once however many measurements drew from it
     */
    export interface Credit {
      /**
       * The credit currency identifier
       */
      currencyId: string;

      /**
       * The wallet's total consumed credits for this currency (optimistic — includes
       * not-yet-reconciled usage), shared across every feature that draws on the
       * currency. This is the running balance, not this call's deduction — see
       * `consumed` for that.
       */
      currentUsage: number;

      /**
       * Customer id
       */
      customerId: string;

      /**
       * The wallet's resource; `null` for the customer-level wallet
       */
      resourceId: string | null;

      /**
       * The grant-version timestamp of this balance, used by the SDK for last-write-wins
       * reconciliation
       */
      timestamp: string;

      /**
       * The total credits granted
       */
      usageLimit: number;

      /**
       * End of the current credit grant period (when recurring credits reset), if
       * applicable
       */
      usagePeriodEnd?: string | null;
    }

    /**
     * The usage counted against one governance entitlement
     */
    export interface Entity {
      /**
       * The absolute usage counted against the entitlement
       */
      currentUsage: number;

      /**
       * The customer whose usage counted towards the entitlement
       */
      customerId: string;

      /**
       * The governance entitlement the usage counts towards
       */
      entitlementId: string;

      /**
       * The governance entity the entitlement belongs to
       */
      entityId: string;

      /**
       * The customer resource the usage counted from; `null` for customer-level usage
       */
      resourceId: string | null;

      /**
       * The entities the entitlement is scoped to (empty when it is not scoped)
       */
      scopeEntityIds: Array<string>;

      /**
       * When the entitlement usage was last updated
       */
      usageUpdatedAt: string;

      /**
       * The credit currency the entitlement governs (exactly one of featureId and
       * currencyId is set)
       */
      currencyId?: string;

      /**
       * The feature the entitlement governs (exactly one of featureId and currencyId is
       * set)
       */
      featureId?: string;
    }
  }
}

export interface UsageReportParams {
  /**
   * Body param: A list of usage reports to be submitted in bulk
   */
  usages: Array<UsageReportParams.Usage>;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export namespace UsageReportParams {
  /**
   * Single usage measurement
   */
  export interface Usage {
    /**
     * Customer id
     */
    customerId: string;

    /**
     * Feature id
     */
    featureId: string;

    /**
     * The value to report for usage. Fractional values are accepted and rounded half
     * away from zero to 5 decimal places. A value with a fractional part must have an
     * absolute value below 34,359,738,368 (2^35); whole numbers are accepted up to
     * ±9,007,199,254,740,991.
     */
    value: number;

    /**
     * Timestamp of when the record was created
     */
    createdAt?: string;

    /**
     * Additional dimensions for the usage report
     */
    dimensions?: { [key: string]: string | number | boolean };

    /**
     * A key you provide to safely retry the same usage report without double-counting
     * it. Reports with a previously-seen idempotency key are deduplicated for 7 days;
     * after that window a retry is treated as new usage.
     */
    idempotencyKey?: string;

    /**
     * The customer resource this usage applies to. Optional — only required if the
     * customer has multiple resources (for example, one subscription per workspace or
     * site) and usage needs to be tracked separately per resource; omit it to report
     * usage at the customer level.
     */
    resourceId?: string | null;

    /**
     * How the reported value is applied: DELTA (default) adds it to the feature's
     * current usage; SET treats it as the new absolute usage total, and Stigg computes
     * the delta internally.
     */
    updateBehavior?: 'DELTA' | 'SET';
  }
}

export declare namespace Usage {
  export { type UsageReportResponse as UsageReportResponse, type UsageReportParams as UsageReportParams };
}
