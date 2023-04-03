const express = require("express");
const app = express();

app.listen(4000);
app.use(express.json());
app.use((req, res, next) => {
   console.log(req.method + ":" + req.url + "\n");
   next();
});


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

