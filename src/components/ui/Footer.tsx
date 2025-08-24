import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="grid grid-cols-3 gap-4 py-2 mb-4">
      <div className="flex flex-col gap-2">
        <p className="text-center font-bold text-lg">Projeto Pós Programa ©</p>
        <span className="text-center font-semibold text-sm">{year} - Todos os direitos reservados</span>
      </div>
      <div className="flex flex-col justify-center">
        <Link to='/equipe' className="font-bold text-lg text-center hover:underline cursor-pointer">Conheça a Equipe</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to='contato' className="badge badge-outline badge-info hover:bg-info hover:text-neutral px-8 text-lg font-semibold py-4 cursor-pointer">Envie sujestão de conteúdo aqui</Link>
      </div>
    </div>
  );
}

export default Footer;
