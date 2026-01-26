// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentMethodAPI from './payment-method';
import { PaymentMethod, PaymentMethodAttachParams } from './payment-method';
import * as PromotionalAPI from './promotional';
import {
  Promotional,
  PromotionalCreateParams,
  PromotionalCreateResponse,
  PromotionalRevokeParams,
  PromotionalRevokeResponse,
} from './promotional';
import * as UsageAPI from './usage';
import { Usage, UsageRetrieveParams, UsageRetrieveResponse } from './usage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  promotional: PromotionalAPI.Promotional = new PromotionalAPI.Promotional(this._client);

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
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/api/v1/customers', { query, ...options });
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

export interface CustomerResponse {
  data: CustomerResponse.Data;
}

export namespace CustomerResponse {
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
  data: Array<CustomerListResponse.Data>;
}

export namespace CustomerListResponse {
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
     * Cursor ID for query pagination
     */
    cursorId: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

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

export interface CustomerCreateParams {
  /**
   * Customer slug
   */
  id: string;

  /**
   * The default payment method details
   */
  defaultPaymentMethod?: CustomerCreateParams.DefaultPaymentMethod | null;

  /**
   * The email of the customer
   */
  email?: string | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerCreateParams.Integration>;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;
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

export interface CustomerListParams {
  /**
   * Ending before this UUID for pagination
   */
  endingBefore?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Starting after this UUID for pagination
   */
  startingAfter?: string;
}

Customers.PaymentMethod = PaymentMethod;
Customers.Usage = Usage;
Customers.Promotional = Promotional;

export declare namespace Customers {
  export {
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export { PaymentMethod as PaymentMethod, type PaymentMethodAttachParams as PaymentMethodAttachParams };

  export {
    Usage as Usage,
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };

  export {
    Promotional as Promotional,
    type PromotionalCreateResponse as PromotionalCreateResponse,
    type PromotionalRevokeResponse as PromotionalRevokeResponse,
    type PromotionalCreateParams as PromotionalCreateParams,
    type PromotionalRevokeParams as PromotionalRevokeParams,
  };
}
