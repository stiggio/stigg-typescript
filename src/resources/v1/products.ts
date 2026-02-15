// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Products extends APIResource {
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
}

export type ProductListProductsResponsesMyCursorIDPage = MyCursorIDPage<ProductListProductsResponse>;

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

export declare namespace Products {
  export {
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductListProductsParams as ProductListProductsParams,
  };
}
