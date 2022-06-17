import { OfflineSigner } from "@cosmjs/proto-signing";
interface ModuleClient {
    tx: any;
    query: any;
    txGen: Function;
    queryGen: Function;
}
declare const modules: {
    [key: string]: ModuleClient;
};
declare function setRestAddr(_restAddr: string): Promise<void>;
declare function setRpcAddr(_rpcAddr: string): Promise<void>;
declare function setWallet(_wallet: OfflineSigner): Promise<void>;
declare function setEventsAddr(addr: string): Promise<void>;
declare function handleEvents(query: string, handler: Function): void;
declare function createOrder(market: string, price: number, quantity: number, type?: string, flags?: string): void;
export { modules, setRestAddr, setRpcAddr, setWallet, setEventsAddr, handleEvents, createOrder, };
