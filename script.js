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
            document.getElementById('resultadoSoma').innerText = `O resultado da soma de ${valor1} + ${valor2} = ${resultado}`;
        }


//Função multiplicar 

function multiplicar(c, d){
    return c * d; 
}

function mostrarMultiplicacao(){
    const valorC = parseFloat(document.getElementById('valor1').value);
    const valorD = parseFloat(document.getElementById('valor2').value);
    if(isNaN(valorC) || isNaN(valorD)|| valorC === "" || valorD === ""){
        alert("Digite um número");
        return;
    }
    const resultadoMultiplicacao = multiplicar(valorC, valorD);
    document.getElementById('resultadoMultiplicacao').innerText = `O resultado da multiplicaçao de ${valorC} X ${valorD} = ${resultadoMultiplicacao}`;
   //alert(`O resultado da multiplicação de ${valorC} e ${valorD} é ${resultadoMultiplicacao}`);
}

//funcao dividir
function dividir(c, d){
    return c / d;
}

function mostrarDivisao(){
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if(isNaN(valor1) || isNaN(valor2) || valor1 === "" || valor2 === ""){
        alert("Digite um número");
        return;
    }

    const resultadoDivisao = dividir(valor1, valor2);
    document.getElementById('resultadoDivisao').innerText = `O resultado da divisão de ${valor1} / ${valor2} = ${resultadoDivisao}`;
}

// Função dividir
function subtrair(c, d) {
    return c - d;
}

function mostrarSubtracao() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Digite um número");
        return;
    }

    const resultadoSubtracao = subtrair(valor1, valor2);
    document.getElementById('resultadoSubtracao').innerText = `O resultado da subtração de ${valor1} - ${valor2} = ${resultadoSubtracao}`;
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

 
function calcularIMC() {
    // Obtenha os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('alturaImc').value);

    // Verifique se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcule o IMC
    const imc = peso / (altura * altura);

    // Exiba o resultado
    let resultadoTexto = `Seu IMC é ${imc.toFixed(2)}. `;
    if (imc < 18.5) {
        resultadoTexto += "Você está abaixo do peso. Considere aumentar a ingestão de calorias com uma dieta equilibrada e inclua exercícios de fortalecimento muscular.";
    } else if (imc < 24.9) {
        resultadoTexto += "Você está com peso normal. Mantenha uma dieta equilibrada e continue praticando atividades físicas regularmente.";
    } else if (imc < 29.9) {
        resultadoTexto += "Você está com sobrepeso. Tente reduzir a ingestão de calorias, focando em alimentos saudáveis, e aumente a quantidade de exercícios físicos.";
    } else {
        resultadoTexto += " Consulte urgentemente um profissional de saúde para um plano de tratamento abrangente, podendo incluir intervenções médicas e mudanças significativas no estilo de vida.";
    }

    document.getElementById('resultadoImc').innerText = resultadoTexto;
}



//GErenciador de tarefas


const inputTarefa = document.getElementById('novaTarefa');
const btnAdicionar = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar nova tarefa
function adicionarTarefa() {
    const novaTarefa = inputTarefa.value;
    if (novaTarefa) {
        const itemLista = document.createElement('li');
        itemLista.className = 'list-group-item d-flex justify-content-between align-items-center';
        itemLista.innerHTML = `
            <span>${novaTarefa}</span>
            <div>
                <button class="btn btn-success btn-sm" onclick="marcarCompletada(this)">✓</button>
                <button class="btn btn-warning btn-sm" onclick="editarTarefa(this)">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="excluirTarefa(this)">🗑️</button>
            </div>
        `;
        listaTarefas.appendChild(itemLista);
        inputTarefa.value = "";
    }
}

// Função para marcar tarefa como completada
function marcarCompletada(button) {
    const itemLista = button.parentElement.parentElement;
    itemLista.classList.toggle('list-group-item-success'); // Adiciona ou remove a classe 'completed'
}

// Função para excluir tarefa
function excluirTarefa(button) {
    const itemLista = button.parentElement.parentElement;
    itemLista.remove();
}

// Função para editar tarefa
function editarTarefa(button) {
    const itemLista = button.parentElement.parentElement;
    const span = itemLista.querySelector('span');
    const novaTarefa = prompt('Edite a tarefa:', span.textContent);
    if (novaTarefa) {
        span.textContent = novaTarefa;
    }
}

// Função para filtrar tarefas
function filtrarTarefas(filtro) {
    const tarefas = listaTarefas.children;
    for (let tarefa of tarefas) {
        switch (filtro) {
            case 'todas':
                tarefa.style.display = '';
                break;
            case 'concluidas':
                tarefa.style.display = tarefa.classList.contains('completed') ? '' : 'none';
                break;
            case 'naoConcluidas':
                tarefa.style.display = tarefa.classList.contains('completed') ? 'none' : '';
                break;
        }
    }
}

// Função para ordenar tarefas
function ordenarTarefas() {
    const tarefas = Array.from(listaTarefas.children);
    tarefas.sort((a, b) => a.querySelector('span').textContent.localeCompare(b.querySelector('span').textContent));
    listaTarefas.innerHTML = '';
    tarefas.forEach(tarefa => listaTarefas.appendChild(tarefa));
}

btnAdicionar.addEventListener('click', adicionarTarefa);