// const precioNormal = 185000;
// const descuento = 20 ;

//const precioDescontado = precioNormal - precioConDescuento;
// console.log({
//     precioNormal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
//     precioDescontado
// });

function calcularPrecioDescto (precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}

function clickDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioDescto (priceValue, priceDiscount);

    const result  = document.getElementById('resultP');
    result.innerHTML = 'El precio a pagar son: $' + precioConDescuento;
}
