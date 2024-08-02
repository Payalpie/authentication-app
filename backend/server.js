const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { signup, login } = require("./controllers/authController");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://mongo:27017/userdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.post("/api/signup", signup);
app.post("/api/login", login);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
