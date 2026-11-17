export const perguntas = [
  {
    enunciado:
      "Você e seus amigos querem criar um negócio, mas ainda não sabem por onde começar. Muitos alunos reclamam que não encontram lanches saudáveis e baratos. Qual é seu primeiro passo?",
    alternativas: [
      {
        texto: "Conversar com os estudantes para entender o que precisam e se comprariam essa ideia.",
        afirmacao: ["Investigou uma necessidade real antes de planejar o negócio."],
        tipo: "avancar",
      },
      {
        texto: "Gastar toda a sua economia produzindo lanches sem saber se alguém quer comprar.",
        afirmacao: ["Investiu sem conhecer os clientes e colocou o negócio em risco."],
        tipo: "gameover",
      },
      {
        texto: "Perguntar a alguns colegas quais lanches saudáveis eles gostariam de encontrar.",
        afirmacao: ["Começou ouvindo possíveis clientes para conhecer suas preferências."],
        tipo: "salto",
      },
    ],
  },
  {
    enunciado:
      "As conversas confirmam que muitos alunos querem opções melhores para o intervalo. Como descobrir se sua ideia pode virar um negócio?",
    alternativas: [
      {
        texto: "Pesquisar sabores, preços e frequência de compra entre os estudantes.",
        afirmacao: ["Pesquisou os clientes e reuniu dados para orientar a ideia."],
        tipo: "avancar",
      },
      {
        texto: "Montar uma pequena degustação e pedir opiniões sinceras antes de vender.",
        afirmacao: ["Testou a ideia com clientes antes de investir."],
        tipo: "salto",
      },
      {
        texto: "Escolher o cardápio e o preço no chute, sem conversar com ninguém.",
        afirmacao: ["Tomou decisões sem conhecer os clientes nem testar a proposta."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "A pesquisa mostra que os alunos querem lanches acessíveis, mas têm preferências diferentes. Como decidir o que oferecer primeiro?",
    alternativas: [
      {
        texto: "Comparar as respostas e escolher poucas opções dentro do orçamento.",
        afirmacao: ["Analisou os dados e priorizou opções viáveis para os clientes."],
        tipo: "avancar",
      },
      {
        texto: "Voltar à pesquisa e esclarecer as respostas que ficaram confusas.",
        afirmacao: ["Revisou a pesquisa para tomar uma decisão mais informada."],
        tipo: "salto",
      },
      {
        texto: "Comprar ingredientes caros para um cardápio enorme sem calcular os custos.",
        afirmacao: ["Ignorou os custos e assumiu um risco financeiro desnecessário."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "Você escolheu um produto para testar. Como calcular um preço que cubra os gastos e continue acessível?",
    alternativas: [
      {
        texto: "Anotar os custos, estimar o preço e conferir com os clientes.",
        afirmacao: ["Calculou os custos e testou um preço adequado para o público."],
        tipo: "avancar",
      },
      {
        texto: "Começar com um lote pequeno, registrar os gastos e ajustar o preço.",
        afirmacao: ["Planejou um teste pequeno e acompanhou os gastos do negócio."],
        tipo: "salto",
      },
      {
        texto: "Cobrar qualquer valor sem calcular os gastos.",
        afirmacao: ["Definiu o preço sem controle dos custos."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "O primeiro teste recebeu sugestões de opções vegetarianas e embalagens com menos lixo. Como melhorar a oferta?",
    alternativas: [
      {
        texto: "Atualizar o cardápio e buscar embalagens adequadas sem ultrapassar o orçamento.",
        afirmacao: ["Aprimorou o produto com base nas sugestões e nos limites do negócio."],
        tipo: "avancar",
      },
      {
        texto: "Perguntar quais sugestões são mais importantes antes de mudar tudo.",
        afirmacao: ["Priorizou o feedback dos clientes antes de fazer mudanças."],
        tipo: "salto",
      },
      {
        texto: "Prometer opções que ainda não consegue produzir e ignorar as sugestões.",
        afirmacao: ["Fez promessas sem capacidade de cumprir e ignorou os clientes."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado: "O produto está pronto para um novo teste. O que organizar antes de vender?",
    alternativas: [
      {
        texto: "Definir quantidade, custos, tarefas, higiene e como registrar as vendas.",
        afirmacao: ["Organizou a produção, os custos e as responsabilidades para começar com segurança."],
        tipo: "avancar",
      },
      {
        texto: "Revisar o plano e confirmar se o preço cobre os gastos.",
        afirmacao: ["Revisou o plano e conferiu os custos antes de vender."],
        tipo: "salto",
      },
      {
        texto: "Começar sem combinar tarefas, calcular quantidades ou verificar as regras da escola.",
        afirmacao: ["Começou sem planejamento e deixou de verificar as regras do local."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado: "Como dividir o trabalho para evitar atrasos e desperdícios?",
    alternativas: [
      {
        texto: "Combinar responsabilidades, horários e uma quantidade inicial viável.",
        afirmacao: ["Dividiu as tarefas e organizou uma produção compatível com a equipe."],
        tipo: "avancar",
      },
      {
        texto: "Confirmar se todos sabem preparar e armazenar os alimentos.",
        afirmacao: ["Alinhou as tarefas e os cuidados necessários para trabalhar com alimentos."],
        tipo: "salto",
      },
      {
        texto: "Deixar todo o trabalho para uma pessoa e decidir os horários no dia da venda.",
        afirmacao: ["Deixou as responsabilidades indefinidas e aumentou o risco de atrasos."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "Depois do primeiro dia de vendas, alguns lanches sobraram e outros acabaram rápido. O que fazer?",
    alternativas: [
      {
        texto: "Registrar as vendas e ajustar a quantidade de cada opção.",
        afirmacao: ["Usou os resultados das vendas para planejar melhor a próxima produção."],
        tipo: "avancar",
      },
      {
        texto: "Perguntar aos clientes o que gostaram e comparar com os registros.",
        afirmacao: ["Combinou dados das vendas com opiniões dos clientes."],
        tipo: "salto",
      },
      {
        texto: "Produzir ainda mais de tudo sem conferir os registros.",
        afirmacao: ["Ignorou os resultados e poderia repetir desperdícios."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "Vocês venderam bastante, mas não sabem se tiveram lucro. Como conferir?",
    alternativas: [
      {
        texto: "Somar as receitas, registrar os gastos e comparar os valores.",
        afirmacao: ["Conferiu receitas e despesas para entender o resultado financeiro."],
        tipo: "avancar",
      },
      {
        texto: "Revisar comprovantes e conversar com a equipe para localizar gastos que faltaram.",
        afirmacao: ["Revisou os registros financeiros antes de tirar conclusões."],
        tipo: "salto",
      },
      {
        texto: "Considerar todo o dinheiro recebido como lucro e gastar sem fazer as contas.",
        afirmacao: ["Confundiu receita com lucro e deixou de controlar o dinheiro do projeto."],
        tipo: "gameover",
      },
    ],
  },
  {
    enunciado:
      "A feira está chegando. O que apresentar para mostrar o impacto e a viabilidade do negócio?",
    alternativas: [
      {
        texto: "Mostrar resultados reais, aprendizados e próximos passos para melhorar o projeto.",
        afirmacao: ["Apresentou resultados reais e demonstrou como pretende continuar aprendendo."],
        tipo: "avancar",
      },
      {
        texto: "Revisar os dados e ensaiar respostas para as perguntas da comunidade.",
        afirmacao: ["Revisou os dados e preparou a equipe para conversar com o público."],
        tipo: "salto",
      },
      {
        texto: "Inventar números de vendas para fazer o projeto parecer maior.",
        afirmacao: ["Pensou em divulgar dados falsos e comprometer a confiança no projeto."],
        tipo: "gameover",
      },
    ],
  },
];
