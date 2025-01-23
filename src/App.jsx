import React from "react";
import AddTodo from "./component/AddTodo";
import Todoitems from "./component/Todoitems";
import AppName from "./component/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const currenttodoitems = [];

  const [todoitems, settodoitems] = useState(currenttodoitems);

  const addNewItem = (itemname, itemdate) => {
    settodoitems((currentitem) => [
      ...currentitem,
      { name: itemname, date: itemdate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newcurrentitem = todoitems.filter(
      (item) => item.name !== todoItemName
    );

    settodoitems(newcurrentitem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoitems,
        addNewItem,
        deleteItem,
      }}
    >
      <center>
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <Todoitems></Todoitems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
