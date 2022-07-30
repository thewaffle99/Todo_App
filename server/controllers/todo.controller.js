const Todo = require("../models/todo.model");

module.exports.createTodo = (request, response) => {
  Todo.create(request.body)
    .then((todo) => {
      response.json(todo);
      console.log(todo);
    })
    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
};
module.exports.getAllTodos = (request, response) => {
  Todo.find({})
    .then((todo) => {
      console.log(todo);
      response.json(todo);
    })
    .catch((err) => {
      console.log(err);
      response(err);
    });
};
