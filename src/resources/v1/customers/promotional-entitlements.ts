// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PromotionalEntitlements extends APIResource {
  /**
   * Grants promotional entitlements to a customer, providing feature access outside
   * their subscription. Entitlements can be time-limited or permanent.
   */
  grant(
    customerID: string,
    body: PromotionalEntitlementGrantParams,
    options?: RequestOptions,
  ): APIPromise<PromotionalEntitlementGrantResponse> {
    return this._client.post(path`/api/v1/customers/${customerID}/promotional`, { body, ...options });
  }

  /**
   * Revokes a previously granted promotional entitlement from a customer for a
   * specific feature.
   */
  revoke(
    featureID: string,
    params: PromotionalEntitlementRevokeParams,
    options?: RequestOptions,
  ): APIPromise<PromotionalEntitlementRevokeResponse> {
    const { customerId } = params;
    return this._client.delete(path`/api/v1/customers/${customerId}/promotional/${featureID}`, options);
  }
}

/**
 * Response object
 */
export interface PromotionalEntitlementGrantResponse {
  data: Array<PromotionalEntitlementGrantResponse.Data>;
}

export namespace PromotionalEntitlementGrantResponse {
  /**
   * Granted feature entitlement
   */
  export interface Data {
    /**
     * Unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The description of the entitlement
     */
    description: string | null;

    /**
     * The end date of the promotional entitlement
     */
    endDate: string | null;

    /**
     * The enum values of the entitlement
     */
    enumValues: Array<string> | null;

    /**
     * The unique identifier for the environment
     */
    environmentId: string;

    /**
     * Feature group IDs associated with this entitlement
     */
    featureGroupIds: Array<string> | null;

    /**
     * The unique identifier of the entitlement feature
     */
    featureId: string;

    /**
     * Whether the entitlement has a soft limit
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether the entitlement has an unlimited usage
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Whether the entitlement is visible
     */
    isVisible: boolean;

    /**
     * The grant period of the promotional entitlement
     */
    period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom';

    /**
     * The reset period of the entitlement
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * The reset period configuration of the entitlement
     */
    resetPeriodConfiguration:
      | Data.YearlyResetPeriodConfig
      | Data.MonthlyResetPeriodConfig
      | Data.WeeklyResetPeriodConfig
      | null;

    /**
     * The start date of the entitlement
     */
    startDate: string;

    /**
     * The status of the entitlement
     */
    status: 'Active' | 'Expired' | 'Paused';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * The usage limit of the entitlement
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
export interface PromotionalEntitlementRevokeResponse {
  /**
   * Granted feature entitlement
   */
  data: PromotionalEntitlementRevokeResponse.Data;
}

export namespace PromotionalEntitlementRevokeResponse {
  /**
   * Granted feature entitlement
   */
  export interface Data {
    /**
     * Unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The description of the entitlement
     */
    description: string | null;

    /**
     * The end date of the promotional entitlement
     */
    endDate: string | null;

    /**
     * The enum values of the entitlement
     */
    enumValues: Array<string> | null;

    /**
     * The unique identifier for the environment
     */
    environmentId: string;

    /**
     * Feature group IDs associated with this entitlement
     */
    featureGroupIds: Array<string> | null;

    /**
     * The unique identifier of the entitlement feature
     */
    featureId: string;

    /**
     * Whether the entitlement has a soft limit
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether the entitlement has an unlimited usage
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Whether the entitlement is visible
     */
    isVisible: boolean;

    /**
     * The grant period of the promotional entitlement
     */
    period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom';

    /**
     * The reset period of the entitlement
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * The reset period configuration of the entitlement
     */
    resetPeriodConfiguration:
      | Data.YearlyResetPeriodConfig
      | Data.MonthlyResetPeriodConfig
      | Data.WeeklyResetPeriodConfig
      | null;

    /**
     * The start date of the entitlement
     */
    startDate: string;

    /**
     * The status of the entitlement
     */
    status: 'Active' | 'Expired' | 'Paused';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * The usage limit of the entitlement
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

export interface PromotionalEntitlementGrantParams {
  /**
   * Promotional entitlements to grant
   */
  promotionalEntitlements: Array<PromotionalEntitlementGrantParams.PromotionalEntitlement>;
}

export namespace PromotionalEntitlementGrantParams {
  /**
   * Single entitlement grant config
   */
  export interface PromotionalEntitlement {
    /**
     * The custom end date of the promotional entitlement
     */
    customEndDate: string | null;

    /**
     * The enum values of the entitlement
     */
    enumValues: Array<string> | null;

    /**
     * The unique identifier of the entitlement feature
     */
    featureId: string;

    /**
     * Whether the entitlement has a soft limit
     */
    hasSoftLimit: boolean | null;

    /**
     * Whether the entitlement has an unlimited usage
     */
    hasUnlimitedUsage: boolean | null;

    /**
     * Whether the entitlement is visible
     */
    isVisible: boolean | null;

    /**
     * The monthly reset period configuration of the entitlement, defined when reset
     * period is monthly
     */
    monthlyResetPeriodConfiguration: PromotionalEntitlement.MonthlyResetPeriodConfiguration | null;

    /**
     * The grant period of the promotional entitlement
     */
    period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom';

    /**
     * The reset period of the entitlement
     */
    resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

    /**
     * The usage limit of the entitlement
     */
    usageLimit: number | null;

    /**
     * The weekly reset period configuration of the entitlement, defined when reset
     * period is weekly
     */
    weeklyResetPeriodConfiguration: PromotionalEntitlement.WeeklyResetPeriodConfiguration | null;

    /**
     * The yearly reset period configuration of the entitlement, defined when reset
     * period is yearly
     */
    yearlyResetPeriodConfiguration: PromotionalEntitlement.YearlyResetPeriodConfiguration | null;
  }

  export namespace PromotionalEntitlement {
    /**
     * The monthly reset period configuration of the entitlement, defined when reset
     * period is monthly
     */
    export interface MonthlyResetPeriodConfiguration {
      /**
       * Reset anchor (SubscriptionStart or StartOfTheMonth)
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    /**
     * The weekly reset period configuration of the entitlement, defined when reset
     * period is weekly
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
     * The yearly reset period configuration of the entitlement, defined when reset
     * period is yearly
     */
    export interface YearlyResetPeriodConfiguration {
      /**
       * Reset anchor (SubscriptionStart)
       */
      accordingTo: 'SubscriptionStart';
    }
  }
}

export interface PromotionalEntitlementRevokeParams {
  /**
   * The unique identifier of the customer
   */
  customerId: string;
}

export declare namespace PromotionalEntitlements {
  export {
    type PromotionalEntitlementGrantResponse as PromotionalEntitlementGrantResponse,
    type PromotionalEntitlementRevokeResponse as PromotionalEntitlementRevokeResponse,
    type PromotionalEntitlementGrantParams as PromotionalEntitlementGrantParams,
    type PromotionalEntitlementRevokeParams as PromotionalEntitlementRevokeParams,
  };
}
