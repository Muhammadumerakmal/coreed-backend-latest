

// const fs = require("node:fs")

// fs.writeFileSync("practice.txt",'hello this is my fist program of node.js!')

// const content = fs.readFileSync("practice.txt",'utf-8')

// console.log(content);







// fs.writeFileSync("my.txt","CODING NIGHT")
// console.log("file written suceesfully");

// const userdata={
//     name:"taha",
//     age:25,
//     hobbies:["coding","explanation","ready to help"]
// }


// fs.writeFileSync("info.json",JSON.stringify(userdata))
// console.log("json file created sucessfully");





// const readdata = fs.readFileSync('info.json',"utf-8")
// const showinstr =JSON.parse(readdata)
// console.log('👤 user data:',showinstr);

// fs.appendFileSync("my.txt","\n this is appended text")
// console.log("file appended sucessfully");    
// fs.renameSync("my.txt","your.txt")
// console.log("file renamed sucessfully");


// const { log } = require("node:console")
// const eventemitter = require("node:events")

// const myemitter = new eventemitter()

// myemitter.on("schoolbell",(name)=>{
//     console.log(`the bell is runged go back to home ${name} yeh! 🙂`);
//     console.log(`the school teachers and staff are gone😎!`);
    
    

// })

// myemitter.emit("schoolbell","umer akmal")


// Homework:

// - convert image, make new file
// - convert voice, make new file
// - convert video, make new file

// //  data in base64 format
// const fs = require("node:fs")
// const myimage=fs.readFileSync("image_folder/mypic.jpg","base64")

// // data in binary format
// const convertedbinaryform=Buffer.from(myimage,"base64")
// // write new file  
// const finaldata=fs.writeFileSync("image_folder/mynewpic.jpg",convertedbinaryform)

// console.log("image converted sucessfully");



// const fs = require("node:fs");

// // Read audio file in base64
// const myAudio = fs.readFileSync("audio_folder/LSD - Audio (Official Video) ft. Labrinth, Sia, Diplo.mp3", "base64");

// // Convert back to binary format
// const convertedBinary = Buffer.from(myAudio, "base64");

// // Write new audio file
// fs.writeFileSync("audio_folder/LSD - Audio (Official Video) ft. Labrinth, Sia, Diploh.mp3", convertedBinary);

// console.log("Audio converted successfully ✅");


// const fs = require("fs");

// // Read the original video in base64
// const videoBase64 = fs.readFileSync("video_folder/Darrna Chordo!.mp4", "base64");

// // Convert base64 to binary
// const binaryVideo = Buffer.from(videoBase64, "base64");

// // Save new video file
// fs.writeFileSync("video_folder/Darrna Chordo!umer.mp4", binaryVideo);

// console.log("Video converted successfully ✅");


//-------------------https module ------------------//

;


const { log } = require("node:console");
// const http = require("node:http");

// // 2️⃣ Create a server that listens for requests
// const server = http.createServer(function (request, response) {
//     response.writeHead(200); // Say "OK"
//     response.end("Hello World!"); // Reply with a message
// });

// // 3️⃣ Start the server
// server.listen(9000, function () {
//     console.log("🚀 Server is running on http://localhost:9000");
// });


// const http = require("node:http");
 

// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
// res.end("hello from umer akmal")// show this message on browser
// console.log("hello sir taha");// show this message on terminal


// })

// server.listen(8000,()=>{
//     console.log("server is running on http://localhost:8000");
// })


// const express = require("express")
// const app = express()// instiancete express application

// app.get("/",(req,res)=>{ 
//     res.send("hello from umer akmal")// show this message on browser
//     console.log("hello from world");// show this message on terminal
// })

// app.listen(9000, ()=>{

//     console.log("i am running");
// })


//-------.env file and import---------//
const {getapifunction}=require("./controllers/api.controllers")
require("dotenv/config") // load from env file
const express = require("express") // npm package express

// setting up express app
const app = express()

const PORT = process.env.HOST_PORT ?? 8000

app.get("/",getapifunction)
// listen on port //

app.listen(PORT,()=>{
    console.log(`server is running on port`);
}) 


// node --watch main.js
//mvc architecture //
// m=db
// v=frontend
//c=controller

//// get,post,del,patch,put