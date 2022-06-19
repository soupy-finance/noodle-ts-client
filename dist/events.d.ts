interface EventsResult {
    data: any;
    events: {
        [key: string]: string[];
    };
}
declare type ParsedEvents = {
    [eventType: string]: {
        [attrKey: string]: string;
    }[];
};
declare function setWsAddr(addr: string): Promise<void>;
declare function addEventsListener(query: string, handler: Function): void;
export declare function parseEvents(res: EventsResult): ParsedEvents;
declare const _default: {
    setWsAddr: typeof setWsAddr;
    addEventsListener: typeof addEventsListener;
};
export default _default;
