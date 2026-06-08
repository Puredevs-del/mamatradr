const express = require("express");
const router = express.Router();

const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const authMiddleware = require("../middleware/authMiddleware");


const upload = multer({
  storage: multer.memoryStorage()
});


router.post(
"/",
authMiddleware,
upload.single("image"),
async(req,res)=>{

try{

if(!req.file){
return res.status(400).json({
success:false,
message:"No image uploaded"
});
}


const result = await new Promise((resolve,reject)=>{

cloudinary.uploader.upload_stream(
{
folder:"mamatradr"
},
(error,result)=>{

if(error) reject(error);
else resolve(result);

}
).end(req.file.buffer);

});


res.json({
success:true,
image_url:result.secure_url
});


}catch(err){

res.status(500).json({
success:false,
error:err.message
});

}

});


module.exports = router;