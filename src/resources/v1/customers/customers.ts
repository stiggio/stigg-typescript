// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentMethodAPI from './payment-method';
import { PaymentMethod, PaymentMethodAttachParams } from './payment-method';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);

  /**
   * Create a new Customer
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post('/api/v1/customers', { body, ...options });
  }

  /**
   * Get a single Customer by id
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.get(path`/api/v1/customers/${id}`, options);
  }

  /**
   * Update an existing Customer
   */
  update(id: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.patch(path`/api/v1/customers/${id}`, { body, ...options });
  }

  /**
   * Get a list of Customers
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
   * Perform archive on a Customer
   */
  archive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/archive`, options);
  }

  /**
   * Perform unarchive on a Customer
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/unarchive`, options);
  }
}

export type CustomerListResponsesMyCursorIDPage = MyCursorIDPage<CustomerListResponse>;

export interface CustomerResponse {
  data: CustomerResponse.Data;
}

export namespace CustomerResponse {
  export interface Data {
    /**
     * Timestamp of when the record was deleted
     */
    archivedAt: string | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The email of the customer
     */
    email: string | null;

    /**
     * Customer slug
     */
    externalId: string;

    /**
     * The name of the customer
     */
    name: string | null;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * The default payment method details
     */
    defaultPaymentMethod?: Data.DefaultPaymentMethod | null;

    /**
     * List of integrations
     */
    integrations?: Array<Data.Integration>;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: string };
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

export interface CustomerListResponse {
  /**
   * Timestamp of when the record was deleted
   */
  archivedAt: string | null;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Cursor ID for query pagination
   */
  cursor_id: string;

  /**
   * The email of the customer
   */
  email: string | null;

  /**
   * Customer slug
   */
  externalId: string;

  /**
   * The name of the customer
   */
  name: string | null;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * The default payment method details
   */
  defaultPaymentMethod?: CustomerListResponse.DefaultPaymentMethod | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerListResponse.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };
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

export interface CustomerCreateParams {
  /**
   * The email of the customer
   */
  email: string | null;

  /**
   * Customer slug
   */
  externalId: string;

  /**
   * The name of the customer
   */
  name: string | null;

  /**
   * The default payment method details
   */
  defaultPaymentMethod?: CustomerCreateParams.DefaultPaymentMethod | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerCreateParams.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };
}

export namespace CustomerCreateParams {
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

export interface CustomerUpdateParams {
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

Customers.PaymentMethod = PaymentMethod;

export declare namespace Customers {
  export {
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export { PaymentMethod as PaymentMethod, type PaymentMethodAttachParams as PaymentMethodAttachParams };
}
