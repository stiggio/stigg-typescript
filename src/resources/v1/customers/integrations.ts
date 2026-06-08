// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Retrieves a specific integration for a customer by integration ID.
   *
   * @example
   * ```ts
   * const customerIntegrationResponse =
   *   await client.v1.customers.integrations.retrieve(
   *     'integrationId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    integrationID: string,
    params: IntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerIntegrationResponse> {
    const { id, 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params;
    return this._client.get(path`/api/v1/customers/${id}/integrations/${integrationID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a customer's integration link, such as changing the synced external
   * entity ID.
   *
   * @example
   * ```ts
   * const customerIntegrationResponse =
   *   await client.v1.customers.integrations.update(
   *     'integrationId',
   *     { id: 'id', syncedEntityId: 'syncedEntityId' },
   *   );
   * ```
   */
  update(
    integrationID: string,
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerIntegrationResponse> {
    const { id, 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/customers/${id}/integrations/${integrationID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a paginated list of a customer's external integrations (billing, CRM,
   * etc.).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const integrationListResponse of client.v1.customers.integrations.list(
   *   'x',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    params: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IntegrationListResponsesMyCursorIDPage, IntegrationListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/api/v1/customers/${id}/integrations`,
      MyCursorIDPage<IntegrationListResponse>,
      {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
            ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Links a customer to an external integration by specifying the vendor and
   * external entity ID.
   *
   * @example
   * ```ts
   * const customerIntegrationResponse =
   *   await client.v1.customers.integrations.link('x', {
   *     id: 'id',
   *     syncedEntityId: 'syncedEntityId',
   *     vendorIdentifier: 'AUTH0',
   *   });
   * ```
   */
  link(
    id: string,
    params: IntegrationLinkParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerIntegrationResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/customers/${id}/integrations`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Removes the link between a customer and an external integration.
   *
   * @example
   * ```ts
   * const customerIntegrationResponse =
   *   await client.v1.customers.integrations.unlink(
   *     'integrationId',
   *     { id: 'id' },
   *   );
   * ```
   */
  unlink(
    integrationID: string,
    params: IntegrationUnlinkParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerIntegrationResponse> {
    const { id, 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params;
    return this._client.delete(path`/api/v1/customers/${id}/integrations/${integrationID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type IntegrationListResponsesMyCursorIDPage = MyCursorIDPage<IntegrationListResponse>;

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
    | 'APP_STORE'
    | 'RECEIVED'
    | 'PREQUEL';

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

export interface IntegrationRetrieveParams {
  /**
   * Path param: Customer slug
   */
  id: string;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
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

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface IntegrationListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by vendor identifier. Supports comma-separated values for
   * multiple vendors (e.g., STRIPE,HUBSPOT)
   */
  vendorIdentifier?: Array<
    | 'AUTH0'
    | 'ZUORA'
    | 'STRIPE'
    | 'HUBSPOT'
    | 'AWS_MARKETPLACE'
    | 'SNOWFLAKE'
    | 'SALESFORCE'
    | 'BIG_QUERY'
    | 'OPEN_FGA'
    | 'APP_STORE'
    | 'RECEIVED'
    | 'PREQUEL'
  >;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface IntegrationLinkParams {
  /**
   * Body param: Integration details
   */
  id: string;

  /**
   * Body param: Synced entity id
   */
  syncedEntityId: string;

  /**
   * Body param: The vendor identifier of integration
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
    | 'APP_STORE'
    | 'RECEIVED'
    | 'PREQUEL';

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface IntegrationUnlinkParams {
  /**
   * Path param: Customer slug
   */
  id: string;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListResponsesMyCursorIDPage as IntegrationListResponsesMyCursorIDPage,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationLinkParams as IntegrationLinkParams,
    type IntegrationUnlinkParams as IntegrationUnlinkParams,
  };
}
