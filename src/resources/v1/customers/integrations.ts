// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Retrieves a specific integration for a customer by integration ID.
   */
  retrieve(
    integrationID: string,
    params: IntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/api/v1/customers/${id}/integrations/${integrationID}`, options);
  }

  /**
   * Updates a customer's integration link, such as changing the synced external
   * entity ID.
   */
  update(
    integrationID: string,
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/api/v1/customers/${id}/integrations/${integrationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a paginated list of a customer's external integrations (billing, CRM,
   * etc.).
   */
  list(
    id: string,
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IntegrationListResponsesMyCursorIDPage, IntegrationListResponse> {
    return this._client.getAPIList(
      path`/api/v1/customers/${id}/integrations`,
      MyCursorIDPage<IntegrationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Links a customer to an external integration by specifying the vendor and
   * external entity ID.
   */
  link(
    id: string,
    body: IntegrationLinkParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationLinkResponse> {
    return this._client.post(path`/api/v1/customers/${id}/integrations`, { body, ...options });
  }

  /**
   * Removes the link between a customer and an external integration.
   */
  unlink(
    integrationID: string,
    params: IntegrationUnlinkParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationUnlinkResponse> {
    const { id } = params;
    return this._client.delete(path`/api/v1/customers/${id}/integrations/${integrationID}`, options);
  }
}

export type IntegrationListResponsesMyCursorIDPage = MyCursorIDPage<IntegrationListResponse>;

/**
 * Response object
 */
export interface IntegrationRetrieveResponse {
  /**
   * External billing or CRM integration link
   */
  data: IntegrationRetrieveResponse.Data;
}

export namespace IntegrationRetrieveResponse {
  /**
   * External billing or CRM integration link
   */
  export interface Data {
    /**
     * Integration details
     */
    id: string;

    /**
     * Synced entity id
     */
    syncedEntityId: string | null;

    /**
     * The vendor identifier of integration
     */
    vendorIdentifier:
      | 'AUTH0'
      | 'ZUORA'
      | 'STRIPE'
      | 'HUBSPOT'
      | 'AWS_MARKETPLACE'
      | 'SNOWFLAKE'
      | 'SALESFORCE'
      | 'BIG_QUERY'
      | 'OPEN_FGA'
      | 'APP_STORE';

    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    syncData?:
      | Data.SyncRevisionPriceBillingData
      | Data.SyncRevisionBillingData
      | Data.SyncRevisionMarketplaceData
      | null;
  }

  export namespace Data {
    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    export interface SyncRevisionPriceBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;

      /**
       * Price group package billing id
       */
      priceGroupPackageBillingId: string;
    }

    /**
     * Billing sync revision data containing billing ID and link URL
     */
    export interface SyncRevisionBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;
    }

    /**
     * Marketplace sync revision data containing dimensions
     */
    export interface SyncRevisionMarketplaceData {
      /**
       * Dimensions of the marketplace sync revision
       */
      dimensions: string;
    }
  }
}

/**
 * Response object
 */
export interface IntegrationUpdateResponse {
  /**
   * External billing or CRM integration link
   */
  data: IntegrationUpdateResponse.Data;
}

export namespace IntegrationUpdateResponse {
  /**
   * External billing or CRM integration link
   */
  export interface Data {
    /**
     * Integration details
     */
    id: string;

    /**
     * Synced entity id
     */
    syncedEntityId: string | null;

    /**
     * The vendor identifier of integration
     */
    vendorIdentifier:
      | 'AUTH0'
      | 'ZUORA'
      | 'STRIPE'
      | 'HUBSPOT'
      | 'AWS_MARKETPLACE'
      | 'SNOWFLAKE'
      | 'SALESFORCE'
      | 'BIG_QUERY'
      | 'OPEN_FGA'
      | 'APP_STORE';

    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    syncData?:
      | Data.SyncRevisionPriceBillingData
      | Data.SyncRevisionBillingData
      | Data.SyncRevisionMarketplaceData
      | null;
  }

  export namespace Data {
    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    export interface SyncRevisionPriceBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;

      /**
       * Price group package billing id
       */
      priceGroupPackageBillingId: string;
    }

    /**
     * Billing sync revision data containing billing ID and link URL
     */
    export interface SyncRevisionBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;
    }

    /**
     * Marketplace sync revision data containing dimensions
     */
    export interface SyncRevisionMarketplaceData {
      /**
       * Dimensions of the marketplace sync revision
       */
      dimensions: string;
    }
  }
}

/**
 * External billing or CRM integration link
 */
export interface IntegrationListResponse {
  /**
   * Integration details
   */
  id: string;

  /**
   * Synced entity id
   */
  syncedEntityId: string | null;

  /**
   * The vendor identifier of integration
   */
  vendorIdentifier:
    | 'AUTH0'
    | 'ZUORA'
    | 'STRIPE'
    | 'HUBSPOT'
    | 'AWS_MARKETPLACE'
    | 'SNOWFLAKE'
    | 'SALESFORCE'
    | 'BIG_QUERY'
    | 'OPEN_FGA'
    | 'APP_STORE';

  /**
   * Price billing sync revision data containing billing ID, link URL, and price
   * group package billing ID
   */
  syncData?:
    | IntegrationListResponse.SyncRevisionPriceBillingData
    | IntegrationListResponse.SyncRevisionBillingData
    | IntegrationListResponse.SyncRevisionMarketplaceData
    | null;
}

export namespace IntegrationListResponse {
  /**
   * Price billing sync revision data containing billing ID, link URL, and price
   * group package billing ID
   */
  export interface SyncRevisionPriceBillingData {
    /**
     * Billing integration id
     */
    billingId: string;

    /**
     * Billing integration url
     */
    billingLinkUrl: string;

    /**
     * Price group package billing id
     */
    priceGroupPackageBillingId: string;
  }

  /**
   * Billing sync revision data containing billing ID and link URL
   */
  export interface SyncRevisionBillingData {
    /**
     * Billing integration id
     */
    billingId: string;

    /**
     * Billing integration url
     */
    billingLinkUrl: string;
  }

  /**
   * Marketplace sync revision data containing dimensions
   */
  export interface SyncRevisionMarketplaceData {
    /**
     * Dimensions of the marketplace sync revision
     */
    dimensions: string;
  }
}

/**
 * Response object
 */
export interface IntegrationLinkResponse {
  /**
   * External billing or CRM integration link
   */
  data: IntegrationLinkResponse.Data;
}

export namespace IntegrationLinkResponse {
  /**
   * External billing or CRM integration link
   */
  export interface Data {
    /**
     * Integration details
     */
    id: string;

    /**
     * Synced entity id
     */
    syncedEntityId: string | null;

    /**
     * The vendor identifier of integration
     */
    vendorIdentifier:
      | 'AUTH0'
      | 'ZUORA'
      | 'STRIPE'
      | 'HUBSPOT'
      | 'AWS_MARKETPLACE'
      | 'SNOWFLAKE'
      | 'SALESFORCE'
      | 'BIG_QUERY'
      | 'OPEN_FGA'
      | 'APP_STORE';

    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    syncData?:
      | Data.SyncRevisionPriceBillingData
      | Data.SyncRevisionBillingData
      | Data.SyncRevisionMarketplaceData
      | null;
  }

  export namespace Data {
    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    export interface SyncRevisionPriceBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;

      /**
       * Price group package billing id
       */
      priceGroupPackageBillingId: string;
    }

    /**
     * Billing sync revision data containing billing ID and link URL
     */
    export interface SyncRevisionBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;
    }

    /**
     * Marketplace sync revision data containing dimensions
     */
    export interface SyncRevisionMarketplaceData {
      /**
       * Dimensions of the marketplace sync revision
       */
      dimensions: string;
    }
  }
}

/**
 * Response object
 */
export interface IntegrationUnlinkResponse {
  /**
   * External billing or CRM integration link
   */
  data: IntegrationUnlinkResponse.Data;
}

export namespace IntegrationUnlinkResponse {
  /**
   * External billing or CRM integration link
   */
  export interface Data {
    /**
     * Integration details
     */
    id: string;

    /**
     * Synced entity id
     */
    syncedEntityId: string | null;

    /**
     * The vendor identifier of integration
     */
    vendorIdentifier:
      | 'AUTH0'
      | 'ZUORA'
      | 'STRIPE'
      | 'HUBSPOT'
      | 'AWS_MARKETPLACE'
      | 'SNOWFLAKE'
      | 'SALESFORCE'
      | 'BIG_QUERY'
      | 'OPEN_FGA'
      | 'APP_STORE';

    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    syncData?:
      | Data.SyncRevisionPriceBillingData
      | Data.SyncRevisionBillingData
      | Data.SyncRevisionMarketplaceData
      | null;
  }

  export namespace Data {
    /**
     * Price billing sync revision data containing billing ID, link URL, and price
     * group package billing ID
     */
    export interface SyncRevisionPriceBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;

      /**
       * Price group package billing id
       */
      priceGroupPackageBillingId: string;
    }

    /**
     * Billing sync revision data containing billing ID and link URL
     */
    export interface SyncRevisionBillingData {
      /**
       * Billing integration id
       */
      billingId: string;

      /**
       * Billing integration url
       */
      billingLinkUrl: string;
    }

    /**
     * Marketplace sync revision data containing dimensions
     */
    export interface SyncRevisionMarketplaceData {
      /**
       * Dimensions of the marketplace sync revision
       */
      dimensions: string;
    }
  }
}

export interface IntegrationRetrieveParams {
  /**
   * Customer slug
   */
  id: string;
}

export interface IntegrationUpdateParams {
  /**
   * Path param: Customer slug
   */
  id: string;

  /**
   * Body param: Synced entity id
   */
  syncedEntityId: string | null;
}

export interface IntegrationListParams extends MyCursorIDPageParams {
  /**
   * Filter by vendor identifier. Supports comma-separated values for multiple
   * vendors (e.g., STRIPE,HUBSPOT)
   */
  vendorIdentifier?: string;
}

export interface IntegrationLinkParams {
  /**
   * Integration details
   */
  id: string;

  /**
   * Synced entity id
   */
  syncedEntityId: string;

  /**
   * The vendor identifier of integration
   */
  vendorIdentifier:
    | 'AUTH0'
    | 'ZUORA'
    | 'STRIPE'
    | 'HUBSPOT'
    | 'AWS_MARKETPLACE'
    | 'SNOWFLAKE'
    | 'SALESFORCE'
    | 'BIG_QUERY'
    | 'OPEN_FGA'
    | 'APP_STORE';
}

export interface IntegrationUnlinkParams {
  /**
   * Customer slug
   */
  id: string;
}

export declare namespace Integrations {
  export {
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationLinkResponse as IntegrationLinkResponse,
    type IntegrationUnlinkResponse as IntegrationUnlinkResponse,
    type IntegrationListResponsesMyCursorIDPage as IntegrationListResponsesMyCursorIDPage,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationLinkParams as IntegrationLinkParams,
    type IntegrationUnlinkParams as IntegrationUnlinkParams,
  };
}
