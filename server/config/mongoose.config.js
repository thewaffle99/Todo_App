const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"))
  .catch(() => console.log("Something is wrong with DB connection!"));
