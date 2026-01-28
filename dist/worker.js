var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var init_httpExtensionConfiguration = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    "use strict";
  }
});

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    "use strict";
    init_httpExtensionConfiguration();
  }
});

// node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "node_modules/@smithy/types/dist-es/abort.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm({
  "node_modules/@smithy/types/dist-es/auth/auth.js"() {
    "use strict";
    (function(HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation || (HttpAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    "use strict";
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "node_modules/@smithy/types/dist-es/auth/index.js"() {
    "use strict";
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  }
});

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "node_modules/@smithy/types/dist-es/checksum.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "node_modules/@smithy/types/dist-es/client.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "node_modules/@smithy/types/dist-es/command.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "node_modules/@smithy/types/dist-es/connection/config.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "node_modules/@smithy/types/dist-es/connection/manager.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "node_modules/@smithy/types/dist-es/connection/pool.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "node_modules/@smithy/types/dist-es/connection/index.js"() {
    "use strict";
    init_config();
    init_manager();
    init_pool();
  }
});

// node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "node_modules/@smithy/types/dist-es/crypto.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "node_modules/@smithy/types/dist-es/encode.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "node_modules/@smithy/types/dist-es/endpoint.js"() {
    "use strict";
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    "use strict";
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  }
});

// node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "node_modules/@smithy/types/dist-es/eventStream.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    "use strict";
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    "use strict";
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/index.js"() {
    "use strict";
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/feature-ids.js
var init_feature_ids = __esm({
  "node_modules/@smithy/types/dist-es/feature-ids.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm({
  "node_modules/@smithy/types/dist-es/http.js"() {
    "use strict";
    (function(FieldPosition2) {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition || (FieldPosition = {}));
  }
});

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "node_modules/@smithy/types/dist-es/identity/identity.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "node_modules/@smithy/types/dist-es/identity/index.js"() {
    "use strict";
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  }
});

// node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "node_modules/@smithy/types/dist-es/logger.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@smithy/types/dist-es/middleware.js"() {
    "use strict";
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "node_modules/@smithy/types/dist-es/pagination.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm({
  "node_modules/@smithy/types/dist-es/profile.js"() {
    "use strict";
    (function(IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType || (IniSectionType = {}));
  }
});

// node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "node_modules/@smithy/types/dist-es/response.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "node_modules/@smithy/types/dist-es/retry.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "node_modules/@smithy/types/dist-es/serde.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "node_modules/@smithy/types/dist-es/shapes.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "node_modules/@smithy/types/dist-es/signature.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "node_modules/@smithy/types/dist-es/stream.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm({
  "node_modules/@smithy/types/dist-es/transfer.js"() {
    "use strict";
    (function(RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
  }
});

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "node_modules/@smithy/types/dist-es/uri.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "node_modules/@smithy/types/dist-es/util.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "node_modules/@smithy/types/dist-es/waiter.js"() {
    "use strict";
  }
});

// node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/types/dist-es/index.js"() {
    "use strict";
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_feature_ids();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    "use strict";
    init_dist_es();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
    "use strict";
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
    "use strict";
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    "use strict";
    HttpRequest = class _HttpRequest {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request) {
        const cloned = new _HttpRequest({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    "use strict";
    HttpResponse = class {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
    "use strict";
  }
});

// node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "node_modules/@smithy/protocol-http/dist-es/types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es2 = __esm({
  "node_modules/@smithy/protocol-http/dist-es/index.js"() {
    "use strict";
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    "use strict";
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
var init_setCredentialFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
    "use strict";
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
var init_setFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
    "use strict";
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    "use strict";
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature();
  }
});

// node_modules/@smithy/core/dist-es/getSmithyContext.js
var init_getSmithyContext = __esm({
  "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    "use strict";
    init_dist_es();
  }
});

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext2 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    "use strict";
    init_dist_es();
    getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
  }
});

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var init_normalizeProvider = __esm({
  "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es3 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/index.js"() {
    "use strict";
    init_getSmithyContext2();
    init_normalizeProvider();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    "use strict";
    init_dist_es();
    init_dist_es3();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    "use strict";
    init_httpAuthSchemeMiddleware();
  }
});

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware;
var init_deserializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
    "use strict";
    deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error.message += "\n  " + hint;
          } catch (e) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
        }
        throw error;
      }
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware;
var init_serializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
    "use strict";
    serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
function getSerdePlugin(config2, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config2, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config2, serializer), serializerMiddlewareOption);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_serdePlugin = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
    "use strict";
    init_deserializerMiddleware();
    init_serializerMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/index.js
var init_dist_es4 = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
    "use strict";
    init_deserializerMiddleware();
    init_serdePlugin();
    init_serializerMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    "use strict";
    init_dist_es4();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    "use strict";
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var init_httpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    "use strict";
    init_dist_es2();
    init_dist_es();
    init_dist_es3();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    "use strict";
    init_httpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    "use strict";
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var init_normalizeProvider2 = __esm({
  "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    "use strict";
  }
});

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
var init_createPaginator = __esm({
  "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    "use strict";
  }
});

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es5 = __esm({
  "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    "use strict";
    isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  }
});

// node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer, fromString;
var init_dist_es6 = __esm({
  "node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    "use strict";
    init_dist_es5();
    fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer2.from(input, offset, length);
    };
    fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64;
var init_fromBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    "use strict";
    init_dist_es6();
    BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase64 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8;
var init_fromUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    "use strict";
    init_dist_es6();
    fromUtf8 = (input) => {
      const buf = fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var init_toUint8Array = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    "use strict";
    init_fromUtf8();
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8;
var init_toUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    "use strict";
    init_dist_es6();
    toUtf8 = (input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es7 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/index.js"() {
    "use strict";
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64;
var init_toBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    "use strict";
    init_dist_es6();
    init_dist_es7();
    toBase64 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf8(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es8 = __esm({
  "node_modules/@smithy/util-base64/dist-es/index.js"() {
    "use strict";
    init_fromBase64();
    init_toBase64();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
var init_transforms = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
    "use strict";
    init_dist_es8();
    init_dist_es7();
    init_Uint8ArrayBlobAdapter();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    "use strict";
    init_transforms();
    Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js
var init_ChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js"() {
    "use strict";
    init_dist_es8();
  }
});

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var isReadableStream, isBlob;
var init_stream_type_check = __esm({
  "node_modules/@smithy/util-stream/dist-es/stream-type-check.js"() {
    "use strict";
    isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
    isBlob = (blob) => {
      return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
var init_ChecksumStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
var init_createChecksumStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js"() {
    "use strict";
    init_dist_es8();
    init_stream_type_check();
    init_ChecksumStream_browser();
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js
var init_createChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js"() {
    "use strict";
    init_stream_type_check();
    init_ChecksumStream();
    init_createChecksumStream_browser();
  }
});

// node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
var init_ByteArrayCollector = __esm({
  "node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
var init_createBufferedReadableStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js"() {
    "use strict";
    init_ByteArrayCollector();
  }
});

// node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js
import { Readable } from "stream";
var init_createBufferedReadable = __esm({
  "node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js"() {
    "use strict";
    init_ByteArrayCollector();
    init_createBufferedReadableStream();
    init_stream_type_check();
  }
});

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var init_getAwsChunkedEncodingStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-stream/dist-es/headStream.browser.js
async function headStream(stream, bytes) {
  let byteLengthCounter = 0;
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      byteLengthCounter += value?.byteLength ?? 0;
    }
    if (byteLengthCounter >= bytes) {
      break;
    }
    isDone = done;
  }
  reader.releaseLock();
  const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
  let offset = 0;
  for (const chunk of chunks) {
    if (chunk.byteLength > collected.byteLength - offset) {
      collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
      break;
    } else {
      collected.set(chunk, offset);
    }
    offset += chunk.length;
  }
  return collected;
}
var init_headStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/headStream.browser.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-stream/dist-es/headStream.js
import { Writable } from "stream";
var headStream2, Collector;
var init_headStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/headStream.js"() {
    "use strict";
    init_headStream_browser();
    init_stream_type_check();
    headStream2 = (stream, bytes) => {
      if (isReadableStream(stream)) {
        return headStream(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    };
    Collector = class extends Writable {
      constructor() {
        super(...arguments);
        this.buffers = [];
        this.limit = Infinity;
        this.bytesBuffered = 0;
      }
      _write(chunk, encoding, callback) {
        this.buffers.push(chunk);
        this.bytesBuffered += chunk.byteLength ?? 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var init_escape_uri = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    "use strict";
    init_escape_uri();
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    "use strict";
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@smithy/querystring-builder/dist-es/index.js
var init_dist_es10 = __esm({
  "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    "use strict";
    init_dist_es9();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/constants.js
var init_constants = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var init_get_transformed_headers = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-http-handler/dist-es/timing.js
var init_timing = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/timing.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var init_set_connection_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    "use strict";
    init_timing();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var init_set_socket_keep_alive = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    "use strict";
    init_timing();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var init_set_socket_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    "use strict";
    init_node_http_handler();
    init_timing();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
var init_write_request_body = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    "use strict";
    init_timing();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
var init_node_http_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    "use strict";
    init_dist_es2();
    init_dist_es10();
    init_constants();
    init_get_transformed_headers();
    init_set_connection_timeout();
    init_set_socket_keep_alive();
    init_set_socket_timeout();
    init_timing();
    init_write_request_body();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var init_node_http2_connection_pool = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js"() {
    "use strict";
    init_node_http2_connection_pool();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
    "use strict";
    init_dist_es2();
    init_dist_es10();
    init_get_transformed_headers();
    init_node_http2_connection_manager();
    init_write_request_body();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
var init_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
var init_stream_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    "use strict";
    init_collector();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es11 = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    "use strict";
    init_node_http_handler();
    init_node_http2_handler();
    init_stream_collector();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
var init_create_request = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/create-request.js"() {
    "use strict";
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
var init_request_timeout = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
    "use strict";
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
    "use strict";
    init_dist_es2();
    init_dist_es10();
    init_create_request();
    init_request_timeout();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
var init_stream_collector2 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    "use strict";
    init_dist_es8();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es12 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    "use strict";
    init_fetch_http_handler();
    init_stream_collector2();
  }
});

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es13 = __esm({
  "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    "use strict";
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var init_sdk_stream_mixin_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    "use strict";
    init_dist_es12();
    init_dist_es8();
    init_dist_es13();
    init_dist_es7();
    init_stream_type_check();
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
var init_sdk_stream_mixin = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    "use strict";
    init_dist_es11();
    init_dist_es6();
    init_sdk_stream_mixin_browser();
  }
});

// node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function splitStream(stream) {
  if (typeof stream.stream === "function") {
    stream = stream.stream();
  }
  const readableStream = stream;
  return readableStream.tee();
}
var init_splitStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/splitStream.browser.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-stream/dist-es/splitStream.js
import { PassThrough } from "stream";
async function splitStream2(stream) {
  if (isReadableStream(stream) || isBlob(stream)) {
    return splitStream(stream);
  }
  const stream1 = new PassThrough();
  const stream2 = new PassThrough();
  stream.pipe(stream1);
  stream.pipe(stream2);
  return [stream1, stream2];
}
var init_splitStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/splitStream.js"() {
    "use strict";
    init_splitStream_browser();
    init_stream_type_check();
  }
});

// node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es14 = __esm({
  "node_modules/@smithy/util-stream/dist-es/index.js"() {
    "use strict";
    init_Uint8ArrayBlobAdapter();
    init_ChecksumStream();
    init_createChecksumStream();
    init_createBufferedReadable();
    init_getAwsChunkedEncodingStream();
    init_headStream();
    init_sdk_stream_mixin();
    init_splitStream();
    init_stream_type_check();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    "use strict";
    init_dist_es14();
    collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
    "use strict";
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    "use strict";
    init_extended_encode_uri_component();
    resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    "use strict";
    init_dist_es2();
    init_resolve_path();
    RequestBuilder = class {
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var init_protocols = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    "use strict";
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_requestBuilder();
    init_resolve_path();
  }
});

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
var init_requestBuilder2 = __esm({
  "node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    "use strict";
    init_protocols();
  }
});

// node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "node_modules/@smithy/core/dist-es/setFeature.js"() {
    "use strict";
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    "use strict";
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var init_httpApiKeyAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    "use strict";
    init_dist_es2();
    init_dist_es();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var init_httpBearerAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    "use strict";
    init_dist_es2();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var init_noAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    "use strict";
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    "use strict";
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    "use strict";
    createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    "use strict";
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@smithy/core/dist-es/index.js
var init_dist_es15 = __esm({
  "node_modules/@smithy/core/dist-es/index.js"() {
    "use strict";
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider2();
    init_createPaginator();
    init_requestBuilder2();
    init_setFeature2();
    init_util_identity_and_auth();
  }
});

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError;
var init_ProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    "use strict";
    ProviderError = class _ProviderError extends Error {
      constructor(message, options = true) {
        let logger3;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger3 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger3 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError;
var init_CredentialsProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    "use strict";
    init_ProviderError();
    CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var init_TokenProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    "use strict";
    init_ProviderError();
  }
});

// node_modules/@smithy/property-provider/dist-es/chain.js
var chain;
var init_chain = __esm({
  "node_modules/@smithy/property-provider/dist-es/chain.js"() {
    "use strict";
    init_ProviderError();
    chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic;
var init_fromStatic = __esm({
  "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    "use strict";
    fromStatic = (staticValue) => () => Promise.resolve(staticValue);
  }
});

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize;
var init_memoize = __esm({
  "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
    "use strict";
    memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es16 = __esm({
  "node_modules/@smithy/property-provider/dist-es/index.js"() {
    "use strict";
    init_CredentialsProviderError();
    init_ProviderError();
    init_TokenProviderError();
    init_chain();
    init_fromStatic();
    init_memoize();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var init_resolveAwsSdkSigV4AConfig = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    "use strict";
    init_dist_es15();
    init_dist_es16();
  }
});

// node_modules/@smithy/signature-v4/dist-es/constants.js
var AMZ_DATE_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AMZ_DATE_HEADER, SIGNATURE_HEADER, TOKEN_HEADER, MAX_PRESIGNED_TTL;
var init_constants2 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    "use strict";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var init_credentialDerivation = __esm({
  "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    "use strict";
    init_dist_es13();
    init_dist_es7();
    init_constants2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var init_getCanonicalHeaders = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    "use strict";
    init_constants2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var init_getCanonicalQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    "use strict";
    init_dist_es9();
    init_constants2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var init_getPayloadHash = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    "use strict";
    init_dist_es5();
    init_dist_es13();
    init_dist_es7();
    init_constants2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
var HEADER_VALUE_TYPE;
var init_HeaderFormatter = __esm({
  "node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    "use strict";
    init_dist_es13();
    init_dist_es7();
    (function(HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
  }
});

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var init_headerUtil = __esm({
  "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    "use strict";
  }
});

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var init_moveHeadersToQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    "use strict";
    init_dist_es2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var init_prepareRequest = __esm({
  "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    "use strict";
    init_dist_es2();
    init_constants2();
  }
});

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var init_utilDate = __esm({
  "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    "use strict";
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var init_SignatureV4 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    "use strict";
    init_dist_es13();
    init_dist_es3();
    init_dist_es9();
    init_dist_es7();
    init_constants2();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_utilDate();
  }
});

// node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es17 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/index.js"() {
    "use strict";
    init_SignatureV4();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    "use strict";
    init_dist_es15();
    init_dist_es17();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    "use strict";
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    "use strict";
    init_aws_sdk();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
    "use strict";
  }
});

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
var init_MiddlewareStack = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
    "use strict";
    getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    };
    stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es18 = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    "use strict";
    init_MiddlewareStack();
  }
});

// node_modules/@smithy/smithy-client/dist-es/client.js
var init_client3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/client.js"() {
    "use strict";
    init_dist_es18();
  }
});

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var init_collect_stream_body2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    "use strict";
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command, ClassBuilder;
var init_command2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/command.js"() {
    "use strict";
    init_dist_es18();
    init_dist_es();
    Command = class {
      constructor() {
        this.middlewareStack = constructStack();
      }
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger3 } = configuration;
        const handlerExecutionContext = {
          logger: logger3,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
    };
    ClassBuilder = class {
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
      }
      init(cb) {
        this._init = cb;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        };
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/constants.js
var init_constants3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var init_create_aggregated_client = __esm({
  "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var parseBoolean, MAX_FLOAT, expectString, stackTraceWarning, logger2;
var init_parse_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
    "use strict";
    parseBoolean = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectString = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger2.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    };
    logger2 = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, RFC3339_WITH_OFFSET, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, FIFTY_YEARS_IN_MILLIS;
var init_date_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
    "use strict";
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
  }
});

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException, decorateServiceException;
var init_exceptions = __esm({
  "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
    "use strict";
    ServiceException = class _ServiceException extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    decorateServiceException = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError, withBaseException, deserializeMetadata;
var init_default_error_handler = __esm({
  "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
    "use strict";
    init_exceptions();
    throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    };
    withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
  }
});

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var init_defaults_mode = __esm({
  "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var init_emitWarningIfUnsupportedVersion2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
var init_extended_encode_uri_component2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
    "use strict";
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var init_checksum3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    "use strict";
    init_dist_es();
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var init_retry2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    "use strict";
    init_checksum3();
    init_retry2();
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    "use strict";
    init_defaultExtensionConfiguration2();
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode;
var init_get_value_from_text_node = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    "use strict";
    getValueFromTextNode = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
var isSerializableHeaderValue;
var init_is_serializable_header_value = __esm({
  "node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js"() {
    "use strict";
    isSerializableHeaderValue = (value) => {
      return value != null;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
    "use strict";
    LazyJsonString = function LazyJsonString2(val2) {
      const str = Object.assign(new String(val2), {
        deserializeJSON() {
          return JSON.parse(String(val2));
        },
        toString() {
          return String(val2);
        },
        toJSON() {
          return String(val2);
        }
      });
      return str;
    };
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var init_NoOpLogger = __esm({
  "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var mapWithFilter, applyInstruction, nonNullish, pass;
var init_object_mapping = __esm({
  "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
    "use strict";
    mapWithFilter = (target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    nonNullish = (_) => _ != null;
    pass = (_) => _;
  }
});

// node_modules/@smithy/smithy-client/dist-es/quote-header.js
var init_quote_header = __esm({
  "node_modules/@smithy/smithy-client/dist-es/quote-header.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var init_resolve_path2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
    "use strict";
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
var init_serde_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/split-every.js
var init_split_every = __esm({
  "node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/split-header.js
var init_split_header = __esm({
  "node_modules/@smithy/smithy-client/dist-es/split-header.js"() {
    "use strict";
  }
});

// node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es19 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/index.js"() {
    "use strict";
    init_client3();
    init_collect_stream_body2();
    init_command2();
    init_constants3();
    init_create_aggregated_client();
    init_date_utils();
    init_default_error_handler();
    init_defaults_mode();
    init_emitWarningIfUnsupportedVersion2();
    init_exceptions();
    init_extended_encode_uri_component2();
    init_extensions3();
    init_get_array_if_single_item();
    init_get_value_from_text_node();
    init_is_serializable_header_value();
    init_lazy_json();
    init_NoOpLogger();
    init_object_mapping();
    init_parse_utils();
    init_quote_header();
    init_resolve_path2();
    init_ser_utils();
    init_serde_json();
    init_split_every();
    init_split_header();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    "use strict";
    init_dist_es19();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    "use strict";
    init_dist_es19();
    collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    "use strict";
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys[i]] = [a[keys[i]]];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err) return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else if (tags.length === 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err) return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                }
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    "use strict";
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    var XmlNode2 = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode2;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    "use strict";
    var util = require_util();
    function readDocType(xmlData, i) {
      const entities = {};
      if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i)) {
              i += 7;
              [entityName, val, i] = readEntityExp(xmlData, i + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i)) i += 8;
            else if (hasBody && isAttlist(xmlData, i)) i += 8;
            else if (hasBody && isNotation(xmlData, i)) i += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i] === ">") {
            if (comment) {
              if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i };
    }
    function readEntityExp(xmlData, i) {
      let entityName2 = "";
      for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
        entityName2 += xmlData[i];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i++];
      let val2 = "";
      for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
        val2 += xmlData[i];
      }
      return [entityName2, val2, i];
    }
    function isComment(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-") return true;
      return false;
    }
    function isEntity(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y") return true;
      return false;
    }
    function isElement(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T") return true;
      return false;
    }
    function isAttlist(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T") return true;
      return false;
    }
    function isNotation(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N") return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    "use strict";
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    var consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (str === "0") return 0;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
      } else if (trimmedStr.search(/[eE]/) !== -1) {
        const notation = trimmedStr.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
        if (notation) {
          if (options.leadingZeros) {
            trimmedStr = (notation[1] || "") + notation[3];
          } else {
            if (notation[2] === "0" && notation[3][0] === ".") {
            } else {
              return str;
            }
          }
          return options.eNotation ? Number(trimmedStr) : str;
        } else {
          return str;
        }
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else if (options.leadingZeros && leadingZeros === str) return 0;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              return numTrimmedByZeros === numStr || sign + numTrimmedByZeros === numStr ? num : str;
            } else {
              return trimmedStr === numStr || trimmedStr === sign + numStr ? num : str;
            }
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    function parse_int(numStr, base) {
      if (parseInt) return parseInt(numStr, base);
      else if (Number.parseInt) return Number.parseInt(numStr, base);
      else if (window && window.parseInt) return window.parseInt(numStr, base);
      else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 10)) },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 16)) }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i = 0; i < entKeys.length; i++) {
        const ent = entKeys[i];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = this.resolveNameSpace(matches[i][1]);
          let oldVal = matches[i][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val2 == void 0) val2 = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val2);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    function readStopNodeData(xmlData, tagName, i) {
      const startIndex = i;
      let openTagCount = 1;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i),
                  i: closeIndex
                };
              }
            }
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          const atrrName = keys[i];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    "use strict";
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    "use strict";
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        if (tagName === void 0) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!attrMap.hasOwnProperty(attr)) continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
          const entity = options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val2 += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val2 += "";
          } else if (key[0] === "?") {
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          let listTagAttr = "";
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                const result = this.j2x(item, level + 1);
                listTagVal += result.val;
                if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                  listTagAttr += result.attrStr;
                }
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              if (this.options.oneListGroup) {
                let textValue = this.options.tagValueProcessor(key, item);
                textValue = this.replaceEntitiesValue(textValue);
                listTagVal += textValue;
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i = 0; i < this.options.entities.length; i++) {
          const entity = this.options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_fast_xml_parser, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    "use strict";
    init_dist_es19();
    import_fast_xml_parser = __toESM(require_fxp());
    init_common();
    parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e) {
          if (e && typeof e === "object") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
      }
      return {};
    });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data) => {
      if (data?.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (data?.Code !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    "use strict";
    init_coercing_serializers();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/core/dist-es/index.js
var init_dist_es20 = __esm({
  "node_modules/@aws-sdk/core/dist-es/index.js"() {
    "use strict";
    init_client2();
    init_httpAuthSchemes2();
    init_protocols2();
  }
});

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var init_booleanSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
var init_numberSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
    "use strict";
  }
});

// node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
var init_types2 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
    "use strict";
    (function(SelectorType2) {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
    })(SelectorType || (SelectorType = {}));
  }
});

// node_modules/@smithy/util-config-provider/dist-es/index.js
var init_dist_es21 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
    "use strict";
    init_booleanSelector();
    init_numberSelector();
    init_types2();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
    "use strict";
    resolveParamsForS3 = async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    };
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
    isArnBucketName = (bucketName) => {
      const [arn, partition, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
    "use strict";
    init_s3();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
    "use strict";
    createConfigValueProvider = (configKey, canonicalEndpointParamKey, config2) => {
      const configProvider = async () => {
        const configValue = config2[configKey] ?? config2[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      };
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js
function getSelectorName(functionString) {
  try {
    const constants2 = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
    constants2.delete("CONFIG");
    constants2.delete("CONFIG_PREFIX_SEPARATOR");
    constants2.delete("ENV");
    return [...constants2].join(", ");
  } catch (e) {
    return functionString;
  }
}
var init_getSelectorName = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js"() {
    "use strict";
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv;
var init_fromEnv = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromEnv.js"() {
    "use strict";
    init_dist_es16();
    init_getSelectorName();
    fromEnv = (envVarSelector, logger3) => async () => {
      try {
        const config2 = envVarSelector(process.env);
        if (config2 === void 0) {
          throw new Error();
        }
        return config2;
      } catch (e) {
        throw new CredentialsProviderError(e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: logger3 });
      }
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var homeDirCache, getHomeDirCacheKey, getHomeDir;
var init_getHomeDir = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js"() {
    "use strict";
    homeDirCache = {};
    getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    getHomeDir = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = homedir();
      return homeDirCache[homeDirCacheKey];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE, DEFAULT_PROFILE, getProfileName;
var init_getProfileName = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js"() {
    "use strict";
    ENV_PROFILE = "AWS_PROFILE";
    DEFAULT_PROFILE = "default";
    getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
var init_getSSOTokenFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js"() {
    "use strict";
    init_getHomeDir();
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { promises as fsPromises } from "fs";
var readFile;
var init_getSSOTokenFromFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js"() {
    "use strict";
    init_getSSOTokenFilepath();
    ({ readFile } = fsPromises);
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js
var getConfigData;
var init_getConfigData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js"() {
    "use strict";
    init_dist_es();
    init_loadSharedConfigFiles();
    getConfigData = (data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    });
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join } from "path";
var ENV_CONFIG_PATH, getConfigFilepath;
var init_getConfigFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js"() {
    "use strict";
    init_getHomeDir();
    ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join2 } from "path";
var ENV_CREDENTIALS_PATH, getCredentialsFilepath;
var init_getCredentialsFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js"() {
    "use strict";
    init_getHomeDir();
    ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || join2(getHomeDir(), ".aws", "credentials");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var prefixKeyRegex, profileNameBlockList, parseIni;
var init_parseIni = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js"() {
    "use strict";
    init_dist_es();
    init_loadSharedConfigFiles();
    prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    profileNameBlockList = ["__proto__", "profile __proto__"];
    parseIni = (iniData) => {
      const map2 = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map2[currentSection] = map2[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map2[currentSection][key] = value;
            }
          }
        }
      }
      return map2;
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js
import { promises as fsPromises2 } from "fs";
var readFile2, filePromisesHash, slurpFile;
var init_slurpFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js"() {
    "use strict";
    ({ readFile: readFile2 } = fsPromises2);
    filePromisesHash = {};
    slurpFile = (path, options) => {
      if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile2(path, "utf8");
      }
      return filePromisesHash[path];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
import { join as join3 } from "path";
var swallowError, CONFIG_PREFIX_SEPARATOR, loadSharedConfigFiles;
var init_loadSharedConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js"() {
    "use strict";
    init_getConfigData();
    init_getConfigFilepath();
    init_getCredentialsFilepath();
    init_getHomeDir();
    init_parseIni();
    init_slurpFile();
    swallowError = () => ({});
    CONFIG_PREFIX_SEPARATOR = ".";
    loadSharedConfigFiles = async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = join3(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = join3(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        slurpFile(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        slurpFile(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var init_getSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js"() {
    "use strict";
    init_dist_es();
    init_loadSharedConfigFiles();
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var init_loadSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js"() {
    "use strict";
    init_getConfigFilepath();
    init_getSsoSessionData();
    init_parseIni();
    init_slurpFile();
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var init_mergeConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js"() {
    "use strict";
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var init_parseKnownFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js"() {
    "use strict";
    init_loadSharedConfigFiles();
    init_mergeConfigFiles();
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/types.js
var init_types3 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/index.js
var init_dist_es22 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/index.js"() {
    "use strict";
    init_getHomeDir();
    init_getProfileName();
    init_getSSOTokenFilepath();
    init_getSSOTokenFromFile();
    init_loadSharedConfigFiles();
    init_loadSsoSessionData();
    init_parseKnownFiles();
    init_types3();
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles;
var init_fromSharedConfigFiles = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js"() {
    "use strict";
    init_dist_es16();
    init_dist_es22();
    init_getSelectorName();
    fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = getProfileName(init);
      const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e) {
        throw new CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction, fromStatic2;
var init_fromStatic2 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromStatic.js"() {
    "use strict";
    init_dist_es16();
    isFunction = (func) => typeof func === "function";
    fromStatic2 = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue);
  }
});

// node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig2;
var init_configLoader = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/configLoader.js"() {
    "use strict";
    init_dist_es16();
    init_fromEnv();
    init_fromSharedConfigFiles();
    init_fromStatic2();
    loadConfig2 = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue)));
  }
});

// node_modules/@smithy/node-config-provider/dist-es/index.js
var init_dist_es23 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/index.js"() {
    "use strict";
    init_configLoader();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js
var ENV_ENDPOINT_URL, CONFIG_ENDPOINT_URL, getEndpointUrlConfig;
var init_getEndpointUrlConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js"() {
    "use strict";
    init_dist_es22();
    ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    CONFIG_ENDPOINT_URL = "endpoint_url";
    getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config2) => {
        if (config2 && profile.services) {
          const servicesSection = config2[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js
var getEndpointFromConfig;
var init_getEndpointFromConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js"() {
    "use strict";
    init_dist_es23();
    init_getEndpointUrlConfig();
    getEndpointFromConfig = async (serviceId) => loadConfig2(getEndpointUrlConfig(serviceId ?? ""))();
  }
});

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es24 = __esm({
  "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
    "use strict";
  }
});

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl;
var init_dist_es25 = __esm({
  "node_modules/@smithy/url-parser/dist-es/index.js"() {
    "use strict";
    init_dist_es24();
    parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
    "use strict";
    init_dist_es25();
    toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return parseUrl(endpoint.url);
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions, resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
    "use strict";
    init_service_customizations();
    init_createConfigValueProvider();
    init_getEndpointFromConfig();
    init_toEndpointV1();
    getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    };
    resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
var init_adaptors = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
    "use strict";
    init_getEndpointFromInstructions();
    init_toEndpointV1();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware;
var init_endpointMiddleware = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
    "use strict";
    init_dist_es15();
    init_dist_es3();
    init_getEndpointFromInstructions();
    endpointMiddleware = ({ config: config2, instructions }) => {
      return (next, context) => async (args) => {
        if (config2.endpoint) {
          setFeature(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config2 }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions, getEndpointPlugin;
var init_getEndpointPlugin = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
    "use strict";
    init_dist_es4();
    init_endpointMiddleware();
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
    getEndpointPlugin = (config2, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config: config2,
          instructions
        }), endpointMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var init_resolveEndpointConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
    "use strict";
    init_dist_es3();
    init_getEndpointFromConfig();
    init_toEndpointV1();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
var init_types4 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
    "use strict";
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
var init_dist_es26 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
    "use strict";
    init_adaptors();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_types4();
  }
});

// src/shared/data/models/user/index.ts
import {
  Entity as Entity5,
  Column as Column5,
  PrimaryGeneratedColumn as PrimaryGeneratedColumn5,
  ManyToOne as ManyToOne4,
  OneToMany as OneToMany3,
  JoinColumn as JoinColumn4
} from "typeorm";

// src/shared/data/models/account/index.ts
import {
  Entity as Entity4,
  PrimaryGeneratedColumn as PrimaryGeneratedColumn4,
  Column as Column4,
  ManyToOne as ManyToOne3,
  OneToMany as OneToMany2,
  JoinColumn as JoinColumn3,
  CreateDateColumn as CreateDateColumn2,
  UpdateDateColumn as UpdateDateColumn2,
  OneToOne
} from "typeorm";

// src/shared/data/models/wallet/index.ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
var Wallet = class {
  id;
  address;
  type;
  blockchain;
  merchant_address;
  developer_address;
  get toGeneralResponse() {
    return {
      id: this.id,
      address: this.address,
      type: this.type,
      blockchain: this.blockchain
    };
  }
  get toResponse() {
    return {
      ...this.toGeneralResponse,
      merchant_address: this.merchant_address,
      developer_address: this.developer_address
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn("uuid")
], Wallet.prototype, "id", 2);
__decorateClass([
  Column({ type: "varchar" })
], Wallet.prototype, "address", 2);
__decorateClass([
  Column({ type: "enum", enum: ["forwarder", "payout"] })
], Wallet.prototype, "type", 2);
__decorateClass([
  Column({ type: "enum", enum: ["Ton", "BSC"] })
], Wallet.prototype, "blockchain", 2);
__decorateClass([
  Column({ type: "varchar" })
], Wallet.prototype, "merchant_address", 2);
__decorateClass([
  Column({ type: "varchar" })
], Wallet.prototype, "developer_address", 2);
Wallet = __decorateClass([
  Entity("wallets")
], Wallet);

// src/shared/data/models/analytics/merchant/index.ts
import { Entity as Entity3, PrimaryGeneratedColumn as PrimaryGeneratedColumn3, Column as Column3, ManyToOne as ManyToOne2, JoinColumn as JoinColumn2, CreateDateColumn, UpdateDateColumn, Index as Index2 } from "typeorm";

// src/shared/data/models/merchant/index.ts
import { Entity as Entity2, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, Column as Column2, OneToMany, Index } from "typeorm";
var Subscription = class {
  package;
  status;
  start_date;
  end_date;
};
__decorateClass([
  Column2({ type: "enum", enum: ["Basic", "Pro", "Enterprise"], default: "Basic" })
], Subscription.prototype, "package", 2);
__decorateClass([
  Column2({ type: "enum", enum: ["active", "canceled", "expired"], default: "active" })
], Subscription.prototype, "status", 2);
__decorateClass([
  Column2({ type: "date" })
], Subscription.prototype, "start_date", 2);
__decorateClass([
  Column2({ type: "date" })
], Subscription.prototype, "end_date", 2);
Subscription = __decorateClass([
  Entity2("subscriptions")
], Subscription);
var CustomSetting = class {
  default_theme;
  is_accepting_request;
};
__decorateClass([
  Column2({ type: "varchar", default: "light" })
], CustomSetting.prototype, "default_theme", 2);
__decorateClass([
  Column2({ type: "boolean", default: true })
], CustomSetting.prototype, "is_accepting_request", 2);
CustomSetting = __decorateClass([
  Entity2("custom_settings")
], CustomSetting);
var NotificationSetting = class {
  mobile;
  communication_emails;
  marketing_emails;
  social_emails;
  security_emails;
};
__decorateClass([
  Column2({ type: "boolean", default: false })
], NotificationSetting.prototype, "mobile", 2);
__decorateClass([
  Column2({ type: "boolean", default: false })
], NotificationSetting.prototype, "communication_emails", 2);
__decorateClass([
  Column2({ type: "boolean", default: false })
], NotificationSetting.prototype, "marketing_emails", 2);
__decorateClass([
  Column2({ type: "boolean", default: true })
], NotificationSetting.prototype, "social_emails", 2);
__decorateClass([
  Column2({ type: "boolean", default: true })
], NotificationSetting.prototype, "security_emails", 2);
NotificationSetting = __decorateClass([
  Entity2("notification_settings")
], NotificationSetting);
var Settings = class {
  custom_setting;
  subscription;
  accounts;
  notification;
};
__decorateClass([
  Column2(() => CustomSetting)
], Settings.prototype, "custom_setting", 2);
__decorateClass([
  Column2(() => Subscription)
], Settings.prototype, "subscription", 2);
__decorateClass([
  OneToMany(() => PaymentAccount, (paymentAccount) => paymentAccount.merchant)
], Settings.prototype, "accounts", 2);
__decorateClass([
  Column2(() => NotificationSetting)
], Settings.prototype, "notification", 2);
Settings = __decorateClass([
  Entity2("settings")
], Settings);
var Verification = class {
  code;
  timeout;
};
__decorateClass([
  Column2({ type: "varchar", select: false, nullable: true })
], Verification.prototype, "code", 2);
__decorateClass([
  Column2({ type: "date", select: false, nullable: true })
], Verification.prototype, "timeout", 2);
Verification = __decorateClass([
  Entity2("verifications")
], Verification);
var Personal = class {
  first_name;
  surname;
  image;
  email_address;
  profile_image;
  display_email;
  bio;
  language;
  emails;
  dob;
};
__decorateClass([
  Column2({ type: "varchar", length: 100 })
], Personal.prototype, "first_name", 2);
__decorateClass([
  Column2({ type: "varchar", length: 100, nullable: true })
], Personal.prototype, "surname", 2);
__decorateClass([
  Column2({ type: "varchar", length: 100, nullable: true })
], Personal.prototype, "image", 2);
__decorateClass([
  Column2({ type: "varchar", length: 255, unique: true })
], Personal.prototype, "email_address", 2);
__decorateClass([
  Column2({ type: "varchar", default: "" })
], Personal.prototype, "profile_image", 2);
__decorateClass([
  Column2({ type: "varchar", default: "" })
], Personal.prototype, "display_email", 2);
__decorateClass([
  Column2({ type: "text", default: "" })
], Personal.prototype, "bio", 2);
__decorateClass([
  Column2({ type: "varchar", length: 255, default: "" })
], Personal.prototype, "language", 2);
__decorateClass([
  Column2({ type: "varchar", array: true, default: [] })
], Personal.prototype, "emails", 2);
__decorateClass([
  Column2({ type: "date", nullable: true })
], Personal.prototype, "dob", 2);
Personal = __decorateClass([
  Entity2("personals")
], Personal);
var Merchant = class {
  id;
  personal;
  password;
  verification;
  setting;
  created_at;
  updated_at;
  // Static methods for response transformations
  get toGeneralResponse() {
    return {
      personal: this.personal,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
  get toResponse() {
    return {
      id: this.id,
      personal: this.personal,
      verification: this.verification,
      setting: {
        custom_setting: this.setting.custom_setting,
        notification: this.setting.notification,
        subscription: this.setting.subscription,
        accounts: this.setting.accounts?.map((account) => account?.toResponse) ?? []
      },
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn2("uuid")
], Merchant.prototype, "id", 2);
__decorateClass([
  Column2(() => Personal)
], Merchant.prototype, "personal", 2);
__decorateClass([
  Column2({ type: "varchar" })
], Merchant.prototype, "password", 2);
__decorateClass([
  Column2(() => Verification, { prefix: "verification_" })
], Merchant.prototype, "verification", 2);
__decorateClass([
  Column2(() => Settings, { prefix: "setting_" })
], Merchant.prototype, "setting", 2);
__decorateClass([
  Column2({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], Merchant.prototype, "created_at", 2);
__decorateClass([
  Column2({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], Merchant.prototype, "updated_at", 2);
Merchant = __decorateClass([
  Entity2("merchants"),
  Index("email_address_idx", ["personal.email_address"], { unique: true })
], Merchant);

// src/shared/data/models/analytics/merchant/index.ts
var MerchantAnalytics = class {
  id;
  merchant;
  account;
  type;
  total_transactions_value;
  total_transactions_trend;
  success_rate_value;
  success_rate_trend;
  failed_rate_value;
  failed_rate_trend;
  total_revenue_value;
  total_revenue_trend;
  pending_transactions_value;
  pending_transactions_trend;
  created_at;
  updated_at;
  get toResponse() {
    return {
      type: this.type,
      total_transactions_value: this.total_transactions_value,
      total_transactions_trend: this.total_transactions_trend,
      success_rate_value: this.success_rate_value,
      success_rate_trend: this.success_rate_trend,
      failed_rate_value: this.failed_rate_value,
      failed_rate_trend: this.failed_rate_trend,
      pending_transactions_value: this.pending_transactions_value,
      pending_transactions_trend: this.pending_transactions_trend,
      total_revenue_value: this.total_revenue_value,
      total_revenue_trend: this.total_revenue_trend,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn3("uuid")
], MerchantAnalytics.prototype, "id", 2);
__decorateClass([
  ManyToOne2(() => Merchant, { eager: false }),
  JoinColumn2()
], MerchantAnalytics.prototype, "merchant", 2);
__decorateClass([
  ManyToOne2(() => PaymentAccount, { eager: false }),
  JoinColumn2()
], MerchantAnalytics.prototype, "account", 2);
__decorateClass([
  Column3({ type: "enum", enum: ["sandbox", "production"], default: "production" })
], MerchantAnalytics.prototype, "type", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "total_transactions_value", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "total_transactions_trend", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "success_rate_value", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "success_rate_trend", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "failed_rate_value", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "failed_rate_trend", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "total_revenue_value", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "total_revenue_trend", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "pending_transactions_value", 2);
__decorateClass([
  Column3({ type: "float", default: 0 })
], MerchantAnalytics.prototype, "pending_transactions_trend", 2);
__decorateClass([
  CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], MerchantAnalytics.prototype, "created_at", 2);
__decorateClass([
  UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], MerchantAnalytics.prototype, "updated_at", 2);
MerchantAnalytics = __decorateClass([
  Entity3("merchant_analytics"),
  Index2("merchant_account_idx", ["merchant", "account"], { unique: true })
], MerchantAnalytics);

// src/shared/data/models/account/index.ts
var AccountWallet = class {
  id;
  blockchain;
  balance;
  master_wallet_address;
  account;
  wallet;
  get toResponse() {
    return {
      id: this.id,
      wallet: this.wallet?.toResponse,
      blockchain: this.blockchain,
      master_wallet_address: this.master_wallet_address,
      balance: this.balance,
      account: this.account?.toResponse
    };
  }
  get toGeneralResponse() {
    return {
      id: this.id,
      wallet: this.wallet?.toGeneralResponse,
      blockchain: this.blockchain,
      balance: this.balance,
      account: this.account?.toGeneralResponse
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn4("uuid")
], AccountWallet.prototype, "id", 2);
__decorateClass([
  Column4({ type: "enum", enum: ["Ton", "BSC"] })
], AccountWallet.prototype, "blockchain", 2);
__decorateClass([
  Column4({ type: "decimal", precision: 18, scale: 6, default: "0.000000" })
], AccountWallet.prototype, "balance", 2);
__decorateClass([
  Column4({ type: "text" })
], AccountWallet.prototype, "master_wallet_address", 2);
__decorateClass([
  ManyToOne3(() => PaymentAccount, (account) => account.id),
  JoinColumn3({ name: "account_id" })
], AccountWallet.prototype, "account", 2);
__decorateClass([
  OneToOne(() => Wallet, { eager: true }),
  JoinColumn3({ name: "wallet_id" })
], AccountWallet.prototype, "wallet", 2);
AccountWallet = __decorateClass([
  Entity4("account_wallets")
], AccountWallet);
var ApiInfo = class {
  access_token;
  public_key;
  secret_key;
  webhook_url;
};
__decorateClass([
  Column4({ type: "varchar", length: 255 })
], ApiInfo.prototype, "access_token", 2);
__decorateClass([
  Column4({ type: "text" })
], ApiInfo.prototype, "public_key", 2);
__decorateClass([
  Column4({ type: "text" })
], ApiInfo.prototype, "secret_key", 2);
__decorateClass([
  Column4({ type: "varchar", length: 255 })
], ApiInfo.prototype, "webhook_url", 2);
var Package = class {
  name;
  description;
  subscription_fee;
};
__decorateClass([
  Column4({ type: "enum", enum: ["basic", "pro", "enterprise"] })
], Package.prototype, "name", 2);
__decorateClass([
  Column4({ type: "varchar", nullable: true })
], Package.prototype, "description", 2);
__decorateClass([
  Column4({ type: "float", default: 0 })
], Package.prototype, "subscription_fee", 2);
var AccountDetails = class {
  account_type;
  package_type;
  interval;
  packages;
  duration;
};
__decorateClass([
  Column4({ type: "enum", enum: ["subscription", "one-time"] })
], AccountDetails.prototype, "account_type", 2);
__decorateClass([
  Column4({ type: "enum", enum: ["single", "multiple"] })
], AccountDetails.prototype, "package_type", 2);
__decorateClass([
  Column4({ type: "enum", enum: ["daily", "weekly", "monthly", "yearly"] })
], AccountDetails.prototype, "interval", 2);
__decorateClass([
  Column4("jsonb", { nullable: false, default: () => `'[]'` })
], AccountDetails.prototype, "packages", 2);
__decorateClass([
  Column4({ type: "varchar", nullable: true })
], AccountDetails.prototype, "duration", 2);
var AccountSettings = class {
  plan;
  balance;
  subscription_status;
  subscription_date;
  subscription_expiry_date;
};
__decorateClass([
  Column4({ type: "enum", enum: ["free", "standard", "continuous"], default: "free" })
], AccountSettings.prototype, "plan", 2);
__decorateClass([
  Column4({ type: "float", default: 0 })
], AccountSettings.prototype, "balance", 2);
__decorateClass([
  Column4({ type: "varchar", default: "inactive" })
], AccountSettings.prototype, "subscription_status", 2);
__decorateClass([
  Column4({ type: "timestamp", nullable: true })
], AccountSettings.prototype, "subscription_date", 2);
__decorateClass([
  Column4({ type: "timestamp", nullable: true })
], AccountSettings.prototype, "subscription_expiry_date", 2);
var PaymentAccount = class {
  id;
  description;
  name;
  merchant_id;
  merchant;
  analytics;
  wallets;
  api_info;
  sandbox_info;
  details;
  settings;
  total_balance;
  created_at;
  updated_at;
  get toGeneralResponse() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      plan: this.settings.plan,
      details: this.details,
      total_balance: this.total_balance,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
  get toResponse() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      plan: this.settings.plan,
      merchant: this.merchant?.toResponse,
      analytics: this.analytics || [],
      wallets: this.wallets?.map?.((wallet) => wallet?.toResponse) ?? [],
      api_info: {
        ...this.api_info,
        secret_key: this.api_info.secret_key.slice(0, 6) + "*********"
      },
      sandbox_info: {
        ...this.sandbox_info,
        secret_key: this.sandbox_info.secret_key.slice(0, 6) + "*********"
      },
      total_balance: this.total_balance,
      details: this.details,
      settings: this.settings,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
  get toFirstResponse() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      plan: this.settings.plan,
      merchant: this.merchant?.toResponse,
      analytics: this.analytics || [],
      wallets: this.wallets?.map?.((wallet) => wallet?.toResponse) ?? [],
      sandbox_info: this.sandbox_info,
      api_info: this.api_info,
      total_balance: this.total_balance,
      details: this.details,
      settings: this.settings,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn4("uuid")
], PaymentAccount.prototype, "id", 2);
__decorateClass([
  Column4({ type: "text", default: "" })
], PaymentAccount.prototype, "description", 2);
__decorateClass([
  Column4({ type: "varchar", length: 100 })
], PaymentAccount.prototype, "name", 2);
__decorateClass([
  Column4({
    type: "enum",
    enum: ["free", "standard", "continuous"],
    default: "Free"
  }),
  Column4({ type: "varchar" })
], PaymentAccount.prototype, "merchant_id", 2);
__decorateClass([
  ManyToOne3(() => Merchant, (m) => m.setting.accounts, { nullable: false }),
  JoinColumn3({ name: "merchant_id" })
], PaymentAccount.prototype, "merchant", 2);
__decorateClass([
  OneToMany2(() => MerchantAnalytics, (analytics) => analytics.account, { cascade: true })
], PaymentAccount.prototype, "analytics", 2);
__decorateClass([
  OneToMany2(() => AccountWallet, (wallet) => wallet.account, { cascade: true, eager: true })
], PaymentAccount.prototype, "wallets", 2);
__decorateClass([
  Column4((type) => ApiInfo)
], PaymentAccount.prototype, "api_info", 2);
__decorateClass([
  Column4((type) => ApiInfo)
], PaymentAccount.prototype, "sandbox_info", 2);
__decorateClass([
  Column4(() => AccountDetails)
], PaymentAccount.prototype, "details", 2);
__decorateClass([
  Column4(() => AccountSettings)
], PaymentAccount.prototype, "settings", 2);
__decorateClass([
  Column4({ type: "decimal", precision: 18, scale: 6, default: "0.000000" })
], PaymentAccount.prototype, "total_balance", 2);
__decorateClass([
  CreateDateColumn2({ type: "timestamp with time zone" })
], PaymentAccount.prototype, "created_at", 2);
__decorateClass([
  UpdateDateColumn2({ type: "timestamp with time zone" })
], PaymentAccount.prototype, "updated_at", 2);
PaymentAccount = __decorateClass([
  Entity4("payment_accounts")
], PaymentAccount);

// src/shared/data/models/user/index.ts
var UserWallet = class {
  id;
  user;
  email;
  account;
  account_id;
  type;
  wallet;
  wallet_id;
  created_at;
  updated_at;
  get toGeneralResponse() {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      wallet: this.wallet.toGeneralResponse,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
  get toSecureResponse() {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      wallet: this.wallet.toResponse,
      account: this.account.toResponse,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn5("uuid")
], UserWallet.prototype, "id", 2);
__decorateClass([
  ManyToOne4(() => User, (user) => user.wallets, { nullable: true }),
  JoinColumn4({ name: "user_id" })
], UserWallet.prototype, "user", 2);
__decorateClass([
  Column5({ type: "varchar", length: 255 })
], UserWallet.prototype, "email", 2);
__decorateClass([
  ManyToOne4(() => PaymentAccount, (account) => account.id, { eager: true }),
  JoinColumn4({ name: "account_id" })
], UserWallet.prototype, "account", 2);
__decorateClass([
  Column5("uuid", { name: "account_id" })
], UserWallet.prototype, "account_id", 2);
__decorateClass([
  Column5({
    type: "enum",
    enum: ["sandbox", "production"],
    default: "production"
  })
], UserWallet.prototype, "type", 2);
__decorateClass([
  ManyToOne4(() => Wallet, (wallet) => wallet.id, { eager: true }),
  JoinColumn4({ name: "wallet_id" })
], UserWallet.prototype, "wallet", 2);
__decorateClass([
  Column5("uuid", { name: "wallet_id" })
], UserWallet.prototype, "wallet_id", 2);
__decorateClass([
  Column5({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], UserWallet.prototype, "created_at", 2);
__decorateClass([
  Column5({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], UserWallet.prototype, "updated_at", 2);
UserWallet = __decorateClass([
  Entity5("user_wallets")
], UserWallet);
var User = class {
  id;
  email;
  wallets;
  toGeneralResponse() {
    return {
      id: this.id,
      email: this.email,
      wallets: this.wallets.map((uw) => uw.toGeneralResponse)
    };
  }
  toResponse() {
    return {
      id: this.id,
      email: this.email,
      wallets: this.wallets.map((uw) => uw.toSecureResponse)
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn5("uuid")
], User.prototype, "id", 2);
__decorateClass([
  Column5({ type: "varchar", length: 255, unique: true })
], User.prototype, "email", 2);
__decorateClass([
  OneToMany3(() => UserWallet, (userWallet) => userWallet.user, { cascade: true, eager: true })
], User.prototype, "wallets", 2);
User = __decorateClass([
  Entity5("users")
], User);

// src/shared/data/models/transaction/index.ts
import {
  Entity as Entity6,
  PrimaryGeneratedColumn as PrimaryGeneratedColumn6,
  Column as Column6,
  ManyToOne as ManyToOne5,
  CreateDateColumn as CreateDateColumn3,
  UpdateDateColumn as UpdateDateColumn3,
  Index as Index3
} from "typeorm";
var UserInfo = class {
  email;
  address;
  user_wallet;
  action;
};
__decorateClass([
  Column6({ type: "varchar", length: 255 })
], UserInfo.prototype, "email", 2);
__decorateClass([
  Column6({ type: "varchar", length: 255 })
], UserInfo.prototype, "address", 2);
__decorateClass([
  ManyToOne5(() => UserWallet, { eager: false, nullable: true, onDelete: "SET NULL" })
], UserInfo.prototype, "user_wallet", 2);
__decorateClass([
  Column6({ type: "enum", enum: ["sender", "receiver"], default: "sender" })
], UserInfo.prototype, "action", 2);
var AccountInfo = class {
  wallet_address;
  account_id;
  merchant_id;
  account_wallet;
  action;
};
__decorateClass([
  Column6({ type: "varchar", length: 255 })
], AccountInfo.prototype, "wallet_address", 2);
__decorateClass([
  Column6({ type: "varchar", length: 255 })
], AccountInfo.prototype, "account_id", 2);
__decorateClass([
  Column6({ type: "varchar", length: 255 })
], AccountInfo.prototype, "merchant_id", 2);
__decorateClass([
  ManyToOne5(() => AccountWallet, { eager: false, nullable: true, onDelete: "SET NULL" })
], AccountInfo.prototype, "account_wallet", 2);
__decorateClass([
  Column6({ type: "enum", enum: ["sender", "receiver"], default: "sender" })
], AccountInfo.prototype, "action", 2);
var Transaction = class {
  id;
  user;
  account;
  blockchain;
  origin;
  package;
  errors;
  timeout;
  status;
  process_status;
  type;
  description;
  metadata;
  created_at;
  completed_at;
  updated_at;
  get toGeneralResponse() {
    return {
      id: this.id,
      origin: this.origin,
      process_status: this.process_status,
      user: {
        email: this.user.email,
        address: this.user.address,
        user_wallet: this.user?.user_wallet?.toGeneralResponse,
        action: this.user.action
      },
      account: {
        wallet_address: this.account?.wallet_address,
        account_wallet: this.account?.account_wallet?.toGeneralResponse,
        action: this.account.action
      },
      type: this.type,
      blockchain: this.blockchain,
      timeout: this.timeout,
      package: this.package,
      status: this.status,
      completed_at: this.completed_at,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
  get toSecureResponse() {
    return {
      id: this.id,
      origin: this.origin,
      process_status: this.process_status,
      user: {
        email: this.user.email,
        address: this.user.address,
        user_wallet: this.user.user_wallet?.toSecureResponse,
        action: this.user.action
      },
      account: {
        wallet_address: this.account?.wallet_address,
        account_wallet: this.account?.account_wallet?.toResponse,
        action: this.account.action
      },
      type: this.type,
      errors: this.errors,
      timeout: this.timeout,
      blockchain: this.blockchain,
      package: this.package,
      status: this.status,
      completed_at: this.completed_at,
      updated_at: this.updated_at,
      created_at: this.created_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn6("uuid")
], Transaction.prototype, "id", 2);
__decorateClass([
  Column6(() => UserInfo, { prefix: "user_" })
], Transaction.prototype, "user", 2);
__decorateClass([
  Column6(() => AccountInfo, { prefix: "account_" })
], Transaction.prototype, "account", 2);
__decorateClass([
  Column6({ type: "enum", enum: ["Ton", "BSC"] })
], Transaction.prototype, "blockchain", 2);
__decorateClass([
  Column6({ type: "enum", enum: ["payout", "payment"], default: "payment" })
], Transaction.prototype, "origin", 2);
__decorateClass([
  Column6("jsonb", { nullable: false, default: () => `'[]'` })
], Transaction.prototype, "package", 2);
__decorateClass([
  Column6("text", { array: true, default: [] })
], Transaction.prototype, "errors", 2);
__decorateClass([
  Column6({ type: "int", default: 0 })
], Transaction.prototype, "timeout", 2);
__decorateClass([
  Column6({
    type: "enum",
    enum: ["success", "pending", "failed"],
    default: "pending"
  })
], Transaction.prototype, "status", 2);
__decorateClass([
  Column6({
    type: "enum",
    enum: ["pending", "processed", "completed", "failed"],
    default: "pending"
  })
], Transaction.prototype, "process_status", 2);
__decorateClass([
  Column6({
    type: "enum",
    enum: ["sandbox", "production"],
    default: "production"
  })
], Transaction.prototype, "type", 2);
__decorateClass([
  Column6({ type: "text", nullable: true })
], Transaction.prototype, "description", 2);
__decorateClass([
  Column6("jsonb", { nullable: true })
], Transaction.prototype, "metadata", 2);
__decorateClass([
  CreateDateColumn3({ type: "timestamp with time zone" })
], Transaction.prototype, "created_at", 2);
__decorateClass([
  CreateDateColumn3({ type: "timestamp with time zone", nullable: true })
], Transaction.prototype, "completed_at", 2);
__decorateClass([
  UpdateDateColumn3({ type: "timestamp with time zone" })
], Transaction.prototype, "updated_at", 2);
Transaction = __decorateClass([
  Entity6("transactions"),
  Index3("status_idx", ["status"])
], Transaction);

// src/shared/data/models/admin/index.ts
import { Entity as Entity7, PrimaryGeneratedColumn as PrimaryGeneratedColumn7, Column as Column7 } from "typeorm";
var Admin = class {
  id;
  name;
  email_address;
  get toResponse() {
    return {
      id: this.id,
      name: this.name,
      email_address: this.email_address
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn7("uuid")
], Admin.prototype, "id", 2);
__decorateClass([
  Column7({ type: "varchar", length: 255 })
], Admin.prototype, "name", 2);
__decorateClass([
  Column7({ type: "varchar", length: 255, unique: true })
], Admin.prototype, "email_address", 2);
Admin = __decorateClass([
  Entity7("admins")
], Admin);

// src/shared/data/models/payout/index.ts
import {
  Entity as Entity8,
  Column as Column8,
  PrimaryGeneratedColumn as PrimaryGeneratedColumn8,
  ManyToOne as ManyToOne6,
  JoinColumn as JoinColumn5
} from "typeorm";
var PayoutUser = class {
  id;
  user_id;
  user;
  email;
  account;
  account_id;
  type;
  status;
  destination_address;
  hash;
  blockchain;
  created_at;
  updated_at;
  get toResponse() {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      blockchain: this.blockchain,
      destination_address: this.destination_address,
      hash: this.hash,
      user_id: this.user_id,
      status: this.status,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn8("uuid")
], PayoutUser.prototype, "id", 2);
__decorateClass([
  Column8("uuid", { name: "user_id" })
], PayoutUser.prototype, "user_id", 2);
__decorateClass([
  ManyToOne6(() => User, (user) => user.wallets, { nullable: true }),
  JoinColumn5({ name: "user_id" })
], PayoutUser.prototype, "user", 2);
__decorateClass([
  Column8({ type: "varchar", length: 255 })
], PayoutUser.prototype, "email", 2);
__decorateClass([
  ManyToOne6(() => PaymentAccount, (account) => account.id),
  JoinColumn5({ name: "account_id" })
], PayoutUser.prototype, "account", 2);
__decorateClass([
  Column8("uuid", { name: "account_id" })
], PayoutUser.prototype, "account_id", 2);
__decorateClass([
  Column8({
    type: "enum",
    enum: ["sandbox", "production"],
    default: "production"
  })
], PayoutUser.prototype, "type", 2);
__decorateClass([
  Column8({
    type: "enum",
    enum: ["pending", "cancelled", "completed"],
    default: "pending"
  })
], PayoutUser.prototype, "status", 2);
__decorateClass([
  Column8({ type: "varchar", length: 255 })
], PayoutUser.prototype, "destination_address", 2);
__decorateClass([
  Column8({ type: "text" })
], PayoutUser.prototype, "hash", 2);
__decorateClass([
  Column8({ type: "enum", enum: ["Ton", "BSC"], default: "BSC" })
], PayoutUser.prototype, "blockchain", 2);
__decorateClass([
  Column8({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], PayoutUser.prototype, "created_at", 2);
__decorateClass([
  Column8({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], PayoutUser.prototype, "updated_at", 2);
PayoutUser = __decorateClass([
  Entity8("payout_users")
], PayoutUser);

// src/shared/data/models/analytics/admin/index.ts
import { Entity as Entity9, PrimaryGeneratedColumn as PrimaryGeneratedColumn9, Column as Column9, CreateDateColumn as CreateDateColumn4, UpdateDateColumn as UpdateDateColumn4, Index as Index4 } from "typeorm";
var AdminAnalytics = class {
  id;
  merchant_metrics;
  account_metrics;
  transaction_metrics;
  subscriber_metrics;
  sdk_metrics;
  system_metrics;
  period_type;
  period_start;
  period_end;
  created_at;
  updated_at;
  get toResponse() {
    return {
      merchant_metrics: this.merchant_metrics,
      account_metrics: this.account_metrics,
      transaction_metrics: this.transaction_metrics,
      subscriber_metrics: this.subscriber_metrics,
      sdk_metrics: this.sdk_metrics,
      system_metrics: this.system_metrics,
      period_type: this.period_type,
      period_start: this.period_start,
      period_end: this.period_end,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};
__decorateClass([
  PrimaryGeneratedColumn9("uuid")
], AdminAnalytics.prototype, "id", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "merchant_metrics", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "account_metrics", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "transaction_metrics", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "subscriber_metrics", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "sdk_metrics", 2);
__decorateClass([
  Column9({ type: "jsonb" })
], AdminAnalytics.prototype, "system_metrics", 2);
__decorateClass([
  Column9({
    type: "enum",
    enum: ["hourly", "daily", "weekly", "monthly", "yearly", "all-time"],
    default: "daily"
  })
], AdminAnalytics.prototype, "period_type", 2);
__decorateClass([
  Column9({ type: "timestamp" })
], AdminAnalytics.prototype, "period_start", 2);
__decorateClass([
  Column9({ type: "timestamp" })
], AdminAnalytics.prototype, "period_end", 2);
__decorateClass([
  CreateDateColumn4({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], AdminAnalytics.prototype, "created_at", 2);
__decorateClass([
  UpdateDateColumn4({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], AdminAnalytics.prototype, "updated_at", 2);
AdminAnalytics = __decorateClass([
  Entity9("admin_analytics"),
  Index4("period_type_date_idx", ["period_type", "period_start", "period_end"])
], AdminAnalytics);

// src/shared/data/models/index.ts
var Models = class _Models {
  constructor(dataSource, admin, merchant, user, user_wallet, accounts, payouts, account_wallets, wallets, transactions, analytics) {
    this.dataSource = dataSource;
    this.admin = admin;
    this.merchant = merchant;
    this.user = user;
    this.user_wallet = user_wallet;
    this.accounts = accounts;
    this.payouts = payouts;
    this.account_wallets = account_wallets;
    this.wallets = wallets;
    this.transactions = transactions;
    this.analytics = analytics;
  }
  static get getEntities() {
    return [
      AccountWallet,
      Admin,
      MerchantAnalytics,
      AdminAnalytics,
      ApiInfo,
      Merchant,
      PaymentAccount,
      PayoutUser,
      User,
      UserWallet,
      Transaction,
      Wallet
    ];
  }
  static async new(dataSource) {
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }
    return new _Models(
      dataSource,
      dataSource.getAppRepository(Admin),
      dataSource.getAppRepository(Merchant),
      dataSource.getAppRepository(User),
      dataSource.getAppRepository(UserWallet),
      dataSource.getAppRepository(PaymentAccount),
      dataSource.getAppRepository(PayoutUser),
      dataSource.getAppRepository(AccountWallet),
      dataSource.getAppRepository(Wallet),
      dataSource.getAppRepository(Transaction),
      {
        admin: dataSource.getAdminAnalyticsRepository(AdminAnalytics),
        merchant: dataSource.getMerchantAnalyticsRepository(MerchantAnalytics)
      }
    );
  }
};

// src/shared/data/repositories/crypto/block/_ton.ts
var TonCryptoWallet = class {
  constructor(wallet) {
    this.wallet = wallet;
    this.wallet = wallet;
  }
  static async getUSDTBalance(address) {
    throw new Error("Method not implemented.");
  }
  static async getBalance(address) {
    throw new Error("Method not implemented.");
  }
  static async generateWallet(wallet_details, type = "forwarder") {
    try {
      if (typeof wallet_details !== "string") {
        return type === "forwarder" ? new TonForwarderCryptoWallet(wallet_details) : new TonPayoutCryptoWallet(wallet_details);
      }
      throw new Error("Method not implemented.");
    } catch (error) {
      console.error("Error generating wallet: ", error);
      throw new Error("Failed to generate wallet");
    }
  }
  async getUSDTBalance() {
    throw new Error("Method not implemented.");
  }
  get getModel() {
    return { ...this.wallet };
  }
  static get isActive() {
    return (async () => {
      return false;
    })();
  }
};
var TonForwarderCryptoWallet = class extends TonCryptoWallet {
  constructor(wallet) {
    super(wallet);
  }
  confirmPayment = (tx) => {
    throw new Error("Method not implemented.");
  };
  createPayment = (minimumAmount, timeout) => {
    throw new Error("Method not implemented.");
  };
  rescueToken = (token, tx) => {
    throw new Error("Method not implemented.");
  };
  processPayment = (transactionId) => {
    throw new Error("Method not implemented.");
  };
  verifyTransaction = () => {
    throw new Error("Method not implemented.");
  };
  canProcessPayment = () => {
    throw new Error("Method not implemented.");
  };
  getActiveTransaction = () => {
    throw new Error("Method not implemented.");
  };
};
var TonPayoutCryptoWallet = class extends TonCryptoWallet {
  constructor(wallet) {
    super(wallet);
  }
  async addRecipient() {
    throw new Error("Method not implemented.");
  }
  removeRecipient() {
    throw new Error("Method not implemented.");
  }
  addPayoutRequest() {
    throw new Error("Method not implemented.");
  }
};

// src/shared/data/repositories/crypto/block/_bsc.ts
import { ethers as ethers2 } from "ethers";

// src/shared/data/repositories/crypto/artifacts/bsc.config.ts
import { ethers } from "ethers";

// src/shared/utils/helpers/helper.ts
import { validationResult } from "express-validator";
import dotenv from "dotenv";
var loadConfig = () => {
  dotenv.config();
};
var withTimeout = (promise, ms) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Confirmation timeout"));
    }, ms);
    promise.then(resolve).catch(reject).finally(() => clearTimeout(timeout));
  });
};

// src/shared/data/repositories/crypto/artifacts/config/bsc_local.forwarder.ts
var BSC_LOCAL_FORWARD_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_merchant",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_developer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_feePercentage",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InsufficientAmount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidFeePercentage",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTokenAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoActiveTransaction",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoBNBToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToForward",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyDeveloper",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransactionExpired",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BNBRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "merchant",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "developer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "name": "Forwarded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      }
    ],
    "name": "PaymentCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "payer",
        "type": "address"
      }
    ],
    "name": "PaymentReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TransactionCompleted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "developer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feePercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "forward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "merchant",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transactionCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentActiveTransactionId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_timeout",
        "type": "uint256"
      }
    ],
    "name": "createPayment",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "processPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "verifyTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canProcessPayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "canProcess",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "currentBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumRequired",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getActiveTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
var BSC_LOCAL_FORWARD_CONTRACT_BYTE_CODE = "0x6101006040523480156200001257600080fd5b50604051620013e5380380620013e58339818101604052810190620000389190620002ec565b6001600081905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620000a85750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80620000e05750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b1562000118576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606481111562000154576040517f721dbfea00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508060e08181525050505050506200035e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002348262000207565b9050919050565b6000620002488262000227565b9050919050565b6200025a816200023b565b81146200026657600080fd5b50565b6000815190506200027a816200024f565b92915050565b6200028b8162000227565b81146200029757600080fd5b50565b600081519050620002ab8162000280565b92915050565b6000819050919050565b620002c681620002b1565b8114620002d257600080fd5b50565b600081519050620002e681620002bb565b92915050565b6000806000806080858703121562000309576200030862000202565b5b6000620003198782880162000269565b94505060206200032c878288016200029a565b93505060406200033f878288016200029a565b92505060606200035287828801620002d5565b91505092959194509250565b60805160a05160c05160e051610ff2620003f36000396000818161061d01528181610668015261083d0152600081816101d6015281816103b8015281816106b0015281816106dc015281816108f3015261095b01526000818161068c01528181610888015261099201526000818161057f01528181610763015281816108aa015281816109150152610a0f0152610ff26000f3fe60806040526004361061007f5760003560e01c8063a5ff76511161004e578063a5ff765114610134578063ca4b208b1461015f578063d264e05e1461018a578063fc0c546a146101a157610086565b80635431c94e1461008b5780635e64f769146100b45780637c6bc9be146100dd578063a001ecdd1461010957610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610c43565b6101cc565b005b3480156100c057600080fd5b506100db60048036038101906100d69190610cc1565b6103ae565b005b3480156100e957600080fd5b506100f2610578565b604051610100929190610d07565b60405180910390f35b34801561011557600080fd5b5061011e610666565b60405161012b9190610d30565b60405180910390f35b34801561014057600080fd5b5061014961068a565b6040516101569190610d5a565b60405180910390f35b34801561016b57600080fd5b506101746106ae565b6040516101819190610d5a565b60405180910390f35b34801561019657600080fd5b5061019f6106d2565b005b3480156101ad57600080fd5b506101b6610a0d565b6040516101c39190610dd4565b60405180910390f35b6101d4610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610259576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102949190610d5a565b602060405180830381865afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190610e1b565b905060008103610311576040517f62f3ba9700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033c82828573ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f77023e19c7343ad491fd706c36335ca0e738340a91f29b1fd81e2673d44896c4836040516103999190610d30565b60405180910390a3506103aa610af6565b5050565b6103b6610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043b576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60004790506000810361047a576040517fbd473a6100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516104a090610e79565b60006040518083038185875af1925050503d80600081146104dd576040519150601f19603f3d011682016040523d82523d6000602084013e6104e2565b606091505b505090508061051d576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc07fe7feb7058dad0753db9932151a3c26ff6cbe43e064107778cf55fc21c66c836040516105639190610d30565b60405180910390a25050610575610af6565b50565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105d69190610d5a565b602060405180830381865afa1580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106179190610e1b565b905060647f0000000000000000000000000000000000000000000000000000000000000000826106479190610ebd565b6106519190610f2e565b9150818161065f9190610f5f565b9250509091565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6106da610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461075f576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107ba9190610d5a565b602060405180830381865afa1580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190610e1b565b905060008103610837576040517f6ca733da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060647f0000000000000000000000000000000000000000000000000000000000000000836108679190610ebd565b6108719190610f2e565b9050600081836108819190610f5f565b90506108ee7f0000000000000000000000000000000000000000000000000000000000000000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b6109597f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f35a94547fa72a5dad027c1dd9c2684df19216418908bd0cb2826d81f1de0548f83856040516109f8929190610d07565b60405180910390a3505050610a0b610af6565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600260005403610a6d576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b610af1838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401610aaa929190610f93565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b00565b505050565b6001600081905550565b600080602060008451602086016000885af180610b23576040513d6000823e3d81fd5b3d925060005191505060008214610b3e576001811415610b5a565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b15610b9c57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610b939190610d5a565b60405180910390fd5b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bd282610ba7565b9050919050565b6000610be482610bc7565b9050919050565b610bf481610bd9565b8114610bff57600080fd5b50565b600081359050610c1181610beb565b92915050565b610c2081610bc7565b8114610c2b57600080fd5b50565b600081359050610c3d81610c17565b92915050565b60008060408385031215610c5a57610c59610ba2565b5b6000610c6885828601610c02565b9250506020610c7985828601610c2e565b9150509250929050565b6000610c8e82610ba7565b9050919050565b610c9e81610c83565b8114610ca957600080fd5b50565b600081359050610cbb81610c95565b92915050565b600060208284031215610cd757610cd6610ba2565b5b6000610ce584828501610cac565b91505092915050565b6000819050919050565b610d0181610cee565b82525050565b6000604082019050610d1c6000830185610cf8565b610d296020830184610cf8565b9392505050565b6000602082019050610d456000830184610cf8565b92915050565b610d5481610bc7565b82525050565b6000602082019050610d6f6000830184610d4b565b92915050565b6000819050919050565b6000610d9a610d95610d9084610ba7565b610d75565b610ba7565b9050919050565b6000610dac82610d7f565b9050919050565b6000610dbe82610da1565b9050919050565b610dce81610db3565b82525050565b6000602082019050610de96000830184610dc5565b92915050565b610df881610cee565b8114610e0357600080fd5b50565b600081519050610e1581610def565b92915050565b600060208284031215610e3157610e30610ba2565b5b6000610e3f84828501610e06565b91505092915050565b600081905092915050565b50565b6000610e63600083610e48565b9150610e6e82610e53565b600082019050919050565b6000610e8482610e56565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ec882610cee565b9150610ed383610cee565b9250828202610ee181610cee565b91508282048414831517610ef857610ef7610e8e565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f3982610cee565b9150610f4483610cee565b925082610f5457610f53610eff565b5b828204905092915050565b6000610f6a82610cee565b9150610f7583610cee565b9250828203905081811115610f8d57610f8c610e8e565b5b92915050565b6000604082019050610fa86000830185610d4b565b610fb56020830184610cf8565b939250505056fea2646970667358221220c7b5a4bcde69a1a812ba33d106351535170badfa16bb72ca33dd484e05047c4864736f6c63430008140033";

// src/shared/data/repositories/crypto/artifacts/config/bsc_prod.forwarder.ts
var BSC_PROD_FORWARD_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_merchant",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_developer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_feePercentage",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InsufficientAmount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidFeePercentage",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTokenAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoActiveTransaction",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoBNBToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToForward",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyDeveloper",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransactionExpired",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BNBRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "merchant",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "developer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "name": "Forwarded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      }
    ],
    "name": "PaymentCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "payer",
        "type": "address"
      }
    ],
    "name": "PaymentReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TransactionCompleted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "developer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feePercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "forward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "merchant",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transactionCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentActiveTransactionId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_timeout",
        "type": "uint256"
      }
    ],
    "name": "createPayment",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "processPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "verifyTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canProcessPayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "canProcess",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "currentBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumRequired",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getActiveTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
var BSC_PROD_FORWARD_CONTRACT_BYTE_CODE = "0x6101006040523480156200001257600080fd5b50604051620013e5380380620013e58339818101604052810190620000389190620002ec565b6001600081905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620000a85750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80620000e05750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b1562000118576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606481111562000154576040517f721dbfea00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508060e08181525050505050506200035e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002348262000207565b9050919050565b6000620002488262000227565b9050919050565b6200025a816200023b565b81146200026657600080fd5b50565b6000815190506200027a816200024f565b92915050565b6200028b8162000227565b81146200029757600080fd5b50565b600081519050620002ab8162000280565b92915050565b6000819050919050565b620002c681620002b1565b8114620002d257600080fd5b50565b600081519050620002e681620002bb565b92915050565b6000806000806080858703121562000309576200030862000202565b5b6000620003198782880162000269565b94505060206200032c878288016200029a565b93505060406200033f878288016200029a565b92505060606200035287828801620002d5565b91505092959194509250565b60805160a05160c05160e051610ff2620003f36000396000818161061d01528181610668015261083d0152600081816101d6015281816103b8015281816106b0015281816106dc015281816108f3015261095b01526000818161068c01528181610888015261099201526000818161057f01528181610763015281816108aa015281816109150152610a0f0152610ff26000f3fe60806040526004361061007f5760003560e01c8063a5ff76511161004e578063a5ff765114610134578063ca4b208b1461015f578063d264e05e1461018a578063fc0c546a146101a157610086565b80635431c94e1461008b5780635e64f769146100b45780637c6bc9be146100dd578063a001ecdd1461010957610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610c43565b6101cc565b005b3480156100c057600080fd5b506100db60048036038101906100d69190610cc1565b6103ae565b005b3480156100e957600080fd5b506100f2610578565b604051610100929190610d07565b60405180910390f35b34801561011557600080fd5b5061011e610666565b60405161012b9190610d30565b60405180910390f35b34801561014057600080fd5b5061014961068a565b6040516101569190610d5a565b60405180910390f35b34801561016b57600080fd5b506101746106ae565b6040516101819190610d5a565b60405180910390f35b34801561019657600080fd5b5061019f6106d2565b005b3480156101ad57600080fd5b506101b6610a0d565b6040516101c39190610dd4565b60405180910390f35b6101d4610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610259576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102949190610d5a565b602060405180830381865afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190610e1b565b905060008103610311576040517f62f3ba9700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033c82828573ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f77023e19c7343ad491fd706c36335ca0e738340a91f29b1fd81e2673d44896c4836040516103999190610d30565b60405180910390a3506103aa610af6565b5050565b6103b6610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043b576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60004790506000810361047a576040517fbd473a6100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516104a090610e79565b60006040518083038185875af1925050503d80600081146104dd576040519150601f19603f3d011682016040523d82523d6000602084013e6104e2565b606091505b505090508061051d576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc07fe7feb7058dad0753db9932151a3c26ff6cbe43e064107778cf55fc21c66c836040516105639190610d30565b60405180910390a25050610575610af6565b50565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105d69190610d5a565b602060405180830381865afa1580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106179190610e1b565b905060647f0000000000000000000000000000000000000000000000000000000000000000826106479190610ebd565b6106519190610f2e565b9150818161065f9190610f5f565b9250509091565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6106da610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461075f576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107ba9190610d5a565b602060405180830381865afa1580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190610e1b565b905060008103610837576040517f6ca733da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060647f0000000000000000000000000000000000000000000000000000000000000000836108679190610ebd565b6108719190610f2e565b9050600081836108819190610f5f565b90506108ee7f0000000000000000000000000000000000000000000000000000000000000000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b6109597f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f35a94547fa72a5dad027c1dd9c2684df19216418908bd0cb2826d81f1de0548f83856040516109f8929190610d07565b60405180910390a3505050610a0b610af6565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600260005403610a6d576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b610af1838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401610aaa929190610f93565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b00565b505050565b6001600081905550565b600080602060008451602086016000885af180610b23576040513d6000823e3d81fd5b3d925060005191505060008214610b3e576001811415610b5a565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b15610b9c57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610b939190610d5a565b60405180910390fd5b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bd282610ba7565b9050919050565b6000610be482610bc7565b9050919050565b610bf481610bd9565b8114610bff57600080fd5b50565b600081359050610c1181610beb565b92915050565b610c2081610bc7565b8114610c2b57600080fd5b50565b600081359050610c3d81610c17565b92915050565b60008060408385031215610c5a57610c59610ba2565b5b6000610c6885828601610c02565b9250506020610c7985828601610c2e565b9150509250929050565b6000610c8e82610ba7565b9050919050565b610c9e81610c83565b8114610ca957600080fd5b50565b600081359050610cbb81610c95565b92915050565b600060208284031215610cd757610cd6610ba2565b5b6000610ce584828501610cac565b91505092915050565b6000819050919050565b610d0181610cee565b82525050565b6000604082019050610d1c6000830185610cf8565b610d296020830184610cf8565b9392505050565b6000602082019050610d456000830184610cf8565b92915050565b610d5481610bc7565b82525050565b6000602082019050610d6f6000830184610d4b565b92915050565b6000819050919050565b6000610d9a610d95610d9084610ba7565b610d75565b610ba7565b9050919050565b6000610dac82610d7f565b9050919050565b6000610dbe82610da1565b9050919050565b610dce81610db3565b82525050565b6000602082019050610de96000830184610dc5565b92915050565b610df881610cee565b8114610e0357600080fd5b50565b600081519050610e1581610def565b92915050565b600060208284031215610e3157610e30610ba2565b5b6000610e3f84828501610e06565b91505092915050565b600081905092915050565b50565b6000610e63600083610e48565b9150610e6e82610e53565b600082019050919050565b6000610e8482610e56565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ec882610cee565b9150610ed383610cee565b9250828202610ee181610cee565b91508282048414831517610ef857610ef7610e8e565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f3982610cee565b9150610f4483610cee565b925082610f5457610f53610eff565b5b828204905092915050565b6000610f6a82610cee565b9150610f7583610cee565b9250828203905081811115610f8d57610f8c610e8e565b5b92915050565b6000604082019050610fa86000830185610d4b565b610fb56020830184610cf8565b939250505056fea2646970667358221220c7b5a4bcde69a1a812ba33d106351535170badfa16bb72ca33dd484e05047c4864736f6c63430008140033";

// src/shared/data/repositories/crypto/artifacts/config/bsc_prod.payout.ts
var PAYOUT_PROD_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_requiredApprovals",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "neededRole",
        "type": "bytes32"
      }
    ],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ECDSAInvalidSignature",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "length",
        "type": "uint256"
      }
    ],
    "name": "ECDSAInvalidSignatureLength",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "ECDSAInvalidSignatureS",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EnforcedPause",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExpectedPause",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidShortString",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "str",
        "type": "string"
      }
    ],
    "name": "StringTooLong",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "EIP712DomainChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "RecipientAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "RecipientRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "RequestCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "RequestCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RequestExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldReq",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newReq",
        "type": "uint256"
      }
    ],
    "name": "RequiredApprovalsChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      }
    ],
    "name": "ValidatorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      }
    ],
    "name": "ValidatorRemoved",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VALIDATOR_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "addRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addValidator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "cancelRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "createPayoutRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "fields",
        "type": "bytes1"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "verifyingContract",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "uint256[]",
        "name": "extensions",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "emergencyWithdrawERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "emergencyWithdrawETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "bytes[]",
        "name": "signatures",
        "type": "bytes[]"
      }
    ],
    "name": "executePayoutWithSignatures",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "isExecuted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRecipient",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "removeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "removeValidator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "requests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requiredApprovals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_requiredApprovals",
        "type": "uint256"
      }
    ],
    "name": "setRequiredApprovals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "validatorCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
var PAYOUT_PROD_CONTRACT_BYTE_CODE = "0x6101606040523480156200001257600080fd5b5060405162004d2d38038062004d2d8339818101604052810190620000389190620005cd565b8282620000506001836200015e60201b90919060201c565b61012081815250506200006e6002826200015e60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620000ad620001b660201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505060016003819055506000811162000138576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012f90620006c8565b60405180910390fd5b6200014d6000801b336200021360201b60201c565b508060058190555050505062000be7565b600060208351101562000184576200017c836200031660201b60201c565b9050620001b0565b8262000196836200038360201b60201c565b6000019081620001a791906200092b565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620001f895949392919062000a83565b60405160208183030381529060405280519060200120905090565b60006200022783836200038d60201b60201c565b6200030b57600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002a7620003f760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000310565b600090505b92915050565b600080829050601f815111156200036657826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016200035d919062000b21565b60405180910390fd5b805181620003749062000b77565b60001c1760001b915050919050565b6000819050919050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000468826200041d565b810181811067ffffffffffffffff821117156200048a57620004896200042e565b5b80604052505050565b60006200049f620003ff565b9050620004ad82826200045d565b919050565b600067ffffffffffffffff821115620004d057620004cf6200042e565b5b620004db826200041d565b9050602081019050919050565b60005b8381101562000508578082015181840152602081019050620004eb565b60008484015250505050565b60006200052b6200052584620004b2565b62000493565b9050828152602081018484840111156200054a576200054962000418565b5b62000557848285620004e8565b509392505050565b600082601f83011262000577576200057662000413565b5b81516200058984826020860162000514565b91505092915050565b6000819050919050565b620005a78162000592565b8114620005b357600080fd5b50565b600081519050620005c7816200059c565b92915050565b600080600060608486031215620005e957620005e862000409565b5b600084015167ffffffffffffffff8111156200060a57620006096200040e565b5b62000618868287016200055f565b935050602084015167ffffffffffffffff8111156200063c576200063b6200040e565b5b6200064a868287016200055f565b92505060406200065d86828701620005b6565b9150509250925092565b600082825260208201905092915050565b7f7265717569726564417070726f76616c733e3000000000000000000000000000600082015250565b6000620006b060138362000667565b9150620006bd8262000678565b602082019050919050565b60006020820190508181036000830152620006e381620006a1565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200073d57607f821691505b602082108103620007535762000752620006f5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200077e565b620007c986836200077e565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200080c62000806620008008462000592565b620007e1565b62000592565b9050919050565b6000819050919050565b6200082883620007eb565b62000840620008378262000813565b8484546200078b565b825550505050565b600090565b6200085762000848565b620008648184846200081d565b505050565b5b818110156200088c57620008806000826200084d565b6001810190506200086a565b5050565b601f821115620008db57620008a58162000759565b620008b0846200076e565b81016020851015620008c0578190505b620008d8620008cf856200076e565b83018262000869565b50505b505050565b600082821c905092915050565b60006200090060001984600802620008e0565b1980831691505092915050565b60006200091b8383620008ed565b9150826002028217905092915050565b6200093682620006ea565b67ffffffffffffffff8111156200095257620009516200042e565b5b6200095e825462000724565b6200096b82828562000890565b600060209050601f831160018114620009a357600084156200098e578287015190505b6200099a85826200090d565b86555062000a0a565b601f198416620009b38662000759565b60005b82811015620009dd57848901518255600182019150602085019450602081019050620009b6565b86831015620009fd5784890151620009f9601f891682620008ed565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b62000a278162000a12565b82525050565b62000a388162000592565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000a6b8262000a3e565b9050919050565b62000a7d8162000a5e565b82525050565b600060a08201905062000a9a600083018862000a1c565b62000aa9602083018762000a1c565b62000ab8604083018662000a1c565b62000ac7606083018562000a2d565b62000ad6608083018462000a72565b9695505050505050565b600062000aed82620006ea565b62000af9818562000667565b935062000b0b818560208601620004e8565b62000b16816200041d565b840191505092915050565b6000602082019050818103600083015262000b3d818462000ae0565b905092915050565b600081519050919050565b6000819050602082019050919050565b600062000b6e825162000a12565b80915050919050565b600062000b848262000b45565b8262000b908462000b50565b905062000b9d8162000b60565b9250602082101562000be05762000bdb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026200077e565b831692505b5050919050565b60805160a05160c05160e0516101005161012051610140516140eb62000c426000396000612400015260006123c5015260006129dd015260006129bc0152600061266f015260006126c5015260006126ee01526140eb6000f3fe6080604052600436106101bb5760003560e01c80635c975abb116100ec57806399c1aadc1161008a578063d547741f11610064578063d547741f1461060c578063d79e856714610635578063d8bbefe91461065e578063fae8ace114610687576101c2565b806399c1aadc1461058b578063a217fddf146105b6578063c49baebe146105e1576101c2565b80638456cb59116100c65780638456cb59146104c957806384b0196e146104e05780638c5143ea1461051157806391d148541461054e576101c2565b80635c975abb1461041f57806376a6bf521461044a57806381d12c5814610487576101c2565b80633015394c1161015957806340a141ff1161013357806340a141ff146103795780634d238c8e146103a257806355b8fb81146103cb5780635badbe4c146103f4576101c2565b80633015394c1461031057806336568abe146103395780633f4ba83a14610362576101c2565b80631c3101d3116101955780631c3101d314610258578063222a242e14610281578063248a9ca3146102aa5780632f2ff15d146102e7576101c2565b806301ffc9a7146101c75780630f43a6771461020457806312a291981461022f576101c2565b366101c257005b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e99190612bd3565b6106c4565b6040516101fb9190612c1b565b60405180910390f35b34801561021057600080fd5b5061021961073e565b6040516102269190612c4f565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612cc8565b610744565b005b34801561026457600080fd5b5061027f600480360381019061027a9190612cc8565b610873565b005b34801561028d57600080fd5b506102a860048036038101906102a39190612d21565b610a1b565b005b3480156102b657600080fd5b506102d160048036038101906102cc9190612d84565b610af6565b6040516102de9190612dc0565b60405180910390f35b3480156102f357600080fd5b5061030e60048036038101906103099190612ddb565b610b15565b005b34801561031c57600080fd5b5061033760048036038101906103329190612d21565b610b37565b005b34801561034557600080fd5b50610360600480360381019061035b9190612ddb565b610ce3565b005b34801561036e57600080fd5b50610377610d5e565b005b34801561038557600080fd5b506103a0600480360381019061039b9190612cc8565b610d76565b005b3480156103ae57600080fd5b506103c960048036038101906103c49190612cc8565b610f0f565b005b3480156103d757600080fd5b506103f260048036038101906103ed9190612e1b565b61107f565b005b34801561040057600080fd5b50610409611134565b6040516104169190612c4f565b60405180910390f35b34801561042b57600080fd5b5061043461113a565b6040516104419190612c1b565b60405180910390f35b34801561045657600080fd5b50610471600480360381019061046c9190612d21565b611151565b60405161047e9190612c1b565b60405180910390f35b34801561049357600080fd5b506104ae60048036038101906104a99190612d21565b61117e565b6040516104c096959493929190612e7d565b60405180910390f35b3480156104d557600080fd5b506104de611207565b005b3480156104ec57600080fd5b506104f561121f565b6040516105089796959493929190613067565b60405180910390f35b34801561051d57600080fd5b5061053860048036038101906105339190612cc8565b6112c9565b6040516105459190612c1b565b60405180910390f35b34801561055a57600080fd5b5061057560048036038101906105709190612ddb565b6112e9565b6040516105829190612c1b565b60405180910390f35b34801561059757600080fd5b506105a0611353565b6040516105ad9190612c4f565b60405180910390f35b3480156105c257600080fd5b506105cb611359565b6040516105d89190612dc0565b60405180910390f35b3480156105ed57600080fd5b506105f6611360565b6040516106039190612dc0565b60405180910390f35b34801561061857600080fd5b50610633600480360381019061062e9190612ddb565b611384565b005b34801561064157600080fd5b5061065c60048036038101906106579190613129565b6113a6565b005b34801561066a57600080fd5b50610685600480360381019061068091906131ce565b6114dc565b005b34801561069357600080fd5b506106ae60048036038101906106a9919061322e565b611c8b565b6040516106bb9190612c4f565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610737575061073682611f8d565b5b9050919050565b60075481565b6000801b61075181611ff7565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d4906132e1565b60405180910390fd5b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558173ffffffffffffffffffffffffffffffffffffffff167f8176fc5412eb5076fee7f1a264915b808c24d495c2698c189030e5200e707d2560405160405180910390a25050565b6000801b61088081611ff7565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e69061334d565b60405180910390fd5b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561097c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610973906133b9565b60405180910390fd5b6001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167f4205b1cf2b33c8147cc02b8fb0c9d3ff098218a686b0dd94b1e35d3c3968ad8c60405160405180910390a25050565b6000801b610a2881611ff7565b60008211610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290613425565b60405180910390fd5b600754821115610ab0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa790613491565b60405180910390fd5b7ffe8415ddc48736ac548277db19239174daa7df382596d5b25cfdc4c5f3729ae060055483604051610ae39291906134b1565b60405180910390a1816005819055505050565b6000806000838152602001908152602001600020600101549050919050565b610b1e82610af6565b610b2781611ff7565b610b31838361200b565b50505050565b610b3f6120fc565b60006008600083815260200190815260200160002090506000816000015403610b9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9490613526565b60405180910390fd5b8060050160009054906101000a900460ff1615610bef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be690613592565b60405180910390fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c565750610c556000801b336112e9565b5b610c95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8c906135fe565b60405180910390fd5b60018160050160006101000a81548160ff021916908315150217905550817fee243f878b7fc2f54e934ca33783d4395d42bc07612e2bd4b8e0e178639f7a2860405160405180910390a25050565b610ceb61213d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d4f576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d598282612145565b505050565b6000801b610d6b81611ff7565b610d73612237565b50565b6000801b610d8381611ff7565b610dad7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926836112e9565b610dec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de39061366a565b60405180910390fd5b610e167f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c9892683612145565b50600060075411610e5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e53906136d6565b60405180910390fd5b60076000815480929190610e6f90613725565b9190505550600754600554111580610e8957506000600754145b610ec8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebf9061379a565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167fe1434e25d6611e0db941968fdc97811c982ac1602e951637d206f5fdda9dd8f160405160405180910390a25050565b6000801b610f1c81611ff7565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f829061334d565b60405180910390fd5b610fb57f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926836112e9565b15610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec90613806565b60405180910390fd5b61101f7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c989268361200b565b506007600081548092919061103390613826565b91905055508173ffffffffffffffffffffffffffffffffffffffff167fe366c1c0452ed8eec96861e9e54141ebff23c9ec89fe27b996b45f5ec388498760405160405180910390a25050565b6000801b61108c81611ff7565b61109461229a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fa906138ba565b60405180910390fd5b61112e83838673ffffffffffffffffffffffffffffffffffffffff166122da9092919063ffffffff16565b50505050565b60065481565b6000600460009054906101000a900460ff16905090565b60006008600083815260200190815260200160002060050160009054906101000a900460ff169050919050565b60086020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b6000801b61121481611ff7565b61121c612359565b50565b6000606080600080600060606112336123bc565b61123b6123f7565b46306000801b600067ffffffffffffffff81111561125c5761125b6138da565b5b60405190808252806020026020018201604052801561128a5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60096020528060005260406000206000915054906101000a900460ff1681565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60055481565b6000801b81565b7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c9892681565b61138d82610af6565b61139681611ff7565b6113a08383612145565b50505050565b6000801b6113b381611ff7565b6113bb61229a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361142a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611421906138ba565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff16836040516114509061393a565b60006040518083038185875af1925050503d806000811461148d576040519150601f19603f3d011682016040523d82523d6000602084013e611492565b606091505b50509050806114d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cd9061399b565b60405180910390fd5b50505050565b6114e4612432565b6114ec6120fc565b6000600860008581526020019081526020016000209050600081600001540361154a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154190613526565b60405180910390fd5b8060050160009054906101000a900460ff161561159c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159390613592565b60405180910390fd5b60008160040154146115f05780600401544211156115ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e690613a07565b60405180910390fd5b5b600083839050905060055481101561163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163490613a73565b60405180910390fd5b600754811115611682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167990613adf565b60405180910390fd5b60007f7536956c1d5c6eff704e57d131431de994005c4c07b8dee8b01367daf09d380483600001548460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660030154876004015460405160200161171396959493929190613aff565b604051602081830303815290604052805190602001209050600061173682612478565b905060008367ffffffffffffffff811115611754576117536138da565b5b6040519080825280602002602001820160405280156117825781602001602082028036833780820191505090505b50905060005b848110156119e2576000611803848a8a858181106117a9576117a8613b60565b5b90506020028101906117bb9190613b9e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612492565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186b90613c4d565b60405180910390fd5b61189e7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926826112e9565b6118dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d490613cb9565b60405180910390fd5b60005b82811015611981578173ffffffffffffffffffffffffffffffffffffffff1684828151811061191257611911613b60565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603611970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196790613d25565b60405180910390fd5b8061197a90613826565b90506118e0565b508083838151811061199657611995613b60565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505050806119db90613826565b9050611788565b5060018560050160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611b79578460030154471015611a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9690613d91565b60405180910390fd5b60008560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168660030154604051611aed9061393a565b60006040518083038185875af1925050503d8060008114611b2a576040519150601f19603f3d011682016040523d82523d6000602084013e611b2f565b606091505b5050905080611b73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6a9061399b565b60405180910390fd5b50611bf1565b611bf08560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686600301548760010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166122da9092919063ffffffff16565b5b877f74d337d0c7486157753bafb2b743f64c516ce0ed91bece495911eeffe8510aa48660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168760020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168860030154604051611c7193929190613db1565b60405180910390a25050505050611c866124be565b505050565b6000611c956120fc565b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611d21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1890613e34565b60405180910390fd5b60008311611d64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d5b90613ea0565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611da75750611da66000801b336112e9565b5b611de6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ddd906135fe565b60405180910390fd5b60066000815480929190611df990613826565b91905055506040518060c0016040528060065481526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001600015158152506008600060065481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff0219169083151502179055509050506006547ffdb99dbf8b0f336e7dccb5837d02b7432de2cd413f754b23300777f8b79f7ff886868686604051611f789493929190613ec0565b60405180910390a26006549050949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6120088161200361213d565b6124c8565b50565b600061201783836112e9565b6120f157600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061208e61213d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506120f6565b600090505b92915050565b61210461113a565b1561213b576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600033905090565b600061215183836112e9565b1561222c57600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506121c961213d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612231565b600090505b92915050565b61223f61229a565b6000600460006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61228361213d565b6040516122909190613f05565b60405180910390a1565b6122a261113a565b6122d8576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b612354838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb858560405160240161230d929190613f20565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612519565b505050565b6123616120fc565b6001600460006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586123a561213d565b6040516123b29190613f05565b60405180910390a1565b60606123f260017f00000000000000000000000000000000000000000000000000000000000000006125bb90919063ffffffff16565b905090565b606061242d60027f00000000000000000000000000000000000000000000000000000000000000006125bb90919063ffffffff16565b905090565b60026003540361246e576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381905550565b600061248b61248561266b565b83612722565b9050919050565b6000806000806124a28686612763565b9250925092506124b282826127bf565b82935050505092915050565b6001600381905550565b6124d282826112e9565b6125155780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161250c929190613f49565b60405180910390fd5b5050565b600080602060008451602086016000885af18061253c576040513d6000823e3d81fd5b3d925060005191505060008214612557576001811415612573565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b156125b557836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016125ac9190613f05565b60405180910390fd5b50505050565b606060ff60001b83146125d8576125d183612923565b9050612665565b8180546125e490613fa1565b80601f016020809104026020016040519081016040528092919081815260200182805461261090613fa1565b801561265d5780601f106126325761010080835404028352916020019161265d565b820191906000526020600020905b81548152906001019060200180831161264057829003601f168201915b505050505090505b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156126e757507f000000000000000000000000000000000000000000000000000000000000000046145b15612714577f0000000000000000000000000000000000000000000000000000000000000000905061271f565b61271c612997565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b600080600060418451036127a85760008060006020870151925060408701519150606087015160001a905061279a88828585612a2d565b9550955095505050506127b8565b60006002855160001b9250925092505b9250925092565b600060038111156127d3576127d2613fd2565b5b8260038111156127e6576127e5613fd2565b5b031561291f5760016003811115612800576127ff613fd2565b5b82600381111561281357612812613fd2565b5b0361284a576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561285e5761285d613fd2565b5b82600381111561287157612870613fd2565b5b036128b6578060001c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016128ad9190612c4f565b60405180910390fd5b6003808111156128c9576128c8613fd2565b5b8260038111156128dc576128db613fd2565b5b0361291e57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016129159190612dc0565b60405180910390fd5b5b5050565b6060600061293083612b21565b90506000602067ffffffffffffffff81111561294f5761294e6138da565b5b6040519080825280601f01601f1916602001820160405280156129815781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001612a12959493929190614001565b60405160208183030381529060405280519060200120905090565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c1115612a6d576000600385925092509250612b17565b600060018888888860405160008152602001604052604051612a929493929190614070565b6020604051602081039080840390855afa158015612ab4573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612b0857600060016000801b93509350935050612b17565b8060008060001b935093509350505b9450945094915050565b60008060ff8360001c169050601f811115612b68576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612bb081612b7b565b8114612bbb57600080fd5b50565b600081359050612bcd81612ba7565b92915050565b600060208284031215612be957612be8612b71565b5b6000612bf784828501612bbe565b91505092915050565b60008115159050919050565b612c1581612c00565b82525050565b6000602082019050612c306000830184612c0c565b92915050565b6000819050919050565b612c4981612c36565b82525050565b6000602082019050612c646000830184612c40565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612c9582612c6a565b9050919050565b612ca581612c8a565b8114612cb057600080fd5b50565b600081359050612cc281612c9c565b92915050565b600060208284031215612cde57612cdd612b71565b5b6000612cec84828501612cb3565b91505092915050565b612cfe81612c36565b8114612d0957600080fd5b50565b600081359050612d1b81612cf5565b92915050565b600060208284031215612d3757612d36612b71565b5b6000612d4584828501612d0c565b91505092915050565b6000819050919050565b612d6181612d4e565b8114612d6c57600080fd5b50565b600081359050612d7e81612d58565b92915050565b600060208284031215612d9a57612d99612b71565b5b6000612da884828501612d6f565b91505092915050565b612dba81612d4e565b82525050565b6000602082019050612dd56000830184612db1565b92915050565b60008060408385031215612df257612df1612b71565b5b6000612e0085828601612d6f565b9250506020612e1185828601612cb3565b9150509250929050565b600080600060608486031215612e3457612e33612b71565b5b6000612e4286828701612cb3565b9350506020612e5386828701612cb3565b9250506040612e6486828701612d0c565b9150509250925092565b612e7781612c8a565b82525050565b600060c082019050612e926000830189612c40565b612e9f6020830188612e6e565b612eac6040830187612e6e565b612eb96060830186612c40565b612ec66080830185612c40565b612ed360a0830184612c0c565b979650505050505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b612f1381612ede565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612f53578082015181840152602081019050612f38565b60008484015250505050565b6000601f19601f8301169050919050565b6000612f7b82612f19565b612f858185612f24565b9350612f95818560208601612f35565b612f9e81612f5f565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612fde81612c36565b82525050565b6000612ff08383612fd5565b60208301905092915050565b6000602082019050919050565b600061301482612fa9565b61301e8185612fb4565b935061302983612fc5565b8060005b8381101561305a5781516130418882612fe4565b975061304c83612ffc565b92505060018101905061302d565b5085935050505092915050565b600060e08201905061307c600083018a612f0a565b818103602083015261308e8189612f70565b905081810360408301526130a28188612f70565b90506130b16060830187612c40565b6130be6080830186612e6e565b6130cb60a0830185612db1565b81810360c08301526130dd8184613009565b905098975050505050505050565b60006130f682612c6a565b9050919050565b613106816130eb565b811461311157600080fd5b50565b600081359050613123816130fd565b92915050565b600080604083850312156131405761313f612b71565b5b600061314e85828601613114565b925050602061315f85828601612d0c565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f84011261318e5761318d613169565b5b8235905067ffffffffffffffff8111156131ab576131aa61316e565b5b6020830191508360208202830111156131c7576131c6613173565b5b9250929050565b6000806000604084860312156131e7576131e6612b71565b5b60006131f586828701612d0c565b935050602084013567ffffffffffffffff81111561321657613215612b76565b5b61322286828701613178565b92509250509250925092565b6000806000806080858703121561324857613247612b71565b5b600061325687828801612cb3565b945050602061326787828801612cb3565b935050604061327887828801612d0c565b925050606061328987828801612d0c565b91505092959194509250565b7f6e6f7420726563697069656e7400000000000000000000000000000000000000600082015250565b60006132cb600d83612f24565b91506132d682613295565b602082019050919050565b600060208201905081810360008301526132fa816132be565b9050919050565b7f7a65726f00000000000000000000000000000000000000000000000000000000600082015250565b6000613337600483612f24565b915061334282613301565b602082019050919050565b600060208201905081810360008301526133668161332a565b9050919050565b7f616c726561647920726563697069656e74000000000000000000000000000000600082015250565b60006133a3601183612f24565b91506133ae8261336d565b602082019050919050565b600060208201905081810360008301526133d281613396565b9050919050565b7f6d757374206265203e3000000000000000000000000000000000000000000000600082015250565b600061340f600a83612f24565b915061341a826133d9565b602082019050919050565b6000602082019050818103600083015261343e81613402565b9050919050565b7f6d757374206265203c3d2076616c696461746f72436f756e7400000000000000600082015250565b600061347b601983612f24565b915061348682613445565b602082019050919050565b600060208201905081810360008301526134aa8161346e565b9050919050565b60006040820190506134c66000830185612c40565b6134d36020830184612c40565b9392505050565b7f6e6f742065786973740000000000000000000000000000000000000000000000600082015250565b6000613510600983612f24565b915061351b826134da565b602082019050919050565b6000602082019050818103600083015261353f81613503565b9050919050565b7f616c726561647920657865637574656400000000000000000000000000000000600082015250565b600061357c601083612f24565b915061358782613546565b602082019050919050565b600060208201905081810360008301526135ab8161356f565b9050919050565b7f6e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b60006135e8600b83612f24565b91506135f3826135b2565b602082019050919050565b60006020820190508181036000830152613617816135db565b9050919050565b7f6e6f742076616c696461746f7200000000000000000000000000000000000000600082015250565b6000613654600d83612f24565b915061365f8261361e565b602082019050919050565b6000602082019050818103600083015261368381613647565b9050919050565b7f76616c696461746f72436f756e743d3000000000000000000000000000000000600082015250565b60006136c0601083612f24565b91506136cb8261368a565b602082019050919050565b600060208201905081810360008301526136ef816136b3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061373082612c36565b915060008203613743576137426136f6565b5b600182039050919050565b7f7468726573686f6c6420746f6f20686967680000000000000000000000000000600082015250565b6000613784601283612f24565b915061378f8261374e565b602082019050919050565b600060208201905081810360008301526137b381613777565b9050919050565b7f616c72656164792076616c696461746f72000000000000000000000000000000600082015250565b60006137f0601183612f24565b91506137fb826137ba565b602082019050919050565b6000602082019050818103600083015261381f816137e3565b9050919050565b600061383182612c36565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613863576138626136f6565b5b600182019050919050565b7f746f3d3000000000000000000000000000000000000000000000000000000000600082015250565b60006138a4600483612f24565b91506138af8261386e565b602082019050919050565b600060208201905081810360008301526138d381613897565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000613924600083613909565b915061392f82613914565b600082019050919050565b600061394582613917565b9150819050919050565b7f657468207472616e73666572206661696c656400000000000000000000000000600082015250565b6000613985601383612f24565b91506139908261394f565b602082019050919050565b600060208201905081810360008301526139b481613978565b9050919050565b7f6578706972656400000000000000000000000000000000000000000000000000600082015250565b60006139f1600783612f24565b91506139fc826139bb565b602082019050919050565b60006020820190508181036000830152613a20816139e4565b9050919050565b7f6e6f7420656e6f756768207369676e6174757265730000000000000000000000600082015250565b6000613a5d601583612f24565b9150613a6882613a27565b602082019050919050565b60006020820190508181036000830152613a8c81613a50565b9050919050565b7f746f6f206d616e79207369676e61747572657300000000000000000000000000600082015250565b6000613ac9601383612f24565b9150613ad482613a93565b602082019050919050565b60006020820190508181036000830152613af881613abc565b9050919050565b600060c082019050613b146000830189612db1565b613b216020830188612c40565b613b2e6040830187612e6e565b613b3b6060830186612e6e565b613b486080830185612c40565b613b5560a0830184612c40565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112613bbb57613bba613b8f565b5b80840192508235915067ffffffffffffffff821115613bdd57613bdc613b94565b5b602083019250600182023603831315613bf957613bf8613b99565b5b509250929050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b6000613c37601183612f24565b9150613c4282613c01565b602082019050919050565b60006020820190508181036000830152613c6681613c2a565b9050919050565b7f7369676e6572206e6f742076616c696461746f72000000000000000000000000600082015250565b6000613ca3601483612f24565b9150613cae82613c6d565b602082019050919050565b60006020820190508181036000830152613cd281613c96565b9050919050565b7f6475706c6963617465207369676e617475726500000000000000000000000000600082015250565b6000613d0f601383612f24565b9150613d1a82613cd9565b602082019050919050565b60006020820190508181036000830152613d3e81613d02565b9050919050565b7f696e73756666696369656e742045544800000000000000000000000000000000600082015250565b6000613d7b601083612f24565b9150613d8682613d45565b602082019050919050565b60006020820190508181036000830152613daa81613d6e565b9050919050565b6000606082019050613dc66000830186612e6e565b613dd36020830185612e6e565b613de06040830184612c40565b949350505050565b7f726563697069656e74206e6f742077686974656c697374656400000000000000600082015250565b6000613e1e601983612f24565b9150613e2982613de8565b602082019050919050565b60006020820190508181036000830152613e4d81613e11565b9050919050565b7f616d6f756e743e30000000000000000000000000000000000000000000000000600082015250565b6000613e8a600883612f24565b9150613e9582613e54565b602082019050919050565b60006020820190508181036000830152613eb981613e7d565b9050919050565b6000608082019050613ed56000830187612e6e565b613ee26020830186612e6e565b613eef6040830185612c40565b613efc6060830184612c40565b95945050505050565b6000602082019050613f1a6000830184612e6e565b92915050565b6000604082019050613f356000830185612e6e565b613f426020830184612c40565b9392505050565b6000604082019050613f5e6000830185612e6e565b613f6b6020830184612db1565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613fb957607f821691505b602082108103613fcc57613fcb613f72565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060a0820190506140166000830188612db1565b6140236020830187612db1565b6140306040830186612db1565b61403d6060830185612c40565b61404a6080830184612e6e565b9695505050505050565b600060ff82169050919050565b61406a81614054565b82525050565b60006080820190506140856000830187612db1565b6140926020830186614061565b61409f6040830185612db1565b6140ac6060830184612db1565b9594505050505056fea2646970667358221220ca218bcf521382f54832d0c0c9533d16dc325deced5ce813837144ca11b79a3064736f6c63430008140033";

// src/shared/data/repositories/crypto/artifacts/config/bsc_local.payout.ts
var PAYOUT_LOCAL_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_requiredApprovals",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "neededRole",
        "type": "bytes32"
      }
    ],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ECDSAInvalidSignature",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "length",
        "type": "uint256"
      }
    ],
    "name": "ECDSAInvalidSignatureLength",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "ECDSAInvalidSignatureS",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EnforcedPause",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExpectedPause",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidShortString",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "str",
        "type": "string"
      }
    ],
    "name": "StringTooLong",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "EIP712DomainChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "RecipientAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "RecipientRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "RequestCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "RequestCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RequestExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldReq",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newReq",
        "type": "uint256"
      }
    ],
    "name": "RequiredApprovalsChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      }
    ],
    "name": "ValidatorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      }
    ],
    "name": "ValidatorRemoved",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VALIDATOR_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "addRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addValidator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "cancelRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "createPayoutRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "fields",
        "type": "bytes1"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "verifyingContract",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "uint256[]",
        "name": "extensions",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "emergencyWithdrawERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "emergencyWithdrawETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "bytes[]",
        "name": "signatures",
        "type": "bytes[]"
      }
    ],
    "name": "executePayoutWithSignatures",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "isExecuted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRecipient",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "removeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "removeValidator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "requests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requiredApprovals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_requiredApprovals",
        "type": "uint256"
      }
    ],
    "name": "setRequiredApprovals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "validatorCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
var PAYOUT_LOCAL_CONTRACT_BYTE_CODE = "0x6101606040523480156200001257600080fd5b5060405162004d2d38038062004d2d8339818101604052810190620000389190620005cd565b8282620000506001836200015e60201b90919060201c565b61012081815250506200006e6002826200015e60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620000ad620001b660201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505060016003819055506000811162000138576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012f90620006c8565b60405180910390fd5b6200014d6000801b336200021360201b60201c565b508060058190555050505062000be7565b600060208351101562000184576200017c836200031660201b60201c565b9050620001b0565b8262000196836200038360201b60201c565b6000019081620001a791906200092b565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620001f895949392919062000a83565b60405160208183030381529060405280519060200120905090565b60006200022783836200038d60201b60201c565b6200030b57600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002a7620003f760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000310565b600090505b92915050565b600080829050601f815111156200036657826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016200035d919062000b21565b60405180910390fd5b805181620003749062000b77565b60001c1760001b915050919050565b6000819050919050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000468826200041d565b810181811067ffffffffffffffff821117156200048a57620004896200042e565b5b80604052505050565b60006200049f620003ff565b9050620004ad82826200045d565b919050565b600067ffffffffffffffff821115620004d057620004cf6200042e565b5b620004db826200041d565b9050602081019050919050565b60005b8381101562000508578082015181840152602081019050620004eb565b60008484015250505050565b60006200052b6200052584620004b2565b62000493565b9050828152602081018484840111156200054a576200054962000418565b5b62000557848285620004e8565b509392505050565b600082601f83011262000577576200057662000413565b5b81516200058984826020860162000514565b91505092915050565b6000819050919050565b620005a78162000592565b8114620005b357600080fd5b50565b600081519050620005c7816200059c565b92915050565b600080600060608486031215620005e957620005e862000409565b5b600084015167ffffffffffffffff8111156200060a57620006096200040e565b5b62000618868287016200055f565b935050602084015167ffffffffffffffff8111156200063c576200063b6200040e565b5b6200064a868287016200055f565b92505060406200065d86828701620005b6565b9150509250925092565b600082825260208201905092915050565b7f7265717569726564417070726f76616c733e3000000000000000000000000000600082015250565b6000620006b060138362000667565b9150620006bd8262000678565b602082019050919050565b60006020820190508181036000830152620006e381620006a1565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200073d57607f821691505b602082108103620007535762000752620006f5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200077e565b620007c986836200077e565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200080c62000806620008008462000592565b620007e1565b62000592565b9050919050565b6000819050919050565b6200082883620007eb565b62000840620008378262000813565b8484546200078b565b825550505050565b600090565b6200085762000848565b620008648184846200081d565b505050565b5b818110156200088c57620008806000826200084d565b6001810190506200086a565b5050565b601f821115620008db57620008a58162000759565b620008b0846200076e565b81016020851015620008c0578190505b620008d8620008cf856200076e565b83018262000869565b50505b505050565b600082821c905092915050565b60006200090060001984600802620008e0565b1980831691505092915050565b60006200091b8383620008ed565b9150826002028217905092915050565b6200093682620006ea565b67ffffffffffffffff8111156200095257620009516200042e565b5b6200095e825462000724565b6200096b82828562000890565b600060209050601f831160018114620009a357600084156200098e578287015190505b6200099a85826200090d565b86555062000a0a565b601f198416620009b38662000759565b60005b82811015620009dd57848901518255600182019150602085019450602081019050620009b6565b86831015620009fd5784890151620009f9601f891682620008ed565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b62000a278162000a12565b82525050565b62000a388162000592565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000a6b8262000a3e565b9050919050565b62000a7d8162000a5e565b82525050565b600060a08201905062000a9a600083018862000a1c565b62000aa9602083018762000a1c565b62000ab8604083018662000a1c565b62000ac7606083018562000a2d565b62000ad6608083018462000a72565b9695505050505050565b600062000aed82620006ea565b62000af9818562000667565b935062000b0b818560208601620004e8565b62000b16816200041d565b840191505092915050565b6000602082019050818103600083015262000b3d818462000ae0565b905092915050565b600081519050919050565b6000819050602082019050919050565b600062000b6e825162000a12565b80915050919050565b600062000b848262000b45565b8262000b908462000b50565b905062000b9d8162000b60565b9250602082101562000be05762000bdb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026200077e565b831692505b5050919050565b60805160a05160c05160e0516101005161012051610140516140eb62000c426000396000612400015260006123c5015260006129dd015260006129bc0152600061266f015260006126c5015260006126ee01526140eb6000f3fe6080604052600436106101bb5760003560e01c80635c975abb116100ec57806399c1aadc1161008a578063d547741f11610064578063d547741f1461060c578063d79e856714610635578063d8bbefe91461065e578063fae8ace114610687576101c2565b806399c1aadc1461058b578063a217fddf146105b6578063c49baebe146105e1576101c2565b80638456cb59116100c65780638456cb59146104c957806384b0196e146104e05780638c5143ea1461051157806391d148541461054e576101c2565b80635c975abb1461041f57806376a6bf521461044a57806381d12c5814610487576101c2565b80633015394c1161015957806340a141ff1161013357806340a141ff146103795780634d238c8e146103a257806355b8fb81146103cb5780635badbe4c146103f4576101c2565b80633015394c1461031057806336568abe146103395780633f4ba83a14610362576101c2565b80631c3101d3116101955780631c3101d314610258578063222a242e14610281578063248a9ca3146102aa5780632f2ff15d146102e7576101c2565b806301ffc9a7146101c75780630f43a6771461020457806312a291981461022f576101c2565b366101c257005b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e99190612bd3565b6106c4565b6040516101fb9190612c1b565b60405180910390f35b34801561021057600080fd5b5061021961073e565b6040516102269190612c4f565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612cc8565b610744565b005b34801561026457600080fd5b5061027f600480360381019061027a9190612cc8565b610873565b005b34801561028d57600080fd5b506102a860048036038101906102a39190612d21565b610a1b565b005b3480156102b657600080fd5b506102d160048036038101906102cc9190612d84565b610af6565b6040516102de9190612dc0565b60405180910390f35b3480156102f357600080fd5b5061030e60048036038101906103099190612ddb565b610b15565b005b34801561031c57600080fd5b5061033760048036038101906103329190612d21565b610b37565b005b34801561034557600080fd5b50610360600480360381019061035b9190612ddb565b610ce3565b005b34801561036e57600080fd5b50610377610d5e565b005b34801561038557600080fd5b506103a0600480360381019061039b9190612cc8565b610d76565b005b3480156103ae57600080fd5b506103c960048036038101906103c49190612cc8565b610f0f565b005b3480156103d757600080fd5b506103f260048036038101906103ed9190612e1b565b61107f565b005b34801561040057600080fd5b50610409611134565b6040516104169190612c4f565b60405180910390f35b34801561042b57600080fd5b5061043461113a565b6040516104419190612c1b565b60405180910390f35b34801561045657600080fd5b50610471600480360381019061046c9190612d21565b611151565b60405161047e9190612c1b565b60405180910390f35b34801561049357600080fd5b506104ae60048036038101906104a99190612d21565b61117e565b6040516104c096959493929190612e7d565b60405180910390f35b3480156104d557600080fd5b506104de611207565b005b3480156104ec57600080fd5b506104f561121f565b6040516105089796959493929190613067565b60405180910390f35b34801561051d57600080fd5b5061053860048036038101906105339190612cc8565b6112c9565b6040516105459190612c1b565b60405180910390f35b34801561055a57600080fd5b5061057560048036038101906105709190612ddb565b6112e9565b6040516105829190612c1b565b60405180910390f35b34801561059757600080fd5b506105a0611353565b6040516105ad9190612c4f565b60405180910390f35b3480156105c257600080fd5b506105cb611359565b6040516105d89190612dc0565b60405180910390f35b3480156105ed57600080fd5b506105f6611360565b6040516106039190612dc0565b60405180910390f35b34801561061857600080fd5b50610633600480360381019061062e9190612ddb565b611384565b005b34801561064157600080fd5b5061065c60048036038101906106579190613129565b6113a6565b005b34801561066a57600080fd5b50610685600480360381019061068091906131ce565b6114dc565b005b34801561069357600080fd5b506106ae60048036038101906106a9919061322e565b611c8b565b6040516106bb9190612c4f565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610737575061073682611f8d565b5b9050919050565b60075481565b6000801b61075181611ff7565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d4906132e1565b60405180910390fd5b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558173ffffffffffffffffffffffffffffffffffffffff167f8176fc5412eb5076fee7f1a264915b808c24d495c2698c189030e5200e707d2560405160405180910390a25050565b6000801b61088081611ff7565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e69061334d565b60405180910390fd5b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561097c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610973906133b9565b60405180910390fd5b6001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167f4205b1cf2b33c8147cc02b8fb0c9d3ff098218a686b0dd94b1e35d3c3968ad8c60405160405180910390a25050565b6000801b610a2881611ff7565b60008211610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290613425565b60405180910390fd5b600754821115610ab0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa790613491565b60405180910390fd5b7ffe8415ddc48736ac548277db19239174daa7df382596d5b25cfdc4c5f3729ae060055483604051610ae39291906134b1565b60405180910390a1816005819055505050565b6000806000838152602001908152602001600020600101549050919050565b610b1e82610af6565b610b2781611ff7565b610b31838361200b565b50505050565b610b3f6120fc565b60006008600083815260200190815260200160002090506000816000015403610b9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9490613526565b60405180910390fd5b8060050160009054906101000a900460ff1615610bef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be690613592565b60405180910390fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c565750610c556000801b336112e9565b5b610c95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8c906135fe565b60405180910390fd5b60018160050160006101000a81548160ff021916908315150217905550817fee243f878b7fc2f54e934ca33783d4395d42bc07612e2bd4b8e0e178639f7a2860405160405180910390a25050565b610ceb61213d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d4f576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d598282612145565b505050565b6000801b610d6b81611ff7565b610d73612237565b50565b6000801b610d8381611ff7565b610dad7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926836112e9565b610dec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de39061366a565b60405180910390fd5b610e167f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c9892683612145565b50600060075411610e5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e53906136d6565b60405180910390fd5b60076000815480929190610e6f90613725565b9190505550600754600554111580610e8957506000600754145b610ec8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebf9061379a565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167fe1434e25d6611e0db941968fdc97811c982ac1602e951637d206f5fdda9dd8f160405160405180910390a25050565b6000801b610f1c81611ff7565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f829061334d565b60405180910390fd5b610fb57f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926836112e9565b15610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec90613806565b60405180910390fd5b61101f7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c989268361200b565b506007600081548092919061103390613826565b91905055508173ffffffffffffffffffffffffffffffffffffffff167fe366c1c0452ed8eec96861e9e54141ebff23c9ec89fe27b996b45f5ec388498760405160405180910390a25050565b6000801b61108c81611ff7565b61109461229a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fa906138ba565b60405180910390fd5b61112e83838673ffffffffffffffffffffffffffffffffffffffff166122da9092919063ffffffff16565b50505050565b60065481565b6000600460009054906101000a900460ff16905090565b60006008600083815260200190815260200160002060050160009054906101000a900460ff169050919050565b60086020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b6000801b61121481611ff7565b61121c612359565b50565b6000606080600080600060606112336123bc565b61123b6123f7565b46306000801b600067ffffffffffffffff81111561125c5761125b6138da565b5b60405190808252806020026020018201604052801561128a5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60096020528060005260406000206000915054906101000a900460ff1681565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60055481565b6000801b81565b7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c9892681565b61138d82610af6565b61139681611ff7565b6113a08383612145565b50505050565b6000801b6113b381611ff7565b6113bb61229a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361142a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611421906138ba565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff16836040516114509061393a565b60006040518083038185875af1925050503d806000811461148d576040519150601f19603f3d011682016040523d82523d6000602084013e611492565b606091505b50509050806114d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cd9061399b565b60405180910390fd5b50505050565b6114e4612432565b6114ec6120fc565b6000600860008581526020019081526020016000209050600081600001540361154a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154190613526565b60405180910390fd5b8060050160009054906101000a900460ff161561159c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159390613592565b60405180910390fd5b60008160040154146115f05780600401544211156115ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e690613a07565b60405180910390fd5b5b600083839050905060055481101561163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163490613a73565b60405180910390fd5b600754811115611682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167990613adf565b60405180910390fd5b60007f7536956c1d5c6eff704e57d131431de994005c4c07b8dee8b01367daf09d380483600001548460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660030154876004015460405160200161171396959493929190613aff565b604051602081830303815290604052805190602001209050600061173682612478565b905060008367ffffffffffffffff811115611754576117536138da565b5b6040519080825280602002602001820160405280156117825781602001602082028036833780820191505090505b50905060005b848110156119e2576000611803848a8a858181106117a9576117a8613b60565b5b90506020028101906117bb9190613b9e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612492565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186b90613c4d565b60405180910390fd5b61189e7f21702c8af46127c7fa207f89d0b0a8441bb32959a0ac7df790e9ab1a25c98926826112e9565b6118dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d490613cb9565b60405180910390fd5b60005b82811015611981578173ffffffffffffffffffffffffffffffffffffffff1684828151811061191257611911613b60565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603611970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196790613d25565b60405180910390fd5b8061197a90613826565b90506118e0565b508083838151811061199657611995613b60565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505050806119db90613826565b9050611788565b5060018560050160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611b79578460030154471015611a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9690613d91565b60405180910390fd5b60008560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168660030154604051611aed9061393a565b60006040518083038185875af1925050503d8060008114611b2a576040519150601f19603f3d011682016040523d82523d6000602084013e611b2f565b606091505b5050905080611b73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6a9061399b565b60405180910390fd5b50611bf1565b611bf08560020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686600301548760010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166122da9092919063ffffffff16565b5b877f74d337d0c7486157753bafb2b743f64c516ce0ed91bece495911eeffe8510aa48660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168760020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168860030154604051611c7193929190613db1565b60405180910390a25050505050611c866124be565b505050565b6000611c956120fc565b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611d21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1890613e34565b60405180910390fd5b60008311611d64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d5b90613ea0565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611da75750611da66000801b336112e9565b5b611de6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ddd906135fe565b60405180910390fd5b60066000815480929190611df990613826565b91905055506040518060c0016040528060065481526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001600015158152506008600060065481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff0219169083151502179055509050506006547ffdb99dbf8b0f336e7dccb5837d02b7432de2cd413f754b23300777f8b79f7ff886868686604051611f789493929190613ec0565b60405180910390a26006549050949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6120088161200361213d565b6124c8565b50565b600061201783836112e9565b6120f157600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061208e61213d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506120f6565b600090505b92915050565b61210461113a565b1561213b576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600033905090565b600061215183836112e9565b1561222c57600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506121c961213d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612231565b600090505b92915050565b61223f61229a565b6000600460006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61228361213d565b6040516122909190613f05565b60405180910390a1565b6122a261113a565b6122d8576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b612354838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb858560405160240161230d929190613f20565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612519565b505050565b6123616120fc565b6001600460006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586123a561213d565b6040516123b29190613f05565b60405180910390a1565b60606123f260017f00000000000000000000000000000000000000000000000000000000000000006125bb90919063ffffffff16565b905090565b606061242d60027f00000000000000000000000000000000000000000000000000000000000000006125bb90919063ffffffff16565b905090565b60026003540361246e576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381905550565b600061248b61248561266b565b83612722565b9050919050565b6000806000806124a28686612763565b9250925092506124b282826127bf565b82935050505092915050565b6001600381905550565b6124d282826112e9565b6125155780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161250c929190613f49565b60405180910390fd5b5050565b600080602060008451602086016000885af18061253c576040513d6000823e3d81fd5b3d925060005191505060008214612557576001811415612573565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b156125b557836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016125ac9190613f05565b60405180910390fd5b50505050565b606060ff60001b83146125d8576125d183612923565b9050612665565b8180546125e490613fa1565b80601f016020809104026020016040519081016040528092919081815260200182805461261090613fa1565b801561265d5780601f106126325761010080835404028352916020019161265d565b820191906000526020600020905b81548152906001019060200180831161264057829003601f168201915b505050505090505b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156126e757507f000000000000000000000000000000000000000000000000000000000000000046145b15612714577f0000000000000000000000000000000000000000000000000000000000000000905061271f565b61271c612997565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b600080600060418451036127a85760008060006020870151925060408701519150606087015160001a905061279a88828585612a2d565b9550955095505050506127b8565b60006002855160001b9250925092505b9250925092565b600060038111156127d3576127d2613fd2565b5b8260038111156127e6576127e5613fd2565b5b031561291f5760016003811115612800576127ff613fd2565b5b82600381111561281357612812613fd2565b5b0361284a576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561285e5761285d613fd2565b5b82600381111561287157612870613fd2565b5b036128b6578060001c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016128ad9190612c4f565b60405180910390fd5b6003808111156128c9576128c8613fd2565b5b8260038111156128dc576128db613fd2565b5b0361291e57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016129159190612dc0565b60405180910390fd5b5b5050565b6060600061293083612b21565b90506000602067ffffffffffffffff81111561294f5761294e6138da565b5b6040519080825280601f01601f1916602001820160405280156129815781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001612a12959493929190614001565b60405160208183030381529060405280519060200120905090565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c1115612a6d576000600385925092509250612b17565b600060018888888860405160008152602001604052604051612a929493929190614070565b6020604051602081039080840390855afa158015612ab4573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612b0857600060016000801b93509350935050612b17565b8060008060001b935093509350505b9450945094915050565b60008060ff8360001c169050601f811115612b68576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612bb081612b7b565b8114612bbb57600080fd5b50565b600081359050612bcd81612ba7565b92915050565b600060208284031215612be957612be8612b71565b5b6000612bf784828501612bbe565b91505092915050565b60008115159050919050565b612c1581612c00565b82525050565b6000602082019050612c306000830184612c0c565b92915050565b6000819050919050565b612c4981612c36565b82525050565b6000602082019050612c646000830184612c40565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612c9582612c6a565b9050919050565b612ca581612c8a565b8114612cb057600080fd5b50565b600081359050612cc281612c9c565b92915050565b600060208284031215612cde57612cdd612b71565b5b6000612cec84828501612cb3565b91505092915050565b612cfe81612c36565b8114612d0957600080fd5b50565b600081359050612d1b81612cf5565b92915050565b600060208284031215612d3757612d36612b71565b5b6000612d4584828501612d0c565b91505092915050565b6000819050919050565b612d6181612d4e565b8114612d6c57600080fd5b50565b600081359050612d7e81612d58565b92915050565b600060208284031215612d9a57612d99612b71565b5b6000612da884828501612d6f565b91505092915050565b612dba81612d4e565b82525050565b6000602082019050612dd56000830184612db1565b92915050565b60008060408385031215612df257612df1612b71565b5b6000612e0085828601612d6f565b9250506020612e1185828601612cb3565b9150509250929050565b600080600060608486031215612e3457612e33612b71565b5b6000612e4286828701612cb3565b9350506020612e5386828701612cb3565b9250506040612e6486828701612d0c565b9150509250925092565b612e7781612c8a565b82525050565b600060c082019050612e926000830189612c40565b612e9f6020830188612e6e565b612eac6040830187612e6e565b612eb96060830186612c40565b612ec66080830185612c40565b612ed360a0830184612c0c565b979650505050505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b612f1381612ede565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612f53578082015181840152602081019050612f38565b60008484015250505050565b6000601f19601f8301169050919050565b6000612f7b82612f19565b612f858185612f24565b9350612f95818560208601612f35565b612f9e81612f5f565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612fde81612c36565b82525050565b6000612ff08383612fd5565b60208301905092915050565b6000602082019050919050565b600061301482612fa9565b61301e8185612fb4565b935061302983612fc5565b8060005b8381101561305a5781516130418882612fe4565b975061304c83612ffc565b92505060018101905061302d565b5085935050505092915050565b600060e08201905061307c600083018a612f0a565b818103602083015261308e8189612f70565b905081810360408301526130a28188612f70565b90506130b16060830187612c40565b6130be6080830186612e6e565b6130cb60a0830185612db1565b81810360c08301526130dd8184613009565b905098975050505050505050565b60006130f682612c6a565b9050919050565b613106816130eb565b811461311157600080fd5b50565b600081359050613123816130fd565b92915050565b600080604083850312156131405761313f612b71565b5b600061314e85828601613114565b925050602061315f85828601612d0c565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f84011261318e5761318d613169565b5b8235905067ffffffffffffffff8111156131ab576131aa61316e565b5b6020830191508360208202830111156131c7576131c6613173565b5b9250929050565b6000806000604084860312156131e7576131e6612b71565b5b60006131f586828701612d0c565b935050602084013567ffffffffffffffff81111561321657613215612b76565b5b61322286828701613178565b92509250509250925092565b6000806000806080858703121561324857613247612b71565b5b600061325687828801612cb3565b945050602061326787828801612cb3565b935050604061327887828801612d0c565b925050606061328987828801612d0c565b91505092959194509250565b7f6e6f7420726563697069656e7400000000000000000000000000000000000000600082015250565b60006132cb600d83612f24565b91506132d682613295565b602082019050919050565b600060208201905081810360008301526132fa816132be565b9050919050565b7f7a65726f00000000000000000000000000000000000000000000000000000000600082015250565b6000613337600483612f24565b915061334282613301565b602082019050919050565b600060208201905081810360008301526133668161332a565b9050919050565b7f616c726561647920726563697069656e74000000000000000000000000000000600082015250565b60006133a3601183612f24565b91506133ae8261336d565b602082019050919050565b600060208201905081810360008301526133d281613396565b9050919050565b7f6d757374206265203e3000000000000000000000000000000000000000000000600082015250565b600061340f600a83612f24565b915061341a826133d9565b602082019050919050565b6000602082019050818103600083015261343e81613402565b9050919050565b7f6d757374206265203c3d2076616c696461746f72436f756e7400000000000000600082015250565b600061347b601983612f24565b915061348682613445565b602082019050919050565b600060208201905081810360008301526134aa8161346e565b9050919050565b60006040820190506134c66000830185612c40565b6134d36020830184612c40565b9392505050565b7f6e6f742065786973740000000000000000000000000000000000000000000000600082015250565b6000613510600983612f24565b915061351b826134da565b602082019050919050565b6000602082019050818103600083015261353f81613503565b9050919050565b7f616c726561647920657865637574656400000000000000000000000000000000600082015250565b600061357c601083612f24565b915061358782613546565b602082019050919050565b600060208201905081810360008301526135ab8161356f565b9050919050565b7f6e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b60006135e8600b83612f24565b91506135f3826135b2565b602082019050919050565b60006020820190508181036000830152613617816135db565b9050919050565b7f6e6f742076616c696461746f7200000000000000000000000000000000000000600082015250565b6000613654600d83612f24565b915061365f8261361e565b602082019050919050565b6000602082019050818103600083015261368381613647565b9050919050565b7f76616c696461746f72436f756e743d3000000000000000000000000000000000600082015250565b60006136c0601083612f24565b91506136cb8261368a565b602082019050919050565b600060208201905081810360008301526136ef816136b3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061373082612c36565b915060008203613743576137426136f6565b5b600182039050919050565b7f7468726573686f6c6420746f6f20686967680000000000000000000000000000600082015250565b6000613784601283612f24565b915061378f8261374e565b602082019050919050565b600060208201905081810360008301526137b381613777565b9050919050565b7f616c72656164792076616c696461746f72000000000000000000000000000000600082015250565b60006137f0601183612f24565b91506137fb826137ba565b602082019050919050565b6000602082019050818103600083015261381f816137e3565b9050919050565b600061383182612c36565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613863576138626136f6565b5b600182019050919050565b7f746f3d3000000000000000000000000000000000000000000000000000000000600082015250565b60006138a4600483612f24565b91506138af8261386e565b602082019050919050565b600060208201905081810360008301526138d381613897565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000613924600083613909565b915061392f82613914565b600082019050919050565b600061394582613917565b9150819050919050565b7f657468207472616e73666572206661696c656400000000000000000000000000600082015250565b6000613985601383612f24565b91506139908261394f565b602082019050919050565b600060208201905081810360008301526139b481613978565b9050919050565b7f6578706972656400000000000000000000000000000000000000000000000000600082015250565b60006139f1600783612f24565b91506139fc826139bb565b602082019050919050565b60006020820190508181036000830152613a20816139e4565b9050919050565b7f6e6f7420656e6f756768207369676e6174757265730000000000000000000000600082015250565b6000613a5d601583612f24565b9150613a6882613a27565b602082019050919050565b60006020820190508181036000830152613a8c81613a50565b9050919050565b7f746f6f206d616e79207369676e61747572657300000000000000000000000000600082015250565b6000613ac9601383612f24565b9150613ad482613a93565b602082019050919050565b60006020820190508181036000830152613af881613abc565b9050919050565b600060c082019050613b146000830189612db1565b613b216020830188612c40565b613b2e6040830187612e6e565b613b3b6060830186612e6e565b613b486080830185612c40565b613b5560a0830184612c40565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112613bbb57613bba613b8f565b5b80840192508235915067ffffffffffffffff821115613bdd57613bdc613b94565b5b602083019250600182023603831315613bf957613bf8613b99565b5b509250929050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b6000613c37601183612f24565b9150613c4282613c01565b602082019050919050565b60006020820190508181036000830152613c6681613c2a565b9050919050565b7f7369676e6572206e6f742076616c696461746f72000000000000000000000000600082015250565b6000613ca3601483612f24565b9150613cae82613c6d565b602082019050919050565b60006020820190508181036000830152613cd281613c96565b9050919050565b7f6475706c6963617465207369676e617475726500000000000000000000000000600082015250565b6000613d0f601383612f24565b9150613d1a82613cd9565b602082019050919050565b60006020820190508181036000830152613d3e81613d02565b9050919050565b7f696e73756666696369656e742045544800000000000000000000000000000000600082015250565b6000613d7b601083612f24565b9150613d8682613d45565b602082019050919050565b60006020820190508181036000830152613daa81613d6e565b9050919050565b6000606082019050613dc66000830186612e6e565b613dd36020830185612e6e565b613de06040830184612c40565b949350505050565b7f726563697069656e74206e6f742077686974656c697374656400000000000000600082015250565b6000613e1e601983612f24565b9150613e2982613de8565b602082019050919050565b60006020820190508181036000830152613e4d81613e11565b9050919050565b7f616d6f756e743e30000000000000000000000000000000000000000000000000600082015250565b6000613e8a600883612f24565b9150613e9582613e54565b602082019050919050565b60006020820190508181036000830152613eb981613e7d565b9050919050565b6000608082019050613ed56000830187612e6e565b613ee26020830186612e6e565b613eef6040830185612c40565b613efc6060830184612c40565b95945050505050565b6000602082019050613f1a6000830184612e6e565b92915050565b6000604082019050613f356000830185612e6e565b613f426020830184612c40565b9392505050565b6000604082019050613f5e6000830185612e6e565b613f6b6020830184612db1565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613fb957607f821691505b602082108103613fcc57613fcb613f72565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060a0820190506140166000830188612db1565b6140236020830187612db1565b6140306040830186612db1565b61403d6060830185612c40565b61404a6080830184612e6e565b9695505050505050565b600060ff82169050919050565b61406a81614054565b82525050565b60006080820190506140856000830187612db1565b6140926020830186614061565b61409f6040830185612db1565b6140ac6060830184612db1565b9594505050505056fea2646970667358221220ca218bcf521382f54832d0c0c9533d16dc325deced5ce813837144ca11b79a3064736f6c63430008140033";

// src/shared/data/repositories/crypto/artifacts/bsc.config.ts
loadConfig();
var isProd = process.env.ENV === "production";
var BSC_CONFIG = {
  FORWARDER_ABI: isProd ? BSC_PROD_FORWARD_CONTRACT_ABI : BSC_LOCAL_FORWARD_CONTRACT_ABI,
  FORWARDER_BYTE_CODE: isProd ? BSC_PROD_FORWARD_CONTRACT_BYTE_CODE : BSC_LOCAL_FORWARD_CONTRACT_BYTE_CODE,
  FORWARDER_CONTRACT: isProd ? process.env.BSC_USDT_FORWARDER_CONTRACT_ADDRESS : process.env.BSC_USDT_TEST_FORWARDER_CONTRACT_ADDRESS,
  FORWARDER_FEE: isProd ? BigInt(process.env.BSC_FEE_AMOUNT) : BigInt(process.env.BSC_TEST_FEE_AMOUNT),
  PAYOUT_ABI: isProd ? PAYOUT_PROD_CONTRACT_ABI : PAYOUT_LOCAL_CONTRACT_ABI,
  PAYOUT_BYTE_CODE: isProd ? PAYOUT_PROD_CONTRACT_BYTE_CODE : PAYOUT_LOCAL_CONTRACT_BYTE_CODE,
  PAYOUT_CONTRACT: isProd ? process.env.BSC_USDT_PAYOUT_CONTRACT_ADDRESS : process.env.BSC_USDT_TEST_PAYOUT_CONTRACT_ADDRESS,
  USDT_CONTRACT: isProd ? process.env.BSC_USDT_CONTRACT_ADDRESS : process.env.BSC_USDT_TEST_CONTRACT_ADDRESS,
  USDT_ABI: [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function transfer(address to, uint256 value) returns (bool)",
    "function transferFrom(address from, address to, uint256 value) returns (bool)",
    "function approve(address spender, uint256 value) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)"
  ],
  DECIMALS: 6,
  RPC_URL: isProd ? process.env.BSC_RPC_URL : process.env.BSC_TEST_RPC_URL,
  DEPLOYER_KEY: process.env.BSC_DEPLOYER_PRIVATE_KEY,
  DEVELOPER_WALLET: process.env.BSC_DEVELOPER_WALLET_ADDRESS
};
var bscProvider = new ethers.JsonRpcProvider(BSC_CONFIG.RPC_URL);
var bscSigner = new ethers.Wallet(BSC_CONFIG.DEPLOYER_KEY, bscProvider);
var usdtContract = new ethers.Contract(
  BSC_CONFIG.USDT_CONTRACT,
  BSC_CONFIG.USDT_ABI,
  bscProvider
);

// src/shared/data/repositories/crypto/block/_bsc.ts
var BscCryptoWallet = class _BscCryptoWallet {
  constructor(wallet) {
    this.wallet = wallet;
    this.wallet = wallet;
  }
  static async getUSDTBalance(address) {
    try {
      const [balance, decimals] = await Promise.all([
        usdtContract.balanceOf(address),
        usdtContract.decimals()
      ]);
      const formattedBalance = ethers2.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance).toFixed(4) };
    } catch (err) {
      console.error("Error getting BSC USDT balance: ", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err?.reason || err?.message || "Unknown error"}`
      };
    }
  }
  static async getBalance(address) {
    try {
      const [balance, decimals] = await Promise.all([
        usdtContract.balanceOf(address),
        usdtContract.decimals()
      ]);
      const formattedBalance = ethers2.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance).toFixed(4) };
    } catch (err) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || "Unknown error"}`
      };
    }
  }
  static forwarderContract = async (request) => {
    const factory = new ethers2.ContractFactory(BSC_CONFIG.FORWARDER_ABI, BSC_CONFIG.FORWARDER_BYTE_CODE, bscSigner);
    const forwarder = await factory.deploy(
      BSC_CONFIG.USDT_CONTRACT,
      request.merchant_address,
      BSC_CONFIG.DEVELOPER_WALLET,
      BSC_CONFIG.FORWARDER_FEE
    );
    const deployed = await forwarder.waitForDeployment();
    return {
      deployed,
      address: await deployed.getAddress()
    };
  };
  static payoutContract = async (request) => {
    const factory = new ethers2.ContractFactory(BSC_CONFIG.PAYOUT_ABI, BSC_CONFIG.PAYOUT_BYTE_CODE, bscSigner);
    const contract = await factory.deploy("MultiValidatorPayout", "1", request.requiredApprovals);
    const deployed = await contract.waitForDeployment();
    return {
      deployed,
      address: await deployed.getAddress()
    };
  };
  static async generateWallet(wallet_details, type = "forwarder") {
    try {
      if (typeof wallet_details !== "string") {
        return new _BscCryptoWallet(wallet_details);
      }
      const merchant_address = wallet_details;
      const fee = BigInt(0.1 * 10 ** BSC_CONFIG.DECIMALS);
      if (type === "payout") {
        const contract2 = await this.payoutContract({ requiredApprovals: 3n });
        return new BscPayoutCryptoWallet({
          address: contract2.address,
          type,
          blockchain: "BSC",
          merchant_address,
          developer_address: BSC_CONFIG.DEVELOPER_WALLET
        });
      }
      const contract = await this.forwarderContract({ merchant_address, fee });
      return new BscForwarderCryptoWallet({
        address: contract.address,
        type,
        blockchain: "BSC",
        merchant_address,
        developer_address: BSC_CONFIG.DEVELOPER_WALLET
      });
    } catch (err) {
      console.error("Wallet deployment failed:", err);
      throw new Error("Failed to deploy forwarder/payout contract");
    }
  }
  async getUSDTBalance() {
    try {
      const [balance, decimals] = await Promise.all([
        usdtContract.balanceOf(this.wallet.address),
        usdtContract.decimals()
      ]);
      const formattedBalance = ethers2.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance) };
    } catch (err) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || "Unknown error"}`
      };
    }
  }
  get getModel() {
    return { ...this.wallet };
  }
  static get isActive() {
    return (async () => {
      try {
        const network = await bscSigner.provider?.getNetwork();
        console.log("network", network?.chainId);
        if (process.env.ENV === "production") {
          return network?.chainId === 56n;
        } else {
          return network?.chainId === 97n;
        }
      } catch (err) {
        console.error("Error getting BSC network:", err);
        return false;
      }
    })();
  }
};
var BscForwarderCryptoWallet = class extends BscCryptoWallet {
  constructor(wallet) {
    super(wallet);
  }
  async confirmPayment(tx) {
    try {
      const balance = await this.getUSDTBalance();
      if (!balance.status) return { status: false, message: "unable to get BSC USDT Balance" };
      if (balance.data < tx.package.subscription_fee) return { status: false, message: "insufficient BSC USDT Balance" };
      const forwarder = new ethers2.Contract(BSC_CONFIG.FORWARDER_CONTRACT, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const forwardTx = await forwarder.forward(BSC_CONFIG.USDT_CONTRACT);
      const receipt = await forwardTx.wait();
      tx.hash = receipt.transactionHash;
      return { status: true, data: tx };
    } catch (err) {
      return { status: false, message: err.message || "Failed to confirm payment by time" };
    }
  }
  async rescueToken(token, tx) {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const rescueTx = await forwarder.rescueTokens(token, tx.user.address);
      const receipt = await rescueTx.wait();
      return { status: true, data: receipt.transactionHash };
    } catch (err) {
      console.error("Error rescuing tokens:", err);
      return { status: false, message: err?.message || "Failed to rescue tokens" };
    }
  }
  /**
   * Creates a new payment transaction with minimum amount and timeout.
   * @param minimumAmount The minimum amount required for this transaction (in USDT units)
   * @param timeout The timeout period in seconds for this transaction
   * @returns Transaction ID of the created payment
   */
  async createPayment(minimumAmount, timeout) {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const minimumAmountWei = ethers2.parseUnits(minimumAmount.toString(), BSC_CONFIG.DECIMALS);
      const createTx = await forwarder.createPayment(minimumAmountWei, timeout);
      const receipt = await createTx.wait();
      const event = receipt.logs.find((log) => {
        try {
          const parsed = forwarder.interface.parseLog(log);
          return parsed?.name === "PaymentCreated";
        } catch {
          return false;
        }
      });
      if (event) {
        const parsed = forwarder.interface.parseLog(event);
        const transactionId = Number(parsed?.args.transactionId);
        return { status: true, data: transactionId };
      }
      return { status: false, message: "Failed to get transaction ID from event" };
    } catch (err) {
      console.error("Error creating payment:", err);
      return { status: false, message: err?.message || "Failed to create payment" };
    }
  }
  /**
   * Processes payment for the active transaction.
   * This should be called after tokens are transferred to the contract.
   * @param transactionId The ID of the transaction to process payment for
   * @returns Transaction hash of the processing transaction
   */
  async processPayment(transactionId) {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const processTx = await forwarder.processPayment(transactionId);
      const receipt = await processTx.wait();
      return { status: true, data: receipt.transactionHash };
    } catch (err) {
      console.error("Error processing payment:", err);
      return { status: false, message: err?.message || "Failed to process payment" };
    }
  }
  /**
   * Verifies the last transaction and checks if payment was made.
   * @returns Transaction verification details
   */
  async verifyTransaction() {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const result = await forwarder.verifyTransaction();
      return {
        status: true,
        data: {
          transactionId: Number(result.transactionId),
          isCompleted: result.isCompleted,
          amount: Number(ethers2.formatUnits(result.amount, BSC_CONFIG.DECIMALS)),
          minimumAmount: Number(ethers2.formatUnits(result.minimumAmount, BSC_CONFIG.DECIMALS)),
          isExpired: result.isExpired
        }
      };
    } catch (err) {
      console.error("Error verifying transaction:", err);
      return { status: false, message: err?.message || "Failed to verify transaction" };
    }
  }
  /**
   * Checks if the current active transaction can be processed.
   * @returns Payment processing status and details
   */
  async canProcessPayment() {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const result = await forwarder.canProcessPayment();
      return {
        status: true,
        data: {
          canProcess: result.canProcess,
          currentBalance: Number(ethers2.formatUnits(result.currentBalance, BSC_CONFIG.DECIMALS)),
          minimumRequired: Number(ethers2.formatUnits(result.minimumRequired, BSC_CONFIG.DECIMALS)),
          isExpired: result.isExpired
        }
      };
    } catch (err) {
      console.error("Error checking payment status:", err);
      return { status: false, message: err?.message || "Failed to check payment status" };
    }
  }
  /**
   * Gets the current active transaction details.
   * @returns Active transaction details
   */
  async getActiveTransaction() {
    try {
      const forwarder = new ethers2.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      const result = await forwarder.getActiveTransaction();
      return {
        status: true,
        data: {
          transactionId: Number(result.transactionId),
          minimumAmount: Number(ethers2.formatUnits(result.minimumAmount, BSC_CONFIG.DECIMALS)),
          timeout: Number(result.timeout),
          createdAt: Number(result.createdAt),
          isActive: result.isActive
        }
      };
    } catch (err) {
      console.error("Error getting active transaction:", err);
      return { status: false, message: err?.message || "Failed to get active transaction" };
    }
  }
};
var BscPayoutCryptoWallet = class extends BscCryptoWallet {
  constructor(wallet) {
    super(wallet);
  }
  async addRecipient(address) {
    try {
      const payout = new ethers2.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner);
      const addTx = await payout.addRecipient(address);
      const receipt = await addTx.wait();
      return { status: true, data: receipt.transactionHash };
    } catch (err) {
      console.error("Error adding recipient:", err);
      return { status: false, message: err?.message || "Failed to add recipient" };
    }
  }
  async removeRecipient(address) {
    try {
      const payout = new ethers2.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner);
      const removeTx = await payout.removeRecipient(address);
      const receipt = await removeTx.wait();
      return { status: true, data: receipt.transactionHash };
    } catch (err) {
      console.error("Error removing recipient:", err);
      return { status: false, message: err?.message || "Failed to remove recipient" };
    }
  }
  async addPayoutRequest(address, amount) {
    try {
      const payout = new ethers2.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner);
      const removeTx = await payout.addPayout(address, amount);
      const receipt = await removeTx.wait();
      return { status: true, data: receipt.transactionHash };
    } catch (err) {
      console.error("Error removing recipient:", err);
      return { status: false, message: err?.message || "Failed to remove recipient" };
    }
  }
};

// src/shared/data/repositories/crypto/block/_sandbox.ts
var SandBoxCryptoWallet = class _SandBoxCryptoWallet {
  constructor(wallet) {
    this.wallet = wallet;
    this.wallet = wallet;
  }
  static async getUSDTBalance(address) {
    try {
      return { status: true, data: "10.000" };
    } catch (err) {
      console.error("Error getting BSC USDT balance: ", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err?.reason || err?.message || "Unknown error"}`
      };
    }
  }
  static async getBalance(address) {
    try {
      return { status: true, data: "10.000" };
    } catch (err) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || "Unknown error"}`
      };
    }
  }
  static forwarderContract = async () => {
    return {
      deployed: {},
      address: "0x0000000000000000000000000000"
    };
  };
  static payoutContract = async () => {
    return {
      deployed: {},
      address: "0x0000000000000000000000000000"
    };
  };
  static async generateWallet(wallet_details, type = "forwarder") {
    try {
      const contract = type === "payout" ? await this.payoutContract() : await this.forwarderContract();
      return new _SandBoxCryptoWallet({
        address: contract.address,
        type,
        blockchain: "BSC",
        merchant_address: "0x0000000000000000000000000000",
        developer_address: "0x0000000000000000000000000000"
      });
    } catch (err) {
      console.error("Wallet deployment failed:", err);
      throw new Error("Failed to deploy forwarder contract");
    }
  }
  async confirmPayment(tx) {
    return {
      status: true,
      data: tx
    };
  }
  async onPayment(callback) {
    callback({
      hash: "0x0000000000000000000000000000",
      block_number: 266,
      from: "0x0000000000000000000000000000",
      recipient: "0x0000000000000000000000000000",
      developer: "0x0000000000000000000000000000",
      amount: "10.00",
      fee: "10.00",
      status: "success",
      timestamp: Date.parse((/* @__PURE__ */ new Date()).toString())
    });
  }
  async getUSDTBalance() {
    try {
      return { status: true, data: 10 };
    } catch (err) {
      return { status: false, message: err.message || "Error fetching USDT balance" };
    }
  }
  get getModel() {
    return { ...this.wallet };
  }
};

// src/shared/data/repositories/crypto/index.ts
var CryptoRepository = class {
  isListenerActive;
  constructor() {
    this.isListenerActive = false;
  }
  get getBlock() {
    return {
      BSC: BscCryptoWallet,
      Ton: TonCryptoWallet
    };
  }
  get getSandboxBlock() {
    return {
      BSC: SandBoxCryptoWallet,
      Ton: SandBoxCryptoWallet
    };
  }
};

// src/shared/data/repositories/encryption/index.ts
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { constants, createCipheriv, createDecipheriv, createHmac, createSign, createVerify, generateKeyPairSync, publicEncrypt, randomBytes, scryptSync } from "crypto";
var EncryptionRepository = class {
  createToken = () => {
    return uuid();
  };
  encryptToken = (data, token, expiresIn = 60 * 60 * 24 * 5) => {
    return jwt.sign(data, token, { expiresIn });
  };
  decryptToken = (data, token) => {
    return jwt.verify(data, token);
  };
  createSpecialKey = ({ prefix = "", suffix = "", removeDashes = false }) => {
    const secretKey = uuid().split("_").join("");
    if (removeDashes) {
      const secretKeyWithDashes = secretKey.split("_").join("");
      return `${prefix}${secretKeyWithDashes}${suffix}`;
    }
    return `${prefix}${secretKey}${suffix}`;
  };
  verifyToken = (token, tokenType) => {
    try {
      if (token === null || token === void 0) {
        return { status: false, error: "Authentication failed" };
      }
      const decoded = jwt.verify(token, tokenType);
      return { status: true, data: decoded };
    } catch (error) {
      return { status: false, error: "Authentication expired" };
    }
  };
  verifyBearerToken = (data, tokenType) => {
    try {
      if (data === null || data === void 0) {
        return { status: false, error: "Authentication failed" };
      }
      const token = data.split(" ", 2)[1];
      const decoded = jwt.verify(token, tokenType);
      return { status: true, data: decoded };
    } catch (error) {
      return { status: false, error: "Authentication expired" };
    }
  };
  encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
  };
  comparePassword = (password, userPassword) => {
    return bcrypt.compareSync(password, userPassword);
  };
  generateVerificationCode = (length) => {
    const characters = "0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    return {
      code: randomString,
      timeout: Date.parse((/* @__PURE__ */ new Date()).toISOString()) + 1e3 * 60 * 60
    };
  };
  generateRandomStringCode = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    return randomString;
  };
  generateKeyPairs = () => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "spki",
        format: "pem"
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        // Optional encryption
        passphrase: process.env.ADMIN_ACCESS_TOKEN_SECRET
      }
    });
    return { publicKey, privateKey };
  };
  encryptId = (id, tokenType) => {
    try {
      const iv = randomBytes(16);
      const key = scryptSync(tokenType, "salt", 32);
      const cipher = createCipheriv("aes-256-ctr", key, iv);
      const encrypted = Buffer.concat([cipher.update(id), cipher.final()]);
      return { status: true, data: Buffer.concat([iv, encrypted]).toString("base64url") };
    } catch (err) {
      return { status: false, message: `Error: ${err}` };
    }
  };
  encryptWithPublicKey = (data, publicKey) => {
    try {
      const encrypted = publicEncrypt({
        key: publicKey,
        padding: constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
      }, Buffer.from(data));
      return { status: true, data: encrypted.toString("base64") };
    } catch (err) {
      return { status: false, message: `Error: ${err}` };
    }
  };
  // Decrypt function
  decryptId = (encryptedString, tokenType) => {
    try {
      const data = Buffer.from(encryptedString, "base64url");
      const iv = data.subarray(0, 16);
      const encrypted = data.subarray(16);
      const key = scryptSync(tokenType, "salt", 32);
      const decipher = createDecipheriv("aes-256-ctr", key, iv);
      return {
        status: true,
        data: Buffer.concat([decipher.update(encrypted), decipher.final()]).toString()
      };
    } catch (err) {
      return { status: false, message: `Error: ${err}` };
    }
  };
  signWithPrivateKey = (data, privateKey, passphrase) => {
    try {
      const signer = createSign("RSA-SHA256");
      signer.update(JSON.stringify(data));
      signer.end();
      const signature = signer.sign({ key: privateKey, passphrase }, "base64");
      return { status: true, data: signature };
    } catch (err) {
      return { status: false, message: `Error: ${err}` };
    }
  };
  verifyWithPublicKey = (data, signature, publicKey) => {
    try {
      const verifier = createVerify("RSA-SHA256");
      verifier.update(JSON.stringify(data));
      verifier.end();
      const isValid = verifier.verify(publicKey, signature, "base64");
      return { status: true, data: isValid };
    } catch (err) {
      return { status: false, message: `Error: ${err}` };
    }
  };
  generateWebhookSignature = (payload, timestamp2, secretKey) => {
    const message = `${timestamp2}.${payload}`;
    const hmac = createHmac("sha256", secretKey);
    hmac.update(message, "utf8");
    return hmac.digest("base64");
  };
  verifyWebhookSignature = (signature, timestamp2, payload, secretKey) => {
    try {
      const expectedSignature = this.generateWebhookSignature(payload, timestamp2, secretKey);
      return signature === expectedSignature;
    } catch (error) {
      return false;
    }
  };
  validateWebhookTimestamp = (timestamp2, maxAgeSeconds = 300) => {
    try {
      const timestampMs = parseInt(timestamp2, 10);
      if (isNaN(timestampMs)) {
        return false;
      }
      const now = Date.now();
      const ageSeconds = (now - timestampMs) / 1e3;
      return ageSeconds >= -5 && ageSeconds <= maxAgeSeconds;
    } catch (error) {
      return false;
    }
  };
};
var encryption_default = EncryptionRepository;

// src/shared/data/repositories/queue/data/transaction.ts
import { Queue, Worker } from "bullmq";

// src/shared/adapter/libraries/redis.ts
import Redis from "ioredis";

// src/shared/adapter/libraries/logger/index.ts
import morgan from "morgan";
import winston, { format, transports } from "winston";
import chalk from "chalk";
var { combine, timestamp, json, errors, printf, colorize, label } = format;
var truncateString = (str, maxLength = 200) => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + "... (truncated)";
};
var limitObjectDepth = (obj, depth = 2, currentDepth = 0) => {
  if (currentDepth >= depth) return "[Object]";
  if (obj === null || obj === void 0) return obj;
  if (typeof obj !== "object") {
    if (typeof obj === "string") return truncateString(obj, 100);
    return obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length > 5) {
      return [...obj.slice(0, 5).map((item) => limitObjectDepth(item, depth, currentDepth + 1)), `... (${obj.length - 5} more items)`];
    }
    return obj.map((item) => limitObjectDepth(item, depth, currentDepth + 1));
  }
  const result = {};
  const keys = Object.keys(obj);
  const limitedKeys = keys.slice(0, 10);
  for (const key of limitedKeys) {
    result[key] = limitObjectDepth(obj[key], depth, currentDepth + 1);
  }
  if (keys.length > 10) {
    result["..."] = `(${keys.length - 10} more properties)`;
  }
  return result;
};
var baseFormat = combine(
  errors({ stack: true }),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  json()
);
var levelColors = {
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  info: chalk.bold.cyan,
  debug: chalk.bold.gray,
  verbose: chalk.bold.magenta
};
var componentColors = [
  chalk.blue,
  chalk.green,
  chalk.magenta,
  chalk.cyan,
  chalk.yellow
];
var getComponentColor = (component) => {
  const hash = component.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return componentColors[hash % componentColors.length];
};
var consoleFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp: timestamp2, stack, component, ...meta }) => {
    const levelName = level.replace(/\x1B\[\d+m/g, "");
    const coloredLevel = levelColors[levelName] ? levelColors[levelName](levelName.toUpperCase().padEnd(7)) : level;
    const coloredTimestamp = chalk.gray(`[${timestamp2}]`);
    const componentColor = getComponentColor(`${component || "core"}`);
    const coloredComponent = componentColor(`[${component || "core"}]`);
    const stackTrace = stack ? " " + chalk.dim("\u2502") + " " + chalk.red(stack.toString().split("\n")[0]) : "";
    let coloredMeta = "";
    if (Object.keys(meta).length > 0) {
      const metaStr = JSON.stringify(limitObjectDepth(meta, 2));
      coloredMeta = " " + chalk.dim("\u2502") + " " + chalk.gray(metaStr);
    }
    const messageColor = levelName === "error" ? chalk.red : levelName === "warn" ? chalk.yellow : chalk.white;
    return `${coloredTimestamp} ${coloredLevel} ${coloredComponent} ${messageColor(truncateString(`${message}`, 150))}${stackTrace}${coloredMeta}`;
  })
);
var sharedCombinedFileTransport = new transports.File({
  filename: "logs/combined.log",
  maxsize: 5242880,
  // 5MB
  maxFiles: 5
});
var sharedExceptionsFileTransport = new transports.File({
  filename: "logs/exceptions.log",
  maxsize: 5242880,
  // 5MB
  maxFiles: 5
});
var sharedRejectionsFileTransport = new transports.File({
  filename: "logs/rejections.log",
  maxsize: 5242880,
  // 5MB
  maxFiles: 5
});
sharedCombinedFileTransport.setMaxListeners(25);
sharedExceptionsFileTransport.setMaxListeners(25);
sharedRejectionsFileTransport.setMaxListeners(25);
var createBaseLogger = (component) => {
  const API_KEY = process.env.DATADOG_CLOUD_API_KEY;
  const hostname = process.env.ENV;
  const service = process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.REGION;
  if (!API_KEY || !hostname || !service) {
    throw new Error("Missing critical environment variables for logger setup");
  }
  const httpTransportOptions = {
    host: "http-intake.logs.datadoghq.eu",
    path: `/api/v2/logs?ddsource=nodejs&service=${service}&host=${hostname}`,
    ssl: true,
    headers: {
      "DD-API-KEY": API_KEY
    }
  };
  return winston.createLogger({
    level: "info",
    defaultMeta: { service, hostname, component },
    format: baseFormat,
    // used for non-console transports
    transports: [
      // Pretty, colorized logs for local console (each logger gets its own console transport)
      new transports.Console({ format: consoleFormat }),
      // Shared file transport - all loggers write to the same file
      sharedCombinedFileTransport,
      // HTTP transport for Datadog
      new transports.Http(httpTransportOptions)
    ],
    exceptionHandlers: [
      sharedExceptionsFileTransport,
      new transports.Console({ format: consoleFormat })
    ],
    rejectionHandlers: [
      sharedRejectionsFileTransport
    ],
    exitOnError: false
  });
};
var logger = createBaseLogger("core");
var userLogger = createBaseLogger("user-service");
var merchantLogger = createBaseLogger("merchant-service");
var paymentLogger = createBaseLogger("payment-service");
var securityLogger = createBaseLogger("security-service");
var logPaymentEvent = (event, transactionId, details) => {
  paymentLogger.info(`PAYMENT_EVENT: ${event}`, {
    event,
    transactionId,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    ...details
  });
};

// src/shared/adapter/libraries/redis.ts
loadConfig();
var config = {
  rateLimit: {
    api: {
      windowMs: 15 * 60 * 1e3,
      max: 100
    },
    login: {
      windowMs: 15 * 60 * 1e3,
      max: process.env.NODE_ENV === "production" ? 10 : 20
    }
  },
  environment: process.env.NODE_ENV,
  redisUrl: process.env.REDIS_URL
};
var REDIS_RETRY_STRATEGY = (times) => {
  const delay = Math.min(times * 50, 2e3);
  return delay;
};
function getRedisConfig() {
  try {
    const parsedUrl = new URL(config.redisUrl);
    return {
      host: parsedUrl.hostname,
      port: parseInt(parsedUrl.port),
      password: parsedUrl.password
    };
  } catch (error) {
    logger.warn("Invalid Redis URL, falling back to individual config params");
  }
  return {
    host: "127.0.0.1",
    port: 6379
  };
}
var redisClient = new Redis({
  ...getRedisConfig(),
  retryStrategy: REDIS_RETRY_STRATEGY,
  maxRetriesPerRequest: null,
  enableReadyCheck: true,
  reconnectOnError: (err) => {
    const targetError = "READONLY";
    return err.message.includes(targetError);
  }
});
redisClient.on("connect", () => {
  logger.info("Redis client connected successfully");
});
redisClient.on("error", (err) => {
  logger.error("Redis client error:", err);
});
redisClient.on("ready", () => {
  logger.info("Redis client ready");
});
redisClient.on("reconnecting", () => {
  logger.info("Redis client reconnecting");
});
process.on("SIGTERM", () => {
  redisClient.quit().then(() => {
    logger.info("Redis client disconnected through app termination");
    process.exit(0);
  });
});
var redis_default = redisClient;

// src/shared/data/repositories/queue/data/transaction.ts
var TransactionQueue = class {
  _transactionQueue;
  constructor() {
    this._transactionQueue = new Queue("transaction-processing", {
      connection: redis_default,
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: false,
        backoff: { type: "exponential", delay: 1e3 }
      }
    });
  }
  get queue() {
    return this._transactionQueue;
  }
  createWorker(callback) {
    return new Worker("transaction-processing", callback, {
      connection: redis_default
    });
  }
};

// src/shared/data/repositories/queue/data/webhook-retry.ts
import { Queue as Queue2, Worker as Worker2 } from "bullmq";
var WebhookRetryQueue = class {
  _webhookRetryQueue;
  constructor() {
    this._webhookRetryQueue = new Queue2("webhook-retry", {
      connection: redis_default,
      defaultJobOptions: {
        removeOnComplete: {
          age: 3600,
          // Keep completed jobs for 1 hour
          count: 1e3
          // Keep last 1000 completed jobs
        },
        removeOnFail: {
          age: 86400
          // Keep failed jobs for 24 hours
        },
        attempts: 10,
        // Max retry attempts
        backoff: {
          type: "fixed",
          delay: 2 * 60 * 1e3
          // 2 minutes
        }
      }
    });
  }
  get queue() {
    return this._webhookRetryQueue;
  }
  /**
   * Add a webhook job to the retry queue
   */
  async addJob(jobData, priority) {
    const job = await this._webhookRetryQueue.add(
      "webhook-delivery",
      jobData,
      {
        jobId: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        priority: priority || 0
        // Higher priority = processed first
      }
    );
    return {
      jobId: job.id,
      status: "queued",
      message: "Webhook queued for processing"
    };
  }
  /**
   * Bulk add webhook jobs (reduces Redis round-trips)
   */
  async addJobsBulk(jobs) {
    const jobsToAdd = jobs.map(({ url, payload, secretKey, priority }) => ({
      name: "webhook-delivery",
      data: {
        url,
        payload,
        attempt: 0,
        secretKey
      },
      opts: {
        jobId: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        priority: priority || 0
      }
    }));
    const addedJobs = await this._webhookRetryQueue.addBulk(jobsToAdd);
    return {
      jobIds: addedJobs.map((job) => job.id),
      status: "queued",
      count: addedJobs.length,
      message: `${addedJobs.length} webhooks queued for processing`
    };
  }
  /**
   * Create a worker to process webhook jobs
   */
  createWorker(callback) {
    return new Worker2(
      "webhook-retry",
      async (job) => {
        try {
          await callback(job);
        } catch (error) {
          if (error.is500Error) {
            throw error;
          }
          console.log(`Webhook job ${job.id} completed with non-500 error. Not retrying.`);
        }
      },
      {
        connection: redis_default,
        concurrency: 20,
        // Increased from 5 to 20 for better throughput
        limiter: {
          max: 100,
          // Increased from 10 to 100 jobs
          duration: 1e3
          // Per second
        },
        // Optimize worker settings for low latency
        lockDuration: 3e4,
        // 30 seconds lock duration
        lockRenewTime: 15e3,
        // Renew lock every 15 seconds
        stalledInterval: 3e4,
        // Check for stalled jobs every 30 seconds
        maxStalledCount: 2,
        // Max times a job can be stalled before failing
        // Use skipLockRenewal for faster processing (if job completes quickly)
        skipLockRenewal: false
      }
    );
  }
  /**
   * Get queue statistics
   */
  async getStats() {
    const [waiting, active, completed, failed, delayed] = await Promise.all([
      this._webhookRetryQueue.getWaitingCount(),
      this._webhookRetryQueue.getActiveCount(),
      this._webhookRetryQueue.getCompletedCount(),
      this._webhookRetryQueue.getFailedCount(),
      this._webhookRetryQueue.getDelayedCount()
    ]);
    return {
      waiting,
      active,
      completed,
      failed,
      delayed,
      total: waiting + active + completed + failed + delayed
    };
  }
  /**
   * Get job by ID
   */
  async getJob(jobId) {
    return await this._webhookRetryQueue.getJob(jobId);
  }
  /**
   * Cancel/remove a job
   */
  async cancelJob(jobId) {
    const job = await this.getJob(jobId);
    if (job) {
      await job.remove();
      return { success: true, message: `Job ${jobId} cancelled` };
    }
    return { success: false, message: `Job ${jobId} not found` };
  }
  /**
   * Get failed jobs
   */
  async getFailedJobs(start = 0, end = 10) {
    return await this._webhookRetryQueue.getFailed(start, end);
  }
  /**
   * Retry a failed job
   */
  async retryFailedJob(jobId) {
    const job = await this.getJob(jobId);
    if (job && await job.isFailed()) {
      await job.retry();
      return { success: true, message: `Job ${jobId} queued for retry` };
    }
    return { success: false, message: `Job ${jobId} not found or not failed` };
  }
  /**
   * Clean old jobs
   */
  async cleanJobs() {
    await this._webhookRetryQueue.clean(36e5, 1e3, "completed");
    await this._webhookRetryQueue.clean(864e5, 100, "failed");
  }
  /**
   * Close the queue connection
   */
  async close() {
    await this._webhookRetryQueue.close();
  }
};

// src/shared/data/repositories/queue/index.ts
var QueueRepository = class _QueueRepository {
  constructor(_transaction, _webhookRetry) {
    this._transaction = _transaction;
    this._webhookRetry = _webhookRetry;
  }
  static async new() {
    return new _QueueRepository(
      new TransactionQueue(),
      new WebhookRetryQueue()
    );
  }
  get transaction() {
    return this._transaction;
  }
  get webhook() {
    return this._webhookRetry;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
init_dist_es2();
init_dist_es19();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
init_dist_es2();
init_dist_es19();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
init_dist_es17();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
init_dist_es21();
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_dist_es2();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
init_dist_es15();
init_dist_es2();
init_dist_es();
init_dist_es3();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
init_dist_es2();
init_dist_es14();
var THROW_IF_EMPTY_BODY = {
  CopyObjectCommand: true,
  UploadPartCopyCommand: true,
  CompleteMultipartUploadCommand: true
};
var MAX_BYTES_TO_INSPECT = 3e3;
var throw200ExceptionsMiddleware = (config2) => (next, context) => async (args) => {
  const result = await next(args);
  const { response } = result;
  if (!HttpResponse.isInstance(response)) {
    return result;
  }
  const { statusCode, body: sourceBody } = response;
  if (statusCode < 200 || statusCode >= 300) {
    return result;
  }
  const isSplittableStream = typeof sourceBody?.stream === "function" || typeof sourceBody?.pipe === "function" || typeof sourceBody?.tee === "function";
  if (!isSplittableStream) {
    return result;
  }
  let bodyCopy = sourceBody;
  let body = sourceBody;
  if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) {
    [bodyCopy, body] = await splitStream2(sourceBody);
  }
  response.body = body;
  const bodyBytes = await collectBody2(bodyCopy, {
    streamCollector: async (stream) => {
      return headStream2(stream, MAX_BYTES_TO_INSPECT);
    }
  });
  if (typeof bodyCopy?.destroy === "function") {
    bodyCopy.destroy();
  }
  const bodyStringTail = config2.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
  if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
    const err = new Error("S3 aborted request");
    err.name = "InternalError";
    throw err;
  }
  if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
    response.statusCode = 400;
  }
  return result;
};
var collectBody2 = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var throw200ExceptionsMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true
};
var getThrow200ExceptionsPlugin = (config2) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(throw200ExceptionsMiddleware(config2), throw200ExceptionsMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
init_dist_es19();
var S3ServiceException = class _S3ServiceException extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class _NoSuchUpload extends S3ServiceException {
  name = "NoSuchUpload";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class _ObjectNotInActiveTierError extends S3ServiceException {
  name = "ObjectNotInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class _BucketAlreadyExists extends S3ServiceException {
  name = "BucketAlreadyExists";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class _BucketAlreadyOwnedByYou extends S3ServiceException {
  name = "BucketAlreadyOwnedByYou";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class _NoSuchBucket extends S3ServiceException {
  name = "NoSuchBucket";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var InvalidObjectState = class _InvalidObjectState extends S3ServiceException {
  name = "InvalidObjectState";
  $fault = "client";
  StorageClass;
  AccessTier;
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class _NoSuchKey extends S3ServiceException {
  name = "NoSuchKey";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchKey.prototype);
  }
};
var NotFound = class _NotFound extends S3ServiceException {
  name = "NotFound";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NotFound.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
init_dist_es20();
init_dist_es15();
init_dist_es2();
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
init_dist_es19();
var EncryptionTypeMismatch = class _EncryptionTypeMismatch extends S3ServiceException {
  name = "EncryptionTypeMismatch";
  $fault = "client";
  constructor(opts) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EncryptionTypeMismatch.prototype);
  }
};
var InvalidRequest = class _InvalidRequest extends S3ServiceException {
  name = "InvalidRequest";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRequest.prototype);
  }
};
var InvalidWriteOffset = class _InvalidWriteOffset extends S3ServiceException {
  name = "InvalidWriteOffset";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidWriteOffset.prototype);
  }
};
var TooManyParts = class _TooManyParts extends S3ServiceException {
  name = "TooManyParts";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TooManyParts.prototype);
  }
};
var ObjectAlreadyInActiveTierError = class _ObjectAlreadyInActiveTierError extends S3ServiceException {
  name = "ObjectAlreadyInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_DeleteObjectCommand = async (input, context) => {
  const b = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xam]: input[_MFA],
    [_xarp]: input[_RP],
    [_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
    [_xaebo]: input[_EBO],
    [_im]: input[_IM],
    [_xaimlmt]: [() => isSerializableHeaderValue(input[_IMLMT]), () => dateToUtcString(input[_IMLMT]).toString()],
    [_xaims]: [() => isSerializableHeaderValue(input[_IMS]), () => input[_IMS].toString()]
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "DeleteObject"],
    [_vI]: [, input[_VI]]
  });
  let body;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};
var de_DeleteObjectCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_VI]: [, output.headers[_xavi]],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await de_InvalidRequestRes(parsedOutput, context);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await de_InvalidWriteOffsetRes(parsedOutput, context);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await de_TooManyPartsRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError2 = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_EncryptionTypeMismatchRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new EncryptionTypeMismatch({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidObjectStateRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidRequestRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidRequest({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidWriteOffsetRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidWriteOffset({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchBucketRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchKeyRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchUploadRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NotFoundRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_TooManyPartsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new TooManyParts({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var deserializeMetadata2 = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var _AT = "AccessTier";
var _BGR = "BypassGovernanceRetention";
var _DM = "DeleteMarker";
var _EBO = "ExpectedBucketOwner";
var _IM = "IfMatch";
var _IMLMT = "IfMatchLastModifiedTime";
var _IMS = "IfMatchSize";
var _MFA = "MFA";
var _RC = "RequestCharged";
var _RP = "RequestPayer";
var _SC = "StorageClass";
var _VI = "VersionId";
var _im = "if-match";
var _vI = "versionId";
var _xabgr = "x-amz-bypass-governance-retention";
var _xadm = "x-amz-delete-marker";
var _xaebo = "x-amz-expected-bucket-owner";
var _xaimlmt = "x-amz-if-match-last-modified-time";
var _xaims = "x-amz-if-match-size";
var _xam = "x-amz-mfa";
var _xarc = "x-amz-request-charged";
var _xarp = "x-amz-request-payer";
var _xavi = "x-amz-version-id";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/DeleteObjectCommand.js
init_dist_es26();
init_dist_es4();
init_dist_es19();
var DeleteObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs, config2, o) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config2)
  ];
}).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").f(void 0, void 0).ser(se_DeleteObjectCommand).de(de_DeleteObjectCommand).build() {
};

// src/shared/data/repositories/files/index.ts
import { diskStorage } from "multer";
var FileRepository = class {
  storageS3;
  // private s3Config;
  constructor() {
    this.storageS3 = diskStorage({ destination: `${process.cwd()}/public/image` });
  }
  get getStorageEngine() {
    return this.storageS3;
  }
  deleteFile = async (fileName) => {
    try {
      const command = new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName.split("/")[fileName.split("/").length - 1]
      });
    } catch (err) {
      console.error(err);
    }
  };
};
var files_default = FileRepository;

// src/shared/data/repositories/email/index.ts
import nodemailer from "nodemailer";

// src/shared/data/repositories/email/template.ts
var EmailGenerator = class {
  generatePasswordResetEmail(token, user_name) {
    const subject = "Reset Your Password";
    const html = `
      <p>Hi ${user_name},</p>
      <p>You requested to reset your password. Click the link below to proceed:</p>
      <a href="${process.env.FRONTEND_URL}/reset-password?token=${token}">Reset Password</a>
      <p>If you didn't request this, please ignore this email.</p>
    `;
    return { subject, html };
  }
  generateAccountConfirmationEmail(token, user_name) {
    const subject = "Confirm Your Account";
    const html = `
      <p>Hi ${user_name},</p>
      <p>Thank you for registering. Please confirm your account by clicking the link below:</p>
      <a href="${process.env.FRONTEND_URL}/confirm-account?token=${token}">Confirm Account</a>
      <p>If you didn't create this account, please ignore this email.</p>
    `;
    return { subject, html };
  }
  generateWelcomeEmail(user_name) {
    const subject = "Welcome to Our Service!";
    const html = `
      <p>Hi ${user_name},</p>
      <p>Welcome to our service! We're excited to have you on board.</p>
      <p>If you have any questions, feel free to reach out to our support team.</p>
    `;
    return { subject, html };
  }
  generateVerificationCodeEmail(code, user_name) {
    const subject = "Your Verification Code";
    const html = `
      <p>Hi ${user_name},</p>
      <p>Here is your verification code:</p>
      <h2 style="letter-spacing: 4px;">${code}</h2>
      <p>This code is valid for 5 minutes. Please do not share it with anyone.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `;
    return { subject, html };
  }
  generateUserNotificationEmail(user_name, title, message) {
    const subject = title;
    const html = `
      <p>Hi ${user_name},</p>
      <p>${message}</p>
      <p>If you have any questions, feel free to contact our support team.</p>
    `;
    return { subject, html };
  }
};

// src/shared/data/repositories/email/index.ts
var checkEnv = () => {
  if (!process.env.EMAIL_SERVICE) {
    throw new Error("EMAIL_SERVICE is not set");
  }
  if (!process.env.EMAIL_APP_USER) {
    throw new Error("EMAIL_APP_USER is not set");
  }
  if (!process.env.EMAIL_APP_PASSWORD) {
    throw new Error("EMAIL_APP_PASSWORD is not set");
  }
  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM is not set");
  }
};
var EmailRepository = class {
  from;
  template;
  transporter;
  constructor() {
    checkEnv();
    this.from = process.env.EMAIL_FROM;
    this.template = new EmailGenerator();
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_APP_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });
  }
  sendEmail = async (to, template) => {
    const mailOptions = {
      from: this.from,
      to,
      subject: template.subject,
      html: template.html
    };
    this.transporter.sendMail(mailOptions, (err) => {
      if (err) console.error("Email failed :", err);
    });
  };
};
var email_default = EmailRepository;

// src/shared/adapter/libraries/socket.ts
import { Server as SocketServer } from "socket.io";
var connection;

// src/shared/data/repositories/socket/index.ts
var SocketRepository = class {
  constructor() {
  }
  get getConnection() {
    return connection;
  }
};

// src/shared/data/repositories/cache/index.ts
var CacheRepository = class _CacheRepository {
  constructor(redis) {
    this.redis = redis;
  }
  static async new() {
    return new _CacheRepository(redis_default);
  }
  async set(key, value, ttlSeconds) {
    await this.redis.set(key, value, "EX", ttlSeconds);
  }
  async get(key) {
    const result = await this.redis.get(key);
    return result ?? null;
  }
  async delete(key) {
    await this.redis.del(key);
  }
  async exists(key) {
    const result = await this.redis.exists(key);
    return result === 1;
  }
};

// src/shared/data/repositories/index.ts
var Repositories = class _Repositories {
  constructor(crypto, encryption, socket, file, email, queue, cache) {
    this.crypto = crypto;
    this.encryption = encryption;
    this.socket = socket;
    this.file = file;
    this.email = email;
    this.queue = queue;
    this.cache = cache;
  }
  static new = async () => {
    return new _Repositories(
      new CryptoRepository(),
      new encryption_default(),
      new SocketRepository(),
      new files_default(),
      new email_default(),
      await QueueRepository.new(),
      await CacheRepository.new()
    );
  };
};

// src/shared/data/tools/payment/index.ts
var PaymentTools = class {
  constructor(models, repo) {
    this.models = models;
    this.repo = repo;
  }
  MAX_ATTEMPT = 12;
  PAYMENT_TIMEOUT = 15e3;
  FAILURE_RETRY_DELAY = 3e3;
  activeIntervals = /* @__PURE__ */ new Set();
  worker = null;
  async processTransaction(tx) {
    try {
      if (!tx?.id || !tx?.user?.user_wallet?.wallet || !tx?.blockchain) {
        paymentLogger.error(`Invalid transaction data for ID: ${tx?.id}`, { tx });
        return { status: false, message: "Invalid transaction data" };
      }
      const Block = this.repo.crypto.getBlock[tx.blockchain];
      if (!Block) {
        paymentLogger.error(`Unsupported blockchain: ${tx.blockchain}`, { txId: tx.id });
        return { status: false, message: `Unsupported blockchain: ${tx.blockchain}` };
      }
      const walletInstance = await Block.generateWallet(tx.user.user_wallet.wallet, "forwarder");
      if (!walletInstance) {
        paymentLogger.error(`Failed to generate wallet for transaction: ${tx.id}`);
        return { status: false, message: "Failed to generate wallet" };
      }
      const confirmation = await withTimeout(
        walletInstance.confirmPayment(tx),
        this.PAYMENT_TIMEOUT
      );
      if (!confirmation?.status) {
        paymentLogger.warn(`Payment confirmation failed for transaction: ${tx.id}`, {
          confirmation,
          txId: tx.id
        });
        return confirmation || { status: false, message: "Payment confirmation failed" };
      }
      paymentLogger.info(`Payment confirmed successfully for transaction: ${tx.id}`);
      logPaymentEvent("PAYMENT_CONFIRMED", tx.id, {
        blockchain: tx.blockchain,
        amount: tx.package?.subscription_fee,
        status: "success"
      });
      return { status: true, data: tx };
    } catch (err) {
      paymentLogger.error(`Error processing transaction ${tx?.id}:`, {
        error: err.message,
        stack: err.stack,
        txId: tx?.id
      });
      return { status: false, message: "Unable to process transaction" };
    }
  }
  async completeTransaction(tx) {
    try {
      if (!tx?.id || !tx?.account?.account_wallet?.account) {
        paymentLogger.error(`Invalid transaction data for completion: ${tx?.id}`, { tx });
        return { status: false, message: "Invalid transaction data for completion" };
      }
      const account = tx.account.account_wallet.account;
      if (!account?.api_info?.public_key || !account?.api_info?.webhook_url) {
        paymentLogger.error(`Invalid account data for transaction: ${tx.id}`, {
          accountId: account?.id,
          txId: tx.id
        });
        return { status: false, message: "Invalid account data" };
      }
      tx.status = "success";
      tx.completed_at = /* @__PURE__ */ new Date();
      tx.process_status = "completed";
      const [encrypted, updatedTx] = await Promise.all([
        this.repo.encryption.encryptWithPublicKey(tx, account.api_info.public_key),
        this.models.transactions.save(tx)
      ]);
      if (!updatedTx) {
        paymentLogger.error(`Failed to update transaction status: ${tx.id}`);
        return { status: false, message: "Unable to save transaction" };
      }
      if (!encrypted.status) {
        paymentLogger.error(`Failed to encrypt transaction data: ${tx.id}`, {
          encryptionError: encrypted.message,
          txId: tx.id
        });
        return encrypted;
      }
      try {
        this.repo.socket.getConnection.to(tx.id).emit("_completed", updatedTx);
        await this.models.accounts.increment(
          { id: tx.account.account_id },
          "balance",
          tx.package.subscription_fee
        );
        this.repo.queue.webhook.addJob({
          url: account.api_info.webhook_url,
          payload: {
            id: tx.id,
            type: "payment.completed" /* PAYMENT_COMPLETED */,
            payload: updatedTx.toGeneralResponse,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          },
          attempt: 0,
          secretKey: account.api_info.secret_key
        });
      } catch (sideEffectError) {
        paymentLogger.error(`Side effects failed for transaction: ${tx.id}`, {
          error: sideEffectError.message,
          txId: tx.id
        });
      }
      await this.models.transactions.save(updatedTx);
      paymentLogger.info(`Transaction completed successfully: ${tx.id}`);
      return { status: true, data: tx };
    } catch (err) {
      paymentLogger.error(`Error completing transaction ${tx?.id}:`, {
        error: err.message,
        stack: err.stack,
        txId: tx?.id
      });
      return {
        status: false,
        message: "Unable to complete transaction"
      };
    }
  }
  async failTransaction(tx, err) {
    try {
      if (!tx?.id) {
        paymentLogger.error(`Invalid transaction data for failure: ${tx?.id}`, { tx });
        return { status: false, message: "Invalid transaction data" };
      }
      const updated = await this.models.transactions.update(tx.id, {
        status: "failed",
        errors: [...tx.errors || [], err.message],
        completed_at: /* @__PURE__ */ new Date(),
        process_status: "failed"
      });
      if (!updated) {
        paymentLogger.error(`Failed to update transaction failure status: ${tx.id}`);
        return { status: false, message: "Unable to update transaction" };
      }
      paymentLogger.warn(`Transaction marked as failed: ${tx.id}`, {
        error: err.message,
        txId: tx.id
      });
      return { status: true, data: tx };
    } catch (err2) {
      paymentLogger.error(`Error failing transaction ${tx?.id}:`, {
        error: err2.message,
        stack: err2.stack,
        txId: tx?.id
      });
      return { status: false, message: "Unable to update transaction" };
    }
  }
  listenForTransaction = () => {
    if (this.worker) {
      paymentLogger.warn("Transaction worker already exists, skipping initialization");
      return;
    }
    this.worker = this.repo.queue.transaction.createWorker(async (job) => {
      const txId = job.data?.id;
      if (!txId) {
        paymentLogger.error("Job data missing transaction ID", { jobData: job.data });
        throw new Error("Missing transaction ID in job data");
      }
      paymentLogger.info(`Processing transaction job: ${txId}`, {
        attemptsMade: job.attemptsMade,
        txId
      });
      return await this.models.dataSource.transaction(async (manager) => {
        const transaction = await manager.findOne(this.models.transactions.target, {
          where: { id: txId },
          relations: ["from", "to", "to.account_wallet", "to.account_wallet.account"]
        });
        if (!transaction) {
          paymentLogger.error(`Transaction not found: ${txId}`);
          throw new Error(`Transaction not found: ${txId}`);
        }
        if (transaction.process_status === "completed") {
          paymentLogger.info(`Transaction already completed: ${txId}`);
          return;
        }
        if (transaction.process_status === "failed") {
          paymentLogger.info(`Transaction already failed: ${txId}`);
          return;
        }
        if (transaction.process_status === "pending") {
          const response = await this.processTransaction(transaction);
          if (!response.status) {
            paymentLogger.warn(`Transaction processing failed: ${txId}`, {
              error: response.message,
              txId
            });
            throw new Error(response.message || "Transaction processing failed");
          }
          await manager.update(this.models.transactions.target, txId, {
            process_status: "processed"
          });
        }
        const completed = await this.completeTransaction(transaction);
        if (!completed.status) {
          paymentLogger.warn(`Transaction completion failed: ${txId}`, {
            error: completed.message,
            txId
          });
          throw new Error(completed.message || "Transaction completion failed");
        }
        paymentLogger.info(`Transaction processed successfully: ${txId}`);
      });
    });
    this.worker.on("failed", async (job, err) => {
      if (!job) {
        paymentLogger.error("Job failed but job data is missing", { error: err.message });
        return;
      }
      const txId = job.data?.id;
      if (!txId) {
        paymentLogger.error("Failed job missing transaction ID", {
          error: err.message,
          jobData: job.data
        });
        return;
      }
      paymentLogger.warn(`Transaction job failed: ${txId}`, {
        attemptsMade: job.attemptsMade,
        maxAttempts: this.MAX_ATTEMPT,
        error: err.message,
        txId
      });
      if (job.attemptsMade >= this.MAX_ATTEMPT) {
        paymentLogger.error(`Transaction failed after ${this.MAX_ATTEMPT} attempts: ${txId}`);
        const interval = setInterval(async () => {
          try {
            const response = await this.failTransaction(job.data, err);
            if (response.status) {
              paymentLogger.info(`Transaction marked as failed: ${txId}`);
              clearInterval(interval);
              this.activeIntervals.delete(interval);
            }
          } catch (failError) {
            paymentLogger.error(`Error marking transaction as failed: ${txId}`, {
              error: failError.message,
              txId
            });
          }
        }, this.FAILURE_RETRY_DELAY);
        this.activeIntervals.add(interval);
      }
    });
    this.worker.on("error", (err) => {
      paymentLogger.error("Transaction worker error:", {
        error: err.message,
        stack: err.stack
      });
    });
    this.worker.on("ready", () => {
      paymentLogger.info("Transaction worker is ready");
    });
    paymentLogger.info("Transaction worker initialized successfully");
  };
  // Cleanup method for graceful shutdown
  async cleanup() {
    paymentLogger.info("Cleaning up PaymentTools resources...");
    this.activeIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.activeIntervals.clear();
    if (this.worker) {
      try {
        await this.worker.close();
        paymentLogger.info("Transaction worker closed successfully");
      } catch (err) {
        paymentLogger.error("Error closing transaction worker:", {
          error: err.message
        });
      }
      this.worker = null;
    }
    paymentLogger.info("PaymentTools cleanup completed");
  }
};

// src/shared/data/tools/webhook/index.ts
import axios from "axios";
import { Agent as HttpAgent } from "http";
import { Agent as HttpsAgent } from "https";
var WebhookTools = class _WebhookTools {
  constructor(models, repo) {
    this.models = models;
    this.repo = repo;
    if (!_WebhookTools.queueInstance) {
      _WebhookTools.queueInstance = new WebhookRetryQueue();
    }
    this.webhookQueue = _WebhookTools.queueInstance;
    this.axiosInstance = axios.create({
      timeout: 1e4,
      // 10 second timeout for faster failures
      maxRedirects: 3,
      httpAgent: new HttpAgent({
        keepAlive: true,
        keepAliveMsecs: 1e3,
        maxSockets: 50,
        maxFreeSockets: 10,
        timeout: 1e4
      }),
      httpsAgent: new HttpsAgent({
        keepAlive: true,
        keepAliveMsecs: 1e3,
        maxSockets: 50,
        maxFreeSockets: 10,
        timeout: 1e4
      }),
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive"
      }
    });
  }
  webhookQueue;
  axiosInstance;
  worker = null;
  static queueInstance = null;
  /**
   * Start listening for webhook jobs
   */
  listenForWebhooks = () => {
    if (this.worker) {
      logger.info("Webhook worker is already running");
      return;
    }
    logger.info("Starting webhook worker...");
    this.worker = this.webhookQueue.createWorker(async (job) => {
      logger.info(`Processing webhook job ${job.id}, attempt ${job.attemptsMade + 1}/${job.opts.attempts}`);
      await job.updateProgress(10);
      try {
        const result = await this.executeWebhook(job.data.url, job.data.payload, job.data.secretKey);
        await job.updateProgress(100);
        logger.info(`Webhook job ${job.id} completed successfully:`, result);
      } catch (error) {
        logger.error(`Webhook job ${job.id} failed:`, error.message);
        if (error.is500Error) {
          throw error;
        }
        logger.info(`Webhook job ${job.id} completed with non-retryable error`);
      }
    });
    this.worker.on("completed", (job) => {
      logger.info(`\u2705 Webhook job ${job.id} completed after ${job.attemptsMade} attempt(s)`);
    });
    this.worker.on("failed", (job, err) => {
      if (job) {
        logger.error(`\u274C Webhook job ${job.id} failed after ${job.attemptsMade} attempt(s):`, err.message);
        if (job.attemptsMade >= (job.opts.attempts || 10)) {
          logger.error(`\u{1F6AB} Webhook job ${job.id} exhausted all retries. Giving up.`);
        }
      }
    });
    this.worker.on("error", (err) => {
      logger.error("Webhook worker error:", err);
    });
    this.worker.on("stalled", (jobId) => {
      logger.warn(`\u26A0\uFE0F  Webhook job ${jobId} has stalled`);
    });
    logger.info("\u2705 Webhook worker started successfully");
  };
  /**
   * Stop the webhook worker
   */
  stopWebhookWorker = async () => {
    if (!this.worker) {
      logger.info("Webhook worker is not running");
      return;
    }
    logger.info("Stopping webhook worker...");
    await this.worker.close();
    this.worker = null;
    logger.info("Webhook worker stopped");
  };
  /**
   * Execute webhook request with signature verification
   */
  executeWebhook = async (url, payload, secretKey) => {
    try {
      const timestamp2 = Date.now().toString();
      const payloadString = JSON.stringify(payload);
      const signature = this.repo.encryption.generateWebhookSignature(payloadString, timestamp2, secretKey);
      const response = await this.axiosInstance.post(url, payload, {
        headers: {
          "x-zypay-signature": signature,
          "x-zypay-timestamp": timestamp2
        }
      });
      return {
        status: response.status,
        data: response.data,
        success: response.status < 400
      };
    } catch (error) {
      if (error.response) {
        const result = {
          status: error.response.status,
          data: error.response.data,
          success: false,
          message: `HTTP ${error.response.status}: ${error.response.statusText}`
        };
        if (error.response.status === 500) {
          const retryError = new Error(result.message);
          retryError.is500Error = true;
          retryError.result = result;
          throw retryError;
        }
        return result;
      } else if (error.code === "ECONNABORTED") {
        const retryError = new Error("Request timeout");
        retryError.is500Error = true;
        retryError.result = {
          status: "timeout",
          success: false,
          message: "Request timeout"
        };
        throw retryError;
      } else {
        const retryError = new Error("Network error");
        retryError.is500Error = true;
        retryError.result = {
          status: "network_error",
          success: false,
          message: "Network error"
        };
        throw retryError;
      }
    }
  };
  /**
   * Fire-and-forget webhook (queue immediately, no wait)
   */
  sendWebhookAsync = async (url, payload, secretKey) => {
    setImmediate(() => {
      this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey }).catch((err) => {
        logger.error("Failed to queue webhook:", err);
      });
    });
    return {
      status: "queued",
      message: "Webhook queued for async processing"
    };
  };
  /**
   * Standard webhook with immediate attempt (backward compatible)
   */
  sendWebhook = async (url, payload, secretKey, options) => {
    if (options?.skipImmediate) {
      return this.sendWebhookAsync(url, payload, secretKey);
    }
    try {
      const result = await this.executeWebhook(url, payload, secretKey);
      if (result.status !== 500) {
        return result;
      }
      return await this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey });
    } catch (error) {
      return await this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey });
    }
  };
  /**
   * Bulk send webhooks (optimized for multiple webhooks)
   */
  sendWebhookBulk = async (webhooks) => {
    return await this.webhookQueue.addJobsBulk(webhooks);
  };
  /**
   * Get webhook queue status
   */
  getWebhookQueueStatus = async () => {
    return await this.webhookQueue.getStats();
  };
  /**
   * Cancel a webhook job
   */
  cancelWebhookJob = async (jobId) => {
    return await this.webhookQueue.cancelJob(jobId);
  };
  /**
   * Get job details
   */
  getWebhookJobDetails = async (jobId) => {
    const job = await this.webhookQueue.getJob(jobId);
    if (!job) {
      return null;
    }
    return {
      id: job.id,
      url: job.data.url,
      attempt: job.attemptsMade,
      maxRetries: job.opts.attempts || 10,
      createdAt: job.timestamp,
      status: await job.getState(),
      progress: job.progress,
      failedReason: job.failedReason
    };
  };
  /**
   * Get failed webhook jobs
   */
  getFailedWebhooks = async (start = 0, end = 10) => {
    return await this.webhookQueue.getFailedJobs(start, end);
  };
  /**
   * Retry a failed webhook job
   */
  retryFailedWebhook = async (jobId) => {
    return await this.webhookQueue.retryFailedJob(jobId);
  };
  /**
   * Get worker status
   */
  getWorkerStatus = async () => {
    if (!this.worker) {
      return {
        isRunning: false,
        queueStats: await this.webhookQueue.getStats()
      };
    }
    return {
      isRunning: true,
      isPaused: await this.worker.isPaused(),
      isClosing: this.worker.closing,
      queueStats: await this.webhookQueue.getStats()
    };
  };
  /**
   * Pause the worker
   */
  pauseWorker = async () => {
    if (this.worker) {
      await this.worker.pause();
      logger.info("Webhook worker paused");
    }
  };
  /**
   * Resume the worker
   */
  resumeWorker = async () => {
    if (this.worker) {
      await this.worker.resume();
      console.log("Webhook worker resumed");
    }
  };
  /**
   * Clean old jobs
   */
  cleanOldJobs = async () => {
    await this.webhookQueue.cleanJobs();
    console.log("Cleaned old webhook jobs");
  };
};

// src/shared/data/tools/index.ts
var Tools = class _Tools {
  constructor(payment, webhook) {
    this.payment = payment;
    this.webhook = webhook;
  }
  static new = async (models, repo) => {
    return new _Tools(
      new PaymentTools(models, repo),
      new WebhookTools(models, repo)
    );
  };
};

// src/shared/adapter/libraries/postgres/repo/index.ts
import { DataSource } from "typeorm";

// src/shared/adapter/libraries/postgres/repo/admin-analytics.ts
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from "date-fns";
var AdminAnalyticsRepository = class extends Repository {
  async calculateAnalytics(models, query) {
    const { period_type = "daily", start_date, end_date } = query;
    const now = /* @__PURE__ */ new Date();
    let periodStart;
    let periodEnd;
    switch (period_type) {
      case "hourly":
        periodStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
        periodEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1);
        break;
      case "daily":
        periodStart = startOfDay(start_date || now);
        periodEnd = endOfDay(end_date || now);
        break;
      case "weekly":
        periodStart = startOfWeek(start_date || now);
        periodEnd = endOfWeek(end_date || now);
        break;
      case "monthly":
        periodStart = startOfMonth(start_date || now);
        periodEnd = endOfMonth(end_date || now);
        break;
      case "yearly":
        periodStart = startOfYear(start_date || now);
        periodEnd = endOfYear(end_date || now);
        break;
      case "all-time":
        periodStart = /* @__PURE__ */ new Date(0);
        periodEnd = now;
        break;
    }
    const [
      merchantMetrics,
      accountMetrics,
      transactionMetrics,
      subscriberMetrics,
      sdkMetrics,
      systemMetrics
    ] = await Promise.all([
      this.calculateMerchantMetrics(models, periodStart, periodEnd),
      this.calculateAccountMetrics(models, periodStart, periodEnd),
      this.calculateTransactionMetrics(models, periodStart, periodEnd),
      this.calculateSubscriberMetrics(models, periodStart, periodEnd),
      this.calculateSDKMetrics(models, periodStart, periodEnd),
      this.calculateSystemMetrics(models, periodStart, periodEnd)
    ]);
    const analytics = this.create({
      merchant_metrics: merchantMetrics,
      account_metrics: accountMetrics,
      transaction_metrics: transactionMetrics,
      subscriber_metrics: subscriberMetrics,
      sdk_metrics: sdkMetrics,
      system_metrics: systemMetrics,
      period_type,
      period_start: periodStart,
      period_end: periodEnd
    });
    return this.save(analytics);
  }
  /**
   * Calculate merchant-related metrics
   */
  async calculateMerchantMetrics(models, periodStart, periodEnd) {
    const now = /* @__PURE__ */ new Date();
    const today = startOfDay(now);
    const weekStart = startOfWeek(now);
    const monthStart = startOfMonth(now);
    const totalMerchants = await models.merchant.count();
    const activeMerchantsCount = await models.merchant.createQueryBuilder("merchant").innerJoin("merchant.setting.accounts", "account").innerJoin("account.analytics", "analytics").where("analytics.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).andWhere("analytics.total_transactions_value > 0").distinct(true).getCount();
    const inactiveMerchants = totalMerchants - activeMerchantsCount;
    const newMerchantsToday = await models.merchant.count({
      where: { created_at: MoreThanOrEqual(today) }
    });
    const newMerchantsThisWeek = await models.merchant.count({
      where: { created_at: MoreThanOrEqual(weekStart) }
    });
    const newMerchantsThisMonth = await models.merchant.count({
      where: { created_at: MoreThanOrEqual(monthStart) }
    });
    const basicCount = await models.merchant.count({
      where: { setting: { subscription: { package: "Basic" } } }
    });
    const proCount = await models.merchant.count({
      where: { setting: { subscription: { package: "Pro" } } }
    });
    const enterpriseCount = await models.merchant.count({
      where: { setting: { subscription: { package: "Enterprise" } } }
    });
    return {
      total_merchants: totalMerchants,
      active_merchants: activeMerchantsCount,
      inactive_merchants: inactiveMerchants,
      new_merchants_today: newMerchantsToday,
      new_merchants_this_week: newMerchantsThisWeek,
      new_merchants_this_month: newMerchantsThisMonth,
      merchants_by_subscription: {
        basic: basicCount,
        pro: proCount,
        enterprise: enterpriseCount
      }
    };
  }
  /**
   * Calculate account-related metrics
   */
  async calculateAccountMetrics(models, periodStart, periodEnd) {
    const totalAccounts = await models.accounts.count();
    const activeAccounts = await models.accounts.createQueryBuilder("account").innerJoin("account.analytics", "analytics").where("analytics.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).andWhere("analytics.total_transactions_value > 0").distinct(true).getCount();
    const inactiveAccounts = totalAccounts - activeAccounts;
    const subscriptionAccounts = await models.accounts.count({
      where: { details: { account_type: "subscription" } }
    });
    const oneTimeAccounts = await models.accounts.count({
      where: { details: { account_type: "one-time" } }
    });
    const freeAccounts = await models.accounts.count({
      where: { settings: { plan: "free" } }
    });
    const standardAccounts = await models.accounts.count({
      where: { settings: { plan: "standard" } }
    });
    const continuousAccounts = await models.accounts.count({
      where: { settings: { plan: "continuous" } }
    });
    const balanceResult = await models.accounts.createQueryBuilder("account").select("SUM(account.total_balance)", "total").getRawOne();
    const totalBalance = parseFloat(balanceResult?.total || "0");
    return {
      total_accounts: totalAccounts,
      active_accounts: activeAccounts,
      inactive_accounts: inactiveAccounts,
      accounts_by_type: {
        subscription: subscriptionAccounts,
        one_time: oneTimeAccounts
      },
      accounts_by_plan: {
        free: freeAccounts,
        standard: standardAccounts,
        continuous: continuousAccounts
      },
      total_balance: totalBalance
    };
  }
  /**
   * Calculate transaction-related metrics
   */
  async calculateTransactionMetrics(models, periodStart, periodEnd) {
    const now = /* @__PURE__ */ new Date();
    const today = startOfDay(now);
    const weekStart = startOfWeek(now);
    const monthStart = startOfMonth(now);
    const totalTransactions = await models.transactions.count({
      where: { created_at: Between(periodStart, periodEnd) }
    });
    const successfulTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        status: "success"
      }
    });
    const failedTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        status: "failed"
      }
    });
    const pendingTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        status: "pending"
      }
    });
    const successRate = totalTransactions > 0 ? successfulTransactions / totalTransactions * 100 : 0;
    const failedRate = totalTransactions > 0 ? failedTransactions / totalTransactions * 100 : 0;
    const pendingRate = totalTransactions > 0 ? pendingTransactions / totalTransactions * 100 : 0;
    const paymentTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        origin: "payment"
      }
    });
    const payoutTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        origin: "payout"
      }
    });
    const productionTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        type: "production"
      }
    });
    const sandboxTransactions = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        type: "sandbox"
      }
    });
    const blockchainResult = await models.transactions.createQueryBuilder("tx").select("tx.blockchain", "blockchain").addSelect("COUNT(*)", "count").where("tx.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).groupBy("tx.blockchain").getRawMany();
    const transactionsByBlockchain = blockchainResult.reduce((acc, item) => {
      acc[item.blockchain] = parseInt(item.count);
      return acc;
    }, {});
    const transactionsToday = await models.transactions.count({
      where: { created_at: MoreThanOrEqual(today) }
    });
    const transactionsThisWeek = await models.transactions.count({
      where: { created_at: MoreThanOrEqual(weekStart) }
    });
    const transactionsThisMonth = await models.transactions.count({
      where: { created_at: MoreThanOrEqual(monthStart) }
    });
    const revenueResult = await models.transactions.createQueryBuilder("tx").select("SUM((tx.package::jsonb->>'subscription_fee')::numeric)", "total").where("tx.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).andWhere("tx.status = :status", { status: "success" }).getRawOne();
    const totalRevenue = parseFloat(revenueResult?.total || "0");
    const revenueTodayResult = await models.transactions.createQueryBuilder("tx").select("SUM((tx.package::jsonb->>'subscription_fee')::numeric)", "total").where("tx.created_at >= :today", { today }).andWhere("tx.status = :status", { status: "success" }).getRawOne();
    const revenueToday = parseFloat(revenueTodayResult?.total || "0");
    const revenueWeekResult = await models.transactions.createQueryBuilder("tx").select("SUM((tx.package::jsonb->>'subscription_fee')::numeric)", "total").where("tx.created_at >= :weekStart", { weekStart }).andWhere("tx.status = :status", { status: "success" }).getRawOne();
    const revenueThisWeek = parseFloat(revenueWeekResult?.total || "0");
    const revenueMonthResult = await models.transactions.createQueryBuilder("tx").select("SUM((tx.package::jsonb->>'subscription_fee')::numeric)", "total").where("tx.created_at >= :monthStart", { monthStart }).andWhere("tx.status = :status", { status: "success" }).getRawOne();
    const revenueThisMonth = parseFloat(revenueMonthResult?.total || "0");
    const volumeResult = await models.transactions.createQueryBuilder("tx").select("SUM((tx.package::jsonb->>'subscription_fee')::numeric)", "total").where("tx.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).getRawOne();
    const totalVolume = parseFloat(volumeResult?.total || "0");
    return {
      total_transactions: totalTransactions,
      total_volume: totalVolume,
      success_rate: successRate,
      failed_rate: failedRate,
      pending_rate: pendingRate,
      payment_transactions: paymentTransactions,
      payout_transactions: payoutTransactions,
      production_transactions: productionTransactions,
      sandbox_transactions: sandboxTransactions,
      successful_transactions: successfulTransactions,
      failed_transactions: failedTransactions,
      pending_transactions: pendingTransactions,
      transactions_by_blockchain: transactionsByBlockchain,
      transactions_today: transactionsToday,
      transactions_this_week: transactionsThisWeek,
      transactions_this_month: transactionsThisMonth,
      total_revenue: totalRevenue,
      revenue_today: revenueToday,
      revenue_this_week: revenueThisWeek,
      revenue_this_month: revenueThisMonth
    };
  }
  /**
   * Calculate subscriber-related metrics
   */
  async calculateSubscriberMetrics(models, periodStart, periodEnd) {
    const now = /* @__PURE__ */ new Date();
    const today = startOfDay(now);
    const weekStart = startOfWeek(now);
    const monthStart = startOfMonth(now);
    const totalSubscribers = await models.user_wallet.count();
    const newSubscribersToday = await models.user_wallet.count({
      where: { created_at: MoreThanOrEqual(today) }
    });
    const newSubscribersThisWeek = await models.user_wallet.count({
      where: { created_at: MoreThanOrEqual(weekStart) }
    });
    const newSubscribersThisMonth = await models.user_wallet.count({
      where: { created_at: MoreThanOrEqual(monthStart) }
    });
    const subscribersByAccountResult = await models.user_wallet.createQueryBuilder("user_wallet").innerJoin("user_wallet.account", "account").select("account.id", "account_id").addSelect("COUNT(*)", "count").where("user_wallet.created_at BETWEEN :periodStart AND :periodEnd", { periodStart, periodEnd }).groupBy("account.id").getRawMany();
    const subscribersByAccount = subscribersByAccountResult.reduce((acc, item) => {
      acc[item.account_id] = parseInt(item.count);
      return acc;
    }, {});
    return {
      total_subscribers: totalSubscribers,
      new_subscribers_today: newSubscribersToday,
      new_subscribers_this_week: newSubscribersThisWeek,
      new_subscribers_this_month: newSubscribersThisMonth,
      subscribers_by_account: subscribersByAccount
    };
  }
  /**
   * Calculate SDK-related metrics
   */
  async calculateSDKMetrics(models, periodStart, periodEnd) {
    const now = /* @__PURE__ */ new Date();
    const today = startOfDay(now);
    const weekStart = startOfWeek(now);
    const monthStart = startOfMonth(now);
    const totalPaymentRequests = await models.transactions.count({
      where: {
        origin: "payment",
        created_at: Between(periodStart, periodEnd)
      }
    });
    const paymentRequestsToday = await models.transactions.count({
      where: {
        origin: "payment",
        created_at: MoreThanOrEqual(today)
      }
    });
    const paymentRequestsThisWeek = await models.transactions.count({
      where: {
        origin: "payment",
        created_at: MoreThanOrEqual(weekStart)
      }
    });
    const paymentRequestsThisMonth = await models.transactions.count({
      where: {
        origin: "payment",
        created_at: MoreThanOrEqual(monthStart)
      }
    });
    const totalPayoutRequests = await models.transactions.count({
      where: {
        origin: "payout",
        created_at: Between(periodStart, periodEnd)
      }
    });
    const payoutRequestsToday = await models.transactions.count({
      where: {
        origin: "payout",
        created_at: MoreThanOrEqual(today)
      }
    });
    const payoutRequestsThisWeek = await models.transactions.count({
      where: {
        origin: "payout",
        created_at: MoreThanOrEqual(weekStart)
      }
    });
    const payoutRequestsThisMonth = await models.transactions.count({
      where: {
        origin: "payout",
        created_at: MoreThanOrEqual(monthStart)
      }
    });
    const totalWebhooksSent = totalPaymentRequests + totalPayoutRequests;
    const successfulWebhooks = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        process_status: "completed"
      }
    });
    const failedWebhooks = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        process_status: "failed"
      }
    });
    const pendingWebhooks = await models.transactions.count({
      where: {
        created_at: Between(periodStart, periodEnd),
        process_status: "pending"
      }
    });
    const apiUptimePercentage = 99.9;
    const averageResponseTime = 150;
    return {
      total_payment_requests: totalPaymentRequests,
      payment_requests_today: paymentRequestsToday,
      payment_requests_this_week: paymentRequestsThisWeek,
      payment_requests_this_month: paymentRequestsThisMonth,
      total_payout_requests: totalPayoutRequests,
      payout_requests_today: payoutRequestsToday,
      payout_requests_this_week: payoutRequestsThisWeek,
      payout_requests_this_month: payoutRequestsThisMonth,
      total_webhooks_sent: totalWebhooksSent,
      successful_webhooks: successfulWebhooks,
      failed_webhooks: failedWebhooks,
      pending_webhooks: pendingWebhooks,
      api_uptime_percentage: apiUptimePercentage,
      average_response_time: averageResponseTime
    };
  }
  /**
   * Calculate system-related metrics
   */
  async calculateSystemMetrics(models, periodStart, periodEnd) {
    const [
      merchantCount,
      accountCount,
      transactionCount,
      userWalletCount,
      walletCount
    ] = await Promise.all([
      models.merchant.count(),
      models.accounts.count(),
      models.transactions.count(),
      models.user_wallet.count(),
      models.wallets.count()
    ]);
    const totalRecords = merchantCount + accountCount + transactionCount + userWalletCount + walletCount;
    const databaseSize = "N/A";
    const cacheHitRate = 85.5;
    const queueSize = 0;
    const activeJobs = 0;
    const failedJobs = 0;
    return {
      database_size: databaseSize,
      total_records: totalRecords,
      cache_hit_rate: cacheHitRate,
      queue_size: queueSize,
      active_jobs: activeJobs,
      failed_jobs: failedJobs
    };
  }
  /**
   * Get latest analytics for a given period type
   */
  async getLatestAnalytics(periodType) {
    return this.findOne({
      where: { period_type: periodType },
      order: { created_at: "DESC" }
    });
  }
  async getAnalyticsForDateRange(startDate, endDate) {
    return this.find({
      where: {
        period_start: MoreThanOrEqual(startDate),
        period_end: LessThanOrEqual(endDate)
      },
      order: { period_start: "ASC" }
    });
  }
};

// src/shared/adapter/libraries/postgres/repo/merchant-analytics.ts
import { Between as Between2 } from "typeorm";
import { startOfMonth as startOfMonth2, endOfMonth as endOfMonth2, subMonths as subMonths2 } from "date-fns";

// src/shared/adapter/libraries/postgres/repo/type.ts
import { Repository as Repository2 } from "typeorm";
var PaginatedEntity = class _PaginatedEntity {
  list;
  total;
  has_next;
  constructor(param) {
    this.list = param.list;
    this.total = param.total;
    this.has_next = param.has_next;
  }
  map(fn) {
    return new _PaginatedEntity({
      list: this.list.map(fn),
      total: this.total,
      has_next: this.has_next
    });
  }
};
var AppRepository = class extends Repository2 {
  paginate = async (request) => {
    const page = request.options.page || 1;
    const limit = request.options.limit || 10;
    const skip = (page - 1) * limit;
    const [list, total] = await this.findAndCount({
      where: request.where,
      take: limit,
      skip
    });
    const has_next = page * limit < total;
    return new PaginatedEntity({
      list,
      total,
      has_next
    });
  };
};

// src/shared/adapter/libraries/postgres/repo/merchant-analytics.ts
var delta = (curr, prev) => curr - (prev ?? 0);
var MerchantAnalyticsRepository = class extends AppRepository {
  async monthlyRecord(tx, status, type = "production") {
    const now = /* @__PURE__ */ new Date();
    const startCurrent = startOfMonth2(now);
    const endCurrent = endOfMonth2(now);
    const startPrev = startOfMonth2(subMonths2(now, 1));
    const endPrev = endOfMonth2(subMonths2(now, 1));
    const [current, previous] = await Promise.all([
      this.findOne({
        where: {
          account: { id: tx.account.account_id },
          type,
          created_at: Between2(startCurrent, endCurrent)
        }
      }),
      this.findOne({
        where: {
          account: { id: tx.account.account_id },
          type,
          created_at: Between2(startPrev, endPrev)
        }
      })
    ]);
    let analytics = current ?? this.create({
      account: { id: tx.account.account_id },
      merchant: { id: tx.account.merchant_id },
      type,
      created_at: now
    });
    if (!analytics) throw new Error("Unable to create analytics");
    analytics.success_rate_value ??= 0;
    analytics.failed_rate_value ??= 0;
    analytics.pending_transactions_value ??= 0;
    analytics.total_transactions_value ??= 0;
    analytics.total_revenue_value ??= 0;
    if (status === "success") {
      analytics.success_rate_value += 1;
      analytics.total_transactions_value += 1;
      analytics.total_revenue_value += tx.package.subscription_fee;
    }
    if (status === "pending") {
      analytics.pending_transactions_value += 1;
      analytics.total_transactions_value += 1;
    }
    if (status === "failed") {
      analytics.failed_rate_value += 1;
      analytics.total_transactions_value += 1;
    }
    analytics.success_rate_trend = delta(
      analytics.success_rate_value,
      previous?.success_rate_value
    );
    analytics.failed_rate_trend = delta(
      analytics.failed_rate_value,
      previous?.failed_rate_value
    );
    analytics.pending_transactions_trend = delta(
      analytics.pending_transactions_value,
      previous?.pending_transactions_value
    );
    analytics.total_transactions_trend = delta(
      analytics.total_transactions_value,
      previous?.total_transactions_value
    );
    analytics.total_revenue_trend = delta(
      analytics.total_revenue_value,
      previous?.total_revenue_value
    );
    return this.save(analytics);
  }
};

// src/shared/adapter/libraries/postgres/repo/index.ts
var AppDataSource = class extends DataSource {
  getAppRepository(target) {
    return new AppRepository(target, this.manager);
  }
  getMerchantAnalyticsRepository(target) {
    return new MerchantAnalyticsRepository(target, this.manager);
  }
  getAdminAnalyticsRepository(target) {
    return new AdminAnalyticsRepository(target, this.manager);
  }
};

// src/shared/adapter/libraries/postgres/index.ts
var DBConnection = class {
  static dataSource;
  static async connect() {
    try {
      let dbUrl = process.env.POSTGRES_URL;
      if (!dbUrl) {
        throw new Error("POSTGRES_URL is not set");
      }
      logger.info("Database connection initialized");
      this.dataSource = new AppDataSource({
        type: "postgres",
        url: dbUrl,
        entities: Models.getEntities
        // synchronize: true,
        // dropSchema: true,
      });
      await this.dataSource.initialize();
      logger.info("Database connected successfully");
      return this.dataSource;
    } catch (err) {
      logger.error(`Database connection error: ${err}`);
      setTimeout(() => {
        logger.error("Retrying database connection...");
        this.connect();
      }, 5e3);
      throw err;
    }
  }
  static async close() {
    try {
      if (this.dataSource && this.dataSource.isInitialized) {
        await this.dataSource.destroy();
      }
    } catch (err) {
      logger.error(`Error during database disconnection: ${err}`);
      process.exit(1);
    }
  }
};
var postgres_default = DBConnection;

// src/worker.ts
import express from "express";
import http from "http";
var runApp = async () => {
  loadConfig();
  const dataSource = await postgres_default.connect();
  const model = await Models.new(dataSource);
  const repo = await Repositories.new();
  const tools = await Tools.new(model, repo);
  tools.payment.listenForTransaction();
  tools.webhook.listenForWebhooks();
  const app = express();
  const httpServer = http.createServer(app);
  const PORT = process.env.PORT || 8080;
  httpServer.listen(PORT, () => {
    logger.info(`Server in Development Mode and Listening on port ${PORT}`);
  });
};
var worker_default = runApp();
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map