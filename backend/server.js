// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dishatiwari181141:Tiwari@cluster0.zjinq.mongodb.net/fake?retryWrites=true&w=majority&appName=Cluster0");

// Schema
const LoginSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const Login = mongoose.model("Login", LoginSchema);

// Route
app.post("/api/login", async (req, res) => {
  try {
    await Login.create(req.body);
    res.status(200).send("Saved successfully");
  } catch (err) {
    res.status(500).send("Error saving");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
