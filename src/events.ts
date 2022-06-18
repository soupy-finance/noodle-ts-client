import { BrowserSocket, NodeSocket } from "./ws";

interface EventsResult {
	data: any;
	events: {[key: string]: string[]};
}

type ParsedEvents = {[eventType: string]: {[attrKey: string]: string}[]} 

var socket: BrowserSocket | NodeSocket;

function addEventsListener(query: string, handler: Function) {
	socket.registerEventsListener(query, (res) => {
		let events = parseEvents(res);
		handler(events, res.data);
	});
}

function parseEvents(res: EventsResult): ParsedEvents {
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
	socket,
	addEventsListener,
};