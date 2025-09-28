"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        return status === "ABERTO"
            ? console.log("Loja aberta com sucesso")
            : console.log("Loja fechada");
    }
}
const redBurguer = new Loja("RedBurguer", "lanches");
const loja2 = new Loja("Sorveteria", "sorvete");
redBurguer.criarLoja();
loja2.criarLoja();
console.log(redBurguer.emitirPedido(1, "Suco de laranja", "Hamburguer duplo"));
redBurguer.mudarStatus("ABERTO");
