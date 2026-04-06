// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventQueuesAPI from './event-queues';
import {
  EventQueueDeleteResponse,
  EventQueueListResponse,
  EventQueueProvisionParams,
  EventQueueProvisionResponse,
  EventQueueRetrieveResponse,
  EventQueueUpdateParams,
  EventQueueUpdateResponse,
  EventQueues,
} from './event-queues';

export class Beta extends APIResource {
  eventQueues: EventQueuesAPI.EventQueues = new EventQueuesAPI.EventQueues(this._client);
}

Beta.EventQueues = EventQueues;

export declare namespace Beta {
  export {
    EventQueues as EventQueues,
    type EventQueueRetrieveResponse as EventQueueRetrieveResponse,
    type EventQueueUpdateResponse as EventQueueUpdateResponse,
    type EventQueueListResponse as EventQueueListResponse,
    type EventQueueDeleteResponse as EventQueueDeleteResponse,
    type EventQueueProvisionResponse as EventQueueProvisionResponse,
    type EventQueueUpdateParams as EventQueueUpdateParams,
    type EventQueueProvisionParams as EventQueueProvisionParams,
  };
}
