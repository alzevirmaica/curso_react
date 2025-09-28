class Usuario {
  constructor(public nome: string, public email: string) {}
}

class Admin extends Usuario {
  constructor(
    nome: string,
    email: string,
    public cargo: string,
    public nivel: number
  ) {
    super(nome, email);
  }

  mudarCargo(): void {
    console.log("Alterando cargo");
  }
}

const usuario1 = new Admin("Alzevir", "teste@teste.com", "programador", 2);
console.log(usuario1);
usuario1.mudarCargo();
