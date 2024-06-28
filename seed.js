const express = require("express");
const mongoose = require("mongoose");
const { it } = require("node:test");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection configuration
const mongoDbConnectionString = "YOUR_CONNECTION_STRING/DB";

mongoose
  .connect(mongoDbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define the Vendors schema and model
const vendors = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Vendor = new mongoose.model("vendors", vendors);

let finalArr = [
  {
    from: "vendor 1",
    location: "Chennai",
    product: "watch-1",
    price: 149,
  },
  {
    from: "vendor 2",
    location: "Hyderabad",
    product: "watch-2",
    price: 1499,
  },
  {
    from: "vendor 3",
    location: "Hyderabad",
    product: "watch-3",
    price: 249,
  },
  {
    from: "vendor 4",
    location: "Bangalore",
    product: "watch-4",
    price: 14999,
  },
  {
    from: "vendor 5",
    location: "Bangalore",
    product: "watch-5",
    price: 3449,
  },
];

await Vendor.insertMany(finalArr);
