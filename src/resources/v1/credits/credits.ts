// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomCurrenciesAPI from './custom-currencies';
import {
  CustomCurrencies,
  CustomCurrencyCreateParams,
  CustomCurrencyListAssociatedEntitiesResponse,
  CustomCurrencyListParams,
  CustomCurrencyListResponse,
  CustomCurrencyListResponsesMyCursorIDPage,
  CustomCurrencyResponse,
  CustomCurrencyUpdateParams,
} from './custom-currencies';
import * as GrantsAPI from './grants';
import {
  CreditGrantResponse,
  GrantCreateParams,
  GrantListParams,
  GrantListResponse,
  GrantListResponsesMyCursorIDPage,
  Grants,
} from './grants';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Credits extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  customCurrencies: CustomCurrenciesAPI.CustomCurrencies = new CustomCurrenciesAPI.CustomCurrencies(
    this._client,
  );

  /**
   * Retrieves the automatic recharge configuration for a customer and currency.
   * Returns default settings if no configuration exists.
   *
   * @example
   * ```ts
   * const response = await client.v1.credits.getAutoRecharge({
   *   currencyId: 'currencyId',
   *   customerId: 'customerId',
   * });
   * ```
   */
  getAutoRecharge(
    query: CreditGetAutoRechargeParams,
    options?: RequestOptions,
  ): APIPromise<CreditGetAutoRechargeResponse> {
    return this._client.get('/api/v1/credits/auto-recharge', { query, ...options });
  }

  /**
   * Retrieves credit usage time-series data for a customer, grouped by feature, over
   * a specified time range.
   *
   * @example
   * ```ts
   * const response = await client.v1.credits.getUsage({
   *   customerId: 'customerId',
   * });
   * ```
   */
  getUsage(query: CreditGetUsageParams, options?: RequestOptions): APIPromise<CreditGetUsageResponse> {
    return this._client.get('/api/v1/credits/usage', { query, ...options });
  }

  /**
   * Retrieves a paginated list of credit ledger events for a customer.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const creditListLedgerResponse of client.v1.credits.listLedger(
   *   { customerId: 'customerId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listLedger(
    query: CreditListLedgerParams,
    options?: RequestOptions,
  ): PagePromise<CreditListLedgerResponsesMyCursorIDPage, CreditListLedgerResponse> {
    return this._client.getAPIList('/api/v1/credits/ledger', MyCursorIDPage<CreditListLedgerResponse>, {
      query,
      ...options,
    });
  }
}

export type CreditListLedgerResponsesMyCursorIDPage = MyCursorIDPage<CreditListLedgerResponse>;

/**
 * Response object
 */
export interface CreditGetAutoRechargeResponse {
  /**
   * Automatic recharge configuration for a customer and currency
   */
  data: CreditGetAutoRechargeResponse.Data;
}

export namespace CreditGetAutoRechargeResponse {
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

/**
 * Response object
 */
export interface CreditGetUsageResponse {
  /**
   * Credit usage data grouped by feature with time-series points
   */
  data: CreditGetUsageResponse.Data;
}

export namespace CreditGetUsageResponse {
  /**
   * Credit usage data grouped by feature with time-series points
   */
  export interface Data {
    /**
     * The custom currency used for credit measurement
     */
    currency: Data.Currency | null;

    /**
     * Credit usage series grouped by feature
     */
    series: Array<Data.Series>;
  }

  export namespace Data {
    /**
     * The custom currency used for credit measurement
     */
    export interface Currency {
      /**
       * The currency identifier
       */
      currencyId: string;

      /**
       * The display name of the currency
       */
      displayName: string;

      /**
       * Plural unit label
       */
      plural: string | null;

      /**
       * Singular unit label
       */
      singular: string | null;

      /**
       * The currency symbol
       */
      symbol: string | null;
    }

    /**
     * Credit usage data for a single feature
     */
    export interface Series {
      /**
       * The feature ID; null when grouping by dimensions only
       */
      featureId: string | null;

      /**
       * The display name of the feature; null when grouping by dimensions only
       */
      featureName: string | null;

      /**
       * Time-series data points for this feature
       */
      points: Array<Series.Point>;

      /**
       * Total credits consumed by this feature in the time range
       */
      totalCredits: number;

      /**
       * Dimension key/value pairs identifying this series when groupBy is applied
       */
      tags?: Array<Series.Tag>;
    }

    export namespace Series {
      /**
       * A single data point in the credit usage time series
       */
      export interface Point {
        /**
         * The timestamp of the data point
         */
        timestamp: string;

        /**
         * The credit usage value at this point
         */
        value: number;
      }

      /**
       * Dimension key/value pair identifying a credit usage series
       */
      export interface Tag {
        /**
         * The dimension key
         */
        key: string;

        /**
         * The dimension value for this series
         */
        value: string;
      }
    }
  }
}

/**
 * A credit ledger event representing a change to credit balance
 */
export interface CreditListLedgerResponse {
  /**
   * The credit amount for this event
   */
  amount: number;

  /**
   * The credit currency ID
   */
  creditCurrencyId: string;

  /**
   * The credit grant ID associated with this event
   */
  creditGrantId: string;

  /**
   * The customer ID this event belongs to
   */
  customerId: string;

  /**
   * The unique event identifier
   */
  eventId: string | null;

  /**
   * The type of credit event
   */
  eventType:
    | 'CREDITS_GRANTED'
    | 'CREDITS_EXPIRED'
    | 'CREDITS_CONSUMED'
    | 'CREDITS_VOIDED'
    | 'CREDITS_UPDATED'
    | 'CREDITS_CONSUMPTION_TRANSFER_SOURCE'
    | 'CREDITS_CONSUMPTION_TRANSFER_TARGET';

  /**
   * The feature ID associated with this event
   */
  featureId: string | null;

  /**
   * The resource ID this event is scoped to
   */
  resourceId: string | null;

  /**
   * The timestamp when the event occurred
   */
  timestamp: string;
}

export interface CreditGetAutoRechargeParams {
  /**
   * Filter by currency ID (required)
   */
  currencyId: string;

  /**
   * Filter by customer ID (required)
   */
  customerId: string;
}

export interface CreditGetUsageParams {
  /**
   * Filter by customer ID (required)
   */
  customerId: string;

  /**
   * Filter by currency ID
   */
  currencyId?: string;

  /**
   * End date for the credit usage time range (ISO 8601). Defaults to now when
   * startDate is provided
   */
  endDate?: string;

  /**
   * Comma-separated list of feature dimension keys to group usage series by (up to
   * 3). Each key matches /^[a-zA-Z0-9_$-]+$/
   */
  groupBy?: string;

  /**
   * Filter by resource ID
   */
  resourceId?: string;

  /**
   * Start date for the credit usage time range (ISO 8601). Takes precedence over
   * timeRange when provided
   */
  startDate?: string;

  /**
   * Time range for usage data (LAST_DAY, LAST_WEEK, LAST_MONTH, LAST_YEAR). Defaults
   * to LAST_MONTH
   */
  timeRange?: 'LAST_DAY' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR';
}

export interface CreditListLedgerParams extends MyCursorIDPageParams {
  /**
   * Filter by customer ID (required)
   */
  customerId: string;

  /**
   * Filter by currency ID
   */
  currencyId?: string;

  /**
   * Filter by resource ID
   */
  resourceId?: string;
}

Credits.Grants = Grants;
Credits.CustomCurrencies = CustomCurrencies;

export declare namespace Credits {
  export {
    type CreditGetAutoRechargeResponse as CreditGetAutoRechargeResponse,
    type CreditGetUsageResponse as CreditGetUsageResponse,
    type CreditListLedgerResponse as CreditListLedgerResponse,
    type CreditListLedgerResponsesMyCursorIDPage as CreditListLedgerResponsesMyCursorIDPage,
    type CreditGetAutoRechargeParams as CreditGetAutoRechargeParams,
    type CreditGetUsageParams as CreditGetUsageParams,
    type CreditListLedgerParams as CreditListLedgerParams,
  };

  export {
    Grants as Grants,
    type CreditGrantResponse as CreditGrantResponse,
    type GrantListResponse as GrantListResponse,
    type GrantListResponsesMyCursorIDPage as GrantListResponsesMyCursorIDPage,
    type GrantCreateParams as GrantCreateParams,
    type GrantListParams as GrantListParams,
  };

  export {
    CustomCurrencies as CustomCurrencies,
    type CustomCurrencyResponse as CustomCurrencyResponse,
    type CustomCurrencyListResponse as CustomCurrencyListResponse,
    type CustomCurrencyListAssociatedEntitiesResponse as CustomCurrencyListAssociatedEntitiesResponse,
    type CustomCurrencyListResponsesMyCursorIDPage as CustomCurrencyListResponsesMyCursorIDPage,
    type CustomCurrencyCreateParams as CustomCurrencyCreateParams,
    type CustomCurrencyUpdateParams as CustomCurrencyUpdateParams,
    type CustomCurrencyListParams as CustomCurrencyListParams,
  };
}
