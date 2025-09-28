interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
  produtoPromocao: string;
}

const burguerK: LojaProps = {
  nome: "Alzevi",
  endereco: "rua logo ali",
  status: true,
  produtoPromocao: "burguer duplo",
};

function novaLoja({ nome, endereco, status }: LojaProps) {
  console.log(nome);
  console.log(endereco);
  console.log(status);
}

console.log({ nome: "Alzevir", endereco: "ali", status: false });
