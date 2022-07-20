const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const cnn = mongoose.connect(process.env.MONGO_URL);

    console.log('MongoDB is succesfully connected!');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
