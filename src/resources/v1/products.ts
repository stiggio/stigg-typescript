// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Archives a product, preventing new subscriptions. All plans and addons are
   * archived.
   */
  archiveProduct(id: string, options?: RequestOptions): APIPromise<ProductArchiveProductResponse> {
    return this._client.post(path`/api/v1/products/${id}/archive`, options);
  }

  /**
   * Creates a new product.
   */
  createProduct(
    body: ProductCreateProductParams,
    options?: RequestOptions,
  ): APIPromise<ProductCreateProductResponse> {
    return this._client.post('/api/v1/products', { body, ...options });
  }

  /**
   * Duplicates an existing product, including its plans, addons, and configuration.
   */
  duplicateProduct(
    id: string,
    body: ProductDuplicateProductParams,
    options?: RequestOptions,
  ): APIPromise<ProductDuplicateProductResponse> {
    return this._client.post(path`/api/v1/products/${id}/duplicate`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of products in the environment.
   */
  listProducts(
    query: ProductListProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListProductsResponsesMyCursorIDPage, ProductListProductsResponse> {
    return this._client.getAPIList('/api/v1/products', MyCursorIDPage<ProductListProductsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Restores an archived product, allowing new subscriptions to be created.
   */
  unarchiveProduct(id: string, options?: RequestOptions): APIPromise<ProductUnarchiveProductResponse> {
    return this._client.post(path`/api/v1/products/${id}/unarchive`, options);
  }

  /**
   * Updates an existing product's properties such as display name, description, and
   * metadata.
   */
  updateProduct(
    id: string,
    body: ProductUpdateProductParams,
    options?: RequestOptions,
  ): APIPromise<ProductUpdateProductResponse> {
    return this._client.patch(path`/api/v1/products/${id}`, { body, ...options });
  }
}

export type ProductListProductsResponsesMyCursorIDPage = MyCursorIDPage<ProductListProductsResponse>;

/**
 * Response object
 */
export interface ProductArchiveProductResponse {
  /**
   * Product configuration object
   */
  data: ProductArchiveProductResponse.Data;
}

export namespace ProductArchiveProductResponse {
  /**
   * Product configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the product
     */
    description: string | null;

    /**
     * Display name of the product
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * Indicates if multiple subscriptions to this product are allowed
     */
    multipleSubscriptions: boolean;

    /**
     * The status of the product
     */
    status: 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Product behavior settings for subscription lifecycle management.
     */
    productSettings?: Data.ProductSettings;
  }

  export namespace Data {
    /**
     * Product behavior settings for subscription lifecycle management.
     */
    export interface ProductSettings {
      /**
       * Time when the subscription will be cancelled
       */
      subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

      /**
       * Setup for the end of the subscription
       */
      subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

      /**
       * Setup for the start of the subscription
       */
      subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

      /**
       * ID of the plan to downgrade to at the end of the billing period
       */
      downgradePlanId?: string | null;

      /**
       * Indicates if the subscription should be prorated at the end of the billing
       * period
       */
      prorateAtEndOfBillingPeriod?: boolean | null;

      /**
       * ID of the plan to start the subscription with
       */
      subscriptionStartPlanId?: string | null;
    }
  }
}

/**
 * Response object
 */
export interface ProductCreateProductResponse {
  /**
   * Product configuration object
   */
  data: ProductCreateProductResponse.Data;
}

export namespace ProductCreateProductResponse {
  /**
   * Product configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the product
     */
    description: string | null;

    /**
     * Display name of the product
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * Indicates if multiple subscriptions to this product are allowed
     */
    multipleSubscriptions: boolean;

    /**
     * The status of the product
     */
    status: 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Product behavior settings for subscription lifecycle management.
     */
    productSettings?: Data.ProductSettings;
  }

  export namespace Data {
    /**
     * Product behavior settings for subscription lifecycle management.
     */
    export interface ProductSettings {
      /**
       * Time when the subscription will be cancelled
       */
      subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

      /**
       * Setup for the end of the subscription
       */
      subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

      /**
       * Setup for the start of the subscription
       */
      subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

      /**
       * ID of the plan to downgrade to at the end of the billing period
       */
      downgradePlanId?: string | null;

      /**
       * Indicates if the subscription should be prorated at the end of the billing
       * period
       */
      prorateAtEndOfBillingPeriod?: boolean | null;

      /**
       * ID of the plan to start the subscription with
       */
      subscriptionStartPlanId?: string | null;
    }
  }
}

/**
 * Response object
 */
export interface ProductDuplicateProductResponse {
  /**
   * Product configuration object
   */
  data: ProductDuplicateProductResponse.Data;
}

export namespace ProductDuplicateProductResponse {
  /**
   * Product configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the product
     */
    description: string | null;

    /**
     * Display name of the product
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * Indicates if multiple subscriptions to this product are allowed
     */
    multipleSubscriptions: boolean;

    /**
     * The status of the product
     */
    status: 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Product behavior settings for subscription lifecycle management.
     */
    productSettings?: Data.ProductSettings;
  }

  export namespace Data {
    /**
     * Product behavior settings for subscription lifecycle management.
     */
    export interface ProductSettings {
      /**
       * Time when the subscription will be cancelled
       */
      subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

      /**
       * Setup for the end of the subscription
       */
      subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

      /**
       * Setup for the start of the subscription
       */
      subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

      /**
       * ID of the plan to downgrade to at the end of the billing period
       */
      downgradePlanId?: string | null;

      /**
       * Indicates if the subscription should be prorated at the end of the billing
       * period
       */
      prorateAtEndOfBillingPeriod?: boolean | null;

      /**
       * ID of the plan to start the subscription with
       */
      subscriptionStartPlanId?: string | null;
    }
  }
}

/**
 * Product configuration object
 */
export interface ProductListProductsResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Description of the product
   */
  description: string | null;

  /**
   * Display name of the product
   */
  displayName: string;

  /**
   * Metadata associated with the entity
   */
  metadata: { [key: string]: string };

  /**
   * Indicates if multiple subscriptions to this product are allowed
   */
  multipleSubscriptions: boolean;

  /**
   * The status of the product
   */
  status: 'PUBLISHED' | 'ARCHIVED';

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * Product behavior settings for subscription lifecycle management.
   */
  productSettings?: ProductListProductsResponse.ProductSettings;
}

export namespace ProductListProductsResponse {
  /**
   * Product behavior settings for subscription lifecycle management.
   */
  export interface ProductSettings {
    /**
     * Time when the subscription will be cancelled
     */
    subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

    /**
     * Setup for the end of the subscription
     */
    subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

    /**
     * Setup for the start of the subscription
     */
    subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

    /**
     * ID of the plan to downgrade to at the end of the billing period
     */
    downgradePlanId?: string | null;

    /**
     * Indicates if the subscription should be prorated at the end of the billing
     * period
     */
    prorateAtEndOfBillingPeriod?: boolean | null;

    /**
     * ID of the plan to start the subscription with
     */
    subscriptionStartPlanId?: string | null;
  }
}

/**
 * Response object
 */
export interface ProductUnarchiveProductResponse {
  /**
   * Product configuration object
   */
  data: ProductUnarchiveProductResponse.Data;
}

export namespace ProductUnarchiveProductResponse {
  /**
   * Product configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the product
     */
    description: string | null;

    /**
     * Display name of the product
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * Indicates if multiple subscriptions to this product are allowed
     */
    multipleSubscriptions: boolean;

    /**
     * The status of the product
     */
    status: 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Product behavior settings for subscription lifecycle management.
     */
    productSettings?: Data.ProductSettings;
  }

  export namespace Data {
    /**
     * Product behavior settings for subscription lifecycle management.
     */
    export interface ProductSettings {
      /**
       * Time when the subscription will be cancelled
       */
      subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

      /**
       * Setup for the end of the subscription
       */
      subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

      /**
       * Setup for the start of the subscription
       */
      subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

      /**
       * ID of the plan to downgrade to at the end of the billing period
       */
      downgradePlanId?: string | null;

      /**
       * Indicates if the subscription should be prorated at the end of the billing
       * period
       */
      prorateAtEndOfBillingPeriod?: boolean | null;

      /**
       * ID of the plan to start the subscription with
       */
      subscriptionStartPlanId?: string | null;
    }
  }
}

/**
 * Response object
 */
export interface ProductUpdateProductResponse {
  /**
   * Product configuration object
   */
  data: ProductUpdateProductResponse.Data;
}

export namespace ProductUpdateProductResponse {
  /**
   * Product configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the product
     */
    description: string | null;

    /**
     * Display name of the product
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * Indicates if multiple subscriptions to this product are allowed
     */
    multipleSubscriptions: boolean;

    /**
     * The status of the product
     */
    status: 'PUBLISHED' | 'ARCHIVED';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Product behavior settings for subscription lifecycle management.
     */
    productSettings?: Data.ProductSettings;
  }

  export namespace Data {
    /**
     * Product behavior settings for subscription lifecycle management.
     */
    export interface ProductSettings {
      /**
       * Time when the subscription will be cancelled
       */
      subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

      /**
       * Setup for the end of the subscription
       */
      subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

      /**
       * Setup for the start of the subscription
       */
      subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

      /**
       * ID of the plan to downgrade to at the end of the billing period
       */
      downgradePlanId?: string | null;

      /**
       * Indicates if the subscription should be prorated at the end of the billing
       * period
       */
      prorateAtEndOfBillingPeriod?: boolean | null;

      /**
       * ID of the plan to start the subscription with
       */
      subscriptionStartPlanId?: string | null;
    }
  }
}

export interface ProductCreateProductParams {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Description of the product
   */
  description?: string | null;

  /**
   * Display name of the product
   */
  displayName?: string;

  /**
   * Additional metadata for the product
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Indicates if multiple subscriptions to this product are allowed
   */
  multipleSubscriptions?: boolean;
}

export interface ProductDuplicateProductParams {
  /**
   * Description of the product
   */
  description?: string | null;

  /**
   * Display name of the product
   */
  displayName?: string;
}

export interface ProductListProductsParams extends MyCursorIDPageParams {
  /**
   * Filter by entity ID
   */
  id?: string;

  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: ProductListProductsParams.CreatedAt;

  /**
   * Filter by product status. Supports comma-separated values for multiple statuses
   */
  status?: string;
}

export namespace ProductListProductsParams {
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

export interface ProductUpdateProductParams {
  /**
   * Description of the product
   */
  description?: string | null;

  /**
   * Display name of the product
   */
  displayName?: string;

  /**
   * Additional metadata for the product
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Indicates if multiple subscriptions to this product are allowed
   */
  multipleSubscriptions?: boolean;

  productSettings?: ProductUpdateProductParams.ProductSettings;

  /**
   * Rule defining when usage resets upon subscription update.
   */
  usageResetCutoffRule?: ProductUpdateProductParams.UsageResetCutoffRule;
}

export namespace ProductUpdateProductParams {
  export interface ProductSettings {
    /**
     * Time when the subscription will be cancelled
     */
    subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

    /**
     * Setup for the end of the subscription
     */
    subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION';

    /**
     * Setup for the start of the subscription
     */
    subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN';

    /**
     * ID of the plan to downgrade to at the end of the billing period
     */
    downgradePlanId?: string | null;

    prorateAtEndOfBillingPeriod?: boolean | null;

    /**
     * ID of the plan to start the subscription with
     */
    subscriptionStartPlanId?: string | null;
  }

  /**
   * Rule defining when usage resets upon subscription update.
   */
  export interface UsageResetCutoffRule {
    /**
     * Behavior of the usage reset cutoff rule
     */
    behavior: 'NEVER_RESET' | 'ALWAYS_RESET' | 'BILLING_PERIOD_CHANGE';
  }
}

export declare namespace Products {
  export {
    type ProductArchiveProductResponse as ProductArchiveProductResponse,
    type ProductCreateProductResponse as ProductCreateProductResponse,
    type ProductDuplicateProductResponse as ProductDuplicateProductResponse,
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductUnarchiveProductResponse as ProductUnarchiveProductResponse,
    type ProductUpdateProductResponse as ProductUpdateProductResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductCreateProductParams as ProductCreateProductParams,
    type ProductDuplicateProductParams as ProductDuplicateProductParams,
    type ProductListProductsParams as ProductListProductsParams,
    type ProductUpdateProductParams as ProductUpdateProductParams,
  };
}
