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
export interface MsgCancelOrder {
    creator: string;
    market: string;
    side: boolean;
    price: string;
    id: string;
}
export interface MsgCancelOrderResponse {
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
export declare const MsgCancelOrder: {
    encode(message: MsgCancelOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelOrder;
    fromJSON(object: any): MsgCancelOrder;
    toJSON(message: MsgCancelOrder): unknown;
    fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder;
};
export declare const MsgCancelOrderResponse: {
    encode(_: MsgCancelOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelOrderResponse;
    fromJSON(_: any): MsgCancelOrderResponse;
    toJSON(_: MsgCancelOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
