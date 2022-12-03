const fs = require('fs');
const path = require('path');

const db = require('../../database/models')

//const productsFilePath = path.join(__dirname, '../listadoProductos.json');
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// express validator validaciones
const { validationResult } = require('express-validator');
const product = require('../../database/models/product');
const category = require('../../database/models/category');


const productosController = {
    productos: async (req,res) => {
        try {
            let productos = await db.products.findAll ({include:["category"]})
            // res.status(200).json ({
            //     total : producto.length,
            //     category:category.length,
            //     data:producto,
            //     url : 'http://localhost:3030/api/v1/producto/' + producto.id_product,
            //     status:200
            // })
            productos=productos.map((producto)=> {

                return {
                    id : producto.id_product,
                    nombre : producto.nombre,
                    caracteristicas : producto.caracteristicas,
                    url : 'http://localhost:3005/api/v1/producto/' + producto.id_product,
                    category:producto.category

                }

            })

            let respuesta = {
                meta: {
                    status:200,
                    total:productos.length,
                    totalCategory:{category:category.length},
                //   category:category.length,
                  url: 'http://localhost:3005/api/v1/producto/'
                },
                data:productos
            }
            res.json(respuesta)   
        } catch (error) {
            console.log(error);
            
        }

    },
    detalle: async (req, res) => {
        try {
            const producto = await db.products.findByPk(req.params.id,{include:["category"]});
            // res.status(200).json ({
            //     data:producto, 
            //     url:'http://localhost:3030/api/v1/producto/' + req.params.id,
            //     status:200
            // })
            let respuesta = {
                meta: {
                    status:200,
                    total:producto.length,
                    url:'/imagenes/' + producto.imagen
                },
                data:producto
            }
            res.json(respuesta)

        } catch (error) {
            let respuesta = {
                meta: {
                    status:404,
                    
                }
            }
            res.json(respuesta)
        }
    },

    //// controlador viejo sobre JSON

    // detalle: (req, res) => {
    //     const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    //     const producto = productos.filter((p) => p.id == req.params.id);
    //     console.log(producto,'///////////////////////////////////////////////');


    //     res.render('productosdetalle',{ producto: producto });
    //             // res.render('productosdetalle');
    // },
    crearProducto: (req, res) => {
        res.render('productCreate')
    },
    store: async (req, res) => {

        let resultValidation = validationResult(req)

        if ( resultValidation.errors.length > 0){
            res.render('productCreate',{
                errors:resultValidation.mapped(),
                oldData : req.body
            })
        }
        console.log(resultValidation);

        let file = req.file;

        let archivo;

        if (file) {
            archivo = req.file.filename
        } else {

            archivo = "default-image.png"
        }
        try {
            const productoNuevo = await db.products.create({
                nombre: req.body.nombre,
                caracteristicas: req.body.caracteristicas,
                precio: req.body.precio,
                // id_category: 1,
                imagen: archivo


            }
            );

            console.log({ productoNuevo });
            res.redirect('/productos/detalleProducto/' + productoNuevo.id_product)
        } catch (error) {
            console.log({ error })
        }

    },
    //// controlador viejo sobre JSON
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



    //     res.redirect('/')
    // },
    editar: async (req, res) => {
        
        
        try {
            const producto = await db.products.findByPk(req.params.id);
            
            
                console.log(producto);
                console.log('////////////////////////////////////');
                console.log(req.params.id);
                console.log('////////////////////////////////////');
                const otroProducto = { nombre: producto.dataValues.nombre,
                    
                    id_product: producto.dataValues.id_product,
                    precio: producto.dataValues.precio,
                    caracteristicas: producto.dataValues.caracteristicas
                }
                res.render('productEdition', { producto: otroProducto });
                
                
                
                
            } catch (error) {
                console.log(error)
            }
            // res.render('productosdetalle');
        },
        
        //     editar: (req, res) => {
            //         const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            //         const producto = productos.find((p) => p.id == req.params.id);

    //         console.log('editar');
    //         console.log(producto);
    //         console.log('///////////////////////////////////////////////');


    //         res.render('productEdition',{ producto: producto });

    // },

    actualizar: async (req, res) => {
        
        const productoEditado = db.products

               let resultValidation = validationResult(req)
               console.log(req.params.id);
               
               if ( resultValidation.errors.length > 0){
                console.log(req.body);
                   res.render('productEdition',{producto:{id_product:req.params.id},
                       errors:resultValidation.mapped(),
                       oldData : req.body
                   })
               }
                console.log(resultValidation);
               
        
        
        
        let file = req.file;
        
        let archivo;
        
        if (file) {
            archivo = req.file.filename
        } else {
            
            archivo = productoEditado.imagen
        }
        try {


            await productoEditado.update({
                // const productoEditado = await db.products.update({
                nombre: req.body.nombre,
                caracteristicas: req.body.caracteristicas,
                precio: req.body.precio,
                // id_category: 1,
                 imagen: archivo


            },
            {
                where :{
                    id_product : req.params.id
                }
            }
            );
             console.log({ productoEditado });
            res.redirect('/')
        } catch (error) {
            console.log({ error })
        }

    },

    // actualizar: (req,res) => {
    //     let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    //     console.log(req.body);
    //     console.log(req.params.id);

    //     productos.forEach(p => {
    //         if(p.id==req.params.id) {
    //         p.nombre= req.body.nombre,
    //         p.caracteristicas= req.body.caracteristicas,
    //         p.precio= req.body.precio;

    //         if(req.file){
    //             fs.unlinkSync("./public/imagenes/"+p.imagen)
    //             p.imagen=req.file.filename
    //         }
    //     }

    //     });
    //     const data = JSON.stringify(productos, null, " ");
    //     fs.writeFileSync(productsFilePath, data);

    //     res.redirect('/detalleProducto/' + req.params.id    )
    // }

    borrarProducto: async(req,res)=>{
        try {
            const productoABorrar = await db.products.destroy({
                where:{
                    id_product: req.params.id
                }
            });
                res.redirect('/')

        } catch (error) {
            
                console.log({error})

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