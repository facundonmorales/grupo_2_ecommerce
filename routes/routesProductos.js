const express = require("express");
const productosController = require("../controller/productosController");

const router = express.Router();

router.get('/detalle', productosController.mostrarPorId);
router.get('/id', productosController.mostrarPorId);
router.get('/crear', productosController.crearProducto);











router.get('/modificar/:idUser', productosController.modificarProducto);
router.put('/actualizar/:idUser', productosController.actualizarProducto);
module.exports = router;