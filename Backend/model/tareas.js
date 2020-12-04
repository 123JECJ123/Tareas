const mongoose  = new require("mongoose");
 const esquemaTarea = mongoose.Schema({
     idUsuario:String,
     nombre:String,
     Description:String,
     estado:String,
     fecha:{
         type:Date,
         default:Date.now,
     },


 });
 const Tarea = mongoose.model('tarea',esquemaTarea);
 module.exports.Tarea = Tarea;