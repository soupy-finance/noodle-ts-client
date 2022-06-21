"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.tx = exports.query = exports.setRpcAddr = exports.setRestAddr = exports.modules = void 0;
const modules_1 = __importDefault(require("./modules"));
exports.modules = modules_1.default;
const query_1 = __importDefault(require("./query"));
exports.query = query_1.default;
const tx_1 = __importDefault(require("./tx"));
exports.tx = tx_1.default;
const events_1 = __importDefault(require("./events"));
exports.events = events_1.default;
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
