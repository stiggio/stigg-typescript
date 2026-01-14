// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Perform retrieval on a Usage history
   */
  retrieve(
    featureID: string,
    params: UsageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveResponse> {
    const { customerId, ...query } = params;
    return this._client.get(path`/api/v1/customers/${customerId}/usage/features/${featureID}`, {
      query,
      ...options,
    });
  }
}

export interface UsageRetrieveResponse {
  data: UsageRetrieveResponse.Data;
}

export namespace UsageRetrieveResponse {
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

export interface UsageRetrieveParams {
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

export declare namespace Usage {
  export {
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}
