import { BrowserSocket, NodeSocket } from "./ws";
declare function addEventsListener(query: string, handler: Function): void;
declare const _default: {
    socket: BrowserSocket | NodeSocket;
    addEventsListener: typeof addEventsListener;
};
export default _default;
