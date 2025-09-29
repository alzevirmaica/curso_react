"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("./database/conection");
const aplicativo_1 = __importDefault(require("./database/aplicativo"));
function acessarSistema() {
    (0, conection_1.connection)({ ip: "192.168.54.10", name: "MySQL" });
}
acessarSistema();
(0, conection_1.statusConnection)();
(0, aplicativo_1.default)();
