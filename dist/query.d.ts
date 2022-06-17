export declare function getBridgeParams(): Promise<any>;
export declare function getDexParams(): Promise<any>;
export declare function getOracleParams(): Promise<any>;
export declare function getBalance(accAddress: string, denom: string): Promise<any>;
export declare function getBooks(market: string): Promise<any>;
declare const _default: {
    getBridgeParams: typeof getBridgeParams;
    getDexParams: typeof getDexParams;
    getOracleParams: typeof getOracleParams;
    getBalance: typeof getBalance;
    getBooks: typeof getBooks;
};
export default _default;
