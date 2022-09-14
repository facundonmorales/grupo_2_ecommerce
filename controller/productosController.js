const fs = require('fs');
const path = require('path');
const direccionProductos = path.join(__dirname, '../listadoProductos.json')



const productosController = {
<<<<<<< HEAD
    mostrarTodos:(req, res) => {
        res.render('productos')},
=======
    mostrarTodos: (req, res) => {
        res.send('Todos los productos')
    },
>>>>>>> ae5e87db51a7001902dde3f5a2a5929b26c88982

    mostrarPorId: (req, res) => {
        res.render('productosdetalle')
    },

    crearProducto: (req, res) => {
        res.render('productCreate')
    },

    modificarProducto: (req, res) => {
        let productos2 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        let idproduc = parseInt(req.params.idUser)
        let use = productos2.find((u) => u.id === idproduc);
        if (use) { res.render("productEdition", { use }) }
    },

    actualizarProducto: (req, res) => {


        let productos2 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        let nuevo = req.body;
        let nuevoArchivo = req.file;
        let idproduc = parseInt(req.params.idUser)
        let use = productos2.find((u) => u.id === idproduc)
        if (use && nuevo) {
            use.id = nuevo.id;
            use.nombre = nuevo.nombre;
            use.precio = Number(nuevo.precio);
            use.caracteristicas = nuevo.caracteristicas;
        }
        if (nuevoArchivo) {
            use.imagen = req.file.filename
        }
        console.log(nuevo);
        console.log(use);
        const nano = JSON.stringify(productos2, null, " ");
        fs.writeFileSync(direccionProductos, nano);

        res.redirect("/")
    },
    borrarProducto: (req, res) => {
        let productos3 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        let idproduc2 = parseInt(req.params.idUser)
        let nanot = productos3.filter((u) => u.id !== idproduc2)
         nanot = JSON.stringify(nanot, null, " ");
        fs.writeFileSync(direccionProductos, nanot);
        res.redirect("/")



    }
}




module.exports = productosController;


