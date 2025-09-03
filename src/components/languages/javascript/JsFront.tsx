
function JsFront() {

  const libframe = 
  [
    {
      nome: "React",
      tipo: "Biblioteca",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      descricao: "React é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário baseadas em componentes reutilizáveis. Sua principal força está na criação de aplicações dinâmicas e interativas com atualização eficiente da interface através do Virtual DOM. É hoje uma das tecnologias mais utilizadas no desenvolvimento web e serve como base para diversas ferramentas modernas, como o Next.js.",
      link: "https://react.dev/learn/installation"
    },
    {
      nome: "Tailwind CSS",
      tipo: "Biblioteca",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
      descricao: "Tailwind é um framework de CSS utilitário que permite criar interfaces modernas de forma rápida e consistente. Em vez de escrever CSS personalizado para cada estilo, você usa classes utilitárias já prontas diretamente no HTML ou JSX. Isso agiliza o processo de desenvolvimento, garante responsividade e facilita a padronização do design em projetos pequenos ou grandes.",
      link: "https://tailwindcss.com/docs/installation/using-vite"
    },
    {
      nome: "Next JS",
      tipo: "Framework",
      logo: "https://www.svgrepo.com/show/521299/next-16.svg",
      descricao: "Next.js é um framework de React que adiciona recursos avançados como renderização no servidor (SSR), geração estática de páginas (SSG), roteamento automático e otimização de performance. Ele é amplamente usado em aplicações que exigem SEO eficiente, carregamento rápido e escalabilidade, sendo uma escolha popular em e-commerces, SaaS e plataformas de conteúdo.",
      link: "https://nextjs.org/docs/app/getting-started/installation"
    },
    {
      nome: "Boostrap",
      tipo: "Framework",
      logo: "https://www.svgrepo.com/show/378490/bootstrap-fill.svg",
      descricao: "Bootstrap é um dos frameworks de CSS mais populares do mercado, focado em agilizar o desenvolvimento de interfaces responsivas e padronizadas. Ele oferece componentes prontos, como botões, modais e grids, permitindo construir layouts rapidamente. É bastante usado em projetos que priorizam produtividade e consistência visual sem muito esforço inicial de design.",
      link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/"
    },
    {
      nome: "Vue.js",
      tipo: "Framework",
      logo: "https://www.svgrepo.com/show/303494/vue-9-logo.svg",
      descricao: "Vue.js é um framework progressivo de JavaScript que permite criar interfaces de usuário de forma reativa e escalável. Ele combina ideias do React e do Angular, mas com uma curva de aprendizado mais suave. Muito utilizado em aplicações web modernas, Vue é valorizado pela simplicidade, flexibilidade e por ter uma comunidade forte, especialmente no mercado asiático e europeu.",
      link: "https://vuejs.org/guide/quick-start.html"
    }
  ]

  const extensoes =
  [
    {
      nome: "Auto Import",
      descricao: "Ajuda a importar automaticamente módulos, funções e componentes no código, evitando a necessidade de escrever manualmente os imports.",
      logo: "https://steoates.gallerycdn.vsassets.io/extensions/steoates/autoimport/1.5.4/1618500754212/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=steoates.autoimport"
    },
    {
      nome: "Auto Rename Tag",
      descricao: "Renomeia automaticamente a tag de fechamento quando você altera a tag de abertura em arquivos HTML, JSX e similares.",
      logo: "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.10/1644319230173/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
    },
    {
      nome: "Color Highlight",
      descricao: "Destaca visualmente no editor os valores de cores (hex, rgb, hsl etc.), mostrando a cor correspondente diretamente no código.",
      logo: "https://naumovs.gallerycdn.vsassets.io/extensions/naumovs/color-highlight/2.8.0/1710416778913/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
    },
    {
      nome: "ES7+ React/Redux/React-Native snippets",
      descricao: "Fornece atalhos de código (snippets) para acelerar a escrita de componentes, hooks e estruturas comuns em React, Redux e React Native.",
      logo: "https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/4.4.3/1645189962576/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
    },
    {
      nome: "Image preview",
      descricao: "Exibe pré-visualizações de imagens diretamente no código quando você passa o mouse sobre o caminho do arquivo.",
      logo: "https://kisstkondoros.gallerycdn.vsassets.io/extensions/kisstkondoros/vscode-gutter-preview/0.32.2/1732997211540/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
    },
    {
      nome: "Tailwind CSS IntelliSense",
      descricao: "Adiciona autocompletar, realce de sintaxe e dicas para classes do Tailwind CSS, tornando o desenvolvimento mais rápido e confiável.",
      logo: "https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.14.26/1754073884108/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
    },
    {
      nome: "Template String Converter",
      descricao: "Converte automaticamente aspas simples ou duplas em template strings (crase) ao usar variáveis com `${}` no código.",
      logo: "https://meganrogge.gallerycdn.vsassets.io/extensions/meganrogge/template-string-converter/0.6.1/1681403288998/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter"
    }
  ]

  return (
    <main className="max-w-2/3 space-y-2">
      <div className="collapse collapse-arrow bg-base-100 border border-base-content">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold flex items-center gap-2">
          <span>Roadmap</span>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 283 283"
            fill="#000"
          >
            <path
              fill="#fff"
              d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z"
            ></path>
            <path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z"></path>
          </svg>
        </div>
        <div className="collapse-content text-sm">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* link novo do imagekit aqui */}
            <img
              src="https://ik.imagekit.io/7lmae3nvh/tutorial-ezgif.com-video-to-gif-converter.gif?updatedAt=1755796111047"
              className="max-w-sm rounded-lg shadow-2xl h-60 "
              alt="roadmap exemplo"
            />
            <div>
              <h1 className="text-5xl font-bold">Roadmap 🚀</h1>
              <p className="py-6">
                O site roadmap.sh é uma plataforma colaborativa que oferece
                mapas de aprendizado (roadmaps) para quem quer se desenvolver na
                área de tecnologia. Ele organiza conteúdos em trilhas
                estruturadas para diferentes perfis profissionais — como
                desenvolvedor front-end, back-end, DevOps, analista de dados,
                engenheiro de IA, entre outros. Além dos roadmaps por função, o
                site também traz guias por habilidade (como React, TypeScript,
                SQL, Docker, etc.), artigos, vídeos e até quizzes para
                entrevistas técnicas. Você pode seguir um caminho sugerido ou
                montar o seu próprio roadmap personalizado. É uma ótima
                ferramenta para quem está começando ou quer se orientar melhor
                no mar de conteúdos da área tech. Se quiser, posso te mostrar um
                exemplo de roadmap para desenvolvedor full stack ou te ajudar a
                montar o seu. 
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
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-content">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Bibliotecas/Frameworks</div>
        <div className="collapse-content text-md">
          <ul className="list bg-base-100 rounded-box">
            {libframe.map((tecnologia, id) => (
              <li className="list-row items-center" key={id}>
                <div><img className="size-14 rounded-box bg-white p-2" src={tecnologia.logo}/></div>
                <div>
                  <div>{tecnologia.nome}</div>
                  <p className="text-xs uppercase font-semibold opacity-60">{tecnologia.tipo}</p>
                  <p className="mt-3">{tecnologia.descricao}</p>
                </div>
                <button className="btn btn-secondary p-2 mt-4"><a href={tecnologia.link} target="_blank">Acessar documentação</a></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-content">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Extenções</div>
        <div className="collapse-content text-sm">Aqui estão algumas das extensões que eu utilizo no VS Códigos e que ajudam na hora de programar:
          <ul className="list bg-base-100 rounded-box">
            {extensoes.map((extensoes, id) => (
              <li className="list-row" key={id}>
                <div><img className="size-14 rounded-box bg-white p-1" src={extensoes.logo}/></div>
                <div>
                  <p className="text-lg font-semibold">{extensoes.nome}</p>
                  <p className="mt-3">{extensoes.descricao}</p>
                </div>
                <button className="btn btn-secondary p-2 mt-4"><a href={extensoes.link} target="_blank">Instalar no VSCode</a></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default JsFront