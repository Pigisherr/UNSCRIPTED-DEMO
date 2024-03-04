import express from "express";
import { PORT, mongoDBURl } from "./config.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("yo G");
});

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
