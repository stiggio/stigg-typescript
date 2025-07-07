// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stigg } from '../client';

export abstract class APIResource {
  protected _client: Stigg;

  constructor(client: Stigg) {
    this._client = client;
  }
}
