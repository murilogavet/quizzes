const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 mais 1=",
        alternativas: [
            {
                texto: "2",
                afirmacao: "esta certo!"
            },
            {
                texto: "3",
                afirmacao: "errou por 1."
            }
        ]
    },
    {
        enunciado: "1 menos 1=",
        alternativas: [
            {
                texto: "0",
                afirmacao: "esta certo!"
            },
            {
                texto: "-1",
                afirmacao: "errou por 1."
            }
        ]
    },
    {
        enunciado: "1 vezes 1=",
        alternativas: [
            {
                texto: "1",
                afirmacao: "esta certo!"
            },
            {
                texto: "4",
                afirmacao: "errou por 3"
            }
        ]
    },
    {
        enunciado: "1 dividido por 1=",
        alternativas: [
            {
                texto: "0,5",
                afirmacao: "errou por 0,5"
            },
            {
                texto: "1",
                afirmacao: "esta certo!"
            }
        ]
    },
    {
        enunciado: "1 elevado a 1=",
        alternativas: [
            {
                texto: "1",
                afirmacao: "acertou"
            },
            {
                texto: "20",
                afirmacao: "errou só por dezenove"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
