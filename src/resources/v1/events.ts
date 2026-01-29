// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Events extends APIResource {
  /**
   * Report usage events
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

export declare namespace Events {
  export { type EventReportResponse as EventReportResponse, type EventReportParams as EventReportParams };
}
