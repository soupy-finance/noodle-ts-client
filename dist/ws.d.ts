/// <reference types="node" />
import WebSocket from "isomorphic-ws";
export declare class BrowserSocket {
    socket: WebSocket;
    addr: string;
    sendQueue: string[];
    keepAlive: boolean;
    hbInterval: number;
    hbTimeout: NodeJS.Timeout;
    eventsHandlers: Function[];
    eventsHandlersQueries: string[];
    constructor(addr: string, keepAlive?: boolean, hbInterval?: number);
    setSocket(socket: WebSocket): void;
    send(msg: any): void;
    reconnect(): void;
    terminate(): void;
    heartbeat(): void;
    registerEventsListener(query: string, handler: Function): number;
    removeEventsListener(handlerId: number): void;
    get readyState(): number;
}
export declare class NodeSocket {
    socket: WebSocket;
    addr: string;
    sendQueue: string[];
    keepAlive: boolean;
    hbInterval: number;
    hbTimeout: NodeJS.Timeout;
    eventsHandlers: Function[];
    eventsHandlersQueries: string[];
    constructor(addr: string, keepAlive?: boolean, hbInterval?: number);
    setSocket(socket: WebSocket): void;
    send(msg: Object): void;
    reconnect(): void;
    terminate(): void;
    heartbeat(): void;
    registerEventsListener(query: string, handler: Function): number;
    removeEventsListener(handlerId: number): void;
    get readyState(): number;
}
declare var Socket: any;
export default Socket;
