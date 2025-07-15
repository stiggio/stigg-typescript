// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubCustomerAPI from './sub-customer';
import { SubCustomer, SubCustomerRetrieveParams, SubCustomerRetrieveResponse } from './sub-customer';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  subCustomer: SubCustomerAPI.SubCustomer = new SubCustomerAPI.SubCustomer(this._client);

  /**
   * Get a single customer by id
   */
  retrieve(
    refID: string,
    params: CustomerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveResponse> {
    const { 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID } = params;
    return this._client.get(path`/api/v1/customers/${refID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID }, options?.headers]),
    });
  }
}

export interface CustomerRetrieveResponse {
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

export interface CustomerRetrieveParams {
  /**
   * API Key
   */
  'X-API-KEY': string;

  'X-ENVIRONMENT-ID': string;
}

Customers.SubCustomer = SubCustomer;

export declare namespace Customers {
  export {
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerRetrieveParams as CustomerRetrieveParams,
  };

  export {
    SubCustomer as SubCustomer,
    type SubCustomerRetrieveResponse as SubCustomerRetrieveResponse,
    type SubCustomerRetrieveParams as SubCustomerRetrieveParams,
  };
}
