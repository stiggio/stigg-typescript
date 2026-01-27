// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Coupons extends APIResource {
  /**
   * Create a new Coupon
   */
  create(body: CouponCreateParams, options?: RequestOptions): APIPromise<CouponCreateResponse> {
    return this._client.post('/api/v1/coupons', { body, ...options });
  }

  /**
   * Get a single Coupon by id
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CouponRetrieveResponse> {
    return this._client.get(path`/api/v1/coupons/${id}`, options);
  }

  /**
   * Get a list of Coupons
   */
  list(
    query: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CouponListResponse> {
    return this._client.get('/api/v1/coupons', { query, ...options });
  }
}

export interface CouponCreateResponse {
  data: CouponCreateResponse.Data;
}

export namespace CouponCreateResponse {
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
    export interface AmountsOff {
      /**
       * The price amount
       */
      amount: number;

      /**
       * The price currency
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

export interface CouponRetrieveResponse {
  data: CouponRetrieveResponse.Data;
}

export namespace CouponRetrieveResponse {
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
    export interface AmountsOff {
      /**
       * The price amount
       */
      amount: number;

      /**
       * The price currency
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

export interface CouponListResponse {
  data: Array<CouponListResponse.Data>;

  /**
   * Pagination information including cursors for navigation
   */
  pagination: CouponListResponse.Pagination;
}

export namespace CouponListResponse {
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
    export interface AmountsOff {
      /**
       * The price amount
       */
      amount: number;

      /**
       * The price currency
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

  /**
   * Pagination information including cursors for navigation
   */
  export interface Pagination {
    /**
     * Cursor to fetch the next page (use with after parameter), null if no more pages
     */
    next: string | null;

    /**
     * Cursor to fetch the previous page (use with before parameter), null if no
     * previous pages
     */
    prev: string | null;
  }
}

export interface CouponCreateParams {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Fixed amount discounts in different currencies
   */
  amountsOff: Array<CouponCreateParams.AmountsOff> | null;

  /**
   * Description of the coupon
   */
  description: string | null;

  /**
   * Duration of the coupon validity in months
   */
  durationInMonths: number | null;

  /**
   * Name of the coupon
   */
  name: string;

  /**
   * Percentage discount off the original price
   */
  percentOff: number | null;

  /**
   * Metadata associated with the entity
   */
  additionalMetaData?: unknown;
}

export namespace CouponCreateParams {
  export interface AmountsOff {
    /**
     * The price amount
     */
    amount: number;

    /**
     * The price currency
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

export interface CouponListParams {
  /**
   * Starting after this UUID for pagination
   */
  after?: string;

  /**
   * Ending before this UUID for pagination
   */
  before?: string;

  /**
   * Items per page
   */
  limit?: number;
}

export declare namespace Coupons {
  export {
    type CouponCreateResponse as CouponCreateResponse,
    type CouponRetrieveResponse as CouponRetrieveResponse,
    type CouponListResponse as CouponListResponse,
    type CouponCreateParams as CouponCreateParams,
    type CouponListParams as CouponListParams,
  };
}
