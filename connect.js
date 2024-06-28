const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware example (add your middleware here)
app.use(express.json());

const mongoDbConnectionString = "YOUR_CONNECTION_STRING";

//Connection
mongoose
  .connect(mongoDbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.error("DB Connection Error: ", err);
  });

// Define a basic route to test the server
app.get("/", (req, res) => {
  res.send("Connection Established successfully!");
});

// Listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
