import dotenv from "dotenv";
import express from "express"

import connectDB from "./db/index.js";
 
dotenv.config({
    path: './env'
})

const app = express();
connectDB()
.then(() =>{
    app.on("error",(err) =>{
        console.log("error:" , err);
        throw err;
        
    })
    app.listen(process.env.PORT || 8000 , () => {
    
        console.log(`server is running on port : ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("mongo db connection is failed :" ,error )
})