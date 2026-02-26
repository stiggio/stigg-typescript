// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entitlements', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.events.plans.entitlements.create('planId', { entitlements: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.events.plans.entitlements.create('planId', {
      entitlements: [
        {
          credit: {
            amount: 1,
            cadence: 'MONTH',
            customCurrencyId: 'customCurrencyId',
            behavior: 'Increment',
            description: 'description',
            displayNameOverride: 'displayNameOverride',
            hiddenFromWidgets: ['PAYWALL'],
            isCustom: true,
            isGranted: true,
            order: 0,
          },
          feature: {
            featureId: 'featureId',
            behavior: 'Increment',
            description: 'description',
            displayNameOverride: 'displayNameOverride',
            enumValues: ['string'],
            hasSoftLimit: true,
            hasUnlimitedUsage: true,
            hiddenFromWidgets: ['PAYWALL'],
            isCustom: true,
            isGranted: true,
            monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
            order: 0,
            resetPeriod: 'YEAR',
            usageLimit: 0,
            weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
            yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          },
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.events.plans.entitlements.update('id', { planId: 'planId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.events.plans.entitlements.update('id', {
      planId: 'planId',
      credit: {
        amount: 1,
        behavior: 'Increment',
        cadence: 'MONTH',
        description: 'description',
        displayNameOverride: 'displayNameOverride',
        hiddenFromWidgets: ['PAYWALL'],
        isCustom: true,
        isGranted: true,
        order: 0,
      },
      feature: {
        behavior: 'Increment',
        description: 'description',
        displayNameOverride: 'displayNameOverride',
        enumValues: ['string'],
        hasSoftLimit: true,
        hasUnlimitedUsage: true,
        hiddenFromWidgets: ['PAYWALL'],
        isCustom: true,
        isGranted: true,
        monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
        order: 0,
        resetPeriod: 'YEAR',
        usageLimit: 0,
        weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
        yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.events.plans.entitlements.list('planId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.events.plans.entitlements.delete('id', { planId: 'planId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.events.plans.entitlements.delete('id', { planId: 'planId' });
  });
});
