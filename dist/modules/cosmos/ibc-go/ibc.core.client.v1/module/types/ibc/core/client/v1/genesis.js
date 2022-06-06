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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = __importStar(require("long"));
const minimal_1 = require("protobufjs/minimal");
const client_1 = require("../../../../ibc/core/client/v1/client");
exports.protobufPackage = "ibc.core.client.v1";
const baseGenesisState = {
    create_localhost: false,
    next_client_sequence: 0,
};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.clients) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clients_consensus) {
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clients_metadata) {
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.create_localhost === true) {
            writer.uint32(40).bool(message.create_localhost);
        }
        if (message.next_client_sequence !== 0) {
            writer.uint32(48).uint64(message.next_client_sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clients_consensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clients_metadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.create_localhost = reader.bool();
                    break;
                case 6:
                    message.next_client_sequence = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromJSON(e));
            }
        }
        if (object.clients_consensus !== undefined &&
            object.clients_consensus !== null) {
            for (const e of object.clients_consensus) {
                message.clients_consensus.push(client_1.ClientConsensusStates.fromJSON(e));
            }
        }
        if (object.clients_metadata !== undefined &&
            object.clients_metadata !== null) {
            for (const e of object.clients_metadata) {
                message.clients_metadata.push(exports.IdentifiedGenesisMetadata.fromJSON(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.create_localhost !== undefined &&
            object.create_localhost !== null) {
            message.create_localhost = Boolean(object.create_localhost);
        }
        else {
            message.create_localhost = false;
        }
        if (object.next_client_sequence !== undefined &&
            object.next_client_sequence !== null) {
            message.next_client_sequence = Number(object.next_client_sequence);
        }
        else {
            message.next_client_sequence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map((e) => e ? client_1.ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map((e) => e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        message.create_localhost !== undefined &&
            (obj.create_localhost = message.create_localhost);
        message.next_client_sequence !== undefined &&
            (obj.next_client_sequence = message.next_client_sequence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromPartial(e));
            }
        }
        if (object.clients_consensus !== undefined &&
            object.clients_consensus !== null) {
            for (const e of object.clients_consensus) {
                message.clients_consensus.push(client_1.ClientConsensusStates.fromPartial(e));
            }
        }
        if (object.clients_metadata !== undefined &&
            object.clients_metadata !== null) {
            for (const e of object.clients_metadata) {
                message.clients_metadata.push(exports.IdentifiedGenesisMetadata.fromPartial(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.create_localhost !== undefined &&
            object.create_localhost !== null) {
            message.create_localhost = object.create_localhost;
        }
        else {
            message.create_localhost = false;
        }
        if (object.next_client_sequence !== undefined &&
            object.next_client_sequence !== null) {
            message.next_client_sequence = object.next_client_sequence;
        }
        else {
            message.next_client_sequence = 0;
        }
        return message;
    },
};
const baseGenesisMetadata = {};
exports.GenesisMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisMetadata };
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisMetadata };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    },
};
const baseIdentifiedGenesisMetadata = { client_id: "" };
exports.IdentifiedGenesisMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.client_metadata) {
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseIdentifiedGenesisMetadata,
        };
        message.client_metadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_metadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
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
            ...baseIdentifiedGenesisMetadata,
        };
        message.client_metadata = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.client_metadata !== undefined &&
            object.client_metadata !== null) {
            for (const e of object.client_metadata) {
                message.client_metadata.push(exports.GenesisMetadata.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map((e) => e ? exports.GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseIdentifiedGenesisMetadata,
        };
        message.client_metadata = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.client_metadata !== undefined &&
            object.client_metadata !== null) {
            for (const e of object.client_metadata) {
                message.client_metadata.push(exports.GenesisMetadata.fromPartial(e));
            }
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
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
