function filtrarPares() {
    let numeros = [];
    let pares = [];

    for (let i = 0; i < 10; i++) {
        let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    alert(
        "Números digitados: " + numeros.join(", ") +
        "\nNúmeros pares: " + pares.join(", ")
    );
}