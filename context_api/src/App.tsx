import { Aluno } from "./components/Alunos";
import { Footer } from "./components/footer";

import UserProvider from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola Dev</h1>
        <br></br>
        <hr />

        <Aluno />

        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
