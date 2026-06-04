// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssignmentsAPI from './assignments';
import {
  AssignmentListParams,
  AssignmentListResponse,
  AssignmentListResponsesMyCursorIDPage,
  AssignmentUpsertParams,
  AssignmentUpsertResponse,
  Assignments,
} from './assignments';
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
import * as EntitlementsAPI from './entitlements';
import { EntitlementCheckParams, EntitlementCheckResponse, Entitlements } from './entitlements';

export class Customers extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  assignments: AssignmentsAPI.Assignments = new AssignmentsAPI.Assignments(this._client);
}

Customers.Entitlements = Entitlements;
Customers.Entities = Entities;
Customers.Assignments = Assignments;

export declare namespace Customers {
  export {
    Entitlements as Entitlements,
    type EntitlementCheckResponse as EntitlementCheckResponse,
    type EntitlementCheckParams as EntitlementCheckParams,
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

  export {
    Assignments as Assignments,
    type AssignmentListResponse as AssignmentListResponse,
    type AssignmentUpsertResponse as AssignmentUpsertResponse,
    type AssignmentListResponsesMyCursorIDPage as AssignmentListResponsesMyCursorIDPage,
    type AssignmentListParams as AssignmentListParams,
    type AssignmentUpsertParams as AssignmentUpsertParams,
  };
}
