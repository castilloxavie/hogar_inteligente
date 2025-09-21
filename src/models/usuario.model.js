import {DataTypes} from "sequelize"
import sequelize from "../config/db.js";

const Usuario = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasenha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('admin', 'cliente'),
        defaultValue: 'cliente'
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_creacion:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
},{
    tableName: 'usuarios',
    timestamps: false


})

export default Usuario;