interface Props {
    wsAddr?: string;
}
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
declare function initSocket(addr: string): Promise<void>;
declare function addEventsListener(query: string, handler: Function): number;
declare function removeEventsListener(handlerId: number): void;
export declare function parseEvents(res: EventsResult): ParsedEvents;
declare const _default: {
    props: Props;
    initSocket: typeof initSocket;
    addEventsListener: typeof addEventsListener;
    removeEventsListener: typeof removeEventsListener;
};
export default _default;
