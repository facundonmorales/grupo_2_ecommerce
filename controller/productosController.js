const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../listadoProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productosController = {
    mostrarTodos: (req, res) => {
        res.send('Todos los productos')
    },

    index: (req, res) => {
        const productsFilePath = path.join(__dirname, '../listadoProductos.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        res.render('index',{ productos: productos });
        
    },
    detalle: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const producto = productos.filter((p) => p.id == req.params.id);

        console.log(producto,'///////////////////////////////////////////////');


        res.render('productosdetalle',{ producto: producto });
    },
    modificarProducto: (req, res) => {
        res.render('productEdition')
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
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        productos.push(productoNuevo);

        const data = JSON.stringify(productos, null, " ");
        fs.writeFileSync(productsFilePath, data);

        // Do the magic

        console.log('////////////');
        console.log(productos);
        console.log('////////////');

        res.redirect('/productos/crear')
    },


}

module.exports = productosController;


/*function (req, res){
    let idProducto = req.params.id
}*/

/*app.get('/serie/:id', function (req, res){
    let id = req.params.id
    for (let i=0; i < series.length; i++){
        if(series[i].id==id){
            res.send(series[i])
            }
        }
    })*/