function salarioTotal () {
    let salario, acumulador, contadorSalarioMenor=0, contadorSalarioMayor=0;
    for (acumulador=0;acumulador<5;acumulador++) {
        salario=parseInt(prompt("Introduzca un salario:"))
        if (salario>=100 && salario<=300) {
            contadorSalarioMenor++
        } else {
            if (salario>300) {
                contadorSalarioMayor++
            } else {
                error=("El salario introducido es incorrecto")
            }
        }
    }
    return "Los salarios entre 100 y 300 son: "+contadorSalarioMenor+"<br> Los salarios mayores de 300 son: "+contadorSalarioMayor            
}
resultado=salarioTotal();
document.write(resultado);