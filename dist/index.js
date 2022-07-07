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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.events = exports.tx = exports.query = exports.setWsAddr = exports.setRpcAddr = exports.setRestAddr = exports.modules = void 0;
const modules_1 = __importDefault(require("./modules"));
exports.modules = modules_1.default;
const query_1 = __importDefault(require("./query"));
exports.query = query_1.default;
const tx_1 = __importDefault(require("./tx"));
exports.tx = tx_1.default;
const events_1 = __importDefault(require("./events"));
exports.events = events_1.default;
const types = __importStar(require("./types"));
exports.types = types;
async function setRestAddr(_restAddr) {
    if (_restAddr.length == 0)
        throw new Error("Invalid rest address");
    if (query_1.default.props.restAddr == _restAddr)
        return;
    for (let moduleName in modules_1.default) {
        let module = modules_1.default[moduleName];
        module.query = await module.queryGen({ addr: _restAddr });
    }
    query_1.default.props.restAddr = _restAddr;
}
exports.setRestAddr = setRestAddr;
async function setRpcAddr(_rpcAddr) {
    if (_rpcAddr.length == 0)
        throw new Error("Invalid RPC address");
    if (tx_1.default.props.rpcAddr == _rpcAddr)
        return;
    if (tx_1.default.account.wallet) {
        for (let moduleName in modules_1.default) {
            let module = modules_1.default[moduleName];
            module.tx = await module.txGen(tx_1.default.account.wallet, { addr: _rpcAddr });
        }
    }
    tx_1.default.props.rpcAddr = _rpcAddr;
}
exports.setRpcAddr = setRpcAddr;
async function setWsAddr(_wsAddr) {
    if (_wsAddr.length == 0)
        throw new Error("Invalid websocket address");
    if (events_1.default.props.wsAddr == _wsAddr)
        return;
    events_1.default.initSocket(_wsAddr);
}
exports.setWsAddr = setWsAddr;
