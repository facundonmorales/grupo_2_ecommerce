console.log("estoy en linea");


window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {


        let errores = [];

        let camponombre = document.querySelector("#nombre");
        let campoapellido = document.querySelector("#apellido");
        let campoemail = document.querySelector("#email");
        let campotelefono = document.querySelector("#telefono");
        let campopassword = document.querySelector("#password");
        let expresionregular = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
        let campoimagen = document.querySelector("#imagen");



        if (camponombre.value == "") {
            errores.push("el campo nombre tiene que estar completo")
        } else if (campoapellido.value.length < 2) {
            errores.push("el nombre debe tener mas de 2 caracteres")
        };


        if (campoapellido.value == "") {
            errores.push("el campo apellido tiene que estar completo")
        } else if (camponombre.value.length < 2) {
            errores.push("el apellido debe tener mas de 2 caracteres")
        };

        if (campotelefono.value == "") {
            errores.push("el campo telefono tiene que estar completo")
        }

        if (campopassword.value == "") {
            errores.push("el campo contraseña tiene que estar completo")
        } else if (campopassword.value.length < 8) {
            errores.push("la contraseña tiene que tener minimo 8 caracteres")
        };


        if (campoemail.value == "") {
            errores.push("el campo email tiene que estar completo")
        } else if (!expresionregular.test(campoemail.value)) {
            errores.push("tiene que ser un correo electronico valido")
        };

        if(campoimagen.value==""){
            errores.push("tiene que colocar una imagen como avatar")
        }






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
