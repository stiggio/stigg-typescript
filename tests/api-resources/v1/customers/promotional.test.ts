// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from 'stigg';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promotional', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.customers.promotional.create('customerId', {
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
    const response = await client.v1.customers.promotional.create('customerId', {
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
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.v1.customers.promotional.revoke('featureId', { customerId: 'customerId' });
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
    const response = await client.v1.customers.promotional.revoke('featureId', { customerId: 'customerId' });
  });
});
