// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
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

export class Beta extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  entityTypes: EntityTypesAPI.EntityTypes = new EntityTypesAPI.EntityTypes(this._client);
}

Beta.Customers = Customers;
Beta.EntityTypes = EntityTypes;

export declare namespace Beta {
  export { Customers as Customers };

  export {
    EntityTypes as EntityTypes,
    type EntityTypeListResponse as EntityTypeListResponse,
    type EntityTypeUpsertResponse as EntityTypeUpsertResponse,
    type EntityTypeListResponsesMyCursorIDPage as EntityTypeListResponsesMyCursorIDPage,
    type EntityTypeListParams as EntityTypeListParams,
    type EntityTypeUpsertParams as EntityTypeUpsertParams,
  };
}
