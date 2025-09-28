interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "123",
  nome: "Lef 4 Dead 2",
  descricao: "Jogo de acao e tiro",
  plataforma: ["PS5", "PC"],
};

//console.log(left4dead);

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4deadDlc: DLC = {
  id: "90",
  nome: "Left 4 dead -Novos Mapas",
  descricao: "4 novos mapas para jogar online",
  plataforma: ["PS5", "PC"],
  novoConteudo: ["Modo cop", "medalhas"],
  jogoOriginal: left4dead,
};

console.log(left4deadDlc);
