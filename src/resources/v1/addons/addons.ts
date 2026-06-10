// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EntitlementsAPI from './entitlements';
import {
  AddonPackageEntitlement,
  EntitlementCreateParams,
  EntitlementCreateResponse,
  EntitlementDeleteParams,
  EntitlementListParams,
  EntitlementListResponse,
  EntitlementUpdateParams,
  Entitlements,
} from './entitlements';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to addons
 */
export class Addons extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Creates a new addon in draft status, associated with a specific product.
   */
  create(params: AddonCreateParams, options?: RequestOptions): APIPromise<Addon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/addons', {
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
   * Retrieves an addon by its unique identifier, including entitlements and pricing
   * details.
   */
  retrieve(
    id: string,
    params: AddonRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Addon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/addons/${id}`, {
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
   * Updates an existing addon's properties such as display name, description, and
   * metadata.
   */
  update(id: string, params: AddonUpdateParams, options?: RequestOptions): APIPromise<Addon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/addons/${id}`, {
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
   * Retrieves a paginated list of addons in the environment.
   */
  list(
    params: AddonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AddonListResponsesMyCursorIDPage, AddonListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/addons', MyCursorIDPage<AddonListResponse>, {
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
   * Archives an addon, preventing it from being used in new subscriptions.
   */
  archive(
    id: string,
    params: AddonArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Addon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/addons/${id}/archive`, {
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
   * Creates a draft version of an existing addon for modification before publishing.
   */
  createDraft(
    id: string,
    params: AddonCreateDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Addon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/addons/${id}/draft`, {
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
   * Retrieves the list of charges configured on an addon.
   */
  listCharges(
    id: string,
    params: AddonListChargesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AddonListChargesResponsesMyCursorIDPage, AddonListChargesResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/api/v1/addons/${id}/charges`,
      MyCursorIDPage<AddonListChargesResponse>,
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
   * Publishes a draft addon, making it available for use in subscriptions.
   */
  publish(
    id: string,
    params: AddonPublishParams,
    options?: RequestOptions,
  ): APIPromise<AddonPublishResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/addons/${id}/publish`, {
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
   * Removes a draft version of an addon.
   */
  removeDraft(
    id: string,
    params: AddonRemoveDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddonRemoveDraftResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.delete(path`/api/v1/addons/${id}/draft`, {
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

export type AddonListResponsesMyCursorIDPage = MyCursorIDPage<AddonListResponse>;

export type AddonListChargesResponsesMyCursorIDPage = MyCursorIDPage<AddonListChargesResponse>;

/**
 * Response object
 */
export interface Addon {
  /**
   * Addon configuration object
   */
  data: Addon.Data;
}

export namespace Addon {
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
export interface AddonListResponse {
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
  entitlements: Array<AddonListResponse.Entitlement>;

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

export namespace AddonListResponse {
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
 * A single pricing row on a plan or addon. Each charge encodes one (billingPeriod,
 * billingModel, billingCadence, billingCountryCode) combination. Plans and addons
 * own many of these — one per currency / billing period / feature.
 */
export interface AddonListChargesResponse {
  /**
   * Unique identifier of the charge
   */
  id: string;

  /**
   * The billing cadence (RECURRING or ONE_OFF)
   */
  billingCadence: 'RECURRING' | 'ONE_OFF';

  /**
   * The billing model (FLAT_FEE, PER_UNIT, USAGE_BASED, CREDIT_BASED, MINIMUM_SPEND)
   */
  billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED';

  /**
   * The billing period (MONTHLY or ANNUALLY)
   */
  billingPeriod: 'MONTHLY' | 'ANNUALLY';

  /**
   * Timestamp when the charge was created
   */
  createdAt: string;

  /**
   * ISO country code for localized pricing, if any
   */
  billingCountryCode?: string | null;

  /**
   * Identifier in the external billing integration (e.g. Stripe price id), if any
   */
  billingId?: string | null;

  /**
   * Block size for usage-based pricing
   */
  blockSize?: number | null;

  /**
   * When credits are granted (for credit-based pricing)
   */
  creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY' | null;

  /**
   * Credit rate configuration for credit-based pricing
   */
  creditRate?: AddonListChargesResponse.CreditRate | null;

  /**
   * Identifier in the linked CRM, if any
   */
  crmId?: string | null;

  /**
   * Deep link to the charge in the linked CRM, if any
   */
  crmLinkUrl?: string | null;

  /**
   * The feature this charge meters, if metered
   */
  featureId?: string | null;

  /**
   * Maximum unit quantity that can be purchased
   */
  maxUnitQuantity?: number | null;

  /**
   * Minimum unit quantity that can be purchased
   */
  minUnitQuantity?: number | null;

  /**
   * The flat price amount and currency, when applicable
   */
  price?: AddonListChargesResponse.Price | null;

  /**
   * Tiered pricing rows when the charge is tiered
   */
  tiers?: Array<AddonListChargesResponse.Tier> | null;

  /**
   * Tiered pricing mode (VOLUME or GRADUATED) when the charge is tiered
   */
  tiersMode?: 'VOLUME' | 'GRADUATED' | null;

  /**
   * Custom currency identifier for top-up pricing, if any
   */
  topUpCustomCurrencyId?: string | null;

  /**
   * True if this charge is referenced by at least one subscription
   */
  usedInSubscriptions?: boolean | null;
}

export namespace AddonListChargesResponse {
  /**
   * Credit rate configuration for credit-based pricing
   */
  export interface CreditRate {
    /**
     * Credit rate amount
     */
    amount: number;

    /**
     * Custom currency identifier
     */
    currencyId: string;

    /**
     * Optional cost formula expression
     */
    costFormula?: string | null;
  }

  /**
   * The flat price amount and currency, when applicable
   */
  export interface Price {
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
   * A single tier within a tiered charge
   */
  export interface Tier {
    /**
     * Flat price for this tier
     */
    flatPrice?: Tier.FlatPrice | null;

    /**
     * Per-unit price in this tier
     */
    unitPrice?: Tier.UnitPrice | null;

    /**
     * Upper bound of this tier (null for unlimited)
     */
    upTo?: number | null;
  }

  export namespace Tier {
    /**
     * Flat price for this tier
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
     * Per-unit price in this tier
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
 * Response containing task ID for publish operation
 */
export interface AddonPublishResponse {
  data: AddonPublishResponse.Data;
}

export namespace AddonPublishResponse {
  export interface Data {
    /**
     * Task ID for tracking the async publish operation
     */
    taskId: string | null;
  }
}

/**
 * Response confirming the addon draft was removed.
 */
export interface AddonRemoveDraftResponse {
  data: AddonRemoveDraftResponse.Data;
}

export namespace AddonRemoveDraftResponse {
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;
  }
}

export interface AddonCreateParams {
  /**
   * Body param: The unique identifier for the entity
   */
  id: string;

  /**
   * Body param: The display name of the package
   */
  displayName: string;

  /**
   * Body param: The product id of the package
   */
  productId: string;

  /**
   * Body param: The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Body param: The description of the package
   */
  description?: string | null;

  /**
   * Body param: The maximum quantity of this addon that can be added to a
   * subscription
   */
  maxQuantity?: number | null;

  /**
   * Body param: Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The pricing type of the package
   */
  pricingType?: 'FREE' | 'PAID' | 'CUSTOM' | null;

  /**
   * Body param: The status of the package
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

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

export interface AddonRetrieveParams {
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

export interface AddonUpdateParams {
  /**
   * Body param: The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Body param: Pricing configuration to set on the addon draft
   */
  charges?: AddonUpdateParams.Charges;

  /**
   * Body param: List of addons the addon is dependant on
   */
  dependencies?: Array<string> | null;

  /**
   * Body param: The description of the package
   */
  description?: string | null;

  /**
   * Body param: The display name of the package
   */
  displayName?: string;

  /**
   * Body param: The maximum quantity of this addon that can be added to a
   * subscription
   */
  maxQuantity?: number | null;

  /**
   * Body param: Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The status of the package
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

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

export namespace AddonUpdateParams {
  /**
   * Pricing configuration to set on the addon draft
   */
  export interface Charges {
    /**
     * The pricing type (FREE, PAID, or CUSTOM)
     */
    pricingType: 'FREE' | 'PAID' | 'CUSTOM';

    /**
     * Deprecated: billing integration ID
     */
    billingId?: string;

    /**
     * Minimum spend configuration per billing period
     */
    minimumSpend?: Array<Charges.MinimumSpend> | null;

    /**
     * When overage charges are billed
     */
    overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY';

    /**
     * Array of overage pricing model configurations
     */
    overagePricingModels?: Array<Charges.OveragePricingModel>;

    /**
     * Array of pricing model configurations
     */
    pricingModels?: Array<Charges.PricingModel>;
  }

  export namespace Charges {
    /**
     * Minimum spend configuration for a billing period.
     */
    export interface MinimumSpend {
      /**
       * The billing period
       */
      billingPeriod: 'MONTHLY' | 'ANNUALLY';

      /**
       * The minimum spend amount
       */
      minimum: MinimumSpend.Minimum;
    }

    export namespace MinimumSpend {
      /**
       * The minimum spend amount
       */
      export interface Minimum {
        /**
         * The price amount
         */
        amount: number;

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
    }

    /**
     * Overage pricing model configuration.
     */
    export interface OveragePricingModel {
      /**
       * The billing model for overages
       */
      billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED';

      /**
       * Price periods for overage pricing
       */
      pricePeriods: Array<OveragePricingModel.PricePeriod>;

      /**
       * The billing cadence for overages
       */
      billingCadence?: 'RECURRING' | 'ONE_OFF';

      /**
       * Entitlement configuration for the overage feature
       */
      entitlement?: OveragePricingModel.Entitlement;

      /**
       * The feature ID for overage pricing
       */
      featureId?: string;

      /**
       * Custom currency ID for overage top-up
       */
      topUpCustomCurrencyId?: string;
    }

    export namespace OveragePricingModel {
      /**
       * Price configuration for a specific billing period.
       */
      export interface PricePeriod {
        /**
         * The billing period (MONTHLY or ANNUALLY)
         */
        billingPeriod: 'MONTHLY' | 'ANNUALLY';

        /**
         * ISO country code for localized pricing
         */
        billingCountryCode?: string;

        /**
         * Block size for usage-based pricing
         */
        blockSize?: number;

        /**
         * When credits are granted
         */
        creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY';

        /**
         * Credit rate configuration for credit-based pricing
         */
        creditRate?: PricePeriod.CreditRate;

        /**
         * The price amount and currency
         */
        price?: PricePeriod.Price;

        /**
         * Tiered pricing configuration
         */
        tiers?: Array<PricePeriod.Tier>;
      }

      export namespace PricePeriod {
        /**
         * Credit rate configuration for credit-based pricing
         */
        export interface CreditRate {
          /**
           * The credit rate amount
           */
          amount: number;

          /**
           * The custom currency ID
           */
          currencyId: string;

          /**
           * Optional cost formula expression
           */
          costFormula?: string;
        }

        /**
         * The price amount and currency
         */
        export interface Price {
          /**
           * The price amount
           */
          amount: number;

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

        /**
         * A tier in tiered pricing.
         */
        export interface Tier {
          /**
           * Flat price for this tier
           */
          flatPrice?: Tier.FlatPrice;

          /**
           * Per-unit price in this tier
           */
          unitPrice?: Tier.UnitPrice;

          /**
           * Upper bound of this tier (null for unlimited)
           */
          upTo?: number;
        }

        export namespace Tier {
          /**
           * Flat price for this tier
           */
          export interface FlatPrice {
            /**
             * The price amount
             */
            amount: number;

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

          /**
           * Per-unit price in this tier
           */
          export interface UnitPrice {
            /**
             * The price amount
             */
            amount: number;

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
        }
      }

      /**
       * Entitlement configuration for the overage feature
       */
      export interface Entitlement {
        /**
         * The feature ID for the entitlement
         */
        featureId: string;

        /**
         * Whether the limit is soft (allows overage)
         */
        hasSoftLimit?: boolean;

        /**
         * Whether usage is unlimited
         */
        hasUnlimitedUsage?: boolean;

        /**
         * Monthly reset configuration
         */
        monthlyResetPeriodConfiguration?: Entitlement.MonthlyResetPeriodConfiguration;

        /**
         * The usage reset period
         */
        resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

        /**
         * The usage limit before overage kicks in
         */
        usageLimit?: number;

        /**
         * Weekly reset configuration
         */
        weeklyResetPeriodConfiguration?: Entitlement.WeeklyResetPeriodConfiguration;

        /**
         * Yearly reset configuration
         */
        yearlyResetPeriodConfiguration?: Entitlement.YearlyResetPeriodConfiguration;
      }

      export namespace Entitlement {
        /**
         * Monthly reset configuration
         */
        export interface MonthlyResetPeriodConfiguration {
          /**
           * Reset anchor (SubscriptionStart or StartOfTheMonth)
           */
          accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
        }

        /**
         * Weekly reset configuration
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
         * Yearly reset configuration
         */
        export interface YearlyResetPeriodConfiguration {
          /**
           * Reset anchor (SubscriptionStart)
           */
          accordingTo: 'SubscriptionStart';
        }
      }
    }

    /**
     * A pricing model configuration with billing details and price periods.
     */
    export interface PricingModel {
      /**
       * The billing model (FLAT_FEE, PER_UNIT, USAGE_BASED, CREDIT_BASED)
       */
      billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED';

      /**
       * Array of price period configurations (at least one required)
       */
      pricePeriods: Array<PricingModel.PricePeriod>;

      /**
       * The billing cadence (RECURRING or ONE_OFF)
       */
      billingCadence?: 'RECURRING' | 'ONE_OFF';

      /**
       * The feature ID this pricing model is associated with
       */
      featureId?: string;

      /**
       * Maximum number of units (max 999999)
       */
      maxUnitQuantity?: number;

      /**
       * Minimum number of units
       */
      minUnitQuantity?: number;

      /**
       * Monthly reset period configuration
       */
      monthlyResetPeriodConfiguration?: PricingModel.MonthlyResetPeriodConfiguration;

      /**
       * The usage reset period
       */
      resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

      /**
       * The tiered pricing mode (VOLUME or GRADUATED)
       */
      tiersMode?: 'VOLUME' | 'GRADUATED';

      /**
       * The custom currency ID for top-up pricing
       */
      topUpCustomCurrencyId?: string;

      /**
       * Weekly reset period configuration
       */
      weeklyResetPeriodConfiguration?: PricingModel.WeeklyResetPeriodConfiguration;

      /**
       * Yearly reset period configuration
       */
      yearlyResetPeriodConfiguration?: PricingModel.YearlyResetPeriodConfiguration;
    }

    export namespace PricingModel {
      /**
       * Price configuration for a specific billing period.
       */
      export interface PricePeriod {
        /**
         * The billing period (MONTHLY or ANNUALLY)
         */
        billingPeriod: 'MONTHLY' | 'ANNUALLY';

        /**
         * ISO country code for localized pricing
         */
        billingCountryCode?: string;

        /**
         * Block size for usage-based pricing
         */
        blockSize?: number;

        /**
         * When credits are granted
         */
        creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY';

        /**
         * Credit rate configuration for credit-based pricing
         */
        creditRate?: PricePeriod.CreditRate;

        /**
         * The price amount and currency
         */
        price?: PricePeriod.Price;

        /**
         * Tiered pricing configuration
         */
        tiers?: Array<PricePeriod.Tier>;
      }

      export namespace PricePeriod {
        /**
         * Credit rate configuration for credit-based pricing
         */
        export interface CreditRate {
          /**
           * The credit rate amount
           */
          amount: number;

          /**
           * The custom currency ID
           */
          currencyId: string;

          /**
           * Optional cost formula expression
           */
          costFormula?: string;
        }

        /**
         * The price amount and currency
         */
        export interface Price {
          /**
           * The price amount
           */
          amount: number;

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

        /**
         * A tier in tiered pricing.
         */
        export interface Tier {
          /**
           * Flat price for this tier
           */
          flatPrice?: Tier.FlatPrice;

          /**
           * Per-unit price in this tier
           */
          unitPrice?: Tier.UnitPrice;

          /**
           * Upper bound of this tier (null for unlimited)
           */
          upTo?: number;
        }

        export namespace Tier {
          /**
           * Flat price for this tier
           */
          export interface FlatPrice {
            /**
             * The price amount
             */
            amount: number;

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

          /**
           * Per-unit price in this tier
           */
          export interface UnitPrice {
            /**
             * The price amount
             */
            amount: number;

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
        }
      }

      /**
       * Monthly reset period configuration
       */
      export interface MonthlyResetPeriodConfiguration {
        /**
         * Reset anchor (SubscriptionStart or StartOfTheMonth)
         */
        accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
      }

      /**
       * Weekly reset period configuration
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
       * Yearly reset period configuration
       */
      export interface YearlyResetPeriodConfiguration {
        /**
         * Reset anchor (SubscriptionStart)
         */
        accordingTo: 'SubscriptionStart';
      }
    }
  }
}

export interface AddonListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: AddonListParams.CreatedAt;

  /**
   * Query param: Filter by product ID
   */
  productId?: string;

  /**
   * Query param: Filter by status. Supports comma-separated values for multiple
   * statuses
   */
  status?: Array<'DRAFT' | 'PUBLISHED' | 'ARCHIVED'>;

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

export namespace AddonListParams {
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

export interface AddonArchiveParams {
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

export interface AddonCreateDraftParams {
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

export interface AddonListChargesParams extends MyCursorIDPageParams {
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

export interface AddonPublishParams {
  /**
   * Body param: The migration type of the package
   */
  migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';

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

export interface AddonRemoveDraftParams {
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

Addons.Entitlements = Entitlements;

export declare namespace Addons {
  export {
    type Addon as Addon,
    type AddonListResponse as AddonListResponse,
    type AddonListChargesResponse as AddonListChargesResponse,
    type AddonPublishResponse as AddonPublishResponse,
    type AddonRemoveDraftResponse as AddonRemoveDraftResponse,
    type AddonListResponsesMyCursorIDPage as AddonListResponsesMyCursorIDPage,
    type AddonListChargesResponsesMyCursorIDPage as AddonListChargesResponsesMyCursorIDPage,
    type AddonCreateParams as AddonCreateParams,
    type AddonRetrieveParams as AddonRetrieveParams,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonListParams as AddonListParams,
    type AddonArchiveParams as AddonArchiveParams,
    type AddonCreateDraftParams as AddonCreateDraftParams,
    type AddonListChargesParams as AddonListChargesParams,
    type AddonPublishParams as AddonPublishParams,
    type AddonRemoveDraftParams as AddonRemoveDraftParams,
  };

  export {
    Entitlements as Entitlements,
    type AddonPackageEntitlement as AddonPackageEntitlement,
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
  };
}
