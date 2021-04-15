const mongoose = require("mongoose");

const schema = mongoose.Schema;

const blog_schema = new schema({
  title: { type: String, required: true },
  snippet: { type: String, required: true },
  body: { type: String, required: true },
},{timestamps:true});

const Blog = mongoose.model("blog",blog_schema)

module.exports = Blog