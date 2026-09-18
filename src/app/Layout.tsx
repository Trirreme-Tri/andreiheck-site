import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/blog', label: 'Blog' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/contato', label: 'Contato' },
  { to: '/admin', label: 'Admin' },
];

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
