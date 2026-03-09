require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const errormiddleware = require("./Middlewares/errormiddleware");
app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");
app.use(express.json());
const PORT = process.env.PORT;
const Mongo_Url = process.env.MONGO_URL;
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});
//mongoDB connections
mongoose
  .connect(Mongo_Url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//route
app.use("/", authRoute);
app.use("/", GoalRouter);

app.use(errormiddleware);
app.listen(PORT, () => {
  console.log("Server running on port 8000");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
});

/* STEP 5: ADD MongoDB connection HERE */
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB Error:",err);
});

/* Start server */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
