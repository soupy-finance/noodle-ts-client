"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEvents = void 0;
const ws_1 = __importDefault(require("./ws"));
var socket;
async function setWsAddr(addr) {
    if (!socket)
        socket = new ws_1.default(addr);
}
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
exports.parseEvents = parseEvents;
exports.default = {
    setWsAddr,
    addEventsListener,
};
