import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dex/params";
export declare const protobufPackage = "soupyfinance.noodle.dex";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryBookRequest {
    market: string;
    side: boolean;
}
export interface QueryBookResponse {
    pure: string;
    amm: string;
}
export interface QueryBooksRequest {
    market: string;
}
export interface QueryBooksResponse {
    bids: string;
    asks: string;
    amm: string;
}
export interface QueryOpenOrdersRequest {
    account: string;
}
export interface QueryOpenOrdersResponse {
    orders: string;
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
export declare const QueryBookRequest: {
    encode(message: QueryBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBookRequest;
    fromJSON(object: any): QueryBookRequest;
    toJSON(message: QueryBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryBookRequest>): QueryBookRequest;
};
export declare const QueryBookResponse: {
    encode(message: QueryBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBookResponse;
    fromJSON(object: any): QueryBookResponse;
    toJSON(message: QueryBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryBookResponse>): QueryBookResponse;
};
export declare const QueryBooksRequest: {
    encode(message: QueryBooksRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBooksRequest;
    fromJSON(object: any): QueryBooksRequest;
    toJSON(message: QueryBooksRequest): unknown;
    fromPartial(object: DeepPartial<QueryBooksRequest>): QueryBooksRequest;
};
export declare const QueryBooksResponse: {
    encode(message: QueryBooksResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBooksResponse;
    fromJSON(object: any): QueryBooksResponse;
    toJSON(message: QueryBooksResponse): unknown;
    fromPartial(object: DeepPartial<QueryBooksResponse>): QueryBooksResponse;
};
export declare const QueryOpenOrdersRequest: {
    encode(message: QueryOpenOrdersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOpenOrdersRequest;
    fromJSON(object: any): QueryOpenOrdersRequest;
    toJSON(message: QueryOpenOrdersRequest): unknown;
    fromPartial(object: DeepPartial<QueryOpenOrdersRequest>): QueryOpenOrdersRequest;
};
export declare const QueryOpenOrdersResponse: {
    encode(message: QueryOpenOrdersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOpenOrdersResponse;
    fromJSON(object: any): QueryOpenOrdersResponse;
    toJSON(message: QueryOpenOrdersResponse): unknown;
    fromPartial(object: DeepPartial<QueryOpenOrdersResponse>): QueryOpenOrdersResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Book items. */
    Book(request: QueryBookRequest): Promise<QueryBookResponse>;
    /** Queries a list of Books items. */
    Books(request: QueryBooksRequest): Promise<QueryBooksResponse>;
    /** Queries a list of OpenOrders items. */
    OpenOrders(request: QueryOpenOrdersRequest): Promise<QueryOpenOrdersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Book(request: QueryBookRequest): Promise<QueryBookResponse>;
    Books(request: QueryBooksRequest): Promise<QueryBooksResponse>;
    OpenOrders(request: QueryOpenOrdersRequest): Promise<QueryOpenOrdersResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
