///Código del cuadrado



function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}



///Código del triángulo



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}



//Código del círculo



const PI = Math.PI;

function perimetroCirculo(diametro) {
    return diametro*PI;
}

function areaCirculo(radio) {
    return (radio * radio)*PI;
}

