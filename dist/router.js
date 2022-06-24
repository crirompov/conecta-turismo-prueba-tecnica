"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routeInitial_1 = __importDefault(require("./routes/routeInitial"));
const INDIVIDUALPART = "/ind";
const VERSION = "v2";
const BASE_API_PATH = "/api/care/" + VERSION;
function default_1(app) {
    app.use('/', routeInitial_1.default);
}
exports.default = default_1;
