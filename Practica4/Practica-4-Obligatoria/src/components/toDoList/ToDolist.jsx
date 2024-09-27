import ToDo from "../todo/ToDo";

const ToDolist = ({ list, onDelete }) => {
  const listMapped = list.map((todo, index) => (
    <ToDo key={index} title={todo.title} onDelete={onDelete} />
  ));

  return listMapped;
};

export default ToDolist;
