import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 100,
  },
  content: {
    type: String,
    required: true,
    maxLenght: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// this will update the updatedAt field before every save
NoteSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
});

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
