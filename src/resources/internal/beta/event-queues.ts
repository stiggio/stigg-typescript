// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EventQueues extends APIResource {
  /**
   * Get event queue by queue name
   */
  retrieve(queueName: string, options?: RequestOptions): APIPromise<EventQueueResponse> {
    return this._client.get(path`/internal/beta/event-queues/${queueName}`, options);
  }

  /**
   * Update event queue configuration
   */
  update(
    queueName: string,
    body: EventQueueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventQueueResponse> {
    return this._client.patch(path`/internal/beta/event-queues/${queueName}`, { body, ...options });
  }

  /**
   * List all event queues for the current environment
   */
  list(options?: RequestOptions): APIPromise<EventQueueListResponse> {
    return this._client.get('/internal/beta/event-queues', options);
  }

  /**
   * Delete an event queue and tear down its infrastructure
   */
  delete(queueName: string, options?: RequestOptions): APIPromise<EventQueueResponse> {
    return this._client.delete(path`/internal/beta/event-queues/${queueName}`, options);
  }

  /**
   * Provision SQS queue, SNS subscriptions, and IAM role for the current environment
   */
  provision(body: EventQueueProvisionParams, options?: RequestOptions): APIPromise<EventQueueResponse> {
    return this._client.post('/internal/beta/event-queues/provision', { body, ...options });
  }
}

/**
 * Response object
 */
export interface EventQueueResponse {
  /**
   * Event queue provisioning status and details
   */
  data: EventQueueResponse.Data;
}

export namespace EventQueueResponse {
  /**
   * Event queue provisioning status and details
   */
  export interface Data {
    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Unique queue identifier
     */
    queueName: string;

    /**
     * AWS region where the queue is deployed
     */
    region:
      | 'us-east-1'
      | 'us-east-2'
      | 'us-west-1'
      | 'us-west-2'
      | 'ca-central-1'
      | 'eu-west-1'
      | 'eu-west-2'
      | 'eu-west-3'
      | 'eu-central-1'
      | 'eu-central-2'
      | 'eu-north-1'
      | 'eu-south-1'
      | 'eu-south-2'
      | 'ap-southeast-1'
      | 'ap-southeast-2'
      | 'ap-southeast-3'
      | 'ap-northeast-1'
      | 'ap-northeast-2'
      | 'ap-northeast-3'
      | 'ap-south-1'
      | 'ap-south-2'
      | 'ap-east-1'
      | 'sa-east-1'
      | 'af-south-1'
      | 'me-south-1'
      | 'me-central-1'
      | 'il-central-1';

    /**
     * Current provisioning status
     */
    status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * SQS queue URL
     */
    queueUrl?: string | null;

    /**
     * IAM role ARN for queue access
     */
    roleArn?: string | null;

    /**
     * Queue suffix for disambiguation
     */
    suffix?: string | null;
  }
}

/**
 * Response list object
 */
export interface EventQueueListResponse {
  data: Array<EventQueueListResponse.Data>;

  /**
   * Pagination metadata including cursors for navigating through results
   */
  pagination: EventQueueListResponse.Pagination;
}

export namespace EventQueueListResponse {
  /**
   * Event queue provisioning status and details
   */
  export interface Data {
    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Unique queue identifier
     */
    queueName: string;

    /**
     * AWS region where the queue is deployed
     */
    region:
      | 'us-east-1'
      | 'us-east-2'
      | 'us-west-1'
      | 'us-west-2'
      | 'ca-central-1'
      | 'eu-west-1'
      | 'eu-west-2'
      | 'eu-west-3'
      | 'eu-central-1'
      | 'eu-central-2'
      | 'eu-north-1'
      | 'eu-south-1'
      | 'eu-south-2'
      | 'ap-southeast-1'
      | 'ap-southeast-2'
      | 'ap-southeast-3'
      | 'ap-northeast-1'
      | 'ap-northeast-2'
      | 'ap-northeast-3'
      | 'ap-south-1'
      | 'ap-south-2'
      | 'ap-east-1'
      | 'sa-east-1'
      | 'af-south-1'
      | 'me-south-1'
      | 'me-central-1'
      | 'il-central-1';

    /**
     * Current provisioning status
     */
    status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING';

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * SQS queue URL
     */
    queueUrl?: string | null;

    /**
     * IAM role ARN for queue access
     */
    roleArn?: string | null;

    /**
     * Queue suffix for disambiguation
     */
    suffix?: string | null;
  }

  /**
   * Pagination metadata including cursors for navigating through results
   */
  export interface Pagination {
    /**
     * Cursor for fetching the next page of results, or null if no additional pages
     * exist
     */
    next: string | null;

    /**
     * Cursor for fetching the previous page of results, or null if at the beginning
     */
    prev: string | null;
  }
}

export interface EventQueueUpdateParams {
  allowedAssumeRoleArns?: Array<string>;

  /**
   * Whether to create separate low-priority queues for standard topic events
   */
  createLowPriorityQueues?: boolean;

  eventTypes?: Array<
    | 'MEMBER_INVITED'
    | 'SYNC_SUBSCRIPTION'
    | 'SYNC_CREDIT_GRANT'
    | 'CUSTOMER_CREATED'
    | 'CUSTOMER_UPDATED'
    | 'CUSTOMER_DELETED'
    | 'SYNC_CUSTOMER'
    | 'SUBSCRIPTION_CREATED'
    | 'SUBSCRIPTION_CANCELED'
    | 'SUBSCRIPTION_EXPIRED'
    | 'SUBSCRIPTION_UPDATED'
    | 'SUBSCRIPTION_TRIAL_STARTED'
    | 'SUBSCRIPTION_TRIAL_EXPIRED'
    | 'SUBSCRIPTION_TRIAL_CONVERTED'
    | 'SUBSCRIPTION_TRIAL_ENDS_SOON'
    | 'SYNC_SUBSCRIPTION_USAGE'
    | 'SUBSCRIPTION_USAGE_UPDATED'
    | 'SUBSCRIPTION_SPENT_LIMIT_EXCEEDED'
    | 'CREATE_SUBSCRIPTION_FAILED'
    | 'PLAN_CREATED'
    | 'PLAN_UPDATED'
    | 'PLAN_DELETED'
    | 'ADDON_CREATED'
    | 'ADDON_UPDATED'
    | 'ADDON_DELETED'
    | 'SYNC_PACKAGE'
    | 'FEATURE_CREATED'
    | 'FEATURE_UPDATED'
    | 'FEATURE_DELETED'
    | 'FEATURE_ARCHIVED'
    | 'API_KEY_CREATED'
    | 'API_KEY_UPDATED'
    | 'API_KEY_ROTATED'
    | 'API_KEY_REVOKED'
    | 'ENTITLEMENT_REQUESTED'
    | 'ENTITLEMENT_GRANTED'
    | 'ENTITLEMENT_DENIED'
    | 'MEASUREMENT_REPORTED'
    | 'USAGE_THRESHOLD_EXCEEDED'
    | 'PROMOTIONAL_ENTITLEMENT_GRANTED'
    | 'PROMOTIONAL_ENTITLEMENT_REVOKED'
    | 'PROMOTIONAL_ENTITLEMENT_UPDATED'
    | 'PROMOTIONAL_ENTITLEMENT_EXPIRED'
    | 'PROMOTIONAL_ENTITLEMENT_ENDS_SOON'
    | 'PACKAGE_PUBLISHED'
    | 'MIGRATE_SUBSCRIPTIONS'
    | 'RECALCULATE_MIGRATED_ENTITLEMENTS_BATCH'
    | 'MIGRATE_SUBSCRIPTIONS_SCHEDULED_UPDATES'
    | 'ENTITLEMENTS_UPDATED'
    | 'RESYNC_INTEGRATION_TRIGGERED'
    | 'COUPON_CREATED'
    | 'COUPON_UPDATED'
    | 'IMPORT_INTEGRATION_CATALOG_TRIGGERED'
    | 'IMPORT_INTEGRATION_CUSTOMERS_TRIGGERED'
    | 'INCOMING_STRIPE_WEBHOOK'
    | 'INCOMING_AWS_MARKETPLACE_WEBHOOK'
    | 'INCOMING_ZUORA_WEBHOOK'
    | 'INCOMING_DOGGO_WEBHOOK'
    | 'INCOMING_APP_STORE_WEBHOOK'
    | 'RESYNC_INTEGRATION'
    | 'SYNC_COUPON'
    | 'IMPORT_INTEGRATION_CATALOG'
    | 'IMPORT_INTEGRATION_CUSTOMERS'
    | 'SYNC_FAILED'
    | 'CUSTOMER_PAYMENT_FAILED'
    | 'PRODUCT_CREATED'
    | 'PRODUCT_UPDATED'
    | 'PRODUCT_DELETED'
    | 'PRODUCT_UNARCHIVED'
    | 'PACKAGE_GROUP_CREATED'
    | 'PACKAGE_GROUP_UPDATED'
    | 'ENVIRONMENT_DELETED'
    | 'WIDGET_CONFIGURATION_UPDATED'
    | 'EDGE_API_DATA_RESYNC'
    | 'EDGE_API_DOGGO_RESYNC'
    | 'EDGE_API_CLIENT_CONFIGURATION_DATA_RESYNC'
    | 'PURGE_CUSTOMER_PERSISTENT_CACHE_REQUESTED'
    | 'CUSTOMER_RESOURCE_ENTITLEMENT_CALCULATION_TRIGGERED'
    | 'RECALCULATE_RESOURCE_ENTITLEMENTS'
    | 'CUSTOMER_ENTITLEMENT_CALCULATION_TRIGGERED['
    | 'RECALCULATE_ENTITLEMENTS_TRIGGERED'
    | 'IMPORT_SUBSCRIPTIONS_BULK_TRIGGERED'
    | 'EDGE_API_CUSTOMER_DATA_RESYNC'
    | 'EDGE_API_SUBSCRIPTIONS_DATA_RESYNC'
    | 'EDGE_API_PACKAGE_ENTITLEMENTS_DATA_RESYNC'
    | 'EDGE_API_PRODUCT_CACHE_DATA_RESYNC'
    | 'EDGE_API_PLAN_CACHE_DATA_RESYNC'
    | 'REPLAY_WEBHOOK_EVENT'
    | 'SUBSCRIPTIONS_MIGRATED'
    | 'SUBSCRIPTIONS_MIGRATION_TRIGGERED'
    | 'SUBSCRIPTION_BILLING_MONTH_ENDS_SOON'
    | 'SUBSCRIPTION_USAGE_CHARGE_TRIGGERED'
    | 'SCHEDULER_BATCH'
    | 'EVENT_LOG_CREATED'
    | 'CREDIT_GRANT_CREATED'
    | 'CREDIT_GRANT_EXPIRED'
    | 'CREDIT_GRANT_VOIDED'
    | 'CREDIT_GRANT_UPDATED'
    | 'CREDIT_GRANT_DEPLETED'
    | 'CREDIT_GRANT_BALANCE_LOW'
    | 'CREDIT_BALANCE_UPDATED'
    | 'CREDIT_BALANCE_DEPLETED'
    | 'CREDIT_BALANCE_LOW'
    | 'CREDIT_GRANT_PROCESS_COMPLETED'
    | 'AUTOMATIC_RECHARGE_THRESHOLD_BREACH'
    | 'AUTOMATIC_RECHARGE_OPERATION_ATTEMPTED'
    | 'CREDITS_AUTOMATIC_RECHARGE_LIMIT_EXCEEDED'
    | 'AUTOMATIC_RECHARGE_CONFIGURATION_CHANGED'
    | 'FEATURE_GROUP_CREATED'
    | 'FEATURE_GROUP_UPDATED'
    | 'FEATURE_GROUP_ARCHIVED'
    | 'FEATURE_GROUP_UN_ARCHIVED'
    | 'STRIPE_APP_DRAWER_VIEWED'
    | 'EVENT_QUEUE_PROVISIONING_REQUESTED'
    | 'EVENT_QUEUE_DEPROVISIONING_REQUESTED'
  >;
}

export interface EventQueueProvisionParams {
  /**
   * AWS region for the SQS queue (e.g., us-east-1, eu-west-1)
   */
  region:
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-1'
    | 'us-west-2'
    | 'ca-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'eu-central-1'
    | 'eu-central-2'
    | 'eu-north-1'
    | 'eu-south-1'
    | 'eu-south-2'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ap-southeast-3'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-northeast-3'
    | 'ap-south-1'
    | 'ap-south-2'
    | 'ap-east-1'
    | 'sa-east-1'
    | 'af-south-1'
    | 'me-south-1'
    | 'me-central-1'
    | 'il-central-1';

  /**
   * Additional IAM role ARNs allowed to assume the external role for queue access
   */
  allowedAssumeRoleArns?: Array<string>;

  /**
   * Whether to create separate low-priority queues for standard topic events
   */
  createLowPriorityQueues?: boolean;

  /**
   * Event types to subscribe to. Defaults to entitlements, measurements, and
   * migrations.
   */
  eventTypes?: Array<
    | 'MEMBER_INVITED'
    | 'SYNC_SUBSCRIPTION'
    | 'SYNC_CREDIT_GRANT'
    | 'CUSTOMER_CREATED'
    | 'CUSTOMER_UPDATED'
    | 'CUSTOMER_DELETED'
    | 'SYNC_CUSTOMER'
    | 'SUBSCRIPTION_CREATED'
    | 'SUBSCRIPTION_CANCELED'
    | 'SUBSCRIPTION_EXPIRED'
    | 'SUBSCRIPTION_UPDATED'
    | 'SUBSCRIPTION_TRIAL_STARTED'
    | 'SUBSCRIPTION_TRIAL_EXPIRED'
    | 'SUBSCRIPTION_TRIAL_CONVERTED'
    | 'SUBSCRIPTION_TRIAL_ENDS_SOON'
    | 'SYNC_SUBSCRIPTION_USAGE'
    | 'SUBSCRIPTION_USAGE_UPDATED'
    | 'SUBSCRIPTION_SPENT_LIMIT_EXCEEDED'
    | 'CREATE_SUBSCRIPTION_FAILED'
    | 'PLAN_CREATED'
    | 'PLAN_UPDATED'
    | 'PLAN_DELETED'
    | 'ADDON_CREATED'
    | 'ADDON_UPDATED'
    | 'ADDON_DELETED'
    | 'SYNC_PACKAGE'
    | 'FEATURE_CREATED'
    | 'FEATURE_UPDATED'
    | 'FEATURE_DELETED'
    | 'FEATURE_ARCHIVED'
    | 'API_KEY_CREATED'
    | 'API_KEY_UPDATED'
    | 'API_KEY_ROTATED'
    | 'API_KEY_REVOKED'
    | 'ENTITLEMENT_REQUESTED'
    | 'ENTITLEMENT_GRANTED'
    | 'ENTITLEMENT_DENIED'
    | 'MEASUREMENT_REPORTED'
    | 'USAGE_THRESHOLD_EXCEEDED'
    | 'PROMOTIONAL_ENTITLEMENT_GRANTED'
    | 'PROMOTIONAL_ENTITLEMENT_REVOKED'
    | 'PROMOTIONAL_ENTITLEMENT_UPDATED'
    | 'PROMOTIONAL_ENTITLEMENT_EXPIRED'
    | 'PROMOTIONAL_ENTITLEMENT_ENDS_SOON'
    | 'PACKAGE_PUBLISHED'
    | 'MIGRATE_SUBSCRIPTIONS'
    | 'RECALCULATE_MIGRATED_ENTITLEMENTS_BATCH'
    | 'MIGRATE_SUBSCRIPTIONS_SCHEDULED_UPDATES'
    | 'ENTITLEMENTS_UPDATED'
    | 'RESYNC_INTEGRATION_TRIGGERED'
    | 'COUPON_CREATED'
    | 'COUPON_UPDATED'
    | 'IMPORT_INTEGRATION_CATALOG_TRIGGERED'
    | 'IMPORT_INTEGRATION_CUSTOMERS_TRIGGERED'
    | 'INCOMING_STRIPE_WEBHOOK'
    | 'INCOMING_AWS_MARKETPLACE_WEBHOOK'
    | 'INCOMING_ZUORA_WEBHOOK'
    | 'INCOMING_DOGGO_WEBHOOK'
    | 'INCOMING_APP_STORE_WEBHOOK'
    | 'RESYNC_INTEGRATION'
    | 'SYNC_COUPON'
    | 'IMPORT_INTEGRATION_CATALOG'
    | 'IMPORT_INTEGRATION_CUSTOMERS'
    | 'SYNC_FAILED'
    | 'CUSTOMER_PAYMENT_FAILED'
    | 'PRODUCT_CREATED'
    | 'PRODUCT_UPDATED'
    | 'PRODUCT_DELETED'
    | 'PRODUCT_UNARCHIVED'
    | 'PACKAGE_GROUP_CREATED'
    | 'PACKAGE_GROUP_UPDATED'
    | 'ENVIRONMENT_DELETED'
    | 'WIDGET_CONFIGURATION_UPDATED'
    | 'EDGE_API_DATA_RESYNC'
    | 'EDGE_API_DOGGO_RESYNC'
    | 'EDGE_API_CLIENT_CONFIGURATION_DATA_RESYNC'
    | 'PURGE_CUSTOMER_PERSISTENT_CACHE_REQUESTED'
    | 'CUSTOMER_RESOURCE_ENTITLEMENT_CALCULATION_TRIGGERED'
    | 'RECALCULATE_RESOURCE_ENTITLEMENTS'
    | 'CUSTOMER_ENTITLEMENT_CALCULATION_TRIGGERED['
    | 'RECALCULATE_ENTITLEMENTS_TRIGGERED'
    | 'IMPORT_SUBSCRIPTIONS_BULK_TRIGGERED'
    | 'EDGE_API_CUSTOMER_DATA_RESYNC'
    | 'EDGE_API_SUBSCRIPTIONS_DATA_RESYNC'
    | 'EDGE_API_PACKAGE_ENTITLEMENTS_DATA_RESYNC'
    | 'EDGE_API_PRODUCT_CACHE_DATA_RESYNC'
    | 'EDGE_API_PLAN_CACHE_DATA_RESYNC'
    | 'REPLAY_WEBHOOK_EVENT'
    | 'SUBSCRIPTIONS_MIGRATED'
    | 'SUBSCRIPTIONS_MIGRATION_TRIGGERED'
    | 'SUBSCRIPTION_BILLING_MONTH_ENDS_SOON'
    | 'SUBSCRIPTION_USAGE_CHARGE_TRIGGERED'
    | 'SCHEDULER_BATCH'
    | 'EVENT_LOG_CREATED'
    | 'CREDIT_GRANT_CREATED'
    | 'CREDIT_GRANT_EXPIRED'
    | 'CREDIT_GRANT_VOIDED'
    | 'CREDIT_GRANT_UPDATED'
    | 'CREDIT_GRANT_DEPLETED'
    | 'CREDIT_GRANT_BALANCE_LOW'
    | 'CREDIT_BALANCE_UPDATED'
    | 'CREDIT_BALANCE_DEPLETED'
    | 'CREDIT_BALANCE_LOW'
    | 'CREDIT_GRANT_PROCESS_COMPLETED'
    | 'AUTOMATIC_RECHARGE_THRESHOLD_BREACH'
    | 'AUTOMATIC_RECHARGE_OPERATION_ATTEMPTED'
    | 'CREDITS_AUTOMATIC_RECHARGE_LIMIT_EXCEEDED'
    | 'AUTOMATIC_RECHARGE_CONFIGURATION_CHANGED'
    | 'FEATURE_GROUP_CREATED'
    | 'FEATURE_GROUP_UPDATED'
    | 'FEATURE_GROUP_ARCHIVED'
    | 'FEATURE_GROUP_UN_ARCHIVED'
    | 'STRIPE_APP_DRAWER_VIEWED'
    | 'EVENT_QUEUE_PROVISIONING_REQUESTED'
    | 'EVENT_QUEUE_DEPROVISIONING_REQUESTED'
  >;

  /**
   * Optional suffix to allow multiple queues for the same environment and region
   */
  suffix?: string;
}

export declare namespace EventQueues {
  export {
    type EventQueueResponse as EventQueueResponse,
    type EventQueueListResponse as EventQueueListResponse,
    type EventQueueUpdateParams as EventQueueUpdateParams,
    type EventQueueProvisionParams as EventQueueProvisionParams,
  };
}
