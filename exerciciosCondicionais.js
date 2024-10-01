/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza? 

    b) Para que tipos de números ele imprime no console "Passou no teste"? 

    c) Para que tipos de números a mensagem é "Não passou no teste"? 
*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "Uva"
let preco
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
    a) Para que serve o código acima?

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
*/


//3. Leia o código abaixo:

const num1 = 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*
    a) O que a primeira linha está fazendo?

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    c) Haverá algum erro no console? Justifique.
*/



/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. c
*/



/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietã" ou "Boa madrugada, Vietnã", dependendo de qual for o seu fuso horário atual.
*/


/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/