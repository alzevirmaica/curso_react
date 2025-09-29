interface novoProduto<v extends number> {
  nome: string;
  preco: v;

  formatar(valor: v): string;
}

const arroz: novoProduto<number> = {
  nome: "Arroz branco",
  preco: 1500,
  formatar(valor: number): string {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  },
};

console.log(arroz.formatar(1500));
