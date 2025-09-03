import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Equipe() {
  const equipe = [
    {
      id: 0,
      nome: 'Thiago Faccipieri',
      bio: 'Intrutor técnico na Generation Brazil, programador full-stack (mas que prefere o front), amante de cubo mágico e música de origem dúvidosa. Sempre inventando um projeto novo (que na maior parte das vezes, nunca ve um fim), assim como esse aqui.',
      github: 'tjfaccipieri',
      linkedin: 'https://www.linkedin.com/in/thiago-faccipieri/',
      foto: 'https://github.com/tjfaccipieri.png',
    },
    {
      id: 1408,
      nome: 'Samuel de Souza',
      bio: 'Programador Fullstack (foco em back-end), criador de novas tendencias no front',
      github: 'SamuelSRJ',
      linkedin: 'https://www.linkedin.com/in/samuelssrj/',
      foto: 'https://github.com/SamuelSRJ.png',
    },
    {
      id: 33,
      nome: 'Douglas Ferreira',
      bio: 'Desenvolvedor Full Stack e Analista de Segurança da Informação, com trajetória que une tecnologia, esportes e ensino. Ex-atleta e técnico de handebol e futebol, também atuo como professor de xadrez, estimulando estratégia e raciocínio lógico. Apaixonado por tecnologia, jogos, livros, filmes e séries, busco sempre aprender, criar e compartilhar conhecimento..',
      github: 'dgsferreira',
      linkedin:
        'https://www.linkedin.com/in/douglas-casetta-ferreira-168334241',
      foto: 'https://ik.imagekit.io/7lmae3nvh/IMG-20250209-WA0003.jpg?updatedAt=1756151385246',
    },
  ];

  return (
    <div className="space-y-2 mt-8">
      <h2 className="text-4xl font-mono font-bold text-center">
        Vamos conhecer a Equipe do Guia de Estudos Pós Programa
      </h2>
      <p className="text-center text-lg">
        Essa equipe foi formada literalmente do nada, em uma conversa totalmente
        casual, e está bem empenhada para fazer esse guia aqui funcionar bem.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {equipe.map((item) => (
          <div className="card card-side bg-secondary-content shadow-lg">
            <figure className="w-2/5">
              <img src={item.foto} alt={item.nome} />
            </figure>
            <div className="card-body w-3/5">
              <h2 className="card-title text-2xl font-bold">{item.nome}</h2>
              <p>{item.bio}</p>
              <div className="card-actions justify-end space-x-4">
                <a
                  href={`https://github.com/${item.github}`}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Github <BsGithub />
                </a>
                <a
                  href={item.linkedin}
                  className="btn btn-primary"
                  target="_blank"
                >
                  LinkedIn <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
