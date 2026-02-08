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

- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementGrantResponse</a></code>
- <code><a href="./src/resources/v1/customers/promotional-entitlements.ts">PromotionalEntitlementRevokeResponse</a></code>

Methods:

- <code title="post /api/v1/customers/{customerId}/promotional">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">grant</a>(customerID, { ...params }) -> PromotionalEntitlementGrantResponse</code>
- <code title="delete /api/v1/customers/{customerId}/promotional/{featureId}">client.v1.customers.promotionalEntitlements.<a href="./src/resources/v1/customers/promotional-entitlements.ts">revoke</a>(featureID, { ...params }) -> PromotionalEntitlementRevokeResponse</code>

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

## Coupons

Types:

- <code><a href="./src/resources/v1/coupons.ts">Coupon</a></code>
- <code><a href="./src/resources/v1/coupons.ts">CouponListResponse</a></code>

Methods:

- <code title="post /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="get /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">retrieve</a>(id) -> Coupon</code>
- <code title="get /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">list</a>({ ...params }) -> CouponListResponsesMyCursorIDPage</code>

## Events

Types:

- <code><a href="./src/resources/v1/events.ts">EventReportResponse</a></code>

Methods:

- <code title="post /api/v1/events">client.v1.events.<a href="./src/resources/v1/events.ts">report</a>({ ...params }) -> EventReportResponse</code>

## Usage

Types:

- <code><a href="./src/resources/v1/usage.ts">UsageHistoryResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageReportResponse</a></code>

Methods:

- <code title="get /api/v1/usage/{customerId}/history/{featureId}">client.v1.usage.<a href="./src/resources/v1/usage.ts">history</a>(featureID, { ...params }) -> UsageHistoryResponse</code>
- <code title="post /api/v1/usage">client.v1.usage.<a href="./src/resources/v1/usage.ts">report</a>({ ...params }) -> UsageReportResponse</code>

## Products

Types:

- <code><a href="./src/resources/v1/products.ts">ProductListProductsResponse</a></code>

Methods:

- <code title="get /api/v1/products">client.v1.products.<a href="./src/resources/v1/products.ts">listProducts</a>({ ...params }) -> ProductListProductsResponsesMyCursorIDPage</code>
