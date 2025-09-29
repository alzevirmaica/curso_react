class Usuario {
  constructor(
    protected id: number, // Podemos chamar usuario ou classes que extende a classe usuario
    public nome: string,
    public email: string
  ) {}
}

class Admin extends Usuario {
  constructor(
    id: number,
    nome: string,
    email: string,
    public cargo: string,
    public nivel: number
  ) {
    super(id, nome, email);
  }

  protected mudarCargo(cargo: string): void {
    console.log("Alterando cargo", cargo);
    console.log("ID do usuario", this.id);
  }

  acessarAdmin() {
    this.mudarCargo("Designer");
  }
}

const usuario1 = new Admin(1, "Alzevir", "teste@teste.com", "programador", 2);
usuario1.acessarAdmin();
