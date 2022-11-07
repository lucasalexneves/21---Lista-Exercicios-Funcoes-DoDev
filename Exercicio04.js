/* Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra. Se a
letra for A a função calcula a média aritmética das notas do aluno, se for P, a sua
média ponderada (pesos: 5, 3 e 2). A média calculada deve ser retornada; */

let nota = []
let letra = ""
let pesos = [5, 3, 2]

let somaNotas = 0
let mediaAritmetica = 0
let mediaPonderada = 0

for (let index = 0; index < 3; index++) {
    nota[index] = parseFloat(prompt("Digite a nota do aluno: "))
    somaNotas = somaNotas + nota[index]
    console.log(somaNotas)
}

CalculaMedia(nota)

function CalculaMedia(nota){
    let somaPesos = 0
    let somaPesosNotas = 0
    letra = prompt("Digite uma opção: a - Média aritmética, p - Média ponderada")

    if(letra == "a"){
        mediaAritmetica = (somaNotas / 3)
        console.log("A média aritmética é: " + mediaAritmetica)
    } else if (letra == "p"){
        //Calcular o somatorio dos pesos
        for (let index = 0; index < pesos.length; index++) {
            somaPesos = somaPesos + pesos[index]
            console.log(somaPesos)
        }
        //calcular somatorio de valores * pesos
        for (let index2 = 0; index2 < nota.length; index2++) {
            somaPesosNotas = somaPesosNotas + (nota[index2] * pesos[index2])
            console.log(somaPesosNotas)
        }

        mediaPonderada = somaPesosNotas / somaPesos
        console.log("A média ponderada é: " + mediaPonderada)
    }
}
