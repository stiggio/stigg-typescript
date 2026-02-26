# V1

## Customers

Types:

- <code><a href="./src/resources/v1/customers/customers.ts">CustomerResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerImportResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListResourcesResponse</a></code>

Methods:

- <code title="get /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">retrieve</a>(id) -> CustomerResponse</code>
- <code title="patch /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">update</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers/{id}/archive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">archive</a>(id) -> CustomerResponse</code>
- <code title="post /api/v1/customers/import">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">import</a>({ ...params }) -> CustomerImportResponse</code>
- <code title="get /api/v1/customers/{id}/resources">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">listResources</a>(id, { ...params }) -> CustomerListResourcesResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">provision</a>({ ...params }) -> CustomerResponse</code>
- <code title="post /api/v1/customers/{id}/unarchive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">unarchive</a>(id) -> CustomerResponse</code>

### PaymentMethod

Methods:

- <code title="post /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">attach</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="delete /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">detach</a>(id) -> CustomerResponse</code>

### PromotionalEntitlements

Types:

- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementListResponse</a></code>
- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementRevokeResponse</a></code>

Methods:

- <code title="post /api/v1/customers/{id}/promotional-entitlements">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">create</a>(id, { ...params }) -> PromotionalEntitlementCreateResponse</code>
- <code title="get /api/v1/customers/{id}/promotional-entitlements">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">list</a>(id, { ...params }) -> PromotionalEntitlementListResponsesMyCursorIDPage</code>
- <code title="delete /api/v1/customers/{id}/promotional-entitlements/{featureId}">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">revoke</a>(featureID, { ...params }) -> PromotionalEntitlementRevokeResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionImportResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionPreviewResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionProvisionResponse</a></code>

Methods:

- <code title="get /api/v1/subscriptions/{id}">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">retrieve</a>(id) -> Subscription</code>
- <code title="patch /api/v1/subscriptions/{id}">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">update</a>(id, { ...params }) -> Subscription</code>
- <code title="get /api/v1/subscriptions">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">cancel</a>(id, { ...params }) -> Subscription</code>
- <code title="post /api/v1/subscriptions/{id}/delegate">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">delegate</a>(id, { ...params }) -> Subscription</code>
- <code title="post /api/v1/subscriptions/import">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">import</a>({ ...params }) -> SubscriptionImportResponse</code>
- <code title="post /api/v1/subscriptions/{id}/migrate">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">migrate</a>(id, { ...params }) -> Subscription</code>
- <code title="post /api/v1/subscriptions/preview">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">preview</a>({ ...params }) -> SubscriptionPreviewResponse</code>
- <code title="post /api/v1/subscriptions">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">provision</a>({ ...params }) -> SubscriptionProvisionResponse</code>
- <code title="post /api/v1/subscriptions/{id}/transfer">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">transfer</a>(id, { ...params }) -> Subscription</code>

### FutureUpdate

Types:

- <code><a href="./src/resources/v1/subscriptions/future-update.ts">CancelSubscription</a></code>

Methods:

- <code title="delete /api/v1/subscriptions/{id}/future-update/pending-payment">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelPendingPayment</a>(id) -> CancelSubscription</code>
- <code title="delete /api/v1/subscriptions/{id}/future-update/schedule">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelSchedule</a>(id) -> CancelSubscription</code>

### Usage

Types:

- <code><a href="./src/resources/v1/subscriptions/usage.ts">UsageChargeUsageResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/usage.ts">UsageSyncResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions/{id}/usage/charge">client.v1.subscriptions.usage.<a href="./src/resources/v1/subscriptions/usage.ts">chargeUsage</a>(id, { ...params }) -> UsageChargeUsageResponse</code>
- <code title="post /api/v1/subscriptions/{id}/usage/sync">client.v1.subscriptions.usage.<a href="./src/resources/v1/subscriptions/usage.ts">sync</a>(id) -> UsageSyncResponse</code>

### Invoice

Types:

- <code><a href="./src/resources/v1/subscriptions/invoice.ts">InvoiceMarkAsPaidResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions/{id}/invoice/paid">client.v1.subscriptions.invoice.<a href="./src/resources/v1/subscriptions/invoice.ts">markAsPaid</a>(id) -> InvoiceMarkAsPaidResponse</code>

## Coupons

Types:

- <code><a href="./src/resources/v1/coupons.ts">Coupon</a></code>
- <code><a href="./src/resources/v1/coupons.ts">CouponListResponse</a></code>

Methods:

- <code title="post /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="get /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">retrieve</a>(id) -> Coupon</code>
- <code title="get /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">list</a>({ ...params }) -> CouponListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/coupons/{id}/archive">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">archiveCoupon</a>(id) -> Coupon</code>
- <code title="patch /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">updateCoupon</a>(id, { ...params }) -> Coupon</code>

## Events

Types:

- <code><a href="./src/resources/v1/events/events.ts">EventReportResponse</a></code>

Methods:

- <code title="post /api/v1/events">client.v1.events.<a href="./src/resources/v1/events/events.ts">report</a>({ ...params }) -> EventReportResponse</code>

### Features

Types:

- <code><a href="./src/resources/v1/events/features.ts">Feature</a></code>
- <code><a href="./src/resources/v1/events/features.ts">FeatureListFeaturesResponse</a></code>

Methods:

- <code title="post /api/v1/features/{id}/archive">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">archiveFeature</a>(id) -> Feature</code>
- <code title="post /api/v1/features">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">createFeature</a>({ ...params }) -> Feature</code>
- <code title="get /api/v1/features">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">listFeatures</a>({ ...params }) -> FeatureListFeaturesResponsesMyCursorIDPage</code>
- <code title="get /api/v1/features/{id}">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">retrieveFeature</a>(id) -> Feature</code>
- <code title="post /api/v1/features/{id}/unarchive">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">unarchiveFeature</a>(id) -> Feature</code>
- <code title="patch /api/v1/features/{id}">client.v1.events.features.<a href="./src/resources/v1/events/features.ts">updateFeature</a>(id, { ...params }) -> Feature</code>

### Addons

Types:

- <code><a href="./src/resources/v1/events/addons/addons.ts">Addon</a></code>
- <code><a href="./src/resources/v1/events/addons/addons.ts">SetPackagePricing</a></code>
- <code><a href="./src/resources/v1/events/addons/addons.ts">SetPackagePricingResponse</a></code>
- <code><a href="./src/resources/v1/events/addons/addons.ts">AddonListAddonsResponse</a></code>
- <code><a href="./src/resources/v1/events/addons/addons.ts">AddonPublishAddonResponse</a></code>

Methods:

- <code title="post /api/v1/addons/{id}/archive">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">archiveAddon</a>(id) -> Addon</code>
- <code title="post /api/v1/addons">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">createAddon</a>({ ...params }) -> Addon</code>
- <code title="get /api/v1/addons">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">listAddons</a>({ ...params }) -> AddonListAddonsResponsesMyCursorIDPage</code>
- <code title="post /api/v1/addons/{id}/publish">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">publishAddon</a>(id, { ...params }) -> AddonPublishAddonResponse</code>
- <code title="get /api/v1/addons/{id}">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">retrieveAddon</a>(id) -> Addon</code>
- <code title="put /api/v1/addons/{id}/charges">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">setPricing</a>(id, { ...params }) -> SetPackagePricingResponse</code>
- <code title="patch /api/v1/addons/{id}">client.v1.events.addons.<a href="./src/resources/v1/events/addons/addons.ts">updateAddon</a>(id, { ...params }) -> Addon</code>

#### Draft

Types:

- <code><a href="./src/resources/v1/events/addons/draft.ts">DraftRemoveAddonDraftResponse</a></code>

Methods:

- <code title="post /api/v1/addons/{id}/draft">client.v1.events.addons.draft.<a href="./src/resources/v1/events/addons/draft.ts">createAddonDraft</a>(id) -> Addon</code>
- <code title="delete /api/v1/addons/{id}/draft">client.v1.events.addons.draft.<a href="./src/resources/v1/events/addons/draft.ts">removeAddonDraft</a>(id) -> DraftRemoveAddonDraftResponse</code>

#### Entitlements

Types:

- <code><a href="./src/resources/v1/events/addons/entitlements.ts">AddonPackageEntitlement</a></code>
- <code><a href="./src/resources/v1/events/addons/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/events/addons/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="post /api/v1/addons/{addonId}/entitlements">client.v1.events.addons.entitlements.<a href="./src/resources/v1/events/addons/entitlements.ts">create</a>(addonID, { ...params }) -> EntitlementCreateResponse</code>
- <code title="patch /api/v1/addons/{addonId}/entitlements/{id}">client.v1.events.addons.entitlements.<a href="./src/resources/v1/events/addons/entitlements.ts">update</a>(id, { ...params }) -> AddonPackageEntitlement</code>
- <code title="get /api/v1/addons/{addonId}/entitlements">client.v1.events.addons.entitlements.<a href="./src/resources/v1/events/addons/entitlements.ts">list</a>(addonID) -> EntitlementListResponse</code>
- <code title="delete /api/v1/addons/{addonId}/entitlements/{id}">client.v1.events.addons.entitlements.<a href="./src/resources/v1/events/addons/entitlements.ts">delete</a>(id, { ...params }) -> AddonPackageEntitlement</code>

### Plans

Types:

- <code><a href="./src/resources/v1/events/plans/plans.ts">Plan</a></code>
- <code><a href="./src/resources/v1/events/plans/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/v1/events/plans/plans.ts">PlanPublishResponse</a></code>

Methods:

- <code title="post /api/v1/plans">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="get /api/v1/plans/{id}">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">retrieve</a>(id) -> Plan</code>
- <code title="patch /api/v1/plans/{id}">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">update</a>(id, { ...params }) -> Plan</code>
- <code title="get /api/v1/plans">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">list</a>({ ...params }) -> PlanListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/plans/{id}/archive">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">archive</a>(id) -> Plan</code>
- <code title="post /api/v1/plans/{id}/publish">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">publish</a>(id, { ...params }) -> PlanPublishResponse</code>
- <code title="put /api/v1/plans/{id}/charges">client.v1.events.plans.<a href="./src/resources/v1/events/plans/plans.ts">setPricing</a>(id, { ...params }) -> SetPackagePricingResponse</code>

#### Draft

Types:

- <code><a href="./src/resources/v1/events/plans/draft.ts">DraftRemoveResponse</a></code>

Methods:

- <code title="post /api/v1/plans/{id}/draft">client.v1.events.plans.draft.<a href="./src/resources/v1/events/plans/draft.ts">create</a>(id) -> Plan</code>
- <code title="delete /api/v1/plans/{id}/draft">client.v1.events.plans.draft.<a href="./src/resources/v1/events/plans/draft.ts">remove</a>(id) -> DraftRemoveResponse</code>

#### Entitlements

Types:

- <code><a href="./src/resources/v1/events/plans/entitlements.ts">PlanEntitlement</a></code>
- <code><a href="./src/resources/v1/events/plans/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/events/plans/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="post /api/v1/plans/{planId}/entitlements">client.v1.events.plans.entitlements.<a href="./src/resources/v1/events/plans/entitlements.ts">create</a>(planID, { ...params }) -> EntitlementCreateResponse</code>
- <code title="patch /api/v1/plans/{planId}/entitlements/{id}">client.v1.events.plans.entitlements.<a href="./src/resources/v1/events/plans/entitlements.ts">update</a>(id, { ...params }) -> PlanEntitlement</code>
- <code title="get /api/v1/plans/{planId}/entitlements">client.v1.events.plans.entitlements.<a href="./src/resources/v1/events/plans/entitlements.ts">list</a>(planID) -> EntitlementListResponse</code>
- <code title="delete /api/v1/plans/{planId}/entitlements/{id}">client.v1.events.plans.entitlements.<a href="./src/resources/v1/events/plans/entitlements.ts">delete</a>(id, { ...params }) -> PlanEntitlement</code>

## Usage

Types:

- <code><a href="./src/resources/v1/usage.ts">UsageHistoryResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageReportResponse</a></code>

Methods:

- <code title="get /api/v1/usage/{customerId}/history/{featureId}">client.v1.usage.<a href="./src/resources/v1/usage.ts">history</a>(featureID, { ...params }) -> UsageHistoryResponse</code>
- <code title="post /api/v1/usage">client.v1.usage.<a href="./src/resources/v1/usage.ts">report</a>({ ...params }) -> UsageReportResponse</code>

## Products

Types:

- <code><a href="./src/resources/v1/products.ts">Product</a></code>
- <code><a href="./src/resources/v1/products.ts">ProductListProductsResponse</a></code>

Methods:

- <code title="post /api/v1/products/{id}/archive">client.v1.products.<a href="./src/resources/v1/products.ts">archiveProduct</a>(id) -> Product</code>
- <code title="post /api/v1/products">client.v1.products.<a href="./src/resources/v1/products.ts">createProduct</a>({ ...params }) -> Product</code>
- <code title="post /api/v1/products/{id}/duplicate">client.v1.products.<a href="./src/resources/v1/products.ts">duplicateProduct</a>(pathID, { ...params }) -> Product</code>
- <code title="get /api/v1/products">client.v1.products.<a href="./src/resources/v1/products.ts">listProducts</a>({ ...params }) -> ProductListProductsResponsesMyCursorIDPage</code>
- <code title="post /api/v1/products/{id}/unarchive">client.v1.products.<a href="./src/resources/v1/products.ts">unarchiveProduct</a>(id) -> Product</code>
- <code title="patch /api/v1/products/{id}">client.v1.products.<a href="./src/resources/v1/products.ts">updateProduct</a>(id, { ...params }) -> Product</code>
