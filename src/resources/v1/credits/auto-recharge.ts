// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class AutoRecharge extends APIResource {
  /**
   * Retrieves the automatic recharge configuration for a customer and currency.
   * Returns default settings if no configuration exists.
   */
  getAutoRecharge(
    query: AutoRechargeGetAutoRechargeParams,
    options?: RequestOptions,
  ): APIPromise<AutoRechargeGetAutoRechargeResponse> {
    return this._client.get('/api/v1/credits/auto-recharge', { query, ...options });
  }
}

/**
 * Response object
 */
export interface AutoRechargeGetAutoRechargeResponse {
  /**
   * Automatic recharge configuration for a customer and currency
   */
  data: AutoRechargeGetAutoRechargeResponse.Data;
}

export namespace AutoRechargeGetAutoRechargeResponse {
  /**
   * Automatic recharge configuration for a customer and currency
   */
  export interface Data {
    /**
     * The unique configuration ID
     */
    id: string | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string | null;

    /**
     * The currency ID for this configuration
     */
    currencyId: string;

    /**
     * The customer ID this configuration belongs to
     */
    customerId: string;

    /**
     * Expiration period for auto-recharge grants (1_MONTH or 1_YEAR)
     */
    grantExpirationPeriod: '1_MONTH' | '1_YEAR';

    /**
     * Whether automatic recharge is enabled
     */
    isEnabled: boolean;

    /**
     * Maximum monthly spend limit for automatic recharges
     */
    maxSpendLimit: number | null;

    /**
     * The target credit balance to recharge to
     */
    targetBalance: number;

    /**
     * The threshold type (CREDIT_AMOUNT or DOLLAR_AMOUNT)
     */
    thresholdType: 'CREDIT_AMOUNT' | 'DOLLAR_AMOUNT';

    /**
     * The threshold value that triggers a recharge
     */
    thresholdValue: number;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string | null;
  }
}

export interface AutoRechargeGetAutoRechargeParams {
  /**
   * Filter by currency ID (required)
   */
  currencyId: string;

  /**
   * Filter by customer ID (required)
   */
  customerId: string;
}

export declare namespace AutoRecharge {
  export {
    type AutoRechargeGetAutoRechargeResponse as AutoRechargeGetAutoRechargeResponse,
    type AutoRechargeGetAutoRechargeParams as AutoRechargeGetAutoRechargeParams,
  };
}
