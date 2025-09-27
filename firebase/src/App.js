import { db, auth } from "./firebaseConnection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
          let listaPost = [];

          snapshot.forEach((doc) => {
            listaPost.push({
              id: doc.id,
              titulo: doc.data().titulo,
              autor: doc.data().autor,
            });
          });
          setPosts(listaPost);
        });
      } catch (error) {
        console.log("Alzgo deu errado" + error);
      }
    }

    loadPosts();
  }, []);

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

  async function excluirPost(id) {
    try {
      const docRef = doc(db, "posts", id);
      await deleteDoc(docRef);
      alert("post deletado com sucesso");
      setEmail("");
      setSenha("");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("Senha muito fraca");
      } else if (error.code === "auth/email-already-is-use") {
        alert("email já existe");
      }
    }
  }

  async function novoUsuario() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Cadastrado com sucesso!");
    } catch (error) {
      console.log("Não foi popssível cadastrar" + error);
    }
  }

  return (
    <div className="App">
      <h1>Teste</h1>

      <div className="container">
        <h2>Usuários</h2>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um email"
        ></input>
        <br></br>
        <label>Senha</label>
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Informa sua senha"
        ></input>
        <br></br>
        <button onClick={novoUsuario}>Cadastrar</button>
      </div>
      <br></br>
      <hr></hr>

      <div className="container">
        <h2>Posts</h2>
        <label>ID do post:</label>
        <input
          onChange={(e) => setIdPost(e.target.value)}
          value={idPost}
          placeholder="Digite o id do post"
        ></input>
        <br></br>
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
                <span>Autor: {post.autor}</span> <br></br>
                <button onClick={() => excluirPost(post.id)}>Excluir</button>
                <br></br> <br></br>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
