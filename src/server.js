import express from 'express';
import sequelize from "./config/db.js";
import "./models/usuario.model.js";


const app = express();
const Port = process.env.PORT || 4000;

//VALIDACION DE CONEXIO A LA BASE DE DATOS
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion Exitosa a la Base de Datos');

        await sequelize.sync({alter: true});
        console.log("Todos los modelos fueron sincronizados correctamente.");
        
    } catch (error) {
        console.log(`Error de conexion a la Base de Datos: ${error}`);
        
    }
}) ();

app.listen(Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
})