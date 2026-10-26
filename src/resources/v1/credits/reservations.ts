// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Reservations extends APIResource {
  /**
   * Releases a credit reservation, consuming the given amount and returning the rest
   * of the held credits to the balance. Retry a failed release with the same
   * reservation ID; it is applied once.
   */
  release(
    reservationID: string,
    params: ReservationReleaseParams,
    options?: RequestOptions,
  ): APIPromise<ReservationReleaseResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/credits/reservations/${reservationID}/release`, {
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
export interface ReservationReleaseResponse {
  /**
   * Result of releasing a credit reservation
   */
  data: ReservationReleaseResponse.Data;
}

export namespace ReservationReleaseResponse {
  /**
   * Result of releasing a credit reservation
   */
  export interface Data {
    /**
     * The optimistic credit balance after the release
     */
    credit: Data.Credit | null;

    /**
     * The released reservation
     */
    reservation: Data.Reservation;
  }

  export namespace Data {
    /**
     * The optimistic credit balance after the release
     */
    export interface Credit {
      /**
       * The credit currency identifier
       */
      currencyId: string;

      /**
       * The wallet's total consumed credits for this currency (optimistic — includes
       * not-yet-reconciled usage), shared across every feature that draws on the
       * currency. This is the running balance, not this call's deduction — see
       * `consumed` for that.
       */
      currentUsage: number;

      /**
       * The grant-version timestamp of this balance, used by the SDK for last-write-wins
       * reconciliation
       */
      timestamp: string;

      /**
       * The total credits granted
       */
      usageLimit: number;

      /**
       * End of the current credit grant period (when recurring credits reset), if
       * applicable
       */
      usagePeriodEnd?: string | null;
    }

    /**
     * The released reservation
     */
    export interface Reservation {
      /**
       * The client-provided reservation ID.
       */
      id: string;

      /**
       * The amount of credits held.
       */
      amount: number;

      /**
       * The amount consumed at release
       */
      consumedAmount: number | null;

      /**
       * When the reservation expires. Unreleased credits return to the balance at this
       * time.
       */
      expiresAt: string;

      /**
       * The status of the reservation.
       */
      status: 'ACTIVE' | 'RELEASED' | 'EXPIRED';
    }
  }
}

export interface ReservationReleaseParams {
  /**
   * Body param: The amount of credits to consume at release. Up to the reserved
   * amount is charged to the credits that backed the reservation; the rest returns
   * to the balance, and any amount above the reservation is consumed normally.
   */
  consumedAmount: number;

  /**
   * Body param: The credit currency of the reservation
   */
  currencyId: string;

  /**
   * Body param: The customer the reservation was made for
   */
  customerId: string;

  /**
   * Body param: The resource the reservation was made for, if any
   */
  resourceId?: string;

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

export declare namespace Reservations {
  export {
    type ReservationReleaseResponse as ReservationReleaseResponse,
    type ReservationReleaseParams as ReservationReleaseParams,
  };
}
