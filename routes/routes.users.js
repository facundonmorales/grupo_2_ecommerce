const express = require('express');
const usuariosControllers = require('../controller/users.controller')
const router = express.Router()
let guestMiddleware= require("../middlewares/guestMiddleware")



router.get('/login', usuariosControllers.login),
router.post('/login', usuariosControllers.procesologueo),
router.get('/pass', usuariosControllers.pass),
router.get('/register', guestMiddleware, usuariosControllers.register),
router.post("/register",guestMiddleware, usuariosControllers.registroDeUsuarios),
router.get("/editar/:idUser",usuariosControllers.editarUsuario),
module.exports= router;