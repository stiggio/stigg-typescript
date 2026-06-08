// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to subscriptions
 */
export class FutureUpdate extends APIResource {
  /**
   * Cancels a subscription update that is pending payment completion.
   *
   * @example
   * ```ts
   * const cancelSubscription =
   *   await client.v1.subscriptions.futureUpdate.cancelPendingPayment(
   *     'x',
   *   );
   * ```
   */
  cancelPendingPayment(
    id: string,
    params: FutureUpdateCancelPendingPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CancelSubscription> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/pending-payment`, {
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
   * Cancels a scheduled subscription update, such as a future downgrade or plan
   * change.
   *
   * @example
   * ```ts
   * const cancelSubscription =
   *   await client.v1.subscriptions.futureUpdate.cancelSchedule(
   *     'x',
   *   );
   * ```
   */
  cancelSchedule(
    id: string,
    params: FutureUpdateCancelScheduleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CancelSubscription> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.delete(path`/api/v1/subscriptions/${id}/future-update/schedule`, {
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

export interface FutureUpdateCancelPendingPaymentParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface FutureUpdateCancelScheduleParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export declare namespace FutureUpdate {
  export {
    type CancelSubscription as CancelSubscription,
    type FutureUpdateCancelPendingPaymentParams as FutureUpdateCancelPendingPaymentParams,
    type FutureUpdateCancelScheduleParams as FutureUpdateCancelScheduleParams,
  };
}
