// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventQueuesAPI from './event-queues';
import {
  EventQueueListResponse,
  EventQueueProvisionParams,
  EventQueueResponse,
  EventQueueUpdateParams,
  EventQueues,
} from './event-queues';

export class Beta extends APIResource {
  eventQueues: EventQueuesAPI.EventQueues = new EventQueuesAPI.EventQueues(this._client);
}

Beta.EventQueues = EventQueues;

export declare namespace Beta {
  export {
    EventQueues as EventQueues,
    type EventQueueResponse as EventQueueResponse,
    type EventQueueListResponse as EventQueueListResponse,
    type EventQueueUpdateParams as EventQueueUpdateParams,
    type EventQueueProvisionParams as EventQueueProvisionParams,
  };
}
