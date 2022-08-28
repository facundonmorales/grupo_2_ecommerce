const express = require("express");
const carritoController = require("../controller/CarritoController");

const router = express.Router();

router.get("/productCart", carritoController.carrito);

module.exports = router;