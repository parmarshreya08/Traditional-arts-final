// import express from "express";
// import userAuth from "../middleware/userAuth.js";
// import { getUserData } from "../controllers/userController.js";

// const userRouter = express.Router();

// userRouter.get("/data", userAuth, getUserData);

// export default userRouter;

// import express from "express";
// import userAuth from "../middleware/userAuth.js";

// export default function userRouter(User) {
//   const router = express.Router();

//   const { getUserData } = require("../controllers/userController.js")(User); // pass User

//   router.get("/data", userAuth, getUserData);

//   return router;
// }


// import express from "express";
// import userAuth from "../middleware/userAuth.js";
// import { getUserData } from "../controllers/userController.js";

// // Inject remote-bound User model
// import {connectRemoteDB,remoteConnection} from "../config/remoteMongo.js";
// import userSchema from "../models/userModel.js";
// const User = remoteConnection.model("user", userSchema);

// const { getUserData } = userController(User);

// const userRouter = express.Router();

// userRouter.get("/data", userAuth, getUserData);

// export default userRouter;


// controllers/userController.js

// routes/userRouter.js

import express from "express";
import userAuth from "../middleware/userAuth.js";
import  userController from "../controllers/userController.js";

// Export a function that takes User model and returns a router
const userRouter = (User) => {
  const { getUserData } = userController(User);

  const router = express.Router();
  router.get("/data", userAuth, getUserData);

  return router;
};

export default userRouter;

