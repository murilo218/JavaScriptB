function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (num1 + num2);
}

function calcularIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultado2").innerText = ("você é menor de idade");
    } else {
        document.getElementById("resultado2").innerText = ("você é maior de idade");
    }

}