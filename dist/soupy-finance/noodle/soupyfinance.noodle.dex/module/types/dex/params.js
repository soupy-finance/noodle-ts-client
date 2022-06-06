"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "soupyfinance.noodle.dex";
const baseParams = { markets: "" };
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.markets !== "") {
            writer.uint32(10).string(message.markets);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.markets !== undefined && object.markets !== null) {
            message.markets = String(object.markets);
        }
        else {
            message.markets = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.markets !== undefined && (obj.markets = message.markets);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.markets !== undefined && object.markets !== null) {
            message.markets = object.markets;
        }
        else {
            message.markets = "";
        }
        return message;
    },
};
