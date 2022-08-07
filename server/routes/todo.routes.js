const TodoController = require("../controllers/todo.controller");
module.exports = (app) => {
  app.get("/api/todos", TodoController.getAllTodos);
  app.post("/api/todo", TodoController.createTodo);
  app.get("/api/todo/:id", TodoController.getOneTodo);
  app.put("/api/todo/:id", TodoController.updateTodo);
  app.delete("/api/todo/:id", TodoController.deleteTodo);
};
