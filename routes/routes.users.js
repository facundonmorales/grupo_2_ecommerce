const express = require('express');
const usuariosControllers = require('../controller/users.controller')

const router = express.Router()

router.get('/login', usuariosControllers.login),
router.get('/pass', usuariosControllers.pass),
router.get('/register', usuariosControllers.register),

module.exports= router;