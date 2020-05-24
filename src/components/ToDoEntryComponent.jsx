import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));

const ToDoEntryComponent = ({ saveTodo }) => {
  const [todoValue, setTodoValue] = useState("");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveTodo(todoValue);
          setTodoValue("");
        }}
      >
        <TextField
          id="todo-entry"
          label="ToDo entry"
          variant="outlined"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth
          onChange={event => {
            setTodoValue(event.target.value);
          }}
          value={todoValue}
        />
      </form>
    </div>
  );
};

export default ToDoEntryComponent;
