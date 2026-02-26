// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Creates a new plan in draft status.
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<PlanCreateResponse> {
    return this._client.post('/api/v1/plans', { body, ...options });
  }

  /**
   * Retrieves a plan by its unique identifier, including entitlements and pricing
   * details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/api/v1/plans/${id}`, options);
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
}

export type PlanListResponsesMyCursorIDPage = MyCursorIDPage<PlanListResponse>;

/**
 * Response object
 */
export interface PlanCreateResponse {
  /**
   * Plan configuration object
   */
  data: PlanCreateResponse.Data;
}

export namespace PlanCreateResponse {
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
 * Response object
 */
export interface PlanRetrieveResponse {
  /**
   * Plan configuration object
   */
  data: PlanRetrieveResponse.Data;
}

export namespace PlanRetrieveResponse {
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

export declare namespace Plans {
  export {
    type PlanCreateResponse as PlanCreateResponse,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanListResponse as PlanListResponse,
    type PlanListResponsesMyCursorIDPage as PlanListResponsesMyCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanListParams as PlanListParams,
  };
}
