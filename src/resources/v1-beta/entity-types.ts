// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class EntityTypes extends APIResource {
  /**
   * Returns a cursor-paginated list of entity types defined in the environment.
   * Entity types are vendor-defined categories of resource that can be governed
   * (e.g. Org, Team, User).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityTypeListResponse of client.v1Beta.entityTypes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntityTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityTypeListResponsesMyCursorIDPage, EntityTypeListResponse> {
    return this._client.getAPIList('/api/v1-beta/entity-types', MyCursorIDPage<EntityTypeListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Batched create-or-update of entity types. Existing types matched by id are
   * updated; new ids are created. Idempotent — re-submitting the same payload
   * converges to the same state.
   *
   * @example
   * ```ts
   * const response = await client.v1Beta.entityTypes.upsert({
   *   types: [
   *     {
   *       id: 'org',
   *       displayName: 'Organization',
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
  upsert(body: EntityTypeUpsertParams, options?: RequestOptions): APIPromise<EntityTypeUpsertResponse> {
    return this._client.put('/api/v1-beta/entity-types', { body, ...options });
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

export interface EntityTypeListParams extends MyCursorIDPageParams {}

export interface EntityTypeUpsertParams {
  /**
   * Entity types to upsert (1–100 per request)
   */
  types: Array<EntityTypeUpsertParams.Type>;
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
