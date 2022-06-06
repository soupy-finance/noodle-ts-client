import { Order, Counterparty } from "../../../../ibc/core/channel/v1/channel";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "ibc.core.port.v1";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
    /** port unique identifier */
    port_id: string;
    /** connection unique identifier */
    connection_id: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty: Counterparty | undefined;
    /** proposed version */
    proposed_version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
    /** port id associated with the request identifiers */
    port_id: string;
    /** supported app version */
    version: string;
}
export declare const QueryAppVersionRequest: {
    encode(message: QueryAppVersionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAppVersionRequest;
    fromJSON(object: any): QueryAppVersionRequest;
    toJSON(message: QueryAppVersionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest;
};
export declare const QueryAppVersionResponse: {
    encode(message: QueryAppVersionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAppVersionResponse;
    fromJSON(object: any): QueryAppVersionResponse;
    toJSON(message: QueryAppVersionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAppVersionResponse>): QueryAppVersionResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
    AppVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    AppVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
