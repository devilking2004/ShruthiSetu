import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: String,
    region: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Knowledge ||
  mongoose.model("Knowledge", KnowledgeSchema);
