interface Props {
    restAddr?: string;
}
declare function getBridgeParams(): Promise<any>;
declare function getDexParams(): Promise<any>;
declare function getOracleParams(): Promise<any>;
declare function getBalance(accAddress: string, denom: string): Promise<any>;
declare function getBooks(market: string): Promise<any>;
declare const _default: {
    props: Props;
    getBridgeParams: typeof getBridgeParams;
    getDexParams: typeof getDexParams;
    getOracleParams: typeof getOracleParams;
    getBalance: typeof getBalance;
    getBooks: typeof getBooks;
};
export default _default;
