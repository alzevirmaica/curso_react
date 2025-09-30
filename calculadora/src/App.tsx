import { useState, FormEvent, useActionState } from "react";

import logoImg from "./assets/logo.png";

import "./App.css";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    const calculo = alcoolInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number) {
    const valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div className="div">
      <main className="container">
        <img src={logoImg} alt="Logo da calculadora"></img>
      </main>
      <h1 className="title">Qual melhor opção?</h1>

      <form className="form" onSubmit={calcular}>
        <label>Àlcool (preço por litro)</label>
        <input
          className="input"
          type="number"
          placeholder="1,19"
          min={1}
          step={0.01}
          required
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
        ></input>

        <label>Gasolina (preço por litro)</label>
        <input
          className="input"
          type="number"
          placeholder="4,90"
          min={1}
          step={0.01}
          required
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
        ></input>

        <input className="button" type="submit" value="calcular"></input>
      </form>

      {info && Object.keys(info).length > 0 && (
        <section className="result">
          <h2 className="result-title">{info.title}</h2>

          <span>{info.alcool}</span>
          <span>{info.gasolina}</span>
        </section>
      )}
    </div>
  );
}

export default App;
