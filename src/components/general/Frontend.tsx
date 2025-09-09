import { NavLink, Outlet } from "react-router-dom"

function Frontend() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold font-mono uppercase text-secondary text-center">Vamos começar os fru fru</h1>
      <div className="w-2/3">
        <p className="font-semibold text-center">O Frontend é a parte da aplicação que o usuário vê e interage. É como a vitrine de uma loja: os botões, cores, menus, animações e tudo aquilo que faz você pensar “uau, esse site é bonito!” ou “nossa, esse botão não faz nada… que raiva!”.
Aprender Frontend é essencial porque é onde você transforma ideias em experiência real para o usuário. Além disso, é onde a mágica do design encontra a lógica da programação. No bootcamp vocês aprenderam um pouco sobre algumas coisas e aqui vão encontrar dicas para se aprofundar</p>
      </div>

      <nav>
        <ul className="flex gap-8 uppercase font-bold">
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='javascript-frontend'>JavaScript</NavLink>
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='java-frontend'>Java</NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Frontend