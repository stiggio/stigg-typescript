// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource consumption', () => {
  // Mock server tests are disabled
  test.skip('consume: only required params', async () => {
    const responsePromise = client.v1.credits.consumption.consume({
      amount: 1,
      currencyId: 'currencyId',
      customerId: 'customerId',
      idempotencyKey: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('consume: required and optional params', async () => {
    const response = await client.v1.credits.consumption.consume({
      amount: 1,
      currencyId: 'currencyId',
      customerId: 'customerId',
      idempotencyKey: 'x',
      createdAt: '2019-12-27T18:11:19.117Z',
      dimensions: { foo: 'string' },
      resourceId: 'resourceId',
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('consumeAsync: only required params', async () => {
    const responsePromise = client.v1.credits.consumption.consumeAsync({
      consumptions: [
        {
          amount: 1,
          currencyId: 'currencyId',
          customerId: 'customerId',
          idempotencyKey: 'x',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('consumeAsync: required and optional params', async () => {
    const response = await client.v1.credits.consumption.consumeAsync({
      consumptions: [
        {
          amount: 1,
          currencyId: 'currencyId',
          customerId: 'customerId',
          idempotencyKey: 'x',
          createdAt: '2019-12-27T18:11:19.117Z',
          dimensions: { foo: 'string' },
          resourceId: 'resourceId',
        },
      ],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
