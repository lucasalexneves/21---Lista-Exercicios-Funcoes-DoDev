/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
dados sobre o salário e o número de filhos. A prefeitura deseja saber:
a. A média do salário da população;
b. A média do número de filhos;
c. O maior salário;
d. A porcentagem de pessoas com salários até R$1.500,00
Salve os dados dos habitantes em arrays, crie uma função para cada item que
retorna o que é pedido. */

let salario = []
let numFilhos = []
let indexCadastro = 0
let somaSalario = 0
let somaFilhos = 0
let maiorsalario = 0
let porcentagem1500 = 0
let contador1500 = 0
let continuar = true

while(continuar){
    let opcao = prompt("Insira uma opção: 1- Cadastro, 2- Media salario, 3- Media filhos, 4- Maior salario, 5- Porcentagem, 6 - Encerrar")
    if(opcao == "1"){
        CadastroPopulacao()
    } else if(opcao == "2"){
        mediaSalario()
    } else if(opcao == "3"){
        mediaFilhos()
    } else if(opcao == "4"){
        maiorSalario()
    } else if(opcao == "5"){
        porcentagemSalario1500()
    } else {
        continuar = false
    }

}

function CadastroPopulacao(){
    
    salario[indexCadastro] = parseFloat(prompt("Insira o seu salário: "))
    numFilhos[indexCadastro] = parseInt(prompt("Insira a quantidade de filhos"))
    console.log(salario)
    console.log(numFilhos)
    console.log("Cadastro realizado com sucesso!")
    indexCadastro++
}


function mediaSalario() {
    let mediasalariosup = 0
    for (let index = 0; index < indexCadastro; index++) {
        somaSalario = somaSalario + salario[index]
    }
    mediasalariosup = somaSalario / indexCadastro
    console.log("A média de salário da população: " + mediasalariosup)
}

function mediaFilhos() {
    for (let index = 0; index < indexCadastro; index++) {
        somaFilhos = somaFilhos + numFilhos[index]
    }
    console.log("A média de filhos da população: " + (somaFilhos / indexCadastro))
}

function maiorSalario() {
    for (let index = 0; index < indexCadastro; index++) {
        if(salario[index] > maiorsalario){
            maiorsalario = salario[index]
        }
    }
    console.log("O maior salário é: " + maiorsalario)
}

function porcentagemSalario1500() {
    
    for (let index = 0; index < indexCadastro; index++) {
        if(salario[index] <= 1500){
            contador1500++
        }
    }

    porcentagem1500 = (contador1500 * 100) / indexCadastro
    console.log("A porcentegem de pessoas que recebe até R$1500,00 é de: " + porcentagem1500 + "%")
}