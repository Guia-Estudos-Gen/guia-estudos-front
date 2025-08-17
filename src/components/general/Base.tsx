import { NavLink, Outlet } from "react-router-dom"

function Base() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold font-mono uppercase text-secondary">De volta pra base</h1>
      <p className="font-semibold ">Sempre bom dar aquela voltadinha no conteúdo básico, pra entender melhor como as coisas funcionam... Escolha abaixo, a linguagem que fizer mais sentido:</p>

      <nav>
        <ul className="flex gap-8 uppercase font-bold">
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='javascript'>JavaScript</NavLink>
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='java'>Java</NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Base