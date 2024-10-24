//alert("estou funcionando");
//função somar
        function soma(a, b) {
            return a + b;
        }

        function mostrarResultado() {
            const valor1 = parseFloat(document.getElementById('valor1').value);
            const valor2 = parseFloat(document.getElementById('valor2').value);
            if(isNaN(valor1) || isNaN(valor2) || valor1 ==="" || valor2 === ""){
                alert("Digite um numero ");
                return;
            }
            const resultado = soma(valor1, valor2);
            document.getElementById('resultado').innerText = `O resultado da soma de ${valor1} e ${valor2} é = ${resultado}`;
        }
//Função ehPar

function ehPar(num){
    return num % 2 === 0;
}
 function verificaPar(){
    const numero = document.getElementById('numero').value;
    if(numero === ""){
            alert("Digite um número");
            return;
        } 
    
    const resultado = ehPar(numero) ? `O  numero ${numero} é PAR, a divisão dele resta "00"` : `O numero ${numero} é IMPAR, a divisão dele resta 1`;
    document.getElementById('resultadoEhPar').innerHTML = resultado;
    }

    //FUnção calcular area

    function areaRetangulo(largura, altura){
        return largura * altura;
    }
     
function mostrarArea(){
    const largura = parseFloat(document.getElementById('largura').value); //parseFloat: Converte o valor obtido de string para um número de ponto flutuante (decimal).
    const altura = parseFloat(document.getElementById('altura').value);
    const area = areaRetangulo(largura, altura);//Chama a função areaRetangulo passando largura e altura como argumentos. Essa função deve retornar a área do retângulo (largura multiplicada pela altura).
    if(isNaN(largura) || isNaN(altura) || largura === "" || altura ===""){
        alert ("Digite os dois campos para obter o resultado");
        return;
    }
    document.getElementById('resultadoArea').innerText = `Área: ${area} cm²`;

}

//Gerador de numero aleatorio 

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarNumero(){
    const min = parseFloat(document.getElementById('min').value);
    const max = parseFloat(document.getElementById('max').value);
    if(isNaN(min) || isNaN(max) || min === "" || max ===""){
        alert("Por favor, insira valores válidos para mínimo e máximo.");
        return;
    }
    const numero = numeroAleatorio(min, max);
    document.getElementById('resultadoAleatorio').innerHTML = `Número aleatorio sorteado é ${numero}`
}

//Funcao media de notas
function media(lista) {
    const soma = lista.reduce((a, b) => a + b, 0);
    return soma / lista.length;
}

function mostrarMedia() {
    const numeros = document.getElementById('numeros').value.split(',').map(Number);
    if (numeros.some(isNaN)) {
        alert("Por favor, insira apenas números separados por vírgula.");
        return;
    }
    const resultado = media(numeros).toFixed(2);
    document.getElementById('resultadoMedia').innerText = 'Média: ' + resultado;
}