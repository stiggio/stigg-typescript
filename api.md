# V1

## Customers

Types:

- <code><a href="./src/resources/v1/customers/customers.ts">CustomerIntegrationResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerCheckEntitlementResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerImportResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListResourcesResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerRetrieveEntitlementsResponse</a></code>

Methods:

- <code title="get /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">retrieve</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="patch /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">update</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers/{id}/archive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">archive</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers/{id}/entitlements/check">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">checkEntitlement</a>(id, { ...params }) -> CustomerCheckEntitlementResponse</code>
- <code title="post /api/v1/customers/import">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">import</a>({ ...params }) -> CustomerImportResponse</code>
- <code title="get /api/v1/customers/{id}/resources">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">listResources</a>(id, { ...params }) -> CustomerListResourcesResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">provision</a>({ ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers/{id}/entitlements">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">retrieveEntitlements</a>(id, { ...params }) -> CustomerRetrieveEntitlementsResponse</code>
- <code title="post /api/v1/customers/{id}/unarchive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">unarchive</a>(id, { ...params }) -> CustomerResponse</code>

### PaymentMethod

Methods:

- <code title="post /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">attach</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="delete /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">detach</a>(id, { ...params }) -> CustomerResponse</code>

### PromotionalEntitlements

Types:

- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementListResponse</a></code>
- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementRevokeResponse</a></code>

Methods:

- <code title="post /api/v1/customers/{id}/promotional-entitlements">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">create</a>(id, { ...params }) -> PromotionalEntitlementCreateResponse</code>
- <code title="get /api/v1/customers/{id}/promotional-entitlements">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">list</a>(id, { ...params }) -> PromotionalEntitlementListResponsesMyCursorIDPage</code>
- <code title="delete /api/v1/customers/{id}/promotional-entitlements/{featureId}">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">revoke</a>(featureID, { ...params }) -> PromotionalEntitlementRevokeResponse</code>

### Integrations

Types:

- <code><a href="./src/resources/v1/customers/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="get /api/v1/customers/{id}/integrations/{integrationId}">client.v1.customers.integrations.<a href="./src/resources/v1/customers/integrations.ts">retrieve</a>(integrationID, { ...params }) -> CustomerIntegrationResponse</code>
- <code title="patch /api/v1/customers/{id}/integrations/{integrationId}">client.v1.customers.integrations.<a href="./src/resources/v1/customers/integrations.ts">update</a>(integrationID, { ...params }) -> CustomerIntegrationResponse</code>
- <code title="get /api/v1/customers/{id}/integrations">client.v1.customers.integrations.<a href="./src/resources/v1/customers/integrations.ts">list</a>(id, { ...params }) -> IntegrationListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers/{id}/integrations">client.v1.customers.integrations.<a href="./src/resources/v1/customers/integrations.ts">link</a>(id, { ...params }) -> CustomerIntegrationResponse</code>
- <code title="delete /api/v1/customers/{id}/integrations/{integrationId}">client.v1.customers.integrations.<a href="./src/resources/v1/customers/integrations.ts">unlink</a>(integrationID, { ...params }) -> CustomerIntegrationResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionImportResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionPreviewResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionProvisionResponse</a></code>

Methods:

- <code title="get /api/v1/subscriptions/{id}">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">retrieve</a>(id, { ...params }) -> Subscription</code>
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

- <code title="delete /api/v1/subscriptions/{id}/future-update/pending-payment">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelPendingPayment</a>(id, { ...params }) -> CancelSubscription</code>
- <code title="delete /api/v1/subscriptions/{id}/future-update/schedule">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelSchedule</a>(id, { ...params }) -> CancelSubscription</code>

### Usage

Types:

- <code><a href="./src/resources/v1/subscriptions/usage.ts">UsageChargeUsageResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/usage.ts">UsageSyncResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions/{id}/usage/charge">client.v1.subscriptions.usage.<a href="./src/resources/v1/subscriptions/usage.ts">chargeUsage</a>(id, { ...params }) -> UsageChargeUsageResponse</code>
- <code title="post /api/v1/subscriptions/{id}/usage/sync">client.v1.subscriptions.usage.<a href="./src/resources/v1/subscriptions/usage.ts">sync</a>(id, { ...params }) -> UsageSyncResponse</code>

### Invoice

Types:

- <code><a href="./src/resources/v1/subscriptions/invoice.ts">InvoiceMarkAsPaidResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions/{id}/invoice/paid">client.v1.subscriptions.invoice.<a href="./src/resources/v1/subscriptions/invoice.ts">markAsPaid</a>(id, { ...params }) -> InvoiceMarkAsPaidResponse</code>

## Coupons

Types:

- <code><a href="./src/resources/v1/coupons.ts">Coupon</a></code>
- <code><a href="./src/resources/v1/coupons.ts">CouponListResponse</a></code>

Methods:

- <code title="post /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="get /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">retrieve</a>(id, { ...params }) -> Coupon</code>
- <code title="get /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">list</a>({ ...params }) -> CouponListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/coupons/{id}/archive">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">archiveCoupon</a>(id, { ...params }) -> Coupon</code>
- <code title="patch /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">updateCoupon</a>(id, { ...params }) -> Coupon</code>

## Events

Types:

- <code><a href="./src/resources/v1/events/events.ts">EventEstimateCostResponse</a></code>
- <code><a href="./src/resources/v1/events/events.ts">EventReportResponse</a></code>

Methods:

- <code title="post /api/v1/events/estimate">client.v1.events.<a href="./src/resources/v1/events/events.ts">estimateCost</a>({ ...params }) -> EventEstimateCostResponse</code>
- <code title="post /api/v1/events">client.v1.events.<a href="./src/resources/v1/events/events.ts">report</a>({ ...params }) -> EventReportResponse</code>

### DataExport

Types:

- <code><a href="./src/resources/v1/events/data-export/data-export.ts">DataExportListModelsResponse</a></code>
- <code><a href="./src/resources/v1/events/data-export/data-export.ts">DataExportMintScopedTokenResponse</a></code>
- <code><a href="./src/resources/v1/events/data-export/data-export.ts">DataExportTriggerSyncResponse</a></code>

Methods:

- <code title="get /api/v1/data-export/models">client.v1.events.dataExport.<a href="./src/resources/v1/events/data-export/data-export.ts">listModels</a>({ ...params }) -> DataExportListModelsResponse</code>
- <code title="post /api/v1/data-export/scoped-token">client.v1.events.dataExport.<a href="./src/resources/v1/events/data-export/data-export.ts">mintScopedToken</a>({ ...params }) -> DataExportMintScopedTokenResponse</code>
- <code title="post /api/v1/data-export/sync">client.v1.events.dataExport.<a href="./src/resources/v1/events/data-export/data-export.ts">triggerSync</a>({ ...params }) -> DataExportTriggerSyncResponse</code>

#### Destinations

Types:

- <code><a href="./src/resources/v1/events/data-export/destinations.ts">DestinationCreateResponse</a></code>
- <code><a href="./src/resources/v1/events/data-export/destinations.ts">DestinationUpdateResponse</a></code>
- <code><a href="./src/resources/v1/events/data-export/destinations.ts">DestinationDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/data-export/destinations">client.v1.events.dataExport.destinations.<a href="./src/resources/v1/events/data-export/destinations.ts">create</a>({ ...params }) -> DestinationCreateResponse</code>
- <code title="patch /api/v1/data-export/destinations/{destinationId}">client.v1.events.dataExport.destinations.<a href="./src/resources/v1/events/data-export/destinations.ts">update</a>(destinationID, { ...params }) -> DestinationUpdateResponse</code>
- <code title="delete /api/v1/data-export/destinations/{destinationId}">client.v1.events.dataExport.destinations.<a href="./src/resources/v1/events/data-export/destinations.ts">delete</a>(destinationID, { ...params }) -> DestinationDeleteResponse</code>

## Credits

Types:

- <code><a href="./src/resources/v1/credits/credits.ts">CreditGetAutoRechargeResponse</a></code>
- <code><a href="./src/resources/v1/credits/credits.ts">CreditGetUsageResponse</a></code>
- <code><a href="./src/resources/v1/credits/credits.ts">CreditListLedgerResponse</a></code>

Methods:

- <code title="get /api/v1/credits/auto-recharge">client.v1.credits.<a href="./src/resources/v1/credits/credits.ts">getAutoRecharge</a>({ ...params }) -> CreditGetAutoRechargeResponse</code>
- <code title="get /api/v1/credits/usage">client.v1.credits.<a href="./src/resources/v1/credits/credits.ts">getUsage</a>({ ...params }) -> CreditGetUsageResponse</code>
- <code title="get /api/v1/credits/ledger">client.v1.credits.<a href="./src/resources/v1/credits/credits.ts">listLedger</a>({ ...params }) -> CreditListLedgerResponsesMyCursorIDPage</code>

### Grants

Types:

- <code><a href="./src/resources/v1/credits/grants.ts">CreditGrantResponse</a></code>
- <code><a href="./src/resources/v1/credits/grants.ts">GrantListResponse</a></code>

Methods:

- <code title="post /api/v1/credits/grants">client.v1.credits.grants.<a href="./src/resources/v1/credits/grants.ts">create</a>({ ...params }) -> CreditGrantResponse</code>
- <code title="get /api/v1/credits/grants">client.v1.credits.grants.<a href="./src/resources/v1/credits/grants.ts">list</a>({ ...params }) -> GrantListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/credits/grants/{id}/void">client.v1.credits.grants.<a href="./src/resources/v1/credits/grants.ts">void</a>(id, { ...params }) -> CreditGrantResponse</code>

### CustomCurrencies

Types:

- <code><a href="./src/resources/v1/credits/custom-currencies.ts">CustomCurrencyResponse</a></code>
- <code><a href="./src/resources/v1/credits/custom-currencies.ts">CustomCurrencyListResponse</a></code>
- <code><a href="./src/resources/v1/credits/custom-currencies.ts">CustomCurrencyListAssociatedEntitiesResponse</a></code>

Methods:

- <code title="post /api/v1/credits/custom-currencies">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">create</a>({ ...params }) -> CustomCurrencyResponse</code>
- <code title="patch /api/v1/credits/custom-currencies/{currencyId}">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">update</a>(currencyID, { ...params }) -> CustomCurrencyResponse</code>
- <code title="get /api/v1/credits/custom-currencies">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">list</a>({ ...params }) -> CustomCurrencyListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/credits/custom-currencies/{currencyId}/archive">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">archive</a>(currencyID, { ...params }) -> CustomCurrencyResponse</code>
- <code title="get /api/v1/credits/custom-currencies/{currencyId}/associated-entities">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">listAssociatedEntities</a>(currencyID, { ...params }) -> CustomCurrencyListAssociatedEntitiesResponse</code>
- <code title="post /api/v1/credits/custom-currencies/{currencyId}/unarchive">client.v1.credits.customCurrencies.<a href="./src/resources/v1/credits/custom-currencies.ts">unarchive</a>(currencyID, { ...params }) -> CustomCurrencyResponse</code>

### Consumption

Types:

- <code><a href="./src/resources/v1/credits/consumption.ts">ConsumptionConsumeResponse</a></code>
- <code><a href="./src/resources/v1/credits/consumption.ts">ConsumptionConsumeAsyncResponse</a></code>

Methods:

- <code title="post /api/v1/credits/consumption">client.v1.credits.consumption.<a href="./src/resources/v1/credits/consumption.ts">consume</a>({ ...params }) -> ConsumptionConsumeResponse</code>
- <code title="post /api/v1/credits/consumption/async">client.v1.credits.consumption.<a href="./src/resources/v1/credits/consumption.ts">consumeAsync</a>({ ...params }) -> ConsumptionConsumeAsyncResponse</code>

## Features

Types:

- <code><a href="./src/resources/v1/features.ts">Feature</a></code>
- <code><a href="./src/resources/v1/features.ts">FeatureListFeaturesResponse</a></code>

Methods:

- <code title="post /api/v1/features/{id}/archive">client.v1.features.<a href="./src/resources/v1/features.ts">archiveFeature</a>(id, { ...params }) -> Feature</code>
- <code title="post /api/v1/features">client.v1.features.<a href="./src/resources/v1/features.ts">createFeature</a>({ ...params }) -> Feature</code>
- <code title="get /api/v1/features">client.v1.features.<a href="./src/resources/v1/features.ts">listFeatures</a>({ ...params }) -> FeatureListFeaturesResponsesMyCursorIDPage</code>
- <code title="get /api/v1/features/{id}">client.v1.features.<a href="./src/resources/v1/features.ts">retrieveFeature</a>(id, { ...params }) -> Feature</code>
- <code title="post /api/v1/features/{id}/unarchive">client.v1.features.<a href="./src/resources/v1/features.ts">unarchiveFeature</a>(id, { ...params }) -> Feature</code>
- <code title="patch /api/v1/features/{id}">client.v1.features.<a href="./src/resources/v1/features.ts">updateFeature</a>(id, { ...params }) -> Feature</code>

## Addons

Types:

- <code><a href="./src/resources/v1/addons/addons.ts">Addon</a></code>
- <code><a href="./src/resources/v1/addons/addons.ts">AddonListResponse</a></code>
- <code><a href="./src/resources/v1/addons/addons.ts">AddonListChargesResponse</a></code>
- <code><a href="./src/resources/v1/addons/addons.ts">AddonPublishResponse</a></code>
- <code><a href="./src/resources/v1/addons/addons.ts">AddonRemoveDraftResponse</a></code>

Methods:

- <code title="post /api/v1/addons">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">create</a>({ ...params }) -> Addon</code>
- <code title="get /api/v1/addons/{id}">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">retrieve</a>(id, { ...params }) -> Addon</code>
- <code title="patch /api/v1/addons/{id}">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">update</a>(id, { ...params }) -> Addon</code>
- <code title="get /api/v1/addons">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">list</a>({ ...params }) -> AddonListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/addons/{id}/archive">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">archive</a>(id, { ...params }) -> Addon</code>
- <code title="post /api/v1/addons/{id}/draft">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">createDraft</a>(id, { ...params }) -> Addon</code>
- <code title="get /api/v1/addons/{id}/charges">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">listCharges</a>(id, { ...params }) -> AddonListChargesResponsesMyCursorIDPage</code>
- <code title="post /api/v1/addons/{id}/publish">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">publish</a>(id, { ...params }) -> AddonPublishResponse</code>
- <code title="delete /api/v1/addons/{id}/draft">client.v1.addons.<a href="./src/resources/v1/addons/addons.ts">removeDraft</a>(id, { ...params }) -> AddonRemoveDraftResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/v1/addons/entitlements.ts">AddonPackageEntitlement</a></code>
- <code><a href="./src/resources/v1/addons/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/addons/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="post /api/v1/addons/{addonId}/entitlements">client.v1.addons.entitlements.<a href="./src/resources/v1/addons/entitlements.ts">create</a>(addonID, { ...params }) -> EntitlementCreateResponse</code>
- <code title="patch /api/v1/addons/{addonId}/entitlements/{id}">client.v1.addons.entitlements.<a href="./src/resources/v1/addons/entitlements.ts">update</a>(id, { ...params }) -> AddonPackageEntitlement</code>
- <code title="get /api/v1/addons/{addonId}/entitlements">client.v1.addons.entitlements.<a href="./src/resources/v1/addons/entitlements.ts">list</a>(addonID, { ...params }) -> EntitlementListResponse</code>
- <code title="delete /api/v1/addons/{addonId}/entitlements/{id}">client.v1.addons.entitlements.<a href="./src/resources/v1/addons/entitlements.ts">delete</a>(id, { ...params }) -> AddonPackageEntitlement</code>

## Plans

Types:

- <code><a href="./src/resources/v1/plans/plans.ts">Plan</a></code>
- <code><a href="./src/resources/v1/plans/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/v1/plans/plans.ts">PlanListChargesResponse</a></code>
- <code><a href="./src/resources/v1/plans/plans.ts">PlanListOverageChargesResponse</a></code>
- <code><a href="./src/resources/v1/plans/plans.ts">PlanPublishResponse</a></code>
- <code><a href="./src/resources/v1/plans/plans.ts">PlanRemoveDraftResponse</a></code>

Methods:

- <code title="post /api/v1/plans">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="get /api/v1/plans/{id}">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">retrieve</a>(id, { ...params }) -> Plan</code>
- <code title="patch /api/v1/plans/{id}">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">update</a>(id, { ...params }) -> Plan</code>
- <code title="get /api/v1/plans">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">list</a>({ ...params }) -> PlanListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/plans/{id}/archive">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">archive</a>(id, { ...params }) -> Plan</code>
- <code title="post /api/v1/plans/{id}/draft">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">createDraft</a>(id, { ...params }) -> Plan</code>
- <code title="get /api/v1/plans/{id}/charges">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">listCharges</a>(id, { ...params }) -> PlanListChargesResponsesMyCursorIDPage</code>
- <code title="get /api/v1/plans/{id}/overage-charges">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">listOverageCharges</a>(id, { ...params }) -> PlanListOverageChargesResponsesMyCursorIDPage</code>
- <code title="post /api/v1/plans/{id}/publish">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">publish</a>(id, { ...params }) -> PlanPublishResponse</code>
- <code title="delete /api/v1/plans/{id}/draft">client.v1.plans.<a href="./src/resources/v1/plans/plans.ts">removeDraft</a>(id, { ...params }) -> PlanRemoveDraftResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/v1/plans/entitlements.ts">PlanEntitlement</a></code>
- <code><a href="./src/resources/v1/plans/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/v1/plans/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="post /api/v1/plans/{planId}/entitlements">client.v1.plans.entitlements.<a href="./src/resources/v1/plans/entitlements.ts">create</a>(planID, { ...params }) -> EntitlementCreateResponse</code>
- <code title="patch /api/v1/plans/{planId}/entitlements/{id}">client.v1.plans.entitlements.<a href="./src/resources/v1/plans/entitlements.ts">update</a>(id, { ...params }) -> PlanEntitlement</code>
- <code title="get /api/v1/plans/{planId}/entitlements">client.v1.plans.entitlements.<a href="./src/resources/v1/plans/entitlements.ts">list</a>(planID, { ...params }) -> EntitlementListResponse</code>
- <code title="delete /api/v1/plans/{planId}/entitlements/{id}">client.v1.plans.entitlements.<a href="./src/resources/v1/plans/entitlements.ts">delete</a>(id, { ...params }) -> PlanEntitlement</code>

## Usage

Types:

- <code><a href="./src/resources/v1/usage.ts">UsageEstimateCostResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageHistoryResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageReportResponse</a></code>

Methods:

- <code title="post /api/v1/usage/estimate">client.v1.usage.<a href="./src/resources/v1/usage.ts">estimateCost</a>({ ...params }) -> UsageEstimateCostResponse</code>
- <code title="get /api/v1/usage/{customerId}/history/{featureId}">client.v1.usage.<a href="./src/resources/v1/usage.ts">history</a>(featureID, { ...params }) -> UsageHistoryResponse</code>
- <code title="post /api/v1/usage">client.v1.usage.<a href="./src/resources/v1/usage.ts">report</a>({ ...params }) -> UsageReportResponse</code>

## Products

Types:

- <code><a href="./src/resources/v1/products.ts">Product</a></code>
- <code><a href="./src/resources/v1/products.ts">ProductListProductsResponse</a></code>

Methods:

- <code title="post /api/v1/products/{id}/archive">client.v1.products.<a href="./src/resources/v1/products.ts">archiveProduct</a>(id, { ...params }) -> Product</code>
- <code title="post /api/v1/products">client.v1.products.<a href="./src/resources/v1/products.ts">createProduct</a>({ ...params }) -> Product</code>
- <code title="post /api/v1/products/{id}/duplicate">client.v1.products.<a href="./src/resources/v1/products.ts">duplicateProduct</a>(id, { ...params }) -> Product</code>
- <code title="get /api/v1/products">client.v1.products.<a href="./src/resources/v1/products.ts">listProducts</a>({ ...params }) -> ProductListProductsResponsesMyCursorIDPage</code>
- <code title="post /api/v1/products/{id}/unarchive">client.v1.products.<a href="./src/resources/v1/products.ts">unarchiveProduct</a>(id, { ...params }) -> Product</code>
- <code title="patch /api/v1/products/{id}">client.v1.products.<a href="./src/resources/v1/products.ts">updateProduct</a>(id, { ...params }) -> Product</code>

# V1Beta

## Customers

Types:

- <code><a href="./src/resources/v1-beta/customers/customers.ts">CustomerRetrieveGovernanceResponse</a></code>

Methods:

- <code title="get /api/v1-beta/customers/{id}/governance">client.v1Beta.customers.<a href="./src/resources/v1-beta/customers/customers.ts">retrieveGovernance</a>(id, { ...params }) -> CustomerRetrieveGovernanceResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/v1-beta/customers/entitlements.ts">EntitlementCheckResponse</a></code>

Methods:

- <code title="get /api/v1-beta/customers/{id}/entitlements/check">client.v1Beta.customers.entitlements.<a href="./src/resources/v1-beta/customers/entitlements.ts">check</a>(id, { ...params }) -> EntitlementCheckResponse</code>

### Entities

Types:

- <code><a href="./src/resources/v1-beta/customers/entities.ts">EntityRetrieveResponse</a></code>
- <code><a href="./src/resources/v1-beta/customers/entities.ts">EntityListResponse</a></code>
- <code><a href="./src/resources/v1-beta/customers/entities.ts">EntityArchiveResponse</a></code>
- <code><a href="./src/resources/v1-beta/customers/entities.ts">EntityUnarchiveResponse</a></code>
- <code><a href="./src/resources/v1-beta/customers/entities.ts">EntityUpsertResponse</a></code>

Methods:

- <code title="get /api/v1-beta/customers/{id}/entities/{entityId}">client.v1Beta.customers.entities.<a href="./src/resources/v1-beta/customers/entities.ts">retrieve</a>(entityID, { ...params }) -> EntityRetrieveResponse</code>
- <code title="get /api/v1-beta/customers/{id}/entities">client.v1Beta.customers.entities.<a href="./src/resources/v1-beta/customers/entities.ts">list</a>(id, { ...params }) -> EntityListResponsesMyCursorIDPage</code>
- <code title="post /api/v1-beta/customers/{id}/entities/archive">client.v1Beta.customers.entities.<a href="./src/resources/v1-beta/customers/entities.ts">archive</a>(id, { ...params }) -> EntityArchiveResponse</code>
- <code title="post /api/v1-beta/customers/{id}/entities/unarchive">client.v1Beta.customers.entities.<a href="./src/resources/v1-beta/customers/entities.ts">unarchive</a>(id, { ...params }) -> EntityUnarchiveResponse</code>
- <code title="put /api/v1-beta/customers/{id}/entities">client.v1Beta.customers.entities.<a href="./src/resources/v1-beta/customers/entities.ts">upsert</a>(id, { ...params }) -> EntityUpsertResponse</code>

### Assignments

Types:

- <code><a href="./src/resources/v1-beta/customers/assignments.ts">AssignmentListResponse</a></code>
- <code><a href="./src/resources/v1-beta/customers/assignments.ts">AssignmentUpsertResponse</a></code>

Methods:

- <code title="get /api/v1-beta/customers/{id}/assignments">client.v1Beta.customers.assignments.<a href="./src/resources/v1-beta/customers/assignments.ts">list</a>(id, { ...params }) -> AssignmentListResponsesMyCursorIDPage</code>
- <code title="put /api/v1-beta/customers/{id}/assignments">client.v1Beta.customers.assignments.<a href="./src/resources/v1-beta/customers/assignments.ts">upsert</a>(id, { ...params }) -> AssignmentUpsertResponse</code>

## EntityTypes

Types:

- <code><a href="./src/resources/v1-beta/entity-types.ts">EntityTypeListResponse</a></code>
- <code><a href="./src/resources/v1-beta/entity-types.ts">EntityTypeUpsertResponse</a></code>

Methods:

- <code title="get /api/v1-beta/entity-types">client.v1Beta.entityTypes.<a href="./src/resources/v1-beta/entity-types.ts">list</a>({ ...params }) -> EntityTypeListResponsesMyCursorIDPage</code>
- <code title="put /api/v1-beta/entity-types">client.v1Beta.entityTypes.<a href="./src/resources/v1-beta/entity-types.ts">upsert</a>({ ...params }) -> EntityTypeUpsertResponse</code>
