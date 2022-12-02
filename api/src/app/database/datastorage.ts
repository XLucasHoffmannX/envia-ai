import { Sequelize } from "sequelize";

export const data = new Sequelize({
    dialect: 'sqlite',
    storage: './src/storage/database.sqlite'
});
