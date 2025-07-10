// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PermissionsAPI from './permissions';
import { PermissionCheckParams, PermissionCheckResponse, Permissions } from './permissions';
import * as CustomersAPI from './customers/customers';
import { CustomerGetCustomerParams, CustomerGetCustomerResponse, Customers } from './customers/customers';

export class V1 extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
}

V1.Customers = Customers;
V1.Permissions = Permissions;

export declare namespace V1 {
  export {
    Customers as Customers,
    type CustomerGetCustomerResponse as CustomerGetCustomerResponse,
    type CustomerGetCustomerParams as CustomerGetCustomerParams,
  };

  export {
    Permissions as Permissions,
    type PermissionCheckResponse as PermissionCheckResponse,
    type PermissionCheckParams as PermissionCheckParams,
  };
}
