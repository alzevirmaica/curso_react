type DadosConta = {
  nome: string;
  numero: string;
  endereco: string;
};

abstract class contaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends contaBanco {
  abrirConta(dados: DadosConta): boolean {
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
