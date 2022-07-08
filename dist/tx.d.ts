import { OfflineSigner } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import { OrderFlags, OrderType } from "./types";
interface Props {
    rpcAddr?: string;
}
interface Account {
    wallet?: OfflineSigner;
    address?: string;
}
declare function setWallet(_wallet: OfflineSigner): Promise<void>;
declare function createOrder(market: string, price: number, quantity: number, side: boolean, orderType?: OrderType, flags?: OrderFlags): Promise<DeliverTxResponse>;
declare const _default: {
    props: Props;
    account: Account;
    setWallet: typeof setWallet;
    createOrder: typeof createOrder;
};
export default _default;
