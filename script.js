//faça  aparecer uma mensagem de alerta 
alert("bora jogar !");
// crie uma variavel para armazenar o numero do jogo
let numeroSecreto = 29;
// crie outra variavel para colocar o numero digitado no prompt
let chute = prompt('escolha um número de 1 a 100');
// se o chute for igual ao numerosecreto 
if (chute == numeroSecreto) {
    // então execute a menssagem no console.log
    console.log ('você acertou o número secreto (29)');

} else alert ('vc errou o número');