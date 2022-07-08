import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import modules from "./modules";
import { OrderFlags, OrderType } from "./types";

interface Props {
	rpcAddr?: string;
}

interface Account {
	wallet?: OfflineSigner,
	address?: string; 
}

const props: Props = {
	rpcAddr: null, 
};

const account: Account = {
	wallet: null,
	address: null,
};

async function setWallet(_wallet: OfflineSigner) {
	if (_wallet == null)
		throw new Error("Invalid wallet");

	if (account.wallet == _wallet)
		return;

	if (_wallet) {
		if (props.rpcAddr) {
			for (let moduleName in modules) {
				let module = modules[moduleName];
				module.tx = await module.txGen(_wallet, { addr: props.rpcAddr });
			}
		}

		account.address = (await _wallet.getAccounts())[0].address;
	}
	else
		account.address = null;

	account.wallet = _wallet;
}

async function createOrder(
	market: string, 
	price: number, 
	quantity: number, 
	side: boolean, 
	orderType: OrderType=OrderType.Limit, 
	flags: OrderFlags={}
): Promise<DeliverTxResponse> {
	if (!account.wallet)
		return;

	let msg: EncodeObject = modules.dex.tx.msgCreateOrder({
		creator: account.address,
		market,
		price: price.toString(),
		quantity: quantity.toString(),
		side,
		orderType,
		flags: Object.keys(flags),
	});
	return modules.dex.tx.signAndBroadcast([msg]);
}

export default {
	props,
	account,
	setWallet,
	createOrder,
}