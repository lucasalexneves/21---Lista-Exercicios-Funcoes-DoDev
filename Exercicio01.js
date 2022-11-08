/* Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto. */

let nome = []
let orcamento = []
let index = 0
let saldo = 0
let despesa = ""
let opcao = ""


let continuar = true
while(continuar){
    
    opcao = prompt("Insira uma opção: 1 - Criar Projeto, 2 - Acessar receita, 3 - Finalizar programa")

    switch(opcao){
        case "1":
            CriarProjeto()
            break
        case "2":
            let nomeProjeto = prompt("Insira o nome do projeto que deseja atualizar")
            let valor = parseInt(prompt("Insira o valor que deseja atualizar"))
            let despesa = prompt("Insirao o tipo de despesa r ou d")
            Receita(nomeProjeto, valor, despesa)
            console.log("Receita atualizada com sucesso!")
            break
        case "3":
            continuar = false
            console.log("programa finalizado!")
            break
        default:
            console.log("Opção incorreta ou inexistente, digite novamente")
    }     
}


function CriarProjeto() {
    nome.push(prompt("Insira o nome do projeto: "))
    orcamento.push(parseFloat(prompt("Insira o orçamento total para o projeto:")))
    console.log("Nome do projeto: " + nome + " Orçamento para o projeto: " + orcamento)
    console.log("Projeto Cadastrado com sucesso")
}

function Receita(nome, valor, despesa) {
    let index = nome.indexOf(nome)

    if(despesa == "r"){
        orcamento[index] = orcamento[index] + saldo
    } else if (valor <= orcamento[index]){
        orcamento[index] = orcamento[index] - valor 
    }

    
    console.log(orcamento[index])
    
}
