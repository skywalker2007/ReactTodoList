import React, { useState } from "react";
import "./styles.css";

import { Grid } from "@material-ui/core";
import { ToDoEntryComponent, ToDoListComponent } from "./components";

export default function App() {
  const [todos, setTodos] = useState(["say hello"]);

  const addTodo = todoText => {
    const trimmedText = todoText.trim();

    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  };

  const deleteTodo = todoIndex => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Grid container>
        <Grid item>
          <ToDoEntryComponent saveTodo={addTodo} />
          <ToDoListComponent todos={todos} deleteTodo={deleteTodo} />
        </Grid>
      </Grid>
    </div>
  );
}
