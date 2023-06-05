// Objeto con categorías de edad y sus rangos
const categorias = {
  1: "Niño",
  2: "Niño viejo",
  3: "Adolescente",
  4: "Joven",
  5: "Adulto",
  6: "Viejito pero caliente",
  7: "Viejito ya no tan caliente",
};

// Función para obtener los años y meses de diferencia entre dos fechas
function obtenerEdad(fechaNacimiento, fechaActual) {
  let años = fechaActual.getUTCFullYear() - fechaNacimiento.getUTCFullYear();
  let meses = fechaActual.getUTCMonth() - fechaNacimiento.getUTCMonth();

  // Calcular la edad en meses
  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses };
}

// Función para calcular la edad en días
function calcularEdad() {
  let nombre = prompt("Ingresa tu nombre");
  let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (formato: AAAA-MM-DD)");

  let fechaNacimientoObj = new Date(fechaNacimiento);
  let fechaActual = new Date();

  let { años, meses } = obtenerEdad(fechaNacimientoObj, fechaActual);

  let categoria;
  if (años >= 1 && años <= 6) {
    categoria = categorias[1];
  } else if (años >= 7 && años <= 12) {
    categoria = categorias[2];
  } else if (años >= 13 && años <= 18) {
    categoria = categorias[3];
  } else if (años >= 19 && años <= 26) {
    categoria = categorias[4];
  } else if (años >= 27 && años <= 55) {
    categoria = categorias[5];
  } else if (años >= 56 && años <= 85) {
    categoria = categorias[6];
  } else if (años >= 86 && años <= 124) {
    categoria = categorias[7];
  } else {
    categoria = "Edad no válida";
  }

  // Mostrar los resultados en un alert y en la consola
  alert("Hola: " + nombre + "\nTu edad en años es: " + años + "\nTu edad en meses es: " + meses + "\nTu categoría es: " + categoria);
  console.log("Nombre:", nombre);
  console.log("Edad en años:", años);
  console.log("Edad en meses:", meses);
  console.log("Categoría:", categoria);
}
calcularEdad();