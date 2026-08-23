import dotenv from "dotenv";

import connectDB from "./db/index.js";
 
dotenv.config({
    path: './env'
})


connectDB()
.then(() =>{
    app.on("error",(err) =>{
        console.log("erroe:" , err);
        throw err;
        
    })
    app.listen(Process.env.PORT || 80000 , () => {
    
        console.log(`server is running on port : ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("mongo db connection is failed :" ,error )
})