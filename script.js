function calcular(operacion) {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = 'Por favor, ingresa números válidos';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = valor1 + valor2;
                break;
            case 'restar':
                resultado = valor1 - valor2;
                break;
            case 'multiplicar':
                resultado = valor1 * valor2;
                break;
            case 'dividir':
                resultado = valor2 !== 0 ? valor1 / valor2 : 'No se puede dividir por cero';
                break;
        }
    }

    document.getElementById('resultado').value = resultado;
}