import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div>
      <h1> Contato</h1>
      <Link to="/sobre">Sobre</Link> <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}
