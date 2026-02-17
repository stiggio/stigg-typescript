// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Draft extends APIResource {
  /**
   * Creates a draft version of an existing addon for modification before publishing.
   */
  createAddonDraft(id: string, options?: RequestOptions): APIPromise<DraftCreateAddonDraftResponse> {
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
 * Response object
 */
export interface DraftCreateAddonDraftResponse {
  /**
   * Addon configuration object
   */
  data: DraftCreateAddonDraftResponse.Data;
}

export namespace DraftCreateAddonDraftResponse {
  /**
   * Addon configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * The unique identifier for the entity in the billing provider
     */
    billingId: string | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * List of addons the addon is dependant on
     */
    dependencies: Array<string> | null;

    /**
     * The description of the package
     */
    description: string | null;

    /**
     * The display name of the package
     */
    displayName: string;

    /**
     * List of entitlements for the addon
     */
    entitlements: Array<Data.Entitlement>;

    /**
     * Indicates if the package is the latest version
     */
    isLatest: boolean | null;

    /**
     * The maximum quantity of this addon that can be added to a subscription
     */
    maxQuantity: number | null;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * The pricing type of the package
     */
    pricingType: 'FREE' | 'PAID' | 'CUSTOM' | null;

    /**
     * The status of the package
     */
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * The version number of the package
     */
    versionNumber: number;
  }

  export namespace Data {
    /**
     * Entitlement reference with type and identifier
     */
    export interface Entitlement {
      /**
       * The unique identifier for the entity
       */
      id: string;

      type: 'FEATURE' | 'CREDIT';
    }
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
  export {
    type DraftCreateAddonDraftResponse as DraftCreateAddonDraftResponse,
    type DraftRemoveAddonDraftResponse as DraftRemoveAddonDraftResponse,
  };
}
