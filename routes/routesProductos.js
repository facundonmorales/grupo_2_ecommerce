const express = require("express");
const productosController = require("../controller/productosController");
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware= require("../middlewares/guestMiddleware");
const multer = require('multer');

var storage = multer.diskStorage ({
    destination : (req,res,cb) => {
        cb(null,'public/imagenes');
    },
    filename : (req,file,cb) => {
        console.log({file});
        
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

// router.get('/crear',authMiddleware, productosController.crearProducto); // controlador con Middleware
router.get('/crear', productosController.crearProducto);// controlador con Middleware se uso para el 6 Sprint
router.post('/crear', upload.single('fotoProducto'),productosController.store);

// router.get('/detalle', productosController.mostrarPorId);
// router.get('/id', productosController.mostrarPorId);
// router.get('/crear', productosController.crearProducto);


router.get('/modificar/:idUser', productosController.modificarProducto);
router.put('/modificar/:idUser', upload.single("imagen"), productosController.actualizarProducto);
router.delete("/borrar/:idUser", productosController.borrarProducto)

module.exports = router;

