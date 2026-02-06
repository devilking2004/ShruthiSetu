import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});
