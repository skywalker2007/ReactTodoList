import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      const newTodo = { label: todoText, status: "not-done" };
      setTodos([...todos, newTodo]);
    },
    markComplete: todoIndex => {
      todos[todoIndex].status = "done";
    },
    deleteToDo: todoIndex => {
      const newList = todos.filter((_, index) => index !== todoIndex);
      setTodos(newList);
    }
  };
};
