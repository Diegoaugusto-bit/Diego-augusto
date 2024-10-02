const ask = require('readline-sync')

console.clear()
let numero1 = Number(ask.question("Digite o primeiro numero: "))
let numero2 = Number(ask.question("Digite o segundo numero: "))

let calculadoraFuncionando = true 

while(calculadoraFuncionando){
    console.clear()
    console.log(`
________________________________
SEUS NUMEROS SAO: ${numero1} e ${numero2}

[1] - Somar
[2] - Subtrair
[3] - Multiplicar
[4] - Dividir
[5] - Calcular resto
[6] - Reinserir os numeros
[0] - Sair
________________________________
        `)
    let opcaoUsuario = Number(ask.question("Selecione a opcao desejada: "))
    console.clear()

    switch(opcaoUsuario){
        case 1:
            console.log(`${numero1} + ${numero2} =`, numero1 + numero2)
            break
        case 2:
            console.log(`${numero1} - ${numero2} =`, numero1 - numero2)
            break
        case 3:
            console.log(`${numero1} * ${numero2} =`,numero1 * numero2)
            break
        case 4:
            console.log(`${numero1} / ${numero2} =`, numero1 / numero2)
            break
        case 5:
            console.log(`${numero1} MOD ${numero2} =`, numero1 % numero2)
            break
        case 6:
            console.clear()
            numero1 = Number(ask.question('Digite o novo primeiro numero: '))
            numero2 = Number(ask.question('Digite o novo segundo numero: '))
            break
        case 0:
            calculadoraFuncionando = false
            break
        default:
            console.clear()
            console.log("Opcao invalida.")
            break
    }

    ask.question('Tecle ENTER para continuar...')
}
