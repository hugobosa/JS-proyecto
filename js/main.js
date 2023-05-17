function calcularEdad() {
    let nombre = prompt("Ingresa tu nombre");
    let edad = prompt("Ingresa tu edad");
    let categoria;
    let dias = edad * 365;

    if (edad >= 1 && edad <= 6) {
        categoria = "Niño";
    } else if (edad >= 7 && edad <= 12) {
        categoria = "Joven";
    } else if (edad >= 13 && edad <= 18) {
        categoria = "Adolecente";
    } else if (edad >= 19 && edad <= 26) {
        categoria = "Joven";
    } else if (edad >= 27 && edad <= 55) {
        categoria = "Adulto";
    } else if (edad >= 56 && edad <= 85) {
        categoria = "Viejito pero caliente";
    } else if (edad >= 86 && edad <= 124) {
        categoria = "Viejito ya no tan";
    } else {
        categoria = "Edad no válida";
    }

    while (edad > 125){
        alert("En la actualidad no hay personas tan longevas");
        edad = prompt("Ingrese una edad menor");
    }
    
    alert("Hola: " + nombre + "\nTu edad en días es: " + dias + "\nTu categoría es: " + categoria);

}
calcularEdad();