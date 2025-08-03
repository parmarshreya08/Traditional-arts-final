// import mongoose from "mongoose";
// //const remoteURI = process.env.MONGO_URI; // From .env
// import "dotenv/config";

// const connectRemoteDB = async () => {
//   try {
//     const uri = `${process.env.MONGODB_URI}/mern-auth`;
//     await mongoose.createConnection(uri);
//     console.log("✅ Connected to REMOTE MongoDB (Auth)");
//   } catch (err) {
//     console.error("❌ Remote MongoDB Error:", err.message);
//   }
// };

// export default connectRemoteDB;


// config/remoteMongo.js
// import mongoose from "mongoose";
// const remoteURI = process.env.MONGO_URI; // From .env

// const connectRemoteDB = async () => {
//   try {
//     await mongoose.connect(remoteURI);
//     console.log("✅ Connected to REMOTE MongoDB (Login/Auth)");
//   } catch (err) {
//     console.error("❌ Remote MongoDB connection error:", err);
//   }
// };

// export default connectRemoteDB;

import mongoose from "mongoose";

let remoteConnection;

const connectRemoteDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    remoteConnection = await mongoose.createConnection(uri,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to REMOTE MongoDB (Login/Auth)");
    return remoteConnection; // ✅ return connection
  } catch (err) {
    console.error("❌ Remote MongoDB connection error:", err);
    throw err;
  }
};

export { connectRemoteDB , remoteConnection };

