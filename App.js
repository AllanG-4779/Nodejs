const express = require("express");

//logger
const morgan = require("morgan");

//route
const route = require("./blogRoutes/routes")
//mongoose

const mongoose = require("mongoose");

//get the blog model
const Blog = require("./Models/blogs.js");
const { result } = require("lodash");

//mongodb connection
//express app creation

const app = express();
const dbUri =
  "mongodb+srv://allang_001:ilovemum01.com@cluster0.dswp9.mongodb.net/blogsdb?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log(result);
  })
  .catch((error) => console.log(error));


//set the view engine

app.set("view engine", "ejs");
//if you wanna use a different folder for the views then you have to declare explicitly here othewise the default folder is the view folder if exists
//
//app.set("views","folder_name_containing_the_items")
//listen for request

// app.use((req, res,next) => {
//   let date = new Date();

//   let hour = date.getHours()
//   let minute = date.getMinutes()
//   let second = date.getSeconds()
//   console.log("A new request was made Today at", hour,":",minute,":",second );
//   console.log("host", req.hostname);
//   console.log("Method", req.method);
//   next()
// });
//middlware for static files rendering
app.use(express.static("static"));

//this is a logger middleware

app.use(morgan("combined"));

//getting the form data using a middleware

app.use(express.urlencoded({ extended: true }));

//trying to add example data

// app.get("/new-blog", (req, res) => {
//   const blog = new Blog({
//     title: "How to ensure you are not in the future by yourself",
//     snippet: "Food is the best food to eat and everyone",
//     body:
//       "The best is the future of the business when the people is not around the corner and its not in the future",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((error) => console.log(error));
// });

// //fetching all the data from mongodb
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) =>res.send(result))
//     .catch((error) => res.send(error));
// });

// //single blog
// app.get("/single", (req, res) => {
//   Blog.findById("60767600fe718717508a53bc")
//     .then((result) => res.send(result))
//     .catch((e) => console.log(e));
// });

//dummy data



//app routes
app.use(route)

app.use((req, res) => {
  res.render("404");
});
