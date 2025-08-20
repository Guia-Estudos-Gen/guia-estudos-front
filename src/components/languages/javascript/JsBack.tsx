function JsBack() {
  const libframe = [
    {
      nome: "Express.js",
      tipo: "Biblioteca",
      logo: "https://img.icons8.com/color/512/express-js.png",
      descricao:
        "O site Express.js Documentation é o centro oficial para aprender, consultar e dominar este framework web minimalista para Node.js. Ele é estruturado de forma clara e acessível, com guias práticos, referências detalhadas e recursos complementares para desenvolvedores de todos os níveis.",
      link: "https://expressjs.com/",
    },
    {
      nome: "UUIDGenerator.net",
      tipo: "Biblioteca",
      logo: "https://www.herongyang.com/Free-Web-Service/UUID-GUID-Generator-API-Documentation.png",
      descricao:
        "TO site UUIDGenerator.net (Developer’s Corner – TypeScript) mostra como gerar UUIDs em projetos TypeScript usando a biblioteca uuid. Ele ensina a instalar via npm, importar a função (ex: v4) e gerar identificadores únicos em formato padrão. O conteúdo inclui exemplos práticos de código, explica que a tipagem já vem integrada e sugere o uso opcional de @types/uuid para maior segurança. É um guia rápido e direto para implementar UUIDs em aplicações TS.",
      link: "https://www.uuidgenerator.net/dev-corner/typescript",
    },
    {
      nome: "Nest JS",
      tipo: "Framework",
      logo: "https://miro.medium.com/v2/1*VTSKq5eIs3KyOyLYShI67Q.png",
      descricao:
        "O site NestJS Documentation é o centro oficial e mais completo para aprender, dominar e consultar o framework NestJS. Ele oferece uma estrutura bem organizada com guias, referências, tutoriais e ferramentas para desenvolvimento backend com Node.js usando o Nest, totalmente com suporte a TypeScript.",
      link: "https://docs.nestjs.com/",
    },
    {
      nome: "Node.js",
      tipo: "Ferramentas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
      descricao:
        "O Node.js é um ambiente de execução JavaScript de código aberto e multiplataforma que permite aos desenvolvedores criar servidores, aplicativos web, ferramentas de linha de comando e scripts. Ele utiliza o motor V8 do Google Chrome e adota um modelo de I/O assíncrono e orientado a eventos, o que o torna eficiente e adequado para aplicações em tempo real. Além disso, o Node.js possui um vasto ecossistema de módulos disponíveis por meio do npm (Node Package Manager), facilitando a construção de aplicações escaláveis e de alto desempenho.",
      link: "https://nodejs.org/pt",
    },
    {
      nome: "Vue.js",
      tipo: "Framework",
      logo: "https://www.svgrepo.com/show/303494/vue-9-logo.svg",
      descricao:
        "Vue.js é um framework progressivo de JavaScript que permite criar interfaces de usuário de forma reativa e escalável. Ele combina ideias do React e do Angular, mas com uma curva de aprendizado mais suave. Muito utilizado em aplicações web modernas, Vue é valorizado pela simplicidade, flexibilidade e por ter uma comunidade forte, especialmente no mercado asiático e europeu.",
      link: "https://nodejs.org/pt",
    },
  ];

  const extensoes = [
    {
      nome: "Auto Import",
      descricao:
        "Ajuda a importar automaticamente módulos, funções e componentes no código, evitando a necessidade de escrever manualmente os imports.",
      logo: "https://steoates.gallerycdn.vsassets.io/extensions/steoates/autoimport/1.5.4/1618500754212/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=steoates.autoimport",
    },
    {
      nome: "indent-rainbow",
      descricao:
        "Destaca diferentes níveis de indentação com cores variadas, facilitando a leitura de blocos de código aninhados e estruturas complexas.",
      logo: "https://oderwat.gallerycdn.vsassets.io/extensions/oderwat/indent-rainbow/8.3.1/1649543509070/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow",
    },
    {
      nome: "JavaScript (ES6) code snippets",
      descricao:
        "Adiciona trechos de código prontos (snippets) para JavaScript ES6, acelerando a escrita de funções, classes e outros padrões comuns.",
      logo: "data:image/jpeg;base64,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",
      link: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
    },
    {
      nome: "JavaScript and TypeScript Nightly",
      descricao:
        "Fornece suporte atualizado diariamente para JavaScript e TypeScript no VS Code, trazendo novos recursos e correções antes das versões estáveis.",
      logo: "data:image/png;base64,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",
      link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next",
    },
    {
      nome: "Prettier - Code formatter",
      descricao:
        "Extensão que formata automaticamente o código em várias linguagens, incluindo JavaScript e TypeScript, garantindo estilo consistente e legibilidade.",
      logo: "data:image/png;base64,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",
      link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    },
    {
      nome: "VsCode-icons",
      descricao:
        "O VSCode Icons é uma extensão para o Visual Studio Code que adiciona ícones personalizados a arquivos e pastas, melhorando a visualização e organização do projeto, permitindo identificar rapidamente tipos de arquivos e estruturas de pastas, e deixando o ambiente de desenvolvimento mais intuitivo e agradável visualmente.",
      logo: "data:image/png;base64,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",
      link: "https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons",
    },
    {
      nome: "Template String Converter",
      descricao:
        "Converte automaticamente aspas simples ou duplas em template strings (crase) ao usar variáveis com `${}` no código.",
      logo: "https://meganrogge.gallerycdn.vsassets.io/extensions/meganrogge/template-string-converter/0.6.1/1681403288998/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter",
    },
    {
      nome: "Bracket Pair Colorization Toggler",
      descricao:
        "O Bracket Pair Colorization Toggler é uma extensão para editores de código, como o Visual Studio Code, que destaca pares de colchetes, chaves e parênteses com cores diferentes. Ela facilita a identificação de blocos de código aninhados, tornando a leitura e depuração mais rápida e clara. A extensão permite ativar ou desativar a colorização de forma simples, melhorando a organização visual do código.",
      logo: "data:image/png;base64,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",
      link: "https://marketplace.visualstudio.com/items?itemName=dzhavat.bracket-pair-toggler",
    },
    {
      nome: "Code Runner",
      descricao:
        "O Code Runner é uma extensão para editores de código, como o Visual Studio Code, que permite executar rapidamente trechos de código em várias linguagens. Ele suporta linguagens como JavaScript, Python, C++, Java, TypeScript, entre outras, sem precisar configurar um projeto completo. É útil para testar, depurar e aprender código de forma rápida e prática.",
      logo: "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/code-runner/0.12.2/1712309175692/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",
    },
    {
      nome: "ESLint",
      descricao:
        "O ESLint é uma ferramenta de linting para JavaScript e TypeScript que identifica erros de sintaxe e padrões de código inconsistentes. Ele permite configurar regras customizadas ou usar padrões prontos para manter o código uniforme. Além de alertar sobre problemas, pode corrigir automaticamente algumas inconsistências. É muito usado em projetos com Node.js, React, Vue e TypeScript. O ESLint ajuda a garantir qualidade, legibilidade e manutenibilidade do código.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i9LKpSufX24XsZfiYJXo4oIWWZ2EyuST7w&s",
      link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    },
  ];

  return (
    <div className="w-2/3">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">Roadmap</div>
        <div className="collapse-content text-sm">
          <p className="py-6 font-bold ">
            O site roadmap.sh é uma plataforma colaborativa que oferece mapas de
            aprendizado (roadmaps) para quem quer se desenvolver na área de
            tecnologia. Ele organiza conteúdos em trilhas estruturadas para
            diferentes perfis profissionais — como desenvolvedor front-end,
            back-end, DevOps, analista de dados, engenheiro de IA, entre outros.
            Além dos roadmaps por função, o site também traz guias por
            habilidade (como React, TypeScript, SQL, Docker, etc.), artigos,
            vídeos e até quizzes para entrevistas técnicas. Você pode seguir um
            caminho sugerido ou montar o seu próprio roadmap personalizado. É
            uma ótima ferramenta para quem está começando ou quer se orientar
            melhor no mar de conteúdos da área tech. Se quiser, posso te mostrar
            um exemplo de roadmap para desenvolvedor full stack ou te ajudar a
            montar o seu. 😄💻🧭
          </p>
          <button className="btn btn-secondary">
            <a href="https://roadmap.sh/frontend" target="_blank">
              Roadmap Frontend
            </a>
          </button>
          <button className="btn btn-secondary mx-2">
            <a href="https://roadmap.sh/react" target="_blank">
              Roadmap React
            </a>
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Bibliotecas/Frameworks
        </div>
        <div className="collapse-content text-md">
          <ul className="list bg-base-100 rounded-box">
            {libframe.map((tecnologia, id) => (
              <li className="list-row" key={id}>
                <div>
                  <img
                    className="size-14 rounded-box bg-white p-2"
                    src={tecnologia.logo}
                  />
                </div>
                <div>
                  <div>{tecnologia.nome}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {tecnologia.tipo}
                  </div>
                  <div className="mt-3">{tecnologia.descricao}</div>
                  <button className="btn btn-accent p-2 mt-4">
                    <a href={tecnologia.link} target="_blank">
                      Acessar documentação
                    </a>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Extenções</div>
        <div className="collapse-content text-sm">
          Aqui estão algumas das extensões que eu utilizo no VS Códigos e que
          ajudam na hora de programar:
          <ul className="list bg-base-100 rounded-box">
            {extensoes.map((extensoes, id) => (
              <li className="list-row" key={id}>
                <div>
                  <img
                    className="size-14 rounded-box bg-white p-1"
                    src={extensoes.logo}
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold">{extensoes.nome}</div>
                  <div className="mt-3">{extensoes.descricao}</div>
                </div>
                <button className="btn btn-secondary p-2 mt-4">
                  <a href={extensoes.link} target="_blank">
                    Instalar no VSCode
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JsBack;
