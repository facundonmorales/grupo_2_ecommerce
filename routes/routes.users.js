const express = require('express');
const { body } = require("express-validator");
const usuariosControllers = require('../controller/users.controller');
const router = express.Router();
let guestMiddleware = require("../middlewares/guestMiddleware");
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');
const path = require("path");
const db = require('../database/models');
const req = require('express/lib/request');

var storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/imagenes');
    },
    filename: (req, file, cb) => {


        cb(null, Date.now() + "-" + file.originalname)
    },
});
const upload = multer({ storage })



const validacionesUsuarioC = [

    body("nombre").notEmpty().withMessage("debes completar el campo nombre").bail()
        .isLength({ min: 2, }).withMessage("el nombre debe tener mas de 2 caracteres"),

    body("apellido").notEmpty().withMessage("debes completar el campo apellido").bail()
        .isLength({ min: 2, }).withMessage("el nombre debe tener mas de 2 caracteres"),

    body("telefono").notEmpty().withMessage("debes completar el campo telefono").bail()
        .isNumeric().withMessage("el campo debe ser un numero de telefono"),


    body("email").notEmpty().withMessage("debes completar el campo email").bail()
        .isEmail().withMessage("debe ser un email valido").bail()
        .custom(async(value) => {
            console.log( value)

         const user = await  db.users.findOne({
                where: {

                    email: value

                }
            })
                .then(user => {
                    if (user) {
                        throw new Error('este correo ya existe');
                        ;
                    }
                })
            return true;

        }),







    body("password").notEmpty().withMessage("debes completar el campo contraseña").bail()
        .isLength({ min: 8, }).withMessage("el nombre debe tener mas de 8 caracteres"),


    body("imagen").custom((value, { req }) => {
        let filess = req.file;
        //console.log(req.file)
        let acceptaextensiones = [".jpg", ".jpeg", ".png", ".gif"];

        if (!filess) {
            throw new Error('necesitar cargar una imagen para continuar')

        } else {
            let fileextension = path.extname(filess.originalname);
            // console.log(fileextension)
            let verificar = acceptaextensiones.includes(fileextension)
            //console.log(verificar)
            if (!acceptaextensiones.includes(fileextension)) {
                throw new Error("tiene que colocar un archivo combatible con .jpg, .jpeg, .png, .gif "
                )




            }

        }
        return true;
    })
]

const validacionesLogin = [

    body("email").notEmpty().withMessage("debes completar el campo email").bail()
        .isEmail().withMessage("debe ser un email valido").bail(),

    body("password").notEmpty().withMessage("debes completar el campo contraseña").bail()
        .isLength({ min: 8, }).withMessage("la contraseña debe tener mas de 8 caracteres"),

]





    router.get('/login', guestMiddleware, usuariosControllers.login),
    router.post('/login', validacionesLogin, usuariosControllers.procesologueo),
    router.get('/pass', usuariosControllers.pass),
    router.get('/register', guestMiddleware, usuariosControllers.register), 
    router.post("/register", upload.single("imagen"), validacionesUsuarioC, usuariosControllers.registroDeUsuarios),
    router.get("/editar/:idUser", authMiddleware, usuariosControllers.editarUsuario),
    router.put("/editar/:idUser",upload.single("imagen"), usuariosControllers.modificarUsuario),
    router.delete("/borrar/:idUser", usuariosControllers.borrarUsuario),
    
    
    router.get("/logout/", usuariosControllers.logout),


module.exports = router;