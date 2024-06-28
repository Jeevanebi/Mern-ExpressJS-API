const express = require("express");
const mongoose = require("mongoose");
const { it } = require("node:test");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection configuration
const mongoDbConnectionString = "YOUR_CONNECTION_STRING";

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

// Define the Vendors schema and model
const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//Vendor Management
const Vendor = mongoose.model("vendors", vendors);

// Get all vendors
app.get("/vendors", async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.send(vendors);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Vendors by ID
app.get("/vendors/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).send({ message: "vendor not found" });
    }
    res.send(vendor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new Vendor
app.post("/createvendor", async (req, res) => {
  try {
    const newvendor = new Vendor(req.body);
    const savedvendor = await newvendor.save();
    res.send(savedvendor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a Vendor
app.put("/updatevendor/:id", async (req, res) => {
  try {
    const item = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).send();
    }
    res.send(`${req.params.id} Updated Successfully.`);
  } catch (error) {
    res.status(400).send(error);
  }
});
// Delete a Vendor
app.delete("/deletevendor/:tag", async (req, res) => {
  try {
    const tag = req.params.tag;
    const id = req.query.id;
    const deletedvendor = await Vendor.findOneAndDelete({ [tag]: id });
    if (!deletedvendor) {
      return res.status(404).send({ message: "vendor not found" });
    }
    res.send(`${id} Deleted Successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// User Management
const User = mongoose.model("users", users);

// Get all users
app.get("/users", async (req, res) => {
  try {
    const vendors = await User.find();
    res.send(vendors);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get User by ID
app.get("/users/:id", async (req, res) => {
  try {
    const vendor = await User.findById(req.params.id);
    if (!vendor) {
      return res.status(404).send({ message: "vendor not found" });
    }
    res.send(vendor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new user
app.post("/createuser", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a user
app.put("/updateuser/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).send();
    }
    res.send(`${req.params.id} Updated Successfully.`);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a Vendor
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const tag = req.params.tag;
    const id = req.query.id;
    const deletedUser = await User.findOneAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({ message: "vendor not found" });
    }
    res.send(`${req.query.id} Deleted Successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Express Server Ready at http://localhost:${PORT}`);
});
