function calcular() {
    var km = document.getElementById('trip').value;
    var litros = document.getElementById('ltCombustivel').value;
    var resultado = document.getElementById('resultado');

    if (km > 0 && litros > 0) {
        var media = km / litros;
        resultado.textContent = 'A média de consumo é: ' + media.toFixed(2) + ' km/l';
    } else {
        resultado.textContent = 'Valores incorretos';
    }
}