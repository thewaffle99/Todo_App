import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/todo/${id}`)
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{todo.name}</p>
      <p>{todo.task}</p>
    </div>
  );
};

export default Details;
