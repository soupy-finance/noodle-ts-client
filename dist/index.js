"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.tx = exports.query = exports.setWsAddr = exports.setWallet = exports.setRpcAddr = exports.setRestAddr = exports.modules = void 0;
const modules_1 = __importDefault(require("./modules"));
exports.modules = modules_1.default;
const query_1 = __importDefault(require("./query"));
exports.query = query_1.default;
const ws_1 = __importDefault(require("./ws"));
const tx_1 = __importDefault(require("./tx"));
exports.tx = tx_1.default;
const events_1 = __importDefault(require("./events"));
exports.events = events_1.default;
var restAddr;
var rpcAddr;
var wallet;
var socket;
async function setRestAddr(_restAddr) {
    if (_restAddr.length == 0)
        throw new Error("Invalid rest address");
    if (restAddr == _restAddr)
        return;
    for (let moduleName in modules_1.default) {
        let module = modules_1.default[moduleName];
        module.query = await module.queryGen({ addr: _restAddr });
    }
    restAddr = _restAddr;
}
exports.setRestAddr = setRestAddr;
async function setRpcAddr(_rpcAddr) {
    if (_rpcAddr.length == 0)
        throw new Error("Invalid RPC address");
    if (rpcAddr == _rpcAddr)
        return;
    if (wallet) {
        for (let moduleName in modules_1.default) {
            let module = modules_1.default[moduleName];
            module.tx = await module.txGen(wallet, { addr: _rpcAddr });
        }
    }
    rpcAddr = _rpcAddr;
}
exports.setRpcAddr = setRpcAddr;
async function setWallet(_wallet) {
    if (_wallet == null)
        throw new Error("Invalid wallet");
    if (wallet == _wallet)
        return;
    if (_wallet && rpcAddr) {
        for (let moduleName in modules_1.default) {
            let module = modules_1.default[moduleName];
            module.tx = await module.txGen(wallet, { addr: rpcAddr });
        }
    }
    wallet = _wallet;
}
exports.setWallet = setWallet;
async function setWsAddr(addr) {
    if (!socket)
        socket = new ws_1.default(addr);
}
exports.setWsAddr = setWsAddr;
