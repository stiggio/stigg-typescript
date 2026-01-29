// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FutureUpdate extends APIResource {
  /**
   * Cancel pending payment update
   */
  cancelPendingPayment(id: string, options?: RequestOptions): APIPromise<CancelSubscription> {
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/pending-payment`, options);
  }

  /**
   * Cancel scheduled update
   */
  cancelSchedule(id: string, options?: RequestOptions): APIPromise<CancelSubscription> {
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/schedule`, options);
  }
}

/**
 * Response object
 */
export interface CancelSubscription {
  data: CancelSubscription.Data;
}

export namespace CancelSubscription {
  export interface Data {
    /**
     * Subscription ID
     */
    id: string;
  }
}

export declare namespace FutureUpdate {
  export { type CancelSubscription as CancelSubscription };
}
