import mongoose from "mongoose";
import commentSchema from "./Comment.js";

const confessionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    category: {
      type: String,
      enum: ["Love", "Regret", "Career", "Family", "Mental Health", "Secrets"],
      required: true
    },
    mood: {
      type: String,
      enum: ["😊", "😢", "😤", "😰", "🥺", "😌"]
    },
    hasContentWarning: { type: Boolean, default: false },
    reactions: {
      relate: { type: Number, default: 0 },
      support: { type: Number, default: 0 }
    },
    comments: [commentSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Confession", confessionSchema);
