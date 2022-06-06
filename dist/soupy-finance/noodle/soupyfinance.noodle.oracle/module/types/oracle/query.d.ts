import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../oracle/params";
export declare const protobufPackage = "soupyfinance.noodle.oracle";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryPricesRequest {
    assets: string[];
}
export interface QueryPricesResponse {
    data: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryPricesRequest: {
    encode(message: QueryPricesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPricesRequest;
    fromJSON(object: any): QueryPricesRequest;
    toJSON(message: QueryPricesRequest): unknown;
    fromPartial(object: DeepPartial<QueryPricesRequest>): QueryPricesRequest;
};
export declare const QueryPricesResponse: {
    encode(message: QueryPricesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPricesResponse;
    fromJSON(object: any): QueryPricesResponse;
    toJSON(message: QueryPricesResponse): unknown;
    fromPartial(object: DeepPartial<QueryPricesResponse>): QueryPricesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Prices items. */
    Prices(request: QueryPricesRequest): Promise<QueryPricesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Prices(request: QueryPricesRequest): Promise<QueryPricesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
