
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

// Función para vaciar el carrito
function vaciarCarrito() {
  // Eliminar todos los elementos del carrito
  let carrito = [];

  // Actualizar el localStorage con el carrito vacío
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Volver a mostrar el carrito en el DOM
  mostrarCarrito();
}

// Llamar a la función mostrarCarrito al cargar el DOM
document.addEventListener('DOMContentLoaded', mostrarCarrito);