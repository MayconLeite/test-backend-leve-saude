"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self2, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self2) : value = fns[i].call(self2, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS({
  "node_modules/reflect-metadata/Reflect.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function functionThis() {
          try {
            return Function("return this;")();
          } catch (_) {
          }
        }
        function indirectEvalThis() {
          try {
            return (void 0, eval)("(function() { return this; })()");
          } catch (_) {
          }
        }
        function sloppyModeThis() {
          return functionThis() || indirectEvalThis();
        }
      })(function(exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = { __proto__: [] } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate ? function() {
            return MakeDictionary(/* @__PURE__ */ Object.create(null));
          } : supportsProto ? function() {
            return MakeDictionary({ __proto__: null });
          } : function() {
            return MakeDictionary({});
          },
          has: downLevel ? function(map, key) {
            return hasOwn.call(map, key);
          } : function(map, key) {
            return key in map;
          },
          get: downLevel ? function(map, key) {
            return hasOwn.call(map, key) ? map[key] : void 0;
          } : function(map, key) {
            return map[key];
          }
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsObject(target))
              throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
              throw new TypeError();
            if (IsNull(attributes))
              attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsConstructor(target))
              throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          return decorator;
        }
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated))
                throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated))
                throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null)
            return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0)
            return ownKeys;
          if (ownKeys.length <= 0)
            return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        function Type(x) {
          if (x === null)
            return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x) {
          return x === void 0;
        }
        function IsNull(x) {
          return x === null;
        }
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
              throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result))
                return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result))
                return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key))
            return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function SameValueZero(x, y) {
          return x === y || x !== x && y !== y;
        }
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null)
            return void 0;
          if (!IsCallable(func))
            throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method))
            throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator))
            throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f)
            f.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype)
            return proto;
          if (proto !== functionPrototype)
            return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function")
            return proto;
          if (constructor === O)
            return proto;
          return constructor;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0)
                  rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          function getProviderNoCache(O, P) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O, P))
                return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O, P)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
              return fallback;
            }
            return void 0;
          }
          function getProvider(O, P) {
            var providerMap = targetProviderMap.get(O);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O, P);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return provider;
          }
          function hasProvider(provider) {
            if (IsUndefined(provider))
              throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          function setProvider(O, P, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O, P);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return true;
          }
        }
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var targetMetadata = metadata2.get(O);
              if (IsUndefined(targetMetadata))
                return false;
              return targetMetadata.has(P);
            },
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = metadata2.get(O);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              metadata2.set(O, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
              if (!registry.setProvider(O, P, provider)) {
                targetMetadata.delete(P);
                if (createdTargetMetadata) {
                  metadata2.delete(O);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryOwnMetadataKeys2(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function OrdinaryDeleteMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(MetadataKey))
              return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
        }
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var metadataPropertySet = metadataOwner.get(O);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                return true;
              }
              if (getOwnMetadataKeys2(O, P).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O, metadataPropertySet);
                }
                metadataPropertySet.add(P);
                return true;
              }
              return false;
            },
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        function GetMetadataProvider(O, P, Create) {
          var registeredProvider = metadataRegistry.getProvider(O, P);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O, P, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator = (
            /** @class */
            function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }()
          );
          var Map2 = (
            /** @class */
            function() {
              function Map3() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map3.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map3.prototype.has = function(key) {
                return this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0;
              };
              Map3.prototype.get = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map3.prototype.set = function(key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map3.prototype.delete = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (SameValueZero(key, this._cacheKey)) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map3.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map3.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map3.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map3.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map3.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map3.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map3.prototype._find = function(key, insert) {
                if (!SameValueZero(this._cacheKey, key)) {
                  this._cacheIndex = -1;
                  for (var i = 0; i < this._keys.length; i++) {
                    if (SameValueZero(this._keys[i], key)) {
                      this._cacheIndex = i;
                      break;
                    }
                  }
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map3;
            }()
          );
          return Map2;
          function getKey(key, _) {
            return key;
          }
          function getValue(_, value) {
            return value;
          }
          function getEntry(key, value) {
            return [key, value];
          }
        }
        function CreateSetPolyfill() {
          var Set2 = (
            /** @class */
            function() {
              function Set3() {
                this._map = new _Map();
              }
              Object.defineProperty(Set3.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set3.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set3.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set3.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set3.prototype.clear = function() {
                this._map.clear();
              };
              Set3.prototype.keys = function() {
                return this._map.keys();
              };
              Set3.prototype.values = function() {
                return this._map.keys();
              };
              Set3.prototype.entries = function() {
                return this._map.entries();
              };
              Set3.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set3.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set3;
            }()
          );
          return Set2;
        }
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }()
          );
          function CreateUniqueKey() {
            var key;
            do
              key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create)
                return void 0;
              Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = Math.random() * 255 | 0;
            return buffer;
          }
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              var array = new Uint8Array(size);
              if (typeof crypto !== "undefined") {
                crypto.getRandomValues(array);
              } else if (typeof msCrypto !== "undefined") {
                msCrypto.getRandomValues(array);
              } else {
                FillRandomBytes(array, size);
              }
              return array;
            }
            return FillRandomBytes(new Array(size), size);
          }
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = data[6] & 79 | 64;
            data[8] = data[8] & 191 | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8)
                result += "-";
              if (byte < 16)
                result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
        }
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// node_modules/tsyringe/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports2) {
  for (var p in m) if (p !== "default" && !exports2.hasOwnProperty(p)) exports2[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/tsyringe/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/tsyringe/dist/cjs/types/lifecycle.js
var require_lifecycle = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/lifecycle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Lifecycle;
    (function(Lifecycle2) {
      Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
      Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
      Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
      Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
    })(Lifecycle || (Lifecycle = {}));
    exports2.default = Lifecycle;
  }
});

// node_modules/tsyringe/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lifecycle_1 = require_lifecycle();
    Object.defineProperty(exports2, "Lifecycle", { enumerable: true, get: function() {
      return lifecycle_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/reflection-helpers.js
var require_reflection_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/reflection-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defineInjectionTokenMetadata = exports2.getParamInfo = exports2.INJECTION_TOKEN_METADATA_KEY = void 0;
    exports2.INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
    function getParamInfo(target) {
      const params = Reflect.getMetadata("design:paramtypes", target) || [];
      const injectionTokens = Reflect.getOwnMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, target) || {};
      Object.keys(injectionTokens).forEach((key) => {
        params[+key] = injectionTokens[key];
      });
      return params;
    }
    exports2.getParamInfo = getParamInfo;
    function defineInjectionTokenMetadata(data, transform) {
      return function(target, _propertyKey, parameterIndex) {
        const descriptors = Reflect.getOwnMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform ? {
          token: data,
          transform: transform.transformToken,
          transformArgs: transform.args || []
        } : data;
        Reflect.defineMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, descriptors, target);
      };
    }
    exports2.defineInjectionTokenMetadata = defineInjectionTokenMetadata;
  }
});

// node_modules/tsyringe/dist/cjs/providers/class-provider.js
var require_class_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/class-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isClassProvider = void 0;
    function isClassProvider(provider) {
      return !!provider.useClass;
    }
    exports2.isClassProvider = isClassProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/factory-provider.js
var require_factory_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/factory-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isFactoryProvider = void 0;
    function isFactoryProvider(provider) {
      return !!provider.useFactory;
    }
    exports2.isFactoryProvider = isFactoryProvider;
  }
});

// node_modules/tsyringe/dist/cjs/lazy-helpers.js
var require_lazy_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/lazy-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.delay = exports2.DelayedConstructor = void 0;
    var DelayedConstructor = class {
      constructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
          "get",
          "getPrototypeOf",
          "setPrototypeOf",
          "getOwnPropertyDescriptor",
          "defineProperty",
          "has",
          "set",
          "deleteProperty",
          "apply",
          "construct",
          "ownKeys"
        ];
      }
      createProxy(createObject) {
        const target = {};
        let init = false;
        let value;
        const delayedObject = () => {
          if (!init) {
            value = createObject(this.wrap());
            init = true;
          }
          return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
      }
      createHandler(delayedObject) {
        const handler2 = {};
        const install = (name) => {
          handler2[name] = (...args) => {
            args[0] = delayedObject();
            const method = Reflect[name];
            return method(...args);
          };
        };
        this.reflectMethods.forEach(install);
        return handler2;
      }
    };
    exports2.DelayedConstructor = DelayedConstructor;
    function delay(wrappedConstructor) {
      if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
      }
      return new DelayedConstructor(wrappedConstructor);
    }
    exports2.delay = delay;
  }
});

// node_modules/tsyringe/dist/cjs/providers/injection-token.js
var require_injection_token = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/injection-token.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isConstructorToken = exports2.isTransformDescriptor = exports2.isTokenDescriptor = exports2.isNormalToken = void 0;
    var lazy_helpers_1 = require_lazy_helpers();
    function isNormalToken(token) {
      return typeof token === "string" || typeof token === "symbol";
    }
    exports2.isNormalToken = isNormalToken;
    function isTokenDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
    }
    exports2.isTokenDescriptor = isTokenDescriptor;
    function isTransformDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
    }
    exports2.isTransformDescriptor = isTransformDescriptor;
    function isConstructorToken(token) {
      return typeof token === "function" || token instanceof lazy_helpers_1.DelayedConstructor;
    }
    exports2.isConstructorToken = isConstructorToken;
  }
});

// node_modules/tsyringe/dist/cjs/providers/token-provider.js
var require_token_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/token-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTokenProvider = void 0;
    function isTokenProvider(provider) {
      return !!provider.useToken;
    }
    exports2.isTokenProvider = isTokenProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/value-provider.js
var require_value_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/value-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isValueProvider = void 0;
    function isValueProvider(provider) {
      return provider.useValue != void 0;
    }
    exports2.isValueProvider = isValueProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/index.js
var require_providers = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var class_provider_1 = require_class_provider();
    Object.defineProperty(exports2, "isClassProvider", { enumerable: true, get: function() {
      return class_provider_1.isClassProvider;
    } });
    var factory_provider_1 = require_factory_provider();
    Object.defineProperty(exports2, "isFactoryProvider", { enumerable: true, get: function() {
      return factory_provider_1.isFactoryProvider;
    } });
    var injection_token_1 = require_injection_token();
    Object.defineProperty(exports2, "isNormalToken", { enumerable: true, get: function() {
      return injection_token_1.isNormalToken;
    } });
    var token_provider_1 = require_token_provider();
    Object.defineProperty(exports2, "isTokenProvider", { enumerable: true, get: function() {
      return token_provider_1.isTokenProvider;
    } });
    var value_provider_1 = require_value_provider();
    Object.defineProperty(exports2, "isValueProvider", { enumerable: true, get: function() {
      return value_provider_1.isValueProvider;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/providers/provider.js
var require_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isProvider = void 0;
    var class_provider_1 = require_class_provider();
    var value_provider_1 = require_value_provider();
    var token_provider_1 = require_token_provider();
    var factory_provider_1 = require_factory_provider();
    function isProvider(provider) {
      return class_provider_1.isClassProvider(provider) || value_provider_1.isValueProvider(provider) || token_provider_1.isTokenProvider(provider) || factory_provider_1.isFactoryProvider(provider);
    }
    exports2.isProvider = isProvider;
  }
});

// node_modules/tsyringe/dist/cjs/registry-base.js
var require_registry_base = __commonJS({
  "node_modules/tsyringe/dist/cjs/registry-base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var RegistryBase = class {
      constructor() {
        this._registryMap = /* @__PURE__ */ new Map();
      }
      entries() {
        return this._registryMap.entries();
      }
      getAll(key) {
        this.ensure(key);
        return this._registryMap.get(key);
      }
      get(key) {
        this.ensure(key);
        const value = this._registryMap.get(key);
        return value[value.length - 1] || null;
      }
      set(key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
      }
      setAll(key, value) {
        this._registryMap.set(key, value);
      }
      has(key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
      }
      clear() {
        this._registryMap.clear();
      }
      ensure(key) {
        if (!this._registryMap.has(key)) {
          this._registryMap.set(key, []);
        }
      }
    };
    exports2.default = RegistryBase;
  }
});

// node_modules/tsyringe/dist/cjs/registry.js
var require_registry = __commonJS({
  "node_modules/tsyringe/dist/cjs/registry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var registry_base_1 = require_registry_base();
    var Registry = class extends registry_base_1.default {
    };
    exports2.default = Registry;
  }
});

// node_modules/tsyringe/dist/cjs/resolution-context.js
var require_resolution_context = __commonJS({
  "node_modules/tsyringe/dist/cjs/resolution-context.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ResolutionContext = class {
      constructor() {
        this.scopedResolutions = /* @__PURE__ */ new Map();
      }
    };
    exports2.default = ResolutionContext;
  }
});

// node_modules/tsyringe/dist/cjs/error-helpers.js
var require_error_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/error-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.formatErrorCtor = void 0;
    function formatDependency(params, idx) {
      if (params === null) {
        return `at position #${idx}`;
      }
      const argName = params.split(",")[idx].trim();
      return `"${argName}" at position #${idx}`;
    }
    function composeErrorMessage(msg, e, indent = "    ") {
      return [msg, ...e.message.split("\n").map((l) => indent + l)].join("\n");
    }
    function formatErrorCtor(ctor, paramIdx, error) {
      const [, params = null] = ctor.toString().match(/constructor\(([\w, ]+)\)/) || [];
      const dep = formatDependency(params, paramIdx);
      return composeErrorMessage(`Cannot inject the dependency ${dep} of "${ctor.name}" constructor. Reason:`, error);
    }
    exports2.formatErrorCtor = formatErrorCtor;
  }
});

// node_modules/tsyringe/dist/cjs/types/disposable.js
var require_disposable = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isDisposable = void 0;
    function isDisposable(value) {
      if (typeof value.dispose !== "function")
        return false;
      const disposeFun = value.dispose;
      if (disposeFun.length > 0) {
        return false;
      }
      return true;
    }
    exports2.isDisposable = isDisposable;
  }
});

// node_modules/tsyringe/dist/cjs/interceptors.js
var require_interceptors = __commonJS({
  "node_modules/tsyringe/dist/cjs/interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PostResolutionInterceptors = exports2.PreResolutionInterceptors = void 0;
    var registry_base_1 = require_registry_base();
    var PreResolutionInterceptors = class extends registry_base_1.default {
    };
    exports2.PreResolutionInterceptors = PreResolutionInterceptors;
    var PostResolutionInterceptors = class extends registry_base_1.default {
    };
    exports2.PostResolutionInterceptors = PostResolutionInterceptors;
    var Interceptors = class {
      constructor() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
      }
    };
    exports2.default = Interceptors;
  }
});

// node_modules/tsyringe/dist/cjs/dependency-container.js
var require_dependency_container = __commonJS({
  "node_modules/tsyringe/dist/cjs/dependency-container.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.instance = exports2.typeInfo = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var providers_1 = require_providers();
    var provider_1 = require_provider();
    var injection_token_1 = require_injection_token();
    var registry_1 = require_registry();
    var lifecycle_1 = require_lifecycle();
    var resolution_context_1 = require_resolution_context();
    var error_helpers_1 = require_error_helpers();
    var lazy_helpers_1 = require_lazy_helpers();
    var disposable_1 = require_disposable();
    var interceptors_1 = require_interceptors();
    exports2.typeInfo = /* @__PURE__ */ new Map();
    var InternalDependencyContainer = class _InternalDependencyContainer {
      constructor(parent) {
        this.parent = parent;
        this._registry = new registry_1.default();
        this.interceptors = new interceptors_1.default();
        this.disposed = false;
        this.disposables = /* @__PURE__ */ new Set();
      }
      register(token, providerOrConstructor, options = { lifecycle: lifecycle_1.default.Transient }) {
        this.ensureNotDisposed();
        let provider;
        if (!provider_1.isProvider(providerOrConstructor)) {
          provider = { useClass: providerOrConstructor };
        } else {
          provider = providerOrConstructor;
        }
        if (providers_1.isTokenProvider(provider)) {
          const path = [token];
          let tokenProvider = provider;
          while (tokenProvider != null) {
            const currentToken = tokenProvider.useToken;
            if (path.includes(currentToken)) {
              throw new Error(`Token registration cycle detected! ${[...path, currentToken].join(" -> ")}`);
            }
            path.push(currentToken);
            const registration = this._registry.get(currentToken);
            if (registration && providers_1.isTokenProvider(registration.provider)) {
              tokenProvider = registration.provider;
            } else {
              tokenProvider = null;
            }
          }
        }
        if (options.lifecycle === lifecycle_1.default.Singleton || options.lifecycle == lifecycle_1.default.ContainerScoped || options.lifecycle == lifecycle_1.default.ResolutionScoped) {
          if (providers_1.isValueProvider(provider) || providers_1.isFactoryProvider(provider)) {
            throw new Error(`Cannot use lifecycle "${lifecycle_1.default[options.lifecycle]}" with ValueProviders or FactoryProviders`);
          }
        }
        this._registry.set(token, { provider, options });
        return this;
      }
      registerType(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(to)) {
          return this.register(from, {
            useToken: to
          });
        }
        return this.register(from, {
          useClass: to
        });
      }
      registerInstance(token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
          useValue: instance
        });
      }
      registerSingleton(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(from)) {
          if (providers_1.isNormalToken(to)) {
            return this.register(from, {
              useToken: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          } else if (to) {
            return this.register(from, {
              useClass: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          }
          throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        let useClass = from;
        if (to && !providers_1.isNormalToken(to)) {
          useClass = to;
        }
        return this.register(from, {
          useClass
        }, { lifecycle: lifecycle_1.default.Singleton });
      }
      resolve(token, context = new resolution_context_1.default(), isOptional = false) {
        this.ensureNotDisposed();
        const registration = this.getRegistration(token);
        if (!registration && providers_1.isNormalToken(token)) {
          if (isOptional) {
            return void 0;
          }
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
          const result = this.resolveRegistration(registration, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        if (injection_token_1.isConstructorToken(token)) {
          const result = this.construct(token, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
      }
      executePreResolutionInterceptor(token, resolutionType) {
        if (this.interceptors.preResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.preResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, resolutionType);
          }
          this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
      }
      executePostResolutionInterceptor(token, result, resolutionType) {
        if (this.interceptors.postResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.postResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, result, resolutionType);
          }
          this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
      }
      resolveRegistration(registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped && context.scopedResolutions.has(registration)) {
          return context.scopedResolutions.get(registration);
        }
        const isSingleton = registration.options.lifecycle === lifecycle_1.default.Singleton;
        const isContainerScoped = registration.options.lifecycle === lifecycle_1.default.ContainerScoped;
        const returnInstance = isSingleton || isContainerScoped;
        let resolved;
        if (providers_1.isValueProvider(registration.provider)) {
          resolved = registration.provider.useValue;
        } else if (providers_1.isTokenProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
        } else if (providers_1.isClassProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
        } else if (providers_1.isFactoryProvider(registration.provider)) {
          resolved = registration.provider.useFactory(this);
        } else {
          resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped) {
          context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
      }
      resolveAll(token, context = new resolution_context_1.default(), isOptional = false) {
        this.ensureNotDisposed();
        const registrations = this.getAllRegistrations(token);
        if (!registrations && providers_1.isNormalToken(token)) {
          if (isOptional) {
            return [];
          }
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
          const result2 = registrations.map((item) => this.resolveRegistration(item, context));
          this.executePostResolutionInterceptor(token, result2, "All");
          return result2;
        }
        const result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
      }
      isRegistered(token, recursive = false) {
        this.ensureNotDisposed();
        return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
      }
      reset() {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
      }
      clearInstances() {
        this.ensureNotDisposed();
        for (const [token, registrations] of this._registry.entries()) {
          this._registry.setAll(token, registrations.filter((registration) => !providers_1.isValueProvider(registration.provider)).map((registration) => {
            registration.instance = void 0;
            return registration;
          }));
        }
      }
      createChildContainer() {
        this.ensureNotDisposed();
        const childContainer = new _InternalDependencyContainer(this);
        for (const [token, registrations] of this._registry.entries()) {
          if (registrations.some(({ options }) => options.lifecycle === lifecycle_1.default.ContainerScoped)) {
            childContainer._registry.setAll(token, registrations.map((registration) => {
              if (registration.options.lifecycle === lifecycle_1.default.ContainerScoped) {
                return {
                  provider: registration.provider,
                  options: registration.options
                };
              }
              return registration;
            }));
          }
        }
        return childContainer;
      }
      beforeResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.preResolution.set(token, {
          callback,
          options
        });
      }
      afterResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.postResolution.set(token, {
          callback,
          options
        });
      }
      dispose() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.disposed = true;
          const promises = [];
          this.disposables.forEach((disposable) => {
            const maybePromise = disposable.dispose();
            if (maybePromise) {
              promises.push(maybePromise);
            }
          });
          yield Promise.all(promises);
        });
      }
      getRegistration(token) {
        if (this.isRegistered(token)) {
          return this._registry.get(token);
        }
        if (this.parent) {
          return this.parent.getRegistration(token);
        }
        return null;
      }
      getAllRegistrations(token) {
        if (this.isRegistered(token)) {
          return this._registry.getAll(token);
        }
        if (this.parent) {
          return this.parent.getAllRegistrations(token);
        }
        return null;
      }
      construct(ctor, context) {
        if (ctor instanceof lazy_helpers_1.DelayedConstructor) {
          return ctor.createProxy((target) => this.resolve(target, context));
        }
        const instance = (() => {
          const paramInfo = exports2.typeInfo.get(ctor);
          if (!paramInfo || paramInfo.length === 0) {
            if (ctor.length === 0) {
              return new ctor();
            } else {
              throw new Error(`TypeInfo not known for "${ctor.name}"`);
            }
          }
          const params = paramInfo.map(this.resolveParams(context, ctor));
          return new ctor(...params);
        })();
        if (disposable_1.isDisposable(instance)) {
          this.disposables.add(instance);
        }
        return instance;
      }
      resolveParams(context, ctor) {
        return (param, idx) => {
          try {
            if (injection_token_1.isTokenDescriptor(param)) {
              if (injection_token_1.isTransformDescriptor(param)) {
                return param.multiple ? this.resolve(param.transform).transform(this.resolveAll(param.token, new resolution_context_1.default(), param.isOptional), ...param.transformArgs) : this.resolve(param.transform).transform(this.resolve(param.token, context, param.isOptional), ...param.transformArgs);
              } else {
                return param.multiple ? this.resolveAll(param.token, new resolution_context_1.default(), param.isOptional) : this.resolve(param.token, context, param.isOptional);
              }
            } else if (injection_token_1.isTransformDescriptor(param)) {
              return this.resolve(param.transform, context).transform(this.resolve(param.token, context), ...param.transformArgs);
            }
            return this.resolve(param, context);
          } catch (e) {
            throw new Error(error_helpers_1.formatErrorCtor(ctor, idx, e));
          }
        };
      }
      ensureNotDisposed() {
        if (this.disposed) {
          throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
      }
    };
    exports2.instance = new InternalDependencyContainer();
    exports2.default = exports2.instance;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js
var require_auto_injectable = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    var injection_token_1 = require_injection_token();
    var error_helpers_1 = require_error_helpers();
    function autoInjectable() {
      return function(target) {
        const paramInfo = reflection_helpers_1.getParamInfo(target);
        return class extends target {
          constructor(...args) {
            super(...args.concat(paramInfo.slice(args.length).map((type, index) => {
              try {
                if (injection_token_1.isTokenDescriptor(type)) {
                  if (injection_token_1.isTransformDescriptor(type)) {
                    return type.multiple ? dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolveAll(type.token), ...type.transformArgs) : dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                  } else {
                    return type.multiple ? dependency_container_1.instance.resolveAll(type.token) : dependency_container_1.instance.resolve(type.token);
                  }
                } else if (injection_token_1.isTransformDescriptor(type)) {
                  return dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                }
                return dependency_container_1.instance.resolve(type);
              } catch (e) {
                const argIndex = index + args.length;
                throw new Error(error_helpers_1.formatErrorCtor(target, argIndex, e));
              }
            })));
          }
        };
      };
    }
    exports2.default = autoInjectable;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject.js
var require_inject = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function inject(token, options) {
      const data = {
        token,
        multiple: false,
        isOptional: options && options.isOptional
      };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports2.default = inject;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/injectable.js
var require_injectable = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/injectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    var dependency_container_2 = require_dependency_container();
    function injectable2(options) {
      return function(target) {
        dependency_container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
        if (options && options.token) {
          if (!Array.isArray(options.token)) {
            dependency_container_2.instance.register(options.token, target);
          } else {
            options.token.forEach((token) => {
              dependency_container_2.instance.register(token, target);
            });
          }
        }
      };
    }
    exports2.default = injectable2;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/registry.js
var require_registry2 = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/registry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dependency_container_1 = require_dependency_container();
    function registry(registrations = []) {
      return function(target) {
        registrations.forEach((_a) => {
          var { token, options } = _a, provider = tslib_1.__rest(_a, ["token", "options"]);
          return dependency_container_1.instance.register(token, provider, options);
        });
        return target;
      };
    }
    exports2.default = registry;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/singleton.js
var require_singleton = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/singleton.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function singleton() {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.registerSingleton(target);
      };
    }
    exports2.default = singleton;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-all.js
var require_inject_all = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-all.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAll(token, options) {
      const data = {
        token,
        multiple: true,
        isOptional: options && options.isOptional
      };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports2.default = injectAll;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js
var require_inject_all_with_transform = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAllWithTransform(token, transformer, ...args) {
      const data = {
        token,
        multiple: true,
        transform: transformer,
        transformArgs: args
      };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports2.default = injectAllWithTransform;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js
var require_inject_with_transform = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectWithTransform(token, transformer, ...args) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token, {
        transformToken: transformer,
        args
      });
    }
    exports2.default = injectWithTransform;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/scoped.js
var require_scoped = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/scoped.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function scoped(lifecycle, token) {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.register(token || target, target, {
          lifecycle
        });
      };
    }
    exports2.default = scoped;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/index.js
var require_decorators = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var auto_injectable_1 = require_auto_injectable();
    Object.defineProperty(exports2, "autoInjectable", { enumerable: true, get: function() {
      return auto_injectable_1.default;
    } });
    var inject_1 = require_inject();
    Object.defineProperty(exports2, "inject", { enumerable: true, get: function() {
      return inject_1.default;
    } });
    var injectable_1 = require_injectable();
    Object.defineProperty(exports2, "injectable", { enumerable: true, get: function() {
      return injectable_1.default;
    } });
    var registry_1 = require_registry2();
    Object.defineProperty(exports2, "registry", { enumerable: true, get: function() {
      return registry_1.default;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports2, "singleton", { enumerable: true, get: function() {
      return singleton_1.default;
    } });
    var inject_all_1 = require_inject_all();
    Object.defineProperty(exports2, "injectAll", { enumerable: true, get: function() {
      return inject_all_1.default;
    } });
    var inject_all_with_transform_1 = require_inject_all_with_transform();
    Object.defineProperty(exports2, "injectAllWithTransform", { enumerable: true, get: function() {
      return inject_all_with_transform_1.default;
    } });
    var inject_with_transform_1 = require_inject_with_transform();
    Object.defineProperty(exports2, "injectWithTransform", { enumerable: true, get: function() {
      return inject_with_transform_1.default;
    } });
    var scoped_1 = require_scoped();
    Object.defineProperty(exports2, "scoped", { enumerable: true, get: function() {
      return scoped_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js
var require_instance_caching_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function instanceCachingFactory(factoryFunc) {
      let instance;
      return (dependencyContainer) => {
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
        }
        return instance;
      };
    }
    exports2.default = instanceCachingFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js
var require_instance_per_container_caching_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function instancePerContainerCachingFactory(factoryFunc) {
      const cache = /* @__PURE__ */ new WeakMap();
      return (dependencyContainer) => {
        let instance = cache.get(dependencyContainer);
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
          cache.set(dependencyContainer, instance);
        }
        return instance;
      };
    }
    exports2.default = instancePerContainerCachingFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js
var require_predicate_aware_class_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching = true) {
      let instance;
      let previousPredicate;
      return (dependencyContainer) => {
        const currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
          if (previousPredicate = currentPredicate) {
            instance = dependencyContainer.resolve(trueConstructor);
          } else {
            instance = dependencyContainer.resolve(falseConstructor);
          }
        }
        return instance;
      };
    }
    exports2.default = predicateAwareClassFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/index.js
var require_factories = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var instance_caching_factory_1 = require_instance_caching_factory();
    Object.defineProperty(exports2, "instanceCachingFactory", { enumerable: true, get: function() {
      return instance_caching_factory_1.default;
    } });
    var instance_per_container_caching_factory_1 = require_instance_per_container_caching_factory();
    Object.defineProperty(exports2, "instancePerContainerCachingFactory", { enumerable: true, get: function() {
      return instance_per_container_caching_factory_1.default;
    } });
    var predicate_aware_class_factory_1 = require_predicate_aware_class_factory();
    Object.defineProperty(exports2, "predicateAwareClassFactory", { enumerable: true, get: function() {
      return predicate_aware_class_factory_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/tsyringe/dist/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
      throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
    }
    var types_1 = require_types();
    Object.defineProperty(exports2, "Lifecycle", { enumerable: true, get: function() {
      return types_1.Lifecycle;
    } });
    tslib_1.__exportStar(require_decorators(), exports2);
    tslib_1.__exportStar(require_factories(), exports2);
    tslib_1.__exportStar(require_providers(), exports2);
    var lazy_helpers_1 = require_lazy_helpers();
    Object.defineProperty(exports2, "delay", { enumerable: true, get: function() {
      return lazy_helpers_1.delay;
    } });
    var dependency_container_1 = require_dependency_container();
    Object.defineProperty(exports2, "container", { enumerable: true, get: function() {
      return dependency_container_1.instance;
    } });
  }
});

// src/agenda/controller/listSchedules.ts
var listSchedules_exports = {};
__export(listSchedules_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(listSchedules_exports);
var import_reflect_metadata2 = __toESM(require_Reflect());

// src/core/container.ts
var import_reflect_metadata = __toESM(require_Reflect());
var import_tsyringe2 = __toESM(require_cjs());

// src/agenda/service/ScheduleService.ts
var import_tsyringe = __toESM(require_cjs());

// src/agenda/mocks/doctors.mock.ts
var doctors_mock_default = [
  {
    id: 1,
    name: "Dr. Jo\xE3o Silva",
    specialty: "Cardiologist",
    availableSlots: ["2024-10-05 09:00", "2024-10-05 10:00", "2024-10-05 11:00"]
  },
  {
    id: 2,
    name: "Dra. Maria Souza",
    specialty: "Dermatologist",
    availableSlots: ["2024-10-06 14:00", "2024-10-06 15:00"]
  }
];

// src/agenda/service/ScheduleService.ts
var _ScheduleService_decorators, _init;
_ScheduleService_decorators = [(0, import_tsyringe.injectable)()];
var ScheduleService = class {
  getAllSchedules() {
    return doctors_mock_default;
  }
};
_init = __decoratorStart(null);
ScheduleService = __decorateElement(_init, 0, "ScheduleService", _ScheduleService_decorators, ScheduleService);
__runInitializers(_init, 1, ScheduleService);

// src/core/types.ts
var TYPES = {
  ScheduleService: Symbol.for("ScheduleService"),
  AppointmentService: Symbol.for("AppointmentService")
};

// src/core/container.ts
import_tsyringe2.container.register(TYPES.ScheduleService, { useClass: ScheduleService });

// src/utils/httpResponse.ts
function success(body, statusCode = 200) {
  return {
    statusCode,
    body: JSON.stringify(body)
  };
}
function badRequest(message) {
  return {
    statusCode: 400,
    body: JSON.stringify({ message })
  };
}

// src/agenda/controller/listSchedules.ts
var handler = async (event, context) => {
  try {
    const scheduleService = import_tsyringe2.container.resolve(TYPES.ScheduleService);
    const doctors = scheduleService.getAllSchedules();
    return success({ doctors });
  } catch (error) {
    console.error("Handler error:", error);
    return badRequest("Failed to fetch schedules");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=listSchedules.js.map
