import { BrowserSocket, NodeSocket } from "./ws";
interface EventsResult {
    data: any;
    events: {
        [key: string]: string[];
    };
}
export declare type EventsSocket = BrowserSocket | NodeSocket;
declare type ParsedEvents = {
    [eventType: string]: {
        [attrKey: string]: string;
    }[];
};
declare function addEventsListener(socket: EventsSocket, query: string, handler: Function): void;
export declare function parseEvents(res: EventsResult): ParsedEvents;
declare const _default: {
    addEventsListener: typeof addEventsListener;
};
export default _default;
