const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const req = require('express/lib/request');
const db = require('../database/models');
const  {validationResult}  = require("express-validator");
const loginCangrejo = path.join(__dirname, '../Users.json');



const usuariosControllers = {
    login: (req, res) => {

        res.render('login');
    },

    procesologueo: async (req, res) => {

        const validador = validationResult(req)
        
        if(validador.errors.length > 0){
            return res.render("login",{
                errors: validador.mapped(),
                oldData: req.body
            })
        }
        
        try {
            let usuarioAloguearse;
            let contraseña = req.body.password


            let personita = await db.users.findOne(
                {
                    where: {
                        email: req.body.email
                    }
                })
                console.log(bcrypt.hashSync(contraseña, 10))
                console.log(personita.password)
            if (bcrypt.compareSync(contraseña, personita.password)) {
                usuarioAloguearse = personita;

                console.log(personita)
            }

            if (usuarioAloguearse == undefined) {
                return res.render('login', {
                    errors: [
                        { msg: "Credenciales Invalidas" }
                    ]
                })
            }
            

            if (req.body.recordarme == "true") {
                res.cookie("recordarme", usuarioAloguearse.email, { maxAge: 100000, httpOnly: true })
            }

            req.session.usuarioLogueado = usuarioAloguearse
            res.render("usuarioDetalle", { p: usuarioAloguearse })
        }




        catch (error) {
            res.send("hubo un error" + error)
        }






    }

    ,
    pass: (req, res) => {

        res.render('pass');

    },
    register: (req, res) => {


        res.render('register');

    },
    registroDeUsuarios: async (req, res) => {

        const validador = validationResult(req)
        
        if(validador.errors.length > 0){
            return res.render("register",{
                errors: validador.mapped(),
                oldData: req.body
            })
        }
       

       
        let file = req.file;

        let archivo;

        if (file) {
            archivo = req.file.filename
        } else {
            archivo = "default-image.png"
        }
        try {
            const usuarioN = await db.users.create({

                nombre: req.body.nombre,
                apellido: req.body.apellido,
                telefono: req.body.telefono,
                email: req.body.email,
                imagen: archivo,
                password: bcrypt.hashSync(req.body.password, 10)
            });
            console.log(bcrypt.hashSync(req.body.password, 10))
            console.log(usuarioN.password)
            res.redirect("/users/login")
        } catch (error) {
            res.send({ error })
        }
    },




    // nuevo controlador de editar Usuario
    editarUsuario: async (req, res) => {
        try {
            const logueo = await db.users.findByPk(req.params.idUser)
            res.render("EdicionDeUsuarios", { usu: logueo })

        } catch (error) {
            res.send("hubo un error" + error)

        }
    },
    // viejo controlador de levantar vista editarUsuarios

    // editarUsuario:  (req, res) => {
    //     const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
    //     let usuarioNuevo2 = parseInt(req.params.idUser);
    //     let usu = logueo.find((u) => u.Id === usuarioNuevo2);
    //     if (usu) { res.render("EdicionDeUsuarios", { usu }) }



    // },




    modificarUsuario: async (req, res) => {
        let logueo = db.users;
        
        let file = req.file;
        let archivo;

        if (file) {
            archivo = req.file.filename
        } else {
            archivo = logueo.imagen
        }
        try {
            await logueo.update({
                apellido: req.body.apellido,

                nombre: req.body.nombre,
                telefono: req.body.telefono,
                email: req.body.email,
                imagen: archivo,
                // password: bcrypt.hashSync(req.body.password, 15)
                password: req.body.password

            }, {
                where: {
                    id_user: req.params.idUser
                }
            });

            console.log(
            { logueo }
            )
            res.redirect("/")
        } catch (error) {
            res.send("hubo un error" + error)
        }
    },
    
        // const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
        // let nuevoUsuario = req.body;
        // let nuevoArchivo2 = req.file;
        // let idUsuario = parseInt(req.params.IdUser)
        // let code = logueo.find((u) => u.Id === idUsuario)
    
        // if (code && nuevoUsuario) {
        //     //code.Id= nuevoUsuario.Id
        //     code.nombre = nuevoUsuario.nombre
        //     code.apellido = nuevoUsuario.apellido
        //     code.telefono = nuevoUsuario.telefono
        //     code.email = nuevoUsuario.email
    
        // }
        // if (nuevoArchivo2) {
        //     code.imagen = req.file.filename
        // console.log(nuevoUsuario);
        // console.log(nuevoArchivo2);
        // console.log(idUsuario);
    
        // const agregadoUsuario = JSON.stringify(logueo, null, " ");
        // fs.writeFileSync(loginCangrejo, agregadoUsuario);








    borrarUsuario: async (req, res) => {
        try {
            const borrar = await db.users.destroy({
                where:{
                    id_user: req.params.idUser
                }
            })
            res.redirect("/")
            
        } catch (error) {
            res.send("hubo un error" + error)
            
        };
        
                // let logueo = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
                // let idUsuario = parseInt(req.params.idUser)
                // let nanoto = logueo.filter((u) => u.id !== idUsuario)
                // nanoto = JSON.stringify(nanoto, null, " ");
                // fs.writeFileSync(loginCangrejo, nanoto);
                // res.redirect("/")
        
            }
        
        }
        
        
        module.exports = usuariosControllers;









