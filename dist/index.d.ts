import { OfflineSigner } from "@cosmjs/proto-signing";
import modules from "./modules";
import query from "./query";
import tx from "./tx";
import events from "./events";
declare function setRestAddr(_restAddr: string): Promise<void>;
declare function setRpcAddr(_rpcAddr: string): Promise<void>;
declare function setWallet(_wallet: OfflineSigner): Promise<void>;
export { modules, setRestAddr, setRpcAddr, setWallet, query, tx, events, };
