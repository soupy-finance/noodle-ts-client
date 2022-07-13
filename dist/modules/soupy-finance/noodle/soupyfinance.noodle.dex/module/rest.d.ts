export declare type DexMsgCancelOrderResponse = object;
export declare type DexMsgCreateOrderResponse = object;
/**
 * Params defines the parameters for the module.
 */
export interface DexParams {
    markets?: string;
}
export interface DexQueryBookResponse {
    pure?: string;
    amm?: string;
}
export interface DexQueryBooksResponse {
    bids?: string;
    asks?: string;
    amm?: string;
}
export interface DexQueryOpenOrdersResponse {
    orders?: string;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface DexQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: DexParams;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title dex/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBook
     * @summary Queries a list of Book items.
     * @request GET:/soupy-finance/noodle/dex/book/{market}/{side}
     */
    queryBook: (market: string, side: boolean, params?: RequestParams) => Promise<HttpResponse<DexQueryBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBooks
     * @summary Queries a list of Books items.
     * @request GET:/soupy-finance/noodle/dex/books/{market}
     */
    queryBooks: (market: string, params?: RequestParams) => Promise<HttpResponse<DexQueryBooksResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOpenOrders
     * @summary Queries a list of OpenOrders items.
     * @request GET:/soupy-finance/noodle/dex/open_orders/{account}
     */
    queryOpenOrders: (account: string, params?: RequestParams) => Promise<HttpResponse<DexQueryOpenOrdersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/soupy-finance/noodle/dex/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<DexQueryParamsResponse, RpcStatus>>;
}
export {};
