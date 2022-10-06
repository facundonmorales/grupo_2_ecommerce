const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const req = require('express/lib/request');

const loginCangrejo = path.join(__dirname, '../Users.json');


const usuariosControllers = {
    login: (req, res) => {

        res.render('login');
    },
    procesologueo: (req, res) => {
        const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
        let usuarioAloguearse;
        for (let i = 0; i < logueo.length; i++) {
            if (logueo[i].email == req.body.email && bcrypt.compareSync(req.body.password, logueo[i].password)) {

                usuarioAloguearse = logueo[i];
                break

            }

        } if (usuarioAloguearse == undefined) {
            return res.render('login', {
                errors: [
                    { msg: "Credenciales Invalidas" }
                ]
            });
        }
        req.session.usuarioLogueado = usuarioAloguearse;

        if (req.body.recordarme == "true") {
            res.cookie("recordarme", usuarioAloguearse.email, { maxAge: 100000, httpOnly: true })

        }
        res.render("usuarioDetalle", { p: usuarioAloguearse })
    }

    ,
    pass: (req, res) => {

        res.render('pass');

    },
    register: (req, res) => {


        res.render('register');

    },
    registroDeUsuarios: (req, res) => {

        const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
        const usuarioN = {
            Id: Date.now(),
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            email: req.body.email,
            imagen: "default-image.png",
            password: bcrypt.hashSync(req.body.password, 15)

        };
        if(req.file){
            usuarioN.imagen= req.file.filename;

        }
        logueo.push(usuarioN)
        const usuarioNU = JSON.stringify(logueo, null, " ");
        fs.writeFileSync(loginCangrejo, usuarioNU)
        res.redirect("/users/login")
    },
    editarUsuario: (req, res) => {
        const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
        let usuarioNuevo2 = parseInt(req.params.idUser);
        let usu = logueo.find((u) => u.Id === usuarioNuevo2);
        if (usu) { res.render("EdicionDeUsuarios", { usu }) }



    },
    modificarUsuario: (req, res) => {
        const logueo = JSON.parse(fs.readFileSync(loginCangrejo, 'utf-8'));
        let nuevoUsuario = req.body;
        let nuevoArchivo2 = req.file;
        let idUsuario = parseInt(req.params.IdUser)
        let code = logueo.find((u) => u.Id === idUsuario)
        if (code && nuevoUsuario) {
            code.Id= nuevoUsuario.Id
            code.nombre = nuevoUsuario.nombre
            code.apellido = nuevoUsuario.apellido
            code.telefono = nuevoUsuario.telefono
            code.email = nuevoUsuario.email
            
        }
        if (nuevoArchivo2) {
            code.imagen = req.file.filename


        }
        

        const agregadoUsuario = JSON.stringify(logueo,null," ");
        fs.writeFileSync(loginCangrejo,agregadoUsuario);

        res.redirect("/")

    },
    borrarUsuario:(req,res)=>{
        let logueo = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        let idUsuario = parseInt(req.params.idUser)
        let nanoto = logueo.filter((u) => u.id !== idUsuario)
         nanoto = JSON.stringify(nanoto, null, " ");
        fs.writeFileSync(loginCangrejo, nanoto);
        res.redirect("/")

    }

}


module.exports = usuariosControllers;