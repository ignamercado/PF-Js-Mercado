//Enviar datos al apretar "Confirmar Datos"

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // De esta manera accedo a los valores de los campos del formulario
    const nombre = formulario.elements.nombre.value;
    const direccion = formulario.elements.direccion.value;
    const telefono = formulario.elements.telefono.value;

    const datosComprador = {
        nombre,
        direccion,
        telefono,
    };

    // Envío los datos del comprador al sS, así una vez que cierre el navegador, se elimine la información
    sessionStorage.setItem('datosComprador', JSON.stringify(datosComprador));

    setTimeout(function () {
        formulario.reset();
    }, 1000);
});

// Inicio variables
const carrito = [];

/*utilizo desestructuración para obtener directamente las propiedades nombre y precio del producto*/
function agregarAlCarrito({ nombre, precio }) {
    carrito.push({ nombre, precio });
    guardarCarritoEnLocalStorage();
    mostrarCarrito();
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargo el JSON de productos. Obtengo datos del json mediante fetch
async function obtenerDatos() {
    try {
        const respuesta = await fetch("productos.json");
        const productos = await respuesta.json();
        manejarProductos(productos);
    } catch (error) {
    }
}

// Función para manejar los productos después de la carga
function manejarProductos(productos) {
    // Capturo los botones de compra
    const buttons = document.querySelectorAll('.botonCompra');

    // Asigno un evento a cada botón
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productoSeleccionado = productos[index];
            agregarAlCarrito(productoSeleccionado);
        });
    });
}

// Llamo a la función para obtener datos
obtenerDatos();

function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    let carritoHTML = "";
    let precioTotal = 0;

    carrito.forEach((producto, index) => {
        carritoHTML += `
            <li>
                ${producto.nombre} - Precio: $${producto.precio}
                <button class="eliminarProducto" data-index="${index}">Eliminar</button>
            </li>
        `;
        precioTotal += producto.precio;
    });

    listaCarrito.innerHTML = carritoHTML;
    totalCarrito.textContent = precioTotal;

    // Escucho eventos de click en los botones de eliminar
    const botonesEliminar = document.querySelectorAll('.eliminarProducto');
    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', function () {
            const index = parseInt(boton.getAttribute('data-index'));
            eliminarProductoDelCarrito(index);
        });
    });
}

function eliminarProductoDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

/*Capturo el boton para confirmar la compra*/ 

const btnCompra = document.querySelector("#btnConfCompra");

btnCompra.addEventListener("click", () => {
    function confirmarCompra() {
        resetearCarrito();
        Swal.fire({
            title: "Perfecto!",
            text: "Haz efectuado la compra con éxito",
            icon: "success"
          });
    }
    
    function resetearCarrito() {
        carrito.length = 0;
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }

    // Llamada a la función confirmarCompra
    confirmarCompra();
});

function mostrarDatosFinales() {
    const datosComprador = JSON.parse(sessionStorage.getItem('datosComprador'));
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (datosComprador && carrito) {

        // Limpio el localStorage después de mostrar los datos 
        sessionStorage.removeItem('datosComprador');
        localStorage.removeItem('carrito');
    }
} 

mostrarDatosFinales();

