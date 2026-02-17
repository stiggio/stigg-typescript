// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoice extends APIResource {
  /**
   * Marks the latest invoice of a subscription as paid in the billing provider. The
   * invoice must exist and have an OPEN status.
   */
  markAsPaid(id: string, options?: RequestOptions): APIPromise<InvoiceMarkAsPaidResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/invoice/paid`, options);
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

export declare namespace Invoice {
  export { type InvoiceMarkAsPaidResponse as InvoiceMarkAsPaidResponse };
}
