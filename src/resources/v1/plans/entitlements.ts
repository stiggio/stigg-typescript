// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Creates one or more entitlements (feature or credit) on a draft plan.
   */
  create(
    planID: string,
    body: EntitlementCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementCreateResponse> {
    return this._client.post(path`/api/v1/plans/${planID}/entitlements`, { body, ...options });
  }

  /**
   * Updates an existing entitlement on a draft plan.
   */
  update(id: string, params: EntitlementUpdateParams, options?: RequestOptions): APIPromise<PlanEntitlement> {
    const { planId, ...body } = params;
    return this._client.patch(path`/api/v1/plans/${planId}/entitlements/${id}`, { body, ...options });
  }

  /**
   * Retrieves a list of entitlements for a plan.
   */
  list(planID: string, options?: RequestOptions): APIPromise<EntitlementListResponse> {
    return this._client.get(path`/api/v1/plans/${planID}/entitlements`, options);
  }

  /**
   * Deletes an entitlement from a draft plan.
   */
  delete(id: string, params: EntitlementDeleteParams, options?: RequestOptions): APIPromise<PlanEntitlement> {
    const { planId } = params;
    return this._client.delete(path`/api/v1/plans/${planId}/entitlements/${id}`, options);
  }
}

/**
 * Response object
 */
export interface PlanEntitlement {
  /**
   * Feature or credit entitlement on a plan
   */
  data: PlanEntitlement.Data;
}

export namespace PlanEntitlement {
  /**
   * Feature or credit entitlement on a plan
   */
  export interface Data {
    /**
     * Unique identifier of the entitlement
     */
    id: string;

    /**
     * Credit amount (for credit entitlements)
     */
    amount: number | null;

    /**
     * Entitlement behavior (Increment or Override)
     */
    behavior: 'Increment' | 'Override';

    /**
     * Credit grant cadence (for credit entitlements)
     */
    cadence: 'MONTH' | 'YEAR' | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Custom currency ID (for credit entitlements)
     */
    customCurrencyId: string | null;

    /**
     * Optional description of the entitlement
     */
    description: string | null;

    /**
     * Override display name for the entitlement
     */
    displayNameOverride: string | null;

    /**
     * Allowed enum values (for feature entitlements)
     */
    enumValues: Array<string> | null;

    /**
     * Feature ID (for feature entitlements)
     */
    featureId: string | null;

    /**
     * Whether the usage limit is a soft limit (for feature entitlements)
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether usage is unlimited (for feature entitlements)
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Widget types where this entitlement is hidden
     */
    hiddenFromWidgets: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

    /**
     * Whether this is a custom entitlement
     */
    isCustom: boolean | null;

    /**
     * Whether the entitlement is granted
     */
    isGranted: boolean;

    /**
     * Display order of the entitlement
     */
    order: number | null;

    /**
     * Usage reset period (for feature entitlements)
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * Reset period configuration (for feature entitlements)
     */
    resetPeriodConfiguration:
      | Data.YearlyResetPeriodConfig
      | Data.MonthlyResetPeriodConfig
      | Data.WeeklyResetPeriodConfig
      | null;

    /**
     * Entitlement type (FEATURE or CREDIT)
     */
    type: 'FEATURE' | 'CREDIT';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Usage limit (for feature entitlements)
     */
    usageLimit: number | null;
  }

  export namespace Data {
    /**
     * Yearly reset configuration
     */
    export interface YearlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart)
       */
      accordingTo: 'SubscriptionStart';
    }

    /**
     * Monthly reset configuration
     */
    export interface MonthlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart or StartOfTheMonth)
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    /**
     * Weekly reset configuration
     */
    export interface WeeklyResetPeriodConfig {
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
  }
}

/**
 * Response object
 */
export interface EntitlementCreateResponse {
  data: Array<EntitlementCreateResponse.Data>;
}

export namespace EntitlementCreateResponse {
  /**
   * Feature or credit entitlement on a plan
   */
  export interface Data {
    /**
     * Unique identifier of the entitlement
     */
    id: string;

    /**
     * Credit amount (for credit entitlements)
     */
    amount: number | null;

    /**
     * Entitlement behavior (Increment or Override)
     */
    behavior: 'Increment' | 'Override';

    /**
     * Credit grant cadence (for credit entitlements)
     */
    cadence: 'MONTH' | 'YEAR' | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Custom currency ID (for credit entitlements)
     */
    customCurrencyId: string | null;

    /**
     * Optional description of the entitlement
     */
    description: string | null;

    /**
     * Override display name for the entitlement
     */
    displayNameOverride: string | null;

    /**
     * Allowed enum values (for feature entitlements)
     */
    enumValues: Array<string> | null;

    /**
     * Feature ID (for feature entitlements)
     */
    featureId: string | null;

    /**
     * Whether the usage limit is a soft limit (for feature entitlements)
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether usage is unlimited (for feature entitlements)
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Widget types where this entitlement is hidden
     */
    hiddenFromWidgets: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

    /**
     * Whether this is a custom entitlement
     */
    isCustom: boolean | null;

    /**
     * Whether the entitlement is granted
     */
    isGranted: boolean;

    /**
     * Display order of the entitlement
     */
    order: number | null;

    /**
     * Usage reset period (for feature entitlements)
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * Reset period configuration (for feature entitlements)
     */
    resetPeriodConfiguration:
      | Data.YearlyResetPeriodConfig
      | Data.MonthlyResetPeriodConfig
      | Data.WeeklyResetPeriodConfig
      | null;

    /**
     * Entitlement type (FEATURE or CREDIT)
     */
    type: 'FEATURE' | 'CREDIT';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Usage limit (for feature entitlements)
     */
    usageLimit: number | null;
  }

  export namespace Data {
    /**
     * Yearly reset configuration
     */
    export interface YearlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart)
       */
      accordingTo: 'SubscriptionStart';
    }

    /**
     * Monthly reset configuration
     */
    export interface MonthlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart or StartOfTheMonth)
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    /**
     * Weekly reset configuration
     */
    export interface WeeklyResetPeriodConfig {
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
  }
}

/**
 * Response list object
 */
export interface EntitlementListResponse {
  data: Array<EntitlementListResponse.Data>;

  /**
   * Pagination metadata including cursors for navigating through results
   */
  pagination: EntitlementListResponse.Pagination;
}

export namespace EntitlementListResponse {
  /**
   * Feature or credit entitlement on a plan
   */
  export interface Data {
    /**
     * Unique identifier of the entitlement
     */
    id: string;

    /**
     * Credit amount (for credit entitlements)
     */
    amount: number | null;

    /**
     * Entitlement behavior (Increment or Override)
     */
    behavior: 'Increment' | 'Override';

    /**
     * Credit grant cadence (for credit entitlements)
     */
    cadence: 'MONTH' | 'YEAR' | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Custom currency ID (for credit entitlements)
     */
    customCurrencyId: string | null;

    /**
     * Optional description of the entitlement
     */
    description: string | null;

    /**
     * Override display name for the entitlement
     */
    displayNameOverride: string | null;

    /**
     * Allowed enum values (for feature entitlements)
     */
    enumValues: Array<string> | null;

    /**
     * Feature ID (for feature entitlements)
     */
    featureId: string | null;

    /**
     * Whether the usage limit is a soft limit (for feature entitlements)
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether usage is unlimited (for feature entitlements)
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Widget types where this entitlement is hidden
     */
    hiddenFromWidgets: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

    /**
     * Whether this is a custom entitlement
     */
    isCustom: boolean | null;

    /**
     * Whether the entitlement is granted
     */
    isGranted: boolean;

    /**
     * Display order of the entitlement
     */
    order: number | null;

    /**
     * Usage reset period (for feature entitlements)
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * Reset period configuration (for feature entitlements)
     */
    resetPeriodConfiguration:
      | Data.YearlyResetPeriodConfig
      | Data.MonthlyResetPeriodConfig
      | Data.WeeklyResetPeriodConfig
      | null;

    /**
     * Entitlement type (FEATURE or CREDIT)
     */
    type: 'FEATURE' | 'CREDIT';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Usage limit (for feature entitlements)
     */
    usageLimit: number | null;
  }

  export namespace Data {
    /**
     * Yearly reset configuration
     */
    export interface YearlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart)
       */
      accordingTo: 'SubscriptionStart';
    }

    /**
     * Monthly reset configuration
     */
    export interface MonthlyResetPeriodConfig {
      /**
       * Reset anchor (SubscriptionStart or StartOfTheMonth)
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    /**
     * Weekly reset configuration
     */
    export interface WeeklyResetPeriodConfig {
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
  }

  /**
   * Pagination metadata including cursors for navigating through results
   */
  export interface Pagination {
    /**
     * Cursor for fetching the next page of results, or null if no additional pages
     * exist
     */
    next: string | null;

    /**
     * Cursor for fetching the previous page of results, or null if at the beginning
     */
    prev: string | null;
  }
}

export interface EntitlementCreateParams {
  /**
   * Entitlements to create
   */
  entitlements: Array<EntitlementCreateParams.Entitlement>;
}

export namespace EntitlementCreateParams {
  /**
   * A single entitlement to create. Provide exactly one of feature or credit.
   */
  export interface Entitlement {
    /**
     * Credit entitlement to create
     */
    credit?: Entitlement.Credit;

    /**
     * Feature entitlement to create
     */
    feature?: Entitlement.Feature;
  }

  export namespace Entitlement {
    /**
     * Credit entitlement to create
     */
    export interface Credit {
      /**
       * Credit grant amount
       */
      amount: number | null;

      /**
       * Credit grant cadence (MONTH or YEAR)
       */
      cadence: 'MONTH' | 'YEAR';

      /**
       * The custom currency ID for the credit entitlement
       */
      customCurrencyId: string;

      /**
       * Entitlement behavior (Increment or Override)
       */
      behavior?: 'Increment' | 'Override';

      /**
       * Description of the entitlement
       */
      description?: string;

      /**
       * Override display name for the entitlement
       */
      displayNameOverride?: string;

      /**
       * Widget types where this entitlement is hidden
       */
      hiddenFromWidgets?: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

      /**
       * Whether this is a custom entitlement
       */
      isCustom?: boolean;

      /**
       * Whether the entitlement is granted
       */
      isGranted?: boolean;

      /**
       * Display order of the entitlement
       */
      order?: number;
    }

    /**
     * Feature entitlement to create
     */
    export interface Feature {
      /**
       * The feature ID to attach the entitlement to
       */
      featureId: string;

      /**
       * Entitlement behavior (Increment or Override)
       */
      behavior?: 'Increment' | 'Override';

      /**
       * Description of the entitlement
       */
      description?: string;

      /**
       * Override display name for the entitlement
       */
      displayNameOverride?: string;

      /**
       * Allowed enum values for the feature entitlement
       */
      enumValues?: Array<string>;

      /**
       * Whether the usage limit is a soft limit
       */
      hasSoftLimit?: boolean;

      /**
       * Whether usage is unlimited
       */
      hasUnlimitedUsage?: boolean;

      /**
       * Widget types where this entitlement is hidden
       */
      hiddenFromWidgets?: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

      /**
       * Whether this is a custom entitlement
       */
      isCustom?: boolean;

      /**
       * Whether the entitlement is granted
       */
      isGranted?: boolean;

      /**
       * Configuration for monthly reset period
       */
      monthlyResetPeriodConfiguration?: Feature.MonthlyResetPeriodConfiguration | null;

      /**
       * Display order of the entitlement
       */
      order?: number;

      /**
       * Period at which usage resets
       */
      resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

      /**
       * Maximum allowed usage for the feature
       */
      usageLimit?: number | null;

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
  }
}

export interface EntitlementUpdateParams {
  /**
   * Path param: The plan ID
   */
  planId: string;

  /**
   * Body param: Credit entitlement fields to update
   */
  credit?: EntitlementUpdateParams.Credit;

  /**
   * Body param: Feature entitlement fields to update
   */
  feature?: EntitlementUpdateParams.Feature;
}

export namespace EntitlementUpdateParams {
  /**
   * Credit entitlement fields to update
   */
  export interface Credit {
    /**
     * Credit grant amount
     */
    amount?: number;

    /**
     * Entitlement behavior (Increment or Override)
     */
    behavior?: 'Increment' | 'Override';

    /**
     * Credit grant cadence (MONTH or YEAR)
     */
    cadence?: 'MONTH' | 'YEAR';

    /**
     * Description of the entitlement
     */
    description?: string;

    /**
     * Override display name for the entitlement
     */
    displayNameOverride?: string;

    /**
     * Widget types where this entitlement is hidden
     */
    hiddenFromWidgets?: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

    /**
     * Whether this is a custom entitlement
     */
    isCustom?: boolean;

    /**
     * Whether the entitlement is granted
     */
    isGranted?: boolean;

    /**
     * Display order of the entitlement
     */
    order?: number;
  }

  /**
   * Feature entitlement fields to update
   */
  export interface Feature {
    /**
     * Entitlement behavior (Increment or Override)
     */
    behavior?: 'Increment' | 'Override';

    /**
     * Description of the entitlement
     */
    description?: string;

    /**
     * Override display name for the entitlement
     */
    displayNameOverride?: string;

    /**
     * Allowed enum values for the feature entitlement
     */
    enumValues?: Array<string>;

    /**
     * Whether the usage limit is a soft limit
     */
    hasSoftLimit?: boolean;

    /**
     * Whether usage is unlimited
     */
    hasUnlimitedUsage?: boolean;

    /**
     * Widget types where this entitlement is hidden
     */
    hiddenFromWidgets?: Array<'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'>;

    /**
     * Whether this is a custom entitlement
     */
    isCustom?: boolean;

    /**
     * Whether the entitlement is granted
     */
    isGranted?: boolean;

    /**
     * Configuration for monthly reset period
     */
    monthlyResetPeriodConfiguration?: Feature.MonthlyResetPeriodConfiguration | null;

    /**
     * Display order of the entitlement
     */
    order?: number;

    /**
     * Period at which usage resets
     */
    resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

    /**
     * Maximum allowed usage for the feature
     */
    usageLimit?: number | null;

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
}

export interface EntitlementDeleteParams {
  /**
   * The plan ID
   */
  planId: string;
}

export declare namespace Entitlements {
  export {
    type PlanEntitlement as PlanEntitlement,
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
  };
}
