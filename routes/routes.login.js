const express = require('express');
const usuariosControllers = require('../controller/users.controller')

const router = express.Router

router.get('/', usuariosControllers.login)

module.exports= router;