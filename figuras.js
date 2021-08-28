console.group('Cuadrados');
const ladoCuadrado = 5;
console.log('los lados cuadrados miden:' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro cuadrado es de: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El Area del cuadrado es de: ' + areaCuadrado + 'cm');
console.groupEnd();

//

console.group('Triangulos');
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log('Los lados del triangulo miden: '
+ ladoTriangulo
+ 'cm, '
+ ladoTriangulo2
+ 'cm, '
+ baseTriangulo
+'cm'
);

const alturadelTriangulo = 5.5;
console.log('La altura del triangulo es de: ' + alturadelTriangulo);

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo + alturadelTriangulo;
console.log('El perimetro del triangulo es de: ' + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturadelTriangulo) / 2;
console.log('El area del triangulo es de: ' + areaTriangulo + 'cm^2');


console.groupEnd();

//


console.group('Circulos');
//radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + 'cm');

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo + 'cm');

//pi
const PI = Math.PI;
console.log('El  pi es: ' + PI);
//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetroCirculo es: ' + perimetroCirculo);
//Area
const areadelCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El areadelCirculo es: ' + areadelCirculo);
console.groupEnd();
