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
import * as EventsAPI from './events';
import { EventReportParams, EventReportResponse, Events } from './events';
import * as FeaturesAPI from './features';
import {
  Feature,
  FeatureCreateFeatureParams,
  FeatureListFeaturesParams,
  FeatureListFeaturesResponse,
  FeatureListFeaturesResponsesMyCursorIDPage,
  FeatureUpdateFeatureParams,
  Features,
} from './features';
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
import * as AddonsAPI from './addons/addons';
import {
  Addon,
  AddonCreateParams,
  AddonListChargesParams,
  AddonListChargesResponse,
  AddonListChargesResponsesMyCursorIDPage,
  AddonListParams,
  AddonListResponse,
  AddonListResponsesMyCursorIDPage,
  AddonPublishParams,
  AddonPublishResponse,
  AddonRemoveDraftResponse,
  AddonUpdateParams,
  Addons,
} from './addons/addons';
import * as CreditsAPI from './credits/credits';
import {
  CreditGetAutoRechargeParams,
  CreditGetAutoRechargeResponse,
  CreditGetUsageParams,
  CreditGetUsageResponse,
  CreditListLedgerParams,
  CreditListLedgerResponse,
  CreditListLedgerResponsesMyCursorIDPage,
  Credits,
} from './credits/credits';
import * as CustomersAPI from './customers/customers';
import {
  CustomerCheckEntitlementParams,
  CustomerCheckEntitlementResponse,
  CustomerImportParams,
  CustomerImportResponse,
  CustomerIntegrationResponse,
  CustomerListParams,
  CustomerListResourcesParams,
  CustomerListResourcesResponse,
  CustomerListResourcesResponsesMyCursorIDPage,
  CustomerListResponse,
  CustomerListResponsesMyCursorIDPage,
  CustomerProvisionParams,
  CustomerResponse,
  CustomerRetrieveEntitlementsParams,
  CustomerRetrieveEntitlementsResponse,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';
import * as PlansAPI from './plans/plans';
import {
  Plan,
  PlanCreateParams,
  PlanListChargesParams,
  PlanListChargesResponse,
  PlanListChargesResponsesMyCursorIDPage,
  PlanListOverageChargesParams,
  PlanListOverageChargesResponse,
  PlanListOverageChargesResponsesMyCursorIDPage,
  PlanListParams,
  PlanListResponse,
  PlanListResponsesMyCursorIDPage,
  PlanPublishParams,
  PlanPublishResponse,
  PlanRemoveDraftResponse,
  PlanUpdateParams,
  Plans,
} from './plans/plans';
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
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
}

V1.Customers = Customers;
V1.Subscriptions = Subscriptions;
V1.Coupons = Coupons;
V1.Events = Events;
V1.Credits = Credits;
V1.Features = Features;
V1.Addons = Addons;
V1.Plans = Plans;
V1.Usage = Usage;
V1.Products = Products;

export declare namespace V1 {
  export {
    Customers as Customers,
    type CustomerIntegrationResponse as CustomerIntegrationResponse,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCheckEntitlementResponse as CustomerCheckEntitlementResponse,
    type CustomerImportResponse as CustomerImportResponse,
    type CustomerListResourcesResponse as CustomerListResourcesResponse,
    type CustomerRetrieveEntitlementsResponse as CustomerRetrieveEntitlementsResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerListResourcesResponsesMyCursorIDPage as CustomerListResourcesResponsesMyCursorIDPage,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerCheckEntitlementParams as CustomerCheckEntitlementParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerListResourcesParams as CustomerListResourcesParams,
    type CustomerProvisionParams as CustomerProvisionParams,
    type CustomerRetrieveEntitlementsParams as CustomerRetrieveEntitlementsParams,
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
    Credits as Credits,
    type CreditGetAutoRechargeResponse as CreditGetAutoRechargeResponse,
    type CreditGetUsageResponse as CreditGetUsageResponse,
    type CreditListLedgerResponse as CreditListLedgerResponse,
    type CreditListLedgerResponsesMyCursorIDPage as CreditListLedgerResponsesMyCursorIDPage,
    type CreditGetAutoRechargeParams as CreditGetAutoRechargeParams,
    type CreditGetUsageParams as CreditGetUsageParams,
    type CreditListLedgerParams as CreditListLedgerParams,
  };

  export {
    Features as Features,
    type Feature as Feature,
    type FeatureListFeaturesResponse as FeatureListFeaturesResponse,
    type FeatureListFeaturesResponsesMyCursorIDPage as FeatureListFeaturesResponsesMyCursorIDPage,
    type FeatureCreateFeatureParams as FeatureCreateFeatureParams,
    type FeatureListFeaturesParams as FeatureListFeaturesParams,
    type FeatureUpdateFeatureParams as FeatureUpdateFeatureParams,
  };

  export {
    Addons as Addons,
    type Addon as Addon,
    type AddonListResponse as AddonListResponse,
    type AddonListChargesResponse as AddonListChargesResponse,
    type AddonPublishResponse as AddonPublishResponse,
    type AddonRemoveDraftResponse as AddonRemoveDraftResponse,
    type AddonListResponsesMyCursorIDPage as AddonListResponsesMyCursorIDPage,
    type AddonListChargesResponsesMyCursorIDPage as AddonListChargesResponsesMyCursorIDPage,
    type AddonCreateParams as AddonCreateParams,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonListParams as AddonListParams,
    type AddonListChargesParams as AddonListChargesParams,
    type AddonPublishParams as AddonPublishParams,
  };

  export {
    Plans as Plans,
    type Plan as Plan,
    type PlanListResponse as PlanListResponse,
    type PlanListChargesResponse as PlanListChargesResponse,
    type PlanListOverageChargesResponse as PlanListOverageChargesResponse,
    type PlanPublishResponse as PlanPublishResponse,
    type PlanRemoveDraftResponse as PlanRemoveDraftResponse,
    type PlanListResponsesMyCursorIDPage as PlanListResponsesMyCursorIDPage,
    type PlanListChargesResponsesMyCursorIDPage as PlanListChargesResponsesMyCursorIDPage,
    type PlanListOverageChargesResponsesMyCursorIDPage as PlanListOverageChargesResponsesMyCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanListChargesParams as PlanListChargesParams,
    type PlanListOverageChargesParams as PlanListOverageChargesParams,
    type PlanPublishParams as PlanPublishParams,
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
