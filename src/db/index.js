import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = ( async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MONGODB is connected !! DB HOST :${connectionInstance.connection.host}`)
    }//tells you the host to which you're connected.
    catch(error){
        console.log("MONGODB is not connected :" , error);
        process.exit(1);
    }
})
export default connectDB;