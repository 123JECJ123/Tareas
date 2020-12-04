//Modulos Internos Propiedad para traer las propíedades que utiliza mongpo

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Definir el esquema de la Coleccion En este Caso Usuario
const esquemausuario = new mongoose.Schema({
    // nombre:{
    //     type:String,
    // hacer fechas y demas por defecto
    // },

    nombre: String,
    correo: String,
    contrasena: String
});

//Generar el JsonWebToken Para que envie los datos 
esquemausuario.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo,
    }, "clave")
};

// sport

const Usuario = mongoose.model("usuario", esquemausuario);
module.exports.Usuario = Usuario;
module.exports.esquemausuario = esquemausuario;

