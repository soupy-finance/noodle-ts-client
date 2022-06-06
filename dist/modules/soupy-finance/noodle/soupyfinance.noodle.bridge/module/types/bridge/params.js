"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "soupyfinance.noodle.bridge";
const baseParams = { chainContracts: "" };
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.chainContracts !== "") {
            writer.uint32(10).string(message.chainContracts);
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
                    message.chainContracts = reader.string();
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
        if (object.chainContracts !== undefined && object.chainContracts !== null) {
            message.chainContracts = String(object.chainContracts);
        }
        else {
            message.chainContracts = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chainContracts !== undefined &&
            (obj.chainContracts = message.chainContracts);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.chainContracts !== undefined && object.chainContracts !== null) {
            message.chainContracts = object.chainContracts;
        }
        else {
            message.chainContracts = "";
        }
        return message;
    },
};
