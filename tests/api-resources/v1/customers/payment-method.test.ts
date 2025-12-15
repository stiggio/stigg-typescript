// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from 'stigg';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentMethod', () => {
  // Prism tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.v1.customers.paymentMethod.attach('x', {
      integrationId: 'integrationId',
      paymentMethodId: 'paymentMethodId',
      vendorIdentifier: 'AUTH0',
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
  test.skip('attach: required and optional params', async () => {
    const response = await client.v1.customers.paymentMethod.attach('x', {
      integrationId: 'integrationId',
      paymentMethodId: 'paymentMethodId',
      vendorIdentifier: 'AUTH0',
      billingCurrency: 'usd',
    });
  });

  // Prism tests are disabled
  test.skip('detach', async () => {
    const responsePromise = client.v1.customers.paymentMethod.detach('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
