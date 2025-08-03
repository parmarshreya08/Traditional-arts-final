// import mongoose from "mongoose";

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: {
//     filename: String,
//     url: String,
//   },
//   price: [String],
//   images_description: [String],
//   images: [String],
// });

// export default localConnection.model("Listing", listingSchema,);


// import { localConnection } from "../config/localMongo.js";
// import mongoose from "mongoose";

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: {
//     filename: String,
//     url: String,
//   },
//   price: [String],
//   images_description: [String],
//   images: [String],
// });

// // Avoid overwrite if the model is already registered
// const Listing = localConnection.models.Listing || localConnection.model("Listing", listingSchema);

// export default Listing;

import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    filename: String,
    url: String,
  },
  price: [String],
  images_description: [String],
  images: [String],
});

const Listing = mongoose.models.Listing || mongoose.model("Listing", listingSchema);
export default Listing;
