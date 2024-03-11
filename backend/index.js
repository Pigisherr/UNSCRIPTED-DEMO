import express from "express";
import { PORT, mongoDBURl } from "./config.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "models.js"


const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("yo G");
});

app.post("/register", (req, res) {
 userModel.create(req.body)
 .then()
})


mongoose
  .connect(mongoDBURl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("app is listening on port 5555");
    });
  })
  .catch((err) => {
    console.log(err);
  });
