const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema(
  {
    name: { type: String },
    task: { type: String },
    priority: { type: Boolean },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Todo", TodoSchema);
