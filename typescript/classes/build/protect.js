"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    id;
    nome;
    email;
    constructor(id, // Podemos chamar usuario ou classes que extende a classe usuario
    nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("Alterando cargo", cargo);
        console.log("ID do usuario", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(1, "Alzevir", "teste@teste.com", "programador", 2);
usuario1.acessarAdmin();
