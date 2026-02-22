// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentMethodAPI from './payment-method';
import { PaymentMethod, PaymentMethodAttachParams } from './payment-method';
import * as PromotionalEntitlementsAPI from './promotional-entitlements';
import {
  PromotionalEntitlementCreateParams,
  PromotionalEntitlementCreateResponse,
  PromotionalEntitlementListParams,
  PromotionalEntitlementListResponse,
  PromotionalEntitlementListResponsesMyCursorIDPage,
  PromotionalEntitlementRevokeParams,
  PromotionalEntitlementRevokeResponse,
  PromotionalEntitlements,
} from './promotional-entitlements';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);
  promotionalEntitlements: PromotionalEntitlementsAPI.PromotionalEntitlements =
    new PromotionalEntitlementsAPI.PromotionalEntitlements(this._client);

  /**
   * Retrieves a customer by their unique identifier, including billing information
   * and subscription status.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.get(path`/api/v1/customers/${id}`, options);
  }

  /**
   * Updates an existing customer's properties such as name, email, and billing
   * information.
   */
  update(id: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.patch(path`/api/v1/customers/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of customers in the environment.
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomerListResponsesMyCursorIDPage, CustomerListResponse> {
    return this._client.getAPIList('/api/v1/customers', MyCursorIDPage<CustomerListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a customer, preventing new subscriptions. Optionally cancels existing
   * subscriptions.
   */
  archive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/archive`, options);
  }

  /**
   * Imports multiple customers in bulk. Used for migrating customer data from
   * external systems.
   */
  import(body: CustomerImportParams, options?: RequestOptions): APIPromise<CustomerImportResponse> {
    return this._client.post('/api/v1/customers/import', { body, ...options });
  }

  /**
   * Retrieves a paginated list of resources within the same customer.
   */
  listResources(
    id: string,
    query: CustomerListResourcesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomerListResourcesResponsesMyCursorIDPage, CustomerListResourcesResponse> {
    return this._client.getAPIList(
      path`/api/v1/customers/${id}/resources`,
      MyCursorIDPage<CustomerListResourcesResponse>,
      { query, ...options },
    );
  }

  /**
   * Creates a new customer and optionally provisions an initial subscription in a
   * single operation.
   */
  provision(body: CustomerProvisionParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post('/api/v1/customers', { body, ...options });
  }

  /**
   * Restores an archived customer, allowing them to create new subscriptions again.
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/unarchive`, options);
  }
}

export type CustomerListResponsesMyCursorIDPage = MyCursorIDPage<CustomerListResponse>;

export type CustomerListResourcesResponsesMyCursorIDPage = MyCursorIDPage<CustomerListResourcesResponse>;

/**
 * Response object
 */
export interface CustomerResponse {
  /**
   * A customer can be either an organization or an individual
   */
  data: CustomerResponse.Data;
}

export namespace CustomerResponse {
  /**
   * A customer can be either an organization or an individual
   */
  export interface Data {
    /**
     * Customer slug
     */
    id: string;

    /**
     * Timestamp of when the record was deleted
     */
    archivedAt: string | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Customer level coupon
     */
    couponId?: string | null;

    /**
     * The default payment method details
     */
    defaultPaymentMethod?: Data.DefaultPaymentMethod | null;

    /**
     * The email of the customer
     */
    email?: string | null;

    /**
     * List of integrations
     */
    integrations?: Array<Data.Integration>;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: string };

    /**
     * The name of the customer
     */
    name?: string | null;
  }

  export namespace Data {
    /**
     * The default payment method details
     */
    export interface DefaultPaymentMethod {
      /**
       * The default payment method id
       */
      billingId: string | null;

      /**
       * The expiration month of the default payment method
       */
      cardExpiryMonth: number | null;

      /**
       * The expiration year of the default payment method
       */
      cardExpiryYear: number | null;

      /**
       * The last 4 digits of the default payment method
       */
      cardLast4Digits: string | null;

      /**
       * The default payment method type
       */
      type: 'CARD' | 'BANK' | 'CASH_APP';
    }

    /**
     * External billing or CRM integration link
     */
    export interface Integration {
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
    }
  }
}

/**
 * A customer can be either an organization or an individual
 */
export interface CustomerListResponse {
  /**
   * Customer slug
   */
  id: string;

  /**
   * Timestamp of when the record was deleted
   */
  archivedAt: string | null;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * Customer level coupon
   */
  couponId?: string | null;

  /**
   * The default payment method details
   */
  defaultPaymentMethod?: CustomerListResponse.DefaultPaymentMethod | null;

  /**
   * The email of the customer
   */
  email?: string | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerListResponse.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;
}

export namespace CustomerListResponse {
  /**
   * The default payment method details
   */
  export interface DefaultPaymentMethod {
    /**
     * The default payment method id
     */
    billingId: string | null;

    /**
     * The expiration month of the default payment method
     */
    cardExpiryMonth: number | null;

    /**
     * The expiration year of the default payment method
     */
    cardExpiryYear: number | null;

    /**
     * The last 4 digits of the default payment method
     */
    cardLast4Digits: string | null;

    /**
     * The default payment method type
     */
    type: 'CARD' | 'BANK' | 'CASH_APP';
  }

  /**
   * External billing or CRM integration link
   */
  export interface Integration {
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
  }
}

/**
 * Response object
 */
export interface CustomerImportResponse {
  /**
   * List of newly created customer IDs from the import operation.
   */
  data: CustomerImportResponse.Data;
}

export namespace CustomerImportResponse {
  /**
   * List of newly created customer IDs from the import operation.
   */
  export interface Data {
    /**
     * Customer IDs created during import
     */
    newCustomers: Array<string>;
  }
}

/**
 * Resource object that belongs to a customer
 */
export interface CustomerListResourcesResponse {
  /**
   * Resource slug
   */
  id: string;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

export interface CustomerUpdateParams {
  /**
   * Customer level coupon
   */
  couponId?: string | null;

  /**
   * The email of the customer
   */
  email?: string | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerUpdateParams.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;
}

export namespace CustomerUpdateParams {
  /**
   * External billing or CRM integration link
   */
  export interface Integration {
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
  }
}

export interface CustomerListParams extends MyCursorIDPageParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: CustomerListParams.CreatedAt;

  /**
   * Filter by exact customer email address
   */
  email?: string;

  /**
   * Filter by exact customer name
   */
  name?: string;
}

export namespace CustomerListParams {
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

export interface CustomerImportParams {
  /**
   * List of customer objects to import
   */
  customers: Array<CustomerImportParams.Customer>;
}

export namespace CustomerImportParams {
  export interface Customer {
    /**
     * Customer slug
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

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: string };

    /**
     * Billing provider payment method id
     */
    paymentMethodId?: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt?: string;
  }
}

export interface CustomerListResourcesParams extends MyCursorIDPageParams {}

export interface CustomerProvisionParams {
  /**
   * Customer slug
   */
  id: string;

  /**
   * Customer level coupon
   */
  couponId?: string | null;

  /**
   * The default payment method details
   */
  defaultPaymentMethod?: CustomerProvisionParams.DefaultPaymentMethod | null;

  /**
   * The email of the customer
   */
  email?: string | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerProvisionParams.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;
}

export namespace CustomerProvisionParams {
  /**
   * The default payment method details
   */
  export interface DefaultPaymentMethod {
    /**
     * The default payment method id
     */
    billingId: string | null;

    /**
     * The expiration month of the default payment method
     */
    cardExpiryMonth: number | null;

    /**
     * The expiration year of the default payment method
     */
    cardExpiryYear: number | null;

    /**
     * The last 4 digits of the default payment method
     */
    cardLast4Digits: string | null;

    /**
     * The default payment method type
     */
    type: 'CARD' | 'BANK' | 'CASH_APP';
  }

  /**
   * External billing or CRM integration link
   */
  export interface Integration {
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
  }
}

Customers.PaymentMethod = PaymentMethod;
Customers.PromotionalEntitlements = PromotionalEntitlements;

export declare namespace Customers {
  export {
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerImportResponse as CustomerImportResponse,
    type CustomerListResourcesResponse as CustomerListResourcesResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerListResourcesResponsesMyCursorIDPage as CustomerListResourcesResponsesMyCursorIDPage,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerListResourcesParams as CustomerListResourcesParams,
    type CustomerProvisionParams as CustomerProvisionParams,
  };

  export { PaymentMethod as PaymentMethod, type PaymentMethodAttachParams as PaymentMethodAttachParams };

  export {
    PromotionalEntitlements as PromotionalEntitlements,
    type PromotionalEntitlementCreateResponse as PromotionalEntitlementCreateResponse,
    type PromotionalEntitlementListResponse as PromotionalEntitlementListResponse,
    type PromotionalEntitlementRevokeResponse as PromotionalEntitlementRevokeResponse,
    type PromotionalEntitlementListResponsesMyCursorIDPage as PromotionalEntitlementListResponsesMyCursorIDPage,
    type PromotionalEntitlementCreateParams as PromotionalEntitlementCreateParams,
    type PromotionalEntitlementListParams as PromotionalEntitlementListParams,
    type PromotionalEntitlementRevokeParams as PromotionalEntitlementRevokeParams,
  };
}
