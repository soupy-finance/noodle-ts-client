"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.getBalance = exports.getOracleParams = exports.getDexParams = exports.getBridgeParams = void 0;
const modules_1 = __importDefault(require("./modules"));
async function getBridgeParams() {
    return await modules_1.default.bridge.query.queryParams();
}
exports.getBridgeParams = getBridgeParams;
async function getDexParams() {
    return await modules_1.default.dex.query.queryParams();
}
exports.getDexParams = getDexParams;
async function getOracleParams() {
    return await modules_1.default.oracle.query.queryParams();
}
exports.getOracleParams = getOracleParams;
async function getBalance(accAddress, denom) {
    return await modules_1.default.bank.query.queryBalance(accAddress, { denom });
}
exports.getBalance = getBalance;
async function getBooks(market) {
    return await modules_1.default.dex.query.queryBooks(market);
}
exports.getBooks = getBooks;
exports.default = {
    getBridgeParams,
    getDexParams,
    getOracleParams,
    getBalance,
    getBooks,
};
