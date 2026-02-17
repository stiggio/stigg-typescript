// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeaturesAPI from './features';
import {
  FeatureArchiveFeatureResponse,
  FeatureCreateFeatureParams,
  FeatureCreateFeatureResponse,
  FeatureListFeaturesParams,
  FeatureListFeaturesResponse,
  FeatureListFeaturesResponsesMyCursorIDPage,
  FeatureRetrieveFeatureResponse,
  FeatureUnarchiveFeatureResponse,
  FeatureUpdateFeatureParams,
  FeatureUpdateFeatureResponse,
  Features,
} from './features';
import * as AddonsAPI from './addons/addons';
import {
  AddonArchiveAddonResponse,
  AddonCreateAddonParams,
  AddonCreateAddonResponse,
  AddonListAddonsParams,
  AddonListAddonsResponse,
  AddonListAddonsResponsesMyCursorIDPage,
  AddonPublishAddonParams,
  AddonPublishAddonResponse,
  AddonRetrieveAddonResponse,
  AddonUpdateAddonParams,
  AddonUpdateAddonResponse,
  Addons,
} from './addons/addons';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);

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

Events.Features = Features;
Events.Addons = Addons;

export declare namespace Events {
  export { type EventReportResponse as EventReportResponse, type EventReportParams as EventReportParams };

  export {
    Features as Features,
    type FeatureArchiveFeatureResponse as FeatureArchiveFeatureResponse,
    type FeatureCreateFeatureResponse as FeatureCreateFeatureResponse,
    type FeatureListFeaturesResponse as FeatureListFeaturesResponse,
    type FeatureRetrieveFeatureResponse as FeatureRetrieveFeatureResponse,
    type FeatureUnarchiveFeatureResponse as FeatureUnarchiveFeatureResponse,
    type FeatureUpdateFeatureResponse as FeatureUpdateFeatureResponse,
    type FeatureListFeaturesResponsesMyCursorIDPage as FeatureListFeaturesResponsesMyCursorIDPage,
    type FeatureCreateFeatureParams as FeatureCreateFeatureParams,
    type FeatureListFeaturesParams as FeatureListFeaturesParams,
    type FeatureUpdateFeatureParams as FeatureUpdateFeatureParams,
  };

  export {
    Addons as Addons,
    type AddonArchiveAddonResponse as AddonArchiveAddonResponse,
    type AddonCreateAddonResponse as AddonCreateAddonResponse,
    type AddonListAddonsResponse as AddonListAddonsResponse,
    type AddonPublishAddonResponse as AddonPublishAddonResponse,
    type AddonRetrieveAddonResponse as AddonRetrieveAddonResponse,
    type AddonUpdateAddonResponse as AddonUpdateAddonResponse,
    type AddonListAddonsResponsesMyCursorIDPage as AddonListAddonsResponsesMyCursorIDPage,
    type AddonCreateAddonParams as AddonCreateAddonParams,
    type AddonListAddonsParams as AddonListAddonsParams,
    type AddonPublishAddonParams as AddonPublishAddonParams,
    type AddonUpdateAddonParams as AddonUpdateAddonParams,
  };
}
