"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class contaBanco {
}
class PessoaFisica extends contaBanco {
    abrirConta(dados) {
        console.log(`Nova conta P.fisica criada com sucesso ${dados.nome}`);
        return true;
    }
}
const pessoa1 = new PessoaFisica();
pessoa1.abrirConta({
    nome: "joana Silva",
    numero: "1029-x",
    endereco: "Rua 15",
});
