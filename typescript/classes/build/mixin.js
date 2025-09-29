"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_js_1 = require("./mixin/applyMixin.js");
class Automovel {
    ligar() {
        console.log("Automóvel Ligado com sucesso");
    }
    desligar() {
        console.log("Automóvel desligados com sucesso");
    }
}
class Especificacao {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_js_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("GGol 1.6");
gol.ligar();
gol.descricao = "Modelo completo automatico";
console.log(gol);
