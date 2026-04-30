# Changelog

## 0.1.0-alpha.33 (2026-04-30)

Full Changelog: [v0.1.0-alpha.32...v0.1.0-alpha.33](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.32...v0.1.0-alpha.33)

### Features

* **api:** remove internal.beta.eventQueues methods ([baa6b0d](https://github.com/stiggio/stigg-typescript/commit/baa6b0d5ed6a8cfcfdbb9b4085942b4802dd9cf3))


### Chores

* avoid formatting file that gets changed during releases ([824a020](https://github.com/stiggio/stigg-typescript/commit/824a0209d1be6210b35f625133e5a174d9a3d7d4))
* **format:** run eslint and prettier separately ([0870f95](https://github.com/stiggio/stigg-typescript/commit/0870f9512298c548b63643513a771492830e8186))

## 0.1.0-alpha.32 (2026-04-28)

Full Changelog: [v0.1.0-alpha.31...v0.1.0-alpha.32](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.31...v0.1.0-alpha.32)

### Features

* support setting headers via env ([0e09c73](https://github.com/stiggio/stigg-typescript/commit/0e09c732f8d935bc537da046f4a38b297f465de1))


### Chores

* **internal:** codegen related update ([9c11f53](https://github.com/stiggio/stigg-typescript/commit/9c11f537d670ed74d692db5bf1a05f9a60260278))
* **internal:** more robust bootstrap script ([1dbd1cd](https://github.com/stiggio/stigg-typescript/commit/1dbd1cda9bc73b6e59537ce179df1ad410dc9949))
* **internal:** update docs ordering ([767ac01](https://github.com/stiggio/stigg-typescript/commit/767ac014bbc17faa4f0686c7a0868166373d2889))
* restructure docs search code ([c1cd5c1](https://github.com/stiggio/stigg-typescript/commit/c1cd5c11a397e4ae2cffbe716b3bb8f6ccb31daa))

## 0.1.0-alpha.31 (2026-04-20)

Full Changelog: [v0.1.0-alpha.30...v0.1.0-alpha.31](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.30...v0.1.0-alpha.31)

### Features

* **api:** add endDate and startDate parameters to credits getUsage method ([7a85813](https://github.com/stiggio/stigg-typescript/commit/7a8581310bc4e4fbda6f0ca5b2c7a8ca5e8e7f52))

## 0.1.0-alpha.30 (2026-04-16)

Full Changelog: [v0.1.0-alpha.29...v0.1.0-alpha.30](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.29...v0.1.0-alpha.30)

### Features

* **api:** add event queue types, remove includeInactiveSubscriptions from usage.history ([3a80a0c](https://github.com/stiggio/stigg-typescript/commit/3a80a0ca63c8eb610673c4365f5f492ec114054c))

## 0.1.0-alpha.29 (2026-04-15)

Full Changelog: [v0.1.0-alpha.28...v0.1.0-alpha.29](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.28...v0.1.0-alpha.29)

### Features

* **api:** add custom currency event types to event queue update/provision params ([6b30516](https://github.com/stiggio/stigg-typescript/commit/6b3051670cbf2ba430327cf4965d7d4e7cc2c4f2))

## 0.1.0-alpha.28 (2026-04-14)

Full Changelog: [v0.1.0-alpha.27...v0.1.0-alpha.28](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.27...v0.1.0-alpha.28)

### Features

* **api:** add currency resync event, remove includeInactiveSubscriptions from usage.history ([02db528](https://github.com/stiggio/stigg-typescript/commit/02db528a97ef7b495c6a5c3694ccbe427020d0ec))


### Chores

* **internal:** codegen related update ([998ff44](https://github.com/stiggio/stigg-typescript/commit/998ff44d36778f1ecd5b30b56db9039a1eef148d))
* **internal:** codegen related update ([3456105](https://github.com/stiggio/stigg-typescript/commit/3456105650a33f46b536cb358d23adf19103704a))
* **internal:** show error causes in MCP servers when running in local mode ([d960898](https://github.com/stiggio/stigg-typescript/commit/d9608983e204cd42beff5d1ae41bd14533d65cd6))
* **mcp-server:** increase local docs search result count from 5 to 10 ([3d37358](https://github.com/stiggio/stigg-typescript/commit/3d373580bb09a4a2261ccfc3e5114bf46fdd2882))
* update CLI documentation ([2352db2](https://github.com/stiggio/stigg-typescript/commit/2352db25786a0ff598d9b6012b72948d3bce0530))


### Documentation

* improve examples ([45376ec](https://github.com/stiggio/stigg-typescript/commit/45376ec5f40e354c0345efba8191d5774e0ca3e8))

## 0.1.0-alpha.27 (2026-04-08)

Full Changelog: [v0.1.0-alpha.26...v0.1.0-alpha.27](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.26...v0.1.0-alpha.27)

### Features

* **api:** add includeInactiveSubscriptions parameter to usage history method ([98fa3fe](https://github.com/stiggio/stigg-typescript/commit/98fa3fe2999228e76d66f6a7f4b9142dfbbef0eb))
* **api:** stainless.yml ([e64cead](https://github.com/stiggio/stigg-typescript/commit/e64ceadf05c559bec3cdd48f770e75c9acd8893f))


### Bug Fixes

* **STIGG-7500:** stripe account not deauthorized when connected to multiple environments ([c57334e](https://github.com/stiggio/stigg-typescript/commit/c57334ef4fc0a245ac79c352fb00feade3f31f5b))


### Chores

* **internal:** fix MCP server import ordering ([813ad3d](https://github.com/stiggio/stigg-typescript/commit/813ad3dae35de51aaf1731c59aa9448eef60fa2c))

## 0.1.0-alpha.26 (2026-04-06)

Full Changelog: [v0.1.0-alpha.25...v0.1.0-alpha.26](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.25...v0.1.0-alpha.26)

### Features

* **api:** add customer integrations and event queues endpoints ([7144126](https://github.com/stiggio/stigg-typescript/commit/714412616815880c7da3dbe65dfa9fa0db136a44))


### Chores

* **ci:** escape input path in publish-npm workflow ([7e93438](https://github.com/stiggio/stigg-typescript/commit/7e93438a7cbb3b10c9d3caaaea4acbd378da1117))
* **ci:** skip lint on metadata-only changes ([9cc3309](https://github.com/stiggio/stigg-typescript/commit/9cc3309b7b7c7dcdce41e834d8945159f902afbc))
* **internal:** codegen related update ([8a4a582](https://github.com/stiggio/stigg-typescript/commit/8a4a582a09f8c07a253fe87524726b4f131652d3))
* **internal:** codegen related update ([5d3341c](https://github.com/stiggio/stigg-typescript/commit/5d3341cb9ed07689b5b961c92f85185dd7d875e4))
* **internal:** fix MCP docker image builds in yarn projects ([37d9a6c](https://github.com/stiggio/stigg-typescript/commit/37d9a6c3eeb7b80dddb874027b9dd945fcfe6c42))
* **internal:** fix MCP server TS errors that occur with required client options ([640352c](https://github.com/stiggio/stigg-typescript/commit/640352c746337c07a5fee1029d369b226654cd0f))
* **internal:** improve local docs search for MCP servers ([15ab3e5](https://github.com/stiggio/stigg-typescript/commit/15ab3e5815e9a9f0f1b499af364c30456331741d))
* **internal:** improve local docs search for MCP servers ([d279d7b](https://github.com/stiggio/stigg-typescript/commit/d279d7be33974ff2c5f164f57d54ba1e796e8b43))
* **internal:** support custom-instructions-path flag in MCP servers ([e54fc8c](https://github.com/stiggio/stigg-typescript/commit/e54fc8c25bf842fa884a8bb1262701a908c3398b))
* **internal:** support local docs search in MCP servers ([6295c74](https://github.com/stiggio/stigg-typescript/commit/6295c7401aa82325d3a18dfbcccb3cc8ae669982))
* **internal:** support type annotations when running MCP in local execution mode ([47889cb](https://github.com/stiggio/stigg-typescript/commit/47889cb9fc788b51bdc8cdaca46d4a955e66dca7))
* **internal:** update gitignore ([25b7bb6](https://github.com/stiggio/stigg-typescript/commit/25b7bb6bcd870167b9c5741070f88eab329d8dbf))
* **internal:** use link instead of file in MCP server package.json files ([6e7a769](https://github.com/stiggio/stigg-typescript/commit/6e7a76965b3863d3fd5d46c43e41afa809568c84))
* **mcp-server:** add support for session id, forward client info ([8f2e457](https://github.com/stiggio/stigg-typescript/commit/8f2e4576b42c339af00150a29599bcc281efd591))
* **mcp-server:** log client info ([e2e8fbc](https://github.com/stiggio/stigg-typescript/commit/e2e8fbcc323832771404e52d0b6c885b2ac332ef))

## 0.1.0-alpha.25 (2026-03-18)

Full Changelog: [v0.1.0-alpha.24...v0.1.0-alpha.25](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.24...v0.1.0-alpha.25)

### Features

* **api:** api update ([5e7d6cd](https://github.com/stiggio/stigg-typescript/commit/5e7d6cd2efc267b107fc3f97ce1432b14a1d3612))

## 0.1.0-alpha.24 (2026-03-18)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Features

* **api:** api update ([f0adde8](https://github.com/stiggio/stigg-typescript/commit/f0adde871b30c009cf73eecd0955a46c5f6f2bad))

## 0.1.0-alpha.23 (2026-03-18)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Features

* **api:** api update ([e778eab](https://github.com/stiggio/stigg-typescript/commit/e778eabb4a458e11d1c2ac83d20f9bed6d45d10e))
* **api:** api update ([24bfdcb](https://github.com/stiggio/stigg-typescript/commit/24bfdcb0a5e9c1b700affe134b4628bae833a8e8))
* **api:** api update ([a54a374](https://github.com/stiggio/stigg-typescript/commit/a54a374474dd8aef9c0c8c67cf4b09288d63a44a))
* **api:** api update ([a1ff1f8](https://github.com/stiggio/stigg-typescript/commit/a1ff1f88f10da41e8a29179a48aefa8ae4ed1596))
* **api:** api update ([dd99ba3](https://github.com/stiggio/stigg-typescript/commit/dd99ba37c2f54de06aa0d69ebd3b4a253c61269e))
* **api:** api update ([0f8db16](https://github.com/stiggio/stigg-typescript/commit/0f8db163f40373895072f6006d7fd79a63a0ed74))
* **api:** api update ([565005d](https://github.com/stiggio/stigg-typescript/commit/565005d415105290612f5ab4f1d8a575b5d6e960))
* **api:** updated stainless config with new endpoint ([740d9d9](https://github.com/stiggio/stigg-typescript/commit/740d9d9461e667c1278fb36110f47aae48c45bf6))


### Chores

* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([ba112e0](https://github.com/stiggio/stigg-typescript/commit/ba112e04fdcd78696451ffbf0058015c1baa952c))
* **internal:** tweak CI branches ([554dc5a](https://github.com/stiggio/stigg-typescript/commit/554dc5adcffc85d5e5be8adb65bde4150873a799))

## 0.1.0-alpha.22 (2026-03-16)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### Features

* **api:** api update ([7dd8af8](https://github.com/stiggio/stigg-typescript/commit/7dd8af817239bc18fb627bead4b9b017bd609fe3))
* **api:** api update ([fcda896](https://github.com/stiggio/stigg-typescript/commit/fcda8963c63a6d8b3bfc577ae62ef14882e02cb2))
* **api:** api update ([b68062e](https://github.com/stiggio/stigg-typescript/commit/b68062e8a4ebaab40052b9229dc3de56bef8ec19))


### Chores

* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([d7ffcbf](https://github.com/stiggio/stigg-typescript/commit/d7ffcbfe34c5d2409caf709851e6d53f84ba3403))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([d8f554f](https://github.com/stiggio/stigg-typescript/commit/d8f554f6083a6d494bd1ad81c2cba96bd1a12b49))

## 0.1.0-alpha.21 (2026-03-12)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Features

* **api:** api update ([3ae27b8](https://github.com/stiggio/stigg-typescript/commit/3ae27b8ac9550be5498b9bd687564a9c7e124b37))


### Chores

* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([75580ea](https://github.com/stiggio/stigg-typescript/commit/75580ea84f0b39a6c3e87870ef61d895d131023c))

## 0.1.0-alpha.20 (2026-03-10)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Chores

* **internal:** update dependencies to address dependabot vulnerabilities ([93f2013](https://github.com/stiggio/stigg-typescript/commit/93f20138cceb8b8dd266b76c0d0b834be8e924e1))

## 0.1.0-alpha.19 (2026-03-09)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Features

* **api:** added credits resources ([9b440aa](https://github.com/stiggio/stigg-typescript/commit/9b440aa26682530f642eeb479b6c17287c5bcda6))
* **api:** api update ([020ee9f](https://github.com/stiggio/stigg-typescript/commit/020ee9fce20574e4336dc5e2418074388fe677cf))
* **api:** api update ([bc2afcc](https://github.com/stiggio/stigg-typescript/commit/bc2afccb14dc7c690d3f1e54e81a33998b6dddfd))
* **api:** api update ([79b5b2d](https://github.com/stiggio/stigg-typescript/commit/79b5b2d3c6c2878eaaaeb81d7bfff9ae6ac105ca))
* **api:** api update ([20d6f41](https://github.com/stiggio/stigg-typescript/commit/20d6f41fac5ada56fa55ce8291c5f42551126bd9))

## 0.1.0-alpha.18 (2026-03-08)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Features

* **api:** api update ([3f5925d](https://github.com/stiggio/stigg-typescript/commit/3f5925d74abf2d6896c156bfecafb3a096658821))


### Bug Fixes

* **client:** improve parameter names ([31bd6fb](https://github.com/stiggio/stigg-typescript/commit/31bd6fb8353e52a1e8b5ebdad724c4d54cd48b6b))
* **client:** preserve URL params already embedded in path ([d461718](https://github.com/stiggio/stigg-typescript/commit/d461718125f93fc32ee7e67f68ff4967bf18fc83))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([3a6276c](https://github.com/stiggio/stigg-typescript/commit/3a6276cfc3aa550d33fc82e49b8f5a37f37a8c40))
* **internal:** codegen related update ([5834b85](https://github.com/stiggio/stigg-typescript/commit/5834b85e24ded0fc29b49f27a3a765346a896f53))
* **mcp-server:** improve instructions ([1c4d9ad](https://github.com/stiggio/stigg-typescript/commit/1c4d9ad1b255af8793effbc5908e5a64010ebda4))

## 0.1.0-alpha.17 (2026-03-05)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Features

* **api:** api update ([b0490cc](https://github.com/stiggio/stigg-typescript/commit/b0490ccd79bdc32712c560297b0bfea6fb22ffe2))

## 0.1.0-alpha.16 (2026-03-05)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Features

* **api:** api update ([c2e4823](https://github.com/stiggio/stigg-typescript/commit/c2e4823a5b43606f12c04fb7f5f1500bfadd3db2))


### Chores

* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([4f6b4a3](https://github.com/stiggio/stigg-typescript/commit/4f6b4a37d60bf9f28358f5cb343714d32da393cb))

## 0.1.0-alpha.15 (2026-03-04)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** api update ([5e75193](https://github.com/stiggio/stigg-typescript/commit/5e751935f08e6338a339aec76463b132f12d64d0))


### Chores

* **internal:** codegen related update ([b31c7ae](https://github.com/stiggio/stigg-typescript/commit/b31c7ae69c8aae6b82aa88c341b8b380befcaf87))
* **mcp-server:** return access instructions for 404 without API key ([1a702bc](https://github.com/stiggio/stigg-typescript/commit/1a702bc643f28d1f0e235c9061feaffca0f0d1d4))

## 0.1.0-alpha.14 (2026-03-02)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* **api:** api update ([52d42b8](https://github.com/stiggio/stigg-typescript/commit/52d42b8bd1684904a9b9833edb9ed5129cf1a89e))

## 0.1.0-alpha.13 (2026-03-02)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **api:** api update ([0b8c3c5](https://github.com/stiggio/stigg-typescript/commit/0b8c3c54b06fe6a3de59eca7d0c740a6e6b19d4e))

## 0.1.0-alpha.12 (2026-02-27)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **mcp:** add an option to disable code tool ([48ef94d](https://github.com/stiggio/stigg-typescript/commit/48ef94db9af330f0c6aef3b0df98a4ee8cdb8a00))


### Bug Fixes

* **mcp:** update prompt ([074e755](https://github.com/stiggio/stigg-typescript/commit/074e755f197434542e58cf6e66a0e5daf5b8c6a2))


### Chores

* **internal:** move stringifyQuery implementation to internal function ([da0839b](https://github.com/stiggio/stigg-typescript/commit/da0839b349ab846cb445e2474a397baf1f45f6fa))

## 0.1.0-alpha.11 (2026-02-26)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** api update ([eb2a4cc](https://github.com/stiggio/stigg-typescript/commit/eb2a4cc0f2f0c9d7bb0eac31f45647bb022814ef))
* **api:** stainless config updates ([255807f](https://github.com/stiggio/stigg-typescript/commit/255807f1f82acd0172fcb09343edd8ef6c2c237f))
* **api:** update endpoints and models ([7f9b02d](https://github.com/stiggio/stigg-typescript/commit/7f9b02d4d889d42f12967dbe8fcffd1c498dab82))

## 0.1.0-alpha.10 (2026-02-26)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([0ab6f6f](https://github.com/stiggio/stigg-typescript/commit/0ab6f6fb541d52cf589c33378dbbec65ee20bfdf))


### Bug Fixes

* **docs/contributing:** correct pnpm link command ([9fa3bb5](https://github.com/stiggio/stigg-typescript/commit/9fa3bb58a1803c49be282e085f588197e95256f5))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([f8a472c](https://github.com/stiggio/stigg-typescript/commit/f8a472c5ca146393bcdd85867149740b8e1e8155))


### Chores

* **internal:** cache fetch instruction calls in MCP server ([dfab22a](https://github.com/stiggio/stigg-typescript/commit/dfab22a2308eec2a10bdb5b9733132dd31136505))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([22f41ef](https://github.com/stiggio/stigg-typescript/commit/22f41efdf7a55e61d24554976b817d4409da8eb2))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([e9d86c4](https://github.com/stiggio/stigg-typescript/commit/e9d86c47627080d38c1ee5c6491cfb655103daf2))
* **internal:** make MCP code execution location configurable via a flag ([6f3c168](https://github.com/stiggio/stigg-typescript/commit/6f3c1687a702a149895a12603a9d334017dd8dde))
* **internal:** remove mock server code ([b70b5a5](https://github.com/stiggio/stigg-typescript/commit/b70b5a5640848e2981fdd26f11aa0bfd3c0daf57))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([f1ba036](https://github.com/stiggio/stigg-typescript/commit/f1ba0369b02d44365986b56b028d5b1c6af128a4))
* **mcp:** correctly update version in sync with sdk ([3d658ff](https://github.com/stiggio/stigg-typescript/commit/3d658ff565dfbcaeb1f1883eadae3d4a84a4fd00))
* update mock server docs ([47ff87f](https://github.com/stiggio/stigg-typescript/commit/47ff87f0b115bdc2106afc31a6319d2bcb6ae8a8))

## 0.1.0-alpha.9 (2026-02-18)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** api update ([2be2e6f](https://github.com/stiggio/stigg-typescript/commit/2be2e6f0c0c1efac02fc39d3227a603ba70fd453))

## 0.1.0-alpha.8 (2026-02-18)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** add events features/addons/plans, subscriptions usage/invoice, coupons/products endpoints ([aa80361](https://github.com/stiggio/stigg-typescript/commit/aa8036192fd6f8a060ee861d2dd0da1de86e3cb6))
* **api:** Add missing endpoints ([ded1c1d](https://github.com/stiggio/stigg-typescript/commit/ded1c1d297174ddc906862c0587ae020442cc7d6))
* **api:** api update ([356282f](https://github.com/stiggio/stigg-typescript/commit/356282f1f257e6176c26c8163b8f801d74b09282))
* **api:** api update ([473a89c](https://github.com/stiggio/stigg-typescript/commit/473a89c5a14c9c1391039a4d03b5109b9538595d))
* **api:** api update ([d2cfe9f](https://github.com/stiggio/stigg-typescript/commit/d2cfe9f5b1e4424ccca75eea6c815ff56e677d16))
* **api:** manual updates ([622e55e](https://github.com/stiggio/stigg-typescript/commit/622e55e14a46fb239763101b95f2cbad5e3c10de))
* **api:** manual updates ([622e55e](https://github.com/stiggio/stigg-typescript/commit/622e55e14a46fb239763101b95f2cbad5e3c10de))
* **api:** manual updates ([b7e5a4b](https://github.com/stiggio/stigg-typescript/commit/b7e5a4bb6dcabe6fa369741eb779050901e827f1))
* **api:** manual updates ([083f5fa](https://github.com/stiggio/stigg-typescript/commit/083f5fac9a83126b4fbbfd55228b39164eadb325))
* **api:** manual updates ([a15494f](https://github.com/stiggio/stigg-typescript/commit/a15494fb80a3d76eae49a2b8beac10b8a569f68d))
* **api:** trigger release ([4f4bd4f](https://github.com/stiggio/stigg-typescript/commit/4f4bd4fe4fba2e9fdbee9a7391a009a3674bcd2b))
* **api:** trigger release ([4f4bd4f](https://github.com/stiggio/stigg-typescript/commit/4f4bd4fe4fba2e9fdbee9a7391a009a3674bcd2b))


### Bug Fixes

* **api:** rename pathID param, remove body_id field in products.duplicateProduct ([b2b795e](https://github.com/stiggio/stigg-typescript/commit/b2b795e5f0ec8f72f3392d82b428a627c84294da))


### Chores

* **internal/client:** fix form-urlencoded requests ([456672a](https://github.com/stiggio/stigg-typescript/commit/456672ad70b99e5ce322a15a48d958da37ffb7a0))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([c73920b](https://github.com/stiggio/stigg-typescript/commit/c73920be5a90ca466d47848418e9d7cb0b81ebd3))
* remove custom code ([0a618df](https://github.com/stiggio/stigg-typescript/commit/0a618df73be4e5b195393c813740838d179b7d5c))
* update SDK settings ([23fb700](https://github.com/stiggio/stigg-typescript/commit/23fb700dadc23339d0d3f075c7a869687b206ce5))
* update SDK settings ([0c8a587](https://github.com/stiggio/stigg-typescript/commit/0c8a58729cc38e085cf988b43a6d88e4ff3a0122))

## 0.1.0-alpha.7 (2026-02-17)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** api update ([e494923](https://github.com/stiggio/stigg-typescript/commit/e4949234a065f5cba5c0590d291cbf432b0d3f06))
* **api:** updated the production environment ([9332bd4](https://github.com/stiggio/stigg-typescript/commit/9332bd46ede72c46cd352b78db2d5f8c512f3160))

## 0.1.0-alpha.6 (2026-02-15)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([d41ae3a](https://github.com/stiggio/stigg-typescript/commit/d41ae3aefe5bd1643da96a211c3b0830d118fb7f))
* **api:** api update ([6a44c80](https://github.com/stiggio/stigg-typescript/commit/6a44c80d1666a54aeb13cd63b3aa81fc2c701771))
* **api:** api update ([3dc1a6f](https://github.com/stiggio/stigg-typescript/commit/3dc1a6f233db6cec6421f234dcc42fa053d522c0))
* **api:** api update ([5f3a051](https://github.com/stiggio/stigg-typescript/commit/5f3a05145bc6a95c2dade1dfb1ab08d42b3d041f))
* **api:** api update ([278b7e2](https://github.com/stiggio/stigg-typescript/commit/278b7e2a11a56ebb28fd49fc5c4d374dee762a37))


### Chores

* configure new SDK language ([f13f50a](https://github.com/stiggio/stigg-typescript/commit/f13f50aeb8a1ee97a508716129057bf287f4d7bb))
* **internal:** avoid type checking errors with ts-reset ([6d2c1c2](https://github.com/stiggio/stigg-typescript/commit/6d2c1c257bb18e29a3b431ba7993b038f2c913d1))
* **internal:** configure MCP Server hosting ([4ac2625](https://github.com/stiggio/stigg-typescript/commit/4ac2625f32c269765ab8df22099343bfb2bc4d07))

## 0.1.0-alpha.5 (2026-02-08)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** api update ([37a1b67](https://github.com/stiggio/stigg-typescript/commit/37a1b67750e685df4faf6c27328d7298089b1257))
* **api:** api update ([8951b7b](https://github.com/stiggio/stigg-typescript/commit/8951b7bf135a8254e5a53576ec9ef69aff4b22d5))
* **api:** api update ([70381e3](https://github.com/stiggio/stigg-typescript/commit/70381e36226669df1e78f537ecec6a82387149af))
* **api:** manual updates ([6d41016](https://github.com/stiggio/stigg-typescript/commit/6d41016adcdc3d543cda35174bdd07b647b7a940))
* **api:** manual updates ([18e731c](https://github.com/stiggio/stigg-typescript/commit/18e731c2408ee437c3cbc138208b829cef697646))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([2a35609](https://github.com/stiggio/stigg-typescript/commit/2a35609541af137208a0f80c17239a0512839332))
* **client:** avoid removing abort listener too early ([e392dde](https://github.com/stiggio/stigg-typescript/commit/e392dde7d989ebc61c04ac6605c8fefe8f9a605f))


### Chores

* **client:** do not parse responses with empty content-length ([43d4528](https://github.com/stiggio/stigg-typescript/commit/43d4528c0507b29dfafd0e2763ef0326cc77c868))
* **client:** restructure abort controller binding ([6e5585d](https://github.com/stiggio/stigg-typescript/commit/6e5585d479f7a88fd45d7747c17f3a0d77c0b6ee))
* **internal:** fix pagination internals not accepting option promises ([ca6a9b9](https://github.com/stiggio/stigg-typescript/commit/ca6a9b9770072de182b7110e69f5fcae05669d88))

## 0.1.0-alpha.4 (2026-01-29)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update stainless config ([c1c9e66](https://github.com/stiggio/stigg-typescript/commit/c1c9e66bf79510ca37cb3178105e0c1213d2b606))

## 0.1.0-alpha.3 (2026-01-28)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** api update ([2dc20eb](https://github.com/stiggio/stigg-typescript/commit/2dc20eb12dbb88fdf6ad5d9d416f9b2464e71a91))
* **api:** api update ([ac6c77e](https://github.com/stiggio/stigg-typescript/commit/ac6c77ee65cc9c1e0f63bc2387f890516a670c9d))

## 0.1.0-alpha.2 (2026-01-27)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/stiggio/stigg-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** api update ([8134475](https://github.com/stiggio/stigg-typescript/commit/8134475fc047cd4d50bbabcf6b3fe40a0aecd72b))
* **api:** api update ([86e029a](https://github.com/stiggio/stigg-typescript/commit/86e029acf9806f52eb7d2af773b28f2df24baf78))
* **api:** api update ([e2e4460](https://github.com/stiggio/stigg-typescript/commit/e2e4460155cb48ced4332a6997c794ce1119872d))
* **api:** improved cursor pagination ([3b1b0be](https://github.com/stiggio/stigg-typescript/commit/3b1b0bed293003cfd5fbb3a532425e03080d50c4))

## 0.1.0-alpha.1 (2026-01-27)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/stiggio/stigg-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** added customer endpoints ([e11ed9d](https://github.com/stiggio/stigg-typescript/commit/e11ed9d04ccfd6246ef1ffdb605c75ccbb9de5ca))
* **api:** api update ([1c89904](https://github.com/stiggio/stigg-typescript/commit/1c899046f724747321d65dc11152831e242e8c20))
* **api:** api update ([adf96c2](https://github.com/stiggio/stigg-typescript/commit/adf96c203752881f2d37ac0326236cc68355a219))
* **api:** api update ([70f3ee5](https://github.com/stiggio/stigg-typescript/commit/70f3ee58b920daba558be4491e21c54977077697))
* **api:** comment out promotional endpoints ([7f5abd3](https://github.com/stiggio/stigg-typescript/commit/7f5abd3db414816df7e06f4b3a723dce26f4bbc6))
* **api:** manual updates ([7a8276f](https://github.com/stiggio/stigg-typescript/commit/7a8276f4f44703b430c4427c2dae06d6ed6f4677))
* **api:** manual updates ([601eec2](https://github.com/stiggio/stigg-typescript/commit/601eec2e9038a9653de11424d753440591083f5f))
* **api:** manual updates ([fffdc00](https://github.com/stiggio/stigg-typescript/commit/fffdc0001cd7243ded488fa1dc325cd6bfdc79ab))
* **api:** manual updates ([7b3aa30](https://github.com/stiggio/stigg-typescript/commit/7b3aa30ac1d363f4d9818e7975d871b335015ae5))
* **api:** update via SDK Studio ([ff4ef4a](https://github.com/stiggio/stigg-typescript/commit/ff4ef4ac2798f7646284fb93549a98cf16a10a62))
* **api:** update via SDK Studio ([43b7c9f](https://github.com/stiggio/stigg-typescript/commit/43b7c9fdb9549aa3104d53a05b90be2afab063e2))
* **api:** update via SDK Studio ([42fbd54](https://github.com/stiggio/stigg-typescript/commit/42fbd54a1e8fb069bc1f6942dc018e79c5df9ff0))


### Chores

* break long lines in snippets into multiline ([0552f24](https://github.com/stiggio/stigg-typescript/commit/0552f2431ef15c22b0bcf4cf6fa21af76283521b))
* **ci:** upgrade `actions/github-script` ([c558e55](https://github.com/stiggio/stigg-typescript/commit/c558e55439bbb36f7531fa81bae23ed93ace8f36))
* fix typo in descriptions ([b709828](https://github.com/stiggio/stigg-typescript/commit/b709828e5f11634d27811856e0dda75c6235d68e))
* **internal:** codegen related update ([93d7e6a](https://github.com/stiggio/stigg-typescript/commit/93d7e6a3eb143386eb1c0500144fe6059ecf3199))
* **internal:** codegen related update ([cc6cefe](https://github.com/stiggio/stigg-typescript/commit/cc6cefe6226a0a54436696228a685d87edd27885))
* **internal:** move publish config ([537082b](https://github.com/stiggio/stigg-typescript/commit/537082bd495891745f519bb12520b0daa569edac))
* **internal:** remove redundant imports config ([2dd379c](https://github.com/stiggio/stigg-typescript/commit/2dd379c86ef2e0763c4dc095adb704a7bf3f5106))
* **internal:** update `actions/checkout` version ([4e91231](https://github.com/stiggio/stigg-typescript/commit/4e91231c0456bbb9d0a87d3a3b7046f13a6efaeb))
* **internal:** update comment in script ([fbe8893](https://github.com/stiggio/stigg-typescript/commit/fbe8893fe685410ff7aba2ba2db993f96c8ab0b8))
* **internal:** upgrade babel, qs, js-yaml ([947b019](https://github.com/stiggio/stigg-typescript/commit/947b019f8c8523cc78d96500dc886b6413bdb80c))
* make some internal functions async ([ba9ae3c](https://github.com/stiggio/stigg-typescript/commit/ba9ae3c2ec821dde7280f40d55c974841730c920))
* **ts:** reorder package.json imports ([62797e0](https://github.com/stiggio/stigg-typescript/commit/62797e0345b30f7c98ef90ffd7fb4d32f1d63b90))
* update @stainless-api/prism-cli to v5.15.0 ([4975e54](https://github.com/stiggio/stigg-typescript/commit/4975e54d5f0e61d0b3074eb10f5e4867c63c67cf))
* update SDK settings ([080f8ca](https://github.com/stiggio/stigg-typescript/commit/080f8ca5baea5b8e8db243d306511b3ff41436e3))
* update SDK settings ([f7527ff](https://github.com/stiggio/stigg-typescript/commit/f7527ffdc2ad620da13a3444100bfe612aee179d))
* update SDK settings ([153c71f](https://github.com/stiggio/stigg-typescript/commit/153c71f814b81dd77a2c5009932ba6ab3a908785))
