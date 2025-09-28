type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de video",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 2,
};

type produtoInfo = Info & Categoria;
const novoProduto: produtoInfo = {
  id: 54321,
  nome: "teclado",
  slug: "teclado2",
  quantidadeProduto: 10,
};

console.log(novoProduto);
