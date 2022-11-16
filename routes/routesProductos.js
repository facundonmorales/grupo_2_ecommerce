const express = require("express");
const productosController = require("../controller/productosController");
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware= require("../middlewares/guestMiddleware");
const multer = require('multer');
const path = require('path')
const { body } = require('express-validator')

const validacionesCreadorProductos = [
    body('nombre').notEmpty().withMessage('Es obligatorio Completar el Campo del Nombre').bail()
    .isLength({min:5}).withMessage('El campo debe tener como minumo 5 caracteres'),
    body('precio').notEmpty().withMessage('Es obligatorio Completar el Campo del Importe').bail()
    .isNumeric().withMessage('El dato ingresado debe ser numerico'),
    body('caracteristicas').notEmpty().withMessage('Es obligatorio Completar el Campo de las caracteristicas').bail()
    .isLength({min:20}).withMessage('El campo debe tener como minimo 20 caracteres'),
    body('fotoProducto').custom((value,{req}) =>{
        let file = req.file;
        let extensiones = ['.jpg','.png','.gif'];

        
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        } else {
            let extensionDeArchivo = path.extname(file.originalname);
            if (!extensiones.includes(extensionDeArchivo)){
    
                throw new Error (`Las extenciones de archivo permitidas son ${extensiones.join(', ')}` )
            }

        }
        return true
    })
]


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
router.post('/crear', [upload.single('fotoProducto'),validacionesCreadorProductos],productosController.store);

// router.get('/detalle', productosController.mostrarPorId);
// router.get('/id', productosController.mostrarPorId);
// router.get('/crear', productosController.crearProducto);


router.get('/modificar/:idUser', productosController.modificarProducto);
router.put('/modificar/:idUser', upload.single("imagen"), productosController.actualizarProducto);
router.delete("/borrar/:idUser", productosController.borrarProducto)

module.exports = router;

