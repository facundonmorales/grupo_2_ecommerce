const express = require("express");
const productosController = require("../controller/productosController");

const router = express.Router();

router.get("/id", productosController.show);

module.exports = router;