// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContractsAPI from './contracts';
import {
  ContractCreateParams,
  ContractCreateResponse,
  ContractDeleteParams,
  ContractDeleteResponse,
  ContractListParams,
  ContractListResponse,
  ContractListResponsesMyCursorIDPage,
  ContractRetrieveParams,
  ContractRetrieveResponse,
  ContractUpdateParams,
  ContractUpdateResponse,
  Contracts,
} from './contracts';
import * as CouponsAPI from './coupons';
import {
  Coupon,
  CouponArchiveCouponParams,
  CouponCreateParams,
  CouponListParams,
  CouponListResponse,
  CouponListResponsesMyCursorIDPage,
  CouponRetrieveParams,
  CouponUpdateCouponParams,
  Coupons,
} from './coupons';
import * as FeaturesAPI from './features';
import {
  Feature,
  FeatureArchiveFeatureParams,
  FeatureCreateFeatureParams,
  FeatureListFeaturesParams,
  FeatureListFeaturesResponse,
  FeatureListFeaturesResponsesMyCursorIDPage,
  FeatureRetrieveFeatureParams,
  FeatureUnarchiveFeatureParams,
  FeatureUpdateFeatureParams,
  Features,
} from './features';
import * as ProductsAPI from './products';
import {
  Product,
  ProductArchiveProductParams,
  ProductCreateProductParams,
  ProductDuplicateProductParams,
  ProductListProductsParams,
  ProductListProductsResponse,
  ProductListProductsResponsesMyCursorIDPage,
  ProductUnarchiveProductParams,
  ProductUpdateProductParams,
  Products,
} from './products';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageEstimateParams,
  UsageEstimateResponse,
  UsageHistoryParams,
  UsageHistoryResponse,
  UsageReportParams,
  UsageReportResponse,
} from './usage';
import * as AddonsAPI from './addons/addons';
import {
  Addon,
  AddonArchiveParams,
  AddonCreateDraftParams,
  AddonCreateParams,
  AddonListChargesParams,
  AddonListChargesResponse,
  AddonListChargesResponsesMyCursorIDPage,
  AddonListParams,
  AddonListResponse,
  AddonListResponsesMyCursorIDPage,
  AddonPublishParams,
  AddonPublishResponse,
  AddonRemoveDraftParams,
  AddonRemoveDraftResponse,
  AddonRetrieveParams,
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
  CustomerArchiveParams,
  CustomerCheckEntitlementParams,
  CustomerCheckEntitlementResponse,
  CustomerImportParams,
  CustomerImportResponse,
  CustomerIntegrationResponse,
  CustomerListContractsParams,
  CustomerListContractsResponse,
  CustomerListInvoicesParams,
  CustomerListInvoicesResponse,
  CustomerListInvoicesResponsesMyCursorIDPage,
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
  CustomerRetrieveParams,
  CustomerUnarchiveParams,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';
import * as EventsAPI from './events/events';
import {
  EventEstimateParams,
  EventEstimateResponse,
  EventReportParams,
  EventReportResponse,
  Events,
} from './events/events';
import * as PlansAPI from './plans/plans';
import {
  Plan,
  PlanArchiveParams,
  PlanCreateDraftParams,
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
  PlanRemoveDraftParams,
  PlanRemoveDraftResponse,
  PlanRetrieveParams,
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
  SubscriptionRetrieveParams,
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
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
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
V1.Contracts = Contracts;

export declare namespace V1 {
  export {
    Customers as Customers,
    type CustomerIntegrationResponse as CustomerIntegrationResponse,
    type CustomerResponse as CustomerResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCheckEntitlementResponse as CustomerCheckEntitlementResponse,
    type CustomerImportResponse as CustomerImportResponse,
    type CustomerListContractsResponse as CustomerListContractsResponse,
    type CustomerListInvoicesResponse as CustomerListInvoicesResponse,
    type CustomerListResourcesResponse as CustomerListResourcesResponse,
    type CustomerRetrieveEntitlementsResponse as CustomerRetrieveEntitlementsResponse,
    type CustomerListResponsesMyCursorIDPage as CustomerListResponsesMyCursorIDPage,
    type CustomerListResourcesResponsesMyCursorIDPage as CustomerListResourcesResponsesMyCursorIDPage,
    type CustomerListInvoicesResponsesMyCursorIDPage as CustomerListInvoicesResponsesMyCursorIDPage,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerProvisionParams as CustomerProvisionParams,
    type CustomerArchiveParams as CustomerArchiveParams,
    type CustomerUnarchiveParams as CustomerUnarchiveParams,
    type CustomerImportParams as CustomerImportParams,
    type CustomerListResourcesParams as CustomerListResourcesParams,
    type CustomerRetrieveEntitlementsParams as CustomerRetrieveEntitlementsParams,
    type CustomerCheckEntitlementParams as CustomerCheckEntitlementParams,
    type CustomerListContractsParams as CustomerListContractsParams,
    type CustomerListInvoicesParams as CustomerListInvoicesParams,
  };

  export {
    Subscriptions as Subscriptions,
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionImportResponse as SubscriptionImportResponse,
    type SubscriptionPreviewResponse as SubscriptionPreviewResponse,
    type SubscriptionProvisionResponse as SubscriptionProvisionResponse,
    type SubscriptionListResponsesMyCursorIDPage as SubscriptionListResponsesMyCursorIDPage,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionProvisionParams as SubscriptionProvisionParams,
    type SubscriptionTransferParams as SubscriptionTransferParams,
    type SubscriptionMigrateParams as SubscriptionMigrateParams,
    type SubscriptionDelegateParams as SubscriptionDelegateParams,
    type SubscriptionPreviewParams as SubscriptionPreviewParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionImportParams as SubscriptionImportParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
  };

  export {
    Coupons as Coupons,
    type Coupon as Coupon,
    type CouponListResponse as CouponListResponse,
    type CouponListResponsesMyCursorIDPage as CouponListResponsesMyCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponListParams as CouponListParams,
    type CouponRetrieveParams as CouponRetrieveParams,
    type CouponUpdateCouponParams as CouponUpdateCouponParams,
    type CouponArchiveCouponParams as CouponArchiveCouponParams,
  };

  export {
    Events as Events,
    type EventEstimateResponse as EventEstimateResponse,
    type EventReportResponse as EventReportResponse,
    type EventReportParams as EventReportParams,
    type EventEstimateParams as EventEstimateParams,
  };

  export {
    Credits as Credits,
    type CreditGetAutoRechargeResponse as CreditGetAutoRechargeResponse,
    type CreditGetUsageResponse as CreditGetUsageResponse,
    type CreditListLedgerResponse as CreditListLedgerResponse,
    type CreditListLedgerResponsesMyCursorIDPage as CreditListLedgerResponsesMyCursorIDPage,
    type CreditGetUsageParams as CreditGetUsageParams,
    type CreditGetAutoRechargeParams as CreditGetAutoRechargeParams,
    type CreditListLedgerParams as CreditListLedgerParams,
  };

  export {
    Features as Features,
    type Feature as Feature,
    type FeatureListFeaturesResponse as FeatureListFeaturesResponse,
    type FeatureListFeaturesResponsesMyCursorIDPage as FeatureListFeaturesResponsesMyCursorIDPage,
    type FeatureRetrieveFeatureParams as FeatureRetrieveFeatureParams,
    type FeatureUpdateFeatureParams as FeatureUpdateFeatureParams,
    type FeatureCreateFeatureParams as FeatureCreateFeatureParams,
    type FeatureListFeaturesParams as FeatureListFeaturesParams,
    type FeatureArchiveFeatureParams as FeatureArchiveFeatureParams,
    type FeatureUnarchiveFeatureParams as FeatureUnarchiveFeatureParams,
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
    type AddonListParams as AddonListParams,
    type AddonCreateParams as AddonCreateParams,
    type AddonRetrieveParams as AddonRetrieveParams,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonArchiveParams as AddonArchiveParams,
    type AddonPublishParams as AddonPublishParams,
    type AddonCreateDraftParams as AddonCreateDraftParams,
    type AddonRemoveDraftParams as AddonRemoveDraftParams,
    type AddonListChargesParams as AddonListChargesParams,
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
    type PlanListParams as PlanListParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanArchiveParams as PlanArchiveParams,
    type PlanPublishParams as PlanPublishParams,
    type PlanCreateDraftParams as PlanCreateDraftParams,
    type PlanRemoveDraftParams as PlanRemoveDraftParams,
    type PlanListChargesParams as PlanListChargesParams,
    type PlanListOverageChargesParams as PlanListOverageChargesParams,
  };

  export {
    Usage as Usage,
    type UsageEstimateResponse as UsageEstimateResponse,
    type UsageHistoryResponse as UsageHistoryResponse,
    type UsageReportResponse as UsageReportResponse,
    type UsageReportParams as UsageReportParams,
    type UsageHistoryParams as UsageHistoryParams,
    type UsageEstimateParams as UsageEstimateParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductListProductsResponse as ProductListProductsResponse,
    type ProductListProductsResponsesMyCursorIDPage as ProductListProductsResponsesMyCursorIDPage,
    type ProductListProductsParams as ProductListProductsParams,
    type ProductCreateProductParams as ProductCreateProductParams,
    type ProductUpdateProductParams as ProductUpdateProductParams,
    type ProductArchiveProductParams as ProductArchiveProductParams,
    type ProductUnarchiveProductParams as ProductUnarchiveProductParams,
    type ProductDuplicateProductParams as ProductDuplicateProductParams,
  };

  export {
    Contracts as Contracts,
    type ContractCreateResponse as ContractCreateResponse,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractUpdateResponse as ContractUpdateResponse,
    type ContractListResponse as ContractListResponse,
    type ContractDeleteResponse as ContractDeleteResponse,
    type ContractListResponsesMyCursorIDPage as ContractListResponsesMyCursorIDPage,
    type ContractListParams as ContractListParams,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractDeleteParams as ContractDeleteParams,
  };
}
