// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConsumptionAPI from './consumption';
import {
  Consumption,
  ConsumptionConsumeAsyncParams,
  ConsumptionConsumeAsyncResponse,
  ConsumptionConsumeParams,
  ConsumptionConsumeResponse,
} from './consumption';
import * as CustomCurrenciesAPI from './custom-currencies';
import {
  CustomCurrencies,
  CustomCurrencyArchiveParams,
  CustomCurrencyCreateParams,
  CustomCurrencyListAssociatedEntitiesParams,
  CustomCurrencyListAssociatedEntitiesResponse,
  CustomCurrencyListParams,
  CustomCurrencyListResponse,
  CustomCurrencyListResponsesMyCursorIDPage,
  CustomCurrencyResponse,
  CustomCurrencyUnarchiveParams,
  CustomCurrencyUpdateParams,
} from './custom-currencies';
import * as GrantsAPI from './grants';
import {
  CreditGrantResponse,
  GrantCreateParams,
  GrantListParams,
  GrantListResponse,
  GrantListResponsesMyCursorIDPage,
  GrantVoidParams,
  Grants,
} from './grants';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Credits extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  customCurrencies: CustomCurrenciesAPI.CustomCurrencies = new CustomCurrenciesAPI.CustomCurrencies(
    this._client,
  );
  consumption: ConsumptionAPI.Consumption = new ConsumptionAPI.Consumption(this._client);

  /**
   * Retrieves the automatic recharge configuration for a customer and currency.
   * Returns default settings if no configuration exists.
   */
  getAutoRecharge(
    params: CreditGetAutoRechargeParams,
    options?: RequestOptions,
  ): APIPromise<CreditGetAutoRechargeResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params;
    return this._client.get('/api/v1/credits/auto-recharge', {
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

  /**
   * Retrieves credit usage time-series data for a customer, grouped by feature, over
   * a specified time range.
   */
  getUsage(params: CreditGetUsageParams, options?: RequestOptions): APIPromise<CreditGetUsageResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params;
    return this._client.get('/api/v1/credits/usage', {
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

  /**
   * Retrieves a paginated list of credit ledger events for a customer.
   */
  listLedger(
    params: CreditListLedgerParams,
    options?: RequestOptions,
  ): PagePromise<CreditListLedgerResponsesMyCursorIDPage, CreditListLedgerResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params;
    return this._client.getAPIList('/api/v1/credits/ledger', MyCursorIDPage<CreditListLedgerResponse>, {
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
     * Cursor-based pagination for the returned series. `next`/`prev` are opaque
     * cursors; pass them back as `after`/`before` to traverse pages. The series axis
     * is `groupBy` when provided, otherwise `featureId`
     */
    pagination: Data.Pagination;

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
     * Cursor-based pagination for the returned series. `next`/`prev` are opaque
     * cursors; pass them back as `after`/`before` to traverse pages. The series axis
     * is `groupBy` when provided, otherwise `featureId`
     */
    export interface Pagination {
      /**
       * Cursor for fetching the next page of results, or null if no additional pages
       * exist
       */
      next: string | null;

      /**
       * Cursor for fetching the previous page of results, or null if at the beginning
       */
      prev: string | null;
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
   * Query param: Filter by currency ID (required)
   */
  currencyId: string;

  /**
   * Query param: Filter by customer ID (required)
   */
  customerId: string;

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

export interface CreditGetUsageParams {
  /**
   * Query param: Filter by customer ID (required)
   */
  customerId: string;

  /**
   * Query param: Return items that come after this cursor
   */
  after?: string;

  /**
   * Query param: Return items that come before this cursor
   */
  before?: string;

  /**
   * Query param: Filter by currency ID
   */
  currencyId?: string;

  /**
   * Query param: End date for the credit usage time range (ISO 8601). Defaults to
   * now when startDate is provided
   */
  endDate?: string;

  /**
   * Query param: Comma-separated list of feature dimension keys to group usage
   * series by (up to 3). Each key matches /^[a-zA-Z0-9_$-]+$/
   */
  groupBy?: string;

  /**
   * Query param: Maximum number of items to return
   */
  limit?: number;

  /**
   * Query param: Filter by resource ID
   */
  resourceId?: string;

  /**
   * Query param: Start date for the credit usage time range (ISO 8601). Takes
   * precedence over timeRange when provided
   */
  startDate?: string;

  /**
   * Query param: Time range for usage data (LAST_DAY, LAST_WEEK, LAST_MONTH,
   * LAST_YEAR). Defaults to LAST_MONTH
   */
  timeRange?: 'LAST_DAY' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR';

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

export interface CreditListLedgerParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by customer ID (required)
   */
  customerId: string;

  /**
   * Query param: Filter by currency ID
   */
  currencyId?: string;

  /**
   * Query param: Filter by event type(s), comma-separated
   */
  eventType?: string;

  /**
   * Query param: Filter by resource ID
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

Credits.Grants = Grants;
Credits.CustomCurrencies = CustomCurrencies;
Credits.Consumption = Consumption;

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
    type GrantVoidParams as GrantVoidParams,
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
    type CustomCurrencyArchiveParams as CustomCurrencyArchiveParams,
    type CustomCurrencyListAssociatedEntitiesParams as CustomCurrencyListAssociatedEntitiesParams,
    type CustomCurrencyUnarchiveParams as CustomCurrencyUnarchiveParams,
  };

  export {
    Consumption as Consumption,
    type ConsumptionConsumeResponse as ConsumptionConsumeResponse,
    type ConsumptionConsumeAsyncResponse as ConsumptionConsumeAsyncResponse,
    type ConsumptionConsumeParams as ConsumptionConsumeParams,
    type ConsumptionConsumeAsyncParams as ConsumptionConsumeAsyncParams,
  };
}
