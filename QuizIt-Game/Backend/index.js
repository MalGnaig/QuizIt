const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
const env = require("dotenv/config");

const app = express();

// you can find this code online basic for setting up bodyParser and cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//Instead of adding multiple get, post on different areas we are creating a router which has all the different areas to make the code cleaner.
app.use("/", router);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database has connected"))
  .catch((e) => console.log("error " + e));

const port = process.env.PORT || 4000;
//I'm just doing the arrow function so when the server is running i'll log it and show what port it's running on
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
