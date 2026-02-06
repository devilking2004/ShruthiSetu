import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import protectedRoutes from "./routes/protected.routes";
import knowledgeRoutes from "./routes/knowledge.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/knowledge", knowledgeRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Shruthi Sethu backend is running 🚀" });
});

export default app;
