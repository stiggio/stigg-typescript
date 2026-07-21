// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credits', () => {
  // Mock server tests are disabled
  test.skip('getAutoRecharge: only required params', async () => {
    const responsePromise = client.v1.credits.getAutoRecharge({
      currencyId: 'currencyId',
      customerId: 'customerId',
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
  test.skip('getAutoRecharge: required and optional params', async () => {
    const response = await client.v1.credits.getAutoRecharge({
      currencyId: 'currencyId',
      customerId: 'customerId',
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('getUsage: only required params', async () => {
    const responsePromise = client.v1.credits.getUsage({ customerId: 'customerId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUsage: required and optional params', async () => {
    const response = await client.v1.credits.getUsage({
      customerId: 'customerId',
      after: 'after',
      before: 'before',
      currencyId: 'currencyId',
      endDate: '2019-12-27T18:11:19.117Z',
      groupBy: 'groupBy',
      limit: 1,
      resourceId: 'resourceId',
      startDate: '2019-12-27T18:11:19.117Z',
      timeRange: 'LAST_DAY',
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('listLedger: only required params', async () => {
    const responsePromise = client.v1.credits.listLedger({ customerId: 'customerId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLedger: required and optional params', async () => {
    const response = await client.v1.credits.listLedger({
      customerId: 'customerId',
      after: 'after',
      before: 'before',
      currencyId: 'currencyId',
      eventType: 'eventType',
      limit: 1,
      resourceId: 'resourceId',
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
