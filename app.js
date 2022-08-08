const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/pass', (req,res)=>{
    res.sendFile(__dirname + '/views/pass.html');
});

app.get('/productosdetalle', (req,res)=>{
    res.sendFile(__dirname + '/views/productosdetalle.html');
});