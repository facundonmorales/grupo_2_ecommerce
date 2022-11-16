window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
       

        let errores = [];

        let campoNombre = document.querySelector("#nombre");
        let campoPrecio = document.querySelector("#precio");
        let campoFotoProducto = document.querySelector("#fotoProducto");
        let campoCaracteristicas = document.querySelector("#caracteristicas");
   

        if (campoNombre.value == "") {
          errores.push("el campo nombre tiene que estar completo")
        } else if (campoNombre.value.length < 2) {
            alert("el nombre debe tener mas de 2 caracteres")
        };

        if (campoPrecio.value == "") {
            errores.push("el campo precio tiene que estar completo")
        };

        if (campoCaracteristicas.value == "") {
            errores.push("el campo de caracteristicas tiene que estar completo")
        } else if (campoCaracteristicas.value.length < 10) {
            errores.push("el nombre debe tener mas de 10 caracteres")
        };

         if(campoFotoProducto.value==""){
            errores.push("Debe colocar una foto de producto")
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
