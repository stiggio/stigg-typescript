// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from 'stigg';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('createEvent: only required params', async () => {
    const responsePromise = client.v1.createEvent({
      events: [
        {
          customerId: 'customerId',
          eventName: 'x',
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

  // Prism tests are disabled
  test.skip('createEvent: required and optional params', async () => {
    const response = await client.v1.createEvent({
      events: [
        {
          customerId: 'customerId',
          eventName: 'x',
          idempotencyKey: 'x',
          dimensions: { foo: 'string' },
          resourceId: 'resourceId',
          timestamp: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('createUsage: only required params', async () => {
    const responsePromise = client.v1.createUsage({
      usages: [
        {
          customerId: 'customerId',
          featureId: 'featureId',
          value: -9007199254740991,
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

  // Prism tests are disabled
  test.skip('createUsage: required and optional params', async () => {
    const response = await client.v1.createUsage({
      usages: [
        {
          customerId: 'customerId',
          featureId: 'featureId',
          value: -9007199254740991,
          createdAt: '2019-12-27T18:11:19.117Z',
          dimensions: { foo: 'string' },
          resourceId: 'resourceId',
          updateBehavior: 'DELTA',
        },
      ],
    });
  });
});
