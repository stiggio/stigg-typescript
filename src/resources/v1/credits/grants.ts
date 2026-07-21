// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to credit grants
 */
export class Grants extends APIResource {
  /**
   * Creates a new credit grant for a customer with specified amount, type, and
   * optional billing configuration.
   */
  create(params: GrantCreateParams, options?: RequestOptions): APIPromise<CreditGrantResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/credits/grants', {
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
   * Retrieves a paginated list of credit grants for a customer.
   */
  list(
    params: GrantListParams,
    options?: RequestOptions,
  ): PagePromise<GrantListResponsesMyCursorIDPage, GrantListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params;
    return this._client.getAPIList('/api/v1/credits/grants', MyCursorIDPage<GrantListResponse>, {
      query,
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
   * Voids an existing credit grant, preventing further consumption of the remaining
   * credits.
   */
  void(
    id: string,
    params: GrantVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreditGrantResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/credits/grants/${id}/void`, {
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

export type GrantListResponsesMyCursorIDPage = MyCursorIDPage<GrantListResponse>;

/**
 * Response object
 */
export interface CreditGrantResponse {
  /**
   * Credit grant object representing allocated credits for a customer
   */
  data: CreditGrantResponse.Data;
}

export namespace CreditGrantResponse {
  /**
   * Credit grant object representing allocated credits for a customer
   */
  export interface Data {
    /**
     * The unique readable identifier of the credit grant
     */
    id: string;

    /**
     * The total credits granted
     */
    amount: number;

    /**
     * An optional comment on the credit grant
     */
    comment: string | null;

    /**
     * The total credits consumed from this grant
     */
    consumedAmount: number;

    /**
     * The monetary cost of the credit grant
     */
    cost: Data.Cost;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The currency identifier for this grant
     */
    currencyId: string;

    /**
     * The customer ID this grant belongs to
     */
    customerId: string;

    /**
     * The display name of the credit grant
     */
    displayName: string;

    /**
     * The date when the credit grant becomes effective
     */
    effectiveAt: string;

    /**
     * The date when the credit grant expires
     */
    expireAt: string | null;

    /**
     * The type of credit grant (PAID, PROMOTIONAL, RECURRING)
     */
    grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT';

    /**
     * The billing invoice ID associated with this grant
     */
    invoiceId: string | null;

    /**
     * The latest invoice details for this grant
     */
    latestInvoice: Data.LatestInvoice | null;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * The payment collection status
     */
    paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED';

    /**
     * The priority of the credit grant (lower number = higher priority)
     */
    priority: number;

    /**
     * The resource ID this grant is scoped to
     */
    resourceId: string | null;

    /**
     * The source type of the grant (PRICE, PLAN_ENTITLEMENT, ADDON_ENTITLEMENT)
     */
    sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT' | null;

    /**
     * The effective status of the credit grant
     */
    status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED';

    /**
     * The synchronization states of the entity with external systems
     */
    syncStates: Array<Data.SyncState> | null;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * The date when the credit grant was voided
     */
    voidedAt: string | null;
  }

  export namespace Data {
    /**
     * The monetary cost of the credit grant
     */
    export interface Cost {
      /**
       * The cost amount
       */
      amount: number;

      /**
       * The currency code
       */
      currency: string;
    }

    /**
     * The latest invoice details for this grant
     */
    export interface LatestInvoice {
      /**
       * The billing provider invoice ID
       */
      billingId: string;

      /**
       * The billing reason for the invoice
       */
      billingReason: 'MANUAL' | 'OTHER' | null;

      /**
       * The invoice creation date
       */
      createdAt: string;

      /**
       * The invoice currency
       */
      currency: string | null;

      /**
       * The invoice due date
       */
      dueDate: string | null;

      /**
       * Error message if payment failed
       */
      errorMessage: string | null;

      /**
       * The payment URL for settling the invoice
       */
      paymentUrl: string | null;

      /**
       * The PDF URL of the invoice
       */
      pdfUrl: string | null;

      /**
       * Whether the invoice requires user action
       */
      requiresAction: boolean;

      /**
       * The invoice status
       */
      status: 'OPEN' | 'PAID' | 'CANCELED';

      /**
       * The subtotal amount before tax
       */
      subTotal: number | null;

      /**
       * The tax amount
       */
      tax: number | null;

      /**
       * The total amount including tax
       */
      total: number | null;

      /**
       * The invoice last update date
       */
      updatedAt: string;
    }

    export interface SyncState {
      /**
       * Status of the integration sync
       */
      status: 'PENDING' | 'ERROR' | 'SUCCESS' | 'NO_SYNC_REQUIRED';

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
        | 'PREQUEL'
        | 'AIRWALLEX'
        | 'STRIPE_INVOICING';
    }
  }
}

/**
 * Credit grant object representing allocated credits for a customer
 */
export interface GrantListResponse {
  /**
   * The unique readable identifier of the credit grant
   */
  id: string;

  /**
   * The total credits granted
   */
  amount: number;

  /**
   * An optional comment on the credit grant
   */
  comment: string | null;

  /**
   * The total credits consumed from this grant
   */
  consumedAmount: number;

  /**
   * The monetary cost of the credit grant
   */
  cost: GrantListResponse.Cost;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * The currency identifier for this grant
   */
  currencyId: string;

  /**
   * The customer ID this grant belongs to
   */
  customerId: string;

  /**
   * The display name of the credit grant
   */
  displayName: string;

  /**
   * The date when the credit grant becomes effective
   */
  effectiveAt: string;

  /**
   * The date when the credit grant expires
   */
  expireAt: string | null;

  /**
   * The type of credit grant (PAID, PROMOTIONAL, RECURRING)
   */
  grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT';

  /**
   * The billing invoice ID associated with this grant
   */
  invoiceId: string | null;

  /**
   * The latest invoice details for this grant
   */
  latestInvoice: GrantListResponse.LatestInvoice | null;

  /**
   * Metadata associated with the entity
   */
  metadata: { [key: string]: string };

  /**
   * The payment collection status
   */
  paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED';

  /**
   * The priority of the credit grant (lower number = higher priority)
   */
  priority: number;

  /**
   * The resource ID this grant is scoped to
   */
  resourceId: string | null;

  /**
   * The source type of the grant (PRICE, PLAN_ENTITLEMENT, ADDON_ENTITLEMENT)
   */
  sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT' | null;

  /**
   * The effective status of the credit grant
   */
  status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED';

  /**
   * The synchronization states of the entity with external systems
   */
  syncStates: Array<GrantListResponse.SyncState> | null;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * The date when the credit grant was voided
   */
  voidedAt: string | null;
}

export namespace GrantListResponse {
  /**
   * The monetary cost of the credit grant
   */
  export interface Cost {
    /**
     * The cost amount
     */
    amount: number;

    /**
     * The currency code
     */
    currency: string;
  }

  /**
   * The latest invoice details for this grant
   */
  export interface LatestInvoice {
    /**
     * The billing provider invoice ID
     */
    billingId: string;

    /**
     * The billing reason for the invoice
     */
    billingReason: 'MANUAL' | 'OTHER' | null;

    /**
     * The invoice creation date
     */
    createdAt: string;

    /**
     * The invoice currency
     */
    currency: string | null;

    /**
     * The invoice due date
     */
    dueDate: string | null;

    /**
     * Error message if payment failed
     */
    errorMessage: string | null;

    /**
     * The payment URL for settling the invoice
     */
    paymentUrl: string | null;

    /**
     * The PDF URL of the invoice
     */
    pdfUrl: string | null;

    /**
     * Whether the invoice requires user action
     */
    requiresAction: boolean;

    /**
     * The invoice status
     */
    status: 'OPEN' | 'PAID' | 'CANCELED';

    /**
     * The subtotal amount before tax
     */
    subTotal: number | null;

    /**
     * The tax amount
     */
    tax: number | null;

    /**
     * The total amount including tax
     */
    total: number | null;

    /**
     * The invoice last update date
     */
    updatedAt: string;
  }

  export interface SyncState {
    /**
     * Status of the integration sync
     */
    status: 'PENDING' | 'ERROR' | 'SUCCESS' | 'NO_SYNC_REQUIRED';

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
      | 'PREQUEL'
      | 'AIRWALLEX'
      | 'STRIPE_INVOICING';
  }
}

export interface GrantCreateParams {
  /**
   * Body param: The credit amount to grant
   */
  amount: number;

  /**
   * Body param: The credit currency ID (required)
   */
  currencyId: string;

  /**
   * Body param: The customer ID to grant credits to (required)
   */
  customerId: string;

  /**
   * Body param: The display name for the credit grant
   */
  displayName: string;

  /**
   * Body param: The type of credit grant (PAID, PROMOTIONAL)
   */
  grantType: 'PAID' | 'PROMOTIONAL';

  /**
   * Body param: Whether to wait for payment confirmation before returning (default:
   * true)
   */
  awaitPaymentConfirmation?: boolean;

  /**
   * Body param: Billing information for the credit grant
   */
  billingInformation?: GrantCreateParams.BillingInformation;

  /**
   * Body param: An optional comment on the credit grant
   */
  comment?: string;

  /**
   * Body param: The monetary cost of the credit grant
   */
  cost?: GrantCreateParams.Cost;

  /**
   * Body param: The date when the credit grant becomes effective
   */
  effectiveAt?: string;

  /**
   * Body param: The date when the credit grant expires
   */
  expireAt?: string;

  /**
   * Body param: Additional metadata for the credit grant
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The payment collection method (CHARGE, INVOICE, NONE)
   */
  paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE';

  /**
   * Body param: The priority of the credit grant (lower number = higher priority)
   */
  priority?: number;

  /**
   * Body param: The resource ID to scope the grant to
   */
  resourceId?: string;

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

export namespace GrantCreateParams {
  /**
   * Billing information for the credit grant
   */
  export interface BillingInformation {
    /**
     * The billing address
     */
    billingAddress?: BillingInformation.BillingAddress;

    /**
     * Days until the invoice is due
     */
    invoiceDaysUntilDue?: number;

    /**
     * Whether the invoice is already paid
     */
    isInvoicePaid?: boolean;
  }

  export namespace BillingInformation {
    /**
     * The billing address
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

  /**
   * The monetary cost of the credit grant
   */
  export interface Cost {
    /**
     * The price amount
     */
    amount: number;

    /**
     * ISO 4217 currency code
     */
    currency:
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
  }
}

export interface GrantListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by customer ID (required)
   */
  customerId: string;

  /**
   * Query param: Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: GrantListParams.CreatedAt;

  /**
   * Query param: Filter by currency ID
   */
  currencyId?: string;

  /**
   * Query param: Filter by resource ID. When omitted, only grants without a resource
   * are returned
   */
  resourceId?: string;

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

export namespace GrantListParams {
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

export interface GrantVoidParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export declare namespace Grants {
  export {
    type CreditGrantResponse as CreditGrantResponse,
    type GrantListResponse as GrantListResponse,
    type GrantListResponsesMyCursorIDPage as GrantListResponsesMyCursorIDPage,
    type GrantCreateParams as GrantCreateParams,
    type GrantListParams as GrantListParams,
    type GrantVoidParams as GrantVoidParams,
  };
}
