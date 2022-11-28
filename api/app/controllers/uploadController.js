const Archive = require('../model/Archives');

const uploadController = {
    upload: async (req, res) => {
        const { key } = req.body;

        const archiveExists = await Archive.findOne({ where: { key: key } });

        if (archiveExists) return res.status(400).json({ msg: 'Error ao compartilhar' });

        const resultadoCreate = await Archive.create({
            key: key
        })

        return res.json(resultadoCreate);
    },

    get: async (req, res) => {
        const { key } = req.body;

        const archives = await Archive.findOne({ where: { key: key } });

        if (!archives) return res.status(400).json({ msg: 'Não existe esse arquivo no envia ai' });

        return res.json(archives);
    },

    download: async (req, res) => {
        const {id} = req.params; 
        const file = `${__dirname}/../../uploads/${id}`;
        
        return res.download(file);
    }
}

module.exports = uploadController;