import { OfflineSigner } from "@cosmjs/proto-signing";
import modules from "./modules";
import query from "./query";
import tx from "./tx";
declare function setRestAddr(_restAddr: string): Promise<void>;
declare function setRpcAddr(_rpcAddr: string): Promise<void>;
declare function setWallet(_wallet: OfflineSigner): Promise<void>;
declare function setEventsAddr(addr: string): Promise<void>;
declare function handleEvents(query: string, handler: Function): void;
export { modules, setRestAddr, setRpcAddr, setWallet, setEventsAddr, handleEvents, query, tx, };
