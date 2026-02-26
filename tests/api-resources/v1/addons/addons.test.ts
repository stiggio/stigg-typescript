// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addons', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.addons.create({
      id: 'id',
      displayName: 'displayName',
      productId: 'productId',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.addons.create({
      id: 'id',
      displayName: 'displayName',
      productId: 'productId',
      billingId: 'billingId',
      description: 'description',
      maxQuantity: 0,
      metadata: { foo: 'string' },
      pricingType: 'FREE',
      status: 'DRAFT',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.addons.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.addons.update('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.addons.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.addons.list(
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
          productId: 'productId',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.v1.addons.archive('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createDraft', async () => {
    const responsePromise = client.v1.addons.createDraft('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: only required params', async () => {
    const responsePromise = client.v1.addons.publish('x', { migrationType: 'NEW_CUSTOMERS' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: required and optional params', async () => {
    const response = await client.v1.addons.publish('x', { migrationType: 'NEW_CUSTOMERS' });
  });

  // Mock server tests are disabled
  test.skip('removeDraft', async () => {
    const responsePromise = client.v1.addons.removeDraft('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setPricing: only required params', async () => {
    const responsePromise = client.v1.addons.setPricing('x', { pricingType: 'FREE' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setPricing: required and optional params', async () => {
    const response = await client.v1.addons.setPricing('x', {
      pricingType: 'FREE',
      billingId: 'billingId',
      minimumSpend: [
        {
          billingPeriod: 'MONTHLY',
          minimum: { amount: 0, currency: 'usd' },
        },
      ],
      overageBillingPeriod: 'ON_SUBSCRIPTION_RENEWAL',
      overagePricingModels: [
        {
          billingModel: 'FLAT_FEE',
          pricePeriods: [
            {
              billingPeriod: 'MONTHLY',
              billingCountryCode: 'billingCountryCode',
              blockSize: 0,
              creditGrantCadence: 'BEGINNING_OF_BILLING_PERIOD',
              creditRate: {
                amount: 1,
                currencyId: 'currencyId',
                costFormula: 'costFormula',
              },
              price: { amount: 0, currency: 'usd' },
              tiers: [
                {
                  flatPrice: { amount: 0, currency: 'usd' },
                  unitPrice: { amount: 0, currency: 'usd' },
                  upTo: 0,
                },
              ],
            },
          ],
          billingCadence: 'RECURRING',
          entitlement: {
            featureId: 'featureId',
            hasSoftLimit: true,
            hasUnlimitedUsage: true,
            monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
            resetPeriod: 'YEAR',
            usageLimit: 0,
            weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
            yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          },
          featureId: 'featureId',
          topUpCustomCurrencyId: 'topUpCustomCurrencyId',
        },
      ],
      pricingModels: [
        {
          billingModel: 'FLAT_FEE',
          pricePeriods: [
            {
              billingPeriod: 'MONTHLY',
              billingCountryCode: 'billingCountryCode',
              blockSize: 0,
              creditGrantCadence: 'BEGINNING_OF_BILLING_PERIOD',
              creditRate: {
                amount: 1,
                currencyId: 'currencyId',
                costFormula: 'costFormula',
              },
              price: { amount: 0, currency: 'usd' },
              tiers: [
                {
                  flatPrice: { amount: 0, currency: 'usd' },
                  unitPrice: { amount: 0, currency: 'usd' },
                  upTo: 0,
                },
              ],
            },
          ],
          billingCadence: 'RECURRING',
          featureId: 'featureId',
          maxUnitQuantity: 1,
          minUnitQuantity: 1,
          monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          resetPeriod: 'YEAR',
          tiersMode: 'VOLUME',
          topUpCustomCurrencyId: 'topUpCustomCurrencyId',
          weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
          yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
        },
      ],
    });
  });
});
