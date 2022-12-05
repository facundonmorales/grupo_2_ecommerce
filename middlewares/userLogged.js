function userLogged (req,res,next){
// console.log('user meddleware');

    res.locals.isLogged = false
    
    if ( req.session && req.session.usuarioLogueado){
        res.locals.isLogged = true
        res.locals.usuarioLogueado = req.session.usuarioLogueado


    }

    next();

}

module.exports = userLogged