import { NavLink } from 'react-router-dom';
import ThemeChanger from './ui/ThemeChanger';

function Navbar() {
  const items = [
    {
      id: 1,
      name: 'home',
      icon: '🏠',
    },
    {
      id: 2,
      name: 'fullstack',
      icon: '🧑‍💻',
    },
    {
      id: 3,
      name: 'backend',
      icon: '🖥️',
    },
    {
      id: 4,
      name: 'frontend',
      icon: '🎨',
    },
  ];

  return (
    <div className="flex gap-10 py-4 justify-center items-center">
      <ul className="flex gap-10">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`/${item.name}`}
              className={({ isActive }: { isActive: boolean }) =>
                `uppercase text-2xl font-bold hover:text-primary hover:underline underline-offset-8 hover:animate-pulse ${isActive ? ' underline text-primary' : ''}`
              }
            >
              {item.name} {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
      <ThemeChanger />
    </div>
  );
}

export default Navbar;
