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

    },
    searchPage: function(req, res){
        res.render('busqueda');
    },
    loginPage: function(req, res){
        res.render('login')
    },
    registerPage: function(req, res){
        res.render('register')
    },
    productPage: function(req, res){
        res.render('products')
    }

}

module.exports = homeController;