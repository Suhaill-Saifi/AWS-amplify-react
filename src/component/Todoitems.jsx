import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoItemsContext } from "../store/todo-items-store";

const Todoitems = () => {
  const { todoitems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      {todoitems.map((item, key) => (
        <Todoitem
          key={key}
          itemname={item.name}
          itemdate={item.date}
          onDeleteClick={deleteItem}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
