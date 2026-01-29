// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Prism tests are disabled
  test.skip('history: only required params', async () => {
    const responsePromise = client.v1.usage.history('featureId', {
      customerId: 'customerId',
      startDate: '2019-12-27T18:11:19.117Z',
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
  test.skip('history: required and optional params', async () => {
    const response = await client.v1.usage.history('featureId', {
      customerId: 'customerId',
      startDate: '2019-12-27T18:11:19.117Z',
      endDate: '2019-12-27T18:11:19.117Z',
      groupBy: 'groupBy',
      resourceId: 'resourceId',
    });
  });

  // Prism tests are disabled
  test.skip('report: only required params', async () => {
    const responsePromise = client.v1.usage.report({
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
  test.skip('report: required and optional params', async () => {
    const response = await client.v1.usage.report({
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
