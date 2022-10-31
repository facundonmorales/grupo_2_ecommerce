const fs = require('fs');
const path = require('path');
const db = require('../database/models')


// const productsFilePath = path.join(__dirname, '../listadoProductos.json');

const homeController = {
    index: async (req, res) => {
        try {
            const productos = await db.products.findAll()
            //console.log(productos);
            res.render('index',{ producto: productos });
        } catch (error) {
        res.send(error)    
            
 }
    //CONTROLADOR VIEJO CON JSON
 // index: (req, res) => {
    //     const productsFilePath = path.join(__dirname, '../listadoProductos.json');
    //     const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    //     res.render('index', { productos: productos });

        // },
        // crearProducto: (req, res) => {
        //     res.render('productCreate')
        // },

        // store: (req, res) => {


        //     const productoNuevo = {
        //         id: Date.now(),
        //         nombre: req.body.nombre,
        //         caracteristicas: req.body.caracteristicas,
        //         precio: req.body.precio,
        //         imagen: "default-image.png"

        //     };

        //     if (req.file){

        // 		productoNuevo.imagen=req.file.filename;

        // 	}
        //     const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //     productos.push(productoNuevo);

        //     const data = JSON.stringify(productos, null, " ");
        //     fs.writeFileSync(productsFilePath, data);

        //     // Do the magic

        //     console.log('////////////');
        //     console.log(productos);
        //     console.log('////////////');

        //     res.redirect('/crear')
        // },

    }
}

module.exports = homeController;