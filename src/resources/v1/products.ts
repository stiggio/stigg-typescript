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
}

export interface ProductListProductsParams extends MyCursorIDPageParams {}

export declare namespace Products {
  export {
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductListProductsParams as ProductListProductsParams,
  };
}
