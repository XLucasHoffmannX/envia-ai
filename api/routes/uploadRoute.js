const router = require('express').Router();
const uploadController = require('../app/controllers/uploadController');
const multer = require('multer');

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const newName = req.body.key;

        cb(null, newName)
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('archive'), uploadController.upload);

router.get('/find', uploadController.get);

router.get('/download/:id', uploadController.download);


module.exports = router;