import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

// import Todoitem from "./Todoitem";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const TodoName = todoNameElement.current.value;
    const DueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(TodoName, DueDate);
  };

  return (
    <>
      <div className="container my-3 text-center">
        <form className="row kg-row" onSubmit={handleAddButtonClick}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <IoMdAddCircleOutline />
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
