const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

config();

const app = express();
const { MONGO_URI, PORT } = process.env;
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./router/doctors.router.js"));
app.use(require("./router/specialtiy.router"));
app.use(require("./router/acceprance.router"));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server has ben started on port ${PORT}`);
});
