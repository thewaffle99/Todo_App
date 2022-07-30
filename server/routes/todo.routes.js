const TodoController = require("../controllers/todo.controller");
module.exports = (app) => {
  app.get("/api/todos", TodoController.getAllTodos);
  app.post("/api/todo", TodoController.createTodo);
};
