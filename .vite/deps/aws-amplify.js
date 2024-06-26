import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read2,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values2
});
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P, generator) {
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
function __generator2(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
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
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m)
    if (p !== "default" && !exports.hasOwnProperty(p))
      exports[p] = m[p];
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read2(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await2(v) {
  return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
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
    r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f2) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
    } : f2;
  }
}
function __asyncValues2(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
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
var extendStatics2, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
    exports.BLOCK_SIZE = 64;
    exports.DIGEST_LENGTH = 32;
    exports.KEY = new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    exports.INIT = [
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ];
    exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  }
});

// node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawSha256 = void 0;
    var constants_1 = require_constants();
    var RawSha2562 = (
      /** @class */
      function() {
        function RawSha2563() {
          this.state = Int32Array.from(constants_1.INIT);
          this.temp = new Int32Array(64);
          this.buffer = new Uint8Array(64);
          this.bufferLength = 0;
          this.bytesHashed = 0;
          this.finished = false;
        }
        RawSha2563.prototype.update = function(data) {
          if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
          }
          var position = 0;
          var byteLength = data.byteLength;
          this.bytesHashed += byteLength;
          if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
          }
          while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === constants_1.BLOCK_SIZE) {
              this.hashBuffer();
              this.bufferLength = 0;
            }
          }
        };
        RawSha2563.prototype.digest = function() {
          if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 128);
            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
              for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {
                bufferView.setUint8(i, 0);
              }
              this.hashBuffer();
              this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {
              bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
          }
          var out = new Uint8Array(constants_1.DIGEST_LENGTH);
          for (var i = 0; i < 8; i++) {
            out[i * 4] = this.state[i] >>> 24 & 255;
            out[i * 4 + 1] = this.state[i] >>> 16 & 255;
            out[i * 4 + 2] = this.state[i] >>> 8 & 255;
            out[i * 4 + 3] = this.state[i] >>> 0 & 255;
          }
          return out;
        };
        RawSha2563.prototype.hashBuffer = function() {
          var _a = this, buffer2 = _a.buffer, state = _a.state;
          var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
          for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
            if (i < 16) {
              this.temp[i] = (buffer2[i * 4] & 255) << 24 | (buffer2[i * 4 + 1] & 255) << 16 | (buffer2[i * 4 + 2] & 255) << 8 | buffer2[i * 4 + 3] & 255;
            } else {
              var u = this.temp[i - 2];
              var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
              u = this.temp[i - 15];
              var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
              this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
            }
            var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0;
            var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = state3 + t1 | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = t1 + t2 | 0;
          }
          state[0] += state0;
          state[1] += state1;
          state[2] += state2;
          state[3] += state3;
          state[4] += state4;
          state[5] += state5;
          state[6] += state6;
          state[7] += state7;
        };
        return RawSha2563;
      }()
    );
    exports.RawSha256 = RawSha2562;
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js
var fromUtf83, toUtf8;
var init_pureJs = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js"() {
    fromUtf83 = (input) => {
      const bytes = [];
      for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    toUtf8 = (input) => {
      let decoded = "";
      for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i], input[++i], input[++i]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
      }
      return decoded;
    };
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js
function fromUtf84(input) {
  return new TextEncoder().encode(input);
}
function toUtf82(input) {
  return new TextDecoder("utf-8").decode(input);
}
var init_whatwgEncodingApi = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js"() {
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  fromUtf8: () => fromUtf85,
  toUtf8: () => toUtf83
});
var fromUtf85, toUtf83;
var init_dist_es = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js"() {
    init_pureJs();
    init_whatwgEncodingApi();
    fromUtf85 = (input) => typeof TextEncoder === "function" ? fromUtf84(input) : fromUtf83(input);
    toUtf83 = (input) => typeof TextDecoder === "function" ? toUtf82(input) : toUtf8(input);
  }
});

// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var fromUtf86 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer2(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf86(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer2;
  }
});

// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
  }
});

// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint82(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    exports.numToUint8 = numToUint82;
  }
});

// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom2(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    exports.uint32ArrayFrom = uint32ArrayFrom2;
  }
});

// node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var constants_1 = require_constants();
    var RawSha256_1 = require_RawSha256();
    var util_1 = require_build();
    var Sha2566 = (
      /** @class */
      function() {
        function Sha2567(secret) {
          this.secret = secret;
          this.hash = new RawSha256_1.RawSha256();
          this.reset();
        }
        Sha2567.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash) || this.error) {
            return;
          }
          try {
            this.hash.update((0, util_1.convertToBuffer)(toHash));
          } catch (e) {
            this.error = e;
          }
        };
        Sha2567.prototype.digestSync = function() {
          if (this.error) {
            throw this.error;
          }
          if (this.outer) {
            if (!this.outer.finished) {
              this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
          }
          return this.hash.digest();
        };
        Sha2567.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, this.digestSync()];
            });
          });
        };
        Sha2567.prototype.reset = function() {
          this.hash = new RawSha256_1.RawSha256();
          if (this.secret) {
            this.outer = new RawSha256_1.RawSha256();
            var inner = bufferFromSecret2(this.secret);
            var outer = new Uint8Array(constants_1.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
              inner[i] ^= 54;
              outer[i] ^= 92;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            for (var i = 0; i < inner.byteLength; i++) {
              inner[i] = 0;
            }
          }
        };
        return Sha2567;
      }()
    );
    exports.Sha256 = Sha2566;
    function bufferFromSecret2(secret) {
      var input = (0, util_1.convertToBuffer)(secret);
      if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
      }
      var buffer2 = new Uint8Array(constants_1.BLOCK_SIZE);
      buffer2.set(input);
      return buffer2;
    }
  }
});

// node_modules/@aws-crypto/sha256-js/build/index.js
var require_build2 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_jsSha256(), exports);
  }
});

// node_modules/@aws-amplify/core/dist/esm/constants.mjs
var AWS_CLOUDWATCH_CATEGORY = "Logging";
var USER_AGENT_HEADER = "x-amz-user-agent";
var NO_HUBCALLBACK_PROVIDED_EXCEPTION = "NoHubcallbackProvidedException";

// node_modules/@aws-amplify/core/dist/esm/Logger/types.mjs
var LogType;
(function(LogType2) {
  LogType2["DEBUG"] = "DEBUG";
  LogType2["ERROR"] = "ERROR";
  LogType2["INFO"] = "INFO";
  LogType2["WARN"] = "WARN";
  LogType2["VERBOSE"] = "VERBOSE";
  LogType2["NONE"] = "NONE";
})(LogType || (LogType = {}));

// node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs
var LOG_LEVELS = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5,
  NONE: 6
};
var ConsoleLogger = class _ConsoleLogger {
  /**
   * @constructor
   * @param {string} name - Name of the logger
   */
  constructor(name2, level = LogType.WARN) {
    this.name = name2;
    this.level = level;
    this._pluggables = [];
  }
  _padding(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  _ts() {
    const dt = /* @__PURE__ */ new Date();
    return [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(":") + "." + dt.getMilliseconds();
  }
  configure(config2) {
    if (!config2)
      return this._config;
    this._config = config2;
    return this._config;
  }
  /**
   * Write log
   * @method
   * @memeberof Logger
   * @param {LogType|string} type - log type, default INFO
   * @param {string|object} msg - Logging message or object
   */
  _log(type, ...msg) {
    let loggerLevelName = this.level;
    if (_ConsoleLogger.LOG_LEVEL) {
      loggerLevelName = _ConsoleLogger.LOG_LEVEL;
    }
    if (typeof window !== "undefined" && window.LOG_LEVEL) {
      loggerLevelName = window.LOG_LEVEL;
    }
    const loggerLevel = LOG_LEVELS[loggerLevelName];
    const typeLevel = LOG_LEVELS[type];
    if (!(typeLevel >= loggerLevel)) {
      return;
    }
    let log = console.log.bind(console);
    if (type === LogType.ERROR && console.error) {
      log = console.error.bind(console);
    }
    if (type === LogType.WARN && console.warn) {
      log = console.warn.bind(console);
    }
    if (_ConsoleLogger.BIND_ALL_LOG_LEVELS) {
      if (type === LogType.INFO && console.info) {
        log = console.info.bind(console);
      }
      if (type === LogType.DEBUG && console.debug) {
        log = console.debug.bind(console);
      }
    }
    const prefix = `[${type}] ${this._ts()} ${this.name}`;
    let message = "";
    if (msg.length === 1 && typeof msg[0] === "string") {
      message = `${prefix} - ${msg[0]}`;
      log(message);
    } else if (msg.length === 1) {
      message = `${prefix} ${msg[0]}`;
      log(prefix, msg[0]);
    } else if (typeof msg[0] === "string") {
      let obj = msg.slice(1);
      if (obj.length === 1) {
        obj = obj[0];
      }
      message = `${prefix} - ${msg[0]} ${obj}`;
      log(`${prefix} - ${msg[0]}`, obj);
    } else {
      message = `${prefix} ${msg}`;
      log(prefix, msg);
    }
    for (const plugin of this._pluggables) {
      const logEvent = { message, timestamp: Date.now() };
      plugin.pushLogs([logEvent]);
    }
  }
  /**
   * Write General log. Default to INFO
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  log(...msg) {
    this._log(LogType.INFO, ...msg);
  }
  /**
   * Write INFO log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  info(...msg) {
    this._log(LogType.INFO, ...msg);
  }
  /**
   * Write WARN log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  warn(...msg) {
    this._log(LogType.WARN, ...msg);
  }
  /**
   * Write ERROR log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  error(...msg) {
    this._log(LogType.ERROR, ...msg);
  }
  /**
   * Write DEBUG log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  debug(...msg) {
    this._log(LogType.DEBUG, ...msg);
  }
  /**
   * Write VERBOSE log
   * @method
   * @memeberof Logger
   * @param {string|object} msg - Logging message or object
   */
  verbose(...msg) {
    this._log(LogType.VERBOSE, ...msg);
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY) {
      this._pluggables.push(pluggable);
      pluggable.configure(this._config);
    }
  }
  listPluggables() {
    return this._pluggables;
  }
};
ConsoleLogger.LOG_LEVEL = null;
ConsoleLogger.BIND_ALL_LOG_LEVELS = false;

// node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs
var AmplifyError = class _AmplifyError extends Error {
  /**
   *  Constructs an AmplifyError.
   *
   * @param message text that describes the main problem.
   * @param underlyingError the underlying cause of the error.
   * @param recoverySuggestion suggestion to recover from the error.
   *
   */
  constructor({ message, name: name2, recoverySuggestion, underlyingError }) {
    super(message);
    this.name = name2;
    this.underlyingError = underlyingError;
    this.recoverySuggestion = recoverySuggestion;
    this.constructor = _AmplifyError;
    Object.setPrototypeOf(this, _AmplifyError.prototype);
  }
};

// node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
var AmplifyErrorCode;
(function(AmplifyErrorCode2) {
  AmplifyErrorCode2["NoEndpointId"] = "NoEndpointId";
  AmplifyErrorCode2["PlatformNotSupported"] = "PlatformNotSupported";
  AmplifyErrorCode2["Unknown"] = "Unknown";
})(AmplifyErrorCode || (AmplifyErrorCode = {}));

// node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs
var createAssertionFunction = (errorMap, AssertionError = AmplifyError) => (assertion, name2, additionalContext) => {
  const { message, recoverySuggestion } = errorMap[name2];
  if (!assertion) {
    throw new AssertionError({
      name: name2,
      message: additionalContext ? `${message} ${additionalContext}` : message,
      recoverySuggestion
    });
  }
};

// node_modules/@aws-amplify/core/dist/esm/errors/errorHelpers.mjs
var amplifyErrorMap = {
  [AmplifyErrorCode.NoEndpointId]: {
    message: "Endpoint ID was not found and was unable to be created."
  },
  [AmplifyErrorCode.PlatformNotSupported]: {
    message: "Function not supported on current platform."
  },
  [AmplifyErrorCode.Unknown]: {
    message: "An unknown error occurred."
  }
};
var assert = createAssertionFunction(amplifyErrorMap);

// node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs
var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" ? Symbol("amplify_default") : "@@amplify_default";
var logger = new ConsoleLogger("Hub");
var HubClass = class {
  constructor(name2) {
    this.listeners = /* @__PURE__ */ new Map();
    this.protectedChannels = [
      "core",
      "auth",
      "api",
      "analytics",
      "interactions",
      "pubsub",
      "storage",
      "ui",
      "xr"
    ];
    this.name = name2;
  }
  /**
   * Used internally to remove a Hub listener.
   *
   * @remarks
   * This private method is for internal use only. Instead of calling Hub.remove, call the result of Hub.listen.
   */
  _remove(channel, listener) {
    const holder = this.listeners.get(channel);
    if (!holder) {
      logger.warn(`No listeners for ${channel}`);
      return;
    }
    this.listeners.set(channel, [
      ...holder.filter(({ callback }) => callback !== listener)
    ]);
  }
  dispatch(channel, payload, source, ampSymbol) {
    if (typeof channel === "string" && this.protectedChannels.indexOf(channel) > -1) {
      const hasAccess = ampSymbol === AMPLIFY_SYMBOL;
      if (!hasAccess) {
        logger.warn(`WARNING: ${channel} is protected and dispatching on it can have unintended consequences`);
      }
    }
    const capsule = {
      channel,
      payload: { ...payload },
      source,
      patternInfo: []
    };
    try {
      this._toListeners(capsule);
    } catch (e) {
      logger.error(e);
    }
  }
  listen(channel, callback, listenerName = "noname") {
    let cb;
    if (typeof callback !== "function") {
      throw new AmplifyError({
        name: NO_HUBCALLBACK_PROVIDED_EXCEPTION,
        message: "No callback supplied to Hub"
      });
    } else {
      cb = callback;
    }
    let holder = this.listeners.get(channel);
    if (!holder) {
      holder = [];
      this.listeners.set(channel, holder);
    }
    holder.push({
      name: listenerName,
      callback: cb
    });
    return () => {
      this._remove(channel, cb);
    };
  }
  _toListeners(capsule) {
    const { channel, payload } = capsule;
    const holder = this.listeners.get(channel);
    if (holder) {
      holder.forEach((listener) => {
        logger.debug(`Dispatching to ${channel} with `, payload);
        try {
          listener.callback(capsule);
        } catch (e) {
          logger.error(e);
        }
      });
    }
  }
};
var Hub = new HubClass("__default__");
var HubInternal = new HubClass("internal-hub");

// node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs
var getCrypto = () => {
  if (typeof window === "object" && typeof window.crypto === "object") {
    return window.crypto;
  }
  if (typeof crypto === "object") {
    return crypto;
  }
  throw new AmplifyError({
    name: "MissingPolyfill",
    message: "Cannot resolve the `crypto` function from the environment."
  });
};
var getBtoa = () => {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return window.btoa;
  }
  if (typeof btoa === "function") {
    return btoa;
  }
  throw new AmplifyError({
    name: "Base64EncoderError",
    message: "Cannot resolve the `btoa` function from the environment."
  });
};
var getAtob = () => {
  if (typeof window !== "undefined" && typeof window.atob === "function") {
    return window.atob;
  }
  if (typeof atob === "function") {
    return atob;
  }
  throw new AmplifyError({
    name: "Base64EncoderError",
    message: "Cannot resolve the `atob` function from the environment."
  });
};

// node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs
var base64Decoder = {
  convert(input) {
    return getAtob()(input);
  }
};

// node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/errorHelpers.mjs
var AuthConfigurationErrorCode;
(function(AuthConfigurationErrorCode2) {
  AuthConfigurationErrorCode2["AuthTokenConfigException"] = "AuthTokenConfigException";
  AuthConfigurationErrorCode2["AuthUserPoolAndIdentityPoolException"] = "AuthUserPoolAndIdentityPoolException";
  AuthConfigurationErrorCode2["AuthUserPoolException"] = "AuthUserPoolException";
  AuthConfigurationErrorCode2["InvalidIdentityPoolIdException"] = "InvalidIdentityPoolIdException";
  AuthConfigurationErrorCode2["OAuthNotConfigureException"] = "OAuthNotConfigureException";
})(AuthConfigurationErrorCode || (AuthConfigurationErrorCode = {}));
var authConfigurationErrorMap = {
  [AuthConfigurationErrorCode.AuthTokenConfigException]: {
    message: "Auth Token Provider not configured.",
    recoverySuggestion: "Make sure to call Amplify.configure in your app."
  },
  [AuthConfigurationErrorCode.AuthUserPoolAndIdentityPoolException]: {
    message: "Auth UserPool or IdentityPool not configured.",
    recoverySuggestion: "Make sure to call Amplify.configure in your app with UserPoolId and IdentityPoolId."
  },
  [AuthConfigurationErrorCode.AuthUserPoolException]: {
    message: "Auth UserPool not configured.",
    recoverySuggestion: "Make sure to call Amplify.configure in your app with userPoolId and userPoolClientId."
  },
  [AuthConfigurationErrorCode.InvalidIdentityPoolIdException]: {
    message: "Invalid identity pool id provided.",
    recoverySuggestion: "Make sure a valid identityPoolId is given in the config."
  },
  [AuthConfigurationErrorCode.OAuthNotConfigureException]: {
    message: "oauth param not configured.",
    recoverySuggestion: "Make sure to call Amplify.configure with oauth parameter in your app."
  }
};
var assert2 = createAssertionFunction(authConfigurationErrorMap);

// node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs
function assertTokenProviderConfig(cognitoConfig) {
  let assertionValid = true;
  if (!cognitoConfig) {
    assertionValid = false;
  } else {
    assertionValid = !!cognitoConfig.userPoolId && !!cognitoConfig.userPoolClientId;
  }
  assert2(assertionValid, AuthConfigurationErrorCode.AuthUserPoolException);
}
function assertOAuthConfig(cognitoConfig) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const validOAuthConfig = !!((_b = (_a = cognitoConfig == null ? void 0 : cognitoConfig.loginWith) == null ? void 0 : _a.oauth) == null ? void 0 : _b.domain) && !!((_d = (_c = cognitoConfig == null ? void 0 : cognitoConfig.loginWith) == null ? void 0 : _c.oauth) == null ? void 0 : _d.redirectSignOut) && !!((_f = (_e = cognitoConfig == null ? void 0 : cognitoConfig.loginWith) == null ? void 0 : _e.oauth) == null ? void 0 : _f.redirectSignIn) && !!((_h = (_g = cognitoConfig == null ? void 0 : cognitoConfig.loginWith) == null ? void 0 : _g.oauth) == null ? void 0 : _h.responseType);
  assert2(validOAuthConfig, AuthConfigurationErrorCode.OAuthNotConfigureException);
}
function assertIdentityPoolIdConfig(cognitoConfig) {
  const validConfig = !!(cognitoConfig == null ? void 0 : cognitoConfig.identityPoolId);
  assert2(validConfig, AuthConfigurationErrorCode.InvalidIdentityPoolIdException);
}
function decodeJWT(token) {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new Error("Invalid token");
  }
  try {
    const base64WithUrlSafe = tokenParts[1];
    const base64 = base64WithUrlSafe.replace(/-/g, "+").replace(/_/g, "/");
    const jsonStr = decodeURIComponent(base64Decoder.convert(base64).split("").map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
    const payload = JSON.parse(jsonStr);
    return {
      toString: () => token,
      payload
    };
  } catch (err) {
    throw new Error("Invalid token payload");
  }
}

// node_modules/@aws-amplify/core/dist/esm/utils/getClientInfo/getClientInfo.mjs
var logger2 = new ConsoleLogger("getClientInfo");

// node_modules/@aws-amplify/core/dist/esm/utils/retry/retry.mjs
var logger3 = new ConsoleLogger("retryUtil");

// node_modules/@aws-amplify/core/dist/esm/utils/deepFreeze.mjs
var deepFreeze = (object) => {
  const propNames = Reflect.ownKeys(object);
  for (const name2 of propNames) {
    const value = object[name2];
    if (value && typeof value === "object" || typeof value === "function") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
};

// node_modules/@aws-amplify/core/dist/esm/parseAWSExports.mjs
var logger4 = new ConsoleLogger("parseAWSExports");
var authTypeMapping = {
  API_KEY: "apiKey",
  AWS_IAM: "iam",
  AMAZON_COGNITO_USER_POOLS: "userPool",
  OPENID_CONNECT: "oidc",
  NONE: "none",
  AWS_LAMBDA: "lambda",
  // `LAMBDA` is an incorrect value that was added during the v6 rewrite.
  // Keeping it as a valid value until v7 to prevent breaking customers who might
  // be relying on it as a workaround.
  // ref: https://github.com/aws-amplify/amplify-js/pull/12922
  // TODO: @v7 remove next line
  LAMBDA: "lambda"
};
var parseAWSExports = (config2 = {}) => {
  var _a, _b, _c, _d, _e, _f;
  if (!Object.prototype.hasOwnProperty.call(config2, "aws_project_region")) {
    throw new AmplifyError({
      name: "InvalidParameterException",
      message: "Invalid config parameter.",
      recoverySuggestion: "Ensure passing the config object imported from  `amplifyconfiguration.json`."
    });
  }
  const { aws_appsync_apiKey, aws_appsync_authenticationType, aws_appsync_graphqlEndpoint, aws_appsync_region, aws_bots_config, aws_cognito_identity_pool_id, aws_cognito_sign_up_verification_method, aws_cognito_mfa_configuration, aws_cognito_mfa_types, aws_cognito_password_protection_settings, aws_cognito_verification_mechanisms, aws_cognito_signup_attributes, aws_cognito_social_providers, aws_cognito_username_attributes, aws_mandatory_sign_in, aws_mobile_analytics_app_id, aws_mobile_analytics_app_region, aws_user_files_s3_bucket, aws_user_files_s3_bucket_region, aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing, aws_user_pools_id, aws_user_pools_web_client_id, geo, oauth, predictions, aws_cloud_logic_custom, Notifications, modelIntrospection } = config2;
  const amplifyConfig = {};
  if (aws_mobile_analytics_app_id) {
    amplifyConfig.Analytics = {
      Pinpoint: {
        appId: aws_mobile_analytics_app_id,
        region: aws_mobile_analytics_app_region
      }
    };
  }
  const { InAppMessaging, Push } = Notifications ?? {};
  if ((InAppMessaging == null ? void 0 : InAppMessaging.AWSPinpoint) || (Push == null ? void 0 : Push.AWSPinpoint)) {
    if (InAppMessaging == null ? void 0 : InAppMessaging.AWSPinpoint) {
      const { appId, region } = InAppMessaging.AWSPinpoint;
      amplifyConfig.Notifications = {
        InAppMessaging: {
          Pinpoint: {
            appId,
            region
          }
        }
      };
    }
    if (Push == null ? void 0 : Push.AWSPinpoint) {
      const { appId, region } = Push.AWSPinpoint;
      amplifyConfig.Notifications = {
        ...amplifyConfig.Notifications,
        PushNotification: {
          Pinpoint: {
            appId,
            region
          }
        }
      };
    }
  }
  if (Array.isArray(aws_bots_config)) {
    amplifyConfig.Interactions = {
      LexV1: Object.fromEntries(aws_bots_config.map((bot) => [bot.name, bot]))
    };
  }
  if (aws_appsync_graphqlEndpoint) {
    const defaultAuthMode = authTypeMapping[aws_appsync_authenticationType];
    if (!defaultAuthMode) {
      logger4.debug(`Invalid authentication type ${aws_appsync_authenticationType}. Falling back to IAM.`);
    }
    amplifyConfig.API = {
      GraphQL: {
        endpoint: aws_appsync_graphqlEndpoint,
        apiKey: aws_appsync_apiKey,
        region: aws_appsync_region,
        defaultAuthMode: defaultAuthMode ?? "iam"
      }
    };
    if (modelIntrospection) {
      amplifyConfig.API.GraphQL.modelIntrospection = modelIntrospection;
    }
  }
  const mfaConfig = aws_cognito_mfa_configuration ? {
    status: aws_cognito_mfa_configuration && aws_cognito_mfa_configuration.toLowerCase(),
    totpEnabled: (aws_cognito_mfa_types == null ? void 0 : aws_cognito_mfa_types.includes("TOTP")) ?? false,
    smsEnabled: (aws_cognito_mfa_types == null ? void 0 : aws_cognito_mfa_types.includes("SMS")) ?? false
  } : void 0;
  const passwordFormatConfig = aws_cognito_password_protection_settings ? {
    minLength: aws_cognito_password_protection_settings.passwordPolicyMinLength,
    requireLowercase: ((_a = aws_cognito_password_protection_settings.passwordPolicyCharacters) == null ? void 0 : _a.includes("REQUIRES_LOWERCASE")) ?? false,
    requireUppercase: ((_b = aws_cognito_password_protection_settings.passwordPolicyCharacters) == null ? void 0 : _b.includes("REQUIRES_UPPERCASE")) ?? false,
    requireNumbers: ((_c = aws_cognito_password_protection_settings.passwordPolicyCharacters) == null ? void 0 : _c.includes("REQUIRES_NUMBERS")) ?? false,
    requireSpecialCharacters: ((_d = aws_cognito_password_protection_settings.passwordPolicyCharacters) == null ? void 0 : _d.includes("REQUIRES_SYMBOLS")) ?? false
  } : void 0;
  const mergedUserAttributes = Array.from(/* @__PURE__ */ new Set([
    ...aws_cognito_verification_mechanisms ?? [],
    ...aws_cognito_signup_attributes ?? []
  ]));
  const userAttributes = mergedUserAttributes.reduce((attributes, key) => ({
    ...attributes,
    // All user attributes generated by the CLI are required
    [key.toLowerCase()]: { required: true }
  }), {});
  const loginWithEmailEnabled = (aws_cognito_username_attributes == null ? void 0 : aws_cognito_username_attributes.includes("EMAIL")) ?? false;
  const loginWithPhoneEnabled = (aws_cognito_username_attributes == null ? void 0 : aws_cognito_username_attributes.includes("PHONE_NUMBER")) ?? false;
  if (aws_cognito_identity_pool_id || aws_user_pools_id) {
    amplifyConfig.Auth = {
      Cognito: {
        identityPoolId: aws_cognito_identity_pool_id,
        allowGuestAccess: aws_mandatory_sign_in !== "enable",
        signUpVerificationMethod: aws_cognito_sign_up_verification_method,
        userAttributes,
        userPoolClientId: aws_user_pools_web_client_id,
        userPoolId: aws_user_pools_id,
        mfa: mfaConfig,
        passwordFormat: passwordFormatConfig,
        loginWith: {
          username: !(loginWithEmailEnabled || loginWithPhoneEnabled),
          email: loginWithEmailEnabled,
          phone: loginWithPhoneEnabled
        }
      }
    };
  }
  const hasOAuthConfig = oauth ? Object.keys(oauth).length > 0 : false;
  const hasSocialProviderConfig = aws_cognito_social_providers ? aws_cognito_social_providers.length > 0 : false;
  if (amplifyConfig.Auth && hasOAuthConfig) {
    amplifyConfig.Auth.Cognito.loginWith = {
      ...amplifyConfig.Auth.Cognito.loginWith,
      oauth: {
        ...getOAuthConfig(oauth),
        ...hasSocialProviderConfig && {
          providers: parseSocialProviders(aws_cognito_social_providers)
        }
      }
    };
  }
  if (aws_user_files_s3_bucket) {
    amplifyConfig.Storage = {
      S3: {
        bucket: aws_user_files_s3_bucket,
        region: aws_user_files_s3_bucket_region,
        dangerouslyConnectToHttpEndpointForTesting: aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
      }
    };
  }
  if (geo) {
    const { amazon_location_service } = geo;
    amplifyConfig.Geo = {
      LocationService: {
        maps: amazon_location_service.maps,
        geofenceCollections: amazon_location_service.geofenceCollections,
        searchIndices: amazon_location_service.search_indices,
        region: amazon_location_service.region
      }
    };
  }
  if (aws_cloud_logic_custom) {
    amplifyConfig.API = {
      ...amplifyConfig.API,
      REST: aws_cloud_logic_custom.reduce((acc, api2) => {
        const { name: name2, endpoint, region, service } = api2;
        return {
          ...acc,
          [name2]: {
            endpoint,
            ...service ? { service } : void 0,
            ...region ? { region } : void 0
          }
        };
      }, {})
    };
  }
  if (predictions) {
    const { VoiceId: voiceId } = ((_f = (_e = predictions == null ? void 0 : predictions.convert) == null ? void 0 : _e.speechGenerator) == null ? void 0 : _f.defaults) ?? {};
    amplifyConfig.Predictions = voiceId ? {
      ...predictions,
      convert: {
        ...predictions.convert,
        speechGenerator: {
          ...predictions.convert.speechGenerator,
          defaults: { voiceId }
        }
      }
    } : predictions;
  }
  return amplifyConfig;
};
var getRedirectUrl = (redirectStr) => (redirectStr == null ? void 0 : redirectStr.split(",")) ?? [];
var getOAuthConfig = ({ domain, scope, redirectSignIn, redirectSignOut, responseType }) => ({
  domain,
  scopes: scope,
  redirectSignIn: getRedirectUrl(redirectSignIn),
  redirectSignOut: getRedirectUrl(redirectSignOut),
  responseType
});
var parseSocialProviders = (aws_cognito_social_providers) => {
  return aws_cognito_social_providers.map((provider) => {
    const updatedProvider = provider.toLowerCase();
    return updatedProvider.charAt(0).toUpperCase() + updatedProvider.slice(1);
  });
};

// node_modules/@aws-amplify/core/dist/esm/singleton/constants.mjs
var ADD_OAUTH_LISTENER = Symbol("oauth-listener");

// node_modules/uuid/dist/esm-browser/rng.js
var rnds8 = new Uint8Array(16);

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default = parse;

// node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name2, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name2;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}

// node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = "0123456789abcdef";
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 255;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var md5_default = md5;

// node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35("v3", 48, md5_default);

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);

// node_modules/uuid/dist/esm-browser/sha1.js
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782];
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var sha1_default = sha1;

// node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35("v5", 80, sha1_default);

// node_modules/@aws-amplify/core/dist/esm/parseAmplifyOutputs.mjs
function isAmplifyOutputs(config2) {
  const { version: version2 } = config2;
  if (!version2) {
    return false;
  }
  return version2.startsWith("1");
}
function parseStorage(amplifyOutputsStorageProperties) {
  if (!amplifyOutputsStorageProperties) {
    return void 0;
  }
  const { bucket_name, aws_region } = amplifyOutputsStorageProperties;
  return {
    S3: {
      bucket: bucket_name,
      region: aws_region
    }
  };
}
function parseAuth(amplifyOutputsAuthProperties) {
  if (!amplifyOutputsAuthProperties) {
    return void 0;
  }
  const { user_pool_id, user_pool_client_id, identity_pool_id, password_policy, mfa_configuration, mfa_methods, unauthenticated_identities_enabled, oauth, username_attributes, standard_required_attributes } = amplifyOutputsAuthProperties;
  const authConfig = {
    Cognito: {
      userPoolId: user_pool_id,
      userPoolClientId: user_pool_client_id
    }
  };
  if (identity_pool_id) {
    authConfig.Cognito = {
      ...authConfig.Cognito,
      identityPoolId: identity_pool_id
    };
  }
  if (password_policy) {
    authConfig.Cognito.passwordFormat = {
      requireLowercase: password_policy.require_lowercase,
      requireNumbers: password_policy.require_numbers,
      requireUppercase: password_policy.require_uppercase,
      requireSpecialCharacters: password_policy.require_symbols,
      minLength: password_policy.min_length ?? 6
    };
  }
  if (mfa_configuration) {
    authConfig.Cognito.mfa = {
      status: getMfaStatus(mfa_configuration),
      smsEnabled: mfa_methods == null ? void 0 : mfa_methods.includes("SMS"),
      totpEnabled: mfa_methods == null ? void 0 : mfa_methods.includes("TOTP")
    };
  }
  if (unauthenticated_identities_enabled) {
    authConfig.Cognito.allowGuestAccess = unauthenticated_identities_enabled;
  }
  if (oauth) {
    authConfig.Cognito.loginWith = {
      oauth: {
        domain: oauth.domain,
        redirectSignIn: oauth.redirect_sign_in_uri,
        redirectSignOut: oauth.redirect_sign_out_uri,
        responseType: oauth.response_type === "token" ? "token" : "code",
        scopes: oauth.scopes,
        providers: getOAuthProviders(oauth.identity_providers)
      }
    };
  }
  if (username_attributes) {
    authConfig.Cognito.loginWith = {
      ...authConfig.Cognito.loginWith,
      email: username_attributes.includes("email"),
      phone: username_attributes.includes("phone_number"),
      // Signing in with a username is not currently supported in Gen2, this should always evaluate to false
      username: username_attributes.includes("username")
    };
  }
  if (standard_required_attributes) {
    authConfig.Cognito.userAttributes = standard_required_attributes.reduce((acc, curr) => ({ ...acc, [curr]: { required: true } }), {});
  }
  return authConfig;
}
function parseAnalytics(amplifyOutputsAnalyticsProperties) {
  if (!(amplifyOutputsAnalyticsProperties == null ? void 0 : amplifyOutputsAnalyticsProperties.amazon_pinpoint)) {
    return void 0;
  }
  const { amazon_pinpoint } = amplifyOutputsAnalyticsProperties;
  return {
    Pinpoint: {
      appId: amazon_pinpoint.app_id,
      region: amazon_pinpoint.aws_region
    }
  };
}
function parseGeo(amplifyOutputsAnalyticsProperties) {
  if (!amplifyOutputsAnalyticsProperties) {
    return void 0;
  }
  const { aws_region, geofence_collections, maps, search_indices } = amplifyOutputsAnalyticsProperties;
  return {
    LocationService: {
      region: aws_region,
      searchIndices: search_indices,
      geofenceCollections: geofence_collections,
      maps
    }
  };
}
function parseData(amplifyOutputsDataProperties) {
  if (!amplifyOutputsDataProperties) {
    return void 0;
  }
  const { aws_region, default_authorization_type, url, api_key, model_introspection } = amplifyOutputsDataProperties;
  const GraphQL = {
    endpoint: url,
    defaultAuthMode: getGraphQLAuthMode(default_authorization_type),
    region: aws_region,
    apiKey: api_key,
    modelIntrospection: model_introspection
  };
  return {
    GraphQL
  };
}
function parseNotifications(amplifyOutputsNotificationsProperties) {
  if (!amplifyOutputsNotificationsProperties) {
    return void 0;
  }
  const { aws_region, channels, amazon_pinpoint_app_id } = amplifyOutputsNotificationsProperties;
  const hasInAppMessaging = channels.includes("IN_APP_MESSAGING");
  const hasPushNotification = channels.includes("APNS") || channels.includes("FCM");
  if (!(hasInAppMessaging || hasPushNotification)) {
    return void 0;
  }
  const notificationsConfig = {};
  if (hasInAppMessaging) {
    notificationsConfig.InAppMessaging = {
      Pinpoint: {
        appId: amazon_pinpoint_app_id,
        region: aws_region
      }
    };
  }
  if (hasPushNotification) {
    notificationsConfig.PushNotification = {
      Pinpoint: {
        appId: amazon_pinpoint_app_id,
        region: aws_region
      }
    };
  }
  return notificationsConfig;
}
function parseAmplifyOutputs(amplifyOutputs) {
  const resourcesConfig = {};
  if (amplifyOutputs.storage) {
    resourcesConfig.Storage = parseStorage(amplifyOutputs.storage);
  }
  if (amplifyOutputs.auth) {
    resourcesConfig.Auth = parseAuth(amplifyOutputs.auth);
  }
  if (amplifyOutputs.analytics) {
    resourcesConfig.Analytics = parseAnalytics(amplifyOutputs.analytics);
  }
  if (amplifyOutputs.geo) {
    resourcesConfig.Geo = parseGeo(amplifyOutputs.geo);
  }
  if (amplifyOutputs.data) {
    resourcesConfig.API = parseData(amplifyOutputs.data);
  }
  if (amplifyOutputs.notifications) {
    resourcesConfig.Notifications = parseNotifications(amplifyOutputs.notifications);
  }
  return resourcesConfig;
}
var authModeNames = {
  AMAZON_COGNITO_USER_POOLS: "userPool",
  API_KEY: "apiKey",
  AWS_IAM: "iam",
  AWS_LAMBDA: "lambda",
  OPENID_CONNECT: "oidc"
};
function getGraphQLAuthMode(authType) {
  return authModeNames[authType];
}
var providerNames = {
  GOOGLE: "Google",
  LOGIN_WITH_AMAZON: "Amazon",
  FACEBOOK: "Facebook",
  SIGN_IN_WITH_APPLE: "Apple"
};
function getOAuthProviders(providers = []) {
  return providers.reduce((oAuthProviders, provider) => {
    if (providerNames[provider] !== void 0) {
      oAuthProviders.push(providerNames[provider]);
    }
    return oAuthProviders;
  }, []);
}
function getMfaStatus(mfaConfiguration) {
  if (mfaConfiguration === "OPTIONAL")
    return "optional";
  if (mfaConfiguration === "REQUIRED")
    return "on";
  return "off";
}

// node_modules/@aws-amplify/core/dist/esm/utils/parseAmplifyConfig.mjs
var parseAmplifyConfig = (amplifyConfig) => {
  if (Object.keys(amplifyConfig).some((key) => key.startsWith("aws_"))) {
    return parseAWSExports(amplifyConfig);
  } else if (isAmplifyOutputs(amplifyConfig)) {
    return parseAmplifyOutputs(amplifyConfig);
  } else {
    return amplifyConfig;
  }
};

// node_modules/@aws-amplify/core/dist/esm/singleton/Auth/index.mjs
function isTokenExpired({ expiresAt, clockDrift }) {
  const currentTime = Date.now();
  return currentTime + clockDrift > expiresAt;
}
var AuthClass = class {
  /**
   * Configure Auth category
   *
   * @internal
   *
   * @param authResourcesConfig - Resources configurations required by Auth providers.
   * @param authOptions - Client options used by library
   *
   * @returns void
   */
  configure(authResourcesConfig, authOptions) {
    this.authConfig = authResourcesConfig;
    this.authOptions = authOptions;
  }
  /**
   * Fetch the auth tokens, and the temporary AWS credentials and identity if they are configured. By default it
   * does not refresh the auth tokens or credentials if they are loaded in storage already. You can force a refresh
   * with `{ forceRefresh: true }` input.
   *
   * @param options - Options configuring the fetch behavior.
   *
   * @returns Promise of current auth session {@link AuthSession}.
   */
  async fetchAuthSession(options = {}) {
    var _a, _b, _c, _d, _e, _f;
    let credentialsAndIdentityId;
    let userSub;
    const tokens = await this.getTokens(options);
    if (tokens) {
      userSub = (_b = (_a = tokens.accessToken) == null ? void 0 : _a.payload) == null ? void 0 : _b.sub;
      credentialsAndIdentityId = await ((_d = (_c = this.authOptions) == null ? void 0 : _c.credentialsProvider) == null ? void 0 : _d.getCredentialsAndIdentityId({
        authConfig: this.authConfig,
        tokens,
        authenticated: true,
        forceRefresh: options.forceRefresh
      }));
    } else {
      credentialsAndIdentityId = await ((_f = (_e = this.authOptions) == null ? void 0 : _e.credentialsProvider) == null ? void 0 : _f.getCredentialsAndIdentityId({
        authConfig: this.authConfig,
        authenticated: false,
        forceRefresh: options.forceRefresh
      }));
    }
    return {
      tokens,
      credentials: credentialsAndIdentityId == null ? void 0 : credentialsAndIdentityId.credentials,
      identityId: credentialsAndIdentityId == null ? void 0 : credentialsAndIdentityId.identityId,
      userSub
    };
  }
  async clearCredentials() {
    var _a, _b;
    await ((_b = (_a = this.authOptions) == null ? void 0 : _a.credentialsProvider) == null ? void 0 : _b.clearCredentialsAndIdentityId());
  }
  async getTokens(options) {
    var _a, _b;
    return await ((_b = (_a = this.authOptions) == null ? void 0 : _a.tokenProvider) == null ? void 0 : _b.getTokens(options)) ?? void 0;
  }
};

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
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
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f2) {
    return function(v) {
      return Promise.resolve(v).then(f2, reject);
    };
  }
  function verb(n, f2) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f2)
        i[n] = f2(i[n]);
    }
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
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
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

// node_modules/@aws-amplify/core/node_modules/@aws-crypto/sha256-js/build/module/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

// node_modules/@aws-amplify/core/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
var RawSha256 = (
  /** @class */
  function() {
    function RawSha2562() {
      this.state = Int32Array.from(INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
          for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
            bufferView.setUint8(i, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
          bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(DIGEST_LENGTH);
      for (var i = 0; i < 8; i++) {
        out[i * 4] = this.state[i] >>> 24 & 255;
        out[i * 4 + 1] = this.state[i] >>> 16 & 255;
        out[i * 4 + 2] = this.state[i] >>> 8 & 255;
        out[i * 4 + 3] = this.state[i] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer2 = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i = 0; i < BLOCK_SIZE; i++) {
        if (i < 16) {
          this.temp[i] = (buffer2[i * 4] & 255) << 24 | (buffer2[i * 4 + 1] & 255) << 16 | (buffer2[i * 4 + 2] & 255) << 8 | buffer2[i * 4 + 3] & 255;
        } else {
          var u = this.temp[i - 2];
          var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
          u = this.temp[i - 15];
          var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
          this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i] + this.temp[i] | 0) | 0) | 0;
        var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t2 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  }()
);

// node_modules/@aws-amplify/core/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf8 = (input) => new TextEncoder().encode(input);

// node_modules/@aws-amplify/core/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf8;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf82(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@aws-amplify/core/node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}

// node_modules/@aws-amplify/core/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha256 = (
  /** @class */
  function() {
    function Sha2566(secret) {
      this.secret = secret;
      this.hash = new RawSha256();
      this.reset();
    }
    Sha2566.prototype.update = function(toHash) {
      if (isEmptyData(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update(convertToBuffer(toHash));
      } catch (e) {
        this.error = e;
      }
    };
    Sha2566.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2566.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2566.prototype.reset = function() {
      this.hash = new RawSha256();
      if (this.secret) {
        this.outer = new RawSha256();
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(BLOCK_SIZE);
        outer.set(inner);
        for (var i = 0; i < BLOCK_SIZE; i++) {
          inner[i] ^= 54;
          outer[i] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i = 0; i < inner.byteLength; i++) {
          inner[i] = 0;
        }
      }
    };
    return Sha2566;
  }()
);
function bufferFromSecret(secret) {
  var input = convertToBuffer(secret);
  if (input.byteLength > BLOCK_SIZE) {
    var bufferHash = new RawSha256();
    bufferHash.update(input);
    input = bufferHash.digest();
  }
  var buffer2 = new Uint8Array(BLOCK_SIZE);
  buffer2.set(input);
  return buffer2;
}

// node_modules/@aws-amplify/core/node_modules/@smithy/util-hex-encoding/dist-es/index.js
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
  let encodedByte = i.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i;
}
function toHex(bytes) {
  let out = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX[bytes[i]];
  }
  return out;
}

// node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs
var Framework;
(function(Framework2) {
  Framework2["WebUnknown"] = "0";
  Framework2["React"] = "1";
  Framework2["NextJs"] = "2";
  Framework2["Angular"] = "3";
  Framework2["VueJs"] = "4";
  Framework2["Nuxt"] = "5";
  Framework2["Svelte"] = "6";
  Framework2["ServerSideUnknown"] = "100";
  Framework2["ReactSSR"] = "101";
  Framework2["NextJsSSR"] = "102";
  Framework2["AngularSSR"] = "103";
  Framework2["VueJsSSR"] = "104";
  Framework2["NuxtSSR"] = "105";
  Framework2["SvelteSSR"] = "106";
  Framework2["ReactNative"] = "201";
  Framework2["Expo"] = "202";
})(Framework || (Framework = {}));
var Category;
(function(Category2) {
  Category2["API"] = "api";
  Category2["Auth"] = "auth";
  Category2["Analytics"] = "analytics";
  Category2["DataStore"] = "datastore";
  Category2["Geo"] = "geo";
  Category2["InAppMessaging"] = "inappmessaging";
  Category2["Interactions"] = "interactions";
  Category2["Predictions"] = "predictions";
  Category2["PubSub"] = "pubsub";
  Category2["PushNotification"] = "pushnotification";
  Category2["Storage"] = "storage";
})(Category || (Category = {}));
var AnalyticsAction;
(function(AnalyticsAction2) {
  AnalyticsAction2["Record"] = "1";
  AnalyticsAction2["IdentifyUser"] = "2";
})(AnalyticsAction || (AnalyticsAction = {}));
var ApiAction;
(function(ApiAction2) {
  ApiAction2["GraphQl"] = "1";
  ApiAction2["Get"] = "2";
  ApiAction2["Post"] = "3";
  ApiAction2["Put"] = "4";
  ApiAction2["Patch"] = "5";
  ApiAction2["Del"] = "6";
  ApiAction2["Head"] = "7";
})(ApiAction || (ApiAction = {}));
var AuthAction;
(function(AuthAction2) {
  AuthAction2["SignUp"] = "1";
  AuthAction2["ConfirmSignUp"] = "2";
  AuthAction2["ResendSignUpCode"] = "3";
  AuthAction2["SignIn"] = "4";
  AuthAction2["FetchMFAPreference"] = "6";
  AuthAction2["UpdateMFAPreference"] = "7";
  AuthAction2["SetUpTOTP"] = "10";
  AuthAction2["VerifyTOTPSetup"] = "11";
  AuthAction2["ConfirmSignIn"] = "12";
  AuthAction2["DeleteUserAttributes"] = "15";
  AuthAction2["DeleteUser"] = "16";
  AuthAction2["UpdateUserAttributes"] = "17";
  AuthAction2["FetchUserAttributes"] = "18";
  AuthAction2["ConfirmUserAttribute"] = "22";
  AuthAction2["SignOut"] = "26";
  AuthAction2["UpdatePassword"] = "27";
  AuthAction2["ResetPassword"] = "28";
  AuthAction2["ConfirmResetPassword"] = "29";
  AuthAction2["FederatedSignIn"] = "30";
  AuthAction2["RememberDevice"] = "32";
  AuthAction2["ForgetDevice"] = "33";
  AuthAction2["FetchDevices"] = "34";
  AuthAction2["SendUserAttributeVerificationCode"] = "35";
  AuthAction2["SignInWithRedirect"] = "36";
})(AuthAction || (AuthAction = {}));
var DataStoreAction;
(function(DataStoreAction2) {
  DataStoreAction2["Subscribe"] = "1";
  DataStoreAction2["GraphQl"] = "2";
})(DataStoreAction || (DataStoreAction = {}));
var GeoAction;
(function(GeoAction2) {
  GeoAction2["SearchByText"] = "0";
  GeoAction2["SearchByCoordinates"] = "1";
  GeoAction2["SearchForSuggestions"] = "2";
  GeoAction2["SearchByPlaceId"] = "3";
  GeoAction2["SaveGeofences"] = "4";
  GeoAction2["GetGeofence"] = "5";
  GeoAction2["ListGeofences"] = "6";
  GeoAction2["DeleteGeofences"] = "7";
})(GeoAction || (GeoAction = {}));
var InAppMessagingAction;
(function(InAppMessagingAction2) {
  InAppMessagingAction2["SyncMessages"] = "1";
  InAppMessagingAction2["IdentifyUser"] = "2";
  InAppMessagingAction2["NotifyMessageInteraction"] = "3";
})(InAppMessagingAction || (InAppMessagingAction = {}));
var InteractionsAction;
(function(InteractionsAction2) {
  InteractionsAction2["None"] = "0";
})(InteractionsAction || (InteractionsAction = {}));
var PredictionsAction;
(function(PredictionsAction2) {
  PredictionsAction2["Convert"] = "1";
  PredictionsAction2["Identify"] = "2";
  PredictionsAction2["Interpret"] = "3";
})(PredictionsAction || (PredictionsAction = {}));
var PubSubAction;
(function(PubSubAction2) {
  PubSubAction2["Subscribe"] = "1";
})(PubSubAction || (PubSubAction = {}));
var PushNotificationAction;
(function(PushNotificationAction2) {
  PushNotificationAction2["InitializePushNotifications"] = "1";
  PushNotificationAction2["IdentifyUser"] = "2";
})(PushNotificationAction || (PushNotificationAction = {}));
var StorageAction;
(function(StorageAction2) {
  StorageAction2["UploadData"] = "1";
  StorageAction2["DownloadData"] = "2";
  StorageAction2["List"] = "3";
  StorageAction2["Copy"] = "4";
  StorageAction2["Remove"] = "5";
  StorageAction2["GetProperties"] = "6";
  StorageAction2["GetUrl"] = "7";
})(StorageAction || (StorageAction = {}));

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs
var globalExists = () => {
  return typeof global !== "undefined";
};
var windowExists = () => {
  return typeof window !== "undefined";
};
var documentExists = () => {
  return typeof document !== "undefined";
};
var processExists = () => {
  return typeof process !== "undefined";
};
var keyPrefixMatch = (object, prefix) => {
  return !!Object.keys(object).find((key) => key.startsWith(prefix));
};

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/React.mjs
function reactWebDetect() {
  const elementKeyPrefixedWithReact = (key) => {
    return key.startsWith("_react") || key.startsWith("__react");
  };
  const elementIsReactEnabled = (element) => {
    return Object.keys(element).find(elementKeyPrefixedWithReact);
  };
  const allElementsWithId = () => Array.from(document.querySelectorAll("[id]"));
  return documentExists() && allElementsWithId().some(elementIsReactEnabled);
}
function reactSSRDetect() {
  return processExists() && typeof process.env !== "undefined" && !!Object.keys(process.env).find((key) => key.includes("react"));
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Vue.mjs
function vueWebDetect() {
  return windowExists() && keyPrefixMatch(window, "__VUE");
}
function vueSSRDetect() {
  return globalExists() && keyPrefixMatch(global, "__VUE");
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Svelte.mjs
function svelteWebDetect() {
  return windowExists() && keyPrefixMatch(window, "__SVELTE");
}
function svelteSSRDetect() {
  return processExists() && typeof process.env !== "undefined" && !!Object.keys(process.env).find((key) => key.includes("svelte"));
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Next.mjs
function nextWebDetect() {
  return windowExists() && window.next && typeof window.next === "object";
}
function nextSSRDetect() {
  return globalExists() && (keyPrefixMatch(global, "__next") || keyPrefixMatch(global, "__NEXT"));
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Nuxt.mjs
function nuxtWebDetect() {
  return windowExists() && (window.__NUXT__ !== void 0 || window.$nuxt !== void 0);
}
function nuxtSSRDetect() {
  return globalExists() && typeof global.__NUXT_PATHS__ !== "undefined";
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Angular.mjs
function angularWebDetect() {
  const angularVersionSetInDocument = Boolean(documentExists() && document.querySelector("[ng-version]"));
  const angularContentSetInWindow = Boolean(windowExists() && typeof window.ng !== "undefined");
  return angularVersionSetInDocument || angularContentSetInWindow;
}
function angularSSRDetect() {
  var _a;
  return processExists() && typeof process.env === "object" && ((_a = process.env.npm_lifecycle_script) == null ? void 0 : _a.startsWith("ng ")) || false;
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/ReactNative.mjs
function reactNativeDetect() {
  return typeof navigator !== "undefined" && typeof navigator.product !== "undefined" && navigator.product === "ReactNative";
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Expo.mjs
function expoDetect() {
  return globalExists() && typeof global.expo !== "undefined";
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/Web.mjs
function webDetect() {
  return windowExists();
}

// node_modules/@aws-amplify/core/dist/esm/Platform/detection/index.mjs
var detectionMap = [
  // First, detect mobile
  { platform: Framework.Expo, detectionMethod: expoDetect },
  { platform: Framework.ReactNative, detectionMethod: reactNativeDetect },
  // Next, detect web frameworks
  { platform: Framework.NextJs, detectionMethod: nextWebDetect },
  { platform: Framework.Nuxt, detectionMethod: nuxtWebDetect },
  { platform: Framework.Angular, detectionMethod: angularWebDetect },
  { platform: Framework.React, detectionMethod: reactWebDetect },
  { platform: Framework.VueJs, detectionMethod: vueWebDetect },
  { platform: Framework.Svelte, detectionMethod: svelteWebDetect },
  { platform: Framework.WebUnknown, detectionMethod: webDetect },
  // Last, detect ssr frameworks
  { platform: Framework.NextJsSSR, detectionMethod: nextSSRDetect },
  { platform: Framework.NuxtSSR, detectionMethod: nuxtSSRDetect },
  { platform: Framework.ReactSSR, detectionMethod: reactSSRDetect },
  { platform: Framework.VueJsSSR, detectionMethod: vueSSRDetect },
  { platform: Framework.AngularSSR, detectionMethod: angularSSRDetect },
  { platform: Framework.SvelteSSR, detectionMethod: svelteSSRDetect }
];
function detect() {
  var _a;
  return ((_a = detectionMap.find((detectionEntry) => detectionEntry.detectionMethod())) == null ? void 0 : _a.platform) || Framework.ServerSideUnknown;
}

// node_modules/@aws-amplify/core/dist/esm/BackgroundProcessManager/types.mjs
var BackgroundProcessManagerState;
(function(BackgroundProcessManagerState2) {
  BackgroundProcessManagerState2["Open"] = "Open";
  BackgroundProcessManagerState2["Closing"] = "Closing";
  BackgroundProcessManagerState2["Closed"] = "Closed";
})(BackgroundProcessManagerState || (BackgroundProcessManagerState = {}));

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty2 = new Subscription2();
    empty2.closed = true;
    return empty2;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init2) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init2(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/operators/refCount.js
function refCount() {
  return operate(function(source, subscriber) {
    var connection = null;
    source._refCount++;
    var refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }
      var sharedConnection = source._connection;
      var conn = connection;
      connection = null;
      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }
      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);
    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = function(_super) {
  __extends(ConnectableObservable2, _super);
  function ConnectableObservable2(source, subjectFactory) {
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._subject = null;
    _this._refCount = 0;
    _this._connection = null;
    if (hasLift(source)) {
      _this.lift = source.lift;
    }
    return _this;
  }
  ConnectableObservable2.prototype._subscribe = function(subscriber) {
    return this.getSubject().subscribe(subscriber);
  };
  ConnectableObservable2.prototype.getSubject = function() {
    var subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  };
  ConnectableObservable2.prototype._teardown = function() {
    this._refCount = 0;
    var _connection = this._connection;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  };
  ConnectableObservable2.prototype.connect = function() {
    var _this = this;
    var connection = this._connection;
    if (!connection) {
      connection = this._connection = new Subscription();
      var subject_1 = this.getSubject();
      connection.add(this.source.subscribe(createOperatorSubscriber(subject_1, void 0, function() {
        _this._teardown();
        subject_1.complete();
      }, function(err) {
        _this._teardown();
        subject_1.error(err);
      }, function() {
        return _this._teardown();
      })));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  };
  ConnectableObservable2.prototype.refCount = function() {
    return refCount()(this);
  };
  return ConnectableObservable2;
}(Observable);

// node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
  now: function() {
    return (performanceTimestampProvider.delegate || performance).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule: function(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    var handle = request(function(timestamp2) {
      cancel = void 0;
      callback(timestamp2);
    });
    return new Subscription(function() {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  cancelAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js
function animationFramesFactory(timestampProvider) {
  return new Observable(function(subscriber) {
    var provider = timestampProvider || performanceTimestampProvider;
    var start = provider.now();
    var id = 0;
    var run = function() {
      if (!subscriber.closed) {
        id = animationFrameProvider.requestAnimationFrame(function(timestamp2) {
          id = 0;
          var now = provider.now();
          subscriber.next({
            timestamp: timestampProvider ? now : timestamp2,
            elapsed: now - start
          });
          run();
        });
      }
    };
    run();
    return function() {
      if (id) {
        animationFrameProvider.cancelAnimationFrame(id);
      }
    };
  });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
    var copy = _buffer.slice();
    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last3 = 0;
      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last3 = i;
      }
      last3 && _buffer.splice(0, last3 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/AsyncSubject.js
var AsyncSubject = function(_super) {
  __extends(AsyncSubject2, _super);
  function AsyncSubject2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._value = null;
    _this._hasValue = false;
    _this._isComplete = false;
    return _this;
  }
  AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  };
  AsyncSubject2.prototype.next = function(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  };
  AsyncSubject2.prototype.complete = function() {
    var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && _super.prototype.next.call(this, _value);
      _super.prototype.complete.call(this);
    }
  };
  return AsyncSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var Immediate = {
  setImmediate: function(cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(function() {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function(handle) {
    findAndClearHandle(handle);
  }
};

// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
  setImmediate: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
  },
  clearImmediate: function(handle) {
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function(_super) {
  __extends(AsapAction2, _super);
  function AsapAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
  };
  AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = void 0;
      }
    }
    return void 0;
  };
  return AsapAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js
var AsapScheduler = function(_super) {
  __extends(AsapScheduler2, _super);
  function AsapScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AsapScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsapScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
var QueueAction = function(_super) {
  __extends(QueueAction2, _super);
  function QueueAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  QueueAction2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 > 0) {
      return _super.prototype.schedule.call(this, state, delay2);
    }
    this.delay = delay2;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };
  QueueAction2.prototype.execute = function(state, delay2) {
    return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state, delay2) : this._execute(state, delay2);
  };
  QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && delay2 > 0 || delay2 == null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.flush(this);
    return 0;
  };
  return QueueAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js
var QueueScheduler = function(_super) {
  __extends(QueueScheduler2, _super);
  function QueueScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return QueueScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
  __extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = function(_super) {
  __extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler = function(_super) {
  __extends(VirtualTimeScheduler2, _super);
  function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
    if (schedulerActionCtor === void 0) {
      schedulerActionCtor = VirtualAction;
    }
    if (maxFrames === void 0) {
      maxFrames = Infinity;
    }
    var _this = _super.call(this, schedulerActionCtor, function() {
      return _this.frame;
    }) || this;
    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }
  VirtualTimeScheduler2.prototype.flush = function() {
    var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
    var error;
    var action;
    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  VirtualTimeScheduler2.frameTimeFactor = 10;
  return VirtualTimeScheduler2;
}(AsyncScheduler);
var VirtualAction = function(_super) {
  __extends(VirtualAction2, _super);
  function VirtualAction2(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }
  VirtualAction2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (Number.isFinite(delay2)) {
      if (!this.id) {
        return _super.prototype.schedule.call(this, state, delay2);
      }
      this.active = false;
      var action = new VirtualAction2(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state, delay2);
    } else {
      return Subscription.EMPTY;
    }
  };
  VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    this.delay = scheduler.frame + delay2;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction2.sortActions);
    return 1;
  };
  VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return void 0;
  };
  VirtualAction2.prototype._execute = function(state, delay2) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay2);
    }
  };
  VirtualAction2.sortActions = function(a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };
  return VirtualAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process2(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process2(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat2 === void 0) {
    repeat2 = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat2) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat2) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay2));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init2 = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init2, 0, subscriber);
  } : init2);
}

// node_modules/rxjs/dist/esm5/internal/Notification.js
var NotificationKind;
(function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    return observeNotification(this, observer);
  };
  Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    var _a;
    return isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };
  Notification2.prototype.toObservable = function() {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    var result = kind === "N" ? of(value) : kind === "E" ? throwError(function() {
      return error;
    }) : kind === "C" ? EMPTY : 0;
    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }
    return result;
  };
  Notification2.createNext = function(value) {
    return new Notification2("N", value);
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  return Notification2;
}();
function observeNotification(notification, observer) {
  var _a, _b, _c;
  var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
  if (typeof kind !== "string") {
    throw new TypeError('Invalid notification, missing "kind"');
  }
  kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}

// node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});

// node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = createErrorClass(function(_super) {
  return function ArgumentOutOfRangeErrorImpl() {
    _super(this);
    this.name = "ArgumentOutOfRangeError";
    this.message = "argument out of range";
  };
});

// node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js
var NotFoundError = createErrorClass(function(_super) {
  return function NotFoundErrorImpl(message) {
    _super(this);
    this.name = "NotFoundError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/SequenceError.js
var SequenceError = createErrorClass(function(_super) {
  return function SequenceErrorImpl(message) {
    _super(this);
    this.name = "SequenceError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var TimeoutError = createErrorClass(function(_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;

// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var objectProto = Object.prototype;

// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);

// node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var isArray3 = Array.isArray;

// node_modules/@aws-amplify/core/dist/esm/utils/isWebWorker.mjs
var isWebWorker = () => {
  if (typeof self === "undefined") {
    return false;
  }
  const selfContext = self;
  return typeof selfContext.WorkerGlobalScope !== "undefined" && self instanceof selfContext.WorkerGlobalScope;
};

// node_modules/@aws-amplify/core/dist/esm/Reachability/Reachability.mjs
var Reachability = class _Reachability {
  networkMonitor(_) {
    const globalObj = isWebWorker() ? self : typeof window !== "undefined" && window;
    if (!globalObj) {
      return from([{ online: true }]);
    }
    return new Observable((observer) => {
      observer.next({ online: globalObj.navigator.onLine });
      const notifyOnline = () => {
        observer.next({ online: true });
      };
      const notifyOffline = () => {
        observer.next({ online: false });
      };
      globalObj.addEventListener("online", notifyOnline);
      globalObj.addEventListener("offline", notifyOffline);
      _Reachability._observers.push(observer);
      return () => {
        globalObj.removeEventListener("online", notifyOnline);
        globalObj.removeEventListener("offline", notifyOffline);
        _Reachability._observers = _Reachability._observers.filter((_observer) => _observer !== observer);
      };
    });
  }
  // expose observers to simulate offline mode for integration testing
  static _observerOverride(status) {
    for (const observer of this._observers) {
      if (observer.closed) {
        this._observers = this._observers.filter((_observer) => _observer !== observer);
        continue;
      }
      (observer == null ? void 0 : observer.next) && observer.next(status);
    }
  }
};
Reachability._observers = [];

// node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs
var isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";

// node_modules/@aws-amplify/core/dist/esm/utils/sessionListener/SessionListener.mjs
var stateChangeListeners = /* @__PURE__ */ new Set();
var SessionListener = class {
  constructor() {
    this.listenerActive = false;
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    if (isBrowser()) {
      document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
      this.listenerActive = true;
    }
  }
  addStateChangeListener(listener, notifyOnAdd = false) {
    if (!this.listenerActive) {
      return;
    }
    stateChangeListeners.add(listener);
    if (notifyOnAdd) {
      listener(this.getSessionState());
    }
  }
  removeStateChangeListener(handler) {
    if (!this.listenerActive) {
      return;
    }
    stateChangeListeners.delete(handler);
  }
  handleVisibilityChange() {
    this.notifyHandlers();
  }
  notifyHandlers() {
    const sessionState = this.getSessionState();
    stateChangeListeners.forEach((listener) => {
      listener(sessionState);
    });
  }
  getSessionState() {
    if (isBrowser() && document.visibilityState !== "hidden") {
      return "started";
    }
    return "ended";
  }
};

// node_modules/@aws-amplify/core/dist/esm/utils/sessionListener/index.mjs
var sessionListener = new SessionListener();

// node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs
var AmplifyClass = class {
  constructor() {
    this.oAuthListener = void 0;
    this.resourcesConfig = {};
    this.libraryOptions = {};
    this.Auth = new AuthClass();
  }
  /**
   * Configures Amplify for use with your back-end resources.
   *
   * @remarks
   * This API does not perform any merging of either `resourcesConfig` or `libraryOptions`. The most recently
   * provided values will be used after configuration.
   *
   * @remarks
   * `configure` can be used to specify additional library options where available for supported categories.
   *
   * @param resourceConfig - Back-end resource configuration. Typically provided via the `aws-exports.js` file.
   * @param libraryOptions - Additional options for customizing the behavior of the library.
   */
  configure(resourcesConfig, libraryOptions) {
    const resolvedResourceConfig = parseAmplifyConfig(resourcesConfig);
    this.resourcesConfig = resolvedResourceConfig;
    if (libraryOptions) {
      this.libraryOptions = libraryOptions;
    }
    this.resourcesConfig = deepFreeze(this.resourcesConfig);
    this.Auth.configure(this.resourcesConfig.Auth, this.libraryOptions.Auth);
    Hub.dispatch("core", {
      event: "configure",
      data: this.resourcesConfig
    }, "Configure", AMPLIFY_SYMBOL);
    this.notifyOAuthListener();
  }
  /**
   * Provides access to the current back-end resource configuration for the Library.
   *
   * @returns Returns the immutable back-end resource configuration.
   */
  getConfig() {
    return this.resourcesConfig;
  }
  /** @internal */
  [ADD_OAUTH_LISTENER](listener) {
    var _a, _b, _c;
    if ((_b = (_a = this.resourcesConfig.Auth) == null ? void 0 : _a.Cognito.loginWith) == null ? void 0 : _b.oauth) {
      listener((_c = this.resourcesConfig.Auth) == null ? void 0 : _c.Cognito);
    } else {
      this.oAuthListener = listener;
    }
  }
  notifyOAuthListener() {
    var _a, _b, _c;
    if (!((_b = (_a = this.resourcesConfig.Auth) == null ? void 0 : _a.Cognito.loginWith) == null ? void 0 : _b.oauth) || !this.oAuthListener) {
      return;
    }
    this.oAuthListener((_c = this.resourcesConfig.Auth) == null ? void 0 : _c.Cognito);
    this.oAuthListener = void 0;
  }
};
var Amplify = new AmplifyClass();

// node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs
var parseMetadata = (response) => {
  const { headers, statusCode } = response;
  return {
    ...isMetadataBearer(response) ? response.$metadata : {},
    httpStatusCode: statusCode,
    requestId: headers["x-amzn-requestid"] ?? headers["x-amzn-request-id"] ?? headers["x-amz-request-id"],
    extendedRequestId: headers["x-amz-id-2"],
    cfId: headers["x-amz-cf-id"]
  };
};
var isMetadataBearer = (response) => typeof (response == null ? void 0 : response.$metadata) === "object";

// node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs
var parseJsonError = async (response) => {
  if (!response || response.statusCode < 300) {
    return;
  }
  const body = await parseJsonBody(response);
  const sanitizeErrorCode = (rawValue) => {
    const [cleanValue] = rawValue.toString().split(/[,:]+/);
    if (cleanValue.includes("#")) {
      return cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const code = sanitizeErrorCode(response.headers["x-amzn-errortype"] ?? body.code ?? body.__type ?? "UnknownError");
  const message = body.message ?? body.Message ?? "Unknown error";
  const error = new Error(message);
  return Object.assign(error, {
    name: code,
    $metadata: parseMetadata(response)
  });
};
var parseJsonBody = async (response) => {
  if (!response.body) {
    throw new Error("Missing response payload");
  }
  const output = await response.body.json();
  return Object.assign(output, {
    $metadata: parseMetadata(response)
  });
};

// node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs
var composeServiceApi = (transferHandler, serializer, deserializer, defaultConfig5) => {
  return async (config2, input) => {
    const resolvedConfig = {
      ...defaultConfig5,
      ...config2
    };
    const endpoint = await resolvedConfig.endpointResolver(resolvedConfig, input);
    const request = await serializer(input, endpoint);
    const response = await transferHandler(request, {
      ...resolvedConfig
    });
    return deserializer(response);
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/endpoints/partitions.mjs
var defaultPartition = {
  id: "aws",
  outputs: {
    dnsSuffix: "amazonaws.com"
  },
  regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
  regions: ["aws-global"]
};
var partitionsInfo = {
  partitions: [
    defaultPartition,
    {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn"
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: ["aws-cn-global"]
    }
  ]
};

// node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs
var getDnsSuffix = (region) => {
  const { partitions } = partitionsInfo;
  for (const { regions, outputs, regionRegex } of partitions) {
    const regex = new RegExp(regionRegex);
    if (regions.includes(region) || regex.test(region)) {
      return outputs.dnsSuffix;
    }
  }
  return defaultPartition.outputs.dnsSuffix;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/middleware.mjs
var DEFAULT_RETRY_ATTEMPTS = 3;
var retryMiddlewareFactory = ({ maxAttempts = DEFAULT_RETRY_ATTEMPTS, retryDecider, computeDelay, abortSignal }) => {
  if (maxAttempts < 1) {
    throw new Error("maxAttempts must be greater than 0");
  }
  return (next, context2) => async function retryMiddleware(request) {
    let error;
    let attemptsCount = context2.attemptsCount ?? 0;
    let response;
    const handleTerminalErrorOrResponse = () => {
      if (response) {
        addOrIncrementMetadataAttempts(response, attemptsCount);
        return response;
      } else {
        addOrIncrementMetadataAttempts(error, attemptsCount);
        throw error;
      }
    };
    while (!(abortSignal == null ? void 0 : abortSignal.aborted) && attemptsCount < maxAttempts) {
      try {
        response = await next(request);
        error = void 0;
      } catch (e) {
        error = e;
        response = void 0;
      }
      attemptsCount = (context2.attemptsCount ?? 0) > attemptsCount ? context2.attemptsCount ?? 0 : attemptsCount + 1;
      context2.attemptsCount = attemptsCount;
      if (await retryDecider(response, error)) {
        if (!(abortSignal == null ? void 0 : abortSignal.aborted) && attemptsCount < maxAttempts) {
          const delay2 = computeDelay(attemptsCount);
          await cancellableSleep(delay2, abortSignal);
        }
        continue;
      } else {
        return handleTerminalErrorOrResponse();
      }
    }
    if (abortSignal == null ? void 0 : abortSignal.aborted) {
      throw new Error("Request aborted.");
    } else {
      return handleTerminalErrorOrResponse();
    }
  };
};
var cancellableSleep = (timeoutMs, abortSignal) => {
  if (abortSignal == null ? void 0 : abortSignal.aborted) {
    return Promise.resolve();
  }
  let timeoutId;
  let sleepPromiseResolveFn;
  const sleepPromise = new Promise((resolve) => {
    sleepPromiseResolveFn = resolve;
    timeoutId = setTimeout(resolve, timeoutMs);
  });
  abortSignal == null ? void 0 : abortSignal.addEventListener("abort", function cancelSleep(_) {
    clearTimeout(timeoutId);
    abortSignal == null ? void 0 : abortSignal.removeEventListener("abort", cancelSleep);
    sleepPromiseResolveFn();
  });
  return sleepPromise;
};
var addOrIncrementMetadataAttempts = (nextHandlerOutput, attempts) => {
  if (Object.prototype.toString.call(nextHandlerOutput) !== "[object Object]") {
    return;
  }
  nextHandlerOutput.$metadata = {
    ...nextHandlerOutput.$metadata ?? {},
    attempts
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/userAgent/middleware.mjs
var userAgentMiddlewareFactory = ({ userAgentHeader = "x-amz-user-agent", userAgentValue = "" }) => (next) => {
  return async function userAgentMiddleware(request) {
    if (userAgentValue.trim().length === 0) {
      const result = await next(request);
      return result;
    } else {
      const headerName = userAgentHeader.toLowerCase();
      request.headers[headerName] = request.headers[headerName] ? `${request.headers[headerName]} ${userAgentValue}` : userAgentValue;
      const response = await next(request);
      return response;
    }
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs
var composeTransferHandler = (coreHandler, middleware) => (request, options) => {
  const context2 = {};
  let composedHandler = (composeHandlerRequest) => coreHandler(composeHandlerRequest, options);
  for (let i = middleware.length - 1; i >= 0; i--) {
    const m = middleware[i];
    const resolvedMiddleware = m(options);
    composedHandler = resolvedMiddleware(composedHandler, context2);
  }
  return composedHandler(request);
};

// node_modules/@aws-amplify/core/dist/esm/clients/utils/memoization.mjs
var withMemoization = (payloadAccessor) => {
  let cached;
  return () => {
    if (!cached) {
      cached = payloadAccessor();
    }
    return cached;
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/handlers/fetch.mjs
var shouldSendBody = (method) => !["HEAD", "GET", "DELETE"].includes(method.toUpperCase());
var fetchTransferHandler = async ({ url, method, headers, body }, { abortSignal, cache, withCrossDomainCredentials }) => {
  var _a;
  let resp;
  try {
    resp = await fetch(url, {
      method,
      headers,
      body: shouldSendBody(method) ? body : void 0,
      signal: abortSignal,
      cache,
      credentials: withCrossDomainCredentials ? "include" : "same-origin"
    });
  } catch (e) {
    if (e instanceof TypeError) {
      throw new Error("Network error");
    }
    throw e;
  }
  const responseHeaders = {};
  (_a = resp.headers) == null ? void 0 : _a.forEach((value, key) => {
    responseHeaders[key.toLowerCase()] = value;
  });
  const httpResponse = {
    statusCode: resp.status,
    headers: responseHeaders,
    body: null
  };
  const bodyWithMixin = Object.assign(resp.body ?? {}, {
    text: withMemoization(() => resp.text()),
    blob: withMemoization(() => resp.blob()),
    json: withMemoization(() => resp.json())
  });
  return {
    ...httpResponse,
    body: bodyWithMixin
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/handlers/unauthenticated.mjs
var unauthenticatedHandler = composeTransferHandler(fetchTransferHandler, [userAgentMiddlewareFactory, retryMiddlewareFactory]);

// node_modules/@aws-amplify/core/dist/esm/utils/retry/constants.mjs
var MAX_DELAY_MS = 5 * 60 * 1e3;

// node_modules/@aws-amplify/core/dist/esm/utils/retry/jitteredBackoff.mjs
function jitteredBackoff(maxDelayMs = MAX_DELAY_MS) {
  const BASE_TIME_MS = 100;
  const JITTER_FACTOR = 100;
  return (attempt) => {
    const delay2 = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
    return delay2 > maxDelayMs ? false : delay2;
  };
}

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs
var DEFAULT_MAX_DELAY_MS = 5 * 60 * 1e3;
var jitteredBackoff2 = (attempt) => {
  const delayFunction = jitteredBackoff(DEFAULT_MAX_DELAY_MS);
  const delay2 = delayFunction(attempt);
  return delay2 === false ? DEFAULT_MAX_DELAY_MS : delay2;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/isClockSkewError.mjs
var CLOCK_SKEW_ERROR_CODES = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch",
  "BadRequestException"
  // API Gateway
];
var isClockSkewError = (errorCode) => !!errorCode && CLOCK_SKEW_ERROR_CODES.includes(errorCode);

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs
var getRetryDecider = (errorParser) => async (response, error) => {
  const parsedError = error ?? await errorParser(response) ?? void 0;
  const errorCode = (parsedError == null ? void 0 : parsedError.code) || (parsedError == null ? void 0 : parsedError.name);
  const statusCode = response == null ? void 0 : response.statusCode;
  return isConnectionError(error) || isThrottlingError(statusCode, errorCode) || isClockSkewError(errorCode) || isServerSideError(statusCode, errorCode);
};
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException"
];
var TIMEOUT_ERROR_CODES = [
  "TimeoutError",
  "RequestTimeout",
  "RequestTimeoutException"
];
var isThrottlingError = (statusCode, errorCode) => statusCode === 429 || !!errorCode && THROTTLING_ERROR_CODES.includes(errorCode);
var isConnectionError = (error) => (error == null ? void 0 : error.name) === "Network error";
var isServerSideError = (statusCode, errorCode) => !!statusCode && [500, 502, 503, 504].includes(statusCode) || !!errorCode && TIMEOUT_ERROR_CODES.includes(errorCode);

// node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs
var AmplifyUrl = URL;

// node_modules/@aws-amplify/core/dist/esm/Platform/version.mjs
var version = "6.3.6";

// node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs
var frameworkCache;
var frameworkChangeObservers = [];
var resetTriggered = false;
var SSR_RESET_TIMEOUT = 10;
var WEB_RESET_TIMEOUT = 10;
var PRIME_FRAMEWORK_DELAY = 1e3;
var detectFramework = () => {
  var _a;
  if (!frameworkCache) {
    frameworkCache = detect();
    if (resetTriggered) {
      while (frameworkChangeObservers.length) {
        (_a = frameworkChangeObservers.pop()) == null ? void 0 : _a();
      }
    } else {
      frameworkChangeObservers.forEach((fcn) => {
        fcn();
      });
    }
    resetTimeout(Framework.ServerSideUnknown, SSR_RESET_TIMEOUT);
    resetTimeout(Framework.WebUnknown, WEB_RESET_TIMEOUT);
  }
  return frameworkCache;
};
var observeFrameworkChanges = (fcn) => {
  if (resetTriggered) {
    return;
  }
  frameworkChangeObservers.push(fcn);
};
function clearCache() {
  frameworkCache = void 0;
}
function resetTimeout(framework, delay2) {
  if (frameworkCache === framework && !resetTriggered) {
    setTimeout(() => {
      clearCache();
      resetTriggered = true;
      setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
    }, delay2);
  }
}

// node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs
var customUserAgentState = {};
var getCustomUserAgent = (category, api2) => {
  var _a, _b;
  return (_b = (_a = customUserAgentState[category]) == null ? void 0 : _a[api2]) == null ? void 0 : _b.additionalDetails;
};

// node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs
var BASE_USER_AGENT = `aws-amplify`;
var PlatformBuilder = class {
  constructor() {
    this.userAgent = `${BASE_USER_AGENT}/${version}`;
  }
  get framework() {
    return detectFramework();
  }
  get isReactNative() {
    return this.framework === Framework.ReactNative || this.framework === Framework.Expo;
  }
  observeFrameworkChanges(fcn) {
    observeFrameworkChanges(fcn);
  }
};
var Platform = new PlatformBuilder();
var getAmplifyUserAgentObject = ({ category, action } = {}) => {
  const userAgent = [[BASE_USER_AGENT, version]];
  if (category) {
    userAgent.push([category, action]);
  }
  userAgent.push(["framework", detectFramework()]);
  if (category && action) {
    const customState = getCustomUserAgent(category, action);
    if (customState) {
      customState.forEach((state) => {
        userAgent.push(state);
      });
    }
  }
  return userAgent;
};
var getAmplifyUserAgent = (customUserAgentDetails) => {
  const userAgent = getAmplifyUserAgentObject(customUserAgentDetails);
  const userAgentString = userAgent.map(([agentKey, agentValue]) => agentKey && agentValue ? `${agentKey}/${agentValue}` : agentKey).join(" ");
  return userAgentString;
};

// node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/base.mjs
var SERVICE_NAME = "cognito-identity";
var endpointResolver = ({ region }) => ({
  url: new AmplifyUrl(`https://cognito-identity.${region}.${getDnsSuffix(region)}`)
});
var disableCacheMiddlewareFactory = () => (next) => async function disableCacheMiddleware(request) {
  request.headers["cache-control"] = "no-store";
  return next(request);
};
var cognitoIdentityTransferHandler = composeTransferHandler(unauthenticatedHandler, [disableCacheMiddlewareFactory]);
var defaultConfig = {
  service: SERVICE_NAME,
  endpointResolver,
  retryDecider: getRetryDecider(parseJsonError),
  computeDelay: jitteredBackoff2,
  userAgentValue: getAmplifyUserAgent(),
  cache: "no-store"
};
observeFrameworkChanges(() => {
  defaultConfig.userAgentValue = getAmplifyUserAgent();
});
var getSharedHeaders = (operation) => ({
  "content-type": "application/x-amz-json-1.1",
  "x-amz-target": `AWSCognitoIdentityService.${operation}`
});
var buildHttpRpcRequest = ({ url }, headers, body) => ({
  headers,
  url,
  body,
  method: "POST"
});

// node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getId.mjs
var getIdSerializer = (input, endpoint) => {
  const headers = getSharedHeaders("GetId");
  const body = JSON.stringify(input);
  return buildHttpRpcRequest(endpoint, headers, body);
};
var getIdDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    const error = await parseJsonError(response);
    throw error;
  } else {
    const body = await parseJsonBody(response);
    return {
      IdentityId: body.IdentityId,
      $metadata: parseMetadata(response)
    };
  }
};
var getId = composeServiceApi(cognitoIdentityTransferHandler, getIdSerializer, getIdDeserializer, defaultConfig);

// node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getCredentialsForIdentity.mjs
var getCredentialsForIdentitySerializer = (input, endpoint) => {
  const headers = getSharedHeaders("GetCredentialsForIdentity");
  const body = JSON.stringify(input);
  return buildHttpRpcRequest(endpoint, headers, body);
};
var getCredentialsForIdentityDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    const error = await parseJsonError(response);
    throw error;
  } else {
    const body = await parseJsonBody(response);
    return {
      IdentityId: body.IdentityId,
      Credentials: deserializeCredentials(body.Credentials),
      $metadata: parseMetadata(response)
    };
  }
};
var deserializeCredentials = ({ AccessKeyId, SecretKey, SessionToken, Expiration } = {}) => {
  return {
    AccessKeyId,
    SecretKey,
    SessionToken,
    Expiration: Expiration && new Date(Expiration * 1e3)
  };
};
var getCredentialsForIdentity = composeServiceApi(cognitoIdentityTransferHandler, getCredentialsForIdentitySerializer, getCredentialsForIdentityDeserializer, defaultConfig);

// node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs
var PlatformNotSupportedError = class extends AmplifyError {
  constructor() {
    super({
      name: AmplifyErrorCode.PlatformNotSupported,
      message: "Function not supported on current platform"
    });
  }
};

// node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs
var KeyValueStorage = class {
  constructor(storage) {
    this.storage = storage;
  }
  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */
  async setItem(key, value) {
    if (!this.storage)
      throw new PlatformNotSupportedError();
    this.storage.setItem(key, value);
  }
  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */
  async getItem(key) {
    if (!this.storage)
      throw new PlatformNotSupportedError();
    return this.storage.getItem(key);
  }
  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */
  async removeItem(key) {
    if (!this.storage)
      throw new PlatformNotSupportedError();
    this.storage.removeItem(key);
  }
  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */
  async clear() {
    if (!this.storage)
      throw new PlatformNotSupportedError();
    this.storage.clear();
  }
};

// node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs
var InMemoryStorage = class {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  get length() {
    return this.storage.size;
  }
  key(index) {
    if (index > this.length - 1) {
      return null;
    }
    return Array.from(this.storage.keys())[index];
  }
  setItem(key, value) {
    this.storage.set(key, value);
  }
  getItem(key) {
    return this.storage.get(key) ?? null;
  }
  removeItem(key) {
    this.storage.delete(key);
  }
  clear() {
    this.storage.clear();
  }
};

// node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs
var getLocalStorageWithFallback = () => typeof window !== "undefined" && window.localStorage ? window.localStorage : new InMemoryStorage();
var getSessionStorageWithFallback = () => typeof window !== "undefined" && window.sessionStorage ? window.sessionStorage : new InMemoryStorage();

// node_modules/@aws-amplify/core/dist/esm/storage/DefaultStorage.mjs
var DefaultStorage = class extends KeyValueStorage {
  constructor() {
    super(getLocalStorageWithFallback());
  }
};

// node_modules/@aws-amplify/core/dist/esm/storage/SessionStorage.mjs
var SessionStorage = class extends KeyValueStorage {
  constructor() {
    super(getSessionStorageWithFallback());
  }
};

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name2, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name2 = encodeURIComponent(name2).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name2 + "=" + converter.write(value, name2) + stringifiedAttributes;
  }
  function get(name2) {
    if (typeof document === "undefined" || arguments.length && !name2) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name2 === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name2 ? jar[name2] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name2, attributes) {
        set(
          name2,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/@aws-amplify/core/dist/esm/storage/CookieStorage.mjs
var CookieStorage = class {
  constructor(data = {}) {
    const { path, domain, expires, sameSite, secure } = data;
    this.domain = domain;
    this.path = path || "/";
    this.expires = Object.prototype.hasOwnProperty.call(data, "expires") ? expires : 365;
    this.secure = Object.prototype.hasOwnProperty.call(data, "secure") ? secure : true;
    if (Object.prototype.hasOwnProperty.call(data, "sameSite")) {
      if (!sameSite || !["strict", "lax", "none"].includes(sameSite)) {
        throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
      }
      if (sameSite === "none" && !this.secure) {
        throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
      }
      this.sameSite = sameSite;
    }
  }
  async setItem(key, value) {
    api.set(key, value, this.getData());
  }
  async getItem(key) {
    const item = api.get(key);
    return item ?? null;
  }
  async removeItem(key) {
    api.remove(key, this.getData());
  }
  async clear() {
    const cookie = api.get();
    const promises = Object.keys(cookie).map((key) => this.removeItem(key));
    await Promise.all(promises);
  }
  getData() {
    return {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure,
      ...this.sameSite && { sameSite: this.sameSite }
    };
  }
};

// node_modules/@aws-amplify/core/dist/esm/storage/index.mjs
var defaultStorage = new DefaultStorage();
var sessionStorage = new SessionStorage();
var sharedInMemoryStorage = new KeyValueStorage(new InMemoryStorage());

// node_modules/@aws-amplify/core/dist/esm/Cache/constants.mjs
var defaultConfig2 = {
  keyPrefix: "aws-amplify-cache",
  capacityInBytes: 1048576,
  itemMaxSize: 21e4,
  defaultTTL: 2592e5,
  defaultPriority: 5,
  warningThreshold: 0.8
};
var currentSizeKey = "CurSize";

// node_modules/@aws-amplify/core/dist/esm/Cache/utils/cacheHelpers.mjs
function getByteLength(str) {
  let ret = 0;
  ret = str.length;
  for (let i = str.length; i >= 0; i -= 1) {
    const charCode = str.charCodeAt(i);
    if (charCode > 127 && charCode <= 2047) {
      ret += 1;
    } else if (charCode > 2047 && charCode <= 65535) {
      ret += 2;
    }
    if (charCode >= 56320 && charCode <= 57343) {
      i -= 1;
    }
  }
  return ret;
}
function getCurrentTime() {
  const currentTime = /* @__PURE__ */ new Date();
  return currentTime.getTime();
}
var getCurrentSizeKey = (keyPrefix) => `${keyPrefix}${currentSizeKey}`;

// node_modules/@aws-amplify/core/dist/esm/Cache/utils/errorHelpers.mjs
var CacheErrorCode;
(function(CacheErrorCode2) {
  CacheErrorCode2["NoCacheItem"] = "NoCacheItem";
  CacheErrorCode2["NullNextNode"] = "NullNextNode";
  CacheErrorCode2["NullPreviousNode"] = "NullPreviousNode";
})(CacheErrorCode || (CacheErrorCode = {}));
var cacheErrorMap = {
  [CacheErrorCode.NoCacheItem]: {
    message: "Item not found in the cache storage."
  },
  [CacheErrorCode.NullNextNode]: {
    message: "Next node is null."
  },
  [CacheErrorCode.NullPreviousNode]: {
    message: "Previous node is null."
  }
};
var assert3 = createAssertionFunction(cacheErrorMap);

// node_modules/@aws-amplify/core/dist/esm/Cache/StorageCacheCommon.mjs
var logger5 = new ConsoleLogger("StorageCache");
var StorageCacheCommon = class {
  /**
   * Initialize the cache
   *
   * @param config - Custom configuration for this instance.
   */
  constructor({ config: config2, keyValueStorage }) {
    this.config = {
      ...defaultConfig2,
      ...config2
    };
    this.keyValueStorage = keyValueStorage;
    this.sanitizeConfig();
  }
  getModuleName() {
    return "Cache";
  }
  /**
   * Set custom configuration for the cache instance.
   *
   * @param config - customized configuration (without keyPrefix, which can't be changed)
   *
   * @return - the current configuration
   */
  configure(config2) {
    if (config2) {
      if (config2.keyPrefix) {
        logger5.warn("keyPrefix can not be re-configured on an existing Cache instance.");
      }
      this.config = {
        ...this.config,
        ...config2
      };
    }
    this.sanitizeConfig();
    return this.config;
  }
  /**
   * return the current size of the cache
   * @return {Promise}
   */
  async getCurrentCacheSize() {
    let size = await this.getStorage().getItem(getCurrentSizeKey(this.config.keyPrefix));
    if (!size) {
      await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), "0");
      size = "0";
    }
    return Number(size);
  }
  /**
   * Set item into cache. You can put number, string, boolean or object.
   * The cache will first check whether has the same key.
   * If it has, it will delete the old item and then put the new item in
   * The cache will pop out items if it is full
   * You can specify the cache item options. The cache will abort and output a warning:
   * If the key is invalid
   * If the size of the item exceeds itemMaxSize.
   * If the value is undefined
   * If incorrect cache item configuration
   * If error happened with browser storage
   *
   * @param {String} key - the key of the item
   * @param {Object} value - the value of the item
   * @param {Object} [options] - optional, the specified meta-data
   *
   * @return {Promise}
   */
  async setItem(key, value, options) {
    logger5.debug(`Set item: key is ${key}, value is ${value} with options: ${options}`);
    if (!key || key === currentSizeKey) {
      logger5.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
      return;
    }
    if (typeof value === "undefined") {
      logger5.warn(`The value of item should not be undefined!`);
      return;
    }
    const cacheItemOptions = {
      priority: (options == null ? void 0 : options.priority) !== void 0 ? options.priority : this.config.defaultPriority,
      expires: (options == null ? void 0 : options.expires) !== void 0 ? options.expires : this.config.defaultTTL + getCurrentTime()
    };
    if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
      logger5.warn(`Invalid parameter: priority due to out or range. It should be within 1 and 5.`);
      return;
    }
    const prefixedKey = `${this.config.keyPrefix}${key}`;
    const item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
    if (item.byteSize > this.config.itemMaxSize) {
      logger5.warn(`Item with key: ${key} you are trying to put into is too big!`);
      return;
    }
    try {
      const val = await this.getStorage().getItem(prefixedKey);
      if (val) {
        await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
      }
      if (await this.isCacheFull(item.byteSize)) {
        const validKeys = await this.clearInvalidAndGetRemainingKeys();
        if (await this.isCacheFull(item.byteSize)) {
          const sizeToPop = await this.sizeToPop(item.byteSize);
          await this.popOutItems(validKeys, sizeToPop);
        }
      }
      return this.setCacheItem(prefixedKey, item);
    } catch (e) {
      logger5.warn(`setItem failed! ${e}`);
    }
  }
  /**
   * Get item from cache. It will return null if item doesn’t exist or it has been expired.
   * If you specified callback function in the options,
   * then the function will be executed if no such item in the cache
   * and finally put the return value into cache.
   * Please make sure the callback function will return the value you want to put into the cache.
   * The cache will abort output a warning:
   * If the key is invalid
   * If error happened with AsyncStorage
   *
   * @param {String} key - the key of the item
   * @param {Object} [options] - the options of callback function
   *
   * @return {Promise} - return a promise resolves to be the value of the item
   */
  async getItem(key, options) {
    logger5.debug(`Get item: key is ${key} with options ${options}`);
    let cached;
    if (!key || key === currentSizeKey) {
      logger5.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
      return null;
    }
    const prefixedKey = `${this.config.keyPrefix}${key}`;
    try {
      cached = await this.getStorage().getItem(prefixedKey);
      if (cached != null) {
        if (await this.isExpired(prefixedKey)) {
          await this.removeCacheItem(prefixedKey, JSON.parse(cached).byteSize);
        } else {
          const item = await this.updateVisitedTime(JSON.parse(cached), prefixedKey);
          return item.data;
        }
      }
      if (options == null ? void 0 : options.callback) {
        const val = options.callback();
        if (val !== null) {
          await this.setItem(key, val, options);
        }
        return val;
      }
      return null;
    } catch (e) {
      logger5.warn(`getItem failed! ${e}`);
      return null;
    }
  }
  /**
   * remove item from the cache
   * The cache will abort output a warning:
   * If error happened with AsyncStorage
   * @param {String} key - the key of the item
   * @return {Promise}
   */
  async removeItem(key) {
    logger5.debug(`Remove item: key is ${key}`);
    if (!key || key === currentSizeKey) {
      logger5.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
      return;
    }
    const prefixedKey = `${this.config.keyPrefix}${key}`;
    try {
      const val = await this.getStorage().getItem(prefixedKey);
      if (val) {
        await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
      }
    } catch (e) {
      logger5.warn(`removeItem failed! ${e}`);
    }
  }
  /**
   * Return all the keys owned by this cache.
   * Will return an empty array if error occurred.
   *
   * @return {Promise}
   */
  async getAllKeys() {
    try {
      return await this.getAllCacheKeys();
    } catch (e) {
      logger5.warn(`getAllkeys failed! ${e}`);
      return [];
    }
  }
  getStorage() {
    return this.keyValueStorage;
  }
  /**
   * check whether item is expired
   *
   * @param key - the key of the item
   *
   * @return true if the item is expired.
   */
  async isExpired(key) {
    const text = await this.getStorage().getItem(key);
    assert3(text !== null, CacheErrorCode.NoCacheItem, `Key: ${key}`);
    const item = JSON.parse(text);
    if (getCurrentTime() >= item.expires) {
      return true;
    }
    return false;
  }
  /**
   * delete item from cache
   *
   * @param prefixedKey - the key of the item
   * @param size - optional, the byte size of the item
   */
  async removeCacheItem(prefixedKey, size) {
    const item = await this.getStorage().getItem(prefixedKey);
    assert3(item !== null, CacheErrorCode.NoCacheItem, `Key: ${prefixedKey}`);
    const itemSize = size ?? JSON.parse(item).byteSize;
    await this.decreaseCurrentSizeInBytes(itemSize);
    try {
      await this.getStorage().removeItem(prefixedKey);
    } catch (removeItemError) {
      await this.increaseCurrentSizeInBytes(itemSize);
      logger5.error(`Failed to remove item: ${removeItemError}`);
    }
  }
  /**
   * produce a JSON object with meta-data and data value
   * @param value - the value of the item
   * @param options - optional, the specified meta-data
   *
   * @return - the item which has the meta-data and the value
   */
  fillCacheItem(key, value, options) {
    const item = {
      key,
      data: value,
      timestamp: getCurrentTime(),
      visitedTime: getCurrentTime(),
      priority: options.priority ?? 0,
      expires: options.expires ?? 0,
      type: typeof value,
      byteSize: 0
    };
    item.byteSize = getByteLength(JSON.stringify(item));
    item.byteSize = getByteLength(JSON.stringify(item));
    return item;
  }
  sanitizeConfig() {
    if (this.config.itemMaxSize > this.config.capacityInBytes) {
      logger5.error("Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.");
      this.config.itemMaxSize = defaultConfig2.itemMaxSize;
    }
    if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
      logger5.error("Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.");
      this.config.defaultPriority = defaultConfig2.defaultPriority;
    }
    if (Number(this.config.warningThreshold) > 1 || Number(this.config.warningThreshold) < 0) {
      logger5.error("Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.");
      this.config.warningThreshold = defaultConfig2.warningThreshold;
    }
    const cacheLimit = 5 * 1024 * 1024;
    if (this.config.capacityInBytes > cacheLimit) {
      logger5.error("Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.");
      this.config.capacityInBytes = defaultConfig2.capacityInBytes;
    }
  }
  /**
   * increase current size of the cache
   *
   * @param amount - the amount of the cache szie which need to be increased
   */
  async increaseCurrentSizeInBytes(amount) {
    const size = await this.getCurrentCacheSize();
    await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size + amount).toString());
  }
  /**
   * decrease current size of the cache
   *
   * @param amount - the amount of the cache size which needs to be decreased
   */
  async decreaseCurrentSizeInBytes(amount) {
    const size = await this.getCurrentCacheSize();
    await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size - amount).toString());
  }
  /**
   * update the visited time if item has been visited
   *
   * @param item - the item which need to be updated
   * @param prefixedKey - the key of the item
   *
   * @return the updated item
   */
  async updateVisitedTime(item, prefixedKey) {
    item.visitedTime = getCurrentTime();
    await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
    return item;
  }
  /**
   * put item into cache
   *
   * @param prefixedKey - the key of the item
   * @param itemData - the value of the item
   * @param itemSizeInBytes - the byte size of the item
   */
  async setCacheItem(prefixedKey, item) {
    await this.increaseCurrentSizeInBytes(item.byteSize);
    try {
      await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
    } catch (setItemErr) {
      await this.decreaseCurrentSizeInBytes(item.byteSize);
      logger5.error(`Failed to set item ${setItemErr}`);
    }
  }
  /**
   * total space needed when poping out items
   *
   * @param itemSize
   *
   * @return total space needed
   */
  async sizeToPop(itemSize) {
    const cur = await this.getCurrentCacheSize();
    const spaceItemNeed = cur + itemSize - this.config.capacityInBytes;
    const cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
    return spaceItemNeed > cacheThresholdSpace ? spaceItemNeed : cacheThresholdSpace;
  }
  /**
   * see whether cache is full
   *
   * @param itemSize
   *
   * @return true if cache is full
   */
  async isCacheFull(itemSize) {
    const cur = await this.getCurrentCacheSize();
    return itemSize + cur > this.config.capacityInBytes;
  }
  /**
   * get all the items we have, sort them by their priority,
   * if priority is same, sort them by their last visited time
   * pop out items from the low priority (5 is the lowest)
   * @private
   * @param keys - all the keys in this cache
   * @param sizeToPop - the total size of the items which needed to be poped out
   */
  async popOutItems(keys, sizeToPop) {
    const items = [];
    let remainedSize = sizeToPop;
    for (const key of keys) {
      const val = await this.getStorage().getItem(key);
      if (val != null) {
        const item = JSON.parse(val);
        items.push(item);
      }
    }
    items.sort((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      } else if (a.priority < b.priority) {
        return 1;
      } else {
        if (a.visitedTime < b.visitedTime) {
          return -1;
        } else
          return 1;
      }
    });
    for (const item of items) {
      await this.removeCacheItem(item.key, item.byteSize);
      remainedSize -= item.byteSize;
      if (remainedSize <= 0) {
        return;
      }
    }
  }
  /**
   * Scan the storage and combine the following operations for efficiency
   *   1. Clear out all expired keys owned by this cache, not including the size key.
   *   2. Return the remaining keys.
   *
   * @return The remaining valid keys
   */
  async clearInvalidAndGetRemainingKeys() {
    const remainingKeys = [];
    const keys = await this.getAllCacheKeys({
      omitSizeKey: true
    });
    for (const key of keys) {
      if (await this.isExpired(key)) {
        await this.removeCacheItem(key);
      } else {
        remainingKeys.push(key);
      }
    }
    return remainingKeys;
  }
  /**
   * clear the entire cache
   * The cache will abort and output a warning if error occurs
   * @return {Promise}
   */
  async clear() {
    logger5.debug(`Clear Cache`);
    try {
      const keys = await this.getAllKeys();
      for (const key of keys) {
        await this.getStorage().removeItem(key);
      }
    } catch (e) {
      logger5.warn(`clear failed! ${e}`);
    }
  }
};

// node_modules/@aws-amplify/core/dist/esm/Cache/StorageCache.mjs
var logger6 = new ConsoleLogger("StorageCache");
var StorageCache = class _StorageCache extends StorageCacheCommon {
  /**
   * initialize the cache
   * @param config - the configuration of the cache
   */
  constructor(config2) {
    const storage = getLocalStorageWithFallback();
    super({ config: config2, keyValueStorage: new KeyValueStorage(storage) });
    this.storage = storage;
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  async getAllCacheKeys(options) {
    const { omitSizeKey } = options ?? {};
    const keys = [];
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (omitSizeKey && key === getCurrentSizeKey(this.config.keyPrefix)) {
        continue;
      }
      if (key == null ? void 0 : key.startsWith(this.config.keyPrefix)) {
        keys.push(key.substring(this.config.keyPrefix.length));
      }
    }
    return keys;
  }
  /**
   * Return a new instance of cache with customized configuration.
   * @param {Object} config - the customized configuration
   * @return {Object} - the new instance of Cache
   */
  createInstance(config2) {
    if (!config2.keyPrefix || config2.keyPrefix === defaultConfig2.keyPrefix) {
      logger6.error("invalid keyPrefix, setting keyPrefix with timeStamp");
      config2.keyPrefix = getCurrentTime.toString();
    }
    return new _StorageCache(config2);
  }
};

// node_modules/@aws-amplify/core/dist/esm/Cache/index.mjs
var Cache = new StorageCache();

// node_modules/@aws-amplify/core/dist/esm/I18n/I18n.mjs
var logger7 = new ConsoleLogger("I18n");
var I18n$1 = class I18n {
  constructor() {
    this._options = null;
    this._lang = null;
    this._dict = {};
  }
  /**
   * Sets the default language from the configuration when required.
   */
  setDefaultLanguage() {
    if (!this._lang && typeof window !== "undefined" && window && window.navigator) {
      this._lang = window.navigator.language;
    }
    logger7.debug(this._lang);
  }
  /**
   * @method
   * Explicitly setting language
   * @param {String} lang
   */
  setLanguage(lang) {
    this._lang = lang;
  }
  /**
   * @method
   * Get value
   * @param {String} key
   * @param {String} defVal - Default value
   */
  get(key, defVal = void 0) {
    this.setDefaultLanguage();
    if (!this._lang) {
      return typeof defVal !== "undefined" ? defVal : key;
    }
    const lang = this._lang;
    let val = this.getByLanguage(key, lang);
    if (val) {
      return val;
    }
    if (lang.indexOf("-") > 0) {
      val = this.getByLanguage(key, lang.split("-")[0]);
    }
    if (val) {
      return val;
    }
    return typeof defVal !== "undefined" ? defVal : key;
  }
  /**
   * @method
   * Get value according to specified language
   * @param {String} key
   * @param {String} language - Specified langurage to be used
   * @param {String} defVal - Default value
   */
  getByLanguage(key, language, defVal = null) {
    if (!language) {
      return defVal;
    }
    const langDict = this._dict[language];
    if (!langDict) {
      return defVal;
    }
    return langDict[key];
  }
  /**
   * @method
   * Add vocabularies for one language
   * @param {String} language - Language of the dictionary
   * @param {Object} vocabularies - Object that has key-value as dictionary entry
   */
  putVocabulariesForLanguage(language, vocabularies) {
    let langDict = this._dict[language];
    if (!langDict) {
      langDict = this._dict[language] = {};
    }
    this._dict[language] = { ...langDict, ...vocabularies };
  }
  /**
   * @method
   * Add vocabularies for one language
   * @param {Object} vocabularies - Object that has language as key,
   *                                vocabularies of each language as value
   */
  putVocabularies(vocabularies) {
    Object.keys(vocabularies).forEach((key) => {
      this.putVocabulariesForLanguage(key, vocabularies[key]);
    });
  }
};

// node_modules/@aws-amplify/core/dist/esm/I18n/errorHelpers.mjs
var I18nErrorCode;
(function(I18nErrorCode2) {
  I18nErrorCode2["NotConfigured"] = "NotConfigured";
})(I18nErrorCode || (I18nErrorCode = {}));
var i18nErrorMap = {
  [I18nErrorCode.NotConfigured]: {
    message: "i18n is not configured."
  }
};
var assert4 = createAssertionFunction(i18nErrorMap);

// node_modules/@aws-amplify/core/dist/esm/I18n/index.mjs
var logger8 = new ConsoleLogger("I18n");
var _config = { language: null };
var _i18n = null;
var I18n2 = class _I18n {
  /**
   * @static
   * @method
   * Configure I18n part
   * @param {Object} config - Configuration of the I18n
   */
  static configure(config2) {
    logger8.debug("configure I18n");
    if (!config2) {
      return _config;
    }
    _config = Object.assign({}, _config, config2.I18n || config2);
    _I18n.createInstance();
    return _config;
  }
  static getModuleName() {
    return "I18n";
  }
  /**
   * @static
   * @method
   * Create an instance of I18n for the library
   */
  static createInstance() {
    logger8.debug("create I18n instance");
    if (_i18n) {
      return;
    }
    _i18n = new I18n$1();
  }
  /**
   * @static @method
   * Explicitly setting language
   * @param {String} lang
   */
  static setLanguage(lang) {
    _I18n.checkConfig();
    assert4(!!_i18n, I18nErrorCode.NotConfigured);
    _i18n.setLanguage(lang);
  }
  /**
   * @static @method
   * Get value
   * @param {String} key
   * @param {String} defVal - Default value
   */
  static get(key, defVal) {
    if (!_I18n.checkConfig()) {
      return typeof defVal === "undefined" ? key : defVal;
    }
    assert4(!!_i18n, I18nErrorCode.NotConfigured);
    return _i18n.get(key, defVal);
  }
  /**
   * @static
   * @method
   * Add vocabularies for one language
   * @param {String} language - Language of the dictionary
   * @param {Object} vocabularies - Object that has key-value as dictionary entry
   */
  static putVocabulariesForLanguage(language, vocabularies) {
    _I18n.checkConfig();
    assert4(!!_i18n, I18nErrorCode.NotConfigured);
    _i18n.putVocabulariesForLanguage(language, vocabularies);
  }
  /**
   * @static
   * @method
   * Add vocabularies for one language
   * @param {Object} vocabularies - Object that has language as key,
   *                                vocabularies of each language as value
   */
  static putVocabularies(vocabularies) {
    _I18n.checkConfig();
    assert4(!!_i18n, I18nErrorCode.NotConfigured);
    _i18n.putVocabularies(vocabularies);
  }
  static checkConfig() {
    if (!_i18n) {
      _I18n.createInstance();
    }
    return true;
  }
};
I18n2.createInstance();

// node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/base.mjs
var SERVICE_NAME2 = "mobiletargeting";
var endpointResolver2 = ({ region }) => ({
  url: new AmplifyUrl(`https://pinpoint.${region}.${getDnsSuffix(region)}`)
});
var defaultConfig3 = {
  service: SERVICE_NAME2,
  endpointResolver: endpointResolver2,
  retryDecider: getRetryDecider(parseJsonError),
  computeDelay: jitteredBackoff2,
  userAgentValue: getAmplifyUserAgent()
};
var getSharedHeaders2 = () => ({
  "content-type": "application/json"
});

// node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/errorHelpers.mjs
var PinpointValidationErrorCode;
(function(PinpointValidationErrorCode2) {
  PinpointValidationErrorCode2["NoAppId"] = "NoAppId";
})(PinpointValidationErrorCode || (PinpointValidationErrorCode = {}));
var pinpointValidationErrorMap = {
  [PinpointValidationErrorCode.NoAppId]: {
    message: "Missing application id."
  }
};
var assert5 = createAssertionFunction(pinpointValidationErrorMap);

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSignedHeaders.mjs
var getSignedHeaders = (headers) => Object.keys(headers).map((key) => key.toLowerCase()).sort().join(";");

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/constants.mjs
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var HOST_HEADER = "host";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var KEY_TYPE_IDENTIFIER = "aws4_request";
var SHA256_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var SIGNATURE_IDENTIFIER = "AWS4";
var EMPTY_HASH = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCredentialScope.mjs
var getCredentialScope = (date, region, service) => `${date}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getFormattedDates.mjs
var getFormattedDates = (date) => {
  const longDate = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSigningValues.mjs
var getSigningValues = ({ credentials, signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, uriEscapePath = true }) => {
  const { accessKeyId, secretAccessKey, sessionToken } = credentials;
  const { longDate, shortDate } = getFormattedDates(signingDate);
  const credentialScope = getCredentialScope(shortDate, signingRegion, signingService);
  return {
    accessKeyId,
    credentialScope,
    longDate,
    secretAccessKey,
    sessionToken,
    shortDate,
    signingRegion,
    signingService,
    uriEscapePath
  };
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/dataHashHelpers.mjs
var getHashedData = (key, data) => {
  const sha256 = new Sha256(key ?? void 0);
  sha256.update(data);
  const hashedData = sha256.digestSync();
  return hashedData;
};
var getHashedDataAsHex = (key, data) => {
  const hashedData = getHashedData(key, data);
  return toHex(hashedData);
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalHeaders.mjs
var getCanonicalHeaders = (headers) => Object.entries(headers).map(([key, value]) => ({
  key: key.toLowerCase(),
  value: (value == null ? void 0 : value.trim().replace(/\s+/g, " ")) ?? ""
})).sort((a, b) => a.key < b.key ? -1 : 1).map((entry) => `${entry.key}:${entry.value}
`).join("");

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalQueryString.mjs
var getCanonicalQueryString = (searchParams) => Array.from(searchParams).sort(([keyA, valA], [keyB, valB]) => {
  if (keyA === keyB) {
    return valA < valB ? -1 : 1;
  }
  return keyA < keyB ? -1 : 1;
}).map(([key, val]) => `${escapeUri(key)}=${escapeUri(val)}`).join("&");
var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalUri.mjs
var getCanonicalUri = (pathname, uriEscapePath = true) => pathname ? uriEscapePath ? encodeURIComponent(pathname).replace(/%2F/g, "/") : pathname : "/";

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getHashedPayload.mjs
var getHashedPayload = (body) => {
  if (body == null) {
    return EMPTY_HASH;
  }
  if (isSourceData(body)) {
    const hashedData = getHashedDataAsHex(null, body);
    return hashedData;
  }
  return UNSIGNED_PAYLOAD;
};
var isSourceData = (body) => typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body);
var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalRequest.mjs
var getCanonicalRequest = ({ body, headers, method, url }, uriEscapePath = true) => [
  method,
  getCanonicalUri(url.pathname, uriEscapePath),
  getCanonicalQueryString(url.searchParams),
  getCanonicalHeaders(headers),
  getSignedHeaders(headers),
  getHashedPayload(body)
].join("\n");

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSigningKey.mjs
var getSigningKey = (secretAccessKey, date, region, service) => {
  const key = `${SIGNATURE_IDENTIFIER}${secretAccessKey}`;
  const dateKey = getHashedData(key, date);
  const regionKey = getHashedData(dateKey, region);
  const serviceKey = getHashedData(regionKey, service);
  const signingKey = getHashedData(serviceKey, KEY_TYPE_IDENTIFIER);
  return signingKey;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getStringToSign.mjs
var getStringToSign = (date, credentialScope, hashedRequest) => [SHA256_ALGORITHM_IDENTIFIER, date, credentialScope, hashedRequest].join("\n");

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSignature.mjs
var getSignature = (request, { credentialScope, longDate, secretAccessKey, shortDate, signingRegion, signingService, uriEscapePath }) => {
  const canonicalRequest = getCanonicalRequest(request, uriEscapePath);
  const hashedRequest = getHashedDataAsHex(null, canonicalRequest);
  const stringToSign = getStringToSign(longDate, credentialScope, hashedRequest);
  const signature = getHashedDataAsHex(getSigningKey(secretAccessKey, shortDate, signingRegion, signingService), stringToSign);
  return signature;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/signRequest.mjs
var signRequest = (request, options) => {
  const signingValues = getSigningValues(options);
  const { accessKeyId, credentialScope, longDate, sessionToken } = signingValues;
  const headers = { ...request.headers };
  headers[HOST_HEADER] = request.url.host;
  headers[AMZ_DATE_HEADER] = longDate;
  if (sessionToken) {
    headers[TOKEN_HEADER] = sessionToken;
  }
  const requestToSign = { ...request, headers };
  const signature = getSignature(requestToSign, signingValues);
  const credentialEntry = `Credential=${accessKeyId}/${credentialScope}`;
  const signedHeadersEntry = `SignedHeaders=${getSignedHeaders(headers)}`;
  const signatureEntry = `Signature=${signature}`;
  headers[AUTH_HEADER] = `${SHA256_ALGORITHM_IDENTIFIER} ${credentialEntry}, ${signedHeadersEntry}, ${signatureEntry}`;
  return requestToSign;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/getSkewCorrectedDate.mjs
var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/isClockSkewed.mjs
var SKEW_WINDOW = 5 * 60 * 1e3;
var isClockSkewed = (clockTimeInMilliseconds, clockOffsetInMilliseconds) => Math.abs(getSkewCorrectedDate(clockOffsetInMilliseconds).getTime() - clockTimeInMilliseconds) >= SKEW_WINDOW;

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/getUpdatedSystemClockOffset.mjs
var getUpdatedSystemClockOffset = (clockTimeInMilliseconds, currentSystemClockOffset) => {
  if (isClockSkewed(clockTimeInMilliseconds, currentSystemClockOffset)) {
    return clockTimeInMilliseconds - Date.now();
  }
  return currentSystemClockOffset;
};

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/middleware.mjs
var signingMiddlewareFactory = ({ credentials, region, service, uriEscapePath = true }) => {
  let currentSystemClockOffset;
  return (next) => async function signingMiddleware(request) {
    currentSystemClockOffset = currentSystemClockOffset ?? 0;
    const signRequestOptions = {
      credentials: typeof credentials === "function" ? await credentials() : credentials,
      signingDate: getSkewCorrectedDate(currentSystemClockOffset),
      signingRegion: region,
      signingService: service,
      uriEscapePath
    };
    const signedRequest = await signRequest(request, signRequestOptions);
    const response = await next(signedRequest);
    const dateString = getDateHeader(response);
    if (dateString) {
      currentSystemClockOffset = getUpdatedSystemClockOffset(Date.parse(dateString), currentSystemClockOffset);
    }
    return response;
  };
};
var getDateHeader = ({ headers } = {}) => (headers == null ? void 0 : headers.date) ?? (headers == null ? void 0 : headers.Date) ?? (headers == null ? void 0 : headers["x-amz-date"]);

// node_modules/@aws-amplify/core/dist/esm/clients/handlers/authenticated.mjs
var authenticatedHandler = composeTransferHandler(fetchTransferHandler, [
  userAgentMiddlewareFactory,
  retryMiddlewareFactory,
  signingMiddlewareFactory
]);

// node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/extendedEncodeURIComponent.mjs
var extendedEncodeURIComponent = (uri) => {
  const extendedCharacters = /[!'()*]/g;
  return encodeURIComponent(uri).replace(extendedCharacters, hexEncode2);
};
var hexEncode2 = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

// node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/updateEndpoint.mjs
var updateEndpointSerializer = ({ ApplicationId = "", EndpointId = "", EndpointRequest }, endpoint) => {
  const headers = getSharedHeaders2();
  const url = new AmplifyUrl(endpoint.url);
  url.pathname = `v1/apps/${extendedEncodeURIComponent(ApplicationId)}/endpoints/${extendedEncodeURIComponent(EndpointId)}`;
  const body = JSON.stringify(EndpointRequest);
  return { method: "PUT", headers, url, body };
};
var updateEndpointDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    const error = await parseJsonError(response);
    throw error;
  } else {
    const { Message, RequestID } = await parseJsonBody(response);
    return {
      MessageBody: {
        Message,
        RequestID
      },
      $metadata: parseMetadata(response)
    };
  }
};
var updateEndpoint = composeServiceApi(authenticatedHandler, updateEndpointSerializer, updateEndpointDeserializer, defaultConfig3);

// node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/constants.mjs
var FLUSH_INTERVAL = 5 * 1e3;

// node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/putEvents.mjs
var putEventsSerializer = ({ ApplicationId, EventsRequest }, endpoint) => {
  assert5(!!ApplicationId, PinpointValidationErrorCode.NoAppId);
  const headers = getSharedHeaders2();
  const url = new AmplifyUrl(endpoint.url);
  url.pathname = `v1/apps/${extendedEncodeURIComponent(ApplicationId)}/events`;
  const body = JSON.stringify(EventsRequest ?? {});
  return { method: "POST", headers, url, body };
};
var putEventsDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    const error = await parseJsonError(response);
    throw error;
  } else {
    const { Results } = await parseJsonBody(response);
    return {
      EventsResponse: { Results },
      $metadata: parseMetadata(response)
    };
  }
};
var putEvents = composeServiceApi(authenticatedHandler, putEventsSerializer, putEventsDeserializer, defaultConfig3);

// node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/PinpointEventBuffer.mjs
var logger9 = new ConsoleLogger("PinpointEventBuffer");

// node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/types/errors.mjs
var UpdateEndpointException;
(function(UpdateEndpointException2) {
  UpdateEndpointException2["BadRequestException"] = "BadRequestException";
  UpdateEndpointException2["ForbiddenException"] = "ForbiddenException";
  UpdateEndpointException2["InternalServerErrorException"] = "InternalServerErrorException";
  UpdateEndpointException2["MethodNotAllowedException"] = "MethodNotAllowedException";
  UpdateEndpointException2["NotFoundException"] = "NotFoundException";
  UpdateEndpointException2["PayloadTooLargeException"] = "PayloadTooLargeException";
  UpdateEndpointException2["TooManyRequestsException"] = "TooManyRequestsException";
})(UpdateEndpointException || (UpdateEndpointException = {}));

// node_modules/@aws-amplify/core/dist/esm/ServiceWorker/errorHelpers.mjs
var ServiceWorkerErrorCode;
(function(ServiceWorkerErrorCode2) {
  ServiceWorkerErrorCode2["UndefinedInstance"] = "UndefinedInstance";
  ServiceWorkerErrorCode2["UndefinedRegistration"] = "UndefinedRegistration";
  ServiceWorkerErrorCode2["Unavailable"] = "Unavailable";
})(ServiceWorkerErrorCode || (ServiceWorkerErrorCode = {}));
var serviceWorkerErrorMap = {
  [ServiceWorkerErrorCode.UndefinedInstance]: {
    message: "Service Worker instance is undefined."
  },
  [ServiceWorkerErrorCode.UndefinedRegistration]: {
    message: "Service Worker registration is undefined."
  },
  [ServiceWorkerErrorCode.Unavailable]: {
    message: "Service Worker not available."
  }
};
var assert6 = createAssertionFunction(serviceWorkerErrorMap);

// node_modules/@aws-amplify/core/dist/esm/utils/urlSafeDecode.mjs
function urlSafeDecode(hex) {
  const matchArr = hex.match(/.{2}/g) || [];
  return matchArr.map((char) => String.fromCharCode(parseInt(char, 16))).join("");
}

// node_modules/@aws-amplify/core/dist/esm/utils/deDupeAsyncFunction.mjs
var deDupeAsyncFunction = (asyncFunction) => {
  let inflightPromise;
  return async (...args) => {
    if (inflightPromise)
      return inflightPromise;
    inflightPromise = new Promise((resolve, reject) => {
      asyncFunction(...args).then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      }).finally(() => {
        inflightPromise = void 0;
      });
    });
    return inflightPromise;
  };
};

// node_modules/@aws-amplify/core/dist/esm/utils/deviceName/getDeviceName.mjs
var getDeviceName = async () => {
  const { userAgentData } = navigator;
  if (!userAgentData)
    return navigator.userAgent;
  const { platform = "", platformVersion = "", model = "", architecture = "", fullVersionList = [] } = await userAgentData.getHighEntropyValues([
    "platform",
    "platformVersion",
    "architecture",
    "model",
    "fullVersionList"
  ]);
  const versionList = fullVersionList.map((v) => `${v.brand}/${v.version}`).join(";");
  const deviceName = [
    platform,
    platformVersion,
    architecture,
    model,
    platform,
    versionList
  ].filter((value) => value).join(" ");
  return deviceName;
};

// node_modules/@aws-amplify/core/dist/esm/Signer/DateUtils.mjs
var FIVE_MINUTES_IN_MS = 1e3 * 60 * 5;

// node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/bytesToString.mjs
function bytesToString(input) {
  return Array.from(input, (byte) => String.fromCodePoint(byte)).join("");
}

// node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs
var base64Encoder = {
  convert(input, { urlSafe } = { urlSafe: false }) {
    const inputStr = typeof input === "string" ? input : bytesToString(input);
    const encodedStr = getBtoa()(inputStr);
    return urlSafe ? encodedStr.replace(/\+/g, "-").replace(/\//g, "_") : encodedStr;
  }
};

// node_modules/@aws-amplify/core/dist/esm/utils/cryptoSecureRandomInt.mjs
function cryptoSecureRandomInt() {
  const crypto2 = getCrypto();
  const randomResult = crypto2.getRandomValues(new Uint32Array(1))[0];
  return randomResult;
}

// node_modules/@aws-amplify/core/dist/esm/utils/WordArray.mjs
function hexStringify(wordArray) {
  const { words } = wordArray;
  const { sigBytes } = wordArray;
  const hexChars = [];
  for (let i = 0; i < sigBytes; i++) {
    const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    hexChars.push((bite >>> 4).toString(16));
    hexChars.push((bite & 15).toString(16));
  }
  return hexChars.join("");
}
var WordArray = class _WordArray {
  constructor(words, sigBytes) {
    this.words = [];
    let Words = words;
    Words = this.words = Words || [];
    if (sigBytes !== void 0) {
      this.sigBytes = sigBytes;
    } else {
      this.sigBytes = Words.length * 4;
    }
  }
  random(nBytes) {
    const words = [];
    for (let i = 0; i < nBytes; i += 4) {
      words.push(cryptoSecureRandomInt());
    }
    return new _WordArray(words, nBytes);
  }
  toString() {
    return hexStringify(this);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
var AuthError = class _AuthError extends AmplifyError {
  constructor(params) {
    super(params);
    this.constructor = _AuthError;
    Object.setPrototypeOf(this, _AuthError.prototype);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs
function assertServiceError(error) {
  if (!error || error.name === "Error" || error instanceof TypeError) {
    throw new AuthError({
      name: AmplifyErrorCode.Unknown,
      message: "An unknown error has occurred.",
      underlyingError: error
    });
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/base.mjs
var SERVICE_NAME3 = "cognito-idp";
var endpointResolver3 = ({ region }) => {
  var _a;
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  const customURL = authConfig == null ? void 0 : authConfig.userPoolEndpoint;
  const defaultURL = new AmplifyUrl(`https://${SERVICE_NAME3}.${region}.${getDnsSuffix(region)}`);
  return {
    url: customURL ? new AmplifyUrl(customURL) : defaultURL
  };
};
var disableCacheMiddlewareFactory2 = () => (next, _) => async function disableCacheMiddleware(request) {
  request.headers["cache-control"] = "no-store";
  return next(request);
};
var cognitoUserPoolTransferHandler = composeTransferHandler(unauthenticatedHandler, [disableCacheMiddlewareFactory2]);
var defaultConfig4 = {
  service: SERVICE_NAME3,
  endpointResolver: endpointResolver3,
  retryDecider: getRetryDecider(parseJsonError),
  computeDelay: jitteredBackoff2,
  userAgentValue: getAmplifyUserAgent(),
  cache: "no-store"
};
var getSharedHeaders3 = (operation) => ({
  "content-type": "application/x-amz-json-1.1",
  "x-amz-target": `AWSCognitoIdentityProviderService.${operation}`
});
var buildHttpRpcRequest2 = ({ url }, headers, body) => ({
  headers,
  url,
  body,
  method: "POST"
});

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/index.mjs
var buildUserPoolSerializer = (operation) => (input, endpoint) => {
  const headers = getSharedHeaders3(operation);
  const body = JSON.stringify(input);
  return buildHttpRpcRequest2(endpoint, headers, body);
};
var buildUserPoolDeserializer = () => {
  return async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      assertServiceError(error);
      throw new AuthError({ name: error.name, message: error.message });
    } else {
      const body = await parseJsonBody(response);
      return body;
    }
  };
};
var handleEmptyResponseDeserializer = () => {
  return async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      assertServiceError(error);
      throw new AuthError({ name: error.name, message: error.message });
    } else {
      return void 0;
    }
  };
};
var initiateAuth = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("InitiateAuth"), buildUserPoolDeserializer(), defaultConfig4);
var revokeToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("RevokeToken"), buildUserPoolDeserializer(), defaultConfig4);
var signUp = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("SignUp"), buildUserPoolDeserializer(), defaultConfig4);
var confirmSignUp = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmSignUp"), buildUserPoolDeserializer(), defaultConfig4);
var forgotPassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ForgotPassword"), buildUserPoolDeserializer(), defaultConfig4);
var confirmForgotPassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmForgotPassword"), buildUserPoolDeserializer(), defaultConfig4);
var respondToAuthChallenge = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("RespondToAuthChallenge"), buildUserPoolDeserializer(), defaultConfig4);
var resendConfirmationCode = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ResendConfirmationCode"), buildUserPoolDeserializer(), defaultConfig4);
var verifySoftwareToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("VerifySoftwareToken"), buildUserPoolDeserializer(), defaultConfig4);
var associateSoftwareToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("AssociateSoftwareToken"), buildUserPoolDeserializer(), defaultConfig4);
var setUserMFAPreference = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("SetUserMFAPreference"), buildUserPoolDeserializer(), defaultConfig4);
var getUser = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GetUser"), buildUserPoolDeserializer(), defaultConfig4);
var changePassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ChangePassword"), buildUserPoolDeserializer(), defaultConfig4);
var confirmDevice = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmDevice"), buildUserPoolDeserializer(), defaultConfig4);
var forgetDevice = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ForgetDevice"), handleEmptyResponseDeserializer(), defaultConfig4);
var deleteUser = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("DeleteUser"), handleEmptyResponseDeserializer(), defaultConfig4);
var getUserAttributeVerificationCode = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GetUserAttributeVerificationCode"), buildUserPoolDeserializer(), defaultConfig4);
var globalSignOut = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GlobalSignOut"), buildUserPoolDeserializer(), defaultConfig4);
var updateUserAttributes = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("UpdateUserAttributes"), buildUserPoolDeserializer(), defaultConfig4);
var verifyUserAttribute = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("VerifyUserAttribute"), buildUserPoolDeserializer(), defaultConfig4);
var updateDeviceStatus = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("UpdateDeviceStatus"), buildUserPoolDeserializer(), defaultConfig4);
var listDevices = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ListDevices"), buildUserPoolDeserializer(), defaultConfig4);
var deleteUserAttributes = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("DeleteUserAttributes"), buildUserPoolDeserializer(), defaultConfig4);

// node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs
var AuthValidationErrorCode;
(function(AuthValidationErrorCode2) {
  AuthValidationErrorCode2["EmptySignInUsername"] = "EmptySignInUsername";
  AuthValidationErrorCode2["EmptySignInPassword"] = "EmptySignInPassword";
  AuthValidationErrorCode2["CustomAuthSignInPassword"] = "CustomAuthSignInPassword";
  AuthValidationErrorCode2["EmptySignUpUsername"] = "EmptySignUpUsername";
  AuthValidationErrorCode2["EmptySignUpPassword"] = "EmptySignUpPassword";
  AuthValidationErrorCode2["EmptyConfirmSignUpUsername"] = "EmptyConfirmSignUpUsername";
  AuthValidationErrorCode2["EmptyConfirmSignUpCode"] = "EmptyConfirmSignUpCode";
  AuthValidationErrorCode2["EmptyResendSignUpCodeUsername"] = "EmptyresendSignUpCodeUsername";
  AuthValidationErrorCode2["EmptyChallengeResponse"] = "EmptyChallengeResponse";
  AuthValidationErrorCode2["EmptyConfirmResetPasswordUsername"] = "EmptyConfirmResetPasswordUsername";
  AuthValidationErrorCode2["EmptyConfirmResetPasswordNewPassword"] = "EmptyConfirmResetPasswordNewPassword";
  AuthValidationErrorCode2["EmptyConfirmResetPasswordConfirmationCode"] = "EmptyConfirmResetPasswordConfirmationCode";
  AuthValidationErrorCode2["EmptyResetPasswordUsername"] = "EmptyResetPasswordUsername";
  AuthValidationErrorCode2["EmptyVerifyTOTPSetupCode"] = "EmptyVerifyTOTPSetupCode";
  AuthValidationErrorCode2["EmptyConfirmUserAttributeCode"] = "EmptyConfirmUserAttributeCode";
  AuthValidationErrorCode2["IncorrectMFAMethod"] = "IncorrectMFAMethod";
  AuthValidationErrorCode2["EmptyUpdatePassword"] = "EmptyUpdatePassword";
})(AuthValidationErrorCode || (AuthValidationErrorCode = {}));

// node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs
var validationErrorMap = {
  [AuthValidationErrorCode.EmptyChallengeResponse]: {
    message: "challengeResponse is required to confirmSignIn"
  },
  [AuthValidationErrorCode.EmptyConfirmResetPasswordUsername]: {
    message: "username is required to confirmResetPassword"
  },
  [AuthValidationErrorCode.EmptyConfirmSignUpCode]: {
    message: "code is required to confirmSignUp"
  },
  [AuthValidationErrorCode.EmptyConfirmSignUpUsername]: {
    message: "username is required to confirmSignUp"
  },
  [AuthValidationErrorCode.EmptyConfirmResetPasswordConfirmationCode]: {
    message: "confirmationCode is required to confirmResetPassword"
  },
  [AuthValidationErrorCode.EmptyConfirmResetPasswordNewPassword]: {
    message: "newPassword is required to confirmResetPassword"
  },
  [AuthValidationErrorCode.EmptyResendSignUpCodeUsername]: {
    message: "username is required to confirmSignUp"
  },
  [AuthValidationErrorCode.EmptyResetPasswordUsername]: {
    message: "username is required to resetPassword"
  },
  [AuthValidationErrorCode.EmptySignInPassword]: {
    message: "password is required to signIn"
  },
  [AuthValidationErrorCode.EmptySignInUsername]: {
    message: "username is required to signIn"
  },
  [AuthValidationErrorCode.EmptySignUpPassword]: {
    message: "password is required to signUp"
  },
  [AuthValidationErrorCode.EmptySignUpUsername]: {
    message: "username is required to signUp"
  },
  [AuthValidationErrorCode.CustomAuthSignInPassword]: {
    message: "A password is not needed when signing in with CUSTOM_WITHOUT_SRP",
    recoverySuggestion: "Do not include a password in your signIn call."
  },
  [AuthValidationErrorCode.IncorrectMFAMethod]: {
    message: "Incorrect MFA method was chosen. It should be either SMS or TOTP",
    recoverySuggestion: "Try to pass TOTP or SMS as the challengeResponse"
  },
  [AuthValidationErrorCode.EmptyVerifyTOTPSetupCode]: {
    message: "code is required to verifyTotpSetup"
  },
  [AuthValidationErrorCode.EmptyUpdatePassword]: {
    message: "oldPassword and newPassword are required to changePassword"
  },
  [AuthValidationErrorCode.EmptyConfirmUserAttributeCode]: {
    message: "confirmation code is required to confirmUserAttribute"
  }
};
var AuthErrorStrings;
(function(AuthErrorStrings2) {
  AuthErrorStrings2["DEFAULT_MSG"] = "Authentication Error";
  AuthErrorStrings2["EMPTY_EMAIL"] = "Email cannot be empty";
  AuthErrorStrings2["EMPTY_PHONE"] = "Phone number cannot be empty";
  AuthErrorStrings2["EMPTY_USERNAME"] = "Username cannot be empty";
  AuthErrorStrings2["INVALID_USERNAME"] = "The username should either be a string or one of the sign in types";
  AuthErrorStrings2["EMPTY_PASSWORD"] = "Password cannot be empty";
  AuthErrorStrings2["EMPTY_CODE"] = "Confirmation code cannot be empty";
  AuthErrorStrings2["SIGN_UP_ERROR"] = "Error creating account";
  AuthErrorStrings2["NO_MFA"] = "No valid MFA method provided";
  AuthErrorStrings2["INVALID_MFA"] = "Invalid MFA type";
  AuthErrorStrings2["EMPTY_CHALLENGE"] = "Challenge response cannot be empty";
  AuthErrorStrings2["NO_USER_SESSION"] = "Failed to get the session because the user is empty";
  AuthErrorStrings2["NETWORK_ERROR"] = "Network Error";
  AuthErrorStrings2["DEVICE_CONFIG"] = "Device tracking has not been configured in this User Pool";
  AuthErrorStrings2["AUTOSIGNIN_ERROR"] = "Please use your credentials to sign in";
  AuthErrorStrings2["OAUTH_ERROR"] = "Couldn't finish OAuth flow, check your User Pool HostedUI settings";
})(AuthErrorStrings || (AuthErrorStrings = {}));
var AuthErrorCodes;
(function(AuthErrorCodes2) {
  AuthErrorCodes2["SignInException"] = "SignInException";
  AuthErrorCodes2["OAuthSignInError"] = "OAuthSignInException";
})(AuthErrorCodes || (AuthErrorCodes = {}));

// node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs
function assertValidationError(assertion, name2) {
  const { message, recoverySuggestion } = validationErrorMap[name2];
  if (!assertion) {
    throw new AuthError({ name: name2, message, recoverySuggestion });
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/utils.mjs
function getRegion(userPoolId) {
  const region = userPoolId == null ? void 0 : userPoolId.split("_")[0];
  if (!userPoolId || userPoolId.indexOf("_") < 0 || !region || typeof region !== "string")
    throw new AuthError({
      name: "InvalidUserPoolId",
      message: "Invalid user pool id provided."
    });
  return region;
}
function getRegionFromIdentityPoolId(identityPoolId) {
  if (!identityPoolId || !identityPoolId.includes(":")) {
    throw new AuthError({
      name: "InvalidIdentityPoolIdException",
      message: "Invalid identity pool id provided.",
      recoverySuggestion: "Make sure a valid identityPoolId is given in the config."
    });
  }
  return identityPoolId.split(":")[0];
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/errors.mjs
var AssociateSoftwareTokenException;
(function(AssociateSoftwareTokenException2) {
  AssociateSoftwareTokenException2["ConcurrentModificationException"] = "ConcurrentModificationException";
  AssociateSoftwareTokenException2["ForbiddenException"] = "ForbiddenException";
  AssociateSoftwareTokenException2["InternalErrorException"] = "InternalErrorException";
  AssociateSoftwareTokenException2["InvalidParameterException"] = "InvalidParameterException";
  AssociateSoftwareTokenException2["NotAuthorizedException"] = "NotAuthorizedException";
  AssociateSoftwareTokenException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  AssociateSoftwareTokenException2["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
})(AssociateSoftwareTokenException || (AssociateSoftwareTokenException = {}));
var ChangePasswordException;
(function(ChangePasswordException2) {
  ChangePasswordException2["ForbiddenException"] = "ForbiddenException";
  ChangePasswordException2["InternalErrorException"] = "InternalErrorException";
  ChangePasswordException2["InvalidParameterException"] = "InvalidParameterException";
  ChangePasswordException2["InvalidPasswordException"] = "InvalidPasswordException";
  ChangePasswordException2["LimitExceededException"] = "LimitExceededException";
  ChangePasswordException2["NotAuthorizedException"] = "NotAuthorizedException";
  ChangePasswordException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  ChangePasswordException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ChangePasswordException2["TooManyRequestsException"] = "TooManyRequestsException";
  ChangePasswordException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  ChangePasswordException2["UserNotFoundException"] = "UserNotFoundException";
})(ChangePasswordException || (ChangePasswordException = {}));
var ConfirmDeviceException;
(function(ConfirmDeviceException2) {
  ConfirmDeviceException2["ForbiddenException"] = "ForbiddenException";
  ConfirmDeviceException2["InternalErrorException"] = "InternalErrorException";
  ConfirmDeviceException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  ConfirmDeviceException2["InvalidParameterException"] = "InvalidParameterException";
  ConfirmDeviceException2["InvalidPasswordException"] = "InvalidPasswordException";
  ConfirmDeviceException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  ConfirmDeviceException2["NotAuthorizedException"] = "NotAuthorizedException";
  ConfirmDeviceException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  ConfirmDeviceException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ConfirmDeviceException2["TooManyRequestsException"] = "TooManyRequestsException";
  ConfirmDeviceException2["UsernameExistsException"] = "UsernameExistsException";
  ConfirmDeviceException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  ConfirmDeviceException2["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmDeviceException || (ConfirmDeviceException = {}));
var ConfirmForgotPasswordException;
(function(ConfirmForgotPasswordException2) {
  ConfirmForgotPasswordException2["CodeMismatchException"] = "CodeMismatchException";
  ConfirmForgotPasswordException2["ExpiredCodeException"] = "ExpiredCodeException";
  ConfirmForgotPasswordException2["ForbiddenException"] = "ForbiddenException";
  ConfirmForgotPasswordException2["InternalErrorException"] = "InternalErrorException";
  ConfirmForgotPasswordException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  ConfirmForgotPasswordException2["InvalidParameterException"] = "InvalidParameterException";
  ConfirmForgotPasswordException2["InvalidPasswordException"] = "InvalidPasswordException";
  ConfirmForgotPasswordException2["LimitExceededException"] = "LimitExceededException";
  ConfirmForgotPasswordException2["NotAuthorizedException"] = "NotAuthorizedException";
  ConfirmForgotPasswordException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ConfirmForgotPasswordException2["TooManyFailedAttemptsException"] = "TooManyFailedAttemptsException";
  ConfirmForgotPasswordException2["TooManyRequestsException"] = "TooManyRequestsException";
  ConfirmForgotPasswordException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  ConfirmForgotPasswordException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  ConfirmForgotPasswordException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  ConfirmForgotPasswordException2["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmForgotPasswordException || (ConfirmForgotPasswordException = {}));
var ConfirmSignUpException;
(function(ConfirmSignUpException2) {
  ConfirmSignUpException2["AliasExistsException"] = "AliasExistsException";
  ConfirmSignUpException2["CodeMismatchException"] = "CodeMismatchException";
  ConfirmSignUpException2["ExpiredCodeException"] = "ExpiredCodeException";
  ConfirmSignUpException2["ForbiddenException"] = "ForbiddenException";
  ConfirmSignUpException2["InternalErrorException"] = "InternalErrorException";
  ConfirmSignUpException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  ConfirmSignUpException2["InvalidParameterException"] = "InvalidParameterException";
  ConfirmSignUpException2["LimitExceededException"] = "LimitExceededException";
  ConfirmSignUpException2["NotAuthorizedException"] = "NotAuthorizedException";
  ConfirmSignUpException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ConfirmSignUpException2["TooManyFailedAttemptsException"] = "TooManyFailedAttemptsException";
  ConfirmSignUpException2["TooManyRequestsException"] = "TooManyRequestsException";
  ConfirmSignUpException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  ConfirmSignUpException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  ConfirmSignUpException2["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmSignUpException || (ConfirmSignUpException = {}));
var DeleteUserAttributesException;
(function(DeleteUserAttributesException2) {
  DeleteUserAttributesException2["ForbiddenException"] = "ForbiddenException";
  DeleteUserAttributesException2["InternalErrorException"] = "InternalErrorException";
  DeleteUserAttributesException2["InvalidParameterException"] = "InvalidParameterException";
  DeleteUserAttributesException2["NotAuthorizedException"] = "NotAuthorizedException";
  DeleteUserAttributesException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  DeleteUserAttributesException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  DeleteUserAttributesException2["TooManyRequestsException"] = "TooManyRequestsException";
  DeleteUserAttributesException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  DeleteUserAttributesException2["UserNotFoundException"] = "UserNotFoundException";
})(DeleteUserAttributesException || (DeleteUserAttributesException = {}));
var DeleteUserException;
(function(DeleteUserException2) {
  DeleteUserException2["ForbiddenException"] = "ForbiddenException";
  DeleteUserException2["InternalErrorException"] = "InternalErrorException";
  DeleteUserException2["InvalidParameterException"] = "InvalidParameterException";
  DeleteUserException2["NotAuthorizedException"] = "NotAuthorizedException";
  DeleteUserException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  DeleteUserException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  DeleteUserException2["TooManyRequestsException"] = "TooManyRequestsException";
  DeleteUserException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  DeleteUserException2["UserNotFoundException"] = "UserNotFoundException";
})(DeleteUserException || (DeleteUserException = {}));
var ForgetDeviceException;
(function(ForgetDeviceException2) {
  ForgetDeviceException2["ForbiddenException"] = "ForbiddenException";
  ForgetDeviceException2["InternalErrorException"] = "InternalErrorException";
  ForgetDeviceException2["InvalidParameterException"] = "InvalidParameterException";
  ForgetDeviceException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  ForgetDeviceException2["NotAuthorizedException"] = "NotAuthorizedException";
  ForgetDeviceException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  ForgetDeviceException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ForgetDeviceException2["TooManyRequestsException"] = "TooManyRequestsException";
  ForgetDeviceException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  ForgetDeviceException2["UserNotFoundException"] = "UserNotFoundException";
})(ForgetDeviceException || (ForgetDeviceException = {}));
var ForgotPasswordException;
(function(ForgotPasswordException2) {
  ForgotPasswordException2["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
  ForgotPasswordException2["ForbiddenException"] = "ForbiddenException";
  ForgotPasswordException2["InternalErrorException"] = "InternalErrorException";
  ForgotPasswordException2["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
  ForgotPasswordException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  ForgotPasswordException2["InvalidParameterException"] = "InvalidParameterException";
  ForgotPasswordException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  ForgotPasswordException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  ForgotPasswordException2["LimitExceededException"] = "LimitExceededException";
  ForgotPasswordException2["NotAuthorizedException"] = "NotAuthorizedException";
  ForgotPasswordException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ForgotPasswordException2["TooManyRequestsException"] = "TooManyRequestsException";
  ForgotPasswordException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  ForgotPasswordException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  ForgotPasswordException2["UserNotFoundException"] = "UserNotFoundException";
})(ForgotPasswordException || (ForgotPasswordException = {}));
var GetUserException;
(function(GetUserException2) {
  GetUserException2["ForbiddenException"] = "ForbiddenException";
  GetUserException2["InternalErrorException"] = "InternalErrorException";
  GetUserException2["InvalidParameterException"] = "InvalidParameterException";
  GetUserException2["NotAuthorizedException"] = "NotAuthorizedException";
  GetUserException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  GetUserException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  GetUserException2["TooManyRequestsException"] = "TooManyRequestsException";
  GetUserException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  GetUserException2["UserNotFoundException"] = "UserNotFoundException";
})(GetUserException || (GetUserException = {}));
var GetIdException;
(function(GetIdException2) {
  GetIdException2["ExternalServiceException"] = "ExternalServiceException";
  GetIdException2["InternalErrorException"] = "InternalErrorException";
  GetIdException2["InvalidParameterException"] = "InvalidParameterException";
  GetIdException2["LimitExceededException"] = "LimitExceededException";
  GetIdException2["NotAuthorizedException"] = "NotAuthorizedException";
  GetIdException2["ResourceConflictException"] = "ResourceConflictException";
  GetIdException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  GetIdException2["TooManyRequestsException"] = "TooManyRequestsException";
})(GetIdException || (GetIdException = {}));
var GetCredentialsForIdentityException;
(function(GetCredentialsForIdentityException2) {
  GetCredentialsForIdentityException2["ExternalServiceException"] = "ExternalServiceException";
  GetCredentialsForIdentityException2["InternalErrorException"] = "InternalErrorException";
  GetCredentialsForIdentityException2["InvalidIdentityPoolConfigurationException"] = "InvalidIdentityPoolConfigurationException";
  GetCredentialsForIdentityException2["InvalidParameterException"] = "InvalidParameterException";
  GetCredentialsForIdentityException2["NotAuthorizedException"] = "NotAuthorizedException";
  GetCredentialsForIdentityException2["ResourceConflictException"] = "ResourceConflictException";
  GetCredentialsForIdentityException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  GetCredentialsForIdentityException2["TooManyRequestsException"] = "TooManyRequestsException";
})(GetCredentialsForIdentityException || (GetCredentialsForIdentityException = {}));
var GetUserAttributeVerificationException;
(function(GetUserAttributeVerificationException2) {
  GetUserAttributeVerificationException2["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
  GetUserAttributeVerificationException2["ForbiddenException"] = "ForbiddenException";
  GetUserAttributeVerificationException2["InternalErrorException"] = "InternalErrorException";
  GetUserAttributeVerificationException2["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
  GetUserAttributeVerificationException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  GetUserAttributeVerificationException2["InvalidParameterException"] = "InvalidParameterException";
  GetUserAttributeVerificationException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  GetUserAttributeVerificationException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  GetUserAttributeVerificationException2["LimitExceededException"] = "LimitExceededException";
  GetUserAttributeVerificationException2["NotAuthorizedException"] = "NotAuthorizedException";
  GetUserAttributeVerificationException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  GetUserAttributeVerificationException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  GetUserAttributeVerificationException2["TooManyRequestsException"] = "TooManyRequestsException";
  GetUserAttributeVerificationException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  GetUserAttributeVerificationException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  GetUserAttributeVerificationException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  GetUserAttributeVerificationException2["UserNotFoundException"] = "UserNotFoundException";
})(GetUserAttributeVerificationException || (GetUserAttributeVerificationException = {}));
var GlobalSignOutException;
(function(GlobalSignOutException2) {
  GlobalSignOutException2["ForbiddenException"] = "ForbiddenException";
  GlobalSignOutException2["InternalErrorException"] = "InternalErrorException";
  GlobalSignOutException2["InvalidParameterException"] = "InvalidParameterException";
  GlobalSignOutException2["NotAuthorizedException"] = "NotAuthorizedException";
  GlobalSignOutException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  GlobalSignOutException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  GlobalSignOutException2["TooManyRequestsException"] = "TooManyRequestsException";
  GlobalSignOutException2["UserNotConfirmedException"] = "UserNotConfirmedException";
})(GlobalSignOutException || (GlobalSignOutException = {}));
var InitiateAuthException;
(function(InitiateAuthException2) {
  InitiateAuthException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  InitiateAuthException2["ForbiddenException"] = "ForbiddenException";
  InitiateAuthException2["InternalErrorException"] = "InternalErrorException";
  InitiateAuthException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  InitiateAuthException2["InvalidParameterException"] = "InvalidParameterException";
  InitiateAuthException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  InitiateAuthException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  InitiateAuthException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  InitiateAuthException2["NotAuthorizedException"] = "NotAuthorizedException";
  InitiateAuthException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  InitiateAuthException2["TooManyRequestsException"] = "TooManyRequestsException";
  InitiateAuthException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  InitiateAuthException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  InitiateAuthException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  InitiateAuthException2["UserNotFoundException"] = "UserNotFoundException";
})(InitiateAuthException || (InitiateAuthException = {}));
var ResendConfirmationException;
(function(ResendConfirmationException2) {
  ResendConfirmationException2["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
  ResendConfirmationException2["ForbiddenException"] = "ForbiddenException";
  ResendConfirmationException2["InternalErrorException"] = "InternalErrorException";
  ResendConfirmationException2["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
  ResendConfirmationException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  ResendConfirmationException2["InvalidParameterException"] = "InvalidParameterException";
  ResendConfirmationException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  ResendConfirmationException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  ResendConfirmationException2["LimitExceededException"] = "LimitExceededException";
  ResendConfirmationException2["NotAuthorizedException"] = "NotAuthorizedException";
  ResendConfirmationException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ResendConfirmationException2["TooManyRequestsException"] = "TooManyRequestsException";
  ResendConfirmationException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  ResendConfirmationException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  ResendConfirmationException2["UserNotFoundException"] = "UserNotFoundException";
})(ResendConfirmationException || (ResendConfirmationException = {}));
var RespondToAuthChallengeException;
(function(RespondToAuthChallengeException2) {
  RespondToAuthChallengeException2["AliasExistsException"] = "AliasExistsException";
  RespondToAuthChallengeException2["CodeMismatchException"] = "CodeMismatchException";
  RespondToAuthChallengeException2["ExpiredCodeException"] = "ExpiredCodeException";
  RespondToAuthChallengeException2["ForbiddenException"] = "ForbiddenException";
  RespondToAuthChallengeException2["InternalErrorException"] = "InternalErrorException";
  RespondToAuthChallengeException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  RespondToAuthChallengeException2["InvalidParameterException"] = "InvalidParameterException";
  RespondToAuthChallengeException2["InvalidPasswordException"] = "InvalidPasswordException";
  RespondToAuthChallengeException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  RespondToAuthChallengeException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  RespondToAuthChallengeException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  RespondToAuthChallengeException2["MFAMethodNotFoundException"] = "MFAMethodNotFoundException";
  RespondToAuthChallengeException2["NotAuthorizedException"] = "NotAuthorizedException";
  RespondToAuthChallengeException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  RespondToAuthChallengeException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  RespondToAuthChallengeException2["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
  RespondToAuthChallengeException2["TooManyRequestsException"] = "TooManyRequestsException";
  RespondToAuthChallengeException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  RespondToAuthChallengeException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  RespondToAuthChallengeException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  RespondToAuthChallengeException2["UserNotFoundException"] = "UserNotFoundException";
})(RespondToAuthChallengeException || (RespondToAuthChallengeException = {}));
var SetUserMFAPreferenceException;
(function(SetUserMFAPreferenceException2) {
  SetUserMFAPreferenceException2["ForbiddenException"] = "ForbiddenException";
  SetUserMFAPreferenceException2["InternalErrorException"] = "InternalErrorException";
  SetUserMFAPreferenceException2["InvalidParameterException"] = "InvalidParameterException";
  SetUserMFAPreferenceException2["NotAuthorizedException"] = "NotAuthorizedException";
  SetUserMFAPreferenceException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  SetUserMFAPreferenceException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  SetUserMFAPreferenceException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  SetUserMFAPreferenceException2["UserNotFoundException"] = "UserNotFoundException";
})(SetUserMFAPreferenceException || (SetUserMFAPreferenceException = {}));
var SignUpException;
(function(SignUpException2) {
  SignUpException2["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
  SignUpException2["InternalErrorException"] = "InternalErrorException";
  SignUpException2["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
  SignUpException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  SignUpException2["InvalidParameterException"] = "InvalidParameterException";
  SignUpException2["InvalidPasswordException"] = "InvalidPasswordException";
  SignUpException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  SignUpException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  SignUpException2["NotAuthorizedException"] = "NotAuthorizedException";
  SignUpException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  SignUpException2["TooManyRequestsException"] = "TooManyRequestsException";
  SignUpException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  SignUpException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  SignUpException2["UsernameExistsException"] = "UsernameExistsException";
})(SignUpException || (SignUpException = {}));
var UpdateUserAttributesException;
(function(UpdateUserAttributesException2) {
  UpdateUserAttributesException2["AliasExistsException"] = "AliasExistsException";
  UpdateUserAttributesException2["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
  UpdateUserAttributesException2["CodeMismatchException"] = "CodeMismatchException";
  UpdateUserAttributesException2["ExpiredCodeException"] = "ExpiredCodeException";
  UpdateUserAttributesException2["ForbiddenException"] = "ForbiddenException";
  UpdateUserAttributesException2["InternalErrorException"] = "InternalErrorException";
  UpdateUserAttributesException2["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
  UpdateUserAttributesException2["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
  UpdateUserAttributesException2["InvalidParameterException"] = "InvalidParameterException";
  UpdateUserAttributesException2["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
  UpdateUserAttributesException2["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
  UpdateUserAttributesException2["NotAuthorizedException"] = "NotAuthorizedException";
  UpdateUserAttributesException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  UpdateUserAttributesException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  UpdateUserAttributesException2["TooManyRequestsException"] = "TooManyRequestsException";
  UpdateUserAttributesException2["UnexpectedLambdaException"] = "UnexpectedLambdaException";
  UpdateUserAttributesException2["UserLambdaValidationException"] = "UserLambdaValidationException";
  UpdateUserAttributesException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  UpdateUserAttributesException2["UserNotFoundException"] = "UserNotFoundException";
})(UpdateUserAttributesException || (UpdateUserAttributesException = {}));
var VerifySoftwareTokenException;
(function(VerifySoftwareTokenException2) {
  VerifySoftwareTokenException2["CodeMismatchException"] = "CodeMismatchException";
  VerifySoftwareTokenException2["EnableSoftwareTokenMFAException"] = "EnableSoftwareTokenMFAException";
  VerifySoftwareTokenException2["ForbiddenException"] = "ForbiddenException";
  VerifySoftwareTokenException2["InternalErrorException"] = "InternalErrorException";
  VerifySoftwareTokenException2["InvalidParameterException"] = "InvalidParameterException";
  VerifySoftwareTokenException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  VerifySoftwareTokenException2["NotAuthorizedException"] = "NotAuthorizedException";
  VerifySoftwareTokenException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  VerifySoftwareTokenException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  VerifySoftwareTokenException2["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
  VerifySoftwareTokenException2["TooManyRequestsException"] = "TooManyRequestsException";
  VerifySoftwareTokenException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  VerifySoftwareTokenException2["UserNotFoundException"] = "UserNotFoundException";
})(VerifySoftwareTokenException || (VerifySoftwareTokenException = {}));
var VerifyUserAttributeException;
(function(VerifyUserAttributeException2) {
  VerifyUserAttributeException2["AliasExistsException"] = "AliasExistsException";
  VerifyUserAttributeException2["CodeMismatchException"] = "CodeMismatchException";
  VerifyUserAttributeException2["ExpiredCodeException"] = "ExpiredCodeException";
  VerifyUserAttributeException2["ForbiddenException"] = "ForbiddenException";
  VerifyUserAttributeException2["InternalErrorException"] = "InternalErrorException";
  VerifyUserAttributeException2["InvalidParameterException"] = "InvalidParameterException";
  VerifyUserAttributeException2["LimitExceededException"] = "LimitExceededException";
  VerifyUserAttributeException2["NotAuthorizedException"] = "NotAuthorizedException";
  VerifyUserAttributeException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  VerifyUserAttributeException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  VerifyUserAttributeException2["TooManyRequestsException"] = "TooManyRequestsException";
  VerifyUserAttributeException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  VerifyUserAttributeException2["UserNotFoundException"] = "UserNotFoundException";
})(VerifyUserAttributeException || (VerifyUserAttributeException = {}));
var UpdateDeviceStatusException;
(function(UpdateDeviceStatusException2) {
  UpdateDeviceStatusException2["ForbiddenException"] = "ForbiddenException";
  UpdateDeviceStatusException2["InternalErrorException"] = "InternalErrorException";
  UpdateDeviceStatusException2["InvalidParameterException"] = "InvalidParameterException";
  UpdateDeviceStatusException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  UpdateDeviceStatusException2["NotAuthorizedException"] = "NotAuthorizedException";
  UpdateDeviceStatusException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  UpdateDeviceStatusException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  UpdateDeviceStatusException2["TooManyRequestsException"] = "TooManyRequestsException";
  UpdateDeviceStatusException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  UpdateDeviceStatusException2["UserNotFoundException"] = "UserNotFoundException";
})(UpdateDeviceStatusException || (UpdateDeviceStatusException = {}));
var ListDevicesException;
(function(ListDevicesException2) {
  ListDevicesException2["ForbiddenException"] = "ForbiddenException";
  ListDevicesException2["InternalErrorException"] = "InternalErrorException";
  ListDevicesException2["InvalidParameterException"] = "InvalidParameterException";
  ListDevicesException2["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
  ListDevicesException2["NotAuthorizedException"] = "NotAuthorizedException";
  ListDevicesException2["PasswordResetRequiredException"] = "PasswordResetRequiredException";
  ListDevicesException2["ResourceNotFoundException"] = "ResourceNotFoundException";
  ListDevicesException2["TooManyRequestsException"] = "TooManyRequestsException";
  ListDevicesException2["UserNotConfirmedException"] = "UserNotConfirmedException";
  ListDevicesException2["UserNotFoundException"] = "UserNotFoundException";
})(ListDevicesException || (ListDevicesException = {}));

// node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs
var USER_UNAUTHENTICATED_EXCEPTION = "UserUnAuthenticatedException";
var USER_ALREADY_AUTHENTICATED_EXCEPTION = "UserAlreadyAuthenticatedException";
var DEVICE_METADATA_NOT_FOUND_EXCEPTION = "DeviceMetadataNotFoundException";
var AUTO_SIGN_IN_EXCEPTION = "AutoSignInException";
var INVALID_REDIRECT_EXCEPTION = "InvalidRedirectException";
var invalidRedirectException = new AuthError({
  name: INVALID_REDIRECT_EXCEPTION,
  message: "signInRedirect or signOutRedirect had an invalid format or was not found.",
  recoverySuggestion: "Please make sure the signIn/Out redirect in your oauth config is valid."
});
var INVALID_ORIGIN_EXCEPTION = "InvalidOriginException";
var invalidOriginException = new AuthError({
  name: INVALID_ORIGIN_EXCEPTION,
  message: "redirect is coming from a different origin. The oauth flow needs to be initiated from the same origin",
  recoverySuggestion: "Please call signInWithRedirect from the same origin."
});
var TOKEN_REFRESH_EXCEPTION = "TokenRefreshException";
var UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION = "UnexpectedSignInInterruptionException";

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs
function assertAuthTokens(tokens) {
  if (!tokens || !tokens.accessToken) {
    throw new AuthError({
      name: USER_UNAUTHENTICATED_EXCEPTION,
      message: "User needs to be authenticated to call this API.",
      recoverySuggestion: "Sign in before calling this API again."
    });
  }
}
function assertIdTokenInAuthTokens(tokens) {
  if (!tokens || !tokens.idToken) {
    throw new AuthError({
      name: USER_UNAUTHENTICATED_EXCEPTION,
      message: "User needs to be authenticated to call this API.",
      recoverySuggestion: "Sign in before calling this API again."
    });
  }
}
var oAuthTokenRefreshException = new AuthError({
  name: TOKEN_REFRESH_EXCEPTION,
  message: `Token refresh is not supported when authenticated with the 'implicit grant' (token) oauth flow. 
	Please change your oauth configuration to use 'code grant' flow.`,
  recoverySuggestion: `Please logout and change your Amplify configuration to use "code grant" flow. 
	E.g { responseType: 'code' }`
});
var tokenRefreshException = new AuthError({
  name: USER_UNAUTHENTICATED_EXCEPTION,
  message: "User needs to be authenticated to call this API.",
  recoverySuggestion: "Sign in before calling this API again."
});
function assertAuthTokensWithRefreshToken(tokens) {
  if (isAuthenticatedWithImplicitOauthFlow(tokens)) {
    throw oAuthTokenRefreshException;
  }
  if (!isAuthenticatedWithRefreshToken(tokens)) {
    throw tokenRefreshException;
  }
}
function assertDeviceMetadata(deviceMetadata) {
  if (!deviceMetadata || !deviceMetadata.deviceKey || !deviceMetadata.deviceGroupKey || !deviceMetadata.randomPassword) {
    throw new AuthError({
      name: DEVICE_METADATA_NOT_FOUND_EXCEPTION,
      message: "Either deviceKey, deviceGroupKey or secretPassword were not found during the sign-in process.",
      recoverySuggestion: "Make sure to not clear storage after calling the signIn API."
    });
  }
}
var OAuthStorageKeys = {
  inflightOAuth: "inflightOAuth",
  oauthSignIn: "oauthSignIn",
  oauthPKCE: "oauthPKCE",
  oauthState: "oauthState"
};
function isAuthenticated(tokens) {
  return (tokens == null ? void 0 : tokens.accessToken) || (tokens == null ? void 0 : tokens.idToken);
}
function isAuthenticatedWithRefreshToken(tokens) {
  return isAuthenticated(tokens) && (tokens == null ? void 0 : tokens.refreshToken);
}
function isAuthenticatedWithImplicitOauthFlow(tokens) {
  return isAuthenticated(tokens) && !(tokens == null ? void 0 : tokens.refreshToken);
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/getCurrentUser.mjs
var getCurrentUser = async (amplify) => {
  var _a, _b;
  const authConfig = (_a = amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  assertTokenProviderConfig(authConfig);
  const tokens = await amplify.Auth.getTokens({ forceRefresh: false });
  assertAuthTokens(tokens);
  const { "cognito:username": username, sub } = ((_b = tokens.idToken) == null ? void 0 : _b.payload) ?? {};
  const authUser = {
    username,
    userId: sub
  };
  const signInDetails = getSignInDetailsFromTokens(tokens);
  if (signInDetails) {
    authUser.signInDetails = signInDetails;
  }
  return authUser;
};
function getSignInDetailsFromTokens(tokens) {
  return tokens == null ? void 0 : tokens.signInDetails;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs
var getCurrentUser2 = async () => {
  return getCurrentUser(Amplify);
};

// node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs
var getAuthUserAgentValue = (action, customUserAgentDetails) => getAmplifyUserAgent({
  category: Category.Auth,
  action,
  ...customUserAgentDetails
});

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInStore.mjs
var signInReducer = (state, action) => {
  switch (action.type) {
    case "SET_SIGN_IN_SESSION":
      return {
        ...state,
        signInSession: action.value
      };
    case "SET_SIGN_IN_STATE":
      return {
        ...action.value
      };
    case "SET_CHALLENGE_NAME":
      return {
        ...state,
        challengeName: action.value
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.value
      };
    case "SET_INITIAL_STATE":
      return defaultState();
    default:
      return state;
  }
};
function defaultState() {
  return {
    username: void 0,
    challengeName: void 0,
    signInSession: void 0
  };
}
var createStore = (reducer) => {
  let currentState = reducer(defaultState(), { type: "SET_INITIAL_STATE" });
  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    }
  };
};
var signInStore = createStore(signInReducer);
function setActiveSignInState(state) {
  signInStore.dispatch({
    type: "SET_SIGN_IN_STATE",
    value: state
  });
}
function cleanActiveSignInState() {
  signInStore.dispatch({ type: "SET_INITIAL_STATE" });
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/textEncoder/index.mjs
var textEncoder = {
  convert(input) {
    return new TextEncoder().encode(input);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs
function BigInteger(a, b) {
  if (a != null)
    this.fromString(a, b);
}
function nbi() {
  return new BigInteger(null, null);
}
var dbits;
var canary = 244837814094590;
var j_lm = (canary & 16777215) === 15715070;
function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    const v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 67108864);
    w[j++] = v & 67108863;
  }
  return c;
}
function am2(i, x, w, j, c, n) {
  const xl = x & 32767;
  const xh = x >> 15;
  while (--n >= 0) {
    let l = this[i] & 32767;
    const h = this[i++] >> 15;
    const m = xh * l + h * xl;
    l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w[j++] = l & 1073741823;
  }
  return c;
}
function am3(i, x, w, j, c, n) {
  const xl = x & 16383;
  const xh = x >> 14;
  while (--n >= 0) {
    let l = this[i] & 16383;
    const h = this[i++] >> 14;
    const m = xh * l + h * xl;
    l = xl * l + ((m & 16383) << 14) + w[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j++] = l & 268435455;
  }
  return c;
}
var inBrowser = typeof navigator !== "undefined";
if (inBrowser && j_lm && navigator.appName === "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (inBrowser && j_lm && navigator.appName !== "Netscape") {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  BigInteger.prototype.am = am3;
  dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv)
  BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv)
  BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv)
  BI_RC[rr++] = vv;
function int2char(n) {
  return BI_RM.charAt(n);
}
function intAt(s, i) {
  const c = BI_RC[s.charCodeAt(i)];
  return c == null ? -1 : c;
}
function bnpCopyTo(r) {
  for (let i = this.t - 1; i >= 0; --i)
    r[i] = this[i];
  r.t = this.t;
  r.s = this.s;
}
function bnpFromInt(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0)
    this[0] = x;
  else if (x < -1)
    this[0] = x + this.DV;
  else
    this.t = 0;
}
function nbv(i) {
  const r = nbi();
  r.fromInt(i);
  return r;
}
function bnpFromString(s, b) {
  let k;
  if (b === 16)
    k = 4;
  else if (b === 8)
    k = 3;
  else if (b === 2)
    k = 1;
  else if (b === 32)
    k = 5;
  else if (b === 4)
    k = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  this.t = 0;
  this.s = 0;
  let i = s.length;
  let mi = false;
  let sh = 0;
  while (--i >= 0) {
    const x = intAt(s, i);
    if (x < 0) {
      if (s.charAt(i) === "-")
        mi = true;
      continue;
    }
    mi = false;
    if (sh === 0)
      this[this.t++] = x;
    else if (sh + k > this.DB) {
      this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
      this[this.t++] = x >> this.DB - sh;
    } else
      this[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB)
      sh -= this.DB;
  }
  this.clamp();
  if (mi)
    BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  const c = this.s & this.DM;
  while (this.t > 0 && this[this.t - 1] == c)
    --this.t;
}
function bnToString(b) {
  if (this.s < 0)
    return "-" + this.negate().toString(b);
  let k;
  if (b == 16)
    k = 4;
  else if (b === 8)
    k = 3;
  else if (b === 2)
    k = 1;
  else if (b === 32)
    k = 5;
  else if (b === 4)
    k = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  const km = (1 << k) - 1;
  let d;
  let m = false;
  let r = "";
  let i = this.t;
  let p = this.DB - i * this.DB % k;
  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) > 0) {
      m = true;
      r = int2char(d);
    }
    while (i >= 0) {
      if (p < k) {
        d = (this[i] & (1 << p) - 1) << k - p;
        d |= this[--i] >> (p += this.DB - k);
      } else {
        d = this[i] >> (p -= k) & km;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if (d > 0)
        m = true;
      if (m)
        r += int2char(d);
    }
  }
  return m ? r : "0";
}
function bnNegate() {
  const r = nbi();
  BigInteger.ZERO.subTo(this, r);
  return r;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(a) {
  let r = this.s - a.s;
  if (r != 0)
    return r;
  let i = this.t;
  r = i - a.t;
  if (r != 0)
    return this.s < 0 ? -r : r;
  while (--i >= 0)
    if ((r = this[i] - a[i]) != 0)
      return r;
  return 0;
}
function nbits(x) {
  let r = 1;
  let t;
  if ((t = x >>> 16) !== 0) {
    x = t;
    r += 16;
  }
  if ((t = x >> 8) !== 0) {
    x = t;
    r += 8;
  }
  if ((t = x >> 4) !== 0) {
    x = t;
    r += 4;
  }
  if ((t = x >> 2) !== 0) {
    x = t;
    r += 2;
  }
  if ((t = x >> 1) !== 0) {
    x = t;
    r += 1;
  }
  return r;
}
function bnBitLength() {
  if (this.t <= 0)
    return 0;
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}
function bnpDLShiftTo(n, r) {
  let i;
  for (i = this.t - 1; i >= 0; --i)
    r[i + n] = this[i];
  for (i = n - 1; i >= 0; --i)
    r[i] = 0;
  r.t = this.t + n;
  r.s = this.s;
}
function bnpDRShiftTo(n, r) {
  for (let i = n; i < this.t; ++i)
    r[i - n] = this[i];
  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
}
function bnpLShiftTo(n, r) {
  const bs = n % this.DB;
  const cbs = this.DB - bs;
  const bm = (1 << cbs) - 1;
  const ds = Math.floor(n / this.DB);
  let c = this.s << bs & this.DM;
  let i;
  for (i = this.t - 1; i >= 0; --i) {
    r[i + ds + 1] = this[i] >> cbs | c;
    c = (this[i] & bm) << bs;
  }
  for (i = ds - 1; i >= 0; --i)
    r[i] = 0;
  r[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
}
function bnpRShiftTo(n, r) {
  r.s = this.s;
  const ds = Math.floor(n / this.DB);
  if (ds >= this.t) {
    r.t = 0;
    return;
  }
  const bs = n % this.DB;
  const cbs = this.DB - bs;
  const bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;
  for (let i = ds + 1; i < this.t; ++i) {
    r[i - ds - 1] |= (this[i] & bm) << cbs;
    r[i - ds] = this[i] >> bs;
  }
  if (bs > 0)
    r[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
}
function bnpSubTo(a, r) {
  let i = 0;
  let c = 0;
  const m = Math.min(a.t, this.t);
  while (i < m) {
    c += this[i] - a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c -= a.s;
    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c -= a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c < -1)
    r[i++] = this.DV + c;
  else if (c > 0)
    r[i++] = c;
  r.t = i;
  r.clamp();
}
function bnpMultiplyTo(a, r) {
  const x = this.abs();
  const y = a.abs();
  let i = x.t;
  r.t = i + y.t;
  while (--i >= 0)
    r[i] = 0;
  for (i = 0; i < y.t; ++i)
    r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  r.s = 0;
  r.clamp();
  if (this.s !== a.s)
    BigInteger.ZERO.subTo(r, r);
}
function bnpSquareTo(r) {
  const x = this.abs();
  let i = r.t = 2 * x.t;
  while (--i >= 0)
    r[i] = 0;
  for (i = 0; i < x.t - 1; ++i) {
    const c = x.am(i, x[i], r, 2 * i, 0, 1);
    if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
      r[i + x.t] -= x.DV;
      r[i + x.t + 1] = 1;
    }
  }
  if (r.t > 0)
    r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
}
function bnpDivRemTo(m, q, r) {
  const pm = m.abs();
  if (pm.t <= 0)
    return;
  const pt = this.abs();
  if (pt.t < pm.t) {
    if (q != null)
      q.fromInt(0);
    if (r != null)
      this.copyTo(r);
    return;
  }
  if (r === null)
    r = nbi();
  const y = nbi();
  const ts = this.s;
  const ms = m.s;
  const nsh = this.DB - nbits(pm[pm.t - 1]);
  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }
  const ys = y.t;
  const y0 = y[ys - 1];
  if (y0 === 0)
    return;
  const yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
  const d1 = this.FV / yt;
  const d2 = (1 << this.F1) / yt;
  const e = 1 << this.F2;
  let i = r.t;
  let j = i - ys;
  const t = q === null ? nbi() : q;
  y.dlShiftTo(j, t);
  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t, r);
  }
  BigInteger.ONE.dlShiftTo(ys, t);
  t.subTo(y, y);
  while (y.t < ys)
    y[y.t++] = 0;
  while (--j >= 0) {
    let qd = r[--i] === y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      y.dlShiftTo(j, t);
      r.subTo(t, r);
      while (r[i] < --qd)
        r.subTo(t, r);
    }
  }
  if (q !== null) {
    r.drShiftTo(ys, q);
    if (ts !== ms)
      BigInteger.ZERO.subTo(q, q);
  }
  r.t = ys;
  r.clamp();
  if (nsh > 0)
    r.rShiftTo(nsh, r);
  if (ts < 0)
    BigInteger.ZERO.subTo(r, r);
}
function bnMod(a) {
  const r = nbi();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
    a.subTo(r, r);
  return r;
}
function bnpInvDigit() {
  if (this.t < 1)
    return 0;
  const x = this[0];
  if ((x & 1) === 0)
    return 0;
  let y = x & 3;
  y = y * (2 - (x & 15) * y) & 15;
  y = y * (2 - (x & 255) * y) & 255;
  y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
  y = y * (2 - x * y % this.DV) % this.DV;
  return y > 0 ? this.DV - y : -y;
}
function bnEquals(a) {
  return this.compareTo(a) === 0;
}
function bnpAddTo(a, r) {
  let i = 0;
  let c = 0;
  const m = Math.min(a.t, this.t);
  while (i < m) {
    c += this[i] + a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c += a.s;
    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c += a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c > 0)
    r[i++] = c;
  else if (c < -1)
    r[i++] = this.DV + c;
  r.t = i;
  r.clamp();
}
function bnAdd(a) {
  const r = nbi();
  this.addTo(a, r);
  return r;
}
function bnSubtract(a) {
  const r = nbi();
  this.subTo(a, r);
  return r;
}
function bnMultiply(a) {
  const r = nbi();
  this.multiplyTo(a, r);
  return r;
}
function bnDivide(a) {
  const r = nbi();
  this.divRemTo(a, r, null);
  return r;
}
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << m.DB - 15) - 1;
  this.mt2 = 2 * m.t;
}
function montConvert(x) {
  const r = nbi();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
    this.m.subTo(r, r);
  return r;
}
function montRevert(x) {
  const r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}
function montReduce(x) {
  while (x.t <= this.mt2)
    x[x.t++] = 0;
  for (let i = 0; i < this.m.t; ++i) {
    let j = x[i] & 32767;
    const u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
    j = i + this.m.t;
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
    while (x[j] >= x.DV) {
      x[j] -= x.DV;
      x[++j]++;
    }
  }
  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0)
    x.subTo(this.m, x);
}
function montSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
function montMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnModPow(e, m, callback) {
  let i = e.bitLength();
  let k;
  let r = nbv(1);
  const z = new Montgomery(m);
  if (i <= 0)
    return r;
  else if (i < 18)
    k = 1;
  else if (i < 48)
    k = 3;
  else if (i < 144)
    k = 4;
  else if (i < 768)
    k = 5;
  else
    k = 6;
  const g = [];
  let n = 3;
  const k1 = k - 1;
  const km = (1 << k) - 1;
  g[1] = z.convert(this);
  if (k > 1) {
    const g2 = nbi();
    z.sqrTo(g[1], g2);
    while (n <= km) {
      g[n] = nbi();
      z.mulTo(g2, g[n - 2], g[n]);
      n += 2;
    }
  }
  let j = e.t - 1;
  let w;
  let is1 = true;
  let r2 = nbi();
  let t;
  i = nbits(e[j]) - 1;
  while (j >= 0) {
    if (i >= k1)
      w = e[j] >> i - k1 & km;
    else {
      w = (e[j] & (1 << i + 1) - 1) << k1 - i;
      if (j > 0)
        w |= e[j - 1] >> this.DB + i - k1;
    }
    n = k;
    while ((w & 1) === 0) {
      w >>= 1;
      --n;
    }
    if ((i -= n) < 0) {
      i += this.DB;
      --j;
    }
    if (is1) {
      g[w].copyTo(r);
      is1 = false;
    } else {
      while (n > 1) {
        z.sqrTo(r, r2);
        z.sqrTo(r2, r);
        n -= 2;
      }
      if (n > 0)
        z.sqrTo(r, r2);
      else {
        t = r;
        r = r2;
        r2 = t;
      }
      z.mulTo(r2, g[w], r);
    }
    while (j >= 0 && (e[j] & 1 << i) === 0) {
      z.sqrTo(r, r2);
      t = r;
      r = r2;
      r2 = t;
      if (--i < 0) {
        i = this.DB - 1;
        --j;
      }
    }
  }
  const result = z.revert(r);
  callback(null, result);
  return result;
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.modPow = bnModPow;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateS.mjs
var calculateS = async ({ a, g, k, x, B, N, U }) => {
  return new Promise((resolve, reject) => {
    g.modPow(x, N, (outerErr, outerResult) => {
      if (outerErr) {
        reject(outerErr);
        return;
      }
      B.subtract(k.multiply(outerResult)).modPow(a.add(U.multiply(x)), N, (innerErr, innerResult) => {
        if (innerErr) {
          reject(innerErr);
          return;
        }
        resolve(innerResult.mod(N));
      });
    });
  });
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/constants.mjs
var INIT_N = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF";
var SHORT_TO_HEX2 = {};
var HEX_TO_SHORT2 = {};
for (let i = 0; i < 256; i++) {
  let encodedByte = i.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX2[i] = encodedByte;
  HEX_TO_SHORT2[encodedByte] = i;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs
var getBytesFromHex = (encoded) => {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i = 0; i < encoded.length; i += 2) {
    const encodedByte = encoded.slice(i, i + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT2) {
      out[i / 2] = HEX_TO_SHORT2[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromData.mjs
var import_sha256_js11 = __toESM(require_build2(), 1);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHexFromBytes.mjs
var getHexFromBytes = (bytes) => {
  let out = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX2[bytes[i]];
  }
  return out;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromData.mjs
var getHashFromData = (data) => {
  const sha256 = new import_sha256_js11.Sha256();
  sha256.update(data);
  const hashedData = sha256.digestSync();
  const hashHexFromUint8 = getHexFromBytes(hashedData);
  return new Array(64 - hashHexFromUint8.length).join("0") + hashHexFromUint8;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromHex.mjs
var getHashFromHex = (hexStr) => getHashFromData(getBytesFromHex(hexStr));

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getPaddedHex.mjs
var HEX_MSB_REGEX = /^[89a-f]/i;
var getPaddedHex = (bigInt) => {
  if (!(bigInt instanceof BigInteger)) {
    throw new Error("Not a BigInteger");
  }
  const isNegative = bigInt.compareTo(BigInteger.ZERO) < 0;
  let hexStr = bigInt.abs().toString(16);
  hexStr = hexStr.length % 2 !== 0 ? `0${hexStr}` : hexStr;
  hexStr = HEX_MSB_REGEX.test(hexStr) ? `00${hexStr}` : hexStr;
  if (isNegative) {
    const invertedNibbles = hexStr.split("").map((x) => {
      const invertedNibble = ~parseInt(x, 16) & 15;
      return "0123456789ABCDEF".charAt(invertedNibble);
    }).join("");
    const flippedBitsBI = new BigInteger(invertedNibbles, 16).add(BigInteger.ONE);
    hexStr = flippedBitsBI.toString(16);
    if (hexStr.toUpperCase().startsWith("FF8")) {
      hexStr = hexStr.substring(2);
    }
  }
  return hexStr;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateU.mjs
var calculateU = ({ A, B }) => {
  const U = new BigInteger(getHashFromHex(getPaddedHex(A) + getPaddedHex(B)), 16);
  if (U.equals(BigInteger.ZERO)) {
    throw new Error("U cannot be zero.");
  }
  return U;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHkdfKey.mjs
var import_sha256_js12 = __toESM(require_build2(), 1);
var getHkdfKey = (ikm, salt, info) => {
  const awsCryptoHash = new import_sha256_js12.Sha256(salt);
  awsCryptoHash.update(ikm);
  const resultFromAWSCryptoPrk = awsCryptoHash.digestSync();
  const awsCryptoHashHmac = new import_sha256_js12.Sha256(resultFromAWSCryptoPrk);
  awsCryptoHashHmac.update(info);
  const resultFromAWSCryptoHmac = awsCryptoHashHmac.digestSync();
  const hashHexFromAWSCrypto = resultFromAWSCryptoHmac;
  return hashHexFromAWSCrypto.slice(0, 16);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomBytes.mjs
var getRandomBytes = (nBytes) => {
  const str = new WordArray().random(nBytes).toString();
  return getBytesFromHex(str);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomString.mjs
var getRandomString = () => base64Encoder.convert(getRandomBytes(40));

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/AuthenticationHelper/AuthenticationHelper.mjs
var AuthenticationHelper = class {
  constructor({ userPoolName, a, g, A, N }) {
    this.encoder = textEncoder;
    this.userPoolName = userPoolName;
    this.a = a;
    this.g = g;
    this.A = A;
    this.N = N;
    this.k = new BigInteger(getHashFromHex(`${getPaddedHex(N)}${getPaddedHex(g)}`), 16);
  }
  /**
   * @returns {string} Generated random value included in password hash.
   */
  getRandomPassword() {
    if (!this.randomPassword) {
      throw new AuthError({
        name: "EmptyBigIntegerRandomPassword",
        message: "random password is empty"
      });
    }
    return this.randomPassword;
  }
  /**
   * @returns {string} Generated random value included in devices hash.
   */
  getSaltToHashDevices() {
    if (!this.saltToHashDevices) {
      throw new AuthError({
        name: "EmptyBigIntegersaltToHashDevices",
        message: "saltToHashDevices is empty"
      });
    }
    return this.saltToHashDevices;
  }
  /**
   * @returns {string} Value used to verify devices.
   */
  getVerifierDevices() {
    if (!this.verifierDevices) {
      throw new AuthError({
        name: "EmptyBigIntegerVerifierDevices",
        message: "verifyDevices is empty"
      });
    }
    return this.verifierDevices;
  }
  /**
   * Generate salts and compute verifier.
   *
   * @param {string} deviceGroupKey Devices to generate verifier for.
   * @param {string} username User to generate verifier for.
   *
   * @returns {Promise<void>}
   */
  async generateHashDevice(deviceGroupKey, username) {
    this.randomPassword = getRandomString();
    const combinedString = `${deviceGroupKey}${username}:${this.randomPassword}`;
    const hashedString = getHashFromData(combinedString);
    const hexRandom = getHexFromBytes(getRandomBytes(16));
    this.saltToHashDevices = getPaddedHex(new BigInteger(hexRandom, 16));
    return new Promise((resolve, reject) => {
      this.g.modPow(new BigInteger(getHashFromHex(this.saltToHashDevices + hashedString), 16), this.N, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        this.verifierDevices = getPaddedHex(result);
        resolve();
      });
    });
  }
  /**
   * Calculates the final HKDF key based on computed S value, computed U value and the key
   *
   * @param {String} username Username.
   * @param {String} password Password.
   * @param {AuthBigInteger} B Server B value.
   * @param {AuthBigInteger} salt Generated salt.
   */
  async getPasswordAuthenticationKey({ username, password, serverBValue, salt }) {
    if (serverBValue.mod(this.N).equals(BigInteger.ZERO)) {
      throw new Error("B cannot be zero.");
    }
    const U = calculateU({
      A: this.A,
      B: serverBValue
    });
    const usernamePassword = `${this.userPoolName}${username}:${password}`;
    const usernamePasswordHash = getHashFromData(usernamePassword);
    const x = new BigInteger(getHashFromHex(getPaddedHex(salt) + usernamePasswordHash), 16);
    const S = await calculateS({
      a: this.a,
      g: this.g,
      k: this.k,
      x,
      B: serverBValue,
      N: this.N,
      U
    });
    const context2 = this.encoder.convert("Caldera Derived Key");
    const spacer = this.encoder.convert(String.fromCharCode(1));
    const info = new Uint8Array(context2.byteLength + spacer.byteLength);
    info.set(context2, 0);
    info.set(spacer, context2.byteLength);
    const hkdfKey = getHkdfKey(getBytesFromHex(getPaddedHex(S)), getBytesFromHex(getPaddedHex(U)), info);
    return hkdfKey;
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateA.mjs
var calculateA = async ({ a, g, N }) => {
  return new Promise((resolve, reject) => {
    g.modPow(a, N, (err, A) => {
      if (err) {
        reject(err);
        return;
      }
      if (A.mod(N).equals(BigInteger.ZERO)) {
        reject(new Error("Illegal parameter. A mod N cannot be 0."));
        return;
      }
      resolve(A);
    });
  });
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs
var import_sha256_js13 = __toESM(require_build2(), 1);
var getAuthenticationHelper = async (userPoolName) => {
  const N = new BigInteger(INIT_N, 16);
  const g = new BigInteger("2", 16);
  const a = generateRandomBigInteger();
  const A = await calculateA({ a, g, N });
  return new AuthenticationHelper({ userPoolName, a, g, A, N });
};
var generateRandomBigInteger = () => {
  const hexRandom = getHexFromBytes(getRandomBytes(128));
  return new BigInteger(hexRandom, 16);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getNowString.mjs
var MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var WEEK_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var getNowString = () => {
  const now = /* @__PURE__ */ new Date();
  const weekDay = WEEK_NAMES[now.getUTCDay()];
  const month = MONTH_NAMES[now.getUTCMonth()];
  const day = now.getUTCDate();
  let hours = now.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = now.getUTCSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  const year = now.getUTCFullYear();
  const dateNow = `${weekDay} ${month} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
  return dateNow;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getSignatureString.mjs
var import_sha256_js14 = __toESM(require_build2(), 1);
var getSignatureString = ({ userPoolName, username, challengeParameters, dateNow, hkdf }) => {
  const bufUPIDaToB = textEncoder.convert(userPoolName);
  const bufUNaToB = textEncoder.convert(username);
  const bufSBaToB = urlB64ToUint8Array(challengeParameters.SECRET_BLOCK);
  const bufDNaToB = textEncoder.convert(dateNow);
  const bufConcat = new Uint8Array(bufUPIDaToB.byteLength + bufUNaToB.byteLength + bufSBaToB.byteLength + bufDNaToB.byteLength);
  bufConcat.set(bufUPIDaToB, 0);
  bufConcat.set(bufUNaToB, bufUPIDaToB.byteLength);
  bufConcat.set(bufSBaToB, bufUPIDaToB.byteLength + bufUNaToB.byteLength);
  bufConcat.set(bufDNaToB, bufUPIDaToB.byteLength + bufUNaToB.byteLength + bufSBaToB.byteLength);
  const awsCryptoHash = new import_sha256_js14.Sha256(hkdf);
  awsCryptoHash.update(bufConcat);
  const resultFromAWSCrypto = awsCryptoHash.digestSync();
  const signatureString = base64Encoder.convert(resultFromAWSCrypto);
  return signatureString;
};
var urlB64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = base64Decoder.convert(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs
function getUserContextData({ username, userPoolId, userPoolClientId }) {
  if (typeof window === "undefined") {
    return void 0;
  }
  const amazonCognitoAdvancedSecurityData = window.AmazonCognitoAdvancedSecurityData;
  if (typeof amazonCognitoAdvancedSecurityData === "undefined") {
    return void 0;
  }
  const advancedSecurityData = amazonCognitoAdvancedSecurityData.getData(username, userPoolId, userPoolClientId);
  if (advancedSecurityData) {
    const userContextData = {
      EncodedData: advancedSecurityData
    };
    return userContextData;
  }
  return {};
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs
var USER_ATTRIBUTES = "userAttributes.";
async function handleUserPasswordAuthFlow(username, password, clientMetadata, config2, tokenOrchestrator2) {
  var _a, _b;
  const { userPoolClientId, userPoolId } = config2;
  const authParameters = {
    USERNAME: username,
    PASSWORD: password
  };
  const deviceMetadata = await tokenOrchestrator2.getDeviceMetadata(username);
  if (deviceMetadata && deviceMetadata.deviceKey) {
    authParameters.DEVICE_KEY = deviceMetadata.deviceKey;
  }
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReq = {
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: authParameters,
    ClientMetadata: clientMetadata,
    ClientId: userPoolClientId,
    UserContextData
  };
  const response = await initiateAuth({
    region: getRegion(userPoolId),
    userAgentValue: getAuthUserAgentValue(AuthAction.SignIn)
  }, jsonReq);
  const activeUsername = ((_a = response.ChallengeParameters) == null ? void 0 : _a.USERNAME) ?? ((_b = response.ChallengeParameters) == null ? void 0 : _b.USER_ID_FOR_SRP) ?? username;
  setActiveSignInUsername(activeUsername);
  if (response.ChallengeName === "DEVICE_SRP_AUTH")
    return handleDeviceSRPAuth({
      username: activeUsername,
      config: config2,
      clientMetadata,
      session: response.Session,
      tokenOrchestrator: tokenOrchestrator2
    });
  return response;
}
async function handleUserSRPAuthFlow(username, password, clientMetadata, config2, tokenOrchestrator2) {
  const { userPoolId, userPoolClientId } = config2;
  const userPoolName = (userPoolId == null ? void 0 : userPoolId.split("_")[1]) || "";
  const authenticationHelper = await getAuthenticationHelper(userPoolName);
  const authParameters = {
    USERNAME: username,
    SRP_A: authenticationHelper.A.toString(16)
  };
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReq = {
    AuthFlow: "USER_SRP_AUTH",
    AuthParameters: authParameters,
    ClientMetadata: clientMetadata,
    ClientId: userPoolClientId,
    UserContextData
  };
  const resp = await initiateAuth({
    region: getRegion(userPoolId),
    userAgentValue: getAuthUserAgentValue(AuthAction.SignIn)
  }, jsonReq);
  const { ChallengeParameters: challengeParameters, Session: session } = resp;
  const activeUsername = (challengeParameters == null ? void 0 : challengeParameters.USERNAME) ?? username;
  setActiveSignInUsername(activeUsername);
  return retryOnResourceNotFoundException(handlePasswordVerifierChallenge, [
    password,
    challengeParameters,
    clientMetadata,
    session,
    authenticationHelper,
    config2,
    tokenOrchestrator2
  ], activeUsername, tokenOrchestrator2);
}
async function handleCustomAuthFlowWithoutSRP(username, clientMetadata, config2, tokenOrchestrator2) {
  var _a;
  const { userPoolClientId, userPoolId } = config2;
  const authParameters = {
    USERNAME: username
  };
  const deviceMetadata = await tokenOrchestrator2.getDeviceMetadata(username);
  if (deviceMetadata && deviceMetadata.deviceKey) {
    authParameters.DEVICE_KEY = deviceMetadata.deviceKey;
  }
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReq = {
    AuthFlow: "CUSTOM_AUTH",
    AuthParameters: authParameters,
    ClientMetadata: clientMetadata,
    ClientId: userPoolClientId,
    UserContextData
  };
  const response = await initiateAuth({
    region: getRegion(userPoolId),
    userAgentValue: getAuthUserAgentValue(AuthAction.SignIn)
  }, jsonReq);
  const activeUsername = ((_a = response.ChallengeParameters) == null ? void 0 : _a.USERNAME) ?? username;
  setActiveSignInUsername(activeUsername);
  if (response.ChallengeName === "DEVICE_SRP_AUTH")
    return handleDeviceSRPAuth({
      username: activeUsername,
      config: config2,
      clientMetadata,
      session: response.Session,
      tokenOrchestrator: tokenOrchestrator2
    });
  return response;
}
async function handleCustomSRPAuthFlow(username, password, clientMetadata, config2, tokenOrchestrator2) {
  assertTokenProviderConfig(config2);
  const { userPoolId, userPoolClientId } = config2;
  const userPoolName = (userPoolId == null ? void 0 : userPoolId.split("_")[1]) || "";
  const authenticationHelper = await getAuthenticationHelper(userPoolName);
  const authParameters = {
    USERNAME: username,
    SRP_A: authenticationHelper.A.toString(16),
    CHALLENGE_NAME: "SRP_A"
  };
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReq = {
    AuthFlow: "CUSTOM_AUTH",
    AuthParameters: authParameters,
    ClientMetadata: clientMetadata,
    ClientId: userPoolClientId,
    UserContextData
  };
  const { ChallengeParameters: challengeParameters, Session: session } = await initiateAuth({
    region: getRegion(userPoolId),
    userAgentValue: getAuthUserAgentValue(AuthAction.SignIn)
  }, jsonReq);
  const activeUsername = (challengeParameters == null ? void 0 : challengeParameters.USERNAME) ?? username;
  setActiveSignInUsername(activeUsername);
  return retryOnResourceNotFoundException(handlePasswordVerifierChallenge, [
    password,
    challengeParameters,
    clientMetadata,
    session,
    authenticationHelper,
    config2,
    tokenOrchestrator2
  ], activeUsername, tokenOrchestrator2);
}
async function handleDeviceSRPAuth({ username, config: config2, clientMetadata, session, tokenOrchestrator: tokenOrchestrator2 }) {
  const { userPoolId } = config2;
  const clientId = config2.userPoolClientId;
  const deviceMetadata = await (tokenOrchestrator2 == null ? void 0 : tokenOrchestrator2.getDeviceMetadata(username));
  assertDeviceMetadata(deviceMetadata);
  const authenticationHelper = await getAuthenticationHelper(deviceMetadata.deviceGroupKey);
  const challengeResponses = {
    USERNAME: username,
    SRP_A: authenticationHelper.A.toString(16),
    DEVICE_KEY: deviceMetadata.deviceKey
  };
  const jsonReqResponseChallenge = {
    ChallengeName: "DEVICE_SRP_AUTH",
    ClientId: clientId,
    ChallengeResponses: challengeResponses,
    ClientMetadata: clientMetadata,
    Session: session
  };
  const { ChallengeParameters: respondedChallengeParameters, Session } = await respondToAuthChallenge({ region: getRegion(userPoolId) }, jsonReqResponseChallenge);
  return handleDevicePasswordVerifier(username, respondedChallengeParameters, clientMetadata, Session, authenticationHelper, config2, tokenOrchestrator2);
}
async function handleDevicePasswordVerifier(username, challengeParameters, clientMetadata, session, authenticationHelper, { userPoolId, userPoolClientId }, tokenOrchestrator2) {
  const deviceMetadata = await (tokenOrchestrator2 == null ? void 0 : tokenOrchestrator2.getDeviceMetadata(username));
  assertDeviceMetadata(deviceMetadata);
  const serverBValue = new BigInteger(challengeParameters == null ? void 0 : challengeParameters.SRP_B, 16);
  const salt = new BigInteger(challengeParameters == null ? void 0 : challengeParameters.SALT, 16);
  const { deviceKey } = deviceMetadata;
  const { deviceGroupKey } = deviceMetadata;
  const hkdf = await authenticationHelper.getPasswordAuthenticationKey({
    username: deviceMetadata.deviceKey,
    password: deviceMetadata.randomPassword,
    serverBValue,
    salt
  });
  const dateNow = getNowString();
  const challengeResponses = {
    USERNAME: (challengeParameters == null ? void 0 : challengeParameters.USERNAME) ?? username,
    PASSWORD_CLAIM_SECRET_BLOCK: challengeParameters == null ? void 0 : challengeParameters.SECRET_BLOCK,
    TIMESTAMP: dateNow,
    PASSWORD_CLAIM_SIGNATURE: getSignatureString({
      username: deviceKey,
      userPoolName: deviceGroupKey,
      challengeParameters,
      dateNow,
      hkdf
    }),
    DEVICE_KEY: deviceKey
  };
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReqResponseChallenge = {
    ChallengeName: "DEVICE_PASSWORD_VERIFIER",
    ClientId: userPoolClientId,
    ChallengeResponses: challengeResponses,
    Session: session,
    ClientMetadata: clientMetadata,
    UserContextData
  };
  return respondToAuthChallenge({ region: getRegion(userPoolId) }, jsonReqResponseChallenge);
}
async function handlePasswordVerifierChallenge(password, challengeParameters, clientMetadata, session, authenticationHelper, config2, tokenOrchestrator2) {
  const { userPoolId, userPoolClientId } = config2;
  const userPoolName = (userPoolId == null ? void 0 : userPoolId.split("_")[1]) || "";
  const serverBValue = new BigInteger(challengeParameters == null ? void 0 : challengeParameters.SRP_B, 16);
  const salt = new BigInteger(challengeParameters == null ? void 0 : challengeParameters.SALT, 16);
  const username = challengeParameters == null ? void 0 : challengeParameters.USER_ID_FOR_SRP;
  if (!username)
    throw new AuthError({
      name: "EmptyUserIdForSRPException",
      message: "USER_ID_FOR_SRP was not found in challengeParameters"
    });
  const hkdf = await authenticationHelper.getPasswordAuthenticationKey({
    username,
    password,
    serverBValue,
    salt
  });
  const dateNow = getNowString();
  const challengeResponses = {
    USERNAME: username,
    PASSWORD_CLAIM_SECRET_BLOCK: challengeParameters == null ? void 0 : challengeParameters.SECRET_BLOCK,
    TIMESTAMP: dateNow,
    PASSWORD_CLAIM_SIGNATURE: getSignatureString({
      username,
      userPoolName,
      challengeParameters,
      dateNow,
      hkdf
    })
  };
  const deviceMetadata = await tokenOrchestrator2.getDeviceMetadata(username);
  if (deviceMetadata && deviceMetadata.deviceKey) {
    challengeResponses.DEVICE_KEY = deviceMetadata.deviceKey;
  }
  const UserContextData = getUserContextData({
    username,
    userPoolId,
    userPoolClientId
  });
  const jsonReqResponseChallenge = {
    ChallengeName: "PASSWORD_VERIFIER",
    ChallengeResponses: challengeResponses,
    ClientMetadata: clientMetadata,
    Session: session,
    ClientId: userPoolClientId,
    UserContextData
  };
  const response = await respondToAuthChallenge({ region: getRegion(userPoolId) }, jsonReqResponseChallenge);
  if (response.ChallengeName === "DEVICE_SRP_AUTH")
    return handleDeviceSRPAuth({
      username,
      config: config2,
      clientMetadata,
      session: response.Session,
      tokenOrchestrator: tokenOrchestrator2
    });
  return response;
}
async function getSignInResult(params) {
  var _a;
  const { challengeName, challengeParameters } = params;
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  assertTokenProviderConfig(authConfig);
  switch (challengeName) {
    case "CUSTOM_CHALLENGE":
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE",
          additionalInfo: challengeParameters
        }
      };
    case "MFA_SETUP": {
      const { signInSession, username } = signInStore.getState();
      if (!isMFATypeEnabled(challengeParameters, "TOTP"))
        throw new AuthError({
          name: AuthErrorCodes.SignInException,
          message: `Cannot initiate MFA setup from available types: ${getMFATypes(parseMFATypes(challengeParameters.MFAS_CAN_SETUP))}`
        });
      const { Session, SecretCode: secretCode } = await associateSoftwareToken({ region: getRegion(authConfig.userPoolId) }, {
        Session: signInSession
      });
      signInStore.dispatch({
        type: "SET_SIGN_IN_SESSION",
        value: Session
      });
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONTINUE_SIGN_IN_WITH_TOTP_SETUP",
          totpSetupDetails: getTOTPSetupDetails(secretCode, username)
        }
      };
    }
    case "NEW_PASSWORD_REQUIRED":
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED",
          missingAttributes: parseAttributes(challengeParameters.requiredAttributes)
        }
      };
    case "SELECT_MFA_TYPE":
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONTINUE_SIGN_IN_WITH_MFA_SELECTION",
          allowedMFATypes: getMFATypes(parseMFATypes(challengeParameters.MFAS_CAN_CHOOSE))
        }
      };
    case "SMS_MFA":
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONFIRM_SIGN_IN_WITH_SMS_CODE",
          codeDeliveryDetails: {
            deliveryMedium: challengeParameters.CODE_DELIVERY_DELIVERY_MEDIUM,
            destination: challengeParameters.CODE_DELIVERY_DESTINATION
          }
        }
      };
    case "SOFTWARE_TOKEN_MFA":
      return {
        isSignedIn: false,
        nextStep: {
          signInStep: "CONFIRM_SIGN_IN_WITH_TOTP_CODE"
        }
      };
  }
  throw new AuthError({
    name: AuthErrorCodes.SignInException,
    message: `An error occurred during the sign in process. ${challengeName} challengeName returned by the underlying service was not addressed.`
  });
}
function getTOTPSetupDetails(secretCode, username) {
  return {
    sharedSecret: secretCode,
    getSetupUri: (appName, accountName) => {
      const totpUri = `otpauth://totp/${appName}:${accountName ?? username}?secret=${secretCode}&issuer=${appName}`;
      return new AmplifyUrl(totpUri);
    }
  };
}
function getSignInResultFromError(errorName) {
  if (errorName === InitiateAuthException.PasswordResetRequiredException) {
    return {
      isSignedIn: false,
      nextStep: { signInStep: "RESET_PASSWORD" }
    };
  } else if (errorName === InitiateAuthException.UserNotConfirmedException) {
    return {
      isSignedIn: false,
      nextStep: { signInStep: "CONFIRM_SIGN_UP" }
    };
  }
}
function parseAttributes(attributes) {
  if (!attributes)
    return [];
  const parsedAttributes = JSON.parse(attributes).map((att) => att.includes(USER_ATTRIBUTES) ? att.replace(USER_ATTRIBUTES, "") : att);
  return parsedAttributes;
}
function getMFAType(type) {
  if (type === "SMS_MFA")
    return "SMS";
  if (type === "SOFTWARE_TOKEN_MFA")
    return "TOTP";
}
function getMFATypes(types) {
  if (!types)
    return void 0;
  return types.map(getMFAType).filter(Boolean);
}
function parseMFATypes(mfa) {
  if (!mfa)
    return [];
  return JSON.parse(mfa);
}
function isMFATypeEnabled(challengeParams, mfaType) {
  const { MFAS_CAN_SETUP } = challengeParams;
  const mfaTypes = getMFATypes(parseMFATypes(MFAS_CAN_SETUP));
  if (!mfaTypes)
    return false;
  return mfaTypes.includes(mfaType);
}
async function assertUserNotAuthenticated() {
  let authUser;
  try {
    authUser = await getCurrentUser2();
  } catch (error) {
  }
  if (authUser && authUser.userId && authUser.username) {
    throw new AuthError({
      name: USER_ALREADY_AUTHENTICATED_EXCEPTION,
      message: "There is already a signed in user.",
      recoverySuggestion: "Call signOut before calling signIn again."
    });
  }
}
async function getNewDeviceMetatada(userPoolId, newDeviceMetadata, accessToken) {
  if (!newDeviceMetadata)
    return void 0;
  const userPoolName = userPoolId.split("_")[1] || "";
  const authenticationHelper = await getAuthenticationHelper(userPoolName);
  const deviceKey = newDeviceMetadata == null ? void 0 : newDeviceMetadata.DeviceKey;
  const deviceGroupKey = newDeviceMetadata == null ? void 0 : newDeviceMetadata.DeviceGroupKey;
  try {
    await authenticationHelper.generateHashDevice(deviceGroupKey ?? "", deviceKey ?? "");
  } catch (errGenHash) {
    return void 0;
  }
  const deviceSecretVerifierConfig = {
    Salt: base64Encoder.convert(getBytesFromHex(authenticationHelper.getSaltToHashDevices())),
    PasswordVerifier: base64Encoder.convert(getBytesFromHex(authenticationHelper.getVerifierDevices()))
  };
  const randomPassword = authenticationHelper.getRandomPassword();
  try {
    await confirmDevice({ region: getRegion(userPoolId) }, {
      AccessToken: accessToken,
      DeviceName: await getDeviceName(),
      DeviceKey: newDeviceMetadata == null ? void 0 : newDeviceMetadata.DeviceKey,
      DeviceSecretVerifierConfig: deviceSecretVerifierConfig
    });
    return {
      deviceKey,
      deviceGroupKey,
      randomPassword
    };
  } catch (error) {
    return void 0;
  }
}
async function retryOnResourceNotFoundException(func, args, username, tokenOrchestrator2) {
  try {
    return await func(...args);
  } catch (error) {
    if (error instanceof AuthError && error.name === "ResourceNotFoundException" && error.message.includes("Device does not exist.")) {
      await tokenOrchestrator2.clearDeviceMetadata(username);
      return func(...args);
    }
    throw error;
  }
}
function setActiveSignInUsername(username) {
  const { dispatch } = signInStore;
  dispatch({ type: "SET_USERNAME", value: username });
}
function getActiveSignInUsername(username) {
  const state = signInStore.getState();
  return state.username ?? username;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/refreshAuthTokens.mjs
var refreshAuthTokensFunction = async ({ tokens, authConfig, username }) => {
  var _a, _b;
  assertTokenProviderConfig(authConfig == null ? void 0 : authConfig.Cognito);
  const region = getRegion(authConfig.Cognito.userPoolId);
  assertAuthTokensWithRefreshToken(tokens);
  const refreshTokenString = tokens.refreshToken;
  const AuthParameters = {
    REFRESH_TOKEN: refreshTokenString
  };
  if ((_a = tokens.deviceMetadata) == null ? void 0 : _a.deviceKey) {
    AuthParameters.DEVICE_KEY = tokens.deviceMetadata.deviceKey;
  }
  const UserContextData = getUserContextData({
    username,
    userPoolId: authConfig.Cognito.userPoolId,
    userPoolClientId: authConfig.Cognito.userPoolClientId
  });
  const { AuthenticationResult } = await initiateAuth({ region }, {
    ClientId: (_b = authConfig == null ? void 0 : authConfig.Cognito) == null ? void 0 : _b.userPoolClientId,
    AuthFlow: "REFRESH_TOKEN_AUTH",
    AuthParameters,
    UserContextData
  });
  const accessToken = decodeJWT((AuthenticationResult == null ? void 0 : AuthenticationResult.AccessToken) ?? "");
  const idToken = (AuthenticationResult == null ? void 0 : AuthenticationResult.IdToken) ? decodeJWT(AuthenticationResult.IdToken) : void 0;
  const { iat } = accessToken.payload;
  if (!iat) {
    throw new AuthError({
      name: "iatNotFoundException",
      message: "iat not found in access token"
    });
  }
  const clockDrift = iat * 1e3 - (/* @__PURE__ */ new Date()).getTime();
  return {
    accessToken,
    idToken,
    clockDrift,
    refreshToken: refreshTokenString,
    username
  };
};
var refreshAuthTokens = deDupeAsyncFunction(refreshAuthTokensFunction);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types.mjs
var AuthTokenStorageKeys = {
  accessToken: "accessToken",
  idToken: "idToken",
  oidcProvider: "oidcProvider",
  clockDrift: "clockDrift",
  refreshToken: "refreshToken",
  deviceKey: "deviceKey",
  randomPasswordKey: "randomPasswordKey",
  deviceGroupKey: "deviceGroupKey",
  signInDetails: "signInDetails"
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/errorHelpers.mjs
var TokenProviderErrorCode;
(function(TokenProviderErrorCode2) {
  TokenProviderErrorCode2["InvalidAuthTokens"] = "InvalidAuthTokens";
})(TokenProviderErrorCode || (TokenProviderErrorCode = {}));
var tokenValidationErrorMap = {
  [TokenProviderErrorCode.InvalidAuthTokens]: {
    message: "Invalid tokens.",
    recoverySuggestion: "Make sure the tokens are valid."
  }
};
var assert7 = createAssertionFunction(tokenValidationErrorMap);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs
var DefaultTokenStore = class {
  constructor() {
    this.name = "CognitoIdentityServiceProvider";
  }
  getKeyValueStorage() {
    if (!this.keyValueStorage) {
      throw new AuthError({
        name: "KeyValueStorageNotFoundException",
        message: "KeyValueStorage was not found in TokenStore"
      });
    }
    return this.keyValueStorage;
  }
  setKeyValueStorage(keyValueStorage) {
    this.keyValueStorage = keyValueStorage;
  }
  setAuthConfig(authConfig) {
    this.authConfig = authConfig;
  }
  async loadTokens() {
    try {
      const authKeys = await this.getAuthKeys();
      const accessTokenString = await this.getKeyValueStorage().getItem(authKeys.accessToken);
      if (!accessTokenString) {
        throw new AuthError({
          name: "NoSessionFoundException",
          message: "Auth session was not found. Make sure to call signIn."
        });
      }
      const accessToken = decodeJWT(accessTokenString);
      const itString = await this.getKeyValueStorage().getItem(authKeys.idToken);
      const idToken = itString ? decodeJWT(itString) : void 0;
      const refreshToken = await this.getKeyValueStorage().getItem(authKeys.refreshToken) ?? void 0;
      const clockDriftString = await this.getKeyValueStorage().getItem(authKeys.clockDrift) ?? "0";
      const clockDrift = Number.parseInt(clockDriftString);
      const signInDetails = await this.getKeyValueStorage().getItem(authKeys.signInDetails);
      const tokens = {
        accessToken,
        idToken,
        refreshToken,
        deviceMetadata: await this.getDeviceMetadata() ?? void 0,
        clockDrift,
        username: await this.getLastAuthUser()
      };
      if (signInDetails) {
        tokens.signInDetails = JSON.parse(signInDetails);
      }
      return tokens;
    } catch (err) {
      return null;
    }
  }
  async storeTokens(tokens) {
    assert7(tokens !== void 0, TokenProviderErrorCode.InvalidAuthTokens);
    await this.clearTokens();
    const lastAuthUser = tokens.username;
    await this.getKeyValueStorage().setItem(this.getLastAuthUserKey(), lastAuthUser);
    const authKeys = await this.getAuthKeys();
    await this.getKeyValueStorage().setItem(authKeys.accessToken, tokens.accessToken.toString());
    if (tokens.idToken) {
      await this.getKeyValueStorage().setItem(authKeys.idToken, tokens.idToken.toString());
    }
    if (tokens.refreshToken) {
      await this.getKeyValueStorage().setItem(authKeys.refreshToken, tokens.refreshToken);
    }
    if (tokens.deviceMetadata) {
      if (tokens.deviceMetadata.deviceKey) {
        await this.getKeyValueStorage().setItem(authKeys.deviceKey, tokens.deviceMetadata.deviceKey);
      }
      if (tokens.deviceMetadata.deviceGroupKey) {
        await this.getKeyValueStorage().setItem(authKeys.deviceGroupKey, tokens.deviceMetadata.deviceGroupKey);
      }
      await this.getKeyValueStorage().setItem(authKeys.randomPasswordKey, tokens.deviceMetadata.randomPassword);
    }
    if (tokens.signInDetails) {
      await this.getKeyValueStorage().setItem(authKeys.signInDetails, JSON.stringify(tokens.signInDetails));
    }
    await this.getKeyValueStorage().setItem(authKeys.clockDrift, `${tokens.clockDrift}`);
  }
  async clearTokens() {
    const authKeys = await this.getAuthKeys();
    await Promise.all([
      this.getKeyValueStorage().removeItem(authKeys.accessToken),
      this.getKeyValueStorage().removeItem(authKeys.idToken),
      this.getKeyValueStorage().removeItem(authKeys.clockDrift),
      this.getKeyValueStorage().removeItem(authKeys.refreshToken),
      this.getKeyValueStorage().removeItem(authKeys.signInDetails),
      this.getKeyValueStorage().removeItem(this.getLastAuthUserKey())
    ]);
  }
  async getDeviceMetadata(username) {
    const authKeys = await this.getAuthKeys(username);
    const deviceKey = await this.getKeyValueStorage().getItem(authKeys.deviceKey);
    const deviceGroupKey = await this.getKeyValueStorage().getItem(authKeys.deviceGroupKey);
    const randomPassword = await this.getKeyValueStorage().getItem(authKeys.randomPasswordKey);
    return randomPassword && deviceGroupKey && deviceKey ? {
      deviceKey,
      deviceGroupKey,
      randomPassword
    } : null;
  }
  async clearDeviceMetadata(username) {
    const authKeys = await this.getAuthKeys(username);
    await Promise.all([
      this.getKeyValueStorage().removeItem(authKeys.deviceKey),
      this.getKeyValueStorage().removeItem(authKeys.deviceGroupKey),
      this.getKeyValueStorage().removeItem(authKeys.randomPasswordKey)
    ]);
  }
  async getAuthKeys(username) {
    var _a;
    assertTokenProviderConfig((_a = this.authConfig) == null ? void 0 : _a.Cognito);
    const lastAuthUser = username ?? await this.getLastAuthUser();
    return createKeysForAuthStorage(this.name, `${this.authConfig.Cognito.userPoolClientId}.${lastAuthUser}`);
  }
  getLastAuthUserKey() {
    var _a;
    assertTokenProviderConfig((_a = this.authConfig) == null ? void 0 : _a.Cognito);
    const identifier = this.authConfig.Cognito.userPoolClientId;
    return `${this.name}.${identifier}.LastAuthUser`;
  }
  async getLastAuthUser() {
    const lastAuthUser = await this.getKeyValueStorage().getItem(this.getLastAuthUserKey()) ?? "username";
    return lastAuthUser;
  }
};
var createKeysForAuthStorage = (provider, identifier) => {
  return getAuthStorageKeys(AuthTokenStorageKeys)(`${provider}`, identifier);
};
function getAuthStorageKeys(authKeys) {
  const keys = Object.values({ ...authKeys });
  return (prefix, identifier) => keys.reduce((acc, authKey) => ({
    ...acc,
    [authKey]: `${prefix}.${identifier}.${authKey}`
  }), {});
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs
var V5_HOSTED_UI_KEY = "amplify-signin-with-hostedUI";
var name = "CognitoIdentityServiceProvider";
var DefaultOAuthStore = class {
  constructor(keyValueStorage) {
    this.keyValueStorage = keyValueStorage;
  }
  async clearOAuthInflightData() {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    await Promise.all([
      this.keyValueStorage.removeItem(authKeys.inflightOAuth),
      this.keyValueStorage.removeItem(authKeys.oauthPKCE),
      this.keyValueStorage.removeItem(authKeys.oauthState)
    ]);
  }
  async clearOAuthData() {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    await this.clearOAuthInflightData();
    await this.keyValueStorage.removeItem(V5_HOSTED_UI_KEY);
    return this.keyValueStorage.removeItem(authKeys.oauthSignIn);
  }
  loadOAuthState() {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    return this.keyValueStorage.getItem(authKeys.oauthState);
  }
  storeOAuthState(state) {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    return this.keyValueStorage.setItem(authKeys.oauthState, state);
  }
  loadPKCE() {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    return this.keyValueStorage.getItem(authKeys.oauthPKCE);
  }
  storePKCE(pkce) {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    return this.keyValueStorage.setItem(authKeys.oauthPKCE, pkce);
  }
  setAuthConfig(authConfigParam) {
    this.cognitoConfig = authConfigParam;
  }
  async loadOAuthInFlight() {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    return await this.keyValueStorage.getItem(authKeys.inflightOAuth) === "true";
  }
  async storeOAuthInFlight(inflight) {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    await this.keyValueStorage.setItem(authKeys.inflightOAuth, `${inflight}`);
  }
  async loadOAuthSignIn() {
    var _a;
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    const isLegacyHostedUISignIn = await this.keyValueStorage.getItem(V5_HOSTED_UI_KEY);
    const [isOAuthSignIn, preferPrivateSession] = ((_a = await this.keyValueStorage.getItem(authKeys.oauthSignIn)) == null ? void 0 : _a.split(",")) ?? [];
    return {
      isOAuthSignIn: isOAuthSignIn === "true" || isLegacyHostedUISignIn === "true",
      preferPrivateSession: preferPrivateSession === "true"
    };
  }
  async storeOAuthSignIn(oauthSignIn, preferPrivateSession = false) {
    assertTokenProviderConfig(this.cognitoConfig);
    const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
    await this.keyValueStorage.setItem(authKeys.oauthSignIn, `${oauthSignIn},${preferPrivateSession}`);
  }
};
var createKeysForAuthStorage2 = (provider, identifier) => {
  return getAuthStorageKeys(OAuthStorageKeys)(provider, identifier);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs
var oAuthStore = new DefaultOAuthStore(defaultStorage);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs
var inflightPromises = [];
var addInflightPromise = (resolver) => {
  inflightPromises.push(resolver);
};
var resolveAndClearInflightPromises = () => {
  var _a;
  while (inflightPromises.length) {
    (_a = inflightPromises.pop()) == null ? void 0 : _a();
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenOrchestrator.mjs
var TokenOrchestrator = class {
  constructor() {
    this.waitForInflightOAuth = isBrowser() ? async () => {
      if (!await oAuthStore.loadOAuthInFlight()) {
        return;
      }
      if (this.inflightPromise) {
        return this.inflightPromise;
      }
      this.inflightPromise = new Promise((resolve, _reject) => {
        addInflightPromise(resolve);
      });
      return this.inflightPromise;
    } : async () => {
    };
  }
  setAuthConfig(authConfig) {
    oAuthStore.setAuthConfig(authConfig.Cognito);
    this.authConfig = authConfig;
  }
  setTokenRefresher(tokenRefresher) {
    this.tokenRefresher = tokenRefresher;
  }
  setAuthTokenStore(tokenStore) {
    this.tokenStore = tokenStore;
  }
  getTokenStore() {
    if (!this.tokenStore) {
      throw new AuthError({
        name: "EmptyTokenStoreException",
        message: "TokenStore not set"
      });
    }
    return this.tokenStore;
  }
  getTokenRefresher() {
    if (!this.tokenRefresher) {
      throw new AuthError({
        name: "EmptyTokenRefresherException",
        message: "TokenRefresher not set"
      });
    }
    return this.tokenRefresher;
  }
  async getTokens(options) {
    var _a, _b, _c, _d, _e;
    let tokens;
    try {
      assertTokenProviderConfig((_a = this.authConfig) == null ? void 0 : _a.Cognito);
    } catch (_err) {
      return null;
    }
    await this.waitForInflightOAuth();
    this.inflightPromise = void 0;
    tokens = await this.getTokenStore().loadTokens();
    const username = await this.getTokenStore().getLastAuthUser();
    if (tokens === null) {
      return null;
    }
    const idTokenExpired = !!(tokens == null ? void 0 : tokens.idToken) && isTokenExpired({
      expiresAt: (((_c = (_b = tokens.idToken) == null ? void 0 : _b.payload) == null ? void 0 : _c.exp) ?? 0) * 1e3,
      clockDrift: tokens.clockDrift ?? 0
    });
    const accessTokenExpired = isTokenExpired({
      expiresAt: (((_e = (_d = tokens.accessToken) == null ? void 0 : _d.payload) == null ? void 0 : _e.exp) ?? 0) * 1e3,
      clockDrift: tokens.clockDrift ?? 0
    });
    if ((options == null ? void 0 : options.forceRefresh) || idTokenExpired || accessTokenExpired) {
      tokens = await this.refreshTokens({
        tokens,
        username
      });
      if (tokens === null) {
        return null;
      }
    }
    return {
      accessToken: tokens == null ? void 0 : tokens.accessToken,
      idToken: tokens == null ? void 0 : tokens.idToken,
      signInDetails: tokens == null ? void 0 : tokens.signInDetails
    };
  }
  async refreshTokens({ tokens, username }) {
    try {
      const { signInDetails } = tokens;
      const newTokens = await this.getTokenRefresher()({
        tokens,
        authConfig: this.authConfig,
        username
      });
      newTokens.signInDetails = signInDetails;
      await this.setTokens({ tokens: newTokens });
      Hub.dispatch("auth", { event: "tokenRefresh" }, "Auth", AMPLIFY_SYMBOL);
      return newTokens;
    } catch (err) {
      return this.handleErrors(err);
    }
  }
  handleErrors(err) {
    assertServiceError(err);
    if (err.message !== "Network error") {
      this.clearTokens();
    }
    Hub.dispatch("auth", {
      event: "tokenRefresh_failure",
      data: { error: err }
    }, "Auth", AMPLIFY_SYMBOL);
    if (err.name.startsWith("NotAuthorizedException")) {
      return null;
    }
    throw err;
  }
  async setTokens({ tokens }) {
    return this.getTokenStore().storeTokens(tokens);
  }
  async clearTokens() {
    return this.getTokenStore().clearTokens();
  }
  getDeviceMetadata(username) {
    return this.getTokenStore().getDeviceMetadata(username);
  }
  clearDeviceMetadata(username) {
    return this.getTokenStore().clearDeviceMetadata(username);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/CognitoUserPoolsTokenProvider.mjs
var CognitoUserPoolsTokenProvider = class {
  constructor() {
    this.authTokenStore = new DefaultTokenStore();
    this.authTokenStore.setKeyValueStorage(defaultStorage);
    this.tokenOrchestrator = new TokenOrchestrator();
    this.tokenOrchestrator.setAuthTokenStore(this.authTokenStore);
    this.tokenOrchestrator.setTokenRefresher(refreshAuthTokens);
  }
  getTokens({ forceRefresh } = { forceRefresh: false }) {
    return this.tokenOrchestrator.getTokens({ forceRefresh });
  }
  setKeyValueStorage(keyValueStorage) {
    this.authTokenStore.setKeyValueStorage(keyValueStorage);
  }
  setAuthConfig(authConfig) {
    this.authTokenStore.setAuthConfig(authConfig);
    this.tokenOrchestrator.setAuthConfig(authConfig);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs
var cognitoUserPoolsTokenProvider = new CognitoUserPoolsTokenProvider();
var { tokenOrchestrator } = cognitoUserPoolsTokenProvider;

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs
async function cacheCognitoTokens(AuthenticationResult) {
  if (AuthenticationResult.AccessToken) {
    const accessToken = decodeJWT(AuthenticationResult.AccessToken);
    const accessTokenIssuedAtInMillis = (accessToken.payload.iat || 0) * 1e3;
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    const clockDrift = accessTokenIssuedAtInMillis > 0 ? accessTokenIssuedAtInMillis - currentTime : 0;
    let idToken;
    let refreshToken;
    let deviceMetadata;
    if (AuthenticationResult.RefreshToken) {
      refreshToken = AuthenticationResult.RefreshToken;
    }
    if (AuthenticationResult.IdToken) {
      idToken = decodeJWT(AuthenticationResult.IdToken);
    }
    if (AuthenticationResult == null ? void 0 : AuthenticationResult.NewDeviceMetadata) {
      deviceMetadata = AuthenticationResult.NewDeviceMetadata;
    }
    const tokens = {
      accessToken,
      idToken,
      refreshToken,
      clockDrift,
      deviceMetadata,
      username: AuthenticationResult.username
    };
    if (AuthenticationResult == null ? void 0 : AuthenticationResult.signInDetails) {
      tokens.signInDetails = AuthenticationResult.signInDetails;
    }
    await tokenOrchestrator.setTokens({
      tokens
    });
  } else {
    throw new AmplifyError({
      message: "Invalid tokens",
      name: "InvalidTokens",
      recoverySuggestion: "Check Cognito UserPool settings"
    });
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs
var ERROR_MESSAGE = "Unable to get user session following successful sign-in.";
var dispatchSignedInHubEvent = async () => {
  try {
    Hub.dispatch("auth", {
      event: "signedIn",
      data: await getCurrentUser2()
    }, "Auth", AMPLIFY_SYMBOL);
  } catch (error) {
    if (error.name === USER_UNAUTHENTICATED_EXCEPTION) {
      throw new AuthError({
        name: UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION,
        message: ERROR_MESSAGE,
        recoverySuggestion: "This most likely is due to auth tokens not being persisted. If you are using cookie store, please ensure cookies can be correctly set from your server."
      });
    }
    throw error;
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomAuth.mjs
async function signInWithCustomAuth(input) {
  var _a;
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  assertTokenProviderConfig(authConfig);
  const { username, password, options } = input;
  const signInDetails = {
    loginId: username,
    authFlowType: "CUSTOM_WITHOUT_SRP"
  };
  const metadata = options == null ? void 0 : options.clientMetadata;
  assertValidationError(!!username, AuthValidationErrorCode.EmptySignInUsername);
  assertValidationError(!password, AuthValidationErrorCode.CustomAuthSignInPassword);
  try {
    const { ChallengeName: retriedChallengeName, ChallengeParameters: retiredChallengeParameters, AuthenticationResult, Session } = await retryOnResourceNotFoundException(handleCustomAuthFlowWithoutSRP, [username, metadata, authConfig, tokenOrchestrator], username, tokenOrchestrator);
    const activeUsername = getActiveSignInUsername(username);
    setActiveSignInState({
      signInSession: Session,
      username: activeUsername,
      challengeName: retriedChallengeName,
      signInDetails
    });
    if (AuthenticationResult) {
      cleanActiveSignInState();
      await cacheCognitoTokens({
        username: activeUsername,
        ...AuthenticationResult,
        NewDeviceMetadata: await getNewDeviceMetatada(authConfig.userPoolId, AuthenticationResult.NewDeviceMetadata, AuthenticationResult.AccessToken),
        signInDetails
      });
      await dispatchSignedInHubEvent();
      return {
        isSignedIn: true,
        nextStep: { signInStep: "DONE" }
      };
    }
    return getSignInResult({
      challengeName: retriedChallengeName,
      challengeParameters: retiredChallengeParameters
    });
  } catch (error) {
    cleanActiveSignInState();
    assertServiceError(error);
    const result = getSignInResultFromError(error.name);
    if (result)
      return result;
    throw error;
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomSRPAuth.mjs
async function signInWithCustomSRPAuth(input) {
  var _a;
  const { username, password, options } = input;
  const signInDetails = {
    loginId: username,
    authFlowType: "CUSTOM_WITH_SRP"
  };
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  assertTokenProviderConfig(authConfig);
  const metadata = options == null ? void 0 : options.clientMetadata;
  assertValidationError(!!username, AuthValidationErrorCode.EmptySignInUsername);
  assertValidationError(!!password, AuthValidationErrorCode.EmptySignInPassword);
  try {
    const { ChallengeName: handledChallengeName, ChallengeParameters: handledChallengeParameters, AuthenticationResult, Session } = await handleCustomSRPAuthFlow(username, password, metadata, authConfig, tokenOrchestrator);
    const activeUsername = getActiveSignInUsername(username);
    setActiveSignInState({
      signInSession: Session,
      username: activeUsername,
      challengeName: handledChallengeName,
      signInDetails
    });
    if (AuthenticationResult) {
      await cacheCognitoTokens({
        username: activeUsername,
        ...AuthenticationResult,
        NewDeviceMetadata: await getNewDeviceMetatada(authConfig.userPoolId, AuthenticationResult.NewDeviceMetadata, AuthenticationResult.AccessToken),
        signInDetails
      });
      cleanActiveSignInState();
      await dispatchSignedInHubEvent();
      return {
        isSignedIn: true,
        nextStep: { signInStep: "DONE" }
      };
    }
    return getSignInResult({
      challengeName: handledChallengeName,
      challengeParameters: handledChallengeParameters
    });
  } catch (error) {
    cleanActiveSignInState();
    assertServiceError(error);
    const result = getSignInResultFromError(error.name);
    if (result)
      return result;
    throw error;
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithSRP.mjs
async function signInWithSRP(input) {
  var _a, _b;
  const { username, password } = input;
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  const signInDetails = {
    loginId: username,
    authFlowType: "USER_SRP_AUTH"
  };
  assertTokenProviderConfig(authConfig);
  const clientMetaData = (_b = input.options) == null ? void 0 : _b.clientMetadata;
  assertValidationError(!!username, AuthValidationErrorCode.EmptySignInUsername);
  assertValidationError(!!password, AuthValidationErrorCode.EmptySignInPassword);
  try {
    const { ChallengeName: handledChallengeName, ChallengeParameters: handledChallengeParameters, AuthenticationResult, Session } = await handleUserSRPAuthFlow(username, password, clientMetaData, authConfig, tokenOrchestrator);
    const activeUsername = getActiveSignInUsername(username);
    setActiveSignInState({
      signInSession: Session,
      username: activeUsername,
      challengeName: handledChallengeName,
      signInDetails
    });
    if (AuthenticationResult) {
      cleanActiveSignInState();
      await cacheCognitoTokens({
        username: activeUsername,
        ...AuthenticationResult,
        NewDeviceMetadata: await getNewDeviceMetatada(authConfig.userPoolId, AuthenticationResult.NewDeviceMetadata, AuthenticationResult.AccessToken),
        signInDetails
      });
      await dispatchSignedInHubEvent();
      return {
        isSignedIn: true,
        nextStep: { signInStep: "DONE" }
      };
    }
    return getSignInResult({
      challengeName: handledChallengeName,
      challengeParameters: handledChallengeParameters
    });
  } catch (error) {
    cleanActiveSignInState();
    assertServiceError(error);
    const result = getSignInResultFromError(error.name);
    if (result)
      return result;
    throw error;
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserPassword.mjs
async function signInWithUserPassword(input) {
  var _a;
  const { username, password, options } = input;
  const authConfig = (_a = Amplify.getConfig().Auth) == null ? void 0 : _a.Cognito;
  const signInDetails = {
    loginId: username,
    authFlowType: "USER_PASSWORD_AUTH"
  };
  assertTokenProviderConfig(authConfig);
  const metadata = options == null ? void 0 : options.clientMetadata;
  assertValidationError(!!username, AuthValidationErrorCode.EmptySignInUsername);
  assertValidationError(!!password, AuthValidationErrorCode.EmptySignInPassword);
  try {
    const { ChallengeName: retiredChallengeName, ChallengeParameters: retriedChallengeParameters, AuthenticationResult, Session } = await retryOnResourceNotFoundException(handleUserPasswordAuthFlow, [username, password, metadata, authConfig, tokenOrchestrator], username, tokenOrchestrator);
    const activeUsername = getActiveSignInUsername(username);
    setActiveSignInState({
      signInSession: Session,
      username: activeUsername,
      challengeName: retiredChallengeName,
      signInDetails
    });
    if (AuthenticationResult) {
      await cacheCognitoTokens({
        ...AuthenticationResult,
        username: activeUsername,
        NewDeviceMetadata: await getNewDeviceMetatada(authConfig.userPoolId, AuthenticationResult.NewDeviceMetadata, AuthenticationResult.AccessToken),
        signInDetails
      });
      cleanActiveSignInState();
      await dispatchSignedInHubEvent();
      return {
        isSignedIn: true,
        nextStep: { signInStep: "DONE" }
      };
    }
    return getSignInResult({
      challengeName: retiredChallengeName,
      challengeParameters: retriedChallengeParameters
    });
  } catch (error) {
    cleanActiveSignInState();
    assertServiceError(error);
    const result = getSignInResultFromError(error.name);
    if (result)
      return result;
    throw error;
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signIn.mjs
async function signIn(input) {
  var _a;
  const authFlowType = (_a = input.options) == null ? void 0 : _a.authFlowType;
  await assertUserNotAuthenticated();
  switch (authFlowType) {
    case "USER_SRP_AUTH":
      return signInWithSRP(input);
    case "USER_PASSWORD_AUTH":
      return signInWithUserPassword(input);
    case "CUSTOM_WITHOUT_SRP":
      return signInWithCustomAuth(input);
    case "CUSTOM_WITH_SRP":
      return signInWithCustomSRPAuth(input);
    default:
      return signInWithSRP(input);
  }
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs
var initialAutoSignIn = async () => {
  throw new AuthError({
    name: AUTO_SIGN_IN_EXCEPTION,
    message: "The autoSignIn flow has not started, or has been cancelled/completed.",
    recoverySuggestion: "Please try to use the signIn API or log out before starting a new autoSignIn flow."
  });
};
var autoSignIn = initialAutoSignIn;
function resetAutoSignIn() {
  autoSignIn = initialAutoSignIn;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signUpHelpers.mjs
var MAX_AUTOSIGNIN_POLLING_MS = 3 * 60 * 1e3;
function debounce2(fun, delay2) {
  let timer2;
  return (args) => {
    if (!timer2) {
      fun(...args);
    }
    clearTimeout(timer2);
    timer2 = setTimeout(() => {
      timer2 = void 0;
    }, delay2);
  };
}
function handleAutoSignInWithLink(signInInput, resolve, reject) {
  const start = Date.now();
  const autoSignInPollingIntervalId = setInterval(async () => {
    const elapsedTime = Date.now() - start;
    const maxTime = MAX_AUTOSIGNIN_POLLING_MS;
    if (elapsedTime > maxTime) {
      clearInterval(autoSignInPollingIntervalId);
      setAutoSignInStarted(false);
      reject(new AuthError({
        name: AUTO_SIGN_IN_EXCEPTION,
        message: "The account was not confirmed on time.",
        recoverySuggestion: "Try to verify your account by clicking the link sent your email or phone and then login manually."
      }));
      resetAutoSignIn();
    } else {
      try {
        const signInOutput = await signIn(signInInput);
        if (signInOutput.nextStep.signInStep !== "CONFIRM_SIGN_UP") {
          resolve(signInOutput);
          clearInterval(autoSignInPollingIntervalId);
          setAutoSignInStarted(false);
          resetAutoSignIn();
        }
      } catch (error) {
        clearInterval(autoSignInPollingIntervalId);
        setAutoSignInStarted(false);
        reject(error);
        resetAutoSignIn();
      }
    }
  }, 5e3);
}
var debouncedAutoSignInWithLink = debounce2(handleAutoSignInWithLink, 300);
var debouncedAutoSignWithCodeOrUserConfirmed = debounce2(handleAutoSignInWithCodeOrUserConfirmed, 300);
var autoSignInStarted = false;
var usernameUsedForAutoSignIn;
function setUsernameUsedForAutoSignIn(username) {
  usernameUsedForAutoSignIn = username;
}
function setAutoSignInStarted(value) {
  if (value === false) {
    setUsernameUsedForAutoSignIn(void 0);
  }
  autoSignInStarted = value;
}
async function handleAutoSignInWithCodeOrUserConfirmed(signInInput, resolve, reject) {
  try {
    const output = await signIn(signInInput);
    resolve(output);
    resetAutoSignIn();
  } catch (error) {
    reject(error);
    resetAutoSignIn();
  }
}

// node_modules/@aws-amplify/auth/dist/esm/Errors.mjs
var logger10 = new ConsoleLogger("AuthError");
var authErrorMessages = {
  oauthSignInError: {
    message: AuthErrorStrings.OAUTH_ERROR,
    log: "Make sure Cognito Hosted UI has been configured correctly"
  },
  noConfig: {
    message: AuthErrorStrings.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
  },
  missingAuthConfig: {
    message: AuthErrorStrings.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
  },
  emptyUsername: {
    message: AuthErrorStrings.EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: AuthErrorStrings.INVALID_USERNAME
  },
  emptyPassword: {
    message: AuthErrorStrings.EMPTY_PASSWORD
  },
  emptyCode: {
    message: AuthErrorStrings.EMPTY_CODE
  },
  signUpError: {
    message: AuthErrorStrings.SIGN_UP_ERROR,
    log: "The first parameter should either be non-null string or object"
  },
  noMFA: {
    message: AuthErrorStrings.NO_MFA
  },
  invalidMFA: {
    message: AuthErrorStrings.INVALID_MFA
  },
  emptyChallengeResponse: {
    message: AuthErrorStrings.EMPTY_CHALLENGE
  },
  noUserSession: {
    message: AuthErrorStrings.NO_USER_SESSION
  },
  deviceConfig: {
    message: AuthErrorStrings.DEVICE_CONFIG
  },
  networkError: {
    message: AuthErrorStrings.NETWORK_ERROR
  },
  autoSignInError: {
    message: AuthErrorStrings.AUTOSIGNIN_ERROR
  },
  default: {
    message: AuthErrorStrings.DEFAULT_MSG
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/createOAuthError.mjs
var createOAuthError = (message, recoverySuggestion) => new AuthError({
  message: message ?? "An error has occurred during the oauth process.",
  name: AuthErrorCodes.OAuthSignInError,
  recoverySuggestion: recoverySuggestion ?? authErrorMessages.oauthSignInError.log
});

// node_modules/@aws-amplify/auth/dist/esm/types/Auth.mjs
var AuthErrorTypes;
(function(AuthErrorTypes2) {
  AuthErrorTypes2["NoConfig"] = "noConfig";
  AuthErrorTypes2["MissingAuthConfig"] = "missingAuthConfig";
  AuthErrorTypes2["EmptyUsername"] = "emptyUsername";
  AuthErrorTypes2["InvalidUsername"] = "invalidUsername";
  AuthErrorTypes2["EmptyPassword"] = "emptyPassword";
  AuthErrorTypes2["EmptyCode"] = "emptyCode";
  AuthErrorTypes2["SignUpError"] = "signUpError";
  AuthErrorTypes2["NoMFA"] = "noMFA";
  AuthErrorTypes2["InvalidMFA"] = "invalidMFA";
  AuthErrorTypes2["EmptyChallengeResponse"] = "emptyChallengeResponse";
  AuthErrorTypes2["NoUserSession"] = "noUserSession";
  AuthErrorTypes2["Default"] = "default";
  AuthErrorTypes2["DeviceConfig"] = "deviceConfig";
  AuthErrorTypes2["NetworkError"] = "networkError";
  AuthErrorTypes2["AutoSignInError"] = "autoSignInError";
  AuthErrorTypes2["OAuthSignInError"] = "oauthSignInError";
})(AuthErrorTypes || (AuthErrorTypes = {}));

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/validateState.mjs
var flowCancelledMessage = "`signInWithRedirect` has been canceled.";
var validationFailedMessage = "An error occurred while validating the state.";
var validationRecoverySuggestion = "Try to initiate an OAuth flow from Amplify";
var validateState = async (state) => {
  const savedState = await oAuthStore.loadOAuthState();
  const validatedState = state === savedState ? savedState : void 0;
  if (!validatedState) {
    throw new AuthError({
      name: AuthErrorTypes.OAuthSignInError,
      message: state === null ? flowCancelledMessage : validationFailedMessage,
      recoverySuggestion: state === null ? void 0 : validationRecoverySuggestion
    });
  }
  return validatedState;
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthFlow.mjs
var completeOAuthFlow = async ({ currentUrl, userAgentValue, clientId, redirectUri, responseType, domain, preferPrivateSession }) => {
  const urlParams = new AmplifyUrl(currentUrl);
  const error = urlParams.searchParams.get("error");
  const errorMessage = urlParams.searchParams.get("error_description");
  if (error) {
    throw createOAuthError(errorMessage ?? error);
  }
  if (responseType === "code") {
    return handleCodeFlow({
      currentUrl,
      userAgentValue,
      clientId,
      redirectUri,
      domain,
      preferPrivateSession
    });
  }
  return handleImplicitFlow({
    currentUrl,
    redirectUri,
    preferPrivateSession
  });
};
var handleCodeFlow = async ({ currentUrl, userAgentValue, clientId, redirectUri, domain, preferPrivateSession }) => {
  const url = new AmplifyUrl(currentUrl);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!code || !state) {
    throw createOAuthError("User cancelled OAuth flow.");
  }
  const validatedState = await validateState(state);
  const oAuthTokenEndpoint = "https://" + domain + "/oauth2/token";
  const codeVerifier = await oAuthStore.loadPKCE();
  const oAuthTokenBody = {
    grant_type: "authorization_code",
    code,
    client_id: clientId,
    redirect_uri: redirectUri,
    ...codeVerifier ? { code_verifier: codeVerifier } : {}
  };
  const body = Object.entries(oAuthTokenBody).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
  const { access_token, refresh_token: refreshToken, id_token, error, error_message: errorMessage, token_type, expires_in } = await (await fetch(oAuthTokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      [USER_AGENT_HEADER]: userAgentValue
    },
    body
  })).json();
  if (error) {
    throw createOAuthError(errorMessage ?? error);
  }
  const username = (access_token && decodeJWT(access_token).payload.username) ?? "username";
  await cacheCognitoTokens({
    username,
    AccessToken: access_token,
    IdToken: id_token,
    RefreshToken: refreshToken,
    TokenType: token_type,
    ExpiresIn: expires_in
  });
  return completeFlow({
    redirectUri,
    state: validatedState,
    preferPrivateSession
  });
};
var handleImplicitFlow = async ({ currentUrl, redirectUri, preferPrivateSession }) => {
  const url = new AmplifyUrl(currentUrl);
  const { id_token, access_token, state, token_type, expires_in, error_description, error } = (url.hash ?? "#").substring(1).split("&").map((pairings) => pairings.split("=")).reduce((accum, [k, v]) => ({ ...accum, [k]: v }), {
    id_token: void 0,
    access_token: void 0,
    state: void 0,
    token_type: void 0,
    expires_in: void 0,
    error_description: void 0,
    error: void 0
  });
  if (error) {
    throw createOAuthError(error_description ?? error);
  }
  if (!access_token) {
    throw createOAuthError("No access token returned from OAuth flow.");
  }
  const validatedState = await validateState(state);
  const username = (access_token && decodeJWT(access_token).payload.username) ?? "username";
  await cacheCognitoTokens({
    username,
    AccessToken: access_token,
    IdToken: id_token,
    TokenType: token_type,
    ExpiresIn: expires_in
  });
  return completeFlow({
    redirectUri,
    state: validatedState,
    preferPrivateSession
  });
};
var completeFlow = async ({ redirectUri, state, preferPrivateSession }) => {
  await oAuthStore.clearOAuthData();
  await oAuthStore.storeOAuthSignIn(true, preferPrivateSession);
  resolveAndClearInflightPromises();
  if (isCustomState(state)) {
    Hub.dispatch("auth", {
      event: "customOAuthState",
      data: urlSafeDecode(getCustomState(state))
    }, "Auth", AMPLIFY_SYMBOL);
  }
  Hub.dispatch("auth", { event: "signInWithRedirect" }, "Auth", AMPLIFY_SYMBOL);
  await dispatchSignedInHubEvent();
  clearHistory(redirectUri);
};
var isCustomState = (state) => {
  return /-/.test(state);
};
var getCustomState = (state) => {
  return state.split("-").splice(1).join("-");
};
var clearHistory = (redirectUri) => {
  if (typeof window !== "undefined" && typeof window.history !== "undefined") {
    window.history.replaceState(window.history.state, "", redirectUri);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs
function getRedirectUrl2(redirects) {
  const redirectUrlFromTheSameOrigin = (redirects == null ? void 0 : redirects.find(isSameOriginAndPathName)) ?? (redirects == null ? void 0 : redirects.find(isTheSameDomain));
  const redirectUrlFromDifferentOrigin = (redirects == null ? void 0 : redirects.find(isHttps)) ?? (redirects == null ? void 0 : redirects.find(isHttp));
  if (redirectUrlFromTheSameOrigin) {
    return redirectUrlFromTheSameOrigin;
  } else if (redirectUrlFromDifferentOrigin) {
    throw invalidOriginException;
  }
  throw invalidRedirectException;
}
var isSameOriginAndPathName = (redirect) => redirect.startsWith(String(window.location.origin + window.location.pathname));
var isTheSameDomain = (redirect) => redirect.includes(String(window.location.hostname));
var isHttp = (redirect) => redirect.startsWith("http://");
var isHttps = (redirect) => redirect.startsWith("https://");

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleFailure.mjs
var handleFailure = async (error) => {
  resolveAndClearInflightPromises();
  await oAuthStore.clearOAuthInflightData();
  Hub.dispatch("auth", { event: "signInWithRedirect_failure", data: { error } }, "Auth", AMPLIFY_SYMBOL);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/attemptCompleteOAuthFlow.mjs
var attemptCompleteOAuthFlow = async (authConfig) => {
  try {
    assertTokenProviderConfig(authConfig);
    assertOAuthConfig(authConfig);
    oAuthStore.setAuthConfig(authConfig);
  } catch (_) {
    return;
  }
  if (!await oAuthStore.loadOAuthInFlight()) {
    return;
  }
  try {
    const currentUrl = window.location.href;
    const { loginWith, userPoolClientId } = authConfig;
    const { domain, redirectSignIn, responseType } = loginWith.oauth;
    const redirectUri = getRedirectUrl2(redirectSignIn);
    await completeOAuthFlow({
      currentUrl,
      clientId: userPoolClientId,
      domain,
      redirectUri,
      responseType,
      userAgentValue: getAuthUserAgentValue(AuthAction.SignInWithRedirect)
    });
  } catch (err) {
    await handleFailure(err);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/enableOAuthListener.mjs
isBrowser() && (() => {
  Amplify[ADD_OAUTH_LISTENER](attemptCompleteOAuthFlow);
})();

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/generateCodeVerifier.mjs
var import_sha256_js15 = __toESM(require_build2(), 1);

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs
var import_sha256_js16 = __toESM(require_build2(), 1);
var logger11 = new ConsoleLogger("Auth");

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/types.mjs
var IdentityIdStorageKeys = {
  identityId: "identityId"
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdStore.mjs
var logger12 = new ConsoleLogger("DefaultIdentityIdStore");
var DefaultIdentityIdStore = class {
  setAuthConfig(authConfigParam) {
    assertIdentityPoolIdConfig(authConfigParam.Cognito);
    this.authConfig = authConfigParam;
    this._authKeys = createKeysForAuthStorage3("Cognito", authConfigParam.Cognito.identityPoolId);
  }
  constructor(keyValueStorage) {
    this._authKeys = {};
    this.keyValueStorage = keyValueStorage;
  }
  async loadIdentityId() {
    var _a;
    assertIdentityPoolIdConfig((_a = this.authConfig) == null ? void 0 : _a.Cognito);
    try {
      if (this._primaryIdentityId) {
        return {
          id: this._primaryIdentityId,
          type: "primary"
        };
      } else {
        const storedIdentityId = await this.keyValueStorage.getItem(this._authKeys.identityId);
        if (storedIdentityId) {
          return {
            id: storedIdentityId,
            type: "guest"
          };
        }
        return null;
      }
    } catch (err) {
      logger12.log("Error getting stored IdentityId.", err);
      return null;
    }
  }
  async storeIdentityId(identity2) {
    var _a;
    assertIdentityPoolIdConfig((_a = this.authConfig) == null ? void 0 : _a.Cognito);
    if (identity2.type === "guest") {
      this.keyValueStorage.setItem(this._authKeys.identityId, identity2.id);
      this._primaryIdentityId = void 0;
    } else {
      this._primaryIdentityId = identity2.id;
      this.keyValueStorage.removeItem(this._authKeys.identityId);
    }
  }
  async clearIdentityId() {
    this._primaryIdentityId = void 0;
    await this.keyValueStorage.removeItem(this._authKeys.identityId);
  }
};
var createKeysForAuthStorage3 = (provider, identifier) => {
  return getAuthStorageKeys(IdentityIdStorageKeys)(`com.amplify.${provider}`, identifier);
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs
function formLoginsMap(idToken) {
  const issuer = decodeJWT(idToken).payload.iss;
  const res = {};
  if (!issuer) {
    throw new AuthError({
      name: "InvalidIdTokenException",
      message: "Invalid Idtoken."
    });
  }
  const domainName = issuer.replace(/(^\w+:|^)\/\//, "");
  res[domainName] = idToken;
  return res;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdProvider.mjs
var logger13 = new ConsoleLogger("CognitoIdentityIdProvider");
async function cognitoIdentityIdProvider({ tokens, authConfig, identityIdStore }) {
  identityIdStore.setAuthConfig({ Cognito: authConfig });
  let identityId = await identityIdStore.loadIdentityId();
  if (tokens) {
    if (identityId && identityId.type === "primary") {
      return identityId.id;
    } else {
      const logins = tokens.idToken ? formLoginsMap(tokens.idToken.toString()) : {};
      const generatedIdentityId = await generateIdentityId(logins, authConfig);
      if (identityId && identityId.id === generatedIdentityId) {
        logger13.debug(`The guest identity ${identityId.id} has become the primary identity.`);
      }
      identityId = {
        id: generatedIdentityId,
        type: "primary"
      };
    }
  } else {
    if (identityId && identityId.type === "guest") {
      return identityId.id;
    } else {
      identityId = {
        id: await generateIdentityId({}, authConfig),
        type: "guest"
      };
    }
  }
  identityIdStore.storeIdentityId(identityId);
  return identityId.id;
}
async function generateIdentityId(logins, authConfig) {
  const identityPoolId = authConfig == null ? void 0 : authConfig.identityPoolId;
  const region = getRegionFromIdentityPoolId(identityPoolId);
  const idResult = (
    // for a first-time user, this will return a brand new identity
    // for a returning user, this will retrieve the previous identity assocaited with the logins
    (await getId({
      region
    }, {
      IdentityPoolId: identityPoolId,
      Logins: logins
    })).IdentityId
  );
  if (!idResult) {
    throw new AuthError({
      name: "GetIdResponseException",
      message: "Received undefined response from getId operation",
      recoverySuggestion: "Make sure to pass a valid identityPoolId in the configuration."
    });
  }
  return idResult;
}

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/credentialsProvider.mjs
var logger14 = new ConsoleLogger("CognitoCredentialsProvider");
var CREDENTIALS_TTL = 50 * 60 * 1e3;
var CognitoAWSCredentialsAndIdentityIdProvider = class {
  constructor(identityIdStore) {
    this._nextCredentialsRefresh = 0;
    this._identityIdStore = identityIdStore;
  }
  async clearCredentialsAndIdentityId() {
    logger14.debug("Clearing out credentials and identityId");
    this._credentialsAndIdentityId = void 0;
    await this._identityIdStore.clearIdentityId();
  }
  async clearCredentials() {
    logger14.debug("Clearing out in-memory credentials");
    this._credentialsAndIdentityId = void 0;
  }
  async getCredentialsAndIdentityId(getCredentialsOptions) {
    const isAuthenticated2 = getCredentialsOptions.authenticated;
    const { tokens } = getCredentialsOptions;
    const { authConfig } = getCredentialsOptions;
    try {
      assertIdentityPoolIdConfig(authConfig == null ? void 0 : authConfig.Cognito);
    } catch {
      return;
    }
    if (!isAuthenticated2 && !authConfig.Cognito.allowGuestAccess) {
      return;
    }
    const { forceRefresh } = getCredentialsOptions;
    const tokenHasChanged = this.hasTokenChanged(tokens);
    const identityId = await cognitoIdentityIdProvider({
      tokens,
      authConfig: authConfig.Cognito,
      identityIdStore: this._identityIdStore
    });
    if (forceRefresh || tokenHasChanged) {
      this.clearCredentials();
    }
    if (!isAuthenticated2) {
      return this.getGuestCredentials(identityId, authConfig.Cognito);
    } else {
      assertIdTokenInAuthTokens(tokens);
      return this.credsForOIDCTokens(authConfig.Cognito, tokens, identityId);
    }
  }
  async getGuestCredentials(identityId, authConfig) {
    if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === false) {
      logger14.info("returning stored credentials as they neither past TTL nor expired.");
      return this._credentialsAndIdentityId;
    }
    this.clearCredentials();
    const region = getRegionFromIdentityPoolId(authConfig.identityPoolId);
    const clientResult = await getCredentialsForIdentity({ region }, {
      IdentityId: identityId
    });
    if (clientResult.Credentials && clientResult.Credentials.AccessKeyId && clientResult.Credentials.SecretKey) {
      this._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + CREDENTIALS_TTL;
      const res = {
        credentials: {
          accessKeyId: clientResult.Credentials.AccessKeyId,
          secretAccessKey: clientResult.Credentials.SecretKey,
          sessionToken: clientResult.Credentials.SessionToken,
          expiration: clientResult.Credentials.Expiration
        },
        identityId
      };
      const identityIdRes = clientResult.IdentityId;
      if (identityIdRes) {
        res.identityId = identityIdRes;
        this._identityIdStore.storeIdentityId({
          id: identityIdRes,
          type: "guest"
        });
      }
      this._credentialsAndIdentityId = {
        ...res,
        isAuthenticatedCreds: false
      };
      return res;
    } else {
      throw new AuthError({
        name: "CredentialsNotFoundException",
        message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
      });
    }
  }
  async credsForOIDCTokens(authConfig, authTokens, identityId) {
    var _a;
    if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === true) {
      logger14.debug("returning stored credentials as they neither past TTL nor expired.");
      return this._credentialsAndIdentityId;
    }
    this.clearCredentials();
    const logins = authTokens.idToken ? formLoginsMap(authTokens.idToken.toString()) : {};
    const region = getRegionFromIdentityPoolId(authConfig.identityPoolId);
    const clientResult = await getCredentialsForIdentity({ region }, {
      IdentityId: identityId,
      Logins: logins
    });
    if (clientResult.Credentials && clientResult.Credentials.AccessKeyId && clientResult.Credentials.SecretKey) {
      const res = {
        credentials: {
          accessKeyId: clientResult.Credentials.AccessKeyId,
          secretAccessKey: clientResult.Credentials.SecretKey,
          sessionToken: clientResult.Credentials.SessionToken,
          expiration: clientResult.Credentials.Expiration
        },
        identityId
      };
      this._credentialsAndIdentityId = {
        ...res,
        isAuthenticatedCreds: true,
        associatedIdToken: (_a = authTokens.idToken) == null ? void 0 : _a.toString()
      };
      this._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + CREDENTIALS_TTL;
      const identityIdRes = clientResult.IdentityId;
      if (identityIdRes) {
        res.identityId = identityIdRes;
        this._identityIdStore.storeIdentityId({
          id: identityIdRes,
          type: "primary"
        });
      }
      return res;
    } else {
      throw new AuthError({
        name: "CredentialsException",
        message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
      });
    }
  }
  isPastTTL() {
    return this._nextCredentialsRefresh === void 0 ? true : this._nextCredentialsRefresh <= Date.now();
  }
  hasTokenChanged(tokens) {
    var _a, _b;
    return !!tokens && !!((_a = this._credentialsAndIdentityId) == null ? void 0 : _a.associatedIdToken) && ((_b = tokens.idToken) == null ? void 0 : _b.toString()) !== this._credentialsAndIdentityId.associatedIdToken;
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs
var cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(defaultStorage));

// node_modules/aws-amplify/dist/esm/initSingleton.mjs
var DefaultAmplify = {
  /**
   * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
   *
   * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
   * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
   * @param libraryOptions The {@link LibraryOptions} additional options for the library.
   *
   * @example
   * import config from './amplifyconfiguration.json';
   *
   * Amplify.configure(config);
   */
  configure(resourceConfig, libraryOptions) {
    const resolvedResourceConfig = parseAmplifyConfig(resourceConfig);
    if (!resolvedResourceConfig.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (libraryOptions == null ? void 0 : libraryOptions.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (!Amplify.libraryOptions.Auth) {
      cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
      cognitoUserPoolsTokenProvider.setKeyValueStorage(
        // TODO: allow configure with a public interface
        (libraryOptions == null ? void 0 : libraryOptions.ssr) ? new CookieStorage({ sameSite: "lax" }) : defaultStorage
      );
      Amplify.configure(resolvedResourceConfig, {
        ...libraryOptions,
        Auth: {
          tokenProvider: cognitoUserPoolsTokenProvider,
          credentialsProvider: cognitoCredentialsProvider
        }
      });
      return;
    }
    if (libraryOptions) {
      if (libraryOptions.ssr !== void 0) {
        cognitoUserPoolsTokenProvider.setKeyValueStorage(
          // TODO: allow configure with a public interface
          libraryOptions.ssr ? new CookieStorage({ sameSite: "lax" }) : defaultStorage
        );
      }
      Amplify.configure(resolvedResourceConfig, {
        Auth: Amplify.libraryOptions.Auth,
        ...libraryOptions
      });
      return;
    }
    Amplify.configure(resolvedResourceConfig);
  },
  /**
   * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
   * `Amplify.configure`.
   *
   * @returns An {@link ResourcesConfig} object.
   */
  getConfig() {
    return Amplify.getConfig();
  }
};
export {
  DefaultAmplify as Amplify
};
/*! Bundled license information:

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

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)

@aws-amplify/core/dist/esm/Mutex/Mutex.mjs:
  (*!
   * The MIT License (MIT)
   *
   * Copyright (c) 2016 Christian Speckner <cnspeckn@googlemail.com>
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
*/
//# sourceMappingURL=aws-amplify.js.map
