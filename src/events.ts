import Socket, { BrowserSocket, NodeSocket } from "./ws";

interface Props {
	wsAddr?: string;
}

interface EventsResult {
	data: any;
	events: {[key: string]: string[]};
}

type EventsSocket = BrowserSocket | NodeSocket;
type ParsedEvents = {[eventType: string]: {[attrKey: string]: string}[]} 

const props: Props = {
	wsAddr: null,
};

var socket: EventsSocket; 

async function initSocket(addr: string) {
	props.wsAddr = addr;

	if (!socket)
		socket = new Socket(props.wsAddr);
	else {
		socket.addr = addr;
		socket.eventsHandlers = [];
		socket.terminate();

		if (!socket.keepAlive)
			socket = new Socket(props.wsAddr);
	}
}

function addEventsListener(query: string, handler: Function): number {
	return socket.registerEventsListener(query, (res) => {
		let events = parseEvents(res);
		handler(events, res.data);
	});
}

function removeEventsListener(handlerId: number) {
	socket.removeEventsListener(handlerId);
}

export function parseEvents(res: EventsResult): ParsedEvents {
	let events = {};

	for (let key in res.events) {
		let keyParts = key.split(".");
		let eventType = keyParts[0]; 
		let attrKey = keyParts[1]; 

		if (!events[eventType])
			events[eventType] = [];
		
		for (let i in res.events[key]) {
			if (!events[eventType][i])
				events[eventType][i] = {};

			events[eventType][i][attrKey] = res.events[key][i];
		}
	}

	return events;
}

export default {
	props,
	initSocket,
	addEventsListener,
	removeEventsListener,
};