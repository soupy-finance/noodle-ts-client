"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket;
function addEventsListener(query, handler) {
    socket.registerEventsListener(query, (res) => {
        let events = parseEvents(res);
        handler(events, res.data);
    });
}
function parseEvents(res) {
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
exports.default = {
    socket,
    addEventsListener,
};
