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

(async () => {
    const database = require('./db/database');
    const Archive = require('./app/model/Archives');
 
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

// routes
app.use('/api', require('./routes/uploadRoute'));

// listen
//connectDB();
const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server in on port ${PORT}`))