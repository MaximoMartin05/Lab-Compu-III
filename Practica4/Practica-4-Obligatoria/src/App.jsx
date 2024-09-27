import { useState } from "react";
import ToDolist from "./components/toDoList/ToDolist";
import NewToDo from "./components/newToDo/NewToDo";
import "./App.css";

function App() {
  const [listToDo, setlistToDo] = useState([
    { title: "limpiar la compu" },
    { title: "instalar autocad" },
  ]);

  const addToDo = (newToDoTransformed) => {
    setlistToDo([...listToDo, newToDoTransformed]);
  };

  const Delete = (title) => {
    setlistToDo(listToDo.filter((todo) => todo.title !== title));
  };

  return (
    <>
      <ToDolist list={listToDo} onDelete={Delete} />
      <NewToDo addToDo={addToDo} />
    </>
  );
}

export default App;
