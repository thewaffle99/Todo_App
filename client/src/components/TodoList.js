import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = (props) => {
  const { todo, setTodo } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {todo.map((todo, index) => {
        return (
          <div className="d-flex align-items-center justify-content-center">
            <p className="mx-2 my-2" key={index}>
              {todo.name} ~ {todo.task}
            </p>
            <p className="mx-2 my-2" key={index}>
              {todo.priority}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
