"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = __importDefault(require("./modules"));
const props = {
    rpcAddr: null,
};
const account = {
    wallet: null,
    address: null,
};
async function setWallet(_wallet) {
    if (_wallet == null)
        throw new Error("Invalid wallet");
    if (account.wallet == _wallet)
        return;
    if (_wallet) {
        if (props.rpcAddr) {
            for (let moduleName in modules_1.default) {
                let module = modules_1.default[moduleName];
                module.tx = await module.txGen(_wallet, { addr: props.rpcAddr });
            }
        }
        account.address = (await _wallet.getAccounts())[0].address;
    }
    else
        account.address = null;
    account.wallet = _wallet;
}
async function createOrder(market, price, quantity, type = "limit", flags = "") {
    let msg = modules_1.default.dex.tx.msgCreateOrder({});
    modules_1.default.dex.tx.signAndBroadcast([msg]);
}
exports.default = {
    props,
    account,
    setWallet,
    createOrder,
};
