function buscarFruta() {
    let frutas = ["maçã", "banana", "laranja", "uva", "manga"];

    let busca = prompt("Digite o nome da fruta que deseja buscar:").toLowerCase();

    let posicao = frutas.indexOf(busca);

    if (posicao !== -1) {
        alert("Fruta encontrada na posição: " + posicao);
    } else {
        alert("Fruta não encontrada ❌");
    }
}