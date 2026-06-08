// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations related to products
 */
export class Products extends APIResource {
  /**
   * Archives a product, preventing new subscriptions. All plans and addons are
   * archived.
   *
   * @example
   * ```ts
   * const product = await client.v1.products.archiveProduct(
   *   'x',
   * );
   * ```
   */
  archiveProduct(
    id: string,
    params: ProductArchiveProductParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/products/${id}/archive`, {
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
   * Creates a new product.
   *
   * @example
   * ```ts
   * const product = await client.v1.products.createProduct({
   *   id: 'id',
   *   displayName: 'displayName',
   * });
   * ```
   */
  createProduct(params: ProductCreateProductParams, options?: RequestOptions): APIPromise<Product> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/products', {
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
   * Duplicates an existing product, including its plans, addons, and configuration.
   *
   * @example
   * ```ts
   * const product = await client.v1.products.duplicateProduct(
   *   'x',
   *   { targetId: 'targetId' },
   * );
   * ```
   */
  duplicateProduct(
    id: string,
    params: ProductDuplicateProductParams,
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/products/${id}/duplicate`, {
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
   * Retrieves a paginated list of products in the environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListProductsResponse of client.v1.products.listProducts()) {
   *   // ...
   * }
   * ```
   */
  listProducts(
    params: ProductListProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListProductsResponsesMyCursorIDPage, ProductListProductsResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/products', MyCursorIDPage<ProductListProductsResponse>, {
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
   * Restores an archived product, allowing new subscriptions to be created.
   *
   * @example
   * ```ts
   * const product = await client.v1.products.unarchiveProduct(
   *   'x',
   * );
   * ```
   */
  unarchiveProduct(
    id: string,
    params: ProductUnarchiveProductParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/products/${id}/unarchive`, {
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
   * Updates an existing product's properties such as display name, description, and
   * metadata.
   *
   * @example
   * ```ts
   * const product = await client.v1.products.updateProduct('x');
   * ```
   */
  updateProduct(
    id: string,
    params: ProductUpdateProductParams,
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/products/${id}`, {
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
}

export type ProductListProductsResponsesMyCursorIDPage = MyCursorIDPage<ProductListProductsResponse>;

/**
 * Response object
 */
export interface Product {
  /**
   * Product configuration object
   */
  data: Product.Data;
}

export namespace Product {
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

export interface ProductArchiveProductParams {
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

export interface ProductCreateProductParams {
  /**
   * Body param: The unique identifier for the entity
   */
  id: string;

  /**
   * Body param: Display name of the product
   */
  displayName: string;

  /**
   * Body param: Description of the product
   */
  description?: string | null;

  /**
   * Body param: Additional metadata for the product
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: Indicates if multiple subscriptions to this product are allowed
   */
  multipleSubscriptions?: boolean;

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

export interface ProductDuplicateProductParams {
  /**
   * Body param: The unique identifier for the entity
   */
  targetId: string;

  /**
   * Body param: Description of the product
   */
  description?: string | null;

  /**
   * Body param: Display name of the product
   */
  displayName?: string;

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

export interface ProductListProductsParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by entity ID
   */
  id?: string;

  /**
   * Query param: Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: ProductListProductsParams.CreatedAt;

  /**
   * Query param: Filter by product status. Supports comma-separated values for
   * multiple statuses
   */
  status?: Array<'PUBLISHED' | 'ARCHIVED'>;

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

export interface ProductUnarchiveProductParams {
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

export interface ProductUpdateProductParams {
  /**
   * Body param: Description of the product
   */
  description?: string | null;

  /**
   * Body param: Display name of the product
   */
  displayName?: string;

  /**
   * Body param: Additional metadata for the product
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: Indicates if multiple subscriptions to this product are allowed
   */
  multipleSubscriptions?: boolean;

  /**
   * Body param
   */
  productSettings?: ProductUpdateProductParams.ProductSettings;

  /**
   * Body param: Rule defining when usage resets upon subscription update.
   */
  usageResetCutoffRule?: ProductUpdateProductParams.UsageResetCutoffRule;

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
    type Product as Product,
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductArchiveProductParams as ProductArchiveProductParams,
    type ProductCreateProductParams as ProductCreateProductParams,
    type ProductDuplicateProductParams as ProductDuplicateProductParams,
    type ProductListProductsParams as ProductListProductsParams,
    type ProductUnarchiveProductParams as ProductUnarchiveProductParams,
    type ProductUpdateProductParams as ProductUpdateProductParams,
  };
}
