function juntarVetores() {
    let vetor1 = [1, 2, 3];
    let vetor2 = [4, 5, 6];

    let resultado = vetor1.concat(vetor2);

    alert(
        "Vetor 1: " + vetor1.join(", ") +
        "\nVetor 2: " + vetor2.join(", ") +
        "\nVetor final: " + resultado.join(", ")
    );
}