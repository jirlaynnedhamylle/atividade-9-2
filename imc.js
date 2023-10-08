function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = peso / (altura ** 2);
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `<p>O IMC de ${nome} é: ${imc.toFixed(2)}</p>`;
    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}
