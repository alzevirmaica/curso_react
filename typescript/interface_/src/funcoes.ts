interface cursoProps {
  id: string;
  nome: string;
  preco: number;
  promocao: (preco: number) => void;
}

function mostraPromocao(preco: number): void {
  console.log(`Promocao no curso por apenas: R$ ${preco}`);
}

const novoCurso: cursoProps = {
  id: "1",
  nome: "Curso typescript",
  preco: 750,
  promocao: mostraPromocao,
};

//console.log(novoCurso);

//console.log(novoCurso.promocao(350));

interface SomaProps {
  (valor1: number, valor2: number): Number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log(valor1 + valor2);

  return valor1 + valor2;
};

const resultado = somaNumeros(15, 10);

console.log(resultado);
