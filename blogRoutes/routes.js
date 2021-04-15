const express = require("express");
const Blog = require("../Models/blogs");
const {
  blog_index,
  blog_details,
  blog_create,
  blog_del,
  render_about,
  blog_new,
  redirect_about
} = require("../Controllers/controllers");
const route = express.Router();
route.get("/", (req, res) => {
  res.redirect("/blogs");
});

//all blogs
route.get("/blogs", blog_index);

//handles form

route.post("/add-new-post", blog_create);
//getting a single data getting the param passed in the url

route.get("/blogs/:id", blog_details);

//delete a blog
route.delete("/blogs/:id", blog_del);
//updateblog
// app.get("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   Blog.findById(id)
//     .then((result) => {
//       console.log(result);
//       return res.json({ redir: "/blogs" });
//     })
//     .catch((e) => console.log(e));
// });

route.get("/about", render_about);

route.get("/blog/new", blog_new);

//redirects
route.get("/about-us",redirect_about);

//not found
module.exports = route;
