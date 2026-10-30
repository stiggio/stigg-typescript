// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Returns a cursor-paginated list of entity entitlements for the given customer.
   * An entity entitlement ties an entity to a feature or currency with a usage limit
   * and reset cadence.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entitlementListResponse of client.v1.customers.entities.entitlements.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    params: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitlementListResponsesMyCursorIDPage, EntitlementListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/api/v1/customers/${id}/entities/entitlements`,
      MyCursorIDPage<EntitlementListResponse>,
      {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
            ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Batched create-or-update of entity entitlements. Existing entity entitlements
   * matched by (entityId, featureId or currencyId, scopeEntityIds) are updated; new
   * ones are created. On update, omitted fields (usageLimit, cadence) are preserved;
   * on create both are required.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.customers.entities.entitlements.upsert(
   *     'id',
   *     {
   *       entityEntitlements: [
   *         {
   *           entityId: 'workspace-001',
   *           featureId: 'compute-minutes',
   *           usageLimit: 1000,
   *           cadence: 'P1M',
   *         },
   *         {
   *           entityId: 'workspace-002',
   *           currencyId: 'cred-type-tokens',
   *           usageLimit: 2000,
   *           cadence: 'P1M',
   *           parentId: 'workspace-001',
   *           scopeEntityIds: ['user-1'],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  upsert(
    id: string,
    params: EntitlementUpsertParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementUpsertResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.put(path`/api/v1/customers/${id}/entities/entitlements`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type EntitlementListResponsesMyCursorIDPage = MyCursorIDPage<EntitlementListResponse>;

/**
 * An entity entitlement for an entity belonging to a customer. Defines how much of
 * the feature or currency the entity may consume (`usageLimit`) and how often the
 * counter resets (`cadence`).
 */
export interface EntitlementListResponse {
  /**
   * Synthetic UUID identifier — also the cursor anchor for paginated lists
   */
  id: string;

  /**
   * Usage-reset cadence as an ISO-8601 single-unit duration, e.g. `P1M`, `P30D`,
   * `PT1M`.
   */
  cadence: string;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * The entity ID this entity entitlement is attached to
   */
  entityId: string;

  /**
   * Parent entity ID in the hierarchy, or `null` for a root.
   */
  parentId: string | null;

  /**
   * Dimension-scoped sub-limit key: the set of entity IDs this limit applies to.
   * Empty is the node-wide limit that always matches; a non-empty set only applies
   * when every listed entity is present in the resolved set (order-insensitive).
   */
  scopeEntityIds: Array<string>;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * Maximum usage allowed within one cadence window
   */
  usageLimit: number | null;

  /**
   * Currency ID this entity entitlement grants (present when it grants a credit
   * currency).
   */
  currencyId?: string;

  /**
   * Feature ID this entity entitlement grants (present when it grants a feature).
   */
  featureId?: string;
}

/**
 * Entity entitlements after upsert.
 */
export interface EntitlementUpsertResponse {
  data: Array<EntitlementUpsertResponse.Data>;
}

export namespace EntitlementUpsertResponse {
  /**
   * An entity entitlement for an entity belonging to a customer. Defines how much of
   * the feature or currency the entity may consume (`usageLimit`) and how often the
   * counter resets (`cadence`).
   */
  export interface Data {
    /**
     * Synthetic UUID identifier — also the cursor anchor for paginated lists
     */
    id: string;

    /**
     * Usage-reset cadence as an ISO-8601 single-unit duration, e.g. `P1M`, `P30D`,
     * `PT1M`.
     */
    cadence: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The entity ID this entity entitlement is attached to
     */
    entityId: string;

    /**
     * Parent entity ID in the hierarchy, or `null` for a root.
     */
    parentId: string | null;

    /**
     * Dimension-scoped sub-limit key: the set of entity IDs this limit applies to.
     * Empty is the node-wide limit that always matches; a non-empty set only applies
     * when every listed entity is present in the resolved set (order-insensitive).
     */
    scopeEntityIds: Array<string>;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Maximum usage allowed within one cadence window
     */
    usageLimit: number | null;

    /**
     * Currency ID this entity entitlement grants (present when it grants a credit
     * currency).
     */
    currencyId?: string;

    /**
     * Feature ID this entity entitlement grants (present when it grants a feature).
     */
    featureId?: string;
  }
}

export interface EntitlementListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter entity entitlements to a specific currency, by its ID.
   * Mutually exclusive with `featureId`.
   */
  currencyId?: string;

  /**
   * Query param: Filter entity entitlements to a specific entity ID
   */
  entityId?: string;

  /**
   * Query param: Filter entity entitlements to a specific feature, by its ID.
   * Mutually exclusive with `currencyId`.
   */
  featureId?: string;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface EntitlementUpsertParams {
  /**
   * Body param: Entity entitlements to upsert (1–100 per request)
   */
  entityEntitlements: Array<EntitlementUpsertParams.EntityEntitlement>;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export namespace EntitlementUpsertParams {
  /**
   * A single entity entitlement to create or update. Identify the feature or
   * currency with exactly one of `featureId` or `currencyId`. The natural key is the
   * `(entityId, featureId or currencyId, scopeEntityIds)` triple. On create both
   * `usageLimit` and `cadence` are required; on update they may be omitted
   * individually to preserve the existing value.
   */
  export interface EntityEntitlement {
    /**
     * The entity ID this entity entitlement is attached to
     */
    entityId: string;

    /**
     * Usage-reset cadence (required on create) as an ISO-8601 single-unit duration,
     * e.g. `P1M`, `P30D`, `PT1M`.
     */
    cadence?: string;

    /**
     * Currency ID this entity entitlement grants (credit limits). Mutually exclusive
     * with `featureId`.
     */
    currencyId?: string;

    /**
     * Feature ID this entity entitlement grants. Mutually exclusive with `currencyId`.
     */
    featureId?: string;

    /**
     * Parent entity ID in the hierarchy. Omit to leave the current parent untouched (a
     * new node defaults to a root); `null` detaches to a root; an ID sets or changes
     * the parent. Reparenting or detaching an existing node is leaf-only; place a
     * parent before its children, or in the same batch.
     */
    parentId?: string | null;

    /**
     * Dimension-scoped sub-limit: the set of entity IDs this limit applies to
     * (order-insensitive, unique, at most 5). Omit or leave empty for the node-wide
     * limit.
     */
    scopeEntityIds?: Array<string>;

    /**
     * Maximum usage allowed within one cadence window (required on create)
     */
    usageLimit?: number | null;
  }
}

export declare namespace Entitlements {
  export {
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementUpsertResponse as EntitlementUpsertResponse,
    type EntitlementListResponsesMyCursorIDPage as EntitlementListResponsesMyCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementUpsertParams as EntitlementUpsertParams,
  };
}
