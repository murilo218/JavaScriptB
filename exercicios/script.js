function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (num1 + num2);
}

function calcularIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade <= 18) {
        document.getElementById("resultado2").innerText = ("você é menor de idade");
    } else {
        document.getElementById("resultado2").innerText = ("você é maior de idade");
    }

}

function calcularCaracter() {
    let texto = document.getElementById("texto").value;
    let quantidade = texto.length;
    document.getElementById("resultado3").innerText = "O texto possui " + quantidade + " caracteres.";
}

function verificarParImpar() {
    let numero = Number(document.getElementById("numeroParImpar").value);
    if (numero % 2 === 0) {
        document.getElementById("resultado4").innerText = ("É par");
    } else {
        document.getElementById("resultado4").innerText = ("É ímpar");
    }
}

function converterCaixaAlta() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado5").innerText = nome.toUpperCase();
}

function verificarMaior() {
    let num1 = Number(document.getElementById("numMaior1").value);
    let num2 = Number(document.getElementById("numMaior2").value);
    let res = "";
    if (num1 > num2) {
        res = num1 + " é maior.";
    } else if (num2 > num1) {
        res = num2 + " é maior.";
    } else {
        res = "Os números são iguais.";
    }
    document.getElementById("resultado6").innerText = res;
}

function gerarTabuada() {
    let num = Number(document.getElementById("numTabuada").value);
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += num + " x " + i + " = " + (num * i) + "<br>";
    }
    document.getElementById("resultado7").innerHTML = resultado;
}

function contarUmADez() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    document.getElementById("resultado8").innerText = resultado.trim();
}

function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media = (nota1 + nota2 + nota3) / 3;
    let resultado = "";
    if (media >= 6) {
        resultado = "Aprovado! Média: " + media.toFixed(2);
    } else {
        resultado = "Reprovado. Média: " + media.toFixed(2);
    }
    document.getElementById("resultado9").innerText = resultado;
}

function converterTemperatura() {
    let celsius = Number(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado10").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}

function verificarDiaSemana() {
    let dia = Number(document.getElementById("diaSemana").value);
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    if (dia >= 1 && dia <= 7) {
        document.getElementById("resultado11").innerText = "Dia da semana: " + dias[dia - 1];
    } else {
        document.getElementById("resultado11").innerText = "Número inválido!";
    }
}

function verificarSenha() {
    let senha = document.getElementById("senha").value;
    if (senha === "1234") {
        document.getElementById("resultado12").innerText = "Acesso permitido!";
    } else {
        document.getElementById("resultado12").innerText = "Senha incorreta.";
    }
}

function contagemRegressiva() {
    let resultado = "";
    for (let i = 10; i >= 1; i--) {
        resultado += i + " ";
    }
    document.getElementById("resultado13").innerText = resultado.trim();
}