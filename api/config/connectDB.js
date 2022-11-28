const mongoose = require('mongoose');

const URI = process.env.MONGODB_ACCESS;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, err => {
    if(err) throw err;
    console.log('Connect ao cluster!')
  })
}

module.exports = connectDB;