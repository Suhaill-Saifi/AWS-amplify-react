import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function Todoitem({ itemname, itemdate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className="container my-3 text-center">
        <div className="row kg-row">
          <div className="col-6 ">{itemname}</div>
          <div className="col-4">{itemdate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteItem(itemname)}
            >
              <MdDeleteOutline />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
