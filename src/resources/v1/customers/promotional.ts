// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Promotional extends APIResource {
  /**
   * Create a new Promotional Entitlements
   */
  create(
    customerID: string,
    body: PromotionalCreateParams,
    options?: RequestOptions,
  ): APIPromise<PromotionalCreateResponse> {
    return this._client.post(path`/api/v1/customers/${customerID}/promotional`, { body, ...options });
  }

  /**
   * Perform revocation on a Promotional Entitlement
   */
  revoke(
    featureID: string,
    params: PromotionalRevokeParams,
    options?: RequestOptions,
  ): APIPromise<PromotionalRevokeResponse> {
    const { customerId } = params;
    return this._client.delete(
      path`/api/v1/customers/${customerId}/promotional/featureId/${featureID}`,
      options,
    );
  }
}

export interface PromotionalCreateResponse {
  data: Array<PromotionalCreateResponse.Data>;
}

export namespace PromotionalCreateResponse {
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
    resetPeriodConfiguration: Data.AccordingTo | Data.AccordingTo | Data.AccordingTo | null;

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
    export interface AccordingTo {
      /**
       * Yearly reset period according to
       */
      accordingTo: 'SubscriptionStart';
    }

    export interface AccordingTo {
      /**
       * Monthly reset period according to
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    export interface AccordingTo {
      /**
       * Weekly reset period according to
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

export interface PromotionalRevokeResponse {
  data: PromotionalRevokeResponse.Data;
}

export namespace PromotionalRevokeResponse {
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
    resetPeriodConfiguration: Data.AccordingTo | Data.AccordingTo | Data.AccordingTo | null;

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
    export interface AccordingTo {
      /**
       * Yearly reset period according to
       */
      accordingTo: 'SubscriptionStart';
    }

    export interface AccordingTo {
      /**
       * Monthly reset period according to
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    export interface AccordingTo {
      /**
       * Weekly reset period according to
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

export interface PromotionalCreateParams {
  /**
   * Promotional entitlements to grant
   */
  promotionalEntitlements: Array<PromotionalCreateParams.PromotionalEntitlement>;
}

export namespace PromotionalCreateParams {
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
       * Monthly reset period according to
       */
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    /**
     * The weekly reset period configuration of the entitlement, defined when reset
     * period is weekly
     */
    export interface WeeklyResetPeriodConfiguration {
      /**
       * Weekly reset period according to
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
       * Yearly reset period according to
       */
      accordingTo: 'SubscriptionStart';
    }
  }
}

export interface PromotionalRevokeParams {
  /**
   * The unique identifier of the entitlement customer
   */
  customerId: string;
}

export declare namespace Promotional {
  export {
    type PromotionalCreateResponse as PromotionalCreateResponse,
    type PromotionalRevokeResponse as PromotionalRevokeResponse,
    type PromotionalCreateParams as PromotionalCreateParams,
    type PromotionalRevokeParams as PromotionalRevokeParams,
  };
}
