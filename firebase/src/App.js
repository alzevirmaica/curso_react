import { db } from "./firebaseConnection";
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd() {
    // try {
    //   await setDoc(doc(db, "posts", "12345"), {
    //     titulo: titulo,
    //     autor: autor,
    //   });
    //   console.log("Documento adicionado com sucesso!");
    // } catch (error) {
    //   console.log("gerou um erro" + error);
    // }

    try {
      await addDoc(collection(db, "posts"), {
        titulo: titulo,
        autor: autor,
      });
      console.log("Documento adicionado com sucesso!");
      setAutor("");
      setTitulo("");
    } catch (error) {
      console.log("gerou um erro" + error);
    }
  }

  async function getPosts() {
    try {
      const postRef = doc(db, "posts", "12345");
      const snapshot = await getDoc(postRef);

      if (snapshot.exists()) {
        setAutor(snapshot.data().autor);
        setTitulo(snapshot.data().titulo);
      } else {
        console.log("Documento não encontrado!");
      }
    } catch (error) {
      console.log("fudeu " + error);
    }
  }

  return (
    <div className="App">
      <h1>Teste</h1>

      <div className="container">
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        ></input>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={getPosts}>Buscar Posts</button>
      </div>
    </div>
  );
}

export default App;
