// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assignments', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1Beta.customers.assignments.list('id');
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
      client.v1Beta.customers.assignments.list(
        'id',
        {
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          capabilityId: 'capabilityId',
          entityId: 'entityId',
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
    const responsePromise = client.v1Beta.customers.assignments.upsert('id', {
      assignments: [{ entityId: 'workspace-001' }, { entityId: 'workspace-002' }],
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
    const response = await client.v1Beta.customers.assignments.upsert('id', {
      assignments: [
        {
          entityId: 'workspace-001',
          cadence: 'MONTH',
          currencyId: 'currencyId',
          featureId: 'compute-minutes',
          parentId: 'parentId',
          scopeEntityIds: ['NxI'],
          usageLimit: 1000,
        },
        {
          entityId: 'workspace-002',
          cadence: 'MONTH',
          currencyId: 'cred-type-tokens',
          featureId: 'featureId',
          parentId: 'workspace-001',
          scopeEntityIds: ['user-1'],
          usageLimit: 2000,
        },
      ],
      'X-ACCOUNT-ID': 'X-ACCOUNT-ID',
      'X-ENVIRONMENT-ID': 'X-ENVIRONMENT-ID',
    });
  });
});
