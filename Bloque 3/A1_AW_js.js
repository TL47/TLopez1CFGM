function valores(vector) {
    for (let acumulador = 0; acumulador < vector.length; acumulador++) {
        let valor = prompt('Ingrese ocho valores: ');
        vector[acumulador] = parseInt(valor);
    }
}
function sumar(vector) {
    let suma = 0;
    for (let acumulador = 0; acumulador < vector.length; acumulador++) {
        suma = suma + vector[acumulador];
    }
    document.write('El valor acumulado de todos los elementos del vector: ' + suma + '<br>');
}
function sumarMayor36(vector) {
    let suma = 0;
    for (let acumulador = 0; acumulador < vector.length; acumulador++) {
        if (vector[acumulador] > 36) {
            suma = suma + vector[acumulador];
        }
    }
    document.write('El valor acumulado de los elementos del vector que sean mayores a 36: ' + suma + '<br>');
}
function cantidadMayor50(vector) {
    let cantidad = 0;
    for (let acumulador = 0; acumulador < vector.length; acumulador++) {
        if (vector[acumulador] > 50) {
            cantidad = cantidad + 1;
        }
    }
    document.write('Cantidad de valores mayores a 50: ' + cantidad + '<br>');
}
let vector = new Array(8);
valores(vector);
sumar(vector);
sumarMayor36(vector);
cantidadMayor50(vector);