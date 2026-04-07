// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/api/v1/customers/{id}',
    httpMethod: 'get',
    summary: 'Get a single customer by ID',
    description:
      'Retrieves a customer by their unique identifier, including billing information and subscription status.',
    stainlessPath: '(resource) v1.customers > (method) retrieve',
    qualified: 'client.v1.customers.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## retrieve\n\n`client.v1.customers.retrieve(id: string): { data: object; }`\n\n**get** `/api/v1/customers/{id}`\n\nRetrieves a customer by their unique identifier, including billing information and subscription status.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.retrieve('x');\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'customers retrieve',
        example: "stigg v1:customers retrieve \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.Retrieve',
        example:
          'CustomerRetrieveParams parameters = new() { ID = "x" };\n\nvar customerResponse = await client.V1.Customers.Retrieve(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/customers/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerResponse customerResponse = client.v1().customers().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.retrieve(\n    "x",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.retrieve("x")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.retrieve('x');\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/customers/{id}',
    httpMethod: 'patch',
    summary: 'Update a customer',
    description: "Updates an existing customer's properties such as name, email, and billing information.",
    stainlessPath: '(resource) v1.customers > (method) update',
    qualified: 'client.v1.customers.update',
    params: [
      'id: string;',
      'billingCurrency?: string;',
      'billingId?: string;',
      "couponId?: string | '';",
      'email?: string;',
      'integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[];',
      'language?: string;',
      'metadata?: object;',
      'name?: string;',
      'passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; };',
      'timezone?: string;',
    ],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## update\n\n`client.v1.customers.update(id: string, billingCurrency?: string, billingId?: string, couponId?: string | '', email?: string, integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[], language?: string, metadata?: object, name?: string, passthrough?: { stripe?: { billingAddress?: object; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: object; taxIds?: object[]; }; zuora?: { billingAddress?: object; currency?: string; metadata?: object; paymentMethodId?: string; }; }, timezone?: string): { data: object; }`\n\n**patch** `/api/v1/customers/{id}`\n\nUpdates an existing customer's properties such as name, email, and billing information.\n\n### Parameters\n\n- `id: string`\n\n- `billingCurrency?: string`\n  The billing currency of the customer\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `couponId?: string | ''`\n  Customer level coupon\n\n- `email?: string`\n  The email of the customer\n\n- `integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]`\n  List of integrations\n\n- `language?: string`\n  Language to use for this customer\n\n- `metadata?: object`\n  Additional metadata\n\n- `name?: string`\n  The name of the customer\n\n- `passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }`\n  Vendor-specific billing passthrough fields.\n  - `stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }`\n    Stripe-specific billing fields for the customer.\n  - `zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }`\n    Zuora-specific billing fields for the customer.\n\n- `timezone?: string`\n  Timezone to use for this customer\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.update('x');\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'customers update',
        example: "stigg v1:customers update \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.Update',
        example:
          'CustomerUpdateParams parameters = new() { ID = "x" };\n\nvar customerResponse = await client.V1.Customers.Update(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.Update(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/customers/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().customers().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerResponse customerResponse = client.v1().customers().update("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.update(\n    id="x",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.update("x")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.update('x');\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/customers',
    httpMethod: 'get',
    summary: 'Get a list of customers',
    description: 'Retrieves a paginated list of customers in the environment.',
    stainlessPath: '(resource) v1.customers > (method) list',
    qualified: 'client.v1.customers.list',
    params: [
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'email?: string;',
      'limit?: number;',
      'name?: string;',
    ],
    response:
      "{ id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: object; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: object; taxIds?: object[]; }; zuora?: { billingAddress?: object; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }",
    markdown:
      "## list\n\n`client.v1.customers.list(after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, email?: string, limit?: number, name?: string): { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: object; email?: string; integrations?: object[]; language?: string; metadata?: object; name?: string; passthrough?: object; timezone?: string; }`\n\n**get** `/api/v1/customers`\n\nRetrieves a paginated list of customers in the environment.\n\n### Parameters\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `email?: string`\n  Filter by exact customer email address\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `name?: string`\n  Filter by exact customer name\n\n### Returns\n\n- `{ id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: object; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: object; taxIds?: object[]; }; zuora?: { billingAddress?: object; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n  A customer can be either an organization or an individual\n\n  - `id: string`\n  - `archivedAt: string`\n  - `createdAt: string`\n  - `updatedAt: string`\n  - `billingCurrency?: string`\n  - `billingId?: string`\n  - `couponId?: string | ''`\n  - `defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }`\n  - `email?: string`\n  - `integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]`\n  - `language?: string`\n  - `metadata?: object`\n  - `name?: string`\n  - `passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }`\n  - `timezone?: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const customerListResponse of client.v1.customers.list()) {\n  console.log(customerListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'customers list',
        example: "stigg v1:customers list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Customers.List',
        example:
          'CustomerListParams parameters = new();\n\nvar page = await client.V1.Customers.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Customers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Customers.List(context.TODO(), stigg.V1CustomerListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/customers \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerListPage;\nimport io.stigg.models.v1.customers.CustomerListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerListPage page = client.v1().customers().list();\n    }\n}',
      },
      python: {
        method: 'v1.customers.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.customers.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.customers.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.customers.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.customers.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const customerListResponse of client.v1.customers.list()) {\n  console.log(customerListResponse.id);\n}",
      },
    },
  },
  {
    name: 'provision',
    endpoint: '/api/v1/customers',
    httpMethod: 'post',
    summary: 'Provision customer',
    description:
      'Creates a new customer and optionally provisions an initial subscription in a single operation.',
    stainlessPath: '(resource) v1.customers > (method) provision',
    qualified: 'client.v1.customers.provision',
    params: [
      'id: string;',
      'billingCurrency?: string;',
      'billingId?: string;',
      "couponId?: string | '';",
      "defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; };",
      'email?: string;',
      'integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[];',
      'language?: string;',
      'metadata?: object;',
      'name?: string;',
      'passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; };',
      'timezone?: string;',
    ],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## provision\n\n`client.v1.customers.provision(id: string, billingCurrency?: string, billingId?: string, couponId?: string | '', defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }, email?: string, integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[], language?: string, metadata?: object, name?: string, passthrough?: { stripe?: { billingAddress?: object; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: object; taxIds?: object[]; }; zuora?: { billingAddress?: object; currency?: string; metadata?: object; paymentMethodId?: string; }; }, timezone?: string): { data: object; }`\n\n**post** `/api/v1/customers`\n\nCreates a new customer and optionally provisions an initial subscription in a single operation.\n\n### Parameters\n\n- `id: string`\n  Customer slug\n\n- `billingCurrency?: string`\n  The billing currency of the customer\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `couponId?: string | ''`\n  Customer level coupon\n\n- `defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }`\n  The default payment method details\n  - `billingId: string`\n    The default payment method id\n  - `cardExpiryMonth: number`\n    The expiration month of the default payment method\n  - `cardExpiryYear: number`\n    The expiration year of the default payment method\n  - `cardLast4Digits: string`\n    The last 4 digits of the default payment method\n  - `type: 'CARD' | 'BANK' | 'CASH_APP'`\n    The default payment method type\n\n- `email?: string`\n  The email of the customer\n\n- `integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]`\n  List of integrations\n\n- `language?: string`\n  Language to use for this customer\n\n- `metadata?: object`\n  Additional metadata\n\n- `name?: string`\n  The name of the customer\n\n- `passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }`\n  Vendor-specific billing passthrough fields.\n  - `stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }`\n    Stripe-specific billing fields for the customer.\n  - `zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }`\n    Zuora-specific billing fields for the customer.\n\n- `timezone?: string`\n  Timezone to use for this customer\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.provision({ id: 'id' });\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'customers provision',
        example: "stigg v1:customers provision \\\n  --api-key 'My API Key' \\\n  --id id",
      },
      csharp: {
        method: 'V1.Customers.Provision',
        example:
          'CustomerProvisionParams parameters = new() { ID = "id" };\n\nvar customerResponse = await client.V1.Customers.Provision(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.Provision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.Provision(context.TODO(), stigg.V1CustomerProvisionParams{\n\t\tID: "id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id"\n        }\'',
      },
      java: {
        method: 'v1().customers().provision',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerProvisionParams;\nimport io.stigg.models.v1.customers.CustomerResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerProvisionParams params = CustomerProvisionParams.builder()\n            .id("id")\n            .build();\n        CustomerResponse customerResponse = client.v1().customers().provision(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.provision',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.provision(\n    id="id",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.provision',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.provision(id: "id")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.provision',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.provision({ id: 'id' });\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'archive',
    endpoint: '/api/v1/customers/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive customer',
    description:
      'Archives a customer, preventing new subscriptions. Optionally cancels existing subscriptions.',
    stainlessPath: '(resource) v1.customers > (method) archive',
    qualified: 'client.v1.customers.archive',
    params: ['id: string;'],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## archive\n\n`client.v1.customers.archive(id: string): { data: object; }`\n\n**post** `/api/v1/customers/{id}/archive`\n\nArchives a customer, preventing new subscriptions. Optionally cancels existing subscriptions.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.archive('x');\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'customers archive',
        example: "stigg v1:customers archive \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.Archive',
        example:
          'CustomerArchiveParams parameters = new() { ID = "x" };\n\nvar customerResponse = await client.V1.Customers.Archive(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.Archive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.Archive(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().archive',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerArchiveParams;\nimport io.stigg.models.v1.customers.CustomerResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerResponse customerResponse = client.v1().customers().archive("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.archive',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.archive(\n    "x",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.archive',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.archive("x")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.archive',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.archive('x');\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'unarchive',
    endpoint: '/api/v1/customers/{id}/unarchive',
    httpMethod: 'post',
    summary: 'Unarchive customer',
    description: 'Restores an archived customer, allowing them to create new subscriptions again.',
    stainlessPath: '(resource) v1.customers > (method) unarchive',
    qualified: 'client.v1.customers.unarchive',
    params: ['id: string;'],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## unarchive\n\n`client.v1.customers.unarchive(id: string): { data: object; }`\n\n**post** `/api/v1/customers/{id}/unarchive`\n\nRestores an archived customer, allowing them to create new subscriptions again.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.unarchive('x');\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'customers unarchive',
        example: "stigg v1:customers unarchive \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.Unarchive',
        example:
          'CustomerUnarchiveParams parameters = new() { ID = "x" };\n\nvar customerResponse = await client.V1.Customers.Unarchive(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.Unarchive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.Unarchive(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/unarchive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().unarchive',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerUnarchiveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerResponse customerResponse = client.v1().customers().unarchive("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.unarchive',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.unarchive(\n    "x",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.unarchive',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.unarchive("x")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.unarchive',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.unarchive('x');\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'import',
    endpoint: '/api/v1/customers/import',
    httpMethod: 'post',
    summary: 'Bulk import customers',
    description:
      'Imports multiple customers in bulk. Used for migrating customer data from external systems.',
    stainlessPath: '(resource) v1.customers > (method) import',
    qualified: 'client.v1.customers.import',
    params: [
      'customers: { id: string; email: string; name: string; billingId?: string; metadata?: object; paymentMethodId?: string; salesforceId?: string; updatedAt?: string; }[];',
      'integrationId?: string;',
    ],
    response: '{ data: { newCustomers: string[]; }; }',
    markdown:
      "## import\n\n`client.v1.customers.import(customers: { id: string; email: string; name: string; billingId?: string; metadata?: object; paymentMethodId?: string; salesforceId?: string; updatedAt?: string; }[], integrationId?: string): { data: object; }`\n\n**post** `/api/v1/customers/import`\n\nImports multiple customers in bulk. Used for migrating customer data from external systems.\n\n### Parameters\n\n- `customers: { id: string; email: string; name: string; billingId?: string; metadata?: object; paymentMethodId?: string; salesforceId?: string; updatedAt?: string; }[]`\n  List of customer objects to import\n\n- `integrationId?: string`\n  Integration details\n\n### Returns\n\n- `{ data: { newCustomers: string[]; }; }`\n  Response object\n\n  - `data: { newCustomers: string[]; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.customers.import({ customers: [{\n  id: 'id',\n  email: 'dev@stainless.com',\n  name: 'name',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'customers import',
        example:
          "stigg v1:customers import \\\n  --api-key 'My API Key' \\\n  --customer '{id: id, email: dev@stainless.com, name: name}'",
      },
      csharp: {
        method: 'V1.Customers.Import',
        example:
          'CustomerImportParams parameters = new()\n{\n    Customers =\n    [\n        new()\n        {\n            ID = "id",\n            Email = "dev@stainless.com",\n            Name = "name",\n            BillingID = "billingId",\n            Metadata = new Dictionary<string, string>() { { "foo", "string" } },\n            PaymentMethodID = "paymentMethodId",\n            SalesforceID = "salesforceId",\n            UpdatedAt = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n        },\n    ],\n};\n\nvar response = await client.V1.Customers.Import(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Customers.Import',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Customers.Import(context.TODO(), stigg.V1CustomerImportParams{\n\t\tCustomers: []stigg.V1CustomerImportParamsCustomer{{\n\t\t\tID:    "id",\n\t\t\tEmail: stigg.String("dev@stainless.com"),\n\t\t\tName:  stigg.String("name"),\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/import \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "customers": [\n            {\n              "id": "id",\n              "email": "dev@stainless.com",\n              "name": "name"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().customers().import_',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerImportParams;\nimport io.stigg.models.v1.customers.CustomerImportResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerImportParams params = CustomerImportParams.builder()\n            .addCustomer(CustomerImportParams.Customer.builder()\n                .id("id")\n                .email("dev@stainless.com")\n                .name("name")\n                .build())\n            .build();\n        CustomerImportResponse response = client.v1().customers().import_(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.import_',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.customers.import_(\n    customers=[{\n        "id": "id",\n        "email": "dev@stainless.com",\n        "name": "name",\n    }],\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.customers.import',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.customers.import(customers: [{id: "id", email: "dev@stainless.com", name: "name"}])\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.customers.import',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.customers.import({\n  customers: [\n    {\n      id: 'id',\n      email: 'dev@stainless.com',\n      name: 'name',\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list_resources',
    endpoint: '/api/v1/customers/{id}/resources',
    httpMethod: 'get',
    summary: 'Get a list of customer resources',
    description: 'Retrieves a paginated list of resources within the same customer.',
    stainlessPath: '(resource) v1.customers > (method) list_resources',
    qualified: 'client.v1.customers.listResources',
    params: ['id: string;', 'after?: string;', 'before?: string;', 'limit?: number;'],
    response: '{ id: string; createdAt: string; updatedAt: string; }',
    markdown:
      "## list_resources\n\n`client.v1.customers.listResources(id: string, after?: string, before?: string, limit?: number): { id: string; createdAt: string; updatedAt: string; }`\n\n**get** `/api/v1/customers/{id}/resources`\n\nRetrieves a paginated list of resources within the same customer.\n\n### Parameters\n\n- `id: string`\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; createdAt: string; updatedAt: string; }`\n  Resource object that belongs to a customer\n\n  - `id: string`\n  - `createdAt: string`\n  - `updatedAt: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const customerListResourcesResponse of client.v1.customers.listResources('x')) {\n  console.log(customerListResourcesResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'customers list_resources',
        example: "stigg v1:customers list-resources \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.ListResources',
        example:
          'CustomerListResourcesParams parameters = new() { ID = "x" };\n\nvar page = await client.V1.Customers.ListResources(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Customers.ListResources',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Customers.ListResources(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerListResourcesParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/resources \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().listResources',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerListResourcesPage;\nimport io.stigg.models.v1.customers.CustomerListResourcesParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerListResourcesPage page = client.v1().customers().listResources("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.list_resources',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.customers.list_resources(\n    id="x",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.customers.list_resources',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.customers.list_resources("x")\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.customers.listResources',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const customerListResourcesResponse of client.v1.customers.listResources('x')) {\n  console.log(customerListResourcesResponse.id);\n}",
      },
    },
  },
  {
    name: 'retrieve_entitlements',
    endpoint: '/api/v1/customers/{id}/entitlements',
    httpMethod: 'get',
    summary: 'Get entitlements state',
    description:
      'Retrieves the effective entitlements for a customer or resource, including feature and credit entitlements.',
    stainlessPath: '(resource) v1.customers > (method) retrieve_entitlements',
    qualified: 'client.v1.customers.retrieveEntitlements',
    params: ['id: string;', 'resourceId?: string;'],
    response:
      "{ data: { accessDeniedReason: 'CustomerNotFound' | 'NoActiveSubscription' | 'CustomerIsArchived'; entitlements: { accessDeniedReason: string; isGranted: boolean; type: 'FEATURE'; currentUsage?: number; entitlementUpdatedAt?: string; feature?: object; hasUnlimitedUsage?: boolean; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; usagePeriodAnchor?: string; usagePeriodEnd?: string; usagePeriodStart?: string; validUntil?: string; } | { accessDeniedReason: string; currency: object; currentUsage: number; isGranted: boolean; type: 'CREDIT'; usageLimit: number; usageUpdatedAt: string; entitlementUpdatedAt?: string; usagePeriodEnd?: string; validUntil?: string; }[]; }; }",
    markdown:
      "## retrieve_entitlements\n\n`client.v1.customers.retrieveEntitlements(id: string, resourceId?: string): { data: object; }`\n\n**get** `/api/v1/customers/{id}/entitlements`\n\nRetrieves the effective entitlements for a customer or resource, including feature and credit entitlements.\n\n### Parameters\n\n- `id: string`\n\n- `resourceId?: string`\n  Resource ID to scope entitlements to a specific resource\n\n### Returns\n\n- `{ data: { accessDeniedReason: 'CustomerNotFound' | 'NoActiveSubscription' | 'CustomerIsArchived'; entitlements: { accessDeniedReason: string; isGranted: boolean; type: 'FEATURE'; currentUsage?: number; entitlementUpdatedAt?: string; feature?: object; hasUnlimitedUsage?: boolean; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; usagePeriodAnchor?: string; usagePeriodEnd?: string; usagePeriodStart?: string; validUntil?: string; } | { accessDeniedReason: string; currency: object; currentUsage: number; isGranted: boolean; type: 'CREDIT'; usageLimit: number; usageUpdatedAt: string; entitlementUpdatedAt?: string; usagePeriodEnd?: string; validUntil?: string; }[]; }; }`\n  Response object\n\n  - `data: { accessDeniedReason: 'CustomerNotFound' | 'NoActiveSubscription' | 'CustomerIsArchived'; entitlements: { accessDeniedReason: string; isGranted: boolean; type: 'FEATURE'; currentUsage?: number; entitlementUpdatedAt?: string; feature?: { id: string; displayName: string; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; }; hasUnlimitedUsage?: boolean; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; usagePeriodAnchor?: string; usagePeriodEnd?: string; usagePeriodStart?: string; validUntil?: string; } | { accessDeniedReason: string; currency: { currencyId: string; displayName: string; description?: string; metadata?: object; unitPlural?: string; unitSingular?: string; }; currentUsage: number; isGranted: boolean; type: 'CREDIT'; usageLimit: number; usageUpdatedAt: string; entitlementUpdatedAt?: string; usagePeriodEnd?: string; validUntil?: string; }[]; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.customers.retrieveEntitlements('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'customers retrieve_entitlements',
        example: "stigg v1:customers retrieve-entitlements \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.RetrieveEntitlements',
        example:
          'CustomerRetrieveEntitlementsParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Customers.RetrieveEntitlements(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Customers.GetEntitlements',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Customers.GetEntitlements(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerGetEntitlementsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/entitlements \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().retrieveEntitlements',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerRetrieveEntitlementsParams;\nimport io.stigg.models.v1.customers.CustomerRetrieveEntitlementsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerRetrieveEntitlementsResponse response = client.v1().customers().retrieveEntitlements("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.retrieve_entitlements',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.customers.retrieve_entitlements(\n    id="x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.customers.retrieve_entitlements',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.customers.retrieve_entitlements("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.customers.retrieveEntitlements',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.customers.retrieveEntitlements('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'attach',
    endpoint: '/api/v1/customers/{id}/payment-method',
    httpMethod: 'post',
    summary: 'Attach payment method',
    description:
      'Attaches a payment method to a customer for billing. Required for paid subscriptions when integrated with a billing provider.',
    stainlessPath: '(resource) v1.customers.payment_method > (method) attach',
    qualified: 'client.v1.customers.paymentMethod.attach',
    params: [
      'id: string;',
      'integrationId: string;',
      'paymentMethodId: string;',
      'vendorIdentifier: string;',
      'billingCurrency?: string;',
    ],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## attach\n\n`client.v1.customers.paymentMethod.attach(id: string, integrationId: string, paymentMethodId: string, vendorIdentifier: string, billingCurrency?: string): { data: object; }`\n\n**post** `/api/v1/customers/{id}/payment-method`\n\nAttaches a payment method to a customer for billing. Required for paid subscriptions when integrated with a billing provider.\n\n### Parameters\n\n- `id: string`\n\n- `integrationId: string`\n  Integration details\n\n- `paymentMethodId: string`\n  Billing provider payment method id\n\n- `vendorIdentifier: string`\n  The vendor identifier of integration\n\n- `billingCurrency?: string`\n  Customers selected currency\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.paymentMethod.attach('x', {\n  integrationId: 'integrationId',\n  paymentMethodId: 'paymentMethodId',\n  vendorIdentifier: 'AUTH0',\n});\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'payment_method attach',
        example:
          "stigg v1:customers:payment-method attach \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --integration-id integrationId \\\n  --payment-method-id paymentMethodId \\\n  --vendor-identifier AUTH0",
      },
      csharp: {
        method: 'V1.Customers.PaymentMethod.Attach',
        example:
          'PaymentMethodAttachParams parameters = new()\n{\n    ID = "x",\n    IntegrationID = "integrationId",\n    PaymentMethodID = "paymentMethodId",\n    VendorIdentifier = VendorIdentifier.Auth0,\n};\n\nvar customerResponse = await client.V1.Customers.PaymentMethod.Attach(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.PaymentMethod.Attach',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.PaymentMethod.Attach(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerPaymentMethodAttachParams{\n\t\t\tIntegrationID:    "integrationId",\n\t\t\tPaymentMethodID:  "paymentMethodId",\n\t\t\tVendorIdentifier: stigg.V1CustomerPaymentMethodAttachParamsVendorIdentifierAuth0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/payment-method \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "integrationId": "integrationId",\n          "paymentMethodId": "paymentMethodId",\n          "vendorIdentifier": "AUTH0"\n        }\'',
      },
      java: {
        method: 'v1().customers().paymentMethod().attach',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.paymentmethod.PaymentMethodAttachParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PaymentMethodAttachParams params = PaymentMethodAttachParams.builder()\n            .id("x")\n            .integrationId("integrationId")\n            .paymentMethodId("paymentMethodId")\n            .vendorIdentifier(PaymentMethodAttachParams.VendorIdentifier.AUTH0)\n            .build();\n        CustomerResponse customerResponse = client.v1().customers().paymentMethod().attach(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.payment_method.attach',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.payment_method.attach(\n    id="x",\n    integration_id="integrationId",\n    payment_method_id="paymentMethodId",\n    vendor_identifier="AUTH0",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.payment_method.attach',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.payment_method.attach(\n  "x",\n  integration_id: "integrationId",\n  payment_method_id: "paymentMethodId",\n  vendor_identifier: :AUTH0\n)\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.paymentMethod.attach',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.paymentMethod.attach('x', {\n  integrationId: 'integrationId',\n  paymentMethodId: 'paymentMethodId',\n  vendorIdentifier: 'AUTH0',\n});\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'detach',
    endpoint: '/api/v1/customers/{id}/payment-method',
    httpMethod: 'delete',
    summary: 'Detach payment method',
    description:
      'Removes the payment method from a customer. Ensure active paid subscriptions have an alternative payment method.',
    stainlessPath: '(resource) v1.customers.payment_method > (method) detach',
    qualified: 'client.v1.customers.paymentMethod.detach',
    params: ['id: string;'],
    response:
      "{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }",
    markdown:
      "## detach\n\n`client.v1.customers.paymentMethod.detach(id: string): { data: object; }`\n\n**delete** `/api/v1/customers/{id}/payment-method`\n\nRemoves the payment method from a customer. Ensure active paid subscriptions have an alternative payment method.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: object; zuora?: object; }; timezone?: string; }; }`\n  Response object\n\n  - `data: { id: string; archivedAt: string; createdAt: string; updatedAt: string; billingCurrency?: string; billingId?: string; couponId?: string | ''; defaultPaymentMethod?: { billingId: string; cardExpiryMonth: number; cardExpiryYear: number; cardLast4Digits: string; type: 'CARD' | 'BANK' | 'CASH_APP'; }; email?: string; integrations?: { id: string; syncedEntityId: string; vendorIdentifier: string; }[]; language?: string; metadata?: object; name?: string; passthrough?: { stripe?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; customerName?: string; invoiceCustomFields?: object; metadata?: object; paymentMethodId?: string; shippingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; taxIds?: { type: string; value: string; }[]; }; zuora?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; currency?: string; metadata?: object; paymentMethodId?: string; }; }; timezone?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst customerResponse = await client.v1.customers.paymentMethod.detach('x');\n\nconsole.log(customerResponse);\n```",
    perLanguage: {
      cli: {
        method: 'payment_method detach',
        example: "stigg v1:customers:payment-method detach \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.PaymentMethod.Detach',
        example:
          'PaymentMethodDetachParams parameters = new() { ID = "x" };\n\nvar customerResponse = await client.V1.Customers.PaymentMethod.Detach(parameters);\n\nConsole.WriteLine(customerResponse);',
      },
      go: {
        method: 'client.V1.Customers.PaymentMethod.Detach',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerResponse, err := client.V1.Customers.PaymentMethod.Detach(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/payment-method \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().paymentMethod().detach',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.paymentmethod.PaymentMethodDetachParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CustomerResponse customerResponse = client.v1().customers().paymentMethod().detach("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.payment_method.detach',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_response = client.v1.customers.payment_method.detach(\n    "x",\n)\nprint(customer_response.data)',
      },
      ruby: {
        method: 'v1.customers.payment_method.detach',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncustomer_response = stigg.v1.customers.payment_method.detach("x")\n\nputs(customer_response)',
      },
      typescript: {
        method: 'client.v1.customers.paymentMethod.detach',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.paymentMethod.detach('x');\n\nconsole.log(customerResponse.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/customers/{id}/promotional-entitlements',
    httpMethod: 'get',
    summary: 'Get a list of promotional entitlements',
    description: "Retrieves a paginated list of a customer's promotional entitlements.",
    stainlessPath: '(resource) v1.customers.promotional_entitlements > (method) list',
    qualified: 'client.v1.customers.promotionalEntitlements.list',
    params: [
      'id: string;',
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'limit?: number;',
      'status?: string;',
    ],
    response:
      "{ id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }",
    markdown:
      "## list\n\n`client.v1.customers.promotionalEntitlements.list(id: string, after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, limit?: number, status?: string): { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: object | object | object; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }`\n\n**get** `/api/v1/customers/{id}/promotional-entitlements`\n\nRetrieves a paginated list of a customer's promotional entitlements.\n\n### Parameters\n\n- `id: string`\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `status?: string`\n  Filter by promotional entitlement status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }`\n  Granted feature entitlement\n\n  - `id: string`\n  - `createdAt: string`\n  - `description: string`\n  - `endDate: string`\n  - `enumValues: string[]`\n  - `environmentId: string`\n  - `featureGroupIds: string[]`\n  - `featureId: string`\n  - `hasSoftLimit: boolean`\n  - `hasUnlimitedUsage: boolean`\n  - `isVisible: boolean`\n  - `period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'`\n  - `resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'`\n  - `resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }`\n  - `startDate: string`\n  - `status: 'Active' | 'Expired' | 'Paused'`\n  - `updatedAt: string`\n  - `usageLimit: number`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const promotionalEntitlementListResponse of client.v1.customers.promotionalEntitlements.list('x')) {\n  console.log(promotionalEntitlementListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'promotional_entitlements list',
        example: "stigg v1:customers:promotional-entitlements list \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.PromotionalEntitlements.List',
        example:
          'PromotionalEntitlementListParams parameters = new() { ID = "x" };\n\nvar page = await client.V1.Customers.PromotionalEntitlements.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Customers.PromotionalEntitlements.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Customers.PromotionalEntitlements.List(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerPromotionalEntitlementListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/promotional-entitlements \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().promotionalEntitlements().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementListPage;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PromotionalEntitlementListPage page = client.v1().customers().promotionalEntitlements().list("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.promotional_entitlements.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.customers.promotional_entitlements.list(\n    id="x",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.customers.promotional_entitlements.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.customers.promotional_entitlements.list("x")\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.customers.promotionalEntitlements.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const promotionalEntitlementListResponse of client.v1.customers.promotionalEntitlements.list(\n  'x',\n)) {\n  console.log(promotionalEntitlementListResponse.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/customers/{id}/promotional-entitlements',
    httpMethod: 'post',
    summary: 'Create a promotional entitlements',
    description:
      'Grants promotional entitlements to a customer, providing feature access outside their subscription. Entitlements can be time-limited or permanent.',
    stainlessPath: '(resource) v1.customers.promotional_entitlements > (method) create',
    qualified: 'client.v1.customers.promotionalEntitlements.create',
    params: [
      'id: string;',
      "promotionalEntitlements: { customEndDate: string; enumValues: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit: number; weeklyResetPeriodConfiguration: { accordingTo: string; }; yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; }; }[];",
    ],
    response:
      "{ data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }[]; }",
    markdown:
      "## create\n\n`client.v1.customers.promotionalEntitlements.create(id: string, promotionalEntitlements: { customEndDate: string; enumValues: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit: number; weeklyResetPeriodConfiguration: { accordingTo: string; }; yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; }; }[]): { data: object[]; }`\n\n**post** `/api/v1/customers/{id}/promotional-entitlements`\n\nGrants promotional entitlements to a customer, providing feature access outside their subscription. Entitlements can be time-limited or permanent.\n\n### Parameters\n\n- `id: string`\n\n- `promotionalEntitlements: { customEndDate: string; enumValues: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit: number; weeklyResetPeriodConfiguration: { accordingTo: string; }; yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; }; }[]`\n  Promotional entitlements to grant\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }[]; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }[]`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst promotionalEntitlement = await client.v1.customers.promotionalEntitlements.create('x', { promotionalEntitlements: [{\n  customEndDate: '2019-12-27T18:11:19.117Z',\n  enumValues: ['string'],\n  featureId: 'featureId',\n  hasSoftLimit: true,\n  hasUnlimitedUsage: true,\n  isVisible: true,\n  monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n  period: '1 week',\n  resetPeriod: 'YEAR',\n  usageLimit: -9007199254740991,\n  weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n  yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n}] });\n\nconsole.log(promotionalEntitlement);\n```",
    perLanguage: {
      cli: {
        method: 'promotional_entitlements create',
        example:
          "stigg v1:customers:promotional-entitlements create \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --promotional-entitlement \"{customEndDate: '2019-12-27T18:11:19.117Z', enumValues: [string], featureId: featureId, hasSoftLimit: true, hasUnlimitedUsage: true, isVisible: true, monthlyResetPeriodConfiguration: {accordingTo: SubscriptionStart}, period: 1 week, resetPeriod: YEAR, usageLimit: -9007199254740991, weeklyResetPeriodConfiguration: {accordingTo: SubscriptionStart}, yearlyResetPeriodConfiguration: {accordingTo: SubscriptionStart}}\"",
      },
      csharp: {
        method: 'V1.Customers.PromotionalEntitlements.Create',
        example:
          'PromotionalEntitlementCreateParams parameters = new()\n{\n    ID = "x",\n    PromotionalEntitlements =\n    [\n        new()\n        {\n            CustomEndDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n            EnumValues =\n            [\n                "string"\n            ],\n            FeatureID = "featureId",\n            HasSoftLimit = true,\n            HasUnlimitedUsage = true,\n            IsVisible = true,\n            MonthlyResetPeriodConfiguration = new(\n                AccordingTo.SubscriptionStart\n            ),\n            Period = Period.1Week,\n            ResetPeriod = ResetPeriod.Year,\n            UsageLimit = -9007199254740991,\n            WeeklyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n            YearlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        },\n    ],\n};\n\nvar promotionalEntitlement = await client.V1.Customers.PromotionalEntitlements.Create(parameters);\n\nConsole.WriteLine(promotionalEntitlement);',
      },
      go: {
        method: 'client.V1.Customers.PromotionalEntitlements.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpromotionalEntitlement, err := client.V1.Customers.PromotionalEntitlements.New(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerPromotionalEntitlementNewParams{\n\t\t\tPromotionalEntitlements: []stigg.V1CustomerPromotionalEntitlementNewParamsPromotionalEntitlement{{\n\t\t\t\tCustomEndDate:     stigg.Time(time.Now()),\n\t\t\t\tEnumValues:        []string{"string"},\n\t\t\t\tFeatureID:         "featureId",\n\t\t\t\tHasSoftLimit:      stigg.Bool(true),\n\t\t\t\tHasUnlimitedUsage: stigg.Bool(true),\n\t\t\t\tIsVisible:         stigg.Bool(true),\n\t\t\t\tMonthlyResetPeriodConfiguration: stigg.V1CustomerPromotionalEntitlementNewParamsPromotionalEntitlementMonthlyResetPeriodConfiguration{\n\t\t\t\t\tAccordingTo: "SubscriptionStart",\n\t\t\t\t},\n\t\t\t\tPeriod:      "1 week",\n\t\t\t\tResetPeriod: "YEAR",\n\t\t\t\tUsageLimit:  stigg.Int(-9007199254740991),\n\t\t\t\tWeeklyResetPeriodConfiguration: stigg.V1CustomerPromotionalEntitlementNewParamsPromotionalEntitlementWeeklyResetPeriodConfiguration{\n\t\t\t\t\tAccordingTo: "SubscriptionStart",\n\t\t\t\t},\n\t\t\t\tYearlyResetPeriodConfiguration: stigg.V1CustomerPromotionalEntitlementNewParamsPromotionalEntitlementYearlyResetPeriodConfiguration{\n\t\t\t\t\tAccordingTo: "SubscriptionStart",\n\t\t\t\t},\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", promotionalEntitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/promotional-entitlements \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "promotionalEntitlements": [\n            {\n              "customEndDate": "2019-12-27T18:11:19.117Z",\n              "enumValues": [\n                "string"\n              ],\n              "featureId": "featureId",\n              "hasSoftLimit": true,\n              "hasUnlimitedUsage": true,\n              "isVisible": true,\n              "monthlyResetPeriodConfiguration": {\n                "accordingTo": "SubscriptionStart"\n              },\n              "period": "1 week",\n              "resetPeriod": "YEAR",\n              "usageLimit": -9007199254740991,\n              "weeklyResetPeriodConfiguration": {\n                "accordingTo": "SubscriptionStart"\n              },\n              "yearlyResetPeriodConfiguration": {\n                "accordingTo": "SubscriptionStart"\n              }\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().customers().promotionalEntitlements().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementCreateParams;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementCreateResponse;\nimport java.time.OffsetDateTime;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PromotionalEntitlementCreateParams params = PromotionalEntitlementCreateParams.builder()\n            .id("x")\n            .addPromotionalEntitlement(PromotionalEntitlementCreateParams.PromotionalEntitlement.builder()\n                .customEndDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n                .addEnumValue("string")\n                .featureId("featureId")\n                .hasSoftLimit(true)\n                .hasUnlimitedUsage(true)\n                .isVisible(true)\n                .monthlyResetPeriodConfiguration(PromotionalEntitlementCreateParams.PromotionalEntitlement.MonthlyResetPeriodConfiguration.builder()\n                    .accordingTo(PromotionalEntitlementCreateParams.PromotionalEntitlement.MonthlyResetPeriodConfiguration.AccordingTo.SUBSCRIPTION_START)\n                    .build())\n                .period(PromotionalEntitlementCreateParams.PromotionalEntitlement.Period._1_WEEK)\n                .resetPeriod(PromotionalEntitlementCreateParams.PromotionalEntitlement.ResetPeriod.YEAR)\n                .usageLimit(-9007199254740991L)\n                .weeklyResetPeriodConfiguration(PromotionalEntitlementCreateParams.PromotionalEntitlement.WeeklyResetPeriodConfiguration.builder()\n                    .accordingTo(PromotionalEntitlementCreateParams.PromotionalEntitlement.WeeklyResetPeriodConfiguration.AccordingTo.SUBSCRIPTION_START)\n                    .build())\n                .yearlyResetPeriodConfiguration(PromotionalEntitlementCreateParams.PromotionalEntitlement.YearlyResetPeriodConfiguration.builder()\n                    .accordingTo(PromotionalEntitlementCreateParams.PromotionalEntitlement.YearlyResetPeriodConfiguration.AccordingTo.SUBSCRIPTION_START)\n                    .build())\n                .build())\n            .build();\n        PromotionalEntitlementCreateResponse promotionalEntitlement = client.v1().customers().promotionalEntitlements().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.promotional_entitlements.create',
        example:
          'import os\nfrom datetime import datetime\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npromotional_entitlement = client.v1.customers.promotional_entitlements.create(\n    id="x",\n    promotional_entitlements=[{\n        "custom_end_date": datetime.fromisoformat("2019-12-27T18:11:19.117"),\n        "enum_values": ["string"],\n        "feature_id": "featureId",\n        "has_soft_limit": True,\n        "has_unlimited_usage": True,\n        "is_visible": True,\n        "monthly_reset_period_configuration": {\n            "according_to": "SubscriptionStart"\n        },\n        "period": "1 week",\n        "reset_period": "YEAR",\n        "usage_limit": -9007199254740991,\n        "weekly_reset_period_configuration": {\n            "according_to": "SubscriptionStart"\n        },\n        "yearly_reset_period_configuration": {\n            "according_to": "SubscriptionStart"\n        },\n    }],\n)\nprint(promotional_entitlement.data)',
      },
      ruby: {
        method: 'v1.customers.promotional_entitlements.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npromotional_entitlement = stigg.v1.customers.promotional_entitlements.create(\n  "x",\n  promotional_entitlements: [\n    {\n      customEndDate: "2019-12-27T18:11:19.117Z",\n      enumValues: ["string"],\n      featureId: "featureId",\n      hasSoftLimit: true,\n      hasUnlimitedUsage: true,\n      isVisible: true,\n      monthlyResetPeriodConfiguration: {accordingTo: :SubscriptionStart},\n      period: :"1 week",\n      resetPeriod: :YEAR,\n      usageLimit: -9007199254740991,\n      weeklyResetPeriodConfiguration: {accordingTo: :SubscriptionStart},\n      yearlyResetPeriodConfiguration: {accordingTo: :SubscriptionStart}\n    }\n  ]\n)\n\nputs(promotional_entitlement)',
      },
      typescript: {
        method: 'client.v1.customers.promotionalEntitlements.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst promotionalEntitlement = await client.v1.customers.promotionalEntitlements.create('x', {\n  promotionalEntitlements: [\n    {\n      customEndDate: '2019-12-27T18:11:19.117Z',\n      enumValues: ['string'],\n      featureId: 'featureId',\n      hasSoftLimit: true,\n      hasUnlimitedUsage: true,\n      isVisible: true,\n      monthlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n      period: '1 week',\n      resetPeriod: 'YEAR',\n      usageLimit: -9007199254740991,\n      weeklyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n      yearlyResetPeriodConfiguration: { accordingTo: 'SubscriptionStart' },\n    },\n  ],\n});\n\nconsole.log(promotionalEntitlement.data);",
      },
    },
  },
  {
    name: 'revoke',
    endpoint: '/api/v1/customers/{id}/promotional-entitlements/{featureId}',
    httpMethod: 'delete',
    summary: 'Revoke promotional entitlement',
    description:
      'Revokes a previously granted promotional entitlement from a customer for a specific feature.',
    stainlessPath: '(resource) v1.customers.promotional_entitlements > (method) revoke',
    qualified: 'client.v1.customers.promotionalEntitlements.revoke',
    params: ['id: string;', 'featureId: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }; }",
    markdown:
      "## revoke\n\n`client.v1.customers.promotionalEntitlements.revoke(id: string, featureId: string): { data: object; }`\n\n**delete** `/api/v1/customers/{id}/promotional-entitlements/{featureId}`\n\nRevokes a previously granted promotional entitlement from a customer for a specific feature.\n\n### Parameters\n\n- `id: string`\n\n- `featureId: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; endDate: string; enumValues: string[]; environmentId: string; featureGroupIds: string[]; featureId: string; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; isVisible: boolean; period: '1 week' | '1 month' | '6 month' | '1 year' | 'lifetime' | 'custom'; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; startDate: string; status: 'Active' | 'Expired' | 'Paused'; updatedAt: string; usageLimit: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.customers.promotionalEntitlements.revoke('featureId', { id: 'id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'promotional_entitlements revoke',
        example:
          "stigg v1:customers:promotional-entitlements revoke \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --feature-id featureId",
      },
      csharp: {
        method: 'V1.Customers.PromotionalEntitlements.Revoke',
        example:
          'PromotionalEntitlementRevokeParams parameters = new()\n{\n    ID = "id",\n    FeatureID = "featureId",\n};\n\nvar response = await client.V1.Customers.PromotionalEntitlements.Revoke(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Customers.PromotionalEntitlements.Revoke',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Customers.PromotionalEntitlements.Revoke(\n\t\tcontext.TODO(),\n\t\t"featureId",\n\t\tstigg.V1CustomerPromotionalEntitlementRevokeParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/promotional-entitlements/$FEATURE_ID \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().promotionalEntitlements().revoke',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementRevokeParams;\nimport io.stigg.models.v1.customers.promotionalentitlements.PromotionalEntitlementRevokeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PromotionalEntitlementRevokeParams params = PromotionalEntitlementRevokeParams.builder()\n            .id("id")\n            .featureId("featureId")\n            .build();\n        PromotionalEntitlementRevokeResponse response = client.v1().customers().promotionalEntitlements().revoke(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.promotional_entitlements.revoke',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.customers.promotional_entitlements.revoke(\n    feature_id="featureId",\n    id="id",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.customers.promotional_entitlements.revoke',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.customers.promotional_entitlements.revoke("featureId", id: "id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.customers.promotionalEntitlements.revoke',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.customers.promotionalEntitlements.revoke('featureId', {\n  id: 'id',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/customers/{id}/integrations',
    httpMethod: 'get',
    summary: 'Get a list of customer integrations',
    description: "Retrieves a paginated list of a customer's external integrations (billing, CRM, etc.).",
    stainlessPath: '(resource) v1.customers.integrations > (method) list',
    qualified: 'client.v1.customers.integrations.list',
    params: [
      'id: string;',
      'after?: string;',
      'before?: string;',
      'limit?: number;',
      'vendorIdentifier?: string;',
    ],
    response:
      '{ id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }',
    markdown:
      "## list\n\n`client.v1.customers.integrations.list(id: string, after?: string, before?: string, limit?: number, vendorIdentifier?: string): { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: object | object | object; }`\n\n**get** `/api/v1/customers/{id}/integrations`\n\nRetrieves a paginated list of a customer's external integrations (billing, CRM, etc.).\n\n### Parameters\n\n- `id: string`\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `vendorIdentifier?: string`\n  Filter by vendor identifier. Supports comma-separated values for multiple vendors (e.g., STRIPE,HUBSPOT)\n\n### Returns\n\n- `{ id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }`\n  External billing or CRM integration link\n\n  - `id: string`\n  - `syncedEntityId: string`\n  - `vendorIdentifier: string`\n  - `syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const integrationListResponse of client.v1.customers.integrations.list('x')) {\n  console.log(integrationListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'integrations list',
        example: "stigg v1:customers:integrations list \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Customers.Integrations.List',
        example:
          'IntegrationListParams parameters = new() { ID = "x" };\n\nvar page = await client.V1.Customers.Integrations.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Customers.Integrations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Customers.Integrations.List(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerIntegrationListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/integrations \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().integrations().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.integrations.IntegrationListPage;\nimport io.stigg.models.v1.customers.integrations.IntegrationListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        IntegrationListPage page = client.v1().customers().integrations().list("x");\n    }\n}',
      },
      python: {
        method: 'v1.customers.integrations.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.customers.integrations.list(\n    id="x",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.customers.integrations.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.customers.integrations.list("x")\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.customers.integrations.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const integrationListResponse of client.v1.customers.integrations.list('x')) {\n  console.log(integrationListResponse.id);\n}",
      },
    },
  },
  {
    name: 'link',
    endpoint: '/api/v1/customers/{id}/integrations',
    httpMethod: 'post',
    summary: 'Link customer integration',
    description:
      'Links a customer to an external integration by specifying the vendor and external entity ID.',
    stainlessPath: '(resource) v1.customers.integrations > (method) link',
    qualified: 'client.v1.customers.integrations.link',
    params: ['id: string;', 'id: string;', 'syncedEntityId: string;', 'vendorIdentifier: string;'],
    response:
      '{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }',
    markdown:
      "## link\n\n`client.v1.customers.integrations.link(id: string, id: string, syncedEntityId: string, vendorIdentifier: string): { data: object; }`\n\n**post** `/api/v1/customers/{id}/integrations`\n\nLinks a customer to an external integration by specifying the vendor and external entity ID.\n\n### Parameters\n\n- `id: string`\n\n- `id: string`\n  Integration details\n\n- `syncedEntityId: string`\n  Synced entity id\n\n- `vendorIdentifier: string`\n  The vendor identifier of integration\n\n### Returns\n\n- `{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }`\n  Response object\n\n  - `data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.customers.integrations.link('x', {\n  id: 'id',\n  syncedEntityId: 'syncedEntityId',\n  vendorIdentifier: 'AUTH0',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'integrations link',
        example:
          "stigg v1:customers:integrations link \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --id id \\\n  --synced-entity-id syncedEntityId \\\n  --vendor-identifier AUTH0",
      },
      csharp: {
        method: 'V1.Customers.Integrations.Link',
        example:
          'IntegrationLinkParams parameters = new()\n{\n    ID = "x",\n    ID = "id",\n    SyncedEntityID = "syncedEntityId",\n    VendorIdentifier = VendorIdentifier.Auth0,\n};\n\nvar response = await client.V1.Customers.Integrations.Link(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Customers.Integrations.Link',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Customers.Integrations.Link(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CustomerIntegrationLinkParams{\n\t\t\tID:               "id",\n\t\t\tSyncedEntityID:   "syncedEntityId",\n\t\t\tVendorIdentifier: stigg.V1CustomerIntegrationLinkParamsVendorIdentifierAuth0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/integrations \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "syncedEntityId": "syncedEntityId",\n          "vendorIdentifier": "AUTH0"\n        }\'',
      },
      java: {
        method: 'v1().customers().integrations().link',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.integrations.IntegrationLinkParams;\nimport io.stigg.models.v1.customers.integrations.IntegrationLinkResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        IntegrationLinkParams params = IntegrationLinkParams.builder()\n            .pathId("x")\n            .bodyId("id")\n            .syncedEntityId("syncedEntityId")\n            .vendorIdentifier(IntegrationLinkParams.VendorIdentifier.AUTH0)\n            .build();\n        IntegrationLinkResponse response = client.v1().customers().integrations().link(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.integrations.link',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.customers.integrations.link(\n    path_id="x",\n    body_id="id",\n    synced_entity_id="syncedEntityId",\n    vendor_identifier="AUTH0",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.customers.integrations.link',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.customers.integrations.link(\n  "x",\n  body_id: "id",\n  synced_entity_id: "syncedEntityId",\n  vendor_identifier: :AUTH0\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.customers.integrations.link',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.customers.integrations.link('x', {\n  id: 'id',\n  syncedEntityId: 'syncedEntityId',\n  vendorIdentifier: 'AUTH0',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/customers/{id}/integrations/{integrationId}',
    httpMethod: 'get',
    summary: 'Get a single customer integration by ID',
    description: 'Retrieves a specific integration for a customer by integration ID.',
    stainlessPath: '(resource) v1.customers.integrations > (method) retrieve',
    qualified: 'client.v1.customers.integrations.retrieve',
    params: ['id: string;', 'integrationId: string;'],
    response:
      '{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }',
    markdown:
      "## retrieve\n\n`client.v1.customers.integrations.retrieve(id: string, integrationId: string): { data: object; }`\n\n**get** `/api/v1/customers/{id}/integrations/{integrationId}`\n\nRetrieves a specific integration for a customer by integration ID.\n\n### Parameters\n\n- `id: string`\n\n- `integrationId: string`\n\n### Returns\n\n- `{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }`\n  Response object\n\n  - `data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst integration = await client.v1.customers.integrations.retrieve('integrationId', { id: 'id' });\n\nconsole.log(integration);\n```",
    perLanguage: {
      cli: {
        method: 'integrations retrieve',
        example:
          "stigg v1:customers:integrations retrieve \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --integration-id integrationId",
      },
      csharp: {
        method: 'V1.Customers.Integrations.Retrieve',
        example:
          'IntegrationRetrieveParams parameters = new()\n{\n    ID = "id",\n    IntegrationID = "integrationId",\n};\n\nvar integration = await client.V1.Customers.Integrations.Retrieve(parameters);\n\nConsole.WriteLine(integration);',
      },
      go: {
        method: 'client.V1.Customers.Integrations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tintegration, err := client.V1.Customers.Integrations.Get(\n\t\tcontext.TODO(),\n\t\t"integrationId",\n\t\tstigg.V1CustomerIntegrationGetParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", integration.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/integrations/$INTEGRATION_ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().integrations().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.integrations.IntegrationRetrieveParams;\nimport io.stigg.models.v1.customers.integrations.IntegrationRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        IntegrationRetrieveParams params = IntegrationRetrieveParams.builder()\n            .id("id")\n            .integrationId("integrationId")\n            .build();\n        IntegrationRetrieveResponse integration = client.v1().customers().integrations().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.integrations.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nintegration = client.v1.customers.integrations.retrieve(\n    integration_id="integrationId",\n    id="id",\n)\nprint(integration.data)',
      },
      ruby: {
        method: 'v1.customers.integrations.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nintegration = stigg.v1.customers.integrations.retrieve("integrationId", id: "id")\n\nputs(integration)',
      },
      typescript: {
        method: 'client.v1.customers.integrations.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst integration = await client.v1.customers.integrations.retrieve('integrationId', { id: 'id' });\n\nconsole.log(integration.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/customers/{id}/integrations/{integrationId}',
    httpMethod: 'patch',
    summary: 'Update a customer integration',
    description: "Updates a customer's integration link, such as changing the synced external entity ID.",
    stainlessPath: '(resource) v1.customers.integrations > (method) update',
    qualified: 'client.v1.customers.integrations.update',
    params: ['id: string;', 'integrationId: string;', 'syncedEntityId: string;'],
    response:
      '{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }',
    markdown:
      "## update\n\n`client.v1.customers.integrations.update(id: string, integrationId: string, syncedEntityId: string): { data: object; }`\n\n**patch** `/api/v1/customers/{id}/integrations/{integrationId}`\n\nUpdates a customer's integration link, such as changing the synced external entity ID.\n\n### Parameters\n\n- `id: string`\n\n- `integrationId: string`\n\n- `syncedEntityId: string`\n  Synced entity id\n\n### Returns\n\n- `{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }`\n  Response object\n\n  - `data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst integration = await client.v1.customers.integrations.update('integrationId', { id: 'id', syncedEntityId: 'syncedEntityId' });\n\nconsole.log(integration);\n```",
    perLanguage: {
      cli: {
        method: 'integrations update',
        example:
          "stigg v1:customers:integrations update \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --integration-id integrationId \\\n  --synced-entity-id syncedEntityId",
      },
      csharp: {
        method: 'V1.Customers.Integrations.Update',
        example:
          'IntegrationUpdateParams parameters = new()\n{\n    ID = "id",\n    IntegrationID = "integrationId",\n    SyncedEntityID = "syncedEntityId",\n};\n\nvar integration = await client.V1.Customers.Integrations.Update(parameters);\n\nConsole.WriteLine(integration);',
      },
      go: {
        method: 'client.V1.Customers.Integrations.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tintegration, err := client.V1.Customers.Integrations.Update(\n\t\tcontext.TODO(),\n\t\t"integrationId",\n\t\tstigg.V1CustomerIntegrationUpdateParams{\n\t\t\tID:             "id",\n\t\t\tSyncedEntityID: stigg.String("syncedEntityId"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", integration.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/integrations/$INTEGRATION_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "syncedEntityId": "syncedEntityId"\n        }\'',
      },
      java: {
        method: 'v1().customers().integrations().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.integrations.IntegrationUpdateParams;\nimport io.stigg.models.v1.customers.integrations.IntegrationUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        IntegrationUpdateParams params = IntegrationUpdateParams.builder()\n            .id("id")\n            .integrationId("integrationId")\n            .syncedEntityId("syncedEntityId")\n            .build();\n        IntegrationUpdateResponse integration = client.v1().customers().integrations().update(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.integrations.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nintegration = client.v1.customers.integrations.update(\n    integration_id="integrationId",\n    id="id",\n    synced_entity_id="syncedEntityId",\n)\nprint(integration.data)',
      },
      ruby: {
        method: 'v1.customers.integrations.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nintegration = stigg.v1.customers.integrations.update("integrationId", id: "id", synced_entity_id: "syncedEntityId")\n\nputs(integration)',
      },
      typescript: {
        method: 'client.v1.customers.integrations.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst integration = await client.v1.customers.integrations.update('integrationId', {\n  id: 'id',\n  syncedEntityId: 'syncedEntityId',\n});\n\nconsole.log(integration.data);",
      },
    },
  },
  {
    name: 'unlink',
    endpoint: '/api/v1/customers/{id}/integrations/{integrationId}',
    httpMethod: 'delete',
    summary: 'Unlink customer integration',
    description: 'Removes the link between a customer and an external integration.',
    stainlessPath: '(resource) v1.customers.integrations > (method) unlink',
    qualified: 'client.v1.customers.integrations.unlink',
    params: ['id: string;', 'integrationId: string;'],
    response:
      '{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }',
    markdown:
      "## unlink\n\n`client.v1.customers.integrations.unlink(id: string, integrationId: string): { data: object; }`\n\n**delete** `/api/v1/customers/{id}/integrations/{integrationId}`\n\nRemoves the link between a customer and an external integration.\n\n### Parameters\n\n- `id: string`\n\n- `integrationId: string`\n\n### Returns\n\n- `{ data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }; }`\n  Response object\n\n  - `data: { id: string; syncedEntityId: string; vendorIdentifier: string; syncData?: { billingId: string; billingLinkUrl: string; priceGroupPackageBillingId: string; } | { billingId: string; billingLinkUrl: string; } | { dimensions: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.customers.integrations.unlink('integrationId', { id: 'id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'integrations unlink',
        example:
          "stigg v1:customers:integrations unlink \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --integration-id integrationId",
      },
      csharp: {
        method: 'V1.Customers.Integrations.Unlink',
        example:
          'IntegrationUnlinkParams parameters = new()\n{\n    ID = "id",\n    IntegrationID = "integrationId",\n};\n\nvar response = await client.V1.Customers.Integrations.Unlink(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Customers.Integrations.Unlink',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Customers.Integrations.Unlink(\n\t\tcontext.TODO(),\n\t\t"integrationId",\n\t\tstigg.V1CustomerIntegrationUnlinkParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/customers/$ID/integrations/$INTEGRATION_ID \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().customers().integrations().unlink',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.integrations.IntegrationUnlinkParams;\nimport io.stigg.models.v1.customers.integrations.IntegrationUnlinkResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        IntegrationUnlinkParams params = IntegrationUnlinkParams.builder()\n            .id("id")\n            .integrationId("integrationId")\n            .build();\n        IntegrationUnlinkResponse response = client.v1().customers().integrations().unlink(params);\n    }\n}',
      },
      python: {
        method: 'v1.customers.integrations.unlink',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.customers.integrations.unlink(\n    integration_id="integrationId",\n    id="id",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.customers.integrations.unlink',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.customers.integrations.unlink("integrationId", id: "id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.customers.integrations.unlink',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.customers.integrations.unlink('integrationId', { id: 'id' });\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/subscriptions/{id}',
    httpMethod: 'get',
    summary: 'Get a single subscription by ID',
    description:
      'Retrieves a subscription by its unique identifier, including plan details, billing period, status, and add-ons.',
    stainlessPath: '(resource) v1.subscriptions > (method) retrieve',
    qualified: 'client.v1.subscriptions.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## retrieve\n\n`client.v1.subscriptions.retrieve(id: string): { data: object; }`\n\n**get** `/api/v1/subscriptions/{id}`\n\nRetrieves a subscription by its unique identifier, including plan details, billing period, status, and add-ons.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.retrieve('x');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example: "stigg v1:subscriptions retrieve \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Retrieve',
        example:
          'SubscriptionRetrieveParams parameters = new() { ID = "x" };\n\nvar subscription = await client.V1.Subscriptions.Retrieve(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/subscriptions/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Subscription subscription = client.v1().subscriptions().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.retrieve(\n    "x",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.retrieve("x")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.retrieve('x');\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/subscriptions',
    httpMethod: 'get',
    summary: 'Get a list of subscriptions',
    description:
      'Retrieves a paginated list of subscriptions, with optional filters for customer, status, and plan.',
    stainlessPath: '(resource) v1.subscriptions > (method) list',
    qualified: 'client.v1.subscriptions.list',
    params: [
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'customerId?: string;',
      'limit?: number;',
      'planId?: string;',
      'pricingType?: string;',
      'resourceId?: string;',
      'status?: string;',
    ],
    response:
      "{ id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }",
    markdown:
      "## list\n\n`client.v1.subscriptions.list(after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, customerId?: string, limit?: number, planId?: string, pricingType?: string, resourceId?: string, status?: string): { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }`\n\n**get** `/api/v1/subscriptions`\n\nRetrieves a paginated list of subscriptions, with optional filters for customer, status, and plan.\n\n### Parameters\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `customerId?: string`\n  Filter by customer ID\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `planId?: string`\n  Filter by plan ID\n\n- `pricingType?: string`\n  Filter by pricing type. Supports comma-separated values for multiple types\n\n- `resourceId?: string`\n  Filter by resource ID\n\n- `status?: string`\n  Filter by subscription status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n  Customer subscription to a plan\n\n  - `id: string`\n  - `billingId: string`\n  - `createdAt: string`\n  - `customerId: string`\n  - `paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'`\n  - `planId: string`\n  - `pricingType: 'FREE' | 'PAID' | 'CUSTOM'`\n  - `startDate: string`\n  - `status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'`\n  - `addons?: { id: string; quantity: number; }[]`\n  - `billingCycleAnchor?: string`\n  - `budget?: { hasSoftLimit: boolean; limit: number; }`\n  - `cancellationDate?: string`\n  - `cancelReason?: string`\n  - `coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]`\n  - `currentBillingPeriodEnd?: string`\n  - `currentBillingPeriodStart?: string`\n  - `effectiveEndDate?: string`\n  - `endDate?: string`\n  - `futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]`\n  - `latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }`\n  - `metadata?: object`\n  - `minimumSpend?: { amount?: number; currency?: string; }`\n  - `payingCustomerId?: string`\n  - `paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'`\n  - `prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]`\n  - `resourceId?: string`\n  - `subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]`\n  - `trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }`\n  - `trialEndDate?: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const subscriptionListResponse of client.v1.subscriptions.list()) {\n  console.log(subscriptionListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "stigg v1:subscriptions list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Subscriptions.List',
        example:
          'SubscriptionListParams parameters = new();\n\nvar page = await client.V1.Subscriptions.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Subscriptions.List(context.TODO(), stigg.V1SubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/subscriptions \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.SubscriptionListPage;\nimport io.stigg.models.v1.subscriptions.SubscriptionListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionListPage page = client.v1().subscriptions().list();\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.subscriptions.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.subscriptions.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.subscriptions.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.subscriptions.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const subscriptionListResponse of client.v1.subscriptions.list()) {\n  console.log(subscriptionListResponse.id);\n}",
      },
    },
  },
  {
    name: 'provision',
    endpoint: '/api/v1/subscriptions',
    httpMethod: 'post',
    summary: 'Provision subscription',
    description:
      'Creates a new subscription for an existing customer. When payment is required and no payment method exists, returns a checkout URL.',
    stainlessPath: '(resource) v1.subscriptions > (method) provision',
    qualified: 'client.v1.subscriptions.provision',
    params: [
      'customerId: string;',
      'planId: string;',
      'id?: string;',
      'addons?: { id: string; quantity: number; }[];',
      'appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; };',
      'awaitPaymentConfirmation?: boolean;',
      'billingCountryCode?: string;',
      "billingCycleAnchor?: 'UNCHANGED' | 'NOW';",
      'billingId?: string;',
      "billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; };",
      "billingPeriod?: 'MONTHLY' | 'ANNUALLY';",
      'budget?: { hasSoftLimit: boolean; limit: number; };',
      "charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[];",
      'checkoutOptions?: { cancelUrl: string; successUrl: string; allowPromoCodes?: boolean; allowTaxIdCollection?: boolean; collectBillingAddress?: boolean; collectPhoneNumber?: boolean; referenceId?: string; };',
      "entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[];",
      'metadata?: object;',
      'minimumSpend?: { amount?: number; currency?: string; };',
      'payingCustomerId?: string;',
      "paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE';",
      "priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[];",
      'resourceId?: string;',
      'salesforceId?: string;',
      "scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';",
      'startDate?: string;',
      "trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; };",
      'unitQuantity?: number;',
    ],
    response:
      "{ data: { id: string; entitlements: object | object[]; status: 'SUCCESS' | 'PAYMENT_REQUIRED'; subscription: object; checkoutBillingId?: string; checkoutUrl?: string; isScheduled?: boolean; }; }",
    markdown:
      "## provision\n\n`client.v1.subscriptions.provision(customerId: string, planId: string, id?: string, addons?: { id: string; quantity: number; }[], appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: object[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }, awaitPaymentConfirmation?: boolean, billingCountryCode?: string, billingCycleAnchor?: 'UNCHANGED' | 'NOW', billingId?: string, billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }, billingPeriod?: 'MONTHLY' | 'ANNUALLY', budget?: { hasSoftLimit: boolean; limit: number; }, charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[], checkoutOptions?: { cancelUrl: string; successUrl: string; allowPromoCodes?: boolean; allowTaxIdCollection?: boolean; collectBillingAddress?: boolean; collectPhoneNumber?: boolean; referenceId?: string; }, entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[], metadata?: object, minimumSpend?: { amount?: number; currency?: string; }, payingCustomerId?: string, paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE', priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; currency?: string; featureId?: string; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[], resourceId?: string, salesforceId?: string, scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE', startDate?: string, trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; }, unitQuantity?: number): { data: object; }`\n\n**post** `/api/v1/subscriptions`\n\nCreates a new subscription for an existing customer. When payment is required and no payment method exists, returns a checkout URL.\n\n### Parameters\n\n- `customerId: string`\n  Customer ID to provision the subscription for\n\n- `planId: string`\n  Plan ID to provision\n\n- `id?: string`\n  Unique identifier for the subscription\n\n- `addons?: { id: string; quantity: number; }[]`\n\n- `appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }`\n  Coupon configuration\n  - `billingCouponId?: string`\n    Billing provider coupon ID\n  - `configuration?: { startDate?: string; }`\n    Coupon timing configuration\n  - `couponId?: string`\n    Stigg coupon ID\n  - `discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }`\n    Ad-hoc discount configuration\n  - `promotionCode?: string`\n    Promotion code to apply\n\n- `awaitPaymentConfirmation?: boolean`\n  Whether to wait for payment confirmation before returning the subscription\n\n- `billingCountryCode?: string`\n  The ISO 3166-1 alpha-2 country code for billing\n\n- `billingCycleAnchor?: 'UNCHANGED' | 'NOW'`\n  Billing cycle anchor behavior for the subscription\n\n- `billingId?: string`\n  External billing system identifier\n\n- `billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }`\n  - `billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }`\n    Billing address for the subscription\n  - `chargeOnBehalfOfAccount?: string`\n    Stripe Connect account to charge on behalf of\n  - `integrationId?: string`\n    Billing integration identifier\n  - `invoiceDaysUntilDue?: number`\n    Number of days until invoice is due\n  - `isBackdated?: boolean`\n    Whether the subscription is backdated\n  - `isInvoicePaid?: boolean`\n    Whether the invoice is marked as paid\n  - `metadata?: object`\n    Additional metadata for the subscription\n  - `prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'`\n    How to handle proration for billing changes\n  - `taxIds?: { type: string; value: string; }[]`\n    Customer tax identification numbers\n  - `taxPercentage?: number`\n    Tax percentage (0-100)\n  - `taxRateIds?: string[]`\n    Tax rate identifiers to apply\n\n- `billingPeriod?: 'MONTHLY' | 'ANNUALLY'`\n  Billing period (MONTHLY or ANNUALLY)\n\n- `budget?: { hasSoftLimit: boolean; limit: number; }`\n  - `hasSoftLimit: boolean`\n    Whether the budget is a soft limit\n  - `limit: number`\n    Maximum spending limit\n\n- `charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]`\n\n- `checkoutOptions?: { cancelUrl: string; successUrl: string; allowPromoCodes?: boolean; allowTaxIdCollection?: boolean; collectBillingAddress?: boolean; collectPhoneNumber?: boolean; referenceId?: string; }`\n  Checkout page configuration for payment collection\n  - `cancelUrl: string`\n    URL to redirect to if checkout is canceled\n  - `successUrl: string`\n    URL to redirect to after successful checkout\n  - `allowPromoCodes?: boolean`\n    Allow promotional codes during checkout\n  - `allowTaxIdCollection?: boolean`\n    Allow tax ID collection during checkout\n  - `collectBillingAddress?: boolean`\n    Collect billing address during checkout\n  - `collectPhoneNumber?: boolean`\n    Collect phone number during checkout\n  - `referenceId?: string`\n    Optional reference ID for the checkout session\n\n- `entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[]`\n\n- `metadata?: object`\n  Additional metadata for the subscription\n\n- `minimumSpend?: { amount?: number; currency?: string; }`\n  Minimum spend amount\n  - `amount?: number`\n    The price amount\n  - `currency?: string`\n    The price currency\n\n- `payingCustomerId?: string`\n  Optional paying customer ID for split billing scenarios\n\n- `paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'`\n  How payments should be collected for this subscription\n\n- `priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]`\n\n- `resourceId?: string`\n  Optional resource ID for multi-instance subscriptions\n\n- `salesforceId?: string`\n  Salesforce ID\n\n- `scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE'`\n  Strategy for scheduling subscription changes\n\n- `startDate?: string`\n  Subscription start date\n\n- `trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; }`\n  Trial period override settings\n  - `isTrial: boolean`\n    Whether the subscription should start with a trial period\n  - `trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'`\n    Behavior when trial ends: CONVERT_TO_PAID or CANCEL_SUBSCRIPTION\n  - `trialEndDate?: string`\n    Custom trial end date\n\n- `unitQuantity?: number`\n  Unit quantity\n\n### Returns\n\n- `{ data: { id: string; entitlements: { accessDeniedReason: string; isGranted: boolean; type: 'FEATURE'; currentUsage?: number; entitlementUpdatedAt?: string; feature?: object; hasUnlimitedUsage?: boolean; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; usagePeriodAnchor?: string; usagePeriodEnd?: string; usagePeriodStart?: string; validUntil?: string; } | { accessDeniedReason: string; currency: object; currentUsage: number; isGranted: boolean; type: 'CREDIT'; usageLimit: number; usageUpdatedAt: string; entitlementUpdatedAt?: string; usagePeriodEnd?: string; validUntil?: string; }[]; status: 'SUCCESS' | 'PAYMENT_REQUIRED'; subscription: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; checkoutBillingId?: string; checkoutUrl?: string; isScheduled?: boolean; }; }`\n  Response object\n\n  - `data: { id: string; entitlements: { accessDeniedReason: string; isGranted: boolean; type: 'FEATURE'; currentUsage?: number; entitlementUpdatedAt?: string; feature?: { id: string; displayName: string; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; }; hasUnlimitedUsage?: boolean; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; usagePeriodAnchor?: string; usagePeriodEnd?: string; usagePeriodStart?: string; validUntil?: string; } | { accessDeniedReason: string; currency: { currencyId: string; displayName: string; description?: string; metadata?: object; unitPlural?: string; unitSingular?: string; }; currentUsage: number; isGranted: boolean; type: 'CREDIT'; usageLimit: number; usageUpdatedAt: string; entitlementUpdatedAt?: string; usagePeriodEnd?: string; validUntil?: string; }[]; status: 'SUCCESS' | 'PAYMENT_REQUIRED'; subscription: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; checkoutBillingId?: string; checkoutUrl?: string; isScheduled?: boolean; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.provision({ customerId: 'customerId', planId: 'planId' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions provision',
        example:
          "stigg v1:subscriptions provision \\\n  --api-key 'My API Key' \\\n  --customer-id customerId \\\n  --plan-id planId",
      },
      csharp: {
        method: 'V1.Subscriptions.Provision',
        example:
          'SubscriptionProvisionParams parameters = new()\n{\n    CustomerID = "customerId",\n    PlanID = "planId",\n};\n\nvar response = await client.V1.Subscriptions.Provision(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Provision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Provision(context.TODO(), stigg.V1SubscriptionProvisionParams{\n\t\tCustomerID: "customerId",\n\t\tPlanID:     "planId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "customerId": "customerId",\n          "planId": "planId"\n        }\'',
      },
      java: {
        method: 'v1().subscriptions().provision',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.SubscriptionProvisionParams;\nimport io.stigg.models.v1.subscriptions.SubscriptionProvisionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionProvisionParams params = SubscriptionProvisionParams.builder()\n            .customerId("customerId")\n            .planId("planId")\n            .build();\n        SubscriptionProvisionResponse response = client.v1().subscriptions().provision(params);\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.provision',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.provision(\n    customer_id="customerId",\n    plan_id="planId",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.provision',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.provision(customer_id: "customerId", plan_id: "planId")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.provision',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.provision({\n  customerId: 'customerId',\n  planId: 'planId',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'transfer',
    endpoint: '/api/v1/subscriptions/{id}/transfer',
    httpMethod: 'post',
    summary: 'Transfer subscription to resource',
    description:
      'Transfers a subscription to a different resource ID. Used for multi-resource products where subscriptions apply to specific entities like websites or apps.',
    stainlessPath: '(resource) v1.subscriptions > (method) transfer',
    qualified: 'client.v1.subscriptions.transfer',
    params: ['id: string;', 'destinationResourceId: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## transfer\n\n`client.v1.subscriptions.transfer(id: string, destinationResourceId: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/transfer`\n\nTransfers a subscription to a different resource ID. Used for multi-resource products where subscriptions apply to specific entities like websites or apps.\n\n### Parameters\n\n- `id: string`\n\n- `destinationResourceId: string`\n  Resource ID to transfer the subscription to\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.transfer('x', { destinationResourceId: 'destinationResourceId' });\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions transfer',
        example:
          "stigg v1:subscriptions transfer \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --destination-resource-id destinationResourceId",
      },
      csharp: {
        method: 'V1.Subscriptions.Transfer',
        example:
          'SubscriptionTransferParams parameters = new()\n{\n    ID = "x",\n    DestinationResourceID = "destinationResourceId",\n};\n\nvar subscription = await client.V1.Subscriptions.Transfer(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Transfer',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Transfer(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionTransferParams{\n\t\t\tDestinationResourceID: "destinationResourceId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/transfer \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "destinationResourceId": "destinationResourceId"\n        }\'',
      },
      java: {
        method: 'v1().subscriptions().transfer',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionTransferParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionTransferParams params = SubscriptionTransferParams.builder()\n            .id("x")\n            .destinationResourceId("destinationResourceId")\n            .build();\n        Subscription subscription = client.v1().subscriptions().transfer(params);\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.transfer',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.transfer(\n    id="x",\n    destination_resource_id="destinationResourceId",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.transfer',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.transfer("x", destination_resource_id: "destinationResourceId")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.transfer',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.transfer('x', {\n  destinationResourceId: 'destinationResourceId',\n});\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'migrate',
    endpoint: '/api/v1/subscriptions/{id}/migrate',
    httpMethod: 'post',
    summary: 'Migrate subscription to latest plan version',
    description:
      'Migrates a subscription to the latest published version of its plan or add-ons. Handles prorated charges or credits automatically.',
    stainlessPath: '(resource) v1.subscriptions > (method) migrate',
    qualified: 'client.v1.subscriptions.migrate',
    params: ['id: string;', "subscriptionMigrationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE';"],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## migrate\n\n`client.v1.subscriptions.migrate(id: string, subscriptionMigrationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE'): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/migrate`\n\nMigrates a subscription to the latest published version of its plan or add-ons. Handles prorated charges or credits automatically.\n\n### Parameters\n\n- `id: string`\n\n- `subscriptionMigrationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE'`\n  When to migrate (immediate or period end)\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.migrate('x');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions migrate',
        example: "stigg v1:subscriptions migrate \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Migrate',
        example:
          'SubscriptionMigrateParams parameters = new() { ID = "x" };\n\nvar subscription = await client.V1.Subscriptions.Migrate(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Migrate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Migrate(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionMigrateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/subscriptions/$ID/migrate \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().subscriptions().migrate',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionMigrateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Subscription subscription = client.v1().subscriptions().migrate("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.migrate',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.migrate(\n    id="x",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.migrate',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.migrate("x")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.migrate',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.migrate('x');\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'delegate',
    endpoint: '/api/v1/subscriptions/{id}/delegate',
    httpMethod: 'post',
    summary: 'Delegate subscription payment to customer',
    description:
      'Delegates the payment responsibility of a subscription to a different customer. The delegated customer will be billed for this subscription.',
    stainlessPath: '(resource) v1.subscriptions > (method) delegate',
    qualified: 'client.v1.subscriptions.delegate',
    params: ['id: string;', 'targetCustomerId: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## delegate\n\n`client.v1.subscriptions.delegate(id: string, targetCustomerId: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/delegate`\n\nDelegates the payment responsibility of a subscription to a different customer. The delegated customer will be billed for this subscription.\n\n### Parameters\n\n- `id: string`\n\n- `targetCustomerId: string`\n  The unique identifier of the customer who will assume payment responsibility for this subscription. This customer must already exist in your Stigg account and have a valid payment method if the subscription requires payment.\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.delegate('x', { targetCustomerId: 'targetCustomerId' });\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delegate',
        example:
          "stigg v1:subscriptions delegate \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --target-customer-id targetCustomerId",
      },
      csharp: {
        method: 'V1.Subscriptions.Delegate',
        example:
          'SubscriptionDelegateParams parameters = new()\n{\n    ID = "x",\n    TargetCustomerID = "targetCustomerId",\n};\n\nvar subscription = await client.V1.Subscriptions.Delegate(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Delegate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Delegate(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionDelegateParams{\n\t\t\tTargetCustomerID: "targetCustomerId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/delegate \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "targetCustomerId": "targetCustomerId"\n        }\'',
      },
      java: {
        method: 'v1().subscriptions().delegate',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionDelegateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionDelegateParams params = SubscriptionDelegateParams.builder()\n            .id("x")\n            .targetCustomerId("targetCustomerId")\n            .build();\n        Subscription subscription = client.v1().subscriptions().delegate(params);\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.delegate',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.delegate(\n    id="x",\n    target_customer_id="targetCustomerId",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.delegate',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.delegate("x", target_customer_id: "targetCustomerId")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.delegate',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.delegate('x', {\n  targetCustomerId: 'targetCustomerId',\n});\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'preview',
    endpoint: '/api/v1/subscriptions/preview',
    httpMethod: 'post',
    summary: 'Preview subscription',
    description:
      'Previews the pricing impact of creating or updating a subscription without making changes. Returns estimated costs, taxes, and proration details.',
    stainlessPath: '(resource) v1.subscriptions > (method) preview',
    qualified: 'client.v1.subscriptions.preview',
    params: [
      'customerId: string;',
      'planId: string;',
      'addons?: { id: string; quantity: number; }[];',
      'appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; };',
      'billableFeatures?: { featureId: string; quantity: number; }[];',
      'billingCountryCode?: string;',
      "billingCycleAnchor?: 'UNCHANGED' | 'NOW';",
      "billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; };",
      "billingPeriod?: 'MONTHLY' | 'ANNUALLY';",
      "charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[];",
      'payingCustomerId?: string;',
      'resourceId?: string;',
      "scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';",
      'startDate?: string;',
      "trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; };",
      'unitQuantity?: number;',
    ],
    response:
      '{ data: { immediateInvoice: { subTotal: number; total: number; billingPeriodRange?: object; currency?: string; discount?: number; discountDetails?: object; discounts?: object[]; lines?: object[]; tax?: number; }; billingPeriodRange?: { end?: string; start?: string; }; freeItems?: { id: string; quantity: number; }[]; hasScheduledUpdates?: boolean; isPlanDowngrade?: boolean; recurringInvoice?: { subTotal: number; total: number; billingPeriodRange?: object; currency?: string; discount?: number; discountDetails?: object; discounts?: object[]; lines?: object[]; tax?: number; }; }; }',
    markdown:
      "## preview\n\n`client.v1.subscriptions.preview(customerId: string, planId: string, addons?: { id: string; quantity: number; }[], appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: object[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }, billableFeatures?: { featureId: string; quantity: number; }[], billingCountryCode?: string, billingCycleAnchor?: 'UNCHANGED' | 'NOW', billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }, billingPeriod?: 'MONTHLY' | 'ANNUALLY', charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[], payingCustomerId?: string, resourceId?: string, scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE', startDate?: string, trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; }, unitQuantity?: number): { data: object; }`\n\n**post** `/api/v1/subscriptions/preview`\n\nPreviews the pricing impact of creating or updating a subscription without making changes. Returns estimated costs, taxes, and proration details.\n\n### Parameters\n\n- `customerId: string`\n  Customer ID\n\n- `planId: string`\n  Plan ID\n\n- `addons?: { id: string; quantity: number; }[]`\n  Addons to include\n\n- `appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }`\n  Coupon or discount to apply\n  - `billingCouponId?: string`\n    Billing provider coupon ID\n  - `configuration?: { startDate?: string; }`\n    Coupon timing configuration\n  - `couponId?: string`\n    Stigg coupon ID\n  - `discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }`\n    Ad-hoc discount configuration\n  - `promotionCode?: string`\n    Promotion code to apply\n\n- `billableFeatures?: { featureId: string; quantity: number; }[]`\n  Billable features with quantities\n\n- `billingCountryCode?: string`\n  ISO 3166-1 country code for localization\n\n- `billingCycleAnchor?: 'UNCHANGED' | 'NOW'`\n  Billing cycle anchor behavior for the subscription\n\n- `billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }`\n  Billing and tax configuration\n  - `billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }`\n    Billing address\n  - `chargeOnBehalfOfAccount?: string`\n    Connected account ID for platform billing\n  - `integrationId?: string`\n    Billing integration ID\n  - `invoiceDaysUntilDue?: number`\n    Days until invoice is due\n  - `isBackdated?: boolean`\n    Whether subscription is backdated\n  - `isInvoicePaid?: boolean`\n    Whether invoice is already paid\n  - `metadata?: object`\n    Additional billing metadata\n  - `prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'`\n    Proration behavior\n  - `taxIds?: { type: string; value: string; }[]`\n    Customer tax IDs\n  - `taxPercentage?: number`\n    Tax percentage to apply\n  - `taxRateIds?: string[]`\n    Tax rate IDs from billing provider\n\n- `billingPeriod?: 'MONTHLY' | 'ANNUALLY'`\n  Billing period (MONTHLY or ANNUALLY)\n\n- `charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]`\n  One-time or recurring charges\n\n- `payingCustomerId?: string`\n  Paying customer ID for delegated billing\n\n- `resourceId?: string`\n  Resource ID for multi-instance subscriptions\n\n- `scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE'`\n  When to apply subscription changes\n\n- `startDate?: string`\n  Subscription start date\n\n- `trialOverrideConfiguration?: { isTrial: boolean; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; trialEndDate?: string; }`\n  Trial period override settings\n  - `isTrial: boolean`\n    Whether to start as trial\n  - `trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'`\n    Behavior when trial ends\n  - `trialEndDate?: string`\n    Trial end date\n\n- `unitQuantity?: number`\n  Unit quantity for per-unit pricing\n\n### Returns\n\n- `{ data: { immediateInvoice: { subTotal: number; total: number; billingPeriodRange?: object; currency?: string; discount?: number; discountDetails?: object; discounts?: object[]; lines?: object[]; tax?: number; }; billingPeriodRange?: { end?: string; start?: string; }; freeItems?: { id: string; quantity: number; }[]; hasScheduledUpdates?: boolean; isPlanDowngrade?: boolean; recurringInvoice?: { subTotal: number; total: number; billingPeriodRange?: object; currency?: string; discount?: number; discountDetails?: object; discounts?: object[]; lines?: object[]; tax?: number; }; }; }`\n  Response object\n\n  - `data: { immediateInvoice: { subTotal: number; total: number; billingPeriodRange?: { end: string; start: string; }; currency?: string; discount?: number; discountDetails?: { code?: string; fixedAmount?: number; percentage?: number; }; discounts?: { amount: number; currency: string; description: string; }[]; lines?: { currency: string; description: string; subTotal: number; unitPrice: number; quantity?: number; }[]; tax?: number; }; billingPeriodRange?: { end?: string; start?: string; }; freeItems?: { id: string; quantity: number; }[]; hasScheduledUpdates?: boolean; isPlanDowngrade?: boolean; recurringInvoice?: { subTotal: number; total: number; billingPeriodRange?: { end: string; start: string; }; currency?: string; discount?: number; discountDetails?: { code?: string; fixedAmount?: number; percentage?: number; }; discounts?: { amount: number; currency: string; description: string; }[]; lines?: { currency: string; description: string; subTotal: number; unitPrice: number; quantity?: number; }[]; tax?: number; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.preview({ customerId: 'customerId', planId: 'planId' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions preview',
        example:
          "stigg v1:subscriptions preview \\\n  --api-key 'My API Key' \\\n  --customer-id customerId \\\n  --plan-id planId",
      },
      csharp: {
        method: 'V1.Subscriptions.Preview',
        example:
          'SubscriptionPreviewParams parameters = new()\n{\n    CustomerID = "customerId",\n    PlanID = "planId",\n};\n\nvar response = await client.V1.Subscriptions.Preview(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Preview',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Preview(context.TODO(), stigg.V1SubscriptionPreviewParams{\n\t\tCustomerID: "customerId",\n\t\tPlanID:     "planId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/preview \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "customerId": "customerId",\n          "planId": "planId"\n        }\'',
      },
      java: {
        method: 'v1().subscriptions().preview',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.SubscriptionPreviewParams;\nimport io.stigg.models.v1.subscriptions.SubscriptionPreviewResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionPreviewParams params = SubscriptionPreviewParams.builder()\n            .customerId("customerId")\n            .planId("planId")\n            .build();\n        SubscriptionPreviewResponse response = client.v1().subscriptions().preview(params);\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.preview',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.preview(\n    customer_id="customerId",\n    plan_id="planId",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.preview',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.preview(customer_id: "customerId", plan_id: "planId")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.preview',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.preview({\n  customerId: 'customerId',\n  planId: 'planId',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/subscriptions/{id}',
    httpMethod: 'patch',
    summary: 'Update a subscription',
    description:
      "Updates an active subscription's properties including billing period, add-ons, unit quantities, and discounts.",
    stainlessPath: '(resource) v1.subscriptions > (method) update',
    qualified: 'client.v1.subscriptions.update',
    params: [
      'id: string;',
      'addons?: { id: string; quantity: number; }[];',
      'appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; };',
      'awaitPaymentConfirmation?: boolean;',
      "billingCycleAnchor?: 'UNCHANGED' | 'NOW';",
      "billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; couponId?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; };",
      "billingPeriod?: 'MONTHLY' | 'ANNUALLY';",
      'budget?: { hasSoftLimit: boolean; limit: number; };',
      "charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[];",
      "entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[];",
      'metadata?: object;',
      'minimumSpend?: { amount?: number; currency?: string; };',
      'priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; currency?: string; currencyId?: string; featureId?: string; }[];',
      'promotionCode?: string;',
      "scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE';",
      'trialEndDate?: string;',
    ],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## update\n\n`client.v1.subscriptions.update(id: string, addons?: { id: string; quantity: number; }[], appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: object[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }, awaitPaymentConfirmation?: boolean, billingCycleAnchor?: 'UNCHANGED' | 'NOW', billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; couponId?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }, billingPeriod?: 'MONTHLY' | 'ANNUALLY', budget?: { hasSoftLimit: boolean; limit: number; }, charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[], entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[], metadata?: object, minimumSpend?: { amount?: number; currency?: string; }, priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; currency?: string; currencyId?: string; featureId?: string; }[], promotionCode?: string, scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE', trialEndDate?: string): { data: object; }`\n\n**patch** `/api/v1/subscriptions/{id}`\n\nUpdates an active subscription's properties including billing period, add-ons, unit quantities, and discounts.\n\n### Parameters\n\n- `id: string`\n\n- `addons?: { id: string; quantity: number; }[]`\n\n- `appliedCoupon?: { billingCouponId?: string; configuration?: { startDate?: string; }; couponId?: string; discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }; promotionCode?: string; }`\n  - `billingCouponId?: string`\n  - `configuration?: { startDate?: string; }`\n  - `couponId?: string`\n    Stigg coupon ID\n  - `discount?: { amountsOff?: { amount: number; currency: string; }[]; description?: string; durationInMonths?: number; name?: string; percentOff?: number; }`\n  - `promotionCode?: string`\n\n- `awaitPaymentConfirmation?: boolean`\n  Await payment confirmation\n\n- `billingCycleAnchor?: 'UNCHANGED' | 'NOW'`\n\n- `billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; chargeOnBehalfOfAccount?: string; couponId?: string; integrationId?: string; invoiceDaysUntilDue?: number; isBackdated?: boolean; isInvoicePaid?: boolean; metadata?: object; prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'; taxIds?: { type: string; value: string; }[]; taxPercentage?: number; taxRateIds?: string[]; }`\n  - `billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }`\n    Physical address\n  - `chargeOnBehalfOfAccount?: string`\n  - `couponId?: string`\n  - `integrationId?: string`\n  - `invoiceDaysUntilDue?: number`\n  - `isBackdated?: boolean`\n  - `isInvoicePaid?: boolean`\n  - `metadata?: object`\n    Additional metadata for the subscription\n  - `prorationBehavior?: 'INVOICE_IMMEDIATELY' | 'CREATE_PRORATIONS' | 'NONE'`\n  - `taxIds?: { type: string; value: string; }[]`\n  - `taxPercentage?: number`\n  - `taxRateIds?: string[]`\n\n- `billingPeriod?: 'MONTHLY' | 'ANNUALLY'`\n\n- `budget?: { hasSoftLimit: boolean; limit: number; }`\n  - `hasSoftLimit: boolean`\n    Whether the budget is a soft limit\n  - `limit: number`\n    Maximum spending limit\n\n- `charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]`\n\n- `entitlements?: { id: string; type: 'FEATURE'; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; }[]`\n\n- `metadata?: object`\n  Additional metadata for the subscription\n\n- `minimumSpend?: { amount?: number; currency?: string; }`\n  Minimum spend amount\n  - `amount?: number`\n    The price amount\n  - `currency?: string`\n    The price currency\n\n- `priceOverrides?: { addonId?: string; amount?: number; baseCharge?: boolean; currency?: string; currencyId?: string; featureId?: string; }[]`\n\n- `promotionCode?: string`\n  Promotion code\n\n- `scheduleStrategy?: 'END_OF_BILLING_PERIOD' | 'END_OF_BILLING_MONTH' | 'IMMEDIATE'`\n\n- `trialEndDate?: string`\n  Subscription trial end date\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.update('x');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions update',
        example: "stigg v1:subscriptions update \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Update',
        example:
          'SubscriptionUpdateParams parameters = new() { ID = "x" };\n\nvar subscription = await client.V1.Subscriptions.Update(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Update(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/subscriptions/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().subscriptions().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Subscription subscription = client.v1().subscriptions().update("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.update(\n    id="x",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.update("x")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.update('x');\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'import',
    endpoint: '/api/v1/subscriptions/import',
    httpMethod: 'post',
    summary: 'Bulk import subscriptions',
    description:
      'Imports multiple subscriptions in bulk. Used for migrating subscription data from external systems.',
    stainlessPath: '(resource) v1.subscriptions > (method) import',
    qualified: 'client.v1.subscriptions.import',
    params: [
      "subscriptions: { id: string; customerId: string; planId: string; addons?: { id: string; quantity: number; }[]; billingId?: string; billingPeriod?: 'MONTHLY' | 'ANNUALLY'; charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]; endDate?: string; metadata?: object; resourceId?: string; startDate?: string; }[];",
      'integrationId?: string;',
    ],
    response: '{ data: { taskId: string; }; }',
    markdown:
      "## import\n\n`client.v1.subscriptions.import(subscriptions: { id: string; customerId: string; planId: string; addons?: { id: string; quantity: number; }[]; billingId?: string; billingPeriod?: 'MONTHLY' | 'ANNUALLY'; charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]; endDate?: string; metadata?: object; resourceId?: string; startDate?: string; }[], integrationId?: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/import`\n\nImports multiple subscriptions in bulk. Used for migrating subscription data from external systems.\n\n### Parameters\n\n- `subscriptions: { id: string; customerId: string; planId: string; addons?: { id: string; quantity: number; }[]; billingId?: string; billingPeriod?: 'MONTHLY' | 'ANNUALLY'; charges?: { id: string; quantity: number; type: 'FEATURE' | 'CREDIT'; }[]; endDate?: string; metadata?: object; resourceId?: string; startDate?: string; }[]`\n  List of subscription objects to import\n\n- `integrationId?: string`\n  Integration ID to use for importing subscriptions\n\n### Returns\n\n- `{ data: { taskId: string; }; }`\n  Response object\n\n  - `data: { taskId: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.import({ subscriptions: [{\n  id: 'id',\n  customerId: 'customerId',\n  planId: 'planId',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions import',
        example:
          "stigg v1:subscriptions import \\\n  --api-key 'My API Key' \\\n  --subscription '{id: id, customerId: customerId, planId: planId}'",
      },
      csharp: {
        method: 'V1.Subscriptions.Import',
        example:
          'SubscriptionImportParams parameters = new()\n{\n    Subscriptions =\n    [\n        new()\n        {\n            ID = "id",\n            CustomerID = "customerId",\n            PlanID = "planId",\n            Addons =\n            [\n                new()\n                {\n                    ID = "id",\n                    Quantity = 0,\n                },\n            ],\n            BillingID = "billingId",\n            BillingPeriod = BillingPeriod.Monthly,\n            Charges =\n            [\n                new()\n                {\n                    ID = "id",\n                    Quantity = 1,\n                    Type = Type.Feature,\n                },\n            ],\n            EndDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n            Metadata = new Dictionary<string, string>() { { "foo", "string" } },\n            ResourceID = "resourceId",\n            StartDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n        },\n    ],\n};\n\nvar response = await client.V1.Subscriptions.Import(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Import',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Import(context.TODO(), stigg.V1SubscriptionImportParams{\n\t\tSubscriptions: []stigg.V1SubscriptionImportParamsSubscription{{\n\t\t\tID:         "id",\n\t\t\tCustomerID: "customerId",\n\t\t\tPlanID:     "planId",\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/import \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "subscriptions": [\n            {\n              "id": "id",\n              "customerId": "customerId",\n              "planId": "planId"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().subscriptions().import_',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.SubscriptionImportParams;\nimport io.stigg.models.v1.subscriptions.SubscriptionImportResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        SubscriptionImportParams params = SubscriptionImportParams.builder()\n            .addSubscription(SubscriptionImportParams.Subscription.builder()\n                .id("id")\n                .customerId("customerId")\n                .planId("planId")\n                .build())\n            .build();\n        SubscriptionImportResponse response = client.v1().subscriptions().import_(params);\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.import_',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.import_(\n    subscriptions=[{\n        "id": "id",\n        "customer_id": "customerId",\n        "plan_id": "planId",\n    }],\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.import',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.import(subscriptions: [{id: "id", customerId: "customerId", planId: "planId"}])\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.import',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.import({\n  subscriptions: [\n    {\n      id: 'id',\n      customerId: 'customerId',\n      planId: 'planId',\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/api/v1/subscriptions/{id}/cancel',
    httpMethod: 'post',
    summary: 'Cancel subscription',
    description:
      'Cancels an active subscription, either immediately or at a specified time such as end of billing period.',
    stainlessPath: '(resource) v1.subscriptions > (method) cancel',
    qualified: 'client.v1.subscriptions.cancel',
    params: [
      'id: string;',
      "cancellationAction?: 'DEFAULT' | 'REVOKE_ENTITLEMENTS';",
      "cancellationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE';",
      'endDate?: string;',
      'prorate?: boolean;',
    ],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: object[]; billingCycleAnchor?: string; budget?: object; cancellationDate?: string; cancelReason?: string; coupons?: object[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: object[]; latestInvoice?: object; metadata?: object; minimumSpend?: object; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: object[]; resourceId?: string; subscriptionEntitlements?: object[]; trial?: object; trialEndDate?: string; }; }",
    markdown:
      "## cancel\n\n`client.v1.subscriptions.cancel(id: string, cancellationAction?: 'DEFAULT' | 'REVOKE_ENTITLEMENTS', cancellationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE', endDate?: string, prorate?: boolean): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/cancel`\n\nCancels an active subscription, either immediately or at a specified time such as end of billing period.\n\n### Parameters\n\n- `id: string`\n\n- `cancellationAction?: 'DEFAULT' | 'REVOKE_ENTITLEMENTS'`\n  Action on cancellation (downgrade or revoke)\n\n- `cancellationTime?: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'`\n  When to cancel (immediate, period end, or date)\n\n- `endDate?: string`\n  Subscription end date\n\n- `prorate?: boolean`\n  If set, enables or disables prorating of credits on subscription cancellation.\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: object[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: object; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: object[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; customerId: string; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; planId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; startDate: string; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'IN_TRIAL' | 'CANCELED' | 'NOT_STARTED'; addons?: { id: string; quantity: number; }[]; billingCycleAnchor?: string; budget?: { hasSoftLimit: boolean; limit: number; }; cancellationDate?: string; cancelReason?: string; coupons?: { id: string; name: string; status: 'ACTIVE' | 'EXPIRED' | 'REMOVED'; amountsOff?: { amount?: number; currency?: string; }[]; percentOff?: number; }[]; currentBillingPeriodEnd?: string; currentBillingPeriodStart?: string; effectiveEndDate?: string; endDate?: string; futureUpdates?: { scheduledExecutionTime: string; scheduleStatus: 'PENDING_PAYMENT' | 'SCHEDULED' | 'CANCELED' | 'DONE' | 'FAILED'; subscriptionScheduleType: string; targetPackage?: { id: string; }; }[]; latestInvoice?: { billingId: string; createdAt: string; requiresAction: boolean; status: 'OPEN' | 'CANCELED' | 'PAID'; amountDue?: number; billingReason?: string; currency?: string; pdfUrl?: string; total?: number; }; metadata?: object; minimumSpend?: { amount?: number; currency?: string; }; payingCustomerId?: string; paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'; prices?: { addonId?: string; amount?: number; baseCharge?: boolean; billingCountryCode?: string; blockSize?: number; currency?: string; featureId?: string; tiers?: { flatPrice?: { amount: number; currency: string; }; unitPrice?: { amount: number; currency: string; }; upTo?: number; }[]; }[]; resourceId?: string; subscriptionEntitlements?: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; trial?: { trialEndBehavior: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; trialEndDate?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst subscription = await client.v1.subscriptions.cancel('x');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions cancel',
        example: "stigg v1:subscriptions cancel \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Cancel',
        example:
          'SubscriptionCancelParams parameters = new() { ID = "x" };\n\nvar subscription = await client.V1.Subscriptions.Cancel(parameters);\n\nConsole.WriteLine(subscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsubscription, err := client.V1.Subscriptions.Cancel(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionCancelParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/subscriptions/$ID/cancel \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().subscriptions().cancel',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.Subscription;\nimport io.stigg.models.v1.subscriptions.SubscriptionCancelParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Subscription subscription = client.v1().subscriptions().cancel("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.cancel',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nsubscription = client.v1.subscriptions.cancel(\n    id="x",\n)\nprint(subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.cancel',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nsubscription = stigg.v1.subscriptions.cancel("x")\n\nputs(subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.cancel',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst subscription = await client.v1.subscriptions.cancel('x');\n\nconsole.log(subscription.data);",
      },
    },
  },
  {
    name: 'cancel_pending_payment',
    endpoint: '/api/v1/subscriptions/{id}/future-update/pending-payment',
    httpMethod: 'delete',
    summary: 'Cancel pending payment update',
    description: 'Cancels a subscription update that is pending payment completion.',
    stainlessPath: '(resource) v1.subscriptions.future_update > (method) cancel_pending_payment',
    qualified: 'client.v1.subscriptions.futureUpdate.cancelPendingPayment',
    params: ['id: string;'],
    response: '{ data: { id: string; }; }',
    markdown:
      "## cancel_pending_payment\n\n`client.v1.subscriptions.futureUpdate.cancelPendingPayment(id: string): { data: object; }`\n\n**delete** `/api/v1/subscriptions/{id}/future-update/pending-payment`\n\nCancels a subscription update that is pending payment completion.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; }; }`\n  Response object\n\n  - `data: { id: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst cancelSubscription = await client.v1.subscriptions.futureUpdate.cancelPendingPayment('x');\n\nconsole.log(cancelSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'future_update cancel_pending_payment',
        example:
          "stigg v1:subscriptions:future-update cancel-pending-payment \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.FutureUpdate.CancelPendingPayment',
        example:
          'FutureUpdateCancelPendingPaymentParams parameters = new() { ID = "x" };\n\nvar cancelSubscription = await client.V1.Subscriptions.FutureUpdate.CancelPendingPayment(parameters);\n\nConsole.WriteLine(cancelSubscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.FutureUpdate.CancelPendingPayment',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcancelSubscription, err := client.V1.Subscriptions.FutureUpdate.CancelPendingPayment(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", cancelSubscription.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/future-update/pending-payment \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().futureUpdate().cancelPendingPayment',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.futureupdate.CancelSubscription;\nimport io.stigg.models.v1.subscriptions.futureupdate.FutureUpdateCancelPendingPaymentParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CancelSubscription cancelSubscription = client.v1().subscriptions().futureUpdate().cancelPendingPayment("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.future_update.cancel_pending_payment',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncancel_subscription = client.v1.subscriptions.future_update.cancel_pending_payment(\n    "x",\n)\nprint(cancel_subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.future_update.cancel_pending_payment',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncancel_subscription = stigg.v1.subscriptions.future_update.cancel_pending_payment("x")\n\nputs(cancel_subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.futureUpdate.cancelPendingPayment',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst cancelSubscription = await client.v1.subscriptions.futureUpdate.cancelPendingPayment('x');\n\nconsole.log(cancelSubscription.data);",
      },
    },
  },
  {
    name: 'cancel_schedule',
    endpoint: '/api/v1/subscriptions/{id}/future-update/schedule',
    httpMethod: 'delete',
    summary: 'Cancel scheduled update',
    description: 'Cancels a scheduled subscription update, such as a future downgrade or plan change.',
    stainlessPath: '(resource) v1.subscriptions.future_update > (method) cancel_schedule',
    qualified: 'client.v1.subscriptions.futureUpdate.cancelSchedule',
    params: ['id: string;'],
    response: '{ data: { id: string; }; }',
    markdown:
      "## cancel_schedule\n\n`client.v1.subscriptions.futureUpdate.cancelSchedule(id: string): { data: object; }`\n\n**delete** `/api/v1/subscriptions/{id}/future-update/schedule`\n\nCancels a scheduled subscription update, such as a future downgrade or plan change.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; }; }`\n  Response object\n\n  - `data: { id: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst cancelSubscription = await client.v1.subscriptions.futureUpdate.cancelSchedule('x');\n\nconsole.log(cancelSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'future_update cancel_schedule',
        example:
          "stigg v1:subscriptions:future-update cancel-schedule \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.FutureUpdate.CancelSchedule',
        example:
          'FutureUpdateCancelScheduleParams parameters = new() { ID = "x" };\n\nvar cancelSubscription = await client.V1.Subscriptions.FutureUpdate.CancelSchedule(parameters);\n\nConsole.WriteLine(cancelSubscription);',
      },
      go: {
        method: 'client.V1.Subscriptions.FutureUpdate.CancelSchedule',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcancelSubscription, err := client.V1.Subscriptions.FutureUpdate.CancelSchedule(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", cancelSubscription.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/future-update/schedule \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().futureUpdate().cancelSchedule',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.futureupdate.CancelSubscription;\nimport io.stigg.models.v1.subscriptions.futureupdate.FutureUpdateCancelScheduleParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CancelSubscription cancelSubscription = client.v1().subscriptions().futureUpdate().cancelSchedule("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.future_update.cancel_schedule',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncancel_subscription = client.v1.subscriptions.future_update.cancel_schedule(\n    "x",\n)\nprint(cancel_subscription.data)',
      },
      ruby: {
        method: 'v1.subscriptions.future_update.cancel_schedule',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncancel_subscription = stigg.v1.subscriptions.future_update.cancel_schedule("x")\n\nputs(cancel_subscription)',
      },
      typescript: {
        method: 'client.v1.subscriptions.futureUpdate.cancelSchedule',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst cancelSubscription = await client.v1.subscriptions.futureUpdate.cancelSchedule('x');\n\nconsole.log(cancelSubscription.data);",
      },
    },
  },
  {
    name: 'charge_usage',
    endpoint: '/api/v1/subscriptions/{id}/usage/charge',
    httpMethod: 'post',
    summary: 'Charge subscription usage',
    description:
      'Immediately charges usage for a subscription via the billing integration. Calculates usage since the last charge and creates an invoice.',
    stainlessPath: '(resource) v1.subscriptions.usage > (method) charge_usage',
    qualified: 'client.v1.subscriptions.usage.chargeUsage',
    params: ['id: string;', 'untilDate?: string;'],
    response:
      '{ data: { invoiceBillingId: string; periodEnd: string; periodStart: string; subscriptionId: string; usageCharged: { featureId: string; usageAmount: number; }[]; }; }',
    markdown:
      "## charge_usage\n\n`client.v1.subscriptions.usage.chargeUsage(id: string, untilDate?: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/usage/charge`\n\nImmediately charges usage for a subscription via the billing integration. Calculates usage since the last charge and creates an invoice.\n\n### Parameters\n\n- `id: string`\n\n- `untilDate?: string`\n  Cutoff date for usage calculation. If not provided, the current time is used.\n\n### Returns\n\n- `{ data: { invoiceBillingId: string; periodEnd: string; periodStart: string; subscriptionId: string; usageCharged: { featureId: string; usageAmount: number; }[]; }; }`\n  Response object\n\n  - `data: { invoiceBillingId: string; periodEnd: string; periodStart: string; subscriptionId: string; usageCharged: { featureId: string; usageAmount: number; }[]; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.usage.chargeUsage('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'usage charge_usage',
        example: "stigg v1:subscriptions:usage charge-usage \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Usage.ChargeUsage',
        example:
          'UsageChargeUsageParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Subscriptions.Usage.ChargeUsage(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Usage.ChargeUsage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Usage.ChargeUsage(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1SubscriptionUsageChargeUsageParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/subscriptions/$ID/usage/charge \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().subscriptions().usage().chargeUsage',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.usage.UsageChargeUsageParams;\nimport io.stigg.models.v1.subscriptions.usage.UsageChargeUsageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        UsageChargeUsageResponse response = client.v1().subscriptions().usage().chargeUsage("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.usage.charge_usage',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.usage.charge_usage(\n    id="x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.usage.charge_usage',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.usage.charge_usage("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.usage.chargeUsage',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.usage.chargeUsage('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'sync',
    endpoint: '/api/v1/subscriptions/{id}/usage/sync',
    httpMethod: 'post',
    summary: 'Trigger subscription usage sync',
    description: 'Triggers a usage sync for a subscription, reporting current usage to the billing provider.',
    stainlessPath: '(resource) v1.subscriptions.usage > (method) sync',
    qualified: 'client.v1.subscriptions.usage.sync',
    params: ['id: string;'],
    response: '{ data: { triggered: boolean; }; }',
    markdown:
      "## sync\n\n`client.v1.subscriptions.usage.sync(id: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/usage/sync`\n\nTriggers a usage sync for a subscription, reporting current usage to the billing provider.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { triggered: boolean; }; }`\n  Response object\n\n  - `data: { triggered: boolean; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.usage.sync('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'usage sync',
        example: "stigg v1:subscriptions:usage sync \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Usage.Sync',
        example:
          'UsageSyncParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Subscriptions.Usage.Sync(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Usage.Sync',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Usage.Sync(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/usage/sync \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().usage().sync',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.usage.UsageSyncParams;\nimport io.stigg.models.v1.subscriptions.usage.UsageSyncResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        UsageSyncResponse response = client.v1().subscriptions().usage().sync("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.usage.sync',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.usage.sync(\n    "x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.usage.sync',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.usage.sync("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.usage.sync',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.usage.sync('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'mark_as_paid',
    endpoint: '/api/v1/subscriptions/{id}/invoice/paid',
    httpMethod: 'post',
    summary: 'Mark subscription invoice as paid',
    description:
      'Marks the latest invoice of a subscription as paid in the billing provider. The invoice must exist and have an OPEN status.',
    stainlessPath: '(resource) v1.subscriptions.invoice > (method) mark_as_paid',
    qualified: 'client.v1.subscriptions.invoice.markAsPaid',
    params: ['id: string;'],
    response: '{ data: { id: string; }; }',
    markdown:
      "## mark_as_paid\n\n`client.v1.subscriptions.invoice.markAsPaid(id: string): { data: object; }`\n\n**post** `/api/v1/subscriptions/{id}/invoice/paid`\n\nMarks the latest invoice of a subscription as paid in the billing provider. The invoice must exist and have an OPEN status.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; }; }`\n  Response object\n\n  - `data: { id: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.subscriptions.invoice.markAsPaid('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'invoice mark_as_paid',
        example: "stigg v1:subscriptions:invoice mark-as-paid \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Subscriptions.Invoice.MarkAsPaid',
        example:
          'InvoiceMarkAsPaidParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Subscriptions.Invoice.MarkAsPaid(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Subscriptions.Invoice.MarkAsPaid',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Subscriptions.Invoice.MarkAsPaid(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/subscriptions/$ID/invoice/paid \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().subscriptions().invoice().markAsPaid',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.subscriptions.invoice.InvoiceMarkAsPaidParams;\nimport io.stigg.models.v1.subscriptions.invoice.InvoiceMarkAsPaidResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        InvoiceMarkAsPaidResponse response = client.v1().subscriptions().invoice().markAsPaid("x");\n    }\n}',
      },
      python: {
        method: 'v1.subscriptions.invoice.mark_as_paid',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.subscriptions.invoice.mark_as_paid(\n    "x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.subscriptions.invoice.mark_as_paid',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.subscriptions.invoice.mark_as_paid("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.subscriptions.invoice.markAsPaid',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.subscriptions.invoice.markAsPaid('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/coupons',
    httpMethod: 'post',
    summary: 'Create coupon',
    description:
      'Creates a new discount coupon with percentage or fixed amount off, applicable to customer subscriptions.',
    stainlessPath: '(resource) v1.coupons > (method) create',
    qualified: 'client.v1.coupons.create',
    params: [
      'id: string;',
      'amountsOff: { amount: number; currency: string; }[];',
      'description: string;',
      'durationInMonths: number;',
      'metadata: object;',
      'name: string;',
      'percentOff: number;',
    ],
    response:
      "{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }",
    markdown:
      "## create\n\n`client.v1.coupons.create(id: string, amountsOff: { amount: number; currency: string; }[], description: string, durationInMonths: number, metadata: object, name: string, percentOff: number): { data: object; }`\n\n**post** `/api/v1/coupons`\n\nCreates a new discount coupon with percentage or fixed amount off, applicable to customer subscriptions.\n\n### Parameters\n\n- `id: string`\n  The unique identifier for the entity\n\n- `amountsOff: { amount: number; currency: string; }[]`\n  Fixed amount discounts in different currencies\n\n- `description: string`\n  Description of the coupon\n\n- `durationInMonths: number`\n  Duration of the coupon validity in months\n\n- `metadata: object`\n  Metadata associated with the entity\n\n- `name: string`\n  Name of the coupon\n\n- `percentOff: number`\n  Percentage discount off the original price\n\n### Returns\n\n- `{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst coupon = await client.v1.coupons.create({\n  id: 'id',\n  amountsOff: [{ amount: 0, currency: 'usd' }],\n  description: 'description',\n  durationInMonths: 1,\n  metadata: { foo: 'string' },\n  name: 'name',\n  percentOff: 1,\n});\n\nconsole.log(coupon);\n```",
    perLanguage: {
      cli: {
        method: 'coupons create',
        example:
          "stigg v1:coupons create \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --amounts-off '{amount: 0, currency: usd}' \\\n  --description description \\\n  --duration-in-months 1 \\\n  --metadata '{foo: string}' \\\n  --name name \\\n  --percent-off 1",
      },
      csharp: {
        method: 'V1.Coupons.Create',
        example:
          'CouponCreateParams parameters = new()\n{\n    ID = "id",\n    AmountsOff =\n    [\n        new()\n        {\n            Amount = 0,\n            Currency = Currency.Usd,\n        },\n    ],\n    Description = "description",\n    DurationInMonths = 1,\n    Metadata = new Dictionary<string, string>() { { "foo", "string" } },\n    Name = "name",\n    PercentOff = 1,\n};\n\nvar coupon = await client.V1.Coupons.Create(parameters);\n\nConsole.WriteLine(coupon);',
      },
      go: {
        method: 'client.V1.Coupons.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoupon, err := client.V1.Coupons.New(context.TODO(), stigg.V1CouponNewParams{\n\t\tID: "id",\n\t\tAmountsOff: []stigg.V1CouponNewParamsAmountsOff{{\n\t\t\tAmount:   0,\n\t\t\tCurrency: "usd",\n\t\t}},\n\t\tDescription:      stigg.String("description"),\n\t\tDurationInMonths: stigg.Int(1),\n\t\tMetadata: map[string]string{\n\t\t\t"foo": "string",\n\t\t},\n\t\tName:       "name",\n\t\tPercentOff: stigg.Float(1),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coupon.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/coupons \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "amountsOff": [\n            {\n              "amount": 0,\n              "currency": "usd"\n            }\n          ],\n          "description": "description",\n          "durationInMonths": 1,\n          "metadata": {\n            "foo": "string"\n          },\n          "name": "name",\n          "percentOff": 1\n        }\'',
      },
      java: {
        method: 'v1().coupons().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.core.JsonValue;\nimport io.stigg.models.v1.coupons.Coupon;\nimport io.stigg.models.v1.coupons.CouponCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CouponCreateParams params = CouponCreateParams.builder()\n            .id("id")\n            .addAmountsOff(CouponCreateParams.AmountsOff.builder()\n                .amount(0.0)\n                .currency(CouponCreateParams.AmountsOff.Currency.USD)\n                .build())\n            .description("description")\n            .durationInMonths(1L)\n            .metadata(CouponCreateParams.Metadata.builder()\n                .putAdditionalProperty("foo", JsonValue.from("string"))\n                .build())\n            .name("name")\n            .percentOff(1.0)\n            .build();\n        Coupon coupon = client.v1().coupons().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.coupons.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncoupon = client.v1.coupons.create(\n    id="id",\n    amounts_off=[{\n        "amount": 0,\n        "currency": "usd",\n    }],\n    description="description",\n    duration_in_months=1,\n    metadata={\n        "foo": "string"\n    },\n    name="name",\n    percent_off=1,\n)\nprint(coupon.data)',
      },
      ruby: {
        method: 'v1.coupons.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncoupon = stigg.v1.coupons.create(\n  id: "id",\n  amounts_off: [{amount: 0, currency: :usd}],\n  description: "description",\n  duration_in_months: 1,\n  metadata: {foo: "string"},\n  name: "name",\n  percent_off: 1\n)\n\nputs(coupon)',
      },
      typescript: {
        method: 'client.v1.coupons.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst coupon = await client.v1.coupons.create({\n  id: 'id',\n  amountsOff: [{ amount: 0, currency: 'usd' }],\n  description: 'description',\n  durationInMonths: 1,\n  metadata: { foo: 'string' },\n  name: 'name',\n  percentOff: 1,\n});\n\nconsole.log(coupon.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/coupons',
    httpMethod: 'get',
    summary: 'Get a list of coupons',
    description: 'Retrieves a paginated list of coupons in the environment.',
    stainlessPath: '(resource) v1.coupons > (method) list',
    qualified: 'client.v1.coupons.list',
    params: [
      'id?: string;',
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'limit?: number;',
      'status?: string;',
      "type?: 'FIXED' | 'PERCENTAGE';",
    ],
    response:
      "{ id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }",
    markdown:
      "## list\n\n`client.v1.coupons.list(id?: string, after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, limit?: number, status?: string, type?: 'FIXED' | 'PERCENTAGE'): { id: string; amountsOff: object[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n\n**get** `/api/v1/coupons`\n\nRetrieves a paginated list of coupons in the environment.\n\n### Parameters\n\n- `id?: string`\n  Filter by entity ID\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `status?: string`\n  Filter by coupon status. Supports comma-separated values for multiple statuses\n\n- `type?: 'FIXED' | 'PERCENTAGE'`\n  Filter by coupon type (FIXED or PERCENTAGE)\n\n### Returns\n\n- `{ id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n  Discount instrument with percentage or fixed amount\n\n  - `id: string`\n  - `amountsOff: { amount: number; currency: string; }[]`\n  - `billingId: string`\n  - `billingLinkUrl: string`\n  - `createdAt: string`\n  - `description: string`\n  - `durationInMonths: number`\n  - `metadata: object`\n  - `name: string`\n  - `percentOff: number`\n  - `source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'`\n  - `status: 'ACTIVE' | 'ARCHIVED'`\n  - `type: 'FIXED' | 'PERCENTAGE'`\n  - `updatedAt: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const couponListResponse of client.v1.coupons.list()) {\n  console.log(couponListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'coupons list',
        example: "stigg v1:coupons list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Coupons.List',
        example:
          'CouponListParams parameters = new();\n\nvar page = await client.V1.Coupons.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Coupons.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Coupons.List(context.TODO(), stigg.V1CouponListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/coupons \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().coupons().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.coupons.CouponListPage;\nimport io.stigg.models.v1.coupons.CouponListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CouponListPage page = client.v1().coupons().list();\n    }\n}',
      },
      python: {
        method: 'v1.coupons.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.coupons.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.coupons.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.coupons.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.coupons.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const couponListResponse of client.v1.coupons.list()) {\n  console.log(couponListResponse.id);\n}",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/coupons/{id}',
    httpMethod: 'get',
    summary: 'Get a single coupon by ID',
    description: 'Retrieves a coupon by its unique identifier.',
    stainlessPath: '(resource) v1.coupons > (method) retrieve',
    qualified: 'client.v1.coupons.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }",
    markdown:
      "## retrieve\n\n`client.v1.coupons.retrieve(id: string): { data: object; }`\n\n**get** `/api/v1/coupons/{id}`\n\nRetrieves a coupon by its unique identifier.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst coupon = await client.v1.coupons.retrieve('x');\n\nconsole.log(coupon);\n```",
    perLanguage: {
      cli: {
        method: 'coupons retrieve',
        example: "stigg v1:coupons retrieve \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Coupons.Retrieve',
        example:
          'CouponRetrieveParams parameters = new() { ID = "x" };\n\nvar coupon = await client.V1.Coupons.Retrieve(parameters);\n\nConsole.WriteLine(coupon);',
      },
      go: {
        method: 'client.V1.Coupons.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoupon, err := client.V1.Coupons.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coupon.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/coupons/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().coupons().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.coupons.Coupon;\nimport io.stigg.models.v1.coupons.CouponRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Coupon coupon = client.v1().coupons().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'v1.coupons.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncoupon = client.v1.coupons.retrieve(\n    "x",\n)\nprint(coupon.data)',
      },
      ruby: {
        method: 'v1.coupons.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncoupon = stigg.v1.coupons.retrieve("x")\n\nputs(coupon)',
      },
      typescript: {
        method: 'client.v1.coupons.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst coupon = await client.v1.coupons.retrieve('x');\n\nconsole.log(coupon.data);",
      },
    },
  },
  {
    name: 'update_coupon',
    endpoint: '/api/v1/coupons/{id}',
    httpMethod: 'patch',
    summary: 'Update a coupon',
    description: "Updates an existing coupon's properties such as name, description, and metadata.",
    stainlessPath: '(resource) v1.coupons > (method) update_coupon',
    qualified: 'client.v1.coupons.updateCoupon',
    params: ['id: string;', 'description?: string;', 'metadata?: object;', 'name?: string;'],
    response:
      "{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }",
    markdown:
      "## update_coupon\n\n`client.v1.coupons.updateCoupon(id: string, description?: string, metadata?: object, name?: string): { data: object; }`\n\n**patch** `/api/v1/coupons/{id}`\n\nUpdates an existing coupon's properties such as name, description, and metadata.\n\n### Parameters\n\n- `id: string`\n\n- `description?: string`\n  Description of the coupon\n\n- `metadata?: object`\n  Metadata associated with the entity\n\n- `name?: string`\n  Name of the coupon\n\n### Returns\n\n- `{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst coupon = await client.v1.coupons.updateCoupon('x');\n\nconsole.log(coupon);\n```",
    perLanguage: {
      cli: {
        method: 'coupons update_coupon',
        example: "stigg v1:coupons update-coupon \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Coupons.UpdateCoupon',
        example:
          'CouponUpdateCouponParams parameters = new() { ID = "x" };\n\nvar coupon = await client.V1.Coupons.UpdateCoupon(parameters);\n\nConsole.WriteLine(coupon);',
      },
      go: {
        method: 'client.V1.Coupons.UpdateCoupon',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoupon, err := client.V1.Coupons.UpdateCoupon(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1CouponUpdateCouponParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coupon.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/coupons/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().coupons().updateCoupon',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.coupons.Coupon;\nimport io.stigg.models.v1.coupons.CouponUpdateCouponParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Coupon coupon = client.v1().coupons().updateCoupon("x");\n    }\n}',
      },
      python: {
        method: 'v1.coupons.update_coupon',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncoupon = client.v1.coupons.update_coupon(\n    id="x",\n)\nprint(coupon.data)',
      },
      ruby: {
        method: 'v1.coupons.update_coupon',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncoupon = stigg.v1.coupons.update_coupon("x")\n\nputs(coupon)',
      },
      typescript: {
        method: 'client.v1.coupons.updateCoupon',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst coupon = await client.v1.coupons.updateCoupon('x');\n\nconsole.log(coupon.data);",
      },
    },
  },
  {
    name: 'archive_coupon',
    endpoint: '/api/v1/coupons/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive coupon',
    description: 'Archives a coupon, preventing it from being applied to new subscriptions.',
    stainlessPath: '(resource) v1.coupons > (method) archive_coupon',
    qualified: 'client.v1.coupons.archiveCoupon',
    params: ['id: string;'],
    response:
      "{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }",
    markdown:
      "## archive_coupon\n\n`client.v1.coupons.archiveCoupon(id: string): { data: object; }`\n\n**post** `/api/v1/coupons/{id}/archive`\n\nArchives a coupon, preventing it from being applied to new subscriptions.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amountsOff: { amount: number; currency: string; }[]; billingId: string; billingLinkUrl: string; createdAt: string; description: string; durationInMonths: number; metadata: object; name: string; percentOff: number; source: 'STIGG' | 'STIGG_ADHOC' | 'STRIPE'; status: 'ACTIVE' | 'ARCHIVED'; type: 'FIXED' | 'PERCENTAGE'; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst coupon = await client.v1.coupons.archiveCoupon('x');\n\nconsole.log(coupon);\n```",
    perLanguage: {
      cli: {
        method: 'coupons archive_coupon',
        example: "stigg v1:coupons archive-coupon \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Coupons.ArchiveCoupon',
        example:
          'CouponArchiveCouponParams parameters = new() { ID = "x" };\n\nvar coupon = await client.V1.Coupons.ArchiveCoupon(parameters);\n\nConsole.WriteLine(coupon);',
      },
      go: {
        method: 'client.V1.Coupons.ArchiveCoupon',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoupon, err := client.V1.Coupons.ArchiveCoupon(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coupon.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/coupons/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().coupons().archiveCoupon',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.coupons.Coupon;\nimport io.stigg.models.v1.coupons.CouponArchiveCouponParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Coupon coupon = client.v1().coupons().archiveCoupon("x");\n    }\n}',
      },
      python: {
        method: 'v1.coupons.archive_coupon',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncoupon = client.v1.coupons.archive_coupon(\n    "x",\n)\nprint(coupon.data)',
      },
      ruby: {
        method: 'v1.coupons.archive_coupon',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncoupon = stigg.v1.coupons.archive_coupon("x")\n\nputs(coupon)',
      },
      typescript: {
        method: 'client.v1.coupons.archiveCoupon',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst coupon = await client.v1.coupons.archiveCoupon('x');\n\nconsole.log(coupon.data);",
      },
    },
  },
  {
    name: 'report',
    endpoint: '/api/v1/events',
    httpMethod: 'post',
    summary: 'Report usage events',
    description:
      'Reports raw usage events for event-based metering. Events are ingested asynchronously and aggregated into usage totals.',
    stainlessPath: '(resource) v1.events > (method) report',
    qualified: 'client.v1.events.report',
    params: [
      'events: { customerId: string; eventName: string; idempotencyKey: string; dimensions?: object; resourceId?: string; timestamp?: string; }[];',
    ],
    response: '{ data: object; }',
    markdown:
      "## report\n\n`client.v1.events.report(events: { customerId: string; eventName: string; idempotencyKey: string; dimensions?: object; resourceId?: string; timestamp?: string; }[]): { data: object; }`\n\n**post** `/api/v1/events`\n\nReports raw usage events for event-based metering. Events are ingested asynchronously and aggregated into usage totals.\n\n### Parameters\n\n- `events: { customerId: string; eventName: string; idempotencyKey: string; dimensions?: object; resourceId?: string; timestamp?: string; }[]`\n  A list of usage events to report\n\n### Returns\n\n- `{ data: object; }`\n  Response object\n\n  - `data: object`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.events.report({ events: [{\n  customerId: 'customerId',\n  eventName: 'x',\n  idempotencyKey: 'x',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'events report',
        example:
          "stigg v1:events report \\\n  --api-key 'My API Key' \\\n  --event '{customerId: customerId, eventName: x, idempotencyKey: x}'",
      },
      csharp: {
        method: 'V1.Events.Report',
        example:
          'EventReportParams parameters = new()\n{\n    Events =\n    [\n        new()\n        {\n            CustomerID = "customerId",\n            EventName = "x",\n            IdempotencyKey = "x",\n            Dimensions = new Dictionary<string, Dimension>()\n            {\n                { "foo", "string" }\n            },\n            ResourceID = "resourceId",\n            Timestamp = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n        },\n    ],\n};\n\nvar response = await client.V1.Events.Report(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Events.Report',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Events.Report(context.TODO(), stigg.V1EventReportParams{\n\t\tEvents: []stigg.V1EventReportParamsEvent{{\n\t\t\tCustomerID:     "customerId",\n\t\t\tEventName:      "x",\n\t\t\tIdempotencyKey: "x",\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/events \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "events": [\n            {\n              "customerId": "customerId",\n              "eventName": "x",\n              "idempotencyKey": "x"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().events().report',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.EventReportParams;\nimport io.stigg.models.v1.events.EventReportResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventReportParams params = EventReportParams.builder()\n            .addEvent(EventReportParams.Event.builder()\n                .customerId("customerId")\n                .eventName("x")\n                .idempotencyKey("x")\n                .build())\n            .build();\n        EventReportResponse response = client.v1().events().report(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.report',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.events.report(\n    events=[{\n        "customer_id": "customerId",\n        "event_name": "x",\n        "idempotency_key": "x",\n    }],\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.events.report',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.events.report(events: [{customerId: "customerId", eventName: "x", idempotencyKey: "x"}])\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.events.report',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.events.report({\n  events: [\n    {\n      customerId: 'customerId',\n      eventName: 'x',\n      idempotencyKey: 'x',\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'get_usage',
    endpoint: '/api/v1/credits/usage',
    httpMethod: 'get',
    summary: 'Get credit usage',
    description:
      'Retrieves credit usage time-series data for a customer, grouped by feature, over a specified time range.',
    stainlessPath: '(resource) v1.events.credits > (method) get_usage',
    qualified: 'client.v1.events.credits.getUsage',
    params: [
      'customerId: string;',
      'currencyId?: string;',
      'resourceId?: string;',
      "timeRange?: 'LAST_DAY' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR';",
    ],
    response:
      '{ data: { currency: { currencyId: string; displayName: string; plural: string; singular: string; symbol: string; }; series: { featureId: string; featureName: string; points: object[]; totalCredits: number; }[]; }; }',
    markdown:
      "## get_usage\n\n`client.v1.events.credits.getUsage(customerId: string, currencyId?: string, resourceId?: string, timeRange?: 'LAST_DAY' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR'): { data: object; }`\n\n**get** `/api/v1/credits/usage`\n\nRetrieves credit usage time-series data for a customer, grouped by feature, over a specified time range.\n\n### Parameters\n\n- `customerId: string`\n  Filter by customer ID (required)\n\n- `currencyId?: string`\n  Filter by currency ID\n\n- `resourceId?: string`\n  Filter by resource ID\n\n- `timeRange?: 'LAST_DAY' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR'`\n  Time range for usage data (LAST_DAY, LAST_WEEK, LAST_MONTH, LAST_YEAR). Defaults to LAST_MONTH\n\n### Returns\n\n- `{ data: { currency: { currencyId: string; displayName: string; plural: string; singular: string; symbol: string; }; series: { featureId: string; featureName: string; points: object[]; totalCredits: number; }[]; }; }`\n  Response object\n\n  - `data: { currency: { currencyId: string; displayName: string; plural: string; singular: string; symbol: string; }; series: { featureId: string; featureName: string; points: { timestamp: string; value: number; }[]; totalCredits: number; }[]; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.events.credits.getUsage({ customerId: 'customerId' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'credits get_usage',
        example:
          "stigg v1:events:credits get-usage \\\n  --api-key 'My API Key' \\\n  --customer-id customerId",
      },
      csharp: {
        method: 'V1.Events.Credits.GetUsage',
        example:
          'CreditGetUsageParams parameters = new() { CustomerID = "customerId" };\n\nvar response = await client.V1.Events.Credits.GetUsage(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Events.Credits.GetUsage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Events.Credits.GetUsage(context.TODO(), stigg.V1EventCreditGetUsageParams{\n\t\tCustomerID: "customerId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/credits/usage \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().events().credits().getUsage',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.CreditGetUsageParams;\nimport io.stigg.models.v1.events.credits.CreditGetUsageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CreditGetUsageParams params = CreditGetUsageParams.builder()\n            .customerId("customerId")\n            .build();\n        CreditGetUsageResponse response = client.v1().events().credits().getUsage(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.get_usage',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.events.credits.get_usage(\n    customer_id="customerId",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.events.credits.get_usage',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.events.credits.get_usage(customer_id: "customerId")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.events.credits.getUsage',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.events.credits.getUsage({ customerId: 'customerId' });\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'get_auto_recharge',
    endpoint: '/api/v1/credits/auto-recharge',
    httpMethod: 'get',
    summary: 'Get automatic recharge configuration',
    description:
      'Retrieves the automatic recharge configuration for a customer and currency. Returns default settings if no configuration exists.',
    stainlessPath: '(resource) v1.events.credits > (method) get_auto_recharge',
    qualified: 'client.v1.events.credits.getAutoRecharge',
    params: ['currencyId: string;', 'customerId: string;'],
    response:
      "{ data: { id: string; createdAt: string; currencyId: string; customerId: string; grantExpirationPeriod: '1_MONTH' | '1_YEAR'; isEnabled: boolean; maxSpendLimit: number; targetBalance: number; thresholdType: 'CREDIT_AMOUNT' | 'DOLLAR_AMOUNT'; thresholdValue: number; updatedAt: string; }; }",
    markdown:
      "## get_auto_recharge\n\n`client.v1.events.credits.getAutoRecharge(currencyId: string, customerId: string): { data: object; }`\n\n**get** `/api/v1/credits/auto-recharge`\n\nRetrieves the automatic recharge configuration for a customer and currency. Returns default settings if no configuration exists.\n\n### Parameters\n\n- `currencyId: string`\n  Filter by currency ID (required)\n\n- `customerId: string`\n  Filter by customer ID (required)\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; currencyId: string; customerId: string; grantExpirationPeriod: '1_MONTH' | '1_YEAR'; isEnabled: boolean; maxSpendLimit: number; targetBalance: number; thresholdType: 'CREDIT_AMOUNT' | 'DOLLAR_AMOUNT'; thresholdValue: number; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; currencyId: string; customerId: string; grantExpirationPeriod: '1_MONTH' | '1_YEAR'; isEnabled: boolean; maxSpendLimit: number; targetBalance: number; thresholdType: 'CREDIT_AMOUNT' | 'DOLLAR_AMOUNT'; thresholdValue: number; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.events.credits.getAutoRecharge({ currencyId: 'currencyId', customerId: 'customerId' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'credits get_auto_recharge',
        example:
          "stigg v1:events:credits get-auto-recharge \\\n  --api-key 'My API Key' \\\n  --currency-id currencyId \\\n  --customer-id customerId",
      },
      csharp: {
        method: 'V1.Events.Credits.GetAutoRecharge',
        example:
          'CreditGetAutoRechargeParams parameters = new()\n{\n    CurrencyID = "currencyId",\n    CustomerID = "customerId",\n};\n\nvar response = await client.V1.Events.Credits.GetAutoRecharge(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Events.Credits.GetAutoRecharge',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Events.Credits.GetAutoRecharge(context.TODO(), stigg.V1EventCreditGetAutoRechargeParams{\n\t\tCurrencyID: "currencyId",\n\t\tCustomerID: "customerId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/credits/auto-recharge \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().events().credits().getAutoRecharge',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.CreditGetAutoRechargeParams;\nimport io.stigg.models.v1.events.credits.CreditGetAutoRechargeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CreditGetAutoRechargeParams params = CreditGetAutoRechargeParams.builder()\n            .currencyId("currencyId")\n            .customerId("customerId")\n            .build();\n        CreditGetAutoRechargeResponse response = client.v1().events().credits().getAutoRecharge(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.get_auto_recharge',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.events.credits.get_auto_recharge(\n    currency_id="currencyId",\n    customer_id="customerId",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.events.credits.get_auto_recharge',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.events.credits.get_auto_recharge(currency_id: "currencyId", customer_id: "customerId")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.events.credits.getAutoRecharge',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.events.credits.getAutoRecharge({\n  currencyId: 'currencyId',\n  customerId: 'customerId',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list_ledger',
    endpoint: '/api/v1/credits/ledger',
    httpMethod: 'get',
    summary: 'Get a list of credit ledger events',
    description: 'Retrieves a paginated list of credit ledger events for a customer.',
    stainlessPath: '(resource) v1.events.credits > (method) list_ledger',
    qualified: 'client.v1.events.credits.listLedger',
    params: [
      'customerId: string;',
      'after?: string;',
      'before?: string;',
      'currencyId?: string;',
      'limit?: number;',
      'resourceId?: string;',
    ],
    response:
      '{ amount: number; creditCurrencyId: string; creditGrantId: string; customerId: string; eventId: string; eventType: string; featureId: string; resourceId: string; timestamp: string; }',
    markdown:
      "## list_ledger\n\n`client.v1.events.credits.listLedger(customerId: string, after?: string, before?: string, currencyId?: string, limit?: number, resourceId?: string): { amount: number; creditCurrencyId: string; creditGrantId: string; customerId: string; eventId: string; eventType: string; featureId: string; resourceId: string; timestamp: string; }`\n\n**get** `/api/v1/credits/ledger`\n\nRetrieves a paginated list of credit ledger events for a customer.\n\n### Parameters\n\n- `customerId: string`\n  Filter by customer ID (required)\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `currencyId?: string`\n  Filter by currency ID\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `resourceId?: string`\n  Filter by resource ID\n\n### Returns\n\n- `{ amount: number; creditCurrencyId: string; creditGrantId: string; customerId: string; eventId: string; eventType: string; featureId: string; resourceId: string; timestamp: string; }`\n  A credit ledger event representing a change to credit balance\n\n  - `amount: number`\n  - `creditCurrencyId: string`\n  - `creditGrantId: string`\n  - `customerId: string`\n  - `eventId: string`\n  - `eventType: string`\n  - `featureId: string`\n  - `resourceId: string`\n  - `timestamp: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const creditListLedgerResponse of client.v1.events.credits.listLedger({ customerId: 'customerId' })) {\n  console.log(creditListLedgerResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'credits list_ledger',
        example:
          "stigg v1:events:credits list-ledger \\\n  --api-key 'My API Key' \\\n  --customer-id customerId",
      },
      csharp: {
        method: 'V1.Events.Credits.ListLedger',
        example:
          'CreditListLedgerParams parameters = new() { CustomerID = "customerId" };\n\nvar page = await client.V1.Events.Credits.ListLedger(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Events.Credits.ListLedger',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Events.Credits.ListLedger(context.TODO(), stigg.V1EventCreditListLedgerParams{\n\t\tCustomerID: "customerId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/credits/ledger \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().events().credits().listLedger',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.CreditListLedgerPage;\nimport io.stigg.models.v1.events.credits.CreditListLedgerParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CreditListLedgerParams params = CreditListLedgerParams.builder()\n            .customerId("customerId")\n            .build();\n        CreditListLedgerPage page = client.v1().events().credits().listLedger(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.list_ledger',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.events.credits.list_ledger(\n    customer_id="customerId",\n)\npage = page.data[0]\nprint(page.amount)',
      },
      ruby: {
        method: 'v1.events.credits.list_ledger',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.events.credits.list_ledger(customer_id: "customerId")\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.events.credits.listLedger',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const creditListLedgerResponse of client.v1.events.credits.listLedger({\n  customerId: 'customerId',\n})) {\n  console.log(creditListLedgerResponse.amount);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/credits/grants',
    httpMethod: 'get',
    summary: 'Get a list of credit grants',
    description: 'Retrieves a paginated list of credit grants for a customer.',
    stainlessPath: '(resource) v1.events.credits.grants > (method) list',
    qualified: 'client.v1.events.credits.grants.list',
    params: [
      'customerId: string;',
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'currencyId?: string;',
      'limit?: number;',
      'resourceId?: string;',
    ],
    response:
      "{ id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }",
    markdown:
      "## list\n\n`client.v1.events.credits.grants.list(customerId: string, after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, currencyId?: string, limit?: number, resourceId?: string): { id: string; amount: number; comment: string; consumedAmount: number; cost: object; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: object; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }`\n\n**get** `/api/v1/credits/grants`\n\nRetrieves a paginated list of credit grants for a customer.\n\n### Parameters\n\n- `customerId: string`\n  Filter by customer ID (required)\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `currencyId?: string`\n  Filter by currency ID\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `resourceId?: string`\n  Filter by resource ID. When omitted, only grants without a resource are returned\n\n### Returns\n\n- `{ id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }`\n  Credit grant object representing allocated credits for a customer\n\n  - `id: string`\n  - `amount: number`\n  - `comment: string`\n  - `consumedAmount: number`\n  - `cost: { amount: number; currency: string; }`\n  - `createdAt: string`\n  - `currencyId: string`\n  - `customerId: string`\n  - `displayName: string`\n  - `effectiveAt: string`\n  - `expireAt: string`\n  - `grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'`\n  - `invoiceId: string`\n  - `latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }`\n  - `metadata: object`\n  - `paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'`\n  - `priority: number`\n  - `resourceId: string`\n  - `sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'`\n  - `status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'`\n  - `updatedAt: string`\n  - `voidedAt: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const grantListResponse of client.v1.events.credits.grants.list({ customerId: 'customerId' })) {\n  console.log(grantListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'grants list',
        example:
          "stigg v1:events:credits:grants list \\\n  --api-key 'My API Key' \\\n  --customer-id customerId",
      },
      csharp: {
        method: 'V1.Events.Credits.Grants.List',
        example:
          'GrantListParams parameters = new() { CustomerID = "customerId" };\n\nvar page = await client.V1.Events.Credits.Grants.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Events.Credits.Grants.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Events.Credits.Grants.List(context.TODO(), stigg.V1EventCreditGrantListParams{\n\t\tCustomerID: "customerId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/credits/grants \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().events().credits().grants().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.grants.GrantListPage;\nimport io.stigg.models.v1.events.credits.grants.GrantListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        GrantListParams params = GrantListParams.builder()\n            .customerId("customerId")\n            .build();\n        GrantListPage page = client.v1().events().credits().grants().list(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.grants.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.events.credits.grants.list(\n    customer_id="customerId",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.events.credits.grants.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.events.credits.grants.list(customer_id: "customerId")\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.events.credits.grants.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const grantListResponse of client.v1.events.credits.grants.list({\n  customerId: 'customerId',\n})) {\n  console.log(grantListResponse.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/credits/grants',
    httpMethod: 'post',
    summary: 'Create a credit grant',
    description:
      'Creates a new credit grant for a customer with specified amount, type, and optional billing configuration.',
    stainlessPath: '(resource) v1.events.credits.grants > (method) create',
    qualified: 'client.v1.events.credits.grants.create',
    params: [
      'amount: number;',
      'currencyId: string;',
      'customerId: string;',
      'displayName: string;',
      "grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT';",
      'awaitPaymentConfirmation?: boolean;',
      'billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; invoiceDaysUntilDue?: number; isInvoicePaid?: boolean; };',
      'comment?: string;',
      'cost?: { amount: number; currency: string; };',
      'effectiveAt?: string;',
      'expireAt?: string;',
      'metadata?: object;',
      "paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE';",
      'priority?: number;',
      'resourceId?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }; }",
    markdown:
      "## create\n\n`client.v1.events.credits.grants.create(amount: number, currencyId: string, customerId: string, displayName: string, grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT', awaitPaymentConfirmation?: boolean, billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; invoiceDaysUntilDue?: number; isInvoicePaid?: boolean; }, comment?: string, cost?: { amount: number; currency: string; }, effectiveAt?: string, expireAt?: string, metadata?: object, paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE', priority?: number, resourceId?: string): { data: object; }`\n\n**post** `/api/v1/credits/grants`\n\nCreates a new credit grant for a customer with specified amount, type, and optional billing configuration.\n\n### Parameters\n\n- `amount: number`\n  The credit amount to grant\n\n- `currencyId: string`\n  The credit currency ID (required)\n\n- `customerId: string`\n  The customer ID to grant credits to (required)\n\n- `displayName: string`\n  The display name for the credit grant\n\n- `grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'`\n  The type of credit grant (PAID, PROMOTIONAL, RECURRING)\n\n- `awaitPaymentConfirmation?: boolean`\n  Whether to wait for payment confirmation before returning (default: true)\n\n- `billingInformation?: { billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }; invoiceDaysUntilDue?: number; isInvoicePaid?: boolean; }`\n  Billing information for the credit grant\n  - `billingAddress?: { city?: string; country?: string; line1?: string; line2?: string; postalCode?: string; state?: string; }`\n    The billing address\n  - `invoiceDaysUntilDue?: number`\n    Days until the invoice is due\n  - `isInvoicePaid?: boolean`\n    Whether the invoice is already paid\n\n- `comment?: string`\n  An optional comment on the credit grant\n\n- `cost?: { amount: number; currency: string; }`\n  The monetary cost of the credit grant\n  - `amount: number`\n    The price amount\n  - `currency: string`\n    ISO 4217 currency code\n\n- `effectiveAt?: string`\n  The date when the credit grant becomes effective\n\n- `expireAt?: string`\n  The date when the credit grant expires\n\n- `metadata?: object`\n  Additional metadata for the credit grant\n\n- `paymentCollectionMethod?: 'CHARGE' | 'INVOICE' | 'NONE'`\n  The payment collection method (CHARGE, INVOICE, NONE)\n\n- `priority?: number`\n  The priority of the credit grant (lower number = higher priority)\n\n- `resourceId?: string`\n  The resource ID to scope the grant to\n\n### Returns\n\n- `{ data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst creditGrantResponse = await client.v1.events.credits.grants.create({\n  amount: 0,\n  currencyId: 'currencyId',\n  customerId: 'customerId',\n  displayName: 'displayName',\n  grantType: 'PAID',\n});\n\nconsole.log(creditGrantResponse);\n```",
    perLanguage: {
      cli: {
        method: 'grants create',
        example:
          "stigg v1:events:credits:grants create \\\n  --api-key 'My API Key' \\\n  --amount 0 \\\n  --currency-id currencyId \\\n  --customer-id customerId \\\n  --display-name displayName \\\n  --grant-type PAID",
      },
      csharp: {
        method: 'V1.Events.Credits.Grants.Create',
        example:
          'GrantCreateParams parameters = new()\n{\n    Amount = 0,\n    CurrencyID = "currencyId",\n    CustomerID = "customerId",\n    DisplayName = "displayName",\n    GrantType = GrantType.Paid,\n};\n\nvar creditGrantResponse = await client.V1.Events.Credits.Grants.Create(parameters);\n\nConsole.WriteLine(creditGrantResponse);',
      },
      go: {
        method: 'client.V1.Events.Credits.Grants.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcreditGrantResponse, err := client.V1.Events.Credits.Grants.New(context.TODO(), stigg.V1EventCreditGrantNewParams{\n\t\tAmount:      0,\n\t\tCurrencyID:  "currencyId",\n\t\tCustomerID:  "customerId",\n\t\tDisplayName: "displayName",\n\t\tGrantType:   stigg.V1EventCreditGrantNewParamsGrantTypePaid,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", creditGrantResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/credits/grants \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "amount": 0,\n          "currencyId": "currencyId",\n          "customerId": "customerId",\n          "displayName": "displayName",\n          "grantType": "PAID"\n        }\'',
      },
      java: {
        method: 'v1().events().credits().grants().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.grants.CreditGrantResponse;\nimport io.stigg.models.v1.events.credits.grants.GrantCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        GrantCreateParams params = GrantCreateParams.builder()\n            .amount(0.0)\n            .currencyId("currencyId")\n            .customerId("customerId")\n            .displayName("displayName")\n            .grantType(GrantCreateParams.GrantType.PAID)\n            .build();\n        CreditGrantResponse creditGrantResponse = client.v1().events().credits().grants().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.grants.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncredit_grant_response = client.v1.events.credits.grants.create(\n    amount=0,\n    currency_id="currencyId",\n    customer_id="customerId",\n    display_name="displayName",\n    grant_type="PAID",\n)\nprint(credit_grant_response.data)',
      },
      ruby: {
        method: 'v1.events.credits.grants.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncredit_grant_response = stigg.v1.events.credits.grants.create(\n  amount: 0,\n  currency_id: "currencyId",\n  customer_id: "customerId",\n  display_name: "displayName",\n  grant_type: :PAID\n)\n\nputs(credit_grant_response)',
      },
      typescript: {
        method: 'client.v1.events.credits.grants.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst creditGrantResponse = await client.v1.events.credits.grants.create({\n  amount: 0,\n  currencyId: 'currencyId',\n  customerId: 'customerId',\n  displayName: 'displayName',\n  grantType: 'PAID',\n});\n\nconsole.log(creditGrantResponse.data);",
      },
    },
  },
  {
    name: 'void',
    endpoint: '/api/v1/credits/grants/{id}/void',
    httpMethod: 'post',
    summary: 'Void credit grant',
    description: 'Voids an existing credit grant, preventing further consumption of the remaining credits.',
    stainlessPath: '(resource) v1.events.credits.grants > (method) void',
    qualified: 'client.v1.events.credits.grants.void',
    params: ['id: string;'],
    response:
      "{ data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }; }",
    markdown:
      "## void\n\n`client.v1.events.credits.grants.void(id: string): { data: object; }`\n\n**post** `/api/v1/credits/grants/{id}/void`\n\nVoids an existing credit grant, preventing further consumption of the remaining credits.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; amount: number; comment: string; consumedAmount: number; cost: { amount: number; currency: string; }; createdAt: string; currencyId: string; customerId: string; displayName: string; effectiveAt: string; expireAt: string; grantType: 'PAID' | 'PROMOTIONAL' | 'RECURRING' | 'OVERDRAFT'; invoiceId: string; latestInvoice: { billingId: string; billingReason: 'MANUAL' | 'OTHER'; createdAt: string; currency: string; dueDate: string; errorMessage: string; paymentUrl: string; pdfUrl: string; requiresAction: boolean; status: 'OPEN' | 'PAID' | 'CANCELED'; subTotal: number; tax: number; total: number; updatedAt: string; }; metadata: object; paymentCollection: 'NOT_REQUIRED' | 'PROCESSING' | 'FAILED' | 'ACTION_REQUIRED'; priority: number; resourceId: string; sourceType: 'PRICE' | 'PLAN_ENTITLEMENT' | 'ADDON_ENTITLEMENT'; status: 'PAYMENT_PENDING' | 'ACTIVE' | 'EXPIRED' | 'VOIDED' | 'SCHEDULED'; updatedAt: string; voidedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst creditGrantResponse = await client.v1.events.credits.grants.void('x');\n\nconsole.log(creditGrantResponse);\n```",
    perLanguage: {
      cli: {
        method: 'grants void',
        example: "stigg v1:events:credits:grants void \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Events.Credits.Grants.Void',
        example:
          'GrantVoidParams parameters = new() { ID = "x" };\n\nvar creditGrantResponse = await client.V1.Events.Credits.Grants.Void(parameters);\n\nConsole.WriteLine(creditGrantResponse);',
      },
      go: {
        method: 'client.V1.Events.Credits.Grants.Void',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcreditGrantResponse, err := client.V1.Events.Credits.Grants.Void(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", creditGrantResponse.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/credits/grants/$ID/void \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().events().credits().grants().void_',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.events.credits.grants.CreditGrantResponse;\nimport io.stigg.models.v1.events.credits.grants.GrantVoidParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        CreditGrantResponse creditGrantResponse = client.v1().events().credits().grants().void_("x");\n    }\n}',
      },
      python: {
        method: 'v1.events.credits.grants.void',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\ncredit_grant_response = client.v1.events.credits.grants.void(\n    "x",\n)\nprint(credit_grant_response.data)',
      },
      ruby: {
        method: 'v1.events.credits.grants.void',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\ncredit_grant_response = stigg.v1.events.credits.grants.void("x")\n\nputs(credit_grant_response)',
      },
      typescript: {
        method: 'client.v1.events.credits.grants.void',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst creditGrantResponse = await client.v1.events.credits.grants.void('x');\n\nconsole.log(creditGrantResponse.data);",
      },
    },
  },
  {
    name: 'retrieve_feature',
    endpoint: '/api/v1/features/{id}',
    httpMethod: 'get',
    summary: 'Get a single feature by ID',
    description: 'Retrieves a feature by its unique identifier.',
    stainlessPath: '(resource) v1.features > (method) retrieve_feature',
    qualified: 'client.v1.features.retrieveFeature',
    params: ['id: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }",
    markdown:
      "## retrieve_feature\n\n`client.v1.features.retrieveFeature(id: string): { data: object; }`\n\n**get** `/api/v1/features/{id}`\n\nRetrieves a feature by its unique identifier.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst feature = await client.v1.features.retrieveFeature('x');\n\nconsole.log(feature);\n```",
    perLanguage: {
      cli: {
        method: 'features retrieve_feature',
        example: "stigg v1:features retrieve-feature \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Features.RetrieveFeature',
        example:
          'FeatureRetrieveFeatureParams parameters = new() { ID = "x" };\n\nvar feature = await client.V1.Features.RetrieveFeature(parameters);\n\nConsole.WriteLine(feature);',
      },
      go: {
        method: 'client.V1.Features.GetFeature',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfeature, err := client.V1.Features.GetFeature(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", feature.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/features/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().features().retrieveFeature',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.Feature;\nimport io.stigg.models.v1.features.FeatureRetrieveFeatureParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Feature feature = client.v1().features().retrieveFeature("x");\n    }\n}',
      },
      python: {
        method: 'v1.features.retrieve_feature',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nfeature = client.v1.features.retrieve_feature(\n    "x",\n)\nprint(feature.data)',
      },
      ruby: {
        method: 'v1.features.retrieve_feature',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nfeature = stigg.v1.features.retrieve_feature("x")\n\nputs(feature)',
      },
      typescript: {
        method: 'client.v1.features.retrieveFeature',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst feature = await client.v1.features.retrieveFeature('x');\n\nconsole.log(feature.data);",
      },
    },
  },
  {
    name: 'update_feature',
    endpoint: '/api/v1/features/{id}',
    httpMethod: 'patch',
    summary: 'Update a feature',
    description:
      "Updates an existing feature's properties such as display name, description, and configuration.",
    stainlessPath: '(resource) v1.features > (method) update_feature',
    qualified: 'client.v1.features.updateFeature',
    params: [
      'id: string;',
      'description?: string;',
      'displayName?: string;',
      'enumConfiguration?: { displayName: string; value: string; }[];',
      'featureUnits?: string;',
      'featureUnitsPlural?: string;',
      'metadata?: object;',
      "meter?: { aggregation: { function: 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'UNIQUE'; field?: string; }; filters: { conditions: { field: string; operation: string; value?: string; values?: string[]; }[]; }[]; };",
      "unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; };",
    ],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }",
    markdown:
      "## update_feature\n\n`client.v1.features.updateFeature(id: string, description?: string, displayName?: string, enumConfiguration?: { displayName: string; value: string; }[], featureUnits?: string, featureUnitsPlural?: string, metadata?: object, meter?: { aggregation: { function: 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'UNIQUE'; field?: string; }; filters: { conditions: object[]; }[]; }, unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; }): { data: object; }`\n\n**patch** `/api/v1/features/{id}`\n\nUpdates an existing feature's properties such as display name, description, and configuration.\n\n### Parameters\n\n- `id: string`\n\n- `description?: string`\n  The description for the feature\n\n- `displayName?: string`\n  The display name for the feature\n\n- `enumConfiguration?: { displayName: string; value: string; }[]`\n  The configuration data for the feature\n\n- `featureUnits?: string`\n  The units for the feature\n\n- `featureUnitsPlural?: string`\n  The plural units for the feature\n\n- `metadata?: object`\n  The additional metadata for the feature\n\n- `meter?: { aggregation: { function: 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'UNIQUE'; field?: string; }; filters: { conditions: { field: string; operation: string; value?: string; values?: string[]; }[]; }[]; }`\n  - `aggregation: { function: 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'UNIQUE'; field?: string; }`\n  - `filters: { conditions: { field: string; operation: string; value?: string; values?: string[]; }[]; }[]`\n\n- `unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; }`\n  Unit transformation to be applied to the reported usage\n  - `divide: number`\n    Divide usage by this number\n  - `featureUnits?: string`\n    Singular feature units after the transformation\n  - `featureUnitsPlural?: string`\n    Plural feature units after the transformation\n  - `round?: 'UP' | 'DOWN'`\n    After division, either round the result up or down\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst feature = await client.v1.features.updateFeature('x');\n\nconsole.log(feature);\n```",
    perLanguage: {
      cli: {
        method: 'features update_feature',
        example: "stigg v1:features update-feature \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Features.UpdateFeature',
        example:
          'FeatureUpdateFeatureParams parameters = new() { ID = "x" };\n\nvar feature = await client.V1.Features.UpdateFeature(parameters);\n\nConsole.WriteLine(feature);',
      },
      go: {
        method: 'client.V1.Features.UpdateFeature',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfeature, err := client.V1.Features.UpdateFeature(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1FeatureUpdateFeatureParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", feature.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/features/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().features().updateFeature',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.Feature;\nimport io.stigg.models.v1.features.FeatureUpdateFeatureParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Feature feature = client.v1().features().updateFeature("x");\n    }\n}',
      },
      python: {
        method: 'v1.features.update_feature',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nfeature = client.v1.features.update_feature(\n    id="x",\n)\nprint(feature.data)',
      },
      ruby: {
        method: 'v1.features.update_feature',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nfeature = stigg.v1.features.update_feature("x")\n\nputs(feature)',
      },
      typescript: {
        method: 'client.v1.features.updateFeature',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst feature = await client.v1.features.updateFeature('x');\n\nconsole.log(feature.data);",
      },
    },
  },
  {
    name: 'create_feature',
    endpoint: '/api/v1/features',
    httpMethod: 'post',
    summary: 'Create a feature',
    description: 'Creates a new feature with the specified type, metering, and configuration.',
    stainlessPath: '(resource) v1.features > (method) create_feature',
    qualified: 'client.v1.features.createFeature',
    params: [
      'id: string;',
      'displayName: string;',
      "featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM';",
      'description?: string;',
      'enumConfiguration?: { displayName: string; value: string; }[];',
      "featureStatus?: 'NEW' | 'SUSPENDED' | 'ACTIVE';",
      'featureUnits?: string;',
      'featureUnitsPlural?: string;',
      'metadata?: object;',
      "meterType?: 'None' | 'FLUCTUATING' | 'INCREMENTAL';",
      "unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; };",
    ],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }",
    markdown:
      "## create_feature\n\n`client.v1.features.createFeature(id: string, displayName: string, featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM', description?: string, enumConfiguration?: { displayName: string; value: string; }[], featureStatus?: 'NEW' | 'SUSPENDED' | 'ACTIVE', featureUnits?: string, featureUnitsPlural?: string, metadata?: object, meterType?: 'None' | 'FLUCTUATING' | 'INCREMENTAL', unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; }): { data: object; }`\n\n**post** `/api/v1/features`\n\nCreates a new feature with the specified type, metering, and configuration.\n\n### Parameters\n\n- `id: string`\n  The unique identifier for the feature\n\n- `displayName: string`\n  The display name for the feature\n\n- `featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'`\n  The type of the feature\n\n- `description?: string`\n  The description for the feature\n\n- `enumConfiguration?: { displayName: string; value: string; }[]`\n  The configuration data for the feature\n\n- `featureStatus?: 'NEW' | 'SUSPENDED' | 'ACTIVE'`\n  The status of the feature\n\n- `featureUnits?: string`\n  The units for the feature\n\n- `featureUnitsPlural?: string`\n  The plural units for the feature\n\n- `metadata?: object`\n  The additional metadata for the feature\n\n- `meterType?: 'None' | 'FLUCTUATING' | 'INCREMENTAL'`\n  The meter type for the feature\n\n- `unitTransformation?: { divide: number; featureUnits?: string; featureUnitsPlural?: string; round?: 'UP' | 'DOWN'; }`\n  Unit transformation to be applied to the reported usage\n  - `divide: number`\n    Divide usage by this number\n  - `featureUnits?: string`\n    Singular feature units after the transformation\n  - `featureUnitsPlural?: string`\n    Plural feature units after the transformation\n  - `round?: 'UP' | 'DOWN'`\n    After division, either round the result up or down\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst feature = await client.v1.features.createFeature({\n  id: 'id',\n  displayName: 'displayName',\n  featureType: 'BOOLEAN',\n});\n\nconsole.log(feature);\n```",
    perLanguage: {
      cli: {
        method: 'features create_feature',
        example:
          "stigg v1:features create-feature \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --display-name displayName \\\n  --feature-type BOOLEAN",
      },
      csharp: {
        method: 'V1.Features.CreateFeature',
        example:
          'FeatureCreateFeatureParams parameters = new()\n{\n    ID = "id",\n    DisplayName = "displayName",\n    FeatureType = FeatureType.Boolean,\n};\n\nvar feature = await client.V1.Features.CreateFeature(parameters);\n\nConsole.WriteLine(feature);',
      },
      go: {
        method: 'client.V1.Features.NewFeature',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfeature, err := client.V1.Features.NewFeature(context.TODO(), stigg.V1FeatureNewFeatureParams{\n\t\tID:          "id",\n\t\tDisplayName: "displayName",\n\t\tFeatureType: stigg.V1FeatureNewFeatureParamsFeatureTypeBoolean,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", feature.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/features \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "displayName": "displayName",\n          "featureType": "BOOLEAN"\n        }\'',
      },
      java: {
        method: 'v1().features().createFeature',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.Feature;\nimport io.stigg.models.v1.features.FeatureCreateFeatureParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        FeatureCreateFeatureParams params = FeatureCreateFeatureParams.builder()\n            .id("id")\n            .displayName("displayName")\n            .featureType(FeatureCreateFeatureParams.FeatureType.BOOLEAN)\n            .build();\n        Feature feature = client.v1().features().createFeature(params);\n    }\n}',
      },
      python: {
        method: 'v1.features.create_feature',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nfeature = client.v1.features.create_feature(\n    id="id",\n    display_name="displayName",\n    feature_type="BOOLEAN",\n)\nprint(feature.data)',
      },
      ruby: {
        method: 'v1.features.create_feature',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nfeature = stigg.v1.features.create_feature(id: "id", display_name: "displayName", feature_type: :BOOLEAN)\n\nputs(feature)',
      },
      typescript: {
        method: 'client.v1.features.createFeature',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst feature = await client.v1.features.createFeature({\n  id: 'id',\n  displayName: 'displayName',\n  featureType: 'BOOLEAN',\n});\n\nconsole.log(feature.data);",
      },
    },
  },
  {
    name: 'list_features',
    endpoint: '/api/v1/features',
    httpMethod: 'get',
    summary: 'Get a list of features',
    description: 'Retrieves a paginated list of features in the environment.',
    stainlessPath: '(resource) v1.features > (method) list_features',
    qualified: 'client.v1.features.listFeatures',
    params: [
      'id?: string;',
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'featureType?: string;',
      'limit?: number;',
      'meterType?: string;',
      'status?: string;',
    ],
    response:
      "{ id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }",
    markdown:
      "## list_features\n\n`client.v1.features.listFeatures(id?: string, after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, featureType?: string, limit?: number, meterType?: string, status?: string): { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: object[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: object; updatedAt: string; }`\n\n**get** `/api/v1/features`\n\nRetrieves a paginated list of features in the environment.\n\n### Parameters\n\n- `id?: string`\n  Filter by entity ID\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `featureType?: string`\n  Filter by feature type. Supports comma-separated values for multiple types\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `meterType?: string`\n  Filter by meter type. Supports comma-separated values for multiple types\n\n- `status?: string`\n  Filter by feature status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n  Feature configuration object\n\n  - `id: string`\n  - `createdAt: string`\n  - `description: string`\n  - `displayName: string`\n  - `enumConfiguration: { displayName: string; value: string; }[]`\n  - `featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'`\n  - `featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'`\n  - `featureUnits: string`\n  - `featureUnitsPlural: string`\n  - `metadata: object`\n  - `meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'`\n  - `unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }`\n  - `updatedAt: string`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const featureListFeaturesResponse of client.v1.features.listFeatures()) {\n  console.log(featureListFeaturesResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'features list_features',
        example: "stigg v1:features list-features \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Features.ListFeatures',
        example:
          'FeatureListFeaturesParams parameters = new();\n\nvar page = await client.V1.Features.ListFeatures(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Features.ListFeatures',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Features.ListFeatures(context.TODO(), stigg.V1FeatureListFeaturesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/features \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().features().listFeatures',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.FeatureListFeaturesPage;\nimport io.stigg.models.v1.features.FeatureListFeaturesParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        FeatureListFeaturesPage page = client.v1().features().listFeatures();\n    }\n}',
      },
      python: {
        method: 'v1.features.list_features',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.features.list_features()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.features.list_features',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.features.list_features\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.features.listFeatures',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const featureListFeaturesResponse of client.v1.features.listFeatures()) {\n  console.log(featureListFeaturesResponse.id);\n}",
      },
    },
  },
  {
    name: 'archive_feature',
    endpoint: '/api/v1/features/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive feature',
    description: 'Archives a feature, preventing it from being used in new entitlements.',
    stainlessPath: '(resource) v1.features > (method) archive_feature',
    qualified: 'client.v1.features.archiveFeature',
    params: ['id: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }",
    markdown:
      "## archive_feature\n\n`client.v1.features.archiveFeature(id: string): { data: object; }`\n\n**post** `/api/v1/features/{id}/archive`\n\nArchives a feature, preventing it from being used in new entitlements.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst feature = await client.v1.features.archiveFeature('x');\n\nconsole.log(feature);\n```",
    perLanguage: {
      cli: {
        method: 'features archive_feature',
        example: "stigg v1:features archive-feature \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Features.ArchiveFeature',
        example:
          'FeatureArchiveFeatureParams parameters = new() { ID = "x" };\n\nvar feature = await client.V1.Features.ArchiveFeature(parameters);\n\nConsole.WriteLine(feature);',
      },
      go: {
        method: 'client.V1.Features.ArchiveFeature',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfeature, err := client.V1.Features.ArchiveFeature(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", feature.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/features/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().features().archiveFeature',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.Feature;\nimport io.stigg.models.v1.features.FeatureArchiveFeatureParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Feature feature = client.v1().features().archiveFeature("x");\n    }\n}',
      },
      python: {
        method: 'v1.features.archive_feature',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nfeature = client.v1.features.archive_feature(\n    "x",\n)\nprint(feature.data)',
      },
      ruby: {
        method: 'v1.features.archive_feature',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nfeature = stigg.v1.features.archive_feature("x")\n\nputs(feature)',
      },
      typescript: {
        method: 'client.v1.features.archiveFeature',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst feature = await client.v1.features.archiveFeature('x');\n\nconsole.log(feature.data);",
      },
    },
  },
  {
    name: 'unarchive_feature',
    endpoint: '/api/v1/features/{id}/unarchive',
    httpMethod: 'post',
    summary: 'Unarchive feature',
    description: 'Restores an archived feature, allowing it to be used in entitlements again.',
    stainlessPath: '(resource) v1.features > (method) unarchive_feature',
    qualified: 'client.v1.features.unarchiveFeature',
    params: ['id: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }",
    markdown:
      "## unarchive_feature\n\n`client.v1.features.unarchiveFeature(id: string): { data: object; }`\n\n**post** `/api/v1/features/{id}/unarchive`\n\nRestores an archived feature, allowing it to be used in entitlements again.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; enumConfiguration: { displayName: string; value: string; }[]; featureStatus: 'NEW' | 'SUSPENDED' | 'ACTIVE'; featureType: 'BOOLEAN' | 'NUMBER' | 'ENUM'; featureUnits: string; featureUnitsPlural: string; metadata: object; meterType: 'None' | 'FLUCTUATING' | 'INCREMENTAL'; unitTransformation: { divide: number; featureUnits: string; featureUnitsPlural: string; round: 'UP' | 'DOWN'; }; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst feature = await client.v1.features.unarchiveFeature('x');\n\nconsole.log(feature);\n```",
    perLanguage: {
      cli: {
        method: 'features unarchive_feature',
        example: "stigg v1:features unarchive-feature \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Features.UnarchiveFeature',
        example:
          'FeatureUnarchiveFeatureParams parameters = new() { ID = "x" };\n\nvar feature = await client.V1.Features.UnarchiveFeature(parameters);\n\nConsole.WriteLine(feature);',
      },
      go: {
        method: 'client.V1.Features.UnarchiveFeature',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfeature, err := client.V1.Features.UnarchiveFeature(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", feature.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/features/$ID/unarchive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().features().unarchiveFeature',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.features.Feature;\nimport io.stigg.models.v1.features.FeatureUnarchiveFeatureParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Feature feature = client.v1().features().unarchiveFeature("x");\n    }\n}',
      },
      python: {
        method: 'v1.features.unarchive_feature',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nfeature = client.v1.features.unarchive_feature(\n    "x",\n)\nprint(feature.data)',
      },
      ruby: {
        method: 'v1.features.unarchive_feature',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nfeature = stigg.v1.features.unarchive_feature("x")\n\nputs(feature)',
      },
      typescript: {
        method: 'client.v1.features.unarchiveFeature',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst feature = await client.v1.features.unarchiveFeature('x');\n\nconsole.log(feature.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/addons',
    httpMethod: 'get',
    summary: 'Get a list of addons',
    description: 'Retrieves a paginated list of addons in the environment.',
    stainlessPath: '(resource) v1.addons > (method) list',
    qualified: 'client.v1.addons.list',
    params: [
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'limit?: number;',
      'productId?: string;',
      'status?: string;',
    ],
    response:
      "{ id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }",
    markdown:
      "## list\n\n`client.v1.addons.list(after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, limit?: number, productId?: string, status?: string): { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: object[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n**get** `/api/v1/addons`\n\nRetrieves a paginated list of addons in the environment.\n\n### Parameters\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `productId?: string`\n  Filter by product ID\n\n- `status?: string`\n  Filter by status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n  Addon configuration object\n\n  - `id: string`\n  - `billingId: string`\n  - `createdAt: string`\n  - `dependencies: string[]`\n  - `description: string`\n  - `displayName: string`\n  - `entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]`\n  - `isLatest: boolean`\n  - `maxQuantity: number`\n  - `metadata: object`\n  - `pricingType: 'FREE' | 'PAID' | 'CUSTOM'`\n  - `productId: string`\n  - `status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'`\n  - `updatedAt: string`\n  - `versionNumber: number`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const addonListResponse of client.v1.addons.list()) {\n  console.log(addonListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'addons list',
        example: "stigg v1:addons list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Addons.List',
        example:
          'AddonListParams parameters = new();\n\nvar page = await client.V1.Addons.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Addons.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Addons.List(context.TODO(), stigg.V1AddonListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/addons \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.AddonListPage;\nimport io.stigg.models.v1.addons.AddonListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        AddonListPage page = client.v1().addons().list();\n    }\n}',
      },
      python: {
        method: 'v1.addons.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.addons.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.addons.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.addons.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.addons.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const addonListResponse of client.v1.addons.list()) {\n  console.log(addonListResponse.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/addons',
    httpMethod: 'post',
    summary: 'Create an addon',
    description: 'Creates a new addon in draft status, associated with a specific product.',
    stainlessPath: '(resource) v1.addons > (method) create',
    qualified: 'client.v1.addons.create',
    params: [
      'id: string;',
      'displayName: string;',
      'productId: string;',
      'billingId?: string;',
      'description?: string;',
      'maxQuantity?: number;',
      'metadata?: object;',
      "pricingType?: 'FREE' | 'PAID' | 'CUSTOM';",
      "status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';",
    ],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## create\n\n`client.v1.addons.create(id: string, displayName: string, productId: string, billingId?: string, description?: string, maxQuantity?: number, metadata?: object, pricingType?: 'FREE' | 'PAID' | 'CUSTOM', status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'): { data: object; }`\n\n**post** `/api/v1/addons`\n\nCreates a new addon in draft status, associated with a specific product.\n\n### Parameters\n\n- `id: string`\n  The unique identifier for the entity\n\n- `displayName: string`\n  The display name of the package\n\n- `productId: string`\n  The product id of the package\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `description?: string`\n  The description of the package\n\n- `maxQuantity?: number`\n  The maximum quantity of this addon that can be added to a subscription\n\n- `metadata?: object`\n  Metadata associated with the entity\n\n- `pricingType?: 'FREE' | 'PAID' | 'CUSTOM'`\n  The pricing type of the package\n\n- `status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'`\n  The status of the package\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addon = await client.v1.addons.create({\n  id: 'id',\n  displayName: 'displayName',\n  productId: 'productId',\n});\n\nconsole.log(addon);\n```",
    perLanguage: {
      cli: {
        method: 'addons create',
        example:
          "stigg v1:addons create \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --display-name displayName \\\n  --product-id productId",
      },
      csharp: {
        method: 'V1.Addons.Create',
        example:
          'AddonCreateParams parameters = new()\n{\n    ID = "id",\n    DisplayName = "displayName",\n    ProductID = "productId",\n};\n\nvar addon = await client.V1.Addons.Create(parameters);\n\nConsole.WriteLine(addon);',
      },
      go: {
        method: 'client.V1.Addons.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddon, err := client.V1.Addons.New(context.TODO(), stigg.V1AddonNewParams{\n\t\tID:          "id",\n\t\tDisplayName: "displayName",\n\t\tProductID:   "productId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addon.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "displayName": "displayName",\n          "productId": "productId"\n        }\'',
      },
      java: {
        method: 'v1().addons().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.Addon;\nimport io.stigg.models.v1.addons.AddonCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        AddonCreateParams params = AddonCreateParams.builder()\n            .id("id")\n            .displayName("displayName")\n            .productId("productId")\n            .build();\n        Addon addon = client.v1().addons().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.addons.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon = client.v1.addons.create(\n    id="id",\n    display_name="displayName",\n    product_id="productId",\n)\nprint(addon.data)',
      },
      ruby: {
        method: 'v1.addons.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon = stigg.v1.addons.create(id: "id", display_name: "displayName", product_id: "productId")\n\nputs(addon)',
      },
      typescript: {
        method: 'client.v1.addons.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addon = await client.v1.addons.create({\n  id: 'id',\n  displayName: 'displayName',\n  productId: 'productId',\n});\n\nconsole.log(addon.data);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/addons/{id}',
    httpMethod: 'get',
    summary: 'Get a single addon by ID',
    description: 'Retrieves an addon by its unique identifier, including entitlements and pricing details.',
    stainlessPath: '(resource) v1.addons > (method) retrieve',
    qualified: 'client.v1.addons.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## retrieve\n\n`client.v1.addons.retrieve(id: string): { data: object; }`\n\n**get** `/api/v1/addons/{id}`\n\nRetrieves an addon by its unique identifier, including entitlements and pricing details.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addon = await client.v1.addons.retrieve('x');\n\nconsole.log(addon);\n```",
    perLanguage: {
      cli: {
        method: 'addons retrieve',
        example: "stigg v1:addons retrieve \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Addons.Retrieve',
        example:
          'AddonRetrieveParams parameters = new() { ID = "x" };\n\nvar addon = await client.V1.Addons.Retrieve(parameters);\n\nConsole.WriteLine(addon);',
      },
      go: {
        method: 'client.V1.Addons.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddon, err := client.V1.Addons.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addon.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/addons/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.Addon;\nimport io.stigg.models.v1.addons.AddonRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Addon addon = client.v1().addons().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'v1.addons.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon = client.v1.addons.retrieve(\n    "x",\n)\nprint(addon.data)',
      },
      ruby: {
        method: 'v1.addons.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon = stigg.v1.addons.retrieve("x")\n\nputs(addon)',
      },
      typescript: {
        method: 'client.v1.addons.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addon = await client.v1.addons.retrieve('x');\n\nconsole.log(addon.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/addons/{id}',
    httpMethod: 'patch',
    summary: 'Update a addon',
    description: "Updates an existing addon's properties such as display name, description, and metadata.",
    stainlessPath: '(resource) v1.addons > (method) update',
    qualified: 'client.v1.addons.update',
    params: [
      'id: string;',
      'billingId?: string;',
      "charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]; };",
      'dependencies?: string[];',
      'description?: string;',
      'displayName?: string;',
      'maxQuantity?: number;',
      'metadata?: object;',
      "status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';",
    ],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## update\n\n`client.v1.addons.update(id: string, billingId?: string, charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: object; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: object[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: object; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: object[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: object; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: object; yearlyResetPeriodConfiguration?: object; }[]; }, dependencies?: string[], description?: string, displayName?: string, maxQuantity?: number, metadata?: object, status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'): { data: object; }`\n\n**patch** `/api/v1/addons/{id}`\n\nUpdates an existing addon's properties such as display name, description, and metadata.\n\n### Parameters\n\n- `id: string`\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]; }`\n  Pricing configuration to set on the addon draft\n  - `pricingType: 'FREE' | 'PAID' | 'CUSTOM'`\n    The pricing type (FREE, PAID, or CUSTOM)\n  - `billingId?: string`\n    Deprecated: billing integration ID\n  - `minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]`\n    Minimum spend configuration per billing period\n  - `overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'`\n    When overage charges are billed\n  - `overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: { amount: number; currency?: string; }; unitPrice?: { amount: number; currency?: string; }; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]`\n    Array of overage pricing model configurations\n  - `pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: { amount: number; currency?: string; }; unitPrice?: { amount: number; currency?: string; }; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]`\n    Array of pricing model configurations\n\n- `dependencies?: string[]`\n  List of addons the addon is dependant on\n\n- `description?: string`\n  The description of the package\n\n- `displayName?: string`\n  The display name of the package\n\n- `maxQuantity?: number`\n  The maximum quantity of this addon that can be added to a subscription\n\n- `metadata?: object`\n  Metadata associated with the entity\n\n- `status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'`\n  The status of the package\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addon = await client.v1.addons.update('x');\n\nconsole.log(addon);\n```",
    perLanguage: {
      cli: {
        method: 'addons update',
        example: "stigg v1:addons update \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Addons.Update',
        example:
          'AddonUpdateParams parameters = new() { ID = "x" };\n\nvar addon = await client.V1.Addons.Update(parameters);\n\nConsole.WriteLine(addon);',
      },
      go: {
        method: 'client.V1.Addons.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddon, err := client.V1.Addons.Update(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1AddonUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addon.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/addons/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().addons().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.Addon;\nimport io.stigg.models.v1.addons.AddonUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Addon addon = client.v1().addons().update("x");\n    }\n}',
      },
      python: {
        method: 'v1.addons.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon = client.v1.addons.update(\n    id="x",\n)\nprint(addon.data)',
      },
      ruby: {
        method: 'v1.addons.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon = stigg.v1.addons.update("x")\n\nputs(addon)',
      },
      typescript: {
        method: 'client.v1.addons.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addon = await client.v1.addons.update('x');\n\nconsole.log(addon.data);",
      },
    },
  },
  {
    name: 'archive',
    endpoint: '/api/v1/addons/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive an addon',
    description: 'Archives an addon, preventing it from being used in new subscriptions.',
    stainlessPath: '(resource) v1.addons > (method) archive',
    qualified: 'client.v1.addons.archive',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## archive\n\n`client.v1.addons.archive(id: string): { data: object; }`\n\n**post** `/api/v1/addons/{id}/archive`\n\nArchives an addon, preventing it from being used in new subscriptions.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addon = await client.v1.addons.archive('x');\n\nconsole.log(addon);\n```",
    perLanguage: {
      cli: {
        method: 'addons archive',
        example: "stigg v1:addons archive \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Addons.Archive',
        example:
          'AddonArchiveParams parameters = new() { ID = "x" };\n\nvar addon = await client.V1.Addons.Archive(parameters);\n\nConsole.WriteLine(addon);',
      },
      go: {
        method: 'client.V1.Addons.Archive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddon, err := client.V1.Addons.Archive(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addon.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().archive',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.Addon;\nimport io.stigg.models.v1.addons.AddonArchiveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Addon addon = client.v1().addons().archive("x");\n    }\n}',
      },
      python: {
        method: 'v1.addons.archive',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon = client.v1.addons.archive(\n    "x",\n)\nprint(addon.data)',
      },
      ruby: {
        method: 'v1.addons.archive',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon = stigg.v1.addons.archive("x")\n\nputs(addon)',
      },
      typescript: {
        method: 'client.v1.addons.archive',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addon = await client.v1.addons.archive('x');\n\nconsole.log(addon.data);",
      },
    },
  },
  {
    name: 'publish',
    endpoint: '/api/v1/addons/{id}/publish',
    httpMethod: 'post',
    summary: 'Publish addon',
    description: 'Publishes a draft addon, making it available for use in subscriptions.',
    stainlessPath: '(resource) v1.addons > (method) publish',
    qualified: 'client.v1.addons.publish',
    params: ['id: string;', "migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';"],
    response: '{ data: { taskId: string; }; }',
    markdown:
      "## publish\n\n`client.v1.addons.publish(id: string, migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS'): { data: object; }`\n\n**post** `/api/v1/addons/{id}/publish`\n\nPublishes a draft addon, making it available for use in subscriptions.\n\n### Parameters\n\n- `id: string`\n\n- `migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS'`\n  The migration type of the package\n\n### Returns\n\n- `{ data: { taskId: string; }; }`\n  Response containing task ID for publish operation\n\n  - `data: { taskId: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.addons.publish('x', { migrationType: 'NEW_CUSTOMERS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'addons publish',
        example:
          "stigg v1:addons publish \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --migration-type NEW_CUSTOMERS",
      },
      csharp: {
        method: 'V1.Addons.Publish',
        example:
          'AddonPublishParams parameters = new()\n{\n    ID = "x",\n    MigrationType = MigrationType.NewCustomers,\n};\n\nvar response = await client.V1.Addons.Publish(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Addons.Publish',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Addons.Publish(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1AddonPublishParams{\n\t\t\tMigrationType: stigg.V1AddonPublishParamsMigrationTypeNewCustomers,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ID/publish \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "migrationType": "NEW_CUSTOMERS"\n        }\'',
      },
      java: {
        method: 'v1().addons().publish',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.AddonPublishParams;\nimport io.stigg.models.v1.addons.AddonPublishResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        AddonPublishParams params = AddonPublishParams.builder()\n            .id("x")\n            .migrationType(AddonPublishParams.MigrationType.NEW_CUSTOMERS)\n            .build();\n        AddonPublishResponse response = client.v1().addons().publish(params);\n    }\n}',
      },
      python: {
        method: 'v1.addons.publish',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.addons.publish(\n    id="x",\n    migration_type="NEW_CUSTOMERS",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.addons.publish',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.addons.publish("x", migration_type: :NEW_CUSTOMERS)\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.addons.publish',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.addons.publish('x', { migrationType: 'NEW_CUSTOMERS' });\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'create_draft',
    endpoint: '/api/v1/addons/{id}/draft',
    httpMethod: 'post',
    summary: 'Create addon draft',
    description: 'Creates a draft version of an existing addon for modification before publishing.',
    stainlessPath: '(resource) v1.addons > (method) create_draft',
    qualified: 'client.v1.addons.createDraft',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## create_draft\n\n`client.v1.addons.createDraft(id: string): { data: object; }`\n\n**post** `/api/v1/addons/{id}/draft`\n\nCreates a draft version of an existing addon for modification before publishing.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; createdAt: string; dependencies: string[]; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; maxQuantity: number; metadata: object; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addon = await client.v1.addons.createDraft('x');\n\nconsole.log(addon);\n```",
    perLanguage: {
      cli: {
        method: 'addons create_draft',
        example: "stigg v1:addons create-draft \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Addons.CreateDraft',
        example:
          'AddonCreateDraftParams parameters = new() { ID = "x" };\n\nvar addon = await client.V1.Addons.CreateDraft(parameters);\n\nConsole.WriteLine(addon);',
      },
      go: {
        method: 'client.V1.Addons.NewDraft',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddon, err := client.V1.Addons.NewDraft(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addon.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ID/draft \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().createDraft',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.Addon;\nimport io.stigg.models.v1.addons.AddonCreateDraftParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Addon addon = client.v1().addons().createDraft("x");\n    }\n}',
      },
      python: {
        method: 'v1.addons.create_draft',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon = client.v1.addons.create_draft(\n    "x",\n)\nprint(addon.data)',
      },
      ruby: {
        method: 'v1.addons.create_draft',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon = stigg.v1.addons.create_draft("x")\n\nputs(addon)',
      },
      typescript: {
        method: 'client.v1.addons.createDraft',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addon = await client.v1.addons.createDraft('x');\n\nconsole.log(addon.data);",
      },
    },
  },
  {
    name: 'remove_draft',
    endpoint: '/api/v1/addons/{id}/draft',
    httpMethod: 'delete',
    summary: 'Remove addon draft',
    description: 'Removes a draft version of an addon.',
    stainlessPath: '(resource) v1.addons > (method) remove_draft',
    qualified: 'client.v1.addons.removeDraft',
    params: ['id: string;'],
    response: '{ data: { id: string; }; }',
    markdown:
      "## remove_draft\n\n`client.v1.addons.removeDraft(id: string): { data: object; }`\n\n**delete** `/api/v1/addons/{id}/draft`\n\nRemoves a draft version of an addon.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; }; }`\n  Response confirming the addon draft was removed.\n\n  - `data: { id: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.addons.removeDraft('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'addons remove_draft',
        example: "stigg v1:addons remove-draft \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Addons.RemoveDraft',
        example:
          'AddonRemoveDraftParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Addons.RemoveDraft(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Addons.RemoveDraft',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Addons.RemoveDraft(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ID/draft \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().removeDraft',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.AddonRemoveDraftParams;\nimport io.stigg.models.v1.addons.AddonRemoveDraftResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        AddonRemoveDraftResponse response = client.v1().addons().removeDraft("x");\n    }\n}',
      },
      python: {
        method: 'v1.addons.remove_draft',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.addons.remove_draft(\n    "x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.addons.remove_draft',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.addons.remove_draft("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.addons.removeDraft',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.addons.removeDraft('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/addons/{addonId}/entitlements',
    httpMethod: 'get',
    summary: 'Get a list of addon entitlements',
    description: 'Retrieves a list of entitlements for an addon.',
    stainlessPath: '(resource) v1.addons.entitlements > (method) list',
    qualified: 'client.v1.addons.entitlements.list',
    params: ['addonId: string;'],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; pagination: { next: string; prev: string; }; }",
    markdown:
      "## list\n\n`client.v1.addons.entitlements.list(addonId: string): { data: object | object[]; pagination: object; }`\n\n**get** `/api/v1/addons/{addonId}/entitlements`\n\nRetrieves a list of entitlements for an addon.\n\n### Parameters\n\n- `addonId: string`\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; pagination: { next: string; prev: string; }; }`\n  Response list object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]`\n  - `pagination: { next: string; prev: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst entitlements = await client.v1.addons.entitlements.list('addonId');\n\nconsole.log(entitlements);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements list',
        example: "stigg v1:addons:entitlements list \\\n  --api-key 'My API Key' \\\n  --addon-id addonId",
      },
      csharp: {
        method: 'V1.Addons.Entitlements.List',
        example:
          'EntitlementListParams parameters = new() { AddonID = "addonId" };\n\nvar entitlements = await client.V1.Addons.Entitlements.List(parameters);\n\nConsole.WriteLine(entitlements);',
      },
      go: {
        method: 'client.V1.Addons.Entitlements.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tentitlements, err := client.V1.Addons.Entitlements.List(context.TODO(), "addonId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entitlements.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ADDON_ID/entitlements \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().entitlements().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.entitlements.EntitlementListParams;\nimport io.stigg.models.v1.addons.entitlements.EntitlementListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementListResponse entitlements = client.v1().addons().entitlements().list("addonId");\n    }\n}',
      },
      python: {
        method: 'v1.addons.entitlements.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nentitlements = client.v1.addons.entitlements.list(\n    "addonId",\n)\nprint(entitlements.data)',
      },
      ruby: {
        method: 'v1.addons.entitlements.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nentitlements = stigg.v1.addons.entitlements.list("addonId")\n\nputs(entitlements)',
      },
      typescript: {
        method: 'client.v1.addons.entitlements.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst entitlements = await client.v1.addons.entitlements.list('addonId');\n\nconsole.log(entitlements.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/addons/{addonId}/entitlements',
    httpMethod: 'post',
    summary: 'Create addon entitlements',
    description: 'Creates one or more entitlements (feature or credit) on a draft addon.',
    stainlessPath: '(resource) v1.addons.entitlements > (method) create',
    qualified: 'client.v1.addons.entitlements.create',
    params: [
      'addonId: string;',
      "entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[];",
    ],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; }",
    markdown:
      "## create\n\n`client.v1.addons.entitlements.create(addonId: string, entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[]): { data: object | object[]; }`\n\n**post** `/api/v1/addons/{addonId}/entitlements`\n\nCreates one or more entitlements (feature or credit) on a draft addon.\n\n### Parameters\n\n- `addonId: string`\n\n- `entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[]`\n  Entitlements to create\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; }`\n  Response object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst entitlement = await client.v1.addons.entitlements.create('addonId', { entitlements: [{ id: 'id', type: 'FEATURE' }] });\n\nconsole.log(entitlement);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements create',
        example:
          "stigg v1:addons:entitlements create \\\n  --api-key 'My API Key' \\\n  --addon-id addonId \\\n  --entitlement '{id: id, type: FEATURE}'",
      },
      csharp: {
        method: 'V1.Addons.Entitlements.Create',
        example:
          'EntitlementCreateParams parameters = new()\n{\n    AddonID = "addonId",\n    Entitlements =\n    [\n        new Feature()\n        {\n            ID = "id",\n            Behavior = Behavior.Increment,\n            Description = "description",\n            DisplayNameOverride = "displayNameOverride",\n            EnumValues =\n            [\n                "string"\n            ],\n            HasSoftLimit = true,\n            HasUnlimitedUsage = true,\n            HiddenFromWidgets =\n            [\n                HiddenFromWidget.Paywall\n            ],\n            IsCustom = true,\n            IsGranted = true,\n            MonthlyResetPeriodConfiguration = new(\n                AccordingTo.SubscriptionStart\n            ),\n            Order = 0,\n            ResetPeriod = ResetPeriod.Year,\n            UsageLimit = 0,\n            WeeklyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n            YearlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        },\n    ],\n};\n\nvar entitlement = await client.V1.Addons.Entitlements.Create(parameters);\n\nConsole.WriteLine(entitlement);',
      },
      go: {
        method: 'client.V1.Addons.Entitlements.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tentitlement, err := client.V1.Addons.Entitlements.New(\n\t\tcontext.TODO(),\n\t\t"addonId",\n\t\tstigg.V1AddonEntitlementNewParams{\n\t\t\tEntitlements: []stigg.V1AddonEntitlementNewParamsEntitlementUnion{{\n\t\t\t\tOfFeature: &stigg.V1AddonEntitlementNewParamsEntitlementFeature{\n\t\t\t\t\tID: "id",\n\t\t\t\t},\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ADDON_ID/entitlements \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "entitlements": [\n            {\n              "id": "id",\n              "type": "FEATURE"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().addons().entitlements().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.entitlements.EntitlementCreateParams;\nimport io.stigg.models.v1.addons.entitlements.EntitlementCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementCreateParams params = EntitlementCreateParams.builder()\n            .addonId("addonId")\n            .addFeatureEntitlement("id")\n            .build();\n        EntitlementCreateResponse entitlement = client.v1().addons().entitlements().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.addons.entitlements.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nentitlement = client.v1.addons.entitlements.create(\n    addon_id="addonId",\n    entitlements=[{\n        "id": "id",\n        "type": "FEATURE",\n    }],\n)\nprint(entitlement.data)',
      },
      ruby: {
        method: 'v1.addons.entitlements.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nentitlement = stigg.v1.addons.entitlements.create("addonId", entitlements: [{id: "id", type: :FEATURE}])\n\nputs(entitlement)',
      },
      typescript: {
        method: 'client.v1.addons.entitlements.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst entitlement = await client.v1.addons.entitlements.create('addonId', {\n  entitlements: [{ id: 'id', type: 'FEATURE' }],\n});\n\nconsole.log(entitlement.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/addons/{addonId}/entitlements/{id}',
    httpMethod: 'patch',
    summary: 'Update a addon entitlement',
    description: 'Updates an existing entitlement on a draft addon.',
    stainlessPath: '(resource) v1.addons.entitlements > (method) update',
    qualified: 'client.v1.addons.entitlements.update',
    params: [
      'addonId: string;',
      'id: string;',
      "body: { type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { type: 'CREDIT'; amount?: number; behavior?: 'Increment' | 'Override'; cadence?: 'MONTH' | 'YEAR'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; };",
    ],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }",
    perLanguage: {
      cli: {
        method: 'entitlements update',
        example:
          "stigg v1:addons:entitlements update \\\n  --api-key 'My API Key' \\\n  --addon-id addonId \\\n  --id id \\\n  --type FEATURE",
      },
      csharp: {
        method: 'V1.Addons.Entitlements.Update',
        example:
          'EntitlementUpdateParams parameters = new()\n{\n    AddonID = "addonId",\n    ID = "id",\n    Body = new Feature()\n    {\n        Behavior = Behavior.Increment,\n        Description = "description",\n        DisplayNameOverride = "displayNameOverride",\n        EnumValues =\n        [\n            "string"\n        ],\n        HasSoftLimit = true,\n        HasUnlimitedUsage = true,\n        HiddenFromWidgets =\n        [\n            HiddenFromWidget.Paywall\n        ],\n        IsCustom = true,\n        IsGranted = true,\n        MonthlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        Order = 0,\n        ResetPeriod = ResetPeriod.Year,\n        UsageLimit = 0,\n        WeeklyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        YearlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n    },\n};\n\nvar addonPackageEntitlement = await client.V1.Addons.Entitlements.Update(parameters);\n\nConsole.WriteLine(addonPackageEntitlement);',
      },
      go: {
        method: 'client.V1.Addons.Entitlements.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddonPackageEntitlement, err := client.V1.Addons.Entitlements.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tstigg.V1AddonEntitlementUpdateParams{\n\t\t\tAddonID:   "addonId",\n\t\t\tOfFeature: &stigg.V1AddonEntitlementUpdateParamsBodyFeature{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addonPackageEntitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ADDON_ID/entitlements/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "type": "FEATURE"\n        }\'',
      },
      java: {
        method: 'v1().addons().entitlements().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.entitlements.AddonPackageEntitlement;\nimport io.stigg.models.v1.addons.entitlements.EntitlementUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementUpdateParams params = EntitlementUpdateParams.builder()\n            .addonId("addonId")\n            .id("id")\n            .body(EntitlementUpdateParams.Body.Feature.builder().build())\n            .build();\n        AddonPackageEntitlement addonPackageEntitlement = client.v1().addons().entitlements().update(params);\n    }\n}',
      },
      python: {
        method: 'v1.addons.entitlements.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon_package_entitlement = client.v1.addons.entitlements.update(\n    id="id",\n    addon_id="addonId",\n    type="FEATURE",\n)\nprint(addon_package_entitlement.data)',
      },
      ruby: {
        method: 'v1.addons.entitlements.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon_package_entitlement = stigg.v1.addons.entitlements.update("id", addon_id: "addonId", body: {type: :FEATURE})\n\nputs(addon_package_entitlement)',
      },
      typescript: {
        method: 'client.v1.addons.entitlements.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addonPackageEntitlement = await client.v1.addons.entitlements.update('id', {\n  addonId: 'addonId',\n  type: 'FEATURE',\n});\n\nconsole.log(addonPackageEntitlement.data);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/addons/{addonId}/entitlements/{id}',
    httpMethod: 'delete',
    summary: 'Delete addon entitlement',
    description: 'Deletes an entitlement from a draft addon.',
    stainlessPath: '(resource) v1.addons.entitlements > (method) delete',
    qualified: 'client.v1.addons.entitlements.delete',
    params: ['addonId: string;', 'id: string;'],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }",
    markdown:
      "## delete\n\n`client.v1.addons.entitlements.delete(addonId: string, id: string): { data: object | object; }`\n\n**delete** `/api/v1/addons/{addonId}/entitlements/{id}`\n\nDeletes an entitlement from a draft addon.\n\n### Parameters\n\n- `addonId: string`\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }`\n  Response object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst addonPackageEntitlement = await client.v1.addons.entitlements.delete('id', { addonId: 'addonId' });\n\nconsole.log(addonPackageEntitlement);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements delete',
        example:
          "stigg v1:addons:entitlements delete \\\n  --api-key 'My API Key' \\\n  --addon-id addonId \\\n  --id id",
      },
      csharp: {
        method: 'V1.Addons.Entitlements.Delete',
        example:
          'EntitlementDeleteParams parameters = new()\n{\n    AddonID = "addonId",\n    ID = "id",\n};\n\nvar addonPackageEntitlement = await client.V1.Addons.Entitlements.Delete(parameters);\n\nConsole.WriteLine(addonPackageEntitlement);',
      },
      go: {
        method: 'client.V1.Addons.Entitlements.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddonPackageEntitlement, err := client.V1.Addons.Entitlements.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tstigg.V1AddonEntitlementDeleteParams{\n\t\t\tAddonID: "addonId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addonPackageEntitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/addons/$ADDON_ID/entitlements/$ID \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().addons().entitlements().delete',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.addons.entitlements.AddonPackageEntitlement;\nimport io.stigg.models.v1.addons.entitlements.EntitlementDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementDeleteParams params = EntitlementDeleteParams.builder()\n            .addonId("addonId")\n            .id("id")\n            .build();\n        AddonPackageEntitlement addonPackageEntitlement = client.v1().addons().entitlements().delete(params);\n    }\n}',
      },
      python: {
        method: 'v1.addons.entitlements.delete',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\naddon_package_entitlement = client.v1.addons.entitlements.delete(\n    id="id",\n    addon_id="addonId",\n)\nprint(addon_package_entitlement.data)',
      },
      ruby: {
        method: 'v1.addons.entitlements.delete',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\naddon_package_entitlement = stigg.v1.addons.entitlements.delete("id", addon_id: "addonId")\n\nputs(addon_package_entitlement)',
      },
      typescript: {
        method: 'client.v1.addons.entitlements.delete',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst addonPackageEntitlement = await client.v1.addons.entitlements.delete('id', {\n  addonId: 'addonId',\n});\n\nconsole.log(addonPackageEntitlement.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/plans',
    httpMethod: 'post',
    summary: 'Create plan',
    description: 'Creates a new plan in draft status.',
    stainlessPath: '(resource) v1.plans > (method) create',
    qualified: 'client.v1.plans.create',
    params: [
      'id: string;',
      'displayName: string;',
      'productId: string;',
      'billingId?: string;',
      "defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; };",
      'description?: string;',
      'metadata?: object;',
      'parentPlanId?: string;',
      "pricingType?: 'FREE' | 'PAID' | 'CUSTOM';",
      "status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';",
    ],
    response:
      "{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## create\n\n`client.v1.plans.create(id: string, displayName: string, productId: string, billingId?: string, defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }, description?: string, metadata?: object, parentPlanId?: string, pricingType?: 'FREE' | 'PAID' | 'CUSTOM', status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'): { data: object; }`\n\n**post** `/api/v1/plans`\n\nCreates a new plan in draft status.\n\n### Parameters\n\n- `id: string`\n  The unique identifier for the entity\n\n- `displayName: string`\n  The display name of the package\n\n- `productId: string`\n  The product ID to associate the plan with\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }`\n  Default trial configuration for the plan\n  - `duration: number`\n    The duration of the trial in the specified units\n  - `units: 'DAY' | 'MONTH'`\n    The time unit for the trial duration (DAY or MONTH)\n  - `budget?: { hasSoftLimit: boolean; limit: number; }`\n    Budget configuration for the trial\n  - `trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'`\n    Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)\n\n- `description?: string`\n  The description of the package\n\n- `metadata?: object`\n  Metadata associated with the entity\n\n- `parentPlanId?: string`\n  The ID of the parent plan, if applicable\n\n- `pricingType?: 'FREE' | 'PAID' | 'CUSTOM'`\n  The pricing type of the package\n\n- `status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'`\n  The status of the package\n\n### Returns\n\n- `{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst plan = await client.v1.plans.create({\n  id: 'id',\n  displayName: 'displayName',\n  productId: 'productId',\n});\n\nconsole.log(plan);\n```",
    perLanguage: {
      cli: {
        method: 'plans create',
        example:
          "stigg v1:plans create \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --display-name displayName \\\n  --product-id productId",
      },
      csharp: {
        method: 'V1.Plans.Create',
        example:
          'PlanCreateParams parameters = new()\n{\n    ID = "id",\n    DisplayName = "displayName",\n    ProductID = "productId",\n};\n\nvar plan = await client.V1.Plans.Create(parameters);\n\nConsole.WriteLine(plan);',
      },
      go: {
        method: 'client.V1.Plans.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.V1.Plans.New(context.TODO(), stigg.V1PlanNewParams{\n\t\tID:          "id",\n\t\tDisplayName: "displayName",\n\t\tProductID:   "productId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "displayName": "displayName",\n          "productId": "productId"\n        }\'',
      },
      java: {
        method: 'v1().plans().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.Plan;\nimport io.stigg.models.v1.plans.PlanCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PlanCreateParams params = PlanCreateParams.builder()\n            .id("id")\n            .displayName("displayName")\n            .productId("productId")\n            .build();\n        Plan plan = client.v1().plans().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.plans.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.v1.plans.create(\n    id="id",\n    display_name="displayName",\n    product_id="productId",\n)\nprint(plan.data)',
      },
      ruby: {
        method: 'v1.plans.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan = stigg.v1.plans.create(id: "id", display_name: "displayName", product_id: "productId")\n\nputs(plan)',
      },
      typescript: {
        method: 'client.v1.plans.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.v1.plans.create({\n  id: 'id',\n  displayName: 'displayName',\n  productId: 'productId',\n});\n\nconsole.log(plan.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/plans',
    httpMethod: 'get',
    summary: 'Get a list of plans',
    description: 'Retrieves a paginated list of plans in the environment.',
    stainlessPath: '(resource) v1.plans > (method) list',
    qualified: 'client.v1.plans.list',
    params: [
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'limit?: number;',
      'productId?: string;',
      'status?: string;',
    ],
    response:
      "{ id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }",
    markdown:
      "## list\n\n`client.v1.plans.list(after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, limit?: number, productId?: string, status?: string): { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: object; description: string; displayName: string; entitlements: object[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n**get** `/api/v1/plans`\n\nRetrieves a paginated list of plans in the environment.\n\n### Parameters\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `productId?: string`\n  Filter by product ID\n\n- `status?: string`\n  Filter by status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n  Plan configuration object\n\n  - `id: string`\n  - `billingId: string`\n  - `compatibleAddonIds: string[]`\n  - `createdAt: string`\n  - `defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }`\n  - `description: string`\n  - `displayName: string`\n  - `entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]`\n  - `isLatest: boolean`\n  - `metadata: object`\n  - `parentPlanId: string`\n  - `pricingType: 'FREE' | 'PAID' | 'CUSTOM'`\n  - `productId: string`\n  - `status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'`\n  - `updatedAt: string`\n  - `versionNumber: number`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const planListResponse of client.v1.plans.list()) {\n  console.log(planListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'plans list',
        example: "stigg v1:plans list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Plans.List',
        example:
          'PlanListParams parameters = new();\n\nvar page = await client.V1.Plans.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Plans.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Plans.List(context.TODO(), stigg.V1PlanListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/plans \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.PlanListPage;\nimport io.stigg.models.v1.plans.PlanListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PlanListPage page = client.v1().plans().list();\n    }\n}',
      },
      python: {
        method: 'v1.plans.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.plans.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.plans.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.plans.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.plans.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const planListResponse of client.v1.plans.list()) {\n  console.log(planListResponse.id);\n}",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/plans/{id}',
    httpMethod: 'get',
    summary: 'Get a single plan by ID',
    description: 'Retrieves a plan by its unique identifier, including entitlements and pricing details.',
    stainlessPath: '(resource) v1.plans > (method) retrieve',
    qualified: 'client.v1.plans.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## retrieve\n\n`client.v1.plans.retrieve(id: string): { data: object; }`\n\n**get** `/api/v1/plans/{id}`\n\nRetrieves a plan by its unique identifier, including entitlements and pricing details.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst plan = await client.v1.plans.retrieve('x');\n\nconsole.log(plan);\n```",
    perLanguage: {
      cli: {
        method: 'plans retrieve',
        example: "stigg v1:plans retrieve \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Plans.Retrieve',
        example:
          'PlanRetrieveParams parameters = new() { ID = "x" };\n\nvar plan = await client.V1.Plans.Retrieve(parameters);\n\nConsole.WriteLine(plan);',
      },
      go: {
        method: 'client.V1.Plans.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.V1.Plans.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/plans/$ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.Plan;\nimport io.stigg.models.v1.plans.PlanRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Plan plan = client.v1().plans().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'v1.plans.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.v1.plans.retrieve(\n    "x",\n)\nprint(plan.data)',
      },
      ruby: {
        method: 'v1.plans.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan = stigg.v1.plans.retrieve("x")\n\nputs(plan)',
      },
      typescript: {
        method: 'client.v1.plans.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.v1.plans.retrieve('x');\n\nconsole.log(plan.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/plans/{id}',
    httpMethod: 'patch',
    summary: 'Update a plan',
    description: "Updates an existing plan's properties such as display name, description, and metadata.",
    stainlessPath: '(resource) v1.plans > (method) update',
    qualified: 'client.v1.plans.update',
    params: [
      'id: string;',
      'billingId?: string;',
      "charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]; };",
      'compatibleAddonIds?: string[];',
      "defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; };",
      'description?: string;',
      'displayName?: string;',
      'metadata?: object;',
      'parentPlanId?: string;',
    ],
    response:
      "{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## update\n\n`client.v1.plans.update(id: string, billingId?: string, charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: object; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: object[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: object; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: object[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: object; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: object; yearlyResetPeriodConfiguration?: object; }[]; }, compatibleAddonIds?: string[], defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }, description?: string, displayName?: string, metadata?: object, parentPlanId?: string): { data: object; }`\n\n**patch** `/api/v1/plans/{id}`\n\nUpdates an existing plan's properties such as display name, description, and metadata.\n\n### Parameters\n\n- `id: string`\n\n- `billingId?: string`\n  The unique identifier for the entity in the billing provider\n\n- `charges?: { pricingType: 'FREE' | 'PAID' | 'CUSTOM'; billingId?: string; minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]; overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'; overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]; pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: object; unitPrice?: object; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]; }`\n  Pricing configuration to set on the plan draft\n  - `pricingType: 'FREE' | 'PAID' | 'CUSTOM'`\n    The pricing type (FREE, PAID, or CUSTOM)\n  - `billingId?: string`\n    Deprecated: billing integration ID\n  - `minimumSpend?: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; minimum: { amount: number; currency?: string; }; }[]`\n    Minimum spend configuration per billing period\n  - `overageBillingPeriod?: 'ON_SUBSCRIPTION_RENEWAL' | 'MONTHLY'`\n    When overage charges are billed\n  - `overagePricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: { amount: number; currency?: string; }; unitPrice?: { amount: number; currency?: string; }; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; entitlement?: { featureId: string; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }; featureId?: string; topUpCustomCurrencyId?: string; }[]`\n    Array of overage pricing model configurations\n  - `pricingModels?: { billingModel: 'FLAT_FEE' | 'MINIMUM_SPEND' | 'PER_UNIT' | 'USAGE_BASED' | 'CREDIT_BASED'; pricePeriods: { billingPeriod: 'MONTHLY' | 'ANNUALLY'; billingCountryCode?: string; blockSize?: number; creditGrantCadence?: 'BEGINNING_OF_BILLING_PERIOD' | 'MONTHLY'; creditRate?: { amount: number; currencyId: string; costFormula?: string; }; price?: { amount: number; currency?: string; }; tiers?: { flatPrice?: { amount: number; currency?: string; }; unitPrice?: { amount: number; currency?: string; }; upTo?: number; }[]; }[]; billingCadence?: 'RECURRING' | 'ONE_OFF'; featureId?: string; maxUnitQuantity?: number; minUnitQuantity?: number; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; tiersMode?: 'VOLUME' | 'GRADUATED'; topUpCustomCurrencyId?: string; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; }[]`\n    Array of pricing model configurations\n\n- `compatibleAddonIds?: string[]`\n\n- `defaultTrialConfig?: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }`\n  Default trial configuration for the plan\n  - `duration: number`\n    The duration of the trial in the specified units\n  - `units: 'DAY' | 'MONTH'`\n    The time unit for the trial duration (DAY or MONTH)\n  - `budget?: { hasSoftLimit: boolean; limit: number; }`\n    Budget configuration for the trial\n  - `trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'`\n    Behavior when the trial ends (CONVERT_TO_PAID or CANCEL_SUBSCRIPTION)\n\n- `description?: string`\n  The description of the package\n\n- `displayName?: string`\n  The display name of the package\n\n- `metadata?: object`\n  Metadata associated with the entity\n\n- `parentPlanId?: string`\n  The ID of the parent plan, if applicable\n\n### Returns\n\n- `{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst plan = await client.v1.plans.update('x');\n\nconsole.log(plan);\n```",
    perLanguage: {
      cli: {
        method: 'plans update',
        example: "stigg v1:plans update \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Plans.Update',
        example:
          'PlanUpdateParams parameters = new() { ID = "x" };\n\nvar plan = await client.V1.Plans.Update(parameters);\n\nConsole.WriteLine(plan);',
      },
      go: {
        method: 'client.V1.Plans.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.V1.Plans.Update(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1PlanUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/plans/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().plans().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.Plan;\nimport io.stigg.models.v1.plans.PlanUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Plan plan = client.v1().plans().update("x");\n    }\n}',
      },
      python: {
        method: 'v1.plans.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.v1.plans.update(\n    id="x",\n)\nprint(plan.data)',
      },
      ruby: {
        method: 'v1.plans.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan = stigg.v1.plans.update("x")\n\nputs(plan)',
      },
      typescript: {
        method: 'client.v1.plans.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.v1.plans.update('x');\n\nconsole.log(plan.data);",
      },
    },
  },
  {
    name: 'archive',
    endpoint: '/api/v1/plans/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive plan',
    description: 'Archives a plan, preventing it from being used in new subscriptions.',
    stainlessPath: '(resource) v1.plans > (method) archive',
    qualified: 'client.v1.plans.archive',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## archive\n\n`client.v1.plans.archive(id: string): { data: object; }`\n\n**post** `/api/v1/plans/{id}/archive`\n\nArchives a plan, preventing it from being used in new subscriptions.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst plan = await client.v1.plans.archive('x');\n\nconsole.log(plan);\n```",
    perLanguage: {
      cli: {
        method: 'plans archive',
        example: "stigg v1:plans archive \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Plans.Archive',
        example:
          'PlanArchiveParams parameters = new() { ID = "x" };\n\nvar plan = await client.V1.Plans.Archive(parameters);\n\nConsole.WriteLine(plan);',
      },
      go: {
        method: 'client.V1.Plans.Archive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.V1.Plans.Archive(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().archive',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.Plan;\nimport io.stigg.models.v1.plans.PlanArchiveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Plan plan = client.v1().plans().archive("x");\n    }\n}',
      },
      python: {
        method: 'v1.plans.archive',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.v1.plans.archive(\n    "x",\n)\nprint(plan.data)',
      },
      ruby: {
        method: 'v1.plans.archive',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan = stigg.v1.plans.archive("x")\n\nputs(plan)',
      },
      typescript: {
        method: 'client.v1.plans.archive',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.v1.plans.archive('x');\n\nconsole.log(plan.data);",
      },
    },
  },
  {
    name: 'publish',
    endpoint: '/api/v1/plans/{id}/publish',
    httpMethod: 'post',
    summary: 'Publish plan',
    description: 'Publishes a draft plan, making it available for use in subscriptions.',
    stainlessPath: '(resource) v1.plans > (method) publish',
    qualified: 'client.v1.plans.publish',
    params: ['id: string;', "migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS';"],
    response: '{ data: { taskId: string; }; }',
    markdown:
      "## publish\n\n`client.v1.plans.publish(id: string, migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS'): { data: object; }`\n\n**post** `/api/v1/plans/{id}/publish`\n\nPublishes a draft plan, making it available for use in subscriptions.\n\n### Parameters\n\n- `id: string`\n\n- `migrationType: 'NEW_CUSTOMERS' | 'ALL_CUSTOMERS'`\n  The migration type of the package\n\n### Returns\n\n- `{ data: { taskId: string; }; }`\n  Response containing task ID for publish operation\n\n  - `data: { taskId: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.plans.publish('x', { migrationType: 'NEW_CUSTOMERS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'plans publish',
        example:
          "stigg v1:plans publish \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --migration-type NEW_CUSTOMERS",
      },
      csharp: {
        method: 'V1.Plans.Publish',
        example:
          'PlanPublishParams parameters = new()\n{\n    ID = "x",\n    MigrationType = MigrationType.NewCustomers,\n};\n\nvar response = await client.V1.Plans.Publish(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Plans.Publish',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Plans.Publish(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1PlanPublishParams{\n\t\t\tMigrationType: stigg.V1PlanPublishParamsMigrationTypeNewCustomers,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$ID/publish \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "migrationType": "NEW_CUSTOMERS"\n        }\'',
      },
      java: {
        method: 'v1().plans().publish',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.PlanPublishParams;\nimport io.stigg.models.v1.plans.PlanPublishResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PlanPublishParams params = PlanPublishParams.builder()\n            .id("x")\n            .migrationType(PlanPublishParams.MigrationType.NEW_CUSTOMERS)\n            .build();\n        PlanPublishResponse response = client.v1().plans().publish(params);\n    }\n}',
      },
      python: {
        method: 'v1.plans.publish',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.plans.publish(\n    id="x",\n    migration_type="NEW_CUSTOMERS",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.plans.publish',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.plans.publish("x", migration_type: :NEW_CUSTOMERS)\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.plans.publish',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.plans.publish('x', { migrationType: 'NEW_CUSTOMERS' });\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'create_draft',
    endpoint: '/api/v1/plans/{id}/draft',
    httpMethod: 'post',
    summary: 'Create plan draft',
    description: 'Creates a draft version of an existing plan for modification before publishing.',
    stainlessPath: '(resource) v1.plans > (method) create_draft',
    qualified: 'client.v1.plans.createDraft',
    params: ['id: string;'],
    response:
      "{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }",
    markdown:
      "## create_draft\n\n`client.v1.plans.createDraft(id: string): { data: object; }`\n\n**post** `/api/v1/plans/{id}/draft`\n\nCreates a draft version of an existing plan for modification before publishing.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: object; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }; }`\n  Response object\n\n  - `data: { id: string; billingId: string; compatibleAddonIds: string[]; createdAt: string; defaultTrialConfig: { duration: number; units: 'DAY' | 'MONTH'; budget?: { hasSoftLimit: boolean; limit: number; }; trialEndBehavior?: 'CONVERT_TO_PAID' | 'CANCEL_SUBSCRIPTION'; }; description: string; displayName: string; entitlements: { id: string; type: 'FEATURE' | 'CREDIT'; }[]; isLatest: boolean; metadata: object; parentPlanId: string; pricingType: 'FREE' | 'PAID' | 'CUSTOM'; productId: string; status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; versionNumber: number; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst plan = await client.v1.plans.createDraft('x');\n\nconsole.log(plan);\n```",
    perLanguage: {
      cli: {
        method: 'plans create_draft',
        example: "stigg v1:plans create-draft \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Plans.CreateDraft',
        example:
          'PlanCreateDraftParams parameters = new() { ID = "x" };\n\nvar plan = await client.V1.Plans.CreateDraft(parameters);\n\nConsole.WriteLine(plan);',
      },
      go: {
        method: 'client.V1.Plans.NewDraft',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.V1.Plans.NewDraft(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$ID/draft \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().createDraft',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.Plan;\nimport io.stigg.models.v1.plans.PlanCreateDraftParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Plan plan = client.v1().plans().createDraft("x");\n    }\n}',
      },
      python: {
        method: 'v1.plans.create_draft',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.v1.plans.create_draft(\n    "x",\n)\nprint(plan.data)',
      },
      ruby: {
        method: 'v1.plans.create_draft',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan = stigg.v1.plans.create_draft("x")\n\nputs(plan)',
      },
      typescript: {
        method: 'client.v1.plans.createDraft',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.v1.plans.createDraft('x');\n\nconsole.log(plan.data);",
      },
    },
  },
  {
    name: 'remove_draft',
    endpoint: '/api/v1/plans/{id}/draft',
    httpMethod: 'delete',
    summary: 'Remove plan draft',
    description: 'Removes a draft version of a plan.',
    stainlessPath: '(resource) v1.plans > (method) remove_draft',
    qualified: 'client.v1.plans.removeDraft',
    params: ['id: string;'],
    response: '{ data: { id: string; }; }',
    markdown:
      "## remove_draft\n\n`client.v1.plans.removeDraft(id: string): { data: object; }`\n\n**delete** `/api/v1/plans/{id}/draft`\n\nRemoves a draft version of a plan.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; }; }`\n  Response confirming the plan draft was removed.\n\n  - `data: { id: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.plans.removeDraft('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'plans remove_draft',
        example: "stigg v1:plans remove-draft \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Plans.RemoveDraft',
        example:
          'PlanRemoveDraftParams parameters = new() { ID = "x" };\n\nvar response = await client.V1.Plans.RemoveDraft(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Plans.RemoveDraft',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Plans.RemoveDraft(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$ID/draft \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().removeDraft',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.PlanRemoveDraftParams;\nimport io.stigg.models.v1.plans.PlanRemoveDraftResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        PlanRemoveDraftResponse response = client.v1().plans().removeDraft("x");\n    }\n}',
      },
      python: {
        method: 'v1.plans.remove_draft',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.plans.remove_draft(\n    "x",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.plans.remove_draft',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.plans.remove_draft("x")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.plans.removeDraft',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.plans.removeDraft('x');\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/plans/{planId}/entitlements',
    httpMethod: 'get',
    summary: 'Get a list of plan entitlements',
    description: 'Retrieves a list of entitlements for a plan.',
    stainlessPath: '(resource) v1.plans.entitlements > (method) list',
    qualified: 'client.v1.plans.entitlements.list',
    params: ['planId: string;'],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; pagination: { next: string; prev: string; }; }",
    markdown:
      "## list\n\n`client.v1.plans.entitlements.list(planId: string): { data: object | object[]; pagination: object; }`\n\n**get** `/api/v1/plans/{planId}/entitlements`\n\nRetrieves a list of entitlements for a plan.\n\n### Parameters\n\n- `planId: string`\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; pagination: { next: string; prev: string; }; }`\n  Response list object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]`\n  - `pagination: { next: string; prev: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst entitlements = await client.v1.plans.entitlements.list('planId');\n\nconsole.log(entitlements);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements list',
        example: "stigg v1:plans:entitlements list \\\n  --api-key 'My API Key' \\\n  --plan-id planId",
      },
      csharp: {
        method: 'V1.Plans.Entitlements.List',
        example:
          'EntitlementListParams parameters = new() { PlanID = "planId" };\n\nvar entitlements = await client.V1.Plans.Entitlements.List(parameters);\n\nConsole.WriteLine(entitlements);',
      },
      go: {
        method: 'client.V1.Plans.Entitlements.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tentitlements, err := client.V1.Plans.Entitlements.List(context.TODO(), "planId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entitlements.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$PLAN_ID/entitlements \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().entitlements().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.entitlements.EntitlementListParams;\nimport io.stigg.models.v1.plans.entitlements.EntitlementListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementListResponse entitlements = client.v1().plans().entitlements().list("planId");\n    }\n}',
      },
      python: {
        method: 'v1.plans.entitlements.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nentitlements = client.v1.plans.entitlements.list(\n    "planId",\n)\nprint(entitlements.data)',
      },
      ruby: {
        method: 'v1.plans.entitlements.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nentitlements = stigg.v1.plans.entitlements.list("planId")\n\nputs(entitlements)',
      },
      typescript: {
        method: 'client.v1.plans.entitlements.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst entitlements = await client.v1.plans.entitlements.list('planId');\n\nconsole.log(entitlements.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/plans/{planId}/entitlements',
    httpMethod: 'post',
    summary: 'Create plan entitlements',
    description: 'Creates one or more entitlements (feature or credit) on a draft plan.',
    stainlessPath: '(resource) v1.plans.entitlements > (method) create',
    qualified: 'client.v1.plans.entitlements.create',
    params: [
      'planId: string;',
      "entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[];",
    ],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; }",
    markdown:
      "## create\n\n`client.v1.plans.entitlements.create(planId: string, entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[]): { data: object | object[]; }`\n\n**post** `/api/v1/plans/{planId}/entitlements`\n\nCreates one or more entitlements (feature or credit) on a draft plan.\n\n### Parameters\n\n- `planId: string`\n\n- `entitlements: { id: string; type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { id: string; amount: number; cadence: 'MONTH' | 'YEAR'; type: 'CREDIT'; behavior?: 'Increment' | 'Override'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; }[]`\n  Entitlements to create\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]; }`\n  Response object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }[]`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst entitlement = await client.v1.plans.entitlements.create('planId', { entitlements: [{ id: 'id', type: 'FEATURE' }] });\n\nconsole.log(entitlement);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements create',
        example:
          "stigg v1:plans:entitlements create \\\n  --api-key 'My API Key' \\\n  --plan-id planId \\\n  --entitlement '{id: id, type: FEATURE}'",
      },
      csharp: {
        method: 'V1.Plans.Entitlements.Create',
        example:
          'EntitlementCreateParams parameters = new()\n{\n    PlanID = "planId",\n    Entitlements =\n    [\n        new Feature()\n        {\n            ID = "id",\n            Behavior = Behavior.Increment,\n            Description = "description",\n            DisplayNameOverride = "displayNameOverride",\n            EnumValues =\n            [\n                "string"\n            ],\n            HasSoftLimit = true,\n            HasUnlimitedUsage = true,\n            HiddenFromWidgets =\n            [\n                HiddenFromWidget.Paywall\n            ],\n            IsCustom = true,\n            IsGranted = true,\n            MonthlyResetPeriodConfiguration = new(\n                AccordingTo.SubscriptionStart\n            ),\n            Order = 0,\n            ResetPeriod = ResetPeriod.Year,\n            UsageLimit = 0,\n            WeeklyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n            YearlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        },\n    ],\n};\n\nvar entitlement = await client.V1.Plans.Entitlements.Create(parameters);\n\nConsole.WriteLine(entitlement);',
      },
      go: {
        method: 'client.V1.Plans.Entitlements.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tentitlement, err := client.V1.Plans.Entitlements.New(\n\t\tcontext.TODO(),\n\t\t"planId",\n\t\tstigg.V1PlanEntitlementNewParams{\n\t\t\tEntitlements: []stigg.V1PlanEntitlementNewParamsEntitlementUnion{{\n\t\t\t\tOfFeature: &stigg.V1PlanEntitlementNewParamsEntitlementFeature{\n\t\t\t\t\tID: "id",\n\t\t\t\t},\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$PLAN_ID/entitlements \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "entitlements": [\n            {\n              "id": "id",\n              "type": "FEATURE"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().plans().entitlements().create',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.entitlements.EntitlementCreateParams;\nimport io.stigg.models.v1.plans.entitlements.EntitlementCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementCreateParams params = EntitlementCreateParams.builder()\n            .planId("planId")\n            .addFeatureEntitlement("id")\n            .build();\n        EntitlementCreateResponse entitlement = client.v1().plans().entitlements().create(params);\n    }\n}',
      },
      python: {
        method: 'v1.plans.entitlements.create',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nentitlement = client.v1.plans.entitlements.create(\n    plan_id="planId",\n    entitlements=[{\n        "id": "id",\n        "type": "FEATURE",\n    }],\n)\nprint(entitlement.data)',
      },
      ruby: {
        method: 'v1.plans.entitlements.create',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nentitlement = stigg.v1.plans.entitlements.create("planId", entitlements: [{id: "id", type: :FEATURE}])\n\nputs(entitlement)',
      },
      typescript: {
        method: 'client.v1.plans.entitlements.create',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst entitlement = await client.v1.plans.entitlements.create('planId', {\n  entitlements: [{ id: 'id', type: 'FEATURE' }],\n});\n\nconsole.log(entitlement.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/plans/{planId}/entitlements/{id}',
    httpMethod: 'patch',
    summary: 'Update a plan entitlement',
    description: 'Updates an existing entitlement on a draft plan.',
    stainlessPath: '(resource) v1.plans.entitlements > (method) update',
    qualified: 'client.v1.plans.entitlements.update',
    params: [
      'planId: string;',
      'id: string;',
      "body: { type: 'FEATURE'; behavior?: 'Increment' | 'Override'; description?: string; displayNameOverride?: string; enumValues?: string[]; hasSoftLimit?: boolean; hasUnlimitedUsage?: boolean; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; monthlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; }; order?: number; resetPeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; usageLimit?: number; weeklyResetPeriodConfiguration?: { accordingTo: string; }; yearlyResetPeriodConfiguration?: { accordingTo: 'SubscriptionStart'; }; } | { type: 'CREDIT'; amount?: number; behavior?: 'Increment' | 'Override'; cadence?: 'MONTH' | 'YEAR'; dependencyFeatureId?: string; description?: string; displayNameOverride?: string; hiddenFromWidgets?: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom?: boolean; isGranted?: boolean; order?: number; };",
    ],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }",
    perLanguage: {
      cli: {
        method: 'entitlements update',
        example:
          "stigg v1:plans:entitlements update \\\n  --api-key 'My API Key' \\\n  --plan-id planId \\\n  --id id \\\n  --type FEATURE",
      },
      csharp: {
        method: 'V1.Plans.Entitlements.Update',
        example:
          'EntitlementUpdateParams parameters = new()\n{\n    PlanID = "planId",\n    ID = "id",\n    Body = new Feature()\n    {\n        Behavior = Behavior.Increment,\n        Description = "description",\n        DisplayNameOverride = "displayNameOverride",\n        EnumValues =\n        [\n            "string"\n        ],\n        HasSoftLimit = true,\n        HasUnlimitedUsage = true,\n        HiddenFromWidgets =\n        [\n            HiddenFromWidget.Paywall\n        ],\n        IsCustom = true,\n        IsGranted = true,\n        MonthlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        Order = 0,\n        ResetPeriod = ResetPeriod.Year,\n        UsageLimit = 0,\n        WeeklyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n        YearlyResetPeriodConfiguration = new(AccordingTo.SubscriptionStart),\n    },\n};\n\nvar planEntitlement = await client.V1.Plans.Entitlements.Update(parameters);\n\nConsole.WriteLine(planEntitlement);',
      },
      go: {
        method: 'client.V1.Plans.Entitlements.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplanEntitlement, err := client.V1.Plans.Entitlements.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tstigg.V1PlanEntitlementUpdateParams{\n\t\t\tPlanID:    "planId",\n\t\t\tOfFeature: &stigg.V1PlanEntitlementUpdateParamsBodyFeature{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", planEntitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$PLAN_ID/entitlements/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "type": "FEATURE"\n        }\'',
      },
      java: {
        method: 'v1().plans().entitlements().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.entitlements.EntitlementUpdateParams;\nimport io.stigg.models.v1.plans.entitlements.PlanEntitlement;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementUpdateParams params = EntitlementUpdateParams.builder()\n            .planId("planId")\n            .id("id")\n            .body(EntitlementUpdateParams.Body.Feature.builder().build())\n            .build();\n        PlanEntitlement planEntitlement = client.v1().plans().entitlements().update(params);\n    }\n}',
      },
      python: {
        method: 'v1.plans.entitlements.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan_entitlement = client.v1.plans.entitlements.update(\n    id="id",\n    plan_id="planId",\n    type="FEATURE",\n)\nprint(plan_entitlement.data)',
      },
      ruby: {
        method: 'v1.plans.entitlements.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan_entitlement = stigg.v1.plans.entitlements.update("id", plan_id: "planId", body: {type: :FEATURE})\n\nputs(plan_entitlement)',
      },
      typescript: {
        method: 'client.v1.plans.entitlements.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst planEntitlement = await client.v1.plans.entitlements.update('id', {\n  planId: 'planId',\n  type: 'FEATURE',\n});\n\nconsole.log(planEntitlement.data);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/plans/{planId}/entitlements/{id}',
    httpMethod: 'delete',
    summary: 'Delete plan entitlement',
    description: 'Deletes an entitlement from a draft plan.',
    stainlessPath: '(resource) v1.plans.entitlements > (method) delete',
    qualified: 'client.v1.plans.entitlements.delete',
    params: ['planId: string;', 'id: string;'],
    response:
      "{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }",
    markdown:
      "## delete\n\n`client.v1.plans.entitlements.delete(planId: string, id: string): { data: object | object; }`\n\n**delete** `/api/v1/plans/{planId}/entitlements/{id}`\n\nDeletes an entitlement from a draft plan.\n\n### Parameters\n\n- `planId: string`\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }; }`\n  Response object\n\n  - `data: { id: string; behavior: 'Increment' | 'Override'; createdAt: string; description: string; displayNameOverride: string; enumValues: string[]; hasSoftLimit: boolean; hasUnlimitedUsage: boolean; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; resetPeriod: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'; resetPeriodConfiguration: { accordingTo: 'SubscriptionStart'; } | { accordingTo: 'SubscriptionStart' | 'StartOfTheMonth'; } | { accordingTo: string; }; type: 'FEATURE'; updatedAt: string; usageLimit: number; } | { id: string; amount: number; behavior: 'Increment' | 'Override'; cadence: 'MONTH' | 'YEAR'; createdAt: string; description: string; displayNameOverride: string; hiddenFromWidgets: 'PAYWALL' | 'CUSTOMER_PORTAL' | 'CHECKOUT'[]; isCustom: boolean; isGranted: boolean; order: number; type: 'CREDIT'; updatedAt: string; dependencyFeatureId?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst planEntitlement = await client.v1.plans.entitlements.delete('id', { planId: 'planId' });\n\nconsole.log(planEntitlement);\n```",
    perLanguage: {
      cli: {
        method: 'entitlements delete',
        example:
          "stigg v1:plans:entitlements delete \\\n  --api-key 'My API Key' \\\n  --plan-id planId \\\n  --id id",
      },
      csharp: {
        method: 'V1.Plans.Entitlements.Delete',
        example:
          'EntitlementDeleteParams parameters = new()\n{\n    PlanID = "planId",\n    ID = "id",\n};\n\nvar planEntitlement = await client.V1.Plans.Entitlements.Delete(parameters);\n\nConsole.WriteLine(planEntitlement);',
      },
      go: {
        method: 'client.V1.Plans.Entitlements.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplanEntitlement, err := client.V1.Plans.Entitlements.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tstigg.V1PlanEntitlementDeleteParams{\n\t\t\tPlanID: "planId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", planEntitlement.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/plans/$PLAN_ID/entitlements/$ID \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().plans().entitlements().delete',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.plans.entitlements.EntitlementDeleteParams;\nimport io.stigg.models.v1.plans.entitlements.PlanEntitlement;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EntitlementDeleteParams params = EntitlementDeleteParams.builder()\n            .planId("planId")\n            .id("id")\n            .build();\n        PlanEntitlement planEntitlement = client.v1().plans().entitlements().delete(params);\n    }\n}',
      },
      python: {
        method: 'v1.plans.entitlements.delete',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nplan_entitlement = client.v1.plans.entitlements.delete(\n    id="id",\n    plan_id="planId",\n)\nprint(plan_entitlement.data)',
      },
      ruby: {
        method: 'v1.plans.entitlements.delete',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nplan_entitlement = stigg.v1.plans.entitlements.delete("id", plan_id: "planId")\n\nputs(plan_entitlement)',
      },
      typescript: {
        method: 'client.v1.plans.entitlements.delete',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst planEntitlement = await client.v1.plans.entitlements.delete('id', { planId: 'planId' });\n\nconsole.log(planEntitlement.data);",
      },
    },
  },
  {
    name: 'report',
    endpoint: '/api/v1/usage',
    httpMethod: 'post',
    summary: 'Report usage measurements',
    description:
      'Reports usage measurements for metered features. The reported usage is used to track, limit, and bill customer consumption.',
    stainlessPath: '(resource) v1.usage > (method) report',
    qualified: 'client.v1.usage.report',
    params: [
      "usages: { customerId: string; featureId: string; value: number; createdAt?: string; dimensions?: object; resourceId?: string; updateBehavior?: 'DELTA' | 'SET'; }[];",
    ],
    response:
      '{ data: { id: string; createdAt: string; customerId: string; featureId: string; timestamp: string; value: number; currentUsage?: number; nextResetDate?: string; resourceId?: string; usagePeriodEnd?: string; usagePeriodStart?: string; }[]; }',
    markdown:
      "## report\n\n`client.v1.usage.report(usages: { customerId: string; featureId: string; value: number; createdAt?: string; dimensions?: object; resourceId?: string; updateBehavior?: 'DELTA' | 'SET'; }[]): { data: object[]; }`\n\n**post** `/api/v1/usage`\n\nReports usage measurements for metered features. The reported usage is used to track, limit, and bill customer consumption.\n\n### Parameters\n\n- `usages: { customerId: string; featureId: string; value: number; createdAt?: string; dimensions?: object; resourceId?: string; updateBehavior?: 'DELTA' | 'SET'; }[]`\n  A list of usage reports to be submitted in bulk\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; customerId: string; featureId: string; timestamp: string; value: number; currentUsage?: number; nextResetDate?: string; resourceId?: string; usagePeriodEnd?: string; usagePeriodStart?: string; }[]; }`\n  Response containing reported usage measurements with current usage values, period information, and reset dates for each measurement.\n\n  - `data: { id: string; createdAt: string; customerId: string; featureId: string; timestamp: string; value: number; currentUsage?: number; nextResetDate?: string; resourceId?: string; usagePeriodEnd?: string; usagePeriodStart?: string; }[]`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.usage.report({ usages: [{\n  customerId: 'customerId',\n  featureId: 'featureId',\n  value: -9007199254740991,\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'usage report',
        example:
          "stigg v1:usage report \\\n  --api-key 'My API Key' \\\n  --usage '{customerId: customerId, featureId: featureId, value: -9007199254740991}'",
      },
      csharp: {
        method: 'V1.Usage.Report',
        example:
          'UsageReportParams parameters = new()\n{\n    Usages =\n    [\n        new()\n        {\n            CustomerID = "customerId",\n            FeatureID = "featureId",\n            Value = -9007199254740991,\n            CreatedAt = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n            Dimensions = new Dictionary<string, Dimension>()\n            {\n                { "foo", "string" }\n            },\n            ResourceID = "resourceId",\n            UpdateBehavior = UpdateBehavior.Delta,\n        },\n    ],\n};\n\nvar response = await client.V1.Usage.Report(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Usage.Report',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Usage.Report(context.TODO(), stigg.V1UsageReportParams{\n\t\tUsages: []stigg.V1UsageReportParamsUsage{{\n\t\t\tCustomerID: "customerId",\n\t\t\tFeatureID:  "featureId",\n\t\t\tValue:      -9007199254740991,\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/usage \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "usages": [\n            {\n              "customerId": "customerId",\n              "featureId": "featureId",\n              "value": -9007199254740991\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'v1().usage().report',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.usage.UsageReportParams;\nimport io.stigg.models.v1.usage.UsageReportResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        UsageReportParams params = UsageReportParams.builder()\n            .addUsage(UsageReportParams.Usage.builder()\n                .customerId("customerId")\n                .featureId("featureId")\n                .value(-9007199254740991L)\n                .build())\n            .build();\n        UsageReportResponse response = client.v1().usage().report(params);\n    }\n}',
      },
      python: {
        method: 'v1.usage.report',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.usage.report(\n    usages=[{\n        "customer_id": "customerId",\n        "feature_id": "featureId",\n        "value": -9007199254740991,\n    }],\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.usage.report',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.usage.report(\n  usages: [{customerId: "customerId", featureId: "featureId", value: -9007199254740991}]\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.usage.report',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.usage.report({\n  usages: [\n    {\n      customerId: 'customerId',\n      featureId: 'featureId',\n      value: -9007199254740991,\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'history',
    endpoint: '/api/v1/usage/{customerId}/history/{featureId}',
    httpMethod: 'get',
    summary: 'Get usage history',
    description: "Retrieves historical usage data for a customer's metered feature over time.",
    stainlessPath: '(resource) v1.usage > (method) history',
    qualified: 'client.v1.usage.history',
    params: [
      'customerId: string;',
      'featureId: string;',
      'startDate: string;',
      'endDate?: string;',
      'groupBy?: string;',
      'includeInactiveSubscriptions?: boolean;',
      'resourceId?: string;',
    ],
    response:
      "{ data: { markers: { timestamp: string; type: 'PERIODIC_RESET' | 'SUBSCRIPTION_CHANGE_RESET'; }[]; series: { points: object[]; tags: object[]; }[]; }; }",
    markdown:
      "## history\n\n`client.v1.usage.history(customerId: string, featureId: string, startDate: string, endDate?: string, groupBy?: string, includeInactiveSubscriptions?: boolean, resourceId?: string): { data: object; }`\n\n**get** `/api/v1/usage/{customerId}/history/{featureId}`\n\nRetrieves historical usage data for a customer's metered feature over time.\n\n### Parameters\n\n- `customerId: string`\n\n- `featureId: string`\n\n- `startDate: string`\n  The start date of the range\n\n- `endDate?: string`\n  The end date of the range\n\n- `groupBy?: string`\n  Criteria by which to group the usage history\n\n- `includeInactiveSubscriptions?: boolean`\n  When true, includes usage data from the most recent cancelled or expired subscription\n\n- `resourceId?: string`\n  Resource id\n\n### Returns\n\n- `{ data: { markers: { timestamp: string; type: 'PERIODIC_RESET' | 'SUBSCRIPTION_CHANGE_RESET'; }[]; series: { points: object[]; tags: object[]; }[]; }; }`\n  Response object\n\n  - `data: { markers: { timestamp: string; type: 'PERIODIC_RESET' | 'SUBSCRIPTION_CHANGE_RESET'; }[]; series: { points: { isResetPoint: boolean; timestamp: string; value: number; }[]; tags: { key: string; value: string; }[]; }[]; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.v1.usage.history('featureId', { customerId: 'customerId', startDate: '2019-12-27T18:11:19.117Z' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'usage history',
        example:
          "stigg v1:usage history \\\n  --api-key 'My API Key' \\\n  --customer-id customerId \\\n  --feature-id featureId \\\n  --start-date \"'2019-12-27T18:11:19.117Z'\"",
      },
      csharp: {
        method: 'V1.Usage.History',
        example:
          'UsageHistoryParams parameters = new()\n{\n    CustomerID = "customerId",\n    FeatureID = "featureId",\n    StartDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n};\n\nvar response = await client.V1.Usage.History(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.V1.Usage.History',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.V1.Usage.History(\n\t\tcontext.TODO(),\n\t\t"featureId",\n\t\tstigg.V1UsageHistoryParams{\n\t\t\tCustomerID: "customerId",\n\t\t\tStartDate:  time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/usage/$CUSTOMER_ID/history/$FEATURE_ID \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().usage().history',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.usage.UsageHistoryParams;\nimport io.stigg.models.v1.usage.UsageHistoryResponse;\nimport java.time.OffsetDateTime;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        UsageHistoryParams params = UsageHistoryParams.builder()\n            .customerId("customerId")\n            .featureId("featureId")\n            .startDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n            .build();\n        UsageHistoryResponse response = client.v1().usage().history(params);\n    }\n}',
      },
      python: {
        method: 'v1.usage.history',
        example:
          'import os\nfrom datetime import datetime\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v1.usage.history(\n    feature_id="featureId",\n    customer_id="customerId",\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      ruby: {
        method: 'v1.usage.history',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.v1.usage.history("featureId", customer_id: "customerId", start_date: "2019-12-27T18:11:19.117Z")\n\nputs(response)',
      },
      typescript: {
        method: 'client.v1.usage.history',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.usage.history('featureId', {\n  customerId: 'customerId',\n  startDate: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list_products',
    endpoint: '/api/v1/products',
    httpMethod: 'get',
    summary: 'Get a list of products',
    description: 'Retrieves a paginated list of products in the environment.',
    stainlessPath: '(resource) v1.products > (method) list_products',
    qualified: 'client.v1.products.listProducts',
    params: [
      'id?: string;',
      'after?: string;',
      'before?: string;',
      'createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'limit?: number;',
      'status?: string;',
    ],
    response:
      "{ id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }",
    markdown:
      "## list_products\n\n`client.v1.products.listProducts(id?: string, after?: string, before?: string, createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }, limit?: number, status?: string): { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: object; }`\n\n**get** `/api/v1/products`\n\nRetrieves a paginated list of products in the environment.\n\n### Parameters\n\n- `id?: string`\n  Filter by entity ID\n\n- `after?: string`\n  Return items that come after this cursor\n\n- `before?: string`\n  Return items that come before this cursor\n\n- `createdAt?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by creation date using range operators: gt, gte, lt, lte\n  - `gt?: string`\n    Greater than the specified createdAt value\n  - `gte?: string`\n    Greater than or equal to the specified createdAt value\n  - `lt?: string`\n    Less than the specified createdAt value\n  - `lte?: string`\n    Less than or equal to the specified createdAt value\n\n- `limit?: number`\n  Maximum number of items to return\n\n- `status?: string`\n  Filter by product status. Supports comma-separated values for multiple statuses\n\n### Returns\n\n- `{ id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n  Product configuration object\n\n  - `id: string`\n  - `createdAt: string`\n  - `description: string`\n  - `displayName: string`\n  - `metadata: object`\n  - `multipleSubscriptions: boolean`\n  - `status: 'PUBLISHED' | 'ARCHIVED'`\n  - `updatedAt: string`\n  - `productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\n// Automatically fetches more pages as needed.\nfor await (const productListProductsResponse of client.v1.products.listProducts()) {\n  console.log(productListProductsResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'products list_products',
        example: "stigg v1:products list-products \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'V1.Products.ListProducts',
        example:
          'ProductListProductsParams parameters = new();\n\nvar page = await client.V1.Products.ListProducts(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.V1.Products.ListProducts',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.V1.Products.ListProducts(context.TODO(), stigg.V1ProductListProductsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.stigg.io/api/v1/products \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().products().listProducts',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.ProductListProductsPage;\nimport io.stigg.models.v1.products.ProductListProductsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        ProductListProductsPage page = client.v1().products().listProducts();\n    }\n}',
      },
      python: {
        method: 'v1.products.list_products',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\npage = client.v1.products.list_products()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'v1.products.list_products',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\npage = stigg.v1.products.list_products\n\nputs(page)',
      },
      typescript: {
        method: 'client.v1.products.listProducts',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const productListProductsResponse of client.v1.products.listProducts()) {\n  console.log(productListProductsResponse.id);\n}",
      },
    },
  },
  {
    name: 'create_product',
    endpoint: '/api/v1/products',
    httpMethod: 'post',
    summary: 'Create product',
    description: 'Creates a new product.',
    stainlessPath: '(resource) v1.products > (method) create_product',
    qualified: 'client.v1.products.createProduct',
    params: [
      'id: string;',
      'displayName: string;',
      'description?: string;',
      'metadata?: object;',
      'multipleSubscriptions?: boolean;',
    ],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }",
    markdown:
      "## create_product\n\n`client.v1.products.createProduct(id: string, displayName: string, description?: string, metadata?: object, multipleSubscriptions?: boolean): { data: object; }`\n\n**post** `/api/v1/products`\n\nCreates a new product.\n\n### Parameters\n\n- `id: string`\n  The unique identifier for the entity\n\n- `displayName: string`\n  Display name of the product\n\n- `description?: string`\n  Description of the product\n\n- `metadata?: object`\n  Additional metadata for the product\n\n- `multipleSubscriptions?: boolean`\n  Indicates if multiple subscriptions to this product are allowed\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst product = await client.v1.products.createProduct({ id: 'id', displayName: 'displayName' });\n\nconsole.log(product);\n```",
    perLanguage: {
      cli: {
        method: 'products create_product',
        example:
          "stigg v1:products create-product \\\n  --api-key 'My API Key' \\\n  --id id \\\n  --display-name displayName",
      },
      csharp: {
        method: 'V1.Products.CreateProduct',
        example:
          'ProductCreateProductParams parameters = new()\n{\n    ID = "id",\n    DisplayName = "displayName",\n};\n\nvar product = await client.V1.Products.CreateProduct(parameters);\n\nConsole.WriteLine(product);',
      },
      go: {
        method: 'client.V1.Products.NewProduct',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproduct, err := client.V1.Products.NewProduct(context.TODO(), stigg.V1ProductNewProductParams{\n\t\tID:          "id",\n\t\tDisplayName: "displayName",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", product.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/products \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "displayName": "displayName"\n        }\'',
      },
      java: {
        method: 'v1().products().createProduct',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.Product;\nimport io.stigg.models.v1.products.ProductCreateProductParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        ProductCreateProductParams params = ProductCreateProductParams.builder()\n            .id("id")\n            .displayName("displayName")\n            .build();\n        Product product = client.v1().products().createProduct(params);\n    }\n}',
      },
      python: {
        method: 'v1.products.create_product',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.v1.products.create_product(\n    id="id",\n    display_name="displayName",\n)\nprint(product.data)',
      },
      ruby: {
        method: 'v1.products.create_product',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nproduct = stigg.v1.products.create_product(id: "id", display_name: "displayName")\n\nputs(product)',
      },
      typescript: {
        method: 'client.v1.products.createProduct',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.v1.products.createProduct({ id: 'id', displayName: 'displayName' });\n\nconsole.log(product.data);",
      },
    },
  },
  {
    name: 'update_product',
    endpoint: '/api/v1/products/{id}',
    httpMethod: 'patch',
    summary: 'Update a product',
    description: "Updates an existing product's properties such as display name, description, and metadata.",
    stainlessPath: '(resource) v1.products > (method) update_product',
    qualified: 'client.v1.products.updateProduct',
    params: [
      'id: string;',
      'description?: string;',
      'displayName?: string;',
      'metadata?: object;',
      'multipleSubscriptions?: boolean;',
      "productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; };",
      "usageResetCutoffRule?: { behavior: 'NEVER_RESET' | 'ALWAYS_RESET' | 'BILLING_PERIOD_CHANGE'; };",
    ],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }",
    markdown:
      "## update_product\n\n`client.v1.products.updateProduct(id: string, description?: string, displayName?: string, metadata?: object, multipleSubscriptions?: boolean, productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }, usageResetCutoffRule?: { behavior: 'NEVER_RESET' | 'ALWAYS_RESET' | 'BILLING_PERIOD_CHANGE'; }): { data: object; }`\n\n**patch** `/api/v1/products/{id}`\n\nUpdates an existing product's properties such as display name, description, and metadata.\n\n### Parameters\n\n- `id: string`\n\n- `description?: string`\n  Description of the product\n\n- `displayName?: string`\n  Display name of the product\n\n- `metadata?: object`\n  Additional metadata for the product\n\n- `multipleSubscriptions?: boolean`\n  Indicates if multiple subscriptions to this product are allowed\n\n- `productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }`\n  - `subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'`\n    Time when the subscription will be cancelled\n  - `subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'`\n    Setup for the end of the subscription\n  - `subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'`\n    Setup for the start of the subscription\n  - `downgradePlanId?: string`\n    ID of the plan to downgrade to at the end of the billing period\n  - `prorateAtEndOfBillingPeriod?: boolean`\n    Indicates if the subscription should be prorated at the end of the billing period\n  - `subscriptionStartPlanId?: string`\n    ID of the plan to start the subscription with\n\n- `usageResetCutoffRule?: { behavior: 'NEVER_RESET' | 'ALWAYS_RESET' | 'BILLING_PERIOD_CHANGE'; }`\n  Rule defining when usage resets upon subscription update.\n  - `behavior: 'NEVER_RESET' | 'ALWAYS_RESET' | 'BILLING_PERIOD_CHANGE'`\n    Behavior of the usage reset cutoff rule\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst product = await client.v1.products.updateProduct('x');\n\nconsole.log(product);\n```",
    perLanguage: {
      cli: {
        method: 'products update_product',
        example: "stigg v1:products update-product \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Products.UpdateProduct',
        example:
          'ProductUpdateProductParams parameters = new() { ID = "x" };\n\nvar product = await client.V1.Products.UpdateProduct(parameters);\n\nConsole.WriteLine(product);',
      },
      go: {
        method: 'client.V1.Products.UpdateProduct',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproduct, err := client.V1.Products.UpdateProduct(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1ProductUpdateProductParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", product.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/api/v1/products/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'v1().products().updateProduct',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.Product;\nimport io.stigg.models.v1.products.ProductUpdateProductParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Product product = client.v1().products().updateProduct("x");\n    }\n}',
      },
      python: {
        method: 'v1.products.update_product',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.v1.products.update_product(\n    id="x",\n)\nprint(product.data)',
      },
      ruby: {
        method: 'v1.products.update_product',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nproduct = stigg.v1.products.update_product("x")\n\nputs(product)',
      },
      typescript: {
        method: 'client.v1.products.updateProduct',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.v1.products.updateProduct('x');\n\nconsole.log(product.data);",
      },
    },
  },
  {
    name: 'archive_product',
    endpoint: '/api/v1/products/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive product',
    description: 'Archives a product, preventing new subscriptions. All plans and addons are archived.',
    stainlessPath: '(resource) v1.products > (method) archive_product',
    qualified: 'client.v1.products.archiveProduct',
    params: ['id: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }",
    markdown:
      "## archive_product\n\n`client.v1.products.archiveProduct(id: string): { data: object; }`\n\n**post** `/api/v1/products/{id}/archive`\n\nArchives a product, preventing new subscriptions. All plans and addons are archived.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst product = await client.v1.products.archiveProduct('x');\n\nconsole.log(product);\n```",
    perLanguage: {
      cli: {
        method: 'products archive_product',
        example: "stigg v1:products archive-product \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Products.ArchiveProduct',
        example:
          'ProductArchiveProductParams parameters = new() { ID = "x" };\n\nvar product = await client.V1.Products.ArchiveProduct(parameters);\n\nConsole.WriteLine(product);',
      },
      go: {
        method: 'client.V1.Products.ArchiveProduct',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproduct, err := client.V1.Products.ArchiveProduct(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", product.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/products/$ID/archive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().products().archiveProduct',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.Product;\nimport io.stigg.models.v1.products.ProductArchiveProductParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Product product = client.v1().products().archiveProduct("x");\n    }\n}',
      },
      python: {
        method: 'v1.products.archive_product',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.v1.products.archive_product(\n    "x",\n)\nprint(product.data)',
      },
      ruby: {
        method: 'v1.products.archive_product',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nproduct = stigg.v1.products.archive_product("x")\n\nputs(product)',
      },
      typescript: {
        method: 'client.v1.products.archiveProduct',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.v1.products.archiveProduct('x');\n\nconsole.log(product.data);",
      },
    },
  },
  {
    name: 'unarchive_product',
    endpoint: '/api/v1/products/{id}/unarchive',
    httpMethod: 'post',
    summary: 'Unarchive product',
    description: 'Restores an archived product, allowing new subscriptions to be created.',
    stainlessPath: '(resource) v1.products > (method) unarchive_product',
    qualified: 'client.v1.products.unarchiveProduct',
    params: ['id: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }",
    markdown:
      "## unarchive_product\n\n`client.v1.products.unarchiveProduct(id: string): { data: object; }`\n\n**post** `/api/v1/products/{id}/unarchive`\n\nRestores an archived product, allowing new subscriptions to be created.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst product = await client.v1.products.unarchiveProduct('x');\n\nconsole.log(product);\n```",
    perLanguage: {
      cli: {
        method: 'products unarchive_product',
        example: "stigg v1:products unarchive-product \\\n  --api-key 'My API Key' \\\n  --id x",
      },
      csharp: {
        method: 'V1.Products.UnarchiveProduct',
        example:
          'ProductUnarchiveProductParams parameters = new() { ID = "x" };\n\nvar product = await client.V1.Products.UnarchiveProduct(parameters);\n\nConsole.WriteLine(product);',
      },
      go: {
        method: 'client.V1.Products.UnarchiveProduct',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproduct, err := client.V1.Products.UnarchiveProduct(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", product.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/products/$ID/unarchive \\\n    -X POST \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'v1().products().unarchiveProduct',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.Product;\nimport io.stigg.models.v1.products.ProductUnarchiveProductParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        Product product = client.v1().products().unarchiveProduct("x");\n    }\n}',
      },
      python: {
        method: 'v1.products.unarchive_product',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.v1.products.unarchive_product(\n    "x",\n)\nprint(product.data)',
      },
      ruby: {
        method: 'v1.products.unarchive_product',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nproduct = stigg.v1.products.unarchive_product("x")\n\nputs(product)',
      },
      typescript: {
        method: 'client.v1.products.unarchiveProduct',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.v1.products.unarchiveProduct('x');\n\nconsole.log(product.data);",
      },
    },
  },
  {
    name: 'duplicate_product',
    endpoint: '/api/v1/products/{id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate product',
    description: 'Duplicates an existing product, including its plans, addons, and configuration.',
    stainlessPath: '(resource) v1.products > (method) duplicate_product',
    qualified: 'client.v1.products.duplicateProduct',
    params: ['id: string;', 'targetId: string;', 'description?: string;', 'displayName?: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }",
    markdown:
      "## duplicate_product\n\n`client.v1.products.duplicateProduct(id: string, targetId: string, description?: string, displayName?: string): { data: object; }`\n\n**post** `/api/v1/products/{id}/duplicate`\n\nDuplicates an existing product, including its plans, addons, and configuration.\n\n### Parameters\n\n- `id: string`\n\n- `targetId: string`\n  The unique identifier for the entity\n\n- `description?: string`\n  Description of the product\n\n- `displayName?: string`\n  Display name of the product\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }; }`\n  Response object\n\n  - `data: { id: string; createdAt: string; description: string; displayName: string; metadata: object; multipleSubscriptions: boolean; status: 'PUBLISHED' | 'ARCHIVED'; updatedAt: string; productSettings?: { subscriptionCancellationTime: 'END_OF_BILLING_PERIOD' | 'IMMEDIATE' | 'SPECIFIC_DATE'; subscriptionEndSetup: 'DOWNGRADE_TO_FREE' | 'CANCEL_SUBSCRIPTION'; subscriptionStartSetup: 'PLAN_SELECTION' | 'TRIAL_PERIOD' | 'FREE_PLAN'; downgradePlanId?: string; prorateAtEndOfBillingPeriod?: boolean; subscriptionStartPlanId?: string; }; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst product = await client.v1.products.duplicateProduct('x', { targetId: 'targetId' });\n\nconsole.log(product);\n```",
    perLanguage: {
      cli: {
        method: 'products duplicate_product',
        example:
          "stigg v1:products duplicate-product \\\n  --api-key 'My API Key' \\\n  --id x \\\n  --target-id targetId",
      },
      csharp: {
        method: 'V1.Products.DuplicateProduct',
        example:
          'ProductDuplicateProductParams parameters = new()\n{\n    ID = "x",\n    TargetID = "targetId",\n};\n\nvar product = await client.V1.Products.DuplicateProduct(parameters);\n\nConsole.WriteLine(product);',
      },
      go: {
        method: 'client.V1.Products.DuplicateProduct',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproduct, err := client.V1.Products.DuplicateProduct(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.V1ProductDuplicateProductParams{\n\t\t\tTargetID: "targetId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", product.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/api/v1/products/$ID/duplicate \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "targetId": "targetId"\n        }\'',
      },
      java: {
        method: 'v1().products().duplicateProduct',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.products.Product;\nimport io.stigg.models.v1.products.ProductDuplicateProductParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        ProductDuplicateProductParams params = ProductDuplicateProductParams.builder()\n            .id("x")\n            .targetId("targetId")\n            .build();\n        Product product = client.v1().products().duplicateProduct(params);\n    }\n}',
      },
      python: {
        method: 'v1.products.duplicate_product',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.v1.products.duplicate_product(\n    id="x",\n    target_id="targetId",\n)\nprint(product.data)',
      },
      ruby: {
        method: 'v1.products.duplicate_product',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nproduct = stigg.v1.products.duplicate_product("x", target_id: "targetId")\n\nputs(product)',
      },
      typescript: {
        method: 'client.v1.products.duplicateProduct',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.v1.products.duplicateProduct('x', { targetId: 'targetId' });\n\nconsole.log(product.data);",
      },
    },
  },
  {
    name: 'provision',
    endpoint: '/internal/beta/event-queues/provision',
    httpMethod: 'post',
    summary: 'Provision event queue',
    description: 'Provision SQS queue, SNS subscriptions, and IAM role for the current environment',
    stainlessPath: '(resource) internal.beta.event_queues > (method) provision',
    qualified: 'client.internal.beta.eventQueues.provision',
    params: [
      'region: string;',
      'allowedAssumeRoleArns?: string[];',
      'createLowPriorityQueues?: boolean;',
      'eventTypes?: string[];',
      'suffix?: string;',
    ],
    response:
      "{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }",
    markdown:
      "## provision\n\n`client.internal.beta.eventQueues.provision(region: string, allowedAssumeRoleArns?: string[], createLowPriorityQueues?: boolean, eventTypes?: string[], suffix?: string): { data: object; }`\n\n**post** `/internal/beta/event-queues/provision`\n\nProvision SQS queue, SNS subscriptions, and IAM role for the current environment\n\n### Parameters\n\n- `region: string`\n  AWS region for the SQS queue (e.g., us-east-1, eu-west-1)\n\n- `allowedAssumeRoleArns?: string[]`\n  Additional IAM role ARNs allowed to assume the external role for queue access\n\n- `createLowPriorityQueues?: boolean`\n  Whether to create separate low-priority queues for standard topic events\n\n- `eventTypes?: string[]`\n  Event types to subscribe to. Defaults to entitlements, measurements, and migrations.\n\n- `suffix?: string`\n  Optional suffix to allow multiple queues for the same environment and region\n\n### Returns\n\n- `{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }`\n  Response object\n\n  - `data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst response = await client.internal.beta.eventQueues.provision({ region: 'us-east-1' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'event_queues provision',
        example:
          "stigg internal:beta:event-queues provision \\\n  --api-key 'My API Key' \\\n  --region us-east-1",
      },
      csharp: {
        method: 'Internal.Beta.EventQueues.Provision',
        example:
          'EventQueueProvisionParams parameters = new() { Region = Region.UsEast1 };\n\nvar response = await client.Internal.Beta.EventQueues.Provision(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Internal.Beta.EventQueues.Provision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Internal.Beta.EventQueues.Provision(context.TODO(), stigg.InternalBetaEventQueueProvisionParams{\n\t\tRegion: stigg.InternalBetaEventQueueProvisionParamsRegionUsEast1,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/internal/beta/event-queues/provision \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-KEY: $STIGG_API_KEY" \\\n    -d \'{\n          "region": "us-east-1"\n        }\'',
      },
      java: {
        method: 'internal_().beta().eventQueues().provision',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueProvisionParams;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueProvisionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventQueueProvisionParams params = EventQueueProvisionParams.builder()\n            .region(EventQueueProvisionParams.Region.US_EAST_1)\n            .build();\n        EventQueueProvisionResponse response = client.internal_().beta().eventQueues().provision(params);\n    }\n}',
      },
      python: {
        method: 'internal.beta.event_queues.provision',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.internal.beta.event_queues.provision(\n    region="us-east-1",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'internal.beta.event_queues.provision',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nresponse = stigg.internal.beta.event_queues.provision(region: :"us-east-1")\n\nputs(response)',
      },
      typescript: {
        method: 'client.internal.beta.eventQueues.provision',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.internal.beta.eventQueues.provision({ region: 'us-east-1' });\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/internal/beta/event-queues',
    httpMethod: 'get',
    summary: 'Get a list of event queues',
    description: 'List all event queues for the current environment',
    stainlessPath: '(resource) internal.beta.event_queues > (method) list',
    qualified: 'client.internal.beta.eventQueues.list',
    response:
      "{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }[]; pagination: { next: string; prev: string; }; }",
    markdown:
      "## list\n\n`client.internal.beta.eventQueues.list(): { data: object[]; pagination: object; }`\n\n**get** `/internal/beta/event-queues`\n\nList all event queues for the current environment\n\n### Returns\n\n- `{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }[]; pagination: { next: string; prev: string; }; }`\n  Response list object\n\n  - `data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }[]`\n  - `pagination: { next: string; prev: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst eventQueues = await client.internal.beta.eventQueues.list();\n\nconsole.log(eventQueues);\n```",
    perLanguage: {
      cli: {
        method: 'event_queues list',
        example: "stigg internal:beta:event-queues list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Internal.Beta.EventQueues.List',
        example:
          'EventQueueListParams parameters = new();\n\nvar eventQueues = await client.Internal.Beta.EventQueues.List(parameters);\n\nConsole.WriteLine(eventQueues);',
      },
      go: {
        method: 'client.Internal.Beta.EventQueues.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\teventQueues, err := client.Internal.Beta.EventQueues.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", eventQueues.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/internal/beta/event-queues \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'internal_().beta().eventQueues().list',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueListParams;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventQueueListResponse eventQueues = client.internal_().beta().eventQueues().list();\n    }\n}',
      },
      python: {
        method: 'internal.beta.event_queues.list',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nevent_queues = client.internal.beta.event_queues.list()\nprint(event_queues.data)',
      },
      ruby: {
        method: 'internal.beta.event_queues.list',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nevent_queues = stigg.internal.beta.event_queues.list\n\nputs(event_queues)',
      },
      typescript: {
        method: 'client.internal.beta.eventQueues.list',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst eventQueues = await client.internal.beta.eventQueues.list();\n\nconsole.log(eventQueues.data);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/internal/beta/event-queues/{queueName}',
    httpMethod: 'get',
    summary: 'Get a single event queue by ID',
    description: 'Get event queue by queue name',
    stainlessPath: '(resource) internal.beta.event_queues > (method) retrieve',
    qualified: 'client.internal.beta.eventQueues.retrieve',
    params: ['queueName: string;'],
    response:
      "{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }",
    markdown:
      "## retrieve\n\n`client.internal.beta.eventQueues.retrieve(queueName: string): { data: object; }`\n\n**get** `/internal/beta/event-queues/{queueName}`\n\nGet event queue by queue name\n\n### Parameters\n\n- `queueName: string`\n\n### Returns\n\n- `{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }`\n  Response object\n\n  - `data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst eventQueue = await client.internal.beta.eventQueues.retrieve('x');\n\nconsole.log(eventQueue);\n```",
    perLanguage: {
      cli: {
        method: 'event_queues retrieve',
        example:
          "stigg internal:beta:event-queues retrieve \\\n  --api-key 'My API Key' \\\n  --queue-name x",
      },
      csharp: {
        method: 'Internal.Beta.EventQueues.Retrieve',
        example:
          'EventQueueRetrieveParams parameters = new() { QueueName = "x" };\n\nvar eventQueue = await client.Internal.Beta.EventQueues.Retrieve(parameters);\n\nConsole.WriteLine(eventQueue);',
      },
      go: {
        method: 'client.Internal.Beta.EventQueues.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\teventQueue, err := client.Internal.Beta.EventQueues.Get(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", eventQueue.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/internal/beta/event-queues/$QUEUE_NAME \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'internal_().beta().eventQueues().retrieve',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueRetrieveParams;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventQueueRetrieveResponse eventQueue = client.internal_().beta().eventQueues().retrieve("x");\n    }\n}',
      },
      python: {
        method: 'internal.beta.event_queues.retrieve',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nevent_queue = client.internal.beta.event_queues.retrieve(\n    "x",\n)\nprint(event_queue.data)',
      },
      ruby: {
        method: 'internal.beta.event_queues.retrieve',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nevent_queue = stigg.internal.beta.event_queues.retrieve("x")\n\nputs(event_queue)',
      },
      typescript: {
        method: 'client.internal.beta.eventQueues.retrieve',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst eventQueue = await client.internal.beta.eventQueues.retrieve('x');\n\nconsole.log(eventQueue.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/internal/beta/event-queues/{queueName}',
    httpMethod: 'patch',
    summary: 'Update a event queue',
    description: 'Update event queue configuration',
    stainlessPath: '(resource) internal.beta.event_queues > (method) update',
    qualified: 'client.internal.beta.eventQueues.update',
    params: [
      'queueName: string;',
      'allowedAssumeRoleArns?: string[];',
      'createLowPriorityQueues?: boolean;',
      'eventTypes?: string[];',
    ],
    response:
      "{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }",
    markdown:
      "## update\n\n`client.internal.beta.eventQueues.update(queueName: string, allowedAssumeRoleArns?: string[], createLowPriorityQueues?: boolean, eventTypes?: string[]): { data: object; }`\n\n**patch** `/internal/beta/event-queues/{queueName}`\n\nUpdate event queue configuration\n\n### Parameters\n\n- `queueName: string`\n\n- `allowedAssumeRoleArns?: string[]`\n\n- `createLowPriorityQueues?: boolean`\n  Whether to create separate low-priority queues for standard topic events\n\n- `eventTypes?: string[]`\n\n### Returns\n\n- `{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }`\n  Response object\n\n  - `data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst eventQueue = await client.internal.beta.eventQueues.update('x');\n\nconsole.log(eventQueue);\n```",
    perLanguage: {
      cli: {
        method: 'event_queues update',
        example: "stigg internal:beta:event-queues update \\\n  --api-key 'My API Key' \\\n  --queue-name x",
      },
      csharp: {
        method: 'Internal.Beta.EventQueues.Update',
        example:
          'EventQueueUpdateParams parameters = new() { QueueName = "x" };\n\nvar eventQueue = await client.Internal.Beta.EventQueues.Update(parameters);\n\nConsole.WriteLine(eventQueue);',
      },
      go: {
        method: 'client.Internal.Beta.EventQueues.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\teventQueue, err := client.Internal.Beta.EventQueues.Update(\n\t\tcontext.TODO(),\n\t\t"x",\n\t\tstigg.InternalBetaEventQueueUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", eventQueue.Data)\n}\n',
      },
      http: {
        example:
          "curl https://api.stigg.io/internal/beta/event-queues/$QUEUE_NAME \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-KEY: $STIGG_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'internal_().beta().eventQueues().update',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueUpdateParams;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventQueueUpdateResponse eventQueue = client.internal_().beta().eventQueues().update("x");\n    }\n}',
      },
      python: {
        method: 'internal.beta.event_queues.update',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nevent_queue = client.internal.beta.event_queues.update(\n    queue_name="x",\n)\nprint(event_queue.data)',
      },
      ruby: {
        method: 'internal.beta.event_queues.update',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nevent_queue = stigg.internal.beta.event_queues.update("x")\n\nputs(event_queue)',
      },
      typescript: {
        method: 'client.internal.beta.eventQueues.update',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst eventQueue = await client.internal.beta.eventQueues.update('x');\n\nconsole.log(eventQueue.data);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/internal/beta/event-queues/{queueName}',
    httpMethod: 'delete',
    summary: 'Delete event queue',
    description: 'Delete an event queue and tear down its infrastructure',
    stainlessPath: '(resource) internal.beta.event_queues > (method) delete',
    qualified: 'client.internal.beta.eventQueues.delete',
    params: ['queueName: string;'],
    response:
      "{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }",
    markdown:
      "## delete\n\n`client.internal.beta.eventQueues.delete(queueName: string): { data: object; }`\n\n**delete** `/internal/beta/event-queues/{queueName}`\n\nDelete an event queue and tear down its infrastructure\n\n### Parameters\n\n- `queueName: string`\n\n### Returns\n\n- `{ data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }; }`\n  Response object\n\n  - `data: { createdAt: string; queueName: string; region: string; status: 'PROVISIONING' | 'ACTIVE' | 'FAILED' | 'DEPROVISIONING'; updatedAt: string; queueUrl?: string; roleArn?: string; suffix?: string; }`\n\n### Example\n\n```typescript\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg();\n\nconst eventQueue = await client.internal.beta.eventQueues.delete('x');\n\nconsole.log(eventQueue);\n```",
    perLanguage: {
      cli: {
        method: 'event_queues delete',
        example: "stigg internal:beta:event-queues delete \\\n  --api-key 'My API Key' \\\n  --queue-name x",
      },
      csharp: {
        method: 'Internal.Beta.EventQueues.Delete',
        example:
          'EventQueueDeleteParams parameters = new() { QueueName = "x" };\n\nvar eventQueue = await client.Internal.Beta.EventQueues.Delete(parameters);\n\nConsole.WriteLine(eventQueue);',
      },
      go: {
        method: 'client.Internal.Beta.EventQueues.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\teventQueue, err := client.Internal.Beta.EventQueues.Delete(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", eventQueue.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stigg.io/internal/beta/event-queues/$QUEUE_NAME \\\n    -X DELETE \\\n    -H "X-API-KEY: $STIGG_API_KEY"',
      },
      java: {
        method: 'internal_().beta().eventQueues().delete',
        example:
          'package io.stigg.example;\n\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueDeleteParams;\nimport io.stigg.models.internal_.beta.eventqueues.EventQueueDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StiggClient client = StiggOkHttpClient.fromEnv();\n\n        EventQueueDeleteResponse eventQueue = client.internal_().beta().eventQueues().delete("x");\n    }\n}',
      },
      python: {
        method: 'internal.beta.event_queues.delete',
        example:
          'import os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\nevent_queue = client.internal.beta.event_queues.delete(\n    "x",\n)\nprint(event_queue.data)',
      },
      ruby: {
        method: 'internal.beta.event_queues.delete',
        example:
          'require "stigg"\n\nstigg = Stigg::Client.new(api_key: "My API Key")\n\nevent_queue = stigg.internal.beta.event_queues.delete("x")\n\nputs(event_queue)',
      },
      typescript: {
        method: 'client.internal.beta.eventQueues.delete',
        example:
          "import Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst eventQueue = await client.internal.beta.eventQueues.delete('x');\n\nconsole.log(eventQueue.data);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Stigg Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/stigg.svg?label=pypi%20(stable))](https://pypi.org/project/stigg/)\n\nThe Stigg Python library provides convenient access to the Stigg REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stigg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stigg%2Ftypescript-mcp&config=eyJuYW1lIjoiQHN0aWdnL3R5cGVzY3JpcHQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vc3RpZ2ctbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IlgtQVBJLUtFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stigg%2Ftypescript-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstigg-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22X-API-KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install stigg\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom stigg import Stigg\n\nclient = Stigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\n\ncustomer_response = client.v1.customers.retrieve(\n    "REPLACE_ME",\n)\nprint(customer_response.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `STIGG_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncStigg` instead of `Stigg` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom stigg import AsyncStigg\n\nclient = AsyncStigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  customer_response = await client.v1.customers.retrieve(\n      "REPLACE_ME",\n  )\n  print(customer_response.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install stigg[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom stigg import DefaultAioHttpClient\nfrom stigg import AsyncStigg\n\nasync def main() -> None:\n  async with AsyncStigg(\n    api_key=os.environ.get("STIGG_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    customer_response = await client.v1.customers.retrieve(\n        "REPLACE_ME",\n    )\n    print(customer_response.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Stigg API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom stigg import Stigg\n\nclient = Stigg()\n\nall_customers = []\n# Automatically fetches more pages as needed.\nfor customer in client.v1.customers.list(\n    limit=30,\n):\n    # Do something with customer here\n    all_customers.append(customer)\nprint(all_customers)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom stigg import AsyncStigg\n\nclient = AsyncStigg()\n\nasync def main() -> None:\n    all_customers = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for customer in client.v1.customers.list(\n    limit=30,\n):\n        all_customers.append(customer)\n    print(all_customers)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.v1.customers.list(\n    limit=30,\n)\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.v1.customers.list(\n    limit=30,\n)\n\nprint(f"next page cursor: {first_page.pagination.next}") # => "next page cursor: ..."\nfor customer in first_page.data:\n    print(customer.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom stigg import Stigg\n\nclient = Stigg()\n\ncustomer_response = client.v1.customers.update(\n    id="x",\n    passthrough={},\n)\nprint(customer_response.passthrough)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `stigg.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `stigg.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `stigg.APIError`.\n\n```python\nimport stigg\nfrom stigg import Stigg\n\nclient = Stigg()\n\ntry:\n    client.v1.customers.retrieve(\n        "REPLACE_ME",\n    )\nexcept stigg.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept stigg.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept stigg.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom stigg import Stigg\n\n# Configure the default for all requests:\nclient = Stigg(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).v1.customers.retrieve(\n    "REPLACE_ME",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom stigg import Stigg\n\n# Configure the default for all requests:\nclient = Stigg(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Stigg(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).v1.customers.retrieve(\n    "REPLACE_ME",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `STIGG_LOG` to `info`.\n\n```shell\n$ export STIGG_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom stigg import Stigg\n\nclient = Stigg()\nresponse = client.v1.customers.with_raw_response.retrieve(\n    "REPLACE_ME",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\ncustomer = response.parse()  # get the object that `v1.customers.retrieve()` would have returned\nprint(customer.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stiggio/stigg-python/tree/main/src/stigg/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stiggio/stigg-python/tree/main/src/stigg/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.v1.customers.with_streaming_response.retrieve(\n    "REPLACE_ME",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom stigg import Stigg, DefaultHttpxClient\n\nclient = Stigg(\n    # Or use the `STIGG_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom stigg import Stigg\n\nwith Stigg() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stiggio/stigg-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport stigg\nprint(stigg.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Stigg Go API Library\n\n<a href="https://pkg.go.dev/github.com/stiggio/stigg-go"><img src="https://pkg.go.dev/badge/github.com/stiggio/stigg-go.svg" alt="Go Reference"></a>\n\nThe Stigg Go library provides convenient access to the Stigg REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stigg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stigg%2Ftypescript-mcp&config=eyJuYW1lIjoiQHN0aWdnL3R5cGVzY3JpcHQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vc3RpZ2ctbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IlgtQVBJLUtFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stigg%2Ftypescript-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstigg-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22X-API-KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/stiggio/stigg-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/stiggio/stigg-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stiggio/stigg-go"\n\t"github.com/stiggio/stigg-go/option"\n)\n\nfunc main() {\n\tclient := stigg.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("STIGG_API_KEY")\n\t)\n\tcustomerResponse, err := client.V1.Customers.Get(context.TODO(), "REPLACE_ME")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerResponse.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.V1.Customers.Get(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stiggio/stigg-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.V1.Customers.ListAutoPaging(context.TODO(), stigg.V1CustomerListParams{\n\tLimit: stigg.Int(30),\n})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tv1CustomerListResponse := iter.Current()\n\tfmt.Printf("%+v\\n", v1CustomerListResponse)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.V1.Customers.List(context.TODO(), stigg.V1CustomerListParams{\n\tLimit: stigg.Int(30),\n})\nfor page != nil {\n\tfor _, customer := range page.Data {\n\t\tfmt.Printf("%+v\\n", customer)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.V1.Customers.Get(context.TODO(), "REPLACE_ME")\nif err != nil {\n\tvar apierr *stigg.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/api/v1/customers/{id}": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.V1.Customers.Get(\n\tctx,\n\t"REPLACE_ME",\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := stigg.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.V1.Customers.Get(\n\tcontext.TODO(),\n\t"REPLACE_ME",\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\ncustomerResponse, err := client.V1.Customers.Get(\n\tcontext.TODO(),\n\t"REPLACE_ME",\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", customerResponse)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stiggio/stigg-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Stigg TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@stigg/typescript.svg?label=npm%20(stable))](https://npmjs.org/package/@stigg/typescript) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@stigg/typescript)\n\nThis library provides convenient access to the Stigg REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stigg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stigg%2Ftypescript-mcp&config=eyJuYW1lIjoiQHN0aWdnL3R5cGVzY3JpcHQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vc3RpZ2ctbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IlgtQVBJLUtFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stigg%2Ftypescript-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstigg-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22X-API-KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @stigg/typescript\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse = await client.v1.customers.retrieve('REPLACE_ME');\n\nconsole.log(customerResponse.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  apiKey: process.env['STIGG_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerResponse: Stigg.V1.CustomerResponse = await client.v1.customers.retrieve(\n  'REPLACE_ME',\n);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst customerResponse = await client.v1.customers.retrieve('REPLACE_ME').catch(async (err) => {\n  if (err instanceof Stigg.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Stigg({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.v1.customers.retrieve('REPLACE_ME', {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Stigg({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.v1.customers.retrieve('REPLACE_ME', {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Stigg API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllCustomerListResponses(params) {\n  const allCustomerListResponses = [];\n  // Automatically fetches more pages as needed.\n  for await (const customerListResponse of client.v1.customers.list({ limit: 30 })) {\n    allCustomerListResponses.push(customerListResponse);\n  }\n  return allCustomerListResponses;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.v1.customers.list({ limit: 30 });\nfor (const customerListResponse of page.data) {\n  console.log(customerListResponse);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Stigg();\n\nconst response = await client.v1.customers.retrieve('REPLACE_ME').asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: customerResponse, response: raw } = await client.v1.customers\n  .retrieve('REPLACE_ME')\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(customerResponse.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `STIGG_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Stigg from '@stigg/typescript';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Stigg({\n  logger: logger.child({ name: 'Stigg' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.v1.customers.retrieve({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Stigg from '@stigg/typescript';\nimport fetch from 'my-fetch';\n\nconst client = new Stigg({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Stigg from '@stigg/typescript';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Stigg({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Stigg from '@stigg/typescript';\n\nconst client = new Stigg({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Stigg from 'npm:@stigg/typescript';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Stigg({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stiggio/stigg-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Stigg Ruby API library\n\nThe Stigg Ruby library provides convenient access to the Stigg REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/stiggio/stigg-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stigg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stigg%2Ftypescript-mcp&config=eyJuYW1lIjoiQHN0aWdnL3R5cGVzY3JpcHQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vc3RpZ2ctbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IlgtQVBJLUtFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stigg%2Ftypescript-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstigg-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22X-API-KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/stigg).\n\n\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "stigg", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "stigg"\n\nstigg = Stigg::Client.new(\n  api_key: ENV["STIGG_API_KEY"] # This is the default and can be omitted\n)\n\ncustomer_response = stigg.v1.customers.retrieve("REPLACE_ME")\n\nputs(customer_response.data)\n```\n\n\n\n### Pagination\n\nList methods in the Stigg API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = stigg.v1.customers.list(limit: 30)\n\n# Fetch single item from page.\ncustomer = page.data[0]\nputs(customer.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |customer|\n  puts(customer.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Stigg::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  customer = stigg.v1.customers.retrieve("REPLACE_ME")\nrescue Stigg::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Stigg::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Stigg::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstigg = Stigg::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nstigg.v1.customers.retrieve("REPLACE_ME", request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstigg = Stigg::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nstigg.v1.customers.retrieve("REPLACE_ME", request_options: {timeout: 5})\n```\n\nOn timeout, `Stigg::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Stigg::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\ncustomer_response =\n  stigg.v1.customers.retrieve(\n    "REPLACE_ME",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(customer_response[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Stigg::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Stigg::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nstigg.v1.customers.retrieve("REPLACE_ME")\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nstigg.v1.customers.retrieve("REPLACE_ME")\n\n# You can also splat a full Params class:\nparams = Stigg::V1::CustomerRetrieveParams.new\nstigg.v1.customers.retrieve("REPLACE_ME", **params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :usd\nputs(Stigg::V1::CustomerUpdateParams::BillingCurrency::USD)\n\n# Revealed type: `T.all(Stigg::V1::CustomerUpdateParams::BillingCurrency, Symbol)`\nT.reveal_type(Stigg::V1::CustomerUpdateParams::BillingCurrency::USD)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nstigg.v1.customers.update(\n  billing_currency: Stigg::V1::CustomerUpdateParams::BillingCurrency::USD,\n  # …\n)\n\n# Literal values are also permissible:\nstigg.v1.customers.update(\n  billing_currency: :usd,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/stiggio/stigg-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Stigg Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/io.stigg/stigg-java)](https://central.sonatype.com/artifact/io.stigg/stigg-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/io.stigg/stigg-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/io.stigg/stigg-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Stigg Java SDK provides convenient access to the Stigg REST API   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stigg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stigg%2Ftypescript-mcp&config=eyJuYW1lIjoiQHN0aWdnL3R5cGVzY3JpcHQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vc3RpZ2ctbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IlgtQVBJLUtFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stigg%2Ftypescript-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstigg-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22X-API-KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nJavadocs are available on [javadoc.io](https://javadoc.io/doc/io.stigg/stigg-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("io.stigg:stigg-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>io.stigg</groupId>\n  <artifactId>stigg-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\n// Configures using the `stigg.apiKey` and `stigg.baseUrl` system properties\n// Or configures using the `STIGG_API_KEY` and `STIGG_BASE_URL` environment variables\nStiggClient client = StiggOkHttpClient.fromEnv();\n\nCustomerResponse customerResponse = client.v1().customers().retrieve("REPLACE_ME");\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\n// Configures using the `stigg.apiKey` and `stigg.baseUrl` system properties\n// Or configures using the `STIGG_API_KEY` and `STIGG_BASE_URL` environment variables\nStiggClient client = StiggOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\nStiggClient client = StiggOkHttpClient.builder()\n    // Configures using the `stigg.apiKey` and `stigg.baseUrl` system properties\n    // Or configures using the `STIGG_API_KEY` and `STIGG_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property | Environment variable | Required | Default value            |\n| --------- | --------------- | -------------------- | -------- | ------------------------ |\n| `apiKey`  | `stigg.apiKey`  | `STIGG_API_KEY`      | true     | -                        |\n| `baseUrl` | `stigg.baseUrl` | `STIGG_BASE_URL`     | true     | `"https://api.stigg.io"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport io.stigg.client.StiggClient;\n\nStiggClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Stigg API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.v1().customers().retrieve(...)` should be called with an instance of `CustomerRetrieveParams`, and it     will return an instance of `CustomerResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `stigg.apiKey` and `stigg.baseUrl` system properties\n// Or configures using the `STIGG_API_KEY` and `STIGG_BASE_URL` environment variables\nStiggClient client = StiggOkHttpClient.fromEnv();\n\nCompletableFuture<CustomerResponse> customerResponse = client.async().v1().customers().retrieve("REPLACE_ME");\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport io.stigg.client.StiggClientAsync;\nimport io.stigg.client.okhttp.StiggOkHttpClientAsync;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `stigg.apiKey` and `stigg.baseUrl` system properties\n// Or configures using the `STIGG_API_KEY` and `STIGG_BASE_URL` environment variables\nStiggClientAsync client = StiggOkHttpClientAsync.fromEnv();\n\nCompletableFuture<CustomerResponse> customerResponse = client.v1().customers().retrieve("REPLACE_ME");\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport io.stigg.core.http.Headers;\nimport io.stigg.core.http.HttpResponseFor;\nimport io.stigg.models.v1.customers.CustomerResponse;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\nHttpResponseFor<CustomerResponse> customerResponse = client.v1().customers().withRawResponse().retrieve("REPLACE_ME");\n\nint statusCode = customerResponse.statusCode();\nHeaders headers = customerResponse.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport io.stigg.models.v1.customers.CustomerResponse;\n\nCustomerResponse parsedCustomerResponse = customerResponse.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`StiggServiceException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](stigg-java-core/src/main/kotlin/io/stigg/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](stigg-java-core/src/main/kotlin/io/stigg/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](stigg-java-core/src/main/kotlin/io/stigg/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](stigg-java-core/src/main/kotlin/io/stigg/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](stigg-java-core/src/main/kotlin/io/stigg/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](stigg-java-core/src/main/kotlin/io/stigg/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](stigg-java-core/src/main/kotlin/io/stigg/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](stigg-java-core/src/main/kotlin/io/stigg/errors/UnexpectedStatusCodeException.kt) |\n\n- [`StiggIoException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggIoException.kt): I/O networking errors.\n\n- [`StiggRetryableException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`StiggInvalidDataException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`StiggException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)\n\n```java\nimport io.stigg.models.v1.customers.CustomerListPage;\nimport io.stigg.models.v1.customers.CustomerListResponse;\n\nCustomerListPage page = client.v1().customers().list();\n\n// Process as an Iterable\nfor (CustomerListResponse customer : page.autoPager()) {\n    System.out.println(customer);\n}\n\n// Process as a Stream\npage.autoPager()\n    .stream()\n    .limit(50)\n    .forEach(customer -> System.out.println(customer));\n```\n\nWhen using the asynchronous client, the method returns an [`AsyncStreamResponse`](stigg-java-core/src/main/kotlin/io/stigg/core/http/AsyncStreamResponse.kt):\n\n```java\nimport io.stigg.core.http.AsyncStreamResponse;\nimport io.stigg.models.v1.customers.CustomerListPageAsync;\nimport io.stigg.models.v1.customers.CustomerListResponse;\nimport java.util.Optional;\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture<CustomerListPageAsync> pageFuture = client.async().v1().customers().list();\n\npageFuture.thenRun(page -> page.autoPager().subscribe(customer -> {\n    System.out.println(customer);\n}));\n\n// If you need to handle errors or completion of the stream\npageFuture.thenRun(page -> page.autoPager().subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(CustomerListResponse customer) {\n        System.out.println(customer);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more!");\n        }\n    }\n}));\n\n// Or use futures\npageFuture.thenRun(page -> page.autoPager()\n    .subscribe(customer -> {\n        System.out.println(customer);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more!");\n        }\n    }));\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```java\nimport io.stigg.models.v1.customers.CustomerListPage;\nimport io.stigg.models.v1.customers.CustomerListResponse;\n\nCustomerListPage page = client.v1().customers().list();\nwhile (true) {\n    for (CustomerListResponse customer : page.items()) {\n        System.out.println(customer);\n    }\n\n    if (!page.hasNextPage()) {\n        break;\n    }\n\n    page = page.nextPage();\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `STIGG_LOG` environment variable to   `info`:\n\n```sh\nexport STIGG_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport STIGG_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `stigg-java-core` is published with a     [configuration file](stigg-java-core/src/main/resources/META-INF/proguard/stigg-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`StiggOkHttpClient`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClient.kt) or     [`StiggOkHttpClientAsync`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport io.stigg.models.v1.customers.CustomerResponse;\n\nCustomerResponse customerResponse = client.v1().customers().retrieve(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport java.time.Duration;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\nimport java.time.Duration;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `stigg-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StiggClient`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClient.kt), [`StiggClientAsync`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientAsync.kt),             [`StiggClientImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientImpl.kt), and [`StiggClientAsyncImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `stigg-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StiggOkHttpClient`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClient.kt) and [`StiggOkHttpClientAsync`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClientAsync.kt), which             provide a way to construct [`StiggClientImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientImpl.kt) and             [`StiggClientAsyncImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientAsyncImpl.kt), respectively, using OkHttp\n- `stigg-java`\n  - Depends on and exposes the APIs of both `stigg-java-core` and `stigg-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`stigg-java` dependency](#installation) with `stigg-java-core`\n2. Copy `stigg-java-client-okhttp`\'s [`OkHttpClient`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`StiggClientImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientImpl.kt) or [`StiggClientAsyncImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientAsyncImpl.kt), similarly to        [`StiggOkHttpClient`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClient.kt) or [`StiggOkHttpClientAsync`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`stigg-java` dependency](#installation) with `stigg-java-core`\n2. Write a class that implements the [`HttpClient`](stigg-java-core/src/main/kotlin/io/stigg/core/http/HttpClient.kt) interface\n3. Construct [`StiggClientImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientImpl.kt) or [`StiggClientAsyncImpl`](stigg-java-core/src/main/kotlin/io/stigg/client/StiggClientAsyncImpl.kt), similarly to        [`StiggOkHttpClient`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClient.kt) or [`StiggOkHttpClientAsync`](stigg-java-client-okhttp/src/main/kotlin/io/stigg/client/okhttp/StiggOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport io.stigg.core.JsonValue;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\nCustomerRetrieveParams params = CustomerRetrieveParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport io.stigg.core.JsonValue;\nimport io.stigg.models.v1.customers.CustomerUpdateParams;\n\nCustomerUpdateParams params = CustomerUpdateParams.builder()\n    .passthrough(CustomerUpdateParams.Passthrough.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](stigg-java-core/src/main/kotlin/io/stigg/core/Values.kt) object to its setter:\n\n```java\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\nCustomerRetrieveParams params = CustomerRetrieveParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](stigg-java-core/src/main/kotlin/io/stigg/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport io.stigg.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](stigg-java-core/src/main/kotlin/io/stigg/core/Values.kt):\n\n```java\nimport io.stigg.core.JsonMissing;\nimport io.stigg.models.v1.customers.CustomerRetrieveParams;\n\nCustomerRetrieveParams params = CustomerRetrieveParams.builder()\n    .id(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport io.stigg.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.v1().customers().retrieve(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport io.stigg.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.v1().customers().retrieve(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`StiggInvalidDataException`](stigg-java-core/src/main/kotlin/io/stigg/errors/StiggInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport io.stigg.models.v1.customers.CustomerResponse;\n\nCustomerResponse customerResponse = client.v1().customers().retrieve(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport io.stigg.models.v1.customers.CustomerResponse;\n\nCustomerResponse customerResponse = client.v1().customers().retrieve(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport io.stigg.client.StiggClient;\nimport io.stigg.client.okhttp.StiggOkHttpClient;\n\nStiggClient client = StiggOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stiggio/stigg-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'csharp',
    content:
      '# Stigg C# API Library\n\nThe Stigg C# SDK provides convenient access to the Stigg REST API from applications written in   C#.\n\n## Installation\n\nInstall the package from [NuGet](https://www.nuget.org/packages/Stigg.Client):\n\n```bash\ndotnet add package Stigg.Client\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nStiggClient client = new();\n\nCustomerRetrieveParams parameters = new() { ID = "REPLACE_ME" };\n\nvar customerResponse = await client.V1.Customers.Retrieve(parameters);\n\nConsole.WriteLine(customerResponse);\n```',
  },
  {
    language: 'cli',
    content:
      "# Stigg CLI\n\nThe official CLI for the Stigg REST API.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install stiggio/tools/stigg\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stiggio/stigg-cli/cmd/stigg@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nstigg [resource] <command> [flags...]\n~~~\n\n~~~sh\nstigg v1:customers retrieve \\\n  --api-key 'My API Key' \\\n  --id REPLACE_ME\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required |\n| -------------------- | -------- |\n| `STIGG_API_KEY`      | yes      |\n\n### Global flags\n\n- `--api-key` (can also be set with `STIGG_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nstigg <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nstigg <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nstigg <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nstigg <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nstigg <command> --arg @data://file.txt\n~~~\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
