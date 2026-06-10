// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DestinationsAPI from './destinations';
import {
  DestinationCreateParams,
  DestinationCreateResponse,
  DestinationDeleteParams,
  DestinationDeleteResponse,
  Destinations,
} from './destinations';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class DataExport extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);

  /**
   * Mint a scoped JWT for the FE embedded SDK. Lazy-creates the DATA_EXPORT
   * integration if needed.
   */
  mintScopedToken(
    params: DataExportMintScopedTokenParams,
    options?: RequestOptions,
  ): APIPromise<DataExportMintScopedTokenResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/data-export/scoped-token', {
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
   * Trigger a sync for one destination or all destinations under the provider
   * entity.
   */
  triggerSync(
    params: DataExportTriggerSyncParams,
    options?: RequestOptions,
  ): APIPromise<DataExportTriggerSyncResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/data-export/sync', {
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
 * Response object
 */
export interface DataExportMintScopedTokenResponse {
  /**
   * Scoped token + expiry + provider-specific metadata for the FE SDK.
   */
  data: DataExportMintScopedTokenResponse.Data;
}

export namespace DataExportMintScopedTokenResponse {
  /**
   * Scoped token + expiry + provider-specific metadata for the FE SDK.
   */
  export interface Data {
    /**
     * Provider scoped JWT
     */
    token: string;

    /**
     * ISO8601 token expiry
     */
    expiresAt: string;

    /**
     * Provider-specific extras the FE embedded SDK needs
     */
    providerMetadata: { [key: string]: unknown };
  }
}

/**
 * Response object
 */
export interface DataExportTriggerSyncResponse {
  /**
   * Per-destination trigger results across the batch.
   */
  data: DataExportTriggerSyncResponse.Data;
}

export namespace DataExportTriggerSyncResponse {
  /**
   * Per-destination trigger results across the batch.
   */
  export interface Data {
    /**
     * Per-destination trigger results
     */
    results: Array<Data.Result>;
  }

  export namespace Data {
    /**
     * Per-destination trigger results.
     */
    export interface Result {
      /**
       * Provider destination ID
       */
      destinationId: string;

      /**
       * True if a transfer was kicked
       */
      triggered: boolean;

      /**
       * Error message if triggered=false on a hard failure
       */
      errorMessage?: string;

      /**
       * Provider-side transfer ID
       */
      transferId?: string;
    }
  }
}

export interface DataExportMintScopedTokenParams {
  /**
   * Body param: FE origin the resulting JWT is bound to (provider-side anti-fraud)
   */
  applicationOrigin: string;

  /**
   * Body param: Pin the token to a specific warehouse connect flow
   */
  destinationType?: string;

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

export interface DataExportTriggerSyncParams {
  /**
   * Body param: Provider destination ID to sync. Omit to sync all destinations.
   */
  destinationId?: string;

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

DataExport.Destinations = Destinations;

export declare namespace DataExport {
  export {
    type DataExportMintScopedTokenResponse as DataExportMintScopedTokenResponse,
    type DataExportTriggerSyncResponse as DataExportTriggerSyncResponse,
    type DataExportMintScopedTokenParams as DataExportMintScopedTokenParams,
    type DataExportTriggerSyncParams as DataExportTriggerSyncParams,
  };

  export {
    Destinations as Destinations,
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };
}
