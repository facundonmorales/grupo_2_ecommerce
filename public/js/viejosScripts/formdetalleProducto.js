

window.addEventListener("load", function () {


    let botondecomprar = document.querySelectorAll(".carrito")
    console.log(botondecomprar)

    botondecomprar.forEach((boton) => {


        boton.addEventListener("click", (e) => {
            e.preventDefault()
           
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito);
                
                let index = carrito.findIndex((prod)=> prod.id== e.target.dataset.id);
                if(index!=-1){
                    carrito[index].cantidad =carrito[index].cantidad+1
                }
                else {
                    carrito.push({id: e.target.dataset.id, cantidad: 1 })
                }
                localStorage.setItem("carrito", JSON.stringify(carrito));
            } else {
                localStorage.setItem("carrito", JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }]))
            }
            
        })


    })
})