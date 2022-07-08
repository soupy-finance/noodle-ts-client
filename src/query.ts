import modules from "./modules";

interface Props {
	restAddr?: string;
}

const props: Props = {
	restAddr: null, 
};

async function getBridgeParams() {
	return await modules.bridge.query.queryParams();
}

async function getDexParams() {
	return await modules.dex.query.queryParams();
}

async function getOracleParams() {
	return await modules.oracle.query.queryParams();
}

async function getAllBalances(accAddress: string) {
	return await modules.bank.query.queryAllBalances(accAddress); 
}

async function getBalance(accAddress: string, denom: string) {
	return await modules.bank.query.queryBalance(accAddress, { denom }); 
}

async function getBooks(market: string) {
	return await modules.dex.query.queryBooks(market); 
}

async function getOpenOrders(addr: string) {
	return await modules.dex.query.queryOpenOrders(addr); 
}

export default {
	props,
	getBridgeParams,
	getDexParams,
	getOracleParams,
	getBalance,
	getAllBalances,
	getBooks,
	getOpenOrders,
};