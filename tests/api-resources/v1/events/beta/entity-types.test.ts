// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entityTypes', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.events.beta.entityTypes.list();
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
      client.v1.events.beta.entityTypes.list(
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 1,
          'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
          'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.v1.events.beta.entityTypes.upsert({
      types: [
        {
          id: 'org',
          attributionKeys: ['organizationId'],
          displayName: 'Organization',
        },
        {
          id: 'team',
          attributionKeys: ['teamId'],
          displayName: 'Team',
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

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.v1.events.beta.entityTypes.upsert({
      types: [
        {
          id: 'org',
          attributionKeys: ['organizationId'],
          displayName: 'Organization',
        },
        {
          id: 'team',
          attributionKeys: ['teamId'],
          displayName: 'Team',
        },
      ],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
