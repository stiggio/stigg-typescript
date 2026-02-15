// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stigg from '@stigg/typescript';

const client = new Stigg({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('listProducts', async () => {
    const responsePromise = client.v1.products.listProducts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listProducts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.products.listProducts(
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stigg.NotFoundError);
  });
});
