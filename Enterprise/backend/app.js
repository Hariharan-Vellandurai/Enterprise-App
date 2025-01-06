const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
