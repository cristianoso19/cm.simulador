function calcularCumplimiento() {
    // Obtener los valores de los inputs
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const venta = parseFloat(document.getElementById('venta').value);

    // Verificar que los valores sean números y mayores que cero
    if (isNaN(presupuesto) || isNaN(venta) || presupuesto <= 0 || venta <= 0) {
        alert('Por favor, ingrese valores válidos y mayores que cero.');
        return;
    }

    // Calcular el porcentaje de cumplimiento
    const porcentajeCumplimiento = (venta * 100) / presupuesto;

    // Determinar el valor a pagar
    let valorAPagar = 0;
    let porcentajeComision = 0;
    if (porcentajeCumplimiento >= 80) {
        porcentajeComision = 0.01*100;
        valorAPagar = venta * 0.01;
    } else if (porcentajeCumplimiento >= 50) {
        porcentajeComision = 0.005*100;
        valorAPagar = venta * 0.005;
    }

    // Mostrar el resultado
    const resultado = `
        <p class="text-lg">Cumplimiento: <span class="font-bold"> ${porcentajeCumplimiento.toFixed(2)}%</span></p>
        <p class="text-lg">Porcentaje comision: <span class="font-bold"> ${porcentajeComision.toFixed(2)}%</span></p>
        <p class="text-lg">Valor comision: <span class="font-bold"> ${valorAPagar.toFixed(2)}USD</span></p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
}
function calcularCobro() {
    // Obtener los valores de los inputs
    const cobro50 = parseFloat(document.getElementById('cobro50').value);
    const cobro80 = parseFloat(document.getElementById('cobro80').value);

    // Verificar que los valores sean números y mayores que cero
    if (isNaN(cobro50) || isNaN(cobro80) || cobro50 <= 0 || cobro80 <= 0) {
        alert('Por favor, ingrese valores válidos y mayores que cero.');
        return;
    }

    // Calcular el 1% del cobro50 y el 0.5% del cobro80
    const porcentajeCobro50 = cobro50 * 0.01;
    const porcentajeCobro80 = cobro80 * 0.005;

    // Mostrar el resultado
    const resultado = `
        <p class="text-lg">Comision a 50 dias (1%): <span class="font-bold"> $${porcentajeCobro50.toFixed(2)}</span></p>
        <p class="text-lg">Comision a 80 dias (0.5%): <span class="font-bold"> $${porcentajeCobro80.toFixed(2)}</span></p>
    `;
    document.getElementById('resultadoCobro').innerHTML = resultado;
}

function validateCurrency(num){
    let regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(num)){
        return true;
    }
    return false;
}