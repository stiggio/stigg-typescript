// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomersAPI from './customers/customers';
import { Customers } from './customers/customers';

export class Beta extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
}

Beta.Customers = Customers;

export declare namespace Beta {
  export { Customers as Customers };
}
