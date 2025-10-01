import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header>
      <h2>Alzevir Maicá</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">contato</Link>
      </div>
    </header>
  );
}
