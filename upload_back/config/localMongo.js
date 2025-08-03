// import mongoose from "mongoose";

// const connectLocalDB = async () => {
//   try {
//     const uri = "mongodb://localhost:27017/artist";
//     await mongoose.connect(uri);
//     console.log("✅ Connected to LOCAL MongoDB");
//   } catch (err) {
//     console.error("❌ Local MongoDB Error:", err.message);
//   }
// };

// export default connectLocalDB;

// import mongoose from "mongoose";

// let localConnection;

// const connectLocalDB = async () => {
//   try {
//     const uri = "mongodb://localhost:27017/artist";
//     localConnection = await mongoose.createConnection(uri);
//     console.log("✅ Connected to LOCAL MongoDB");
//   } catch (err) {
//     console.error("❌ Local MongoDB Error:", err.message);
//   }
// };

// export { connectLocalDB, localConnection };

// import mongoose from "mongoose";

// let localConnection;

// const connectLocalDB = async () => {
//   try {
//     const uri = "mongodb://localhost:27017/artist";

//     localConnection = mongoose.createConnection(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Wait for the connection to be open
//     await new Promise((resolve, reject) => {
//       localConnection.once("open", () => {
//         console.log("✅ Connected to LOCAL MongoDB");
//         resolve();
//       });

//       localConnection.on("error", (err) => {
//         console.error("❌ Local MongoDB Error:", err);
//         reject(err);
//       });
//     });
//   } catch (err) {
//     console.error("❌ Failed to connect to LOCAL MongoDB:", err.message);
//   }
// };

// export { connectLocalDB, localConnection };


// config/localMongo.js "mongodb://localhost:27017/artist";
import mongoose from "mongoose";

const connectLocalDB = async () => {
  try {
    const uri = process.env.MONGO_LOCAL_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to LOCAL MongoDB using mongoose.connect");
  } catch (err) {
    console.error("❌ Local MongoDB connection error:", err.message);
  }
};

export { connectLocalDB };
