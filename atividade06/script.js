function mostrarInverso() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero);
    }

    let inverso = [];

    for (let i = numeros.length - 1; i >= 0; i--) {
        inverso.push(numeros[i]);
    }

    alert(
        "Ordem normal: " + numeros.join(", ") +
        "\nOrdem inversa: " + inverso.join(", ")
    );
}