"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = exports.txClient = exports.registry = exports.MissingWalletError = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const types = [
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_1.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_2.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_3.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_4.MsgFundCommunityPool],
];
exports.MissingWalletError = new Error("wallet is required");
exports.registry = new proto_signing_1.Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw exports.MissingWalletError;
    let client;
    if (addr) {
        client = await stargate_1.SigningStargateClient.connectWithSigner(addr, wallet, { registry: exports.registry });
    }
    else {
        client = await stargate_1.SigningStargateClient.offline(wallet, { registry: exports.registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgWithdrawValidatorCommission: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", value: tx_1.MsgWithdrawValidatorCommission.fromPartial(data) }),
        msgWithdrawDelegatorReward: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", value: tx_2.MsgWithdrawDelegatorReward.fromPartial(data) }),
        msgSetWithdrawAddress: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", value: tx_3.MsgSetWithdrawAddress.fromPartial(data) }),
        msgFundCommunityPool: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool", value: tx_4.MsgFundCommunityPool.fromPartial(data) }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;