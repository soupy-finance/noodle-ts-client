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

export default {
	getBridgeParams,
	getDexParams,
	getOracleParams,
};