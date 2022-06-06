"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgWithdrawResponse = exports.MsgWithdraw = exports.MsgObserveDepositResponse = exports.MsgObserveDeposit = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "soupyfinance.noodle.bridge";
const baseMsgObserveDeposit = {
    creator: "",
    chainId: "",
    depositor: "",
    depositId: "",
    quantity: "",
    asset: "",
};
exports.MsgObserveDeposit = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.depositId !== "") {
            writer.uint32(34).string(message.depositId);
        }
        if (message.quantity !== "") {
            writer.uint32(42).string(message.quantity);
        }
        if (message.asset !== "") {
            writer.uint32(50).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgObserveDeposit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
                    message.depositId = reader.string();
                    break;
                case 5:
                    message.quantity = reader.string();
                    break;
                case 6:
                    message.asset = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgObserveDeposit);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = "";
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = String(object.depositor);
        }
        else {
            message.depositor = "";
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = String(object.depositId);
        }
        else {
            message.depositId = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = String(object.quantity);
        }
        else {
            message.quantity = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.depositId !== undefined && (obj.depositId = message.depositId);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgObserveDeposit);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = "";
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        else {
            message.depositor = "";
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = object.depositId;
        }
        else {
            message.depositId = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        return message;
    },
};
const baseMsgObserveDepositResponse = {};
exports.MsgObserveDepositResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgObserveDepositResponse);
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
        const message = Object.assign({}, baseMsgObserveDepositResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgObserveDepositResponse);
        return message;
    },
};
const baseMsgWithdraw = {
    creator: "",
    asset: "",
    quantity: "",
    address: "",
    chainId: "",
};
exports.MsgWithdraw = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.quantity !== "") {
            writer.uint32(26).string(message.quantity);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.chainId !== "") {
            writer.uint32(42).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdraw);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
                    message.quantity = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.chainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgWithdraw);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = String(object.quantity);
        }
        else {
            message.quantity = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.asset !== undefined && (obj.asset = message.asset);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.address !== undefined && (obj.address = message.address);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgWithdraw);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = "";
        }
        return message;
    },
};
const baseMsgWithdrawResponse = {};
exports.MsgWithdrawResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdrawResponse);
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
        const message = Object.assign({}, baseMsgWithdrawResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgWithdrawResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ObserveDeposit(request) {
        const data = exports.MsgObserveDeposit.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.bridge.Msg", "ObserveDeposit", data);
        return promise.then((data) => exports.MsgObserveDepositResponse.decode(new minimal_1.Reader(data)));
    }
    Withdraw(request) {
        const data = exports.MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("soupyfinance.noodle.bridge.Msg", "Withdraw", data);
        return promise.then((data) => exports.MsgWithdrawResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
