const express = require('express');
const homeController = require('../controller/homeController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/login', homeController.login);
router.get('/register', homeController.register);
router.get('/carrito', homeController.carrito);
router.get('/detalle-producto', homeController.detalle);


module.exports = router;