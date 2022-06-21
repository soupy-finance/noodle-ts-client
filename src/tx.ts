import { OfflineSigner } from "@cosmjs/proto-signing";
import modules from "./modules";

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

async function createOrder(market: string, price: number, quantity: number, type: string="limit", flags: string="") {
	let msg = modules.dex.tx.msgCreateOrder({

	});
	modules.dex.tx.signAndBroadcast([msg]);
}

export default {
	props,
	account,
	setWallet,
	createOrder,
}