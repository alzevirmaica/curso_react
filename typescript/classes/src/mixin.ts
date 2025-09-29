import { applyMixins } from "./mixin/applyMixin.js";

class Automovel {
  ligar(): void {
    console.log("Automóvel Ligado com sucesso");
  }

  desligar(): void {
    console.log("Automóvel desligados com sucesso");
  }
}

class Especificacao {
  descricao: string;

  constructor(descricao: string) {
    this.descricao = descricao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao {}

applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro("GGol 1.6");

gol.ligar();

gol.descricao = "Modelo completo automatico";

console.log(gol);
