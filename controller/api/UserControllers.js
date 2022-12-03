
const fs = require('fs');
const path = require('path');

const db = require('../../database/models');

const UserControllers = {

    users: async (req, res) => {
        try {
            let usuarios = await db.users.findAll()


            usuarios = usuarios.map((usuario) => {
                return {
                    id: usuario.id_user,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                    url: "http://localhost:3005/api/usuarios/users/" + usuario.id_user,


                }
            })
            let respuestaUsuario = {
                meta: {
                    status: 200,
                    total: usuarios.length,
                    url: "http://localhost:3005/api/usuarios/users/"
                },
                data: usuarios
            }
            res.json(respuestaUsuario)
        } catch (error) {
            console.log(error);

        }
    },
    detalleUsers: async (req, res) => {

        try {

            const usuario = await db.users.findByPk(req.params.id

            );

            let respuesta = {
                meta: {
                    status: 200,
                    total: usuario.length,
                    url: "/imagenes/" + usuario.imagen,

                },
                data: usuario
            }
            res.json(respuesta)

        } catch (error) {
            let respuesta = {
                meta: {
                    status: 404,
                    url: "api/usuarios/users/:id"
                }
            }
            res.json(respuesta)

        }
        
    }

}

module.exports = UserControllers;