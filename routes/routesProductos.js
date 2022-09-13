const express = require("express");
const productosController = require("../controller/productosController");

const router = express.Router();

router.get('/detalle', productosController.mostrarPorId);
router.get('/id', productosController.mostrarPorId);
router.get('/crear', productosController.crearProducto);
router.get('/modificar', productosController.modificarProducto);

module.exports = router;