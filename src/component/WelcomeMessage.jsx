import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const { todoitems } = useContext(TodoItemsContext);

  return (
    todoitems.length === 0 && (
      <p className={styles.WelcomeMessage}>Enjoy your day</p>
    )
  );
};

export default WelcomeMessage;
