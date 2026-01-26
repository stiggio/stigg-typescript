// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource futureUpdate', () => {
  // Prism tests are disabled
  test.skip('cancelPendingPayment', async () => {
    const responsePromise = client.v1.subscriptions.futureUpdate.cancelPendingPayment('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancelSchedule', async () => {
    const responsePromise = client.v1.subscriptions.futureUpdate.cancelSchedule('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
