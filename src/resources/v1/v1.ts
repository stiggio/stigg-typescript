// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PermissionsAPI from './permissions';
import { PermissionCheckParams, PermissionCheckResponse, Permissions } from './permissions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Get a single customer by id
   */
  retrieveCustomer(
    refID: string,
    params: V1RetrieveCustomerParams,
    options?: RequestOptions,
  ): APIPromise<V1RetrieveCustomerResponse> {
    const { 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID } = params;
    return this._client.get(path`/api/v1/customers/${refID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-KEY': xAPIKey, 'X-ENVIRONMENT-ID': xEnvironmentID }, options?.headers]),
    });
  }
}

export interface V1RetrieveCustomerResponse {
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

export interface V1RetrieveCustomerParams {
  /**
   * API Key
   */
  'X-API-KEY': string;

  'X-ENVIRONMENT-ID': string;
}

V1.Permissions = Permissions;

export declare namespace V1 {
  export {
    type V1RetrieveCustomerResponse as V1RetrieveCustomerResponse,
    type V1RetrieveCustomerParams as V1RetrieveCustomerParams,
  };

  export {
    Permissions as Permissions,
    type PermissionCheckResponse as PermissionCheckResponse,
    type PermissionCheckParams as PermissionCheckParams,
  };
}
