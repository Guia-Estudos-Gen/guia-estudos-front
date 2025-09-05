import { NavLink, Outlet } from "react-router-dom";

function Backend() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold font-mono uppercase text-secondary text-center">Vamos começar o backend</h1>
      <p className="font-semibold w-2/3 text-center">
        O backend é como o fígado do sistema: ninguém vê, mas se parar de
        funcionar, todo mundo descobre rapidinho. Enquanto o frontend fica
        desfilando bonito, cheio de botõezinhos coloridos e efeitos que fazem
        “uau”, é o backend que segura o rojão. Sem ele, o site não passa de uma
        maquete inútil com LED piscando.
      </p>

      <nav>
        <ul className="flex gap-8 uppercase font-bold">
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              `text-primary-content px-4 py-1 rounded-full ${
                isActive ? "bg-accent" : "bg-secondary"
              }`
            }
            to="javascript-backend"
          >
            JavaScript
          </NavLink>
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              `text-primary-content px-4 py-1 rounded-full ${
                isActive ? "bg-accent" : "bg-secondary"
              }`
            }
            to="java-backend"
          >
            Java
          </NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Backend;
