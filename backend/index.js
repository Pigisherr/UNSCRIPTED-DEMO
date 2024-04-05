import express from "express";
import { mongoDBURl } from "./config.js";
import mongoose from "mongoose";
import userModel from "./models.js";
import cors from "cors";

const app = express();
app.use(express.json()); // Added parentheses to express.json
app.use(cors());

app.get("/", (req, res) => {
  console.log("Log into Chrome successfully");
  res.send("Hello from Express!");
});

app.post("/signIn", (req, res) => {
  const { username, password } = req.body;
  userModel
    .findOne({ username: username })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res
            .status(200)
            .json({
              message: "Login happened successfully!",
              redirect: "/home",
            });
        } else {
          res.status(401).json({ error: "Invalid email or password" });
        }
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((err) => {
      console.error("Error finding user:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.post("/signUp", async (req, res) => {
  try {
    const newUser = new userModel(req.body); // No need for { values }
    await newUser.save(); // Use newUser.save() to save the user
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

mongoose
  .connect(mongoDBURl)
  .then(() => {
    console.log("App connected to database");
    app.listen(4444, () => {
      console.log(`App is listening on port 4444`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
