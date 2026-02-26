// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AddonsAPI from './addons';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Draft extends APIResource {
  /**
   * Creates a draft version of an existing addon for modification before publishing.
   */
  createAddonDraft(id: string, options?: RequestOptions): APIPromise<AddonsAPI.Addon> {
    return this._client.post(path`/api/v1/addons/${id}/draft`, options);
  }

  /**
   * Removes a draft version of an addon.
   */
  removeAddonDraft(id: string, options?: RequestOptions): APIPromise<DraftRemoveAddonDraftResponse> {
    return this._client.delete(path`/api/v1/addons/${id}/draft`, options);
  }
}

/**
 * Response confirming the addon draft was removed.
 */
export interface DraftRemoveAddonDraftResponse {
  data: DraftRemoveAddonDraftResponse.Data;
}

export namespace DraftRemoveAddonDraftResponse {
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;
  }
}

export declare namespace Draft {
  export { type DraftRemoveAddonDraftResponse as DraftRemoveAddonDraftResponse };
}
