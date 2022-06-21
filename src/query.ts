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

async function getBalance(accAddress: string, denom: string) {
	return await modules.bank.query.queryBalance(accAddress, { denom }); 
}

async function getBooks(market: string) {
	return await modules.dex.query.queryBooks(market); 
}

export default {
	props,
	getBridgeParams,
	getDexParams,
	getOracleParams,
	getBalance,
	getBooks,
};