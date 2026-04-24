function removerRepetidos() {
    let numeros = [1, 2, 2, 3, 4, 4, 4, 5];
    let unico = [];

    for (let i = 0; i < numeros.length; i++) {
        if (!unico.includes(numeros[i])) {
            unico.push(numeros[i]);
        }
    }

    alert(
        "Vetor original: " + numeros.join(", ") +
        "\nSem repetição: " + unico.join(", ")
    );
}