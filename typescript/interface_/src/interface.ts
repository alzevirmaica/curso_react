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

function novaLoja(propriedades: LojaProps) {
  console.log(propriedades.nome);
  console.log(propriedades.endereco);
  console.log(propriedades.status);
}

console.log({ nome: "Alzevir", endereco: "ali", status: false });
