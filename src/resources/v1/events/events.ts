// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CreditsAPI from './credits/credits';
import {
  CreditGetAutoRechargeParams,
  CreditGetAutoRechargeResponse,
  CreditGetUsageParams,
  CreditGetUsageResponse,
  CreditListLedgerParams,
  CreditListLedgerResponse,
  CreditListLedgerResponsesMyCursorIDPage,
  Credits,
} from './credits/credits';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Operations related to usage & metering
 */
export class Events extends APIResource {
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);

  /**
   * Reports raw usage events for event-based metering. Events are ingested
   * asynchronously and aggregated into usage totals.
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

Events.Credits = Credits;

export declare namespace Events {
  export { type EventReportResponse as EventReportResponse, type EventReportParams as EventReportParams };

  export {
    Credits as Credits,
    type CreditGetAutoRechargeResponse as CreditGetAutoRechargeResponse,
    type CreditGetUsageResponse as CreditGetUsageResponse,
    type CreditListLedgerResponse as CreditListLedgerResponse,
    type CreditListLedgerResponsesMyCursorIDPage as CreditListLedgerResponsesMyCursorIDPage,
    type CreditGetAutoRechargeParams as CreditGetAutoRechargeParams,
    type CreditGetUsageParams as CreditGetUsageParams,
    type CreditListLedgerParams as CreditListLedgerParams,
  };
}
