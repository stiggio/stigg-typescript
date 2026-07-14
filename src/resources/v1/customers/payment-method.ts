// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to customers
 */
export class PaymentMethod extends APIResource {
  /**
   * Attaches a payment method to a customer for billing. Required for paid
   * subscriptions when integrated with a billing provider.
   */
  attach(
    id: string,
    params: PaymentMethodAttachParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID, ...body } = params;
    return this._client.post(path`/api/v1/customers/${id}/payment-method`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Removes the payment method from a customer. Ensure active paid subscriptions
   * have an alternative payment method.
   */
  detach(
    id: string,
    params: PaymentMethodDetachParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerResponse> {
    const { 'X-ACCOUNT-ID': xAccountID, 'X-ENVIRONMENT-ID': xEnvironmentID } = params ?? {};
    return this._client.delete(path`/api/v1/customers/${id}/payment-method`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xAccountID != null ? { 'X-ACCOUNT-ID': xAccountID } : undefined),
          ...(xEnvironmentID != null ? { 'X-ENVIRONMENT-ID': xEnvironmentID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface PaymentMethodAttachParams {
  /**
   * Body param: Integration details
   */
  integrationId: string;

  /**
   * Body param: Billing provider payment method id
   */
  paymentMethodId: string;

  /**
   * Body param: The vendor identifier of integration
   */
  vendorIdentifier:
    | 'AUTH0'
    | 'ZUORA'
    | 'STRIPE'
    | 'HUBSPOT'
    | 'AWS_MARKETPLACE'
    | 'SNOWFLAKE'
    | 'SALESFORCE'
    | 'BIG_QUERY'
    | 'OPEN_FGA'
    | 'APP_STORE'
    | 'RECEIVED'
    | 'PREQUEL'
    | 'AIRWALLEX'
    | 'STRIPE_INVOICING';

  /**
   * Body param: Customers selected currency
   */
  billingCurrency?:
    | 'usd'
    | 'aed'
    | 'all'
    | 'amd'
    | 'ang'
    | 'aud'
    | 'awg'
    | 'azn'
    | 'bam'
    | 'bbd'
    | 'bdt'
    | 'bgn'
    | 'bif'
    | 'bmd'
    | 'bnd'
    | 'bsd'
    | 'bwp'
    | 'byn'
    | 'bzd'
    | 'brl'
    | 'cad'
    | 'cdf'
    | 'chf'
    | 'cny'
    | 'czk'
    | 'dkk'
    | 'dop'
    | 'dzd'
    | 'egp'
    | 'etb'
    | 'eur'
    | 'fjd'
    | 'gbp'
    | 'gel'
    | 'gip'
    | 'gmd'
    | 'gyd'
    | 'hkd'
    | 'hrk'
    | 'htg'
    | 'idr'
    | 'ils'
    | 'inr'
    | 'isk'
    | 'jmd'
    | 'jpy'
    | 'kes'
    | 'kgs'
    | 'khr'
    | 'kmf'
    | 'krw'
    | 'kyd'
    | 'kzt'
    | 'lbp'
    | 'lkr'
    | 'lrd'
    | 'lsl'
    | 'mad'
    | 'mdl'
    | 'mga'
    | 'mkd'
    | 'mmk'
    | 'mnt'
    | 'mop'
    | 'mro'
    | 'mvr'
    | 'mwk'
    | 'mxn'
    | 'myr'
    | 'mzn'
    | 'nad'
    | 'ngn'
    | 'nok'
    | 'npr'
    | 'nzd'
    | 'pgk'
    | 'php'
    | 'pkr'
    | 'pln'
    | 'qar'
    | 'ron'
    | 'rsd'
    | 'rub'
    | 'rwf'
    | 'sar'
    | 'sbd'
    | 'scr'
    | 'sek'
    | 'sgd'
    | 'sle'
    | 'sll'
    | 'sos'
    | 'szl'
    | 'thb'
    | 'tjs'
    | 'top'
    | 'try'
    | 'ttd'
    | 'tzs'
    | 'uah'
    | 'uzs'
    | 'vnd'
    | 'vuv'
    | 'wst'
    | 'xaf'
    | 'xcd'
    | 'yer'
    | 'zar'
    | 'zmw'
    | 'clp'
    | 'djf'
    | 'gnf'
    | 'ugx'
    | 'pyg'
    | 'xof'
    | 'xpf'
    | null;

  /**
   * Header param: Account ID — optional when authenticating with a user JWT (Bearer
   * token); falls back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Header param: Environment ID — required when authenticating with a user JWT
   * (Bearer token) on environment-scoped endpoints. Ignored for API-key auth (env is
   * intrinsic to the key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export interface PaymentMethodDetachParams {
  /**
   * Account ID — optional when authenticating with a user JWT (Bearer token); falls
   * back to the user's first membership. Ignored for API-key auth.
   */
  'X-ACCOUNT-ID'?: string;

  /**
   * Environment ID — required when authenticating with a user JWT (Bearer token) on
   * environment-scoped endpoints. Ignored for API-key auth (env is intrinsic to the
   * key).
   */
  'X-ENVIRONMENT-ID'?: string;
}

export declare namespace PaymentMethod {
  export {
    type PaymentMethodAttachParams as PaymentMethodAttachParams,
    type PaymentMethodDetachParams as PaymentMethodDetachParams,
  };
}
