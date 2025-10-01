import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1> Bem vindo a Home</h1>
      <Link to="/sobre">Sobre</Link> <br></br>
      <Link to="/contato">contato</Link>
    </div>
  );
}
