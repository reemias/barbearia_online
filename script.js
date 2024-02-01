//faça  aparecer uma mensagem de alerta 

alert("bora jogar !");

// crie uma variavel para armazenar o numero do jogo

let numeroSecreto = 29;

// mostre o numero secreto no console.log

console.log (numeroSecreto)

// crie outra variavel para colocar o numero digitado no prompt

let chute = prompt('escolha um número de 1 a 100');

// se o chute for igual ao numerosecreto 

if (chute == numeroSecreto) {

    // então execute a menssagem 
    alert (`você acertou o número secreto ${numeroSecreto}`);

} // se não mostre essa menssagem
else alert ('vc errou o número');
