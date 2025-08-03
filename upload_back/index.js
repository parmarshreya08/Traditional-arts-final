<<<<<<< HEAD
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import multer from "multer";
// import fs from "fs";
// import mongoose from "mongoose";
// import { uploadOnCloudinary } from "./cloudinary.js";
// import Listing from "./models/Listing.js";

// dotenv.config();
// app.use(cors());
// app.use(express.json());
// console.log("🔍 Full process.env =", process.env); // TEMP debug


// const app = express();

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;
// console.log("✅ MONGO_URI =", MONGO_URI);



// const upload = multer({ dest: "temp/" });

// // 1. Connect to MongoDB "mongodb://localhost:27017/artist"
// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB error", err));

// // 2. Upload Route
// app.post("/upload", upload.single("art"), async (req, res) => {
//   try {
//     const localFilePath = req.file.path;
//     const result = await uploadOnCloudinary(localFilePath);
//     fs.unlinkSync(localFilePath);
//     res.json({ url: result.secure_url });
//   } catch (err) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // 3. Fetch Artists from DB
// app.get("/api/artist", async (req, res) => {
//   try {
//     const artists = await Listing.find({});
//     res.json(artists);
//   } catch (err) {
//     console.error("❌ Fetch Error:", err);
//     res.status(500).json({ error: "Failed to fetch artists" });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

//import dotenv from "dotenv";

//import multer from "multer";
//import fs from "fs";
//import { uploadOnCloudinary } from "./cloudinary.js";
// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";

// import{ connectLocalDB } from "./config/localMongo.js";
// //connectLocalDB(); // for artists/events
// import {connectRemoteDB} from "./config/remoteMongo.js";
// //connectRemoteDB(); // for login/auth

// import userModel from "./models/userModel.js";



// import authRouter from "./routes/authRouter.js";
// import userRouter from "./routes/userRouter.js";
// import eventRoutes from "./routes/events.js";
// import Listing from "./models/Listing.js";
// //import { remoteConnection } from "./config/remoteMongo.js";

// //import connectDB from "./config/mongodb.js"; // if you're using your own config



// //dotenv.config();  // ✅ Load .env

// const app = express();   // ✅ Create app first
// //const PORT = 5000;
// const PORT = process.env.PORT || 5000;
// //const MONGO_URI = "mongodb://localhost:27017/artist";

// // CORS whitelist
// const allowedOrigins = ["http://localhost:3000"];

// //app.use(cors());         // ✅ Then use middlewares
// //app.use(express.json());
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: allowedOrigins, credentials: true }));

// //console.log("🔍 Full process.env =", process.env); // TEMP debug

// // const PORT = process.env.PORT || 5000;
// // const MONGO_URI = process.env.MONGO_URI;

// //console.log("✅ MONGO_URI =", MONGO_URI);

// //const upload = multer({ dest: "temp/" });

// // Connect to MongoDB
// // mongoose
// //   .connect(MONGO_URI)
// //   .then(() => console.log("Connected to MongoDB"))
// //   .catch((err) => console.error("MongoDB error", err));

// // Connect both databases
// await connectLocalDB();     // your local DB
// await connectRemoteDB();    // friend’s cluster DB




// // Upload Route
// // app.post("/upload", upload.single("art"), async (req, res) => {
// //   try {
// //     const localFilePath = req.file.path;
// //     const result = await uploadOnCloudinary(localFilePath);
// //     fs.unlinkSync(localFilePath);
// //     res.json({ url: result.secure_url });
// //   } catch (err) {
// //     res.status(500).json({ error: "Something went wrong" });
// //   }
// // });

// //Fetch Events
// //app.use("/api/events", eventRoutes);
// //Core Routes
// app.use("/api/auth", authRouter);     // Login, register, etc.
// app.use("/api/user", userRouter);     // /data route for logged-in user
// app.use("/api/events", eventRoutes);  // Events: /upcoming, /completed, etc.


// // Fetch Artists
// app.get("/api/artist", async (req, res) => {
//   try {
//     const artists = await Listing.find({});
//     res.json(artists);
//   } catch (err) {
//     console.error("❌ Fetch Error:", err);
//     res.status(500).json({ error: "Failed to fetch artists" });
//   }
// });
//   // Optional health check
// app.get("/", (req, res) => {
//   res.send("🎨 Kalakriti API is working!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


/*--------------------------------------------------------------------------------*/
// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";

// import { connectLocalDB } from "./config/localMongo.js";
// import { connectRemoteDB } from "./config/remoteMongo.js";

// import userSchema from "./models/userModel.js"; // just the schema

// import authRouter from "./routes/authRouter.js";
// import userRouter from "./routes/userRouter.js";
// import eventRoutes from "./routes/events.js";
// import Listing from "./models/Listing.js";
// //import authRouter from "./routes/authRouter.js";
// //import userRouter from "./routes/userRouter.js";

// const app = express();
// const PORT = process.env.PORT || 5000;

// // CORS
// const allowedOrigins = ["http://localhost:3000"];
// app.use(cors({ origin: allowedOrigins, credentials: true }));

// app.use(express.json());
// app.use(cookieParser());

// try {
//   // Step 1: Connect to both databases
//   await connectLocalDB();
//   const remoteConnection = await connectRemoteDB(); // returns the remote connection object

//   // Step 2: Define remote-based user model
//   const User = remoteConnection.model("User", userSchema); // attach schema to remote connection

//   // Step 3: Mount routers with User model (pass it to routes if needed)
//   app.use("/api/auth", authRouter(User));
//   app.use("/api/user", userRouter(User));
//   app.use("/api/events", eventRoutes); // still using local DB

//   // Step 4: Artist route (from local DB)
//   app.get("/api/artist", async (req, res) => {
//     try {
//       const artists = await Listing.find({});
//       res.json(artists);
//     } catch (err) {
//       console.error("❌ Fetch Error:", err);
//       res.status(500).json({ error: "Failed to fetch artists" });
//     }
//   });

//   // Health check
//   app.get("/", (req, res) => {
//     res.send("🎨 Kalakriti API is working!");
//   });

//   // Start server
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });

// } catch (err) {
//   console.error("❌ Failed to initialize server:", err);
// }
/*--------------------------------------------------------------------------------------*/
// upload_back/index.js
import express from "express";
import "dotenv/config";
=======
import express from "express";
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import { uploadOnCloudinary } from "./cloudinary.js";
import { upload } from "./multer.middleware.js";

<<<<<<< HEAD
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
const imageStorePath = "./image-urls.json";
  
=======
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const imageStorePath = "./image-urls.json";

>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93
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

<<<<<<< HEAD
    if (fs.existsSync(localFilePath))
       fs.unlinkSync(localFilePath);
=======
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93

    if (!result) {
      console.error("❌ Cloudinary upload failed");
      return res.status(500).json({ error: "Upload failed" });
    }

    console.log("✅ Uploaded successfully:", result.secure_url);
    saveImageUrl(result.secure_url);
<<<<<<< HEAD
     res.json({ imageUrl: result.secure_url });
=======

    res.json({ imageUrl: result.secure_url }); 
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93

  } catch (err) {
    console.error("❌ Upload route error:", err);
    res.status(500).json({ error: "Something went wrong during upload" });
  }
});

<<<<<<< HEAD


=======
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93
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

<<<<<<< HEAD


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
=======
app.listen(5000, () => {
  console.log("🚀 Server is running on http://localhost:5000");
});

>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93
