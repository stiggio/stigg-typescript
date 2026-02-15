// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.customers.retrieve('x');
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
    const responsePromise = client.v1.customers.update('x', {});
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
    const responsePromise = client.v1.customers.list();
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
      client.v1.customers.list(
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          createdAt: {
            gt: '2019-12-27T18:11:19.117Z',
            gte: '2019-12-27T18:11:19.117Z',
            lt: '2019-12-27T18:11:19.117Z',
            lte: '2019-12-27T18:11:19.117Z',
          },
          email: 'email',
          limit: 1,
          name: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.v1.customers.archive('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.v1.customers.import({
      customers: [
        {
          id: 'id',
          email: 'dev@stainless.com',
          name: 'name',
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
    const response = await client.v1.customers.import({
      customers: [
        {
          id: 'id',
          email: 'dev@stainless.com',
          name: 'name',
          metadata: { foo: 'string' },
          paymentMethodId: 'paymentMethodId',
          updatedAt: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('listResources', async () => {
    const responsePromise = client.v1.customers.listResources('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listResources: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.customers.listResources(
        'x',
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('provision: only required params', async () => {
    const responsePromise = client.v1.customers.provision({ id: 'id' });
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
    const response = await client.v1.customers.provision({
      id: 'id',
      couponId: 'couponId',
      defaultPaymentMethod: {
        billingId: 'billingId',
        cardExpiryMonth: 0,
        cardExpiryYear: 0,
        cardLast4Digits: 'cardLast4Digits',
        type: 'CARD',
      },
      email: 'dev@stainless.com',
      integrations: [
        {
          id: 'id',
          syncedEntityId: 'syncedEntityId',
          vendorIdentifier: 'AUTH0',
        },
      ],
      metadata: { foo: 'string' },
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('unarchive', async () => {
    const responsePromise = client.v1.customers.unarchive('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
