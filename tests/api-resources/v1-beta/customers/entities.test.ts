// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1Beta.customers.entities.retrieve('x', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1Beta.customers.entities.retrieve('x', {
      id: 'id',
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1Beta.customers.entities.list('id');
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
      client.v1Beta.customers.entities.list(
        'id',
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          includeArchived: 'true',
          limit: 1,
          typeRefId: 'typeRefId',
          'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
          'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.v1Beta.customers.entities.archive('id', {
      ids: ['user-7f3a0c1d', 'user-c4d1b2e9'],
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.v1Beta.customers.entities.archive('id', {
      ids: ['user-7f3a0c1d', 'user-c4d1b2e9'],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.v1Beta.customers.entities.unarchive('id', {
      ids: ['user-7f3a0c1d', 'user-c4d1b2e9'],
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
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.v1Beta.customers.entities.unarchive('id', {
      ids: ['user-7f3a0c1d', 'user-c4d1b2e9'],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.v1Beta.customers.entities.upsert('id', {
      entities: [{ id: 'user-7f3a0c1d' }, { id: 'user-c4d1b2e9' }],
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.v1Beta.customers.entities.upsert('id', {
      entities: [
        {
          id: 'user-7f3a0c1d',
          metadata: { email: 'jane@acme.com', role: 'admin' },
          typeRefId: 'user',
        },
        {
          id: 'user-c4d1b2e9',
          metadata: { email: 'john@acme.com' },
          typeRefId: 'user',
        },
      ],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
