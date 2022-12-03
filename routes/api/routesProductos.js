const express = require("express");
const path = require('path')
const productosController = require("../../controller/api/productosController");
// let logDBMiddleware = require('../middlewares/logDBMiddleware')

// const { body } = require('express-validator')

// /// validaciones de creacion Producto 

// const validacionesCreadorProductos = [
//     body('nombre').notEmpty().withMessage('Es obligatorio Completar el Campo del Nombre').bail()
//     .isLength({min:5}).withMessage('El campo debe tener como minumo 5 caracteres'),
//     body('precio').notEmpty().withMessage('Es obligatorio Completar el Campo del Importe').bail()
//     .isNumeric().withMessage('El dato ingresado debe ser numerico'),
//     body('caracteristicas').notEmpty().withMessage('Es obligatorio Completar el Campo de las caracteristicas').bail()
//     .isLength({min:20}).withMessage('El campo debe tener como minimo 20 caracteres'),
//     body('fotoProducto').custom((value,{req}) =>{
//         let file = req.file;
//         let extensiones = ['.jpg','.png','.gif'];

        
//         if(!file){
//             throw new Error ('Tienes que subir una imagen')
//         } else {
//             let extensionDeArchivo = path.extname(file.originalname);
//             if (!extensiones.includes(extensionDeArchivo)){
    
//                 throw new Error (`Las extenciones de archivo permitidas son ${extensiones.join(', ')}` )
//             }

//         }
//         return true
//     })
// ]

// const multer = require('multer');

// var storage = multer.diskStorage ({
//     destination : (req,res,cb) => {
//         cb(null,'public/imagenes');
//     },
//     filename : (req,file,cb) => {
//         console.log({file});
//         // cb(null,file.fieldname + "-" + Date.now())
//         cb(null,Date.now()+ "-" + file.originalname)
//     } ,
// });
// const upload = multer({storage}) 
const router = express.Router();



// router.get('/crear', productosController.crearProducto);
// router.post('/crear', [upload.single('fotoProducto'),validacionesCreadorProductos],productosController.store);

router.get('/producto',productosController.productos);
router.get('/producto/:id', productosController.detalle);
// router.get('/edit/:id',productosController.editar);
// router.put('/edit/:id', [upload.single('fotoProducto'),validacionesCreadorProductos],productosController.actualizar);
// router.delete('/borrar/:id', productosController.borrarProducto)

module.exports = router;