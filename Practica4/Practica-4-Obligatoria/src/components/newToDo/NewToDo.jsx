import { useState } from "react";

const NewToDo = ({ addToDo }) => {
  const [newToDo, setnewToDo] = useState("");

  const handleInput = (e) => {
    setnewToDo(e.target.value);
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (newToDo.trim() !== "") {
      const newToDoTransformed = {
        title: newToDo,
      };

      addToDo(newToDoTransformed);
      setnewToDo("");
    }
  };

  return (
    <>
      <form action="">
        <input type="text" onChange={handleInput} value={newToDo} />
        <button onClick={handleTask}>Agregar</button>
      </form>
    </>
  );
};

export default NewToDo;
