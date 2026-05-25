// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Retrieves a single entity for the given customer by its identifier.
   *
   * @example
   * ```ts
   * const entity = await client.v1Beta.entities.retrieve('x', {
   *   id: 'id',
   * });
   * ```
   */
  retrieve(
    entityID: string,
    params: EntityRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EntityRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/api/v1-beta/customers/${id}/entities/${entityID}`, options);
  }

  /**
   * Retrieves a paginated list of entities for the given customer.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityListResponse of client.v1Beta.entities.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityListResponsesMyCursorIDPage, EntityListResponse> {
    return this._client.getAPIList(
      path`/api/v1-beta/customers/${id}/entities`,
      MyCursorIDPage<EntityListResponse>,
      { query, ...options },
    );
  }

  /**
   * Archives entities in bulk for the given customer by id.
   *
   * @example
   * ```ts
   * const response = await client.v1Beta.entities.archive(
   *   'id',
   *   { ids: ['user-7f3a0c1d', 'user-c4d1b2e9'] },
   * );
   * ```
   */
  archive(
    id: string,
    body: EntityArchiveParams,
    options?: RequestOptions,
  ): APIPromise<EntityArchiveResponse> {
    return this._client.post(path`/api/v1-beta/customers/${id}/entities/archive`, { body, ...options });
  }

  /**
   * Restores previously archived entities in bulk for the given customer by id.
   *
   * @example
   * ```ts
   * const response = await client.v1Beta.entities.unarchive(
   *   'id',
   *   { ids: ['user-7f3a0c1d', 'user-c4d1b2e9'] },
   * );
   * ```
   */
  unarchive(
    id: string,
    body: EntityUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<EntityUnarchiveResponse> {
    return this._client.post(path`/api/v1-beta/customers/${id}/entities/unarchive`, { body, ...options });
  }

  /**
   * Creates or updates entities in bulk for the given customer. Existing entities
   * matched by id are updated; new ids are created.
   *
   * @example
   * ```ts
   * const response = await client.v1Beta.entities.upsert('id', {
   *   entities: [
   *     {
   *       id: 'user-7f3a0c1d',
   *       typeRefId: 'user',
   *       metadata: { email: 'jane@acme.com', role: 'admin' },
   *     },
   *     {
   *       id: 'user-c4d1b2e9',
   *       typeRefId: 'user',
   *       metadata: { email: 'john@acme.com' },
   *     },
   *   ],
   * });
   * ```
   */
  upsert(id: string, body: EntityUpsertParams, options?: RequestOptions): APIPromise<EntityUpsertResponse> {
    return this._client.put(path`/api/v1-beta/customers/${id}/entities`, { body, ...options });
  }
}

export type EntityListResponsesMyCursorIDPage = MyCursorIDPage<EntityListResponse>;

/**
 * Response object
 */
export interface EntityRetrieveResponse {
  /**
   * A stored entity instance tracked by the governance service for a given customer
   */
  data: EntityRetrieveResponse.Data;
}

export namespace EntityRetrieveResponse {
  /**
   * A stored entity instance tracked by the governance service for a given customer
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
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Free-form key/value metadata attached to the entity
     */
    metadata: { [key: string]: string };

    /**
     * The entity type identifier this entity instantiates
     */
    typeId: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }
}

/**
 * A stored entity instance tracked by the governance service for a given customer
 */
export interface EntityListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Timestamp of when the record was deleted
   */
  archivedAt: string | null;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * Free-form key/value metadata attached to the entity
   */
  metadata: { [key: string]: string };

  /**
   * The entity type identifier this entity instantiates
   */
  typeId: string;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

/**
 * Wrapped response echoing the ids that were acted on by an archive/unarchive call
 */
export interface EntityArchiveResponse {
  /**
   * List of entity identifiers that were acted on
   */
  data: EntityArchiveResponse.Data;
}

export namespace EntityArchiveResponse {
  /**
   * List of entity identifiers that were acted on
   */
  export interface Data {
    /**
     * Entity identifiers to act on
     */
    ids: Array<string>;
  }
}

/**
 * Wrapped response echoing the ids that were acted on by an archive/unarchive call
 */
export interface EntityUnarchiveResponse {
  /**
   * List of entity identifiers that were acted on
   */
  data: EntityUnarchiveResponse.Data;
}

export namespace EntityUnarchiveResponse {
  /**
   * List of entity identifiers that were acted on
   */
  export interface Data {
    /**
     * Entity identifiers to act on
     */
    ids: Array<string>;
  }
}

/**
 * List of entities created or updated by an upsert request
 */
export interface EntityUpsertResponse {
  data: Array<EntityUpsertResponse.Data>;
}

export namespace EntityUpsertResponse {
  /**
   * A stored entity instance tracked by the governance service for a given customer
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
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * Free-form key/value metadata attached to the entity
     */
    metadata: { [key: string]: string };

    /**
     * The entity type identifier this entity instantiates
     */
    typeId: string;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }
}

export interface EntityRetrieveParams {
  /**
   * The customer identifier (owner) the entity belongs to
   */
  id: string;
}

export interface EntityListParams extends MyCursorIDPageParams {
  /**
   * Whether to include archived entities. One of: true, false
   */
  includeArchived?: 'true' | 'false';

  /**
   * Filter results to entities of a specific entity type, by the type's refId
   */
  typeRefId?: string;
}

export interface EntityArchiveParams {
  /**
   * Entity identifiers to act on
   */
  ids: Array<string>;
}

export interface EntityUnarchiveParams {
  /**
   * Entity identifiers to act on
   */
  ids: Array<string>;
}

export interface EntityUpsertParams {
  /**
   * List of entities to create or update (1-100 entries)
   */
  entities: Array<EntityUpsertParams.Entity>;
}

export namespace EntityUpsertParams {
  /**
   * A single entity to create or update.
   */
  export interface Entity {
    /**
     * The unique identifier for the entity
     */
    id: string;

    /**
     * Free-form key/value metadata. Patch semantics: empty-string value removes a key,
     * omitted keys are preserved.
     */
    metadata?: { [key: string]: string };

    /**
     * The entity type refId this entity instantiates. Required when creating a new
     * entity; on a re-upsert may be omitted to preserve the existing type. Governance
     * returns 400 if missing on create.
     */
    typeRefId?: string;
  }
}

export declare namespace Entities {
  export {
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityListResponse as EntityListResponse,
    type EntityArchiveResponse as EntityArchiveResponse,
    type EntityUnarchiveResponse as EntityUnarchiveResponse,
    type EntityUpsertResponse as EntityUpsertResponse,
    type EntityListResponsesMyCursorIDPage as EntityListResponsesMyCursorIDPage,
    type EntityRetrieveParams as EntityRetrieveParams,
    type EntityListParams as EntityListParams,
    type EntityArchiveParams as EntityArchiveParams,
    type EntityUnarchiveParams as EntityUnarchiveParams,
    type EntityUpsertParams as EntityUpsertParams,
  };
}
