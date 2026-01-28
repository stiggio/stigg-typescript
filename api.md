# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1CreateEventResponse</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1CreateUsageResponse</a></code>

Methods:

- <code title="post /api/v1/events">client.v1.<a href="./src/resources/v1/v1.ts">createEvent</a>({ ...params }) -> V1CreateEventResponse</code>
- <code title="post /api/v1/usage">client.v1.<a href="./src/resources/v1/v1.ts">createUsage</a>({ ...params }) -> V1CreateUsageResponse</code>

## Customers

Types:

- <code><a href="./src/resources/v1/customers/customers.ts">CustomerResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListResponse</a></code>

Methods:

- <code title="post /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">create</a>({ ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">retrieve</a>(id) -> CustomerResponse</code>
- <code title="patch /api/v1/customers/{id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">update</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="get /api/v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/customers/{id}/archive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">archive</a>(id) -> CustomerResponse</code>
- <code title="post /api/v1/customers/{id}/unarchive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">unarchive</a>(id) -> CustomerResponse</code>

### PaymentMethod

Methods:

- <code title="post /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">attach</a>(id, { ...params }) -> CustomerResponse</code>
- <code title="delete /api/v1/customers/{id}/payment-method">client.v1.customers.paymentMethod.<a href="./src/resources/v1/customers/payment-method.ts">detach</a>(id) -> CustomerResponse</code>

### Usage

## Subscriptions

Types:

- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionDelegateResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionMigrateResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionPreviewResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/subscriptions.ts">SubscriptionTransferResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /api/v1/subscriptions/{id}">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">retrieve</a>(id) -> SubscriptionRetrieveResponse</code>
- <code title="get /api/v1/subscriptions">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponsesMyCursorIDPage</code>
- <code title="post /api/v1/subscriptions/{id}/delegate">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">delegate</a>(id, { ...params }) -> SubscriptionDelegateResponse</code>
- <code title="post /api/v1/subscriptions/{id}/migrate">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">migrate</a>(id, { ...params }) -> SubscriptionMigrateResponse</code>
- <code title="post /api/v1/subscriptions/preview">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">preview</a>({ ...params }) -> SubscriptionPreviewResponse</code>
- <code title="post /api/v1/subscriptions/{id}/transfer">client.v1.subscriptions.<a href="./src/resources/v1/subscriptions/subscriptions.ts">transfer</a>(id, { ...params }) -> SubscriptionTransferResponse</code>

### FutureUpdate

Types:

- <code><a href="./src/resources/v1/subscriptions/future-update.ts">FutureUpdateCancelPendingPaymentResponse</a></code>
- <code><a href="./src/resources/v1/subscriptions/future-update.ts">FutureUpdateCancelScheduleResponse</a></code>

Methods:

- <code title="delete /api/v1/subscriptions/{id}/future-update/pending-payment">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelPendingPayment</a>(id) -> FutureUpdateCancelPendingPaymentResponse</code>
- <code title="delete /api/v1/subscriptions/{id}/future-update/schedule">client.v1.subscriptions.futureUpdate.<a href="./src/resources/v1/subscriptions/future-update.ts">cancelSchedule</a>(id) -> FutureUpdateCancelScheduleResponse</code>

## Coupons

Types:

- <code><a href="./src/resources/v1/coupons.ts">CouponCreateResponse</a></code>
- <code><a href="./src/resources/v1/coupons.ts">CouponRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/coupons.ts">CouponListResponse</a></code>

Methods:

- <code title="post /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">create</a>({ ...params }) -> CouponCreateResponse</code>
- <code title="get /api/v1/coupons/{id}">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">retrieve</a>(id) -> CouponRetrieveResponse</code>
- <code title="get /api/v1/coupons">client.v1.coupons.<a href="./src/resources/v1/coupons.ts">list</a>({ ...params }) -> CouponListResponsesMyCursorIDPage</code>
