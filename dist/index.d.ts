import modules from "./modules";
import query from "./query";
import tx from "./tx";
import events from "./events";
import * as types from "./types";
declare function setRestAddr(_restAddr: string): Promise<void>;
declare function setRpcAddr(_rpcAddr: string): Promise<void>;
declare function setWsAddr(_wsAddr: string): Promise<void>;
export { modules, setRestAddr, setRpcAddr, setWsAddr, query, tx, events, types, };
