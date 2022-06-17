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

export default modules;