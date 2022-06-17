"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module");
const module_2 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.bridge/module");
const module_3 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.dex/module");
const module_4 = require("./modules/soupy-finance/noodle/soupyfinance.noodle.oracle/module");
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
exports.default = modules;
