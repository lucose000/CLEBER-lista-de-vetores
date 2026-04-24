function gerarMultiplos() {
    let base = Number(prompt("Digite o número base:"));
    let quantidade = Number(prompt("Quantos múltiplos deseja gerar?"));

    let multiplos = [];

    for (let i = 1; i <= quantidade; i++) {
        multiplos.push(base * i);
    }

    alert(
        "Base: " + base +
        "\nQuantidade: " + quantidade +
        "\nMúltiplos: " + multiplos.join(", ")
    );
}