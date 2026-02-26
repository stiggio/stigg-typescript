// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PlansAPI from './plans';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Draft extends APIResource {
  /**
   * Creates a draft version of an existing plan for modification before publishing.
   */
  create(id: string, options?: RequestOptions): APIPromise<PlansAPI.Plan> {
    return this._client.post(path`/api/v1/plans/${id}/draft`, options);
  }

  /**
   * Removes a draft version of a plan.
   */
  remove(id: string, options?: RequestOptions): APIPromise<DraftRemoveResponse> {
    return this._client.delete(path`/api/v1/plans/${id}/draft`, options);
  }
}

/**
 * Response confirming the plan draft was removed.
 */
export interface DraftRemoveResponse {
  data: DraftRemoveResponse.Data;
}

export namespace DraftRemoveResponse {
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;
  }
}

export declare namespace Draft {
  export { type DraftRemoveResponse as DraftRemoveResponse };
}
