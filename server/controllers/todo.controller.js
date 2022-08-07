const Todo = require("../models/todo.model");

module.exports = {
  createTodo: (req, res) => {
    Todo.create(req.body)
      .then((todo) => {
        res.json(todo);
        console.log(todo);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getAllTodos: (req, res) => {
    Todo.find({})
      .then((todo) => {
        console.log(todo);
        res.json(todo);
      })
      .catch((err) => {
        console.log(err);
        console.log("Find All failed");
        res.status(400).json(err);
      });
  },
  getOneTodo: (req, res) => {
    Todo.findOne({ _id: req.params.id })
      .then((oneTodo) => {
        console.log(oneTodo);
        res.json(oneTodo);
      })
      .catch((err) => {
        console.log("Find One failed");
        res.status(400).json(err);
      });
  },
  updateTodo: (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedTodo) => res.json(updatedTodo))
      .catch((err) => res.json(err));
  },
  deleteTodo: (req, res) => {
    Todo.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.json(err));
  },
};
