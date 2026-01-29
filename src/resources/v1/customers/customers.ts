// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentMethodAPI from './payment-method';
import { PaymentMethod, PaymentMethodAttachParams } from './payment-method';
import * as PromotionalEntitlementsAPI from './promotional-entitlements';
import {
  PromotionalEntitlementGrantParams,
  PromotionalEntitlementGrantResponse,
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
   * Get a single customer by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.get(path`/api/v1/customers/${id}`, options);
  }

  /**
   * Update a customer
   */
  update(id: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.patch(path`/api/v1/customers/${id}`, { body, ...options });
  }

  /**
   * Get a list of customers
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
   * Archive customer
   */
  archive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/archive`, options);
  }

  /**
   * Bulk import customers
   */
  import(body: CustomerImportParams, options?: RequestOptions): APIPromise<CustomerImportResponse> {
    return this._client.post('/api/v1/customers/import', { body, ...options });
  }

  /**
   * Provision customer
   */
  provision(body: CustomerProvisionParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post('/api/v1/customers', { body, ...options });
  }

  /**
   * Unarchive customer
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/unarchive`, options);
  }
}

export type CustomerListResponsesMyCursorIDPage = MyCursorIDPage<CustomerListResponse>;

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

export interface CustomerListParams extends MyCursorIDPageParams {}

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
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerProvisionParams as CustomerProvisionParams,
  };

  export { PaymentMethod as PaymentMethod, type PaymentMethodAttachParams as PaymentMethodAttachParams };

  export {
    PromotionalEntitlements as PromotionalEntitlements,
    type PromotionalEntitlementGrantResponse as PromotionalEntitlementGrantResponse,
    type PromotionalEntitlementRevokeResponse as PromotionalEntitlementRevokeResponse,
    type PromotionalEntitlementGrantParams as PromotionalEntitlementGrantParams,
    type PromotionalEntitlementRevokeParams as PromotionalEntitlementRevokeParams,
  };
}
