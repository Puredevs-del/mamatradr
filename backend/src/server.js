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
  ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. server-to-server, curl)
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin '${origin}' not allowed`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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
        error: error.message,
      });
    }

    return res.json({
      connected: true,
      users: data.length,
    });
  } catch (err) {
    console.error("Health check error:", err.message);
    return res.status(500).json({
      connected: false,
      error: err.message,
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
  console.log(`Allowed CORS origins: ${ALLOWED_ORIGINS.join(", ")}`);
});