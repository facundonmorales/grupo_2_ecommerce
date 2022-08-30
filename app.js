const express = require('express');

const app = express();


app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");



/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});*/

// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/login.html');
// });

// // app.get('/register', (req,res)=>{
// //     res.sendFile(__dirname + '/views/register.html');
// // });
// app.get('/pass', (req,res)=>{
//     res.sendFile(__dirname + '/views/pass.html');
// });


//app.get('/productosdetalle', (req, res) => {
    //res.sendFile(__dirname + '/views/productosdetalle.html');
//});
// app.get('/Carrito', (req, res) => {
//     res.sendFile(__dirname + '/views/productCart.html')
// })
app.listen(3000, () => {
    console.log('Servidor funcionando');
});

const rutaCarrito= require("./routes/routes.carrito")

app.use('/carrito', rutaCarrito);

const usersRouter = require('./routes/routes.users') 

app.use('/users',usersRouter)

const homeRouter = require('./routes/routes.home')

app.use('/', homeRouter);

const rutaProductos= require("./routes/routesProductos")

app.use('/productos', rutaProductos);
