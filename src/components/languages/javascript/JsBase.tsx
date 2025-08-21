import { useState } from 'react';
import ChatSite from '../../ui/ChatSite';
import ChatUser from '../../ui/ChatUser';

function JsBase() {
  const [abaAtiva, setAbaAtiva] = useState('roadmap');

  // Definindo a cor do fundo da hero de acordo com a aba
  const corHero = {
    roadmap: 'bg-red-800',
    cookbook: 'bg-yellow-800',
    emBreve: 'bg-green-800',
  };

  return (
    <div className="max-w-2/3 pt-8">
      {/* Chat inicial */}
      <div id="chat" className="border-2 rounded-4xl p-6">
        <ChatSite
          texto={'Em que eu posso te ajudar, meu grande?'}
          hora="03:45"
        />
        <ChatUser
          texto={'Me ensine, o que eu preciso ver denovo?'}
          hora="03:45"
        />
        <ChatSite
          texto={
            'Claro, vamos lá... aqui tem um guia rápido do que estudar em JavaScript'
          }
          hora="03:46"
        />
      </div>

      <main className="my-8 space-y-2">
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
                  mapas de aprendizado (roadmaps) para quem quer se desenvolver
                  na área de tecnologia. Ele organiza conteúdos em trilhas
                  estruturadas para diferentes perfis profissionais — como
                  desenvolvedor front-end, back-end, DevOps, analista de dados,
                  engenheiro de IA, entre outros. Além dos roadmaps por função,
                  o site também traz guias por habilidade (como React,
                  TypeScript, SQL, Docker, etc.), artigos, vídeos e até quizzes
                  para entrevistas técnicas. Você pode seguir um caminho
                  sugerido ou montar o seu próprio roadmap personalizado. É uma
                  ótima ferramenta para quem está começando ou quer se orientar
                  melhor no mar de conteúdos da área tech. Se quiser, posso te
                  mostrar um exemplo de roadmap para desenvolvedor full stack ou
                  te ajudar a montar o seu. 😄💻🧭
                </p>
                <a
                  href="https://roadmap.sh"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-content">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Cookbook Generation 🚀
          </div>
          <div className="collapse-content text-sm">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://ik.imagekit.io/7lmae3nvh/Guia%20estudos/image.png?updatedAt=1755702599408"
                className="max-w-sm rounded-lg shadow-2xl h-60"
                alt="cookbook exemplo"
              />
              <div>
                <h1 className="text-5xl font-bold">Cookbook Generation</h1>
                <p className="py-6">
                  O site da Generation reúne materiais, projetos e exemplos
                  práticos para apoiar o aprendizado em programação. É ótimo
                  para quem está estudando e precisa de referências confiáveis,
                  centralizando conteúdos úteis que ajudam a acelerar a prática
                  e a absorção dos conceitos.
                </p>
                <a
                  href="https://github.com/conteudoGeneration/cookbook_javascript"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-content">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold">W3Schools</div>
          <div className="collapse-content text-sm">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://ik.imagekit.io/7lmae3nvh/Guia%20estudos/image.png?updatedAt=1755702514492"
                className="max-w-sm rounded-lg shadow-2xl h-60"
                alt="W3Schools"
              />
              <div>
                <h1 className="text-5xl font-bold">W3Schools</h1>
                <p className="py-6">
                  O site W3Schools é uma plataforma educacional online voltada
                  para o ensino de tecnologias web e programação. Ele oferece
                  tutoriais, referências e exemplos práticos sobre linguagens
                  como HTML, CSS, JavaScript, Python, SQL, PHP, Java, C++, além
                  de frameworks e bibliotecas como React, Bootstrap e Node.js. O
                  aprendizado é interativo: você pode testar códigos diretamente
                  no navegador através do editor online Try it Yourself, o que
                  facilita a prática imediata do conteúdo estudado. Além disso,
                  o site disponibiliza exercícios, quizzes e certificações
                  oficiais que podem ser adquiridas após a conclusão de cursos.
                  É uma ferramenta muito usada tanto por iniciantes que estão
                  começando na área de tecnologia quanto por profissionais que
                  buscam uma referência rápida e prática no dia a dia de
                  desenvolvimento.
                </p>
                <a
                  href="https://www.w3schools.com/js/default.asp"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-content">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            TypeScript Documentação
          </div>
          <div className="collapse-content text-sm">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://ik.imagekit.io/7lmae3nvh/Guia%20estudos/image.png?updatedAt=1755702876226"
                className="max-w-sm rounded-lg shadow-2xl h-60"
                alt="docType"
              />
              <div>
                <h1 className="text-5xl font-bold">TypeScript Documentação</h1>
                <p className="py-6">
                  O site TypeScript é o hub centralizado e oficial para aprender
                  e dominar o TypeScript, oferecendo uma documentação completa e
                  organizada que cobre desde o básico até o avançado. Ele é
                  dividido em seções cuidadosamente estruturadas — “Comece”,
                  “Manual (Handbook)”, “Referência”, “Tutoriais”, “Arquivos de
                  Declaração” e integração com a comunidade, além da ferramenta
                  interativa Playground. Tudo disponível em português, com opção
                  de personalização visual e fonte de código
                </p>
                <a
                  href="https://www.typescriptlang.org/pt/docs/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-content">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold">Comandos Git</div>
          <div className="collapse-content text-sm">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://ik.imagekit.io/7lmae3nvh/Guia%20estudos/image.png?updatedAt=1755711101055"
                className="max-w-sm rounded-lg shadow-2xl h-60"
                alt="docType"
              />
              <div>
                <h1 className="text-5xl font-bold">Comandos Git</h1>
                <p className="py-6">
                  O site Comandos Git é um guia prático e bem estruturado para
                  aprender Git do básico ao avançado. Ele oferece instruções
                  passo a passo sobre instalação (para Windows, Mac e Linux),
                  configurações iniciais, criação de repositórios, clonagem e
                  uso fundamental dos principais comandos em linha de comando.
                </p>
                <a
                  href="https://comandosgit.github.io/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JsBase;
