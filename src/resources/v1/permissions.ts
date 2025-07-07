// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Permissions extends APIResource {
  /**
   * Check multiple permissions for a user
   */
  check(params: PermissionCheckParams, options?: RequestOptions): APIPromise<PermissionCheckResponse> {
    const { userId, ...body } = params;
    return this._client.post('/api/v1/permissions/check', { query: { userId }, body, ...options });
  }
}

/**
 * Response for checking permissions
 */
export interface PermissionCheckResponse {
  /**
   * List of booleans indicating whether the user has access to each resource and
   * action correspondingly
   */
  permittedList: Array<boolean>;
}

export interface PermissionCheckParams {
  /**
   * Query param: ID of the user to check permissions for
   */
  userId: string;

  /**
   * Body param: List of resources and actions to check permissions for
   */
  resourcesAndActions: Array<PermissionCheckParams.ResourcesAndAction>;
}

export namespace PermissionCheckParams {
  /**
   * Data transfer object for resource and action pair
   */
  export interface ResourcesAndAction {
    /**
     * Action to check permissions for
     */
    action: unknown;

    /**
     * Resource to check permissions for
     */
    resource: string;
  }
}

export declare namespace Permissions {
  export {
    type PermissionCheckResponse as PermissionCheckResponse,
    type PermissionCheckParams as PermissionCheckParams,
  };
}
