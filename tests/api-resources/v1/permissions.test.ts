// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from 'stigg';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissions', () => {
  // Prism tests are disabled
  test.skip('check: only required params', async () => {
    const responsePromise = client.v1.permissions.check({
      userId: 'userId',
      resourcesAndActions: [{ action: 'read', resource: 'product' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('check: required and optional params', async () => {
    const response = await client.v1.permissions.check({
      userId: 'userId',
      resourcesAndActions: [{ action: 'read', resource: 'product' }],
    });
  });
});
