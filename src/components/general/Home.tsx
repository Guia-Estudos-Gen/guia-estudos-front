import Modal from '../ui/Modal';

function Home() {
  return (
    <div className="p-4 container mx-auto flex flex-col gap-4 pt-10">
      <h1 className="text-4xl font-mono font-bold text-center text-error">
        Guia de Estudos Pós-Programa
      </h1>
      <p className="font-semibold text-center text-xl max-w-4xl mx-auto">
        A ideia dessa página é juntar links e materiais úteis pra quem quiser
        continuar estudando depois da jornada na Generation. Não tem regra
        nenhuma aqui: é só um guia suave, que você pode seguir inteiro, em
        partes... ou ignorar tudo e fechar essa página. 🤷‍♂️
      </p>
      <p className="text-center font-semibold max-w-5xl mx-auto">
        Esse guia vai estar sempre em evolução. Então, se tiver alguma sugestão
        de link, artigo, vídeo ou até aquele tutorial clássico de indiano no
        YouTube (sim, aquele que começa com "Hello guys, welcome to my
        channel..."), manda pra gente! A gente dá um jeito de colocar aqui.
        Afinal, conhecimento nunca é demais... diferente de bug, que sempre vem
        em dobro. 😅
      </p>
      <Modal />
    </div>
  );
}

export default Home;
