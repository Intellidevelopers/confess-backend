import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default commentSchema;
