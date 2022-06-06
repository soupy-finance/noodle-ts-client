"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "soupyfinance.noodle.oracle";
const baseParams = { assets: "" };
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.assets !== "") {
            writer.uint32(10).string(message.assets);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        if (object.assets !== undefined && object.assets !== null) {
            message.assets = String(object.assets);
        }
        else {
            message.assets = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.assets !== undefined && (obj.assets = message.assets);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.assets !== undefined && object.assets !== null) {
            message.assets = object.assets;
        }
        else {
            message.assets = "";
        }
        return message;
    },
};
