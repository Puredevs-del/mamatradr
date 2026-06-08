require("dotenv").config();

const express = require("express");
const cors = require("cors");

const supabase = require("./config/supabase");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const shopRoutes = require("./routes/shops");
const listingRoutes = require("./routes/listings");
const uploadRoutes = require("./routes/upload");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/shops", shopRoutes);

app.use("/api/listings", listingRoutes);

app.use("/api/upload", uploadRoutes);

app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      return res.json({
        connected: true,
        error: error.message
      });
    }

    return res.json({
      connected: true,
      users: data.length
    });

  } catch (err) {
    return res.status(500).json({
      connected: false,
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});