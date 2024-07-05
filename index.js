const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://hk755063:MFwIYo2smm585o9v@clusterberserk.y23hfor.mongodb.net/?retryWrites=true&w=majority&appName=Clusterberserk"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Failed");
  });

//Product Schema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock:{
    type: Boolean,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Products", productSchema);

// Create

app.post("/api/products", async (req, res) => {
  const body = req.body;

  const product = await productModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    Category: body.Category,
  });

  console.log(product);
  return res.status(201).json({ message: "Product Created" });
});

app.listen(8086, () => {
  console.log("Server is running on port 8086");
});
