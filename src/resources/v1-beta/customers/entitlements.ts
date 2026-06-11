// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Experimental — request and response shapes may change without notice. Same
   * semantics as `Check entitlement`, plus an optional `dimensions` query param that
   * resolves to per-entity governance limits surfaced as `chains` on the response.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1Beta.customers.entitlements.check('x');
   * ```
   */
  check(
    id: string,
    params: EntitlementCheckParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementCheckResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.get(path`/api/v1-beta/customers/${id}/entitlements/check`, {
      query,
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
 * Response object
 */
export interface EntitlementCheckResponse {
  /**
   * Feature entitlement with optional governance chains attached.
   */
  data: EntitlementCheckResponse.Feature | EntitlementCheckResponse.Credit;
}

export namespace EntitlementCheckResponse {
  /**
   * Feature entitlement with optional governance chains attached.
   */
  export interface Feature {
    accessDeniedReason:
      | 'FeatureNotFound'
      | 'CustomerNotFound'
      | 'CustomerIsArchived'
      | 'CustomerResourceNotFound'
      | 'NoActiveSubscription'
      | 'NoFeatureEntitlementInSubscription'
      | 'RequestedUsageExceedingLimit'
      | 'RequestedValuesMismatch'
      | 'BudgetExceeded'
      | 'Unknown'
      | 'FeatureTypeMismatch'
      | 'Revoked'
      | 'InsufficientCredits'
      | 'EntitlementNotFound'
      | null;

    isGranted: boolean;

    type: 'FEATURE';

    /**
     * Per-entity rollups, one chain per resolved dimension. Omitted when dimensions
     * was not provided.
     */
    chains?: Array<Array<Feature.Chain>>;

    currentUsage?: number;

    /**
     * Timestamp of the last update to the entitlement grant or configuration.
     */
    entitlementUpdatedAt?: string;

    feature?: Feature.Feature;

    hasUnlimitedUsage?: boolean;

    resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    usageLimit?: number | null;

    /**
     * The anchor for calculating the usage period for metered entitlements with a
     * reset period configured
     */
    usagePeriodAnchor?: string;

    /**
     * The end date of the usage period for metered entitlements with a reset period
     * configured
     */
    usagePeriodEnd?: string;

    /**
     * The start date of the usage period for metered entitlements with a reset period
     * configured
     */
    usagePeriodStart?: string;

    /**
     * The next time the entitlement should be recalculated
     */
    validUntil?: string;
  }

  export namespace Feature {
    /**
     * Per-entity governance node — limit and current usage for a single resolved
     * entity.
     */
    export interface Chain {
      /**
       * Amount consumed by this entity in the current cadence period.
       */
      currentUsage: number;

      /**
       * External id of the entity within the customer.
       */
      entityId: string;

      /**
       * Whether this node alone permits the requested usage.
       */
      isGranted: boolean;

      /**
       * External ids of the entities this budget is scoped to. Empty (`[]`) is the
       * node-wide budget; a non-empty set is the dimension-scoped budget that matched
       * this request — use it to tell apart multiple budgets on the same entity.
       */
      scopeEntityIds: Array<string>;

      /**
       * Hard usage limit for this node; null when no assignment is configured.
       */
      usageLimit: number | null;
    }

    export interface Feature {
      /**
       * The unique reference ID of the entitlement.
       */
      id: string;

      /**
       * The human-readable name of the entitlement, shown in UI elements.
       */
      displayName: string;

      /**
       * The current status of the feature.
       */
      featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE';

      /**
       * The type of feature associated with the entitlement.
       */
      featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';
    }
  }

  /**
   * Credit entitlement with optional governance chains attached.
   */
  export interface Credit {
    accessDeniedReason:
      | 'FeatureNotFound'
      | 'CustomerNotFound'
      | 'CustomerIsArchived'
      | 'CustomerResourceNotFound'
      | 'NoActiveSubscription'
      | 'NoFeatureEntitlementInSubscription'
      | 'RequestedUsageExceedingLimit'
      | 'RequestedValuesMismatch'
      | 'BudgetExceeded'
      | 'Unknown'
      | 'FeatureTypeMismatch'
      | 'Revoked'
      | 'InsufficientCredits'
      | 'EntitlementNotFound'
      | null;

    /**
     * The currency associated with a credit entitlement.
     */
    currency: Credit.Currency;

    currentUsage: number;

    isGranted: boolean;

    type: 'CREDIT';

    usageLimit: number;

    /**
     * Timestamp of the last update to the credit usage.
     */
    usageUpdatedAt: string;

    /**
     * Per-entity rollups, one chain per resolved dimension. Omitted when dimensions
     * was not provided.
     */
    chains?: Array<Array<Credit.Chain>>;

    /**
     * Timestamp of the last update to the entitlement grant or configuration.
     */
    entitlementUpdatedAt?: string;

    /**
     * The end date of the current billing period for recurring credit grants.
     */
    usagePeriodEnd?: string;

    /**
     * The next time the entitlement should be recalculated
     */
    validUntil?: string;
  }

  export namespace Credit {
    /**
     * The currency associated with a credit entitlement.
     */
    export interface Currency {
      /**
       * The unique identifier of the custom currency.
       */
      currencyId: string;

      /**
       * The display name of the currency.
       */
      displayName: string;

      /**
       * A description of the currency.
       */
      description?: string | null;

      /**
       * Additional metadata associated with the currency.
       */
      metadata?: { [key: string]: string } | null;

      /**
       * The plural form of the currency unit.
       */
      unitPlural?: string | null;

      /**
       * The singular form of the currency unit.
       */
      unitSingular?: string | null;
    }

    /**
     * Per-entity governance node — limit and current usage for a single resolved
     * entity.
     */
    export interface Chain {
      /**
       * Amount consumed by this entity in the current cadence period.
       */
      currentUsage: number;

      /**
       * External id of the entity within the customer.
       */
      entityId: string;

      /**
       * Whether this node alone permits the requested usage.
       */
      isGranted: boolean;

      /**
       * External ids of the entities this budget is scoped to. Empty (`[]`) is the
       * node-wide budget; a non-empty set is the dimension-scoped budget that matched
       * this request — use it to tell apart multiple budgets on the same entity.
       */
      scopeEntityIds: Array<string>;

      /**
       * Hard usage limit for this node; null when no assignment is configured.
       */
      usageLimit: number | null;
    }
  }
}

export interface EntitlementCheckParams {
  /**
   * Query param: Currency ID (refId) to check for credit entitlements. Mutually
   * exclusive with `featureId`.
   */
  currencyId?: string;

  /**
   * Query param: Optional attribution map (e.g. `dimensions[userId]=u1`). When
   * provided, the response includes a `chains` array with per-entity governance
   * limits.
   */
  dimensions?: { [key: string]: string };

  /**
   * Query param: Feature ID (refId) to check. Mutually exclusive with `currencyId`.
   */
  featureId?: string;

  /**
   * Query param: Requested usage amount to evaluate against the entitlement limit
   * (numeric features only)
   */
  requestedUsage?: number;

  /**
   * Query param: Requested values to evaluate against allowed values (enum features
   * only)
   */
  requestedValues?: Array<string>;

  /**
   * Query param: Resource ID to scope the entitlement check to a specific resource
   */
  resourceId?: string;

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

export declare namespace Entitlements {
  export {
    type EntitlementCheckResponse as EntitlementCheckResponse,
    type EntitlementCheckParams as EntitlementCheckParams,
  };
}
