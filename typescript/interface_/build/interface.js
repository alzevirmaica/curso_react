"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burguerK = {
    nome: "Alzevi",
    endereco: "rua logo ali",
    status: true,
    produtoPromocao: "burguer duplo",
};
function novaLoja({ nome, endereco, status }) {
    console.log(nome);
    console.log(endereco);
    console.log(status);
}
console.log({ nome: "Alzevir", endereco: "ali", status: false });
