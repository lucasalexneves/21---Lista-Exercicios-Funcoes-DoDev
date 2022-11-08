/* Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
3, que são seus divisores. A função deve retornar um valor booleano. */

let num = parseInt(prompt("Insira um número a ser verificado"))
let soma = 0
let divisores = []


function NumeroPerfeito() {
    for (let index = 1; index < num; index++) {
        if(num % index == 0){
            divisores.push(index)
        }
    }

    divisores.forEach(x => {
        soma = soma + x
        console.log(soma)
    })

    if(soma == num){
        return true
    } else {
        return false
    }
}

console.log(NumeroPerfeito())