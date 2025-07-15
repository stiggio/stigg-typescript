// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PermissionsAPI from './permissions';
import { PermissionCheckParams, PermissionCheckResponse, Permissions } from './permissions';
import * as CustomersAPI from './customers/customers';
import { CustomerRetrieveParams, CustomerRetrieveResponse, Customers } from './customers/customers';

export class V2 extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
}

V2.Customers = Customers;
V2.Permissions = Permissions;

export declare namespace V2 {
  export {
    Customers as Customers,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerRetrieveParams as CustomerRetrieveParams,
  };

  export {
    Permissions as Permissions,
    type PermissionCheckResponse as PermissionCheckResponse,
    type PermissionCheckParams as PermissionCheckParams,
  };
}
