const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel.js");

app.use(cors());
app.use(express.Router());
app.use(express.json());

mongoose
  .connect("mongodb+srv://****:*******@cluster0.qdroxu7.mongodb.net/crud")
  .then(() => {
    console.log("DB connected");
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    });
  })
  .catch(() => {
    console.log("DB not connected");
  });

app.post("/create-user", async (req, res) => {
  const user = await User.create(req.body);
  try {
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get("/", async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/update/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate({ _id: id }, req.body);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "deleted record" });
  } catch (error) {
    res.status(500).json(error);
  }
});
