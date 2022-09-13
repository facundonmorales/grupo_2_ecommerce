const fs = require('fs');
const path = require('path');

const direccionProductos = path.join(__dirname, '../listadoProductos.json')


const productosController = {
    mostrarTodos: (req, res) => {
        res.send('Todos los productos')
    },

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
    
    actualizarProducto: (req,res) => {
        let productos2 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
        let nuevo= req.body;
        let nuevoArchivo = req.file;
        let idproduc = parseInt(req.params.idUser)
        let use = productos2.find((u) => u.id === idproduc);
        if(use & nuevo){
            use.id= nuevo.id;
            use.nombre= nuevo.nombre;
            use.precio= nuevo.precio;
            use.caracteristicas= nuevo.caracteristicas;
            if(nuevoArchivo){
                use.imagen= req.file.filename
            }

        }
    }

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