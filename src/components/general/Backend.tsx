import { NavLink, Outlet } from "react-router-dom"

function Backend() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold font-mono uppercase text-secondary">Vamos começar o backend</h1>
      <p className="font-semibold ">Texto bonitinho para falar a importancia do backend e toda a sua estrutura.</p>

      <nav>
        <ul className="flex gap-8 uppercase font-bold">
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='javascript-backend'>JavaScript</NavLink>
          <NavLink className={({ isActive }: { isActive: boolean }) => `text-primary-content px-4 py-1 rounded-full ${isActive ? 'bg-accent' : 'bg-secondary'}`} to='java-backend'>Java</NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Backend