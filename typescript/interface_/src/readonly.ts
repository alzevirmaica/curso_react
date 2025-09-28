interface ProdutoProps {
  readonly id: string; // não altera o id por causa do readonly
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "tenis nike",
  descricao: "super tenis",
};

console.log(produto1);
