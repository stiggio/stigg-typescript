// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource coupons', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.coupons.create({
      id: 'id',
      amountsOff: [{ amount: 0, currency: 'usd' }],
      description: 'description',
      durationInMonths: 1,
      name: 'name',
      percentOff: 1,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.coupons.create({
      id: 'id',
      amountsOff: [{ amount: 0, currency: 'usd' }],
      description: 'description',
      durationInMonths: 1,
      name: 'name',
      percentOff: 1,
      additionalMetaData: {},
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.coupons.retrieve('x');
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
    const responsePromise = client.v1.coupons.list();
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
      client.v1.coupons.list(
        {
          id: 'id',
          after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          createdAt: {
            gt: '2019-12-27T18:11:19.117Z',
            gte: '2019-12-27T18:11:19.117Z',
            lt: '2019-12-27T18:11:19.117Z',
            lte: '2019-12-27T18:11:19.117Z',
          },
          limit: 1,
          status: 'status',
          type: 'FIXED',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });
});
