// Objeto con categorías de edad y sus rangos
const categorias = {
  1: {
    nombre: "Niño",
    juegos: [
      {
        nombre: "Candy Land",
        imagen: "https://example.com/candy-land.jpg"
      },
      {
        nombre: "Jenga",
        imagen: "https://example.com/jenga.jpg"
      }
    ]
  },
  2: {
    nombre: "Niño Viejo",
    juegos: [
      {
        nombre: "Catan",
        imagen: "https://example.com/catan.jpg"
      },
      {
        nombre: "Ticket to Ride",
        imagen: "https://example.com/ticket-to-ride.jpg"
      }
    ]
  },
  3: {
    nombre: "Joven",
    juegos: [
      {
        nombre: "Risk",
        imagen: "https://example.com/risk.jpg"
      },
      {
        nombre: "Codenames",
        imagen: "https://example.com/codenames.jpg"
      }
    ]
  },
  4: {
    nombre: "Adolecente",
    juegos: [
      {
        nombre: "Azul",
        imagen: "https://example.com/azul.jpg"
      },
      {
        nombre: "Splendor",
        imagen: "https://example.com/splendor.jpg"
      }
    ]
  },
  5: {
    nombre: "Adulto",
    juegos: [
      {
        nombre: "Carcassonne",
        imagen: "https://example.com/carcassonne.jpg"
      },
      {
        nombre: "Pandemic",
        imagen: "https://example.com/pandemic.jpg"
      }
    ]
  },
  6: {
    nombre: "Viejito pero caliente",
    juegos: [
      {
        nombre: "Dominó",
        imagen: "https://example.com/domino.jpg"
      },
      {
        nombre: "Póker",
        imagen: "https://example.com/poker.jpg"
      }
    ]
  },
  7: {
    nombre: "Viejito ya no tan caliente",
    juegos: [
      {
        nombre: "Ajedrez",
        imagen: "https://example.com/ajedrez.jpg"
      },
      {
        nombre: "Sudoku",
        imagen: "https://example.com/sudoku.jpg"
      }
    ]
  }
};

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

    juegoCardBody.appendChild(juegoTitle);
    juegoCard.appendChild(imagen);
    juegoCard.appendChild(juegoCardBody);

    juegosContainer.appendChild(juegoCard);
  }
}

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