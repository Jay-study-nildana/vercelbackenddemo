const mongoose = require("mongoose");
//mongodb+srv://monkey:3ClVr3J5HLsuu9w7@cluster0.cckieyd.mongodb.net
const uri = `mongodb+srv://monkey:${process.env.MONGO_PASSWORD}@cluster0.cckieyd.mongodb.net/spoon-fed?retryWrites=true&w=majority`;
const uri2 = `mongodb+srv://monkey:3ClVr3J5HLsuu9w7@cluster0.cckieyd.mongodb.net`;
mongoose.set("strictQuery", false);

const connectDB = async () => {
  return mongoose.connect(uri2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
