import { useState } from "react";

import "./App.css";

interface IdadeProps {
  nome: string;
  idade: number;
}

function App() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [infoIdade, setInfoIdade] = useState<IdadeProps | null>(null);

  function mostrarIdade() {
    const anoAtual = new Date().getFullYear();
    const idadeCalculada = anoAtual - Number(ano);

    if (!nome || !ano) {
      alert("Preencha todos os campos!");
      return;
    }

    if (isNaN(idadeCalculada) || idadeCalculada < 0) {
      alert("Ano inválido!");
      return;
    }

    setInfoIdade({
      nome: nome,
      idade: idadeCalculada,
    });
  }

  return (
    <div className="container">
      <h1 className="title">Descubra sua idade</h1>
      <div className="container-input">
        <label>Digite seu nome:</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          type="text"
        />
        <label>Digite o ano que nasceu:</label>
        <input
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Digite o ano que nasceu"
          type="number"
        />
        <button onClick={mostrarIdade}>Descobrir idade</button>
      </div>

      {infoIdade && (
        <p>
          {infoIdade.nome}, você tem {infoIdade.idade} anos.
        </p>
      )}
    </div>
  );
}

export default App;
