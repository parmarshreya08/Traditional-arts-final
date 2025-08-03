// import "dotenv/config";
// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   verifyOtp: { type: String, default: "" },
//   verifyOtpExpireAt: { type: Number, default: 0 },
//   isAccountVerified: { type: Boolean, default: false },
//   resetOtp: { type: String, default: "" },
//   resetOtpExpireAt: { type: Number, default: 0 },
// });

// const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// export default userModel;

//import { remoteConnection } from "../config/remoteMongo.js"; // import the correct connection
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   verifyOtp: { type: String, default: "" },
//   verifyOtpExpireAt: { type: Number, default: 0 },
//   isAccountVerified: { type: Boolean, default: false },
//   resetOtp: { type: String, default: "" },
//   resetOtpExpireAt: { type: Number, default: 0 },
// });

// // Prevent model overwrite if it already exists in connection
// //const userModel = remoteConnection.models.user || remoteConnection.model("user", userSchema);

// export default userSchema;

import mongoose from "mongoose";
//import { remoteConnection } from "../config/remoteMongo.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpireAt: { type: Number, default: 0 },
  cart:{type:Array , default:""},
  wishlist:{type:Array , default:""},
  upload:{type:Array , default:""},
  events:{type:Array , default:""},
});

// Prevent model overwrite if connection already has it
//const userModel = remoteConnection?.models?.user || remoteConnection?.model("user", userSchema);

export default userSchema;

