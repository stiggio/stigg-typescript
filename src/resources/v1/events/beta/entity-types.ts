// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class EntityTypes extends APIResource {
  /**
   * Returns a cursor-paginated list of entity types defined in the environment.
   * Entity types are vendor-defined categories of resource that can be governed
   * (e.g. Org, Team, User).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityTypeListResponse of client.v1.events.beta.entityTypes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EntityTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityTypeListResponsesMyCursorIDPage, EntityTypeListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1-beta/entity-types', MyCursorIDPage<EntityTypeListResponse>, {
      query,
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

  /**
   * Batched create-or-update of entity types. Existing types matched by id are
   * updated; new ids are created. Idempotent — re-submitting the same payload
   * converges to the same state.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.events.beta.entityTypes.upsert({
   *     types: [
   *       {
   *         id: 'org',
   *         displayName: 'Organization',
   *         attributionKeys: ['organizationId'],
   *       },
   *       {
   *         id: 'team',
   *         displayName: 'Team',
   *         attributionKeys: ['teamId'],
   *       },
   *     ],
   *   });
   * ```
   */
  upsert(params: EntityTypeUpsertParams, options?: RequestOptions): APIPromise<EntityTypeUpsertResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.put('/api/v1-beta/entity-types', {
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

export type EntityTypeListResponsesMyCursorIDPage = MyCursorIDPage<EntityTypeListResponse>;

/**
 * A vendor-defined category of resource that can be governed (e.g. Org, Team,
 * User). Vendors define entity types once per environment; their customers create
 * instances (entities) of these types and the governance engine tracks usage and
 * enforces limits per instance.
 */
export interface EntityTypeListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Dimension keys used to attribute usage events to instances of this type (e.g.
   * ["orgId"]). Empty array means no attribution.
   */
  attributionKeys: Array<string>;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * The display name for the entity type
   */
  displayName: string;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

/**
 * Entity types after upsert.
 */
export interface EntityTypeUpsertResponse {
  data: Array<EntityTypeUpsertResponse.Data>;
}

export namespace EntityTypeUpsertResponse {
  /**
   * A vendor-defined category of resource that can be governed (e.g. Org, Team,
   * User). Vendors define entity types once per environment; their customers create
   * instances (entities) of these types and the governance engine tracks usage and
   * enforces limits per instance.
   */
  export interface Data {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Dimension keys used to attribute usage events to instances of this type (e.g.
     * ["orgId"]). Empty array means no attribution.
     */
    attributionKeys: Array<string>;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The display name for the entity type
     */
    displayName: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }
}

export interface EntityTypeListParams extends MyCursorIDPageParams {
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

export interface EntityTypeUpsertParams {
  /**
   * Body param: Entity types to upsert (1–100 per request)
   */
  types: Array<EntityTypeUpsertParams.Type>;

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

export namespace EntityTypeUpsertParams {
  /**
   * A single entity type definition.
   */
  export interface Type {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Dimension keys used to attribute usage events to instances of this type (e.g.
     * ["orgId"]). Empty array means no attribution.
     */
    attributionKeys: Array<string>;

    /**
     * The display name for the entity type
     */
    displayName: string;
  }
}

export declare namespace EntityTypes {
  export {
    type EntityTypeListResponse as EntityTypeListResponse,
    type EntityTypeUpsertResponse as EntityTypeUpsertResponse,
    type EntityTypeListResponsesMyCursorIDPage as EntityTypeListResponsesMyCursorIDPage,
    type EntityTypeListParams as EntityTypeListParams,
    type EntityTypeUpsertParams as EntityTypeUpsertParams,
  };
}
