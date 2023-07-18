const express = require("express");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const app = express();
const uri = "mongodb+srv://smer:mercan123@cluster0.npotzxz.mongodb.net/";




































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
