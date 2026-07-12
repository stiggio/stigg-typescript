// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Consumption extends APIResource {
  /**
   * Consumes a specified amount of credits directly from a customer wallet, with no
   * feature mapping. Returns the optimistic balance.
   */
  consume(
    params: ConsumptionConsumeParams,
    options?: RequestOptions,
  ): APIPromise<ConsumptionConsumeResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/credits/consumption', {
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

  /**
   * Consumes credits directly from customer wallets asynchronously. Consumptions are
   * reconciled asynchronously into the credit balances.
   */
  consumeAsync(
    params: ConsumptionConsumeAsyncParams,
    options?: RequestOptions,
  ): APIPromise<ConsumptionConsumeAsyncResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/credits/consumption/async', {
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
export interface ConsumptionConsumeResponse {
  /**
   * Result of a synchronous direct credit consumption
   */
  data: ConsumptionConsumeResponse.Data;
}

export namespace ConsumptionConsumeResponse {
  /**
   * Result of a synchronous direct credit consumption
   */
  export interface Data {
    /**
     * The amount of credits consumed
     */
    amount: number;

    /**
     * The credit currency the credits were consumed from
     */
    currencyId: string;

    /**
     * The customer the credits were consumed from
     */
    customerId: string;

    /**
     * The timestamp the consumption was attributed to
     */
    timestamp: string;

    /**
     * The optimistic credit balance after consumption (when sync credit consumption is
     * enabled)
     */
    credit?: Data.Credit | null;

    /**
     * The resource the consumption was attributed to
     */
    resourceId?: string | null;
  }

  export namespace Data {
    /**
     * The optimistic credit balance after consumption (when sync credit consumption is
     * enabled)
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
  }
}

/**
 * Response object
 */
export interface ConsumptionConsumeAsyncResponse {
  /**
   * Confirmation that the credit consumptions were accepted for processing
   */
  data: unknown;
}

export interface ConsumptionConsumeParams {
  /**
   * Body param: The amount of credits to consume
   */
  amount: number;

  /**
   * Body param: The credit currency to consume from (required)
   */
  currencyId: string;

  /**
   * Body param: The customer to consume credits from (required)
   */
  customerId: string;

  /**
   * Body param: A unique key used to deduplicate the consumption (required)
   */
  idempotencyKey: string;

  /**
   * Body param: Optional timestamp the consumption is attributed to
   */
  createdAt?: string;

  /**
   * Body param: Optional dimensions describing the consumption
   */
  dimensions?: { [key: string]: string | number | boolean };

  /**
   * Body param: Optional resource the consumption is attributed to
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

export interface ConsumptionConsumeAsyncParams {
  /**
   * Body param: The credit consumptions to report (up to 1000)
   */
  consumptions: Array<ConsumptionConsumeAsyncParams.Consumption>;

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

export namespace ConsumptionConsumeAsyncParams {
  /**
   * Request body for consuming credits directly from a wallet
   */
  export interface Consumption {
    /**
     * The amount of credits to consume
     */
    amount: number;

    /**
     * The credit currency to consume from (required)
     */
    currencyId: string;

    /**
     * The customer to consume credits from (required)
     */
    customerId: string;

    /**
     * A unique key used to deduplicate the consumption (required)
     */
    idempotencyKey: string;

    /**
     * Optional timestamp the consumption is attributed to
     */
    createdAt?: string;

    /**
     * Optional dimensions describing the consumption
     */
    dimensions?: { [key: string]: string | number | boolean };

    /**
     * Optional resource the consumption is attributed to
     */
    resourceId?: string;
  }
}

export declare namespace Consumption {
  export {
    type ConsumptionConsumeResponse as ConsumptionConsumeResponse,
    type ConsumptionConsumeAsyncResponse as ConsumptionConsumeAsyncResponse,
    type ConsumptionConsumeParams as ConsumptionConsumeParams,
    type ConsumptionConsumeAsyncParams as ConsumptionConsumeAsyncParams,
  };
}
