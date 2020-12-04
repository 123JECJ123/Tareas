//modulos Internos 
const express  = require("express");
const mongoose = require("mongoose");

//modulos Creados
const  usuario = require("./routes/usuario");
const  auth    = require("./routes/auth");
const  tarea   = require("./routes/tarea");

// Api
 const app = express();
 app.use(express.json());

 //routas de la api 
 app.use("/api/usuario", usuario);
 app.use("/api/auth" , auth);
 app.use("/api/tarea", tarea);

 //Puerto  de ejecucion
 const port = process.env.PORT || 3001;
 app.listen(port, ()=>console.log("Puerto Conectado Correctamente , Puerto: " + port));

 mongoose.connect("mongodb://localhost/tareasbd344",{
     useNewUrlParser:true,
     useFindAndModify:false,
     useCreateIndex:true,
     useUnifiedTopology:true,
 })
 .then(() => console.log("conexion a mongo Ok"))
 .catch((error) => console.log("conexion a mongo Off" + error));

