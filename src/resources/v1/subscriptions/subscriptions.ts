// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FutureUpdateAPI from './future-update';
import {
  FutureUpdate,
  FutureUpdateCancelPendingPaymentResponse,
  FutureUpdateCancelScheduleResponse,
} from './future-update';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  futureUpdate: FutureUpdateAPI.FutureUpdate = new FutureUpdateAPI.FutureUpdate(this._client);

  /**
   * Create a new Subscription
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/api/v1/subscriptions', { body, ...options });
  }

  /**
   * Get a single Subscription by id
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(path`/api/v1/subscriptions/${id}`, options);
  }

  /**
   * Get a list of Subscriptions
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get('/api/v1/subscriptions', { query, ...options });
  }

  /**
   * Perform delegate on a Subscription
   */
  delegate(
    id: string,
    body: SubscriptionDelegateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionDelegateResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/delegate`, { body, ...options });
  }

  /**
   * Perform migrate to latest plan version on a Subscription
   */
  migrate(
    id: string,
    body: SubscriptionMigrateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionMigrateResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/migrate`, { body, ...options });
  }

  /**
   * Create a new Subscription Preview
   */
  preview(
    body: SubscriptionPreviewParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionPreviewResponse> {
    return this._client.post('/api/v1/subscriptions/preview', { body, ...options });
  }

  /**
   * Perform transfer to resource on a Subscription
   */
  transfer(
    id: string,
    body: SubscriptionTransferParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionTransferResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/transfer`, { body, ...options });
  }
}

export interface SubscriptionCreateResponse {
  data: SubscriptionCreateResponse.Data;
}

export namespace SubscriptionCreateResponse {
  export interface Data {
    /**
     * Unique identifier for the provisioned subscription
     */
    id: string;

    /**
     * Provision status: SUCCESS or PAYMENT_REQUIRED
     */
    status: 'SUCCESS' | 'PAYMENT_REQUIRED';

    /**
     * Checkout billing ID when payment is required
     */
    checkoutBillingId?: string | null;

    /**
     * URL to complete payment when PAYMENT_REQUIRED
     */
    checkoutUrl?: string | null;

    /**
     * Whether the subscription is scheduled for future activation
     */
    isScheduled?: boolean;

    subscription?: Data.Subscription;
  }

  export namespace Data {
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

      /**
       * Resource ID
       */
      resourceId?: string | null;

      /**
       * Subscription trial end date
       */
      trialEndDate?: string | null;
    }
  }
}

export interface SubscriptionRetrieveResponse {
  data: SubscriptionRetrieveResponse.Data;
}

export namespace SubscriptionRetrieveResponse {
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

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }
}

export interface SubscriptionListResponse {
  data: Array<SubscriptionListResponse.Data>;
}

export namespace SubscriptionListResponse {
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
     * Cursor ID for query pagination
     */
    cursorId: string;

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

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }
}

export interface SubscriptionDelegateResponse {
  data: SubscriptionDelegateResponse.Data;
}

export namespace SubscriptionDelegateResponse {
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

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }
}

export interface SubscriptionMigrateResponse {
  data: SubscriptionMigrateResponse.Data;
}

export namespace SubscriptionMigrateResponse {
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

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }
}

export interface SubscriptionPreviewResponse {
  data: SubscriptionPreviewResponse.Data;
}

export namespace SubscriptionPreviewResponse {
  export interface Data {
    immediateInvoice: Data.ImmediateInvoice;

    billingPeriodRange?: Data.BillingPeriodRange;

    freeItems?: Array<Data.FreeItem>;

    hasScheduledUpdates?: boolean;

    isPlanDowngrade?: boolean;

    recurringInvoice?: Data.RecurringInvoice;
  }

  export namespace Data {
    export interface ImmediateInvoice {
      subTotal: number;

      total: number;

      billingPeriodRange?: ImmediateInvoice.BillingPeriodRange;

      currency?: string | null;

      discount?: number;

      discountDetails?: ImmediateInvoice.DiscountDetails;

      discounts?: Array<ImmediateInvoice.Discount>;

      lines?: Array<ImmediateInvoice.Line>;

      tax?: number;
    }

    export namespace ImmediateInvoice {
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

      export interface DiscountDetails {
        code?: string;

        fixedAmount?: number;

        percentage?: number;
      }

      export interface Discount {
        amount: number;

        currency: string;

        description: string;
      }

      export interface Line {
        currency: string;

        description: string;

        subTotal: number;

        unitPrice: number;

        quantity?: number;
      }
    }

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

    export interface FreeItem {
      addonId: string;

      quantity: number;
    }

    export interface RecurringInvoice {
      subTotal: number;

      total: number;

      billingPeriodRange?: RecurringInvoice.BillingPeriodRange;

      currency?: string | null;

      discount?: number;

      discountDetails?: RecurringInvoice.DiscountDetails;

      discounts?: Array<RecurringInvoice.Discount>;

      lines?: Array<RecurringInvoice.Line>;

      tax?: number;
    }

    export namespace RecurringInvoice {
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

      export interface DiscountDetails {
        code?: string;

        fixedAmount?: number;

        percentage?: number;
      }

      export interface Discount {
        amount: number;

        currency: string;

        description: string;
      }

      export interface Line {
        currency: string;

        description: string;

        subTotal: number;

        unitPrice: number;

        quantity?: number;
      }
    }
  }
}

export interface SubscriptionTransferResponse {
  data: SubscriptionTransferResponse.Data;
}

export namespace SubscriptionTransferResponse {
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

    /**
     * Resource ID
     */
    resourceId?: string | null;

    /**
     * Subscription trial end date
     */
    trialEndDate?: string | null;
  }
}

export interface SubscriptionCreateParams {
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
  id?: string | null;

  /**
   * Whether to wait for payment confirmation before returning the subscription
   */
  awaitPaymentConfirmation?: boolean;

  billingPeriod?: 'MONTHLY' | 'ANNUALLY';

  checkoutOptions?: SubscriptionCreateParams.CheckoutOptions;

  /**
   * Additional metadata for the subscription
   */
  metadata?: { [key: string]: string };

  /**
   * Optional paying customer ID for split billing scenarios
   */
  payingCustomerId?: string | null;

  /**
   * Optional resource ID for multi-instance subscriptions
   */
  resourceId?: string | null;

  trialOverrideConfiguration?: SubscriptionCreateParams.TrialOverrideConfiguration;
}

export namespace SubscriptionCreateParams {
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

export interface SubscriptionListParams {
  /**
   * Filter by customer ID
   */
  customerId?: string;

  /**
   * Ending before this UUID for pagination
   */
  endingBefore?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Starting after this UUID for pagination
   */
  startingAfter?: string;

  /**
   * Filter by subscription status (comma-separated for multiple statuses, e.g.,
   * ACTIVE,IN_TRIAL)
   */
  status?: string;
}

export interface SubscriptionDelegateParams {
  /**
   * The customer ID to delegate the subscription to
   */
  targetCustomerId: string;
}

export interface SubscriptionMigrateParams {
  /**
   * When to migrate the subscription: IMMEDIATE or END_OF_BILLING_PERIOD
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

  addons?: Array<SubscriptionPreviewParams.Addon>;

  appliedCoupon?: SubscriptionPreviewParams.AppliedCoupon;

  billableFeatures?: Array<SubscriptionPreviewParams.BillableFeature>;

  billingCountryCode?: string;

  billingInformation?: SubscriptionPreviewParams.BillingInformation;

  billingPeriod?: 'MONTHLY' | 'ANNUALLY';

  charges?: Array<SubscriptionPreviewParams.Charge>;

  payingCustomerId?: string;

  resourceId?: string;

  scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';

  /**
   * Subscription start date
   */
  startDate?: string;

  trialOverrideConfiguration?: SubscriptionPreviewParams.TrialOverrideConfiguration;

  unitQuantity?: number;
}

export namespace SubscriptionPreviewParams {
  export interface Addon {
    /**
     * Addon ID
     */
    addonId: string;

    quantity?: number;
  }

  export interface AppliedCoupon {
    billingCouponId?: string;

    configuration?: AppliedCoupon.Configuration;

    couponId?: string;

    discount?: AppliedCoupon.Discount;

    promotionCode?: string;
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

  export interface BillableFeature {
    /**
     * Feature ID
     */
    featureId: string;

    quantity: number;
  }

  export interface BillingInformation {
    billingAddress?: BillingInformation.BillingAddress;

    chargeOnBehalfOfAccount?: string;

    integrationId?: string;

    invoiceDaysUntilDue?: number;

    isBackdated?: boolean;

    isInvoicePaid?: boolean;

    metadata?: unknown;

    prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE';

    taxIds?: Array<BillingInformation.TaxID>;

    taxPercentage?: number;

    taxRateIds?: Array<string>;
  }

  export namespace BillingInformation {
    export interface BillingAddress {
      city?: string;

      country?: string;

      line1?: string;

      line2?: string;

      postalCode?: string;

      state?: string;
    }

    export interface TaxID {
      type: string;

      value: string;
    }
  }

  export interface Charge {
    /**
     * Charge ID
     */
    id: string;

    quantity: number;

    type: 'FEATURE' | 'CREDIT';
  }

  export interface TrialOverrideConfiguration {
    isTrial: boolean;

    trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION';

    /**
     * Trial end date
     */
    trialEndDate?: string;
  }
}

export interface SubscriptionTransferParams {
  /**
   * The resource ID to transfer the subscription to. The destination resource must
   * belong to the same customer.
   */
  destinationResourceId: string;
}

Subscriptions.FutureUpdate = FutureUpdate;

export declare namespace Subscriptions {
  export {
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
    FutureUpdate as FutureUpdate,
    type FutureUpdateCancelPendingPaymentResponse as FutureUpdateCancelPendingPaymentResponse,
    type FutureUpdateCancelScheduleResponse as FutureUpdateCancelScheduleResponse,
  };
}
