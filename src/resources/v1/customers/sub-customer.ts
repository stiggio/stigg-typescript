// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SubCustomer extends APIResource {
  /**
   * Get a single customer by id
   */
  getSubCustomer(
    refID: string,
    params: SubCustomerGetSubCustomerParams,
    options?: RequestOptions,
  ): APIPromise<SubCustomerGetSubCustomerResponse> {
    const { 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID } = params;
    return this._client.get(path`/api/v1/customers/${refID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID }, options?.headers]),
    });
  }
}

export interface SubCustomerGetSubCustomerResponse {
  /**
   * Unique identifier for the entity
   */
  id: string;

  /**
   * The email of the customer
   */
  email: string | null;

  /**
   * The name of the customer
   */
  name: string | null;
}

export interface SubCustomerGetSubCustomerParams {
  /**
   * API Key
   */
  'X-API-KEY': string;

  'X-ENVIRONMENT-ID': string;
}

export declare namespace SubCustomer {
  export {
    type SubCustomerGetSubCustomerResponse as SubCustomerGetSubCustomerResponse,
    type SubCustomerGetSubCustomerParams as SubCustomerGetSubCustomerParams,
  };
}
