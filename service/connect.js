const mongoose = require("mongoose");
//mongodb+srv://monkey:3ClVr3J5HLsuu9w7@cluster0.cckieyd.mongodb.net
//dear students, use this file, to use mongo db, 
//but, i myself am not using this file, 
const uri = `mongodb+srv://monkey:${process.env.MONGO_PASSWORD}@cluster0.cckieyd.mongodb.net/spoon-fed?retryWrites=true&w=majority`;
const uri2 = ``;
mongoose.set("strictQuery", false);

const connectDB = async () => {
  return mongoose.connect(uri2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
