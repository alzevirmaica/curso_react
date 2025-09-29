"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    id = "123";
    nome;
    idade;
    constructor(nome, idade) {
        (this.nome = nome), (this.idade = idade);
    }
}
const ana = new Pessoa("Ana", 21);
console.log(ana.id);
