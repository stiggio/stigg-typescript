// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DraftAPI from './draft';
import { Draft, DraftCreateAddonDraftResponse, DraftRemoveAddonDraftResponse } from './draft';
import { APIPromise } from '../../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Addons extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);

  /**
   * Archives an addon, preventing it from being used in new subscriptions.
   */
  archiveAddon(id: string, options?: RequestOptions): APIPromise<AddonArchiveAddonResponse> {
    return this._client.post(path`/api/v1/addons/${id}/archive`, options);
  }

  /**
   * Creates a new addon in draft status, associated with a specific product.
   */
  createAddon(body: AddonCreateAddonParams, options?: RequestOptions): APIPromise<AddonCreateAddonResponse> {
    return this._client.post('/api/v1/addons', { body, ...options });
  }

  /**
   * Retrieves a paginated list of addons in the environment.
   */
  listAddons(
    query: AddonListAddonsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AddonListAddonsResponsesMyCursorIDPage, AddonListAddonsResponse> {
    return this._client.getAPIList('/api/v1/addons', MyCursorIDPage<AddonListAddonsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Publishes a draft addon, making it available for use in subscriptions.
   */
  publishAddon(
    id: string,
    body: AddonPublishAddonParams,
    options?: RequestOptions,
  ): APIPromise<AddonPublishAddonResponse> {
    return this._client.post(path`/api/v1/addons/${id}/publish`, { body, ...options });
  }

  /**
   * Retrieves an addon by its unique identifier, including entitlements and pricing
   * details.
   */
  retrieveAddon(id: string, options?: RequestOptions): APIPromise<AddonRetrieveAddonResponse> {
    return this._client.get(path`/api/v1/addons/${id}`, options);
  }

  /**
   * Updates an existing addon's properties such as display name, description, and
   * metadata.
   */
  updateAddon(
    id: string,
    body: AddonUpdateAddonParams,
    options?: RequestOptions,
  ): APIPromise<AddonUpdateAddonResponse> {
    return this._client.patch(path`/api/v1/addons/${id}`, { body, ...options });
  }
}

export type AddonListAddonsResponsesMyCursorIDPage = MyCursorIDPage<AddonListAddonsResponse>;

/**
 * Response object
 */
export interface AddonArchiveAddonResponse {
  /**
   * Addon configuration object
   */
  data: AddonArchiveAddonResponse.Data;
}

export namespace AddonArchiveAddonResponse {
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
     * List of entitlements of the package
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
     * The product id of the package
     */
    productId: string;

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
 * Response object
 */
export interface AddonCreateAddonResponse {
  /**
   * Addon configuration object
   */
  data: AddonCreateAddonResponse.Data;
}

export namespace AddonCreateAddonResponse {
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
     * List of entitlements of the package
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
     * The product id of the package
     */
    productId: string;

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
 * Addon configuration object
 */
export interface AddonListAddonsResponse {
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
   * List of entitlements of the package
   */
  entitlements: Array<AddonListAddonsResponse.Entitlement>;

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
   * The product id of the package
   */
  productId: string;

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

export namespace AddonListAddonsResponse {
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

/**
 * Response containing task ID for publish operation
 */
export interface AddonPublishAddonResponse {
  data: AddonPublishAddonResponse.Data;
}

export namespace AddonPublishAddonResponse {
  export interface Data {
    /**
     * Task ID for tracking the async publish operation
     */
    taskId: string | null;
  }
}

/**
 * Response object
 */
export interface AddonRetrieveAddonResponse {
  /**
   * Addon configuration object
   */
  data: AddonRetrieveAddonResponse.Data;
}

export namespace AddonRetrieveAddonResponse {
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
     * List of entitlements of the package
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
     * The product id of the package
     */
    productId: string;

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
 * Response object
 */
export interface AddonUpdateAddonResponse {
  /**
   * Addon configuration object
   */
  data: AddonUpdateAddonResponse.Data;
}

export namespace AddonUpdateAddonResponse {
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
     * List of entitlements of the package
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
     * The product id of the package
     */
    productId: string;

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

export interface AddonCreateAddonParams {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The display name of the package
   */
  displayName: string;

  /**
   * The product id of the package
   */
  productId: string;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * The maximum quantity of this addon that can be added to a subscription
   */
  maxQuantity?: number | null;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * The pricing type of the package
   */
  pricingType?: 'FREE' | 'PAID' | 'CUSTOM' | null;

  /**
   * The status of the package
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export interface AddonListAddonsParams extends MyCursorIDPageParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: AddonListAddonsParams.CreatedAt;

  /**
   * Filter by product ID
   */
  productId?: string;

  /**
   * Filter by status. Supports comma-separated values for multiple statuses
   */
  status?: string;
}

export namespace AddonListAddonsParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  export interface CreatedAt {
    /**
     * Greater than the specified createdAt value
     */
    gt?: string;

    /**
     * Greater than or equal to the specified createdAt value
     */
    gte?: string;

    /**
     * Less than the specified createdAt value
     */
    lt?: string;

    /**
     * Less than or equal to the specified createdAt value
     */
    lte?: string;
  }
}

export interface AddonPublishAddonParams {
  /**
   * The migration type of the package
   */
  migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';
}

export interface AddonUpdateAddonParams {
  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * List of addons the addon is dependant on
   */
  dependencies?: Array<string> | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * The display name of the package
   */
  displayName?: string;

  /**
   * The maximum quantity of this addon that can be added to a subscription
   */
  maxQuantity?: number | null;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };
}

Addons.Draft = Draft;

export declare namespace Addons {
  export {
    type AddonArchiveAddonResponse as AddonArchiveAddonResponse,
    type AddonCreateAddonResponse as AddonCreateAddonResponse,
    type AddonListAddonsResponse as AddonListAddonsResponse,
    type AddonPublishAddonResponse as AddonPublishAddonResponse,
    type AddonRetrieveAddonResponse as AddonRetrieveAddonResponse,
    type AddonUpdateAddonResponse as AddonUpdateAddonResponse,
    type AddonListAddonsResponsesMyCursorIDPage as AddonListAddonsResponsesMyCursorIDPage,
    type AddonCreateAddonParams as AddonCreateAddonParams,
    type AddonListAddonsParams as AddonListAddonsParams,
    type AddonPublishAddonParams as AddonPublishAddonParams,
    type AddonUpdateAddonParams as AddonUpdateAddonParams,
  };

  export {
    Draft as Draft,
    type DraftCreateAddonDraftResponse as DraftCreateAddonDraftResponse,
    type DraftRemoveAddonDraftResponse as DraftRemoveAddonDraftResponse,
  };
}
