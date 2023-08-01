// const express = require("express");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const app = express();
// const session = require('express-session');
// const flash =require("connect-flash");
// DB connection
// const uri = "mongodb+srv://smer:mercan123@cluster0.npotzxz.mongodb.net/";
// async function connect() {
//   try {
//     await mongoose.connect(uri, { dbName: 'myDatabase', useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected to Mongo DB");
//   } catch (error) {
//     console.log(error);
//   }
// }
// const users=db.collection('users')

// connect();

//schema
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   skills: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   education: {
//     type: String,
//     required: true,
//   },
//   about: {
//     type: String,
//     required: true,
//   },
//   blogs: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Blog"
//     }
//   ]
// });

// const projectSchema = new mongoose.Schema({
//   projectname: {
//     type: String,
//     required: true,
//   },
//   projectabout: {
//     type: String,
//     required: true,
//   },
//   projectImage: {
//     type: String,
//     required: true,
//   }
// });
// const blogSchema = new mongoose.Schema({
//   blogname: {
//     type: String,
//     required: true,
//   },
//   blogsubject: {
//     type: String,
//     required: true,
//   },
//   blogabout: {
//     type: String,
//     required: true,
//   },
//   blogImage: {
//     type: String,
//     required: true,
//   },
//   blogDate: {
//     type: String,
//     required: true,
//   }
// });
// // View engine setup
// app.use(session({
//   secret:'session secret',
//   resave:false,
//   saveUninitialized:false,
// }));


// const User = mongoose.model("Users", userSchema);
// const Project = mongoose.model("Project", projectSchema);
// const Blog = mongoose.model("Blog", blogSchema);
// module.exports = { User, Project, Blog };
// app.listen(8000, () => {
//     console.log("Server started on port 8000");
//   });
  