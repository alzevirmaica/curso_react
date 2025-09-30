import { useState, useEffect, useRef, useMemo, useCallback } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const [editTask, setEditTask] = useState({
    enable: false,
    task: "",
  });

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact");
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks));
  }, [tasks]);

  const handleRegister = useCallback(() => {
    if (!input) {
      alert("Preemcha o nome da sua tarefa");
      return;
    }

    if (editTask.enable) {
      handleSaveEdit();
      return;
    }

    setTasks((tarefas) => [...tarefas, input]);
    setInput("");
  }, [input, tasks]);

  function handleDelete(item: string) {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask);
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();
    setInput(item);
    setEditTask({
      enable: true,
      task: item,
    });
  }

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex((task) => task === editTask.task);
    const alltask = [...tasks];
    alltask[findIndexTask] = input;
    setTasks(alltask);

    setEditTask({
      enable: false,
      task: "",
    });

    setInput("");
  }

  const totalTarefa = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
        placeholder="Digite o nome da tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      ></input>
      <button onClick={handleRegister}>
        {editTask.enable ? "Atualizar tarefa" : "Adicionar tarefa"}
      </button>
      <hr></hr>
      <strong>Você tem {totalTarefa} tarefas</strong>
      <br></br>
      <br></br>

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button> <br></br>
        </section>
      ))}
    </div>
  );
}

export default App;
