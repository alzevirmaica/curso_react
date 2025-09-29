import { connection, statusConnection } from "./database/conection";
import status from "./database/aplicativo";

function acessarSistema() {
  connection({ ip: "192.168.54.10", name: "MySQL" });
}

acessarSistema();
statusConnection();
status();
