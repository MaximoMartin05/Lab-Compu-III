import { useState } from "react";

const ToDo = ({ title, onDelete }) => {
  const [done, setdone] = useState(false);
  const handleDone = () => {
    setdone(!done);
  };
  const handleDelete = () => {
    onDelete(title);
  };
  return (
    <>
      <h4 style={{ backgroundColor: done ? "green" : "red" }}> {title} </h4>
      <button onClick={handleDone}>Completado</button>
      <button onClick={handleDelete}>Eliminar</button>
    </>
  );
};

export default ToDo;
