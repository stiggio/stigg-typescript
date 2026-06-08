// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Destinations extends APIResource {
  /**
   * Register a destination on the environment's DATA_EXPORT integration.
   * Lazy-creates the integration row + provider recipient on first call. Idempotent
   * on destinationId.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.v1.events.dataExport.destinations.create({
   *     destinationId: 'x',
   *     destinationType: 'x',
   *   });
   * ```
   */
  create(body: DestinationCreateParams, options?: RequestOptions): APIPromise<DestinationCreateResponse> {
    return this._client.post('/api/v1/data-export/destinations', { body, ...options });
  }

  /**
   * Remove a destination from the DATA_EXPORT integration metadata. Idempotent.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.v1.events.dataExport.destinations.delete(
   *     'x',
   *   );
   * ```
   */
  delete(destinationID: string, options?: RequestOptions): APIPromise<DestinationDeleteResponse> {
    return this._client.delete(path`/api/v1/data-export/destinations/${destinationID}`, options);
  }
}

/**
 * Response object
 */
export interface DestinationCreateResponse {
  /**
   * Current destinations under the DATA_EXPORT integration.
   */
  data: DestinationCreateResponse.Data;
}

export namespace DestinationCreateResponse {
  /**
   * Current destinations under the DATA_EXPORT integration.
   */
  export interface Data {
    /**
     * Current destinations under the DATA_EXPORT integration
     */
    destinations: Array<Data.Destination>;
  }

  export namespace Data {
    /**
     * A single destination entry under the DATA_EXPORT integration.
     */
    export interface Destination {
      /**
       * ISO8601 timestamp of when the destination was connected
       */
      connectedAt: string;

      /**
       * Provider destination ID
       */
      destinationId: string;

      /**
       * Destination type (snowflake, bigquery, ...)
       */
      type: string;

      /**
       * Connection status of the destination (connected, failed)
       */
      connectionStatus?: string;

      /**
       * Latest sync snapshot for the destination, refreshed by the provider webhook
       */
      lastSyncStatus?: Destination.LastSyncStatus;
    }

    export namespace Destination {
      /**
       * Latest sync snapshot for the destination, refreshed by the provider webhook
       */
      export interface LastSyncStatus {
        /**
         * ISO8601 timestamp of when the latest sync finished
         */
        finishedAt: string;

        /**
         * Sync status (PENDING, RUNNING, INCOMPLETE, FAILED, SUCCEEDED, CANCELLED)
         */
        status: string;

        /**
         * Provider transfer ID of the latest sync
         */
        transferId: string;

        /**
         * Party responsible for a failed sync, as reported by the data-export provider
         */
        blamedParty?: string;

        /**
         * Customer-friendly failure message, when the latest sync failed
         */
        failureMessage?: string;

        /**
         * Number of rows transferred in the latest sync
         */
        rowsTransferred?: number;
      }
    }
  }
}

/**
 * Response object
 */
export interface DestinationDeleteResponse {
  /**
   * Current destinations under the DATA_EXPORT integration.
   */
  data: DestinationDeleteResponse.Data;
}

export namespace DestinationDeleteResponse {
  /**
   * Current destinations under the DATA_EXPORT integration.
   */
  export interface Data {
    /**
     * Current destinations under the DATA_EXPORT integration
     */
    destinations: Array<Data.Destination>;
  }

  export namespace Data {
    /**
     * A single destination entry under the DATA_EXPORT integration.
     */
    export interface Destination {
      /**
       * ISO8601 timestamp of when the destination was connected
       */
      connectedAt: string;

      /**
       * Provider destination ID
       */
      destinationId: string;

      /**
       * Destination type (snowflake, bigquery, ...)
       */
      type: string;

      /**
       * Connection status of the destination (connected, failed)
       */
      connectionStatus?: string;

      /**
       * Latest sync snapshot for the destination, refreshed by the provider webhook
       */
      lastSyncStatus?: Destination.LastSyncStatus;
    }

    export namespace Destination {
      /**
       * Latest sync snapshot for the destination, refreshed by the provider webhook
       */
      export interface LastSyncStatus {
        /**
         * ISO8601 timestamp of when the latest sync finished
         */
        finishedAt: string;

        /**
         * Sync status (PENDING, RUNNING, INCOMPLETE, FAILED, SUCCEEDED, CANCELLED)
         */
        status: string;

        /**
         * Provider transfer ID of the latest sync
         */
        transferId: string;

        /**
         * Party responsible for a failed sync, as reported by the data-export provider
         */
        blamedParty?: string;

        /**
         * Customer-friendly failure message, when the latest sync failed
         */
        failureMessage?: string;

        /**
         * Number of rows transferred in the latest sync
         */
        rowsTransferred?: number;
      }
    }
  }
}

export interface DestinationCreateParams {
  /**
   * The provider destination ID returned by the embedded SDK on connect
   */
  destinationId: string;

  /**
   * The destination type (e.g. snowflake, bigquery)
   */
  destinationType: string;
}

export declare namespace Destinations {
  export {
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    type DestinationCreateParams as DestinationCreateParams,
  };
}
