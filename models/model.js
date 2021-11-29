// models/User.js

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  sku: String,
  description: String,
  img: String,
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
