import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const routes = [
  { path: '/', heading: 'Home' },
  { path: '/portfolio', heading: 'Portfólio' },
  { path: '/servicos', heading: 'Serviços' },
  { path: '/sobre', heading: 'Sobre' },
  { path: '/blog', heading: 'Blog' },
  { path: '/agenda', heading: 'Agenda' },
  { path: '/contato', heading: 'Contato' },
  { path: '/admin', heading: 'Admin' },
];

describe('AppRoutes', () => {
  it.each(routes)('shows the $heading page at $path', ({ path, heading }) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  });

  it('shows the blog post page for /blog/:slug', () => {
    render(
      <MemoryRouter initialEntries={['/blog/exemplo']}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Post: exemplo' }),
    ).toBeInTheDocument();
  });

  it('shows the 404 page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/rota-que-nao-existe']}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Página não encontrada' }),
    ).toBeInTheDocument();
  });
});
