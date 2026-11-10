import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let afirmacoesSelecionadas = [];

function mostrarPergunta() {
  const pergunta = aleatorio(perguntas);

  afirmacoesSelecionadas = [];
  caixaPerguntas.textContent = pergunta.enunciado;
  caixaAlternativas.replaceChildren();
  caixaPerguntas.hidden = false;
  caixaAlternativas.hidden = false;
  caixaResultado.hidden = true;

  pergunta.alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => {
      afirmacoesSelecionadas.push(...alternativa.afirmacao);
      textoResultado.textContent = afirmacoesSelecionadas.join(" ");
      caixaPerguntas.hidden = true;
      caixaAlternativas.hidden = true;
      caixaResultado.hidden = false;
    });

    caixaAlternativas.append(botao);
  });
}

botaoJogarNovamente.addEventListener("click", mostrarPergunta);
mostrarPergunta();