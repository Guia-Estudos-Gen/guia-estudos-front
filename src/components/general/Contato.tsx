import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

interface ContatoProps {
  nome: string,
  email: string,
  url: string,
  mensagem: string
}

function Contato() {

  const {register, handleSubmit} = useForm<ContatoProps>()

  const onSubmit: SubmitHandler<ContatoProps> = (data) => {
    console.log(data)
    const templateEmail = {
      from_name: data.nome,
      from_email: data.email,
      mensagem: data.mensagem,
      url: data.url
    }

    console.log(templateEmail);

    emailjs.send(import.meta.env.VITE_SERVICE_MAIL_KEY, import.meta.env.VITE_TEMPLATE_MAIL_KEY, templateEmail, {
        publicKey: import.meta.env.VITE_PUBLIC_MAIL_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // console.log(templateEmail.from_email);
        },
        (error: any) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 py-10">
      <h2 className="text-3xl font-mono font-bold text-center">
        Tem alguma dica de material interessante pra gente??{' '}
      </h2>
      <p className="text-center font-semibold max-w-3xl mt-4">
        Envia um e-mail legal pra gente, que as nossas capivaras robóticas vão
        analisar com carinho, e quem sabe, não entra no guia... Bora se ajudar.
      </p>

      <form className="w-1/2 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Digita seu nome ai:</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Nome completo"
              {...register("nome")}
            />
            <p className="label text-error">obrigatório</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Digita seu e-mail também:
            </legend>
            <input
              className="input validator w-full"
              type="email"
              required
              placeholder="Meu melhor e-mail"
              {...register("email")}
            />
            <div className="flex gap-6">
              <p className="label text-error">obrigatório</p>
              <div className="validator-hint">Enter valid email address</div>
            </div>
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Link do conteúdo?</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="URL do conteúdo indicado"
            {...register("url")}
          />
          <p className="label text-error">obrigatório</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Mensagem legal pra gente</legend>
          <textarea
            className="textarea h-24 w-full resize-none"
            placeholder="Mensagem bonita pra galera do projeto"
            {...register("mensagem")}
          ></textarea>
          <div className="label">Opicional</div>
        </fieldset>
        <button
          className="btn w-1/2 mx-auto block bg-sky-600 hover:bg-sky-800 text-slate-100"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;
