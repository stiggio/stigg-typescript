// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations related to coupons
 */
export class Coupons extends APIResource {
  /**
   * Creates a new discount coupon with percentage or fixed amount off, applicable to
   * customer subscriptions.
   *
   * @example
   * ```ts
   * const coupon = await client.v1.coupons.create({
   *   id: 'id',
   *   amountsOff: [{ amount: 0, currency: 'usd' }],
   *   description: 'description',
   *   durationInMonths: 1,
   *   metadata: { foo: 'string' },
   *   name: 'name',
   *   percentOff: 1,
   * });
   * ```
   */
  create(params: CouponCreateParams, options?: RequestOptions): APIPromise<Coupon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/coupons', {
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
   * Retrieves a coupon by its unique identifier.
   *
   * @example
   * ```ts
   * const coupon = await client.v1.coupons.retrieve('x');
   * ```
   */
  retrieve(
    id: string,
    params: CouponRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Coupon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/coupons/${id}`, {
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
   * Retrieves a paginated list of coupons in the environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const couponListResponse of client.v1.coupons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CouponListResponsesMyCursorIDPage, CouponListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/coupons', MyCursorIDPage<CouponListResponse>, {
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
   * Archives a coupon, preventing it from being applied to new subscriptions.
   *
   * @example
   * ```ts
   * const coupon = await client.v1.coupons.archiveCoupon('x');
   * ```
   */
  archiveCoupon(
    id: string,
    params: CouponArchiveCouponParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Coupon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/coupons/${id}/archive`, {
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
   * Updates an existing coupon's properties such as name, description, and metadata.
   *
   * @example
   * ```ts
   * const coupon = await client.v1.coupons.updateCoupon('x');
   * ```
   */
  updateCoupon(id: string, params: CouponUpdateCouponParams, options?: RequestOptions): APIPromise<Coupon> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/coupons/${id}`, {
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

export type CouponListResponsesMyCursorIDPage = MyCursorIDPage<CouponListResponse>;

/**
 * Response object
 */
export interface Coupon {
  /**
   * Discount instrument with percentage or fixed amount
   */
  data: Coupon.Data;
}

export namespace Coupon {
  /**
   * Discount instrument with percentage or fixed amount
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Fixed amount discounts in different currencies
     */
    amountsOff: Array<Data.AmountsOff> | null;

    /**
     * The unique identifier for the entity in the billing provider
     */
    billingId: string | null;

    /**
     * The URL to the entity in the billing provider
     */
    billingLinkUrl: string | null;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Description of the coupon
     */
    description: string | null;

    /**
     * Duration of the coupon validity in months
     */
    durationInMonths: number | null;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string } | null;

    /**
     * Name of the coupon
     */
    name: string;

    /**
     * Percentage discount off the original price
     */
    percentOff: number | null;

    /**
     * The source of the coupon
     */
    source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE' | null;

    /**
     * Current status of the coupon
     */
    status: 'ACTIVE' | 'ARCHIVED';

    /**
     * Type of the coupon (percentage or fixed amount)
     */
    type: 'FIXED' | 'PERCENTAGE';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }

  export namespace Data {
    /**
     * Monetary amount with currency
     */
    export interface AmountsOff {
      /**
       * The price amount
       */
      amount: number;

      /**
       * ISO 4217 currency code
       */
      currency:
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
 * Discount instrument with percentage or fixed amount
 */
export interface CouponListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Fixed amount discounts in different currencies
   */
  amountsOff: Array<CouponListResponse.AmountsOff> | null;

  /**
   * The unique identifier for the entity in the billing provider
   */
  billingId: string | null;

  /**
   * The URL to the entity in the billing provider
   */
  billingLinkUrl: string | null;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Description of the coupon
   */
  description: string | null;

  /**
   * Duration of the coupon validity in months
   */
  durationInMonths: number | null;

  /**
   * Metadata associated with the entity
   */
  metadata: { [key: string]: string } | null;

  /**
   * Name of the coupon
   */
  name: string;

  /**
   * Percentage discount off the original price
   */
  percentOff: number | null;

  /**
   * The source of the coupon
   */
  source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE' | null;

  /**
   * Current status of the coupon
   */
  status: 'ACTIVE' | 'ARCHIVED';

  /**
   * Type of the coupon (percentage or fixed amount)
   */
  type: 'FIXED' | 'PERCENTAGE';

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

export namespace CouponListResponse {
  /**
   * Monetary amount with currency
   */
  export interface AmountsOff {
    /**
     * The price amount
     */
    amount: number;

    /**
     * ISO 4217 currency code
     */
    currency:
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

export interface CouponCreateParams {
  /**
   * Body param: The unique identifier for the entity
   */
  id: string;

  /**
   * Body param: Fixed amount discounts in different currencies
   */
  amountsOff: Array<CouponCreateParams.AmountsOff> | null;

  /**
   * Body param: Description of the coupon
   */
  description: string | null;

  /**
   * Body param: Duration of the coupon validity in months
   */
  durationInMonths: number | null;

  /**
   * Body param: Metadata associated with the entity
   */
  metadata: { [key: string]: string } | null;

  /**
   * Body param: Name of the coupon
   */
  name: string;

  /**
   * Body param: Percentage discount off the original price
   */
  percentOff: number | null;

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

export namespace CouponCreateParams {
  /**
   * Monetary amount with currency
   */
  export interface AmountsOff {
    /**
     * The price amount
     */
    amount: number;

    /**
     * ISO 4217 currency code
     */
    currency:
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

export interface CouponRetrieveParams {
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

export interface CouponListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by entity ID
   */
  id?: string;

  /**
   * Query param: Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: CouponListParams.CreatedAt;

  /**
   * Query param: Filter by coupon status. Supports comma-separated values for
   * multiple statuses
   */
  status?: Array<'ACTIVE' | 'ARCHIVED'>;

  /**
   * Query param: Filter by coupon type (FIXED or PERCENTAGE)
   */
  type?: 'FIXED' | 'PERCENTAGE';

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

export namespace CouponListParams {
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

export interface CouponArchiveCouponParams {
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

export interface CouponUpdateCouponParams {
  /**
   * Body param: Description of the coupon
   */
  description?: string | null;

  /**
   * Body param: Metadata associated with the entity
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: Name of the coupon
   */
  name?: string;

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

export declare namespace Coupons {
  export {
    type Coupon as Coupon,
    type CouponListResponse as CouponListResponse,
    type CouponListResponsesMyCursorIDPage as CouponListResponsesMyCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponRetrieveParams as CouponRetrieveParams,
    type CouponListParams as CouponListParams,
    type CouponArchiveCouponParams as CouponArchiveCouponParams,
    type CouponUpdateCouponParams as CouponUpdateCouponParams,
  };
}
