// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FutureUpdate extends APIResource {
  /**
   * Perform cancel future update on a Subscription
   */
  cancelPendingPayment(
    id: string,
    options?: RequestOptions,
  ): APIPromise<FutureUpdateCancelPendingPaymentResponse> {
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/pending-payment`, options);
  }

  /**
   * Perform cancel future update on a Subscription
   */
  cancelSchedule(id: string, options?: RequestOptions): APIPromise<FutureUpdateCancelScheduleResponse> {
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/schedule`, options);
  }
}

export interface FutureUpdateCancelPendingPaymentResponse {
  data: FutureUpdateCancelPendingPaymentResponse.Data;
}

export namespace FutureUpdateCancelPendingPaymentResponse {
  export interface Data {
    /**
     * Subscription ID
     */
    id: string;
  }
}

export interface FutureUpdateCancelScheduleResponse {
  data: FutureUpdateCancelScheduleResponse.Data;
}

export namespace FutureUpdateCancelScheduleResponse {
  export interface Data {
    /**
     * Subscription ID
     */
    id: string;
  }
}

export declare namespace FutureUpdate {
  export {
    type FutureUpdateCancelPendingPaymentResponse as FutureUpdateCancelPendingPaymentResponse,
    type FutureUpdateCancelScheduleResponse as FutureUpdateCancelScheduleResponse,
  };
}
