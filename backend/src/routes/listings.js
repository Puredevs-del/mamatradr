const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const supabase = require("../config/supabase");


// CREATE LISTING
router.post("/create", authMiddleware, async (req, res) => {

  try {

    const {
      shop_id,
      title,
      description,
      price,
      image_url
    } = req.body;


    if (!shop_id || !title || !price) {
      return res.status(400).json({
        success:false,
        message:"Shop, title and price required"
      });
    }


    // check shop ownership
    const { data: shop, error: shopError } = await supabase
      .from("shops")
      .select("*")
      .eq("id", shop_id)
      .eq("owner_id", req.user.id)
      .single();


    if(shopError || !shop){
      return res.status(403).json({
        success:false,
        message:"You do not own this shop"
      });
    }


    const {data,error}=await supabase
      .from("listings")
      .insert([
        {
          shop_id,
          title,
          description,
          price,
          image_url,
          status:"active"
        }
      ])
      .select();


    if(error){
      return res.status(400).json({
        success:false,
        error:error.message
      });
    }


    res.status(201).json({
      success:true,
      listing:data[0]
    });


  }catch(err){

    res.status(500).json({
      success:false,
      error:err.message
    });

  }

});



// GET ALL LISTINGS (PUBLIC)

router.get("/", async(req,res)=>{

  try {

    const {data,error}=await supabase
      .from("listings")
      .select("*")
      .eq("status","active");


    if(error){
      return res.status(400).json({
        success:false,
        error:error.message
      });
    }


    res.json({
      success:true,
      listings:data
    });


  }catch(err){

    res.status(500).json({
      success:false,
      error:err.message
    });

  }

});



// SELLER LISTINGS

router.get("/my-listings", authMiddleware, async(req,res)=>{

  try {

    const {data,error}=await supabase
      .from("listings")
      .select("*");


    if(error){
      return res.status(400).json({
        success:false,
        error:error.message
      });
    }


    res.json({
      success:true,
      listings:data
    });


  }catch(err){

    res.status(500).json({
      success:false,
      error:err.message
    });

  }

});


module.exports = router;