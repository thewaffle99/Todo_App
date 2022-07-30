import React, { useState } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
const Main = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <TodoForm todo={todo} setTodo={setTodo} />
      <hr />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};
export default Main;
