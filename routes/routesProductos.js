const express = require("express");
const productosController = require("../controller/productosController");

const multer = require('multer');

var storage = multer.diskStorage ({
    destination : (req,res,cb) => {
        cb(null,'public/imagenes');
    },
    filename : (req,file,cb) => {
        console.log({file});
        // cb(null,file.fieldname + "-" + Date.now())
        cb(null,Date.now()+ "-" + file.originalname)
    } ,
});
const upload = multer({storage})

const router = express.Router();

// router.get('/detalle', productosController.mostrarPorId);
// router.get('/id', productosController.mostrarPorId);

router.get('/modificar', productosController.modificarProducto);

// router.get('/', productosController.index);

router.get('/detalleProducto/:id', productosController.detalle);

router.get('/crear', productosController.crearProducto);
router.post('/crear', upload.single('fotoProducto'),productosController.store);
module.exports = router;