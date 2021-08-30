console.group('Cuadrados');
 //const ladoCuadrado = 5;
// console.log('los lados cuadrados miden:' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado (lado) {
    return lado * lado
}
console.groupEnd()
//

console.group('Triangulos');
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log('Los lados del triangulo miden: '
// + ladoTriangulo
// + 'cm, '
// + ladoTriangulo2
// + 'cm, '
// + baseTriangulo
// +'cm'
// );

// const alturadelTriangulo = 5.5;
// console.log('La altura del triangulo es de: ' + alturadelTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return base * altura;
}


console.groupEnd();

//


console.group('Circulos');
//radio
// const radioCirculo = 4;
// console.log('El radio del circulo es: ' + radioCirculo + 'cm');

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//pi
const PI = Math.PI;
console.log('El  pi es: ' + PI);
//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function areadelCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    swal("✔️", "El Perimetro del cuadrado es: " + perimetro );
    
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    swal("✔️", "El Area del cuadrado es: " + area );
}





function perimetroTrianguloIsoseles(a, a, b){
    return a + a + b;
}
function areaIsoseles(b, h){
    return b * h;
}

function calcularPerimetroIsoseles() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroTrianguloIsoseles(value);

    swal("✔️", "El Area del triangulo isoceles es: " + perimetro );

}