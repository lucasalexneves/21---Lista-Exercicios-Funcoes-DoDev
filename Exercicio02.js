/* Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
3, que são seus divisores. A função deve retornar um valor booleano. */

let num = parseInt(prompt("Insira um número a ser verificado"))
let soma = 0

NumeroPerfeito()

function NumeroPerfeito() {
    for (let index = 1; index < num; index++) {
        if(num % index == 0){
            soma = soma + index
        }
    }

    if(soma == num){
        console.log("O número " + num + " é um número perfeito!")
    } else {
        console.log("o número " + num + " não é um número perfeito!")
        return false
    }
}