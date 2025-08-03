// import express from "express";
// import {
//   isAuthenticated,
//   login,
//   logout,
//   register,
//   resetPassword,
//   sendResetOtp,
//   sendVerifyOtp,
//   verifyEmail,
// } from "../controllers/authController.js";
// import userAuth from "../middleware/userAuth.js";

// const authRouter = express.Router();

// authRouter.post("/register", register);
// authRouter.post("/login", login);
// authRouter.post("/logout", logout);
// authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
// authRouter.post("/verify-account", userAuth, verifyEmail); //userAuth middleware to  extract userId
// authRouter.get("/is-auth", userAuth, isAuthenticated);
// authRouter.post("/send-reset-otp", sendResetOtp);
// authRouter.post("/reset-password", resetPassword);

// export default authRouter;

// import express from "express";
// import {
//   isAuthenticated,
//   login,
//   logout,
//   register,
//   resetPassword,
//   sendResetOtp,
//   sendVerifyOtp,
//   verifyEmail,
// } from "../controllers/authController.js";
// import userAuth from "../middleware/userAuth.js";

// const authRouter = express.Router();

// authRouter.post("/register", register);
// authRouter.post("/login", login);
// authRouter.post("/logout", logout);
// authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
// authRouter.post("/verify-account", userAuth, verifyEmail); //userAuth middleware to  extract userId
// authRouter.get("/is-auth", userAuth, isAuthenticated);
// authRouter.post("/send-reset-otp", sendResetOtp);
// authRouter.post("/reset-password", resetPassword);

// export default authRouter;

// import express from "express";
// import userAuth from "../middleware/userAuth.js";

// export default function authRouter(User) {
//   const router = express.Router();

//   // Inject User into controller functions here
//   const {
//     register,
//     login,
//     logout,
//     sendVerifyOtp,
//     verifyEmail,
//     isAuthenticated,
//     sendResetOtp,
//     resetPassword
//   } = require("../controllers/authController.js")(User); // <-- pass User to controller

//   router.post("/register", register);
//   router.post("/login", login);
//   router.post("/logout", logout);
//   router.post("/send-verify-otp", userAuth, sendVerifyOtp);
//   router.post("/verify-account", userAuth, verifyEmail);
//   router.get("/is-auth", userAuth, isAuthenticated);
//   router.post("/send-reset-otp", sendResetOtp);
//   router.post("/reset-password", resetPassword);

//   return router;
// }


/*--------------------------------------------------------------------------------------------*/
import express from "express";
import userAuth from "../middleware/userAuth.js";
import authController from "../controllers/authController.js"; // ✅ Default import

export default function authRouter(User) {
  const router = express.Router();

  const {
    register,
    login,
    logout,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated,
    sendResetOtp,
    resetPassword,
  } = authController(User); // ✅ Pass User to controller factory

  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
  router.post("/send-verify-otp", userAuth, sendVerifyOtp);
  router.post("/verify-account", userAuth, verifyEmail);
  router.get("/is-auth", userAuth, isAuthenticated);
  router.post("/send-reset-otp", sendResetOtp);
  router.post("/reset-password", resetPassword);

  return router;
}
