function listar () {
    let nome = ["joão", "Maria", "José"];
     return nome;
  }
    console.log(listar());
  
  function chamada (alunos) {
     
      return alunos;  
  }
      console.log(chamada(["Ana", "Bia", "Carlos"]));
  
  function dobraASoma(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
      soma += lista[i];
    }
    return soma * 2;
  }

  console.log(dobraASoma([1, 2, 3, 4, 5]));
  


  //   //Média Aritmética da Turma
// Implemente a função ao lado que recebe um array contendo todas as notas dos alunos de uma turma e retorna a média aritmética dessa turma.

// OBS: a média aritmética é calculada somando todas as notas e se dividindo pelo número de alunos
// Exemplos:
// Deve retornar 4.5 quando passado o array [8,2,6,2]
// Deve retornar 5 quando passado o array [5,5]
  function mediaDaTurma(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;   
    return media;
}
console.log(mediaDaTurma([8, 2, 6, 2]));
console.log(mediaDaTurma([5, 5]));  


function acheMediano(numeros) {
    const n = numeros.length;
    if (n % 2 === 0) {
        const meio1 = numeros[Math.floor((n - 1) / 2)];
        const meio2 = numeros[Math.floor(n / 2)];
        return (meio1 + meio2) / 2;
    } else {
        return numeros[Math.floor(n / 2)];
    }
}

console.log(acheMediano([2, 5, 7, 10])); 
console.log(acheMediano([1, 2, 7, 13, 15, 100])); 
console.log(acheMediano([1, 2, 3, 4, 5])); 




function temNegativo(num1, num2, num3) {
	if (num1 < 0 || num2 < 0 || num3 < 0 ){
		return "Tem negativo!";
	} else {
		return "Tudo positivo!";
	}
}
	console.log(temNegativo(-2, 10, 1));
	console.log(temNegativo(2, 4, 10));


//     Concatena tudo!
// Implemente a função ao lado que recebe um array de strings e retorna uma única string concatenando os elementos do array. Caso o array esteja vazio, retorne a mensagem "Array vazio".

// Exemplos:
// Se for passado o array arr = ["pessoa", "amor", "título"], a função deve retornar "pessoaamortítulo".
// Se for passado o array arr = ["tchau"], a função deve retornar "tchau".
// Se for passado o array arr = [], a função deve retornar "Array vazio".

    function concatenaArray(palavras) {
        if (palavras.length === 0) {
            return "Array vazio";
        }
        return palavras.join('');
    }
    console.log(concatenaArray(["pessoa", "amor", "título"])); 
    console.log(concatenaArray(["tchau"])); 
    console.log(concatenaArray([])); 


    // Cadê meu número?
    // Implemente a função ao lado que recebe uma array e um valor e retorna a posição que esse valor se encontra na array (começando em 0). Caso o valor passado não esteja presente na array, retorne o valor \-1.
    
    // Exemplos:
    // deve retornar 2 quando passada a array [10, 30, 50, 70, 90] e o valor 50.
    // deve retornar \-1 quando passada a array [10, 30, 50, 70, 90] e o valor 21.


    function acheValor(lista, valor) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === valor) {
                return i;
            }
        }
        return -1;
    }
    console.log(acheValor([10, 30, 50, 70, 90], 50)); 
    console.log(acheValor([10, 30, 50, 70, 90], 21)); 