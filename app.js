//Enviar datos al apretar "Confirmar Datos"

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();


// De esta manera accedo a los valores de los campos del formulario
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

const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`${producto.nombre} agregado al carrito.`);
    mostrarCarrito(); 
  }

// Capturar el boton de comprar

const buttons = document.querySelectorAll('[id="botonCompra"]');

// Aquí ejecuto un forEach para recorrer cada elemento de la NodeList llamada -buttons-

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      agregarAlCarrito([camisetas, shorts, medias, botines, guantes][index]);
    });
});
  

function mostrarCarrito() {
    console.log("Carrito de compras:");
    carrito.forEach((producto) => {
      console.log(`${producto.nombre} - Precio: ${producto.precio}`);
    });
  
    const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
    console.log(`Precio total: ${precioTotal}`);
  }

// Almacenamos los productos en JSON

const camisetasStr = JSON.stringify(camisetas)
localStorage.setItem("camisetas", camisetasStr)

const shortsStr = JSON.stringify(shorts)
localStorage.setItem("shorts", shortsStr)

const mediasStr = JSON.stringify(medias)
localStorage.setItem("medias", mediasStr)

const botinesStr = JSON.stringify(botines)
localStorage.setItem("botines", botinesStr)

const guantesStr = JSON.stringify(guantes)
localStorage.setItem("guantes", guantesStr)