//Enviar datos al apretar "Confirmar Datos"

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = formulario.elements.nombre.value;
    const direccion = formulario.elements.direccion.value;
    const telefono = formulario.elements.telefono.value;

    setTimeout(function () {
        console.log(`Nombre:\n${nombre}\nDirección:\n${direccion}\nTeléfono:\n${telefono}`);
        console.log("Los datos han sido enviados correctamente")
        formulario.reset();
    }, 1000);
});

// Defino mis productos

const camisetas = {
    nombre: "camisetas",
    precio: 12000,
    marca: "Adidas",
    stock: true
}

const shorts = {
    nombre: "shorts",
    precio: 3500,
    marca: "Adidas",
    stock: true
}

const medias = {
    nombre: "medias",
    precio: 2500,
    marca: "Nike",
    stock: true
}

const botines = {
    nombre: "botines",
    precio: 30000,
    marca: "Puma",
    stock: true
}

const guantes = {
    nombre: "guantes",
    precio: 6000,
    marca: "Under Armour",
    stock: true
};

// Inicio variables

let precioTotal = 0;
const carrito = []

for (const producto of carrito) {
    precioTotal += producto.precio;
}

console.log(carrito)
console.log(precioTotal)

// Capturar el boton de comprar

const buttons = document.querySelectorAll('[id="botonCompra"]');

// Aquí ejecuto un forEach para recorrer cada elemento de la NodeList llamada -buttons-

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Click sobre el botón de compra");
    });
});
