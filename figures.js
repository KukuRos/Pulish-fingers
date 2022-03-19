//Código del cuadrado

console.group("Cuadrado")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd()

//Código del triángulo

console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm. Y " + ladoTriangulo2 + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd()

//Código del rectángulo


//Código del círculo

console.group("Círculo")

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;


const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroTriangulo + "cm");

const areaCirculo = (radioCirculo * radioCirculo)*PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd()