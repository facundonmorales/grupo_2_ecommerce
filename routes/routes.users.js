const express = require('express');
const usuariosControllers = require('../controller/users.controller')
const router = express.Router()
let guestMiddleware= require("../middlewares/guestMiddleware")
const multer = require('multer');

var storage = multer.diskStorage ({
    destination : (req,res,cb) => {
        cb(null,'public/imagenes');
    },
    filename : (req,file,cb) => {
        console.log({file});
        
        cb(null,Date.now()+ "-" + file.originalname)
    } ,
});
const upload = multer({storage})




router.get('/login', usuariosControllers.login),
router.post('/login', usuariosControllers.procesologueo),
router.get('/pass', usuariosControllers.pass),
router.get('/register', guestMiddleware, usuariosControllers.register),
router.post("/register",guestMiddleware,upload.single("imagen"), usuariosControllers.registroDeUsuarios),
router.get("/editar/:idUser",usuariosControllers.editarUsuario),
router.put("/editar/:idUser",usuariosControllers.modificarUsuario),
module.exports= router;