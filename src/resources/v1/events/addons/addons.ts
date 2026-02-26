// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DraftAPI from './draft';
import { Draft, DraftRemoveAddonDraftResponse } from './draft';
import * as EntitlementsAPI from './entitlements';
import {
  AddonPackageEntitlement,
  EntitlementCreateParams,
  EntitlementCreateResponse,
  EntitlementDeleteParams,
  EntitlementListResponse,
  EntitlementUpdateParams,
  Entitlements,
} from './entitlements';
import { APIPromise } from '../../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Addons extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Archives an addon, preventing it from being used in new subscriptions.
   */
  archiveAddon(id: string, options?: RequestOptions): APIPromise<Addon> {
    return this._client.post(path`/api/v1/addons/${id}/archive`, options);
  }

  /**
   * Creates a new addon in draft status, associated with a specific product.
   */
  createAddon(body: AddonCreateAddonParams, options?: RequestOptions): APIPromise<Addon> {
    return this._client.post('/api/v1/addons', { body, ...options });
  }

  /**
   * Retrieves a paginated list of addons in the environment.
   */
  listAddons(
    query: AddonListAddonsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AddonListAddonsResponsesMyCursorIDPage, AddonListAddonsResponse> {
    return this._client.getAPIList('/api/v1/addons', MyCursorIDPage<AddonListAddonsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Publishes a draft addon, making it available for use in subscriptions.
   */
  publishAddon(
    id: string,
    body: AddonPublishAddonParams,
    options?: RequestOptions,
  ): APIPromise<AddonPublishAddonResponse> {
    return this._client.post(path`/api/v1/addons/${id}/publish`, { body, ...options });
  }

  /**
   * Retrieves an addon by its unique identifier, including entitlements and pricing
   * details.
   */
  retrieveAddon(id: string, options?: RequestOptions): APIPromise<Addon> {
    return this._client.get(path`/api/v1/addons/${id}`, options);
  }

  /**
   * Sets the pricing configuration for an addon.
   */
  setPricing(
    id: string,
    body: AddonSetPricingParams,
    options?: RequestOptions,
  ): APIPromise<SetPackagePricingResponse> {
    return this._client.put(path`/api/v1/addons/${id}/charges`, { body, ...options });
  }

  /**
   * Updates an existing addon's properties such as display name, description, and
   * metadata.
   */
  updateAddon(id: string, body: AddonUpdateAddonParams, options?: RequestOptions): APIPromise<Addon> {
    return this._client.patch(path`/api/v1/addons/${id}`, { body, ...options });
  }
}

export type AddonListAddonsResponsesMyCursorIDPage = MyCursorIDPage<AddonListAddonsResponse>;

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
 * Request to set the pricing configuration for a plan or addon.
 */
export interface SetPackagePricing {
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
  minimumSpend?: Array<SetPackagePricing.MinimumSpend> | null;

  /**
   * When overage charges are billed
   */
  overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY';

  /**
   * Array of overage pricing model configurations
   */
  overagePricingModels?: Array<SetPackagePricing.OveragePricingModel>;

  /**
   * Array of pricing model configurations
   */
  pricingModels?: Array<SetPackagePricing.PricingModel>;
}

export namespace SetPackagePricing {
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

/**
 * Response object
 */
export interface SetPackagePricingResponse {
  /**
   * Result of setting package pricing.
   */
  data: SetPackagePricingResponse.Data;
}

export namespace SetPackagePricingResponse {
  /**
   * Result of setting package pricing.
   */
  export interface Data {
    /**
     * The package identifier (refId)
     */
    id: string;

    /**
     * The pricing type that was set
     */
    pricingType: 'FREE' | 'PAID' | 'CUSTOM';
  }
}

/**
 * Addon configuration object
 */
export interface AddonListAddonsResponse {
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
  entitlements: Array<AddonListAddonsResponse.Entitlement>;

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

export namespace AddonListAddonsResponse {
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
 * Response containing task ID for publish operation
 */
export interface AddonPublishAddonResponse {
  data: AddonPublishAddonResponse.Data;
}

export namespace AddonPublishAddonResponse {
  export interface Data {
    /**
     * Task ID for tracking the async publish operation
     */
    taskId: string | null;
  }
}

export interface AddonCreateAddonParams {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The display name of the package
   */
  displayName: string;

  /**
   * The product id of the package
   */
  productId: string;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * The maximum quantity of this addon that can be added to a subscription
   */
  maxQuantity?: number | null;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * The pricing type of the package
   */
  pricingType?: 'FREE' | 'PAID' | 'CUSTOM' | null;

  /**
   * The status of the package
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export interface AddonListAddonsParams extends MyCursorIDPageParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: AddonListAddonsParams.CreatedAt;

  /**
   * Filter by product ID
   */
  productId?: string;

  /**
   * Filter by status. Supports comma-separated values for multiple statuses
   */
  status?: string;
}

export namespace AddonListAddonsParams {
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

export interface AddonPublishAddonParams {
  /**
   * The migration type of the package
   */
  migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';
}

export interface AddonSetPricingParams {
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
  minimumSpend?: Array<AddonSetPricingParams.MinimumSpend> | null;

  /**
   * When overage charges are billed
   */
  overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY';

  /**
   * Array of overage pricing model configurations
   */
  overagePricingModels?: Array<AddonSetPricingParams.OveragePricingModel>;

  /**
   * Array of pricing model configurations
   */
  pricingModels?: Array<AddonSetPricingParams.PricingModel>;
}

export namespace AddonSetPricingParams {
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

export interface AddonUpdateAddonParams {
  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * List of addons the addon is dependant on
   */
  dependencies?: Array<string> | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * The display name of the package
   */
  displayName?: string;

  /**
   * The maximum quantity of this addon that can be added to a subscription
   */
  maxQuantity?: number | null;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };
}

Addons.Draft = Draft;
Addons.Entitlements = Entitlements;

export declare namespace Addons {
  export {
    type Addon as Addon,
    type SetPackagePricing as SetPackagePricing,
    type SetPackagePricingResponse as SetPackagePricingResponse,
    type AddonListAddonsResponse as AddonListAddonsResponse,
    type AddonPublishAddonResponse as AddonPublishAddonResponse,
    type AddonListAddonsResponsesMyCursorIDPage as AddonListAddonsResponsesMyCursorIDPage,
    type AddonCreateAddonParams as AddonCreateAddonParams,
    type AddonListAddonsParams as AddonListAddonsParams,
    type AddonPublishAddonParams as AddonPublishAddonParams,
    type AddonSetPricingParams as AddonSetPricingParams,
    type AddonUpdateAddonParams as AddonUpdateAddonParams,
  };

  export { Draft as Draft, type DraftRemoveAddonDraftResponse as DraftRemoveAddonDraftResponse };

  export {
    Entitlements as Entitlements,
    type AddonPackageEntitlement as AddonPackageEntitlement,
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
  };
}
