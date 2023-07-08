// Objeto con categorías de edad y sus rangos
const categorias = {
  1: {
    nombre: "Niño",
    juegos: [
      {
        nombre: "Candy Land",
        imagen: "https://i5.walmartimages.com/asr/c58ee359-acce-4ece-a112-8d00db16c44b.2d2793d426376546842aacf0b94d9746.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        nombre: "Jenga",
        imagen: "https://i5.walmartimages.com/asr/a7dac401-9c81-4734-80a9-7ffd8ff67fee.f5c756831bfd60718e11093d10a9a2dc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      }
    ]
  },
  2: {
    nombre: "Niño Viejo",
    juegos: [
      {
        nombre: "Catan",
        imagen: "https://i5.walmartimages.com/asr/f6722f9b-2da7-48c9-b125-b4953b8fa880.8caf3901b0a410022583e9d9405a9ca7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        nombre: "Ticket to Ride",
        imagen: "https://i5.walmartimages.com/asr/be54e70d-19d9-469d-afe2-d6219b0fce2c.ef29a5b481c842fc2a5b6dfbc7938ffa.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      }
    ]
  },
  3: {
    nombre: "Joven",
    juegos: [
      {
        nombre: "Risk",
        imagen: "https://i5.walmartimages.com/asr/9aa42f26-cf3f-4026-a2ca-230f03f59352.d76cf66d09dc01e8a98df5c1c8800343.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        nombre: "Codenames",
        imagen: "https://i5.walmartimages.com/asr/b1cae0f2-d690-4551-a239-88e5ea76a6df_1.7059283d6aef15dfb4473aa78b08b34b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      }
    ]
  },
  4: {
    nombre: "Adolecente",
    juegos: [
      {
        nombre: "Azul",
        imagen: "https://i5.walmartimages.com/asr/658e6fb3-deff-426d-8616-a91adab604b5.679fba2701b39747038bb8c918637093.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      },
      {
        nombre: "Splendor",
        imagen: "https://i5.walmartimages.com/asr/78b18c20-9579-44f0-8754-fed8a63066dc.fb62fe760c6a75d0cb311102180bacae.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      }
    ]
  },
  5: {
    nombre: "Adulto",
    juegos: [
      {
        nombre: "Carcassonne",
        imagen: "https://i5.walmartimages.com/asr/9e79139e-19e6-4bb8-9be8-df46bd215045.90cccd3e09715113e35b91f391ea695b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        nombre: "Clank",
        imagen: "https://i5.walmartimages.com/asr/5d753d72-2d4f-47ee-8b2d-e360fad40d87.f610c53eb46dc3df8997c5c06680f241.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
      }
    ]
  },
  6: {
    nombre: "Viejito pero caliente",
    juegos: [
      {
        nombre: "Wingspan",
        imagen: "https://i5.walmartimages.com/asr/7a100441-7244-45c5-9077-48f79d39afc0_1.75cd0f1a6159f9783583873883c2fb96.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      },
      {
        nombre: "Dune Imperium",
        imagen: "https://i5.walmartimages.com/asr/f253393a-d345-43b4-8291-d392e02d82b4.27dfd7d671a6cdb897236a950e709e8b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
      }
    ]
  },
  7: {
    nombre: "Viejito ya no tan caliente",
    juegos: [
      {
        nombre: "Ark Nova",
        imagen: "https://i5.walmartimages.com/asr/4f6593dd-974c-4a93-b3a6-4f94a8a4ee5c.2073e305a998eba3456b1207506c17db.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        nombre: "Bingo",
        imagen: "https://i5.walmartimages.com/asr/9f5c43e1-6456-4a01-a2e5-1ca915c7e35d.cddf26cbf36e64e1daadb9d23e08ac1a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      }
    ]
  }
};






// Función para cargar el archivo JSON y asignar los juegos a las categorías correspondientes
function cargarJuegos() {
  fetch("js/juegos.json")
    .then((response) => response.json())
    .then((data) => {
      const juegos = data;
      categorias[1].juegos = juegos.filter((juego) => juego.categoria === "Niño");
      categorias[2].juegos = juegos.filter((juego) => juego.categoria === "Niño Viejo");
      categorias[3].juegos = juegos.filter((juego) => juego.categoria === "Joven");
      categorias[4].juegos = juegos.filter((juego) => juego.categoria === "Adolecente");
      categorias[5].juegos = juegos.filter((juego) => juego.categoria === "Adulto");
      categorias[6].juegos = juegos.filter((juego) => juego.categoria === "Viejito pero caliente");
      categorias[7].juegos = juegos.filter((juego) => juego.categoria === "Viejito ya no tan caliente");

      // Después de cargar los juegos, puedes llamar a la función mostrarSugerencias() aquí si deseas mostrar las sugerencias automáticamente al cargar la página.
    })
    .catch((error) => {
      console.log("Error al cargar el archivo JSON:", error);
    });
}

// Llamamos a la función cargarJuegos para cargar los datos al inicio
cargarJuegos();




// Función para obtener los años y meses de diferencia entre dos fechas
function obtenerEdad(fechaNacimiento, fechaActual) {
  let años = fechaActual.getUTCFullYear() - fechaNacimiento.getUTCFullYear();
  let meses = fechaActual.getUTCMonth() - fechaNacimiento.getUTCMonth();

// Si la diferencia en meses es negativa, se resta 1 año y se ajusta el valor de los meses
  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses };
}



// Función para mostrar las sugerencias de juegos de mesa en el DOM
function mostrarSugerencias(categoria) {
  let juegosContainer = document.getElementById("juegos");
  juegosContainer.innerHTML = "";

  let juegos = categorias[categoria].juegos;

  for (let i = 0; i < juegos.length; i++) {
    let juego = juegos[i];

    let juegoCard = document.createElement("div");
    juegoCard.classList.add("card", "mb-3", "mx-auto");
    juegoCard.style = "max-width: 18rem;";

    let imagen = document.createElement("img");
    imagen.src = juego.imagen;
    imagen.classList.add("card-img-top");

    let juegoCardBody = document.createElement("div");
    juegoCardBody.classList.add("card-body");

    let juegoTitle = document.createElement("h5");
    juegoTitle.classList.add("card-title");
    juegoTitle.textContent = juego.nombre;

    let juegoCategoria = document.createElement("p");
    juegoCategoria.textContent = "Categoría: " + categorias[categoria].nombre;


    let juegoJugadores = document.createElement("p");
    juegoJugadores.textContent = "Jugadores: " + juego.jugadores;

    let juegoEdad = document.createElement("p");
    juegoEdad.textContent = "Edad mínima: " + juego.edad_minima;

    let juegoTiempo = document.createElement("p");
    juegoTiempo.textContent = "Tiempo de partida: " + juego.tiempo_partida;

    let juegoDescripcion = document.createElement("p");
    juegoDescripcion.textContent = juego.descripcion;

    juegoCardBody.appendChild(juegoTitle);
    juegoCardBody.appendChild(juegoCategoria);
    juegoCardBody.appendChild(juegoJugadores);
    juegoCardBody.appendChild(juegoEdad);
    juegoCardBody.appendChild(juegoTiempo);
    juegoCardBody.appendChild(juegoDescripcion);

    // Crear el botón "Agregar al carrito"
    let agregarAlCarritoButton = document.createElement("button");
    agregarAlCarritoButton.textContent = "Agregar al carrito";
    agregarAlCarritoButton.classList.add("btn", "btn-primary");

    // Agregar el evento de clic al botón
    agregarAlCarritoButton.addEventListener("click", function() {
      agregarAlCarrito(juego); // Llamar a la función agregarAlCarrito con el juego actual
    });

    // Agregar los elementos al juegoCard
    juegoCard.appendChild(imagen);
    juegoCard.appendChild(juegoCardBody);
    juegoCardBody.appendChild(agregarAlCarritoButton);

    // Agregar el juegoCard al contenedor de juegos
    juegosContainer.appendChild(juegoCard);
  }
}





// Función para agregar un juego al carrito
function agregarAlCarrito(juego) {
  // Obtener el carrito del localStorage (si existe)
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agregar el juego al carrito
  carrito.push(juego);

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar mensaje de éxito al usuario
  alert("El juego ha sido agregado al carrito.");
}



document.addEventListener("DOMContentLoaded", function() {
  // Función para mostrar carrito
  function mostrarCarrito() {

    // Obtener los juegos del carrito desde el almacenamiento local
    const juegosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Obtener el contenedor del carrito en la página carrito.html
    const carritoContainer = document.getElementById('carrito');

    // Limpiar el contenido anterior del carrito
    carritoContainer.innerHTML = '';

    // Verificar si hay juegos en el carrito
    if (juegosCarrito.length === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'No hay juegos en el carrito.';
      carritoContainer.appendChild(emptyMessage);
    } else {
      // Crear elementos HTML para mostrar cada juego en el carrito
      juegosCarrito.forEach((juego) => {
        const juegoCard = document.createElement('div');
        juegoCard.classList.add('card');

        const juegoTitle = document.createElement('h3');
        juegoTitle.textContent = juego.nombre;

        const juegoImagen = document.createElement('img');
        juegoImagen.src = juego.imagen;

        juegoCard.appendChild(juegoTitle);
        juegoCard.appendChild(juegoImagen);

        carritoContainer.appendChild(juegoCard);
      });
    }
  }

});




// Función para calcular la edad en días y mostrar los resultados en el DOM
function calcularEdad() {
  let nombre = document.getElementById("nombre").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;

  // Guardar nombre y fecha de nacimiento en el localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("fechaNacimiento", fechaNacimiento);

  // Convertir la fecha de nacimiento en objeto Date
  let fechaNacimientoObj = new Date(fechaNacimiento);
  let fechaActual = new Date();

  // Calcular la edad en años y meses usando la función personalizada
  let { años, meses } = obtenerEdad(fechaNacimientoObj, fechaActual);

  // Obtener la categoría según los años de edad
  let categoria = Math.floor(años / 10) + 1;

  // Mostrar los resultados en el DOM
  let resultadoContainer = document.getElementById("resultado");
  resultadoContainer.innerHTML = `
    <p>Hola ${nombre}</p>
    <p>Tu edad en años es: ${años}</p>
    <p>Tu edad en meses es: ${meses}</p>
    <p>Tu categoría es: ${categorias[categoria].nombre}</p>
  `;

// Obtener nombre y fecha de nacimiento del localStorage
  let nombreGuardado = localStorage.getItem("nombre");
  let fechaNacimientoGuardada = localStorage.getItem("fechaNacimiento");

// Hacer algo con los datos recuperados del localStorage
  console.log("Nombre guardado:", nombreGuardado);
  console.log("Fecha de nacimiento guardada:", fechaNacimientoGuardada);


// Mostrar sugerencias de juegos de mesa
  mostrarSugerencias(categoria);
}