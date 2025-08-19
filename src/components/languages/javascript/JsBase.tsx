import { useState } from "react";
import ChatSite from "../../ui/ChatSite";
import ChatUser from "../../ui/ChatUser";

function JsBase() {
  const [abaAtiva, setAbaAtiva] = useState("roadmap");

  // Definindo a cor do fundo da hero de acordo com a aba
  const corHero = {
    roadmap: "bg-red-800",
    cookbook: "bg-yellow-800",
    emBreve: "bg-green-800",
  };

  return (
    <div className="w-full pt-8">
      {/* Chat inicial */}
      <div id="chat" className="w-2/3 mx-auto border-2 rounded-4xl p-6">
        <ChatSite
          texto={"Em que eu posso te ajudar, meu grande?"}
          hora="03:45"
        />
        <ChatUser
          texto={"Me ensine, o que eu preciso ver denovo?"}
          hora="03:45"
        />
        <ChatSite
          texto={
            "Claro, vamos lá... aqui tem um guia rápido do que estudar em JavaScript"
          }
          hora="03:46"
        />
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Roadmap{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
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
          <p className="py-6 text-2xl font-bold">
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
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src="https://cdn.discordapp.com/attachments/1376548933559517255/1407448227984179200/tutorial-ezgif.com-video-to-gif-converter.gif?ex=68a623ce&is=68a4d24e&hm=49ffe419016996f03dd0530827d39e721dca54a32470c77972d45f48c9f11d7b&"
              className="max-w-sm rounded-lg shadow-2xl h-60 "
              alt="roadmap exemplo"
            />

            <a
              href="https://roadmap.sh"
              target="_blank"
              className="btn btn-primary "
            >
              Ir para o site
            </a>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Cookbook Generation 🚀
        </div>
        <div className="collapse-content text-sm">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://cdn.discordapp.com/attachments/1376548933559517255/1407448227984179200/tutorial-ezgif.com-video-to-gif-converter.gif?ex=68a623ce&is=68a4d24e&hm=49ffe419016996f03dd0530827d39e721dca54a32470c77972d45f48c9f11d7b&"
              className="max-w-sm rounded-lg shadow-2xl h-60"
              alt="cookbook exemplo"
            />
            <div>
              <h1 className="text-5xl font-bold">Cookbook Generation 🚀</h1>
              <p className="py-6">
                O site da Generation reúne materiais, projetos e exemplos
                práticos para apoiar o aprendizado em programação. É ótimo para
                quem está estudando e precisa de referências confiáveis,
                centralizando conteúdos úteis que ajudam a acelerar a prática e
                a absorção dos conceitos.
              </p>
              <a
                href="https://github.com/conteudoGeneration"
                target="_blank"
                className="btn btn-secondary"
              >
                Ir para o site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">w3schools</div>
        <div className="collapse-content text-sm">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://cdn.discordapp.com/attachments/1376548933559517255/1407448227984179200/tutorial-ezgif.com-video-to-gif-converter.gif?ex=68a623ce&is=68a4d24e&hm=49ffe419016996f03dd0530827d39e721dca54a32470c77972d45f48c9f11d7b&"
              className="max-w-sm rounded-lg shadow-2xl h-60"
              alt="cookbook exemplo"
            />
            <div>
              <h1 className="text-5xl font-bold">Cookbook Generation 🚀</h1>
              <p className="py-6">
                O site da Generation reúne materiais, projetos e exemplos
                práticos para apoiar o aprendizado em programação. É ótimo para
                quem está estudando e precisa de referências confiáveis,
                centralizando conteúdos úteis que ajudam a acelerar a prática e
                a absorção dos conceitos.
              </p>
              <a
                href="https://github.com/conteudoGeneration"
                target="_blank"
                className="btn btn-secondary"
              >
                Ir para o site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs com botões coloridos
      <div className="flex justify-center gap-4 mt-8">
        <button
          className={`btn ${abaAtiva === "roadmap" ? "btn-primary" : "btn-outline btn-primary"}`}
          onClick={() => setAbaAtiva("roadmap")}
        >
          Roadmap
        </button>
        <button
          className={`btn ${abaAtiva === "cookbook" ? "btn-secondary" : "btn-outline btn-secondary"}`}
          onClick={() => setAbaAtiva("cookbook")}
        >
          Cookbook Generation
        </button>
        <button
          className={`btn ${abaAtiva === "emBreve" ? "btn-accent" : "btn-outline btn-accent"}`}
          onClick={() => setAbaAtiva("emBreve")}
        >
          Em breve
        </button>
      </div> */}

      {/* Hero único, cor dinâmica
      <div className={`hero min-h-screen mt-8 mb-18 ${corHero[abaAtiva]}`}>
        {abaAtiva === "roadmap" && (
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src="https://cdn.discordapp.com/attachments/1376548933559517255/1407448227984179200/tutorial-ezgif.com-video-to-gif-converter.gif?ex=68a623ce&is=68a4d24e&hm=49ffe419016996f03dd0530827d39e721dca54a32470c77972d45f48c9f11d7b&"
              className="max-w-sm rounded-lg shadow-2xl h-60 "
              alt="roadmap exemplo"
            />
            <div>
              <h1 className="text-5xl font-bold">Roadmap JavaScript 🚀</h1>
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
                montar o seu. 😄💻🧭
              </p>
              <a
                href="https://roadmap.sh/javascript"
                target="_blank"
                className="btn btn-primary"
              >
                Ir para o site
              </a>
            </div>
          </div>
        )}

        {abaAtiva === "cookbook" && (
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://cdn.discordapp.com/attachments/1376548933559517255/1407448227984179200/tutorial-ezgif.com-video-to-gif-converter.gif?ex=68a623ce&is=68a4d24e&hm=49ffe419016996f03dd0530827d39e721dca54a32470c77972d45f48c9f11d7b&"
              className="max-w-sm rounded-lg shadow-2xl h-60"
              alt="cookbook exemplo"
            />
            <div>
              <h1 className="text-5xl font-bold">Cookbook Generation 🚀</h1>
              <p className="py-6">
                O site da Generation reúne materiais, projetos e exemplos
                práticos para apoiar o aprendizado em programação. É ótimo para
                quem está estudando e precisa de referências confiáveis,
                centralizando conteúdos úteis que ajudam a acelerar a prática e
                a absorção dos conceitos.
              </p>
              <a
                href="https://github.com/conteudoGeneration"
                target="_blank"
                className="btn btn-secondary"
              >
                Ir para o site
              </a>
            </div>
          </div>
        )}

        {abaAtiva === "emBreve" && (
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold">🔜 Em breve...</h1>
            <p className="mt-4">Novos conteúdos e materiais estão a caminho! 🚀</p>
          </div>
        )} */}
      {/* </div> */}
    </div>
  );
}

export default JsBase;
