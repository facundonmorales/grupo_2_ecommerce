const express = require('express');
const homeController = require('../controller/homeController');
const productosController = require('../controller/productosController');
const usersController = require('../controller/users.controller');

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

router.get('/', homeController.index);
router.get('/buscar', homeController.searchPage)
router.get('/login', homeController.loginPage)
router.get('/register', homeController.registerPage)
router.get('/productos', homeController.productPage);

// router.get('/login', usersController.login);
// router.get('/register', homeController.register);
// router.get('/pass', homeController.pass);
// router.get('/carrito', homeController.carrito);
// router.get('/detalle', homeController.detalle);


// // router.get('/crear', homeController.crearProducto);
// // router.post('/crear', upload.single('fotoProducto'),homeController.store);

// router.get('/crear', homeController.crearProducto);
// router.post('/crear', upload.single('fotoProducto'),homeController.store);



module.exports = router;