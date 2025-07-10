// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from 'stigg';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subCustomer', () => {
  // skipped: tests are disabled for the time being
  test.skip('getSubCustomer: only required params', async () => {
    const responsePromise = client.v1.customers.subCustomer.getSubCustomer('refId', {
      'X-API-KEY': 'X-API-KEY',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getSubCustomer: required and optional params', async () => {
    const response = await client.v1.customers.subCustomer.getSubCustomer('refId', {
      'X-API-KEY': 'X-API-KEY',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
