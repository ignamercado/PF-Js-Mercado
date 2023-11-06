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
        console.log(`Nombre:\n${nombre}\nDirección:\n${direccion}\nTeléfono:\n${telefono}`);
        console.log("Los datos han sido enviados correctamente")
        formulario.reset();
    }, 1000);
});



// Inicio variables

const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    guardarCarritoEnLocalStorage();
    mostrarCarrito();
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
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

    // Escuchar eventos de clic en los botones de eliminar
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


function mostrarDatosFinales() {
    const datosComprador = JSON.parse(sessionStorage.getItem('datosComprador'));
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (datosComprador && carrito) {
        console.log('Datos del comprador:', datosComprador);
        console.log('Productos comprados:', carrito);

        // Limpia el localStorage después de mostrar los datos 
        sessionStorage.removeItem('datosComprador');
        localStorage.removeItem('carrito');
    }
}

// Llama a esta función cuando sea necesario mostrar los datos finales.
mostrarDatosFinales();

