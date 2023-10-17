const express = require("express");
const connect = require("./config/db");
const userController = require("./controller/user");
const resturant = require("./controller/restaurant");
const authenticate = require("./middleware/authenticate");
const app = express();

app.use(express.json());

app.get("/", authenticate, async (req, res) => {
  return res.send({ message: "Hello baby" });
});

// user
app.post("/users", userController.createUser);
app.post("/login", userController.login);

// protected routes
app.get("/dashboard", authenticate, resturant.listResturant);

// Server creation and database connection
app.listen(3001, async () => {
  try {
    await connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
});