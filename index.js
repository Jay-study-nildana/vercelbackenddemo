//i have commented out code that is related to mongo db
//I am just showing two dummy json endpoints
//but the mongo db code is fine if you want to use it

const express = require("express");
const app = express();


// const dotenv = require("dotenv").config();
// const connectDB = require("./service/connect.js");
// connectDB();

// const Restaurants = require("./models/restaurants.js");

// const filter = require("./controllers/restaurants/filter.js");
// const getRestuarantById = require("./controllers/restaurants/getRestaurantById.js");
// const createOtp = require("./controllers/otp/createOtp.js");
// const verifyOtp = require("./controllers/otp/verifyotp.js");
// const placeorder = require("./controllers/order/placeorder.js");



app.listen(4000);
app.use(express.json());
app.use((req, res, next) => {
   console.log(req.method + ":" + req.url + "\n");
   next();
});

// app.get("/api/restaurants/filter", filter);

// app.get("/api/allRestaurants", async (req, res) => {
//    Restaurants.find((err, data) => {
//       if (err) {
//          console.error(err);
//       }
//       res.send(data);
//    });
// });

app.get("/hello", (req, res) => {
   res.send("Hello World");
});

//simple get with return json object
app.get("/hellojson", (req, res) => {
   res.json({ 
      message: "Hello World",
      name: "Monkey",
      age: 20,


    });
});

// app.get("/api/restaurant", getRestuarantById);

// app.post("/api/createotp", createOtp);
// app.post("/api/verifyotp", verifyOtp);

// app.post("/api/placeorder", placeorder);
