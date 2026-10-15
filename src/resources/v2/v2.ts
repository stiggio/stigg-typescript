// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageAPI from './usage';
import { Usage, UsageReportParams, UsageReportResponse } from './usage';

export class V2 extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

V2.Usage = Usage;

export declare namespace V2 {
  export {
    Usage as Usage,
    type UsageReportResponse as UsageReportResponse,
    type UsageReportParams as UsageReportParams,
  };
}
