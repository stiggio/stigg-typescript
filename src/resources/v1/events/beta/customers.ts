// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Queries the customer's governance hierarchy tree, returning a cursor-paginated
   * list of nodes with their usage configuration (limit, cadence, scope) and current
   * usage, sortable and filterable by usage. Each node carries `parentId` so the
   * tree can be rebuilt client-side. Usage is read from a periodically-refreshed
   * read model and never gates access.
   */
  retrieveGovernance(
    id: string,
    params: CustomerRetrieveGovernanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveGovernanceResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.get(path`/api/v1-beta/customers/${id}/governance`, {
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
}

/**
 * Paginated list of governance tree nodes, each with its usage configuration and
 * current usage.
 */
export interface CustomerRetrieveGovernanceResponse {
  data: Array<CustomerRetrieveGovernanceResponse.Data>;

  pagination: CustomerRetrieveGovernanceResponse.Pagination;
}

export namespace CustomerRetrieveGovernanceResponse {
  /**
   * A node of the governance hierarchy tree with its usage configuration (limit,
   * cadence, scope) and current usage. Usage is read from a periodically-refreshed
   * read model and may lag the live counter by a short interval; it never gates
   * access.
   */
  export interface Data {
    /**
     * Usage-reset cadence as an ISO-8601 single-unit duration, e.g. `P1M`, `P30D`,
     * `PT1M`; `null` when the node has no usage configuration.
     */
    cadence: string | null;

    /**
     * Usage consumed in the current cadence period (may lag the live counter by a
     * short interval).
     */
    currentUsage: number | null;

    /**
     * External id of the entity at this node.
     */
    entityId: string;

    /**
     * External id of the entity type (e.g. `team`, `user`).
     */
    entityTypeId: string;

    /**
     * External id of the parent entity in the tree; `null` for a root. Use it to
     * rebuild the tree.
     */
    parentId: string | null;

    /**
     * The configuration scope (entity ids). Empty is the node-wide configuration; a
     * non-empty set is a dimension-scoped sub-configuration.
     */
    scopeEntityIds: Array<string>;

    /**
     * Hard usage limit for this node per cadence period.
     */
    usageLimit: number | null;

    /**
     * Exclusive end of the cadence period — when usage resets; `null` once the period
     * has rolled over.
     */
    usagePeriodEnd: string | null;

    /**
     * Start of the cadence period the usage snapshot belongs to; `null` once the
     * period has rolled over.
     */
    usagePeriodStart: string | null;

    /**
     * `currentUsage / usageLimit` (1 when usageLimit is 0 — always at limit). The
     * cross-capability-safe sort key.
     */
    utilization: number | null;

    /**
     * The metered currency ID (present when the configured capability is a credit
     * currency).
     */
    currencyId?: string;

    /**
     * The metered feature ID (present when the configured capability is a feature).
     */
    featureId?: string;
  }

  export interface Pagination {
    /**
     * Cursor for fetching the next page of results, or null if no additional pages
     * exist
     */
    next: string | null;
  }
}

export interface CustomerRetrieveGovernanceParams {
  /**
   * Query param: Return items that come after this cursor
   */
  after?: string;

  /**
   * Query param: Currency ids to include, repeated per value (e.g.
   * `?currencyIds=credits`). Omit both featureIds and currencyIds for tree mode.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Case-insensitive substring match on the entity id (`%`/`_` matched
   * literally).
   */
  entityIdSearch?: string;

  /**
   * Query param: Filter to one or more entity types, repeated per value (e.g.
   * `?entityTypeIds=team&entityTypeIds=user`).
   */
  entityTypeIds?: Array<string>;

  /**
   * Query param: Feature ids to include, repeated per value (e.g.
   * `?featureIds=ai-tokens&featureIds=seats`). Omit both featureIds and currencyIds
   * for tree mode — every node in the hierarchy with no usage configuration
   * attached.
   */
  featureIds?: Array<string>;

  /**
   * Query param: Maximum number of items to return
   */
  limit?: number;

  /**
   * Query param: Only nodes with utilization ≥ this value (e.g. 0.8 for ≥80%, 1 for
   * at/over limit).
   */
  minUtilization?: number;

  /**
   * Query param: Sort direction: `asc` or `desc` (default `desc`).
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Filter by configuration scope: `all` (default), `nodeWide` (`[]`
   * only), or `scoped` (non-empty only).
   */
  scope?: 'all' | 'nodeWide' | 'scoped';

  /**
   * Query param: Sort key: `utilization` (default, cross-capability-safe),
   * `currentUsage`, `usageLimit`, `scopeSize`, `id`, or `createdAt`.
   */
  sortBy?: 'utilization' | 'currentUsage' | 'usageLimit' | 'scopeSize' | 'id' | 'createdAt';

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

export declare namespace Customers {
  export {
    type CustomerRetrieveGovernanceResponse as CustomerRetrieveGovernanceResponse,
    type CustomerRetrieveGovernanceParams as CustomerRetrieveGovernanceParams,
  };
}
