// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BetaAPI from './beta/beta';
import { Beta } from './beta/beta';

export class Internal extends APIResource {
  beta: BetaAPI.Beta = new BetaAPI.Beta(this._client);
}

Internal.Beta = Beta;

export declare namespace Internal {
  export { Beta as Beta };
}
