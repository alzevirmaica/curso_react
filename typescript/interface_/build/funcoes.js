"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostraPromocao(preco) {
    console.log(`Promocao no curso por apenas: R$ ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso typescript",
    preco: 750,
    promocao: mostraPromocao,
};
let somaNumeros = (valor1, valor2) => {
    console.log(valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log(resultado);
