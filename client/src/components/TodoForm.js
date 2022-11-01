import React, { useState } from "react";
import axios from "axios";

const TodoForm = (props) => {
  const { todo, setTodo } = props;
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  // const [priority, setPriority] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/todo", {
        name,
        task,
        // priority,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTodo([...todo, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="d-flex justify-content-center">Simple Task Manager</h1>
        <form
          className="d-flex justify-content-center"
          onSubmit={onSubmitHandler}
        >
          <p className="d-flex justify-content-center mx-5">
            <label>Who is this task for?</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </p>
          <p className="d-flex justify-content-center mx-5">
            <label>What is the task?</label>
            <input
              type="text"
              onChange={(e) => setTask(e.target.value)}
            ></input>
          </p>
          {/* <p className="d-flex justify-content-center mx-5">
            <label>Is this task urgent?</label>
            <input
              type="checkbox"
              onChange={(e) => setPriority(e.target.value)}
            ></input>
          </p> */}
          <div className="d-flex">
            <input className="d-flex mx-2" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default TodoForm;
