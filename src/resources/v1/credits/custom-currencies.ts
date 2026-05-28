// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
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
  create(body: CustomCurrencyCreateParams, options?: RequestOptions): APIPromise<CustomCurrencyResponse> {
    return this._client.post('/api/v1/credits/custom-currencies', { body, ...options });
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
    body: CustomCurrencyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyResponse> {
    return this._client.patch(path`/api/v1/credits/custom-currencies/${currencyID}`, { body, ...options });
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
    query: CustomCurrencyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomCurrencyListResponsesMyCursorIDPage, CustomCurrencyListResponse> {
    return this._client.getAPIList(
      '/api/v1/credits/custom-currencies',
      MyCursorIDPage<CustomCurrencyListResponse>,
      { query, ...options },
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
  archive(currencyID: string, options?: RequestOptions): APIPromise<CustomCurrencyResponse> {
    return this._client.post(path`/api/v1/credits/custom-currencies/${currencyID}/archive`, options);
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
    options?: RequestOptions,
  ): APIPromise<CustomCurrencyListAssociatedEntitiesResponse> {
    return this._client.get(
      path`/api/v1/credits/custom-currencies/${currencyID}/associated-entities`,
      options,
    );
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
  unarchive(currencyID: string, options?: RequestOptions): APIPromise<CustomCurrencyResponse> {
    return this._client.post(path`/api/v1/credits/custom-currencies/${currencyID}/unarchive`, options);
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
   * The unique identifier for the new custom currency
   */
  id: string;

  /**
   * The display name of the custom currency
   */
  displayName: string;

  /**
   * Description of the currency
   */
  description?: string;

  /**
   * Additional metadata to attach to the custom currency
   */
  metadata?: { [key: string]: string };

  /**
   * The symbol used to represent the custom currency
   */
  symbol?: string;

  /**
   * Singular and plural unit labels for a custom currency. Both fields are required
   * when supplied.
   */
  units?: CustomCurrencyCreateParams.Units;
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
   * A human-readable description of the custom currency. Send an empty string to
   * clear.
   */
  description?: string | null;

  /**
   * The display name of the custom currency
   */
  displayName?: string;

  /**
   * Additional metadata to attach to the custom currency
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The symbol used to represent the custom currency. Send an empty string to clear.
   */
  symbol?: string | null;

  /**
   * Singular and plural unit labels for a custom currency. Both fields are required
   * when supplied.
   */
  units?: CustomCurrencyUpdateParams.Units;
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
   * Filter by custom currency status. Supports comma-separated values (e.g.,
   * `ACTIVE,ARCHIVED`). Defaults to `ACTIVE`.
   */
  status?: Array<'ACTIVE' | 'ARCHIVED'>;
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
  };
}
