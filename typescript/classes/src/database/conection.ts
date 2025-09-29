type Connection = {
  ip: string;
  name: string;
};

export function connection(info: Connection) {
  console.log("Conexão realizada com sucesso", info.ip);
  return true;
}

export function statusConnection(): void {
  console.log("Servidor funcionando com sucesso");
}
