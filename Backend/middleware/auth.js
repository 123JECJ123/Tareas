//Traer Modulos Internos const
const jwt = require("jsonwebtoken");

//Crear La funcion de middleware
 function auth (req, res, next){
    let jwToken = req.header("Authorization");
    //barrer
    jwToken = jwToken.split(" ")[1];

    //Validar si Hay un token 
    if(!jwToken)return res.status(400).send("No Existe Token Para Validar");
    //si existe el Token 
    try{
        const payload = jwt.verify(jwToken,"clave");
        req.usuario = payload;
        next();

    }catch(error){
        res.status(400).send("Roken No Valido Sin Autorizacion");
    }
 }

 module.exports = auth;