// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from './entities';
import {
  Entities,
  EntityArchiveParams,
  EntityArchiveResponse,
  EntityListParams,
  EntityListResponse,
  EntityListResponsesMyCursorIDPage,
  EntityRetrieveParams,
  EntityRetrieveResponse,
  EntityUnarchiveParams,
  EntityUnarchiveResponse,
  EntityUpsertParams,
  EntityUpsertResponse,
} from './entities';
import * as EntityTypesAPI from './entity-types';
import {
  EntityTypeListParams,
  EntityTypeListResponse,
  EntityTypeListResponsesMyCursorIDPage,
  EntityTypeUpsertParams,
  EntityTypeUpsertResponse,
  EntityTypes,
} from './entity-types';
import * as CustomersAPI from './customers/customers';
import { Customers } from './customers/customers';

export class V1Beta extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  entityTypes: EntityTypesAPI.EntityTypes = new EntityTypesAPI.EntityTypes(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
}

V1Beta.Customers = Customers;
V1Beta.EntityTypes = EntityTypes;
V1Beta.Entities = Entities;

export declare namespace V1Beta {
  export { Customers as Customers };

  export {
    EntityTypes as EntityTypes,
    type EntityTypeListResponse as EntityTypeListResponse,
    type EntityTypeUpsertResponse as EntityTypeUpsertResponse,
    type EntityTypeListResponsesMyCursorIDPage as EntityTypeListResponsesMyCursorIDPage,
    type EntityTypeListParams as EntityTypeListParams,
    type EntityTypeUpsertParams as EntityTypeUpsertParams,
  };

  export {
    Entities as Entities,
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
