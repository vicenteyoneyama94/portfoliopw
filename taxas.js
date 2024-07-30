function calcular() {
    var valor = document.getElementById('valorCompra').value;
    var porcentagem = document.getElementById('taxaMaquininha').value;
    var resultado = document.getElementById('resultado');

    if (valor > 0 && porcentagem >= 0) {
        var valorFinal = valor * (1 + porcentagem / 100);
        resultado.textContent = 'O valor final com adição de ' + porcentagem + '% é: R$ ' + valorFinal.toFixed(2);
    } else {
        resultado.textContent = 'Valores incorretos!';
    }
}