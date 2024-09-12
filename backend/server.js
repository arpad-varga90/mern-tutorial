import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.port;

const app = express();

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
