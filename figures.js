///Código del cuadrado



function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}



///Código del triángulo



function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
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


//HTML

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);
}

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}

function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetroT = perimetroTriangulo(value1,value2,value3);
    alert(perimetroT);
}

function CalcularAreaTriangulo(){
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const areaT = areaTriangulo(value2,value3);
    alert(areaT);
}

function CalcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const circuloD = areaCirculo(value);
    alert(circuloD);
}