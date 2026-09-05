import {v2 as cloudinary} from "cloudinary";
import { log } from "console";
import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_sceret:process.env.CLOUDINARY_API_SECRET
});
const uploadCloudinary = async(localFilePath) =>{
    try{
    if(!localFilePath) return null
    //upload filecon cloudinary
const response =cloudinary.uploader.upload(localFilePath , {
    resource_type:"auto"

}
)
//fil has been uploded succesfully
console.log("file is uploded on clodinary ");
return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath) // it is the option is file system unlink(to remove) it simply 
        //emove the locally saved temporary file as the upload operation got faild
        return null;

    }
}
export {uploadCloudinary}