// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PaymentMethod extends APIResource {
  /**
   * Perform payment-method attachment on a Customer
   */
  attach(
    id: string,
    body: PaymentMethodAttachParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerResponse> {
    return this._client.post(path`/api/v1/customers/${id}/payment-method`, { body, ...options });
  }

  /**
   * Perform payment-method detachment on a Customer
   */
  detach(id: string, options?: RequestOptions): APIPromise<CustomersAPI.CustomerResponse> {
    return this._client.delete(path`/api/v1/customers/${id}/payment-method`, options);
  }
}

export interface PaymentMethodAttachParams {
  /**
   * Integration details
   */
  integrationId: string;

  /**
   * Billing provider payment method id
   */
  paymentMethodId: string;

  /**
   * The vendor identifier of integration
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
    | 'APP_STORE';

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
}

export declare namespace PaymentMethod {
  export { type PaymentMethodAttachParams as PaymentMethodAttachParams };
}
