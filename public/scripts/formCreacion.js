window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
       

        let errores = [];

        let campoNombre = document.querySelector("#nombre");
        let campoPrecio = document.querySelector("#precio");
        let campoFotoProducto = document.querySelector("#fotoProducto");
        let campoCaracteristicas = document.querySelector("#caracteristicas");
   

        if (campoNombre.value == "") {
            alert("el campo nombre tiene que estar completo")
        } else if (campoNombre.value.length < 2) {
            alert("el nombre debe tener mas de 2 caracteres")
        };

        if (campoPrecio.value == "") {
            alert("el campo precio tiene que estar completo")
        };

        if (campoCaracteristicas.value == "") {
            alert("el campo de caracteristicas tiene que estar completo")
        } else if (campoCaracteristicas.value.length < 10) {
            alert("el nombre debe tener mas de 10 caracteres")
        };

         if(campoFotoProducto.value==""){
            alert("Debe colocar una foto de producto")
         }



        let ulerrores = document.querySelector("#errores")
        console.log(errores)
        console.log(ulerrores)

        if (errores.length > 0) {
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                ulerrores.innerHTML += "<li>" + errores[i] 

            }

        }
    })
})
