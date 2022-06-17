/// <reference types="node" />
import WebSocket from "isomorphic-ws";
export default class Socket {
    socket: WebSocket;
    addr: string;
    sendQueue: string[];
    keepAlive: boolean;
    hbInterval: number;
    hbTimeout: NodeJS.Timeout;
    eventsHandlers: Function[];
    constructor(addr: string, keepAlive?: boolean, hbInterval?: number);
    setSocket(socket: WebSocket): void;
    send(msg: Object): void;
    reconnect(): void;
    terminate(): void;
    heartbeat(): void;
    registerEventsListener(query: string, handler: Function): void;
    get readyState(): number;
}
