/* Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto. */

let nome = ""
let orcamento = 0
let saldo = 0
let continuar = true
let opcao = ""
let despesa = ""

while(continuar){
    opcao = prompt("Insira uma opção: 1 - Criar Projeto, 2 - Acessar receita, 3 - Finalizar programa")

    if(opcao = "1"){
        CriarProjeto()
    } else if(opcao == "2"){
        Receita(nome, orcamento, saldo)
        console.log("Receita atualizada com sucesso!")
    } else if(opcao == "3"){
        console.log("programa finalizado!")
        continuar = false
    } else {
        console.log("Opção incorreta ou inexistente, digite novamente")
    }
}


function CriarProjeto() {
    nome = prompt("Insira o nome do projeto: ")
    orcamento = parseFloat(prompt("Insira o orçamento total para o projeto:"))
    console.log("Nome do projeto: " + nome + " Orçamento para o projeto: " + orcamento)
    console.log("Projeto Cadastrado com sucesso")
}

function Receita(nome, valor, despesa) {
    despesa = prompt("Insira o tipo de Despesa: r: Receita, d: Despesa")

    if(despesa == "r"){
        saldo = parseFloat("Insira o valor que deseja adicionar ao orçamento: ")
        orcamento = orcamento + saldo
    } else if (despesa == "d"){
        saldo = parseFloat("Insira o valor que deseja adicionar como despesa ao orçamento: ")
        if(saldo > orcamento){
            console.log("Despesa maior que o saldo do projeto!")
        } else{
            orçamento = orcamento - saldo 
        }
    }

    saldo = 0
    
}
