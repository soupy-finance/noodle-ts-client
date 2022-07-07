"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryOpenOrdersResponse = exports.QueryOpenOrdersRequest = exports.QueryBooksResponse = exports.QueryBooksRequest = exports.QueryBookResponse = exports.QueryBookRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const params_1 = require("../dex/params");
exports.protobufPackage = "soupyfinance.noodle.dex";
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryBookRequest = { market: "", side: false };
exports.QueryBookRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.market !== "") {
            writer.uint32(10).string(message.market);
        }
        if (message.side === true) {
            writer.uint32(16).bool(message.side);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBookRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = reader.string();
                    break;
                case 2:
                    message.side = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryBookRequest };
        if (object.market !== undefined && object.market !== null) {
            message.market = String(object.market);
        }
        else {
            message.market = "";
        }
        if (object.side !== undefined && object.side !== null) {
            message.side = Boolean(object.side);
        }
        else {
            message.side = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market);
        message.side !== undefined && (obj.side = message.side);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryBookRequest };
        if (object.market !== undefined && object.market !== null) {
            message.market = object.market;
        }
        else {
            message.market = "";
        }
        if (object.side !== undefined && object.side !== null) {
            message.side = object.side;
        }
        else {
            message.side = false;
        }
        return message;
    },
};
const baseQueryBookResponse = { pure: "", amm: "" };
exports.QueryBookResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pure !== "") {
            writer.uint32(10).string(message.pure);
        }
        if (message.amm !== "") {
            writer.uint32(18).string(message.amm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pure = reader.string();
                    break;
                case 2:
                    message.amm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryBookResponse };
        if (object.pure !== undefined && object.pure !== null) {
            message.pure = String(object.pure);
        }
        else {
            message.pure = "";
        }
        if (object.amm !== undefined && object.amm !== null) {
            message.amm = String(object.amm);
        }
        else {
            message.amm = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pure !== undefined && (obj.pure = message.pure);
        message.amm !== undefined && (obj.amm = message.amm);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryBookResponse };
        if (object.pure !== undefined && object.pure !== null) {
            message.pure = object.pure;
        }
        else {
            message.pure = "";
        }
        if (object.amm !== undefined && object.amm !== null) {
            message.amm = object.amm;
        }
        else {
            message.amm = "";
        }
        return message;
    },
};
const baseQueryBooksRequest = { market: "" };
exports.QueryBooksRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.market !== "") {
            writer.uint32(10).string(message.market);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBooksRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryBooksRequest };
        if (object.market !== undefined && object.market !== null) {
            message.market = String(object.market);
        }
        else {
            message.market = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryBooksRequest };
        if (object.market !== undefined && object.market !== null) {
            message.market = object.market;
        }
        else {
            message.market = "";
        }
        return message;
    },
};
const baseQueryBooksResponse = { bids: "", asks: "", amm: "" };
exports.QueryBooksResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.bids !== "") {
            writer.uint32(10).string(message.bids);
        }
        if (message.asks !== "") {
            writer.uint32(18).string(message.asks);
        }
        if (message.amm !== "") {
            writer.uint32(26).string(message.amm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBooksResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids = reader.string();
                    break;
                case 2:
                    message.asks = reader.string();
                    break;
                case 3:
                    message.amm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryBooksResponse };
        if (object.bids !== undefined && object.bids !== null) {
            message.bids = String(object.bids);
        }
        else {
            message.bids = "";
        }
        if (object.asks !== undefined && object.asks !== null) {
            message.asks = String(object.asks);
        }
        else {
            message.asks = "";
        }
        if (object.amm !== undefined && object.amm !== null) {
            message.amm = String(object.amm);
        }
        else {
            message.amm = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bids !== undefined && (obj.bids = message.bids);
        message.asks !== undefined && (obj.asks = message.asks);
        message.amm !== undefined && (obj.amm = message.amm);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryBooksResponse };
        if (object.bids !== undefined && object.bids !== null) {
            message.bids = object.bids;
        }
        else {
            message.bids = "";
        }
        if (object.asks !== undefined && object.asks !== null) {
            message.asks = object.asks;
        }
        else {
            message.asks = "";
        }
        if (object.amm !== undefined && object.amm !== null) {
            message.amm = object.amm;
        }
        else {
            message.amm = "";
        }
        return message;
    },
};
const baseQueryOpenOrdersRequest = { account: "" };
exports.QueryOpenOrdersRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryOpenOrdersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryOpenOrdersRequest };
        if (object.account !== undefined && object.account !== null) {
            message.account = String(object.account);
        }
        else {
            message.account = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryOpenOrdersRequest };
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        else {
            message.account = "";
        }
        return message;
    },
};
const baseQueryOpenOrdersResponse = { orders: "" };
exports.QueryOpenOrdersResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.orders !== "") {
            writer.uint32(10).string(message.orders);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryOpenOrdersResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryOpenOrdersResponse,
        };
        if (object.orders !== undefined && object.orders !== null) {
            message.orders = String(object.orders);
        }
        else {
            message.orders = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.orders !== undefined && (obj.orders = message.orders);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryOpenOrdersResponse,
        };
        if (object.orders !== undefined && object.orders !== null) {
            message.orders = object.orders;
        }
        else {
            message.orders = "";
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.dex.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.Reader(data)));
    }
    Book(request) {
        const data = exports.QueryBookRequest.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.dex.Query", "Book", data);
        return promise.then((data) => exports.QueryBookResponse.decode(new minimal_1.Reader(data)));
    }
    Books(request) {
        const data = exports.QueryBooksRequest.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.dex.Query", "Books", data);
        return promise.then((data) => exports.QueryBooksResponse.decode(new minimal_1.Reader(data)));
    }
    OpenOrders(request) {
        const data = exports.QueryOpenOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.dex.Query", "OpenOrders", data);
        return promise.then((data) => exports.QueryOpenOrdersResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
