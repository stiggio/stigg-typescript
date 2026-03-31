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
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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
