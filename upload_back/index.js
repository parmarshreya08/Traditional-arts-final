import express from "express";
import "dotenv/config";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import { uploadOnCloudinary } from "./cloudinary.js";
import { upload } from "./multer.middleware.js";

import cookieParser from "cookie-parser";

import { connectLocalDB } from "./config/localMongo.js";
import { connectRemoteDB } from "./config/remoteMongo.js";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import eventRoutes from "./routes/events.js";
import Listing from "./models/Listing.js";
import userSchema from "./models/userModel.js"; // ✅ FULL model (attached to remoteConnection)

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
const allowedOrigins = ["http://localhost:3000"];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json());
app.use(cookieParser());



try {
  // Step 1: Connect to both databases
  await connectLocalDB();
  //await connectRemoteDB(); // ✅ Initializes global remoteConnection used in model
  const remoteConnection = await connectRemoteDB();
  const User = remoteConnection.model("user", userSchema);
  // Step 2: Use routers (they use the model internally)
  app.use("/api/auth", authRouter(User));
  app.use("/api/user", userRouter(User));
  app.use("/api/events", eventRoutes); // Local DB

  // Artist route (from local DB)
  app.get("/api/artist", async (req, res) => {
    try {
      const artists = await Listing.find({});
      res.json(artists);
    } catch (err) {
      console.error("❌ Fetch Error:", err);
      res.status(500).json({ error: "Failed to fetch artists" });
    }
  });
  
dotenv.config();
app.use(cors());
app.use(express.json());
const imageStorePath = "./image-urls.json";


// ✅ Updated: Safe image URL saving
const saveImageUrl = (url) => {
  let data = [];

  if (fs.existsSync(imageStorePath)) {
    const fileContent = fs.readFileSync(imageStorePath, "utf-8");
    if (fileContent.trim().length > 0) {
      try {
        data = JSON.parse(fileContent);
      } catch (err) {
        console.error("❌ Failed to parse image-urls.json:", err);
        // optional: backup old corrupted file here
        data = [];
      }
    }
  }

  data.push(url);
  fs.writeFileSync(imageStorePath, JSON.stringify(data, null, 2));
};

app.post("/upload", upload.single("art"), async (req, res) => {
  try {
    if (!req.file) {
      console.error("❌ No file received");
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("📝 File received:", req.file);

    const localFilePath = req.file.path;
    const result = await uploadOnCloudinary(localFilePath);

    if (fs.existsSync(localFilePath))
       fs.unlinkSync(localFilePath);
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);

    if (!result) {
      console.error("❌ Cloudinary upload failed");
      return res.status(500).json({ error: "Upload failed" });
    }

    console.log("✅ Uploaded successfully:", result.secure_url);
    saveImageUrl(result.secure_url);
     res.json({ imageUrl: result.secure_url });

    res.json({ imageUrl: result.secure_url }); 

  } catch (err) {
    console.error("❌ Upload route error:", err);
    res.status(500).json({ error: "Something went wrong during upload" });
  }
});



app.get("/gallery", (req, res) => {
  try {
    if (!fs.existsSync(imageStorePath)) return res.json({ images: [] });

    const fileContent = fs.readFileSync(imageStorePath, "utf-8");
    if (!fileContent.trim()) return res.json({ images: [] });

    const data = JSON.parse(fileContent);
    res.json({ images: data });
  } catch (err) {
    console.error("❌ Gallery fetch error:", err);
    res.status(500).json({ error: "Failed to fetch gallery" });
  }
});



  // Health check
  app.get("/", (req, res) => {
    res.send("🎨 Kalakriti API is working!");
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

} catch (err) {
  console.error("❌ Failed to initialize server:", err);
}

// app.listen(5000, () => {
//   console.log("🚀 Server is running on http://localhost:5000");
// });

