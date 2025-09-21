import  dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const db = new Sequelize(
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PASSWORD,
     {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        dialect: 'mysql',
        logging: false
     }
)
export default db;