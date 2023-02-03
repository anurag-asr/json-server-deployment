// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);


const express=require("express");
const {connection} =require("./db");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json())


app.get("/",(req,res)=>{res.send("connection is successfull")})

// app.post("/signup",async(req,res)=>{
//     const {email,password,user}=req.body;
//     bcrypt.hash(password,3,async function(err,hash){
//      if(err){res.send("something went wrong please signup after sometime")};

//      const new_user=new userModel({email,password:hash,user});
//      await new_user.save();
//      res.send("Signup Successfully")
//     })
// })

// app.post("/login",async(req,res)=>{
//     const {email,password}=req.body;
//     const result=await userModel.findOne({email});
//     const {user}=result;
//     const hashed_password=result.password;

//     bcrypt.compare(password,hashed_password,async function(err,result){
//         if(result){var token=jwt.sign({email:email},"abcd123")
//         res.send({"msg":"login successfull","token":token});
//     }
//     else{
//         res.send("Please Login again")
//     }
//     })
// })

app.listen(3005,async(req,res)=>{
    try{
        await connection;
        console.log("connection is successfull")
    }
    catch(err){
        console.log("something is wrong");
        console.log(err)
    }
    console.log(
        "listening on port 3004"
    )
})