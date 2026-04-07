// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IntegrationsAPI from './integrations';
import {
  IntegrationLinkParams,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationListResponsesMyCursorIDPage,
  IntegrationRetrieveParams,
  IntegrationUnlinkParams,
  IntegrationUpdateParams,
  Integrations,
} from './integrations';
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
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

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
   * Retrieves the effective entitlements for a customer or resource, including
   * feature and credit entitlements.
   */
  retrieveEntitlements(
    id: string,
    query: CustomerRetrieveEntitlementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveEntitlementsResponse> {
    return this._client.get(path`/api/v1/customers/${id}/entitlements`, { query, ...options });
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
export interface CustomerIntegrationResponse {
  /**
   * External billing or CRM integration link
   */
  data: CustomerIntegrationResponse.Data;
}

export namespace CustomerIntegrationResponse {
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
     * The billing currency of the customer
     */
    billingCurrency?:
      | 'usd'
      | 'aed'
      | 'all'
      | 'amd'
      | 'ang'
      | 'aud'
      | 'awg'
      | 'azn'
      | 'bam'
      | 'bbd'
      | 'bdt'
      | 'bgn'
      | 'bif'
      | 'bmd'
      | 'bnd'
      | 'bsd'
      | 'bwp'
      | 'byn'
      | 'bzd'
      | 'brl'
      | 'cad'
      | 'cdf'
      | 'chf'
      | 'cny'
      | 'czk'
      | 'dkk'
      | 'dop'
      | 'dzd'
      | 'egp'
      | 'etb'
      | 'eur'
      | 'fjd'
      | 'gbp'
      | 'gel'
      | 'gip'
      | 'gmd'
      | 'gyd'
      | 'hkd'
      | 'hrk'
      | 'htg'
      | 'idr'
      | 'ils'
      | 'inr'
      | 'isk'
      | 'jmd'
      | 'jpy'
      | 'kes'
      | 'kgs'
      | 'khr'
      | 'kmf'
      | 'krw'
      | 'kyd'
      | 'kzt'
      | 'lbp'
      | 'lkr'
      | 'lrd'
      | 'lsl'
      | 'mad'
      | 'mdl'
      | 'mga'
      | 'mkd'
      | 'mmk'
      | 'mnt'
      | 'mop'
      | 'mro'
      | 'mvr'
      | 'mwk'
      | 'mxn'
      | 'myr'
      | 'mzn'
      | 'nad'
      | 'ngn'
      | 'nok'
      | 'npr'
      | 'nzd'
      | 'pgk'
      | 'php'
      | 'pkr'
      | 'pln'
      | 'qar'
      | 'ron'
      | 'rsd'
      | 'rub'
      | 'rwf'
      | 'sar'
      | 'sbd'
      | 'scr'
      | 'sek'
      | 'sgd'
      | 'sle'
      | 'sll'
      | 'sos'
      | 'szl'
      | 'thb'
      | 'tjs'
      | 'top'
      | 'try'
      | 'ttd'
      | 'tzs'
      | 'uah'
      | 'uzs'
      | 'vnd'
      | 'vuv'
      | 'wst'
      | 'xaf'
      | 'xcd'
      | 'yer'
      | 'zar'
      | 'zmw'
      | 'clp'
      | 'djf'
      | 'gnf'
      | 'ugx'
      | 'pyg'
      | 'xof'
      | 'xpf'
      | null;

    /**
     * The unique identifier for the entity in the billing provider
     */
    billingId?: string | null;

    /**
     * Customer level coupon
     */
    couponId?: (string & {}) | '' | null;

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
     * Language to use for this customer
     */
    language?: string | null;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: string };

    /**
     * The name of the customer
     */
    name?: string | null;

    /**
     * Vendor-specific billing passthrough fields.
     */
    passthrough?: Data.Passthrough;

    /**
     * Timezone to use for this customer
     */
    timezone?: string | null;
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

    /**
     * Vendor-specific billing passthrough fields.
     */
    export interface Passthrough {
      /**
       * Stripe-specific billing fields for the customer.
       */
      stripe?: Passthrough.Stripe;

      /**
       * Zuora-specific billing fields for the customer.
       */
      zuora?: Passthrough.Zuora;
    }

    export namespace Passthrough {
      /**
       * Stripe-specific billing fields for the customer.
       */
      export interface Stripe {
        /**
         * Physical address
         */
        billingAddress?: Stripe.BillingAddress;

        /**
         * Customer name
         */
        customerName?: string;

        /**
         * Invoice custom fields
         */
        invoiceCustomFields?: { [key: string]: string };

        /**
         * Additional metadata
         */
        metadata?: { [key: string]: string };

        /**
         * Billing provider payment method id, attached to this customer
         */
        paymentMethodId?: string;

        /**
         * Physical address
         */
        shippingAddress?: Stripe.ShippingAddress;

        /**
         * Tax IDs
         */
        taxIds?: Array<Stripe.TaxID>;
      }

      export namespace Stripe {
        /**
         * Physical address
         */
        export interface BillingAddress {
          /**
           * City name
           */
          city?: string;

          /**
           * Country code or name
           */
          country?: string;

          /**
           * Street address line 1
           */
          line1?: string;

          /**
           * Street address line 2
           */
          line2?: string;

          /**
           * Postal or ZIP code
           */
          postalCode?: string;

          /**
           * State or province
           */
          state?: string;
        }

        /**
         * Physical address
         */
        export interface ShippingAddress {
          /**
           * City name
           */
          city?: string;

          /**
           * Country code or name
           */
          country?: string;

          /**
           * Street address line 1
           */
          line1?: string;

          /**
           * Street address line 2
           */
          line2?: string;

          /**
           * Postal or ZIP code
           */
          postalCode?: string;

          /**
           * State or province
           */
          state?: string;
        }

        /**
         * Tax identifier with type and value for customer tax exemptions.
         */
        export interface TaxID {
          /**
           * The type of tax exemption identifier, such as VAT.
           */
          type: string;

          /**
           * The actual tax identifier value
           */
          value: string;
        }
      }

      /**
       * Zuora-specific billing fields for the customer.
       */
      export interface Zuora {
        /**
         * Physical address
         */
        billingAddress?: Zuora.BillingAddress;

        /**
         * Customers selected currency
         */
        currency?:
          | 'usd'
          | 'aed'
          | 'all'
          | 'amd'
          | 'ang'
          | 'aud'
          | 'awg'
          | 'azn'
          | 'bam'
          | 'bbd'
          | 'bdt'
          | 'bgn'
          | 'bif'
          | 'bmd'
          | 'bnd'
          | 'bsd'
          | 'bwp'
          | 'byn'
          | 'bzd'
          | 'brl'
          | 'cad'
          | 'cdf'
          | 'chf'
          | 'cny'
          | 'czk'
          | 'dkk'
          | 'dop'
          | 'dzd'
          | 'egp'
          | 'etb'
          | 'eur'
          | 'fjd'
          | 'gbp'
          | 'gel'
          | 'gip'
          | 'gmd'
          | 'gyd'
          | 'hkd'
          | 'hrk'
          | 'htg'
          | 'idr'
          | 'ils'
          | 'inr'
          | 'isk'
          | 'jmd'
          | 'jpy'
          | 'kes'
          | 'kgs'
          | 'khr'
          | 'kmf'
          | 'krw'
          | 'kyd'
          | 'kzt'
          | 'lbp'
          | 'lkr'
          | 'lrd'
          | 'lsl'
          | 'mad'
          | 'mdl'
          | 'mga'
          | 'mkd'
          | 'mmk'
          | 'mnt'
          | 'mop'
          | 'mro'
          | 'mvr'
          | 'mwk'
          | 'mxn'
          | 'myr'
          | 'mzn'
          | 'nad'
          | 'ngn'
          | 'nok'
          | 'npr'
          | 'nzd'
          | 'pgk'
          | 'php'
          | 'pkr'
          | 'pln'
          | 'qar'
          | 'ron'
          | 'rsd'
          | 'rub'
          | 'rwf'
          | 'sar'
          | 'sbd'
          | 'scr'
          | 'sek'
          | 'sgd'
          | 'sle'
          | 'sll'
          | 'sos'
          | 'szl'
          | 'thb'
          | 'tjs'
          | 'top'
          | 'try'
          | 'ttd'
          | 'tzs'
          | 'uah'
          | 'uzs'
          | 'vnd'
          | 'vuv'
          | 'wst'
          | 'xaf'
          | 'xcd'
          | 'yer'
          | 'zar'
          | 'zmw'
          | 'clp'
          | 'djf'
          | 'gnf'
          | 'ugx'
          | 'pyg'
          | 'xof'
          | 'xpf';

        /**
         * Additional metadata
         */
        metadata?: { [key: string]: string };

        /**
         * Billing provider payment method id, attached to this customer
         */
        paymentMethodId?: string;
      }

      export namespace Zuora {
        /**
         * Physical address
         */
        export interface BillingAddress {
          /**
           * City name
           */
          city?: string;

          /**
           * Country code or name
           */
          country?: string;

          /**
           * Street address line 1
           */
          line1?: string;

          /**
           * Street address line 2
           */
          line2?: string;

          /**
           * Postal or ZIP code
           */
          postalCode?: string;

          /**
           * State or province
           */
          state?: string;
        }
      }
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
   * The billing currency of the customer
   */
  billingCurrency?:
    | 'usd'
    | 'aed'
    | 'all'
    | 'amd'
    | 'ang'
    | 'aud'
    | 'awg'
    | 'azn'
    | 'bam'
    | 'bbd'
    | 'bdt'
    | 'bgn'
    | 'bif'
    | 'bmd'
    | 'bnd'
    | 'bsd'
    | 'bwp'
    | 'byn'
    | 'bzd'
    | 'brl'
    | 'cad'
    | 'cdf'
    | 'chf'
    | 'cny'
    | 'czk'
    | 'dkk'
    | 'dop'
    | 'dzd'
    | 'egp'
    | 'etb'
    | 'eur'
    | 'fjd'
    | 'gbp'
    | 'gel'
    | 'gip'
    | 'gmd'
    | 'gyd'
    | 'hkd'
    | 'hrk'
    | 'htg'
    | 'idr'
    | 'ils'
    | 'inr'
    | 'isk'
    | 'jmd'
    | 'jpy'
    | 'kes'
    | 'kgs'
    | 'khr'
    | 'kmf'
    | 'krw'
    | 'kyd'
    | 'kzt'
    | 'lbp'
    | 'lkr'
    | 'lrd'
    | 'lsl'
    | 'mad'
    | 'mdl'
    | 'mga'
    | 'mkd'
    | 'mmk'
    | 'mnt'
    | 'mop'
    | 'mro'
    | 'mvr'
    | 'mwk'
    | 'mxn'
    | 'myr'
    | 'mzn'
    | 'nad'
    | 'ngn'
    | 'nok'
    | 'npr'
    | 'nzd'
    | 'pgk'
    | 'php'
    | 'pkr'
    | 'pln'
    | 'qar'
    | 'ron'
    | 'rsd'
    | 'rub'
    | 'rwf'
    | 'sar'
    | 'sbd'
    | 'scr'
    | 'sek'
    | 'sgd'
    | 'sle'
    | 'sll'
    | 'sos'
    | 'szl'
    | 'thb'
    | 'tjs'
    | 'top'
    | 'try'
    | 'ttd'
    | 'tzs'
    | 'uah'
    | 'uzs'
    | 'vnd'
    | 'vuv'
    | 'wst'
    | 'xaf'
    | 'xcd'
    | 'yer'
    | 'zar'
    | 'zmw'
    | 'clp'
    | 'djf'
    | 'gnf'
    | 'ugx'
    | 'pyg'
    | 'xof'
    | 'xpf'
    | null;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Customer level coupon
   */
  couponId?: (string & {}) | '' | null;

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
   * Language to use for this customer
   */
  language?: string | null;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;

  /**
   * Vendor-specific billing passthrough fields.
   */
  passthrough?: CustomerListResponse.Passthrough;

  /**
   * Timezone to use for this customer
   */
  timezone?: string | null;
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

  /**
   * Vendor-specific billing passthrough fields.
   */
  export interface Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    stripe?: Passthrough.Stripe;

    /**
     * Zuora-specific billing fields for the customer.
     */
    zuora?: Passthrough.Zuora;
  }

  export namespace Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    export interface Stripe {
      /**
       * Physical address
       */
      billingAddress?: Stripe.BillingAddress;

      /**
       * Customer name
       */
      customerName?: string;

      /**
       * Invoice custom fields
       */
      invoiceCustomFields?: { [key: string]: string };

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;

      /**
       * Physical address
       */
      shippingAddress?: Stripe.ShippingAddress;

      /**
       * Tax IDs
       */
      taxIds?: Array<Stripe.TaxID>;
    }

    export namespace Stripe {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Physical address
       */
      export interface ShippingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Tax identifier with type and value for customer tax exemptions.
       */
      export interface TaxID {
        /**
         * The type of tax exemption identifier, such as VAT.
         */
        type: string;

        /**
         * The actual tax identifier value
         */
        value: string;
      }
    }

    /**
     * Zuora-specific billing fields for the customer.
     */
    export interface Zuora {
      /**
       * Physical address
       */
      billingAddress?: Zuora.BillingAddress;

      /**
       * Customers selected currency
       */
      currency?:
        | 'usd'
        | 'aed'
        | 'all'
        | 'amd'
        | 'ang'
        | 'aud'
        | 'awg'
        | 'azn'
        | 'bam'
        | 'bbd'
        | 'bdt'
        | 'bgn'
        | 'bif'
        | 'bmd'
        | 'bnd'
        | 'bsd'
        | 'bwp'
        | 'byn'
        | 'bzd'
        | 'brl'
        | 'cad'
        | 'cdf'
        | 'chf'
        | 'cny'
        | 'czk'
        | 'dkk'
        | 'dop'
        | 'dzd'
        | 'egp'
        | 'etb'
        | 'eur'
        | 'fjd'
        | 'gbp'
        | 'gel'
        | 'gip'
        | 'gmd'
        | 'gyd'
        | 'hkd'
        | 'hrk'
        | 'htg'
        | 'idr'
        | 'ils'
        | 'inr'
        | 'isk'
        | 'jmd'
        | 'jpy'
        | 'kes'
        | 'kgs'
        | 'khr'
        | 'kmf'
        | 'krw'
        | 'kyd'
        | 'kzt'
        | 'lbp'
        | 'lkr'
        | 'lrd'
        | 'lsl'
        | 'mad'
        | 'mdl'
        | 'mga'
        | 'mkd'
        | 'mmk'
        | 'mnt'
        | 'mop'
        | 'mro'
        | 'mvr'
        | 'mwk'
        | 'mxn'
        | 'myr'
        | 'mzn'
        | 'nad'
        | 'ngn'
        | 'nok'
        | 'npr'
        | 'nzd'
        | 'pgk'
        | 'php'
        | 'pkr'
        | 'pln'
        | 'qar'
        | 'ron'
        | 'rsd'
        | 'rub'
        | 'rwf'
        | 'sar'
        | 'sbd'
        | 'scr'
        | 'sek'
        | 'sgd'
        | 'sle'
        | 'sll'
        | 'sos'
        | 'szl'
        | 'thb'
        | 'tjs'
        | 'top'
        | 'try'
        | 'ttd'
        | 'tzs'
        | 'uah'
        | 'uzs'
        | 'vnd'
        | 'vuv'
        | 'wst'
        | 'xaf'
        | 'xcd'
        | 'yer'
        | 'zar'
        | 'zmw'
        | 'clp'
        | 'djf'
        | 'gnf'
        | 'ugx'
        | 'pyg'
        | 'xof'
        | 'xpf';

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;
    }

    export namespace Zuora {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }
    }
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

/**
 * Response object
 */
export interface CustomerRetrieveEntitlementsResponse {
  /**
   * The effective entitlements state for a customer or resource.
   */
  data: CustomerRetrieveEntitlementsResponse.Data;
}

export namespace CustomerRetrieveEntitlementsResponse {
  /**
   * The effective entitlements state for a customer or resource.
   */
  export interface Data {
    /**
     * Reason why entitlements access was denied, if applicable
     */
    accessDeniedReason: 'CustomerNotFound' | 'NoActiveSubscription' | 'CustomerIsArchived' | null;

    /**
     * List of effective feature and credit entitlements
     */
    entitlements: Array<Data.Feature | Data.Credit>;
  }

  export namespace Data {
    export interface Feature {
      accessDeniedReason:
        | 'FeatureNotFound'
        | 'CustomerNotFound'
        | 'CustomerIsArchived'
        | 'CustomerResourceNotFound'
        | 'NoActiveSubscription'
        | 'NoFeatureEntitlementInSubscription'
        | 'RequestedUsageExceedingLimit'
        | 'RequestedValuesMismatch'
        | 'BudgetExceeded'
        | 'Unknown'
        | 'FeatureTypeMismatch'
        | 'Revoked'
        | 'InsufficientCredits'
        | 'EntitlementNotFound'
        | null;

      isGranted: boolean;

      type: 'FEATURE';

      currentUsage?: number;

      /**
       * Timestamp of the last update to the entitlement grant or configuration.
       */
      entitlementUpdatedAt?: string;

      feature?: Feature.Feature;

      hasUnlimitedUsage?: boolean;

      resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

      usageLimit?: number | null;

      /**
       * The anchor for calculating the usage period for metered entitlements with a
       * reset period configured
       */
      usagePeriodAnchor?: string;

      /**
       * The end date of the usage period for metered entitlements with a reset period
       * configured
       */
      usagePeriodEnd?: string;

      /**
       * The start date of the usage period for metered entitlements with a reset period
       * configured
       */
      usagePeriodStart?: string;

      /**
       * The next time the entitlement should be recalculated
       */
      validUntil?: string;
    }

    export namespace Feature {
      export interface Feature {
        /**
         * The unique reference ID of the entitlement.
         */
        id: string;

        /**
         * The human-readable name of the entitlement, shown in UI elements.
         */
        displayName: string;

        /**
         * The current status of the feature.
         */
        featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE';

        /**
         * The type of feature associated with the entitlement.
         */
        featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';
      }
    }

    export interface Credit {
      accessDeniedReason:
        | 'FeatureNotFound'
        | 'CustomerNotFound'
        | 'CustomerIsArchived'
        | 'CustomerResourceNotFound'
        | 'NoActiveSubscription'
        | 'NoFeatureEntitlementInSubscription'
        | 'RequestedUsageExceedingLimit'
        | 'RequestedValuesMismatch'
        | 'BudgetExceeded'
        | 'Unknown'
        | 'FeatureTypeMismatch'
        | 'Revoked'
        | 'InsufficientCredits'
        | 'EntitlementNotFound'
        | null;

      /**
       * The currency associated with a credit entitlement.
       */
      currency: Credit.Currency;

      currentUsage: number;

      isGranted: boolean;

      type: 'CREDIT';

      usageLimit: number;

      /**
       * Timestamp of the last update to the credit usage.
       */
      usageUpdatedAt: string;

      /**
       * Timestamp of the last update to the entitlement grant or configuration.
       */
      entitlementUpdatedAt?: string;

      /**
       * The end date of the current billing period for recurring credit grants.
       */
      usagePeriodEnd?: string;

      /**
       * The next time the entitlement should be recalculated
       */
      validUntil?: string;
    }

    export namespace Credit {
      /**
       * The currency associated with a credit entitlement.
       */
      export interface Currency {
        /**
         * The unique identifier of the custom currency.
         */
        currencyId: string;

        /**
         * The display name of the currency.
         */
        displayName: string;

        /**
         * A description of the currency.
         */
        description?: string | null;

        /**
         * Additional metadata associated with the currency.
         */
        metadata?: { [key: string]: string } | null;

        /**
         * The plural form of the currency unit.
         */
        unitPlural?: string | null;

        /**
         * The singular form of the currency unit.
         */
        unitSingular?: string | null;
      }
    }
  }
}

export interface CustomerUpdateParams {
  /**
   * The billing currency of the customer
   */
  billingCurrency?:
    | 'usd'
    | 'aed'
    | 'all'
    | 'amd'
    | 'ang'
    | 'aud'
    | 'awg'
    | 'azn'
    | 'bam'
    | 'bbd'
    | 'bdt'
    | 'bgn'
    | 'bif'
    | 'bmd'
    | 'bnd'
    | 'bsd'
    | 'bwp'
    | 'byn'
    | 'bzd'
    | 'brl'
    | 'cad'
    | 'cdf'
    | 'chf'
    | 'cny'
    | 'czk'
    | 'dkk'
    | 'dop'
    | 'dzd'
    | 'egp'
    | 'etb'
    | 'eur'
    | 'fjd'
    | 'gbp'
    | 'gel'
    | 'gip'
    | 'gmd'
    | 'gyd'
    | 'hkd'
    | 'hrk'
    | 'htg'
    | 'idr'
    | 'ils'
    | 'inr'
    | 'isk'
    | 'jmd'
    | 'jpy'
    | 'kes'
    | 'kgs'
    | 'khr'
    | 'kmf'
    | 'krw'
    | 'kyd'
    | 'kzt'
    | 'lbp'
    | 'lkr'
    | 'lrd'
    | 'lsl'
    | 'mad'
    | 'mdl'
    | 'mga'
    | 'mkd'
    | 'mmk'
    | 'mnt'
    | 'mop'
    | 'mro'
    | 'mvr'
    | 'mwk'
    | 'mxn'
    | 'myr'
    | 'mzn'
    | 'nad'
    | 'ngn'
    | 'nok'
    | 'npr'
    | 'nzd'
    | 'pgk'
    | 'php'
    | 'pkr'
    | 'pln'
    | 'qar'
    | 'ron'
    | 'rsd'
    | 'rub'
    | 'rwf'
    | 'sar'
    | 'sbd'
    | 'scr'
    | 'sek'
    | 'sgd'
    | 'sle'
    | 'sll'
    | 'sos'
    | 'szl'
    | 'thb'
    | 'tjs'
    | 'top'
    | 'try'
    | 'ttd'
    | 'tzs'
    | 'uah'
    | 'uzs'
    | 'vnd'
    | 'vuv'
    | 'wst'
    | 'xaf'
    | 'xcd'
    | 'yer'
    | 'zar'
    | 'zmw'
    | 'clp'
    | 'djf'
    | 'gnf'
    | 'ugx'
    | 'pyg'
    | 'xof'
    | 'xpf'
    | null;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Customer level coupon
   */
  couponId?: (string & {}) | '' | null;

  /**
   * The email of the customer
   */
  email?: string | null;

  /**
   * List of integrations
   */
  integrations?: Array<CustomerUpdateParams.Integration>;

  /**
   * Language to use for this customer
   */
  language?: string | null;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;

  /**
   * Vendor-specific billing passthrough fields.
   */
  passthrough?: CustomerUpdateParams.Passthrough;

  /**
   * Timezone to use for this customer
   */
  timezone?: string | null;
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

  /**
   * Vendor-specific billing passthrough fields.
   */
  export interface Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    stripe?: Passthrough.Stripe;

    /**
     * Zuora-specific billing fields for the customer.
     */
    zuora?: Passthrough.Zuora;
  }

  export namespace Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    export interface Stripe {
      /**
       * Physical address
       */
      billingAddress?: Stripe.BillingAddress;

      /**
       * Customer name
       */
      customerName?: string;

      /**
       * Invoice custom fields
       */
      invoiceCustomFields?: { [key: string]: string };

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;

      /**
       * Physical address
       */
      shippingAddress?: Stripe.ShippingAddress;

      /**
       * Tax IDs
       */
      taxIds?: Array<Stripe.TaxID>;
    }

    export namespace Stripe {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Physical address
       */
      export interface ShippingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Tax identifier with type and value for customer tax exemptions.
       */
      export interface TaxID {
        /**
         * The type of tax exemption identifier, such as VAT.
         */
        type: string;

        /**
         * The actual tax identifier value
         */
        value: string;
      }
    }

    /**
     * Zuora-specific billing fields for the customer.
     */
    export interface Zuora {
      /**
       * Physical address
       */
      billingAddress?: Zuora.BillingAddress;

      /**
       * Customers selected currency
       */
      currency?:
        | 'usd'
        | 'aed'
        | 'all'
        | 'amd'
        | 'ang'
        | 'aud'
        | 'awg'
        | 'azn'
        | 'bam'
        | 'bbd'
        | 'bdt'
        | 'bgn'
        | 'bif'
        | 'bmd'
        | 'bnd'
        | 'bsd'
        | 'bwp'
        | 'byn'
        | 'bzd'
        | 'brl'
        | 'cad'
        | 'cdf'
        | 'chf'
        | 'cny'
        | 'czk'
        | 'dkk'
        | 'dop'
        | 'dzd'
        | 'egp'
        | 'etb'
        | 'eur'
        | 'fjd'
        | 'gbp'
        | 'gel'
        | 'gip'
        | 'gmd'
        | 'gyd'
        | 'hkd'
        | 'hrk'
        | 'htg'
        | 'idr'
        | 'ils'
        | 'inr'
        | 'isk'
        | 'jmd'
        | 'jpy'
        | 'kes'
        | 'kgs'
        | 'khr'
        | 'kmf'
        | 'krw'
        | 'kyd'
        | 'kzt'
        | 'lbp'
        | 'lkr'
        | 'lrd'
        | 'lsl'
        | 'mad'
        | 'mdl'
        | 'mga'
        | 'mkd'
        | 'mmk'
        | 'mnt'
        | 'mop'
        | 'mro'
        | 'mvr'
        | 'mwk'
        | 'mxn'
        | 'myr'
        | 'mzn'
        | 'nad'
        | 'ngn'
        | 'nok'
        | 'npr'
        | 'nzd'
        | 'pgk'
        | 'php'
        | 'pkr'
        | 'pln'
        | 'qar'
        | 'ron'
        | 'rsd'
        | 'rub'
        | 'rwf'
        | 'sar'
        | 'sbd'
        | 'scr'
        | 'sek'
        | 'sgd'
        | 'sle'
        | 'sll'
        | 'sos'
        | 'szl'
        | 'thb'
        | 'tjs'
        | 'top'
        | 'try'
        | 'ttd'
        | 'tzs'
        | 'uah'
        | 'uzs'
        | 'vnd'
        | 'vuv'
        | 'wst'
        | 'xaf'
        | 'xcd'
        | 'yer'
        | 'zar'
        | 'zmw'
        | 'clp'
        | 'djf'
        | 'gnf'
        | 'ugx'
        | 'pyg'
        | 'xof'
        | 'xpf';

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;
    }

    export namespace Zuora {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }
    }
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

  /**
   * Integration details
   */
  integrationId?: string;
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
     * Id in the billing provider
     */
    billingId?: string;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: string };

    /**
     * Billing provider payment method id
     */
    paymentMethodId?: string;

    /**
     * The unique identifier for the customer in Salesforce integration
     */
    salesforceId?: string;

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
   * The billing currency of the customer
   */
  billingCurrency?:
    | 'usd'
    | 'aed'
    | 'all'
    | 'amd'
    | 'ang'
    | 'aud'
    | 'awg'
    | 'azn'
    | 'bam'
    | 'bbd'
    | 'bdt'
    | 'bgn'
    | 'bif'
    | 'bmd'
    | 'bnd'
    | 'bsd'
    | 'bwp'
    | 'byn'
    | 'bzd'
    | 'brl'
    | 'cad'
    | 'cdf'
    | 'chf'
    | 'cny'
    | 'czk'
    | 'dkk'
    | 'dop'
    | 'dzd'
    | 'egp'
    | 'etb'
    | 'eur'
    | 'fjd'
    | 'gbp'
    | 'gel'
    | 'gip'
    | 'gmd'
    | 'gyd'
    | 'hkd'
    | 'hrk'
    | 'htg'
    | 'idr'
    | 'ils'
    | 'inr'
    | 'isk'
    | 'jmd'
    | 'jpy'
    | 'kes'
    | 'kgs'
    | 'khr'
    | 'kmf'
    | 'krw'
    | 'kyd'
    | 'kzt'
    | 'lbp'
    | 'lkr'
    | 'lrd'
    | 'lsl'
    | 'mad'
    | 'mdl'
    | 'mga'
    | 'mkd'
    | 'mmk'
    | 'mnt'
    | 'mop'
    | 'mro'
    | 'mvr'
    | 'mwk'
    | 'mxn'
    | 'myr'
    | 'mzn'
    | 'nad'
    | 'ngn'
    | 'nok'
    | 'npr'
    | 'nzd'
    | 'pgk'
    | 'php'
    | 'pkr'
    | 'pln'
    | 'qar'
    | 'ron'
    | 'rsd'
    | 'rub'
    | 'rwf'
    | 'sar'
    | 'sbd'
    | 'scr'
    | 'sek'
    | 'sgd'
    | 'sle'
    | 'sll'
    | 'sos'
    | 'szl'
    | 'thb'
    | 'tjs'
    | 'top'
    | 'try'
    | 'ttd'
    | 'tzs'
    | 'uah'
    | 'uzs'
    | 'vnd'
    | 'vuv'
    | 'wst'
    | 'xaf'
    | 'xcd'
    | 'yer'
    | 'zar'
    | 'zmw'
    | 'clp'
    | 'djf'
    | 'gnf'
    | 'ugx'
    | 'pyg'
    | 'xof'
    | 'xpf'
    | null;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Customer level coupon
   */
  couponId?: (string & {}) | '' | null;

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
   * Language to use for this customer
   */
  language?: string | null;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the customer
   */
  name?: string | null;

  /**
   * Vendor-specific billing passthrough fields.
   */
  passthrough?: CustomerProvisionParams.Passthrough;

  /**
   * Timezone to use for this customer
   */
  timezone?: string | null;
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

  /**
   * Vendor-specific billing passthrough fields.
   */
  export interface Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    stripe?: Passthrough.Stripe;

    /**
     * Zuora-specific billing fields for the customer.
     */
    zuora?: Passthrough.Zuora;
  }

  export namespace Passthrough {
    /**
     * Stripe-specific billing fields for the customer.
     */
    export interface Stripe {
      /**
       * Physical address
       */
      billingAddress?: Stripe.BillingAddress;

      /**
       * Customer name
       */
      customerName?: string;

      /**
       * Invoice custom fields
       */
      invoiceCustomFields?: { [key: string]: string };

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;

      /**
       * Physical address
       */
      shippingAddress?: Stripe.ShippingAddress;

      /**
       * Tax IDs
       */
      taxIds?: Array<Stripe.TaxID>;
    }

    export namespace Stripe {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Physical address
       */
      export interface ShippingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }

      /**
       * Tax identifier with type and value for customer tax exemptions.
       */
      export interface TaxID {
        /**
         * The type of tax exemption identifier, such as VAT.
         */
        type: string;

        /**
         * The actual tax identifier value
         */
        value: string;
      }
    }

    /**
     * Zuora-specific billing fields for the customer.
     */
    export interface Zuora {
      /**
       * Physical address
       */
      billingAddress?: Zuora.BillingAddress;

      /**
       * Customers selected currency
       */
      currency?:
        | 'usd'
        | 'aed'
        | 'all'
        | 'amd'
        | 'ang'
        | 'aud'
        | 'awg'
        | 'azn'
        | 'bam'
        | 'bbd'
        | 'bdt'
        | 'bgn'
        | 'bif'
        | 'bmd'
        | 'bnd'
        | 'bsd'
        | 'bwp'
        | 'byn'
        | 'bzd'
        | 'brl'
        | 'cad'
        | 'cdf'
        | 'chf'
        | 'cny'
        | 'czk'
        | 'dkk'
        | 'dop'
        | 'dzd'
        | 'egp'
        | 'etb'
        | 'eur'
        | 'fjd'
        | 'gbp'
        | 'gel'
        | 'gip'
        | 'gmd'
        | 'gyd'
        | 'hkd'
        | 'hrk'
        | 'htg'
        | 'idr'
        | 'ils'
        | 'inr'
        | 'isk'
        | 'jmd'
        | 'jpy'
        | 'kes'
        | 'kgs'
        | 'khr'
        | 'kmf'
        | 'krw'
        | 'kyd'
        | 'kzt'
        | 'lbp'
        | 'lkr'
        | 'lrd'
        | 'lsl'
        | 'mad'
        | 'mdl'
        | 'mga'
        | 'mkd'
        | 'mmk'
        | 'mnt'
        | 'mop'
        | 'mro'
        | 'mvr'
        | 'mwk'
        | 'mxn'
        | 'myr'
        | 'mzn'
        | 'nad'
        | 'ngn'
        | 'nok'
        | 'npr'
        | 'nzd'
        | 'pgk'
        | 'php'
        | 'pkr'
        | 'pln'
        | 'qar'
        | 'ron'
        | 'rsd'
        | 'rub'
        | 'rwf'
        | 'sar'
        | 'sbd'
        | 'scr'
        | 'sek'
        | 'sgd'
        | 'sle'
        | 'sll'
        | 'sos'
        | 'szl'
        | 'thb'
        | 'tjs'
        | 'top'
        | 'try'
        | 'ttd'
        | 'tzs'
        | 'uah'
        | 'uzs'
        | 'vnd'
        | 'vuv'
        | 'wst'
        | 'xaf'
        | 'xcd'
        | 'yer'
        | 'zar'
        | 'zmw'
        | 'clp'
        | 'djf'
        | 'gnf'
        | 'ugx'
        | 'pyg'
        | 'xof'
        | 'xpf';

      /**
       * Additional metadata
       */
      metadata?: { [key: string]: string };

      /**
       * Billing provider payment method id, attached to this customer
       */
      paymentMethodId?: string;
    }

    export namespace Zuora {
      /**
       * Physical address
       */
      export interface BillingAddress {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code or name
         */
        country?: string;

        /**
         * Street address line 1
         */
        line1?: string;

        /**
         * Street address line 2
         */
        line2?: string;

        /**
         * Postal or ZIP code
         */
        postalCode?: string;

        /**
         * State or province
         */
        state?: string;
      }
    }
  }
}

export interface CustomerRetrieveEntitlementsParams {
  /**
   * Resource ID to scope entitlements to a specific resource
   */
  resourceId?: string;
}

Customers.PaymentMethod = PaymentMethod;
Customers.PromotionalEntitlements = PromotionalEntitlements;
Customers.Integrations = Integrations;

export declare namespace Customers {
  export {
    type CustomerIntegrationResponse as CustomerIntegrationResponse,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerImportResponse as CustomerImportResponse,
    type CustomerListResourcesResponse as CustomerListResourcesResponse,
    type CustomerRetrieveEntitlementsResponse as CustomerRetrieveEntitlementsResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerListResourcesResponsesMyCursorIDPage as CustomerListResourcesResponsesMyCursorIDPage,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerListResourcesParams as CustomerListResourcesParams,
    type CustomerProvisionParams as CustomerProvisionParams,
    type CustomerRetrieveEntitlementsParams as CustomerRetrieveEntitlementsParams,
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

  export {
    Integrations as Integrations,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListResponsesMyCursorIDPage as IntegrationListResponsesMyCursorIDPage,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationLinkParams as IntegrationLinkParams,
    type IntegrationUnlinkParams as IntegrationUnlinkParams,
  };
}
