import express from "express";
import multer from "multer";
import UploadController from "../app/controller/UploadController";

const UploadRoute = express.Router();

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/');
        console.log('entrei');
    },
    filename: function (req, file, cb) {
        const newName = req.body.key;

        cb(null, newName)
    }
});

const upload = multer({ storage });

UploadRoute.post('/upload', upload.single('archive'), UploadController.upload);

UploadRoute.get('/find', UploadController.get);

UploadRoute.get('/download/:id', UploadController.download);

export default UploadRoute;
