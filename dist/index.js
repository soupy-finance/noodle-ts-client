"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.handleEvents = exports.setEventsAddr = exports.setWallet = exports.setRpcAddr = exports.setRestAddr = exports.modules = void 0;
const ws_1 = __importDefault(require("./ws"));
const module_1 = require("./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module");
const module_2 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.bridge/module");
const module_3 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.dex/module");
const module_4 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.oracle/module");
var restAddr;
var rpcAddr;
var wallet;
var socket;
const modules = {
    bank: {
        tx: null,
        query: null,
        txGen: module_1.txClient,
        queryGen: module_1.queryClient,
    },
    bridge: {
        tx: null,
        query: null,
        txGen: module_2.txClient,
        queryGen: module_2.queryClient,
    },
    dex: {
        tx: null,
        query: null,
        txGen: module_3.txClient,
        queryGen: module_3.queryClient,
    },
    oracle: {
        tx: null,
        query: null,
        txGen: module_4.txClient,
        queryGen: module_4.queryClient,
    },
};
exports.modules = modules;
async function setRestAddr(_restAddr) {
    if (_restAddr.length == 0)
        throw new Error("Invalid rest address");
    if (restAddr == _restAddr)
        return;
    for (let moduleName in modules) {
        let module = modules[moduleName];
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
        for (let moduleName in modules) {
            let module = modules[moduleName];
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
        for (let moduleName in modules) {
            let module = modules[moduleName];
            module.tx = await module.txGen(wallet, { addr: rpcAddr });
        }
    }
    wallet = _wallet;
}
exports.setWallet = setWallet;
async function setEventsAddr(addr) {
    if (!socket)
        socket = new ws_1.default(addr);
}
exports.setEventsAddr = setEventsAddr;
function handleEvents(query, handler) {
    socket.registerEventsListener(query, handler);
}
exports.handleEvents = handleEvents;
function createOrder(market, price, quantity, type = "limit", flags = "") {
}
exports.createOrder = createOrder;
