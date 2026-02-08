// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FutureUpdateAPI from './future-update';
import { CancelSubscription, FutureUpdate } from './future-update';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  futureUpdate: FutureUpdateAPI.FutureUpdate = new FutureUpdateAPI.FutureUpdate(this._client);

  /**
   * Retrieves a subscription by its unique identifier, including plan details,
   * billing period, status, and add-ons.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.get(path`/api/v1/subscriptions/${id}`, options);
  }

  /**
   * Updates an active subscription's properties including billing period, add-ons,
   * unit quantities, and discounts.
   */
  update(id: string, body: SubscriptionUpdateParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.patch(path`/api/v1/subscriptions/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of subscriptions, with optional filters for customer,
   * status, and plan.
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubscriptionListResponsesMyCursorIDPage, SubscriptionListResponse> {
    return this._client.getAPIList('/api/v1/subscriptions', MyCursorIDPage<SubscriptionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Cancels an active subscription, either immediately or at a specified time such
   * as end of billing period.
   */
  cancel(id: string, body: SubscriptionCancelParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post(path`/api/v1/subscriptions/${id}/cancel`, { body, ...options });
  }

  /**
   * Delegates the payment responsibility of a subscription to a different customer.
   * The delegated customer will be billed for this subscription.
   */
  delegate(id: string, body: SubscriptionDelegateParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post(path`/api/v1/subscriptions/${id}/delegate`, { body, ...options });
  }

  /**
   * Imports multiple subscriptions in bulk. Used for migrating subscription data
   * from external systems.
   */
  import(body: SubscriptionImportParams, options?: RequestOptions): APIPromise<SubscriptionImportResponse> {
    return this._client.post('/api/v1/subscriptions/import', { body, ...options });
  }

  /**
   * Migrates a subscription to the latest published version of its plan or add-ons.
   * Handles prorated charges or credits automatically.
   */
  migrate(id: string, body: SubscriptionMigrateParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post(path`/api/v1/subscriptions/${id}/migrate`, { body, ...options });
  }

  /**
   * Previews the pricing impact of creating or updating a subscription without
   * making changes. Returns estimated costs, taxes, and proration details.
   */
  preview(
    body: SubscriptionPreviewParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionPreviewResponse> {
    return this._client.post('/api/v1/subscriptions/preview', { body, ...options });
  }

  /**
   * Creates a new subscription for an existing customer. When payment is required
   * and no payment method exists, returns a checkout URL.
   */
  provision(
    body: SubscriptionProvisionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionProvisionResponse> {
    return this._client.post('/api/v1/subscriptions', { body, ...options });
  }

  /**
   * Transfers a subscription to a different resource ID. Used for multi-resource
   * products where subscriptions apply to specific entities like websites or apps.
   */
  transfer(id: string, body: SubscriptionTransferParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post(path`/api/v1/subscriptions/${id}/transfer`, { body, ...options });
  }
}

export type SubscriptionListResponsesMyCursorIDPage = MyCursorIDPage<SubscriptionListResponse>;

/**
 * Response object
 */
export interface Subscription {
  /**
   * Customer subscription to a plan
   */
  data: Subscription.Data;
}

export namespace Subscription {
  /**
   * Customer subscription to a plan
   */
  export interface Data {
    /**
     * Subscription ID
     */
    id: string;

    /**
     * Billing ID
     */
    billingId: string | null;

    /**
     * Created at
     */
    createdAt: string;

    /**
     * Customer ID
     */
    customerId: string;

    /**
     * Payment collection
     */
    paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED';

    /**
     * Plan ID
     */
    planId: string;

    /**
     * Pricing type
     */
    pricingType: 'FREE' | 'PAID' | 'CUSTOM';

    /**
     * Subscription start date
     */
    startDate: string;

    /**
     * Subscription status
     */
    status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED';

    /**
     * Subscription cancellation date
     */
    cancellationDate?: string | null;

    /**
     * Subscription cancel reason
     */
    cancelReason?:
      | 'UPGRADE_OR_DOWNGRADE'
      | 'CANCELLED_BY_BILLING'
      | 'EXPIRED'
      | 'DETACH_BILLING'
      | 'TRIAL_ENDED'
      | 'Immediate'
      | 'TRIAL_CONVERTED'
      | 'PENDING_PAYMENT_EXPIRED'
      | 'ScheduledCancellation'
      | 'CustomerArchived'
      | 'AutoCancellationRule'
      | null;

    /**
     * End of the current billing period
     */
    currentBillingPeriodEnd?: string | null;

    /**
     * Start of the current billing period
     */
    currentBillingPeriodStart?: string | null;

    /**
     * Subscription effective end date
     */
    effectiveEndDate?: string | null;

    /**
     * Subscription end date
     */
    endDate?: string | null;

    /**
     * Additional metadata for the subscription
     */
    metadata?: { [key: string]: string };

    /**
     * Paying customer ID for delegated billing
     */
    payingCustomerId?: string | null;

    /**
     * The method used to collect payments for a subscription
     */
    paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE' | null;

    prices?: Array<Data.Price>;

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }

  export namespace Data {
    export interface Price {
      /**
       * Price ID
       */
      id: string;

      /**
       * Creation timestamp
       */
      createdAt: string;

      /**
       * Last update timestamp
       */
      updatedAt: string;

      [k: string]: unknown;
    }
  }
}

/**
 * Customer subscription to a plan
 */
export interface SubscriptionListResponse {
  /**
   * Subscription ID
   */
  id: string;

  /**
   * Billing ID
   */
  billingId: string | null;

  /**
   * Created at
   */
  createdAt: string;

  /**
   * Customer ID
   */
  customerId: string;

  /**
   * Payment collection
   */
  paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED';

  /**
   * Plan ID
   */
  planId: string;

  /**
   * Pricing type
   */
  pricingType: 'FREE' | 'PAID' | 'CUSTOM';

  /**
   * Subscription start date
   */
  startDate: string;

  /**
   * Subscription status
   */
  status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED';

  /**
   * Subscription cancellation date
   */
  cancellationDate?: string | null;

  /**
   * Subscription cancel reason
   */
  cancelReason?:
    | 'UPGRADE_OR_DOWNGRADE'
    | 'CANCELLED_BY_BILLING'
    | 'EXPIRED'
    | 'DETACH_BILLING'
    | 'TRIAL_ENDED'
    | 'Immediate'
    | 'TRIAL_CONVERTED'
    | 'PENDING_PAYMENT_EXPIRED'
    | 'ScheduledCancellation'
    | 'CustomerArchived'
    | 'AutoCancellationRule'
    | null;

  /**
   * End of the current billing period
   */
  currentBillingPeriodEnd?: string | null;

  /**
   * Start of the current billing period
   */
  currentBillingPeriodStart?: string | null;

  /**
   * Subscription effective end date
   */
  effectiveEndDate?: string | null;

  /**
   * Subscription end date
   */
  endDate?: string | null;

  /**
   * Additional metadata for the subscription
   */
  metadata?: { [key: string]: string };

  /**
   * Paying customer ID for delegated billing
   */
  payingCustomerId?: string | null;

  /**
   * The method used to collect payments for a subscription
   */
  paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE' | null;

  prices?: Array<SubscriptionListResponse.Price>;

  /**
   * Resource ID
   */
  resourceId?: string | null;

  /**
   * Subscription trial end date
   */
  trialEndDate?: string | null;
}

export namespace SubscriptionListResponse {
  export interface Price {
    /**
     * Price ID
     */
    id: string;

    /**
     * Creation timestamp
     */
    createdAt: string;

    /**
     * Last update timestamp
     */
    updatedAt: string;

    [k: string]: unknown;
  }
}

/**
 * Response object
 */
export interface SubscriptionImportResponse {
  data: SubscriptionImportResponse.Data;
}

export namespace SubscriptionImportResponse {
  export interface Data {
    /**
     * Unique identifier for the import task
     */
    taskId: string;
  }
}

/**
 * Response object
 */
export interface SubscriptionPreviewResponse {
  /**
   * Pricing preview with invoices
   */
  data: SubscriptionPreviewResponse.Data;
}

export namespace SubscriptionPreviewResponse {
  /**
   * Pricing preview with invoices
   */
  export interface Data {
    /**
     * Invoice due immediately
     */
    immediateInvoice: Data.ImmediateInvoice;

    /**
     * Billing period range
     */
    billingPeriodRange?: Data.BillingPeriodRange;

    /**
     * Free items included
     */
    freeItems?: Array<Data.FreeItem>;

    /**
     * Whether updates are scheduled
     */
    hasScheduledUpdates?: boolean;

    /**
     * Whether this is a downgrade
     */
    isPlanDowngrade?: boolean;

    /**
     * Recurring invoice preview
     */
    recurringInvoice?: Data.RecurringInvoice;
  }

  export namespace Data {
    /**
     * Invoice due immediately
     */
    export interface ImmediateInvoice {
      /**
       * Subtotal before discounts
       */
      subTotal: number;

      /**
       * Invoice total
       */
      total: number;

      /**
       * Billing period covered
       */
      billingPeriodRange?: ImmediateInvoice.BillingPeriodRange;

      /**
       * Currency code
       */
      currency?: string | null;

      /**
       * Total discount amount
       */
      discount?: number;

      /**
       * Discount breakdown
       */
      discountDetails?: ImmediateInvoice.DiscountDetails;

      /**
       * Applied discounts
       */
      discounts?: Array<ImmediateInvoice.Discount>;

      /**
       * Line items
       */
      lines?: Array<ImmediateInvoice.Line>;

      /**
       * Tax amount
       */
      tax?: number;
    }

    export namespace ImmediateInvoice {
      /**
       * Billing period covered
       */
      export interface BillingPeriodRange {
        /**
         * Billing period end date
         */
        end: string;

        /**
         * Billing period start date
         */
        start: string;
      }

      /**
       * Discount breakdown
       */
      export interface DiscountDetails {
        /**
         * Promo code used
         */
        code?: string;

        /**
         * Fixed discount amount
         */
        fixedAmount?: number;

        /**
         * Percentage discount
         */
        percentage?: number;
      }

      /**
       * Applied discount amount
       */
      export interface Discount {
        /**
         * Discount amount
         */
        amount: number;

        /**
         * Currency code
         */
        currency: string;

        /**
         * Discount description
         */
        description: string;
      }

      /**
       * Invoice line item
       */
      export interface Line {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Line item description
         */
        description: string;

        /**
         * Line subtotal
         */
        subTotal: number;

        /**
         * Price per unit
         */
        unitPrice: number;

        /**
         * Quantity
         */
        quantity?: number;
      }
    }

    /**
     * Billing period range
     */
    export interface BillingPeriodRange {
      /**
       * Billing period end date
       */
      end?: string;

      /**
       * Billing period start date
       */
      start?: string;
    }

    /**
     * Free item in subscription
     */
    export interface FreeItem {
      /**
       * Addon ID
       */
      addonId: string;

      /**
       * Quantity
       */
      quantity: number;
    }

    /**
     * Recurring invoice preview
     */
    export interface RecurringInvoice {
      /**
       * Subtotal before discounts
       */
      subTotal: number;

      /**
       * Invoice total
       */
      total: number;

      /**
       * Billing period covered
       */
      billingPeriodRange?: RecurringInvoice.BillingPeriodRange;

      /**
       * Currency code
       */
      currency?: string | null;

      /**
       * Total discount amount
       */
      discount?: number;

      /**
       * Discount breakdown
       */
      discountDetails?: RecurringInvoice.DiscountDetails;

      /**
       * Applied discounts
       */
      discounts?: Array<RecurringInvoice.Discount>;

      /**
       * Line items
       */
      lines?: Array<RecurringInvoice.Line>;

      /**
       * Tax amount
       */
      tax?: number;
    }

    export namespace RecurringInvoice {
      /**
       * Billing period covered
       */
      export interface BillingPeriodRange {
        /**
         * Billing period end date
         */
        end: string;

        /**
         * Billing period start date
         */
        start: string;
      }

      /**
       * Discount breakdown
       */
      export interface DiscountDetails {
        /**
         * Promo code used
         */
        code?: string;

        /**
         * Fixed discount amount
         */
        fixedAmount?: number;

        /**
         * Percentage discount
         */
        percentage?: number;
      }

      /**
       * Applied discount amount
       */
      export interface Discount {
        /**
         * Discount amount
         */
        amount: number;

        /**
         * Currency code
         */
        currency: string;

        /**
         * Discount description
         */
        description: string;
      }

      /**
       * Invoice line item
       */
      export interface Line {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Line item description
         */
        description: string;

        /**
         * Line subtotal
         */
        subTotal: number;

        /**
         * Price per unit
         */
        unitPrice: number;

        /**
         * Quantity
         */
        quantity?: number;
      }
    }
  }
}

/**
 * Response object
 */
export interface SubscriptionProvisionResponse {
  /**
   * Provisioning result with status and subscription or checkout URL.
   */
  data: SubscriptionProvisionResponse.Data;
}

export namespace SubscriptionProvisionResponse {
  /**
   * Provisioning result with status and subscription or checkout URL.
   */
  export interface Data {
    /**
     * Unique identifier for the provisioned subscription
     */
    id: string;

    entitlements: Array<Data.UnionMember0 | Data.UnionMember1> | null;

    /**
     * Provision status: SUCCESS or PAYMENT_REQUIRED
     */
    status: 'SUCCESS' | 'PAYMENT_REQUIRED';

    /**
     * Created subscription (when status is SUCCESS)
     */
    subscription: Data.Subscription | null;

    /**
     * Checkout billing ID when payment is required
     */
    checkoutBillingId?: string;

    /**
     * URL to complete payment when PAYMENT_REQUIRED
     */
    checkoutUrl?: string;

    /**
     * Whether the subscription is scheduled for future activation
     */
    isScheduled?: boolean;
  }

  export namespace Data {
    export interface UnionMember0 {
      accessDeniedReason:
        | 'FeatureNotFound'
        | 'CustomerNotFound'
        | 'CustomerIsArchived'
        | 'CustomerResourceNotFound'
        | 'NoActiveSubscription'
        | 'NoFeatureEntitlementInSubscription'
        | 'RequestedUsageExceedingLimit'
        | 'RequestedValuesMismatch'
        | 'BudgetExceeded'
        | 'Unknown'
        | 'FeatureTypeMismatch'
        | 'Revoked'
        | 'InsufficientCredits'
        | 'EntitlementNotFound'
        | null;

      isGranted: boolean;

      type: 'FEATURE';

      currentUsage?: number;

      /**
       * Timestamp of the last update to the entitlement grant or configuration.
       */
      entitlementUpdatedAt?: string;

      feature?: UnionMember0.Feature;

      hasUnlimitedUsage?: boolean;

      resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | null;

      usageLimit?: number | null;

      /**
       * The anchor for calculating the usage period for metered entitlements with a
       * reset period configured
       */
      usagePeriodAnchor?: string;

      /**
       * The end date of the usage period for metered entitlements with a reset period
       * configured
       */
      usagePeriodEnd?: string;

      /**
       * The start date of the usage period for metered entitlements with a reset period
       * configured
       */
      usagePeriodStart?: string;

      /**
       * The next time the entitlement should be recalculated
       */
      validUntil?: string;
    }

    export namespace UnionMember0 {
      export interface Feature {
        /**
         * The human-readable name of the entitlement, shown in UI elements.
         */
        displayName: string;

        /**
         * The current status of the feature.
         */
        featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE';

        /**
         * The type of feature associated with the entitlement.
         */
        featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';

        /**
         * The unique reference ID of the entitlement.
         */
        refId: string;
      }
    }

    export interface UnionMember1 {
      accessDeniedReason:
        | 'FeatureNotFound'
        | 'CustomerNotFound'
        | 'CustomerIsArchived'
        | 'CustomerResourceNotFound'
        | 'NoActiveSubscription'
        | 'NoFeatureEntitlementInSubscription'
        | 'RequestedUsageExceedingLimit'
        | 'RequestedValuesMismatch'
        | 'BudgetExceeded'
        | 'Unknown'
        | 'FeatureTypeMismatch'
        | 'Revoked'
        | 'InsufficientCredits'
        | 'EntitlementNotFound'
        | null;

      /**
       * The currency associated with a credit entitlement.
       */
      currency: UnionMember1.Currency;

      currentUsage: number;

      isGranted: boolean;

      type: 'CREDIT';

      usageLimit: number;

      /**
       * Timestamp of the last update to the credit usage.
       */
      usageUpdatedAt: string;

      /**
       * Timestamp of the last update to the entitlement grant or configuration.
       */
      entitlementUpdatedAt?: string;

      /**
       * The next time the entitlement should be recalculated
       */
      validUntil?: string;
    }

    export namespace UnionMember1 {
      /**
       * The currency associated with a credit entitlement.
       */
      export interface Currency {
        /**
         * The unique identifier of the custom currency.
         */
        currencyId: string;
      }
    }

    /**
     * Created subscription (when status is SUCCESS)
     */
    export interface Subscription {
      /**
       * Subscription ID
       */
      id: string;

      /**
       * Billing ID
       */
      billingId: string | null;

      /**
       * Created at
       */
      createdAt: string;

      /**
       * Customer ID
       */
      customerId: string;

      /**
       * Payment collection
       */
      paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED';

      /**
       * Plan ID
       */
      planId: string;

      /**
       * Pricing type
       */
      pricingType: 'FREE' | 'PAID' | 'CUSTOM';

      /**
       * Subscription start date
       */
      startDate: string;

      /**
       * Subscription status
       */
      status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED';

      /**
       * Subscription cancellation date
       */
      cancellationDate?: string | null;

      /**
       * Subscription cancel reason
       */
      cancelReason?:
        | 'UPGRADE_OR_DOWNGRADE'
        | 'CANCELLED_BY_BILLING'
        | 'EXPIRED'
        | 'DETACH_BILLING'
        | 'TRIAL_ENDED'
        | 'Immediate'
        | 'TRIAL_CONVERTED'
        | 'PENDING_PAYMENT_EXPIRED'
        | 'ScheduledCancellation'
        | 'CustomerArchived'
        | 'AutoCancellationRule'
        | null;

      /**
       * End of the current billing period
       */
      currentBillingPeriodEnd?: string | null;

      /**
       * Start of the current billing period
       */
      currentBillingPeriodStart?: string | null;

      /**
       * Subscription effective end date
       */
      effectiveEndDate?: string | null;

      /**
       * Subscription end date
       */
      endDate?: string | null;

      /**
       * Additional metadata for the subscription
       */
      metadata?: { [key: string]: string };

      /**
       * Paying customer ID for delegated billing
       */
      payingCustomerId?: string | null;

      /**
       * The method used to collect payments for a subscription
       */
      paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE' | null;

      prices?: Array<Subscription.Price>;

      /**
       * Resource ID
       */
      resourceId?: string | null;

      /**
       * Subscription trial end date
       */
      trialEndDate?: string | null;
    }

    export namespace Subscription {
      export interface Price {
        /**
         * Addon identifier for the price override
         */
        addonId?: string | null;

        /**
         * Whether this is a base charge override
         */
        baseCharge?: boolean;

        /**
         * Block size for pricing
         */
        blockSize?: number;

        /**
         * Feature identifier for the price override
         */
        featureId?: string | null;

        /**
         * Override price amount
         */
        price?: Price.Price;

        /**
         * Pricing tiers configuration
         */
        tiers?: Array<Price.Tier>;
      }

      export namespace Price {
        /**
         * Override price amount
         */
        export interface Price {
          /**
           * The price amount
           */
          amount?: number;

          /**
           * The billing country code of the price
           */
          billingCountryCode?: string | null;

          /**
           * The price currency
           */
          currency?:
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

        export interface Tier {
          /**
           * The flat fee price of the price tier
           */
          flatPrice?: Tier.FlatPrice;

          /**
           * The unit price of the price tier
           */
          unitPrice?: Tier.UnitPrice;

          /**
           * The up to quantity of the price tier
           */
          upTo?: number;
        }

        export namespace Tier {
          /**
           * The flat fee price of the price tier
           */
          export interface FlatPrice {
            /**
             * The price amount
             */
            amount?: number;

            /**
             * The billing country code of the price
             */
            billingCountryCode?: string | null;

            /**
             * The price currency
             */
            currency?:
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

          /**
           * The unit price of the price tier
           */
          export interface UnitPrice {
            /**
             * The price amount
             */
            amount?: number;

            /**
             * The billing country code of the price
             */
            billingCountryCode?: string | null;

            /**
             * The price currency
             */
            currency?:
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
    }
  }
}

export interface SubscriptionUpdateParams {
  addons?: Array<SubscriptionUpdateParams.Addon>;

  appliedCoupon?: SubscriptionUpdateParams.AppliedCoupon;

  awaitPaymentConfirmation?: boolean;

  billingInformation?: SubscriptionUpdateParams.BillingInformation;

  billingPeriod?: 'MONTHLY' | 'ANNUALLY';

  budget?: SubscriptionUpdateParams.Budget | null;

  charges?: Array<SubscriptionUpdateParams.Charge>;

  /**
   * Additional metadata for the subscription
   */
  metadata?: { [key: string]: string };

  minimumSpend?: SubscriptionUpdateParams.MinimumSpend | null;

  priceOverrides?: Array<SubscriptionUpdateParams.PriceOverride>;

  promotionCode?: string;

  scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';

  subscriptionEntitlements?: Array<SubscriptionUpdateParams.SubscriptionEntitlement>;

  /**
   * Subscription trial end date
   */
  trialEndDate?: string;
}

export namespace SubscriptionUpdateParams {
  export interface Addon {
    /**
     * Addon ID
     */
    addonId: string;

    quantity: number;
  }

  export interface AppliedCoupon {
    billingCouponId?: string;

    configuration?: AppliedCoupon.Configuration;

    couponId?: string;

    discount?: AppliedCoupon.Discount;

    promotionCode?: string | null;
  }

  export namespace AppliedCoupon {
    export interface Configuration {
      /**
       * Coupon start date
       */
      startDate?: string;
    }

    export interface Discount {
      amountsOff?: Array<Discount.AmountsOff> | null;

      description?: string;

      durationInMonths?: number;

      name?: string;

      percentOff?: number;
    }

    export namespace Discount {
      export interface AmountsOff {
        amount: number;

        currency?:
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

  export interface BillingInformation {
    /**
     * Physical address
     */
    billingAddress?: BillingInformation.BillingAddress;

    chargeOnBehalfOfAccount?: string;

    couponId?: string;

    integrationId?: string;

    invoiceDaysUntilDue?: number;

    isBackdated?: boolean;

    isInvoicePaid?: boolean;

    /**
     * Additional metadata for the subscription
     */
    metadata?: { [key: string]: unknown };

    prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE';

    taxIds?: Array<BillingInformation.TaxID>;

    taxPercentage?: number;

    taxRateIds?: Array<string>;
  }

  export namespace BillingInformation {
    /**
     * Physical address
     */
    export interface BillingAddress {
      /**
       * City name
       */
      city?: string;

      /**
       * Country code or name
       */
      country?: string;

      /**
       * Street address line 1
       */
      line1?: string;

      /**
       * Street address line 2
       */
      line2?: string;

      /**
       * Postal or ZIP code
       */
      postalCode?: string;

      /**
       * State or province
       */
      state?: string;
    }

    export interface TaxID {
      type: string;

      value: string;
    }
  }

  export interface Budget {
    hasSoftLimit: boolean;

    limit: number;
  }

  export interface Charge {
    /**
     * Charge ID
     */
    id: string;

    quantity: number;

    type: 'FEATURE' | 'CREDIT';
  }

  export interface MinimumSpend {
    minimum?: MinimumSpend.Minimum | null;
  }

  export namespace MinimumSpend {
    export interface Minimum {
      amount: number;

      currency?:
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

  export interface PriceOverride {
    /**
     * Feature ID
     */
    featureId: string;

    price?: PriceOverride.Price;
  }

  export namespace PriceOverride {
    export interface Price {
      amount: number;

      currency?:
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

  export interface SubscriptionEntitlement {
    id?: string;

    featureId?: string;

    hasSoftLimit?: boolean;

    hasUnlimitedUsage?: boolean;

    monthlyResetPeriodConfiguration?: SubscriptionEntitlement.MonthlyResetPeriodConfiguration;

    resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR';

    usageLimit?: number;

    weeklyResetPeriodConfiguration?: SubscriptionEntitlement.WeeklyResetPeriodConfiguration;

    yearlyResetPeriodConfiguration?: SubscriptionEntitlement.YearlyResetPeriodConfiguration;
  }

  export namespace SubscriptionEntitlement {
    export interface MonthlyResetPeriodConfiguration {
      accordingTo: 'SubscriptionStart' | 'StartOfTheMonth';
    }

    export interface WeeklyResetPeriodConfiguration {
      accordingTo:
        | 'SubscriptionStart'
        | 'EverySunday'
        | 'EveryMonday'
        | 'EveryTuesday'
        | 'EveryWednesday'
        | 'EveryThursday'
        | 'EveryFriday'
        | 'EverySaturday';
    }

    export interface YearlyResetPeriodConfiguration {
      accordingTo: 'SubscriptionStart';
    }
  }
}

export interface SubscriptionListParams extends MyCursorIDPageParams {
  /**
   * Filter by customer ID
   */
  customerId?: string;

  /**
   * Filter by status (comma-separated)
   */
  status?: string;
}

export interface SubscriptionCancelParams {
  /**
   * Action on cancellation (downgrade or revoke)
   */
  cancellationAction?: 'DEFAULT' | 'REVOKE_ENTITLEMENTS';

  /**
   * When to cancel (immediate, period end, or date)
   */
  cancellationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';

  /**
   * Subscription end date
   */
  endDate?: string;

  /**
   * If set, enables or disables prorating of credits on subscription cancellation.
   */
  prorate?: boolean;
}

export interface SubscriptionDelegateParams {
  /**
   * The unique identifier of the customer who will assume payment responsibility for
   * this subscription. This customer must already exist in your Stigg account and
   * have a valid payment method if the subscription requires payment.
   */
  targetCustomerId: string;
}

export interface SubscriptionImportParams {
  /**
   * List of subscription objects to import
   */
  subscriptions: Array<SubscriptionImportParams.Subscription>;

  /**
   * Integration ID to use for importing subscriptions
   */
  integrationId?: string | null;
}

export namespace SubscriptionImportParams {
  export interface Subscription {
    /**
     * Subscription ID
     */
    id: string;

    /**
     * Customer ID
     */
    customerId: string;

    /**
     * Plan ID
     */
    planId: string;

    /**
     * Billing ID
     */
    billingId?: string | null;

    /**
     * Subscription end date
     */
    endDate?: string | null;

    /**
     * Additional metadata for the subscription
     */
    metadata?: { [key: string]: string };

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription start date
     */
    startDate?: string;
  }
}

export interface SubscriptionMigrateParams {
  /**
   * When to migrate (immediate or period end)
   */
  subscriptionMigrationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE';
}

export interface SubscriptionPreviewParams {
  /**
   * Customer ID
   */
  customerId: string;

  /**
   * Plan ID
   */
  planId: string;

  /**
   * Addons to include
   */
  addons?: Array<SubscriptionPreviewParams.Addon>;

  /**
   * Coupon or discount to apply
   */
  appliedCoupon?: SubscriptionPreviewParams.AppliedCoupon;

  /**
   * Billable features with quantities
   */
  billableFeatures?: Array<SubscriptionPreviewParams.BillableFeature>;

  /**
   * ISO 3166-1 country code for localization
   */
  billingCountryCode?: string;

  /**
   * Billing and tax configuration
   */
  billingInformation?: SubscriptionPreviewParams.BillingInformation;

  /**
   * Billing period (MONTHLY or ANNUALLY)
   */
  billingPeriod?: 'MONTHLY' | 'ANNUALLY';

  /**
   * One-time or recurring charges
   */
  charges?: Array<SubscriptionPreviewParams.Charge>;

  /**
   * Paying customer ID for delegated billing
   */
  payingCustomerId?: string;

  /**
   * Resource ID for multi-instance subscriptions
   */
  resourceId?: string;

  /**
   * When to apply subscription changes
   */
  scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';

  /**
   * Subscription start date
   */
  startDate?: string;

  /**
   * Trial period override settings
   */
  trialOverrideConfiguration?: SubscriptionPreviewParams.TrialOverrideConfiguration;

  /**
   * Unit quantity for per-unit pricing
   */
  unitQuantity?: number;
}

export namespace SubscriptionPreviewParams {
  /**
   * Addon configuration
   */
  export interface Addon {
    /**
     * Addon ID
     */
    addonId: string;

    /**
     * Number of addon instances
     */
    quantity?: number;
  }

  /**
   * Coupon or discount to apply
   */
  export interface AppliedCoupon {
    /**
     * Billing provider coupon ID
     */
    billingCouponId?: string;

    /**
     * Coupon timing configuration
     */
    configuration?: AppliedCoupon.Configuration;

    /**
     * Stigg coupon ID
     */
    couponId?: string;

    /**
     * Ad-hoc discount configuration
     */
    discount?: AppliedCoupon.Discount;

    /**
     * Promotion code to apply
     */
    promotionCode?: string;
  }

  export namespace AppliedCoupon {
    /**
     * Coupon timing configuration
     */
    export interface Configuration {
      /**
       * Coupon start date
       */
      startDate?: string;
    }

    /**
     * Ad-hoc discount configuration
     */
    export interface Discount {
      /**
       * Fixed amounts off by currency
       */
      amountsOff?: Array<Discount.AmountsOff> | null;

      /**
       * Ad-hoc discount
       */
      description?: string;

      /**
       * Duration in months
       */
      durationInMonths?: number;

      /**
       * Discount name
       */
      name?: string;

      /**
       * Percentage discount
       */
      percentOff?: number;
    }

    export namespace Discount {
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

  /**
   * Feature with quantity
   */
  export interface BillableFeature {
    /**
     * Feature ID
     */
    featureId: string;

    /**
     * Quantity of feature units
     */
    quantity: number;
  }

  /**
   * Billing and tax configuration
   */
  export interface BillingInformation {
    /**
     * Billing address
     */
    billingAddress?: BillingInformation.BillingAddress;

    /**
     * Connected account ID for platform billing
     */
    chargeOnBehalfOfAccount?: string;

    /**
     * Billing integration ID
     */
    integrationId?: string;

    /**
     * Days until invoice is due
     */
    invoiceDaysUntilDue?: number;

    /**
     * Whether subscription is backdated
     */
    isBackdated?: boolean;

    /**
     * Whether invoice is already paid
     */
    isInvoicePaid?: boolean;

    /**
     * Additional billing metadata
     */
    metadata?: unknown;

    /**
     * Proration behavior
     */
    prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE';

    /**
     * Customer tax IDs
     */
    taxIds?: Array<BillingInformation.TaxID>;

    /**
     * Tax percentage to apply
     */
    taxPercentage?: number;

    /**
     * Tax rate IDs from billing provider
     */
    taxRateIds?: Array<string>;
  }

  export namespace BillingInformation {
    /**
     * Billing address
     */
    export interface BillingAddress {
      city?: string;

      country?: string;

      line1?: string;

      line2?: string;

      postalCode?: string;

      state?: string;
    }

    /**
     * Tax exemption identifier
     */
    export interface TaxID {
      /**
       * Tax exemption type (e.g., vat, gst)
       */
      type: string;

      /**
       * Tax exemption identifier value
       */
      value: string;
    }
  }

  /**
   * Charge item
   */
  export interface Charge {
    /**
     * Charge ID
     */
    id: string;

    /**
     * Charge quantity
     */
    quantity: number;

    /**
     * Charge type
     */
    type: 'FEATURE' | 'CREDIT';
  }

  /**
   * Trial period override settings
   */
  export interface TrialOverrideConfiguration {
    /**
     * Whether to start as trial
     */
    isTrial: boolean;

    /**
     * Behavior when trial ends
     */
    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION';

    /**
     * Trial end date
     */
    trialEndDate?: string;
  }
}

export interface SubscriptionProvisionParams {
  /**
   * Customer ID to provision the subscription for
   */
  customerId: string;

  /**
   * Plan ID to provision
   */
  planId: string;

  /**
   * Unique identifier for the subscription
   */
  id?: string;

  addons?: Array<SubscriptionProvisionParams.Addon>;

  /**
   * Coupon configuration
   */
  appliedCoupon?: SubscriptionProvisionParams.AppliedCoupon;

  /**
   * Whether to wait for payment confirmation before returning the subscription
   */
  awaitPaymentConfirmation?: boolean;

  /**
   * The ISO 3166-1 alpha-2 country code for billing
   */
  billingCountryCode?: string | null;

  /**
   * External billing system identifier
   */
  billingId?: string | null;

  billingInformation?: SubscriptionProvisionParams.BillingInformation;

  /**
   * Billing period (MONTHLY or ANNUALLY)
   */
  billingPeriod?: 'MONTHLY' | 'ANNUALLY';

  budget?: SubscriptionProvisionParams.Budget | null;

  charges?: Array<SubscriptionProvisionParams.Charge>;

  /**
   * Checkout page configuration for payment collection
   */
  checkoutOptions?: SubscriptionProvisionParams.CheckoutOptions;

  /**
   * Additional metadata for the subscription
   */
  metadata?: { [key: string]: string };

  minimumSpend?: SubscriptionProvisionParams.MinimumSpend | null;

  /**
   * Optional paying customer ID for split billing scenarios
   */
  payingCustomerId?: string | null;

  /**
   * How payments should be collected for this subscription
   */
  paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE';

  priceOverrides?: Array<SubscriptionProvisionParams.PriceOverride>;

  /**
   * Optional resource ID for multi-instance subscriptions
   */
  resourceId?: string | null;

  /**
   * Salesforce ID
   */
  salesforceId?: string | null;

  /**
   * Strategy for scheduling subscription changes
   */
  scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';

  /**
   * Subscription start date
   */
  startDate?: string;

  subscriptionEntitlements?: Array<SubscriptionProvisionParams.SubscriptionEntitlement>;

  /**
   * Trial period override settings
   */
  trialOverrideConfiguration?: SubscriptionProvisionParams.TrialOverrideConfiguration;

  unitQuantity?: number;
}

export namespace SubscriptionProvisionParams {
  export interface Addon {
    /**
     * Addon identifier
     */
    addonId: string;

    /**
     * Number of addon units
     */
    quantity?: number;
  }

  /**
   * Coupon configuration
   */
  export interface AppliedCoupon {
    /**
     * Billing provider coupon ID
     */
    billingCouponId?: string;

    /**
     * Coupon timing configuration
     */
    configuration?: AppliedCoupon.Configuration;

    /**
     * Stigg coupon ID
     */
    couponId?: string;

    /**
     * Ad-hoc discount configuration
     */
    discount?: AppliedCoupon.Discount;

    /**
     * Promotion code to apply
     */
    promotionCode?: string;
  }

  export namespace AppliedCoupon {
    /**
     * Coupon timing configuration
     */
    export interface Configuration {
      /**
       * Coupon start date
       */
      startDate?: string;
    }

    /**
     * Ad-hoc discount configuration
     */
    export interface Discount {
      /**
       * Fixed amounts off by currency
       */
      amountsOff?: Array<Discount.AmountsOff> | null;

      /**
       * Ad-hoc discount
       */
      description?: string;

      /**
       * Duration in months
       */
      durationInMonths?: number;

      /**
       * Discount name
       */
      name?: string;

      /**
       * Percentage discount
       */
      percentOff?: number;
    }

    export namespace Discount {
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

  export interface BillingInformation {
    /**
     * Billing address for the subscription
     */
    billingAddress?: BillingInformation.BillingAddress;

    /**
     * Stripe Connect account to charge on behalf of
     */
    chargeOnBehalfOfAccount?: string | null;

    /**
     * Billing integration identifier
     */
    integrationId?: string | null;

    /**
     * Number of days until invoice is due
     */
    invoiceDaysUntilDue?: number;

    /**
     * Whether the subscription is backdated
     */
    isBackdated?: boolean;

    /**
     * Whether the invoice is marked as paid
     */
    isInvoicePaid?: boolean;

    /**
     * Additional metadata for the subscription
     */
    metadata?: { [key: string]: string };

    /**
     * How to handle proration for billing changes
     */
    prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE';

    /**
     * Customer tax identification numbers
     */
    taxIds?: Array<BillingInformation.TaxID>;

    /**
     * Tax percentage (0-100)
     */
    taxPercentage?: number;

    /**
     * Tax rate identifiers to apply
     */
    taxRateIds?: Array<string>;
  }

  export namespace BillingInformation {
    /**
     * Billing address for the subscription
     */
    export interface BillingAddress {
      city?: string;

      country?: string;

      line1?: string;

      line2?: string;

      postalCode?: string;

      state?: string;
    }

    export interface TaxID {
      /**
       * The type of tax exemption identifier, such as VAT.
       */
      type: string;

      /**
       * The actual tax identifier value
       */
      value: string;
    }
  }

  export interface Budget {
    /**
     * Whether the budget is a soft limit
     */
    hasSoftLimit: boolean;

    /**
     * Maximum spending limit
     */
    limit: number;
  }

  /**
   * Charge item
   */
  export interface Charge {
    /**
     * Charge ID
     */
    id: string;

    /**
     * Charge quantity
     */
    quantity: number;

    /**
     * Charge type
     */
    type: 'FEATURE' | 'CREDIT';
  }

  /**
   * Checkout page configuration for payment collection
   */
  export interface CheckoutOptions {
    /**
     * URL to redirect to if checkout is canceled
     */
    cancelUrl: string;

    /**
     * URL to redirect to after successful checkout
     */
    successUrl: string;

    /**
     * Allow promotional codes during checkout
     */
    allowPromoCodes?: boolean;

    /**
     * Allow tax ID collection during checkout
     */
    allowTaxIdCollection?: boolean;

    /**
     * Collect billing address during checkout
     */
    collectBillingAddress?: boolean;

    /**
     * Collect phone number during checkout
     */
    collectPhoneNumber?: boolean;

    /**
     * Optional reference ID for the checkout session
     */
    referenceId?: string | null;
  }

  export interface MinimumSpend {
    /**
     * Minimum spend amount
     */
    minimum?: MinimumSpend.Minimum | null;
  }

  export namespace MinimumSpend {
    /**
     * Minimum spend amount
     */
    export interface Minimum {
      /**
       * The price amount
       */
      amount?: number;

      /**
       * The billing country code of the price
       */
      billingCountryCode?: string | null;

      /**
       * The price currency
       */
      currency?:
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

  export interface PriceOverride {
    /**
     * Addon identifier for the price override
     */
    addonId?: string | null;

    /**
     * Whether this is a base charge override
     */
    baseCharge?: boolean;

    /**
     * Block size for pricing
     */
    blockSize?: number;

    creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY';

    creditRate?: PriceOverride.CreditRate;

    /**
     * Feature identifier for the price override
     */
    featureId?: string | null;

    /**
     * Override price amount
     */
    price?: PriceOverride.Price;

    /**
     * Pricing tiers configuration
     */
    tiers?: Array<PriceOverride.Tier>;
  }

  export namespace PriceOverride {
    export interface CreditRate {
      /**
       * The credit rate amount
       */
      amount: number;

      /**
       * The custom currency refId for the credit rate
       */
      currencyId: string;

      /**
       * A custom formula for calculating cost based on single event dimensions
       */
      costFormula?: string | null;
    }

    /**
     * Override price amount
     */
    export interface Price {
      /**
       * The price amount
       */
      amount?: number;

      /**
       * The billing country code of the price
       */
      billingCountryCode?: string | null;

      /**
       * The price currency
       */
      currency?:
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

    export interface Tier {
      /**
       * The flat fee price of the price tier
       */
      flatPrice?: Tier.FlatPrice;

      /**
       * The unit price of the price tier
       */
      unitPrice?: Tier.UnitPrice;

      /**
       * The up to quantity of the price tier
       */
      upTo?: number;
    }

    export namespace Tier {
      /**
       * The flat fee price of the price tier
       */
      export interface FlatPrice {
        /**
         * The price amount
         */
        amount?: number;

        /**
         * The billing country code of the price
         */
        billingCountryCode?: string | null;

        /**
         * The price currency
         */
        currency?:
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

      /**
       * The unit price of the price tier
       */
      export interface UnitPrice {
        /**
         * The price amount
         */
        amount?: number;

        /**
         * The billing country code of the price
         */
        billingCountryCode?: string | null;

        /**
         * The price currency
         */
        currency?:
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

  export interface SubscriptionEntitlement {
    /**
     * Feature ID
     */
    featureId: string;

    usageLimit: number;

    isGranted?: boolean;
  }

  /**
   * Trial period override settings
   */
  export interface TrialOverrideConfiguration {
    /**
     * Whether the subscription should start with a trial period
     */
    isTrial: boolean;

    /**
     * Behavior when trial ends: CONVERT_TO_PAID or CANCEL_SUBSCRIPTION
     */
    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION';

    /**
     * Custom trial end date
     */
    trialEndDate?: string;
  }
}

export interface SubscriptionTransferParams {
  /**
   * Resource ID to transfer the subscription to
   */
  destinationResourceId: string;
}

Subscriptions.FutureUpdate = FutureUpdate;

export declare namespace Subscriptions {
  export {
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

  export { FutureUpdate as FutureUpdate, type CancelSubscription as CancelSubscription };
}
