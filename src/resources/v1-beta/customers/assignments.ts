// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assignments extends APIResource {
  /**
   * Returns a cursor-paginated list of capability assignments for the given
   * customer. An assignment ties an entity to a capability with a usage limit and
   * reset cadence.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assignmentListResponse of client.v1Beta.customers.assignments.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    params: AssignmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AssignmentListResponsesMyCursorIDPage, AssignmentListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/api/v1-beta/customers/${id}/assignments`,
      MyCursorIDPage<AssignmentListResponse>,
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
   * Batched create-or-update of capability assignments. Existing assignments matched
   * by (entityId, capabilityId) are updated; new pairs are created. On update,
   * omitted fields (usageLimit, cadence) are preserved; on create both are required
   * by the governance service.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1Beta.customers.assignments.upsert('id', {
   *     assignments: [
   *       {
   *         entityId: 'workspace-001',
   *         featureId: 'compute-minutes',
   *         usageLimit: 1000,
   *         cadence: 'P1M',
   *       },
   *       {
   *         entityId: 'workspace-002',
   *         currencyId: 'cred-type-tokens',
   *         usageLimit: 2000,
   *         cadence: 'P1M',
   *         parentId: 'workspace-001',
   *         scopeEntityIds: ['user-1'],
   *       },
   *     ],
   *   });
   * ```
   */
  upsert(
    id: string,
    params: AssignmentUpsertParams,
    options?: RequestOptions,
  ): APIPromise<AssignmentUpsertResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.put(path`/api/v1-beta/customers/${id}/assignments`, {
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

export type AssignmentListResponsesMyCursorIDPage = MyCursorIDPage<AssignmentListResponse>;

/**
 * A capability assignment for an entity belonging to a customer. Defines how much
 * of the capability the entity may consume (`usageLimit`) and how often the
 * counter resets (`cadence`).
 */
export interface AssignmentListResponse {
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
   * The entity ID this assignment is attached to
   */
  entityId: string;

  /**
   * Parent entity ID in the hierarchy, or `null` for a root.
   */
  parentId: string | null;

  /**
   * Dimension-scoped sub-budget key: the set of entity IDs this budget applies to.
   * Empty is the node-wide budget that always matches; a non-empty set only applies
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
   * Currency ID this assignment grants (present for credit capabilities).
   */
  currencyId?: string;

  /**
   * Feature ID this assignment grants (present for feature capabilities).
   */
  featureId?: string;
}

/**
 * Assignments after upsert.
 */
export interface AssignmentUpsertResponse {
  data: Array<AssignmentUpsertResponse.Data>;
}

export namespace AssignmentUpsertResponse {
  /**
   * A capability assignment for an entity belonging to a customer. Defines how much
   * of the capability the entity may consume (`usageLimit`) and how often the
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
     * The entity ID this assignment is attached to
     */
    entityId: string;

    /**
     * Parent entity ID in the hierarchy, or `null` for a root.
     */
    parentId: string | null;

    /**
     * Dimension-scoped sub-budget key: the set of entity IDs this budget applies to.
     * Empty is the node-wide budget that always matches; a non-empty set only applies
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
     * Currency ID this assignment grants (present for credit capabilities).
     */
    currencyId?: string;

    /**
     * Feature ID this assignment grants (present for feature capabilities).
     */
    featureId?: string;
  }
}

export interface AssignmentListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter assignments to a specific capability ID
   */
  capabilityId?: string;

  /**
   * Query param: Filter assignments to a specific entity ID
   */
  entityId?: string;

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

export interface AssignmentUpsertParams {
  /**
   * Body param: Assignments to upsert (1–100 per request)
   */
  assignments: Array<AssignmentUpsertParams.Assignment>;

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

export namespace AssignmentUpsertParams {
  /**
   * A single assignment to create or update. Identify the capability with exactly
   * one of `featureId` or `currencyId`. The natural key is the
   * `(entityId, capability, scopeEntityIds)` triple. On create both `usageLimit` and
   * `cadence` are required; on update they may be omitted individually to preserve
   * the existing value.
   */
  export interface Assignment {
    /**
     * The entity ID this assignment is attached to
     */
    entityId: string;

    /**
     * Usage-reset cadence (required on create) as an ISO-8601 single-unit duration,
     * e.g. `P1M`, `P30D`, `PT1M`.
     */
    cadence?: string;

    /**
     * Currency ID this assignment grants (credit budgets). Mutually exclusive with
     * `featureId`.
     */
    currencyId?: string;

    /**
     * Feature ID this assignment grants. Mutually exclusive with `currencyId`.
     */
    featureId?: string;

    /**
     * Parent entity ID in the hierarchy. Omit to leave the current parent untouched (a
     * new node defaults to a root); `null` detaches to a root; an ID sets or changes
     * the parent. Reparenting an existing node is leaf-only.
     */
    parentId?: string | null;

    scopeEntityIds?: Array<string>;

    /**
     * Maximum usage allowed within one cadence window (required on create)
     */
    usageLimit?: number | null;
  }
}

export declare namespace Assignments {
  export {
    type AssignmentListResponse as AssignmentListResponse,
    type AssignmentUpsertResponse as AssignmentUpsertResponse,
    type AssignmentListResponsesMyCursorIDPage as AssignmentListResponsesMyCursorIDPage,
    type AssignmentListParams as AssignmentListParams,
    type AssignmentUpsertParams as AssignmentUpsertParams,
  };
}
