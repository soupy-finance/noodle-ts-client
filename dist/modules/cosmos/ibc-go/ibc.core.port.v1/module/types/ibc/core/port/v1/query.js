"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAppVersionResponse = exports.QueryAppVersionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const channel_1 = require("../../../../ibc/core/channel/v1/channel");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "ibc.core.port.v1";
const baseQueryAppVersionRequest = {
    port_id: "",
    connection_id: "",
    ordering: 0,
    proposed_version: "",
};
exports.QueryAppVersionRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.ordering !== 0) {
            writer.uint32(24).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            channel_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.proposed_version !== "") {
            writer.uint32(42).string(message.proposed_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAppVersionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.ordering = reader.int32();
                    break;
                case 4:
                    message.counterparty = channel_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proposed_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAppVersionRequest);
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = String(object.port_id);
        }
        else {
            message.port_id = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = (0, channel_1.orderFromJSON)(object.ordering);
        }
        else {
            message.ordering = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = channel_1.Counterparty.fromJSON(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.proposed_version !== undefined &&
            object.proposed_version !== null) {
            message.proposed_version = String(object.proposed_version);
        }
        else {
            message.proposed_version = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.ordering !== undefined &&
            (obj.ordering = (0, channel_1.orderToJSON)(message.ordering));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? channel_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.proposed_version !== undefined &&
            (obj.proposed_version = message.proposed_version);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAppVersionRequest);
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        else {
            message.port_id = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = object.ordering;
        }
        else {
            message.ordering = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = channel_1.Counterparty.fromPartial(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.proposed_version !== undefined &&
            object.proposed_version !== null) {
            message.proposed_version = object.proposed_version;
        }
        else {
            message.proposed_version = "";
        }
        return message;
    },
};
const baseQueryAppVersionResponse = { port_id: "", version: "" };
exports.QueryAppVersionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAppVersionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAppVersionResponse);
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = String(object.port_id);
        }
        else {
            message.port_id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAppVersionResponse);
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        else {
            message.port_id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    AppVersion(request) {
        const data = exports.QueryAppVersionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
        return promise.then((data) => exports.QueryAppVersionResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
