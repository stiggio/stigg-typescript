// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource grants', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.events.credits.grants.create({
      amount: 0,
      currencyId: 'currencyId',
      customerId: 'customerId',
      displayName: 'displayName',
      grantType: 'PAID',
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
    const response = await client.v1.events.credits.grants.create({
      amount: 0,
      currencyId: 'currencyId',
      customerId: 'customerId',
      displayName: 'displayName',
      grantType: 'PAID',
      awaitPaymentConfirmation: true,
      billingInformation: {
        billingAddress: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          postalCode: 'postalCode',
          state: 'state',
        },
        invoiceDaysUntilDue: 0,
        isInvoicePaid: true,
      },
      comment: 'comment',
      cost: { amount: 0, currency: 'usd' },
      effectiveAt: '2019-12-27T18:11:19.117Z',
      expireAt: '2019-12-27T18:11:19.117Z',
      metadata: { foo: 'string' },
      paymentCollectionMethod: 'CHARGE',
      priority: 0,
      resourceId: 'resourceId',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.events.credits.grants.list({ customerId: 'customerId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.events.credits.grants.list({
      customerId: 'customerId',
      after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      createdAt: {
        gt: '2019-12-27T18:11:19.117Z',
        gte: '2019-12-27T18:11:19.117Z',
        lt: '2019-12-27T18:11:19.117Z',
        lte: '2019-12-27T18:11:19.117Z',
      },
      currencyId: 'currencyId',
      limit: 1,
      resourceId: 'resourceId',
    });
  });

  // Mock server tests are disabled
  test.skip('void', async () => {
    const responsePromise = client.v1.events.credits.grants.void('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
