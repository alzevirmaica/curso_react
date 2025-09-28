type Status = "ABERTO" | "FECHADO";

class Loja {
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  criarLoja(): void {
    console.log(`Loja ${this.nome}, categoria ${this.categoria}`);
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`);
    });
    return `Pedido na mesa: ${mesa}`;
  }

  mudarStatus(status: Status): void {
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
