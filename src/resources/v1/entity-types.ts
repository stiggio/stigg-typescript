// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EntityTypes extends APIResource {
  /**
   * Returns a cursor-paginated list of entity types defined in the environment.
   * Entity types are vendor-defined categories of resource that can be governed
   * (e.g. Org, Team, User). Archived entity types are excluded unless
   * includeArchived=true.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityTypeListResponse of client.v1.entityTypes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EntityTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityTypeListResponsesMyCursorIDPage, EntityTypeListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/entity-types', MyCursorIDPage<EntityTypeListResponse>, {
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
   * Archives entity types in bulk by id. An entity type with active entities cannot
   * be archived: archive its entities first, or the whole request fails with 400.
   *
   * @example
   * ```ts
   * const response = await client.v1.entityTypes.archive({
   *   ids: ['team'],
   * });
   * ```
   */
  archive(params: EntityTypeArchiveParams, options?: RequestOptions): APIPromise<EntityTypeArchiveResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/entity-types/archive', {
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

  /**
   * Returns whether any active entity of this entity type exists, across every
   * customer. An entity type can be archived only when this is false. An unknown
   * entity type returns false.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.entityTypes.checkActiveEntities('id');
   * ```
   */
  checkActiveEntities(
    id: string,
    params: EntityTypeCheckActiveEntitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityTypeCheckActiveEntitiesResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/entity-types/${id}/has-active-entities`, {
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
   * converges to the same state. An upsert of an archived entity type restores it.
   *
   * @example
   * ```ts
   * const response = await client.v1.entityTypes.upsert({
   *   types: [
   *     {
   *       id: 'org',
   *       displayName: 'Organization',
   *       description:
   *         'A customer organization — the top of the hierarchy, holding the account-wide budget.',
   *       attributionKeys: ['organizationId'],
   *     },
   *     {
   *       id: 'team',
   *       displayName: 'Team',
   *       attributionKeys: ['teamId'],
   *     },
   *   ],
   * });
   * ```
   */
  upsert(params: EntityTypeUpsertParams, options?: RequestOptions): APIPromise<EntityTypeUpsertResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.put('/api/v1/entity-types', {
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
   * Timestamp of when the record was deleted
   */
  archivedAt: string | null;

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
   * What this entity type represents and what it is for governing, or null when none
   * is set
   */
  description: string | null;

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
 * Wrapped response echoing the entity type ids that were acted on by an archive
 * call
 */
export interface EntityTypeArchiveResponse {
  /**
   * List of entity type identifiers that were acted on
   */
  data: EntityTypeArchiveResponse.Data;
}

export namespace EntityTypeArchiveResponse {
  /**
   * List of entity type identifiers that were acted on
   */
  export interface Data {
    /**
     * Entity type identifiers to act on
     */
    ids: Array<string>;
  }
}

/**
 * Wrapped response with whether an entity type has active entities
 */
export interface EntityTypeCheckActiveEntitiesResponse {
  /**
   * Whether an entity type has active entities
   */
  data: EntityTypeCheckActiveEntitiesResponse.Data;
}

export namespace EntityTypeCheckActiveEntitiesResponse {
  /**
   * Whether an entity type has active entities
   */
  export interface Data {
    /**
     * Whether at least one active (non-archived) entity of the entity type exists,
     * across every customer
     */
    hasActiveEntities: boolean;
  }
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
     * Timestamp of when the record was deleted
     */
    archivedAt: string | null;

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
     * What this entity type represents and what it is for governing, or null when none
     * is set
     */
    description: string | null;

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
   * Query param: Whether to include archived entity types. One of: true, false
   */
  includeArchived?: 'true' | 'false';

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

export interface EntityTypeArchiveParams {
  /**
   * Body param: Entity type identifiers to act on
   */
  ids: Array<string>;

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

export interface EntityTypeCheckActiveEntitiesParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
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

    /**
     * What this entity type represents and what it is for governing. Omit to preserve
     * the stored value, or send an empty string or null to clear it.
     */
    description?: string | null;
  }
}

export declare namespace EntityTypes {
  export {
    type EntityTypeListResponse as EntityTypeListResponse,
    type EntityTypeArchiveResponse as EntityTypeArchiveResponse,
    type EntityTypeCheckActiveEntitiesResponse as EntityTypeCheckActiveEntitiesResponse,
    type EntityTypeUpsertResponse as EntityTypeUpsertResponse,
    type EntityTypeListResponsesMyCursorIDPage as EntityTypeListResponsesMyCursorIDPage,
    type EntityTypeListParams as EntityTypeListParams,
    type EntityTypeArchiveParams as EntityTypeArchiveParams,
    type EntityTypeCheckActiveEntitiesParams as EntityTypeCheckActiveEntitiesParams,
    type EntityTypeUpsertParams as EntityTypeUpsertParams,
  };
}
