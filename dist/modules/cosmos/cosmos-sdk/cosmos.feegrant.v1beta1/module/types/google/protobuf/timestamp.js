"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = __importStar(require("long"));
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "google.protobuf";
const baseTimestamp = { seconds: 0, nanos: 0 };
exports.Timestamp = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.seconds !== 0) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimestamp };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = longToNumber(reader.int64());
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTimestamp };
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = Number(object.seconds);
        }
        else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = Number(object.nanos);
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = message.seconds);
        message.nanos !== undefined && (obj.nanos = message.nanos);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTimestamp };
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = object.seconds;
        }
        else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = object.nanos;
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
