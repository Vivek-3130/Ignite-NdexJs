// const car ={
//     brand:"BMW",
//     model:"Z3"
// }
// module.exports=car; 
// //we can also use exports.car=car,isme car will be prsented as a key and the values will be represent as the objects of car

// const { setWith } = require("lodash")

// console.log("Hi NPM Scripts");

// by using npx we can excecute the modules without including them into the main file of js


// function getMessage(msg,callback){
//     setTimeout(()=>{
//         console.log(msg);
//         callback()
//     },1000)
// }

// function displayMessage(){
//     console.log("Display Message");
// }

// getMessage("Get Message",displayMessage)

// Simulating asynchronous operations with callbacks
// function stepOne(callback) {
//     setTimeout(function() {
//         console.log("Step One completed");
//         callback();
//     }, 1000);
// }

// function stepTwo(callback) {
//     setTimeout(function() {
//         console.log("Step Two completed");
//         callback();
//     }, 1000);
// }

// function stepThree(callback) {
//     setTimeout(function() {
//         console.log("Step Three completed");
//         callback();
//     }, 1000);
// }

// // Nested callbacks creating a callback hell
// stepOne(function() {
//     stepTwo(function() {
//         stepThree(function() {
//             console.log("All steps completed!");
//         });
//     });
// });

// Stimulating code with promises

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Run Before"),1000)
//     // setTimeout(()=>reject(new Error("buddy error aaya hai ")),1000)
// })

// promise.then(
//     result=>{
//         console.log(result);
//         runAfter(); //promises make the code asynchronos as they halt the execution first get delivred them selves then next step happens
//     }
// )
// .catch(
//     err=>{
//         console.log(err.message);
//     }
// )

// function runAfter(){
//     console.log("Run after");
// }


// Asyn.Awaits functions

// Function that returns a Promise to simulate an asynchronous operation
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;  // Change this to false to simulate an error

//             if (success) {
//                 resolve("Async operation completed");
//             } else {
//                 reject(new Error("Something went wrong in the async operation"));
//             }   
//         }, 1000);
//     });
// }

// // Async function using await to handle asynchronous code more cleanly
// async function runAsyncCode() {
//     try {
//         console.log("Start async operation...");
//         const result = await asyncOperation();
//          console.log(result);
//         console.log("Async operation completed successfully!");
//     } catch (error) {
//         console.error("An error occurred:", error.message);
//     }
// }

// // Call the async function
// runAsyncCode();


/*How to create own server */
// const http = require("http");
// const hostname="127.0.0.1";
// const port=3000;

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write("Welcome to HTTP server");
//     // res.statusCode=200;
//     // res.setHeader('Content-Type','text/plain');
//     // res.end("Welcome to HTTP server");
// }).listen(port,hostname, ()=>{
//     console.log(`Server running on http://${hostname}:${port}/`);
// })

/*Making HTTP get request*/ 

const http = require("https");

// http.get("http://api.open-notify.org/astros.json",resp=>{
//     let data="";
//     resp.on('data',chunk=>{
//         data+=chunk
//     });

//     resp.on('end',()=>{
//         let jsonData=JSON.parse(data);
//         console.log(jsonData);
//     })
// })

/*Making HTTP post request*/ 
// const axios= require("axios");

// const data = JSON.stringify({
//     name:"John Doe",
//     Job:"Content Writer"
// })

// // Log the data being posted
// console.log('Data being posted:', data);

// const options= {
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:{
//         'Content-Type': 'application/json'
//     },
// };

//request
// The http.request method in Node.js takes two arguments: an options object specifying details of the request, and a callback function to handle the response
// const req = http.request(options,(res)=>{
//     let body='';
//     console.log("Status Code: ",res.statusCode);

//     res.on('data',(chunk)=>{  //jb dadat ka ec=ven aayega mtlb jo bhi data hoga vo chunk se body me jayega
//         body+=chunk;
//     })

//     res.on('end',()=>{
//         console.log("Body:",JSON.parse(body));
//     })
// })
// //posting it
// req.write(data);
// req.end();

/*Second way of posting using the axios*/

// axios.post('https://reqres.in/api/users',data).then(res=>{
//     console.log(`Status Code: ${res.status}`);
//     console.log(`Body: ${JSON.stringify(res.data)}`);
// }).catch(err=>{
//     console.log(`Error Occured: ${err.message}`);
// })

/*Working with files*/

const fs = require("fs");

// fs.readFile("filename.txt",'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.stat("filename.txt",(err,stats)=>{
//     if(err) throw err;
//     console.log(stats.isFile); // for checking wheather is file or not
//     console.log(stats.isDirectory); //for checking whether is directory or not
// })

// const content = "Node Application";
// fs.writeFile("new.txt",content,{flag:'a'},err=>{
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log("Successfully Done");
// });
 
/*Removal of file*/
// fs.unlink('filename.txt',err=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File Removed");
// })


/*Routing in Nodejs*/

// function index(request,response){
//     response.writeHead(200);
//     response.end("Node Routing");
// }

// http.createServer((req,res)=>{
//     if(req.url == '/'){
//         return index(req,res);
//     }
// }).listen(8000)


/* Buffers */

// const buf = Buffer.from("hey");

//how to write into buffer

// const buf = Buffer.alloc(4);
// buf.write("Babu")
// console.log(buf.toString());

// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);

// buf[0]=111//o;
// console.log(buf.toString());


/* Exception Handling*/

// throw new Error('error message');
// try {
//     console.log("Start try block");
//     // getMaxLi;  //as yha error occur hua isiliye agli vali nhi chalegi statement
//     throw new Error("error");//This statement can also be used for detecting any error
//     console.log("End try block");
// } catch (error) {
//     console.log(("Error Message",error.message));
// }

/*Error Handling In Promises*/

// doSomething1()
// .then(()=>{
//     return doSomething2().catch(err=>{
//         //handle error
//         throw err; //break the chain
//     })
// })
// .then(()=>{
//     return doSomething2().catch(err=>{
//         //handle error
//         throw err; //break the chain
//     })
// })
// .catch(err=>console.log(err.message));

/*Asyn/await error handling */

// async function someFunction(){
//     try {
//         await someOtherFunction();
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
/*----------calling a link------------ */

// const express = require('express');
// const axios = require('axios');
// const app = express();

// app.get("/ping", async (req, res) => {
//     try {
//         // Make a GET request to the provided YouTube link
//         const response = await axios.get('https://www.youtube.com/watch?v=DcldN9MmSfE&list=PLynWqC6VC9KMwdsbBIG68YEBMlUrTwed-&index=25');
        
//         // Send the response from the YouTube link to the client
//         res.send(response.data);
//     } catch (error) {
//         console.error('Error making request:', error.message);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get("/watch", (req, res) => {
//     res.send('This is the /watch endpoint');
// });

// app.get("/watchvideo", (req, res) => {
//     // Redirect to the YouTube video link
//     res.redirect('https://www.youtube.com/watch?v=DcldN9MmSfE&list=PLynWqC6VC9KMwdsbBIG68YEBMlUrTwed-&index=25');
// });

// app.listen(3000, () => {
//     console.log("Server running on 3000 port");
// });


/*--------------Express------------*/

// const express = require('express');
// const app = express();

// app.get("/ping",(req,res)=>{
//     res.send('Ping-Pong-Pong');
// })

// app.listen(3000,()=>{
//     console.log("Server running on 3000 port");
// })


/*----------Middleware--------*/ 

// const express = require("express")
// const app = express();

// const myLogger= function(req,res,next){
//     console.log("LOGGED IN");
//     next();
// }

// app.use(myLogger); //first this will get excecuted

// app.get('/login',(req,res)=>{
//     res.redirect("https://www.instagram.com/")
// })
// .listen(3000,()=>{
//     console.log("Server running on 3000 port");
// })

/*Serving Static Files in node*/ 

// const express = require("express")
// const app = express();

// app.use(express.static("public"))

// app.get('/',(req,res)=>{
//     res.send('Static Files')
// })

// app.listen(300,()=>console.log("App Started on PORT 3000"))

/*-------Routing in express-------*/ 

// const port = 3000;
// 

/*---------Views----------- */

// app.set('view engine','pug');

// app.get('/',(req,res)=>{
//     res.render('\index',{title:"Express View Engine"})
// }).listen(port,()=>{
//     console.log(`Server is runnung on ${port}`);
// })
 /*----------All the dependencies for views,sessions,cookies */
const express = require("express")
const app = express();
const port = 3000;
const path = require('path');
const session = require("express-session")
const cookies = require("cookie-parser")

/*-------Views--------*/
// app.use(express.urlencoded({extended:true}))

// app.set("views",path.join(__dirname,"views"));
// app.set("view engine",'ejs'); //for the use of html as view we have to use ejs

// // // Serve static files from the "public" directory
// // app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req,res)=>{
//     res.render("index")
// })

// app.post("/form_submit",(req,res)=>{
//     const username = req.body.username;
//     const email = req.body.email;
//     res.end(`Your userId is @${username} and your email address is ${email}`) 
// })
// app.listen(port,()=>{
//     console.log(`Server running on ${port}`);
// })

/*-----------Sessions------------*/


// //Middleware function

// app.use(session({
//     secret:"Your Secret Key",
//     resave:true,
//     saveUninitialized:true
// }))

// app.get("/",(req,res)=>{
//     req.session.name="Vivek"; //session object
//     req.session.id=1;
//     return res.send("Session-set");
// })

// app.get("/session",(req,res)=>{
//     var name = req.session.name;
//     var id = req.session.id;
//     return res.send(`Name is: ${name} and id is: ${id}`);
// })
// app.get("/destroy",(req,res)=>{  //destroying of session
//     req.session.destroy(function(er){
//         console.log("Session has been destroyed");
//     })
//     res.send("Session mar gya hai")
// })

// app.listen(port,()=>{
//     console.log(`Server running on ${port}`);
// })


/*---------Cookies----------*/
// app.use(cookies());

// let users ={
//     name:"john",
//     age:28
// }

// app.get("/",(req,res)=>{
//     res.send("Cookies Tutorial");
// })

// app.get("/setuser",(req,res)=>{ //yha pr chize cookies ke under stored hui
//     res.cookie("userData",users)
//     res.send("User DataParsed To Cookies")
// })

// app.get("/getuser",(req,res)=>{  //destroy ke pehle agr isko call krte to coonect.id,name,age aata
//     res.send(req.cookies)        //but after destroy kiya isiliye apne pass sirf id aayi baki to delete ho gya tha
// })

// app.get("/destroy",(req,res)=>{  //yha se destroy kiya after setuser
//     res.clearCookie('userData');
//     res.send("User Cookies Deleted successfully")
// })

// app.listen(port,()=>{
//     console.log(`Server running on ${port}`);
// })

