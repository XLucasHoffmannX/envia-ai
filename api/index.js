require('dotenv').config();
// dependencies externs
const express = require('express');
const cors = require('cors');

// depencies interns
//const connectDB = require('./config/connectDB');
// app 
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(cors());


// routes
app.use('/api', require('./routes/uploadRoute'));

(async () => {
    const database = require('./db/database');
 
    try {
       await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

// listen
//connectDB();
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server in on port ${PORT}`))