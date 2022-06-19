"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSocket = exports.BrowserSocket = void 0;
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws"));
class BrowserSocket {
    constructor(addr, keepAlive = true, hbInterval = 10e3) {
        this.addr = addr;
        this.sendQueue = [];
        this.keepAlive = keepAlive;
        this.hbInterval = hbInterval;
        this.eventsHandlers = [];
        this.setSocket(new isomorphic_ws_1.default(addr));
        this.heartbeat();
    }
    setSocket(socket) {
        this.socket = socket;
        this.socket.addEventListener("open", () => {
            for (let msg of this.sendQueue)
                this.socket.send(msg);
        });
        this.socket.addEventListener("close", () => {
            if (this.keepAlive)
                this.reconnect();
            else
                clearTimeout(this.hbTimeout);
        });
        this.socket.addEventListener("message", (msgWrapper) => {
            var msg = JSON.parse(msgWrapper.data);
            switch (msg.id) {
                case 0:
                    if (msg.result) {
                        clearTimeout(this.hbTimeout);
                        this.hbTimeout = setTimeout(() => this.heartbeat(), this.hbInterval);
                    }
                    else
                        this.terminate();
                default:
                    if (this.eventsHandlers[msg.id] && msg.result && msg.result.events)
                        this.eventsHandlers[msg.id](msg.result);
            }
        });
    }
    send(msg) {
        var msgStr = JSON.stringify(msg);
        if (this.readyState == 1)
            this.socket.send(msgStr);
        else if (this.readyState == 0)
            this.sendQueue.push(msgStr);
    }
    reconnect() {
        if (this.readyState < 2)
            return;
        clearTimeout(this.hbTimeout);
        this.setSocket(new isomorphic_ws_1.default(this.addr));
        this.heartbeat();
    }
    terminate() {
        clearTimeout(this.hbTimeout);
        this.sendQueue = [];
        this.socket.close();
    }
    heartbeat() {
        clearTimeout(this.hbTimeout);
        this.send({ "jsonrpc": "2.0", "method": "health", "id": 0 });
        this.hbTimeout = setTimeout(this.terminate, this.hbInterval);
    }
    registerEventsListener(query, handler) {
        this.eventsHandlers.push(handler);
        this.send({ "jsonrpc": "2.0", "method": "subscribe", "id": this.eventsHandlers.length, "params": { "query": query } });
    }
    get readyState() {
        if (this.socket)
            return this.socket.readyState;
        else
            return 3;
    }
}
exports.BrowserSocket = BrowserSocket;
class NodeSocket {
    constructor(addr, keepAlive = true, hbInterval = 10e3) {
        this.addr = addr;
        this.sendQueue = [];
        this.keepAlive = keepAlive;
        this.hbInterval = hbInterval;
        this.eventsHandlers = [];
        this.setSocket(new isomorphic_ws_1.default(addr));
        this.heartbeat();
    }
    setSocket(socket) {
        this.socket = socket;
        this.socket.onopen = () => {
            for (let msg of this.sendQueue)
                this.socket.send(msg);
        };
        this.socket.onclose = () => {
            if (this.keepAlive)
                this.reconnect();
            else
                clearTimeout(this.hbTimeout);
        };
        this.socket.onmessage = (msgStr) => {
            var msg = JSON.parse(msgStr);
            switch (msg.id) {
                case 0:
                    if (msg.result) {
                        clearTimeout(this.hbTimeout);
                        this.hbTimeout = setTimeout(() => this.heartbeat(), this.hbInterval);
                    }
                    else
                        this.terminate();
                default:
                    if (this.eventsHandlers[msg.id] && msg.result && msg.result.events)
                        this.eventsHandlers[msg.id](msg.result);
            }
        };
    }
    send(msg) {
        var msgStr = JSON.stringify(msg);
        if (this.readyState == 1)
            this.socket.send(msgStr);
        else if (this.readyState == 0)
            this.sendQueue.push(msgStr);
    }
    reconnect() {
        if (this.readyState < 2)
            return;
        clearTimeout(this.hbTimeout);
        this.setSocket(new isomorphic_ws_1.default(this.addr));
        this.heartbeat();
    }
    terminate() {
        clearTimeout(this.hbTimeout);
        this.sendQueue = [];
        this.socket.terminate();
    }
    heartbeat() {
        clearTimeout(this.hbTimeout);
        this.send({ "jsonrpc": "2.0", "method": "health", "id": 0 });
        this.hbTimeout = setTimeout(this.terminate, this.hbInterval);
    }
    registerEventsListener(query, handler) {
        this.eventsHandlers.push(handler);
        this.send({ "jsonrpc": "2.0", "method": "subscribe", "id": this.eventsHandlers.length, "params": { "query": query } });
    }
    get readyState() {
        if (this.socket)
            return this.socket.readyState;
        else
            return 3;
    }
}
exports.NodeSocket = NodeSocket;
var Socket;
if (window && window.WebSocket)
    Socket = BrowserSocket;
else
    Socket = NodeSocket;
exports.default = Socket;
