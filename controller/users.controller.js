
const usuariosControllers = {
    login: (req, res) => {

        res.render('login');
    },
    pass: (req, res) => {

        res.render('pass');

    },
    register: (req, res) => {

        res.render('register');

    }
}

module.exports = usuariosControllers;