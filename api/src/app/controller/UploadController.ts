import { ArchiveLog } from "../model/ArchiveLog";
import { Request, Response } from "express";

const UploadController = {
    upload: async (req: Request, res: Response) => {
        const { key } = req.body;

        const archiveExists = await ArchiveLog.findOne({ where: { key: key } });

        if (archiveExists) return res.status(400).json({ msg: 'Error ao compartilhar' });

        const resultadoCreate = await ArchiveLog.create({
            key: key
        })

        return res.json(resultadoCreate);
    },

    get: async (req: Request, res: Response) => {
        const { key } = req.body;

        const archives = await ArchiveLog.findOne({ where: { key: key } });

        if (!archives) return res.status(400).json({ msg: 'Não existe esse arquivo no envia ai' });

        return res.json(archives);
    },

    download: async (req: Request, res: Response) => {
        const {id} = req.params; 
        const file = `${__dirname}/../../public/${id}`;
        
        return res.download(file);
    }
}

export default UploadController;