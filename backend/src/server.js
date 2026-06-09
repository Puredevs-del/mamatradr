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

const ALLOWED_ORIGINS = [
  "https://mamatradr-frontend-production.up.railway.app",
];

app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/shops", shopRoutes);

app.use("/api/listings", listingRoutes);

app.use("/api/upload", uploadRoutes);

async function healthCheck(req, res) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      return res.json({
        connected: true,
        error: error.message,
      });
    }

    return res.json({
      connected: true,
      users: data.length,
    });
  } catch (err) {
    return res.status(500).json({
      connected: false,
      error: err.message,
    });
  }
}

app.get("/", healthCheck);
app.get("/api/", healthCheck);

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on 0.0.0.0:${PORT}`);
  console.log(`CORS allowed origins: ${ALLOWED_ORIGINS.join(", ")}`);
});