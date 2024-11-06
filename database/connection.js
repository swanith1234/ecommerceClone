// Libraries
const mongoose = require("mongoose");
const db_url = process.env.DB_URL;

// Database Connection
mongoose.connect(
  "mongodb+srv://swanithpidugu:Swanith%40123@amazon-clone.uhpuo.mongodb.net/",
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Database Connected Successfully");
    }
  }
);
