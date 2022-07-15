import React from "react";
import { AddTodo } from "./AddTodo";
import Todos from "./Todos";
export const Contents = (props) => {
  return (
    <div>
      <AddTodo addTodo={props.addTodo} clearTask={props.clearTask} />
      <Todos todos={props.todos} onDelete={props.onDelete} />
    </div>
  );
};
