// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EntitlementsAPI from './entitlements';
import { EntitlementCheckParams, EntitlementCheckResponse, Entitlements } from './entitlements';

export class Customers extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
}

Customers.Entitlements = Entitlements;

export declare namespace Customers {
  export {
    Entitlements as Entitlements,
    type EntitlementCheckResponse as EntitlementCheckResponse,
    type EntitlementCheckParams as EntitlementCheckParams,
  };
}
