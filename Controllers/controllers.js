const { render } = require("ejs");
const Blog = require("../Models/blogs");
//controls the rendering of data to the index page

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { posts: result });
    })
    .catch((error) => console.log("error occured"));
};
//getting a specific details
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.render("blogDetails", { body: result }))
    .catch((error) => console.log(error));
};

//handle form rendering

 const blog_create = (req, res) => {
   console.log(req.body);
   const blog = new Blog(req.body);
   blog
     .save()
     .then((response) => {
       res.redirect("/blogs");
     })
     .catch((e) => {
       console.log(e);
     });
 };
 //handle deleting a blog
 const blog_del = (req, res) => {
   const id = req.params.id;
   Blog.findByIdAndDelete(id)
     .then((result) => {
       res.json({ redirect: "/blogs" });
     })
     .catch((e) => console.log(e));
 };

 //render about
const render_about = (req,res)=>{
    res.render("about")
}

//new create
const blog_new = (req,res)=>{
    render("create")
}
//about redirect
const redirect_about = (req,res)=>{
    res.redirect("about")
}
module.exports = {
  blog_index: blog_index,
  blog_details: blog_details,
  blog_create:blog_create,
  blog_del:blog_del,
  render_about:render_about,
  blog_new:blog_new,
  redirect_about:redirect_about
};
