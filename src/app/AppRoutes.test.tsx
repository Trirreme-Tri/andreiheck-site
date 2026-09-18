import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { perfil } from '../content/profile';
import { posts } from '../content/posts';
import { AppRoutes } from './AppRoutes';

const routes = [
  { path: '/', heading: perfil.fraseImpacto },
  { path: '/portfolio', heading: 'Portfólio' },
  { path: '/servicos', heading: 'Serviços' },
  { path: '/sobre', heading: `Sobre ${perfil.nome}` },
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

  it('shows the matching post for /blog/:slug', () => {
    const [primeiroPost] = posts;
    render(
      <MemoryRouter initialEntries={[`/blog/${primeiroPost.slug}`]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: primeiroPost.titulo }),
    ).toBeInTheDocument();
  });

  it('shows a not-found message for an unknown blog slug', () => {
    render(
      <MemoryRouter initialEntries={['/blog/nao-existe']}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Post não encontrado' }),
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
