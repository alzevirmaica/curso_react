"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arroz = {
    nome: "Arroz branco",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    },
};
console.log(arroz.formatar(1500));
