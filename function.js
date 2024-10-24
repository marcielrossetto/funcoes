function criaArrayDecrescente(n) {
    let array = [];
for (let i = n; i >= 1; i--) {
    array.push(i);
}
return array;
}


function decidirCompra(preco, parcelas, estouEndividado) {
    if (preco >= 1000) {
        if (!estouEndividado || parcelas >= 10) {
            return "Vou comprar";
        } else {
            return "Não vou comprar";
        }
    } else if (preco >= 750 && preco < 1000) {
        if (parcelas >= 5) {
            return "Vou comprar";
        } else {
            return "Não vou comprar";
        }
    } else if (preco <= 500) {
        return "Vou comprar";
    } else {
        return "Não vou comprar";
    }
}

// Exemplos de uso:
console.log(decidirCompra(1200, 10, true)); // Vou comprar
console.log(decidirCompra(1200, 8, true));  // Não vou comprar
console.log(decidirCompra(760, 10, true));  // Vou comprarçfdflgdççldfçlgkdçfkgçdfkgdflgçpoikjliuoikjlinhgatgfaasewrcvdfsrehllkoiç,,m,,n.m,;;,çplçophmd~jfskfgklsjgflhksçl~~~~~ç~ç~ç~çççpolokliopjkjudflçjçdklkfgkhçççççh,khlhhlhhlhçhçkk~~k~k~~l~l~l~klllçlçlçlçlçllçlççllççlçlçlçk~k~k~k~k~k~k~kk~k~~kllljçjç,m.m.,;,;,;./././::;
/]/