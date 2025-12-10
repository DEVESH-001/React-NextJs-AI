const { default: mongoose } = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      String,
      required: [true, "Please add a title"],
      trim: true,
      maxLength: [40, "Title cannot be more than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
      maxLength: [500, "Description cannot be more than 500 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true } //auto adds createdAt and updatedAt fields 
);


export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema); 