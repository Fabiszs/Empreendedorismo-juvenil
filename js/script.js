import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const imagemResultado = document.querySelector(".imagem-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";
let erros = 0;

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo() {
  reiniciaJogo();
  faseDaPartida = "jogando";

  telaInicial.style.display = "none";
  caixaPerguntas.style.display = "block";
  caixaAlternativas.style.display = "flex";
  mostraPergunta();
}

function reiniciaJogo() {
  atual = 0;
  historiaFinal = "";
  faseDaPartida = "inicio";
  erros = 0;

  caixaPerguntas.textContent = "";
  caixaAlternativas.replaceChildren();
  tituloResultado.textContent = "";
  textoResultado.textContent = "";
  imagemResultado.src = "";
  imagemResultado.style.display = "none";

  telaInicial.style.display = "block";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "none";
  botaoCreditos.style.display = "none";
  botaoJogarNovamente.style.display = "inline-block";
}

function mostraPergunta() {
  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);
  caixaAlternativas.replaceChildren();

  for (const alternativa of embaralha(perguntaAtual.alternativas)) {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.disabled = alternativa.disponivel === false;
    botao.addEventListener("click", function () {
      respostaSelecionada(alternativa);
    });
    caixaAlternativas.appendChild(botao);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  if (faseDaPartida !== "jogando") {
    return;
  }

  if (opcaoSelecionada.disponivel === false) {
    return;
  }

  const escolhaDeRisco = opcaoSelecionada.tipo === "gameover";
  if (escolhaDeRisco) {
    erros += 1;
  }

  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";

  if (atual === perguntas.length - 1) {
    if (erros >= 3) {
      mostraGameOver(
        "As decisões de risco se acumularam durante as 10 etapas e a empresa entrou em falência.",
      );
    } else {
      mostraVitoria(
        "Você concluiu as 10 etapas, apresentou sua ideia na feira e mostrou como ela atende a uma necessidade real. Missão cumprida: você venceu!",
      );
    }
    return;
  }

  atual += 1;
  mostraPergunta();
}

function embaralha(alternativas) {
  const resultado = [...alternativas];

  for (let indice = resultado.length - 1; indice > 0; indice -= 1) {
    const outroIndice = Math.floor(Math.random() * (indice + 1));
    [resultado[indice], resultado[outroIndice]] = [
      resultado[outroIndice],
      resultado[indice],
    ];
  }

  return resultado;
}

function mostraGameOver(mensagem) {
  faseDaPartida = "gameover";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "GAME OVER";
  imagemResultado.src = "imagem/fracasso.png";
  imagemResultado.alt = "Ilustração de fracasso";
  imagemResultado.style.display = "block";
  textoResultado.textContent = mensagem + "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal;
  botaoJogarNovamente.textContent = "Recomeçar do início";
  botaoJogarNovamente.style.display = "inline-block";
  botaoCreditos.style.display = "none";
  telaCreditos.style.display = "none";
}

function mostraVitoria(mensagem) {
  if (faseDaPartida !== "jogando") {
    return;
  }

  faseDaPartida = "vitoria";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "THE END";
  imagemResultado.src = "imagem/sucesso.png";
  imagemResultado.alt = "Ilustração de sucesso";
  imagemResultado.style.display = "block";
  textoResultado.textContent = mensagem + "\n\nSeu percurso nesta partida:\n" + historiaFinal;
  botaoJogarNovamente.style.display = "none";
  botaoCreditos.style.display = "inline-block";
  telaCreditos.style.display = "none";
}

function mostraCreditos() {
  if (faseDaPartida !== "vitoria") {
    return;
  }

  faseDaPartida = "creditos";
  telaInicial.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "block";
}

reiniciaJogo();