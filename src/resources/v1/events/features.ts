// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { MyCursorIDPage, type MyCursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Archives a feature, preventing it from being used in new entitlements.
   */
  archiveFeature(id: string, options?: RequestOptions): APIPromise<FeatureArchiveFeatureResponse> {
    return this._client.post(path`/api/v1/features/${id}/archive`, options);
  }

  /**
   * Creates a new feature with the specified type, metering, and configuration.
   */
  createFeature(
    body: FeatureCreateFeatureParams,
    options?: RequestOptions,
  ): APIPromise<FeatureCreateFeatureResponse> {
    return this._client.post('/api/v1/features', { body, ...options });
  }

  /**
   * Retrieves a paginated list of features in the environment.
   */
  listFeatures(
    query: FeatureListFeaturesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeatureListFeaturesResponsesMyCursorIDPage, FeatureListFeaturesResponse> {
    return this._client.getAPIList('/api/v1/features', MyCursorIDPage<FeatureListFeaturesResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a feature by its unique identifier.
   */
  retrieveFeature(id: string, options?: RequestOptions): APIPromise<FeatureRetrieveFeatureResponse> {
    return this._client.get(path`/api/v1/features/${id}`, options);
  }

  /**
   * Restores an archived feature, allowing it to be used in entitlements again.
   */
  unarchiveFeature(id: string, options?: RequestOptions): APIPromise<FeatureUnarchiveFeatureResponse> {
    return this._client.post(path`/api/v1/features/${id}/unarchive`, options);
  }

  /**
   * Updates an existing feature's properties such as display name, description, and
   * configuration.
   */
  updateFeature(
    id: string,
    body: FeatureUpdateFeatureParams,
    options?: RequestOptions,
  ): APIPromise<FeatureUpdateFeatureResponse> {
    return this._client.patch(path`/api/v1/features/${id}`, { body, ...options });
  }
}

export type FeatureListFeaturesResponsesMyCursorIDPage = MyCursorIDPage<FeatureListFeaturesResponse>;

/**
 * Response object
 */
export interface FeatureArchiveFeatureResponse {
  /**
   * Feature configuration object
   */
  data: FeatureArchiveFeatureResponse.Data;
}

export namespace FeatureArchiveFeatureResponse {
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
 * Response object
 */
export interface FeatureCreateFeatureResponse {
  /**
   * Feature configuration object
   */
  data: FeatureCreateFeatureResponse.Data;
}

export namespace FeatureCreateFeatureResponse {
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

/**
 * Response object
 */
export interface FeatureRetrieveFeatureResponse {
  /**
   * Feature configuration object
   */
  data: FeatureRetrieveFeatureResponse.Data;
}

export namespace FeatureRetrieveFeatureResponse {
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
 * Response object
 */
export interface FeatureUnarchiveFeatureResponse {
  /**
   * Feature configuration object
   */
  data: FeatureUnarchiveFeatureResponse.Data;
}

export namespace FeatureUnarchiveFeatureResponse {
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
 * Response object
 */
export interface FeatureUpdateFeatureResponse {
  /**
   * Feature configuration object
   */
  data: FeatureUpdateFeatureResponse.Data;
}

export namespace FeatureUpdateFeatureResponse {
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

export interface FeatureCreateFeatureParams {
  /**
   * The unique identifier for the feature
   */
  id: string;

  /**
   * The display name for the feature
   */
  displayName: string;

  /**
   * The type of the feature
   */
  featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';

  /**
   * The description for the feature
   */
  description?: string;

  /**
   * The configuration data for the feature
   */
  enumConfiguration?: Array<FeatureCreateFeatureParams.EnumConfiguration>;

  /**
   * The status of the feature
   */
  featureStatus?: 'NEW' | 'SUSPENDED' | 'ACTIVE';

  /**
   * The units for the feature
   */
  featureUnits?: string;

  /**
   * The plural units for the feature
   */
  featureUnitsPlural?: string;

  /**
   * The additional metadata for the feature
   */
  metadata?: { [key: string]: string };

  /**
   * The meter type for the feature
   */
  meterType?: 'None' | 'FLUCTUATING' | 'INCREMENTAL';

  /**
   * Unit transformation to be applied to the reported usage
   */
  unitTransformation?: FeatureCreateFeatureParams.UnitTransformation | null;
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
   * Filter by entity ID
   */
  id?: string;

  /**
   * Filter by creation date using range operators: gt, gte, lt, lte
   */
  createdAt?: FeatureListFeaturesParams.CreatedAt;

  /**
   * Filter by feature type. Supports comma-separated values for multiple types
   */
  featureType?: string;

  /**
   * Filter by meter type. Supports comma-separated values for multiple types
   */
  meterType?: string;

  /**
   * Filter by feature status. Supports comma-separated values for multiple statuses
   */
  status?: string;
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

export interface FeatureUpdateFeatureParams {
  /**
   * The description for the feature
   */
  description?: string;

  /**
   * The display name for the feature
   */
  displayName?: string;

  /**
   * The configuration data for the feature
   */
  enumConfiguration?: Array<FeatureUpdateFeatureParams.EnumConfiguration>;

  /**
   * The units for the feature
   */
  featureUnits?: string;

  /**
   * The plural units for the feature
   */
  featureUnitsPlural?: string;

  /**
   * The additional metadata for the feature
   */
  metadata?: { [key: string]: string };

  meter?: FeatureUpdateFeatureParams.Meter;

  /**
   * Unit transformation to be applied to the reported usage
   */
  unitTransformation?: FeatureUpdateFeatureParams.UnitTransformation | null;
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

      field?: string;
    }

    export interface Filter {
      conditions: Array<Filter.Condition>;
    }

    export namespace Filter {
      export interface Condition {
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
    type FeatureArchiveFeatureResponse as FeatureArchiveFeatureResponse,
    type FeatureCreateFeatureResponse as FeatureCreateFeatureResponse,
    type FeatureListFeaturesResponse as FeatureListFeaturesResponse,
    type FeatureRetrieveFeatureResponse as FeatureRetrieveFeatureResponse,
    type FeatureUnarchiveFeatureResponse as FeatureUnarchiveFeatureResponse,
    type FeatureUpdateFeatureResponse as FeatureUpdateFeatureResponse,
    type FeatureListFeaturesResponsesMyCursorIDPage as FeatureListFeaturesResponsesMyCursorIDPage,
    type FeatureCreateFeatureParams as FeatureCreateFeatureParams,
    type FeatureListFeaturesParams as FeatureListFeaturesParams,
    type FeatureUpdateFeatureParams as FeatureUpdateFeatureParams,
  };
}
