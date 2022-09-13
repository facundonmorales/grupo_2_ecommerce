const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../listadoProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const homeController = {
    index: (req, res) => {
        const productsFilePath = path.join(__dirname, '../listadoProductos.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        res.render('index',{ productos: productos });
        
    },
    login: (req, res) => {

        res.render('login');

    },
    register: (req, res) => {

        res.render('register');
    },
    carrito: (req, res) => {

        res.render('productCart');
    },
    detalle: (req, res) => {

        res.render('productosdetalle');
    },
    pass: (req, res) => {
        res.render('pass');
    },
    crearProducto: (req, res) => {
        res.render('productCreate')
    },

    store: (req, res) => {


        const productoNuevo = {
            id: Date.now(),
            nombre: req.body.nombre,
            caracteristicas: req.body.caracteristicas,
            precio: req.body.precio,
            imagen: "default-image.png"

        };

        if (req.file){

			productoNuevo.imagen=req.file.filename;
		
		}
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        productos.push(productoNuevo);

        const data = JSON.stringify(productos, null, " ");
        fs.writeFileSync(productsFilePath, data);

        // Do the magic

        console.log('////////////');
        console.log(productos);
        console.log('////////////');

        res.redirect('/crear')
    },
};

module.exports = homeController;