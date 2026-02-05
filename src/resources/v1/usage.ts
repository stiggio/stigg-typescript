// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Retrieves historical usage data for a customer's metered feature over time.
   */
  history(
    featureID: string,
    params: UsageHistoryParams,
    options?: RequestOptions,
  ): APIPromise<UsageHistoryResponse> {
    const { customerId, ...query } = params;
    return this._client.get(path`/api/v1/usage/${customerId}/history/${featureID}`, { query, ...options });
  }

  /**
   * Reports usage measurements for metered features. The reported usage is used to
   * track, limit, and bill customer consumption.
   */
  report(body: UsageReportParams, options?: RequestOptions): APIPromise<UsageReportResponse> {
    return this._client.post('/api/v1/usage', { body, ...options });
  }
}

/**
 * Response object
 */
export interface UsageHistoryResponse {
  /**
   * Historical usage time series
   */
  data: UsageHistoryResponse.Data;
}

export namespace UsageHistoryResponse {
  /**
   * Historical usage time series
   */
  export interface Data {
    /**
     * Markers for events that affecting feature usage
     */
    markers: Array<Data.Marker>;

    /**
     * Series of usage history
     */
    series: Array<Data.Series>;
  }

  export namespace Data {
    /**
     * Usage reset or change marker
     */
    export interface Marker {
      /**
       * Timestamp of the marker
       */
      timestamp: string;

      /**
       * Type of marker for a usage history point
       */
      type: 'PERIODIC_RESET' | 'SUBSCRIPTION_CHANGE_RESET';
    }

    /**
     * Usage data points with tags
     */
    export interface Series {
      /**
       * Points in the usage history series
       */
      points: Array<Series.Point>;

      /**
       * Tags for the usage history series
       */
      tags: Array<Series.Tag>;
    }

    export namespace Series {
      /**
       * Single usage data point
       */
      export interface Point {
        /**
         * Indicates whether there was usage reset in this point, see `markers` for details
         */
        isResetPoint: boolean;

        /**
         * Timestamp of the usage history point
         */
        timestamp: string;

        /**
         * Value of the usage history point
         */
        value: number;
      }

      /**
       * Grouping tag key-value
       */
      export interface Tag {
        /**
         * Key of the tag
         */
        key: string;

        /**
         * Value of the tag
         */
        value: string;
      }
    }
  }
}

/**
 * Response containing reported usage measurements with current usage values,
 * period information, and reset dates for each measurement.
 */
export interface UsageReportResponse {
  /**
   * Array of usage measurements with current values and period info
   */
  data: Array<UsageReportResponse.Data>;
}

export namespace UsageReportResponse {
  /**
   * Recorded usage with period info
   */
  export interface Data {
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
     * The current measured usage value
     */
    currentUsage?: number | null;

    /**
     * The date when the next usage reset will occur
     */
    nextResetDate?: string | null;

    /**
     * Resource id
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
}

export interface UsageHistoryParams {
  /**
   * Path param: Customer id
   */
  customerId: string;

  /**
   * Query param: The start date of the range
   */
  startDate: string;

  /**
   * Query param: The end date of the range
   */
  endDate?: string;

  /**
   * Query param
   */
  groupBy?: string;

  /**
   * Query param: Resource id
   */
  resourceId?: string | null;
}

export interface UsageReportParams {
  /**
   * A list of usage reports to be submitted in bulk
   */
  usages: Array<UsageReportParams.Usage>;
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
     * The value to report for usage
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
     * Resource id
     */
    resourceId?: string | null;

    /**
     * The method by which the usage value should be updated
     */
    updateBehavior?: 'DELTA' | 'SET';
  }
}

export declare namespace Usage {
  export {
    type UsageHistoryResponse as UsageHistoryResponse,
    type UsageReportResponse as UsageReportResponse,
    type UsageHistoryParams as UsageHistoryParams,
    type UsageReportParams as UsageReportParams,
  };
}
