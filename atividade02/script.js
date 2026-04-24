function somarNumeros() {
    let numeros = [10, 20, 30, 40, 50];
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    alert("Os números são: " + numeros.join(", ") + "\nA soma total é: " + soma);
}