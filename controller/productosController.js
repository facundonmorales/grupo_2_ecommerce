

const productosController = {
    mostrarTodos:(req, res) => {
        res.send('Todos los productos')},

    mostrarPorId : (req, res) => {
        res.render('productosdetalle')},

    crearProducto : (req, res) => {
        res.render('productCreate')},
    
    modificarProducto : (req, res) => {
        res.render('productEdition')}
}

module.exports= productosController;


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