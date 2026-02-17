// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promotionalEntitlements', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.customers.promotionalEntitlements.create('x', {
      promotionalEntitlements: [
        {
          customEndDate: '2019-12-27T18:11:19.117Z',
          enumValues: ['string'],
          featureId: 'featureId',
          hasSoftLimit: true,
          hasUnlimitedUsage: true,
          isVisible: true,
          monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          period: '1 week',
          resetPeriod: 'YEAR',
          usageLimit: -9007199254740991,
          weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.customers.promotionalEntitlements.create('x', {
      promotionalEntitlements: [
        {
          customEndDate: '2019-12-27T18:11:19.117Z',
          enumValues: ['string'],
          featureId: 'featureId',
          hasSoftLimit: true,
          hasUnlimitedUsage: true,
          isVisible: true,
          monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          period: '1 week',
          resetPeriod: 'YEAR',
          usageLimit: -9007199254740991,
          weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.customers.promotionalEntitlements.list('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.customers.promotionalEntitlements.list(
        'x',
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          createdAt: {
            gt: '2019-12-27T18:11:19.117Z',
            gte: '2019-12-27T18:11:19.117Z',
            lt: '2019-12-27T18:11:19.117Z',
            lte: '2019-12-27T18:11:19.117Z',
          },
          limit: 1,
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.v1.customers.promotionalEntitlements.revoke('featureId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revoke: required and optional params', async () => {
    const response = await client.v1.customers.promotionalEntitlements.revoke('featureId', { id: 'id' });
  });
});
