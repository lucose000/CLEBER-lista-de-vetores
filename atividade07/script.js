function calcularMedia() {
    let notas = [];
    let soma = 0;

    // Pegando as notas
    for (let i = 0; i < 5; i++) {
        let nota = Number(prompt("Digite a nota do aluno " + (i + 1) + ":"));
        notas.push(nota);
        soma += nota;
    }

    let media = soma / notas.length;

    let acimaDaMedia = 0;

    // Contando quem ficou acima da média
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            acimaDaMedia++;
        }
    }

    alert(
        "Notas: " + notas.join(", ") +
        "\nMédia da turma: " + media.toFixed(2) +
        "\nAlunos acima da média: " + acimaDaMedia
    );
}