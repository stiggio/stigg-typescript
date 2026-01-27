// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CouponsAPI from './coupons';
import {
  CouponCreateParams,
  CouponCreateResponse,
  CouponListParams,
  CouponListResponse,
  CouponRetrieveResponse,
  Coupons,
} from './coupons';
import * as CustomersAPI from './customers/customers';
import {
  CustomerCreateParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerResponse,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDelegateParams,
  SubscriptionDelegateResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionMigrateParams,
  SubscriptionMigrateResponse,
  SubscriptionPreviewParams,
  SubscriptionPreviewResponse,
  SubscriptionRetrieveResponse,
  SubscriptionTransferParams,
  SubscriptionTransferResponse,
  Subscriptions,
} from './subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);

  /**
   * Create events
   */
  createEvent(body: V1CreateEventParams, options?: RequestOptions): APIPromise<V1CreateEventResponse> {
    return this._client.post('/api/v1/events', { body, ...options });
  }

  /**
   * Create a new Usage
   */
  createUsage(body: V1CreateUsageParams, options?: RequestOptions): APIPromise<V1CreateUsageResponse> {
    return this._client.post('/api/v1/usage', { body, ...options });
  }
}

export interface V1CreateEventResponse {
  data: unknown;
}

export interface V1CreateUsageResponse {
  data: Array<V1CreateUsageResponse.Data>;
}

export namespace V1CreateUsageResponse {
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
     * Customer id
     */
    customerId: string;

    /**
     * Feature id
     */
    featureId: string;

    /**
     * Timestamp
     */
    timestamp: string;

    /**
     * The usage measurement record
     */
    value: number;

    /**
     * The current measured usage value
     */
    currentUsage?: number | null;

    /**
     * The date when the next usage reset will occur
     */
    nextResetDate?: string | null;

    /**
     * Resource id
     */
    resourceId?: string | null;

    /**
     * The end date of the usage period in which this measurement resides (for
     * entitlements with a reset period)
     */
    usagePeriodEnd?: string | null;

    /**
     * The start date of the usage period in which this measurement resides (for
     * entitlements with a reset period)
     */
    usagePeriodStart?: string | null;
  }
}

export interface V1CreateEventParams {
  /**
   * A list of usage events to report
   */
  events: Array<V1CreateEventParams.Event>;
}

export namespace V1CreateEventParams {
  export interface Event {
    /**
     * Customer id
     */
    customerId: string;

    /**
     * The name of the usage event
     */
    eventName: string;

    /**
     * Idempotency key
     */
    idempotencyKey: string;

    /**
     * Dimensions associated with the usage event
     */
    dimensions?: { [key: string]: string | number | boolean };

    /**
     * Resource id
     */
    resourceId?: string | null;

    /**
     * Timestamp
     */
    timestamp?: string;
  }
}

export interface V1CreateUsageParams {
  /**
   * A list of usage reports to be submitted in bulk
   */
  usages: Array<V1CreateUsageParams.Usage>;
}

export namespace V1CreateUsageParams {
  export interface Usage {
    /**
     * Customer id
     */
    customerId: string;

    /**
     * Feature id
     */
    featureId: string;

    /**
     * The value to report for usage
     */
    value: number;

    /**
     * Timestamp of when the record was created
     */
    createdAt?: string;

    /**
     * Additional dimensions for the usage report
     */
    dimensions?: { [key: string]: string | number | boolean };

    /**
     * Resource id
     */
    resourceId?: string | null;

    /**
     * The method by which the usage value should be updated
     */
    updateBehavior?: 'DELTA' | 'SET';
  }
}

V1.Customers = Customers;
V1.Subscriptions = Subscriptions;
V1.Coupons = Coupons;

export declare namespace V1 {
  export {
    type V1CreateEventResponse as V1CreateEventResponse,
    type V1CreateUsageResponse as V1CreateUsageResponse,
    type V1CreateEventParams as V1CreateEventParams,
    type V1CreateUsageParams as V1CreateUsageParams,
  };

  export {
    Customers as Customers,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDelegateResponse as SubscriptionDelegateResponse,
    type SubscriptionMigrateResponse as SubscriptionMigrateResponse,
    type SubscriptionPreviewResponse as SubscriptionPreviewResponse,
    type SubscriptionTransferResponse as SubscriptionTransferResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDelegateParams as SubscriptionDelegateParams,
    type SubscriptionMigrateParams as SubscriptionMigrateParams,
    type SubscriptionPreviewParams as SubscriptionPreviewParams,
    type SubscriptionTransferParams as SubscriptionTransferParams,
  };

  export {
    Coupons as Coupons,
    type CouponCreateResponse as CouponCreateResponse,
    type CouponRetrieveResponse as CouponRetrieveResponse,
    type CouponListResponse as CouponListResponse,
    type CouponCreateParams as CouponCreateParams,
    type CouponListParams as CouponListParams,
  };
}
