// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BetaAPI from './beta/beta';
import { Beta } from './beta/beta';
import * as DataExportAPI from './data-export/data-export';
import {
  DataExport,
  DataExportMintScopedTokenParams,
  DataExportMintScopedTokenResponse,
  DataExportTriggerSyncParams,
  DataExportTriggerSyncResponse,
} from './data-export/data-export';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Operations related to usage & metering
 */
export class Events extends APIResource {
  beta: BetaAPI.Beta = new BetaAPI.Beta(this._client);
  dataExport: DataExportAPI.DataExport = new DataExportAPI.DataExport(this._client);

  /**
   * Reports raw usage events for event-based metering. Events are ingested
   * asynchronously and aggregated into usage totals.
   *
   * @example
   * ```ts
   * const response = await client.v1.events.report({
   *   events: [
   *     {
   *       customerId: 'customerId',
   *       eventName: 'x',
   *       idempotencyKey: 'x',
   *     },
   *   ],
   * });
   * ```
   */
  report(body: EventReportParams, options?: RequestOptions): APIPromise<EventReportResponse> {
    return this._client.post('/api/v1/events', { body, ...options });
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

export interface EventReportParams {
  /**
   * A list of usage events to report
   */
  events: Array<EventReportParams.Event>;
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

Events.Beta = Beta;
Events.DataExport = DataExport;

export declare namespace Events {
  export { type EventReportResponse as EventReportResponse, type EventReportParams as EventReportParams };

  export { Beta as Beta };

  export {
    DataExport as DataExport,
    type DataExportMintScopedTokenResponse as DataExportMintScopedTokenResponse,
    type DataExportTriggerSyncResponse as DataExportTriggerSyncResponse,
    type DataExportMintScopedTokenParams as DataExportMintScopedTokenParams,
    type DataExportTriggerSyncParams as DataExportTriggerSyncParams,
  };
}
