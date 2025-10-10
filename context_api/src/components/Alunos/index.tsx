import { Nome } from "../Nome";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";

export function Aluno() {
  const { qtdAlunos, mudaNome } = useContext(UserContext);
  return (
    <div>
      <h3>Quantidade de alunos: {qtdAlunos}</h3>
      <button onClick={() => mudaNome("Alzevir")}>Mudar nome</button>
      <br></br>
      <Nome />
    </div>
  );
}
