const express = require('express');
const homeController = require('../controller/homeController');
const productosController = require('../controller/productosController');
const usersController = require('../controller/users.controller');


const router = express.Router();

router.get('/', homeController.index);
router.get('/login', usersController.login);
router.get('/register', homeController.register);
router.get('/pass', homeController.pass);
router.get('/carrito', homeController.carrito);
router.get('/detalle-producto', homeController.detalle);


module.exports = router;