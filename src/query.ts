import modules from "./modules";

export async function getBridgeParams() {
	return await modules.bridge.query.queryParams();
}

export async function getDexParams() {
	return await modules.dex.query.queryParams();
}

export async function getOracleParams() {
	return await modules.oracle.query.queryParams();
}

export async function getBalance(accAddress: string, denom: string) {
	return await modules.bank.query.queryBalance(accAddress, { denom }); 
}

export async function getBooks(market: string) {
	return await modules.dex.query.queryBooks(market); 
}

export default {
	getBridgeParams,
	getDexParams,
	getOracleParams,
	getBalance,
	getBooks,
};