import { OfflineSigner } from "@cosmjs/proto-signing";
import modules from "./modules";
import query from "./query";
import tx from "./tx";
import events from "./events";
import * as types from "./types";

async function setRestAddr(_restAddr: string) {
	if (_restAddr.length == 0)
		throw new Error("Invalid rest address");

	if (query.props.restAddr == _restAddr)
		return;

	for (let moduleName in modules) {
		let module = modules[moduleName];
		module.query = await module.queryGen({ addr: _restAddr });
	}

	query.props.restAddr = _restAddr;
}

async function setRpcAddr(_rpcAddr: string) {
	if (_rpcAddr.length == 0)
		throw new Error("Invalid RPC address");

	if (tx.props.rpcAddr == _rpcAddr)
		return;

	if (tx.account.wallet) {
		for (let moduleName in modules) {
			let module = modules[moduleName];
			module.tx = await module.txGen(tx.account.wallet, { addr: _rpcAddr });
		}
	}

	tx.props.rpcAddr = _rpcAddr;
}

async function setWsAddr(_wsAddr: string) {
	if (_wsAddr.length == 0)
		throw new Error("Invalid websocket address");

	if (events.props.wsAddr == _wsAddr)
		return;


	events.initSocket(_wsAddr);
}

export {
	modules,
	setRestAddr,
	setRpcAddr,
	setWsAddr,
	query,
	tx,
	events,
	types,
};