// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddonsAPI from '../addons/addons';
import * as EntitlementsAPI from './entitlements';
import {
  EntitlementCreateParams,
  EntitlementCreateResponse,
  EntitlementDeleteParams,
  EntitlementListResponse,
  EntitlementUpdateParams,
  Entitlements,
  PlanEntitlement,
} from './entitlements';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Plans extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Creates a new plan in draft status.
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post('/api/v1/plans', { body, ...options });
  }

  /**
   * Retrieves a plan by its unique identifier, including entitlements and pricing
   * details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.get(path`/api/v1/plans/${id}`, options);
  }

  /**
   * Updates an existing plan's properties such as display name, description, and
   * metadata.
   */
  update(id: string, body: PlanUpdateParams, options?: RequestOptions): APIPromise<Plan> {
    return this._client.patch(path`/api/v1/plans/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of plans in the environment.
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanListResponsesMyCursorIDPage, PlanListResponse> {
    return this._client.getAPIList('/api/v1/plans', MyCursorIDPage<PlanListResponse>, { query, ...options });
  }

  /**
   * Archives a plan, preventing it from being used in new subscriptions.
   */
  archive(id: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post(path`/api/v1/plans/${id}/archive`, options);
  }

  /**
   * Creates a draft version of an existing plan for modification before publishing.
   */
  createDraft(id: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post(path`/api/v1/plans/${id}/draft`, options);
  }

  /**
   * Publishes a draft plan, making it available for use in subscriptions.
   */
  publish(id: string, body: PlanPublishParams, options?: RequestOptions): APIPromise<PlanPublishResponse> {
    return this._client.post(path`/api/v1/plans/${id}/publish`, { body, ...options });
  }

  /**
   * Removes a draft version of a plan.
   */
  removeDraft(id: string, options?: RequestOptions): APIPromise<PlanRemoveDraftResponse> {
    return this._client.delete(path`/api/v1/plans/${id}/draft`, options);
  }

  /**
   * Sets the pricing configuration for a plan, including pricing models, overage
   * pricing, and minimum spend.
   */
  setPricing(
    id: string,
    body: PlanSetPricingParams,
    options?: RequestOptions,
  ): APIPromise<AddonsAPI.SetPackagePricingResponse> {
    return this._client.put(path`/api/v1/plans/${id}/charges`, { body, ...options });
  }
}

export type PlanListResponsesMyCursorIDPage = MyCursorIDPage<PlanListResponse>;

/**
 * Response object
 */
export interface Plan {
  /**
   * Plan configuration object
   */
  data: Plan.Data;
}

export namespace Plan {
  /**
   * Plan configuration object
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

    compatibleAddonIds: Array<string> | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Default trial configuration for the plan
     */
    defaultTrialConfig: Data.DefaultTrialConfig | null;

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
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * The ID of the parent plan, if applicable
     */
    parentPlanId: string | null;

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
     * Default trial configuration for the plan
     */
    export interface DefaultTrialConfig {
      /**
       * The duration of the trial in the specified units
       */
      duration: number;

      /**
       * The time unit for the trial duration (DAY or MONTH)
       */
      units: 'DAY' | 'MONTH';

      /**
       * Budget configuration for the trial
       */
      budget?: DefaultTrialConfig.Budget | null;

      /**
       * Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)
       */
      trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION' | null;
    }

    export namespace DefaultTrialConfig {
      /**
       * Budget configuration for the trial
       */
      export interface Budget {
        /**
         * Whether the budget limit is a soft limit (allows overage) or hard limit
         */
        hasSoftLimit: boolean;

        /**
         * The budget limit amount
         */
        limit: number;
      }
    }

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
 * Plan configuration object
 */
export interface PlanListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId: string | null;

  compatibleAddonIds: Array<string> | null;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Default trial configuration for the plan
   */
  defaultTrialConfig: PlanListResponse.DefaultTrialConfig | null;

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
  entitlements: Array<PlanListResponse.Entitlement>;

  /**
   * Indicates if the package is the latest version
   */
  isLatest: boolean | null;

  /**
   * Metadata associated with the entity
   */
  metadata: { [key: string]: string };

  /**
   * The ID of the parent plan, if applicable
   */
  parentPlanId: string | null;

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

export namespace PlanListResponse {
  /**
   * Default trial configuration for the plan
   */
  export interface DefaultTrialConfig {
    /**
     * The duration of the trial in the specified units
     */
    duration: number;

    /**
     * The time unit for the trial duration (DAY or MONTH)
     */
    units: 'DAY' | 'MONTH';

    /**
     * Budget configuration for the trial
     */
    budget?: DefaultTrialConfig.Budget | null;

    /**
     * Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)
     */
    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION' | null;
  }

  export namespace DefaultTrialConfig {
    /**
     * Budget configuration for the trial
     */
    export interface Budget {
      /**
       * Whether the budget limit is a soft limit (allows overage) or hard limit
       */
      hasSoftLimit: boolean;

      /**
       * The budget limit amount
       */
      limit: number;
    }
  }

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
export interface PlanPublishResponse {
  data: PlanPublishResponse.Data;
}

export namespace PlanPublishResponse {
  export interface Data {
    /**
     * Task ID for tracking the async publish operation
     */
    taskId: string | null;
  }
}

/**
 * Response confirming the plan draft was removed.
 */
export interface PlanRemoveDraftResponse {
  data: PlanRemoveDraftResponse.Data;
}

export namespace PlanRemoveDraftResponse {
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;
  }
}

export interface PlanCreateParams {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The display name of the package
   */
  displayName: string;

  /**
   * The product ID to associate the plan with
   */
  productId: string;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  /**
   * Default trial configuration for the plan
   */
  defaultTrialConfig?: PlanCreateParams.DefaultTrialConfig | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * The ID of the parent plan, if applicable
   */
  parentPlanId?: string | null;

  /**
   * The pricing type of the package
   */
  pricingType?: 'FREE' | 'PAID' | 'CUSTOM' | null;

  /**
   * The status of the package
   */
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export namespace PlanCreateParams {
  /**
   * Default trial configuration for the plan
   */
  export interface DefaultTrialConfig {
    /**
     * The duration of the trial in the specified units
     */
    duration: number;

    /**
     * The time unit for the trial duration (DAY or MONTH)
     */
    units: 'DAY' | 'MONTH';

    /**
     * Budget configuration for the trial
     */
    budget?: DefaultTrialConfig.Budget | null;

    /**
     * Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)
     */
    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION' | null;
  }

  export namespace DefaultTrialConfig {
    /**
     * Budget configuration for the trial
     */
    export interface Budget {
      /**
       * Whether the budget limit is a soft limit (allows overage) or hard limit
       */
      hasSoftLimit: boolean;

      /**
       * The budget limit amount
       */
      limit: number;
    }
  }
}

export interface PlanUpdateParams {
  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId?: string | null;

  compatibleAddonIds?: Array<string> | null;

  /**
   * Default trial configuration for the plan
   */
  defaultTrialConfig?: PlanUpdateParams.DefaultTrialConfig | null;

  /**
   * The description of the package
   */
  description?: string | null;

  /**
   * The display name of the package
   */
  displayName?: string;

  /**
   * Metadata associated with the entity
   */
  metadata?: { [key: string]: string };

  /**
   * The ID of the parent plan, if applicable
   */
  parentPlanId?: string | null;
}

export namespace PlanUpdateParams {
  /**
   * Default trial configuration for the plan
   */
  export interface DefaultTrialConfig {
    /**
     * The duration of the trial in the specified units
     */
    duration: number;

    /**
     * The time unit for the trial duration (DAY or MONTH)
     */
    units: 'DAY' | 'MONTH';

    /**
     * Budget configuration for the trial
     */
    budget?: DefaultTrialConfig.Budget | null;

    /**
     * Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)
     */
    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION' | null;
  }

  export namespace DefaultTrialConfig {
    /**
     * Budget configuration for the trial
     */
    export interface Budget {
      /**
       * Whether the budget limit is a soft limit (allows overage) or hard limit
       */
      hasSoftLimit: boolean;

      /**
       * The budget limit amount
       */
      limit: number;
    }
  }
}

export interface PlanListParams extends MyCursorIDPageParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: PlanListParams.CreatedAt;

  /**
   * Filter by product ID
   */
  productId?: string;

  /**
   * Filter by status. Supports comma-separated values for multiple statuses
   */
  status?: string;
}

export namespace PlanListParams {
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

export interface PlanPublishParams {
  /**
   * The migration type of the package
   */
  migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';
}

export interface PlanSetPricingParams {
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
  minimumSpend?: Array<PlanSetPricingParams.MinimumSpend> | null;

  /**
   * When overage charges are billed
   */
  overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY';

  /**
   * Array of overage pricing model configurations
   */
  overagePricingModels?: Array<PlanSetPricingParams.OveragePricingModel>;

  /**
   * Array of pricing model configurations
   */
  pricingModels?: Array<PlanSetPricingParams.PricingModel>;
}

export namespace PlanSetPricingParams {
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

Plans.Entitlements = Entitlements;

export declare namespace Plans {
  export {
    type Plan as Plan,
    type PlanListResponse as PlanListResponse,
    type PlanPublishResponse as PlanPublishResponse,
    type PlanRemoveDraftResponse as PlanRemoveDraftResponse,
    type PlanListResponsesMyCursorIDPage as PlanListResponsesMyCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanPublishParams as PlanPublishParams,
    type PlanSetPricingParams as PlanSetPricingParams,
  };

  export {
    Entitlements as Entitlements,
    type PlanEntitlement as PlanEntitlement,
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
  };
}
