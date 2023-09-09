"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLowerCase = void 0;
const parseLowerCase = (data) => {
    const parserData = data.map((e) => e.toLowerCase());
    return parserData;
};
exports.parseLowerCase = parseLowerCase;
