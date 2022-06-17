import { OfflineSigner } from "@cosmjs/proto-signing";
interface ModuleClient {
    tx: any;
    query: any;
    txGen: Function;
    queryGen: Function;
}
export declare var modules: {
    [key: string]: ModuleClient;
};
export declare function setRestAddr(_restAddr: string): Promise<void>;
export declare function setRpcAddr(_rpcAddr: string): Promise<void>;
export declare function setWallet(_wallet: OfflineSigner): Promise<void>;
export declare function setEventsAddr(addr: string): Promise<void>;
export declare function handleEvents(query: string, handler: Function): void;
export declare function createOrder(market: string, price: number, quantity: number, type?: string, flags?: string): void;
export {};
