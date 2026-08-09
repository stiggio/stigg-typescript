// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.contracts.create({ customerId: 'customerId', subscriptions: [{}] });
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
    const response = await client.v1.contracts.create({
      customerId: 'customerId',
      subscriptions: [
        {
          existingSubscriptionId: 'existingSubscriptionId',
          newSubscription: {
            customerId: 'customerId',
            planId: 'planId',
            id: 'id',
            addons: [{ id: 'id', quantity: 0 }],
            appliedCoupon: {
              billingCouponId: 'billingCouponId',
              configuration: { startDate: '2019-12-27T18:11:19.117Z' },
              couponId: 'couponId',
              discount: {
                amountsOff: [{ amount: 0, currency: 'usd' }],
                description: 'description',
                durationInMonths: 1,
                name: 'name',
                percentOff: 1,
              },
              promotionCode: 'promotionCode',
            },
            awaitPaymentConfirmation: true,
            billingCountryCode: 'billingCountryCode',
            billingCycleAnchor: 'UNCHANGED',
            billingId: 'billingId',
            billingInformation: {
              billingAddress: {
                city: 'city',
                country: 'country',
                line1: 'line1',
                line2: 'line2',
                postalCode: 'postalCode',
                state: 'state',
              },
              chargeOnBehalfOfAccount: 'chargeOnBehalfOfAccount',
              integrationId: 'integrationId',
              invoiceDaysUntilDue: 0,
              isBackdated: true,
              isInvoicePaid: true,
              metadata: { foo: 'string' },
              prorationBehavior: 'INVOICE_IMMEDIATELY',
              taxIds: [{ type: 'type', value: 'value' }],
              taxPercentage: 0,
              taxRateIds: ['string'],
            },
            billingPeriod: 'MONTHLY',
            budget: { hasSoftLimit: true, limit: 0 },
            cancellationDate: '2019-12-27T18:11:19.117Z',
            charges: [
              {
                id: 'id',
                quantity: 0,
                type: 'FEATURE',
              },
            ],
            checkoutOptions: {
              cancelUrl: 'https://example.com',
              successUrl: 'https://example.com',
              allowPromoCodes: true,
              allowTaxIdCollection: true,
              collectBillingAddress: true,
              collectPhoneNumber: true,
              referenceId: 'referenceId',
            },
            entitlements: [
              {
                id: 'id',
                type: 'FEATURE',
                hasSoftLimit: true,
                hasUnlimitedUsage: true,
                monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
                resetPeriod: 'YEAR',
                usageLimit: 0,
                weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
                yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },
              },
            ],
            metadata: { foo: 'string' },
            minimumSpend: { amount: 0, currency: 'usd' },
            payingCustomerId: 'payingCustomerId',
            paymentCollectionMethod: 'CHARGE',
            priceOverrides: [
              {
                addonId: 'addonId',
                amount: 0,
                baseCharge: true,
                billingCountryCode: 'billingCountryCode',
                blockSize: 0,
                creditGrantCadence: 'BEGINNING_OF_BILLING_PERIOD',
                creditRate: {
                  amount: 1,
                  currencyId: 'currencyId',
                  costFormula: 'costFormula',
                },
                currency: 'usd',
                featureId: 'featureId',
                tiers: [
                  {
                    flatPrice: { amount: 0, currency: 'usd' },
                    unitPrice: { amount: 0, currency: 'usd' },
                    upTo: 0,
                  },
                ],
              },
            ],
            resourceId: 'resourceId',
            salesforceId: 'salesforceId',
            scheduleStrategy: 'END_OF_BILLING_PERIOD',
            startDate: '2019-12-27T18:11:19.117Z',
            trialOverrideConfiguration: {
              isTrial: true,
              trialEndBehavior: 'CONVERT_TO_PAID',
              trialEndDate: '2019-12-27T18:11:19.117Z',
            },
            unitQuantity: 0,
          },
        },
      ],
      activationEndDate: '2019-12-27T18:11:19.117Z',
      activationStartDate: '2019-12-27T18:11:19.117Z',
      name: 'name',
      poNumber: 'poNumber',
      setupBilling: true,
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.contracts.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.contracts.retrieve(
        'x',
        { 'X-ACCOUNT-ID': 'X-ACCOUNT-ID', 'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.contracts.update('x', {});
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
    const responsePromise = client.v1.contracts.list();
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
      client.v1.contracts.list(
        {
          after: 'after',
          before: 'before',
          customerExternalId: 'customerExternalId',
          limit: 1,
          name: 'name',
          state: 'state',
          'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
          'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.contracts.delete('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.contracts.delete(
        'x',
        { 'X-ACCOUNT-ID': 'X-ACCOUNT-ID', 'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });
});
