import dotenv from 'dotenv';
import express, {urlencoded, json} from 'express';
import cors from 'cors';
import { data } from './app/database/datastorage';
import UploadRoute from './routes/UploadRoute';

const app = express();

app.use(json());
app.use(urlencoded( { extended: false } ));
app.use(cors());

(async()=>{
    try {
        await data.sync();
    } catch (error) {
        if(error) throw error;
    }
})();

app.use('/api', UploadRoute);

app.use('/', (req, res)=>{
    res.json({msg: 'Ok'});
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, ()=>{
    console.log(`Server in on port ${PORT}`)
});