// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v1.customers.retrieve',
    fullyQualifiedName: 'v1.customers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/customers/{id}',
  },
  {
    clientCallName: 'client.v1.customers.update',
    fullyQualifiedName: 'v1.customers.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/customers/{id}',
  },
  {
    clientCallName: 'client.v1.customers.list',
    fullyQualifiedName: 'v1.customers.list',
    httpMethod: 'get',
    httpPath: '/api/v1/customers',
  },
  {
    clientCallName: 'client.v1.customers.archive',
    fullyQualifiedName: 'v1.customers.archive',
    httpMethod: 'post',
    httpPath: '/api/v1/customers/{id}/archive',
  },
  {
    clientCallName: 'client.v1.customers.import',
    fullyQualifiedName: 'v1.customers.import',
    httpMethod: 'post',
    httpPath: '/api/v1/customers/import',
  },
  {
    clientCallName: 'client.v1.customers.listResources',
    fullyQualifiedName: 'v1.customers.listResources',
    httpMethod: 'get',
    httpPath: '/api/v1/customers/{id}/resources',
  },
  {
    clientCallName: 'client.v1.customers.provision',
    fullyQualifiedName: 'v1.customers.provision',
    httpMethod: 'post',
    httpPath: '/api/v1/customers',
  },
  {
    clientCallName: 'client.v1.customers.unarchive',
    fullyQualifiedName: 'v1.customers.unarchive',
    httpMethod: 'post',
    httpPath: '/api/v1/customers/{id}/unarchive',
  },
  {
    clientCallName: 'client.v1.customers.paymentMethod.attach',
    fullyQualifiedName: 'v1.customers.paymentMethod.attach',
    httpMethod: 'post',
    httpPath: '/api/v1/customers/{id}/payment-method',
  },
  {
    clientCallName: 'client.v1.customers.paymentMethod.detach',
    fullyQualifiedName: 'v1.customers.paymentMethod.detach',
    httpMethod: 'delete',
    httpPath: '/api/v1/customers/{id}/payment-method',
  },
  {
    clientCallName: 'client.v1.customers.promotionalEntitlements.grant',
    fullyQualifiedName: 'v1.customers.promotionalEntitlements.grant',
    httpMethod: 'post',
    httpPath: '/api/v1/customers/{customerId}/promotional',
  },
  {
    clientCallName: 'client.v1.customers.promotionalEntitlements.revoke',
    fullyQualifiedName: 'v1.customers.promotionalEntitlements.revoke',
    httpMethod: 'delete',
    httpPath: '/api/v1/customers/{customerId}/promotional/{featureId}',
  },
  {
    clientCallName: 'client.v1.subscriptions.retrieve',
    fullyQualifiedName: 'v1.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/subscriptions/{id}',
  },
  {
    clientCallName: 'client.v1.subscriptions.update',
    fullyQualifiedName: 'v1.subscriptions.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/subscriptions/{id}',
  },
  {
    clientCallName: 'client.v1.subscriptions.list',
    fullyQualifiedName: 'v1.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/api/v1/subscriptions',
  },
  {
    clientCallName: 'client.v1.subscriptions.cancel',
    fullyQualifiedName: 'v1.subscriptions.cancel',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/cancel',
  },
  {
    clientCallName: 'client.v1.subscriptions.delegate',
    fullyQualifiedName: 'v1.subscriptions.delegate',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/delegate',
  },
  {
    clientCallName: 'client.v1.subscriptions.import',
    fullyQualifiedName: 'v1.subscriptions.import',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/import',
  },
  {
    clientCallName: 'client.v1.subscriptions.migrate',
    fullyQualifiedName: 'v1.subscriptions.migrate',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/migrate',
  },
  {
    clientCallName: 'client.v1.subscriptions.preview',
    fullyQualifiedName: 'v1.subscriptions.preview',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/preview',
  },
  {
    clientCallName: 'client.v1.subscriptions.provision',
    fullyQualifiedName: 'v1.subscriptions.provision',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions',
  },
  {
    clientCallName: 'client.v1.subscriptions.transfer',
    fullyQualifiedName: 'v1.subscriptions.transfer',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/transfer',
  },
  {
    clientCallName: 'client.v1.subscriptions.futureUpdate.cancelPendingPayment',
    fullyQualifiedName: 'v1.subscriptions.futureUpdate.cancelPendingPayment',
    httpMethod: 'delete',
    httpPath: '/api/v1/subscriptions/{id}/future-update/pending-payment',
  },
  {
    clientCallName: 'client.v1.subscriptions.futureUpdate.cancelSchedule',
    fullyQualifiedName: 'v1.subscriptions.futureUpdate.cancelSchedule',
    httpMethod: 'delete',
    httpPath: '/api/v1/subscriptions/{id}/future-update/schedule',
  },
  {
    clientCallName: 'client.v1.subscriptions.usage.chargeUsage',
    fullyQualifiedName: 'v1.subscriptions.usage.chargeUsage',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/usage/charge',
  },
  {
    clientCallName: 'client.v1.subscriptions.usage.syncUsage',
    fullyQualifiedName: 'v1.subscriptions.usage.syncUsage',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/usage/sync',
  },
  {
    clientCallName: 'client.v1.subscriptions.invoice.markAsPaid',
    fullyQualifiedName: 'v1.subscriptions.invoice.markAsPaid',
    httpMethod: 'post',
    httpPath: '/api/v1/subscriptions/{id}/invoice/paid',
  },
  {
    clientCallName: 'client.v1.coupons.create',
    fullyQualifiedName: 'v1.coupons.create',
    httpMethod: 'post',
    httpPath: '/api/v1/coupons',
  },
  {
    clientCallName: 'client.v1.coupons.retrieve',
    fullyQualifiedName: 'v1.coupons.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/coupons/{id}',
  },
  {
    clientCallName: 'client.v1.coupons.list',
    fullyQualifiedName: 'v1.coupons.list',
    httpMethod: 'get',
    httpPath: '/api/v1/coupons',
  },
  {
    clientCallName: 'client.v1.coupons.archiveCoupon',
    fullyQualifiedName: 'v1.coupons.archiveCoupon',
    httpMethod: 'post',
    httpPath: '/api/v1/coupons/{id}/archive',
  },
  {
    clientCallName: 'client.v1.coupons.updateCoupon',
    fullyQualifiedName: 'v1.coupons.updateCoupon',
    httpMethod: 'patch',
    httpPath: '/api/v1/coupons/{id}',
  },
  {
    clientCallName: 'client.v1.events.report',
    fullyQualifiedName: 'v1.events.report',
    httpMethod: 'post',
    httpPath: '/api/v1/events',
  },
  {
    clientCallName: 'client.v1.events.features.archiveFeature',
    fullyQualifiedName: 'v1.events.features.archiveFeature',
    httpMethod: 'post',
    httpPath: '/api/v1/features/{id}/archive',
  },
  {
    clientCallName: 'client.v1.events.features.createFeature',
    fullyQualifiedName: 'v1.events.features.createFeature',
    httpMethod: 'post',
    httpPath: '/api/v1/features',
  },
  {
    clientCallName: 'client.v1.events.features.listFeatures',
    fullyQualifiedName: 'v1.events.features.listFeatures',
    httpMethod: 'get',
    httpPath: '/api/v1/features',
  },
  {
    clientCallName: 'client.v1.events.features.retrieveFeature',
    fullyQualifiedName: 'v1.events.features.retrieveFeature',
    httpMethod: 'get',
    httpPath: '/api/v1/features/{id}',
  },
  {
    clientCallName: 'client.v1.events.features.unarchiveFeature',
    fullyQualifiedName: 'v1.events.features.unarchiveFeature',
    httpMethod: 'post',
    httpPath: '/api/v1/features/{id}/unarchive',
  },
  {
    clientCallName: 'client.v1.events.features.updateFeature',
    fullyQualifiedName: 'v1.events.features.updateFeature',
    httpMethod: 'patch',
    httpPath: '/api/v1/features/{id}',
  },
  {
    clientCallName: 'client.v1.events.addons.archiveAddon',
    fullyQualifiedName: 'v1.events.addons.archiveAddon',
    httpMethod: 'post',
    httpPath: '/api/v1/addons/{id}/archive',
  },
  {
    clientCallName: 'client.v1.events.addons.createAddon',
    fullyQualifiedName: 'v1.events.addons.createAddon',
    httpMethod: 'post',
    httpPath: '/api/v1/addons',
  },
  {
    clientCallName: 'client.v1.events.addons.listAddons',
    fullyQualifiedName: 'v1.events.addons.listAddons',
    httpMethod: 'get',
    httpPath: '/api/v1/addons',
  },
  {
    clientCallName: 'client.v1.events.addons.publishAddon',
    fullyQualifiedName: 'v1.events.addons.publishAddon',
    httpMethod: 'post',
    httpPath: '/api/v1/addons/{id}/publish',
  },
  {
    clientCallName: 'client.v1.events.addons.retrieveAddon',
    fullyQualifiedName: 'v1.events.addons.retrieveAddon',
    httpMethod: 'get',
    httpPath: '/api/v1/addons/{id}',
  },
  {
    clientCallName: 'client.v1.events.addons.updateAddon',
    fullyQualifiedName: 'v1.events.addons.updateAddon',
    httpMethod: 'patch',
    httpPath: '/api/v1/addons/{id}',
  },
  {
    clientCallName: 'client.v1.events.addons.draft.createAddonDraft',
    fullyQualifiedName: 'v1.events.addons.draft.createAddonDraft',
    httpMethod: 'post',
    httpPath: '/api/v1/addons/{id}/draft',
  },
  {
    clientCallName: 'client.v1.events.addons.draft.removeAddonDraft',
    fullyQualifiedName: 'v1.events.addons.draft.removeAddonDraft',
    httpMethod: 'delete',
    httpPath: '/api/v1/addons/{id}/draft',
  },
  {
    clientCallName: 'client.v1.usage.history',
    fullyQualifiedName: 'v1.usage.history',
    httpMethod: 'get',
    httpPath: '/api/v1/usage/{customerId}/history/{featureId}',
  },
  {
    clientCallName: 'client.v1.usage.report',
    fullyQualifiedName: 'v1.usage.report',
    httpMethod: 'post',
    httpPath: '/api/v1/usage',
  },
  {
    clientCallName: 'client.v1.products.archiveProduct',
    fullyQualifiedName: 'v1.products.archiveProduct',
    httpMethod: 'post',
    httpPath: '/api/v1/products/{id}/archive',
  },
  {
    clientCallName: 'client.v1.products.createProduct',
    fullyQualifiedName: 'v1.products.createProduct',
    httpMethod: 'post',
    httpPath: '/api/v1/products',
  },
  {
    clientCallName: 'client.v1.products.duplicateProduct',
    fullyQualifiedName: 'v1.products.duplicateProduct',
    httpMethod: 'post',
    httpPath: '/api/v1/products/{id}/duplicate',
  },
  {
    clientCallName: 'client.v1.products.listProducts',
    fullyQualifiedName: 'v1.products.listProducts',
    httpMethod: 'get',
    httpPath: '/api/v1/products',
  },
  {
    clientCallName: 'client.v1.products.unarchiveProduct',
    fullyQualifiedName: 'v1.products.unarchiveProduct',
    httpMethod: 'post',
    httpPath: '/api/v1/products/{id}/unarchive',
  },
  {
    clientCallName: 'client.v1.products.updateProduct',
    fullyQualifiedName: 'v1.products.updateProduct',
    httpMethod: 'patch',
    httpPath: '/api/v1/products/{id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
