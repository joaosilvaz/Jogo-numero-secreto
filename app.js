let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
          exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}





























//function exibirOla() {
 // console.log("Olá, mundo!");
//}

//exibirOla();







//let titulo =  document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//function verificarChute() {
  //  console.log('O botão foi clicado!');
//}

//let titulo =  document.querySelector('h1');
//titulo.innerHTML = 'Hora do Desafio';

//function exibirMensagemNoConsole() {
//    console.log('O botão foi clicado!')
//}

//function exibirAlerta() {
  //  alert('Eu amo Js')
//}

//function exibirPrompt() {
  //  let cidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
   // alert(`Estive em ${cidade} e lembrei de você`)
//}

//function somandoDoisNumeros() {
 //   let primeiroNumero = parseInt(prompt('Digite o primeiro número'))
  //  let segundoNumero = parseInt(prompt('Digite o segundo número'))
   // let resultado = primeiroNumero + segundoNumero;
   // alert(`${primeiroNumero} + ${segundoNumero} + ${resultado}`)
//}



