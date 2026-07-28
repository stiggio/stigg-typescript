// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contracts extends APIResource {
  /**
   * Creates a contract for a customer together with all of its (custom)
   * subscriptions in a single atomic operation. Every new subscription is created
   * inside one transaction — any validation or creation failure rolls the whole
   * contract back. Each subscription entry is either a new subscription to create or
   * a reference to an existing custom subscription. Returns the created contract.
   */
  create(params: ContractCreateParams, options?: RequestOptions): APIPromise<ContractCreateResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/contracts', {
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
   * Retrieves a single contract by its ID, enriched with a preview of its upcoming
   * (next) invoice when one is available. Returns 404 when no contract with that ID
   * exists in the environment.
   */
  retrieve(
    id: string,
    params: ContractRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractRetrieveResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/contracts/${id}`, {
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
   * Updates a contract's metadata (name, PO number, activation dates) and optionally
   * re-links its subscriptions. Best-effort re-syncs the change to the connected
   * billing provider.
   */
  update(
    id: string,
    params: ContractUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContractUpdateResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/contracts/${id}`, {
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
   * Retrieves a cursor-paginated list of contracts in the environment, fetched live
   * from the connected billing provider. Each contract is enriched with a preview of
   * its upcoming (next) invoice when one is available. Returns an empty list when no
   * billing provider is connected. Supports filtering by customer external ID,
   * state, and name.
   */
  list(
    params: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContractListResponsesMyCursorIDPage, ContractListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/contracts', MyCursorIDPage<ContractListResponse>, {
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
   * Deletes a contract: cancels the contract in the connected billing provider and
   * cancels every subscription linked to it.
   */
  delete(
    id: string,
    params: ContractDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractDeleteResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/contracts/${id}/archive`, {
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

export type ContractListResponsesMyCursorIDPage = MyCursorIDPage<ContractListResponse>;

/**
 * Response object
 */
export interface ContractCreateResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  data: ContractCreateResponse.Data;
}

export namespace ContractCreateResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  export interface Data {
    /**
     * The persisted Stigg contract id (matches a subscription’s contractId; present
     * for Stigg-managed contracts)
     */
    id: string | null;

    /**
     * The date the contract activation ends
     */
    activationEndDate: string | null;

    /**
     * The date the contract becomes active
     */
    activationStartDate: string | null;

    /**
     * The billing provider (Received) contract ID; null until the contract has synced
     * to the billing provider
     */
    billingId: string | null;

    /**
     * The Stigg contract ref ID (the key used to fetch/update/delete this contract)
     */
    contractId: string;

    /**
     * The date the contract was created
     */
    createdAt: string | null;

    /**
     * The external identifier of the customer the contract belongs to
     */
    customerExternalId: string | null;

    /**
     * The external identifier of the contract
     */
    externalId: string;

    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    latestInvoice: Data.LatestInvoice | null;

    /**
     * The contract name (the purchase-order number when set, otherwise the
     * contract/customer name)
     */
    name: string | null;

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    nextInvoice: Data.NextInvoice | null;

    /**
     * Purchase-order number, when set on the contract
     */
    poNumber: string | null;

    /**
     * The Stigg contract ref ID (present for Stigg-managed contracts; the key used to
     * update/delete)
     */
    refId: string | null;

    /**
     * The current state of the contract
     */
    state: 'DRAFT' | 'ACTIVE' | 'CANCELED' | 'END_BILLING';

    /**
     * The custom subscriptions attached to this contract (empty when none)
     */
    subscriptions: Array<Data.Subscription>;
  }

  export namespace Data {
    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    export interface LatestInvoice {
      /**
       * Invoice billing ID
       */
      billingId: string;

      /**
       * Invoice creation date
       */
      createdAt: string;

      /**
       * Whether payment requires action
       */
      requiresAction: boolean;

      /**
       * Invoice status
       */
      status: 'OPEN' | 'CANCELED' | 'PAID';

      /**
       * Amount due
       */
      amountDue?: number | null;

      /**
       * Billing reason
       */
      billingReason?:
        | 'BILLING_CYCLE'
        | 'SUBSCRIPTION_CREATION'
        | 'SUBSCRIPTION_UPDATE'
        | 'MANUAL'
        | 'MINIMUM_INVOICE_AMOUNT_EXCEEDED'
        | 'OTHER'
        | null;

      /**
       * Invoice currency
       */
      currency?: string | null;

      /**
       * Invoice PDF URL
       */
      pdfUrl?: string | null;

      /**
       * Total amount
       */
      total?: number | null;
    }

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    export interface NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      amount: NextInvoice.Amount;

      /**
       * The date the upcoming invoice is due
       */
      dueDate: string | null;

      /**
       * The end of the billing period the upcoming invoice covers
       */
      periodEnd: string | null;

      /**
       * The start of the billing period the upcoming invoice covers
       */
      periodStart: string | null;
    }

    export namespace NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      export interface Amount {
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

    /**
     * A custom subscription attached to a contract.
     */
    export interface Subscription {
      /**
       * Display name of the subscription plan
       */
      planDisplayName: string | null;

      /**
       * Display name of the product the subscription plan belongs to
       */
      productDisplayName: string | null;

      /**
       * The subscription ref ID (use it to deep-link to the subscription)
       */
      subscriptionId: string;
    }
  }
}

/**
 * Response object
 */
export interface ContractRetrieveResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  data: ContractRetrieveResponse.Data;
}

export namespace ContractRetrieveResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  export interface Data {
    /**
     * The persisted Stigg contract id (matches a subscription’s contractId; present
     * for Stigg-managed contracts)
     */
    id: string | null;

    /**
     * The date the contract activation ends
     */
    activationEndDate: string | null;

    /**
     * The date the contract becomes active
     */
    activationStartDate: string | null;

    /**
     * The billing provider (Received) contract ID; null until the contract has synced
     * to the billing provider
     */
    billingId: string | null;

    /**
     * The Stigg contract ref ID (the key used to fetch/update/delete this contract)
     */
    contractId: string;

    /**
     * The date the contract was created
     */
    createdAt: string | null;

    /**
     * The external identifier of the customer the contract belongs to
     */
    customerExternalId: string | null;

    /**
     * The external identifier of the contract
     */
    externalId: string;

    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    latestInvoice: Data.LatestInvoice | null;

    /**
     * The contract name (the purchase-order number when set, otherwise the
     * contract/customer name)
     */
    name: string | null;

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    nextInvoice: Data.NextInvoice | null;

    /**
     * Purchase-order number, when set on the contract
     */
    poNumber: string | null;

    /**
     * The Stigg contract ref ID (present for Stigg-managed contracts; the key used to
     * update/delete)
     */
    refId: string | null;

    /**
     * The current state of the contract
     */
    state: 'DRAFT' | 'ACTIVE' | 'CANCELED' | 'END_BILLING';

    /**
     * The custom subscriptions attached to this contract (empty when none)
     */
    subscriptions: Array<Data.Subscription>;
  }

  export namespace Data {
    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    export interface LatestInvoice {
      /**
       * Invoice billing ID
       */
      billingId: string;

      /**
       * Invoice creation date
       */
      createdAt: string;

      /**
       * Whether payment requires action
       */
      requiresAction: boolean;

      /**
       * Invoice status
       */
      status: 'OPEN' | 'CANCELED' | 'PAID';

      /**
       * Amount due
       */
      amountDue?: number | null;

      /**
       * Billing reason
       */
      billingReason?:
        | 'BILLING_CYCLE'
        | 'SUBSCRIPTION_CREATION'
        | 'SUBSCRIPTION_UPDATE'
        | 'MANUAL'
        | 'MINIMUM_INVOICE_AMOUNT_EXCEEDED'
        | 'OTHER'
        | null;

      /**
       * Invoice currency
       */
      currency?: string | null;

      /**
       * Invoice PDF URL
       */
      pdfUrl?: string | null;

      /**
       * Total amount
       */
      total?: number | null;
    }

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    export interface NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      amount: NextInvoice.Amount;

      /**
       * The date the upcoming invoice is due
       */
      dueDate: string | null;

      /**
       * The end of the billing period the upcoming invoice covers
       */
      periodEnd: string | null;

      /**
       * The start of the billing period the upcoming invoice covers
       */
      periodStart: string | null;
    }

    export namespace NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      export interface Amount {
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

    /**
     * A custom subscription attached to a contract.
     */
    export interface Subscription {
      /**
       * Display name of the subscription plan
       */
      planDisplayName: string | null;

      /**
       * Display name of the product the subscription plan belongs to
       */
      productDisplayName: string | null;

      /**
       * The subscription ref ID (use it to deep-link to the subscription)
       */
      subscriptionId: string;
    }
  }
}

/**
 * Response object
 */
export interface ContractUpdateResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  data: ContractUpdateResponse.Data;
}

export namespace ContractUpdateResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  export interface Data {
    /**
     * The persisted Stigg contract id (matches a subscription’s contractId; present
     * for Stigg-managed contracts)
     */
    id: string | null;

    /**
     * The date the contract activation ends
     */
    activationEndDate: string | null;

    /**
     * The date the contract becomes active
     */
    activationStartDate: string | null;

    /**
     * The billing provider (Received) contract ID; null until the contract has synced
     * to the billing provider
     */
    billingId: string | null;

    /**
     * The Stigg contract ref ID (the key used to fetch/update/delete this contract)
     */
    contractId: string;

    /**
     * The date the contract was created
     */
    createdAt: string | null;

    /**
     * The external identifier of the customer the contract belongs to
     */
    customerExternalId: string | null;

    /**
     * The external identifier of the contract
     */
    externalId: string;

    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    latestInvoice: Data.LatestInvoice | null;

    /**
     * The contract name (the purchase-order number when set, otherwise the
     * contract/customer name)
     */
    name: string | null;

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    nextInvoice: Data.NextInvoice | null;

    /**
     * Purchase-order number, when set on the contract
     */
    poNumber: string | null;

    /**
     * The Stigg contract ref ID (present for Stigg-managed contracts; the key used to
     * update/delete)
     */
    refId: string | null;

    /**
     * The current state of the contract
     */
    state: 'DRAFT' | 'ACTIVE' | 'CANCELED' | 'END_BILLING';

    /**
     * The custom subscriptions attached to this contract (empty when none)
     */
    subscriptions: Array<Data.Subscription>;
  }

  export namespace Data {
    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    export interface LatestInvoice {
      /**
       * Invoice billing ID
       */
      billingId: string;

      /**
       * Invoice creation date
       */
      createdAt: string;

      /**
       * Whether payment requires action
       */
      requiresAction: boolean;

      /**
       * Invoice status
       */
      status: 'OPEN' | 'CANCELED' | 'PAID';

      /**
       * Amount due
       */
      amountDue?: number | null;

      /**
       * Billing reason
       */
      billingReason?:
        | 'BILLING_CYCLE'
        | 'SUBSCRIPTION_CREATION'
        | 'SUBSCRIPTION_UPDATE'
        | 'MANUAL'
        | 'MINIMUM_INVOICE_AMOUNT_EXCEEDED'
        | 'OTHER'
        | null;

      /**
       * Invoice currency
       */
      currency?: string | null;

      /**
       * Invoice PDF URL
       */
      pdfUrl?: string | null;

      /**
       * Total amount
       */
      total?: number | null;
    }

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    export interface NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      amount: NextInvoice.Amount;

      /**
       * The date the upcoming invoice is due
       */
      dueDate: string | null;

      /**
       * The end of the billing period the upcoming invoice covers
       */
      periodEnd: string | null;

      /**
       * The start of the billing period the upcoming invoice covers
       */
      periodStart: string | null;
    }

    export namespace NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      export interface Amount {
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

    /**
     * A custom subscription attached to a contract.
     */
    export interface Subscription {
      /**
       * Display name of the subscription plan
       */
      planDisplayName: string | null;

      /**
       * Display name of the product the subscription plan belongs to
       */
      productDisplayName: string | null;

      /**
       * The subscription ref ID (use it to deep-link to the subscription)
       */
      subscriptionId: string;
    }
  }
}

/**
 * A billing contract as reported by the connected billing provider.
 */
export interface ContractListResponse {
  /**
   * The persisted Stigg contract id (matches a subscription’s contractId; present
   * for Stigg-managed contracts)
   */
  id: string | null;

  /**
   * The date the contract activation ends
   */
  activationEndDate: string | null;

  /**
   * The date the contract becomes active
   */
  activationStartDate: string | null;

  /**
   * The billing provider (Received) contract ID; null until the contract has synced
   * to the billing provider
   */
  billingId: string | null;

  /**
   * The Stigg contract ref ID (the key used to fetch/update/delete this contract)
   */
  contractId: string;

  /**
   * The date the contract was created
   */
  createdAt: string | null;

  /**
   * The external identifier of the customer the contract belongs to
   */
  customerExternalId: string | null;

  /**
   * The external identifier of the contract
   */
  externalId: string;

  /**
   * The most recent non-draft invoice for this contract (open, paid, or canceled),
   * or null when none exists
   */
  latestInvoice: ContractListResponse.LatestInvoice | null;

  /**
   * The contract name (the purchase-order number when set, otherwise the
   * contract/customer name)
   */
  name: string | null;

  /**
   * A preview of the contract's upcoming invoice, or null when none is available
   */
  nextInvoice: ContractListResponse.NextInvoice | null;

  /**
   * Purchase-order number, when set on the contract
   */
  poNumber: string | null;

  /**
   * The Stigg contract ref ID (present for Stigg-managed contracts; the key used to
   * update/delete)
   */
  refId: string | null;

  /**
   * The current state of the contract
   */
  state: 'DRAFT' | 'ACTIVE' | 'CANCELED' | 'END_BILLING';

  /**
   * The custom subscriptions attached to this contract (empty when none)
   */
  subscriptions: Array<ContractListResponse.Subscription>;
}

export namespace ContractListResponse {
  /**
   * The most recent non-draft invoice for this contract (open, paid, or canceled),
   * or null when none exists
   */
  export interface LatestInvoice {
    /**
     * Invoice billing ID
     */
    billingId: string;

    /**
     * Invoice creation date
     */
    createdAt: string;

    /**
     * Whether payment requires action
     */
    requiresAction: boolean;

    /**
     * Invoice status
     */
    status: 'OPEN' | 'CANCELED' | 'PAID';

    /**
     * Amount due
     */
    amountDue?: number | null;

    /**
     * Billing reason
     */
    billingReason?:
      | 'BILLING_CYCLE'
      | 'SUBSCRIPTION_CREATION'
      | 'SUBSCRIPTION_UPDATE'
      | 'MANUAL'
      | 'MINIMUM_INVOICE_AMOUNT_EXCEEDED'
      | 'OTHER'
      | null;

    /**
     * Invoice currency
     */
    currency?: string | null;

    /**
     * Invoice PDF URL
     */
    pdfUrl?: string | null;

    /**
     * Total amount
     */
    total?: number | null;
  }

  /**
   * A preview of the contract's upcoming invoice, or null when none is available
   */
  export interface NextInvoice {
    /**
     * The total amount of the upcoming invoice
     */
    amount: NextInvoice.Amount;

    /**
     * The date the upcoming invoice is due
     */
    dueDate: string | null;

    /**
     * The end of the billing period the upcoming invoice covers
     */
    periodEnd: string | null;

    /**
     * The start of the billing period the upcoming invoice covers
     */
    periodStart: string | null;
  }

  export namespace NextInvoice {
    /**
     * The total amount of the upcoming invoice
     */
    export interface Amount {
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

  /**
   * A custom subscription attached to a contract.
   */
  export interface Subscription {
    /**
     * Display name of the subscription plan
     */
    planDisplayName: string | null;

    /**
     * Display name of the product the subscription plan belongs to
     */
    productDisplayName: string | null;

    /**
     * The subscription ref ID (use it to deep-link to the subscription)
     */
    subscriptionId: string;
  }
}

/**
 * Response object
 */
export interface ContractDeleteResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  data: ContractDeleteResponse.Data;
}

export namespace ContractDeleteResponse {
  /**
   * A billing contract as reported by the connected billing provider.
   */
  export interface Data {
    /**
     * The persisted Stigg contract id (matches a subscription’s contractId; present
     * for Stigg-managed contracts)
     */
    id: string | null;

    /**
     * The date the contract activation ends
     */
    activationEndDate: string | null;

    /**
     * The date the contract becomes active
     */
    activationStartDate: string | null;

    /**
     * The billing provider (Received) contract ID; null until the contract has synced
     * to the billing provider
     */
    billingId: string | null;

    /**
     * The Stigg contract ref ID (the key used to fetch/update/delete this contract)
     */
    contractId: string;

    /**
     * The date the contract was created
     */
    createdAt: string | null;

    /**
     * The external identifier of the customer the contract belongs to
     */
    customerExternalId: string | null;

    /**
     * The external identifier of the contract
     */
    externalId: string;

    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    latestInvoice: Data.LatestInvoice | null;

    /**
     * The contract name (the purchase-order number when set, otherwise the
     * contract/customer name)
     */
    name: string | null;

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    nextInvoice: Data.NextInvoice | null;

    /**
     * Purchase-order number, when set on the contract
     */
    poNumber: string | null;

    /**
     * The Stigg contract ref ID (present for Stigg-managed contracts; the key used to
     * update/delete)
     */
    refId: string | null;

    /**
     * The current state of the contract
     */
    state: 'DRAFT' | 'ACTIVE' | 'CANCELED' | 'END_BILLING';

    /**
     * The custom subscriptions attached to this contract (empty when none)
     */
    subscriptions: Array<Data.Subscription>;
  }

  export namespace Data {
    /**
     * The most recent non-draft invoice for this contract (open, paid, or canceled),
     * or null when none exists
     */
    export interface LatestInvoice {
      /**
       * Invoice billing ID
       */
      billingId: string;

      /**
       * Invoice creation date
       */
      createdAt: string;

      /**
       * Whether payment requires action
       */
      requiresAction: boolean;

      /**
       * Invoice status
       */
      status: 'OPEN' | 'CANCELED' | 'PAID';

      /**
       * Amount due
       */
      amountDue?: number | null;

      /**
       * Billing reason
       */
      billingReason?:
        | 'BILLING_CYCLE'
        | 'SUBSCRIPTION_CREATION'
        | 'SUBSCRIPTION_UPDATE'
        | 'MANUAL'
        | 'MINIMUM_INVOICE_AMOUNT_EXCEEDED'
        | 'OTHER'
        | null;

      /**
       * Invoice currency
       */
      currency?: string | null;

      /**
       * Invoice PDF URL
       */
      pdfUrl?: string | null;

      /**
       * Total amount
       */
      total?: number | null;
    }

    /**
     * A preview of the contract's upcoming invoice, or null when none is available
     */
    export interface NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      amount: NextInvoice.Amount;

      /**
       * The date the upcoming invoice is due
       */
      dueDate: string | null;

      /**
       * The end of the billing period the upcoming invoice covers
       */
      periodEnd: string | null;

      /**
       * The start of the billing period the upcoming invoice covers
       */
      periodStart: string | null;
    }

    export namespace NextInvoice {
      /**
       * The total amount of the upcoming invoice
       */
      export interface Amount {
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

    /**
     * A custom subscription attached to a contract.
     */
    export interface Subscription {
      /**
       * Display name of the subscription plan
       */
      planDisplayName: string | null;

      /**
       * Display name of the product the subscription plan belongs to
       */
      productDisplayName: string | null;

      /**
       * The subscription ref ID (use it to deep-link to the subscription)
       */
      subscriptionId: string;
    }
  }
}

export interface ContractCreateParams {
  /**
   * Body param: The customer ref ID the contract belongs to
   */
  customerId: string;

  /**
   * Body param: The subscriptions to attach to the contract (must be non-empty).
   * Each entry is either a new subscription to create or a reference to an existing
   * custom subscription.
   */
  subscriptions: Array<ContractCreateParams.Subscription>;

  /**
   * Body param: Optional contract activation end date
   */
  activationEndDate?: string;

  /**
   * Body param: Optional contract activation start date
   */
  activationStartDate?: string;

  /**
   * Body param: Optional contract name
   */
  name?: string | null;

  /**
   * Body param: Optional purchase-order number
   */
  poNumber?: string | null;

  /**
   * Body param: Whether to set up billing for the contract by creating a billing
   * contract in the connected billing provider. When false, the contract only
   * provisions access (grants entitlements) and no billing contract is created.
   * Defaults to true.
   */
  setupBilling?: boolean;

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

export namespace ContractCreateParams {
  /**
   * A single subscription on a contract: exactly one of newSubscription or
   * existingSubscriptionId must be set.
   */
  export interface Subscription {
    /**
     * The subscription ref ID of an already-created custom subscription to link
     */
    existingSubscriptionId?: string;

    /**
     * A new subscription to create, using the same body the provision-subscription
     * endpoint accepts
     */
    newSubscription?: Subscription.NewSubscription;
  }

  export namespace Subscription {
    /**
     * A new subscription to create, using the same body the provision-subscription
     * endpoint accepts
     */
    export interface NewSubscription {
      /**
       * Customer ID to provision the subscription for
       */
      customerId: string;

      /**
       * Plan ID to provision
       */
      planId: string;

      /**
       * Unique identifier for the subscription
       */
      id?: string;

      addons?: Array<NewSubscription.Addon>;

      /**
       * Coupon configuration
       */
      appliedCoupon?: NewSubscription.AppliedCoupon;

      /**
       * Whether to wait for payment confirmation before returning the subscription
       */
      awaitPaymentConfirmation?: boolean;

      /**
       * The ISO 3166-1 alpha-2 country code for billing
       */
      billingCountryCode?: string | null;

      /**
       * Billing cycle anchor behavior for the subscription
       */
      billingCycleAnchor?: 'UNCHANGED' | 'NOW';

      /**
       * External billing system identifier
       */
      billingId?: string | null;

      billingInformation?: NewSubscription.BillingInformation;

      /**
       * Billing period (MONTHLY or ANNUALLY)
       */
      billingPeriod?: 'MONTHLY' | 'ANNUALLY';

      budget?: NewSubscription.Budget | null;

      /**
       * Subscription cancellation date
       */
      cancellationDate?: string;

      charges?: Array<NewSubscription.Charge>;

      /**
       * Checkout page configuration for payment collection
       */
      checkoutOptions?: NewSubscription.CheckoutOptions;

      entitlements?: Array<NewSubscription.Feature | NewSubscription.Credit>;

      /**
       * Additional metadata for the subscription
       */
      metadata?: { [key: string]: string };

      /**
       * Minimum spend amount
       */
      minimumSpend?: NewSubscription.MinimumSpend | null;

      /**
       * Optional paying customer ID for split billing scenarios
       */
      payingCustomerId?: string | null;

      /**
       * How payments should be collected for this subscription
       */
      paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE';

      priceOverrides?: Array<NewSubscription.PriceOverride>;

      /**
       * Optional resource ID for multi-instance subscriptions
       */
      resourceId?: string | null;

      /**
       * Salesforce ID
       */
      salesforceId?: string | null;

      /**
       * Strategy for scheduling subscription changes
       */
      scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';

      /**
       * Subscription start date
       */
      startDate?: string;

      /**
       * Trial period override settings
       */
      trialOverrideConfiguration?: NewSubscription.TrialOverrideConfiguration;

      /**
       * Unit quantity for per-unit pricing. Minimum is 0 (zero is allowed).
       */
      unitQuantity?: number;
    }

    export namespace NewSubscription {
      /**
       * Addon configuration
       */
      export interface Addon {
        /**
         * Addon ID
         */
        id: string;

        /**
         * Number of addon instances
         */
        quantity: number;
      }

      /**
       * Coupon configuration
       */
      export interface AppliedCoupon {
        /**
         * Billing provider coupon ID
         */
        billingCouponId?: string;

        /**
         * Coupon timing configuration
         */
        configuration?: AppliedCoupon.Configuration;

        /**
         * Stigg coupon ID
         */
        couponId?: string;

        /**
         * Ad-hoc discount configuration
         */
        discount?: AppliedCoupon.Discount;

        /**
         * Promotion code to apply
         */
        promotionCode?: string;
      }

      export namespace AppliedCoupon {
        /**
         * Coupon timing configuration
         */
        export interface Configuration {
          /**
           * Coupon start date
           */
          startDate?: string;
        }

        /**
         * Ad-hoc discount configuration
         */
        export interface Discount {
          /**
           * Fixed amounts off by currency
           */
          amountsOff?: Array<Discount.AmountsOff> | null;

          /**
           * Ad-hoc discount
           */
          description?: string;

          /**
           * Duration in months
           */
          durationInMonths?: number;

          /**
           * Discount name
           */
          name?: string;

          /**
           * Percentage discount
           */
          percentOff?: number;
        }

        export namespace Discount {
          export interface AmountsOff {
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
      }

      export interface BillingInformation {
        /**
         * Billing address for the subscription
         */
        billingAddress?: BillingInformation.BillingAddress;

        /**
         * Stripe Connect account to charge on behalf of
         */
        chargeOnBehalfOfAccount?: string | null;

        /**
         * Billing integration identifier
         */
        integrationId?: string | null;

        /**
         * Number of days until invoice is due
         */
        invoiceDaysUntilDue?: number;

        /**
         * Whether the subscription is backdated
         */
        isBackdated?: boolean;

        /**
         * Whether the invoice is marked as paid
         */
        isInvoicePaid?: boolean;

        /**
         * Additional metadata for the subscription
         */
        metadata?: { [key: string]: string };

        /**
         * How to handle proration for billing changes
         */
        prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE';

        /**
         * Customer tax identification numbers
         */
        taxIds?: Array<BillingInformation.TaxID>;

        /**
         * Tax percentage (0-100)
         */
        taxPercentage?: number;

        /**
         * Tax rate identifiers to apply
         */
        taxRateIds?: Array<string>;
      }

      export namespace BillingInformation {
        /**
         * Billing address for the subscription
         */
        export interface BillingAddress {
          city?: string;

          country?: string;

          line1?: string;

          line2?: string;

          postalCode?: string;

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

      export interface Budget {
        /**
         * Whether the budget is a soft limit
         */
        hasSoftLimit: boolean;

        /**
         * Maximum spending limit
         */
        limit: number;
      }

      /**
       * A charge selection for a subscription (references a catalog charge with a
       * quantity).
       */
      export interface Charge {
        /**
         * Charge ID
         */
        id: string;

        /**
         * Charge quantity. Minimum is 0 (zero is allowed).
         */
        quantity: number;

        /**
         * Charge type
         */
        type: 'FEATURE' | 'CREDIT';
      }

      /**
       * Checkout page configuration for payment collection
       */
      export interface CheckoutOptions {
        /**
         * URL to redirect to if checkout is canceled
         */
        cancelUrl: string;

        /**
         * URL to redirect to after successful checkout
         */
        successUrl: string;

        /**
         * Allow promotional codes during checkout
         */
        allowPromoCodes?: boolean;

        /**
         * Allow tax ID collection during checkout
         */
        allowTaxIdCollection?: boolean;

        /**
         * Collect billing address during checkout
         */
        collectBillingAddress?: boolean;

        /**
         * Collect phone number during checkout
         */
        collectPhoneNumber?: boolean;

        /**
         * Optional reference ID for the checkout session
         */
        referenceId?: string | null;
      }

      /**
       * Feature entitlement configuration for a subscription
       */
      export interface Feature {
        /**
         * The feature ID to attach the entitlement to
         */
        id: string;

        /**
         * SubscriptionFeatureEntitlementRequest
         */
        type: 'FEATURE';

        /**
         * Whether the usage limit is a soft limit
         */
        hasSoftLimit?: boolean;

        /**
         * Whether usage is unlimited
         */
        hasUnlimitedUsage?: boolean;

        /**
         * Configuration for monthly reset period
         */
        monthlyResetPeriodConfiguration?: Feature.MonthlyResetPeriodConfiguration | null;

        /**
         * Period at which usage resets
         */
        resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

        /**
         * Maximum allowed usage for the feature
         */
        usageLimit?: number;

        /**
         * Configuration for weekly reset period
         */
        weeklyResetPeriodConfiguration?: Feature.WeeklyResetPeriodConfiguration | null;

        /**
         * Configuration for yearly reset period
         */
        yearlyResetPeriodConfiguration?: Feature.YearlyResetPeriodConfiguration | null;
      }

      export namespace Feature {
        /**
         * Configuration for monthly reset period
         */
        export interface MonthlyResetPeriodConfiguration {
          /**
           * Reset anchor (SubscriptionStart or StartOfTheMonth)
           */
          accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
        }

        /**
         * Configuration for weekly reset period
         */
        export interface WeeklyResetPeriodConfiguration {
          /**
           * Reset anchor (SubscriptionStart or specific day)
           */
          accordingTo:
            | 'SubscriptionStart'
            | 'EverySunday'
            | 'EveryMonday'
            | 'EveryTuesday'
            | 'EveryWednesday'
            | 'EveryThursday'
            | 'EveryFriday'
            | 'EverySaturday';
        }

        /**
         * Configuration for yearly reset period
         */
        export interface YearlyResetPeriodConfiguration {
          /**
           * Reset anchor (SubscriptionStart)
           */
          accordingTo: 'SubscriptionStart';
        }
      }

      /**
       * Credit entitlement configuration for a subscription
       */
      export interface Credit {
        /**
         * The custom currency ID for the credit entitlement
         */
        id: string;

        /**
         * Credit grant amount
         */
        amount: number;

        /**
         * Credit grant cadence (MONTH or YEAR)
         */
        cadence: 'MONTH' | 'YEAR';

        /**
         * SubscriptionCreditEntitlementRequest
         */
        type: 'CREDIT';
      }

      /**
       * Minimum spend amount
       */
      export interface MinimumSpend {
        /**
         * The price amount
         */
        amount?: number;

        /**
         * The price currency
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
      }

      export interface PriceOverride {
        /**
         * Addon identifier for the price override
         */
        addonId?: string | null;

        /**
         * The price amount
         */
        amount?: number;

        /**
         * Whether this is a base charge override
         */
        baseCharge?: boolean;

        /**
         * The billing country code of the price
         */
        billingCountryCode?: string;

        /**
         * Block size for pricing
         */
        blockSize?: number;

        creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY';

        creditRate?: PriceOverride.CreditRate;

        /**
         * The price currency
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
         * Feature identifier for the price override
         */
        featureId?: string | null;

        /**
         * Pricing tiers configuration
         */
        tiers?: Array<PriceOverride.Tier>;
      }

      export namespace PriceOverride {
        export interface CreditRate {
          /**
           * The credit rate amount
           */
          amount: number;

          /**
           * The custom currency refId for the credit rate
           */
          currencyId: string;

          /**
           * A custom formula for calculating cost based on single event dimensions
           */
          costFormula?: string | null;
        }

        export interface Tier {
          /**
           * The flat fee price of the price tier
           */
          flatPrice?: Tier.FlatPrice;

          /**
           * The unit price of the price tier
           */
          unitPrice?: Tier.UnitPrice;

          /**
           * The up to quantity of the price tier
           */
          upTo?: number;
        }

        export namespace Tier {
          /**
           * The flat fee price of the price tier
           */
          export interface FlatPrice {
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

          /**
           * The unit price of the price tier
           */
          export interface UnitPrice {
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
      }

      /**
       * Trial period override settings
       */
      export interface TrialOverrideConfiguration {
        /**
         * Whether the subscription should start with a trial period
         */
        isTrial: boolean;

        /**
         * Behavior when trial ends: CONVERT_TO_PAID or CANCEL_SUBSCRIPTION
         */
        trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION';

        /**
         * Custom trial end date
         */
        trialEndDate?: string;
      }
    }
  }
}

export interface ContractRetrieveParams {
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

export interface ContractUpdateParams {
  /**
   * Body param: New activation end date
   */
  activationEndDate?: string;

  /**
   * Body param: New activation start date
   */
  activationStartDate?: string;

  /**
   * Body param: New contract name
   */
  name?: string | null;

  /**
   * Body param: New purchase-order number
   */
  poNumber?: string | null;

  /**
   * Body param: Enable billing on a provision-access-only contract by creating a
   * billing contract in the connected billing provider. Only takes effect when true
   * and the contract has no billing yet; omitting it leaves billing unchanged.
   * Billing is never removed by an update.
   */
  setupBilling?: boolean;

  /**
   * Body param: When provided, replaces the set of subscriptions linked to the
   * contract (subscription ref IDs)
   */
  subscriptionIds?: Array<string>;

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

export interface ContractListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by the exact external ID of the customer the contract
   * belongs to
   */
  customerExternalId?: string;

  /**
   * Query param: Filter by exact contract name
   */
  name?: string;

  /**
   * Query param: Filter by contract state. Supports comma-separated values for
   * multiple states
   */
  state?: string;

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

export interface ContractDeleteParams {
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

export declare namespace Contracts {
  export {
    type ContractCreateResponse as ContractCreateResponse,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractUpdateResponse as ContractUpdateResponse,
    type ContractListResponse as ContractListResponse,
    type ContractDeleteResponse as ContractDeleteResponse,
    type ContractListResponsesMyCursorIDPage as ContractListResponsesMyCursorIDPage,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractDeleteParams as ContractDeleteParams,
  };
}
