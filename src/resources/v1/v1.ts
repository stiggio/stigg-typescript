// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CouponsAPI from './coupons';
import {
  Coupon,
  CouponCreateParams,
  CouponListParams,
  CouponListResponse,
  CouponListResponsesMyCursorIDPage,
  CouponUpdateCouponParams,
  Coupons,
} from './coupons';
import * as ProductsAPI from './products';
import {
  Product,
  ProductCreateProductParams,
  ProductDuplicateProductParams,
  ProductListProductsParams,
  ProductListProductsResponse,
  ProductListProductsResponsesMyCursorIDPage,
  ProductUpdateProductParams,
  Products,
} from './products';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageHistoryParams,
  UsageHistoryResponse,
  UsageReportParams,
  UsageReportResponse,
} from './usage';
import * as CustomersAPI from './customers/customers';
import {
  CustomerImportParams,
  CustomerImportResponse,
  CustomerListParams,
  CustomerListResourcesParams,
  CustomerListResourcesResponse,
  CustomerListResourcesResponsesMyCursorIDPage,
  CustomerListResponse,
  CustomerListResponsesMyCursorIDPage,
  CustomerProvisionParams,
  CustomerResponse,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';
import * as EventsAPI from './events/events';
import { EventReportParams, EventReportResponse, Events } from './events/events';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  Subscription,
  SubscriptionCancelParams,
  SubscriptionDelegateParams,
  SubscriptionImportParams,
  SubscriptionImportResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionListResponsesMyCursorIDPage,
  SubscriptionMigrateParams,
  SubscriptionPreviewParams,
  SubscriptionPreviewResponse,
  SubscriptionProvisionParams,
  SubscriptionProvisionResponse,
  SubscriptionTransferParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions/subscriptions';

export class V1 extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
}

V1.Customers = Customers;
V1.Subscriptions = Subscriptions;
V1.Coupons = Coupons;
V1.Events = Events;
V1.Usage = Usage;
V1.Products = Products;

export declare namespace V1 {
  export {
    Customers as Customers,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerImportResponse as CustomerImportResponse,
    type CustomerListResourcesResponse as CustomerListResourcesResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerListResourcesResponsesMyCursorIDPage as CustomerListResourcesResponsesMyCursorIDPage,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerListResourcesParams as CustomerListResourcesParams,
    type CustomerProvisionParams as CustomerProvisionParams,
  };

  export {
    Subscriptions as Subscriptions,
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionImportResponse as SubscriptionImportResponse,
    type SubscriptionPreviewResponse as SubscriptionPreviewResponse,
    type SubscriptionProvisionResponse as SubscriptionProvisionResponse,
    type SubscriptionListResponsesMyCursorIDPage as SubscriptionListResponsesMyCursorIDPage,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionDelegateParams as SubscriptionDelegateParams,
    type SubscriptionImportParams as SubscriptionImportParams,
    type SubscriptionMigrateParams as SubscriptionMigrateParams,
    type SubscriptionPreviewParams as SubscriptionPreviewParams,
    type SubscriptionProvisionParams as SubscriptionProvisionParams,
    type SubscriptionTransferParams as SubscriptionTransferParams,
  };

  export {
    Coupons as Coupons,
    type Coupon as Coupon,
    type CouponListResponse as CouponListResponse,
    type CouponListResponsesMyCursorIDPage as CouponListResponsesMyCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponListParams as CouponListParams,
    type CouponUpdateCouponParams as CouponUpdateCouponParams,
  };

  export {
    Events as Events,
    type EventReportResponse as EventReportResponse,
    type EventReportParams as EventReportParams,
  };

  export {
    Usage as Usage,
    type UsageHistoryResponse as UsageHistoryResponse,
    type UsageReportResponse as UsageReportResponse,
    type UsageHistoryParams as UsageHistoryParams,
    type UsageReportParams as UsageReportParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductCreateProductParams as ProductCreateProductParams,
    type ProductDuplicateProductParams as ProductDuplicateProductParams,
    type ProductListProductsParams as ProductListProductsParams,
    type ProductUpdateProductParams as ProductUpdateProductParams,
  };
}
