// Ejercicio 1
//1 Creación de un arreglo
let frutas = ['Frutilla', 'Manzana', 'Mandarina'];

//2 Agrega una fruta al final del arreglo
frutas.push('Ananá');

//3 Agrega una fruta al principio del arreglo
frutas.unshift('Sandía');

//4 Elimina la última fruta
frutas.pop();

//5 Elimina la primera fruta
frutas.shift();

//6 Muestra el contenido del arreglo con console.log
console.log(frutas);

// Ejercicio 2
//1 Crea un arreglo de nombres
let nombreAlumnos = ['Sasha', 'Martina', 'María'];

//2 Muestra cuántos nombres hay en el arreglo usando .length
console.log(nombreAlumnos.length);

//3 Usa push para agregar dos nombres 
frutas.push('Fabiana', 'Sandra'); 

//4 Vuelve a mostrar cuántos nombres hay
console.log(nombreAlumnos.length);

// Ejercicio 3
//1 Crea un arreglo de números
let numeros = ['13', '22', '29'];

//2 Usa un ciclo for para mostrar cada número por consola
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Ejercicio 4
//1 Crea un arreglo de números
let numerosPares = ['2', '4', '6', '8'];

//2 Usa un ciclo for para sumar todos los elementos
let suma = 0;
for (let i = 0; i < numerosPares.length; i++) {
    suma += parseInt(numerosPares[i]); // revisar en casa
}
//3 Muestra el resultado con console.log
console.log("La suma es:", suma);

//Ejercicio 5
//1 Pide al usuario que escriba cinco palabras (una por una con prompt)
let palabras = [];
for (let i = 0; i < 5; i++) {
    let palabra = prompt(`Escribe la palabra #${i + 1}:`);
    
    //2 Guarda cada palabra en un arreglo usando push
    palabras.push(palabra);
}

//3 Muestra el contenido del arreglo
console.log("Las palabras ingresadas son:", palabras);
