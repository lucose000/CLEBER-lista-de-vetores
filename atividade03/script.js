function verificarMaiorMenor() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero);
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    alert(
        "Números digitados: " + numeros.join(", ") +
        "\nMaior número: " + maior +
        "\nMenor número: " + menor
    );
}