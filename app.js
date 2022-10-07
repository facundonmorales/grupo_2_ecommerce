const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cookieParser= require("cookie-parser")




app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");

const methodOverride= require("method-override");
app.use(methodOverride("_method"));

let session = require("express-session")

app.use(session({secret: "esto es un secreto"}))

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
// app.listen(3000, () => {
//     console.log('Servidor funcionando');
// });
const urlparser = bodyParser.urlencoded({extended:false})
const rutaCarrito= require("./routes/routes.carrito")

app.use('/carrito', rutaCarrito);

const usersRouter = require('./routes/routes.users') 

app.use('/users',urlparser,usersRouter)

const homeRouter = require('./routes/routes.home')

app.use('/', homeRouter);

const rutaProductos= require("./routes/routesProductos");


app.use('/productos', rutaProductos);



app.listen(3005, () => {
    console.log('Servidor funcionando');
});

