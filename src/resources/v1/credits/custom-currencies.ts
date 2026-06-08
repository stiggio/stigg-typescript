// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to custom currencies
 */
export class CustomCurrencies extends APIResource {
  /**
   * Creates a new custom currency in the environment.
   *
   * @example
   * ```ts
   * const customCurrencyResponse =
   *   await client.v1.credits.customCurrencies.create({
   *     id: 'id',
   *     displayName: 'displayName',
   *   });
   * ```
   */
  create(params: CustomCurrencyCreateParams, options?: RequestOptions): APIPromise<CustomCurrencyResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/credits/custom-currencies', {
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
   * Updates an existing custom currency. Only the supplied fields are modified.
   *
   * @example
   * ```ts
   * const customCurrencyResponse =
   *   await client.v1.credits.customCurrencies.update(
   *     'currencyId',
   *   );
   * ```
   */
  update(
    currencyID: string,
    params: CustomCurrencyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/credits/custom-currencies/${currencyID}`, {
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
   * Retrieves a paginated list of custom currencies in the environment. Archived
   * currencies are excluded by default; pass `status=ARCHIVED` (or
   * `status=ACTIVE,ARCHIVED`) to include them.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customCurrencyListResponse of client.v1.credits.customCurrencies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomCurrencyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomCurrencyListResponsesMyCursorIDPage, CustomCurrencyListResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList(
      '/api/v1/credits/custom-currencies',
      MyCursorIDPage<CustomCurrencyListResponse>,
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
   * Archives a custom currency. Fails if the currency is still associated with any
   * active plan or addon — use the associated-entities endpoint first to inspect
   * dependencies.
   *
   * @example
   * ```ts
   * const customCurrencyResponse =
   *   await client.v1.credits.customCurrencies.archive(
   *     'currencyId',
   *   );
   * ```
   */
  archive(
    currencyID: string,
    params: CustomCurrencyArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/credits/custom-currencies/${currencyID}/archive`, {
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
   * Lists the active plans and addons that reference a custom currency. Useful
   * before archiving to inspect dependencies.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.credits.customCurrencies.listAssociatedEntities(
   *     'currencyId',
   *   );
   * ```
   */
  listAssociatedEntities(
    currencyID: string,
    params: CustomCurrencyListAssociatedEntitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyListAssociatedEntitiesResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/credits/custom-currencies/${currencyID}/associated-entities`, {
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
   * Restores a previously archived custom currency. Fails if another active currency
   * with the same ID already exists.
   *
   * @example
   * ```ts
   * const customCurrencyResponse =
   *   await client.v1.credits.customCurrencies.unarchive(
   *     'currencyId',
   *   );
   * ```
   */
  unarchive(
    currencyID: string,
    params: CustomCurrencyUnarchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/credits/custom-currencies/${currencyID}/unarchive`, {
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

export type CustomCurrencyListResponsesMyCursorIDPage = MyCursorIDPage<CustomCurrencyListResponse>;

/**
 * Response object
 */
export interface CustomCurrencyResponse {
  /**
   * A custom currency used to denominate credit-based entitlements and pricing
   */
  data: CustomCurrencyResponse.Data;
}

export namespace CustomCurrencyResponse {
  /**
   * A custom currency used to denominate credit-based entitlements and pricing
   */
  export interface Data {
    /**
     * The unique identifier for the custom currency
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
     * Description of the currency
     */
    description: string | null;

    /**
     * The display name of the custom currency
     */
    displayName: string;

    /**
     * Metadata associated with the entity
     */
    metadata: { [key: string]: string };

    /**
     * The symbol used to represent the custom currency
     */
    symbol: string | null;

    /**
     * Singular and plural unit labels for a custom currency
     */
    units: Data.Units | null;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }

  export namespace Data {
    /**
     * Singular and plural unit labels for a custom currency
     */
    export interface Units {
      /**
       * Plural form of the unit label
       */
      plural: string | null;

      /**
       * Singular form of the unit label
       */
      singular: string | null;
    }
  }
}

/**
 * A custom currency used to denominate credit-based entitlements and pricing
 */
export interface CustomCurrencyListResponse {
  /**
   * The unique identifier for the custom currency
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
   * Description of the currency
   */
  description: string | null;

  /**
   * The display name of the custom currency
   */
  displayName: string;

  /**
   * Metadata associated with the entity
   */
  metadata: { [key: string]: string };

  /**
   * The symbol used to represent the custom currency
   */
  symbol: string | null;

  /**
   * Singular and plural unit labels for a custom currency
   */
  units: CustomCurrencyListResponse.Units | null;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

export namespace CustomCurrencyListResponse {
  /**
   * Singular and plural unit labels for a custom currency
   */
  export interface Units {
    /**
     * Plural form of the unit label
     */
    plural: string | null;

    /**
     * Singular form of the unit label
     */
    singular: string | null;
  }
}

/**
 * List of entities (plans or addons) that reference a custom currency
 */
export interface CustomCurrencyListAssociatedEntitiesResponse {
  data: Array<CustomCurrencyListAssociatedEntitiesResponse.Data>;
}

export namespace CustomCurrencyListAssociatedEntitiesResponse {
  /**
   * An entity (plan or addon) that references a custom currency
   */
  export interface Data {
    /**
     * The reference ID of the associated entity
     */
    id: string;

    /**
     * The display name of the associated entity
     */
    displayName: string;

    /**
     * The kind of entity referencing the currency (e.g., Plan)
     */
    type: string;
  }
}

export interface CustomCurrencyCreateParams {
  /**
   * Body param: The unique identifier for the new custom currency
   */
  id: string;

  /**
   * Body param: The display name of the custom currency
   */
  displayName: string;

  /**
   * Body param: Description of the currency
   */
  description?: string;

  /**
   * Body param: Additional metadata to attach to the custom currency
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The symbol used to represent the custom currency
   */
  symbol?: string;

  /**
   * Body param: Singular and plural unit labels for a custom currency. Both fields
   * are required when supplied.
   */
  units?: CustomCurrencyCreateParams.Units;

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

export namespace CustomCurrencyCreateParams {
  /**
   * Singular and plural unit labels for a custom currency. Both fields are required
   * when supplied.
   */
  export interface Units {
    /**
     * Plural form of the unit label
     */
    plural: string;

    /**
     * Singular form of the unit label
     */
    singular: string;
  }
}

export interface CustomCurrencyUpdateParams {
  /**
   * Body param: A human-readable description of the custom currency. Send an empty
   * string to clear.
   */
  description?: string | null;

  /**
   * Body param: The display name of the custom currency
   */
  displayName?: string;

  /**
   * Body param: Additional metadata to attach to the custom currency
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: The symbol used to represent the custom currency. Send an empty
   * string to clear.
   */
  symbol?: string | null;

  /**
   * Body param: Singular and plural unit labels for a custom currency. Both fields
   * are required when supplied.
   */
  units?: CustomCurrencyUpdateParams.Units;

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

export namespace CustomCurrencyUpdateParams {
  /**
   * Singular and plural unit labels for a custom currency. Both fields are required
   * when supplied.
   */
  export interface Units {
    /**
     * Plural form of the unit label
     */
    plural: string;

    /**
     * Singular form of the unit label
     */
    singular: string;
  }
}

export interface CustomCurrencyListParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by custom currency status. Supports comma-separated values
   * (e.g., `ACTIVE,ARCHIVED`). Defaults to `ACTIVE`.
   */
  status?: Array<'ACTIVE' | 'ARCHIVED'>;

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

export interface CustomCurrencyArchiveParams {
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

export interface CustomCurrencyListAssociatedEntitiesParams {
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

export interface CustomCurrencyUnarchiveParams {
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

export declare namespace CustomCurrencies {
  export {
    type CustomCurrencyResponse as CustomCurrencyResponse,
    type CustomCurrencyListResponse as CustomCurrencyListResponse,
    type CustomCurrencyListAssociatedEntitiesResponse as CustomCurrencyListAssociatedEntitiesResponse,
    type CustomCurrencyListResponsesMyCursorIDPage as CustomCurrencyListResponsesMyCursorIDPage,
    type CustomCurrencyCreateParams as CustomCurrencyCreateParams,
    type CustomCurrencyUpdateParams as CustomCurrencyUpdateParams,
    type CustomCurrencyListParams as CustomCurrencyListParams,
    type CustomCurrencyArchiveParams as CustomCurrencyArchiveParams,
    type CustomCurrencyListAssociatedEntitiesParams as CustomCurrencyListAssociatedEntitiesParams,
    type CustomCurrencyUnarchiveParams as CustomCurrencyUnarchiveParams,
  };
}
