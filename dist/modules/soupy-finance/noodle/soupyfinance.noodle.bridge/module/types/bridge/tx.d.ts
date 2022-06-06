import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "soupyfinance.noodle.bridge";
export interface MsgObserveDeposit {
    creator: string;
    chainId: string;
    depositor: string;
    depositId: string;
    quantity: string;
    asset: string;
}
export interface MsgObserveDepositResponse {
}
export interface MsgWithdraw {
    creator: string;
    asset: string;
    quantity: string;
    address: string;
    chainId: string;
}
export interface MsgWithdrawResponse {
}
export declare const MsgObserveDeposit: {
    encode(message: MsgObserveDeposit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgObserveDeposit;
    fromJSON(object: any): MsgObserveDeposit;
    toJSON(message: MsgObserveDeposit): unknown;
    fromPartial(object: DeepPartial<MsgObserveDeposit>): MsgObserveDeposit;
};
export declare const MsgObserveDepositResponse: {
    encode(_: MsgObserveDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgObserveDepositResponse;
    fromJSON(_: any): MsgObserveDepositResponse;
    toJSON(_: MsgObserveDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgObserveDepositResponse>): MsgObserveDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdraw;
    fromJSON(object: any): MsgWithdraw;
    toJSON(message: MsgWithdraw): unknown;
    fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    ObserveDeposit(request: MsgObserveDeposit): Promise<MsgObserveDepositResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ObserveDeposit(request: MsgObserveDeposit): Promise<MsgObserveDepositResponse>;
    Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
