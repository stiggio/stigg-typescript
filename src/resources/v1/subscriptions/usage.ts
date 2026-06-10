// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to subscriptions
 */
export class Usage extends APIResource {
  /**
   * Immediately charges usage for a subscription via the billing integration.
   * Calculates usage since the last charge and creates an invoice.
   */
  chargeUsage(
    id: string,
    params: UsageChargeUsageParams,
    options?: RequestOptions,
  ): APIPromise<UsageChargeUsageResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/subscriptions/${id}/usage/charge`, {
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

  /**
   * Triggers a usage sync for a subscription, reporting current usage to the billing
   * provider.
   */
  sync(
    id: string,
    params: UsageSyncParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageSyncResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/subscriptions/${id}/usage/sync`, {
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
export interface UsageChargeUsageResponse {
  /**
   * Result of charging subscription usage including the billing period and charged
   * items.
   */
  data: UsageChargeUsageResponse.Data;
}

export namespace UsageChargeUsageResponse {
  /**
   * Result of charging subscription usage including the billing period and charged
   * items.
   */
  export interface Data {
    /**
     * The invoice ID in the billing integration
     */
    invoiceBillingId: string | null;

    /**
     * End of the usage billing period
     */
    periodEnd: string;

    /**
     * Start of the usage billing period
     */
    periodStart: string;

    /**
     * The subscription ID for which usage was charged
     */
    subscriptionId: string;

    /**
     * Usage items that were charged
     */
    usageCharged: Array<Data.UsageCharged>;
  }

  export namespace Data {
    /**
     * A single usage item that was charged.
     */
    export interface UsageCharged {
      /**
       * The feature ID for which usage was charged
       */
      featureId: string | null;

      /**
       * The number of units charged
       */
      usageAmount: number;
    }
  }
}

/**
 * Response object
 */
export interface UsageSyncResponse {
  /**
   * Result of triggering a subscription usage sync.
   */
  data: UsageSyncResponse.Data;
}

export namespace UsageSyncResponse {
  /**
   * Result of triggering a subscription usage sync.
   */
  export interface Data {
    /**
     * Whether usage was synced to the billing provider
     */
    triggered: boolean;
  }
}

export interface UsageChargeUsageParams {
  /**
   * Body param: Cutoff date for usage calculation. If not provided, the current time
   * is used.
   */
  untilDate?: string;

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

export interface UsageSyncParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export declare namespace Usage {
  export {
    type UsageChargeUsageResponse as UsageChargeUsageResponse,
    type UsageSyncResponse as UsageSyncResponse,
    type UsageChargeUsageParams as UsageChargeUsageParams,
    type UsageSyncParams as UsageSyncParams,
  };
}
