const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const session = require('express-session');
const flash =require("connect-flash");
const nodemailer = require('nodemailer');
const app = express();
const uri = "mongodb+srv://smer:mercan123@cluster0.npotzxz.mongodb.net/";
// const dotenv = require("dotenv");
async function connect() {
    try {
      await mongoose.connect(uri, { dbName: 'myDatabase', useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to Mongo DB");
    } catch (error) {
      console.log(error);
    }
  }
  const users=db.collection('users')
  
  connect();
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cors({ origin : `${process.env.CLIENT_URL}`}));
const port =process.env.port || 3000;


//SEND API 
app.post ("/send",async(req,res)=>{
    try{
        res.json({msg :"server"});
    }
    catch(error){
        res.status(404).json({msg:"error"})
    }
});


app.listen(port,()=>{
    console.log('http://localhost:${port');
});


const userSchema = new mongoose.Schema({
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
    projectabout: {
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
  // View engine setup
  app.use(session({
    secret:'session secret',
    resave:false,
    saveUninitialized:false,
  }));
  
  
  const User = mongoose.model("Users", userSchema);
  const Project = mongoose.model("Project", projectSchema);
  const Blog = mongoose.model("Blog", blogSchema);
  module.exports = { User, Project, Blog };
  app.listen(8000, () => {
      console.log("Server started on port 8000");
    });
    




























// app.get('/api/users', async(req, res) => { // tüm yazıları getirme
// //yazıları veritabanından çekme
// //sonuçları da res.json() veya res.send() ile yanıtla
// try {
//     const { name, lastname, email,skills,phone,education,about,experience,title} = req.body;
//     const newUser = new User({ name, lastname, email,skills,phone,education,about,experience,title});
//     await newUser.save();
//     res.json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Sunucu hatası' });
//   }
// });

// // Yeni bir yazı ekleme
// app.post('/api/users', async(req, res) => {
//     // Yeni yazıyı veritabanına eklemek için gerekli kodu buraya yazın
//     // Başarı durumunu veya hata mesajını `res.json()` veya `res.send()` ile yanıtlayın
//     try {
//         const { name, lastname, email,skills,phone,education,about,experience,title} = req.body;
//         const newUser = new User({ name, lastname, email,skills,phone,education,about,experience,title});
//         await newUser.save();
//         res.json(newUser);
//       } catch (error) {
//         res.status(500).json({ message: 'Sunucu hatası' });
//       }
//     });
  
//   // Bir yazıyı güncelleme
//   app.put('/api/users', async(req, res) => {
//     // Belirli bir yazıyı güncellemek için gerekli kodu buraya yazın
//     // Başarı durumunu veya hata mesajını `res.json()` veya `res.send()` ile yanıtlayın
//     try {
//         const { name, lastname, email,skills,phone,education,about,experience,title} = req.body;
//         const newUser = new User({ name, lastname, email,skills,phone,education,about,experience,title});
//         await newUser.save();
//         res.json(newUser);
//       } catch (error) {
//         res.status(500).json({ message: 'Sunucu hatası' });
//       }
//     });






    

















// Örnek verilerin eklenmesi
// const user = new User({
//   name: "Seda",
//   lastname: "Mercan",
//   email: "mrcnsedaa@gmail.com",
//   skills: "React, Node.js, Mongo DB, Javascript, HTML,CSS, Bootstrap, C++",
//   phone: "5442476459",
//   education: "Computer Science",
//   about: "Lorem ipsum dolor sit amet...",
//   experience: "3 years",
//   title: "Web Developer",
//   blogs: [] // Boş bir dizi ataması


// });

// const project = new Project({
//   projectname: "Project 1",
//   projectDate: "2023-04-27",
//   projectabout: "Lorem ipsum dolor sit amet...",
//   projectsubject: "Web Development",
//   projectImage: "project1.jpg"
// });

//bu nesneye veriler veritabanından json olarak gelecek. Veritabanından veri çekme için How to get data from mongodb in react js project. Veritabanına veri kaydetme how to post data to mongo db in react js 
// const blog = new Blog({ 
//   blogname: "Blog Post 1",
//   blogsubject: "React.js",
//   blogabout: "Lorem ipsum dolor sit amet...",
//   blogImage: "blog1.jpg",
//   blogDate: "2023-04-27"
// });

// User, Profile ve Blog modellerine ait ilişkilendirme
// user.project = project;
// user.blogs.push(blog);

// // Örnek verilerin kaydedilmesi
// user.save();
// project.save();
// blog.save();

// app.listen(8000, () => {
//   console.log("Server started on port 8000");
// });
