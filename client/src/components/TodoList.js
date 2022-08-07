import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <div className="d-flex align-items-center justify-content-center">
              <Link to={`/todo/${todo._id}`} className="mx-2 my-2" key={index}>
                {todo.name}
              </Link>
              <p className="my-2">~</p>
              <p className="mx-2 my-2" key={index}>
                {todo.task}
              </p>
            </div>
            <p className="my-2" key={index}>
              {todo.priority}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
