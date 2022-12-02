import { INTEGER, STRING } from "sequelize";
import { data } from '../database/datastorage';

export const ArchiveLog = data.define('archives_log', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    key: {
        type: STRING,
        allowNull: false,
        unique: true
    }
});