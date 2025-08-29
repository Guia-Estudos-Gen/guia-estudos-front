import { NavLink } from 'react-router-dom';
import ThemeChanger from './ThemeChanger';

function Navbar() {
  const items = [
    {
      id: 0,
      name: 'home',
      icon: '🏠',
    },
    {
      id: 1,
      name: 'base',
      icon: '📚',
    },
    {
      id: 2,
      name: 'backend',
      icon: '🖥️',
    },
    {
      id: 3,
      name: 'frontend',
      icon: '🎨',
    },
  ];

  return (
    <>
      <div className="lg:flex gap-10 py-4 justify-center items-center hidden ">
        <ul className="flex gap-10">
          {items.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/${item.name}`}
                className={({ isActive }: { isActive: boolean }) =>
                  `uppercase text-2xl font-bold hover:text-primary hover:underline underline-offset-8 hover:animate-pulse ${
                    isActive ? ' underline text-accent' : ''
                  }`
                }
              >
                {item.name} {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
        <ThemeChanger />
      </div>
      <div className="navbar bg-base-100 shadow-sm lg:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm w-screen h-screen dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
            >
              {items.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`/${item.name}`}
                    className={({ isActive }: { isActive: boolean }) =>
                      `uppercase text-2xl font-bold hover:text-primary hover:underline underline-offset-8 hover:animate-pulse ${
                        isActive ? ' underline text-accent' : ''
                      }`
                    }
                  >
                    {item.name} {item.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <ThemeChanger />
        </div>
      </div>
    </>
  );
}

export default Navbar;
