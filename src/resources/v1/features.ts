// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations related to features
 */
export class Features extends APIResource {
  /**
   * Archives a feature, preventing it from being used in new entitlements.
   *
   * @example
   * ```ts
   * const feature = await client.v1.features.archiveFeature(
   *   'x',
   * );
   * ```
   */
  archiveFeature(
    id: string,
    params: FeatureArchiveFeatureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Feature> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/features/${id}/archive`, {
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
   * Creates a new feature with the specified type, metering, and configuration.
   *
   * @example
   * ```ts
   * const feature = await client.v1.features.createFeature({
   *   id: 'id',
   *   displayName: 'displayName',
   *   featureType: 'BOOLEAN',
   * });
   * ```
   */
  createFeature(params: FeatureCreateFeatureParams, options?: RequestOptions): APIPromise<Feature> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post('/api/v1/features', {
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
   * Retrieves a paginated list of features in the environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const featureListFeaturesResponse of client.v1.features.listFeatures()) {
   *   // ...
   * }
   * ```
   */
  listFeatures(
    params: FeatureListFeaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeatureListFeaturesResponsesMyCursorIDPage, FeatureListFeaturesResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...query } = params ?? {};
    return this._client.getAPIList('/api/v1/features', MyCursorIDPage<FeatureListFeaturesResponse>, {
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
   * Retrieves a feature by its unique identifier.
   *
   * @example
   * ```ts
   * const feature = await client.v1.features.retrieveFeature(
   *   'x',
   * );
   * ```
   */
  retrieveFeature(
    id: string,
    params: FeatureRetrieveFeatureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Feature> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.get(path`/api/v1/features/${id}`, {
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
   * Restores an archived feature, allowing it to be used in entitlements again.
   *
   * @example
   * ```ts
   * const feature = await client.v1.features.unarchiveFeature(
   *   'x',
   * );
   * ```
   */
  unarchiveFeature(
    id: string,
    params: FeatureUnarchiveFeatureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Feature> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.post(path`/api/v1/features/${id}/unarchive`, {
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
   * Updates an existing feature's properties such as display name, description, and
   * configuration.
   *
   * @example
   * ```ts
   * const feature = await client.v1.features.updateFeature('x');
   * ```
   */
  updateFeature(
    id: string,
    params: FeatureUpdateFeatureParams,
    options?: RequestOptions,
  ): APIPromise<Feature> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.patch(path`/api/v1/features/${id}`, {
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

export type FeatureListFeaturesResponsesMyCursorIDPage = MyCursorIDPage<FeatureListFeaturesResponse>;

/**
 * Response object
 */
export interface Feature {
  /**
   * Feature configuration object
   */
  data: Feature.Data;
}

export namespace Feature {
  /**
   * Feature configuration object
   */
  export interface Data {
    /**
     * The unique identifier for the feature
     */
    id: string;

    /**
     * Timestamp of when the record was created
     */
    createdAt: string;

    /**
     * The description for the feature
     */
    description: string | null;

    /**
     * The display name for the feature
     */
    displayName: string;

    /**
     * The configuration data for the feature
     */
    enumConfiguration: Array<Data.EnumConfiguration> | null;

    /**
     * The status of the feature
     */
    featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE';

    /**
     * The type of the feature
     */
    featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';

    /**
     * The units for the feature
     */
    featureUnits: string | null;

    /**
     * The plural units for the feature
     */
    featureUnitsPlural: string | null;

    /**
     * The additional metadata for the feature
     */
    metadata: { [key: string]: string };

    /**
     * The meter type for the feature
     */
    meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL';

    /**
     * Unit transformation to be applied to the reported usage
     */
    unitTransformation: Data.UnitTransformation | null;

    /**
     * Timestamp of when the record was last updated
     */
    updatedAt: string;
  }

  export namespace Data {
    export interface EnumConfiguration {
      /**
       * The display name for the enum configuration entity
       */
      displayName: string;

      /**
       * The unique value identifier for the enum configuration entity
       */
      value: string;
    }

    /**
     * Unit transformation to be applied to the reported usage
     */
    export interface UnitTransformation {
      /**
       * Divide usage by this number
       */
      divide: number;

      /**
       * Singular feature units after the transformation
       */
      featureUnits: string | null;

      /**
       * Plural feature units after the transformation
       */
      featureUnitsPlural: string | null;

      /**
       * After division, either round the result up or down
       */
      round: 'UP' | 'DOWN';
    }
  }
}

/**
 * Feature configuration object
 */
export interface FeatureListFeaturesResponse {
  /**
   * The unique identifier for the feature
   */
  id: string;

  /**
   * Timestamp of when the record was created
   */
  createdAt: string;

  /**
   * The description for the feature
   */
  description: string | null;

  /**
   * The display name for the feature
   */
  displayName: string;

  /**
   * The configuration data for the feature
   */
  enumConfiguration: Array<FeatureListFeaturesResponse.EnumConfiguration> | null;

  /**
   * The status of the feature
   */
  featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE';

  /**
   * The type of the feature
   */
  featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';

  /**
   * The units for the feature
   */
  featureUnits: string | null;

  /**
   * The plural units for the feature
   */
  featureUnitsPlural: string | null;

  /**
   * The additional metadata for the feature
   */
  metadata: { [key: string]: string };

  /**
   * The meter type for the feature
   */
  meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL';

  /**
   * Unit transformation to be applied to the reported usage
   */
  unitTransformation: FeatureListFeaturesResponse.UnitTransformation | null;

  /**
   * Timestamp of when the record was last updated
   */
  updatedAt: string;
}

export namespace FeatureListFeaturesResponse {
  export interface EnumConfiguration {
    /**
     * The display name for the enum configuration entity
     */
    displayName: string;

    /**
     * The unique value identifier for the enum configuration entity
     */
    value: string;
  }

  /**
   * Unit transformation to be applied to the reported usage
   */
  export interface UnitTransformation {
    /**
     * Divide usage by this number
     */
    divide: number;

    /**
     * Singular feature units after the transformation
     */
    featureUnits: string | null;

    /**
     * Plural feature units after the transformation
     */
    featureUnitsPlural: string | null;

    /**
     * After division, either round the result up or down
     */
    round: 'UP' | 'DOWN';
  }
}

export interface FeatureArchiveFeatureParams {
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

export interface FeatureCreateFeatureParams {
  /**
   * Body param: The unique identifier for the feature
   */
  id: string;

  /**
   * Body param: The display name for the feature
   */
  displayName: string;

  /**
   * Body param: The type of the feature
   */
  featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';

  /**
   * Body param: The description for the feature
   */
  description?: string;

  /**
   * Body param: The configuration data for the feature
   */
  enumConfiguration?: Array<FeatureCreateFeatureParams.EnumConfiguration>;

  /**
   * Body param: The status of the feature
   */
  featureStatus?: 'NEW' | 'SUSPENDED' | 'ACTIVE';

  /**
   * Body param: The units for the feature
   */
  featureUnits?: string;

  /**
   * Body param: The plural units for the feature
   */
  featureUnitsPlural?: string;

  /**
   * Body param: The additional metadata for the feature
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The meter type for the feature
   */
  meterType?: 'None' | 'FLUCTUATING' | 'INCREMENTAL';

  /**
   * Body param: Unit transformation to be applied to the reported usage
   */
  unitTransformation?: FeatureCreateFeatureParams.UnitTransformation | null;

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

export namespace FeatureCreateFeatureParams {
  export interface EnumConfiguration {
    /**
     * The display name for the enum configuration entity
     */
    displayName: string;

    /**
     * The unique value identifier for the enum configuration entity
     */
    value: string;
  }

  /**
   * Unit transformation to be applied to the reported usage
   */
  export interface UnitTransformation {
    /**
     * Divide usage by this number
     */
    divide: number;

    /**
     * Singular feature units after the transformation
     */
    featureUnits?: string;

    /**
     * Plural feature units after the transformation
     */
    featureUnitsPlural?: string;

    /**
     * After division, either round the result up or down
     */
    round?: 'UP' | 'DOWN';
  }
}

export interface FeatureListFeaturesParams extends MyCursorIDPageParams {
  /**
   * Query param: Filter by entity ID
   */
  id?: string;

  /**
   * Query param: Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: FeatureListFeaturesParams.CreatedAt;

  /**
   * Query param: Filter by feature type. Supports comma-separated values for
   * multiple types
   */
  featureType?: Array<'BOOLEAN' | 'NUMBER' | 'ENUM'>;

  /**
   * Query param: Filter by meter type. Supports comma-separated values for multiple
   * types
   */
  meterType?: Array<'None' | 'FLUCTUATING' | 'INCREMENTAL'>;

  /**
   * Query param: Filter by feature status. Supports comma-separated values for
   * multiple statuses
   */
  status?: Array<'NEW' | 'SUSPENDED' | 'ACTIVE'>;

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

export namespace FeatureListFeaturesParams {
  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  export interface CreatedAt {
    /**
     * Greater than the specified createdAt value
     */
    gt?: string;

    /**
     * Greater than or equal to the specified createdAt value
     */
    gte?: string;

    /**
     * Less than the specified createdAt value
     */
    lt?: string;

    /**
     * Less than or equal to the specified createdAt value
     */
    lte?: string;
  }
}

export interface FeatureRetrieveFeatureParams {
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

export interface FeatureUnarchiveFeatureParams {
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

export interface FeatureUpdateFeatureParams {
  /**
   * Body param: The description for the feature
   */
  description?: string;

  /**
   * Body param: The display name for the feature
   */
  displayName?: string;

  /**
   * Body param: The configuration data for the feature
   */
  enumConfiguration?: Array<FeatureUpdateFeatureParams.EnumConfiguration>;

  /**
   * Body param: The units for the feature
   */
  featureUnits?: string;

  /**
   * Body param: The plural units for the feature
   */
  featureUnitsPlural?: string;

  /**
   * Body param: The additional metadata for the feature
   */
  metadata?: { [key: string]: string };

  /**
   * Body param
   */
  meter?: FeatureUpdateFeatureParams.Meter;

  /**
   * Body param: Unit transformation to be applied to the reported usage
   */
  unitTransformation?: FeatureUpdateFeatureParams.UnitTransformation | null;

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

export namespace FeatureUpdateFeatureParams {
  export interface EnumConfiguration {
    /**
     * The display name for the enum configuration entity
     */
    displayName: string;

    /**
     * The unique value identifier for the enum configuration entity
     */
    value: string;
  }

  export interface Meter {
    aggregation: Meter.Aggregation;

    filters: Array<Meter.Filter>;
  }

  export namespace Meter {
    export interface Aggregation {
      function: 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'UNIQUE';

      /**
       * Aggregation field name
       */
      field?: string;
    }

    export interface Filter {
      conditions: Array<Filter.Condition>;
    }

    export namespace Filter {
      export interface Condition {
        /**
         * Condition field name
         */
        field: string;

        operation:
          | 'EQUALS'
          | 'NOT_EQUALS'
          | 'GREATER_THAN'
          | 'GREATER_THAN_OR_EQUAL'
          | 'LESS_THAN'
          | 'LESS_THAN_OR_EQUAL'
          | 'IS_NULL'
          | 'IS_NOT_NULL'
          | 'CONTAINS'
          | 'STARTS_WITH'
          | 'ENDS_WITH'
          | 'IN';

        /**
         * Condition value
         */
        value?: string;

        values?: Array<string>;
      }
    }
  }

  /**
   * Unit transformation to be applied to the reported usage
   */
  export interface UnitTransformation {
    /**
     * Divide usage by this number
     */
    divide: number;

    /**
     * Singular feature units after the transformation
     */
    featureUnits?: string;

    /**
     * Plural feature units after the transformation
     */
    featureUnitsPlural?: string;

    /**
     * After division, either round the result up or down
     */
    round?: 'UP' | 'DOWN';
  }
}

export declare namespace Features {
  export {
    type Feature as Feature,
    type FeatureListFeaturesResponse as FeatureListFeaturesResponse,
    type FeatureListFeaturesResponsesMyCursorIDPage as FeatureListFeaturesResponsesMyCursorIDPage,
    type FeatureArchiveFeatureParams as FeatureArchiveFeatureParams,
    type FeatureCreateFeatureParams as FeatureCreateFeatureParams,
    type FeatureListFeaturesParams as FeatureListFeaturesParams,
    type FeatureRetrieveFeatureParams as FeatureRetrieveFeatureParams,
    type FeatureUnarchiveFeatureParams as FeatureUnarchiveFeatureParams,
    type FeatureUpdateFeatureParams as FeatureUpdateFeatureParams,
  };
}
