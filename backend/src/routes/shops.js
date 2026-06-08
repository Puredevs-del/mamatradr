const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const supabase = require("../config/supabase");

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { shop_name, description } = req.body;

    if (!shop_name) {
      return res.status(400).json({
        success: false,
        message: "Shop name is required"
      });
    }

    const { data, error } = await supabase
      .from("shops")
      .insert([
        {
          owner_id: req.user.id,
          shop_name,
          description
        }
      ])
      .select();

    if (error) {
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }

    res.status(201).json({
      success: true,
      shop: data[0]
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;