// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DataExportAPI from './data-export/data-export';
import {
  DataExport,
  DataExportListModelsParams,
  DataExportListModelsResponse,
  DataExportMintScopedTokenParams,
  DataExportMintScopedTokenResponse,
  DataExportTriggerSyncParams,
  DataExportTriggerSyncResponse,
} from './data-export/data-export';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Operations related to usage & metering
 */
export class Events extends APIResource {
  dataExport: DataExportAPI.DataExport = new DataExportAPI.DataExport(this._client);

  /**
   * Estimates the credit cost of a usage event without ingesting it. Returns the
   * estimated cost per credit currency, the current balance, and the balance after
   * the estimated consumption.
   */
  estimateCost(
    params: EventEstimateCostParams,
    options?: RequestOptions,
  ): APIPromise<EventEstimateCostResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/events/estimate', {
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
   * Reports raw usage events for event-based metering. Events are ingested
   * asynchronously and aggregated into usage totals.
   */
  report(params: EventReportParams, options?: RequestOptions): APIPromise<EventReportResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/events', {
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
export interface EventEstimateCostResponse {
  /**
   * Estimated credit cost, current balance and balance after
   */
  data: EventEstimateCostResponse.Data;
}

export namespace EventEstimateCostResponse {
  /**
   * Estimated credit cost, current balance and balance after
   */
  export interface Data {
    /**
     * Per-currency cost estimates
     */
    estimates: Array<Data.Estimate>;

    /**
     * Request-level warnings about the estimation context
     */
    warnings: Array<'RESOURCE_SCOPED_SUBSCRIPTION_EXISTS' | 'FEATURE_NOT_FOUND' | 'FEATURE_NOT_CREDIT_BASED'>;
  }

  export namespace Data {
    export interface Estimate {
      /**
       * The credit balance after subtracting the estimated cost
       */
      balanceAfterEstimate: number;

      /**
       * Estimated cost contribution per feature
       */
      breakdown: Array<Estimate.Breakdown>;

      /**
       * The credit currency identifier
       */
      currencyId: string;

      /**
       * The current credit balance, including not-yet-reconciled consumption
       */
      currentBalance: number;

      /**
       * The estimated credit cost of the reported event or usage
       */
      estimatedCost: number;

      /**
       * Whether the estimated consumption would bring the balance below zero
       */
      wouldOverdraft: boolean;
    }

    export namespace Estimate {
      export interface Breakdown {
        /**
         * The estimated credit cost contributed by this feature
         */
        cost: number;

        /**
         * The feature whose meter contributed this cost
         */
        featureId: string;

        /**
         * Warning explaining why this cost may be inaccurate, if any
         */
        warningCode: 'UNSUPPORTED_AGGREGATION' | null;
      }
    }
  }
}

/**
 * Response object
 */
export interface EventReportResponse {
  /**
   * Empty success response confirming that events were successfully ingested and
   * queued for processing by Stigg's metering system.
   */
  data: unknown;
}

export interface EventEstimateCostParams {
  /**
   * Body param: Customer id
   */
  customerId: string;

  /**
   * Body param: The name of the usage event
   */
  eventName: string;

  /**
   * Body param: Dimensions associated with the usage event
   */
  dimensions?: { [key: string]: string | number | boolean };

  /**
   * Body param: Resource id
   */
  resourceId?: string | null;

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

export interface EventReportParams {
  /**
   * Body param: A list of usage events to report
   */
  events: Array<EventReportParams.Event>;

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

export namespace EventReportParams {
  /**
   * Raw usage event
   */
  export interface Event {
    /**
     * Customer id
     */
    customerId: string;

    /**
     * The name of the usage event
     */
    eventName: string;

    /**
     * Idempotency key
     */
    idempotencyKey: string;

    /**
     * Dimensions associated with the usage event
     */
    dimensions?: { [key: string]: string | number | boolean };

    /**
     * Resource id
     */
    resourceId?: string | null;

    /**
     * Timestamp
     */
    timestamp?: string;
  }
}

Events.DataExport = DataExport;

export declare namespace Events {
  export {
    type EventEstimateCostResponse as EventEstimateCostResponse,
    type EventReportResponse as EventReportResponse,
    type EventEstimateCostParams as EventEstimateCostParams,
    type EventReportParams as EventReportParams,
  };

  export {
    DataExport as DataExport,
    type DataExportListModelsResponse as DataExportListModelsResponse,
    type DataExportMintScopedTokenResponse as DataExportMintScopedTokenResponse,
    type DataExportTriggerSyncResponse as DataExportTriggerSyncResponse,
    type DataExportListModelsParams as DataExportListModelsParams,
    type DataExportMintScopedTokenParams as DataExportMintScopedTokenParams,
    type DataExportTriggerSyncParams as DataExportTriggerSyncParams,
  };
}
