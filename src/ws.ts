import WebSocket from "isomorphic-ws";

export class BrowserSocket {
	socket: WebSocket;
	addr: string;
	sendQueue: string[];
	keepAlive: boolean;
	hbInterval: number;
	hbTimeout: NodeJS.Timeout;
	eventsHandlers: Function[];
	
	constructor(addr: string, keepAlive: boolean=true, hbInterval: number=10e3) {
		this.addr = addr;
		this.sendQueue = [];
		this.keepAlive = keepAlive;
		this.hbInterval = hbInterval;
		this.eventsHandlers = [];
		this.setSocket(new WebSocket(addr));
		this.heartbeat();
	}

	setSocket(socket: WebSocket) {
		this.socket = socket;

		this.socket.addEventListener("open", () => {
			for (let msg of this.sendQueue)
				this.socket.send(msg);
		});

		this.socket.addEventListener("close", () => {
			if (this.keepAlive)
				this.reconnect();
		});

		this.socket.addEventListener("message", (msgWrapper: {data: string}) => {
			var msg = JSON.parse(msgWrapper.data);

			switch (msg.id) {
				case 0:
					if (msg.result) {
						clearTimeout(this.hbTimeout);
						this.hbTimeout = setTimeout(this.heartbeat, this.hbInterval);
					}
					else
						this.terminate();
				default:
					if (this.eventsHandlers[msg.id])
						this.eventsHandlers[msg.id](msg.result);
			}
		});
	}

	send(msg: Object) {
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
		this.setSocket(new WebSocket(this.addr));
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

	registerEventsListener(query: string, handler: Function) {
		this.eventsHandlers.push(handler);
		this.send({ "jsonrpc": "2.0", "method": "subscribe", "id": this.eventsHandlers.length, "params": { "query": query } });
	}

	get readyState(): number {
		if (this.socket)
			return this.socket.readyState;
		else
			return 3;
	}

}

export class NodeSocket {
	socket: WebSocket;
	addr: string;
	sendQueue: string[];
	keepAlive: boolean;
	hbInterval: number;
	hbTimeout: NodeJS.Timeout;
	eventsHandlers: Function[];
	
	constructor(addr: string, keepAlive: boolean=true, hbInterval: number=10e3) {
		this.addr = addr;
		this.sendQueue = [];
		this.keepAlive = keepAlive;
		this.hbInterval = hbInterval;
		this.eventsHandlers = [];
		this.setSocket(new WebSocket(addr));
		this.heartbeat();
	}

	setSocket(socket: WebSocket) {
		this.socket = socket;

		this.socket.onopen = () => {
			for (let msg of this.sendQueue)
				this.socket.send(msg);
		}

		this.socket.onclose = () => {
			if (this.keepAlive)
				this.reconnect();
		}

		this.socket.onmessage = (msgStr) => {
			var msg = JSON.parse(msgStr);

			switch (msg.id) {
				case 0:
					if (msg.result) {
						clearTimeout(this.hbTimeout);
						this.hbTimeout = setTimeout(this.heartbeat, this.hbInterval);
					}
					else
						this.terminate();
				default:
					if (this.eventsHandlers[msg.id])
						this.eventsHandlers[msg.id](msg.result);
			}
		}
	}

	send(msg: Object) {
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
		this.setSocket(new WebSocket(this.addr));
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

	registerEventsListener(query: string, handler: Function) {
		this.eventsHandlers.push(handler);
		this.send({ "jsonrpc": "2.0", "method": "subscribe", "id": this.eventsHandlers.length, "params": { "query": query } });
	}

	get readyState(): number {
		if (this.socket)
			return this.socket.readyState;
		else
			return 3;
	}

}

var Socket;

if (window && window.WebSocket)
	Socket = BrowserSocket;
else 
	Socket = NodeSocket;

export default Socket;