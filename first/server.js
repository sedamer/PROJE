const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const uri = "mongodb+srv://smer:mercan123@cluster0.npotzxz.mongodb.net/";
async function connect() {
  try {
    await mongoose.connect(uri, { dbName: 'myDatabase', useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log(error);
  }
}

connect();


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog"
    }
  ]
});

const projectSchema = new mongoose.Schema({
  projectname: {
    type: String,
    required: true,
  },
  projectDate: {
    type: String,
    required: true,
  },
  projectabout: {
    type: String,
    required: true,
  },
  projectsubject: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  }
});
const blogSchema = new mongoose.Schema({
  blogname: {
    type: String,
    required: true,
  },
  blogsubject: {
    type: String,
    required: true,
  },
  blogabout: {
    type: String,
    required: true,
  },
  blogImage: {
    type: String,
    required: true,
  },
  blogDate: {
    type: String,
    required: true,
  }
});


const User = mongoose.model("User", userSchema);
const Project = mongoose.model("Project", projectSchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = { User, Project, Blog };
// Örnek verilerin eklenmesi
const user = new User({
  name: "Seda",
  lastname: "Mercan",
  email: "mrcnsedaa@gmail.com",
  skills: "React, Node.js, Mongo DB, Javascript, HTML,CSS, Bootstrap, C++",
  phone: "5442476459",
  education: "Computer Science",
  about: "Lorem ipsum dolor sit amet...",
  experience: "3 years",
  title: "Web Developer",
  blogs: [] // Boş bir dizi ataması


});

const project = new Project({
  projectname: "Project 1",
  projectDate: "2023-04-27",
  projectabout: "Lorem ipsum dolor sit amet...",
  projectsubject: "Web Development",
  projectImage: "project1.jpg"
});

const blog = new Blog({ //bu nesneye veriler veritabanından json olarak gelecek. Veritabanından veri çekme için How to get data from mongodb in react js project. Veritabanına veri kaydetme how to post data to mongo db in react js 
  blogname: "Blog Post 1",
  blogsubject: "React.js",
  blogabout: "Lorem ipsum dolor sit amet...",
  blogImage: "blog1.jpg",
  blogDate: "2023-04-27"
});

// User, Profile ve Blog modellerine ait ilişkilendirme
user.project = project;
user.blogs.push(blog);

// Örnek verilerin kaydedilmesi
user.save();
project.save();
blog.save();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
