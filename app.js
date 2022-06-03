//funciones, contar de a y contar hasta

function contarDeA_n() {
    let contar_de_a = parseInt(prompt("de cuanto en cuanto quieres contar"));
    console.log("El número ingresado por el usuario es: " + contar_de_a);

    let contar_hasta = parseInt(prompt("Hasta que número quieres contar"));
    console.log("EL usuario desea contar hasta: " + contar_hasta);

    let contador = contar_de_a;

    if (contar_de_a >= contar_hasta || contar_de_a == 0) {

        console.log("No se pudo realizar la suma");

    } else {

        console.log("A contar!")

        while (contador < contar_hasta) {
            console.log(contador + " + " + contar_de_a);
            contador = contador + contar_de_a;
            console.log("= " + contador);
        }
        console.log("Suma realizada con exito");
        if (contador == contar_hasta) {
            ("Sumando de " + contar_de_a + " en " + contar_de_a);
            /*} else {
                ("Sumando de " + contar_de_a + " en " + contar_de_a );
            }*/
        }
    }
}

//fizzbuzz segunda parte
function fizzBuzz2() {
    let fizz = prompt("Ingresa el nombre que reemplazará a Fizz, si no deseas cambiarlo solo oprime aceptar", "Fizz");
    let buzz = prompt("Ingresa el nombre que reemplazará a Buzz, si no deseas cambiarlo solo oprime aceptar", "Buzz");
    let numeroFizz = parseInt(prompt("Ingresa el número del cual se calcularan sus múltiplos"));
    let numeroBuzz = parseInt(prompt("Ingresa el número del cual se calcularan sus múltiplos"));
    let limite = parseInt(prompt("Por último ingresa hasta que números quieres calcular los múltiplos"));
    let respFizz = " ",
        respBuzz = " ",
        resp = " ";
    for (let i = 1; i <= limite; i++) {
        if (i % numeroFizz == 0 && i % numeroBuzz == 0) {
            console.log(fizz + buzz + ": " + i);
            resp += i + ", ";
        }
        if (i % numeroFizz == 0) {
            console.log(fizz + ": " + i);
            respFizz += i + ", ";
        }
        if (i % numeroBuzz == 0) {
            console.log(buzz + ": " + i);
            respBuzz += i + ", ";
        }
    }

}