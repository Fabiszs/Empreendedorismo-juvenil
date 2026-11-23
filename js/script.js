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

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";
let erros = 0;
let perguntasVisitadas = new Set();

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);

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
  perguntasVisitadas = new Set();

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
  botaoJogarNovamente.style.display = "inline-block";
}

function mostraPergunta() {
  const perguntaAtual = perguntas[atual];
  perguntasVisitadas.add(atual);

  caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);
  caixaAlternativas.replaceChildren();

  if (perguntaAtual.final === "vitoria") {
    mostraVitoria(caixaPerguntas.textContent);
    return;
  }

  const alternativasDisponiveis = perguntaAtual.alternativas.filter(
    (alternativa) =>
      !Number.isInteger(alternativa.proxima) ||
      !perguntasVisitadas.has(alternativa.proxima),
  );

  if (alternativasDisponiveis.length === 0) {
    mostraVitoria(
      "Você chegou ao fim das perguntas disponíveis neste percurso. Sua jornada empreendedora foi concluída!",
    );
    return;
  }

  for (const alternativa of embaralha(alternativasDisponiveis)) {
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

  const destino = opcaoSelecionada.proxima;
  if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
    console.error("Destino inválido:", destino);
    return;
  }

  if (perguntasVisitadas.has(destino)) {
    console.error("Essa pergunta já foi visitada:", destino);
    return;
  }

  const origem = perguntas[atual];
  const chegada = perguntas[destino];
  const mudouDeCaminho = origem.caminho !== chegada.caminho;

  if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
    console.error("Mudança de caminho sem o tipo trocar.");
    return;
  }

  if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
    console.error("A troca deve levar a outro caminho.");
    return;
  }

  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";

  if (opcaoSelecionada.tipo === "gameover") {
    erros += 1;
    if (erros >= 2) {
      mostraGameOver(opcaoSelecionada.mensagem);
      return;
    }
  }

  atual = destino;
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
  botaoJogarNovamente.textContent = "Recomeçar do início";
  botaoJogarNovamente.style.display = "inline-block";
}

reiniciaJogo();