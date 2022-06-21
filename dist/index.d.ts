import modules from "./modules";
import query from "./query";
import tx from "./tx";
import events from "./events";
import * as types from "./types";
declare function setRestAddr(_restAddr: string): Promise<void>;
declare function setRpcAddr(_rpcAddr: string): Promise<void>;
export { modules, setRestAddr, setRpcAddr, query, tx, events, types, };
