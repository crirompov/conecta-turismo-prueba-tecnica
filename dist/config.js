"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
const SETTINGS = (0, dotenv_1.config)();
//TODO: TYPEAR
function default_1(app) {
    var _a, _b;
    app.disabled("x-powered-by");
    app.set("env", (_a = SETTINGS.parsed) === null || _a === void 0 ? void 0 : _a.ENV);
    app.set("config", SETTINGS.parsed);
    app.set("port", (_b = SETTINGS.parsed) === null || _b === void 0 ? void 0 : _b.PORT);
    app.locals.env = app.get("env");
    app.locals.config = app.get("config");
    if (process.env.NODE_ENV !== "test") {
        app.use((0, morgan_1.default)("combined"));
    }
}
exports.default = default_1;
