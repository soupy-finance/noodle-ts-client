/// <reference types="node" />
import WebSocket from "isomorphic-ws";
declare class BaseSocket {
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
export declare class BrowserSocket extends BaseSocket {
    setSocket(socket: WebSocket): void;
    terminate(): void;
}
export declare class NodeSocket extends BaseSocket {
    setSocket(socket: WebSocket): void;
    terminate(): void;
}
declare var Socket: any;
export default Socket;
