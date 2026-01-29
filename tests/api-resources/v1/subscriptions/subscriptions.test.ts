// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.subscriptions.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.subscriptions.update('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.subscriptions.list();
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
      client.v1.subscriptions.list(
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customerId: 'customerId',
          limit: 1,
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.v1.subscriptions.cancel('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delegate: only required params', async () => {
    const responsePromise = client.v1.subscriptions.delegate('x', { targetCustomerId: 'targetCustomerId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delegate: required and optional params', async () => {
    const response = await client.v1.subscriptions.delegate('x', { targetCustomerId: 'targetCustomerId' });
  });

  // Prism tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.v1.subscriptions.import({
      subscriptions: [
        {
          id: 'id',
          customerId: 'customerId',
          planId: 'planId',
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
  test.skip('import: required and optional params', async () => {
    const response = await client.v1.subscriptions.import({
      subscriptions: [
        {
          id: 'id',
          customerId: 'customerId',
          planId: 'planId',
          billingId: 'billingId',
          endDate: '2019-12-27T18:11:19.117Z',
          metadata: { foo: 'string' },
          resourceId: 'resourceId',
          startDate: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('migrate', async () => {
    const responsePromise = client.v1.subscriptions.migrate('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('preview: only required params', async () => {
    const responsePromise = client.v1.subscriptions.preview({ customerId: 'customerId', planId: 'planId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('preview: required and optional params', async () => {
    const response = await client.v1.subscriptions.preview({
      customerId: 'customerId',
      planId: 'planId',
      addons: [{ addonId: 'addonId', quantity: 1 }],
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
      billableFeatures: [{ featureId: 'featureId', quantity: 1 }],
      billingCountryCode: 'billingCountryCode',
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
        metadata: {},
        prorationBehavior: 'INVOICE_IMMEDIATELY',
        taxIds: [{ type: 'type', value: 'value' }],
        taxPercentage: 0,
        taxRateIds: ['string'],
      },
      billingPeriod: 'MONTHLY',
      charges: [
        {
          id: 'id',
          quantity: 1,
          type: 'FEATURE',
        },
      ],
      payingCustomerId: 'payingCustomerId',
      resourceId: 'resourceId',
      scheduleStrategy: 'END_OF_BILLING_PERIOD',
      startDate: '2019-12-27T18:11:19.117Z',
      trialOverrideConfiguration: {
        isTrial: true,
        trialEndBehavior: 'CONVERT_TO_PAID',
        trialEndDate: '2019-12-27T18:11:19.117Z',
      },
      unitQuantity: 1,
    });
  });

  // Prism tests are disabled
  test.skip('provision: only required params', async () => {
    const responsePromise = client.v1.subscriptions.provision({ customerId: 'customerId', planId: 'planId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('provision: required and optional params', async () => {
    const response = await client.v1.subscriptions.provision({
      customerId: 'customerId',
      planId: 'planId',
      id: 'id',
      addons: [{ addonId: 'addonId', quantity: 1 }],
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
      charges: [
        {
          id: 'id',
          quantity: 1,
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
      metadata: { foo: 'string' },
      minimumSpend: {
        minimum: {
          amount: 0,
          billingCountryCode: 'billingCountryCode',
          currency: 'usd',
        },
      },
      payingCustomerId: 'payingCustomerId',
      paymentCollectionMethod: 'CHARGE',
      priceOverrides: [
        {
          addonId: 'addonId',
          baseCharge: true,
          blockSize: 0,
          creditGrantCadence: 'BEGINNING_OF_BILLING_PERIOD',
          creditRate: {
            amount: 1,
            currencyId: 'currencyId',
            costFormula: 'costFormula',
          },
          featureId: 'featureId',
          price: {
            amount: 0,
            billingCountryCode: 'billingCountryCode',
            currency: 'usd',
          },
          tiers: [
            {
              flatPrice: {
                amount: 0,
                billingCountryCode: 'billingCountryCode',
                currency: 'usd',
              },
              unitPrice: {
                amount: 0,
                billingCountryCode: 'billingCountryCode',
                currency: 'usd',
              },
              upTo: 0,
            },
          ],
        },
      ],
      resourceId: 'resourceId',
      salesforceId: 'salesforceId',
      scheduleStrategy: 'END_OF_BILLING_PERIOD',
      startDate: '2019-12-27T18:11:19.117Z',
      subscriptionEntitlements: [
        {
          featureId: 'featureId',
          usageLimit: 0,
          isGranted: true,
        },
      ],
      trialOverrideConfiguration: {
        isTrial: true,
        trialEndBehavior: 'CONVERT_TO_PAID',
        trialEndDate: '2019-12-27T18:11:19.117Z',
      },
      unitQuantity: 1,
    });
  });

  // Prism tests are disabled
  test.skip('transfer: only required params', async () => {
    const responsePromise = client.v1.subscriptions.transfer('x', {
      destinationResourceId: 'destinationResourceId',
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
  test.skip('transfer: required and optional params', async () => {
    const response = await client.v1.subscriptions.transfer('x', {
      destinationResourceId: 'destinationResourceId',
    });
  });
});
