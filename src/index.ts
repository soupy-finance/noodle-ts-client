import { OfflineSigner } from "@cosmjs/proto-signing";
import modules from "./modules";
import query from "./query";
import Socket from "./ws";
import tx from "./tx";
import { EventsSocket, addEventsListener } from "./events";

var restAddr: string;
var rpcAddr: string;
var wallet: OfflineSigner;
var socket: EventsSocket; 

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

async function setWsAddr(addr: string) {
	if (!socket)
		socket = new Socket(addr);
}

export {
	modules,
	setRestAddr,
	setRpcAddr,
	setWallet,
	setWsAddr,
	query,
	tx,
};