


function vaciarCarrito() {
    localStorage.removeItem("carrito");
}

function calcular(product) {
    return product.reduce(
        (acum, product) => (acum += product.precio * product.cantidad),
        0
    )
}
let carritotabla = document.querySelector(".carritotabla");
let products = [];
if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito)
    console.log(carrito)


    carrito.forEach((element, index) => {
        fetch("/api/v1//producto/" + element.id)
            .then((res) => res.json())
            .then((product) => {
                if (product) {




                    carritotabla.innerHTML += `
                <tr id="row${index}">
                <th scope="row">${index + 1}</th>
                <td>${product.data.nombre}</td>
                <td>${product.data.precio}</td>
               
                <td class="text-center">${element.cantidad}</td>
                <td class="text-center">${parseFloat(
                        product.data.precio * element.cantidad, 2
                    ).toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})></td>`
                    products.push({
                        Id: product.data.id,
                        nombre: product.data.nombre,
                        precio: product.data.precio,
                        cantidad: element.cantidad,

                    })
                } else {
                    //borrar del localstorage el producto
                    carrito.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                }








            })
            .then(() => {
                document.querySelector(".totalmonto").innerHTML = `${calcular(products)}`
            })

    });
}