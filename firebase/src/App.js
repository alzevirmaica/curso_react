import { db } from "./firebaseConnection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [posts, setPosts] = useState([]);

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
      const postRef = collection(db, "posts");
      const snapshot = await getDocs(postRef);

      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        });
      });

      setPosts(lista);
    } catch (error) {
      console.log("Não foi possível encontrar esse documento" + error);
    }
  }

  async function editarPost() {
    try {
      const docRef = doc(db, "posts", idPost);
      await updateDoc(docRef, {
        titulo: titulo,
        autor: autor,
      });
      setIdPost("");
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.log("Não foi possível atualizar esse documento" + error);
    }
  }

  return (
    <div className="App">
      <h1>Teste</h1>

      <div className="container">
        <label>ID do post:</label>
        <input
          onChange={(e) => setIdPost(e.target.value)}
          value={idPost}
          placeholder="Digite o id do post"
        ></input>{" "}
        <br></br>
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>{" "}
        <br></br>
        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        ></input>{" "}
        <br></br>
        <button onClick={handleAdd}>Cadastrar</button> <br></br>
        <button onClick={getPosts}>Buscar Posts</button> <br></br>
        <button onClick={editarPost}>Atualizar Post</button> <br></br>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br></br>
                <span>Titulo: {post.titulo}</span> <br></br>
                <span>Autor: {post.autor}</span> <br></br> <br></br>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
