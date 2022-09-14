const fs = require('fs');
const path = require('path');

const direccionProductos = path.join(__dirname, '../listadoProductos.json')



// const productsFilePath = path.join(__dirname, '../listadoProductos.json');
const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));

const productosController = {
    // mostrarTodos: (req, res) => {
    //     res.send('Todos los productos')


    // index: (req, res) => {
    //     const productsFilePath = path.join(__dirname, '../listadoProductos.json');
    //     const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
    //     res.render('index',{ productos: productos });
        
    // },
    detalle: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        const producto = productos.filter((p) => p.id == req.params.id);

        console.log(producto,'///////////////////////////////////////////////');


        res.render('productosdetalle',{ producto: producto });
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

        if (req.file) {

            productoNuevo.imagen = req.file.filename;

        }
        const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));

        productos.push(productoNuevo);

        const data = JSON.stringify(productos, null, " ");
        fs.writeFileSync(direccionProductos, data);

        // Do the magic

        console.log('////////////');
        console.log(productos);
        console.log('////////////');

        res.redirect('/productos/crear')
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


