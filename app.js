const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

//for middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

//DB connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //to keep db connection alive
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("DB CONNECTION FAILED");
  });

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//MY Routes
app.use("/api", authRoutes); //to prefix the route with /api

//PORT
const port = process.env.PORT || 8000;

//starting server
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});
