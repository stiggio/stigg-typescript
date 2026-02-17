// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Immediately charges usage for a subscription via the billing integration.
   * Calculates usage since the last charge and creates an invoice.
   */
  chargeUsage(
    id: string,
    body: UsageChargeUsageParams,
    options?: RequestOptions,
  ): APIPromise<UsageChargeUsageResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/usage/charge`, { body, ...options });
  }

  /**
   * Triggers a usage sync for a subscription, reporting current usage to the billing
   * provider.
   */
  syncUsage(id: string, options?: RequestOptions): APIPromise<UsageSyncUsageResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/usage/sync`, options);
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
export interface UsageSyncUsageResponse {
  /**
   * Result of triggering a subscription usage sync.
   */
  data: UsageSyncUsageResponse.Data;
}

export namespace UsageSyncUsageResponse {
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
   * Cutoff date for usage calculation. If not provided, the current time is used.
   */
  untilDate?: string;
}

export declare namespace Usage {
  export {
    type UsageChargeUsageResponse as UsageChargeUsageResponse,
    type UsageSyncUsageResponse as UsageSyncUsageResponse,
    type UsageChargeUsageParams as UsageChargeUsageParams,
  };
}
