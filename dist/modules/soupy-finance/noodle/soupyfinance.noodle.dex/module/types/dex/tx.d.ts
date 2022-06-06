import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "soupyfinance.noodle.dex";
export interface MsgCreateOrder {
    creator: string;
    market: string;
    side: boolean;
    orderType: string;
    price: string;
    quantity: string;
    flags: string[];
}
export interface MsgCreateOrderResponse {
}
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromJSON(object: any): MsgCreateOrder;
    toJSON(message: MsgCreateOrder): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
};
export declare const MsgCreateOrderResponse: {
    encode(_: MsgCreateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromJSON(_: any): MsgCreateOrderResponse;
    toJSON(_: MsgCreateOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
