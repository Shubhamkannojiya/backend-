import multer from "multer" ;
 const storage = multer.diskStorage ({ //this provide two option for storage one is diskstorage and memory storage we are using diskstorage
    destination : function (req ,file,cb){
        cb(null ,"./public/temp")

    },
    filename: function (req,file,cb){
        cb(null,file.originalname)
    }
 })
 export const upload = multer({
    storage,
 })