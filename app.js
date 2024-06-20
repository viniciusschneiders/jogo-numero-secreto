let listaDeNumerosSorteados = []; // declaração de lista/array
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); // declarando a variavel numeroSecreto, que vai ser igual ao numero que a função(gerarnumeroaleatorio) vai criar
let tentativas = 1; // contador de tentativas

function exibirTextoNaTela(tag, texto) {           //   criação de função com 2 parametros [tag, texto], tag pra identificar o elemento do html e texto pra receber o que vier do elemento
    let campo = document.querySelector(tag); // cria uma variavel com nome campo, e utiliza o metodo para buscar no html pela (TAG)
    campo.innerHTML = texto; // acessa a propriedade do innerHTML, onde contem o elemento interno, substituindo pelo TEXTO
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() { //função criada pra exibir os textos iniciais, cada vez que reinicia o jogo, evitando reescrita do código em várias partes
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // puxa a função e altera o parametro "tag" e o "texto", pela mensagem
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // puxa a função e altera o parametro "tag" e o "texto", pela mensagem
}

exibirMensagemInicial();

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
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista  = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }


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







