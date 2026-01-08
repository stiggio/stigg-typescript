// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers/customers';
import {
  CustomerCreateParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerListResponsesMyCursorIDPage,
  CustomerResponse,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';

export class V1 extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
}

V1.Customers = Customers;

export declare namespace V1 {
  export {
    Customers as Customers,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
