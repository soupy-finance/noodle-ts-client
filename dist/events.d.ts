import Socket from "./ws";
declare function handleEvents(query: string, handler: Function): void;
declare const _default: {
    socket: Socket;
    handleEvents: typeof handleEvents;
};
export default _default;
