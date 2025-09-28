type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(uuid, nome);
}

function logUsuario(uuid: Uuid) {
  console.log(uuid);
}

acessar(123, "Alzevir");
logUsuario(123);
