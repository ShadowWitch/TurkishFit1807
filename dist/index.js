"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * Librerias
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// * Local Imports
const main_1 = require("./routers/main");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// * Configurations
dotenv_1.default.config();
app.get('/', (req, res) => {
    res.end('qweqwe');
});
// * Config Router Principal
app.use('/', main_1.routerMain);
//* Config Middleware 404
app.use((req, res, next) => {
    res.status(404).json({
        error: {
            status: 'Not Found',
            message: 'Not Found'
        }
    });
});
// * Server Listen
app.listen(port, () => {
    console.log(`Server corriendo en ${port}`);
});
