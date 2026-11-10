export const perguntas = [
  {
    caminho: "inicio",
    enunciado:
      "Você e seus amigos querem criar um negócio, mas ainda não sabem por onde começar. Na escola, muitos alunos reclamam que não encontram lanches saudáveis e baratos. Qual é seu primeiro passo?",
    alternativas: [
      {
        texto: "Conversar com os estudantes para entender o que eles precisam e se comprariam essa ideia.",
        afirmacao: ["Investigou uma necessidade real antes de planejar o negócio."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Gastar toda a sua economia produzindo muitos lanches sem perguntar se alguém quer comprar.",
        afirmacao: ["Investiu sem conhecer os clientes e colocou o negócio em risco."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Você produziu sem conhecer a procura e perdeu dinheiro com produtos que ninguém pediu. Uma boa ideia precisa começar ouvindo as pessoas. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "As conversas confirmam que muitos alunos querem opções melhores para o intervalo. Como descobrir se sua ideia pode virar um negócio?",
    alternativas: [
      {
        texto: "Fazer uma pesquisa rápida sobre sabores, preços e frequência de compra entre os estudantes.",
        afirmacao: ["Pesquisou os clientes e reuniu dados para orientar a ideia."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Montar uma pequena degustação e pedir opiniões sinceras antes de vender.",
        afirmacao: ["Testou a ideia com clientes e coletou opiniões antes de investir."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Escolher o cardápio e o preço no chute, sem conversar com ninguém.",
        afirmacao: ["Tomou decisões sem conhecer os clientes nem testar a proposta."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem ouvir os clientes, você não descobriu se a oferta e o preço faziam sentido. Pesquisar antes de investir ajuda a evitar prejuízos. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Você pensa em oferecer um serviço de organização de estudos para jovens do bairro. Como garantir que a proposta resolva uma necessidade real?",
    alternativas: [
      {
        texto: "Entrevistar estudantes e responsáveis para entender suas dificuldades e rotina.",
        afirmacao: ["Conversou com o público para compreender suas necessidades."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Convidar alguns jovens para uma oficina experimental e ajustar o formato com o grupo.",
        afirmacao: ["Cocriou e testou o serviço com os jovens que pretende atender."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Definir sozinho o que os jovens precisam e lançar o serviço sem pedir opinião.",
        afirmacao: ["Ignorou o público e criou uma solução sem validar a necessidade."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A proposta não considerou as dificuldades reais dos jovens e ninguém se interessou pelo serviço. Ouvir o público é parte essencial do empreendedorismo. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Sua pesquisa mostra que os alunos querem lanches acessíveis, mas cada um prefere algo diferente. Como decidir o que oferecer primeiro?",
    alternativas: [
      {
        texto: "Comparar as respostas e escolher poucas opções que atendam à maioria dentro do seu orçamento.",
        afirmacao: ["Analisou os dados e priorizou opções viáveis para os clientes."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Voltar à pesquisa e esclarecer as respostas que ficaram confusas.",
        afirmacao: ["Revisou a pesquisa para tomar uma decisão mais informada."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Comprar ingredientes caros para um cardápio enorme sem calcular os custos.",
        afirmacao: ["Ignorou os custos e assumiu um risco financeiro desnecessário."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Os custos ficaram maiores que o dinheiro disponível e o preço final afastou os clientes. Um começo pequeno e planejado reduz o risco. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Você já escolheu um produto para testar. Como calcular um preço que cubra os gastos e continue acessível?",
    alternativas: [
      {
        texto: "Anotar os custos dos ingredientes e materiais, estimar o preço e conferir com os clientes.",
        afirmacao: ["Calculou os custos e testou um preço adequado para o público."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Começar com um lote pequeno, registrar cada gasto e ajustar o preço com os resultados.",
        afirmacao: ["Planejou um teste pequeno e acompanhou os gastos do negócio."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Cobrar qualquer valor sem calcular os gastos nem explicar o que está incluído.",
        afirmacao: ["Definiu o preço sem transparência nem controle dos custos."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem saber quanto custa produzir, você pode vender com prejuízo ou cobrar um valor injusto. Planejamento financeiro é essencial. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "O primeiro teste recebeu sugestões: os alunos querem opções vegetarianas e embalagens que gerem menos lixo. Como melhorar a oferta?",
    alternativas: [
      {
        texto: "Atualizar o cardápio e buscar embalagens adequadas sem ultrapassar o orçamento.",
        afirmacao: ["Aprimorou o produto com base nas sugestões e nos limites do negócio."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Perguntar aos clientes quais sugestões são mais importantes antes de mudar tudo.",
        afirmacao: ["Priorizou o feedback dos clientes antes de fazer mudanças."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Prometer opções que você ainda não consegue produzir e ignorar as sugestões recebidas.",
        afirmacao: ["Fez promessas sem capacidade de cumprir e ignorou os clientes."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Prometer sem conseguir entregar prejudicou a confiança dos clientes. Faça melhorias realistas e cumpra o que anuncia. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Seu produto está pronto para um novo teste. O que você organiza antes de começar a vender?",
    alternativas: [
      {
        texto: "Definir quantidade, custos, tarefas, higiene e uma forma simples de registrar as vendas.",
        afirmacao: ["Organizou a produção, os custos e as responsabilidades para começar com segurança."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Revisar o plano e confirmar se o preço cobre os gastos antes de abrir os pedidos.",
        afirmacao: ["Revisou o plano e conferiu os custos antes de vender."],
        tipo: "salto",
        proxima: 5,
      },
      {
        texto: "Começar a vender sem combinar tarefas, calcular quantidades ou verificar as regras da escola.",
        afirmacao: ["Começou sem planejamento e deixou de verificar as regras do local."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A falta de organização causou desperdício e confusão na equipe. Planeje a operação e respeite as regras antes de iniciar. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Uma ideia de serviço de reforço escolar parece promissora. Como descobrir se já existem opções parecidas e onde você pode se destacar?",
    alternativas: [
      {
        texto: "Pesquisar serviços da região e conversar com estudantes sobre o que ainda sentem falta.",
        afirmacao: ["Pesquisou o mercado e encontrou oportunidades para diferenciar o serviço."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Voltar às entrevistas para entender melhor as dificuldades de aprendizagem dos jovens.",
        afirmacao: ["Reforçou a pesquisa com o público antes de definir o serviço."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Copiar o serviço de outra pessoa e anunciar resultados que você não pode garantir.",
        afirmacao: ["Copiou concorrentes e fez promessas que não poderia cumprir."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem uma proposta própria e promessas realistas, os clientes não confiaram no serviço. Diferencie-se com honestidade. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Os clientes já conhecem sua ideia, mas ainda não sabem como fazer um pedido. Como divulgar o negócio de forma clara?",
    alternativas: [
      {
        texto: "Criar uma divulgação simples com produto, preço, horário e contato, sem exagerar nas promessas.",
        afirmacao: ["Preparou uma divulgação clara, útil e honesta para os clientes."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Mostrar o protótipo a um pequeno grupo e pedir que compartilhem opiniões com colegas.",
        afirmacao: ["Apresentou o protótipo e usou indicações para alcançar novos clientes."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Publicar anúncios confusos e inventar depoimentos para parecer mais popular.",
        afirmacao: ["Divulgou informações enganosas e colocou a confiança do negócio em risco."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A divulgação enganosa afastou os clientes e prejudicou a reputação do negócio. Transparência também faz parte de empreender. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Depois da divulgação, algumas pessoas perguntam como o produto é feito e como podem enviar sugestões. O que você faz?",
    alternativas: [
      {
        texto: "Explicar os ingredientes, o preço e os canais de contato, e responder às dúvidas com clareza.",
        afirmacao: ["Comunicou informações importantes e abriu espaço para ouvir os clientes."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Rever as perguntas recebidas e atualizar a divulgação para deixá-la mais completa.",
        afirmacao: ["Usou as dúvidas do público para melhorar a comunicação do negócio."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Ignorar as mensagens e esconder informações para evitar críticas.",
        afirmacao: ["Evitou o diálogo e deixou dúvidas importantes sem resposta."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem diálogo, os clientes perderam confiança e você deixou de receber sugestões valiosas. Responder com respeito ajuda o negócio a melhorar. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Seu projeto está pronto para ser apresentado na feira de empreendedorismo da escola. O que você prepara para mostrar que ele é viável?",
    alternativas: [
      {
        texto: "Apresentar o problema, o público, a solução, os custos e o que aprendeu com os testes.",
        afirmacao: ["Preparou uma apresentação com público, proposta e dados do teste."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Ensaiar a apresentação e revisar os números e as respostas às dúvidas mais comuns.",
        afirmacao: ["Ensaiou o pitch e conferiu os dados antes de apresentar."],
        tipo: "salto",
        proxima: 9,
      },
      {
        texto: "Inventar vendas e resultados para impressionar a banca.",
        afirmacao: ["Apresentou dados falsos e comprometeu a credibilidade do projeto."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A banca percebeu que os resultados não eram verdadeiros e deixou de confiar no projeto. Apresente os aprendizados reais, mesmo que o negócio ainda esteja começando. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    final: "vitoria",
    enunciado:
      "Você apresentou sua ideia na feira, explicou como ela atende a uma necessidade real e mostrou o que aprendeu ao testar o negócio. Sua equipe deu os primeiros passos com criatividade, planejamento e responsabilidade. Missão cumprida: você venceu!",
    alternativas: [],
  },
  {
    caminho: "B",
    final: "vitoria",
    enunciado:
      "Você apresentou seu serviço à comunidade, mostrou como ele pode ajudar outros jovens e explicou como pretende continuar aprendendo com os clientes. Sua iniciativa transformou uma ideia em uma oportunidade. Missão cumprida: você venceu!",
    alternativas: [],
  },
];