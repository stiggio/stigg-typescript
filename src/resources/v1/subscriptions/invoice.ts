// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to subscriptions
 */
export class Invoice extends APIResource {
  /**
   * Marks the latest invoice of a subscription as paid in the billing provider. The
   * invoice must exist and have an OPEN status.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.subscriptions.invoice.markAsPaid('x');
   * ```
   */
  markAsPaid(
    id: string,
    params: InvoiceMarkAsPaidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceMarkAsPaidResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/subscriptions/${id}/invoice/paid`, {
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
export interface InvoiceMarkAsPaidResponse {
  /**
   * Result of marking a subscription invoice as paid.
   */
  data: InvoiceMarkAsPaidResponse.Data;
}

export namespace InvoiceMarkAsPaidResponse {
  /**
   * Result of marking a subscription invoice as paid.
   */
  export interface Data {
    /**
     * The subscription ID whose invoice was marked as paid
     */
    id: string;
  }
}

export interface InvoiceMarkAsPaidParams {
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

export declare namespace Invoice {
  export {
    type InvoiceMarkAsPaidResponse as InvoiceMarkAsPaidResponse,
    type InvoiceMarkAsPaidParams as InvoiceMarkAsPaidParams,
  };
}
