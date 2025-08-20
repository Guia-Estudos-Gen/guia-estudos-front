
function JsBack() {

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
    <div className="w-2/3">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">Roadmap</div>
        <div className="collapse-content text-sm">
          <button className="btn btn-secondary"><a href="https://roadmap.sh/frontend" target="_blank">Roadmap Frontend</a></button>
          <button className="btn btn-secondary mx-2"><a href="https://roadmap.sh/react" target="_blank">Roadmap React</a></button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Bibliotecas/Frameworks</div>
        <div className="collapse-content text-md">
          <ul className="list bg-base-100 rounded-box">
            {libframe.map((tecnologia, id) => (
              <li className="list-row" key={id}>
                <div><img className="size-14 rounded-box bg-white p-2" src={tecnologia.logo}/></div>
                <div>
                  <div>{tecnologia.nome}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">{tecnologia.tipo}</div>
                  <div className="mt-3">{tecnologia.descricao}</div>
                  <button className="btn btn-accent p-2 mt-4"><a href={tecnologia.link} target="_blank">Acessar documentação</a></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Extenções</div>
        <div className="collapse-content text-sm">Aqui estão algumas das extensões que eu utilizo no VS Códigos e que ajudam na hora de programar:
          <ul className="list bg-base-100 rounded-box">
            {extensoes.map((extensoes, id) => (
              <li className="list-row" key={id}>
                <div><img className="size-14 rounded-box bg-white p-1" src={extensoes.logo}/></div>
                <div>
                  <div className="text-lg font-semibold">{extensoes.nome}</div>
                  <div className="mt-3">{extensoes.descricao}</div>
                </div>
                <button className="btn btn-secondary p-2 mt-4"><a href={extensoes.link} target="_blank">Instalar no VSCode</a></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JsBack