import { use, useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }

    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div>
      <h1>Conhecendo UseState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <br></br> <br></br>
      <input
        placeholder="Digite a sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      ></input>
      <br></br> <br></br>
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr></hr>
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>idade: {infoAluno?.idade}</h4>
      <hr></hr>
      <br></br>
      <h1>Contador com UseState</h1>
      <button onClick={adicionar}>+</button> {contador}{" "}
      <button onClick={diminuir}>-</button>
    </div>
  );
}
