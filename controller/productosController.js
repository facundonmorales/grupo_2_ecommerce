const productosController = {
    show: (req, res) => {
        res.render("productosdetalle")
    }
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