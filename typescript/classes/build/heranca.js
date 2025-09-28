"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("Alterando cargo");
    }
}
const usuario1 = new Admin("Alzevir", "teste@teste.com", "programador", 2);
console.log(usuario1);
usuario1.mudarCargo();
