function authMiddleware(req,res,next){
if(req.session.usuarioLogueado!= undefined){
    next();
} else{
    res.send("No  estas logueado");
}
}

module.exports= authMiddleware;