import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "soupyfinance.noodle.oracle";
export interface MsgUpdatePrices {
    creator: string;
    data: string;
}
export interface MsgUpdatePricesResponse {
}
export declare const MsgUpdatePrices: {
    encode(message: MsgUpdatePrices, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePrices;
    fromJSON(object: any): MsgUpdatePrices;
    toJSON(message: MsgUpdatePrices): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePrices>): MsgUpdatePrices;
};
export declare const MsgUpdatePricesResponse: {
    encode(_: MsgUpdatePricesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePricesResponse;
    fromJSON(_: any): MsgUpdatePricesResponse;
    toJSON(_: MsgUpdatePricesResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePricesResponse>): MsgUpdatePricesResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UpdatePrices(request: MsgUpdatePrices): Promise<MsgUpdatePricesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdatePrices(request: MsgUpdatePrices): Promise<MsgUpdatePricesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
