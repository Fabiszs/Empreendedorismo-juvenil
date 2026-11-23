export const perguntas = [
  {
    enunciado:
      "Ao sair da escola, você e seus colegas percebem que muitos estudantes procuram lanches saudáveis e acessíveis. Qual é sua primeira atitude?",
    alternativas: [
      {
        texto: "Quero criar uma pequena ideia de negócio e testar um produto.",
        afirmacao: ["Decidiu experimentar uma ideia de negócio com um produto."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Quero entender melhor as necessidades e as regras antes de investir.",
        afirmacao: ["Decidiu investigar as necessidades e as regras antes de investir."],
        tipo: "entrada",
        proxima: 2,
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Você começa a planejar um lanche saudável para apresentar na escola. Como pretende dar o primeiro passo?",
    alternativas: [
      {
        texto: "Preparar um protótipo simples e pedir a opinião de alguns estudantes.",
        afirmacao: ["Preparou um protótipo simples e ouviu possíveis clientes."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Pesquisar custos e comparar opções de ingredientes antes do teste.",
        afirmacao: ["Pesquisou os custos e comparou ingredientes antes de testar a ideia."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Investigar as necessidades do bairro e as regras para uma iniciativa estudantil.",
        afirmacao: ["Ampliou a pesquisa para as necessidades do bairro e as regras locais."],
        tipo: "trocar",
        proxima: 2,
        disponivel: true,
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Antes de investir, você recebe uma mensagem dizendo que a escola proibirá projetos de venda dos estudantes. O que pretende fazer?",
    alternativas: [
      {
        texto: "Confirmar a informação com a direção e consultar as regras da escola.",
        afirmacao: ["Verificou a informação com a direção e consultou as regras da escola."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Começar uma pesquisa sobre as necessidades dos estudantes e do bairro.",
        afirmacao: ["Começou uma pesquisa sobre as necessidades da comunidade."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Transformar a pesquisa em um protótipo de produto para testar na escola.",
        afirmacao: ["Transformou a pesquisa em um protótipo para testar a ideia de negócio."],
        tipo: "trocar",
        proxima: 1,
        disponivel: true,
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "As primeiras opiniões ajudam, mas algumas informações sobre os ingredientes e seus benefícios ainda não têm fonte. Como você vai continuar?",
    alternativas: [
      {
        texto: "Pesquisar fontes confiáveis e conferir cada informação antes de usá-la.",
        afirmacao: ["Conferiu as informações do projeto em fontes confiáveis."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Voltar aos estudantes e esclarecer as respostas que ficaram incompletas.",
        afirmacao: ["Retomou a pesquisa para esclarecer respostas incompletas."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Inventar uma fonte e apresentá-la como verdadeira.",
        afirmacao: ["Inventou uma fonte para sustentar uma informação."],
        tipo: "gameover",
        proxima: 4,
        disponivel: true,
        mensagem:
          "Uma fonte inventada comprometeu a confiança no projeto. Você precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Você vai planejar uma demonstração do produto. Como mostrar que a ideia é viável e responsável?",
    alternativas: [
      {
        texto: "Apresentar o protótipo, os custos e as opiniões coletadas.",
        afirmacao: ["Planejou uma demonstração com protótipo, custos e opiniões reais."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Organizar uma pequena produção e calcular os materiais necessários.",
        afirmacao: ["Organizou uma produção pequena e calculou os materiais necessários."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Convidar a comunidade para pesquisar em conjunto as necessidades do bairro.",
        afirmacao: ["Convidou a comunidade a participar da pesquisa de necessidades."],
        tipo: "trocar",
        proxima: 8,
        disponivel: true,
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Na demonstração, os colegas perguntam sobre preço, higiene e impacto das embalagens. Como melhorar a proposta?",
    alternativas: [
      {
        texto: "Revisar o preço, os cuidados de preparo e as opções de embalagem.",
        afirmacao: ["Revisou preço, higiene e embalagens com responsabilidade."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Retomar as fontes e explicar os limites das informações apresentadas.",
        afirmacao: ["Revisou as fontes e explicou os limites das informações."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Publicar dados pessoais dos colegas sem autorização.",
        afirmacao: ["Expôs dados pessoais dos colegas sem autorização."],
        tipo: "gameover",
        proxima: 6,
        disponivel: true,
        mensagem:
          "A exposição de dados pessoais prejudicou os colegas e o projeto. Você precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "O projeto está quase pronto para ser apresentado. O que você precisa organizar antes da feira escolar?",
    alternativas: [
      {
        texto: "Finalizar a apresentação com custos, fontes e os cuidados do projeto.",
        afirmacao: ["Organizou a apresentação com custos, fontes e cuidados necessários."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Revisar o protótipo e confirmar se o preço cabe no orçamento.",
        afirmacao: ["Revisou o protótipo e confirmou o orçamento do produto."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Levar o material ao encontro com estudantes e moradores do bairro.",
        afirmacao: ["Levou o material do projeto para conversar com a comunidade."],
        tipo: "trocar",
        proxima: 10,
        disponivel: true,
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A direção confirma que projetos estudantis podem acontecer, desde que sigam as regras. Como você vai verificar o que a comunidade precisa?",
    alternativas: [
      {
        texto: "Fazer perguntas sobre preferências, preços e necessidades dos estudantes.",
        afirmacao: ["Pesquisou preferências, preços e necessidades dos estudantes."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Voltar à direção para confirmar os detalhes que ainda geram dúvida.",
        afirmacao: ["Confirmou com a direção os detalhes que ainda geravam dúvida."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Acusar publicamente um colega de espalhar a mensagem sem ter provas.",
        afirmacao: ["Acusou publicamente um colega sem verificar os fatos."],
        tipo: "gameover",
        proxima: 8,
        disponivel: true,
        mensagem:
          "A acusação sem provas prejudicou um colega e interrompeu a investigação. Você precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A pesquisa indica que estudantes e famílias querem opções acessíveis e menos desperdício. Como transformar essas informações em uma ação útil?",
    alternativas: [
      {
        texto: "Planejar uma orientação comunitária com dados e sugestões verificadas.",
        afirmacao: ["Planejou uma orientação para a comunidade com dados verificados."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Organizar um encontro com moradores para apresentar as necessidades encontradas.",
        afirmacao: ["Organizou um encontro para compartilhar os resultados da pesquisa."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Preparar uma demonstração de produto para a turma com base na pesquisa.",
        afirmacao: ["Usou a pesquisa da comunidade para preparar uma demonstração escolar."],
        tipo: "trocar",
        proxima: 4,
        disponivel: true,
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Você está preparando uma orientação para a comunidade. Como garantir que as recomendações sejam úteis e confiáveis?",
    alternativas: [
      {
        texto: "Revisar os dados e indicar como as informações foram verificadas.",
        afirmacao: ["Revisou os dados e explicou como as informações foram verificadas."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Voltar às pessoas consultadas para confirmar respostas importantes.",
        afirmacao: ["Confirmou com a comunidade as respostas mais importantes."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Criar informações falsas para convencer mais pessoas a participar.",
        afirmacao: ["Divulgou informações falsas para atrair participantes."],
        tipo: "gameover",
        proxima: 10,
        disponivel: true,
        mensagem:
          "As informações falsas prejudicaram a confiança da comunidade. Você precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Chegou a hora de conversar com estudantes e moradores. Como organizar o encontro sobre as necessidades e as ideias levantadas?",
    alternativas: [
      {
        texto: "Apresentar os resultados e abrir espaço para perguntas e novas sugestões.",
        afirmacao: ["Preparou um encontro aberto para apresentar resultados e ouvir sugestões."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Revisar as recomendações e confirmar os dados antes do encontro.",
        afirmacao: ["Revisou as recomendações e conferiu os dados antes do encontro."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Expor conversas privadas de participantes sem pedir autorização.",
        afirmacao: ["Expôs conversas privadas sem autorização."],
        tipo: "gameover",
        proxima: 12,
        disponivel: true,
        mensagem:
          "A exposição de conversas privadas violou a confiança dos participantes. Você precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    final: "vitoria",
    enunciado:
      "Você apresentou o projeto na feira escolar, explicou os custos e os cuidados de produção. A iniciativa está pronta para seguir com responsabilidade. Missão cumprida!",
    alternativas: [],
  },
  {
    caminho: "B",
    final: "vitoria",
    enunciado:
      "Você compartilhou os resultados da pesquisa com estudantes e moradores e ouviu novas ideias. A comunidade agora pode planejar iniciativas mais conscientes. Missão cumprida!",
    alternativas: [],
  },
];
