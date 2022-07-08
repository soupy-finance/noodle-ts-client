"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = __importDefault(require("./modules"));
const props = {
    restAddr: null,
};
async function getBridgeParams() {
    return await modules_1.default.bridge.query.queryParams();
}
async function getDexParams() {
    return await modules_1.default.dex.query.queryParams();
}
async function getOracleParams() {
    return await modules_1.default.oracle.query.queryParams();
}
async function getAllBalances(accAddress) {
    return await modules_1.default.bank.query.queryAllBalances(accAddress);
}
async function getBalance(accAddress, denom) {
    return await modules_1.default.bank.query.queryBalance(accAddress, { denom });
}
async function getBooks(market) {
    return await modules_1.default.dex.query.queryBooks(market);
}
async function getOpenOrders(addr) {
    return await modules_1.default.dex.query.queryOpenOrders(addr);
}
exports.default = {
    props,
    getBridgeParams,
    getDexParams,
    getOracleParams,
    getBalance,
    getAllBalances,
    getBooks,
    getOpenOrders,
};
