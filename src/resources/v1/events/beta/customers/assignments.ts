// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../../../core/pagination';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Assignments extends APIResource {
  /**
   * Returns a cursor-paginated list of capability assignments for the given
   * customer. An assignment ties an entity to a capability with a usage limit and
   * reset cadence.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assignmentListResponse of client.v1.events.beta.customers.assignments.list(
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
   *   await client.v1.events.beta.customers.assignments.upsert(
   *     'id',
   *     {
   *       assignments: [
   *         {
   *           entityId: 'workspace-001',
   *           capabilityId: 'compute-minutes',
   *           usageLimit: 1000,
   *           cadence: 'MONTH',
   *         },
   *         {
   *           entityId: 'workspace-002',
   *           capabilityId: 'compute-minutes',
   *           usageLimit: 2000,
   *           cadence: 'MONTH',
   *         },
   *       ],
   *     },
   *   );
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
   * Usage-reset cadence. Currently only `MONTH` is supported
   */
  cadence: 'MONTH';

  /**
   * The capability refId this assignment grants
   */
  capabilityId: string;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * The entity refId this assignment is attached to
   */
  entityId: string;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;

  /**
   * Maximum usage allowed within one cadence window
   */
  usageLimit: number;
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
     * Usage-reset cadence. Currently only `MONTH` is supported
     */
    cadence: 'MONTH';

    /**
     * The capability refId this assignment grants
     */
    capabilityId: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The entity refId this assignment is attached to
     */
    entityId: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;

    /**
     * Maximum usage allowed within one cadence window
     */
    usageLimit: number;
  }
}

export interface AssignmentListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter assignments to a specific capability refId
   */
  capabilityId?: string;

  /**
   * Query param: Filter assignments to a specific entity refId
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
   * A single assignment to create or update. The natural key is the
   * `(entityId, capabilityId)` pair. On create both `usageLimit` and `cadence` are
   * required; on update they may be omitted individually to preserve the existing
   * value.
   */
  export interface Assignment {
    /**
     * The capability refId this assignment grants
     */
    capabilityId: string;

    /**
     * The entity refId this assignment is attached to
     */
    entityId: string;

    /**
     * Usage-reset cadence (required on create). Currently only `MONTH` is supported
     */
    cadence?: 'MONTH';

    /**
     * Maximum usage allowed within one cadence window (required on create)
     */
    usageLimit?: number;
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
