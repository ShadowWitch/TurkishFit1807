"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * Librerias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// * Local Imports
const main_1 = require("./routers/main");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// * Configurations
dotenv_1.default.config();
app.use((0, morgan_1.default)('dev'));
// * Configurations Body-Parser
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// * Configurations Cors
app.use((0, cors_1.default)());
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
