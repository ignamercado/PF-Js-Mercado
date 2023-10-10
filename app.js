// PRIMERA PRE-ENTREGA JAVASCRIPT / SIMULADOR INTERACTIVO 

alert("¡Bienvenidos a Vestimenta Deportiva!");
console.log("¡VD te da la bienvenida a nuestra tienda online!");

while (true) {
    nombre = prompt("Ingrese su nombre completo");
    
    // Verifica si la entrada es un string (no está vacía y no es un número)
    if (nombre !== null && isNaN(nombre)) {
        break; // Salir del bucle si la entrada es válida
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

alert("¡Bienvenido/a, " + nombre + "!");
console.log("Un placer tener tu visita")

let usuario;
let registrado = false; // Variable para rastrear si el usuario se ha registrado

while (true) {
    usuario = prompt("Hola! ¿Eres un usuario registrado? (si/no)");

    if (usuario === "si" || usuario === "no") {
        break; // Salir del bucle si la respuesta es válida
    } else {
        alert("Por favor, responde -si- o -no-");
        console.log("Inténtalo nuevamente");
    }
}

let compra; 

if (usuario.toLowerCase() === "si") {
    console.log("Perfecto. Te encuentras registrado");
    registrado = true;  // Configura la variable 'registrado' como verdadera si el usuario está registrado
} else if (usuario.toLowerCase() === "no") {
    console.log("¡Regístrate en menos de 1 minuto!");

    let nuevoUsuario = prompt("Elige tu nombre de usuario. Debe tener al menos 4 caracteres")

    while (nuevoUsuario.length < 4) {
        nuevoUsuario = prompt("Elige tu nombre de usuario. Debe tener al menos 4 caracteres");
        console.log("Inténtalo nuevamente")
    }

    alert("Tu usuario fue registrado correctamente como: " + nuevoUsuario);
    console.log("Registro exitoso, " + nuevoUsuario);

    // Si el usuario se registró, configuramos la variable 'registrado' como verdadera
    registrado = true;
} 

// Verifica si el usuario está registrado o si ya era un usuario registrado
if (registrado) {
    compra = prompt("¿Deseas realizar una compra en nuestra tienda VD? (si/no)");

    if (compra.toLowerCase() === "si") {
        alert("¡Veamos qué producto/s te interesan!");
        console.log("¿Difícil elegir entre tantos productos, verdad?");

        let producto;

        producto = prompt(`¿Qué producto quieres obtener?
        1: Camisetas
        2: Shorts
        3: Medias
        4: Botines
        5: Guantes
        `);

        // Preguntar al usuario qué producto le interesa

        switch (producto){
            case "1":
                productoElegido = "camisetas";
                break;
            case "2":
                productoElegido = "shorts";
                break;
            case "3":
                productoElegido = "medias";
                break;
            case "4":
                productoElegido = "botines";
                break;
            case "5":
                productoElegido = "guantes";
                break;
            default:
                productoElegido = "este producto";
        }

        let modalidad;
        let domicilio;
        
        if (compra.toLowerCase() === "si") {
            if (productoElegido !== "este producto") {
                alert(`Quieres comprar ${productoElegido}`);
                console.log("Muy buena elección!");
                modalidad = prompt("¿Deseas retirar en el local o que enviemos a domicilio? (R ó E)")
                console.log("¿Retiro en el local o envío a domicilio?")

//----------------MODALIDAD: RETIRO EN EL LOCAL

                if (modalidad.toLowerCase() == "r"){
                    alert("Has seleccionado retiro en el local")
                    console.log("Te esperamos aquí!")

                // Preguntar al usuario en qué sucursal retirará el pedido


                let sucursal;

                sucursal = prompt(`¿En cual sucursal harás el retiro?
                1: Centro
                2: Norte
                3: Sur
                4: Este
                5: Oeste
                `);

                switch (sucursal) {
                    case "1":
                sucursalElegida = "centro";
                break;
            case "2":
                sucursalElegida = "norte";
                break;
            case "3":
                sucursalElegida = "sur";
                break;
            case "4":
                sucursalElegida = "este";
                break;
            case "5":
                sucursalElegida = "oeste";
                break;
            default:
                sucursalElegida = "sucursal inexistente";
        }

        if (sucursalElegida !== "sucursal inexistente") {
            alert(`Harás el retiro en la sucursal ${sucursalElegida}`);
            console.log(`Entendido! Te esperamos en la sucursal ${sucursalElegida}`);

//----------------MODALIDAD: ENVÍO A DOMICILIO

                } else if (modalidad.toLowerCase() == "e"){
                    alert("Has seleccionado envío a domicilio")
                    console.log("Quédate en tu casa y nosotros te lo enviamos!")

                    domicilio = prompt("Ingresa tu domicilio");
                    console.log("Gracias por la ayuda!")
                    alert("Listo! Dentro de 3 días te llegará tu compra!")
                } else{
                    alert("Respuesta inválida")
                    console.log("No has seleccionado una respuesta válida")
                }
            } else {
                alert(`Por el momento no tenemos stock de ${productoElegido}`);
                console.log("¡Intentaremos conseguirlo pronto!");
            }
        } else if (compra.toLowerCase() === "no") {
            alert("Muy bien! Puedes echar un vistazo a la tienda online y volver en otro momento!");
            console.log("El usuario no desea realizar una compra");
        } else {
            alert("Respuesta inválida. Por favor, ingresa -si- o -no-");
            console.log("Respuesta inválida");
        }
    }

  }
}
