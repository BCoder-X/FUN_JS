/*
================================================================================
                    EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT
                                CAPÍTULO 1
================================================================================

INSTRUCCIONES:
- Lea cuidadosamente cada ejercicio
- Complete el código donde se indique con "// TU CÓDIGO AQUÍ"
- Cada ejercicio tiene un valor de puntos específico
- Total del examen: 120 puntos
- Tiempo estimado: 90 minutos

================================================================================
*/

console.log("=== INICIANDO EXAMEN DE JAVASCRIPT - CAPÍTULO 1 ===");
document.writeln("<h1>EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT</h1>");
document.writeln("<h2>Capítulo 1: Introducción a JavaScript</h2>");
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 1: VARIABLES Y TIPOS DE DATOS (15 puntos)
// ================================================================================
document.writeln(
  "<h3>EJERCICIO 1: Variables y Tipos de Datos (15 puntos)</h3>"
);

/*
INSTRUCCIONES:
1. Declare las siguientes variables con los tipos de datos apropiados:
   - nombre (string): Su nombre completo
   - edad (number): Su edad
   - altura (number): Su altura en metros (con decimales)
   - esEstudiante (boolean): true si es estudiante, false si no
   - hobbies (array): Un array con 3 de sus pasatiempos favoritos
   - direccion (object): Un objeto con propiedades: calle, ciudad, pais

2. Muestre en consola el tipo de dato de cada variable usando typeof
3. Muestre en pantalla toda la información usando document.writeln
*/

// TU CÓDIGO AQUÍ
let nombre = "Bryan David López Campos";
let edad = 23;
let altura = 1.7;
let esEstudiante = true;
let hobbies = ["leer", "meditar", "ejercicio"];
let direccion = {
  calle: "Calle 23",
  ciudad: "Palmira",
  pais: "Colombia",
};

// Tipos en consola
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof esEstudiante);
console.log(typeof hobbies);
console.log(typeof direccion);

// Mostrar en pantalla
document.writeln("Nombre: " + nombre + "<br>");
document.writeln("Edad: " + edad + "<br>");
document.writeln("Altura: " + altura + "<br>");
document.writeln("¿Estudiante?: " + esEstudiante + "<br>");
document.writeln("Hobbies: " + hobbies + "<br>");
document.writeln(
  "Dirección: " +
    direccion.calle +
    ", " +
    direccion.ciudad +
    ", " +
    direccion.pais +
    "<br><hr>"
);

// ================================================================================
// EJERCICIO 2: OPERADORES MATEMÁTICOS Y CONVERSIÓN (15 puntos)
// ================================================================================
document.writeln(
  "<h3>EJERCICIO 2: Operadores Matemáticos y Conversión (15 puntos)</h3>"
);

/*
INSTRUCCIONES:
1. Solicite al usuario dos números usando prompt()
2. Convierta los valores a números usando parseInt() y parseFloat()
3. Realice las siguientes operaciones:
   - Suma
   - Resta
   - Multiplicación
   - División
   - Módulo (residuo)
   - Potencia
4. Muestre los resultados en pantalla
5. Calcule el promedio de los dos números y redondee el resultado
*/

// TU CÓDIGO AQUÍ
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

let a = parseFloat(num1);
let b = parseFloat(num2);

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;
let promedio = Math.round((a + b) / 2);

document.writeln("Suma: " + suma + "<br>");
document.writeln("Resta: " + resta + "<br>");
document.writeln("Multiplicación: " + multiplicacion + "<br>");
document.writeln("División: " + division.toFixed(2) + "<br>");
document.writeln("Módulo: " + modulo + "<br>");
document.writeln("Potencia: " + potencia + "<br>");
document.writeln("Promedio redondeado: " + promedio + "<br><hr>");

// ================================================================================
// EJERCICIO 3: OPERADORES DE COMPARACIÓN Y LÓGICOS (15 puntos)
// ================================================================================
document.writeln(
  "<h3>EJERCICIO 3: Operadores de Comparación y Lógicos (15 puntos)</h3>"
);

/*
INSTRUCCIONES:
1. Solicite al usuario su edad y si tiene licencia de conducir (sí/no)
2. Convierta la respuesta de licencia a boolean
3. Evalúe las siguientes condiciones:
   - Si es mayor de 18 años Y tiene licencia → "Puede conducir"
   - Si es mayor de 18 años PERO no tiene licencia → "Necesita obtener licencia"
   - Si es menor de 18 años → "No puede conducir aún"
4. Use operadores lógicos (&&, ||) para las evaluaciones
5. Muestre el resultado en pantalla
*/

// TU CÓDIGO AQUÍ
let edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
let tieneLicenciaTexto = prompt("¿Tienes licencia de conducir? (si/no)");

let tieneLicencia = tieneLicenciaTexto.toLowerCase() === "si";

if (edadUsuario >= 18 && tieneLicencia) {
  document.writeln("Puede conducir<br>");
} else if (edadUsuario >= 18 && !tieneLicencia) {
  document.writeln("Necesita obtener licencia<br>");
} else {
  document.writeln("No puede conducir aún<br>");
}
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 4: FUNCIONES MATEMÁTICAS Y STRINGS (15 puntos)
// ================================================================================
document.writeln(
  "<h3>EJERCICIO 4: Funciones Matemáticas y Strings (15 puntos)</h3>"
);

/*
INSTRUCCIONES:
1. Cree una función llamada calcularAreaCirculo que reciba el radio como parámetro
2. La función debe calcular el área usando Math.PI y Math.pow()
3. Redondee el resultado a 2 decimales usando Math.round()
4. Cree una función llamada formatearNombre que reciba nombre y apellido
5. La función debe convertir el nombre a mayúsculas y el apellido a minúsculas
6. Concatene ambos usando el método concat()
7. Pruebe las funciones con valores de ejemplo
*/

// TU CÓDIGO AQUÍ
function calcularAreaCirculo(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  return Math.round(area * 100) / 100;
}

function formatearNombre(nombre, apellido) {
  return nombre.toUpperCase().concat(" ", apellido.toLowerCase());
}

// Pruebas
let area = calcularAreaCirculo(5);
let nombreFormateado = formatearNombre("Bryan", "LOPEZ");

document.writeln("Área del círculo (radio 5): " + area + "<br>");
document.writeln("Nombre formateado: " + nombreFormateado + "<br>");
document.writeln("<hr>");

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 5: ESTRUCTURAS DE CONTROL (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 5: Estructuras de Control (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario un número del 1 al 7
2. Use switch-case para mostrar el día de la semana correspondiente:
   - 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
   - 5 = Viernes, 6 = Sábado, 7 = Domingo
   - Cualquier otro valor = "Día inválido"
3. Solicite al usuario su calificación (0-100)
4. Use if-else if-else para determinar la nota:
   - 90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, 0-59 = F
5. Muestre ambos resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Switch para días de la semana:

// If-else para calificaciones:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 6: CICLOS Y ARRAYS (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 6: Ciclos y Arrays (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree un array con 5 números aleatorios entre 1 y 100
2. Use un ciclo for para mostrar todos los números del array
3. Calcule la suma de todos los números del array
4. Encuentre el número mayor y el menor del array
5. Use un ciclo while para contar cuántos números son pares
6. Muestre todos los resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Cree el array con números aleatorios:

// Muestre todos los números:

// Calcule la suma:

// Encuentre mayor y menor:

// Cuente números pares:

document.writeln("<hr>");

// ================================================================================
// BONUS: PROGRAMACIÓN ORIENTADA A OBJETOS (10 puntos extra)
// ================================================================================
document.writeln(
  "<h3>BONUS: Programación Orientada a Objetos (10 puntos extra)</h3>"
);

/*
INSTRUCCIONES:
1. Cree una clase llamada Estudiante con las siguientes propiedades:
   - nombre, edad, carrera, promedio
2. Agregue un método llamado mostrarInfo() que muestre toda la información
3. Agregue un método llamado calcularEstado() que retorne:
   - "Excelente" si promedio >= 4.5
   - "Bueno" si promedio >= 3.5
   - "Regular" si promedio >= 3.0
   - "Necesita mejorar" si promedio < 3.0
4. Cree una instancia de la clase y pruebe los métodos
*/

// TU CÓDIGO AQUÍ
// Defina la clase Estudiante:

// Cree una instancia y pruebe los métodos:

document.writeln("<hr>");
document.writeln("<h2>¡FIN DEL EXAMEN!</h2>");
document.writeln("<p>Revisa la consola para ver todos los resultados.</p>");

console.log("=== EXAMEN COMPLETADO ===");
