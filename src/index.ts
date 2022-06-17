import { OfflineSigner } from "@cosmjs/proto-signing";
import Socket from "./ws";

import { txClient as bankTxClient, queryClient as bankQueryClient } from "./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module";
import { txClient as bridgeTxClient, queryClient as bridgeQueryClient } from "./modules/soupy-finance/noodle/soupyfinance.noodle.bridge/module";
import { txClient as dexTxClient, queryClient as dexQueryClient } from "./modules/soupy-finance/noodle/soupyfinance.noodle.dex/module";
import { txClient as oracleTxClient, queryClient as oracleQueryClient } from "./modules/soupy-finance/noodle/soupyfinance.noodle.oracle/module";

interface ModuleClient {
	tx: any,
	query: any,
	txGen: Function,
	queryGen: Function,
}

var restAddr: string;
var rpcAddr: string;
var wallet: OfflineSigner;
var socket: Socket;

const modules: {[key: string]: ModuleClient} = {
	bank: {
		tx: null,
		query: null,
		txGen: bankTxClient,
		queryGen: bankQueryClient,
	},
	bridge: {
		tx: null,
		query: null,
		txGen: bridgeTxClient,
		queryGen: bridgeQueryClient,
	},
	dex: {
		tx: null,
		query: null,
		txGen: dexTxClient,
		queryGen: dexQueryClient,
	},
	oracle: {
		tx: null,
		query: null,
		txGen: oracleTxClient,
		queryGen: oracleQueryClient,
	},
}; 

async function setRestAddr(_restAddr: string) {
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

async function setRpcAddr(_rpcAddr: string) {
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

async function setWallet(_wallet: OfflineSigner) {
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

async function setEventsAddr(addr: string) {
	if (!socket)
		socket = new Socket(addr);
}

function handleEvents(query: string, handler: Function) {
	socket.registerEventsListener(query, handler);
}

function createOrder(market: string, price: number, quantity: number, type: string="limit", flags: string="") {

}

export {
	modules,
	setRestAddr,
	setRpcAddr,
	setWallet,
	setEventsAddr,
	handleEvents,
	createOrder,
};