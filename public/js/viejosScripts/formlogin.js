window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {


        let errores = [];

        let campoemail = document.querySelector("#email");
        let campopassword = document.querySelector("#password");

        if (campoemail.value == "") {
            errores.push("el campo email tiene que estar completo")
        } else if (!expresionregular.test(campoemail.value)) {
            errores.push("tiene que ser un correo electronico valido")
        };
        
        if (campopassword.value == "") {
            errores.push("el campo contraseña tiene que estar completo")
        } else if (campopassword.value.length < 8) {
            errores.push("la contraseña tiene que tener minimo 8 caracteres")
        };



        let ulerrores = document.querySelector("#errores")
        console.log(errores)
        console.log(ulerrores)
         ulerrores.innerHTML=""
        if (errores.length > 0) {
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                ulerrores.innerHTML += "<li>" + errores[i]

            }

        }
    })
})


