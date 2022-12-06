const fs = require('fs');
const path = require('path');

const db = require('../database/models')

const { validationResult } = require('express-validator');


// const direccionProductos = path.join(__dirname, '../listadoProductos.json')



// const productsFilePath = path.join(__dirname, '../listadoProductos.json');
//const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));

const productosController = {
    // mostrarTodos: (req, res) => {
    //     res.send('Todos los productos')


    // index: (req, res) => {
    //     const productsFilePath = path.join(__dirname, '../listadoProductos.json');
    //     const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
    //     res.render('index',{ productos: productos });
        
    // },
    detalle: async (req, res) => {
        try {
            // const producto = await db.products.findByPk(req.params.id,{include:["Category"]});
            const producto = await db.products.findByPk(req.params.id);
            res.render('productosdetalle', { producto: producto });

        } catch (error) {
            res.send(error)
        }
        // res.render('productosdetalle');
    },



    // detalle: (req, res) => {
    //     const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
    //     const producto = productos.filter((p) => p.id == req.params.id);

    //     console.log(producto,'///////////////////////////////////////////////');


    //     res.render('productosdetalle',{ producto: producto });
    // },
  

    crearProducto: (req, res) => {
        res.render('productCreate')
    },

    store:async (req, res) => {

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

    // CONTROLARDOR VIEJO CON JSON
    // store: (req, res) => {


    //     const productoNuevo = {
    //         id: Date.now(),
    //         nombre: req.body.nombre,
    //         caracteristicas: req.body.caracteristicas,
    //         precio: req.body.precio,
    //         imagen: "default-image.png"

    //     };

    //     if (req.file) {

    //         productoNuevo.imagen = req.file.filename;

    //     }
    //     const productos = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));

    //     productos.push(productoNuevo);

    //     const data = JSON.stringify(productos, null, " ");
    //     fs.writeFileSync(direccionProductos, data);



    //     res.redirect('/productos/crear')
    // },

    crearProducto: (req, res) => {
        res.render('productCreate')
    },

    modificarProducto: async (req, res) => {
        try {
            const producto = await db.products.findByPk(req.params.idUser);
            
            
                console.log(producto);
                console.log('////////////////////////////////////');
                console.log(req.params.id);
                console.log('////////////////////////////////////');
                const otroProducto = { nombre: producto.dataValues.nombre,
                    
                    id_product: producto.dataValues.id_product,
                    precio: producto.dataValues.precio,
                    caracteristicas: producto.dataValues.caracteristicas,
                    imagen:producto.dataValues.imagen
                }
                res.render('productEdition', { producto: otroProducto });
                
                
                
                
            } catch (error) {
                console.log(error)
            }
            // res.render('productosdetalle');
        },
        
    
/// CONTROLARDOR VIEJO CON JSON

    // modificarProducto: (req, res) => {
    //     let productos2 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
    //     let idproduc = parseInt(req.params.idUser)
    //     let use = productos2.find((u) => u.id === idproduc);
    //     if (use) { res.render("productEdition", { use }) }
    // },

    actualizarProducto: async (req, res) => {
        const productoEditado = db.products

               let resultValidation = validationResult(req)
               console.log(req.params.idUser);
               
               if ( resultValidation.errors.length > 0){
                console.log(req.body);
                   res.render('productEdition',{producto:{id_product:req.params.idUser},
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
                    id_product : req.params.idUser
                }
            }
            );
             console.log({ productoEditado });
            res.redirect('/')
        } catch (error) {
            console.log({ error })
        }

    },

    /// CONTROLARDOR VIEJO CON JSON
    // actualizarProducto: (req, res) => {


    //     let productos2 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
    //     let nuevo = req.body;
    //     let nuevoArchivo = req.file;
    //     let idproduc = parseInt(req.params.idUser)
    //     let use = productos2.find((u) => u.id === idproduc)
    //     if (use && nuevo) {

    //         //use.id = nuevo.id;
    //         use.nombre = nuevo.nombre;
    //         use.precio = Number(nuevo.precio);
    //         use.caracteristicas = nuevo.caracteristicas;
    //     }
    //     if (nuevoArchivo) {
    //         use.imagen = req.file.filename
    //     }
       
    //     const nano = JSON.stringify(productos2, null, " ");
    //     fs.writeFileSync(direccionProductos, nano);

    //     res.redirect("/")
    // },
    borrarProducto: async(req,res)=>{
        try {
            let productoABorrar = await db.products.destroy({
                where:{
                    id_product: req.params.idUser
                },
            });
                res.redirect('/')

        } catch (error) {
            
            console.log ({error})

        }
    }

 /// CONTROLARDOR VIEJO CON JSON  
    // borrarProducto: (req, res) => {
    //     let productos3 = JSON.parse(fs.readFileSync(direccionProductos, 'utf-8'));
    //     let idproduc2 = parseInt(req.params.idUser)
    //     let nanot = productos3.filter((u) => u.id !== idproduc2)
    //      nanot = JSON.stringify(nanot, null, " ");
    //     fs.writeFileSync(direccionProductos, nanot);
    //     res.redirect("/")



    // }
}




module.exports = productosController;


