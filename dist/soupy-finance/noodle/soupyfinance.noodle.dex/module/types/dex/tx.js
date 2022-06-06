"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateOrderResponse = exports.MsgCreateOrder = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "soupyfinance.noodle.dex";
const baseMsgCreateOrder = {
    creator: "",
    market: "",
    side: false,
    orderType: "",
    price: "",
    quantity: "",
    flags: "",
};
exports.MsgCreateOrder = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.market !== "") {
            writer.uint32(18).string(message.market);
        }
        if (message.side === true) {
            writer.uint32(24).bool(message.side);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        if (message.price !== "") {
            writer.uint32(42).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(50).string(message.quantity);
        }
        for (const v of message.flags) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateOrder);
        message.flags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.market = reader.string();
                    break;
                case 3:
                    message.side = reader.bool();
                    break;
                case 4:
                    message.orderType = reader.string();
                    break;
                case 5:
                    message.price = reader.string();
                    break;
                case 6:
                    message.quantity = reader.string();
                    break;
                case 7:
                    message.flags.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateOrder);
        message.flags = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        if (object.orderType !== undefined && object.orderType !== null) {
            message.orderType = String(object.orderType);
        }
        else {
            message.orderType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = String(object.quantity);
        }
        else {
            message.quantity = "";
        }
        if (object.flags !== undefined && object.flags !== null) {
            for (const e of object.flags) {
                message.flags.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.market !== undefined && (obj.market = message.market);
        message.side !== undefined && (obj.side = message.side);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        if (message.flags) {
            obj.flags = message.flags.map((e) => e);
        }
        else {
            obj.flags = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateOrder);
        message.flags = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        if (object.orderType !== undefined && object.orderType !== null) {
            message.orderType = object.orderType;
        }
        else {
            message.orderType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = "";
        }
        if (object.flags !== undefined && object.flags !== null) {
            for (const e of object.flags) {
                message.flags.push(e);
            }
        }
        return message;
    },
};
const baseMsgCreateOrderResponse = {};
exports.MsgCreateOrderResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateOrderResponse);
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
        const message = Object.assign({}, baseMsgCreateOrderResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateOrderResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateOrder(request) {
        const data = exports.MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.dex.Msg", "CreateOrder", data);
        return promise.then((data) => exports.MsgCreateOrderResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
